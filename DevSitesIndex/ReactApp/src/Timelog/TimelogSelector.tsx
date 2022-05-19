﻿
// 05/01/2022 12:47 am - SSN - [20220501-0047] - [001] - Create DevSite timelog association selector

import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { fromEvent, throttle, interval } from 'rxjs';
import parse from 'html-react-parser';


import { ssn_SignalR_util_React } from '../Util/SignalR/ssn_SignalR_Util_React';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';


import Autocomplete from "../Components/AutoComplete";
// https://www.npmjs.com/package/react-autocomplete


import * as DevSite_Job_LineItemAPI from '../API/DevSite_Job_LineItemAPI';

import TextInput from "../Common/TextInput"
import { IDevSite_Job_LineItem } from "../Interfaces/IDevSite_Job_LineItem";
import { DevSite_Job_LineItem } from "../Models/DevSite_Job_LineItem";
import { ReactErrorModel } from "../Models/ReactErrorModel";
import { IReactErrorModel } from "../Interfaces/IReactErrorModel";
import { AuthenticationAPI } from "../API/AuthenticationAPI";
import { StaticModal } from "../ModalPopups/StaticModal";
import { IGeneral_Error_Message } from "../Interfaces/General_Error_Message";
import { General_Error_Message } from "../Models/General_Error_Message";


import { MonitorTabFocus } from '../Util/MonitorTabFocus'

//export class TimelogSelector extends React.Component<{}, {}> {
const TimelogForm = (props) => {


    console.log('%c ' + 'TimelogSelector - 20220504-1554', 'color:blue;font-size:12pt;');

    console.log(props.devSiteId);



    const [projectData, setProjectData] = useState([]);
    const [jobData, setJobData] = useState([]);
    const [job_LineItemData, setJob_LineItemData] = useState([]);


    const [projectId, setProjectId] = useState(0);
    const [jobId, setJobId] = useState(0);
    const [job_LineItemId, setJob_LineItemId] = useState(0);

    const [errors, setErrors] = useState(new ReactErrorModel())


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [thisModalID, setThisModalID] = useState('id_modal_' + (Math.random() * 100000).toFixed(0).toString());


    const getProjectsData = async (selected: string = null) => {


        console.log('%c ' + 'TimelogSelector - 20220501-1927', 'color:yellow;font-size:12pt;')

        fetch('/api/projectApi/typeahead')
            .then(response => response.json())
            .then(data => {

                console.log('%c ' + 'TimelogSelector - 20220501-1728', 'font-size:12pt;color:yellow;');
                setProjectData(data);
                setJobId(0);
                setJob_LineItemId(0);
            });


    }



    const getJobsData = async (selected: string = null) => {


        console.log('%c ' + 'TimelogSelector - 20220501-1927', 'color:yellow;font-size:12pt;')

        if (projectId <= 0) {
            setJobData(null);
            setJob_LineItemId(0);
            return;
        }

        fetch(`/api/jobapi/typeahead_projectRecords/${projectId}`)
            .then(response => response.json())
            .then(data => {

                console.log('%c ' + 'TimelogSelector - 20220501-1730', 'font-size:12pt;color:yellow;');
                setJobData(data);
                setJob_LineItemId(0);

            });

    }





    const getJob_LineItemsData = async (selected: string = null) => {


        console.log('%c ' + 'TimelogSelector - 20220501-1927', 'color:yellow;font-size:12pt;')
        if (jobId <= 0) {
            setJob_LineItemData(null);
            return;
        }

        fetch(`/api/job_lineItemAPI/typeahead_jobrecords/${jobId}`)
            .then(response => response.json())
            .then(data => {

                console.log('%c ' + 'TimelogSelector - 20220501-2207', 'font-size:12pt;color:yellow;');
                setJob_LineItemData(data);

            });
    }


    useEffect(() => {

        let timeoutID = null;

        console.log('%c ' + `TimelogSelector - 20220516-1933 - useEffect modalIsOpen [${modalIsOpen}]`, 'font-size:12pt;color:blue;');

        if (modalIsOpen) {
            getProjectsData();

            timeoutID = setTimeout(() => MonitorTabFocus.monitorFocus(thisModalID), 600);

        }

        return () => {

            clearTimeout(timeoutID);
        }

    }, [modalIsOpen])


    useEffect(() => {

        if (modalIsOpen) {
            getJobsData();
        }
    }, [projectId, modalIsOpen])


    useEffect(() => {

        if (modalIsOpen) {
            getJob_LineItemsData();
        }

    }, [projectId, jobId, modalIsOpen])



    function formIsValid() {

        let errors: IReactErrorModel = new ReactErrorModel();

        if (!projectId) errors.projectId = "Project is required";
        if (!jobId) errors.jobId = "Job is required";
        if (!job_LineItemId) errors.job_LineItemId = "Line item is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;

    }



    async function check_isLoggedIn(): Promise<boolean> {

        const isLoggedInResult = await AuthenticationAPI.isLoggedIn_v02();
        //console.log('%c ' + 'DevSitesIndex - 20220502-1722-YYYYYYYY', 'font-size:20pt;color:yellow');
        //console.log(isLoggedInResult);
        return isLoggedInResult;

    }


    async function saveRecord() {

        const isLoggedIn = await check_isLoggedIn();

        if (!isLoggedIn) {
            let general_Error_Messages: IGeneral_Error_Message[] = new Array<General_Error_Message>();
            general_Error_Messages.push(new General_Error_Message("Not logged in!", true));
            setErrors({ general_Error: general_Error_Messages });
            return false;
        }


        const devSite_Job_LineItem: IDevSite_Job_LineItem = new DevSite_Job_LineItem();

        let timeNow = new Date();

        devSite_Job_LineItem.dateAdded = timeNow;
        devSite_Job_LineItem.fK_UserID
        devSite_Job_LineItem.devSiteId = props.devSiteId;
        devSite_Job_LineItem.job_LineItemId = job_LineItemId;
        console.log('%c ' + 'TimelogSelector - 20220510-2003', 'color:yellow;font-size:20pt;')
        console.log(devSite_Job_LineItem);

        return DevSite_Job_LineItemAPI.saveRecord(devSite_Job_LineItem)

            .then(savedRecord => {
                console.log('%c ' + 'TimelogSelector - Save record - 20220502-1537', 'color:yellow;font-size:12pt');
                console.dir(savedRecord);
                return savedRecord;
            })

            .catch(error => {
                console.log('%c ' + 'TimelogSelector - Save record - FAILED - 20220502-1538', 'color:RED;font-size:24pt');
                console.dir(error);
                throw error;
            });

    }


    const requestLogin = (e) => {

        console.log('%c ' + 'DevSiteTimelogDelete.tsc - 20220512-2150', 'color:blue;font-size:12px;');
        console.dir(e);


        const signalR_MessageRecord = new SignalR_MessageRecord();
        signalR_MessageRecord.callSource = 'TimelogSelector-202205161442';
        signalR_MessageRecord.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
        signalR_MessageRecord.dateTime = new Date();
        signalR_MessageRecord.message = SIGNALR_CONSTANTS.REQUEST_LOGIN;
        signalR_MessageRecord.user = "SamN";

        ssn_SignalR_util_React.sendSignalRMessage_v2(signalR_MessageRecord);
    }



    function handleSaveRequest(event) {

        event.preventDefault();

        if (!formIsValid()) return;


        //        setSaving(true);

        saveRecord().then((result) => {


            //props.history.push('/courses');
            /////////////////////////////////////////////////////////////////////////////////////toast.success("Course was saved.");
            console.log('%c ' + 'TimelogSelect - SaveRecord - 20220512-1326', 'font-size:12px;font-color:pink');
            console.log(Object.keys(errors).length);
            console.dir(errors);
            console.dir(result);

            if (result) {
                props.refreshControl();
            }


        }).catch(error => {

            //            setSaving(false);

            /////////////////////////////////////////////////////////////////////////////////////////          toast.error("Failed to save course.");












            console.log('%c ' + 'DevSiteIndex - TimelogSelected - Failed save 20220502-1610', 'font-size:24pt;color:red;');
            console.dir(error);
            console.dir(error.message);

            //            setErrors({ onSave: error.message });
            setErrors({ general_Error_Html: parse(error.message) });


        });
    }


    return (


        <>

            <StaticModal
                thisModalID={thisModalID}
                /*width={'660px'}*/
                key={props.key3}
                promptToOpen="Add timelog"
                doCloseModal={props.doCloseModal}
                setModalIsOpen={setModalIsOpen}
                title={

                    <>
                        <h3>Select timelog</h3>
                    </>
                }



                body={
                    <>
                        <form onSubmit={handleSaveRequest} ssn-cmd='ssn-auto-focus'  >

                            <div className="form-group">

                                <label htmlFor="projectId" className="col-sm-2 control-label">
                                    Project:
                                </label>

                                <div className="col-sm-10">

                                    <Autocomplete
                                        setOwner={setProjectId}
                                        setChild={setJobId}
                                        data={projectData}
                                        size={60}
                                        error={errors.projectId}
                                        setFocus={true}
                                    />



                                </div>
                            </div>






                            <div className="form-group">

                                <label htmlFor="jobId" className="col-sm-2 control-label">
                                    Job:
                                </label>

                                <div className="col-sm-10">

                                    <Autocomplete
                                        setOwner={setJobId}
                                        data={jobData}
                                        size={60}
                                        parentId={projectId}
                                        error={errors.jobId}
                                        setFocus={false}
                                    />



                                </div>
                            </div>




                            <div className="form-group">

                                <label htmlFor="lineIemId" className="col-sm-2 control-label">
                                    Line item:
                                </label>

                                <div className="col-sm-10">

                                    <Autocomplete
                                        setOwner={setJob_LineItemId}
                                        data={job_LineItemData}
                                        size={60}
                                        parentId={jobId}
                                        error={errors.job_LineItemId}
                                        setFocus={false}
                                    />



                                </div>

                            </div>

                            <div className="row">
                                <div className="col-sm-10">
                                    {errors && errors.general_Error && errors.general_Error.map((rec, ndx) => <span key={ndx} className="cssSpanInfo alert alert-danger">{rec.ErrorMessage}
                                        {rec.RequestLogin ? <a onClick={requestLogin} tabIndex={0}>Login</a> : ""}

                                    </span>)}
                                    {errors && errors.general_Error_Html && <span className="cssSpanInfo alert alert-danger">{errors.general_Error_Html}</span>}
                                </div>
                                <div className="col-sm-2">
                                    <input type="submit" value="Save" className="btn btn-primary" />
                                </div>
                            </div>




                        </form>
                    </>
                }


                footer={
                    <span></span>
                }

            />
        </>
    );

}


TimelogForm.protoTypes = {
    devSiteId: PropTypes.number.isRequired,
    refreshControl: PropTypes.func.isRequired,
    counter_101: PropTypes.number.isRequired,
    doCloseModal: PropTypes.object.isRequired
}

export default TimelogForm



