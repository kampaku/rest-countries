import type { Configuration } from 'webpack';
import  'webpack-dev-server'
import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import common from './webpack.common';

const devConfig: Configuration = merge<Configuration>(common, {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },

  devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 3003,
    hot: true,
    client: {
      overlay: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: true },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'],
          },
        },
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],
});

export default devConfig;
