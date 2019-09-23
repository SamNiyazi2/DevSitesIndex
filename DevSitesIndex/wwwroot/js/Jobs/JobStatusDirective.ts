
// 09/18/2019 09:43 am - SSN - [20190918-0943] - [001] - Adding job status option to index


/// <reference path="../../../node_modules/@types/angular/index.d.ts" />


import * as ssn_globals from '../globals';


interface iFixScope extends ng.IScope {
    job_status_click(entry: any): any,
    job_status_checked(entry: any): any
};


var jobStatusDirective_instance = function () {


    var Job_Status_Angular_Module = ssn_globals.globals_instance.getInstance("timesheetApp");


    Job_Status_Angular_Module.controller("utilityController", function ($scope, dataService) {

    });



    Job_Status_Angular_Module.directive('jobStatusOption', function () {

        return {

            restrict: "A",
            templateUrl: "/js/jobs/jobStatus.html",
            scope: {
                entry: "=",
                checkedfunction: "&",
                jobstatusesselected102: "="
            }
            ,
            link: function (scope: iFixScope, el, attrs) {


                scope.job_status_click = function (entry) {

                    this.checkedfunction();

                };


                scope.job_status_checked = function (entry) {

                    var isSelected = this.jobstatusesselected102.indexOf(entry.id);
                    return isSelected > -1;

                }

            }
        };


    });


    return {
        Job_Status_Angular_Module: Job_Status_Angular_Module
    };

}();


export { jobStatusDirective_instance };
