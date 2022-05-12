
// 05/03/2022 09:14 am - SSN - [20220502-1159] - [014] - Create table DevSite_Job_LineItem


import React, { EventHandler, useState, useEffect } from 'react';
import PropTypes from 'prop-types';



// 05/06/2022 05:34 am - SSN - [20220506-0327] - [006] - SignalR Hub
import * as signalR from "@microsoft/signalr";

import '../css/ReactCSS.css';


// https://daveceddia.com/open-modal-in-react/

import './StaticModal.css'




export function StaticModal(props) {


    console.log('%c ' + 'StaticModal - 20220504-1608', 'color:yellow;font-size:18pt;');
    console.dir(props);


    const [show, setShow] = useState(false);



    useEffect(() => {
        props.setModalIsOpen(show);
    }, [show])


    if (false) {



        let connection = new signalR.HubConnectionBuilder()
            .withUrl("/SignalRHub")
            .build();




        connection.on("ReceiveMessage", function (user, message) {

            console.log('%c ' + 'SignalR - 20220506-0537-StaticModal', 'color:yellow;font-size:12pt;');
            console.log(user);
            console.log(message);



        });


        connection.start().then(function () {

            console.log('%c ' + 'SignalR REACT - 20220506-0534-StaticModal', 'color:yellow;font-size:12pt;');

        }).catch(function (err) {

            console.log('%c ' + 'SignalR REACT - 20220506-0535-StaticModal', 'color:red;font-size:12pt;');
            console.dir(err);

            return console.error(err.toString());
        });


    }



    useEffect(() => {

        handleClose();

    }, [props.doClose]);




    let _window = window;



    let functionDisableScrolling = () => {

        // To get the scroll position of current webpage
        let TopScroll = _window.scrollY || _window.pageYOffset || document.documentElement.scrollTop;
        let LeftScroll = _window.scrollX || _window.pageXOffset || document.documentElement.scrollLeft;

        // if scroll happens, set it to the previous value
        _window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
    }


    let functionEnableScrolling = () => {
        window.onscroll = function () { };
    }


    const handleShow = () => {

        setShow(true);
        functionDisableScrolling();

    };


    const handleClose = () => {

        setShow(false);
        functionEnableScrolling();

    }


    return (

        show ?

            <>

                <div className="backdropStyle"  >
                </div>
                 

                    <div className="modalStyle cssTransitionDiv" role="dialog"  >
                    <div className="modal-dialog " role="document" style={{ width: props.width }}>
                        <div className="modal-content">


                            <div className="modal-header">

                                {props.title}

                            </div>


                            <div className="modal-body">

                                <fieldset>

                                    {props.body}

                                </fieldset>

                            </div>



                            <div className="modal-footer">

                                {props.footer}

                                <button onClick={handleClose}>
                                    Close
                                </button>
                            </div>





                        </div>
                    </div>
                </div>
                     


            </>



            : <>

                <a onClick={handleShow} >
                    {props.promptToOpen}
                </a>

            </>




    );
}





StaticModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
    width: PropTypes.string,
    title: PropTypes.element,
    body: PropTypes.element,
    footer: PropTypes.element,
    promptToOpen: PropTypes.string.isRequired,
    doClose: PropTypes.bool.isRequired,
    setModalIsOpen: PropTypes.func.isRequired
};
