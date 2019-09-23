
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


// 09/18/2019 10:33 am - SSN - [20190918-0943] - [006] - Adding job status option to index

// https://stackoverflow.com/questions/55324510/how-to-make-a-singleton-in-typescript-work-across-multiple-modules


import IAngularApp from './IAngularApp';

import * as angular from "angular";





var globals_instance = function () {


    class SSN_Globals {


        private static ssn_devsite_angular_module: IAngularApp[] = []; //angular.IModule[];

        // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock
 












        public static getInstance(applicationName: string, args: string[] = null): angular.IModule {




            console.log("AAAAAAAAAAAAAAAAAAAAAA checking globals_instance_local");

            factorySetup.doFactorySetup();






            //    console.log('GLOBALS - getInstance - 65');





            console.log("Bottom of getInstance==============================================");

            return SSN_Globals.getInstance_Original(applicationName, args);

        }











        public static getInstance_Original(applicationName: string, args: string[] = null) {

            console.log("Global - 20190923-0618 - &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");






            var angularApp: IAngularApp = null;

            var selected = (SSN_Globals.ssn_devsite_angular_module).filter((r: IAngularApp) => r.name === applicationName);



            if (selected.length > 0) {

                console.log("Globals - 20190923-0543 - 001 - Found application [" + applicationName + "]  Instance count [" + selected.length + "]");

                angularApp = selected[0];

            } else {

                switch (applicationName) {

                    case 'timesheetApp':

                        console.log("Globals - 20190923-0543 - 002 - Creating application [" + applicationName + "]");
                        console.log(args);
                        console.log("Default: ngRoute, ui.bootstrap");

                        angularApp = {
                            name: applicationName,
                            instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap'])
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        console.log("Globals - 20190923-0543 - 002-ZZZ - Created application [" + applicationName + "]");

                        break;

                    case 'demoSites_Index_Timesheet':

                        console.log("Globals - 20190923-0543 - 003 - Creating application [" + applicationName + "]");
                        console.log(args);
                        console.log("Default: args");

                        angularApp = {
                            name: applicationName,
                            instance: angular.module('demoSites_Index_Timesheet', args)
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        console.log("Globals - 20190923-0543 - 003-ZZZ - Created application [" + applicationName + "]");

                        break;


                    case 'demoSites_Index':

                        console.log("Globals - 20190923-0543 - 003 - Creating application [" + applicationName + "]");
                        console.log(args);
                        console.log("Default: args");

                        angularApp = {
                            name: applicationName,
                            instance: angular.module("demoSites_Index", args)
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        console.log("Globals - 20190923-0543 - 003-ZZZ - Created application [" + applicationName + "]");

                        break;

                    default:

                        console.log("Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");

                        break;

                }



            }

            console.log("Global - 20190923-0618 - RETURNING zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

            console.log(angularApp.instance);

            return angularApp.instance;


        }
    }












    var factorySetup = function () {


        var doFactorySetup = function () {

            console.log("Checking factory ZZZZZZZZZZZZZZZZZZZZz-2");


            try {
                if (angular.module("globalAngularApp")) {

                    console.log("...................Exists");
                    return
                }
            }
            catch (err) { /* failed to require */ }




            var app_globals = angular.module('globalAngularApp', []);
            //////////   console.log("doFactorySetup - AAAAAAAAAAAAAAAAAAAAAAAAAA");


            app_globals.factory("globalAngularAppUtil", function ($http, $q) {


                var doTest101 = function () {

                    console.log('GLOBALS - asyncGreet - 40 - QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqQQQQQQQQ');



                    var deferred = $q.defer();


                    setTimeout(function () {

                        console.log('GLOBALS - asyncGreet - 45');

                        deferred.notify('About to greet ' + name + '.');

                        if (okToGreet(name)) {
                            console.log('GLOBALS - asyncGreet - 50');
                            deferred.resolve('Hello, ' + name + '!');
                        } else {
                            console.log('GLOBALS - asyncGreet - 53');

                            deferred.reject('Greeting ' + name + ' is not allowed.');
                        }
                    }, 1000);


                    return deferred.promise;
                };


                function okToGreet(name) {
                    return false;
                }

                return {

                    doTest101: doTest101

                };

            });
        }


        return {
            doFactorySetup: doFactorySetup
        };

        //console.log("calling factory setup ********************");
        //doFactorySetup();
        //console.log("calling factory setup *****    DONE    ********************");


    }();
















    // 09/20/2019 09:38 am - SSN - Pass in args

    function getInstance(applicationName: string, args: string[] = null): angular.IModule {

        return SSN_Globals.getInstance(applicationName, args);
    }



    return {

        getInstance: getInstance
    }



}();



export { globals_instance };




var test_102 = function () {


    var app_globals;


    try {
        app_globals = angular.module("globalAngularApp");


        console.log("...................Exists");

    }
    catch (err) {

        /* failed to require */
        app_globals = angular.module('globalAngularApp', []);
        console.log("...................CREATING ************************************");
    }




    //console.log("asyncGreet - calling app_globals module- Before");
    //console.log(app_globals);
    //console.log("asyncGreet - calling app_globals module - After ");



    function theControllerFunction(globalAngularAppUtil) {

        console.log("asyncGreet - calling app_globals module- Before  - controller XXXXXXXXXXXXXXXXXXXXXXXXx-1");

        console.log(globalAngularAppUtil);
        console.log("asyncGreet - calling app_globals module- after  - controller XXXXXXXXXXXXXXXXXXXXXXXXx-2");


        console.log("**********************************************888");
        console.log("**********************************************888");
        console.log("**********************************************888");
        console.log("**********************************************888");


        console.log("Call to doTest101 - Before -----------------------------------------------")
        globalAngularAppUtil.doTest101();
        console.log("Call to doTest101 - After -----------------------------------------------")


        function okToGreet(name) {
            return false;
        }


        //function asyncGreet(name) {
        //    // perform some asynchronous operation, resolve or reject the promise when appropriate.
        //    return $q(function (resolve, reject) {
        //        setTimeout(function () {
        //            if (okToGreet(name)) {
        //                resolve('Hello, ' + name + '!');
        //            } else {
        //                reject('Greeting ' + name + ' is not allowed.');
        //            }
        //        }, 1000);
        //    });
        //}

        //var promise = asyncGreet('Robin Hood');
        //promise.then(function (greeting) {
        //    alert('Success: ' + greeting);
        //}, function (reason) {
        //    alert('Failed: ' + reason);
        //});
    }


    var test101 = app_globals.controller('globalsComponent', ['globalAngularAppUtil', theControllerFunction]);

    return {
        app_globals: app_globals,
        test101: test101
    };


}();



export { test_102 };

