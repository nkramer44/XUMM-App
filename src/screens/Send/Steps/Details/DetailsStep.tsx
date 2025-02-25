/* eslint-disable react-native/no-inline-styles */

/**
 * Send Payment Details/Step
 */

import { filter } from 'lodash';
import BigNumber from 'bignumber.js';
import React, { Component } from 'react';
import { View, Image, Text, Alert, InteractionManager } from 'react-native';

import { AccountSchema, TrustLineSchema } from '@store/schemas/latest';

import { BackendService } from '@services';

import { Images } from '@common/helpers/images';
import { Prompt, Toast } from '@common/helpers/interface';

import { NormalizeCurrencyCode, XRPLValueToNFT } from '@common/utils/amount';

// components
import { Button, AccordionPicker, KeyboardAwareScrollView, AmountInput, AmountText, Footer } from '@components/General';
import { AccountPicker } from '@components/Modules';

import Localize from '@locale';

// style
import { AppStyles, AppColors } from '@theme';
import styles from './styles';

import { StepsContext } from '../../Context';
/* Types  ==================================================================== */
interface Props {}

interface State {
    currencyRate: any;
    amountRate: string;
}

/* Component ==================================================================== */
class DetailsStep extends Component<Props, State> {
    amountInput: React.RefObject<typeof AmountInput | null>;
    amountRateInput: React.RefObject<typeof AmountInput | null>;

    static contextType = StepsContext;
    context: React.ContextType<typeof StepsContext>;

    constructor(props: undefined) {
        super(props);

        this.state = {
            currencyRate: undefined,
            amountRate: '',
        };

        this.amountInput = React.createRef();
        this.amountRateInput = React.createRef();
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(this.fetchCurrencyRate);
    }

    fetchCurrencyRate = () => {
        const { coreSettings } = this.context;

        const { currency } = coreSettings;

        BackendService.getCurrencyRate(currency)
            .then((r) => {
                this.setState(
                    {
                        currencyRate: r,
                    },
                    this.onUpdateRate,
                );
            })
            .catch(() => {
                Toast(Localize.t('global.unableToFetchCurrencyRate'));
            });
    };

    goNext = () => {
        const { goNext, currency, source, amount, setAmount } = this.context;

        const bAmount = new BigNumber(amount);

        // check if account is activated
        if (source.balance === 0) {
            Alert.alert(Localize.t('global.error'), Localize.t('account.accountIsNotActivated'));
            return;
        }

        // check for exceed amount

        // if IOU and obligation can send unlimited
        if (typeof currency !== 'string' && currency.obligation) {
            // last set amount parsed by bignumber
            setAmount(bAmount.toString(10));
            // go to next screen
            goNext();
            return;
        }

        // @ts-ignore
        const availableBalance = new BigNumber(this.getAvailableBalance()).toNumber();

        // check if amount is bigger than what user can spend
        if (bAmount.toNumber() > availableBalance) {
            Prompt(
                Localize.t('global.error'),
                Localize.t('send.theMaxAmountYouCanSendIs', {
                    spendable: Localize.formatNumber(availableBalance),
                    currency: this.getCurrencyName(),
                }),
                [
                    { text: Localize.t('global.cancel') },
                    {
                        text: Localize.t('global.update'),
                        onPress: () => {
                            this.onAmountChange(availableBalance.toString());
                        },
                    },
                ],
                { type: 'default' },
            );
            return;
        }

        // last set amount parsed by bignumber
        setAmount(bAmount.toString(10));

        // go to next screen
        goNext();
    };

    getCurrencyName = (): string => {
        const { currency } = this.context;

        // XRP
        if (typeof currency === 'string') {
            return 'XRP';
        }

        return NormalizeCurrencyCode(currency.currency.currency);
    };

    getAvailableBalance = () => {
        const { currency, source, sendingNFT } = this.context;

        let availableBalance;

        // XRP
        if (typeof currency === 'string') {
            availableBalance = source.availableBalance;
        } else if (sendingNFT) {
            availableBalance = XRPLValueToNFT(currency.balance);
        } else {
            availableBalance = currency.balance;
        }

        return availableBalance;
    };

    onUpdateRate = () => {
        const { currencyRate } = this.state;
        const { amount } = this.context;

        if (amount && currencyRate) {
            const inRate = new BigNumber(amount).multipliedBy(currencyRate.lastRate).decimalPlaces(8).toFixed();
            this.setState({
                amountRate: inRate,
            });
        }
    };

    onAmountChange = (amount: string) => {
        const { currencyRate } = this.state;
        const { setAmount } = this.context;

        setAmount(amount);

        if (!amount) {
            this.setState({
                amountRate: '',
            });

            return;
        }

        if (currencyRate) {
            const inRate = new BigNumber(amount).multipliedBy(currencyRate.lastRate).decimalPlaces(8).toFixed();
            this.setState({
                amountRate: inRate,
            });
        }
    };

    onRateAmountChange = (amount: string) => {
        const { setAmount } = this.context;
        const { currencyRate } = this.state;

        this.setState({
            amountRate: amount,
        });

        if (!amount) {
            setAmount('');
            return;
        }

        if (currencyRate) {
            const inXRP = new BigNumber(amount).dividedBy(currencyRate.lastRate).decimalPlaces(6).toFixed();
            setAmount(String(inXRP));
        }
    };

    onAccountChange = (item: AccountSchema) => {
        const { setSource, setCurrency } = this.context;

        // restore currency to default XRP
        setCurrency('XRP');

        // set new source
        setSource(item);
    };

    onCurrencyChange = (item: TrustLineSchema) => {
        const { setCurrency } = this.context;

        // xrp
        if (typeof item === 'string') {
            setCurrency('XRP');
        } else {
            setCurrency(item);
        }
    };

    calcKeyboardAwareExtraOffset = (input: any, inputHeight: number) => {
        const { currency } = this.context;

        if (input === this.amountInput.current && typeof currency === 'string') {
            return inputHeight;
        }
        return 0;
    };

    renderCurrencyItem = (item: any, selected: boolean) => {
        const { source } = this.context;
        // XRP
        if (typeof item === 'string') {
            return (
                <View style={[styles.pickerItemCurrency]}>
                    <View style={[AppStyles.row, AppStyles.centerAligned]}>
                        {/* <View style={[styles.xrpAvatarContainer]}> */}
                        <View style={[styles.currencyImageContainer]}>
                            <Image style={[styles.currencyImageIcon]} source={Images.IconXrpNew} />
                        </View>
                        <View style={[AppStyles.column, AppStyles.centerContent]}>
                            <Text style={[styles.currencyItemLabel, selected && styles.currencyItemLabelSelected]}>
                                XRP
                            </Text>
                            <Text
                                style={[styles.currencyBalance, selected ? AppStyles.colorBlue : AppStyles.colorGrey]}
                            >
                                {Localize.t('global.available')}: {Localize.formatNumber(source.availableBalance)}
                            </Text>
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={[styles.pickerItemCurrency]}>
                <View style={[AppStyles.row, AppStyles.centerAligned]}>
                    <View style={[styles.currencyImageContainer]}>
                        <Image style={[styles.currencyImageIcon]} source={{ uri: item.counterParty.avatar }} />
                    </View>
                    <View style={[AppStyles.column, AppStyles.centerContent]}>
                        <Text style={[styles.currencyItemLabel, selected && styles.currencyItemLabelSelected]}>
                            {NormalizeCurrencyCode(item.currency.currency)}

                            {item.currency.name && <Text style={[AppStyles.subtext]}> - {item.currency.name}</Text>}
                        </Text>

                        <AmountText
                            prefix={`${Localize.t('global.balance')}: `}
                            style={[styles.currencyBalance, selected ? AppStyles.colorBlue : AppStyles.colorGrey]}
                            value={item.balance}
                        />
                    </View>
                </View>
            </View>
        );
    };

    render() {
        const { amountRate, currencyRate } = this.state;
        const { goBack, accounts, source, currency, amount, sendingNFT, coreSettings } = this.context;

        return (
            <View testID="send-details-view" style={[styles.container]}>
                <KeyboardAwareScrollView
                    style={[AppStyles.flex1, AppStyles.stretchSelf]}
                    calculateExtraOffset={this.calcKeyboardAwareExtraOffset}
                >
                    {/* Source Account */}
                    <View style={[styles.rowItem]}>
                        <View style={[styles.rowTitle]}>
                            <Text style={[AppStyles.subtext, AppStyles.bold, AppStyles.colorGrey]}>
                                {Localize.t('global.from')}
                            </Text>
                        </View>
                        <AccountPicker onSelect={this.onAccountChange} accounts={accounts} selectedItem={source} />
                    </View>
                    {/* Currency */}
                    <View style={[styles.rowItem]}>
                        <View style={[styles.rowTitle]}>
                            <Text style={[AppStyles.subtext, AppStyles.bold, AppStyles.colorGrey]}>
                                {Localize.t('global.asset')}
                            </Text>
                        </View>
                        <AccordionPicker
                            onSelect={this.onCurrencyChange}
                            items={
                                source
                                    ? ['XRP', ...filter(source.lines, (l) => l.balance > 0 || l.obligation === true)]
                                    : []
                            }
                            renderItem={this.renderCurrencyItem}
                            selectedItem={currency}
                            keyExtractor={(i) => (typeof i === 'string' ? i : i.currency.id)}
                        />
                    </View>

                    {/* Amount */}
                    <View style={[styles.rowItem]}>
                        <View style={[styles.rowTitle]}>
                            <Text style={[AppStyles.subtext, AppStyles.bold, AppStyles.colorGrey]}>
                                {Localize.t('global.amount')}
                            </Text>
                        </View>
                        <View style={[styles.amountContainer]}>
                            <View style={AppStyles.flex1}>
                                <AmountInput
                                    ref={this.amountInput}
                                    fractional={!sendingNFT}
                                    decimalPlaces={typeof currency === 'string' ? 6 : 8}
                                    testID="amount-input"
                                    onChange={this.onAmountChange}
                                    returnKeyType="done"
                                    style={[styles.amountInput]}
                                    placeholderTextColor={AppColors.grey}
                                    value={amount}
                                />
                            </View>
                            <Button
                                onPress={() => {
                                    this.amountInput.current.focus();
                                }}
                                style={styles.editButton}
                                roundedSmall
                                iconSize={15}
                                iconStyle={AppStyles.imgColorGreyDark}
                                light
                                icon="IconEdit"
                            />
                        </View>
                        {/* only show rate for XRP payments */}
                        {typeof currency === 'string' && (
                            <View style={[styles.amountRateContainer]}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[styles.amountRateInput]}>~ </Text>
                                </View>
                                <View style={AppStyles.flex1}>
                                    <AmountInput
                                        ref={this.amountRateInput}
                                        editable={!!currencyRate}
                                        testID="amount-rate-input"
                                        onChange={this.onRateAmountChange}
                                        returnKeyType="done"
                                        style={[styles.amountRateInput]}
                                        placeholderTextColor={AppColors.grey}
                                        value={amountRate}
                                    />
                                </View>
                                <View style={styles.currencySymbolTextContainer}>
                                    <Text style={[styles.currencySymbolText]}>{coreSettings.currency}</Text>
                                </View>
                            </View>
                        )}
                    </View>
                </KeyboardAwareScrollView>

                {/* Bottom Bar */}
                <Footer style={[AppStyles.row]} safeArea>
                    <View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
                        <Button
                            testID="back-button"
                            light
                            label={Localize.t('global.back')}
                            icon="IconChevronLeft"
                            onPress={goBack}
                        />
                    </View>
                    <View style={[AppStyles.flex2]}>
                        <Button
                            testID="next-button"
                            textStyle={AppStyles.strong}
                            isDisabled={!amount || parseFloat(amount) === 0}
                            label={Localize.t('global.next')}
                            icon="IconChevronRight"
                            iconPosition="right"
                            iconStyle={AppStyles.imgColorWhite}
                            onPress={this.goNext}
                        />
                    </View>
                </Footer>
            </View>
        );
    }
}

/* Export Component ==================================================================== */
export default DetailsStep;
