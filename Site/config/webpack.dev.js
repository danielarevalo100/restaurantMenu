const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    contentBase: "../../../AWS/historybook/",
    open: "chrome",
    hot: true,
    historyApiFallback: true,
    port: 8082
  },
  target: "web",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to  : 'assets'
        }
      ]
    })
  ],
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
