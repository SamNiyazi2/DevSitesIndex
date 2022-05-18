
// 05/06/2022 09:09 pm - SSN - Duplicated from AngularJS c:\sams_p\devsitesindex\DevSitesIndex\wwwroot\js\Util\SignalR\ssn_SignalR_util.ts

import * as signalR from '@microsoft/signalr';
import { handleError, handleResponse } from '../../API/ApiUtil';

import { ISignalR_MessageRecord } from './ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from './SignalR_Constants';
import { SignalR_MessageRecord } from './SignalR_MessageRecord';


class ssn_SignalR_util_React {

    // private static listOfJobs: ISignalR_MessageRecord[] = new Array<ISignalR_MessageRecord>();

    //private static listOfJobs_global_React = new Array<ISignalR_MessageRecord>();
    //private static SignalRConnection_IsSet = false;



    private static SignalRConnection: signalR.HubConnection = null;



    static checkClassState(callSource: string) {

        if (!global.listOfJobs_global_React_counter) {
            global.listOfJobs_global_React_counter = 0;
            global.listOfJobs_global_React = new Array<ISignalR_MessageRecord>();
        }
        global.listOfJobs_global_React_counter++;


        console.log('%c ' + `ssn_SignalR_util_React - 20220518-1526 - chcekClassState`, 'color:red;font-size:24pt;');
        console.log('%c ' + `${global.listOfJobs_global_React_counter}`, 'color:red;font-size:24pt;');
        console.log('%c ' + `${global.SignalRConnection_IsSet}`, 'color:red;font-size:24pt;');
    }


    private static async SignalRConnection_doSetup_mainFunction() {


        console.log('%c ' + `ssn_SignalR_util_React - 20220518-1524 - setting up commection`, 'color:red;font-size:36pt;');


        ssn_SignalR_util_React.checkClassState('SignalRConnection_doSetup_mainFunction-20220518-1125');


        global.SignalRConnection = new signalR.HubConnectionBuilder()
            .withUrl("/SignalRHub")
            .build();




        global.SignalRConnection.on("SignalRReceiveMessage_ReactJS", function (record_received: ISignalR_MessageRecord) {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1034-B - SignalRReceiveMessage_ReactJS`, 'color:pink;font-size:12pt;');
            console.dir(record_received);






            // 05/17/2022 11:42 am - SSN - Check if job was processed
            // console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-A - CheckJobStatus`, 'color:white;font-size:24pt;');

            global.SignalRConnection.invoke("CheckJobStatus", "ssn_SignalR_Util_React-1308", record_received)
                .then((response: ISignalR_MessageRecord) => {
                    console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-then - CheckJobStatus - THEN`, 'color:white;font-size:24pt;');
                    console.dir(response);

                    if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.STARTING) {
                        console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-then - CheckJobStatus - JOB STATUS: Starting`, 'color:white;font-size:16pt;');
                        console.log(response.jobStatus);





                        console.log('global.listOfJobs_global_React.length:');
                        console.log(global.listOfJobs_global_React.length);

                        let haveMatch = false;

                        global.listOfJobs_global_React.forEach((job_list_record: ISignalR_MessageRecord, index) => {

                            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1035 - [${record_received.callSource}]  [${job_list_record.message}] == [${record_received.message}]`, 'color:white;font-size:12pt;');
                            console.dir(job_list_record);

                            if (job_list_record.message == record_received.message) {

                                console.log('%c ' + `ssn_SignalR_util_React - 20220515-1036 - have match [${record_received.message}]`, 'color:yellow;font-size:16pt;');
                                haveMatch = true;
                                job_list_record.func(record_received);

                            } else {
                                //  console.log('%c ' + `ssn_SignalR_util_React - 20220515-1037 - HAVE NO MATCH [${record_received.message}]`, 'color:red;font-size:12pt;');

                            }

                            console.log('%c ' + `ssn_SignalR_util_React - 20220517-1138 - have match [${haveMatch}]`, 'color:white;font-size:12pt;');

                        });









                    } else if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.ALREADY_STARTED) {
                        //console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-then - CheckJobStatus - JOB STATUS: Already started `, 'color:yellow;font-size:24pt;');
                        //console.log(response.jobStatus);

                    } else {
                        console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-then - CheckJobStatus - UNKNOWN JOB STATUS `, 'color:RED;font-size:48pt;');
                        console.log(response.jobStatus);

                    }

                })
                .catch((error) => {
                    console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-Error - CheckJobStatus - ERROR`, 'color:red;font-size:24pt;');
                });

            //console.log('%c ' + `ssn_SignalR_util_React - 20220517-1147-Z - CheckJobStatus`, 'color:white;font-size:24pt;');





        });



        global.SignalRConnection.onreconnected((connectionId: string) => {

            console.log("%c " + "ssn_SignalR_Util_React - 20220518-1302 - onReconnectd ", "font-size:24pt;color:yellow");
            console.log('connectionId:');
            console.log(connectionId);

        });



        await global.SignalRConnection.start().then(() => {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1038 - start`, 'color:yellow;font-size:12pt;');
            console.log('%c ' + `ssn_SignalR_util_React - 2022058-1304 `, 'color:pink;font-size:24pt;');
            console.log('%c ' + global.SignalRConnection.connectionId, 'color:pink;font-size:24pt;');

            //  resolve(ssn_SignalR_util_React.SignalRConnection);

        }).catch(function (err) {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1039 - catch`, 'color:red;font-size:36pt;');
            console.dir(err);

            // if (reject) reject(err);

        });

    }






    private static SignalRConnection_doSetup = new Promise( async (resolve, reject) => {


        console.log('%c ' + `ssn_SignalR_util_React - 20220517-1038 - doSetup `, 'color:yellow;font-size:12pt;');

        let doProcess = false;

        if (!global.SignalRConnection_IsSet) {

            global.SignalRConnection_IsSet = true;
            doProcess = true;
        }

        if (global.SignalRConnection) {
            console.log('%c ' + `ssn_SignalR_util_React - 20020517-1034 - doSetup  - Check state`, 'color:white;font-size:24pt;');
            console.dir(global.SignalRConnection.state)
            if (global.SignalRConnection.state == "Connecting") {
                console.log('%c ' + `ssn_SignalR_util_React - 20220518-1609 - RUN doSetup  - STATE IS CONNECTING`, 'color:white;font-size:24pt;');
                doProcess = true;

            }
        }

        if (!doProcess) {
            console.log('%c ' + `ssn_SignalR_util_React - 20020517-2326 - doSetup  - Bypass setup process`, 'color:white;font-size:24pt;');
            resolve("ssn_SignalR_Util_React_Resolve_20220517_2332");
            return;
        }

        if (doProcess) {

            await ssn_SignalR_util_React.SignalRConnection_doSetup_mainFunction();
        }
        else {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1040 -  setup - connection is already set`, 'color:yellow;font-size:12pt;');
        }

        resolve("ssn_SignalR_Util_React_Resolve_20220517_2333");

    });



    static addSignalRJob(signalR_MessageRecord: ISignalR_MessageRecord) {

        ssn_SignalR_util_React.checkClassState("addSignalRJob-20220518-1126");

        ssn_SignalR_util_React.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1057 -  addSignalRJob - then `, 'color:green;font-size:24pt;');

            global.listOfJobs_global_React.push(signalR_MessageRecord);

            console.log('global.listOfJobs_global_React.length:');
            console.log(global.listOfJobs_global_React.length);

        }).catch(error => {
            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1058 -  addSignalRJob - CATCH `, 'color:red;font-size:36pt;');
        });

    }



    static sendSignalRMessage_v2(signalR_MessageRecord: ISignalR_MessageRecord) {

        ssn_SignalR_util_React.checkClassState('sendSignalRMessage_v2-20220518-1124');

        ssn_SignalR_util_React.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + `ssn_SignalR_util_React - 20220515-1041 - callSource [${signalR_MessageRecord.callSource}]`, 'color:blue;font-size:24pt;');

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

    }



}


export { ssn_SignalR_util_React };


