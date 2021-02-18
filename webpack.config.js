let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./app/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|jpg|jpe?g|gif|svg)$/, use: { loader: "url-loader?limit=100000" }
              // limit: Number or String specifying the maximum size of a file in bytes. 
              // If the file size is equal or greater than the limit will be used.
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: { loader: "url-loader?limit=10000&mimetype=application/font-woff" }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: { loader: "file-loader" }
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  devtool: "source-map", // https://survivejs.com/webpack/building/source-maps/#inline-source-map-types
  devServer: {
    historyApiFallback: true, // https://jaxenter.com/build-reactjs-history-api-fallback-153122.html
    contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
}