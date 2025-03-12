import { defineConfig } from '@playwright/test';
import baseConfig from '../playwright.config.ts';

export default defineConfig({
    ...baseConfig,
    testDir: '../tests',
    use: {
        ...baseConfig.use,
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        headless: false,
        channel: 'chrome', // Use the Chrome browser channel
    },
});