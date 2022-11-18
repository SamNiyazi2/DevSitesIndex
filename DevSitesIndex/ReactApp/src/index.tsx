
// 04/12/2022 12:24 am - SSM
// https://www.mackolicious.com/blog/reactjs-into-aspnet-core

import * as React from "react";

// 04/16/2022 11:59 pm - SSN - [20220416-2359] - [001] - Replace ReactDOM.render with  createRoot root.render 
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
// import * as ReactDOM from "react-dom";

import { createRoot } from 'react-dom/client';



import { App } from "./components/App";

const container = document.getElementById("ReactContent")

// 04/16/2022 11:59 pm - SSN - [20220416-2359] - [002] - Replace ReactDOM.render with  createRoot root.render
// ReactDOM.render(

// 11/17/2022 10:52 pm - SSN - Check container
if (container) {

    const root = createRoot(container);


    root.render(
        // [20220416-2359] - [002] - End

        <App />
        //document.getElementById("ReactContent")
    );

}
