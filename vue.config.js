const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {

    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8083',//后端接口地址
    //     changeOrigin: true,//是否允许跨越
    //     pathRewrite: {
    //       '^/api': ''//重写,
    //     }
    //   }
    // }
  }
})


