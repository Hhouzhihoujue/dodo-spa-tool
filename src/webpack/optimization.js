const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	minimizer: [
		new TerserPlugin(
			{
				cache: true,
				parallel: true,
				terserOptions: {
					output: {
						comments: false
					}
				}
			},
			new OptimizeCSSAssetsPlugin({})
		)
	]
};
