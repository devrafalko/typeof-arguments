const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index:'./src/index.js'
  },
  output: {
    filename: 'typeof-arguments.min.js',
    path: path.resolve(__dirname, 'src'),
    library:'typeofArguments',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  watch: false,
  stats: false,
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        options:{
          presets:['env']
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions:{
          compress:true,
          mangle:false,
          output:{
            ecma:6,
            indent_level:2,
            comments:false,
            beautify:false
          }
        }
      })
    ]
  }
};