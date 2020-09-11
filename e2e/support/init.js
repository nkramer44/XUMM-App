const detox = require('detox');
const { Before, BeforeAll, AfterAll, After } = require('cucumber');
const config = require('../../package.json').detox;
const adapter = require('./adapter');

const { startRecordingVideo, stopRecordingVideo } = require('../helpers/artifacts');

BeforeAll(async () => {
    await detox.init(config, { launchApp: false, reuse: true });
    await detox.device.launchApp({
        permissions: { notifications: 'YES', camera: 'YES' },
    });

    // start recording video
    startRecordingVideo();

    // delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
});

Before(async (context) => {
    // await detox.device.reloadReactNative();
    await adapter.beforeEach(context);
});

After(async (context) => {
    await adapter.afterEach(context);
});

AfterAll(async () => {
    // clean up
    await detox.cleanup();

    // stop recording
    stopRecordingVideo();
});
