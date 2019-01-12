const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const frontEnd = require('./webpack.frontend.js');
const backEnd = require('./webpack.backend.js');

const prod = {
  mode: 'production',
  watch: false,
  stats: false,
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          mangle: false,
          output: {
            indent_level: 2,
            comments: false,
            beautify: false
          }
        }
      })
    ]
  }
};

module.exports = [
  merge(common, prod, backEnd),
  merge(common, prod, frontEnd)
];