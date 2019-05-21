/// <reference path="../../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../../js/DataServices.ts"/>
/// <reference path="../../js/DemoSites.ts"/>
/// <reference path="../../js/demoSites_Index.ts"/>
/// <reference path="timesheetcontroller.ts" />
/// <reference path="timesheetclockoutcontroller.ts" />
/// <reference path="timesheetcontinuecontroller.ts" />
// 05/03/2019 06:33 pm - SSN - [20190503-1539] - [013] - Add link to create timelog
// Convert to TS
// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp
var timesheetApp = angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap']); //,  'ui.bootstrap'    
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js
ssn_devsite_angular_module = timesheetApp;
console.log('TimesheetApp.js');
//timesheetApp .config(function ($routeProvider) {
//    $routeProvider
//        .when('/showCreateEmployeeForm_TEMP', {
//            templateUrl: 'app/EmployeeForm/efTemplate.html',
//            controller: 'timesheetController'
//        })
//        .otherwise({
//            redirectTo: '/home'
//        });
//});
timesheetApp.controller("timesheetController", function ($scope, $uibModal) {
    console.log('TimesheetApp.js - timesheetController');
    $scope.timesheetForm_ClockOut = function (timelogId) {
        //  alert('Clock-out [' + timelogId);
        // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
        // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
        // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
        //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
        $uibModal.open({
            templateUrl: '/js/timesheet/TimeLogEdit.html',
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
        // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
        // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
        //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
        $uibModal.open({
            templateUrl: '/js/timesheet/timesheetTemplate.html',
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
});
//alert('timsheetapp.js loaded');
console.log('TimesheetApp.js  - bottom');
//# sourceMappingURL=TimesheetApp.js.map