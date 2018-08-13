const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HTMLPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = env => {
  const isProduction = env === "production";

  return {
    entry: "./src/app.jsx",
    output: {
      path: path.join(__dirname, "public"),
      filename: "assets/scripts/bundle.js"
    },
    module: {
      rules: [
        // JavaScript and JSX files loader
        {
          test: /\.jsx|js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },

        // Images loader
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/images/",
                name: "[name].[ext]"
              }
            },
            {
              loader: "img-loader",
              options: {
                enabled: isProduction
              }
            }
          ]
        },

        // SVG loader
        {
          test: /\.svg$/,
          loader: "svg-sprite-loader",
          options: {
            extract: true,
            spriteFilename: "assets/images/sprite.svg"
          }
        },

        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },

        // Styles loader
        {
          test: /\.s|css$/,
          exclude: [/node_modules/, /\.svg$/],
          use: ExtractTextPlugin.extract({
            publicPath: "../../",
            use: [
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: true,
                  localIdentName: "[local]"
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },

    // Plugins
    plugins: [
      new HTMLPlugin({
        filename: "index.html",
        title: "DITP | Desk",
        template: "./src/templates/index.html",
        minify: {
          collapseWhitespace: isProduction
        }
      }),
      new SpriteLoaderPlugin({
        plainSprite: true
      }),
      new ExtractTextPlugin("assets/styles/styles.css"),
      new BrowserSyncPlugin(
        {
          host: "localhost",
          port: 3000,
          proxy: "http://localhost:8080/",
          notify: false,
          open: false
        },
        {
          reload: false
        }
      ),
      new CopyWebpackPlugin([
        { from: "./src/styles/global.css", to: "assets/styles/global.css" }
      ]),
      new webpack.DefinePlugin({
        "process.env.API_URL": JSON.stringify(
          process.env.API_URL || "localhost"
        )
      })
    ],

    // Resolve extensions and modules paths
    resolve: {
      extensions: [".js", ".jsx"],
      modules: ["./src", "./node_modules"],
      alias: {
        Components: path.join(__dirname, "src", "components"),
        Reducers: path.join(__dirname, "src", "reducers"),
        Routers: path.join(__dirname, "src", "routers"),
        Actions: path.join(__dirname, "src", "actions"),
        Config: path.join(__dirname, "src", "config")
      }
    },

    // Source maps
    devtool: isProduction ? "source-map" : "inline-source-map",

    // Webpack Dev Server configuration
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      stats: {
        all: false,
        warnings: true,
        errors: true,
        errorDetails: true
      }
    }
  };
};
