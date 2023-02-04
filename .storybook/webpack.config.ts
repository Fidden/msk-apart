// @ts-ignore
import babelPresetReactApp from 'babel-preset-react-app';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

const include = path.resolve(__dirname, '..', 'src');

interface Props {
    config: webpack.Configuration;
}

module.exports = ({config}: Props) => {
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

    if (process.env.IS_CI) {
        config.plugins = config.plugins!.filter((plugin) => !(plugin instanceof webpack.ProgressPlugin));
    }

    config.plugins!.push(
        new webpack.DefinePlugin({
            'process.env.BEM_LANG': JSON.stringify('ru')
        })
    );

    return config;
};
