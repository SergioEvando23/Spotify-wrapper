import { join } from 'path'

const include = join(__dirname, 'src')

export default {
  mode: 'development',
  entry: './src/index',
  target: 'node',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
        include
      },
    ]
  }
}
