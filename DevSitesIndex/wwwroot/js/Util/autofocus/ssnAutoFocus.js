// 06/08/2021 02:44 pm - SSN - [20210606-0227] - [030] - Testng for deployment - Line item
import * as ssn_globals from "../../globals";
var ssn_auto_focus = function () {
    var doSetup = function (callSource, applicationName) {
        var Jobs_Angular_Module = ssn_globals.globals_instance.getInstance_v002('ssn_set_focus', applicationName);
        Jobs_Angular_Module.directive('ssnAutoFocus', ['ssn_logger', function (ssn_logger) {
                ssn_logger.cl_normal({ callSource: '2021008-1509', message: 'ssnAutoFocus in directive' }, 'yellow');
                return {
                    restrict: 'A',
                    // link: function (scope: IScope_Custom, elem, attrs) {
                    link: function (scope, elem, attrs) {
                        ssn_logger.cl_normal({ callSource: '2021008-1526-d', message: 'ssnAutoFocus firing' }, 'cyan');
                        //if (scope.objectList == null) {
                        //}
                        elem.focus();
                    }
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { ssn_auto_focus };
//# sourceMappingURL=ssnAutoFocus.js.map