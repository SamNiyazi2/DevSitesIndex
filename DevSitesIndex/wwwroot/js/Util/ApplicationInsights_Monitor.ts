


// 10/01/2019 09:49 am - SSN - [20191001-0944] - [004] - Adding Application Insights for JavaScript


// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/






import { environment } from '../environment';

console.log('ApplicationInsights_monitor - 20191001-0951 -top ');
console.log(environment);


import { AppInsights } from 'applicationinsights-js';




var AppInsights_Util = function () {


    console.log('ApplicationInsights_monitor - 20191001-0951 - 001 - top instance');




    var config = {

        instrumentationKey: environment.appInsights.instrumentationKey

    };


    var doSetup = function () {

  
        console.log("ApplicationInsights_Monitor - doSetup - config - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log(AppInsights.config);
        console.log("ApplicationInsights_Monitor - doSetup - config - XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");


        if (!AppInsights.config) {

            // AppInsights.downloadAndSetup(this.config);
            console.log("ApplicationInsights_Monitor - doSetup - config - 20191001-1029-AAA");

            //   AppInsights.downloadAndSetup(config);
            console.log(config);
            console.log(environment);
            AppInsights.downloadAndSetup({ instrumentationKey: "d9f2121b-9475-4fd6-97cb-4df016e33ce3" });

        }




    }


    var doTest = function () {


        console.log("ApplicationInsights_Monitor - doTest - trackPageView - 20191001-1029");

        /* example: track page view */
        AppInsights.trackPageView(
            "FirstPage-20191001-1015", /* (optional) page name */
            null, /* (optional) page url if available */
            { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
            { measurement1: 1 }, /* (optional) metric dictionary */
            123 /* page view duration in milliseconds */
        );


        console.log("ApplicationInsights_Monitor - doTest - trackEvent - 20191001-1029-B");
        /* example: track event */
        AppInsights.trackEvent("TestEvent-20191001-1016", { prop1: "prop1", prop2: "prop2" }, { measurement1: 1 });

    }


    var logPageView = function (name?: string, url?: string, properties?: any, measurements?: any, duration?: number) {

        AppInsights.trackPageView(name, url, properties);//, measurements, duration);

    }

    var logEvent = function (name: string, properties?: any, measurements?: any) {

        AppInsights.trackEvent(name, properties, measurements);

    }

    var logException = function (exception: Error, props?: any, handledAt?: string){

        AppInsights.trackException(exception, handledAt, props);

    }

    console.log('ApplicationInsights_monitor - 20191001-0951 - 099 - bottom instance');



    return {
        doSetup: doSetup,
        doTest: doTest,
        logPageView: logPageView,
        logEvent: logEvent
    }

}();

console.log('ApplicationInsights_monitor - 20191001-0951 - ZZZ - bottom file ');


export { AppInsights_Util };




