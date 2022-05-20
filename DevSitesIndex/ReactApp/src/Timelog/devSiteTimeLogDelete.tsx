
// 05/12/2022 05:05 pm - SSN 

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';

import { deleteDevSiteTimelogRecord } from '../API/DevSite_Job_LineItemAPI';

import { ssn_SignalR_util_React_instance } from '../Util/SignalR/ssn_SignalR_Util_React';
import { SignalR_MessageRecord } from '../Util/SignalR/SignalR_MessageRecord';
import { SIGNALR_CONSTANTS } from '../Util/SignalR/SignalR_Constants';

export const DevSiteTimeLogDeleteOption = (props) => {

    const [confirmDelete, setConfirmDelete] = useState(0);
    const [IDForDeleteConfirmation, setIDForDeleteConfirmation] = useState("");

    const [errors, setErrors] = useState([]);

    const confirmInputRef = useRef(null);



    useEffect(() => {

        if (confirmDelete) {

            props.setReverseConfirmOption(props.devSite_Job_LineitemId);

        }

    }, [confirmDelete])



    useEffect(() => {

        if (

            confirmDelete != 0
            &&
            confirmDelete != props.reverseConfirmOption
            &&
            props.reverseConfirmOption != props.devSite_Job_LineitemId

        ) {

            setConfirmDelete(0);
        }


    }, [props.reverseConfirmOption])


    const requestLogin = (e) => {

        console.log('%c ' + 'DevSiteTimelogDelete.tsc - 20220512-2150', 'color:red;font-size:48px;');
        console.dir(e);


        const signalR_MessageRecord = new SignalR_MessageRecord();
        signalR_MessageRecord.callSource = 'DevSiteTimeLogDelete-20220514-1836';
        signalR_MessageRecord.processorName = SIGNALR_CONSTANTS.PROCESSOR_NAME.REACTJS;
        signalR_MessageRecord.dateTime = new Date();
        signalR_MessageRecord.message = SIGNALR_CONSTANTS.REQUEST_LOGIN;
        signalR_MessageRecord.user = "SamN";

        ssn_SignalR_util_React_instance.sendSignalRMessage_v2(signalR_MessageRecord);
    }


    const deleteRecord = (id: number) => {

        setErrors([]);

        if (isNaN(parseInt(IDForDeleteConfirmation))) {

            setErrors([{ message: "Confirmation key is required." }]);
            return;
        }

        if (id != parseInt(IDForDeleteConfirmation)) {

            setErrors([{ message: `Invalid entry` }]);
            return;
        }



        deleteDevSiteTimelogRecord(id).then(response => {
            console.log("%c " + "DevSiteTimeLogList - 20220511-1617", 'Color:yellow;font-size:20px;');
            console.dir(response);

            // CustomAuthorizeAPI Error
            if (response.statusCode && response.statusCode == 401) {

                const _erros = new Array();
                _erros.push({ message: response.value.apiErrorMessage, requestLogin: response.value.requestLogin_101 });

                setErrors(_erros);
            }
            else if (response.Message) {

                const _erros = new Array();
                _erros.push({ message: response.Message });
                setErrors(_erros);
            }
            else if (response.ErrorMessage) {

                const _erros = new Array();
                _erros.push({ message: response.ErrorMessage });
                setErrors(_erros);

            } else {


                console.log("%c " + "DevSiteTimeLogList - 20220511-1622", 'Color:blue;font-size:32px;');
                props.setTimelogData([]);





                setConfirmDelete(0);




            }

        })
            .catch(error => {
                console.log("%c " + "DevSiteTimeLogList - 20220511-1623", 'Color:red;font-size:20px;');
                console.dir(error);

                const _erros = new Array();
                _erros.push(error.Message);
                setErrors(_erros);
            });


    }


    const processCancelRequest = (event) => {

        setConfirmDelete(0);
        setErrors([]);
    }


    return (

        <>

            {!confirmDelete
                && (
                    <i onClick={() => {
                        setConfirmDelete(props.devSite_Job_LineitemId);
                        setTimeout(() => confirmInputRef.current.focus(), 500);
                    }}
                        title="Remove association"
                        className="glyphicon glyphicon-remove cssGlyphicon" >
                    </i>)
            }


            {confirmDelete > 0
                &&
                (
                    <div style={{ paddingLeft: 40 }}>
                        <span>Enter <strong>{props.devSite_Job_LineitemId}</strong> to delete:

                            &nbsp;

                            <input ref={confirmInputRef}
                                onChange={(e) => setIDForDeleteConfirmation(e.target.value)}
                                onKeyPress={(e) => {

                                    if (e.key == 'Enter') {
                                        deleteRecord(props.devSite_Job_LineitemId)
                                    }
                                }}
                                size={5}
                            />

                            &nbsp;
                            &nbsp;

                            <button className="btn btn-sm  btn-danger"
                                onClick={(e) => deleteRecord(props.devSite_Job_LineitemId)}
                            >
                                Delete
                            </button >
                            <button className="btn btn-sm btn-default"
                                onClick={(e) => processCancelRequest(e)}
                            >
                                Cancel
                            </button >
                            {errors &&
                                (
                                    <>
                                        {errors.map(
                                            (val, ndx) =>
                                                <span style={{ marginRight: 10, marginLeft: 10, padding: 2 }}
                                                    key={ndx}
                                                    className="alert alert-danger alert-sm">

                                                    {val.message} {val.requestLogin && <a onClick={requestLogin} tabIndex={0}>Login</a>}

                                                </span>


                                        )}
                                    </>
                                )

                            }


                        </span>
                    </div>
                )
            }
        </>

    )


}


DevSiteTimeLogDeleteOption.propTypes = {
    devSite_Job_LineitemId: PropTypes.number.isRequired,
    reverseConfirmOption: PropTypes.number.isRequired,
    setReverseConfirmOption: PropTypes.func.isRequired,
    setTimelogData: PropTypes.func.isRequired
};

