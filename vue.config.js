const { defineConfig } = require('@vue/cli-service')

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'network':'@/network',
        'utils':'@/utils',
        'views':'@/views',
      }
    },
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },

  // publicPath: './'   // 这是一个bug【传路由的时候会出错】
  publicPath: '/'   // 要把点去掉，不然路由传参的时候会报错！
})



