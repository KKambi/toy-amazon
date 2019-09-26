//참고: https://ui.toast.com/fe-guide/ko_BUNDLER/
//참고: https://webpack.js.org/loaders/sass-loader/
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// var webpack = require('webpack');
// var dotenv = require('dotenv').config({path: __dirname + './.env'});

module.exports = {
  entry: {
    index: './src/entry/index.entry.js',
    login: './src/entry/login.entry.js',
    admin: './src/entry/admin.entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' 
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
        //   'babel-loader',
          'eslint-loader'
        ]
      }
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    //     "process.env": JSON.stringify(dotenv.parsed)
    // }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin()
  ]
}