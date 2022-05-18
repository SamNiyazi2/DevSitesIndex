
// 04/12/2022 12:22 am - SSN 
// https://www.mackolicious.com/blog/reactjs-into-aspnet-core

const path = require("path");

var d_master = {

    mode: "production",

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    //output: {
    //	path: path.resolve(__dirname, "../wwwroot/ReactDist"),
    //	filename: "[name].js"
    //},
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                // 05/03/2022 10:29 am - SSN - [20220502-1159] - [018] - Create table DevSite_Job_LineItem
                // https://programmingwithmosh.com/javascript/importing-css-files-in-react/
                // npm i css-loader style-loader --save-dev
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-router-dom": "ReactRouterDOM"
    }
};









var config = [



    {
        ...d_master,


        output: {
            path: path.resolve(__dirname, "../wwwroot/ReactDist"),
            //		filename: "[name].js"
            filename: "bundle_react_main.js"
        }
        ,
        entry: [
            './src/index.tsx'
        ]

    }


    ,


    // 05/01/2022 01:13 am - SSN - [20220501-0047] - [003] - Create DevSite timelog association selector

    {
        ...d_master,


        output: {
            path: path.resolve(__dirname, "../wwwroot/ReactDist"),
            filename: "bundle_react_DevSiteTimelogSelector.js"
        }
        ,
        entry: [
            './src/DevSite/ButtonForListingTimelogs.tsx'
        ]

    }
    ,


    // 05/12/2022 10:26 pm - SSN - Creating login option

    {
        ...d_master,


        output: {
            path: path.resolve(__dirname, "../wwwroot/ReactDist"),
            filename: "bundle_react_Users.js"
        }
        ,
        entry: [
            './src/Users/AuthenticateUser.tsx'
        ]

    }

    

]



module.exports = config;

