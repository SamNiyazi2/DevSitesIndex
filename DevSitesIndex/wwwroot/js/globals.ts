
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


// 09/18/2019 10:33 am - SSN - [20190918-0943] - [006] - Adding job status option to index

// https://stackoverflow.com/questions/55324510/how-to-make-a-singleton-in-typescript-work-across-multiple-modules


import IAngularApp from './IAngularApp';

import * as angular from "angular";





var globals_instance = function () {


    class SSN_Globals {


        private static ssn_devsite_angular_module: IAngularApp[] = []; //angular.IModule[];

        // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock













        public static getInstance_v02(callSource: string, applicationName: string, args: string[] = null): angular.IModule {

            ////  DO NOT REMOVE.
            //// Option to call an injected AngularJS server from here. Tested.  

            //factorySetup.doFactorySetup();

            //try {

            //    console.log("globals: 20190923-1136 - Calling test_102");
            //    test_103.doIt();
            //} catch (e) {
            //    console.error("globals:  20190923-1135 - Failed call to test_102");
            //    console.log(e);
            //}



            return SSN_Globals.getInstance_Original(callSource, applicationName, args);

        }










        // 04/24/2022 05:28 am - SSN - Third arguments must be an array.  It cannot be null;
        //                             We need to allow nulls so we can get the existing instance
        // 04/24/2022 06:56 am - SSN - This routine is used to CREATE an instance.  We don't need to pass in args.
        public static getInstance_Original(callSource: string, applicationName: string, args: string[] ) {
             
            var angularApp: IAngularApp = null;

            var selected = (SSN_Globals.ssn_devsite_angular_module).filter((r: IAngularApp) => r.name === applicationName);

          
            if (selected.length > 0) {

                if (selected.length > 1) {

                    console.log("********************************************");
                    console.log("********************************************");
                    console.log("********************************************");
                    console.log("********************************************");

                    console.log("Globals - 20190923-0543 - 001 - Found application [" + applicationName + "]  Instance count [" + selected.length + "]");

                    console.log("********************************************");
                    console.log("********************************************");
                    console.log("********************************************");
                    console.log("********************************************");
                }

                angularApp = selected[0];

            } else {

                switch (applicationName) {

                    case 'timesheetApp':

 
                        let app_1 = null;

                        try {
                            app_1 = angular.module(applicationName);
                            console.dir(app_1);

                        } catch (e) {
                          // Do nothing.  We just don't want app to breakdown.
                        }

                        if (app_1 == null) {
                            app_1 = angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize']);
                        }
                        //else {
                        //    console.log('%c ' + `REUSING APP ***********  [${applicationName}]`, 'font-size:14pt;color:red;');

                        //}

                        angularApp = {
                            name: applicationName,
                            // 11/10/2019 08:36 am - SSN - Adding 'ngSanitize' for ng-bind-html
                            // 04/24/2022 08:05 pm - SSN - Try to see if app already created by another module
                            // instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])
                            instance: app_1
                        }

                        if (args != null) {

                            console.log('%c ' + '20220424-0722 - Passing args to globals.ts to create timesheetApp.  Not set up to accept args', 'font-size:20pt; color:red');
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        break;

                    case 'demoSites_Index_Timesheet':


                        if (args == null) {

                            console.log('%c ' + `20220424-1820 - NOT Passing args to globals.ts to create [${applicationName}].`, 'font-size:20pt; color:red');
                        }


                        angularApp = {
                            name: applicationName,
                            instance: angular.module('demoSites_Index_Timesheet', args)
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        break;


                    case 'demoSites_Index':
                         
                        if (args == null) {

                            console.log('%c ' + `20220424-1820 - NOT Passing args to globals.ts to create [${applicationName}].`, 'font-size:20pt; color:red');
                        }

                        angularApp = {
                            name: applicationName,
                            instance: angular.module("demoSites_Index", args)
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);
  
                        break;



                    // 04/24/2022 05:23 am - SSN
                    case 'devSite_Detail_module':

                        console.log('%c ' + `20220424-1702-DDD -  GLOBAL getInstance_Original [${callSource}] [${applicationName}]`, 'font-size:12pt; color:GREEN');

                        console.log('%c ' + `20220424-0724 - Registering [${applicationName}]`, 'font-size:12pt; color:yellow');
                        console.log('%c ' + `ARGS:`, 'font-size:12pt; color:yellow');

                        console.log(args);


                        if (args == null) {

                            console.log('%c ' + `20220424-1820 - NOT Passing args to globals.ts to create [${applicationName}].`, 'font-size:20pt; color:red');
                        }



                        angularApp = {
                            name: applicationName,
                            instance: angular.module(applicationName, args)
                        }

                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);

                        break;


                    default:

                        console.log("%c " + "Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts", "color:red;font-size:20pt;");

                        break;

                }



            }

            return angularApp.instance;


        }
    }












    var factorySetup = function () {


        var doFactorySetup = function () {

            var app_globals;

            try {
                app_globals = angular.module('globalAngularApp');

            }
            catch (err) {

                app_globals = angular.module('globalAngularApp', []);

            }


            app_globals.factory("globalAngularAppUtil", ['$http', '$q', function ($http, $q) {


                var doTest101 = function (namePassedIn) {

                    var deferred = $q.defer();


                    setTimeout(function () {

                        deferred.notify('About to greet ' + namePassedIn + '.');


                        if (okToGreet(namePassedIn)) {
                            deferred.resolve('Hello, ' + namePassedIn + '!');
                        } else {
                            
                            deferred.reject('Greeting ' + namePassedIn + ' is not allowed.');
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

            }]);
        }


        return {
            doFactorySetup: doFactorySetup
        };




    }();
















    // 09/20/2019 09:38 am - SSN - Pass in args

    function getInstance_v002(callSource: string, applicationName: string, args: string[] = null): angular.IModule {

        return SSN_Globals.getInstance_v02(callSource, applicationName, args);
    }



    return {

        getInstance_v002: getInstance_v002
    }



}();





var test_103 = function () {


    var doIt = function () {


        angular.injector(['ng', 'globalAngularApp']).invoke(['globalAngularAppUtil', function (globalAngularAppUtil) {

            globalAngularAppUtil.doTest101('Name passed to doTest101').then(doTest101Success, doTest101Error).catch(doTest101Catch);

        }]);


        function doTest101Success(response) {

            console.log('globals - doTest101Success - 20190924-0316 ');
            console.log(response);
        }

        function doTest101Error(response) {
            console.log('globals - doTest101Error - 20190924-0316-B ');
            console.log(response);
        }

        function doTest101Catch(response) {
            console.log('globals - doTest101Catch - 20190924-0316-C');
            console.log(response);

        }


    }



    return {
        doIt: doIt
    };


}();


// 11/21/2019 06:32 am - SSN - [20191121-0503] - [006] - Timelog edit options on project search

enum Timelog_ServingPage { // ServingPage (for IDE Search)

    Timelog = 'Timelog',
    Job_Timelog = 'Job_Timelog',
    Projects_Search = 'Projects_Search'
}

function Timelog_ServingPage_checkvalue(value: Timelog_ServingPage, compareTo: Timelog_ServingPage) {

    return compareTo === value;
}

export { globals_instance, test_103, Timelog_ServingPage, Timelog_ServingPage_checkvalue };


