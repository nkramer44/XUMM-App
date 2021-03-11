import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
    },
    accountIcon: {
        width: AppSizes.screen.width * 0.07,
        height: AppSizes.screen.width * 0.07,
        tintColor: AppColors.grey,
        resizeMode: 'contain',
    },
    rowIcon: {
        width: AppSizes.screen.width * 0.07,
        height: AppSizes.screen.width * 0.07,
        resizeMode: 'contain',
        tintColor: AppColors.blue,
        marginRight: -10,
    },
    row: {
        width: '100%',
        paddingHorizontal: AppSizes.paddingSml,
        paddingVertical: AppSizes.paddingSml,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.background,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: AppColors.tint,
    },

    label: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        color: AppColors.textPrimary,
    },
    destructionLabel: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        color: AppColors.red,
        textAlign: 'center',
    },
    value: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        textAlign: 'right',
        color: AppColors.textSecondary,
    },
    descriptionText: {
        padding: AppSizes.paddingSml,
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.base.size,
        color: AppColors.textPrimary,
    },
});

export default styles;
