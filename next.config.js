const {withGlobalCss} = require('next-global-css');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true
};

const withConfig = withGlobalCss();

module.exports = withConfig(nextConfig);
