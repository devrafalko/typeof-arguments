const path = require('path');
const merge = require('webpack-merge').merge;
const TerserPlugin = require('terser-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

const backend = {
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

const frontend = {
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

const prod = {
  mode: 'production',
  watch: false,
  stats: false,
  optimization: {
    minimizer: [new TerserPlugin()]
  }
};

const dev = {
  mode: 'development',
  watch: true,
  stats: {
    version: false,
    colors: true,
    warnings: false,
    assets: true,
    cached: false,
    cachedAssets: false,
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    depth: false,
    entrypoints: false,
    errors: true,
    errorDetails: true,
    hash: false,
    modules: false,
    providedExports: false,
    publicPath: false,
    timings: true,
    usedExports: false
  }
};

module.exports = (env) => {
  return [
    merge(common, env.prod ? prod : dev, backend),
    merge(common, env.prod ? prod : dev, frontend)
  ];
};