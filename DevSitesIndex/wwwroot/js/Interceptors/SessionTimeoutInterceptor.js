import { globals_instance } from "../globals";
// 12/07/2019 03:53 am - SSN - [20191207-0353] - [001] - SessionTimeoutInterceptor
// https://code.angularjs.org/1.2.27/docs/api/ng/service/$http#interceptors
var d = new Date();
console.log("sessionTimeoutInterceptor - top " + d.toLocaleTimeString());
console.log('sessionTimeoutInterceptor - top - 20191207-0410');
var sessionTimeoutInterceptor_instance = function () {
    var doSetup = function (currentApplication) {
        console.log('sessionTimeoutInterceptor - function top - 20191207-0411');
        var angularjs_module = globals_instance.getInstance_v002('SessionTimeoutInterceptor', currentApplication);
        angularjs_module.config([
            '$httpProvider',
            function ($httpProvider) {
                // 08/21/2020 10:53 am - SSN - Adding $location
                var interceptor = [
                    '$q',
                    '$rootScope',
                    '$location',
                    //  'userSession',
                    function ($q, $rootScope, $location) {
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
                            requestError: function (rejection) {
                                console.log('sessionTimeoutIntercepter - requestError - 20200821-1046-001');
                                return $q.reject(rejection);
                            },
                            response: function (result) {
                                console.log('sessionTimeoutIntercepter - response - 20200821-1046-002');
                                return result;
                            },
                            responseError: function (response) {
                                console.log('sessionTimeoutIntercepter - responseError - 20200821-1046-003');
                                return $q.reject(response);
                            }
                        };
                        return service;
                    }
                ];
                $httpProvider.interceptors.push(interceptor);
            }
        ]);
    };
    return {
        doSetup: doSetup
    };
}();
export default sessionTimeoutInterceptor_instance;
//# sourceMappingURL=SessonTimeoutInterceptor.js.map