
// 01/02/2020 12:34 pm - SSN - [20200102-1234] - [001] - Add AngularJS login

import * as ssn_globals from "../globals";
import * as angular from 'angular';
import * as util from '../site_v02';


console.log('login  20200102-1243 - 001');

var loginController_instance = function () {


    console.log('login  20200102-1243 - 002 - Instance top ');

    const doSetup = function (ngApplicationName) {


        var angularApp = ssn_globals.globals_instance.getInstance_v002('LoginController', ngApplicationName);


        // $uibModal $uibModalInstance
        angularApp.controller('loginController', ['$scope', '$uibModal', '$http', '$q', 'dataService', 'changeMonitorService', '$timeout', '$rootScope',


            function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, $timeout, $rootScope) {


                console.log('login  20200102-1243 - 003 - controller function top ');

                const currentUser = dataService.getCurrentUser();

                console.log('%c 20210623-0419', 'color:yellow;font-size:32pt;');
                console.log(currentUser);


                $timeout(() => {
                    changeMonitorService.setupMonitor();
                    util.site_instance.setDefaults();
                }, 600);


                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";


                $scope.feedbackToUserClassNameSet = function () {

                    switch ($scope.feedbackToUserClassNameCase) {
                        case 1:
                            return "rounded margined info_good";
                        case 2:
                            return "rounded margined info_bad";
                        default:
                            return "";
                    }

                }



                $scope.submitForm = function () {

                    $scope.feedbackToUserText = "";
                    $scope.feedbackToUserClassNameCase = "";


                    var promise = null;


                    if ($scope.editableTimeLog.timeLogId === 0) {
                        promise = dataService.insertTimeLog($scope.editableTimeLog);
                    }
                    else {
                        promise = dataService.updateTimeLog($scope.editableTimeLog);
                    }

                    if (promise) {

                        promise.then(
                            function (data) {


                                angular.copy($scope.editableTimeLog, $scope.timeLog);


                                $uibModalInstance.close();
                                toastr.info("Record saved.");




                                function refreshRecord_Sucess(result) {

                                    $rootScope.$broadcast('TimeLog_Index_Refresh', result);

                                }

                                function refreshRecord_Error(result) {

                                    console.error(result);

                                }


                            },
                            function (error) {

                                console.log(error);

                                toastr.error("Failed to save record.");
                                toastr.warning("Error posted to console.");

                                $scope.feedbackToUserClassNameCase = 2;
                                $scope.feedbackToUserText = error.data;

                            });
                    }


                };


                $scope.cancelForm = function () {

                    if (changeMonitorService.getHaveChanges()) {
                        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                    }

                    $uibModalInstance.dismiss();

                };




                $scope.login = function () {

                    console.log('login - function click = 20200102-1334');


                    $uibModalInstance.open({
                        templateUrl: '/js/Users/login.html',
                        controller: 'loginController',
                        backdrop: 'static',
                        keyboard: false,
                        resolve: {
                        }
                    });
                };



                console.log('login  20200102-1243 - 005 - controller function bottom');


            }]);


        return {
            angularApp: angularApp
        };

    }

    return {
        doSetup
    }
}();



export { loginController_instance };

console.log('login  20200102-1243 - 002 - function bottom ');


