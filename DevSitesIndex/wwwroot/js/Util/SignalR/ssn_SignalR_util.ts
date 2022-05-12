
// 05/06/2022 06:06 pm - SSN - Moved SignalR Code for AngularJS


// 05/06/2022 07:05 am - SSN - [20220506-0327] - [008] - SignalR Hub 
// 05/06/2022 09:09 pm - SSN - Duplicated in React C:\Sams_P\DevSitesIndex\DevSitesIndex\ReactApp\src\Util\ssn_SignalR_Util_React.ts

import * as signalR from '@microsoft/signalr';

class SignalRMessage {

    eventName: string;
    callBack: Function;
}

class ssn_SignalR_util {

    // 05/11/2022 05:21 pm - SSN - Add list of jobs
    public listOfJobs: SignalRMessage[] = new Array<SignalRMessage>();


    private static SignalRConnection_IsSet = false;
    private static SignalRConnection: signalR.HubConnection = null;

    private SignalRConnection_doSetup = new Promise((resolve, reject) => {

        console.log('%c ' + 'ssn_SignatR_util - B-20220506-1725- promise ', 'color:yellow;font-size:16pt;');

        if (!ssn_SignalR_util.SignalRConnection_IsSet) {


            ssn_SignalR_util.SignalRConnection_IsSet = true;


            console.log('%c ' + 'ssn_SignatR_util - B-20220506-1725-AAA-1 - promise ', 'color:yellow;font-size:16pt;');

            console.dir(ssn_SignalR_util.SignalRConnection);

            ssn_SignalR_util.SignalRConnection = new signalR.HubConnectionBuilder()
                .withUrl("/SignalRHub")
                .build();

            console.log('%c ' + 'ssn_SignatR_util - B-20220506-1725-AAA-2 - promise ', 'color:yellow;font-size:16pt;');

            console.dir(ssn_SignalR_util.SignalRConnection);

            ssn_SignalR_util.SignalRConnection.on("ReceiveMessage",   (user, message) => {

                console.log('%c ' + 'ssn_SignatR_util - B-20220506-0701', 'color:yellow;font-size:36pt;');
                console.log(user);
                console.log(message);


                console.log('this.listOfJobs.length:');
                console.log(this.listOfJobs.length);


                this.listOfJobs.forEach((record: SignalRMessage, index) => {

                    if (record.eventName == user) {
                        console.log('%c ' + 'ssn_SignatR_util - B-20220506-0726 - have match', 'color:yellow;font-size:36pt;');

                    } else {
                        console.log('%c ' + 'ssn_SignatR_util - B-20220506-0726 - HAVE NO MATCH', 'color:brown;font-size:36pt;');

                    }
                });

            });


            ssn_SignalR_util.SignalRConnection.start().then(() => {

                console.log('%c ' + 'SignalR-DemoSites_index - B-20220506-0701-start-AAA', 'color:yellow;font-size:36pt;');
                console.log('%c ' + 'RESOLVE', 'color:yellow;font-size:36pt;');
                console.dir(this);
                console.dir(ssn_SignalR_util.SignalRConnection);


                resolve(ssn_SignalR_util.SignalRConnection);

            }).catch(function (err) {

                console.log('%c ' + 'ssn_SignatR_util - B-20220506-0703-error', 'color:BROWN;font-size:48pt;');
                console.log('%c ' + 'REJECT WHEN !NULL', 'color:BROWN;font-size:48pt;');
                console.dir(err);

                if (reject) reject();

                return console.error(err.toString());
            });

        }

        else {

            console.log('%c ' + 'ssn_SignatR_util - B-20220506-1726 - promise - connection is already set', 'color:PINK;font-size:16pt;');

        }
    });


    sendSignalRMessage(p1, p2, p3) {

        this.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + 'ssn_SignatR_util - B-20220506-1724', 'color:yellow;font-size:14pt;');

            ssn_SignalR_util.SignalRConnection.invoke("SendMessage", p1, p2, p3);
        });

    }


}

let ssn_SignalR_util_instance = new ssn_SignalR_util();

export { ssn_SignalR_util_instance };


