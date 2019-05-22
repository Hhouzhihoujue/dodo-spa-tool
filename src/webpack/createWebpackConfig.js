const path = require('path');
const { base: baseRules, dev: devRules, prod: prodRules } = require('./rules');
const {
	base: basePlugins,
	dev: devPlugins,
	prod: prodPlugins
} = require('./plugins');
const optimization = require('./optimization');

module.exports = (userConfig, isProd) => {
	const {
		entry = './src/index.js',
		output = 'dist',
		template = 'src/index.html',
		analysis = false
	} = userConfig || {};
	const rules = isProd
		? [...baseRules, ...prodRules]
		: [...baseRules, ...devRules];
	const plugins = isProd
		? [...basePlugins(template), ...prodPlugins(analysis)]
		: [...basePlugins(template), ...devPlugins];
	return {
		mode: isProd ? 'production' : 'development',
		entry: path.resolve(entry),
		output: {
			path: path.resolve(output),
			filename: '[name].[hash:5].bundle.js'
		},
		resolve: {
			extensions: ['.js', '.jsx', '.json']
		},
		module: {
			rules
		},
		plugins,
		optimization: isProd ? optimization : {}
	};
};
