// 06/06/2021 06:39 pm - SSN - [20210606-0227] - [011] - Testng for deployment
import * as globals from '../../globals';
import { AppInsights_Util } from '../../Util/ApplicationInsights_Monitor';
var ssn_AngularJslogger = function () {
    var doSetup = function (callSource, currentApplication) {
        AppInsights_Util.doSetup(callSource);
        var angularModule = globals.globals_instance.getInstance_v002('ssn_logger', currentApplication);
        angularModule.factory("ssn_logger", ['$q', function ($q) {
                var cl_normal = function (msg, color, loud) {
                    if (loud === void 0) { loud = false; }
                    var style = "color:" + color + ";";
                    if (loud) {
                        style += "font-size:12px;font-weight:bold;";
                    }
                    console.log("%c-----------------------------", style);
                    console.log("%c" + msg.callSource, style);
                    console.log("%c" + msg.message, style);
                    console.log("%c=============================", style);
                };
                var cl_error = function (errorMsg) {
                    var style = 'color:red;font-size:16px;font-weight:bold;';
                    console.log("%c-----------------------------", style);
                    console.log("%c" + callSource, style);
                    console.log("%c" + errorMsg.callSource, style);
                    console.log("%c" + errorMsg.message, style);
                    console.log(errorMsg.errorObject);
                    console.log("%c-----------------------------", style);
                    // 06/15/2021 08:38 am - SSN - [20210613-0452] - [048] - Adding tags to DevSite
                    var props = { SourceCode1: "ssn-angjs-[" + callSource + "]", SourceCode2: errorMsg.callSource, Message: errorMsg.message };
                    AppInsights_Util.logException(errorMsg.errorObject, props);
                };
                return {
                    cl_normal: cl_normal,
                    cl_error: cl_error
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { ssn_AngularJslogger };
//# sourceMappingURL=ssn_AngularJslogger.js.map