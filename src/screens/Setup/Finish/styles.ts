import { StyleSheet } from 'react-native';

import { AppSizes, AppStyles, AppColors } from '@theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.background,
    },
    logo: {
        width: AppSizes.screen.width * 0.4,
        height: AppSizes.screen.height * 0.1,
        resizeMode: 'contain',
    },
    loadingStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    webview: {
        borderRadius: AppStyles.borderRadius.borderRadius,
    },
    contentArea: {
        paddingHorizontal: AppStyles.paddingHorizontalSml.paddingHorizontal,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: AppColors.lightBlue,
    },
});

export default styles;
