const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = template => [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template,
  }),
];

const dev = [new webpack.HotModuleReplacementPlugin()];

const prod = output => [
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[hash:5].css',
    chunkFilename: 'styles/[id].css',
  }),
  new CleanWebpackPlugin(path.resolve(output)),
];

module.exports = {
  base,
  dev,
  prod,
};
