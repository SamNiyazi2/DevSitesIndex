
// 05/03/2022 09:33 am - SSN - [20220502-1159] - [017] - Create table DevSite_Job_LineItem

import React, { useState, useEffect } from 'react';

import { createRoot } from 'react-dom/client';


import { StaticModal } from '../ModalPopups/StaticModal';

import TimelogForm from "../Timelog/TimelogSelector";
import { DevSiteTimelogList } from "../Timelog/DevSiteTimelogList";

// 05/06/2022 08:36 pm - SSN - [20220506-0327] - [012] - SignalR Hub
import * as signalR from "@microsoft/signalr";
//import { ssn_SignalR_util_instance } from '../Util/SignalR/ssn_SignalR_Util_React';


function App(props) {

    

    const [counter, setCounter] = useState(props.counter_101);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [doCloseTimelogPopupTime, setDoCloseTimelogPopupTime] = useState(new Date());
    

     

    const resetControl = () => {

        console.log('%c ' + 'ButtonForListingTimeLogs - resetControl - 20220511-1652', 'color:blue;font-size:24pt;');

        setCurrentDate(new Date());
        setDoCloseTimelogPopupTime(new Date());

    }

    return (
        <>
           
            <TimelogForm devSiteId={props.devSiteId} key={props.key3} counter_101={props.counter_101} refreshControl={resetControl} doClose={doCloseTimelogPopupTime} />
            <DevSiteTimelogList devSiteId={props.devSiteId} currentDate={currentDate} />
        </>
            );
}


let listOfControls = [];



function setupControls() {



    console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] START`, 'color:yellow;font-size:18pt;');

    while (listOfControls.length > 0) {

        console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] LOOP`, 'color:yellow;font-size:18pt;');

        const entry2 = listOfControls.pop();

        console.log('%c ' + 'ButtonForListingTimelogs - remove object from dom', 'color:red;font-size:18pt;');
        const theParent = $(entry2).parent();
        $(theParent).empty();

    };

    console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] END`, 'color:yellow;font-size:18pt;');



    const containers = document.querySelectorAll("[ssn-cmd='timelogReactCompoent']");

    containers.forEach((elem) => {

        listOfControls.push(elem);

        let devSiteId = elem.getAttribute("devsiteid");
        let key2 = elem.getAttribute("key");

        let counter_101 = elem.getAttribute("counter_101");

        if (counter_101 == null) {
            counter_101 = "12001";
        }

        console.log('%c ' + 'ButtonForListingTimeLogs - 20220504-1552-xxxxxxxxx', 'color:yellow;font-size:12pt;');
        console.log(devSiteId);
        console.log(key2);
        console.log(counter_101);
        console.log('====================');


        let root = createRoot(elem);


        root.render(<App devSiteId={devSiteId} key3={key2} counter_101={counter_101} />);

    });

}





console.log('%c ' + 'ButtonForListingTimeLogs - DEFAULT - 20220508-1050', 'color:yellow;font-size:32pt;');


let connection = new signalR.HubConnectionBuilder()
    .withUrl("/SignalRHub")
    .build();



let lastDateTime = new Date();
let refreshCount = 0;

connection.on("ReceiveMessage", function (user, message, dateTime) {


    console.log('');
    console.log('');
    console.log('%c ' + 'SignalR - 20220506-0347-REACT-ReceiveMessage', 'color:PINK;font-size:24pt;');
    console.log(user);
    console.log(message);

    if (message == "refreshControlsList") {


        if (lastDateTime != dateTime || refreshCount == 0 ) {
            lastDateTime == dateTime
            refreshCount++;
            console.log('%c ' + `[${lastDateTime}]`, 'color:pink;font-size:18pt;');
            console.log('%c ' + `[${dateTime}]`, 'color:pink;font-size:18pt;');
            console.log('%c ' + `refreshCount: [${refreshCount}]`, 'color:pink;font-size:18pt;');

            setTimeout(() => {
                console.log('%c ' + `[${lastDateTime}]`, 'color:blue;font-size:18pt;');
                console.log('%c ' + `[${dateTime}]`, 'color:blue;font-size:18pt;');
                setupControls();
            }, 1000);
        } else {
            console.log('%c ' + `BYPASS refreshControlsList 2022008-0441 - refreshCount: [${refreshCount}]`, 'color:RED;font-size:18pt;');

        }

    }

    console.log('');
    console.log('');

});


connection.start().then(function (p1) {

    console.log('%c ' + 'SignalR REACT - 20220506-0409-aaa - connection start', 'color:red;font-size:36pt;');
    console.log('p1:');
    console.log(p1);

}).catch(function (err) {

    console.log('%c ' + 'SignalR REACT - 20220506-0409-ERR - connection start error', 'color:brown;font-size:36pt;');
    console.dir(err);

    return console.error(err.toString());
});

