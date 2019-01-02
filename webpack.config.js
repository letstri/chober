const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const LIBRARY_SHORT_NAME = '_c';

module.exports = env => ({
  entry: './index.js',
  mode: env,
  devtool: 'none',
  output: {
    filename: env === 'production' ? 'chober.min.js' : 'chober.js',
    path: path.resolve(__dirname, 'dist'),
    library: LIBRARY_SHORT_NAME,
    libraryExport: 'default',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self === \'undefined\' ? this : self',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
});
