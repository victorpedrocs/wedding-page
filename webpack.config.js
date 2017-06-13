const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const path = require('path');

let outputPath = path.resolve(__dirname, './bin')
    , _devtool = '#eval-source-map'
    , htmlWebpackOptions = {
        title: 'Liliane e Victor',
        hash: true,
        template: './src/index.pug',
        filename: 'index.html',
      }

if (process.env.NODE_ENV === 'production') {
  outputPath = path.resolve(__dirname, './dist/');
  devtool = 'nosources-source-map';
  htmlWebpackOptions.filename = path.resolve(__dirname, './index.html');
}

options = {
  entry: './src/js/main.js',
  output: {
    path: outputPath,
    // publicPath: '/',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader', 
        exclude: /nome_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      },
      { test: /\.pug$/, loader: 'pug-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(sass|scss)$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
      { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
      { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
      { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
      { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
    ]
  },
  stats: {
    colors: true,
  },
  plugins: [
    new HtmlWebpackPlugin(htmlWebpackOptions),
    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8 : true },
      compress: { screw_ie8: true, warnings: false },
      comments: false
    })
  ],
  devtool: _devtool
}

module.exports = options;