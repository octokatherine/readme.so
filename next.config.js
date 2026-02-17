const { i18n } = require('./next-i18next.config')

// 先在这里配置 PWA
const withPWA = require('next-pwa')({
  dest: 'public',
  // 开发环境关闭 PWA 缓存，避免调试麻烦
  disable: process.env.NODE_ENV === 'development',
})

// 再把 Next.js 自己的配置传进去
module.exports = withPWA({
  i18n,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
})
