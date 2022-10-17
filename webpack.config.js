const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./dist", "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
    open: true,
   
    hot: true ,
   
    liveReload: true
  },
  module: {
    rules: [{  test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
    exclude: /node_modules/, //folder to be excluded
    use:  'babel-loader' //loader which we are going to use 
}],
}
};