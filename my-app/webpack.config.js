const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const dist = path.resolve(__dirname, "dist");
const staticFilesSrc = path.resolve(__dirname, "static");

module.exports = {
  devServer: {
    port: 8000,
    static: {
      directory: dist,
    },
    historyApiFallback: {
      index: '/'
    },
    open: true,
  },
  entry: './main.js',
  output: {
    path: dist,
    filename: "main.js"
  },
  experiments: {
    syncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
        from: staticFilesSrc, to: dist
      }]
    }),
  ],
};
