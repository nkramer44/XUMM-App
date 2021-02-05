import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
    },
    rowIcon: {
        tintColor: AppColors.blue,
        marginRight: -10,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: AppSizes.paddingSml,
        paddingVertical: AppSizes.paddingSml,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: AppColors.grey,
    },
    rowNoborder: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: AppSizes.paddingSml,
        // paddingVertical: AppSizes.paddingSml,
        // borderBottomWidth: StyleSheet.hairlineWidth,
        // borderTopWidth: StyleSheet.hairlineWidth,
        // borderColor: AppColors.grey,
    },
    labelContainer: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
    },
    label: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        color: AppColors.black,
    },
    destructionLabel: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        color: AppColors.red,
        textAlign: 'center',
    },
    value: {
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.subtext.size,
        textAlign: 'right',
        color: AppColors.greyDark,
    },
    descriptionText: {
        padding: AppSizes.paddingSml,
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.base.size * 0.8,
        color: AppColors.black,
    },

    themeItem: {
        // minHeight: AppSizes.screen.height * 0.12,
        width: '100%',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.grey,
        borderColor: AppColors.grey,
        borderWidth: 3,
        marginBottom: 10,
    },
    themeItemDot: {
        height: 26,
        width: 26,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: AppColors.greyDark,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    themeItemDotSelected: {
        borderColor: AppColors.blue,
    },
    themePreview: {
        // borderWidth: 2,
        // borderColor: 'red',
        borderRadius: 10,
        height: '100%',
        padding: AppSizes.paddingSml,
        alignItems: 'center',
    },
    themePreviewLight: { backgroundColor: AppColors.white, color: AppColors.white },
    themePreviewMoonlight: { backgroundColor: AppColors.themeMoonlight, color: AppColors.themeMoonlightText },
    themePreviewDark: { backgroundColor: AppColors.themeDark, color: AppColors.themeDarkText },
    themeItemFilled: {
        height: 15,
        width: 15,
        borderRadius: 8,
        backgroundColor: AppColors.blue,
        color: AppColors.black,
    },

    themeItemSelected: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.blue,
        color: AppColors.black,
    },
    themeItemLabelSmall: {
        fontSize: AppFonts.subtext.size,
        fontFamily: AppFonts.base.familyBold,
    },
});

export default styles;
