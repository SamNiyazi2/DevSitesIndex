
// 05/06/2022 09:09 pm - SSN - Duplicated from AngularJS c:\sams_p\devsitesindex\DevSitesIndex\wwwroot\js\Util\SignalR\ssn_SignalR_util.ts

import * as signalR from '@microsoft/signalr';

import { ISignalR_MessageRecord } from './ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from './SignalR_Constants';
import { SignalR_MessageRecord } from './SignalR_MessageRecord';


class ssn_SignalR_util_React {


    private connectionId: string;


    private async SignalRConnection_doSetup_mainFunction() {

        if (!global.listOfJobs_global_React) {
            global.listOfJobs_global_React = new Array<ISignalR_MessageRecord>();
        }

        return await new Promise(async (resolve, reject) => {

            console.log('%c ' + `ssn_SignalR_util_React - 20220518-1524-B - setting up connection - Start setup`, 'color:pink;font-size:12pt;');


            if (global.SignalRConnection == undefined) {

                console.log('%c ' + `ssn_SignalR_util_React - 20220518-2313 - setting up connection`, 'color:yellow;font-size:12pt;');



                global.SignalRConnection = new signalR.HubConnectionBuilder()
                    .withUrl("/SignalRHub")
                    .build();


                global.SignalRConnection.on("SignalRReceiveMessage_ReactJS", (record_received_v2: ISignalR_MessageRecord) => {

                    console.log('%c ' + `ssn_SignalR_util_React - 20220515-1034-B-v2-B - SignalRReceiveMessage_ReactJS`, 'color:pink;font-size:12pt;');
                    console.dir(record_received_v2);



                    // 05/17/2022 11:42 am - SSN - Check if job was processed
                    // console.log('%c ' + `ssn_SignalR_util_React - 20220518-2306 - MessageReceived `, 'color:white;font-size:24pt;');
                    record_received_v2.user = `${record_received_v2.user + "-1"}`;

                    global.SignalRConnection.invoke("test_101", "ssn_SignalR_Util_React-20220519-0255")
                        .then(result => {
                            console.log('%c ' + 'test_101 20220519-0256', 'color:white;font-size:12pt;');
                            console.dir(result);
                        })
                        .catch(error => {
                            console.log('%c ' + 'test_101 20220519-0257', 'color:red;font-size:12pt;');
                            console.dir(error);

                        });

                    global.SignalRConnection.invoke("CheckJobStatus", "ssn_SignalR_Util_React-1308-v2", record_received_v2)
                        .then((response: ISignalR_MessageRecord) => {
                            console.log('%c ' + `ssn_SignalR_util_React - 20220518-2307 - THEN`, 'color:white;font-size:24pt;');
                            console.dir(response);

                            if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.STARTING) {
                                console.log('%c ' + `ssn_SignalR_util_React - 20220518-2308 - CheckJobStatus - JOB STATUS: Starting`, 'color:white;font-size:16pt;');
                                console.log(response.jobStatus);





                                console.log('global.listOfJobs_global_React.length:');
                                console.log(global.listOfJobs_global_React.length);

                                let haveMatch = false;

                                global.listOfJobs_global_React.forEach((job_list_record: ISignalR_MessageRecord, index) => {

                                    console.log('%c ' + `ssn_SignalR_util_React - 20220515-1035 - [${record_received_v2.callSource}]  [${job_list_record.message}] == [${record_received_v2.message}]`, 'color:white;font-size:12pt;');
                                    console.dir(job_list_record);

                                    if (job_list_record.message == record_received_v2.message) {

                                        console.log('%c ' + `ssn_SignalR_util_React - 20220515-1036 - have match [${record_received_v2.message}]`, 'color:yellow;font-size:16pt;');
                                        haveMatch = true;
                                        job_list_record.func(record_received_v2);

                                    } else {
                                        //  console.log('%c ' + `ssn_SignalR_util_React - 20220515-1037 - HAVE NO MATCH [${record_received.message}]`, 'color:red;font-size:12pt;');

                                    }

                                    console.log('%c ' + `ssn_SignalR_util_React - 20220517-1138 - have match [${haveMatch}]`, 'color:white;font-size:12pt;');

                                });









                            } else if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.ALREADY_STARTED) {
                                //console.log('%c ' + `ssn_SignalR_util_React - 20220518-2309-then - CheckJobStatus - JOB STATUS: Already started `, 'color:yellow;font-size:24pt;');
                                //console.log(response.jobStatus);

                            } else {
                                console.log('%c ' + `ssn_SignalR_util_React - 20220518-2310-then - CheckJobStatus - UNKNOWN JOB STATUS `, 'color:RED;font-size:12pt;');
                                console.log(response.jobStatus);

                            }

                        })
                        .catch((error) => {
                            console.log('%c ' + `ssn_SignalR_util_React - 20220518-2311-Error - CheckJobStatus - ERROR`, 'color:red;font-size:24pt;');
                            console.dir(error);
                        });

                    //console.log('%c ' + `ssn_SignalR_util_React - 20220518-2312 - CheckJobStatus`, 'color:white;font-size:24pt;');





                });





                await global.SignalRConnection.start().then(() => {

                    console.log('%c ' + `ssn_SignalR_util_React - 20220515-1038 - start`, 'color:yellow;font-size:12pt;');
                    console.log('%c ' + global.SignalRConnection.connectionId, 'color:pink;font-size:24pt;');

                    this.connectionId = global.SignalRConnection.connectionId;

                    console.log('%c ' + global.SignalRConnection.state, 'color:pink;font-size:12pt;');

                    this.addClientToGroup(SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS);

                    resolve("global.SignalRConnection started");

                }).catch(function (err) {

                    console.log('%c ' + `ssn_SignalR_util_React - 20220515-1039 - catch`, 'color:red;font-size:24pt;');
                    console.dir(err);

                    resolve("global.SignalRConnection Failed.");

                });

            } else {

                console.log('%c ' + `ssn_SignalR_util_React - 20220519-0550 - ALREADY SETUP`, 'color:BROWN;font-size:12pt;');
                reject("global.SignalRConnection already setup.");

            }


        });

    }



    // 05/19/2022 02:14 pm - SSN 

    private addClientToGroup = (processorName: string) => {

        // Using processorname for group name
        global.SignalRConnection.invoke("JoinRoom", processorName).then(response => {

            console.log('%c ' + `ssn_SignalR_util_React  - 20220519-1415 -  addClientToGroup  [${processorName}]`, 'color:WHITE;font-size:24pt;');
            console.dir(response);

        }).catch(error => {
            console.log('%c ' + `ssn_SignalR_util_React  - 20220519-1415 -  addClientToGroup  [${processorName}] CATCH ERROR`, 'color:RED;font-size:24pt;');
            console.dir(error);

        });

    }



    public SignalRConnection_doSetup = async () => {

        console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432 - doSetup `, 'color:yellow;font-size:12pt;');

        return await new Promise(async (resolve, reject) => {

            let safetyCounter = 0;

            const DoSetup = async () => {
                safetyCounter++;

                console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432-B - doSetup safetyCounter [${safetyCounter}]`, 'color:yellow;font-size:12pt;');

                if (safetyCounter > 10) {
                    console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432-C - counter breaker - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:12pt;');
                    reject("DONT-Have-connection-20220519-1441");


                }
                else if (global.SignalRConnection == undefined) {

                    console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432-D-1 - RETRY - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:12pt;');

                    this.SignalRConnection_doSetup_sub();

                    console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432-D-2 - RETRY - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:12pt;');

                    setTimeout(async () => {
                        await DoSetup()
                    }, 1000);
                }
                else {
                    console.log('%c ' + `ssn_SignalR_util_React - 20220519-1432- HAVE CONNECTION - doSetup safetyCounter [${safetyCounter}]`, 'color:RED;font-size:12pt;');
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

            while (global.SignalRConnection == undefined && safetyCounter++ < 10) {

                console.log('%c ' + `ssn_SignalR_util_React - 20220517-1038 - doSetup - safetyCounter: [${safetyCounter}]`, 'color:yellow;font-size:12pt;');

                await this.SignalRConnection_doSetup_mainFunction().then(response => {

                    resolve("ssn_SignalR_Util_React_Resolve_20220517_2333");


                }).catch(error => {
                    console.log('%c ' + `ssn_SignalR_util_React - SignalRConnection_doSetup  20220518-2344 - doSetup promise catch`, 'color:red;font-size:24pt;');
                });

            }

        });
    }


    addSignalRJob(signalR_MessageRecord: ISignalR_MessageRecord) {

        console.log('%c ' + `ssn_SignalR_util_React - 20220515-1057 -  addSignalRJob  `, 'color:green;font-size:24pt;');
        console.dir(signalR_MessageRecord);


        if (!global.listOfJobs_global_React) {
            global.listOfJobs_global_React = new Array<ISignalR_MessageRecord>();
        }

        global.listOfJobs_global_React.push(signalR_MessageRecord);

        console.log('global.listOfJobs_global_React.length:');
        console.log(global.listOfJobs_global_React.length);


    }



    sendSignalRMessage_v2(signalR_MessageRecord: ISignalR_MessageRecord) {

        console.log('%c ' + `ssn_SignalR_util_React - 20220515-1041-BBB - callSource [${signalR_MessageRecord.callSource}]`, 'color:blue;font-size:24pt;');

        this.SignalRConnection_doSetup().then(() => {


            console.log('%c ' + `ssn_SignalR_util_React - state = [${global.SignalRConnection.state}]`, 'color:yellow;font-size:12pt;');

            signalR_MessageRecord.connectionId = this.connectionId;

            console.log('%c ' + `ssn_SignalR_util_React  - 20220519-0638 -  doSetup - THEN - callSource [${signalR_MessageRecord.callSource}]`, 'color:WHITE;font-size:12pt;');
            console.log('%c ' + `this.connectionId: [${this.connectionId}]`, 'color:WHITE;font-size:12pt;');

            global.SignalRConnection.invoke("SendMessage_v2", signalR_MessageRecord).then(response => {

                console.log('%c ' + `ssn_SignalR_util_React  - 20220517-1548 -  doSetup - THEN - callSource [${signalR_MessageRecord.callSource}]`, 'color:WHITE;font-size:12pt;');
                console.dir(response);

            }).catch(error => {
                console.log('%c ' + `ssn_SignalR_util_React  - 20220517-1549 -  doSetup - CATCH - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
                console.dir(error);

            });

        }).catch(error => {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1042 - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
            console.dir(error);
        });

        console.log('%c ' + `ssn_SignalR_util_React - 20220515-1041-ZZZ - callSource [${signalR_MessageRecord.callSource}]`, 'color:blue;font-size:24pt;');

    }


}

const ssn_SignalR_util_React_instance = new ssn_SignalR_util_React();
ssn_SignalR_util_React_instance.SignalRConnection_doSetup();

export { ssn_SignalR_util_React_instance };


