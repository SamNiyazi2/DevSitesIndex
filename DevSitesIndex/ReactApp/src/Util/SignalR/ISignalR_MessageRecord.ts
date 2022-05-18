
// 05/12/2022 09:08 pm - SSN 

export interface ISignalR_MessageRecord {

    callSource: string;
    processorName: string; // AngularJS, Angular, ReactJS
    user: string;
    message: string;
    dateTime: Date;
    func: Function;

    jobStatus: string;
    statusDate: string;

}
