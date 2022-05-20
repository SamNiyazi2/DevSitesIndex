
// 05/12/2022 10:22 pm - SSN

import React, { useState } from 'react';

import { createRoot } from 'react-dom/client';

import { ssn_SignalR_util_React_instance } from '../Util/SignalR/ssn_SignalR_Util_React';
import { ISignalR_MessageRecord } from '../Util/SignalR/ISignalR_MessageRecord';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';
import { React_Login_Popup } from './React_Login_Popup';



//const console__log = (msg, format) => console.log(msg, format);
//const console__dir = (obj1) => console.dir(obj1);

const console__log = (msg, format: string = 'color:yellow;font-size:24pt;') => { };
const console__dir = (obj1) => { };

const DIV_ID_FOR_AUTHENTICATE_USER = "DIV_ID_FOR_AUTHENTICATE_USER";

console__log('%c ' + 'AuthenticateUser.tsx - 20220520-0523', 'font-size:36pt;color:pink');


export const AuthenticateUser = (() => {
     
    let root2;

    let closeModal_React = false;
    let modalIsOpen= false;

    const setModalIsOpen = (_show) => {

        console__log('%c ' + 'AuthenticateUser.tsx - setModalIsOpen - 20220520-042', 'font-size:36pt;color:yellow');
        console__log('%c ' + `INCOMPLETE _show [${_show}]`, 'font-size:24pt;color:yellow');
        modalIsOpen = _show;
        closeModal_React = !_show;

    };

    //const closeModal_React = () => {

    //    console__log('%c ' + 'AuthenticateUser.tsx - closeModal_React - 2022051-0324', 'font-size:36pt;color:yellow');
    //    console__log('%c ' + 'INCOMPLETE', 'font-size:24pt;color:yellow');
       

    //};


    const handleLoginRequests = (signalR_MessageRecord: ISignalR_MessageRecord) => {


        let react_login_div = document.getElementById(DIV_ID_FOR_AUTHENTICATE_USER)

        if (react_login_div != null) {

            root2.unmount();
            $(react_login_div).empty();
            document.body.removeChild(react_login_div);

        }

        react_login_div = document.createElement('div');
        react_login_div.id = DIV_ID_FOR_AUTHENTICATE_USER;
        document.body.appendChild(react_login_div);


        console__log('%c ' + 'AuthenticateUser - 20220518-1157-CCC', 'color:yellow;font-size:36pt;');

        root2 = createRoot(react_login_div);
        root2.render(<React_Login_Popup closeModal_React={closeModal_React} setModalIsOpen={setModalIsOpen}/>);


    };




    console__log('%c ' + 'AuthenticateUser - AddSignalRJob - 20220520-0502', 'font-size:36pt,color:yellow');


    let rec: SignalR_MessageRecord = new SignalR_MessageRecord();
    rec.callSource = 'AuthenticateUser-20220514-1838';
    rec.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
    rec.dateTime = new Date();
    rec.func = handleLoginRequests;
    rec.message = SIGNALR_CONSTANTS.REQUEST_LOGIN;
    rec.user = "SamN";
    rec.forCurrentConnetionOnly = true;

    ssn_SignalR_util_React_instance.addSignalRJob(rec);


})();



