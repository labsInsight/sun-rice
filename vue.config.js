const path = require('path')

module.exports = {
  publicPath: './',
  //设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  lintOnSave: false,
  //webpack配置
  configureWebpack: {
    //编译demo入口文件(非组件库编译入口文件)
    entry: './examples/main.js',
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': `${path.join(__dirname, './src')}`
      }
    }
  }
}