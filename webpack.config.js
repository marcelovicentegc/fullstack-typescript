const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin({
  disable: process.env.NODE_ENV !== "development",
  outputFormat: "humanVerbose"
});

module.exports = smp.wrap({
  context: __dirname,
  mode: "development",
  entry: {
    client: "./src/client/index.tsx"
  },
  output: {
    filename: "bundle-[hash].js",
    path: path.resolve(__dirname, "dist/")
  },
  devtool: "source-map",
  node: { fs: "empty" },
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "client", "index.html"),
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env": {
        CLIENT_TCP: JSON.stringify(process.env.CLIENT_TCP),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.client.json"
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
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: true,
          output: {
            comments: false
          },
          compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          }
        },
        exclude: [/\.min\.js$/gi]
      })
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    watchContentBase: true,
    compress: true,
    port: 3000,
    inline: true,
    open: true,
    openPage: "",
    historyApiFallback: true,
    allowedHosts: ["127.0.0.0", "localhost"],
    stats: {
      colors: true
    }
  }
});
