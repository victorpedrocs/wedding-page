const path = require('path');

options = {
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
        test: /\.(woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: './fonts/[name].[ext]',
          publicPath: '../',
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