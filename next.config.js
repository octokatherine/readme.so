const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
}
