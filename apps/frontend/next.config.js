// eslint-disable-next-line @typescript-eslint/no-var-requires
const {withGlobalCss} = require('next-global-css');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['mskr.intrumnet.com']
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

const withConfig = withGlobalCss();

module.exports = withConfig(nextConfig);
