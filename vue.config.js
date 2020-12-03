const config = require('./src/config')

module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      '/': {
        target: config.domain,
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  lintOnSave: true
}
