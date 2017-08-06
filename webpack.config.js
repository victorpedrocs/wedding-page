const path = require('path');

options = {
  watch: true,
  entry: './src/js/entry.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,
        options: {
          presets: ['es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader' },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]',
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map'
}

module.exports = options;