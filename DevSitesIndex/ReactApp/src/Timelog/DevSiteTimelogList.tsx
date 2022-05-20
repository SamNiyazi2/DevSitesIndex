
// 05/11/2022 11:53 am - SSN - Creating 

import React, { useState, useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import parse from 'html-react-parser';


import { ssn_SignalR_util_React_instance } from '../Util/SignalR/ssn_SignalR_Util_React';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';

import '../css/ReactCSS.css';


import { deleteDevSiteTimelogRecord, getDevSiteTimelogRecords } from '../API/DevSite_Job_LineItemAPI';
import { DevSiteTimeLogDeleteOption } from './devSiteTimeLogDelete';


//const console__log = (msg, format) => console.log(msg, format);
//const console__dir = (obj1) => console.dir(obj1);

const console__log = (msg, format) => { };
const console__dir = (obj1) => { };

export const DevSiteTimelogList = (props) => {


    const [errors, setErrors] = useState([]);

    const [timelogData, setTimelogData] = useState([]);

    const [reverseConfirmOption, setReverseConfirmOption] = useState(0);

    useEffect(() => {


        const data = getDevSiteTimelogRecords(props.devSiteId);
        console__log("%c " + "DevSiteTimeLogList - 20220511-1203", 'Color:yellow;font-size:12px;');
        console__dir(data);

        data.then(response => {

            console__log("%c " + "DevSiteTimeLogList - 20220511-1206", 'Color:green;font-size:12px;');
            console__dir(response);

            // Do we have an error?
            if (response.Message) {

                const _erros = new Array();
                _erros.push(response.Message);
                setErrors(_erros);
            } else {
                // Did we get our records back?
                if (response.length > 0 && response[0].devSiteId == props.devSiteId) {

                    //let arrayCopy: DevSite_Job_LineItem[] = response as DevSite_Job_LineItem[];

                    setTimelogData(response);

                    //console__log("%c " + "DevSiteTimeLogList - 20220511-1329", 'Color:blue;font-size:32px;');
                    //// console__dir(arrayCopy);
                    //console__dir(timelogData);
                }
            }

        })
            .catch(error => {
                console__log("%c " + "DevSiteTimeLogList - 20220511-1208", 'Color:red;font-size:20px;');
                console__dir(error);

                const _erros = new Array();
                _erros.push(error.Message);
                setErrors(_erros);
            });


    }, [props.devSiteId, props.currentDate, timelogData.length]);


    const requestLogin = (e) => {

        console__log('%c ' + 'DevSiteTimelogList.tsx - 20220516-1408', 'color:blue;font-size:12px;');
        console__dir(e);


        const rec = new SignalR_MessageRecord();
        rec.callSource = 'DevSiteTimeLogList-20220516-1440';
        rec.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
        rec.dateTime = new Date();
        rec.message = SIGNALR_CONSTANTS.REQUEST_LOGIN;
        rec.user = "SamN";
        rec.forCurrentConnetionOnly = true;
        ssn_SignalR_util_React_instance.sendSignalRMessage_v2(rec);
    }



    const displayErrorMessages = () => {
        //console__log("%c " + "DevSiteTimeLogList - 20220511-1229", 'Color:red;font-size:20px;');
        //console__dir(errors);


        let results = errors.reduce((previous, currentValue, currentIndex) =>
            previous
                + "<li class='alert alert-danger'>xxx1234-"
                + currentValue
                + (currentValue.charIndex('login') > -1) ? <a onClick={requestLogin} tabIndex={0}>Login</a> : ''
            + "</li>", "");

        console__dir(results);
        if (results != "") {
            results = "<ul>" + results + "</ul>";
        }
        return parse(results);
    }




    return (
        <>

            {
                errors && displayErrorMessages()
            }

            <div className="cssTransitionDiv">
                <table >
                    <tbody>
                        {
                            timelogData && timelogData.map((timelogRecord) => {

                                const jobDetailUrl = `/jobs/details/?id=${timelogRecord.job_Lineitem?.jobId}`;
                                const jobDetailWindowName = `jobDetailWindow${timelogRecord.job_Lineitem?.jobId}`;

                                return (
                                    <tr key={timelogRecord.id}>

                                        <td >
                                            <>
                                                Timelog: <a href={jobDetailUrl} target={jobDetailWindowName} >{timelogRecord.job_Lineitem.job.jobTitle}</a>
                                                &nbsp;
                                                <DevSiteTimeLogDeleteOption
                                                    devSite_Job_LineitemId={timelogRecord.id}
                                                    reverseConfirmOption={reverseConfirmOption}
                                                    setReverseConfirmOption={setReverseConfirmOption}
                                                    setTimelogData={setTimelogData}
                                                />
                                            </>

                                        </td>
                                    </tr>

                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}

DevSiteTimelogList.propTypes = {
    devSiteId: PropTypes.number.isRequired,
    currentDate: PropTypes.object.isRequired
};

