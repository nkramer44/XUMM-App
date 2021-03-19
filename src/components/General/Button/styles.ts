import { StyleSheet } from 'react-native';

import { AppColors, AppFonts, AppSizes } from '@theme';

const styles = StyleSheet.create({
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        height: AppSizes.scale(55),
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: AppSizes.scale(75) / 4,
        paddingHorizontal: 15,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderColor: AppColors.transparent,
        backgroundColor: AppColors.blue,
    },
    textButton: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.base.size * 1.1,
        textAlign: 'center',
        paddingHorizontal: 5,
        color: AppColors.white,
    },

    // Active
    activeButton: {
        backgroundColor: AppColors.red,
    },

    // Modifiers
    buttonBlock: {
        alignSelf: 'stretch',
    },

    // Secondary
    buttonSecondary: {
        backgroundColor: AppColors.grey,
    },
    textButtonSecondary: {
        color: AppColors.white,
    },

    // Light
    buttonLight: {
        backgroundColor: AppColors.tint,
    },
    textButtonLight: {
        color: AppColors.textPrimary,
    },
    iconButtonLight: {
        tintColor: AppColors.textPrimary,
    },

    // Rounded Small
    buttonRoundedSmall: {
        height: AppSizes.scale(33),
        // paddingHorizontal: 18,
        alignSelf: 'center',
        borderRadius: AppSizes.scale(33) / 2,
    },
    textButtonRoundedSmall: {
        fontSize: AppFonts.base.size * 0.9,
    },
    // Rounded Small Block
    buttonRoundedSmallBlock: {
        height: AppSizes.scale(33),
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        borderRadius: AppSizes.scale(33) / 2,
    },
    textButtonRoundedSmallBlock: {
        fontSize: AppFonts.base.size * 0.9,
    },

    // Disabled
    buttonDisabled: {
        opacity: 0.4,
    },
    /*

    // Contrast
    buttonContrast: {
        backgroundColor: AppColors.contrast,
    },
    textButtonContrast: {
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.textContrast,
        fontSize: AppFonts.base.size * 1.1,
    },

    // Light
    buttonLight: {
        backgroundColor: AppColors.lightGrey,
    },
    textButtonLight: {
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.blue,
        fontSize: AppFonts.base.size * 1.1,
    },

    // Outline
    buttonOutline: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.blue,
        borderWidth: 1.5,
    },
    textButtonOutline: {
        color: AppColors.blue,
    },

    // Clear
    buttonClear: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.transparent,
        borderWidth: 1.5,
        height: AppSizes.heightPercentageToDP(5.5),
        minHeight: 45,
        paddingHorizontal: 5,
    },
    textButtonClear: {
        color: AppColors.black,
        fontSize: AppFonts.base.size * 1,
    },

    // Rounded
    buttonRounded: {
        height: AppSizes.scale(42),
        paddingHorizontal: 30,
        alignSelf: 'center',
        borderRadius: AppSizes.scale(42) / 2,
    },
    textButtonRounded: {
        fontSize: AppFonts.base.size * 1,
    },

    // Rounded Small
    buttonRoundedSmall: {
        height: AppSizes.scale(33),
        paddingHorizontal: 18,
        alignSelf: 'center',
        borderRadius: AppSizes.scale(33) / 2,
    },
    textButtonRoundedSmall: {
        fontSize: AppFonts.base.size * 0.9,
    },
    // Rounded Mini
    buttonRoundedMini: {
        height: AppSizes.scale(20),
        paddingHorizontal: 80,
        alignSelf: 'center',
        borderRadius: AppSizes.scale(33) / 2,
    },
    textButtonRoundedMini: {
        fontSize: AppFonts.base.size * 0.7,
    },

    */
   iconLeft: {
       marginRight: 3,
       tintColor: AppColors.white,
    },
    iconRight: {
        marginLeft: 3,
        tintColor: AppColors.white,
   },
   spinner: {
       flex: 1,
       alignSelf: 'center',
   },
});

export default styles;
