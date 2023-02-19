const {withGlobalCss} = require('next-global-css');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['mskr.intrumnet.com']
    }
};

const withConfig = withGlobalCss();

module.exports = withConfig(nextConfig);
