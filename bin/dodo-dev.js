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
		all: false,
		colors: true,
		chunks: true,
		assets: true,
		errors: true,
		warnings: true,
		errorDetails: true
	},
	hot: true
});

const server = new WebpackDevServer(compiler, devServerOptions);

const port = userConfig && userConfig.port ? userConfig.port : 8080;

server.listen(port, '127.0.0.1', () => {
	log.debug(`Starting server on http://localhost:${port}`);
});
