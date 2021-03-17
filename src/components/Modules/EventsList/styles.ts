import { StyleSheet } from 'react-native';

import { AppSizes, AppColors, AppFonts } from '@theme';
/* Styles ==================================================================== */
export default StyleSheet.create({
    sectionList: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: AppColors.background,
    },
    sectionListContainer: {
        paddingLeft: AppSizes.padding,
        paddingRight: AppSizes.padding,
        paddingBottom: AppSizes.paddingSml,
    },
    sectionHeader: {
        backgroundColor: AppColors.background,
        paddingBottom: 0,
        paddingTop: 10,
        shadowColor: AppColors.background,
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 5,
        shadowOpacity: 1,
    },
    sectionHeaderText: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.p.size,
        color: AppColors.textPrimary,
    },
    sectionHeaderDateText: {
        fontFamily: AppFonts.base.familyBold,
        fontSize: AppFonts.subtext.size,
        color: AppColors.grey,
    },
    listEmptyContainer: {
        flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});
