
// 05/12/2022 09:09 pm - SSN 

import { ISignalR_MessageRecord } from "./ISignalR_MessageRecord";

export class SignalR_MessageRecord implements ISignalR_MessageRecord {

    callSource: string;
    processorName: string; // AngularJS, Angular, ReactJS
    user: string;
    message: string;
    dateTime: Date;
    func: Function;
     
    jobStatus: string;
    statusDate: string;

    errorCode: string;
    errorMessage: string;

    connectionId: string;
    forCurrentConnetionOnly: boolean;

}
