
// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp

var timesheetApp = angular.module('timesheetApp', ['ngRoute' , 'ui.bootstrap']);  //,  'ui.bootstrap'    

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
 
        alert('Clock-out [' + timelogId);
    };


    $scope.showCreateTimesheetForm = function (jobID) {

        if ( isNaN(jobID))
        {
            jobID = 0;
        }

        $uibModal.open({
            templateUrl: 'js/timesheet/timesheetTemplate.html' ,
            controller: 'TimesheetController',
            windowClass: 'ssn-mobile-modal',
            size: 'md',
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
