
// 04/12/2022 12:22 am - SSN 
// https://www.mackolicious.com/blog/reactjs-into-aspnet-core

const path = require("path");

module.exports = {
	mode: "production",

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx"]
	},
	output: {
		path: path.resolve(__dirname, "../wwwroot/ReactDist"),
		filename: "[name].js"
	},
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
			}
		]
	},

	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"react-router-dom": "ReactRouterDOM"
	}
};