import { StyleSheet } from 'react-native';

import { AppStyles, AppColors, AppFonts } from '@theme';

/* Styles ==================================================================== */
export default StyleSheet.create({
    content: {
        // minHeight: AppSizes.screen.height * 0.12,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: AppStyles.borderRadius.borderRadius,
    },
    box: {
        height: 23,
        width: 23,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: AppColors.grey,
        // marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxSelected: {
        borderColor: AppColors.blue,
        backgroundColor: AppColors.blue,
    },
    selected: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.blue,
        color: AppColors.blue,
    },
    label: {
        fontSize: AppFonts.base.size,
        fontFamily: AppFonts.base.familyExtraBold,
        color: AppColors.grey,
    },
    labelSmall: {
        fontSize: AppFonts.subtext.size,
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.grey,
    },
    labelSelected: {
        color: AppColors.blue,
    },
    descriptionText: {
        color: AppColors.grey,
        marginTop: 3,
    },
    descriptionTextSelected: {
        color: AppColors.blue,
    },
});
