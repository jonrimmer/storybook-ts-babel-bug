const webpack = require("webpack");
const path = require("path");
const ROOT_DIR = path.resolve(__dirname, "../../");
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath("dist");

const scriptExtensions = /\.(tsx|ts|js|jsx|mjs)$/;

module.exports = {
  target: "web",
  mode: "development",
  entry: {
    client: ["./src/index.tsx"],
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    path: resolvePath(BUILD_DIR, "client"),
    publicPath: "/client/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: scriptExtensions,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
