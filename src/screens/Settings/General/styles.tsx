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
        borderColor: AppColors.tint,
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
        color: AppColors.textPrimary,
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
        color: AppColors.grey,
    },
    descriptionText: {
        padding: AppSizes.paddingSml,
        fontFamily: AppFonts.base.family,
        fontSize: AppFonts.base.size * 0.8,
        color: AppColors.textPrimary,
    },

    themeItem: {
        // minHeight: AppSizes.screen.height * 0.12,
        width: '100%',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.tint,
        borderColor: AppColors.tint,
        color: AppColors.grey,
        borderWidth: 3,
        marginBottom: 5,
    },
    themeItemDot: {
        height: 26,
        width: 26,
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: AppColors.tint,
        borderColor: AppColors.grey,
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    themeItemDotSelected: {
        backgroundColor: AppColors.white,
        borderColor: AppColors.blue,
    },
    themePreview: {
        borderRadius: 10,
        height: '100%',
        padding: AppSizes.paddingSml,
        alignItems: 'center',
    },
    themePreviewLight: { backgroundColor: AppColors.white, color: AppColors.black },
    themePreviewDark: { backgroundColor: AppColors.themeDark, color: AppColors.white },
    themePreviewMoonlight: { backgroundColor: AppColors.themeMoonlight, color: AppColors.grey },
    themePreviewRoyal: { backgroundColor: AppColors.themeRoyal, color: AppColors.white },

    themeItemFilled: {
        height: 15,
        width: 15,
        borderRadius: 8,
        backgroundColor: AppColors.blue,
        color: AppColors.blue,
    },

    themeItemSelected: {
        backgroundColor: AppColors.lightBlue,
        borderColor: AppColors.blue,
        color: AppColors.blue,
    },
    themeItemLabelSmall: {
        fontSize: AppFonts.subtext.size,
        fontFamily: AppFonts.base.familyBold,
    },
});

export default styles;
