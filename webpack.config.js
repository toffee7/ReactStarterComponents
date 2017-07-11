var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('dev') ,
        'EMPLOYEE_SERVICE_API': JSON.stringify('http://lnyeqtdsap1u.nam.nsroot.net:8443/employee-service/api/v1/employee/details/')      
      }
    })
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
