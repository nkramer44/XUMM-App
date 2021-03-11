import { StyleSheet } from 'react-native';

import { AppColors, AppSizes } from '@theme';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', backgroundColor: AppColors.background },
    backgroundImageStyle: {
        height: AppSizes.screen.height,
        opacity: global.theme === 'dark' ? 0.04 : 0.02,
    },
    logo: {
        width: AppSizes.screen.width * 0.4,
        height: AppSizes.screen.height * 0.1,
        resizeMode: 'contain',
    },
});

export default styles;
