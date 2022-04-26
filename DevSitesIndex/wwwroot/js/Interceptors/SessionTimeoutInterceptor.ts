import { globals_instance } from "../globals";


// 12/07/2019 03:53 am - SSN - [20191207-0353] - [001] - SessionTimeoutInterceptor
// 04/25/2022 12:54 pm - SSN - Using to get rid of "unsafe" links - Was was already here.


// https://code.angularjs.org/1.2.27/docs/api/ng/service/$http#interceptors


const d = new Date();

console.log(`sessionTimeoutInterceptor - top ${d.toLocaleTimeString()}`);


console.log('sessionTimeoutInterceptor - top - 20191207-0410');

let sessionTimeoutInterceptor_instance = function () {


    var doSetup = function (currentApplication: string) {


        console.log('%c sessionTimeoutInterceptor - function top - 20191207-0411', 'color:blue;');


        var angularjs_module = globals_instance.getInstance_v002('SessionTimeoutInterceptor', currentApplication);

        // Todo-SSN - 06/23/2021 04:35 am - SSN - [20210623-0158] - [009] - Limit user access to their timesheet records
        // Adding $compilerProvider aHrefSanitizationWhitelist imgSrcSanitizationWhitelist

        // 06/18/2021 08:41 am - SSN - Adding ssn_logger (Failed)

        angularjs_module.config(['$httpProvider','$compileProvider',

            function ($httpProvider, $compileProvider) {
 
                //https://stackoverflow.com/questions/15637133/unsafe-link-in-angular

                // $compileProvider.urlSanitizationWhiteList(/^\s*(https?|mailto):/);
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|local|data|chrome-extensions|ssnalert):/);
                $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data|chrome-extensions|ssnalert):/);



                // 08/21/2020 10:53 am - SSN - Adding $location

                var interceptor = [
                    '$q',
                    '$rootScope',
                    '$location', 
                    //  'userSession',
                    function ($q, $rootScope, $location) { // , userSession


                        console.log('sessionTimeoutInterceptor - Main function - 20191207-0412-MF');

                        var service = {

                            // run this function before making requests
                            request: function (config) {

                                ////////console.log('sessionTimeoutInterceptor - Main function - SERVICE - 20191207-0412-SERVICE');
                                ////////console.log('config next:');
                                ////////console.log(config);

                                ////////////if (config.method === 'GET' || userSession.isAuth()) {
                                ////////////    // the request looks good, so return the config
                                return config;
                                ////////////}

                                ////////////// bad request, so reject
                                ////////////return $q.reject(config);

                            },
                            requestError: function (error) {

                                console.error('%c sessionTimeoutIntercepter - requestError - 20200821-1046-001', 'color:red;font-size:14pt');
                                console.error(error);
                                return $q.reject(error);

                            },
                            response: function (result) {
                                /////////////////////////////// console.log('sessionTimeoutIntercepter - response - 20200821-1046-002');
                                return result;
                            },
                            responseError: function (error) {

                                console.error('%c sessionTimeoutIntercepter - responseError - 20200821-1046-003', 'color:red;font-size:14pt');
                                console.error(error);
                                  
                                return $q.reject(error);
                            }

                        };

                        return service;

                    }
                ];

                $httpProvider.interceptors.push(interceptor);

            }
        ])


    }

    return {
        doSetup: doSetup
    };

}();


// 04/25/2022 12:57 pm - SSN - Like the rest
// export default sessionTimeoutInterceptor_instance;
export { sessionTimeoutInterceptor_instance };

