
// 05/06/2022 09:09 pm - SSN - Duplicated from AngularJS c:\sams_p\devsitesindex\DevSitesIndex\wwwroot\js\Util\SignalR\ssn_SignalR_util.ts

import * as signalR from '@microsoft/signalr';


class ssn_SignalR_util {

    private SignalRConnection_IsSet = false;
    private SignalRConnection: signalR.HubConnection = null;

    private SignalRConnection_doSetup = new Promise((resolve, reject) => {

        console.log('%c ' + 'ssn_SignatR_util - A-20220506-1725- promise ', 'color:yellow;font-size:16pt;');

        if (!this.SignalRConnection_IsSet) {


            this.SignalRConnection_IsSet = true;


            console.log('%c ' + 'ssn_SignatR_util - A-20220506-1725-AAA-1 - promise ', 'color:yellow;font-size:16pt;');

            console.dir(this.SignalRConnection);

            this.SignalRConnection = new signalR.HubConnectionBuilder()
                .withUrl("/SignalRHub")
                .build();

            console.log('%c ' + 'ssn_SignatR_util - A-20220506-1725-AAA-2 - promise ', 'color:yellow;font-size:16pt;');

            console.dir(this.SignalRConnection);

            this.SignalRConnection.on("ReceiveMessage", function (user, message) {

                console.log('%c ' + 'ssn_SignatR_util - A-20220506-0701', 'color:yellow;font-size:12pt;');
                console.log(user);
                console.log(message);

            });

            this.SignalRConnection.on("ReceiveMessage_func", (func)=> {

                console.log('%c ' + 'ssn_SignatR_util - A-20220506-2120', 'color:pink;font-size:36pt;');
                func();

            });

            this.SignalRConnection.start().then(() => {

                console.log('%c ' + 'SignalR-DemoSites_index - A-20220506-0701-start-AAA', 'color:yellow;font-size:36pt;');
                console.log('%c ' + 'resolve', 'color:yellow;font-size:48pt;');
                console.dir(this);
                console.dir(this.SignalRConnection);


                resolve(this.SignalRConnection);

            }).catch(function (err) {

                console.log('%c ' + 'ssn_SignatR_util - A-20220506-0703-error', 'color:brown;font-size:36pt;');
                console.dir(err);

                if (reject) reject();

                return console.error(err.toString());
            });

        }

        else {

            console.log('%c ' + 'ssn_SignatR_util - A-20220506-1726 - promise - connection is already set', 'color:yellow;font-size:16pt;');

        }
    });


    sendSignalRMessage(p1, p2, p3) {

        this.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + 'ssn_SignatR_util - A-20220506-1724', 'color:yellow;font-size:14pt;');

            this.SignalRConnection.invoke("SendMessage", p1, p2, p3);
        });

    }


    sendSignalRMessage_func(callSource , obj) {

        this.SignalRConnection_doSetup.then(() => {

            console.log('%c ' + `ssn_SignatR_util - A-20220506-2118 callSource [${callSource }]`, 'color:blue;font-size:24pt;');

            this.SignalRConnection.invoke("SendMessage_WithObj", obj);
        });

    }

}

let ssn_SignalR_util_instance = new ssn_SignalR_util();

export { ssn_SignalR_util_instance };


