// 11/14/2019 02:59 pm - SSN - [20191114-1459] - [001] - ChangeMonitroService
import { ChangeMonitor_Util } from '../Util/ChangeMonitor';
import * as globals from '../globals';
console.log('ChangeMonitorService  - 20191114-1505 - top ');
var changeMonitorService_instance = function () {
    console.log('ChangeMonitorService  - 20191114-1505 - top DOSETUP');
    var doSetup = function (currentApplication) {
        console.log('ChangeMonitorService  - 20191114-1505 - top   IN    DOSETUP');
        var ssn_ChangeMonitorService_module = globals.globals_instance.getInstance(currentApplication);
        ssn_ChangeMonitorService_module.factory("changeMonitorService", ['$http', '$q', function ($http, $q) {
                var _setupMonitor = function () {
                    console.log("Inomplete Testing setupMonitor plugged in");
                    ChangeMonitor_Util.setupMonitor_FullProcess();
                };
                var _getHaveChanges = function () {
                    return ChangeMonitor_Util.haveChanges;
                };
                var _reset = function () {
                    ChangeMonitor_Util.haveChanges = false;
                };
                return {
                    setupMonitor: _setupMonitor,
                    getHaveChanges: _getHaveChanges,
                    reset: _reset
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { changeMonitorService_instance };
console.log('ChangeMonitorService  - 20191114-1505 - bottom ');
//# sourceMappingURL=ChangeMonitorService.js.map