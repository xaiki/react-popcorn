var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel', 'react-map-styles'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg(\?.*)?$|\.eot(\?.*)?$|\.woff2?(\?.*)?$|\.ttf(\?.*)?$|\.wav$|\.mp3$/,
        loader: "file"
    }],
    preLoaders: [
      {test: /\/polymer\/components\/.+\.js$/, loader: 'polymer-loader?templateExtension=html&styleExtension=styl'}
    ]

  }
};
