import { StyleSheet } from 'react-native';

import { AppColors, AppFonts, AppSizes } from '@theme';

/* Styles ==================================================================== */
export default StyleSheet.create({
    wrapper: {
        backgroundColor: AppColors.tint,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        borderColor: AppColors.tint,
        height: AppSizes.heightPercentageToDP(7),
        minHeight: 55,
        width: '100%',
        borderWidth: 2,
        borderRadius: 14,
    },
    input: {
        flex: 1,
        fontSize: AppFonts.base.size,
        color: AppColors.blue,
        fontFamily: AppFonts.base.familyMonoBold,
        fontWeight: '600',
    },
    scanIcon: {
        tintColor: AppColors.white,
    },
    scanButton: {
        position: 'absolute',
        right: 4,
        height: AppSizes.heightPercentageToDP(6),
        width: AppSizes.heightPercentageToDP(6),
        minHeight: 45,
        minWidth: 45,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: AppColors.black,
    },
    // eslint-disable-next-line react-native/no-color-literals
    loadingOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        // backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundColor: AppColors.background,
        width: '100%',
        height: '100%',
    },
    loadingIndicator: {
        position: 'absolute',
        left: '45%',
        top: '35%',
    },
});
