import { StyleSheet } from 'react-native';

import { AppColors, AppFonts, AppSizes } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: AppSizes.heightPercentageToDP(7.5),
    },
    touchHighlight: {
        borderRadius: 10,
        paddingLeft: 5,
        marginLeft: -5,
        marginRight: -5,
    },
    row: {
        paddingTop: 10,
    },
    iconContainer: {
        borderColor: AppColors.lightGrey,
        backgroundColor: AppColors.tint,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        width: AppSizes.scale(40),
        height: AppSizes.scale(40),
    },
    icon: {
        alignItems: 'center',
        resizeMode: 'contain',
    },
    xAppsIcon: {
        tintColor: AppColors.lightGrey,
        marginLeft: 8,
        resizeMode: 'contain',
        height: 15,
        width: 35,
    },
    label: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.subtext.size,
        color: AppColors.textPrimary,
    },
    description: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.subtext.size * 0.9,
        color: AppColors.grey,
    },
    amount: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.base.size,
    },
    currency: {
        fontFamily: AppFonts.base.familyMono,
        fontSize: AppFonts.subtext.size * 0.9,
    },
    outgoingColor: {
        color: AppColors.red,
        tintColor: AppColors.red,
    },
    incomingColor: {
        color: AppColors.textPrimary,
        tintColor: AppColors.green,
    },
    orangeColor: {
        color: AppColors.orange,
        tintColor: AppColors.orange,
    },
    naturalColor: {
        color: AppColors.grey,
        tintColor: AppColors.grey,
    },
});

export default styles;
