const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const HtmlWebpackScriptAttributesPlugin = require('html-webpack-script-attributes-plugin')
module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new HtmlWebpackScriptAttributesPlugin({
      crossorigin: 'anonymous'
    })
  ]
};