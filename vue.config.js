const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'utils':'@/utils',
        'views':'@/views',
      }
    }
  },

  publicPath: './'   // 这是一个bug【传路由的时候会出错】
})
