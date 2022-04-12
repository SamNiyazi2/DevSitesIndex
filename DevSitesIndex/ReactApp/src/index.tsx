
// 04/12/2022 12:24 am - SSM
// https://www.mackolicious.com/blog/reactjs-into-aspnet-core

import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

ReactDOM.render(
	<React.StrictMode>
	<App />
	</React.StrictMode>,
	document.getElementById("ReactContent")
);