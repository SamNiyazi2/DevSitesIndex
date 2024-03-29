﻿


// 10/01/2019 09:49 am - SSN - [20191001-0944] - [004] - Adding Application Insights for JavaScript


// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/



import { environment } from '../environment';
import { AppInsights } from 'applicationinsights-js';


var AppInsights_Util = function () {

    var self = { callSource: 'NotSet-202106062228' };

    var config = {

        instrumentationKey: environment.appInsights.instrumentationKey

    };

    var haveInstrumentationKey = function () {

        return config.instrumentationKey;
    }


    var doSetup = function (callSource: string) {

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
        console.log(newProps);
        console.log('===================');

        AppInsights.trackPageView(`20220321-1404 ${name}`, url, properties);//, measurements, duration);

    }

    var logEvent = function (name: string, properties?: any, measurements?: any) {

        // 10/1/2019 03:45 am - SSN 

        AppInsights.trackEvent(`20220321-1405 ${name}`, properties, measurements);

    }

    var logException = function (exception: any | any, props?: any, handledAt?: string) {

        // 10/1/2019 03:45 am - SSN 
        // 06/15/2021 08:08 am - SSN - [20210613-0452] - [047] - Adding tags to DevSite
        // AppInsights.trackException(exception, handledAt, props);

        if (exception) {
            props = { ...props, ...exception };
        }

        // 06/22/2021 02:16 am - SSN - Merge objects. Leave out functions.
        props = step0(props);


        AppInsights.trackException(exception, handledAt, props);

    }

    //  Source C:\Sams_Projects\JavaScript\Spread\Spread_106.js

    const step1 = function (z2, a, z) {

        if (typeof (z[a]) != 'function') {

            if (typeof (z[a]) == 'object') {
                z2 = { ...z2, ...(step0(z[a])) };
            }
            else {
                z2[a] = z[a]
            }
        }
        return z2;
    }


    const step0 = function (z) {

        let z2 = {};

        for (const a in z) {
            z2 = step1(z2, a, z);
        }
        return z2;
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

