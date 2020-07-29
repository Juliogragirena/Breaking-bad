const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
module.exports = {
  entry: {
    boostrap: path.resolve(
      __dirname,
      "node_modules/bootstrap/dist/js/bootstrap.min.js"
    ),
    bundle: path.resolve(__dirname, "src/js/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "js/[name].js",
  },


  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      
    }),
  ],
};
