const {withGlobalCss} = require('next-global-css');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['mskr.intrumnet.com']
    },
    env :{
         API_URL: 'http://26.225.178.228:3001/api'
    }
};

const withConfig = withGlobalCss();

module.exports = withConfig(nextConfig);
