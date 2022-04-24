
// 06/21/2021 11:32 pm - SSN - [20210620-2108] - [029] - Update TimeLog create option to use DrowndownListDirective

import * as   globals from '../globals';

import * as angular from "angular";




const DateTimeService_Instance = function () {


    var doSetup = function (currentApplication: string) {


        var angularApp = globals.globals_instance.getInstance_v002('DateTimeService', currentApplication);


        angularApp.factory("DateTimeService", [function () {


            const isDateObject = function (value) {

                if (!value) return;

                const _protoTypeToString = Object.prototype.toString.call(value);
                  
                return (value && _protoTypeToString == "[object Date]");

            }



            const getCurrentUTCTime = function () {


                console.log('%c DateTimeService - etCurrentTime - 20210621-2341', 'color:red;font-size:14pt;')

                let timeNow = new Date();

                timeNow.setMilliseconds(0);

                return timeNow.getTime() - (timeNow.getTimezoneOffset() * 60 * 1000);
            };

 

            const getDateAs_YYYY_MM_DD = function (date: Date) {

                console.log('%c getDateAs_YYYY_MM_DD ', 'color:yellow;font-size:14pt')
                console.log(date);
                console.log(typeof date);

                if (typeof (date) == 'string') {
                    date = new Date(date);
                }
                
                return (date.getFullYear()) + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0');

            }


            const getDateAs_MM_DD_YYYY = function (date: Date) {

                if (typeof (date) == "string") {
                    date = new Date(date);
                }

                console.log('$c getDateAs_MM_DD_YYYY ', 'color:yellow;font-size:24pt')
                console.log('$c getDateAs_MM_DD_YYYY ', 'color:yellow;font-size:24pt')
                console.log('$c getDateAs_MM_DD_YYYY ', 'color:yellow;font-size:24pt')
                console.log('$c getDateAs_MM_DD_YYYY ', 'color:yellow;font-size:24pt')



                return (date.getMonth() + 1).toString().padStart(2, '0') + '/' + date.getDate().toString().padStart(2, '0')  + "/" + (date.getFullYear());


            }


            return {
                getCurrentUTCTime,
                getDateAs_YYYY_MM_DD,
                getDateAs_MM_DD_YYYY,
                isDateObject
            };


        }]);



    };

    return {
        doSetup
    };


}();

export { DateTimeService_Instance };
