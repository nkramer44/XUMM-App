import { StyleSheet } from 'react-native';

import { AppColors, AppStyles, AppFonts } from '@theme';
/* Styles ==================================================================== */
export default StyleSheet.create({
    pickerContainer: {
        borderRadius: 15,
        backgroundColor: AppColors.darkGrey,
        height: 80,
        paddingHorizontal: 17,
        justifyContent: 'center',
    },
    collapseButton: {
        backgroundColor: AppColors.lightBlue,
        borderRadius: 8,
        height: 25,
        width: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: 5,
    },
    collapseIcon: {
        alignSelf: 'center',
        tintColor: AppColors.textPrimary,
    },
    accountItemTitle: {
        fontSize: AppStyles.baseText.fontSize,
        fontWeight: 'bold',
        marginBottom: 3,
        color: AppColors.textPrimary,
    },
    accountItemSub: {
        fontFamily: AppFonts.base.familyMono,
        fontSize: 16,
        color: AppColors.grey,
    },
});
