// 10/01/2019 09:49 am - SSN - [20191001-0944] - [004] - Adding Application Insights for JavaScript
// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/
import { environment } from '../environment';
import { AppInsights } from 'applicationinsights-js';
var AppInsights_Util = function () {
    console.log('ApplicationInsights_monitor - 20191001-0951 - 001 - top instance');
    var config = {
        instrumentationKey: environment.appInsights.instrumentationKey
    };
    var haveInstrumentationKey = function () {
        return config.instrumentationKey;
    };
    var doSetup = function () {
        if (!AppInsights.config) {
            // AppInsights.downloadAndSetup(this.config);
            console.log("ApplicationInsights_Monitor - doSetup - config - 20191001-1029-AAA XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            console.log("ApplicationInsights_Monitor - doSetup - config - 20191001-1029-AAA XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            console.log("ApplicationInsights_Monitor - doSetup - config - 20191001-1029-AAA XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
            // 10/11/2019 04:54 pm - SSN - Added check
            if (haveInstrumentationKey()) {
                console.log(config);
                AppInsights.downloadAndSetup(config);
            }
            else {
                console.log('instrumentationKey is not set  -  20191011-1654');
            }
        }
    };
    var doTest = function () {
        /* example: track page view */
        AppInsights.trackPageView("FirstPage-20191001-1015", /* (optional) page name */ null, /* (optional) page url if available */ { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */ { measurement1: 1 }, /* (optional) metric dictionary */ 123 /* page view duration in milliseconds */);
        /* example: track event */
        AppInsights.trackEvent("TestEvent-20191001-1016", { prop1: "prop1", prop2: "prop2" }, { measurement1: 1 });
    };
    var logPageView = function (name, url, properties, measurements, duration) {
        AppInsights.trackPageView(name, url, properties); //, measurements, duration);
    };
    var logEvent = function (name, properties, measurements) {
        AppInsights.trackEvent(name, properties, measurements);
    };
    var logException = function (exception, props, handledAt) {
        AppInsights.trackException(exception, handledAt, props);
    };
    return {
        doSetup: doSetup,
        doTest: doTest,
        logPageView: logPageView,
        logEvent: logEvent,
        logException: logException
    };
}();
console.log('ApplicationInsights_monitor - 20191001-0951 - ZZZ - bottom file OOOOOOOOOOOOOOOOOOOOOOOOOOOOO ');
export { AppInsights_Util };
//# sourceMappingURL=ApplicationInsights_Monitor.js.map