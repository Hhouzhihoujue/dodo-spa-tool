#!/usr/bin/env node

const path = require('path');
const rimraf = require('rimraf');
const Webpack = require('webpack');
const createWebpackConfig = require('../lib/createWebpackConfig');
// eslint-disable-next-line import/no-dynamic-require
const { dodo: userConfig } = require(path.resolve('package.json'));
const isProd = process.env.NODE_ENV === 'production';
const webpackConfig = createWebpackConfig(userConfig, isProd);
const compiler = Webpack(webpackConfig);

rimraf.sync(path.resolve('dist'));

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
  }
  const info = stats.toString({
    colors: true,
    chunks: true,
  });
  console.log(info);
});
