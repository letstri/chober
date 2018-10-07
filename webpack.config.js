const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const LIBRARY_SHORT_NAME = '_c';

module.exports = env => ({
  entry: './index.js',
  mode: env,
  devtool: 'source-map',
  output: {
    filename: env === 'development' ? 'chober.js' : 'chober.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: LIBRARY_SHORT_NAME,
    libraryTarget: 'umd',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          keep_fnames: true,
        },
      }),
    ],
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
