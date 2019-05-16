// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = template => [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template,
  }),
];

const dev = [new webpack.HotModuleReplacementPlugin()];

const prod = () => [
  new MiniCssExtractPlugin({
    filename: 'style/[name].[hash:5].css',
    chunkFilename: 'style/[id].css',
  }),
];

module.exports = {
  base,
  dev,
  prod,
};
