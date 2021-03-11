import { StyleSheet } from 'react-native';

import { AppSizes, AppFonts, AppColors } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: { position: 'relative', flex: 1, flexDirection: 'column' },
    rowContainer: {
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
    checkIcon: {
        tintColor: AppColors.blue,
    },
    descriptionText: {
        // paddingVertical: AppSizes.paddingSml,
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.base.size,
        fontWeight: 'bold',
        color: AppColors.textPrimary,
    },
});

export default styles;
