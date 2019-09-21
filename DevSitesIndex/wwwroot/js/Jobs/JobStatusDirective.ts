
// 09/18/2019 09:43 am - SSN - [20190918-0943] - [001] - Adding job status option to index



/// <reference path="../../../node_modules/@types/angular/index.d.ts" />


console.log("angular - 20190920-0720-101"); 


// 09/20/2019 10:10 am - SSN - Replace angular.module

// declare var angular: any;
// declare var Job_Status_Angular_Module: any;
// Job_Status_Angular_Module = angular.module("timesheetApp");

console.log("globals - 20190920-1012---103");

import * as ssn_globals from '../globals';
var Job_Status_Angular_Module = ssn_globals.default.getInstance("timesheetApp");




Job_Status_Angular_Module.controller("utilityController", function () {

});



Job_Status_Angular_Module.directive('jobStatusOpton', function () {



    return {

        restrict: "A",
        templateUrl: "/js/jobs/jobStatus.html",
        scope: {
        }
        ,
        link: function (scope, el, attrs) {

        }
    };


});

