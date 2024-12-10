/* eslint-disable no-undef */
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurantDB-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://kit.fontawesome.com/dbc9c5a82e.js'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'fontawesome-api',
          },
        },
        {
          urlPattern: ({ url }) => url.href.startsWith('https://ka-f.fontawesome.com/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'fontawesome-api',
          },
        },
      ],
    }),
  ],
});