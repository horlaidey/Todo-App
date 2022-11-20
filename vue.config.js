const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Todo-App/'
  : '/',
  devServer: {
      proxy:{
          '^/api':{
              target: 'http://localhost:3000',
              changeOrigin: true,
              logLevel: 'debug',
              pathRewrite:{'^/api':'/'},
          },
      }
  }
}