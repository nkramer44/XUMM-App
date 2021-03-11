import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    visibleContent: {
        // height: Sizes.screen.heightHalf + 100,
        height: AppSizes.screen.height * 0.9,
        backgroundColor: AppColors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        padding: 15,
    },
    qrCodeContainer: {
        borderRadius: 20,
        borderWidth: 3,
        alignSelf: 'center',
        alignItems: 'center',
        borderColor: AppColors.tint,
        // backgroundColor: AppColors.tint,
        padding: 20,
        margin: 10,
        width: '100%',
    },
    qrCode: {
        borderRadius: 5,
        borderWidth: 5,
        borderColor: AppColors.white,
    },
    addressText: {
        // width: '80%',
        fontFamily: AppFonts.base.familyMono,
        fontSize: AppFonts.base.size * 0.9,
        backgroundColor: AppColors.tint,
        color: AppColors.textPrimary,
        marginTop: 15,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        overflow: 'hidden',
        textAlign: 'center',
        alignSelf: 'center',
    },
});

export default styles;
