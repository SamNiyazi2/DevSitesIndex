
// 11/16/2019 04:47 pm - SSN - [20191116-1516] - [003] - Timelog edit (AngularJS client version)
// Copied from TimesheetClockoutController

import * as ssn_globals from "../globals";
import * as angular from 'angular'
import * as util from '../site';
import { ILoggerModule } from "../Util/Logger/ILoggerErrorMessage";


var timesheetEditController_instance = function () {



    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetEditController', "timesheetApp");


    // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view

    timesheetApp.controller('TimesheetEditController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', '$timeout', '$rootScope','ssn_logger', 'servingPage',

        function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, ssn_logger: ILoggerModule, servingPage: ssn_globals.Timelog_ServingPage) {


            $timeout(() => {
                changeMonitorService.setupMonitor();
                util.site_instance.setDefaults();
            }, 600);

            $scope.disableSaveButton = false;

            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);


            $scope.pageTitle = "Edit [" + servingPage + '] 111-01';


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


            $scope.setStopTime = function () {

                let timeNow = new Date();

                timeNow.setMilliseconds(0);
                //timeNow.setSeconds(0);


                $scope.editableTimeLog.stopTime = timeNow;

            }


            function getTimelogSuccess(data) {


                let timeNow = new Date();

                timeNow.setMilliseconds(0);
                timeNow.setSeconds(0);

                //    let data2 = data;

                util.site_instance.fnConverDate(data);
                $scope.timeLog = data;


                $scope.editableTimeLog = angular.copy($scope.timeLog);


                //console.log('20210607-2041');
                //console.log('data------------------------------------------');
                //console.log(data);

                //console.log('$scope.timeLog------------------------------------------');
                //console.log($scope.timeLog);

                //console.log('$scope.editableTimeLog------------------------------------------');
                //console.log($scope.editableTimeLog);

                //console.log('------------------------------------------');

                 


            }


            function getTimelogError(data) {

                console.error('timesheetEditController - 20191116-1648');
                console.log(data);

                toastr.warning("Error posted to console. (1648)");

            }


            function getTimelogCatch(data) {

                console.error('timesheetEditController - 20191116-1649');
                console.log(data);

                toastr.warning("Error posted to console. (1649)");

            }


            $scope.submitForm = function () {

                $scope.disableSaveButton = true;

                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";


                var test = $scope.editableTimeLog;



                console.log('20210607-1852');
                console.log(test);

                console.log('------------------------------------------');

                console.log($scope.editableTimeLog);

                console.log('------------------------------------------');



                var promise = null;

                if ($scope.editableTimeLog.stopTime) {
                    $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
                }


                if ($scope.editableTimeLog.timeLogId === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }

                if (promise) {

                    promise.then(
                        function (data) {

                            var test1 = data;

                            $scope.timeLog = angular.copy($scope.editableTimeLog);


                            $uibModalInstance.close();
                            toastr.info("Record saved.");
                             

                            let id_temp = $scope.editableTimeLog.timeLogId;

                              
                            let haveMatch_on_servingPage = false;


                            if (
                                ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Timelog)
                                ||
                                ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Job_Timelog)
                            ) {
                                dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                                haveMatch_on_servingPage = true;
                            }


                            if (ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Projects_Search)) {
                                dataService.projectsSearchRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                                haveMatch_on_servingPage = true;
                            }


                            if (!haveMatch_on_servingPage) {
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                                console.log('No match for servingPage to refresh page ***** 20191122-1949');
                            }



                            function refreshRecord_Sucess(result) {

                                $rootScope.$broadcast('TimeLog_Index_Refresh', result);

                            }

                            function refreshRecord_Error(result) {

                                console.error(result);

                            }
 

                            $scope.disableSaveButton = false;

                        },
                        function (error) {
 
                            console.log(error);

                            toastr.error("Failed to save record.");
                            toastr.warning("Error posted to console.");

                            $scope.feedbackToUserClassNameCase = 2;
                            $scope.feedbackToUserText = error.data;


                            $scope.disableSaveButton = false;

                        });
                }


            };


            $scope.cancelForm = function () {

                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }

                $uibModalInstance.dismiss();

            };



             

            $scope.addNewLineItem = function (jobID, containerViewValue) {


                ssn_logger.cl_normal({ callSource: '20210609-1802-A', message: 'Calling addNewLineItem' }, 'yellow', true);
                ssn_logger.cl_normal({ callSource: '20210609-1802-B', message: `jobID [${jobID}]` }, 'yellow', true);
                ssn_logger.cl_normal({ callSource: '20210609-1802-C', message: `containerViewValue [${containerViewValue}]` }, 'yellow', true);


                $uibModal.open({
                    templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
                    controller: 'LineItemController',
  
                    backdrop: 'static',
                    keyboard: false,


                    resolve: {
                        jobId: function () {
                            return jobID;
                        },
                        containerViewValue: function () {
                            return containerViewValue;
                        }
                    }

                });








            }






        }]);






    return {
        timesheetApp: timesheetApp
    };

}();


export { timesheetEditController_instance };

