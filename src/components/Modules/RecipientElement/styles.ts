import { StyleSheet } from 'react-native';

import { AppFonts, AppColors } from '@theme';
/* Styles ==================================================================== */
export default StyleSheet.create({
    touchRow: {
        borderRadius: 13,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        // marginBottom: 8,
        backgroundColor: AppColors.tint,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: AppColors.tint,
    },
    itemSelected: {
        borderColor: AppColors.blue,
        borderWidth: 2,
        backgroundColor: AppColors.lightBlue,
    },
    title: {
        fontFamily: AppFonts.base.familyBold,
        color: AppColors.textPrimary,
        fontSize: AppFonts.base.size,
    },
    selectedText: {
        color: AppColors.blue,
    },
    subtitle: {
        fontFamily: AppFonts.base.familyMono,
        color: AppColors.grey,
        fontSize: AppFonts.base.size * 0.8,
    },
    tag: {
        paddingHorizontal: 5,
        paddingVertical: 1,
        borderRadius: 5,
        marginLeft: 5,
        alignSelf: 'center',
    },
    tagLabel: {
        color: AppColors.white,
        fontSize: AppFonts.small.size * 0.7,
        fontFamily: AppFonts.base.familyBold,
    },
    bithompTag: {
        backgroundColor: AppColors.bithomp,
    },
    xrplnsTag: {
        backgroundColor: AppColors.xrplns,
    },
    xrpscanTag: {
        backgroundColor: AppColors.xrpscan,
    },
    payidTag: {
        backgroundColor: AppColors.payid,
    },
    destinationTagContainer: {
        marginTop: 10,
        paddingTop: 10,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: AppColors.grey,
    },
});
