﻿


// 10/01/2019 09:49 am - SSN - [20191001-0944] - [004] - Adding Application Insights for JavaScript


// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/



import { environment } from '../environment';
import { AppInsights } from 'applicationinsights-js';
 

var AppInsights_Util = function () {

    var self = {callSource:'NotSet-202106062228'};

    var config = {

        instrumentationKey: environment.appInsights.instrumentationKey

    };

    var haveInstrumentationKey = function () {

        return config.instrumentationKey;
    }


    var doSetup = function (callSource:string) {

        self.callSource = callSource;

        if (!AppInsights.config) {

            // AppInsights.downloadAndSetup(this.config);

            // 10/11/2019 04:54 pm - SSN - Added check
            if (haveInstrumentationKey()) {
                 
                AppInsights.downloadAndSetup(config);
            }  
        }


    }


    var doTest = function () {

        // 10/1/2019 03:45 am - SSN 
       
        /* example: track page view */
        AppInsights.trackPageView(
            "FirstPage-20191001-1015", /* (optional) page name */
            null, /* (optional) page url if available */
            { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
            { measurement1: 1 }, /* (optional) metric dictionary */
            123 /* page view duration in milliseconds */
        );

        /* example: track event */
        AppInsights.trackEvent("TestEvent-20191001-1016", { prop1: "prop1", prop2: "prop2" }, { measurement1: 1 });

    }


    var logPageView = function (name?: string, url?: string, properties?: any, measurements?: any, duration?: number) {

        // 10/1/2019 03:45 am - SSN 
        console.log('ApplicationInsights  - logPageView - 20210606-2223', 'color:yellow');
        console.log(properties);
        console.log('---------------------');

        const newProps = { callSource_aim: self.callSource, ...properties };
        console.log(newProps );
        console.log('===================');

        AppInsights.trackPageView(name, url, properties);//, measurements, duration);

    }

    var logEvent = function (name: string, properties?: any, measurements?: any) {

        // 10/1/2019 03:45 am - SSN 
 
        AppInsights.trackEvent(name, properties, measurements);

    }

    var logException = function (exception: Error, props?: any, handledAt?: string) {

        // 10/1/2019 03:45 am - SSN 

        AppInsights.trackException(exception, handledAt, props);

    }


    return {
        doSetup: doSetup,
        doTest: doTest,
        logPageView: logPageView,
        logEvent: logEvent,
        logException: logException
    }

}();

export { AppInsights_Util };

