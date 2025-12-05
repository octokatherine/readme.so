const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')

const nextConfig = {
  i18n,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}

const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
}

module.exports = withPWA(pwaConfig)(nextConfig)
