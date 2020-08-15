// 11/14/2019 02:59 pm - SSN - [20191114-1459] - [001] - ChangeMonitroService
import { ChangeMonitorFlag } from './ChangeMonitorFlag';
import { ChangeMonitor_Util } from './ChangeMonitor';
import * as globals from '../../globals';
var changeMonitorService_instance = function () {
    var doSetup = function (currentApplication) {
        var ssn_ChangeMonitorService_module = globals.globals_instance.getInstance_v002('ChangeMonitorService', currentApplication);
        ssn_ChangeMonitorService_module.factory("changeMonitorService", ['$http', '$q', function ($http, $q) {
                var _setupMonitor = function () {
                    ChangeMonitor_Util.setupMonitor_FullProcess();
                };
                var _getHaveChanges = function () {
                    console.log('ChangeMonitorService.ts - _getHaveChanged - 20200815-0756-001');
                    return ChangeMonitorFlag.haveChanges;
                };
                var _reset = function () {
                    console.log('ChangeMonitorService.ts - _reset  - 20200815-0758-003');
                    ChangeMonitorFlag.haveChanges = false;
                };
                var _doSetHaveChange = function (setting) {
                    console.log('ChangeMonitorService.ts - _doSetHaveChange  - 20200815-0756-002');
                    ChangeMonitorFlag.haveChanges = setting;
                };
                return {
                    setupMonitor: _setupMonitor,
                    getHaveChanges: _getHaveChanges,
                    reset: _reset,
                    doSetHaveChange: _doSetHaveChange
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { changeMonitorService_instance };
//# sourceMappingURL=ChangeMonitorService.js.map