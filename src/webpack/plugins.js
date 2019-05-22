// const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const base = template => [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template
	})
];

const dev = [new webpack.HotModuleReplacementPlugin()];

const prod = analysis => {
	const plugins = [
		new MiniCssExtractPlugin({
			filename: 'style/[name].[hash:5].css',
			chunkFilename: 'style/[id].[hash:5].css'
		})
	];
	if (analysis) {
		plugins.push(new BundleAnalyzerPlugin());
	}
	return plugins;
};

module.exports = {
	base,
	dev,
	prod
};
