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
        tintColor: AppColors.grey,
        marginRight: -10,
    },
    row: {
        width: '100%',
        paddingHorizontal: AppSizes.paddingSml,
        paddingVertical: AppSizes.paddingSml,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.white,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: AppColors.grey,
    },

    label: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        color: AppColors.black,
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
        color: AppColors.grey,
    },
    descriptionText: {
        padding: AppSizes.paddingSml,
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.base.size * 0.8,
        color: AppColors.black,
    },
});

export default styles;
