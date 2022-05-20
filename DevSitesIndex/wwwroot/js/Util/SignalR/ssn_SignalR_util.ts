
// 05/06/2022 06:06 pm - SSN - Moved SignalR Code for AngularJS


// 05/06/2022 07:05 am - SSN - [20220506-0327] - [008] - SignalR Hub 
// 05/06/2022 09:09 pm - SSN - Duplicated in React C:\Sams_P\DevSitesIndex\DevSitesIndex\ReactApp\src\Util\ssn_SignalR_Util_React.ts

import * as signalR from '@microsoft/signalr';
import { ISignalR_MessageRecord } from './ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from './SignalR_Constants';


class ssn_SignalR_util {

    // 05/11/2022 05:21 pm - SSN - Add list of jobs


    private connectionId: string;


    private async SignalRConnection_doSetup_mainFunction() {


        if (!globalThis.listOfJobs_global_React) {
            globalThis.listOfJobs_global_React = new Array<ISignalR_MessageRecord>();
        }

        return await new Promise(async (resolve, reject) => {




            console.log('%c ' + 'ssn_SignalR_util - 20220519-1657 - SignalRConnection_doSetup - Initialize - TOP ', 'color:yellow;font-size:12pt;');




            if (globalThis.SignalRConnection == undefined) {







                console.log('%c ' + 'ssn_SignalR_util - 20220515-1015 - SignalRConnection_doSetup - Initialize - RUN ', 'color:yellow;font-size:12pt;');

                console.dir('globalThis.SignalRConnection:');
                console.dir(globalThis.SignalRConnection);

                globalThis.SignalRConnection = new signalR.HubConnectionBuilder()
                    .withUrl("/SignalRHub")
                    .build();

                console.dir(globalThis.SignalRConnection);









                globalThis.SignalRConnection.on("SignalRReceiveMessage_AngularJS", (record_received: ISignalR_MessageRecord) => {

                    console.log('%c ' + `ssn_SignalR_util - 20220515-1016 -  SignalRReceiveMessage_AngularJS  [${record_received.callSource}]`, 'color:yellow;font-size:12pt;');
                    console.dir(record_received);











                    // 05/17/2022 12:27 pm - SSN - Check if job was processed
                    // console.log('%c ' + `ssn_SignalR_util - 20220517-1227-A - CheckJobStatus`, 'color:white;font-size:24pt;');

                    globalThis.SignalRConnection.invoke("CheckJobStatus", "ssn_SignalR_Util-1309", record_received)
                        .then((response: ISignalR_MessageRecord) => {
                            console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - THEN`, 'color:white;font-size:24pt;');
                            console.dir(response);

                            if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.STARTING) {
                                console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - JOB STATUS: Starting `, 'color:white;font-size:24pt;');
                                console.log(response.jobStatus);





                                console.log('ssn_SignalR_util.listOfJobs.length:');
                                console.log(globalThis.listOfJobs_global_AngularJS.length);

                                let haveMatch = false;

                                globalThis.listOfJobs_global_AngularJS.forEach((job_list_record: ISignalR_MessageRecord, index) => {

                                    //console.log('%c ' + `ssn_SignalR_util - 20220515-1017 -  [${job_list_record.message}]  [${record_received.message}] `, 'color:yellow;font-size:12pt;');
                                    //console.log(job_list_record);

                                    if (job_list_record.message == record_received.message) {

                                        haveMatch = true;

                                        //  console.log('%c ' + `ssn_SignalR_util - 20220515-1018 -  Have match  `, 'color:yellow;font-size:12pt;');
                                        setTimeout(() => job_list_record.func(record_received), 1000);

                                    } else {
                                        //   console.log('%c ' + `ssn_SignalR_util - 20220515-1019 -  Have NO match  `, 'color:yellow;font-size:12pt;');

                                    }
                                });

                                console.log('%c ' + `ssn_SignalR_util - 20220517-1137 -  Have match? [${haveMatch}]  `, 'color:white;font-size:12pt;');





















                            } else if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.ALREADY_STARTED) {
                                console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - JOB STATUS: Already started `, 'color:white;font-size:24pt;');
                                console.log(response.jobStatus);

                            } else {
                                console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - UNKNOWN JOB STATUS `, 'color:RED;font-size:24pt;');
                                console.log(response.jobStatus);

                            }

                        })
                        .catch((error) => {
                            console.log('%c ' + `ssn_SignalR_util - 20220517-1227-Error - CheckJobStatus - ERROR`, 'color:red;font-size:24pt;');
                            console.dir(error);
                        });

                    // console.log('%c ' + `ssn_SignalR_util - 20220517-1227-Z - CheckJobStatus`, 'color:white;font-size:24pt;');
                });











                globalThis.SignalRConnection.start().then(() => {

                    console.log('%c ' + `ssn_SignalR_util - 20220515-1020 -  start `, 'color:yellow;font-size:12pt;');

                    console.log('%c ' + `globalThis.SignalRConnection.connectionId ${globalThis.SignalRConnection.connectionId} `, 'color:white;font-size:24pt;');
                    this.connectionId = globalThis.SignalRConnection.ConnectionId;


                    resolve(globalThis.SignalRConnection);

                }).catch(function (err) {

                    console.log('%c ' + `ssn_SignalR_util - 20220515-1021 -  start `, 'color:red;font-size:12pt;');
                    console.log('%c ' + 'REJECT WHEN !NULL', 'color:BROWN;font-size:12pt;');
                    console.dir(err);

                    if (reject) reject(err);

                    return console.error(err.toString());
                });









            }


            else {

                console.log('%c ' + `ssn_SignalR_util  - 20220519-1659 - ALREADY SETUP`, 'color:pink;font-size:12pt;');
                reject("global.SignalRConnection already setup.");

            }







        });


    }




    public SignalRConnection_doSetup = async () => {

        console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - doSetup `, 'color:yellow;font-size:12pt;');

        return await new Promise(async (resolve, reject) => {

            let safetyCounter = 0;

            const DoSetup = async () => {
                safetyCounter++;

                console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - doSetup safetyCounter [${safetyCounter}]`, 'color:yellow;font-size:12pt;');

                if (safetyCounter > 10) {
                    console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - counter breaker - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:24pt;');
                    reject("DONT-Have-connection-20220519-1441");


                }

                else if (globalThis.SignalRConnection == undefined) {

                    console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - RETRY - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:12pt;');

                    this.SignalRConnection_doSetup_sub();

                    console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - RETRY - doSetup safetyCounter [${safetyCounter}]`, 'color:yellow;font-size:12pt;');

                    setTimeout(async () => {
                        await DoSetup()
                    }, 1000);
                }
                else {
                    console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - HAVE CONNECTION - doSetup safetyCounter [${safetyCounter}]`, 'color:pink;font-size:12pt;');
                    resolve("Have-connection-20220519-1438");
                    return;
                }
            }

            setTimeout(async () => {
                await DoSetup()
            }, 1000);

        });

    }


    private SignalRConnection_doSetup_sub = async () => {


        return await new Promise(async (resolve, reject) => {

            let safetyCounter = 0;

            while (globalThis.SignalRConnection == undefined && safetyCounter++ < 10) {

                console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - doSetup - safetyCounter: [${safetyCounter}]`, 'color:yellow;font-size:12pt;');

                await this.SignalRConnection_doSetup_mainFunction().then(response => {

                    resolve("ssn_SignalR_Util_React_Resolve_20220517_2333");


                }).catch(error => {
                    console.log('%c ' + `ssn_SignalR_util - 20220519-1820 - SignalRConnection_doSetup  20220518-2344 - doSetup promise catch`, 'color:red;font-size:24pt;');
                });

            }

        });
    }



    addSignalRJob(signalR_MessageRecord: ISignalR_MessageRecord) {

        console.log('%c ' + 'ssn_SignalR_Util.ts - addSignalRJob - 202220518-0019', 'font-size:12pt;color:yellow;');

        this.SignalRConnection_doSetup().then(() => {

            globalThis.listOfJobs_global_AngularJS.push(signalR_MessageRecord);

        }).catch(error => {

            console.log('%c ' + 'ssn_SignalR_Util.ts - addSignalRJob - CATCHE - 202220518-0021', 'font-size:24pt;color:red;');
        });

    }

    sendSignalRMessage_v2(signalR_MessageRecord: ISignalR_MessageRecord) {

        this.SignalRConnection_doSetup().then(() => {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1023 -  doSetup  - callSource [${signalR_MessageRecord.callSource}]`, 'color:blue;font-size:12pt;');
            console.log('%c ' + `ssn_SignalR_util - this.connectionId: [${this.connectionId}]`, 'color:blue;font-size:12pt;');

            signalR_MessageRecord.connectionId = this.connectionId;


            globalThis.SignalRConnection.invoke("SendMessage_v2", signalR_MessageRecord).then(response => {

                console.log('%c ' + `ssn_SignalR_util - 20220517-1545 -  doSetup - THEN - callSource [${signalR_MessageRecord.callSource}]`, 'color:WHITE;font-size:12pt;');
                console.dir(response);

                if (response.errorCode != null) {
                    console.log('%c ' + `ssn_SignalR_util - 20220517-1611 -  doSetup - ERROR - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
                    console.log('%c ' + response.errorCode, 'color:red;font-size:12pt;');
                    console.log('%c ' + response.errorMessage, 'color:red;font-size:12pt;');
                }

            }).catch(error => {
                console.log('%c ' + `ssn_SignalR_util - 20220517-1625 -  doSetup - CATCH - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
                console.dir(error);

            });

        }).catch(error => {

            console.log('%c ' + `ssn_SignalR_util - 20220517-1541 -  doSetup  Error - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
            console.dir(error);

        });


    }

}


const ssn_SignalR_util_instance = new ssn_SignalR_util();

export { ssn_SignalR_util_instance };


// console.log('%c ' + `ssn_SignalR_util - 20220515-1024   [${globalThis.listOfJobs_global_AngularJS.length}]`, 'color:blue;font-size:12pt;');

