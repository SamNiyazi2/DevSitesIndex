/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import * as angular from "angular";
var globals_instance = function () {
    var SSN_Globals = /** @class */ (function () {
        function SSN_Globals() {
        }
        // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock
        SSN_Globals.getInstance = function (applicationName, args) {
            if (args === void 0) { args = null; }
            console.log("AAAAAAAAAAAAAAAAAAAAAA checking globals_instance_local");
            factorySetup.doFactorySetup();
            //    console.log('GLOBALS - getInstance - 65');
            console.log("Bottom of getInstance==============================================");
            return SSN_Globals.getInstance_Original(applicationName, args);
        };
        SSN_Globals.getInstance_Original = function (applicationName, args) {
            if (args === void 0) { args = null; }
            console.log("Global - 20190923-0618 - &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            var angularApp = null;
            var selected = (SSN_Globals.ssn_devsite_angular_module).filter(function (r) { return r.name === applicationName; });
            if (selected.length > 0) {
                console.log("Globals - 20190923-0543 - 001 - Found application [" + applicationName + "]  Instance count [" + selected.length + "]");
                angularApp = selected[0];
            }
            else {
                switch (applicationName) {
                    case 'timesheetApp':
                        console.log("Globals - 20190923-0543 - 002 - Creating application [" + applicationName + "]");
                        console.log(args);
                        console.log("Default: ngRoute, ui.bootstrap");
                        angularApp = {
                            name: applicationName,
                            instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap'])
                        };
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
                        };
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
                        };
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
        };
        SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];
        return SSN_Globals;
    }());
    var factorySetup = function () {
        var doFactorySetup = function () {
            console.log("Checking factory ZZZZZZZZZZZZZZZZZZZZz-2");
            try {
                if (angular.module("globalAngularApp")) {
                    console.log("...................Exists");
                    return;
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
                        }
                        else {
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
        };
        return {
            doFactorySetup: doFactorySetup
        };
        //console.log("calling factory setup ********************");
        //doFactorySetup();
        //console.log("calling factory setup *****    DONE    ********************");
    }();
    // 09/20/2019 09:38 am - SSN - Pass in args
    function getInstance(applicationName, args) {
        if (args === void 0) { args = null; }
        return SSN_Globals.getInstance(applicationName, args);
    }
    return {
        getInstance: getInstance
    };
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
        console.log("Call to doTest101 - Before -----------------------------------------------");
        globalAngularAppUtil.doTest101();
        console.log("Call to doTest101 - After -----------------------------------------------");
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
//# sourceMappingURL=globals.js.map