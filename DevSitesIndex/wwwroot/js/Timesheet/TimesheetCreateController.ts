

/// <reference path="../../../node_modules/@types/toastr/index.d.ts" />

// 06/09/2021 04:43 pm - SSN - [20210608-2247] - [009] - Test line item -  Prep for deployment


import * as globals from "../globals";
import * as angular from "angular";
import * as tostr from "toastr";
import { ILoggerModule } from "../Util/Logger/ILoggerErrorMessage";

import * as util from '../site';
import { ITimelogJS } from "../Interfaces/ITimelog";




var timesheetCreateController_instance = function () {

    var timesheetApp = globals.globals_instance.getInstance_v002('TimesheetCreateController', "timesheetApp");


    timesheetApp.controller('TimesheetCreateController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId',


        function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, ssn_logger: ILoggerModule, jobId) {

            changeMonitorService.setupMonitor();

            $scope.pageTitle = "Create - 1643";

            $scope.disableSaveButton = false;


            $scope.feedbackToUserText = "";
            $scope.feedbackToUserClassNameCase = "";

            $scope.feedbackToUserClassNameSet = function () {

                switch ($scope.feedbackToUserClassNameCase) {
                    case 1:
                        return "rounded margined info_good";
                    case 2:
                        return "rounded margined info_bad";
                    default:
                        return "";
                }

            }



            dataService.getJob(jobId).then(getJobSuccess, getJobError).catch(getJobCatch);


            function getJobSuccess(data) {

            
                console.log(data);

                const timeLog: ITimelogJS = {
                    jobId: data.jobID,
                    job: {
                        jobTitle: data.jobTitle,
                        project: {
                            projectTitle: data.project.projectTitle
                        }
                    }
                };

              
                //                util.site_instance.fnConverDate(data);

                $scope.editableTimeLog = timeLog;


                let timeNow = new Date();
                timeNow.setMilliseconds(0);

                $scope.editableTimeLog.startTime = timeNow;



            }


            function getJobError(err) {

                console.error('TimesheetCreateController - gotJobError -  20210609-1650-B ');
                console.log(err);

                ssn_logger.cl_error({ callSource: '20210609-1650-a-1', message: 'Failed to get job record.', errorObject: err });
            }


            function getJobCatch(err) {

                console.error('TimesheetCreateController - getJobCatch -  20210609-1651-C ');
                console.log(err);

                ssn_logger.cl_error({ callSource: '20210609-1651-a-2', message: 'Failed to get job record.', errorObject: err });

            }






            $scope.submitForm = function () {


                if ($scope.disableSaveButton) return;

                $scope.disableSaveButton = true;


                var promise = null;


                if ($scope.editableTimeLog.id === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }

                if (promise) {

                    promise.then(
                        function (data) {

                            $uibModalInstance.close();

                            toastr.info("Clocked-in");


                        },
                        function (error) {

                            $scope.disableSaveButton = false;

                            console.error("TimesheetController - 20190921-0640 - promise > error");
                            console.log(error);

                            toastr.error("Failed to save record.  See console log.");
                             

                            $scope.feedbackToUserClassNameCase = 2;
                            $scope.feedbackToUserText = error.data;


                        });
                }


            };



            $scope.cancelForm = function () {


                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }


                $uibModalInstance.dismiss(); //same as cancel???

            };


 

        }]);


    return {
        timesheetApp: timesheetApp
    };



}();


export { timesheetCreateController_instance };

