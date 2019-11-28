/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import * as angular from "angular";
var globals_instance = function () {
    var SSN_Globals = /** @class */ (function () {
        function SSN_Globals() {
        }
        // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock
        SSN_Globals.getInstance_v02 = function (callSource, applicationName, args) {
            ////  DO NOT REMOVE.
            //// Option to call an injected AngularJS server from here. Tested.  
            if (args === void 0) { args = null; }
            //factorySetup.doFactorySetup();
            //try {
            //    console.log("globals: 20190923-1136 - Calling test_102");
            //    test_103.doIt();
            //} catch (e) {
            //    console.error("globals:  20190923-1135 - Failed call to test_102");
            //    console.log(e);
            //}
            return SSN_Globals.getInstance_Original(callSource, applicationName, args);
        };
        SSN_Globals.getInstance_Original = function (callSource, applicationName, args) {
            if (args === void 0) { args = null; }
            var angularApp = null;
            var selected = (SSN_Globals.ssn_devsite_angular_module).filter(function (r) { return r.name === applicationName; });
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
            }
            else {
                switch (applicationName) {
                    case 'timesheetApp':
                        angularApp = {
                            name: applicationName,
                            // 11/10/2019 08:36 am - SSN - Adding 'ngSanitize' for ng-bind-html
                            instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])
                        };
                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);
                        break;
                    case 'demoSites_Index_Timesheet':
                        angularApp = {
                            name: applicationName,
                            instance: angular.module('demoSites_Index_Timesheet', args)
                        };
                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);
                        break;
                    case 'demoSites_Index':
                        angularApp = {
                            name: applicationName,
                            instance: angular.module("demoSites_Index", args)
                        };
                        SSN_Globals.ssn_devsite_angular_module.push(angularApp);
                        break;
                    default:
                        console.log("Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
                        break;
                }
            }
            return angularApp.instance;
        };
        SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];
        return SSN_Globals;
    }());
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
                            console.log('GLOBALS - asyncGreet - 45');
                            deferred.notify('About to greet ' + namePassedIn + '.');
                            if (okToGreet(namePassedIn)) {
                                console.log('GLOBALS - asyncGreet - 50');
                                deferred.resolve('Hello, ' + namePassedIn + '!');
                            }
                            else {
                                console.log('GLOBALS - asyncGreet - 53');
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
        };
        return {
            doFactorySetup: doFactorySetup
        };
    }();
    // 09/20/2019 09:38 am - SSN - Pass in args
    function getInstance_v002(callSource, applicationName, args) {
        if (args === void 0) { args = null; }
        return SSN_Globals.getInstance_v02(callSource, applicationName, args);
    }
    return {
        getInstance_v002: getInstance_v002
    };
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
    };
    return {
        doIt: doIt
    };
}();
// 11/21/2019 06:32 am - SSN - [20191121-0503] - [006] - Timelog edit options on project search
var Timelog_ServingPage;
(function (Timelog_ServingPage) {
    Timelog_ServingPage["Timelog"] = "Timelog";
    Timelog_ServingPage["Job_Timelog"] = "Job_Timelog";
    Timelog_ServingPage["Projects_Search"] = "Projects_Search";
})(Timelog_ServingPage || (Timelog_ServingPage = {}));
function Timelog_ServingPage_checkvalue(value, compareTo) {
    return compareTo === value;
}
export { globals_instance, test_103, Timelog_ServingPage, Timelog_ServingPage_checkvalue };
//# sourceMappingURL=globals.js.map