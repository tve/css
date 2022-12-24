const { MasterCSSWebpackPlugin } = require('@master/css.webpack')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.plugins.push(
            new MasterCSSWebpackPlugin(),
        )
        return config
    }

}

module.exports = nextConfig
