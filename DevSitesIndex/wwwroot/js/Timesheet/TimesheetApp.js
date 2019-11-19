// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp
import * as ssn_globals from "../globals";
var timesheetApp_instance = function () {
    // 05/03/2019 06:33 pm - SSN - [20190503-1539] - [013] - Add link to create timelog
    // Convert to TS
    var timesheetApp = ssn_globals.globals_instance.getInstance("timesheetApp");
    // 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js
    // 11/14/2019 03:35 pm - SSN - [20191114-1459] - [005] - ChangeMonitroService
    // Inject changeMonitorService
    timesheetApp.controller("timesheetController", ['$scope', '$uibModal', 'changeMonitorService', '$compile', function ($scope, $uibModal, changeMonitorService, $compile) {
            // 11/19/2019 06:43 am - SSN - [20191119-0048] Added to re-bind ng-click
            $scope.$on('TimeLog_Index_Refresh', function (event, item) {
                $compile($("#model_" + item + "_a").contents())($scope);
            });
            $scope.timesheetForm_ClockOut = function (timelogId) {
                // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
                // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
                // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
                //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
                console.log('TimesheetApp - 20191114-1435 - modalClockout  - begin ');
                var modalClockout = $uibModal.open({
                    templateUrl: '/js/timesheet/templates/TimelogClockout.html',
                    controller: 'TimesheetClockOutController',
                    windowClass: 'ssn-mobile-modal',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        timelogId: function () {
                            return timelogId;
                        }
                    }
                });
                // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService
                modalClockout.result.then(modalClockout_save, modalClockout_cancel);
                function modalClockout_save(result) {
                    console.log('TimesheetApp - 20191114-1435-2 - modalClockout_1 ');
                    console.log(result);
                    changeMonitorService.reset();
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                }
                function modalClockout_cancel(result) {
                    console.log('TimesheetApp - 20191114-1435-3 - modalClockout_2 ');
                    console.log(result);
                    changeMonitorService.reset();
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                }
                console.log('TimesheetApp - 20191114-1435 - modalClockout  - end ');
            };
            // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
            $scope.timesheetForm_ClockContinue = function (timelogId) {
                // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option
                // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 
                var TimesheetContinueController_modal = $uibModal.open({
                    animation: 'slide-in-up',
                    templateUrl: '/js/timesheet/templates//timesheetTemplate.html?v=' + $scope.versionForHTMLRefresh,
                    controller: 'TimesheetContinueController',
                    windowClass: 'ssn-mobile-modal',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        timelogId: function () {
                            return timelogId;
                        }
                    }
                });
                modalClosingHook($scope);
                // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService
                TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);
                function TimesheetContinueController_modal_save(result) {
                    console.log('TimesheetContinueController_modal_save - 20191114-1448');
                    console.log("result", result);
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                    changeMonitorService.reset();
                }
                function TimesheetContinueController_modal_cancel(result) {
                    console.log('TimesheetContinueController_modal_cancel - 20191114-1449');
                    console.log("result", result);
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                    changeMonitorService.reset();
                }
            };
            // 11/14/2019 04:41 pm - SSN - [20191114-1459] - [008] - ChangeMonitroService
            // Testing - Not working.
            function modalClosingHook($scope) {
                console.log('modal.closing - begin');
                $scope.$on('modal.closing', function (event, reason, closed) {
                    console.log('modal.closing: ' + (closed ? 'close' : 'dismiss') + '(' + reason + ')');
                    var message = "You are about to leave the edit view. Uncaught reason. Are you sure?";
                    switch (reason) {
                        // clicked outside
                        case "backdrop click":
                            message = "Any changes will be lost, are you sure?";
                            break;
                        // cancel button
                        case "cancel":
                            message = "Any changes will be lost, are you sure?";
                            break;
                        // escape key
                        case "escape key press":
                            message = "Any changes will be lost, are you sure?";
                            break;
                    }
                    if (!confirm(message)) {
                        event.preventDefault();
                    }
                });
                console.log('model.closing - end');
            }
            $scope.showCreateTimesheetForm = function (jobID) {
                if (isNaN(jobID)) {
                    jobID = 0;
                }
                // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
                $uibModal.open({
                    templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                    controller: 'TimesheetController',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        jobId: function () {
                            return jobID;
                        }
                    }
                });
            };
            // 11/16/2019 04:35 pm - SSN - [20191116-1516] - [002] - Timelog edit (AngularJS client version)
            $scope.timesheetForm_Edit = function (timelogId) {
                console.log('TimesheetApp - 20191116-1637 - timesheetForm_Edit ');
                var modalEdit = $uibModal.open({
                    templateUrl: '/js/timesheet/templates/TimelogClockout.html',
                    controller: 'TimesheetEditController',
                    backdrop: 'static',
                    keyboard: false,
                    resolve: {
                        timelogId: function () {
                            return timelogId;
                        }
                    }
                });
                modalEdit.result.then(modalEdit_save, modalEdit_cancel);
                function modalEdit_save(result) {
                    console.log('TimesheetApp - 20191116-1640 - modalEdit_save');
                    console.log(result);
                    changeMonitorService.reset();
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                }
                function modalEdit_cancel(result) {
                    console.log('TimesheetApp - 20191116-1641 - modalEdit_cancel');
                    console.log(result);
                    changeMonitorService.reset();
                    console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
                }
                console.log('TimesheetApp - 20191116-1643 - timesheetForm_Edit - end ');
            };
        }]);
    return {
        timesheetApp: timesheetApp
    };
}();
// 09/21/2019 03:58 am - SSN - [20190921-0357] - [002] - Creating multiple entry for Webpack
export { timesheetApp_instance };
//# sourceMappingURL=TimesheetApp.js.map