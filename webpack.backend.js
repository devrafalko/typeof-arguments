const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index:'./src/typeof-arguments.js'
  },
  output: {
    filename: 'typeof-arguments.node.js',
    path: path.resolve(__dirname, 'dist'),
    library:'typeofArguments',
    libraryTarget: 'commonjs2',
    libraryExport:'default',
    globalObject: 'this'
  },
  target:'node',
  externals: [nodeExternals()]
};