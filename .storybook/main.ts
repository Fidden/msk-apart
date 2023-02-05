const include = path.resolve(__dirname, '..', 'src');
import babelPresetReactApp from 'babel-preset-react-app';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
    stories: ['../src/client/shared/components/**/button.stories.tsx'],
    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                docs: false
            }
        }
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop: { parent: { fileName: string; }; }) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
        }
    },
    core: {
        builder: 'webpack5'
    },
    webpackFinal: (config: { resolve: { extensions: string[]; plugins: TsconfigPathsPlugin[]; alias: {}; }; module: any; }) => {
        config.resolve = {
            extensions: ['.ts', '.tsx', '.js'],
            plugins: [new TsconfigPathsPlugin()],
            alias: {}
        };

        config.module!.rules = [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [babelPresetReactApp]
                        }
                    },
                    {
                        loader: 'react-docgen-typescript-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader'
            },
            {
                test: /^(?!.*\.inline).*\.(jpe?g|png|gif|eot|woff2?|ttf)$/,
                loader: 'file-loader'
            }
        ];
        return config;
    }
};
