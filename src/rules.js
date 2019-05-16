const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base = [
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
          ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
          ['@babel/plugin-syntax-dynamic-import'],
          ['@babel/plugin-transform-runtime', {
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
          }],
        ],
      },
    },
  },
  {
    test: /\.(jpg|jpeg|gif|png)$/i,
    include: /src/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'images/[name].[hash:5].[ext]',
      },
    },
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: {
      loader: 'file-loader',
      options: {
        name: 'fonts/[name]-[hash:5].[ext]',
      },
    },
  },
];

const dev = [
  {
    test: /\.css$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: [
                '> 0%',
              ],
            }),
          ],
        },
      },
    ],
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 2 } },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: [
                '> 0%',
              ],
            }),
          ],
        },
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  },
];

const prod = [
  {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: [
                '> 0%',
              ],
            }),
          ],
        },
      },
    ],
  },
  {
    test: /\.less$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            autoprefixer({
              browsers: [
                '> 0%',
              ],
            }),
          ],
        },
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  },
];

module.exports = {
  base,
  dev,
  prod,
};
