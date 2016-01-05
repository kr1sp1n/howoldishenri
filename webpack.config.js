var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: '.',
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  }
}
