/* eslint-disable react-native/no-color-literals */

import { StyleSheet } from 'react-native';

import { AppColors, AppSizes, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    visibleContent: {
        width: AppSizes.screen.width * 0.9,
        backgroundColor: AppColors.background,
        borderRadius: 20,
    },
    headerContainer: {
        backgroundColor: AppColors.tint,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: AppSizes.paddingSml,
        shadowColor: AppColors.background,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
    },
    contentContainer: {
        padding: AppSizes.paddingSml,
    },
    currencyItem: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    brandAvatarContainer: {
        marginRight: 10,
        borderWidth: 1,
        borderColor: AppColors.light,
        borderRadius: 8,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    brandAvatar: {
        height: AppSizes.scale(35),
        width: AppSizes.scale(35),
        alignSelf: 'center',
    },
    currencyItemLabelSmall: {
        fontSize: AppFonts.p.size,
        fontFamily: AppFonts.base.familyMono,
        color: AppColors.textPrimary,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 3,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    issuerLabel: {
        fontSize: AppFonts.subtext.size,
        fontFamily: AppFonts.base.familyMono,
        color: AppColors.grey,
    },
    currencyAvatar: {
        width: AppSizes.screen.width * 0.035,
        height: AppSizes.screen.width * 0.035,
        resizeMode: 'contain',
        marginTop: 1,
        marginRight: 10,
    },

    buttonRow: {
        width: '50%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 3,
    },
    sendButton: {
        marginRight: 1.5,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: global.theme === 'light' ? AppColors.white : AppColors.blue,
    },
    sendButtonIcon: { marginRight: 5, tintColor: global.theme === 'light' ? AppColors.blue : AppColors.white },
    sendButtonText: { color: global.theme === 'light' ? AppColors.blue : AppColors.white },
    exchangeButton: {
        marginLeft: 1.5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: global.theme === 'light' ? AppColors.white : AppColors.grey,
    },
    exchangeButtonIcon: { marginLeft: 5, tintColor: global.theme === 'light' ? AppColors.blue : AppColors.white },
    exchangeButtonText: { color: global.theme === 'light' ? AppColors.black : AppColors.white },

    infoButton: {
        marginLeft: 1.5,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    infoButtonIcon: { marginLeft: 5 },
    infoButtonText: { color: AppColors.black },

    removeButtonIcon: { marginLeft: 5, tintColor: AppColors.red },
    removeButtonText: { color: AppColors.red },
});

export default styles;
