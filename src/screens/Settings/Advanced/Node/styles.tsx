import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    row: {
        width: AppSizes.screen.width,
        paddingHorizontal: AppSizes.paddingSml,
        paddingVertical: AppSizes.paddingSml,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: AppColors.background,
    },
    url: {
        fontSize: AppFonts.subtext.size,
        color: AppColors.textPrimary,
    },
    chainLabel: {
        marginLeft: 10,
        padding: 2,
        borderRadius: 5,
    },
    chainLabelMain: {
        backgroundColor: AppColors.lightGreen,
    },
    chainLabelTest: {
        backgroundColor: AppColors.lightOrange,
    },
    sectionHeader: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderTopColor: AppColors.tint,
        borderTopWidth: 1,
        backgroundColor: AppColors.background,
        shadowColor: AppColors.background,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    sectionHeaderText: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.base.size,
        paddingLeft: 8,
        color: AppColors.textPrimary,
    },
    checkIcon: {
        tintColor: AppColors.blue,
    },
});

export default styles;
