var client = {
  entry: { 
    client: './src/client/index.js',
    admin: './src/client/admin.js'
  },
  output: {
    path: __dirname + '/src/public',
    publicPath: '/', 
    filename: '[name].bundle.js'
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

module.exports = client;