// 11/21/2019 05:50 am - SSN - [20191121-0503] - [003] - Timelog edit options on project search
import { globals_instance } from "../../globals";
var TimelogLinkOptions = function () {
    var doSetup = function (defaultAppName) {
        //var TimelogLinkOptions_angular_module = globals_instance.getInstance(defaultAppName, []);
        var TimelogLinkOptions_angular_module = globals_instance.getInstance_v002('TimelogLinkOptions', defaultAppName);
        TimelogLinkOptions_angular_module.directive('timelogLinkOptions', ['$uibModal', 'changeMonitorService', function ($uibModal, changeMonitorService) {
                return {
                    restrict: "E",
                    templateUrl: "/js/Timesheet/TimelogLinkOtions/TimelogLinkOptions.html",
                    //controllerAs: 'vm101',
                    //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                    controller: ['$scope', function ($scope) {
                            // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                            // Add servingPage
                            $scope.timesheetForm_Edit = function (timelogId, servingPage) {
                                var modalEdit = $uibModal.open({
                                    templateUrl: '/js/timesheet/templates/TimelogClockout.html',
                                    controller: 'TimesheetEditController',
                                    backdrop: 'static',
                                    keyboard: false,
                                    resolve: {
                                        timelogId: function () {
                                            return timelogId;
                                        },
                                        servingPage: function () {
                                            return servingPage;
                                        }
                                    }
                                });
                                modalEdit.result.then(modalEdit_save, modalEdit_cancel);
                                function modalEdit_save(result) {
                                    changeMonitorService.reset();
                                }
                                function modalEdit_cancel(result) {
                                    changeMonitorService.reset();
                                }
                            };
                            // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                            // Add servingPage
                            $scope.timesheetForm_ClockOut = function (timelogId, servingPage) {
                                // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
                                // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
                                // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
                                //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
                                var modalClockout = $uibModal.open({
                                    templateUrl: '/js/timesheet/templates/TimelogClockout.html',
                                    controller: 'TimesheetClockOutController',
                                    windowClass: 'ssn-mobile-modal',
                                    backdrop: 'static',
                                    keyboard: false,
                                    resolve: {
                                        timelogId: function () {
                                            return timelogId;
                                        },
                                        servingPage: function () {
                                            return servingPage;
                                        }
                                    }
                                });
                                // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService
                                modalClockout.result.then(modalClockout_save, modalClockout_cancel);
                                function modalClockout_save(result) {
                                    changeMonitorService.reset();
                                }
                                function modalClockout_cancel(result) {
                                    changeMonitorService.reset();
                                }
                            };
                            // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
                            // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                            // Add servingPage
                            $scope.timesheetForm_ClockContinue = function (timelogId, servingPage) {
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
                                        },
                                        servingPage: function () {
                                            return servingPage;
                                        }
                                    }
                                });
                                // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService
                                TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);
                                function TimesheetContinueController_modal_save(result) {
                                    changeMonitorService.reset();
                                }
                                function TimesheetContinueController_modal_cancel(result) {
                                    changeMonitorService.reset();
                                }
                            };
                            // 11/27/2019 08:45 am - SSN - Copied from JobIndexController.ts 
                            // 09/28/2019 04:06 pm - SSN - [20190928-1256] - [011] - Adding Entity Framework model attribute
                            // Duplicate - Wrong way to go!
                            $scope.showCreateTimesheetForm = function (jobID) {
                                $uibModal.open({
                                    templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                                    controller: 'TimesheetController',
                                    backdrop: false,
                                    resolve: {
                                        jobId: function () {
                                            return jobID;
                                        }
                                    }
                                });
                            };
                        }],
                    scope: {
                        timelogId: "@",
                        totalSeconds: "@",
                        servingPage: '@',
                        jobId: '@'
                    },
                    link: function (scope, el, attrs) {
                        var totalSeconds_fromAttr = attrs['totalSeconds'];
                        var haveOpenRecord = totalSeconds_fromAttr === undefined;
                        scope.showClockoutOption = haveOpenRecord;
                        scope.continue_or_lineItem_caption = !haveOpenRecord ? "Continue" : "Line item";
                    }
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { TimelogLinkOptions };
//# sourceMappingURL=TimelogLinkOptions.js.map