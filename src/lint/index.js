const path = require('path');

module.exports = ({ fix = false }) => {
	return {
		useEslintrc: false,
		configFile: path.resolve(__dirname, './eslintrc.js'),
		ignorePath: path.resolve(__dirname, './eslintignore'),
		extensions: ['.js', '.jsx'],
		fix
	};
};
