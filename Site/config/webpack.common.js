const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, '../../../AWS/historybook/'),
    filename: "[name].[contenthash].js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: [ "style-loader", "css-loader", "sass-loader" ],
        test: /\.(css|scss|sass)$/,
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.svg$/,
        loader: "file-loader",
        options: {
          context: path.join(__dirname, '../src/'),
          name: '[path][name].[ext]',
        }
      },
    ],
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".scss"],
    modules: ['node_modules', path.join(__dirname, '../src')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
};
