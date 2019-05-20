var timesheetApp = angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap']);
ssn_devsite_angular_module = timesheetApp;
console.log('TimesheetApp.js');
timesheetApp.controller("timesheetController", function ($scope, $uibModal) {
    console.log('TimesheetApp.js - timesheetController');
    $scope.timesheetForm_ClockOut = function (timelogId) {
        $uibModal.open({
            templateUrl: '/js/timesheet/TimeLogEdit.html',
            controller: 'TimesheetClockOutController',
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
    $scope.timesheetForm_ClockContinue = function (timelogId) {
        $uibModal.open({
            templateUrl: '/js/timesheet/timesheetTemplate.html',
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
        if (isNaN(jobID)) {
            jobID = 0;
        }
        $uibModal.open({
            templateUrl: '/js/timesheet/timesheetTemplate.html',
            controller: 'TimesheetController',
            backdrop: false,
            resolve: {
                jobId: function () {
                    return jobID;
                }
            }
        });
    };
});
console.log('TimesheetApp.js  - bottom');
//# sourceMappingURL=TimesheetApp.js.map