module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: __dirname + '/src/public',
    publicPath: '/', 
    filename: 'client.bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
