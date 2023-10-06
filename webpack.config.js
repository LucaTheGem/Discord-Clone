var path = require('path');

module.exports = {
  entry: './frontend/tiscord.jsx',
  output: {
path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i, //jp?eg previous
        loader: 'file-loader',
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};