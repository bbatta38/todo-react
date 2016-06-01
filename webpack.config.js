// webpack.config.dev.js
// var path = require('path')
// var webpack = require('webpack')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   devtool: 'cheap-eval-source-map',
//   entry: [
//     'webpack-dev-server/client?http://localhost:8080',
//     'webpack/hot/dev-server',
//     './src/js/app'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: './js/bundle.js'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: './src/index.html'
//     })
//   ],
//   module: {
//     loaders: [
// 	    {
// 	      test: /\.css$/,
// 	      loaders: ['style', 'css']
// 	    },
// 	    {
// 	      test: /\.js?$/,
// 	      loader: 'babel', // 'babel-loader' is also a legal name to reference
// 	      query: {
// 	        presets: ['es2015', 'react', 'stage-0']
// 	      }
// 	    }
//     ]
//   },
//   devServer: {
//     contentBase: './dist',
//     hot: true
//   }
// }

// webpack.config.prod.js
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/js/app'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './js/bundle.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    },
      {
        test: /\.js?$/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}