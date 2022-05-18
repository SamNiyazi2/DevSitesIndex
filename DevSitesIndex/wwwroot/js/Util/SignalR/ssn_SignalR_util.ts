
// 05/06/2022 06:06 pm - SSN - Moved SignalR Code for AngularJS


// 05/06/2022 07:05 am - SSN - [20220506-0327] - [008] - SignalR Hub 
// 05/06/2022 09:09 pm - SSN - Duplicated in React C:\Sams_P\DevSitesIndex\DevSitesIndex\ReactApp\src\Util\ssn_SignalR_Util_React.ts

import * as signalR from '@microsoft/signalr';
import { ISignalR_MessageRecord } from './ISignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from './SignalR_Constants';


class ssn_SignalR_util {

    // 05/11/2022 05:21 pm - SSN - Add list of jobs

    // public static listOfJobs: ISignalR_MessageRecord[] = new Array<ISignalR_MessageRecord>();

    public static listOfJobs_global_AngularJS = new Array<ISignalR_MessageRecord>();

    private static SignalRConnection_IsSet = false;
    private static SignalRConnection: signalR.HubConnection = null;


    private static fired = false;

    private static SignalRConnection_doSetup_mainFunction = (resolve, reject) => {

        if (ssn_SignalR_util.fired) return resolve();

        ssn_SignalR_util.fired = true;
        ssn_SignalR_util.SignalRConnection_doSetup_mainFunction_sub(resolve, reject);
    }

    private static SignalRConnection_doSetup_mainFunction_sub(resolve, reject) {
         

        console.log('%c ' + 'ssn_SignalR_util - 20220515-1015 - SignalRConnection_doSetup - Initialize', 'color:yellow;font-size:12pt;');

        console.dir('ssn_SignalR_util.SignalRConnection:');
        console.dir(ssn_SignalR_util.SignalRConnection);

        ssn_SignalR_util.SignalRConnection = new signalR.HubConnectionBuilder()
            .withUrl("/SignalRHub")
            .build();

        console.dir(ssn_SignalR_util.SignalRConnection);









        ssn_SignalR_util.SignalRConnection.on("SignalRReceiveMessage_AngularJS", (record_received: ISignalR_MessageRecord) => {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1016 -  SignalRReceiveMessage_AngularJS  [${record_received.callSource}]`, 'color:yellow;font-size:12pt;');
            console.dir(record_received);











            // 05/17/2022 12:27 pm - SSN - Check if job was processed
            // console.log('%c ' + `ssn_SignalR_util - 20220517-1227-A - CheckJobStatus`, 'color:white;font-size:24pt;');

            ssn_SignalR_util.SignalRConnection.invoke("CheckJobStatus", "ssn_SignalR_Util-1309", record_received)
                .then((response: ISignalR_MessageRecord) => {
                    console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - THEN`, 'color:white;font-size:24pt;');
                    console.dir(response);

                    if (response.jobStatus == SIGNALR_CONSTANTS.JOB_STATUS.STARTING) {
                        console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - JOB STATUS: Starting `, 'color:white;font-size:24pt;');
                        console.log(response.jobStatus);





                        console.log('ssn_SignalR_util.listOfJobs.length:');
                        console.log(ssn_SignalR_util.listOfJobs_global_AngularJS.length);

                        let haveMatch = false;

                        ssn_SignalR_util.listOfJobs_global_AngularJS.forEach((job_list_record: ISignalR_MessageRecord, index) => {

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
                        console.log('%c ' + `ssn_SignalR_util - 20220517-1227-then - CheckJobStatus - UNKNOWN JOB STATUS `, 'color:RED;font-size:48pt;');
                        console.log(response.jobStatus);

                    }

                })
                .catch((error) => {
                    console.log('%c ' + `ssn_SignalR_util - 20220517-1227-Error - CheckJobStatus - ERROR`, 'color:red;font-size:24pt;');
                    console.dir(error);
                });

            // console.log('%c ' + `ssn_SignalR_util - 20220517-1227-Z - CheckJobStatus`, 'color:white;font-size:24pt;');




        });













        ssn_SignalR_util.SignalRConnection.start().then(() => {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1020 -  start `, 'color:blue;font-size:12pt;');

            console.dir(ssn_SignalR_util);
            console.dir(ssn_SignalR_util.SignalRConnection);


            resolve(ssn_SignalR_util.SignalRConnection);

        }).catch(function (err) {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1021 -  start `, 'color:red;font-size:12pt;');
            console.log('%c ' + 'REJECT WHEN !NULL', 'color:BROWN;font-size:12pt;');
            console.dir(err);

            if (reject) reject(err);

            return console.error(err.toString());
        });

    }




    private static SignalRConnection_doSetup = new Promise((resolve, reject) => {

        console.log('%c ' + 'ssn_SignalR_util - 20220515-1014 - SignalRConnection_doSetup ', 'color:yellow;font-size:12pt;');


        if (ssn_SignalR_util.SignalRConnection) {
            console.log('%c ' + `ssn_SignalR_util - 20020517-1035 - doSetup  - Check state`, 'color:white;font-size:24pt;');
            console.dir(ssn_SignalR_util.SignalRConnection.state)
        }

        if (!ssn_SignalR_util.SignalRConnection_IsSet) {

            ssn_SignalR_util.SignalRConnection_IsSet = true;
            ssn_SignalR_util.SignalRConnection_doSetup_mainFunction(resolve, reject);

        }

        else {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1022 -  promise - connection is already set`, 'color:red;font-size:12pt;');

        }
    });


    static addSignalRJob(signalR_MessageRecord: ISignalR_MessageRecord) {

        console.log('%c ' + 'ssn_SignalR_Util.ts - addSignalRJob - 202220518-0019', 'font-size:36pt;color:red;');

        ssn_SignalR_util.SignalRConnection_doSetup.then(() => {
             
            ssn_SignalR_util.listOfJobs_global_AngularJS.push(signalR_MessageRecord);

        }).catch(error => {

            console.log('%c ' + 'ssn_SignalR_Util.ts - addSignalRJob - CATCHE - 202220518-0021', 'font-size:36pt;color:red;');
        });

    }

    static sendSignalRMessage_v2(signalR_MessageRecord: ISignalR_MessageRecord) {

        ssn_SignalR_util.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + `ssn_SignalR_util - 20220515-1023 -  doSetup  - callSource [${signalR_MessageRecord.callSource}]`, 'color:blue;font-size:12pt;');

            ssn_SignalR_util.SignalRConnection.invoke("SendMessage_v2", signalR_MessageRecord).then(response => {

                console.log('%c ' + `ssn_SignalR_util - 20220517-1545 -  doSetup - THEN - callSource [${signalR_MessageRecord.callSource}]`, 'color:WHITE;font-size:12pt;');
                console.dir(response);

                if (response.errorCode != null ) {
                    console.log('%c ' + `ssn_SignalR_util - 20220517-1611 -  doSetup - ERROR - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
                    console.log('%c ' + response.errorCode , 'color:red;font-size:12pt;');
                    console.log('%c ' + response.errorMessage, 'color:red;font-size:12pt;');
                }

            }).catch(error => {
                console.log('%c ' + `ssn_SignalR_util - 20220517-1625 -  doSetup - CATCH - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');
                console.dir(error );

            });

        }).catch(error => {

            console.log('%c ' + `ssn_SignalR_util - 20220517-1541 -  doSetup  Error - callSource [${signalR_MessageRecord.callSource}]`, 'color:red;font-size:24pt;');

        });


    }

}


export { ssn_SignalR_util };


// console.log('%c ' + `ssn_SignalR_util - 20220515-1024   [${globalThis.listOfJobs_global_AngularJS.length}]`, 'color:blue;font-size:12pt;');

