import type { Configuration } from 'webpack';

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from './paths';

const config: Configuration = {
  entry: [paths.src + '/index.tsx'],

  output: {
    path: paths.build,
    clean: true,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [

    new HtmlWebpackPlugin({
      title: 'App',
      favicon: paths.public + '/favicon.png',
      template: paths.public + '/template.html',
      filename: 'index.html',
    }),
  ],

  module: {
    rules: [
      { test: /\.(j|t)sx?$/, use: ['babel-loader'] },

      {
        test: /\.svg$/,
        issuer: /\.(t|j)sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.svg$/,
        issuer: /\.(scss|css)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]',
        },
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]',
        },
      },

      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  }
};

export default config;
