/// <reference path="../../node_modules/@types/angular/index.d.ts" />
import * as angular from "angular";
var SSN_Globals = /** @class */ (function () {
    function SSN_Globals() {
    }
    SSN_Globals.getInstance = function (applicationName, args) {
        if (args === void 0) { args = null; }
        var selected = (SSN_Globals.ssn_devsite_angular_module).filter(function (r) { return r.name === applicationName; });
        if (selected.length > 0) {
            return selected[0].instance;
        }
        else {
            switch (applicationName) {
                case 'timesheetApp':
                    var obj = {
                        name: applicationName,
                        instance: angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap'])
                    };
                    SSN_Globals.ssn_devsite_angular_module.push(obj);
                    break;
                case 'demoSites_Index_Timesheet':
                    var obj = {
                        name: applicationName,
                        instance: angular.module('demoSites_Index_Timesheet', args)
                    };
                    SSN_Globals.ssn_devsite_angular_module.push(obj);
                    break;
                case 'demoSites_Index':
                    var obj = {
                        name: applicationName,
                        instance: angular.module("demoSites_Index", args)
                    };
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