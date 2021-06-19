// 11/16/2019 04:47 pm - SSN - [20191116-1516] - [003] - Timelog edit (AngularJS client version)
// Copied from TimesheetClockoutController
import * as ssn_globals from "../globals";
import * as util from '../site';
var timesheetEditController_instance = function () {
    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetEditController', "timesheetApp");
    // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view
    timesheetApp.controller('TimesheetEditController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'TimesheetTableRefreshController', 'timelogId', '$timeout', '$rootScope', 'ssn_logger', 'servingPage',
        function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, TimesheetTableRefreshController, timelogId, $timeout, $rootScope, ssn_logger, servingPage) {
            $timeout(function () {
                changeMonitorService.setupMonitor();
                util.site_instance.setDefaults();
            }, 600);
            $scope.disableSaveButton = false;
            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);
            $scope.pageTitle = "Edit [" + servingPage + '] 111-01';
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
            $scope.setStopTime = function () {
                var timeNow = new Date();
                timeNow.setMilliseconds(0);
                $scope.editableTimeLog.stopTime = timeNow;
            };
            function getTimelogSuccess(data) {
                var timeNow = new Date();
                timeNow.setSeconds(0);
                util.site_instance.fnConverDate(data);
                $scope.timeLog = data;
                $scope.editableTimeLog = data;
            }
            function getTimelogError(data) {
                console.error('timesheetEditController - 20191116-1648');
                console.log(data);
                toastr.warning("Error posted to console. (1648)");
            }
            function getTimelogCatch(data) {
                console.error('timesheetEditController - 20191116-1649');
                console.log(data);
                toastr.warning("Error posted to console. (1649)");
            }
            $scope.submitForm = function () {
                $scope.disableSaveButton = true;
                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";
                var test = $scope.editableTimeLog;
                console.log('20210607-1852');
                console.log(test);
                console.log('------------------------------------------');
                console.log($scope.editableTimeLog);
                console.log('------------------------------------------');
                if ($scope.editableTimeLog.stopTime) {
                    $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
                }
                if ($scope.editableTimeLog.timeLogId === 0) {
                    dataService.insertTimeLog($scope.editableTimeLog).then(insertTimeLogSuccess, insertTimeLogError).catch(insertTimeLogCatch);
                }
                else {
                    dataService.updateTimeLog($scope.editableTimeLog).then(insertTimeLogSuccess, insertTimeLogError).catch(insertTimeLogCatch);
                }
                function insertTimeLogSuccess(data) {
                    $uibModalInstance.close();
                    toastr.info("Record saved.");
                    // 06/18/2021 02:03 am - SSN - Replace redunant code
                    TimesheetTableRefreshController.refreshTimesheetTable(servingPage, $scope.editableTimeLog.timeLogId, false);
                }
                function insertTimeLogError(error) {
                    console.log(error);
                    toastr.error("Failed to save record.");
                    toastr.warning("Error posted to console.");
                    $scope.feedbackToUserClassNameCase = 2;
                    $scope.feedbackToUserText = error.data;
                    $scope.disableSaveButton = false;
                    ssn_logger.cl_error({ callSource: "20210618-0909", message: "Failed to save timesheet record ", errorObject: error });
                }
                function insertTimeLogCatch(error) {
                    console.log(error);
                    toastr.error("Failed to save record.");
                    toastr.warning("Error posted to console.");
                    $scope.feedbackToUserClassNameCase = 2;
                    $scope.feedbackToUserText = error.data;
                    $scope.disableSaveButton = false;
                    ssn_logger.cl_error({ callSource: "20210618-0910", message: "Failed to save timesheet record ", errorObject: error });
                }
            };
            $scope.cancelForm = function () {
                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?'))
                        return;
                }
                $uibModalInstance.dismiss();
            };
        }]);
    return {
        timesheetApp: timesheetApp
    };
}();
export { timesheetEditController_instance };
//# sourceMappingURL=TimesheetEditController.js.map