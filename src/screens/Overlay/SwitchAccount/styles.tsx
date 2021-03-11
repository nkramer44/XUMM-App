import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    visibleContent: {
        backgroundColor: AppColors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        padding: 15,
    },
    iconAccount: {
        marginRight: 15,
        opacity: 0.4,
    },
    iconAccountActive: {
        marginRight: 15,
        opacity: 1,
    },
    accountRow: {
        paddingRight: 20,
        paddingLeft: 13,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 10,
        borderRadius: 18,
        // borderRadius: AppSizes.scale(50) / 4,
        backgroundColor: AppColors.tint,
    },
    accountRowSelected: {
        borderBottomWidth: 0,
        // borderRadius: 20,
        backgroundColor: AppColors.lightBlue,
    },
    selectedText: {
        marginRight: 10,
        color: AppColors.green,
    },

    iconKey: {
        tintColor: AppColors.blue,
        marginRight: 5,
        alignSelf: 'center',
    },
    accountLabel: {
        fontFamily: AppFonts.h5.family,
        fontSize: AppFonts.p.size,
        color: AppColors.silver,
    },
    accountLabelSelected: {
        color: AppColors.blue,
    },
    accountAddress: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.small.size,
        color: AppColors.silver,
        marginTop: 2,
        marginLeft: 2,
    },
    accountAddressSelected: {
        color: AppColors.textSecondary,
    },
    accessLevelBadge: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 10,
        marginTop: 7,
        alignSelf: 'flex-start',
        backgroundColor: AppColors.lightGrey,
        justifyContent: 'center',
        alignContent: 'center',
    },
    accessLevelBadgeSelected: {
        backgroundColor: AppColors.lightBlue,
    },
    accessLevelIcon: {
        tintColor: AppColors.grey,
    },
    accessLevelLabel: {
        marginLeft: 5,
        fontSize: AppFonts.base.size * 0.7,
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.grey,
        includeFontPadding: false,
    },
    accessLevelLabelSelected: {
        color: AppColors.textPrimary,
    },
    radioCircle: {
        width: AppSizes.scale(23),
        height: AppSizes.scale(23),
        borderWidth: 3,
        borderColor: AppColors.grey,
        // borderRadius: AppSizes.scale(23) / 2,
        borderRadius: 100,
    },
    radioCircleSelected: {
        width: AppSizes.scale(23),
        height: AppSizes.scale(23),
        borderWidth: AppSizes.scale(6),
        borderColor: AppColors.blue,
        // borderRadius: AppSizes.scale(23) / 2,
        borderRadius: 100,
        backgroundColor: AppColors.background,
    },
});

export default styles;
