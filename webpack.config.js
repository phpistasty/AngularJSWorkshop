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
  devtool: 'eval-source-map',
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
              'transform-function-bind',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
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
    hot: true,
    historyApiFallback: {
      index: 'index.html'
    },
    proxy: {
      '/api': 'http://localhost:8081/',
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ]
};
