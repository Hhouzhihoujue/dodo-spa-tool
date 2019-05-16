#!/usr/bin/env node

const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const createWebpackConfig = require('../src/createWebpackConfig');
// eslint-disable-next-line import/no-dynamic-require
const { dodo: userConfig } = require(path.resolve('package.json'));
const isProd = process.env.NODE_ENV;

const webpackConfig = createWebpackConfig(userConfig, isProd);

const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true,
    chunks: true,
  },
  hot: true,
});

const server = new WebpackDevServer(compiler, devServerOptions);

const port = userConfig && userConfig.port ? userConfig.port : 8080;

server.listen(port, '127.0.0.1', () => {
  console.log(`Starting server on http://localhost:${port}`);
});
