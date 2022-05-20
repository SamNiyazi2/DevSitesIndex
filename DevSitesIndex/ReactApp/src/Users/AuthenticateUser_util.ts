
// 05/20/2022 03:05 pm - SSN - Refactor - Moved from DevSiteTimeLogDelete.tsx

import { SIGNALR_CONSTANTS } from "../Util/SignalR/SignalR_Constants";
import { SignalR_MessageRecord } from "../Util/SignalR/SignalR_MessageRecord";
import { ssn_SignalR_util_React_instance } from "../Util/SignalR/ssn_SignalR_Util_React";

export class AuthenticateUser_util {

    public static componentRequestForLogin = (e, callSource: string, handlerUserLoggedIn: Function) => {

        console.log('%c ' + `${callSource} - 2022051507`, 'color:white;font-size:24px;');
        console.dir(e);


        let rec1: SignalR_MessageRecord = new SignalR_MessageRecord();
        rec1.callSource = `${callSource} -- 20220520-1509`;
        rec1.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
        rec1.dateTime = new Date();
        rec1.func = handlerUserLoggedIn;
        rec1.message = SIGNALR_CONSTANTS.UPDATE_LOGIN_STATUS;
        rec1.user = "SamN";

        ssn_SignalR_util_React_instance.addSignalRJob(rec1);


        const rec2 = new SignalR_MessageRecord();
        rec2.callSource = `${callSource} -- 20220520-1510`;
        rec2.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
        rec2.dateTime = new Date();
        rec2.message = SIGNALR_CONSTANTS.REQUEST_LOGIN;
        rec2.forCurrentConnetionOnly = true;
        rec2.user = "SamN";

        ssn_SignalR_util_React_instance.sendSignalRMessage_v2(rec2);
    }


}
