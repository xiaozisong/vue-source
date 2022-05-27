const path = require('path');

module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    // 虚拟打包路径，文件夹不会真正的生成，而是在8080端口被部署
    publicPath: '/',
    // 打包出来的文件名，不会真正的物理生成
    filename: 'bundle.js'
  },
  devServer: {
    // 端口号
    port: 8080,
    // 静态资源文件夹
    static: {
      directory: 'www',
    },
  },
  mode: 'development'
};