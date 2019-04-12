
// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp

var timesheetApp = angular.module('timesheetApp', ['ngRoute',  'ui.bootstrap']);

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



timesheetApp.controller("timesheetController", function ($scope, $modal) {

    console.log('TimesheetApp.js - timesheetController');

 
    $scope.showCreateEmployeeForm = function () {
          
        $modal.open({
            templateUrl: 'js/timesheet/timesheetTemplate.html',
            controller: 'TimesheetController',
            windowClass: 'ssn-mobile-modal'
        }); 

    };
});

//alert('timsheetapp.js loaded');
console.log('TimesheetApp.js  - bottom');
