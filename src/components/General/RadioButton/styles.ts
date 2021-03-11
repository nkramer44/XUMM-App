import { StyleSheet } from 'react-native';

import { AppColors, AppFonts } from '@theme';

/* Styles ==================================================================== */
export default StyleSheet.create({
    content: {
        // minHeight: AppSizes.screen.height * 0.12,
        width: '100%',
        borderRadius: 20,
        padding: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.lightGrey,
        borderColor: AppColors.lightGrey,
        color: AppColors.silver,
        borderWidth: 3,
        marginBottom: 20,
    },
    dot: {
        height: 26,
        width: 26,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: AppColors.grey,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dotSelected: {
        borderColor: AppColors.blue,
    },
    filled: {
        height: 15,
        width: 15,
        borderRadius: 8,
        backgroundColor: AppColors.blue,
        color: AppColors.blue,
    },

    selected: {
        backgroundColor: AppColors.tint,
        borderColor: AppColors.blue,
    },
    textColor: {
        color: AppColors.grey,
    },
    textColorSelected: {
        color: AppColors.textPrimary,
    },
    labelSmall: {
        fontSize: AppFonts.subtext.size,
        fontFamily: AppFonts.base.familyBold,
    },
    descriptionText: {
        marginTop: 4,
    },
});
