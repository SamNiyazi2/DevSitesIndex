
// 05/12/2022 10:22 pm - SSN

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';

import { StaticModal } from '../ModalPopups/StaticModal';
import { AuthenticationAPI } from '../API/AuthenticationAPI';
import { User } from '../Models/User';
import { MonitorTabFocus } from '../Util/MonitorTabFocus';

// 05/13/2022 04:10 pm - SSN



export const React_Login_Popup = (props) => {



    console.log('%c ' + 'React_Login_Popup  20220513-1738', 'font-size:14pt;color:blue');


    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [thisModalID, setThisModalID] = useState('id_modal_' + (Math.random() * 100000).toFixed(0).toString());

    const [errors, setErrors] = useState([]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [forgeryToken, setForgeryToken] = useState("NotSet21351");


    useEffect(() => {


        AuthenticationAPI.getForgeryToken('AuthenticateUser-20220513-1324')
            .then(response => {
                setForgeryToken(response);
            })
            .catch(error => {
                console.log('%c ' + 'AuthenticateUser-20220513-1327 ERROR', 'font-size:24pt;color:red');
                setForgeryToken(error);

            });

    }, []);



    useEffect(() => {

        let timeoutID = null;

        console.log('%c ' + `React_Login_Popup.tsx - 20220516-2338 - useEffect modalIsOpen [${modalIsOpen}]`, 'font-size:14pt;color:yellow;');

        if (modalIsOpen) {
            timeoutID = setTimeout(() => MonitorTabFocus.monitorFocus(thisModalID), 600);
        }

        return () => {

            clearTimeout(timeoutID);
        }

    }, [modalIsOpen])


    const setValue = (event, callback) => {

        callback(event.target.value);


    }





    const handlerSubmitRequest = async (e) => {


        let forgeryToken: any = $("[name=__RequestVerificationToken]").val();

        e.preventDefault();

        console.log("%c " + "AuthenticateUser.tsx - 20220513-1137 ", "font-size:20pt;color:yellow");
        console.log(email);
        console.log(password);
        console.log('forgeryToken:');
        console.log(forgeryToken);


        const user = new User();
        user.email = email;
        user.password = password;
        user.forgeryToken = forgeryToken;


        await AuthenticationAPI.authenticateUser('AuthenticateUser-20220513-1325', user).then(response => {
            console.log('%c ' + 'AuthenticateUser.tsx - 2022513-1219 ', 'font-size:24pt; color:yellow');
            console.dir(response);

            console.dir(response.dataBag.feedbackMessages);

            let errors = new Array();
            response.dataBag.feedbackMessages.map((entry, ndx) => {

                entry.errorMessages.map(error => {
                    errors.push(error);
                });

            });

            console.dir(errors);

            setErrors(errors);

            if (errors.length > 0) {
                toast.error("Failed login");
            } else {
                toast.success("You are logged in!");
                props.doCloseModal();
            }




        }).catch(error => {

            console.log('%c ' + 'AuthenticateUser.tsx - 2022513-1220 ERROR', 'font-size:36pt; color:red');
            console.dir(error);

        });

    }




    return (


        <>

            <StaticModal
                thisModalID={thisModalID}
                /*width={'660px'}*/
                /* key={props.key3}*/
                promptToOpen=""
                setModalIsOpen={setModalIsOpen}
                doCloseModal={props.doCloseModal}
                title={

                    <>
                        <h3 > Login </h3>

                    </>
                }



                body={
                    <>

                        <form onSubmit={handlerSubmitRequest} >

                            <div dangerouslySetInnerHTML={{ __html: forgeryToken }} />

                            <div className="form-group" >

                                <label htmlFor="userName" className="col-sm-2 control-label" >
                                    Email:
                                </label>

                                <div className="col-sm-10" >

                                    <input onChange={e => setValue(e, setEmail)} name="email" id="userName" type="text" className="form-control" placeholder="Email..." required autoFocus={true} />

                                </div>
                            </div>






                            <div className="form-group" >

                                <label htmlFor="password" className="col-sm-2 control-label" >
                                    Password:
                                </label>

                                <div className="col-sm-10" >

                                    <input onChange={e => setValue(e, setPassword)} name="password" id="password" type="password" className="form-control" placeholder="Password..." required />

                                </div>
                            </div>






                            <div className="row" >
                                <div className="col-sm-10" >
                                    {
                                        errors && errors.map((error, ndx) => <p key={ndx} className="cssSpanInfo alert alert-danger" > {error} </p>)
                                    }

                                </div>
                                <div className="col-sm-2" >
                                    <input type="submit" value="Login" className="btn btn-primary" />
                                </div>
                            </div>




                        </form>

                    </>
                }


                footer={
                    <span > </span>
                }

            />
        </>
    );
}


React_Login_Popup.protoTypes = {
    devSiteId: PropTypes.number.isRequired,
    refreshControl: PropTypes.func.isRequired,
    counter_101: PropTypes.number.isRequired,
    doCloseModal: PropTypes.object.isRequired

}
