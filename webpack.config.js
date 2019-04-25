const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  cache: true,
  watch: false,
  entry: {
    app: path.resolve(__dirname, 'client/index.js'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-proposal-export-default-from',
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tpl\.html$/,
        use: 'raw-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'client'),
    historyApiFallback: {
      index: 'index.html'
    }
  },
};
