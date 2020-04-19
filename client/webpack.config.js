const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // The starting point of our React App
  entry: path.join(__dirname, '/src/index.js'),
  // Define the name of output file, and where it will be packed in
  output: {
    // We are going to be specific a file named "main.js" for build.
    filename: 'main.js',
    path: path.join(__dirname, '/dist'),
  },
  module: {
    // Define rules for Webpack
    rules: [
      {
        // Only pack file js or jsx (test the file)
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // User babel loader. Loader can be considered as a bridge between babel and Webpack
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/public/index.html'),
      favicon: path.join(__dirname, '/public/favicon.ico'),
    }),
  ],
  devServer: {
    // We need this to use React Route in webpack dev server
    historyApiFallback: true,
  },
};
