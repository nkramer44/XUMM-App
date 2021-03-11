import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    rowContainer: {
        width: AppSizes.screen.width * 0.9,
        height: AppSizes.scale(130),
        paddingHorizontal: AppSizes.paddingSml,
        paddingVertical: AppSizes.paddingSml,
        borderWidth: 2,
        borderColor: AppColors.tint,
        borderRadius: 20,
        marginHorizontal: 20,
        backgroundColor: AppColors.white,
    },
    rowAddContainer: {
        height: AppSizes.scale(90),
        borderWidth: 1,
        borderColor: AppColors.grey,
        borderRadius: 15,
        marginHorizontal: 20,
        backgroundColor: AppColors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowHeader: {
        paddingTop: 0,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.tint,
        paddingRight: 0,
    },
    buttonEditIcon: {
        tintColor: AppColors.textPrimary,
        marginLeft: 10,
    },
    buttonEditText: {
        color: AppColors.textPrimary,
    },
    reorderIcon: {
        tintColor: AppColors.grey,
    },
    rowText: {
        color: AppColors.blue,
    },
    subRow: {
        paddingTop: 12,
    },
    subLabel: {
        paddingBottom: 5,
    },
    accountLabel: {
        fontFamily: AppFonts.h5.family,
        fontSize: AppFonts.p.size,
        color: AppColors.textPrimary,
    },
    accessLevelContainer: {
        left: 0,
        right: 0,
        flexDirection: 'row',
        marginTop: 3,
    },
    accessLevelLabel: {
        marginLeft: 5,
        fontSize: AppFonts.base.size * 0.7,
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.grey,
        includeFontPadding: false,
    },
});

export default styles;
