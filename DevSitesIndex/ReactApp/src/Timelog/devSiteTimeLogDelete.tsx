
// 05/12/2022 05:05 pm - SSN 

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import parse from 'html-react-parser';

import { toast } from 'react-toastify';

import { deleteDevSiteTimelogRecord } from '../API/DevSite_Job_LineItemAPI';
import { AuthenticateUser_util } from '../Users/AuthenticateUser_util';

const console__log = (msg, format) => console.log(msg, format);
const console__dir = (obj1) => console.dir(obj1);

//const console__log = (msg, format) => { };
//const console__dir = (obj1) => { };


export const DevSiteTimeLogDeleteOption = (props) => {

    const [confirmDelete, setConfirmDelete] = useState(0);
    const [IDForDeleteConfirmation, setIDForDeleteConfirmation] = useState("");

    const [errors, setErrors] = useState([]);

    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    const confirmInputRef = useRef(null);



    useEffect(() => {

        //   console__log('%c ' + 'DevSiteTimelogDelete.tsc - 20220520-1430 - useEffect confirmDelete', 'color:red;font-size:12px;');

        if (confirmDelete) {

            props.setReverseConfirmOption(props.devSite_Job_LineitemId);

        }

    }, [confirmDelete])



    useEffect(() => {

        // console__log('%c ' + 'DevSiteTimelogDelete.tsc - 20220520-1431 - useEffect props.reverseConfirmOption', 'color:red;font-size:12px;');

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


    const handlerUserLoggedIn = (response) => {

        console__log('%c ' + 'DevSiteTimelogDelete.tsc - handlerUserLoggedIn  - 20220520-1446', 'color:red;font-size:48px;');
        console__dir(response);
        setShowLoginPrompt(false);
        setErrors([]);
        toast.success("You're logged in.");
    }


    const requestLogin = (e) => {

        console__log('%c ' + 'DevSiteTimelogDelete.tsc - 20220512-2150', 'color:red;font-size:48px;');
        console__dir(e);

        AuthenticateUser_util.componentRequestForLogin(e, 'DevSiteTimelogDelete.tsc - 20220512-2150', handlerUserLoggedIn);

    }


    const deleteRecord = (id: number) => {

        console__log('%c ' + 'DevSiteTimelogDelete.tsc - deleteRecord - 20220520-1725', 'color:red;font-size:48px;');

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
            console__log("%c " + "DevSiteTimeLogList - 20220511-1617", 'Color:yellow;font-size:20px;');
            console__dir(response);

            // CustomAuthorizeAPI Error
            if (response.statusCode && response.statusCode == 401) {

                const _erros = new Array();
                _erros.push({ message: response.value.apiErrorMessage, requestLogin: response.value.requestLogin_101 });
                setShowLoginPrompt(response.value.requestLogin_101);

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


                console__log("%c " + "DevSiteTimeLogList - 20220511-1622", 'Color:blue;font-size:32px;');
                props.setTimelogData([]);





                setConfirmDelete(0);




            }

        })
            .catch(error => {
                console__log("%c " + "DevSiteTimeLogList - 20220511-1623", 'Color:red;font-size:20px;');
                console__dir(error);

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
                    <i tabIndex={0}

                        onClick={() => {
                            setConfirmDelete(props.devSite_Job_LineitemId);
                            setTimeout(() => confirmInputRef.current.focus(), 500);
                        }}
                        onKeyPress={() => {
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
                    <div className="cssDevsiteTimelogDelete">
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
                                onKeyPress={(e) => deleteRecord(props.devSite_Job_LineitemId)}
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
                                        {errors.map((val, ndx) =>
                                            <span style={{ marginRight: 10, marginLeft: 10, padding: 2 }}
                                                key={ndx}
                                                className="alert alert-danger alert-sm">

                                                {val.message} {showLoginPrompt && <a
                                                    onClick={requestLogin}
                                                    onKeyPress={requestLogin}
                                                    tabIndex={0}>Login</a>}

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

