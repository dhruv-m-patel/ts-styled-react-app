const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  devtool: 'inline-source-map',
  entry: {
    client: [
      isDevelopment && 'webpack-hot-middleware/client?reload=true',
      path.resolve(__dirname, 'src/client/index.ts'),
    ].filter(Boolean),
  },
  output: {
    filename: isProduction ? '[name].[chunkhash].js' : '[name].bundle.js',
    path: path.resolve(__dirname, './build-static'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true,
                module: 'esnext',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                // eslint-disable-next-line global-require
                require('postcss-import'),
                // eslint-disable-next-line global-require
                require('postcss-preset-env')({
                  // If you don't set this, you get the GB preset default,
                  // which is fine in most cases
                  browsers: process.env.BROWSER_SUPPORT,
                  // Setting to stage 1 for now so we don't break functionality
                  // that worked with postcss-cssnext
                  stage: 1,
                }),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackManifestPlugin({}),
    new LoadablePlugin({ writeToDisk: true }),
    isProduction &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new webpack.NoEmitOnErrorsPlugin(),
  ].filter(Boolean),
  optimization: {
    moduleIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
    ...(isProduction && {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            sourceMap: true,
            compress: true,
            mangle: true,
          },
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: true,
              },
            ],
          },
          minify: CssMinimizerPlugin.cleanCssMinify,
        }),
      ],
    }),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.module.css'],
  },
  ...(isProduction && {
    devtool: 'source-map',
    performance: {
      maxAssetSize: 200 * 1000, // Max 200kB per bundle
      maxEntrypointSize: 300 * 1000, // Max 300kB per bundle
      hints: 'warning',
    },
  }),
};
