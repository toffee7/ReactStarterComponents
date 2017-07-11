
module.exports = function (config) {
  config.set({

    browsers: [ 'Chrome' ],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      'tests.webpack.js'
    ],
    plugins: [ 'karma-chrome-launcher', 'karma-chai', 'karma-mocha',
     'karma-sourcemap-loader', 'karma-webpack', 'karma-coverage',
     'karma-mocha-reporter'
   ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha','coverage' ],

    webpack: {
    
      module: {
        loaders: [
          {
            exclude : /node_modules/,
            test: /\.js?$/,
            loader: 'babel-loader' },
            {
           test: /\.js?$/,
           exclude: [/__tests__/,/node_modules/],
           loader: 'istanbul-instrumenter-loader',
        enforce: 'post' }
        ]
     }
   },


    coverageReporter: {
      reporters: [{ type: 'html' },
                  { type: 'text' }],

      dir: 'coverage/'
    }

  });
};
