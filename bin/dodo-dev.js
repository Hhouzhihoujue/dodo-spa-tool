#!/usr/bin/env node

const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const createWebpackConfig = require('../lib/webpack/createWebpackConfig');
const { log } = require('../lib/utils');
// eslint-disable-next-line import/no-dynamic-require
const { dodo: userConfig } = require(path.resolve('package.json'));

const webpackConfig = createWebpackConfig(userConfig, false);
const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
	open: true,
	stats: {
		colors: true,
		chunks: true
	},
	hot: true
});

const server = new WebpackDevServer(compiler, devServerOptions);

const port = userConfig && userConfig.port ? userConfig.port : 8080;

server.listen(port, () => {
	log.debug(`Starting server on http://localhost:${port}`);
});
