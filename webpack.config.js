const path = require("path");
const Dotenv = require("dotenv-webpack");
 

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode:   "production" ,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    allowedHosts: "all",
    static: {
      directory: path.join(__dirname, "src"),
    },
    compress: true,
    port: 9000,
  },
  plugins: [new Dotenv()],
  performance: {
    hints: false,
    maxAssetSize: 950000,  
    maxEntrypointSize: 950000, 
  }
};
