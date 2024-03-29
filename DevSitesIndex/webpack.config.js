const path = require('path');

var mode_local = "";

var x = 1;

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

    watch: false,  // until we fix a file for product
    watchOptions: {
        ignored: ['wwwroot/js/Angular_1_2', 'wwwroot/js/Angular_1_7', 'wwwroot/js/Angular_x', 'wwwroot/js/Angular_ui', 'wwwroot/js/tostr', 'node_modules', 'timesheetsSupport7'],
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
                path.resolve(__dirname, 'wwwroot/js/tostr'),
                path.resolve(__dirname, 'timesheetsSupport7')
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
            './Timesheet/timesheet_main.ts'
        ]


    }



    ,



    {

        ...d_master,


        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_DemoSites_index.js'
        },


        entry: [
            './DevSite/DemoSites_index_main.ts'
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
            './DevSite/DemoSites_index_p3_main.ts'
        ]

    }



    ,





    // 10/04/2019 04:45 pm - SSN - Not sure if we need this.  Angular 7.
    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_Site_only.js'
        },


        entry: [
            // ERROR in Debug Failure. False expression: Host should not return a redirect source file from `getSourceFile`
            // 04/22/2022 08:50 am - SSN - [20220422-0850] - [001] - Find source of duplicate call to site.ts
            './site_v02.ts',
            //            './site_only_main.ts',

            // 12/13/2019 07:35 pm - SSN - [20191213-1935] - Seperate CodeReference_Pages from bundle_site_only
            //            './CodeReference_Pages.ts',
            './Util/ChangeMonitor/ChangeMonitor.ts'
        ]

    },



    // 12/13/2019 07:35 pm - SSN - [20191213-1935] - Seperate CodeReference_Pages from bundle_site_only

    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_CodeReference_Pages.js'
        },


        entry: [
            './CodeReference/CodeReference_Pages_main.ts'
        ]

    },






    // 11/18/2019 01:34 pm - SSN - [20191118-1316]  Added

    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_DemoSites_Pages.js'
        },


        entry: [
            './DevSite/DemoSites_Pages.ts'
        ]

    }
  
    ,


    // 11/23/2019 09:19 am - SSN - Adding


    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_Temp_Support.js'
        },


        entry: [
            './Temp_Support_main.ts'
        ]

    }




    ,


    // 12/03/2019 12:09 am - SSN - [20191202-2353] - [005] - DisplayCode - Adding


    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_main_101.js'
        },


        entry: [
            './util/main_101.ts'
        ]

    }




    ,

    // 01/02/2020 12:55 pm - SSN - [20200102-1234] - [003] - Add AngularJS login


    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_users.js'
        },


        entry: [
            './users/users_main.ts'
        ]

    }


    // 04/25/2022 07:21 pm - SSN - Takeout. Embed in site_v02.ts
    //// 08/26/2020 07:27 pm - SSN - [20200826-1927] - [002] - Format textarea for edit 
    //,

    //{
    //    ...d_master,

    //    output: {
    //        path: path.resolve(__dirname, './wwwroot/webpack_build'),
    //        filename: 'bundle_TextArea_util_0718.js'
    //    },


    //    entry: [
    //        './util/TextArea_util_0718.ts'
    //    ]

    //}






    // 04/24/2022 04:42 am - SSN - Adding devSiteTechnologies to DevSite detail
    ,

    {
        ...d_master,

        output: {
            path: path.resolve(__dirname, './wwwroot/webpack_build'),
            filename: 'bundle_DevSite_Detail.js'
        },


        entry: [
            './DevSite/DevSite_Detail_main.ts'
        ]

    }


];




module.exports = config;
