const path = require('path');

var mode_local = "";

var x = 2;

switch (x) {
    case 1: mode_local = "development"; break;
    case 2: mode_local = "production"; break;

}

var d_master = {

    mode: mode_local,

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


var config = [





    // 09/22/2019 03:46 pm - SSN - [20190922-0822] - [010] - Plug in job status filter on job's index - update data source
    // Bring up-to-date with Babel/Webpack implementation


    // 09/21/2019 11:29 am - SSN - [20190921-1129] - [001] - Plug in job status filter on job's index

    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_jobsIndex.js'
        },


        entry: [
            './jobs/JobsIndex_main.ts'
        ]

    }






    ,





    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_timesheetapp.js'
        },


        entry: [
            './Timesheet/timesheet_main.js'
        ]


    }



    ,



    {

        ...d_master,


        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_DevSitesIndex.js'
        },


        entry: [
            './DemoSites_index_main.ts',
        ]

    }





    ,





// 09/26/2019 06:52 am - SSN - [20190926-0638] - [005] - Move scripts from index_p1.cshtml to demoSites_index_p1
    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_DevSitesIndex_p3.js'
        },


        entry: [
            './DemoSites_index_p3_main.ts'
        ]

    }








];




module.exports = config;
