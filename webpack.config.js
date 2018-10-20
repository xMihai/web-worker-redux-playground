const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html',
})

const copyPlugin = new CopyWebpackPlugin([{ from: './src/images', to: 'images' }])

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [htmlPlugin, copyPlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
}
