import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    visibleContent: {
        // height: Sizes.screen.heightHalf + 100,
        height: AppSizes.heightPercentageToDP(92),
        backgroundColor: AppColors.background,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowColor: AppColors.black,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        padding: 15,
        alignItems: 'stretch',
    },
    cancelButton: {
        height: AppSizes.screen.heightHalf * 0.1,
        backgroundColor: AppColors.grey,
    },
    reserveAmount: {
        fontSize: AppFonts.base.size,
        fontFamily: AppFonts.base.familyMonoBold,
        color: AppColors.grey,
        // fontWeight: 'bold',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    currencyItemCard: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
    },
    currencyItem: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    currencyItemLabel: {
        fontSize: AppFonts.h5.size,
        fontFamily: AppFonts.base.familyMonoBold,
        color: AppColors.textPrimary,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    currencyItemLabelSmall: {
        fontSize: AppFonts.p.size,
        fontFamily: AppFonts.base.familyMono,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 3,
    },
    xrpAvatar: {
        resizeMode: 'contain',
    },
    xrpAvatarContainer: {
        padding: 10,
        marginRight: 10,
        backgroundColor: AppColors.white,
        borderWidth: 1,
        borderColor: AppColors.lightGrey,
        borderRadius: 8,
        justifyContent: 'center',
    },
    trustLineInfoIcon: {
        tintColor: AppColors.grey,
        marginRight: 5,
    },
    rowTitle: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.p.size,
        color: AppColors.textPrimary,
    },
    rowLabel: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.subtext.size,
        color: AppColors.textPrimary,
    },
    rowLabelSmall: {
        fontSize: AppFonts.subtext.size * 0.8,
        fontFamily: AppFonts.base.familyMono,
        color: AppColors.grey,
    },
    listHeader: {
        paddingVertical: 5,
        backgroundColor: AppColors.white,
    },
    currencyAvatar: {
        width: AppSizes.moderateScale(16),
        height: AppSizes.moderateScale(16),
    },
});

export default styles;
