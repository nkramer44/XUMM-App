import StyleService from '@services/StyleService';

import { hasNotch } from '@common/helpers/device';
/* Styles ==================================================================== */
const styles = StyleService.create({
    container: { flex: 1 },
    webViewContainer: {
        flex: 1,
        paddingBottom: hasNotch() ? 20 : 0,
        backgroundColor: '$background',
    },
    loadingStyle: {
        backgroundColor: '$background',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
