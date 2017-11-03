'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
            //plugins: [require('@babel/plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
      },
      {
        test: require.resolve('jquery.scrollto'),
        use: [{
            loader: 'expose-loader',
            options: 'scrollto'
        }]
      }
    ]
  }
};
