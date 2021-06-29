
// 12/13/2019 11:46 am - SSN - [20191213-1145] - [001] - Adding Karma Jasmine testing for AngularJS
const path = require('path');


// Karma configuration
// Generated on Fri Dec 13 2019 11:39:33 GMT-0600 (Central Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         frameworks: ['jasmine'],
      //  frameworks: ['jasmine', 'karma-typescript'],

        // list of files / patterns to load in the browser
        files: [

            // 12/13/2019 12:05 pm - SSN - [20191213-1145] - [003] - Adding Karma Jasmine testing for AngularJS
            // https://zirho.github.io/2016/06/06/karma-es6/

            //'wwwroot/js/*.js',
            //'wwwroot/jstest/*.js'
            //  
            'wwwroot/lib/Angular_1_7/angular.js',
            'wwwroot/lib/Angular_1_7/angular-mocks.js',
            'wwwroot/lib/jquery/dist/jquery.js',
            'wwwroot/lib/knockout/knockout.js', 
            { pattern: 'karma-test-context.js', watched: false }
        ],


        // list of files / patterns to exclude
        exclude: [ 
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor


        // 12/13/2019 12:07 pm - SSN - [20191213-1145] - [005] - Adding Karma Jasmine testing for AngularJS
        // https://zirho.github.io/2016/06/06/karma-es6/

        //  preprocessors: {
        //},


        preprocessors: {
            'karma-test-context.js': ['webpack']
        },
        webpack: {

      //      resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] },
            externals: {
                angular: 'angular',
                $: '$',
                ko:'ko'
            },

            module: {
                rules: [
                    {
                        loader: ['babel-loader', "source-map-loader"],
                        test: /\.(js|ts)$/,
                        exclude: /node_modules/
                    },
                    {
                        test: /\.tsx?$/,
                        use: ['ts-loader', "source-map-loader"],
                        exclude: [
                            path.resolve(__dirname, 'node_modules'),
                            path.resolve(__dirname, 'wwwroot/lib'),
                            path.resolve(__dirname, 'wwwroot/js/Angular_1_2'),
                            path.resolve(__dirname, 'wwwroot/js/Angular_1_7'),
                            path.resolve(__dirname, 'wwwroot/js/Angular_x'),
                            path.resolve(__dirname, 'wwwroot/js/Angular_ui'),
                            path.resolve(__dirname, 'wwwroot/js/tostr'),
                            path.resolve(__dirname, 'timesheetsSupport7')
                        ]
                    }
                ]


            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        },




        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter

        // 12/13/2019 11:41 am - SSN - Can we use junit???
        // https://blogs.msdn.microsoft.com/wushuai/2017/10/29/javascript-unit-test-intergration-in-vsts-build-pipeline/
        //  reporters: ['progress', 'junit'],

       // reporters: ['progress'],
        reporters: ['verbose', 'junit', 'progress', 'spec'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

        // 12/13/2019 12:04 pm - SSN - [20191213-1145] - [002] - Adding Karma Jasmine testing for AngularJS
        // https://zirho.github.io/2016/06/06/karma-es6/
        //    browsers: ['Chrome'],
        browsers: ['PhantomJS','Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,


        plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-webpack', 'karma-junit-reporter', 'karma-verbose-reporter', 'karma-spec-reporter','karma-chrome-launcher']

    });
};
