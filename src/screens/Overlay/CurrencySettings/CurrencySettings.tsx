/**
 * Currency Settings Overlay
 */
import { has, get, find } from 'lodash';
import BigNumber from 'bignumber.js';

import React, { Component } from 'react';
import { View, Animated, Text, Image, Alert, InteractionManager } from 'react-native';
import { OptionsModalPresentationStyle, OptionsModalTransitionStyle } from 'react-native-navigation';

import { TrustLineSchema, AccountSchema } from '@store/schemas/latest';

import { TrustSet, Payment } from '@common/libs/ledger/transactions';
import { txFlags } from '@common/libs/ledger/parser/common/flags/txFlags';
import Flag from '@common/libs/ledger/parser/common/flag';

import { NormalizeCurrencyCode } from '@common/utils/amount';

import { Prompt } from '@common/helpers/interface';
import { Navigator } from '@common/helpers/navigator';

import { AppScreens } from '@common/constants';

import LedgerService from '@services/LedgerService';

// components
import { Button, Spacer, RaisedButton, AmountText } from '@components/General';

import Localize from '@locale';

// style
import { AppStyles } from '@theme';
import styles from './styles';

/* types ==================================================================== */
export interface Props {
    account: AccountSchema;
    trustLine: TrustLineSchema;
}

export interface State {
    isLoading: boolean;
    latestLineBalance: number;
    canRemove: boolean;
    isNFT: boolean;
}
/* Component ==================================================================== */
class CurrencySettingsModal extends Component<Props, State> {
    static screenName = AppScreens.Overlay.CurrencySettings;
    private animatedColor: Animated.Value;
    private animatedOpacity: Animated.Value;

    static options() {
        return {
            topBar: {
                visible: false,
            },
        };
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            isLoading: false,
            latestLineBalance: 0,
            canRemove: false,
            isNFT: props.trustLine.isNFT,
        };

        this.animatedColor = new Animated.Value(0);
        this.animatedOpacity = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this.animatedColor, {
                toValue: 150,
                duration: 350,
                useNativeDriver: false,
            }),
            Animated.timing(this.animatedOpacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start();

        this.getLatestLineBalance();
    }

    dismiss = () => {
        return new Promise<void>((resolve) => {
            Animated.parallel([
                Animated.timing(this.animatedColor, {
                    toValue: 0,
                    duration: 350,
                    useNativeDriver: false,
                }),
                Animated.timing(this.animatedOpacity, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start(async () => {
                await Navigator.dismissOverlay();
                return resolve();
            });
        });
    };

    getLatestLineBalance = (): Promise<void> => {
        const { account, trustLine } = this.props;

        // ignore obligation lines
        if (trustLine.obligation) return Promise.resolve();

        return new Promise((resolve) => {
            return LedgerService.getAccountLines(account.address)
                .then((accountLines: any) => {
                    const { lines } = accountLines;

                    const line = find(lines, {
                        account: trustLine.currency.issuer,
                        currency: trustLine.currency.currency,
                    });

                    if (line) {
                        const balance = new BigNumber(line.balance);

                        this.setState(
                            {
                                latestLineBalance: balance.toNumber(),
                                canRemove: balance.isLessThan(0.000000001),
                            },
                            resolve,
                        );
                    } else {
                        resolve();
                    }
                })
                .catch(() => {
                    return resolve();
                });
        });
    };

    clearDustAmounts = async () => {
        const { latestLineBalance } = this.state;
        const { trustLine, account } = this.props;

        try {
            this.setState({
                isLoading: true,
            });

            const payment = new Payment();

            payment.Destination = {
                address: trustLine.currency.issuer,
                tag: 0,
            };

            payment.Account = {
                address: account.address,
            };

            // @ts-ignore
            payment.Amount = {
                currency: trustLine.currency.currency,
                issuer: trustLine.currency.issuer,
                // @ts-ignore
                value: latestLineBalance,
            };

            // check for transfer fee
            // add PartialPayment flag
            const issuerAccountInfo = await LedgerService.getAccountInfo(payment.Amount.issuer);
            // eslint-disable-next-line max-len
            if (has(issuerAccountInfo, ['account_data', 'TransferRate']) || account.address === payment.Amount.issuer) {
                payment.Flags = [txFlags.Payment.PartialPayment];
            }

            // sign & submit the partial payment to clear dust balance
            await payment.submit(account).then(async (submitResult) => {
                if (submitResult.success) {
                    await payment.verify().then((verifyResult) => {
                        if (verifyResult.success) {
                            Prompt(
                                Localize.t('global.success'),
                                Localize.t('asset.dustAmountRemovedYouCanRemoveTrustLineNow'),
                                [
                                    { text: Localize.t('global.cancel') },
                                    {
                                        text: Localize.t('global.continue'),
                                        onPress: () => {
                                            this.getLatestLineBalance().then(this.removeTrustLine);
                                        },
                                        style: 'destructive',
                                    },
                                ],
                                { type: 'default' },
                            );
                        } else {
                            throw new Error('Submit was not successful');
                        }
                    });
                } else {
                    throw new Error('Submit was not successful');
                }
            });
        } catch (e) {
            Alert.alert(Localize.t('global.error'), Localize.t('asset.failedRemove'));
        } finally {
            this.setState({
                isLoading: false,
            });
        }
    };

    checkForIssuerState = () => {
        const { trustLine } = this.props;

        return new Promise<void>((resolve, reject) => {
            LedgerService.getAccountInfo(trustLine.currency.issuer)
                .then((issuerAccountInfo: any) => {
                    const issuerFlags = new Flag(
                        'Account',
                        get(issuerAccountInfo, ['account_data', 'Flags'], 0),
                    ).parse();

                    if (
                        trustLine.limit_peer > 0 ||
                        (!trustLine.no_ripple_peer && !issuerFlags.defaultRipple) ||
                        (trustLine.no_ripple_peer && issuerFlags.defaultRipple)
                    ) {
                        return reject();
                    }

                    return resolve();
                })
                .catch(() => {
                    return reject();
                });
        });
    };

    removeTrustLine = async () => {
        const { trustLine, account } = this.props;
        const { latestLineBalance } = this.state;

        try {
            // there is dust balance in the account
            if (latestLineBalance !== 0) {
                Prompt(
                    Localize.t('global.warning'),
                    Localize.t('asset.trustLineDustRemoveWarning', {
                        balance: new BigNumber(latestLineBalance).toFixed(),
                        currency: NormalizeCurrencyCode(trustLine.currency.currency),
                    }),
                    [
                        { text: Localize.t('global.cancel') },
                        {
                            text: Localize.t('global.continue'),
                            onPress: this.clearDustAmounts,
                            style: 'destructive',
                        },
                    ],
                    { type: 'default' },
                );
                return;
            }

            this.setState({
                isLoading: true,
            });

            // parse account flags
            const accountFlags = new Flag('Account', account.flags).parse();

            let transactionFlags = 2097152; // tfClearFreeze

            // If the (own) account DOES HAVE the defaultRipple flag,
            //  CLEAR the noRipple flag on the Trust Line, so set: tfClearNoRipple
            if (accountFlags.defaultRipple) {
                transactionFlags |= 262144;
            } else {
                // If the (own) account DOES NOT HAVE the defaultRipple flag SET the tfSetNoRipple flag
                transactionFlags |= 131072; // tfClearNoRipple
            }

            const clearTrustline = new TrustSet({
                transaction: {
                    Account: account.address,
                    LimitAmount: {
                        currency: trustLine.currency.currency,
                        issuer: trustLine.currency.issuer,
                        value: 0,
                    },
                    Flags: transactionFlags,
                },
            });

            await clearTrustline.sign(account);

            // sign and submit
            const submitResult = await clearTrustline.submit();

            if (submitResult.success) {
                const verifyResult = await clearTrustline.verify();

                if (verifyResult.success) {
                    InteractionManager.runAfterInteractions(() => {
                        Alert.alert(Localize.t('global.success'), Localize.t('asset.successRemoved'));
                    });
                } else {
                    InteractionManager.runAfterInteractions(() => {
                        Alert.alert(Localize.t('global.error'), Localize.t('asset.failedRemove'));
                    });
                }
            } else {
                InteractionManager.runAfterInteractions(() => {
                    Alert.alert(Localize.t('global.error'), Localize.t('asset.failedRemove'));
                });
            }

            this.dismiss();
        } catch (e) {
            if (e) {
                InteractionManager.runAfterInteractions(() => {
                    Alert.alert(Localize.t('global.error'), e.message);
                });
            }
        } finally {
            this.setState({
                isLoading: false,
            });
        }
    };

    onRemovePress = async () => {
        this.setState({
            isLoading: true,
        });

        try {
            await this.checkForIssuerState().finally(() => {
                this.setState({
                    isLoading: false,
                });
            });
        } catch {
            Alert.alert(Localize.t('global.error'), Localize.t('asset.unableToRemoveAssetNotInDefaultState'));
            return;
        }

        Prompt(
            Localize.t('global.warning'),
            Localize.t('account.removeTrustLineWarning'),
            [
                { text: Localize.t('global.cancel') },
                {
                    text: Localize.t('global.doIt'),

                    onPress: this.removeTrustLine,
                    style: 'destructive',
                },
            ],
            { type: 'default' },
        );
    };

    showExchangeScreen = () => {
        const { trustLine } = this.props;

        this.dismiss().then(() => {
            Navigator.push(AppScreens.Transaction.Exchange, {}, { trustLine });
        });
    };

    showNFTInfo = () => {
        const { trustLine, account } = this.props;

        this.dismiss().then(() => {
            Navigator.showModal(
                AppScreens.Modal.XAppBrowser,
                {
                    modalTransitionStyle: OptionsModalTransitionStyle.coverVertical,
                    modalPresentationStyle: OptionsModalPresentationStyle.fullScreen,
                },
                {
                    identifier: 'xumm.nft-info',
                    account,
                    params: {
                        issuer: trustLine.currency.issuer,
                        token: trustLine.currency.currency,
                    },
                },
            );
        });
    };

    canSend = () => {
        const { trustLine } = this.props;
        return trustLine.isNFT || trustLine.balance > 0.0000009 || trustLine.obligation;
    };

    canExchange = () => {
        const { trustLine } = this.props;
        return !trustLine.obligation;
    };

    render() {
        const { trustLine } = this.props;
        const { isLoading, canRemove, isNFT } = this.state;

        const interpolateColor = this.animatedColor.interpolate({
            inputRange: [0, 150],
            outputRange: ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'],
        });

        return (
            <Animated.View style={[styles.container, { backgroundColor: interpolateColor }]}>
                <Animated.View style={[styles.visibleContent, { opacity: this.animatedOpacity }]}>
                    <View style={styles.headerContainer}>
                        <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
                            <Text style={[AppStyles.p, AppStyles.bold]}>{Localize.t('global.asset')}</Text>
                        </View>
                        <View style={[AppStyles.row, AppStyles.flex1, AppStyles.flexEnd]}>
                            <Button label={Localize.t('global.cancel')} roundedSmall secondary onPress={this.dismiss} />
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <View style={[styles.currencyItem]}>
                            <View style={[AppStyles.row, AppStyles.centerAligned]}>
                                <View style={[styles.brandAvatarContainer]}>
                                    <Image
                                        style={[styles.brandAvatar]}
                                        source={{ uri: trustLine.counterParty.avatar }}
                                    />
                                </View>
                                <View style={[AppStyles.column, AppStyles.centerContent]}>
                                    <Text style={[styles.currencyItemLabelSmall]}>
                                        {trustLine.currency.name
                                            ? trustLine.currency.name
                                            : NormalizeCurrencyCode(trustLine.currency.currency)}
                                    </Text>
                                    <Text style={[styles.issuerLabel]}>
                                        {trustLine.counterParty.name}{' '}
                                        {trustLine.currency.name
                                            ? NormalizeCurrencyCode(trustLine.currency.currency)
                                            : ''}
                                    </Text>
                                </View>
                            </View>
                            <View style={[AppStyles.flex4, AppStyles.row, AppStyles.centerAligned, AppStyles.flexEnd]}>
                                {trustLine.currency.avatar && (
                                    <Image style={styles.currencyAvatar} source={{ uri: trustLine.currency.avatar }} />
                                )}
                                <AmountText value={trustLine.balance} style={[AppStyles.pbold, AppStyles.monoBold]} />
                            </View>
                        </View>

                        <Spacer />
                        <View style={[styles.buttonRow]}>
                            <RaisedButton
                                isDisabled={!this.canSend()}
                                style={styles.sendButton}
                                icon="IconCornerLeftUp"
                                iconSize={20}
                                iconStyle={[styles.sendButtonIcon]}
                                label={Localize.t('global.send')}
                                textStyle={[styles.sendButtonText]}
                                onPress={() => {
                                    this.dismiss();
                                    Navigator.push(AppScreens.Transaction.Payment, {}, { currency: trustLine });
                                }}
                            />
                            {isNFT ? (
                                <RaisedButton
                                    style={styles.infoButton}
                                    icon="IconInfo"
                                    iconSize={20}
                                    iconStyle={[styles.infoButtonIcon]}
                                    iconPosition="right"
                                    label={Localize.t('global.about')}
                                    textStyle={[styles.infoButtonText]}
                                    onPress={this.showNFTInfo}
                                />
                            ) : (
                                <RaisedButton
                                    isDisabled={!this.canExchange()}
                                    style={styles.exchangeButton}
                                    icon="IconCornerRightUp"
                                    iconSize={20}
                                    iconStyle={[styles.exchangeButtonIcon]}
                                    iconPosition="right"
                                    label={Localize.t('global.exchange')}
                                    textStyle={[styles.exchangeButtonText]}
                                    onPress={this.showExchangeScreen}
                                />
                            )}
                        </View>

                        <Spacer size={20} />

                        <RaisedButton
                            loadingIndicatorStyle="dark"
                            isLoading={isLoading}
                            isDisabled={!canRemove}
                            icon="IconTrash"
                            iconSize={20}
                            iconStyle={[styles.removeButtonIcon]}
                            label={Localize.t('global.remove')}
                            textStyle={[styles.removeButtonText]}
                            onPress={this.onRemovePress}
                        />
                    </View>
                </Animated.View>
            </Animated.View>
        );
    }
}

/* Export Component ==================================================================== */
export default CurrencySettingsModal;
