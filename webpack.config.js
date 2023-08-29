const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    ship: './src/ship.js',
    gameboard: './src/gameboard.js',
    player: './src/player.js',
    game: './src/game.js',
    index: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html'
    })
  ],

  mode: 'development',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
}
