import {configure} from '@storybook/react';
import {resolve} from 'path';
import {Configuration} from 'webpack';
import '../src/styles/globals.css';

const req = require.context('../src/client/shared/components', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);

export default {
    addons: [
        {
            name: 'storybook-addon-next',
            options: {
                nextConfigPath: resolve(__dirname, '../next.config.js')
            }
        },
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false
            }
        }
    ],
    builder: 'webpack5',
    webpackFinal: async (config: Configuration) => {
        let ForkTsCheckerWebpackPluginIdx;
        config.plugins!.forEach((plugin, idx) => {
            if ('ForkTsCheckerWebpackPlugin' === plugin.constructor.name) {
                ForkTsCheckerWebpackPluginIdx = idx;
            }
        });
        if (
            config.mode === 'production' &&
            ForkTsCheckerWebpackPluginIdx !== undefined
        ) {
            config.plugins!.splice(ForkTsCheckerWebpackPluginIdx, 1);
        }

        return config;
    }
};
