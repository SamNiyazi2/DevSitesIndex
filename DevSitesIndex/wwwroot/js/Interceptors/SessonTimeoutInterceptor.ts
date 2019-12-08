import { globals_instance } from "../globals";


// 12/07/2019 03:53 am - SSN - [20191207-0353] - [001] - SessionTimeoutInterceptor


// https://code.angularjs.org/1.2.27/docs/api/ng/service/$http#interceptors


console.log('sessionTimeoutInterceptor - top - 20191207-0410');

let sessionTimeoutInterceptor_instance = function () {


    var doSetup = function (currentApplication: string) {


        console.log('sessionTimeoutInterceptor - function top - 20191207-0411');


        var angularjs_module = globals_instance.getInstance_v002('SessionTimeoutInterceptor', currentApplication);

        angularjs_module.config([
            '$httpProvider',
            function ($httpProvider) {

                var interceptor = [
                    '$q',
                    '$rootScope',
                    //                'userSession',
                    function ($q, $rootScope) { // , userSession


                        console.log('sessionTimeoutInterceptor - Main function - 20191207-0412-MF');

                        var service = {

                            // run this function before making requests
                            'request': function (config) {

                                console.log('sessionTimeoutInterceptor - Main function - SERVICE - 20191207-0412-SERVICE');
                                console.log('config next:');
                                console.log(config);

                                ////////////if (config.method === 'GET' || userSession.isAuth()) {
                                ////////////    // the request looks good, so return the config
                                 return config;
                                ////////////}

                                ////////////// bad request, so reject
                                ////////////return $q.reject(config);

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



export default sessionTimeoutInterceptor_instance;

