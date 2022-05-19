
// 05/03/2022 09:33 am - SSN - [20220502-1159] - [017] - Create table DevSite_Job_LineItem

import React, { useState, useEffect } from 'react';

import { createRoot } from 'react-dom/client';


import { StaticModal } from '../ModalPopups/StaticModal';

import TimelogForm from "../Timelog/TimelogSelector";
import { DevSiteTimelogList } from "../Timelog/DevSiteTimelogList";

// 05/06/2022 08:36 pm - SSN - [20220506-0327] - [012] - SignalR Hub
// import * as signalR from "@microsoft/signalr";
import { ssn_SignalR_util_React } from '../Util/SignalR/ssn_SignalR_Util_React';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { ISignalR_MessageRecord } from '../Util/SignalR/ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';


function App(props) {



    const [counter, setCounter] = useState(props.counter_101);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [doCloseTimelogPopupTime, setDoCloseTimelogPopupTime] = useState(new Date());




    const resetControl = () => {

        console.log('%c ' + 'ButtonForListingTimeLogs - resetControl - 20220511-1652', 'color:blue;font-size:12pt;');

        setCurrentDate(new Date());
        setDoCloseTimelogPopupTime(new Date());

    }

    return (
        <>

            <TimelogForm devSiteId={props.devSiteId} key={props.key3} counter_101={props.counter_101} refreshControl={resetControl} doCloseModal={doCloseTimelogPopupTime} />
            <DevSiteTimelogList devSiteId={props.devSiteId} currentDate={currentDate} />
        </>
    );
}


let listOfControls = [];



function setupDevSiteTimelogControls(callSource: string) {



    console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] START [${callSource}]`, 'color:yellow;font-size:12pt;');

    while (listOfControls.length > 0) {

        console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] LOOP [${callSource}]`, 'color:yellow;font-size:12pt;');

        const entry2 = listOfControls.pop();

        console.log('%c ' + 'ButtonForListingTimelogs - remove object from dom', 'color:red;font-size:12pt;');
        const theParent = $(entry2).parent();
        $(theParent).empty();

    };

    console.log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] END [${callSource}]`, 'color:yellow;font-size:12pt;');



    const containers = document.querySelectorAll("[ssn-cmd*=timelogReactCompoent]");

    containers.forEach((elem) => {

        console.log('%c ' + `ButtonForListingTimelogs - add control [${listOfControls.length}]  [${callSource}]`, 'color:yellow;font-size:12pt;');

        listOfControls.push(elem);

        let devSiteId = elem.getAttribute("devsiteid");
        let key2 = elem.getAttribute("key");

        let counter_101 = elem.getAttribute("counter_101");

        if (counter_101 == null) {
            counter_101 = "12001";
        }

        console.log('%c ' + `ButtonForListingTimeLogs - 20220504-1552-xxxxxxxxx [${callSource}]`, 'color:yellow;font-size:12pt;');
        console.log(devSiteId);
        console.log(key2);
        console.log(counter_101);
        console.log('====================');


        let root = createRoot(elem);


        root.render(<App devSiteId={devSiteId} key3={key2} counter_101={counter_101} />);

    });

}




export const ButtonForListingTimeLogs_util = (() => {


    console.log('%c ' + 'ButtonForListingTimeLogs - DEFAULT - 20220508-1050', 'color:yellow;font-size:12pt;');





    let lastDateTime = new Date(0);
    let refreshCount = 0;


    function handleRefreshControlList(signalR_MessageRecord: ISignalR_MessageRecord) {

        console.log('');
        console.log('');
        console.log('%c ' + `SignalR - 20220506-0347-REACT-ReceiveMessage `, 'color:pink;font-size:12pt;');
        console.dir(signalR_MessageRecord);
        console.log('%c ' + `SignalR - 20220506-0347-REACT-ReceiveMessage [${signalR_MessageRecord.callSource}]`, 'color:pink;font-size:12pt;');

        if (!(signalR_MessageRecord.dateTime instanceof Date)) {
            signalR_MessageRecord.dateTime = new Date(signalR_MessageRecord.dateTime);
        }

        if (!(lastDateTime instanceof Date)) {
            lastDateTime = new Date(lastDateTime);
        }


        //if (signalR_MessageRecord.message == "refreshControlsList") {
        if (signalR_MessageRecord.message == SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST) {





            console.log('');

            console.log('%c ' + `SignalR - 20220514-2227-REACT-ReceiveMessage [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:12pt;');

            console.log('%c ' + `[${lastDateTime.toISOString()}]`, 'color:pink;font-size:12pt;');


            console.log('%c ' + `[${new Date(signalR_MessageRecord.dateTime).toISOString()}]`, 'color:pink;font-size:12pt;');
            console.log('%c ' + `refreshCount: [${refreshCount}]`, 'color:pink;font-size:12pt;');

            if (lastDateTime < new Date(signalR_MessageRecord.dateTime)) {

                lastDateTime = new Date(signalR_MessageRecord.dateTime);

                refreshCount++;

                console.log('%c ' + `PROCESS refreshCount: [${refreshCount}]`, 'color:green;font-size:18pt;');


                setTimeout(() => {
                    setupDevSiteTimelogControls(signalR_MessageRecord.callSource);
                }, 1000);

            } else {
                console.log('%c ' + `BYPASS refreshControlsList 2022008-0441 - refreshCount: [${refreshCount}]`, 'color:RED;font-size:18pt;');

            }

        }

        console.log('');
        console.log('');

    }


    console.log('%c ' + 'ButtonForListingTimeLogs.tsx - addSignalRJob - 20220518-0017', 'font-size:24pt;color:white;');


    let rec: SignalR_MessageRecord = new SignalR_MessageRecord();
    rec.callSource = 'ButonForListingTimelogs-20220514-1941';
    rec.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
    rec.dateTime = new Date();
    rec.func = handleRefreshControlList;
    rec.message = SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST;
    rec.user = "SamN";

    ssn_SignalR_util_React.addSignalRJob(rec);





    const loadDevSiteDetailTimelogReactComponent = () => {

        if (document.querySelector('[ssn-cmd*=timelogReactCompoentDetail]')) {


            console.log('%c ' + `SignalR-DemoSites_index-updateReactComponents - 20220518-1553-send-message`, 'color:yellow;font-size:18pt;');


            const signalR_MessageRecord = new SignalR_MessageRecord();
            signalR_MessageRecord.callSource = `20220514-2013-ButtonForListingTimelogs-devsite-detail}`;
            signalR_MessageRecord.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
            signalR_MessageRecord.dateTime = new Date();
            signalR_MessageRecord.message = SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST;
            signalR_MessageRecord.user = "SamN";

            ssn_SignalR_util_React.sendSignalRMessage_v2(signalR_MessageRecord);



        }
    }


    setTimeout(loadDevSiteDetailTimelogReactComponent, 2000);


})();



