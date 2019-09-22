
// 09/22/2019 12:45 pm - SSN - [20190922-0822] - [008] - Plug in job status filter on job's index - update data source


import * as ssn_globals from "../globals";

var jobStatusDisplayDirective_instance = function () {

    var app = ssn_globals.default.getInstance('timesheetApp');

    var jobStatusDisplay = app.directive('jobStatusDisplay', function () {

        return {

            link: function (scope, el, attrs) {

                scope.$watch(attrs['jobStatus'], function (newValue, oldValue) {


                    var className = '';

                    if (newValue == '1') className = 'job_status_open_1';
                    else if (newValue == '2') className = 'job_status_Pending_2';
                    else if (newValue == '3') className = 'job_status_Completed_3';
                    else className = 'job_status_Cancelled_4';


                    el.removeClass('job_status_open_1 job_status_Pending_2 job_status_Completed_3 job_status_Cancelled_4');
                    el.addClass(className);

                })



            }

        };

    });



    return {
        jobStatusDisplay: jobStatusDisplay
    };


}();

export { jobStatusDisplayDirective_instance };


