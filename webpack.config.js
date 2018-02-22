const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
    './Style/Home.css'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader",
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ],
  },
};
