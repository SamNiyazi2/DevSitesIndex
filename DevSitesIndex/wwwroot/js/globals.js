console.log("global loading... -20190919-1709");
/// <reference path="../../node_modules/@types/angular/index.d.ts" />
// 09/18/2019 10:33 am - SSN - [20190918-0943] - [006] - Adding job status option to index
// https://stackoverflow.com/questions/55324510/how-to-make-a-singleton-in-typescript-work-across-multiple-modules
console.log("test-20190919-1554-a");
console.log("angular - 20190920-0720-d");
import * as angular from "angular";
//declare var angular: any;
console.log("angular - 20190920-0720-c");
var SSN_Globals = /** @class */ (function () {
    function SSN_Globals() {
    }
    SSN_Globals.getInstance = function (applicationName, args) {
        if (args === void 0) { args = null; }
        var selected = (SSN_Globals.ssn_devsite_angular_module).filter(function (r) { return r.name === applicationName; });
        if (selected.length > 0) {
            console.log('globals:  Found application [' + applicationName + '] 20190920-0958');
            // return SSN_Globals.ssn_devsite_angular_module[index].instance;
            return selected[0].instance;
        }
        else {
            console.log("angular - 20190920-0720-b-101");
            switch (applicationName) {
                case 'timesheetApp':
                    var obj = {
                        name: applicationName,
                        instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap'])
                    };
                    console.log('globals:  Adding application [' + applicationName + '] 20190920-0957');
                    SSN_Globals.ssn_devsite_angular_module.push(obj);
                    break;
                case 'demoSites_Index_Timesheet':
                    var obj = {
                        name: applicationName,
                        instance: angular.module('demoSites_Index_Timesheet', args)
                    };
                    console.log('globals:  Adding application [' + applicationName + '] 20190920-1023');
                    SSN_Globals.ssn_devsite_angular_module.push(obj);
                    break;
                case 'demoSites_Index':
                    var obj = {
                        name: applicationName,
                        instance: angular.module("demoSites_Index", args)
                    };
                    console.log('globals:  Adding application [' + applicationName + '] 20190920-0958');
                    SSN_Globals.ssn_devsite_angular_module.push(obj);
                    break;
                default:
                    console.log("No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
                    break;
            }
            return obj.instance;
        }
    };
    SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];
    return SSN_Globals;
}());
// 09/20/2019 09:38 am - SSN - Pass in args
function getInstance(applicationName, args) {
    if (args === void 0) { args = null; }
    return SSN_Globals.getInstance(applicationName, args);
}
export default { getInstance: getInstance };
//# sourceMappingURL=globals.js.map