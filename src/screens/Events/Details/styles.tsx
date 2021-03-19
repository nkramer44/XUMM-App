import { StyleSheet } from 'react-native';

import { AppColors, AppFonts, AppSizes } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    headerContainer: {
        width: AppSizes.screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    amountHeaderContainer: {
        width: AppSizes.screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    memoContainer: {
        width: AppSizes.screen.width,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 25,
    },
    extraHeaderContainer: {
        padding: 25,
        borderTopColor: AppColors.tint,
        borderTopWidth: 1,
    },
    actionButtonsContainer: {
        paddingHorizontal: 25,
        paddingBottom: 25,
    },
    detailsContainer: {
        borderTopColor: AppColors.tint,
        borderTopWidth: 1,
        width: AppSizes.screen.width,
        padding: 25,
    },
    amountContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.tint,
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    amountContainerSmall: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.tint,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 50,
    },
    amountText: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.h4.size,
        textAlign: 'center',
        color: AppColors.blue,
    },
    amountTextSmall: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.h5.size,
        textAlign: 'center',
        color: AppColors.textPrimary,
    },
    statusText: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.h5.size,
        textAlign: 'center',
        marginBottom: 20,
    },
    statusSuccess: {
        color: AppColors.green,
    },
    statusFailed: {
        color: AppColors.red,
    },
    dateText: {
        fontFamily: AppFonts.base.familyMonoBold,
        fontSize: AppFonts.small.size,
        color: AppColors.grey,
        textAlign: 'left',
    },
    hashText: {
        fontFamily: AppFonts.base.familyMono,
        fontSize: AppFonts.base.size * 0.9,
        color: AppColors.grey,
        textAlign: 'left',
    },
    labelText: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.base.size,
        color: AppColors.textPrimary,
        marginBottom: 8,
    },
    contentText: {
        fontFamily: AppFonts.base.familyMono,
        lineHeight: 20,
        fontSize: AppFonts.base.size * 0.9,
        color: AppColors.textPrimary,
    },
    memoText: {
        fontFamily: AppFonts.base.family,
        lineHeight: 20,
        fontSize: AppFonts.base.size * 0.9,
        color: AppColors.textPrimary,
    },
    dangerHeader: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        padding: AppSizes.paddingSml,
        backgroundColor: AppColors.red,
    },
    outgoingColor: {
        color: AppColors.red,
        tintColor: AppColors.red,
    },
    incomingColor: {
        color: AppColors.blue,
        tintColor: AppColors.blue,
    },
    orangeColor: {
        color: AppColors.orange,
        tintColor: AppColors.orange,
    },
    naturalColor: {
        color: AppColors.grey,
        tintColor: AppColors.grey,
    },
    iconArrow: {
        marginTop: 12,
        marginBottom: -12,
    },
});

export default styles;
