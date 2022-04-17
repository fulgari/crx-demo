const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const TransformJson = require("transform-json-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "webpack_build"),
    iife: true,
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new TransformJson({
      filename: "manifest.json",
      source: __dirname + "/src/manifest.json",
      object: {
        name: "crx-demo__webpack",
        version: "1.0.1",
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/manifest.json", to: "." },
        { from: "src/settings/", to: "./settings/" },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
