const path = require('path');
const { base: baseRules, dev: devRules, prod: prodRules } = require('./rules');
const { base: basePlugins, dev: devPlugins, prod: prodPlugins } = require('./plugins');
const optimization = require('./optimization');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (userConfig, isProd) => {
  const { entry = 'src/index.js', output = 'dist', template = 'src/index.html' } = userConfig || {};
  const rules = isProd ? [...baseRules, ...prodRules] : [...baseRules, ...devRules];
  const plugins = isProd
    ? [...basePlugins(template), ...prodPlugins(output)]
    : [...basePlugins(template), ...devPlugins];
  return {
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
      path: path.resolve(output),
      filename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
    module: {
      rules,
    },
    plugins,
    optimization: isProd ? optimization : {},
  };
};
