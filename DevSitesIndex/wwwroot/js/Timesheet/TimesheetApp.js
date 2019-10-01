// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp
import * as ssn_globals from "../globals.js";
var timesheetApp_instance = function () {
    // 05/03/2019 06:33 pm - SSN - [20190503-1539] - [013] - Add link to create timelog
    // Convert to TS
    var timesheetApp = ssn_globals.globals_instance.getInstance("timesheetApp");
    // 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js
    timesheetApp.controller("timesheetController", ['$scope', '$uibModal', function ($scope, $uibModal) {
            $scope.timesheetForm_ClockOut = function (timelogId) {
                // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
                // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
                // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
                //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
                $uibModal.open({
                    templateUrl: '/js/timesheet/templates/TimeLogEdit.html',
                    controller: 'TimesheetClockOutController',
                    windowClass: 'ssn-mobile-modal',
                    size: 'md',
                    //05/03/2019 05:50 pm - SSN - [20190503-1539] - [011] - Add link to create timelog 
                    // Added backdrop
                    backdrop: false,
                    resolve: {
                        timelogId: function () {
                            return timelogId;
                        }
                    }
                });
            };
            // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
            $scope.timesheetForm_ClockContinue = function (timelogId) {
                // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option
                $uibModal.open({
                    templateUrl: '/js/timesheet/templates//timesheetTemplate.html?v=' + $scope.versionForHTMLRefresh,
                    controller: 'TimesheetContinueController',
                    windowClass: 'ssn-mobile-modal',
                    size: 'md',
                    backdrop: false,
                    resolve: {
                        timelogId: function () {
                            return timelogId;
                        }
                    }
                });
            };
            $scope.showCreateTimesheetForm = function (jobID) {
                console.log("");
                console.log("");
                console.log("TimesheetApp - 20190930-1840 - showCreateTimesheetForm");
                console.log("jobID [" + jobID + "]");
                if (isNaN(jobID)) {
                    jobID = 0;
                }
                // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
                $uibModal.open({
                    templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                    controller: 'TimesheetController',
                    // 05/03/2019 04:29 pm - SSN - [20190503-1539] - [007] - Add link to create timelog - Prevent close (Testing)
                    // windowClass: 'ssn-mobile-modal',
                    // size: 'md',
                    backdrop: false,
                    resolve: {
                        jobId: function () {
                            return jobID;
                        }
                    }
                });
            };
        }]);
    return {
        timesheetApp: timesheetApp
    };
}();
// 09/21/2019 03:58 am - SSN - [20190921-0357] - [002] - Creating multiple entry for Webpack
export { timesheetApp_instance };
//# sourceMappingURL=TimesheetApp.js.map