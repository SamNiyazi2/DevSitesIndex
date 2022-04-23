


// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.



import * as ssn_globals from "../globals";
import * as angular from 'angular';

// 04/22/2022 08:52 am - SSN - [20220422-0850] - [002] - Find source of duplicate call to site.ts
import * as util from '../site_v02';


const ngApplicationName = "timesheetApp";

var timesheetContinueController_instance = function () {

    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetContinueController', ngApplicationName);


    // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

    timesheetApp.controller('TimesheetContinueController', ['$rootScope', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'TimesheetTableRefreshController', 'timelogId', 'changeMonitorService',


        function ($rootScope, $scope, $uibModalInstance, $http, $q, dataService, $timeout, TimesheetTableRefreshController, timelogId, changeMonitorService) {

            changeMonitorService.setupMonitor();

            $scope.timelogId_OriginalRecord = timelogId;


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


                util.site_instance.fnConverDate(data);

                let timeNow = new Date();
                timeNow.setMilliseconds(0);

                data.timeLogId = 0;
                data.startTime = timeNow;

                data.dateModified = null;

                data.totalSeconds = null;

                $scope.editableTimeLog = data;

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

                let newRecord = true;

                if ($scope.editableTimeLog.timeLogId === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                    newRecord = false;

                }

                if (promise) {

                    // 05/21/2019 11:56 am - SSN - Tested OK.
                    promise.then(
                        function (data) {


                            $uibModalInstance.close(true);

                            toastr.info("Record added.  Reloading page...");




                            // 06/7/2021 11:48 pm - SSN - Replacing location.reload with TimeLog_Index_Insert

                            console.log('timesheetContinueController.ts - replacing location.reload with TimeLog_Index_Insert', 'color:red;font-size:16pt');
                            console.log(data.timeLogId);
                            console.log(data);

                            // 05/21/2019 12:54 pm - SSN - Reload page.
                            //$timeout(() => {
                            //    location.reload();
                            //}, 1000);


                            const servingPage = ssn_globals.Timelog_ServingPage.Timelog;


                            // Update original record we compied from (timeLogId passed in)
                            TimesheetTableRefreshController.refreshTimesheetTable(servingPage, $scope.timelogId_OriginalRecord , false);

// Add new record
                            TimesheetTableRefreshController.refreshTimesheetTable(servingPage, data.timeLogId, newRecord);


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
