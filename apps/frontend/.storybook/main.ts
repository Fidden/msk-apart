import type {StorybookConfig} from '@storybook/core-common';
import {resolve} from 'path';
import {Configuration} from 'webpack';

const main: StorybookConfig = {
	core: {
		builder: 'webpack4'
	},
	framework: '@storybook/react',
	stories: [
		'../src/client/shared/components/**/*.stories.tsx'
	],
	addons: [
		{
			name: '@storybook/addon-essentials',
			options: {
				docs: false
			}
		}
	],
	webpackFinal: async (config: Configuration) => {
		config.resolve = {
			...config.resolve,
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				...config.resolve?.alias,
				'~': resolve(__dirname, '../src')
			}
		};

		return config;
	}
};

module.exports = main;
