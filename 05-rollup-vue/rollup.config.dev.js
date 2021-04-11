const path = require('path')
// 引入的外部的依赖， 可以打包到内部， 将第三方与我们的源码进行组合打包内
const resolve = require('rollup-plugin-node-resolve')
// 引用babel, 将高版本的语法转为低版本的
const babel = require('rollup-plugin-babel')
const inputPath = path.resolve(__dirname, './src/index.js')
const outputPath = path.resolve(__dirname, './dist/bundle.js')

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: 'umd',
    name: 'bundle'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: [
    'vue' // 即使代码中使用了import vue from 'vue' 也不会将vue进行打包。只会将vue作为外部的引用
  ]
}
/**
 * babel-node 的使用
 * 可以在commonjs中使用es6的特性
 * 全局安装@babel/node @babel/core(可以当前目录 )
 * 新建babelrc
 * 当前目录安装@babel/preset-env
 */
