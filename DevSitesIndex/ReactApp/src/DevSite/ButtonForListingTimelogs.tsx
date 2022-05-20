
// 05/03/2022 09:33 am - SSN - [20220502-1159] - [017] - Create table DevSite_Job_LineItem

import React, { useState, useEffect } from 'react';

import { createRoot } from 'react-dom/client';


import { StaticModal } from '../ModalPopups/StaticModal';

import TimelogForm from "../Timelog/TimelogSelector";
import { DevSiteTimelogList } from "../Timelog/DevSiteTimelogList";

// 05/06/2022 08:36 pm - SSN - [20220506-0327] - [012] - SignalR Hub
// import * as signalR from "@microsoft/signalr";
import { ssn_SignalR_util_React_instance } from '../Util/SignalR/ssn_SignalR_Util_React';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { ISignalR_MessageRecord } from '../Util/SignalR/ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';


//const console__log = (msg, format) => console.log(msg, format);
//const console__dir = (obj1) => console.dir(obj1);

const console__log = (msg, format:string = 'color:white;font-size:24pt;') => { };
const console__dir = (obj1) => { };


function App(props) {



    const [counter, setCounter] = useState(props.counter_101);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [closeModal_React, setCloseModal_React] = useState(false);




    const resetControl = () => {

        console__log('%c ' + 'ButtonForListingTimeLogs - resetControl - 20220511-1652', 'color:blue;font-size:12pt;');

        setCurrentDate(new Date());

        console__log('%c ' + 'ButtonForListingTimeLogs - resetControl - 20220520-0658 - setCloseModal_React false', 'color:red;font-size:48pt;');
        setCloseModal_React(false);

    }

    return (
        <>

            <TimelogForm devSiteId={props.devSiteId} key={props.key3} counter_101={props.counter_101} refreshControl={resetControl} closeModal_React={setCloseModal_React} />
            <DevSiteTimelogList devSiteId={props.devSiteId} currentDate={currentDate} />
        </>
    );
}


let listOfControls = [];



function setupDevSiteTimelogControls(callSource: string) {



    console__log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] START [${callSource}]`, 'color:yellow;font-size:12pt;');

    while (listOfControls.length > 0) {

        console__log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] LOOP [${callSource}]`, 'color:yellow;font-size:12pt;');

        const entry2 = listOfControls.pop();

        console__log('%c ' + 'ButtonForListingTimelogs - remove object from dom', 'color:red;font-size:12pt;');
        const theParent = $(entry2).parent();
        $(theParent).empty();

    };

    console__log('%c ' + `ButtonForListingTimelogs - listOfControls [${listOfControls.length}] END [${callSource}]`, 'color:yellow;font-size:12pt;');



    const containers = document.querySelectorAll("[ssn-cmd*=timelogReactCompoent]");

    containers.forEach((elem) => {

        console__log('%c ' + `ButtonForListingTimelogs - add control [${listOfControls.length}]  [${callSource}]`, 'color:yellow;font-size:12pt;');

        listOfControls.push(elem);

        let devSiteId = elem.getAttribute("devsiteid");
        let key2 = elem.getAttribute("key");

        let counter_101 = elem.getAttribute("counter_101");

        if (counter_101 == null) {
            counter_101 = "12001";
        }

        console__log('%c ' + `ButtonForListingTimeLogs - 20220504-1552-xxxxxxxxx [${callSource}]`, 'color:yellow;font-size:12pt;');
        console__log(devSiteId);
        console__log(key2);
        console__log(counter_101);
        console__log('====================');


        let root = createRoot(elem);


        root.render(<App devSiteId={devSiteId} key3={key2} counter_101={counter_101} />);

    });

}




export const ButtonForListingTimeLogs_util = (() => {


    console__log('%c ' + 'ButtonForListingTimeLogs - DEFAULT - 20220508-1050', 'color:yellow;font-size:12pt;');





    let lastDateTime = new Date(0);
    let refreshCount = 0;


    function handleRefreshControlList(signalR_MessageRecord: ISignalR_MessageRecord) {

        console__log('');
        console__log('');
        console__log('%c ' + `SignalR - 20220506-0347-REACT-ReceiveMessage `, 'color:pink;font-size:12pt;');
        console__dir(signalR_MessageRecord);
        console__log('%c ' + `SignalR - 20220506-0347-REACT-ReceiveMessage [${signalR_MessageRecord.callSource}]`, 'color:pink;font-size:12pt;');

        if (!(signalR_MessageRecord.dateTime instanceof Date)) {
            signalR_MessageRecord.dateTime = new Date(signalR_MessageRecord.dateTime);
        }

        if (!(lastDateTime instanceof Date)) {
            lastDateTime = new Date(lastDateTime);
        }


        //if (signalR_MessageRecord.message == "refreshControlsList") {
        if (signalR_MessageRecord.message == SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST) {





            console__log('');

            console__log('%c ' + `SignalR - 20220514-2227-REACT-ReceiveMessage [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:12pt;');

            console__log('%c ' + `[${lastDateTime.toISOString()}]`, 'color:pink;font-size:12pt;');


            console__log('%c ' + `[${new Date(signalR_MessageRecord.dateTime).toISOString()}]`, 'color:pink;font-size:12pt;');
            console__log('%c ' + `refreshCount: [${refreshCount}]`, 'color:pink;font-size:12pt;');

            if (lastDateTime < new Date(signalR_MessageRecord.dateTime)) {

                lastDateTime = new Date(signalR_MessageRecord.dateTime);

                refreshCount++;

                console__log('%c ' + `PROCESS refreshCount: [${refreshCount}]`, 'color:green;font-size:18pt;');


                setTimeout(() => {
                    setupDevSiteTimelogControls(signalR_MessageRecord.callSource);
                }, 1000);

            } else {
                console__log('%c ' + `BYPASS refreshControlsList 2022008-0441 - refreshCount: [${refreshCount}]`, 'color:RED;font-size:18pt;');

            }

        }

        console__log('');
        console__log('');

    }


    console__log('%c ' + 'ButtonForListingTimeLogs.tsx - addSignalRJob - 20220518-0017', 'font-size:24pt;color:white;');


    let rec: SignalR_MessageRecord = new SignalR_MessageRecord();
    rec.callSource = 'ButonForListingTimelogs-20220514-1941';
    rec.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
    rec.dateTime = new Date();
    rec.func = handleRefreshControlList;
    rec.message = SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST;
    rec.user = "SamN";

    ssn_SignalR_util_React_instance.addSignalRJob(rec);





    const loadDevSiteDetailTimelogReactComponent = async () => {

        console__log('%c ' + `SignalR-DemoSites_index-updateReactComponents - 20220519-1321-send-message`, 'color:yellow;font-size:12pt;');

        if (document.querySelector('[ssn-cmd*=timelogReactCompoentDetail]')) {


            console__log('%c ' + `SignalR-DemoSites_index-updateReactComponents - 20220518-1553-send-message`, 'color:yellow;font-size:18pt;');


            const rec = new SignalR_MessageRecord();
            rec.callSource = `20220514-2013-ButtonForListingTimelogs-devsite-detail`;
            rec.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
            rec.dateTime = new Date();
            rec.message = SIGNALR_CONSTANTS.REFRESH_DEVSITES_TIMELOG_LIST;
            rec.user = "SamN";
            rec.forCurrentConnetionOnly = true;

            await ssn_SignalR_util_React_instance.sendSignalRMessage_v2(rec);



        }
    }


    setTimeout(loadDevSiteDetailTimelogReactComponent, 600);


})();



