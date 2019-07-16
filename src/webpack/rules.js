const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = [
	{
		test: /\.tsx?$/,
		include: /src/,
		use: {
			loader: 'ts-loader'
		}
	},
	{
		test: /\.jsx?$/,
		include: /src/,
		use: {
			loader: 'babel-loader',
			options: {
				cacheDirectory: true,
				presets: ['@babel/preset-env', '@babel/preset-react'],
				plugins: [
					['@babel/plugin-proposal-decorators', { legacy: true }],
					['@babel/plugin-proposal-class-properties', { loose: true }],
					['import', { libraryName: 'antd', style: 'css' }],
					['@babel/plugin-syntax-dynamic-import'],
					[
						'@babel/plugin-transform-runtime',
						{
							corejs: false,
							helpers: false,
							regenerator: true,
							useESModules: false
						}
					]
				]
			}
		}
	},
	{
		test: /\.(jpg|jpeg|gif|png)$/i,
		include: /src/,
		use: {
			loader: 'file-loader',
			options: {
				name: 'images/[name].[hash:5].[ext]'
			}
		}
	},
	{
		test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		use: {
			loader: 'file-loader',
			options: {
				name: 'fonts/[name]-[hash:5].[ext]'
			}
		}
	}
];

const getRule = isProd => [
	{
		test: /\.css$/,
		include: /src/,
		exclude: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 1,
					modules: true,
					camelCase: true,
					localIdentName: '[name]__[local]--[hash:base64:5]'
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					ident: 'postcss',
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			}
		]
	},
	{
		test: /\.css$/,
		include: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{ loader: 'css-loader', options: { importLoaders: 1 } },
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			}
		]
	},
	{
		test: /\.css$/,
		include: /node_modules/,
		use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
	},
	{
		test: /\.less$/,
		include: /src/,
		exclude: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					modules: true,
					camelCase: true,
					localIdentName: '[name]__[local]--[hash:base64:5]'
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			},
			{
				loader: 'less-loader',
				options: {
					javascriptEnabled: true
				}
			}
		]
	},
	{
		test: /\.less$/,
		include: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{ loader: 'css-loader', options: { importLoaders: 2 } },
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			},
			{
				loader: 'less-loader',
				options: {
					javascriptEnabled: true
				}
			}
		]
	},
	{
		test: /\.(scss|sass)$/,
		include: /src/,
		exclude: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					importLoaders: 2,
					modules: true,
					camelCase: true,
					localIdentName: '[name]__[local]--[hash:base64:5]'
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			},
			{
				loader: 'sass-loader'
			}
		]
	},
	{
		test: /\.(scss|sass)$/,
		include: /src\/styles/,
		use: [
			isProd ? MiniCssExtractPlugin.loader : 'style-loader',
			{ loader: 'css-loader', options: { importLoaders: 2 } },
			{
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							overrideBrowserslist: ['> 0%']
						})
					]
				}
			},
			{
				loader: 'sass-loader'
			}
		]
	}
];

module.exports = {
	base,
	dev: getRule(),
	prod: getRule(true)
};
