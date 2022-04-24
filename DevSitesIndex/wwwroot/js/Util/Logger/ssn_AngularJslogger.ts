

// 06/06/2021 06:39 pm - SSN - [20210606-0227] - [011] - Testng for deployment

import * as   globals from '../../globals';

import * as angular from "angular";
import { ILoggerErrorMessage, ILoggerModule, ILoggerMessage } from './ILoggerErrorMessage';


import { AppInsights_Util } from '../../Util/ApplicationInsights_Monitor';


const ssn_AngularJslogger = function () {

    const doSetup = (callSource: string, currentApplication: string) => {

        AppInsights_Util.doSetup(callSource);

        // 04/24/2022 06:05 am - SSN - Adding devSiteTechnologies to DevSite detail page.  Calling getInstance to create without a third parameter.
        // const angularModule = globals.globals_instance.getInstance_v002('ssn_logger', currentApplication);
        const angularModule = globals.globals_instance.getInstance_v002('ssn_logger', currentApplication,[]);

        angularModule.factory("ssn_logger", ['$q', function ($q): ILoggerModule {



            const cl_normal = function (msg: ILoggerMessage, color: string, loud: boolean = false, fontSize: number = null) {

                let style = `color:${color};`;
                if (loud) {
                    style += `font-size:12px;font-weight:bold;`;

                }

                if (fontSize) {
                    style += `font-size:${fontSize}px`;
                }

                console.log("%c-----------------------------", style);
                console.log("%c" + msg.callSource, style);
                console.log("%c" + msg.message, style);
                console.log("%c=============================", style);
            }


            const cl_error = function (errorMsg: ILoggerErrorMessage) {

                const style = 'color:red;font-size:16px;font-weight:bold;';

                console.log("%c-----------------------------", style);
                console.log("%c" + callSource, style);
                console.log("%c" + errorMsg.callSource, style);
                console.log("%c" + errorMsg.message, style);
                console.log(errorMsg.errorObject);
                console.log("%c-----------------------------", style);

                // 06/15/2021 08:38 am - SSN - [20210613-0452] - [048] - Adding tags to DevSite

                let props = { SourceCode1: `ssn-angjs-[${callSource}]`, SourceCode2: errorMsg.callSource, Message: errorMsg.message };

                AppInsights_Util.logException(errorMsg.errorObject, props);

            }



            return {
                cl_normal,
                cl_error
            };


        }]);

    };

    return {
        doSetup: doSetup
    };



}();



export { ssn_AngularJslogger };
