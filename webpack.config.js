module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015','react']
      }
    }]
  }
};