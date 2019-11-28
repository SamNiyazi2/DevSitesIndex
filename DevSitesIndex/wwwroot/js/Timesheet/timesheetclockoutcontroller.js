// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 05/19/2019 12:18 pm - SSN - [20190519-1132] - [003] - Address definitely typed errors
// 09/21/2019 11:52 am  - SSN - Upgrading to use Babel/WWebpack
import * as ssn_globals from "../globals";
import * as angular from 'angular';
import * as util from '../site';
var timesheetClockoutController_instance = function () {
    // 05/19/2019 10:06 am - SSN - [20190519-0837] - [006] - Adding timesheet "Continue" option
    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetClockOutController', "timesheetApp");
    // 11/16/2019 02:52 pm - SSN - [20191116-1419] - [003] - Add RowVersion  to Timelog.
    // Inject changeMonitorService
    // 11/20/2019 04:43 am - SSN - [20191120-0429] - [003] - Timelog index clock-out refresh updated row
    // Inject PageUpdaterService
    // 11/25/2019 06:39 pm - SSN - [20191125-1803] - [003] - clock-out is not updating index row
    // Added servingPage
    timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', 'servingPage',
        function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService, servingPage) {
            // 11/16/2019 03:08 pm - SSN - [20191116-1419] - [004] - Add RowVersion  to Timelog.
            changeMonitorService.setupMonitor();
            // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
            // $scope.timeLog = dataService.getTimelog($routeParams.id);
            // $scope.timeLog = dataService.getTimelog(timelogId);
            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);
            // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
            // Add pageTitle
            $scope.pageTitle = "Clock-out";
            // 11/16/2019 02:48 pm - SSN - [20191116-1419] - [002] - Add RowVersion  to Timelog.
            // Copied from TimesheetContinueController
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
            };
            function getTimelogSuccess(data) {
                var timeNow = new Date();
                timeNow.setMilliseconds(0);
                // timeNow.setSeconds(0);
                data.stopTime = timeNow;
                var data2 = data;
                util.site_instance.fnConverDate(data2);
                $scope.timeLog = data2;
                $scope.editableTimeLog = angular.copy($scope.timeLog);
            }
            function getTimelogError(data) {
                console.error('timesheetClockOutController - 20190922-1426');
                console.log(data);
                toastr.warning("Error posted to console. (0307)");
            }
            function getTimelogCatch(data) {
                console.error('timesheetClockOutController - 20190922-1427');
                console.log(data);
                toastr.warning("Error posted to console. (0306)");
            }
            $scope.submitForm = function () {
                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";
                var test = $scope.editableTimeLog;
                var promise = null;
                if ($scope.editableTimeLog.stopTime) {
                    $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
                }
                if ($scope.editableTimeLog.timeLogId === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }
                if (promise) {
                    promise.then(function (data) {
                        var test1 = data;
                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                        $uibModalInstance.close();
                        toastr.info("Clocked-out");
                        console.log('timesheetClockoutController - 20191120-0423 - timelog_index update [', $scope.editableTimeLog.timeLogId, ']');
                        // 11/25/2019 06:38 pm - SSN - [20191125-1803] - [002] - clock-out is not updating index row
                        // Added servingPage
                        PageUpdaterService.timelog_index($scope.editableTimeLog.timeLogId, servingPage);
                    }, function (error) {
                        var test2 = error;
                        console.log(error);
                        toastr.error("Failed to save record.");
                        toastr.warning("Error posted to console.");
                        $scope.feedbackToUserClassNameCase = 2;
                        $scope.feedbackToUserText = error.data;
                        return;
                    });
                }
            };
            $scope.cancelForm = function () {
                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?'))
                        return;
                }
                $uibModalInstance.dismiss(); //same as cancel???
            };
        }]);
    return {
        timesheetApp: timesheetApp
    };
}();
export { timesheetClockoutController_instance };
//# sourceMappingURL=timesheetclockoutcontroller.js.map