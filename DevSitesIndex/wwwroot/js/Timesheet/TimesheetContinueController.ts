


// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.



import * as ssn_globals from "../globals";
import * as angular from 'angular'
import * as util from '../site';


const ngApplicationName = "timesheetApp";

var timesheetContinueController_instance = function () {

    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetContinueController', ngApplicationName);


    // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

    timesheetApp.controller('TimesheetContinueController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'timelogId', 'changeMonitorService',


        function ($scope, $uibModalInstance, $http, $q, dataService, $timeout, timelogId, changeMonitorService) {

            changeMonitorService.setupMonitor();




            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);



            $scope.pageTitle = "Continue / Line Item - 888-V2";

            // 12/29/2019 11:17 pm - SSN - Adding disableSaveButton 
            $scope.disableSaveButton = false;


            // 09/28/2019 03:59 pm - SSN - [20190928-1256] - [010] - Adding Entity Framework model attribute
            $scope.feedbackToUserText = "";
            $scope.feedbackToUserClassNameCase = "";


            $scope.versionForHTMLRefresh = "17";

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


            function getTimelogSuccess(data) {
  
                let data2 = data;
                util.site_instance.fnConverDate(data2);


                let timeNow = new Date();
                timeNow.setMilliseconds(0);


                $scope.timeLog = data2;
 
                $scope.timeLog.timeLogId = 0;
                $scope.timeLog.startTime = timeNow;
                 
                $scope.timeLog.dateModified = null;
                 
                $scope.timeLog.totalSeconds = null;

                $scope.editableTimeLog = angular.copy($scope.timeLog);
   
            }


            function getTimelogError(data) {
                var temp = data;

            }

            function getTimelogCatch(data) {
                var temp = data;

            }


            $scope.submitForm = function () {

                if ($scope.disableSaveButton) return;

                $scope.disableSaveButton = true;

                console.log('timesheetContinueController - submitForm - (101)');

                var test = $scope.editableTimeLog;

                var promise = null;
                
                if ($scope.editableTimeLog.timeLogId === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }

                if (promise) {

                    // 05/21/2019 11:56 am - SSN - Tested OK.
                    promise.then(
                        function (data) {

                            var test1 = data;

                            $scope.timeLog = angular.copy($scope.editableTimeLog);

                            $uibModalInstance.close(true);

                            toastr.info("Record added.  Reloading page...");

                            // 05/21/2019 12:54 pm - SSN - Reload page.
                            $timeout(() => {
                                location.reload();
                            }, 1000);



                        },
                        function (error) {

                            $scope.disableSaveButton = false;

                            console.log(error);

                            // 09/28/2019 03:57 pm - SSN - [20190928-1256] - [009] - Adding Entity Framework model attribute
                            // $uibModalInstance.close();

                            toastr.error("Failed to add record. See console log.");

                            $scope.feedbackToUserClassNameCase = 2;
                            $scope.feedbackToUserText = error.data;

                        });
                }


            };



            $scope.cancelForm = function () {


                // 11/14/2019 05:09 pm - SSN - [20191114-1459] - [010] - ChangeMonitroService


                // changeMonitorService
                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }
                $uibModalInstance.dismiss(false); //same as cancel???

            };

             

        }]);


    return {
        timesheetApp: timesheetApp
    };

}();



export { timesheetContinueController_instance };
