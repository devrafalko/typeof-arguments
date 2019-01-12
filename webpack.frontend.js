const path = require('path');

module.exports = {
  entry: {
    index: './src/typeof-arguments.js'
  },
  output: {
    filename: 'typeof-arguments.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'typeofArguments',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this'
  },
  target: 'web'
};