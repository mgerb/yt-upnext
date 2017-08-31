const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/app.tsx',
    'youtube.content': './content/youtube.content.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.ts(x)?$/,
        loaders: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.ts(x)?$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'popup.html',
      template: './popup.html',
    }),
    new CopyWebpackPlugin([
      {
        from: './manifest.json',
        to: './manifest.json',
      },
    ]),
  ],
};
