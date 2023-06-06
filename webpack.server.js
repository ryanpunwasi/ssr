const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");
const config = {
  // Inform webpack that we are building a bindle for NodeJS
  target: "node",
  // Entry point
  entry: "./src/index.js",
  // Where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // Tells webpack to not bundle node_modules libraries into bundle
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
