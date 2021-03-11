import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

const styles = StyleSheet.create({
    box: {
        height: AppSizes.widthPercentageToDP(8),
        width: AppSizes.widthPercentageToDP(8),
        borderRadius: 10,
        backgroundColor: AppColors.silver,
        borderColor: AppColors.silver,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxActive: {
        height: AppSizes.widthPercentageToDP(10),
        width: AppSizes.widthPercentageToDP(10),
        borderRadius: 8,
        borderWidth: 3,
        borderColor: AppColors.blue,
        backgroundColor: AppColors.blue,
    },
    boxPast: {
        backgroundColor: AppColors.blue,
    },
    label: {
        fontFamily: AppFonts.base.familyExtraBold,
        fontSize: AppFonts.base.size,
        color: AppColors.textPrimary,
        textAlign: 'center',
    },
    labelActive: {
        fontSize: AppFonts.h5.size,
        color: AppColors.white,
    },
    labelPast: {
        color: AppColors.white,
    },
});

export default styles;
