const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const { SRC, DST, ASSETS_PATH, DEV_PORT } = require('./constants');

module.exports = {
  entry: {
    app: path.join(SRC, 'index.js'),
  },
  output: {
    filename: '[name].js',
    path: DST,
  },
  devServer: {
    contentBase: ASSETS_PATH,
    compress: false,
    port: DEV_PORT,
    open: true,
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(woff|woff2|otf|ttf|eot|svg|png|jpg|jpeg|gif|mp4)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [ 'file-loader' ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
        ],
      },
      {
        test: /\.(vert|frag|txt)/i,
        use: 'raw-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC, 'index.html'), 
    }),
    new MiniCssExtractPlugin({                                                                                                                                         
      filename: '[name].css',                                                                                                                                          
      chunkFilename: '[id].css',                                                                                                                                       
    }),
  ],
};
