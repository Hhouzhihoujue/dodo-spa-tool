module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'extends': ['airbnb', 'prettier', 'prettier/react'],
	'plugins': ['prettier'],
	'rules': {
		'prettier/prettier': 'error',
		'no-console': 'off',
		'global-require': 'off',
		'import/no-unresolved': 'off',
		'no-param-reassign': 'off',
		'no-underscore-dangle': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'quotes': ['error', 'single'],
		'semi': ['error', 'always']
	},
};