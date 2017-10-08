var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'react/dist/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './react/src/index.js',
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /.jsx?$/,
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
