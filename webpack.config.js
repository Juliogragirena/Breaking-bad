const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: {
    boostrap: path.resolve(__dirname,'node_modules/bootstrap/dist/js/bootstrap.min.js'),
    bundle: path.resolve(__dirname, "src/js/index.js"),
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js",
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      title: 'webpack-dev-server'
    }),
  ],
};
