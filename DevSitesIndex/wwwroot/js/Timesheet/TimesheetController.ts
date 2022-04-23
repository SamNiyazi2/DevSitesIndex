

/// <reference path="../../../node_modules/@types/toastr/index.d.ts" />

// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp

// 09/18/2019 11:13 am - SSN - [20190918-0943] - [008] - Adding job status option to index


import * as globals from "../globals";
import * as angular from "angular";
import * as tostr from "toastr";
import { ILoggerModule } from "../Util/Logger/ILoggerErrorMessage";


// 04/22/2022 08:52 am - SSN - [20220422-0850] - [002] - Find source of duplicate call to site.ts
import * as util from '../site_v02';

import { ITimelogJS } from "../Interfaces/ITimelog";




var timesheetController_instance = function () {

    var timesheetApp = globals.globals_instance.getInstance_v002('TimesheetController', "timesheetApp");


    timesheetApp.controller('TimesheetController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'ssn_logger', 'timelogId_v01',


        function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, ssn_logger: ILoggerModule, timelogId_v01) {

            changeMonitorService.setupMonitor();



            // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
            // Add pageTitle
            $scope.pageTitle = "Clock-in - 1201";

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


            
            dataService.getTimelog(timelogId_v01).then(getTimelogSuccess, getTimelogError).catch(getTimelogCatch);


            function getTimelogSuccess(data) {
                
                util.site_instance.fnConverDate(data);

                $scope.editableTimeLog = data;
                   
                let timeNow = new Date();
                timeNow.setMilliseconds(0);
                $scope.editableTimeLog.timeLogId = 0;
                $scope.editableTimeLog.startTime = timeNow;
                $scope.editableTimeLog.totalSeconds = null;
                

            }


            function getTimelogError(err) {

                console.error('TimesheetController - gotJobError -  20210606-0540-B ');
                console.log(err);

                ssn_logger.cl_error({ callSource: '20210608-2306-a-1', message: 'Failed to get Timelogs record.', errorObject: err });
            }


            function getTimelogCatch(err) {

                console.error('TimesheetController - getJobCatch -  20210606-0540-C ');
                console.log(err);

                ssn_logger.cl_error({ callSource: '20210608-2306-a-2', message: 'Failed to get Timelogs record.', errorObject: err });

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


                            // 11/28/2019 02:47 am - SSN - [20191128-0247] - [001] - Clock-in not saving
                            // Adding feedback

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


            

            //$scope.addNewLineItem = function (jobID, containerViewValue) {

            //    ssn_logger.cl_normal({ callSource: '20210609-1807-A', message:`Calling addNewLineItem` }, 'yellow', true);
            //    ssn_logger.cl_normal({ callSource: '20210609-1807-B', message:`jobID: [${jobID}]` }, 'yellow', true);
            //    ssn_logger.cl_normal({ callSource: '20210609-1807-c', message: `containerViewValue: [${containerViewValue}]` }, 'yellow', true);


            //    $uibModal.open({
            //        templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
            //        controller: 'LineItemController',


            //        // 06/08/2021 03:57 pm - SSN - [20210606-0227] - [038] - Testng for deployment - Line item
            //        // backdrop: false,

            //        backdrop: 'static',
            //        keyboard: false,


            //        resolve: {
            //            jobId: function () {
            //                return jobID;
            //            },
            //            containerViewValue: function () {
            //                return containerViewValue;
            //            }
            //        }

            //    });





            //}




        }]);

    return {
        timesheetApp: timesheetApp
    };

}();


export { timesheetController_instance };

