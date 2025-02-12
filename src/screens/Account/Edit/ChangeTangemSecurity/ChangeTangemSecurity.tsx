/* eslint-disable react/jsx-no-bind */
/**
 * Tangem card security method change
 */

import React, { Component } from 'react';
import { View } from 'react-native';

import RNTangemSdk, { Card } from 'tangem-sdk-react-native';

import { AppScreens } from '@common/constants';

import { Navigator } from '@common/helpers/navigator';
import { Prompt } from '@common/helpers/interface';

import { AccountRepository } from '@store/repositories';
import { AccountSchema } from '@store/schemas/latest';

import { Header, Footer, Button, RadioButton } from '@components/General';

import Localize from '@locale';

// style
import { AppStyles } from '@theme';
import styles from './styles';

/* types ==================================================================== */
export enum TangemSecurity {
    LongTap = 'LongTap',
    Passcode = 'Passcode',
}

export interface Props {
    account: AccountSchema;
}

export interface State {
    currentSecurity: TangemSecurity;
    chosenSecurity: TangemSecurity;
}

/* Component ==================================================================== */
class ChangeTangemSecurityView extends Component<Props, State> {
    static screenName = AppScreens.Account.Edit.ChangeTangemSecurityEnforce;

    static options() {
        return {
            bottomTabs: { visible: false },
        };
    }

    constructor(props: Props) {
        super(props);

        const { isPin2Default } = props.account.additionalInfo as Card;

        const current = isPin2Default ? TangemSecurity.LongTap : TangemSecurity.Passcode;

        this.state = {
            currentSecurity: current,
            chosenSecurity: current,
        };
    }

    componentDidMount() {
        RNTangemSdk.startSession();
    }

    componentWillUnmount() {
        RNTangemSdk.stopSession();
    }

    onSecurityChange = (security: TangemSecurity) => {
        this.setState({
            chosenSecurity: security,
        });
    };

    onSuccessChange = (isPin2Default: boolean) => {
        const { chosenSecurity } = this.state;
        const { account } = this.props;

        AccountRepository.update({
            address: account.address,
            additionalInfoString: JSON.stringify({
                ...account.additionalInfo,
                ...{ isPin2Default },
            }),
        });

        Prompt(
            Localize.t('global.success'),
            Localize.t('account.cardSecuritySuccessfullyChangedTo', { security: chosenSecurity }),
            [
                {
                    onPress: () => {
                        Navigator.pop();
                    },
                },
            ],
            { type: 'default' },
        );
    };

    removePasscode = () => {
        const { account } = this.props;
        const { cardId } = account.additionalInfo as Card;

        // setting pin2 to 000 will revert settings to default
        const defaultPin2 = '000';

        RNTangemSdk.changePin2({ cardId, pin: defaultPin2 })
            .then(this.onSuccessChange.bind(null, true))
            .catch(() => {
                // ignore
            });
    };

    changePasscode = () => {
        const { account } = this.props;
        const { cardId } = account.additionalInfo as Card;

        RNTangemSdk.changePin2({ cardId })
            .then(this.onSuccessChange.bind(null, false))
            .catch(() => {
                // ignore
            });
    };

    onSavePress = () => {
        const { chosenSecurity, currentSecurity } = this.state;

        // no changes
        if (chosenSecurity === currentSecurity) {
            return;
        }

        if (currentSecurity === TangemSecurity.LongTap) {
            this.changePasscode();
        } else {
            this.removePasscode();
        }
    };

    render() {
        const { chosenSecurity, currentSecurity } = this.state;

        return (
            <View testID="account-change-tangem-security-view" style={[styles.container]}>
                <Header
                    leftComponent={{
                        icon: 'IconChevronLeft',
                        onPress: () => {
                            Navigator.pop();
                        },
                    }}
                    centerComponent={{ text: Localize.t('account.cardSecurity') }}
                />

                <View style={[AppStyles.contentContainer, AppStyles.centerContent, AppStyles.paddingSml]}>
                    <RadioButton
                        testID="long-tap-radio-button"
                        onPress={() => {
                            this.onSecurityChange(TangemSecurity.LongTap);
                        }}
                        description={Localize.t('account.tangemLongTapExplain')}
                        label={Localize.t('global.longTap')}
                        checked={chosenSecurity === TangemSecurity.LongTap}
                    />
                    <RadioButton
                        testID="passcode-radio-button"
                        onPress={() => {
                            this.onSecurityChange(TangemSecurity.Passcode);
                        }}
                        description={Localize.t('account.tangemPasscodeExplain')}
                        label={Localize.t('global.passcode')}
                        checked={chosenSecurity === TangemSecurity.Passcode}
                    />
                </View>

                <Footer safeArea>
                    <Button
                        testID="save-button"
                        isDisabled={chosenSecurity === currentSecurity}
                        label={Localize.t('global.save')}
                        onPress={this.onSavePress}
                    />
                </Footer>
            </View>
        );
    }
}

/* Export Component ==================================================================== */
export default ChangeTangemSecurityView;
