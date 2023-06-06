const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const config = {
  // Entry point
  entry: "./src/client/client.js",
  // Where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
