
// 05/03/2022 09:14 am - SSN - [20220502-1159] - [014] - Create table DevSite_Job_LineItem


import React, { EventHandler, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '../css/ReactCSS.css';


// https://daveceddia.com/open-modal-in-react/

import './StaticModal.css'


class zIndexHolder {

    static zIndexModalGlobal = 2000;

}

export function StaticModal(props) {

    const [modalFirstCall, setModalFirstCall] = useState(false);
    const [modalZIndex, setModalZIndex] = useState(zIndexHolder.zIndexModalGlobal);

    const [defaultShowSetting, setDefaultShowSetting] = useState(null);

    const [show, setShow] = useState(props.promptToOpen === "");


    //console.log('%c ' + `StaticModal.tsx - 20220515-1254 -   defaultShowSetting: [${defaultShowSetting}]  show: [${show}]`, 'font-size:12pt;color:green');




    //useEffect(() => {

    //    console.log('%c ' + `StaticModal.tsx - 20220516-1641 - useEffect modalZIndex [${modalZIndex}]`, 'font-size:24pt;color:yellow');

    //    if (!modalFirstCall) {

    //        console.log('%c ' + `StaticModal.tsx - 20220516-1642 - useEffect modalZIndex [${modalZIndex}]`, 'font-size:16pt;color:red');

    //        setModalFirstCall(true);

    //    }

    //}, [modalFirstCall])



    useEffect(() => {

        // console.log('%c ' + `StaticModal.tsx - 20220513-1531 - useEffect show [${show}]   props.setModalIsOpen  `, 'font-size:12pt;color:yellow');

        if (props.setModalIsOpen) {
            // console.log('%c ' + `StaticModal.tsx - 20220517-0314 - useEffect - call   props.setModalIsOpen  to value of show = [${show}] `, 'font-size:24pt;color:red');
            props.setModalIsOpen(show);
        }

        if (show) {
            zIndexHolder.zIndexModalGlobal += 100;
            setModalZIndex(zIndexHolder.zIndexModalGlobal);
        } else {
            zIndexHolder.zIndexModalGlobal -= 100;
        }


        return () => {

            //if (show) {
            //    zIndexHolder.zIndexModalGlobal -= 100;
            //    setModalZIndex(zIndexHolder.zIndexModalGlobal);
            //}
        }

    }, [show])




    useEffect(() => {

        //console.log('%c ' + 'StaticModal.tsx - 20220513-1523 - useEffect closeModal_React ', 'font-size:12pt;color:yellow');
        //console.log('props.closeModal_React:');
        //console.dir(props.closeModal_React);

        //console.log('props.modalIsOpen:');
        //console.dir(props.modalIsOpen);


        if (props.closeModal_React != undefined && (props.modalIsOpen == undefined || props.modalIsOpen && props.modalIsOpen == true)) {
            // console.log('%c ' + `StaticModal.tsx - 20220517-0311-A - useEffect closeModal_React: [${props.closeModal_React }]`, 'font-size:24pt;color:red');
            if (props.closeModal_React) {
                handleClose();
            }
        }

    }, [props.closeModal_React]);




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

        console.log('%c ' + `StaticModal.tsx - 20220516 2020 - handleShow [${show}]`, 'font-size:12pt;color:yellow');

        setShow(true);

        functionDisableScrolling();


    };


    const handleClose = () => {

        console.log('%c ' + 'StaticModal.tsx - 20220513-1524 - handleClose ', 'font-size:12pt;color:yellow');

        setDefaultShowSetting(false);

        setShow(false);

        if (props.setModalIsOpen) {

            console.log('%c ' + 'StaticModal.tsx - 20220517-1848 - handleClose setModalIsOpen(false) ', 'font-size:24pt;color:red');

            props.setModalIsOpen(false);
        }

        functionEnableScrolling();

    }



    return (


        show ?

            <>

                <div className="backdropStyle" style={{ zIndex: modalZIndex }} >
                </div>


                <div className="modalStyle cssTransitionDiv" role="dialog" style={{ zIndex: modalZIndex + 10 }} >

                    <div className="modal-dialog " role="document" style={{ width: props.width }}>
                        <div className="modal-content" id={props.thisModalID}>


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



                <ToastContainer />
            </>



            : <>

                <a onClick={handleShow} >
                    {props.promptToOpen}
                </a>

                <ToastContainer />
            </>




    );
}





StaticModal.propTypes = {
    thisModalID: PropTypes.string.isRequired,
    children: PropTypes.node,
    width: PropTypes.string,
    title: PropTypes.element,
    body: PropTypes.element,
    footer: PropTypes.element,
    promptToOpen: PropTypes.string.isRequired,
    closeModal_React: PropTypes.bool.isRequired,

    // To activate action only when modal is open like retreiving data.
    setModalIsOpen: PropTypes.func.isRequired

};
