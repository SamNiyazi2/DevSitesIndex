﻿
// 11/09/2019 11:03 am - SSN - Created

// 11/18/2019 02:26 pm - SSN - Create class for haveChanges

import { ChangeMonitorFlag } from '../Util/ChangeMonitorFlag';

var ChangeMonitor_Util = function () {

    var setItemChanged_ssn = function (this: HTMLInputElement, ev: Event) {

        ChangeMonitorFlag.haveChanges = true;
    }


    var setItemToResetChangedFlag_ssn = function (this: HTMLInputElement, ev: Event) {

        ChangeMonitorFlag.haveChanges = false;
    }


    // 11/09/2019 08:08 am - SSN - Added monitorChange_SSN
    var monitorChange_SSN = function () {

        let inputs = document.querySelectorAll('input');

        inputs.forEach((x, y, z) => {

            if (!bypassObject(z[y])) {
                z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
            }

            if (z[y].type) {
                if (z[y].type.toLowerCase() === "submit") {
                    z[y].addEventListener('click', ChangeMonitor_Util.setItemToResetChangedFlag_ssn);
                }
            }

        });


        let textareas = document.querySelectorAll('textarea');

        textareas.forEach((x, y, z) => {

            if (!bypassObject(z[y])) {
                z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
            }
        });


        let selects = document.querySelectorAll('select');

        selects.forEach((x, y, z) => {

            if (!bypassObject(z[y])) {
                z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
            }
        });

    }

    var bypassObject = function (obj1): boolean {

        if (obj1.type) {
            if (obj1.type.toLowerCase() === 'hidden' || obj1.type.toLowerCase() === 'submit') {

                return true;
            }
        }

        if (!obj1.id && !obj1.name) return true;

        if (obj1.id.toLowerCase().indexOf('search') > -1) return true;

        if (obj1.name.toLowerCase().indexOf('search') > -1) return true;

        return false;
    }




    var setupMonitor_v01 = function () {

        console.log('ChangeMonitor - setupMonitor');


        let isChrome = getBrowserName() === 'chrome';

        if (true) {

            console.log('site - beforeUnload on');

            if (isChrome) {

                window.addEventListener("beforeunload", function (e) {

                    if (!ChangeMonitorFlag.haveChanges) return;

                    var confirmationMessage = "\o/";

                    (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
                    return "You will lose all pending changes if you leave this page";                                //Webkit, Safari, Chrome etc.
                });

            }


            // Cannot use with Chrome
            if (!isChrome) {

                window.onbeforeunload = function (e) {

                    if (!ChangeMonitorFlag.haveChanges) return;

                    var confirmationMessage = "\o/";

                    (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
                    return "(2) You will lose all pending changes if you leave this page";                                //Webkit, Safari, Chrome etc.
                };

            }


        }

    }




    // 11/05/20191 04:53 am - SSN 
    // Need to prevent users from navigating away from Angular based pages with pending changes.
    // https://stackoverflow.com/questions/48182912/how-to-detect-browser-with-angular
    var getBrowserName = function () {

        const agent = window.navigator.userAgent.toLowerCase()

        switch (true) {
            case agent.indexOf('edge') > -1:
                return 'edge';
            case agent.indexOf('opr') > -1 && !!(<any>window).opr:
                return 'opera';
            case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
                return 'chrome';
            case agent.indexOf('trident') > -1:
                return 'ie';
            case agent.indexOf('firefox') > -1:
                return 'firefox';
            case agent.indexOf('safari') > -1:
                return 'safari';
            default:
                return 'other';
        }

    }


    // Needed so we can call from popups.
    var setupMonitor_FullProcess = function () {

        setTimeout(monitorChange_SSN, 2000);
        setupMonitor_v01();

    }


    return {

        setupMonitor_v01: setupMonitor_v01,
        getBrowserName: getBrowserName,
        monitorChange_SSN: monitorChange_SSN,
        setItemChanged_ssn: setItemChanged_ssn,
        setItemToResetChangedFlag_ssn: setItemToResetChangedFlag_ssn,
        setupMonitor_FullProcess: setupMonitor_FullProcess
    }

}();




$(function () {

    ChangeMonitor_Util.setupMonitor_FullProcess();

});


console.log('ChangeMonitor - 20191109-1114-F');


export { ChangeMonitor_Util };


