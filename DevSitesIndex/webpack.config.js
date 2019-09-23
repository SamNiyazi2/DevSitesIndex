const path = require('path');

module.exports =

    [

// 09/22/2019 03:46 pm - SSN - [20190922-0822] - [010] - Plug in job status filter on job's index - update data source
// Bring up-to-date with Babel/Webpack implementation
        {
            output: {
                path: path.resolve(__dirname, './wwwroot/webpack_build'),
                filename: 'bundle_jobsIndex.js'
            },
            externals: {
                angular: 'angular'
            },


            devtool: 'inline-source-map',

            watch: true,
            watchOptions: {
                ignored: ['wwwroot/js/Angular_1_2', 'wwwroot/js/Angular_1_7', 'wwwroot/js/Angular_x', 'wwwroot/js/Angular_ui', 'wwwroot/js/tostr', 'node_modules'],
                aggregateTimeout: 300,
                poll: 1000
            }
            ,

            mode: "development",

            entry: [
                './jobs/JobsIndex_main.ts'
            ]
            ,
            context: path.resolve(__dirname, './wwwroot/js')

            ,



            module: {
                rules: [{
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
                        path.resolve(__dirname, 'wwwroot/js/tostr')
                    ]
                }
                ]
            },
            resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] }
        }


        ,





        // 09/21/2019 11:29 am - SSN - [20190921-1129] - [001] - Plug in job status filter on job's index

        {
            output: {
                path: path.resolve(__dirname, './wwwroot/webpack_build'),
                filename: 'bundle_jobsIndex.js'
            },
            externals: {
                angular: 'angular'
            },


            devtool: 'inline-source-map',

            watch: true,
            watchOptions: {
                ignored: ['wwwroot/js/Angular_1_2', 'wwwroot/js/Angular_1_7', 'wwwroot/js/Angular_x', 'wwwroot/js/Angular_ui', 'wwwroot/js/tostr', 'node_modules'],
                aggregateTimeout: 300,
                poll: 1000
            }
            ,

            mode: "development",

            entry: [
                './jobs/JobsIndex_main.ts'
            ]
            ,
            context: path.resolve(__dirname, './wwwroot/js')

            ,



            module: {
                rules: [{
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
                        path.resolve(__dirname, 'wwwroot/js/tostr')
                    ]
                }
                ]
            },
            resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] }
        }


        ,


        {
            output: {
                path: path.resolve(__dirname, './wwwroot/webpack_build'),
                filename: 'bundle_timesheetapp.js'
            },
            externals: {
                angular: 'angular'
            },

            // 09/20/2019 03:44 am - SSN - [20190920-0344] - [002] - Debuggging Webpack generated output

            //devtool: 'eval-source-map',
            // devtool: 'source-map',
            devtool: 'inline-source-map',

            watch: true,
            watchOptions: {
                ignored: ['wwwroot/js/Angular_1_2', 'wwwroot/js/Angular_1_7', 'wwwroot/js/Angular_x', 'wwwroot/js/Angular_ui', 'wwwroot/js/tostr', 'node_modules'],
                aggregateTimeout: 300,
                poll: 1000
            }
            ,

            mode: "development",

            entry: [
                './Timesheet/timesheet_main.js'
            ]
            ,
            context: path.resolve(__dirname, './wwwroot/js')

            ,



            module: {
                rules: [{
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
                        path.resolve(__dirname, 'wwwroot/js/tostr')
                    ]
                }
                ]
            },
            resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] }
        }


        ,



        {

            output: {
                path: path.resolve(__dirname, './wwwroot/webpack_build'),
                filename: 'bundle_DevSitesIndex.js'
            },

            externals: {
                angular: 'angular'
            },

            // 09/20/2019 03:44 am - SSN - [20190920-0344] - [002] - Debuggging Webpack generated output

            //devtool: 'eval-source-map',
            // devtool: 'source-map',
            devtool: 'inline-source-map',

            watch: true,
            watchOptions: {
                ignored: ['wwwroot/js/Angular_1_2', 'wwwroot/js/Angular_1_7', 'wwwroot/js/Angular_x', 'wwwroot/js/Angular_ui', 'wwwroot/js/tostr', 'node_modules'],
                aggregateTimeout: 300,
                poll: 1000
            }
            ,

            mode: "development",

            //entry: ['./Scripts/es6/main.js'],
            entry: [

                './DemoSites_index_main.ts',

            ]
            ,
            context: path.resolve(__dirname, './wwwroot/js')

            ,

            // IMPORTANT NOTE: If you are using Webpack 2 or above, replace "loaders" with "rules"
            module: {
                rules: [{
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
                        path.resolve(__dirname, 'wwwroot/js/tostr')
                    ]
                }
                ]
            },
            resolve: { extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'] }
        }


    ]


