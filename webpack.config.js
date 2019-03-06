const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: __dirname,
  mode: "development",
  entry: {
    client: "./src/client/index.tsx"
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/")
  },
  devtool: "source-map",
  node: { fs: "empty" },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "index.html"),
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json"
        },
        exclude: [/node_modules/]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "/"
        }
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    watchContentBase: true,
    compress: true,
    port: 3000,
    hot: true,
    inline: true,
    open: true,
    openPage: "",
    historyApiFallback: true,
    allowedHosts: ["127.0.0.0", "localhost"],
    stats: {
      colors: true
    }
  }
};
