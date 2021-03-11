import { StyleSheet } from 'react-native';

import { AppColors, AppFonts } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    separatorContainer: {
        width: '80%',
        marginTop: 22,
        marginBottom: 15,
        borderTopColor: AppColors.grey,
        borderTopWidth: 1.5,
    },
    separatorText: {
        textAlign: 'center',
        marginTop: -10,
        paddingHorizontal: 10,
        alignSelf: 'center',
        backgroundColor: AppColors.background,
        color: AppColors.grey,
        fontFamily: AppFonts.base.familyBold,
    },
});

export default styles;
