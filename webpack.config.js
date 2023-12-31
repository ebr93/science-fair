/* eslint-disable indent */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'earthspace.html',
      template: 'src/earthspace.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'forcemotion.html',
      template: 'src/forcemotion.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'organisms.html',
      template: 'src/organisms.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'matterenergy.html',
      template: 'src/matterenergy.html',
    }),
  ],
};
