/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, {isServer}) => {
        config.plugins = [
            ...config.plugins,
            require('unplugin-auto-import/webpack')({
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                ],
                imports: [
                    'react',
                ],
                dts: './src/@types/auto-imports.d.ts',
                eslintrc: {
                    enabled: true,
                    filepath: './src/@types/.eslintrc-auto-import.json',
                    globalsPropValue: true,
                },
            }),
        ]

        return config;
    }
}
module.exports = nextConfig
