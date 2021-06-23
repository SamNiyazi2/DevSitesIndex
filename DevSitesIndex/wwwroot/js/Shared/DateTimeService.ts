
// 06/21/2021 11:32 pm - SSN - [20210620-2108] - [029] - Update TimeLog create option to use DrowndownListDirective

import * as   globals from '../globals';

import * as angular from "angular";




const DateTimeService_Instance = function () {


    var doSetup = function (currentApplication: string) {


        var angularApp = globals.globals_instance.getInstance_v002('DateTimeService', currentApplication);


        angularApp.factory("DateTimeService", [function () {


            const getCurrentUTCTime = function () {


                console.log('%c DateTimeService - etCurrentTime - 20210621-2341', 'color:red;font-size:20pt;')

                let timeNow = new Date();

                timeNow.setMilliseconds(0);

                return timeNow.getTime() - (timeNow.getTimezoneOffset() * 60 * 1000);
            };


            return {
                getCurrentUTCTime
            };


        }]);



    };

    return {
        doSetup
    };


}();

export { DateTimeService_Instance };
