var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var dev = process.env.ASPNETCORE_ENVIRONMENT === "Development";
var path = require("path");
var merge = require("extendify")({ isDeep: true, arrays: "replace" });

var config = {
  entry: {
    main: path.join(__dirname, "boot.tsx"),
  },
  output: {
    path: path.join(__dirname, "../spa/", "wwwroot"),
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, use: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
    ],
  },
  mode: dev ? "development" : "production",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.ejs"),
      inject: true,
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
