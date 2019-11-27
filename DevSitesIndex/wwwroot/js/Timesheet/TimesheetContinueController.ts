


// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.



import * as ssn_globals from "../globals";
import * as angular from 'angular'
import * as util from '../site';


const ngApplicationName = "timesheetApp";

var timesheetContinueController_instance = function () {

    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetContinueController', ngApplicationName);


    // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

    console.log('Adding ChangeMonitorService');

    timesheetApp.controller('TimesheetContinueController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'timelogId', 'changeMonitorService',


        function ($scope, $uibModalInstance, $http, $q, dataService, $timeout, timelogId, changeMonitorService) {

            changeMonitorService.setupMonitor();




            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);



            $scope.pageTitle = "Continue / Line Item";


            // 09/28/2019 03:59 pm - SSN - [20190928-1256] - [010] - Adding Entity Framework model attribute
            $scope.feedbackToUserText = "";
            $scope.feedbackToUserClassNameCase = "";


            $scope.versionForHTMLRefresh = "15";

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


            function getTimelogSuccess(data) {

                let data2 = data;
                util.site_instance.fnConverDate(data2);


                let timeNow = new Date();
                timeNow.setMilliseconds(0);


                $scope.timeLog = data2;

                // 05/19/2019 02:41 pm - SSN - [20190519-1412] - [003] - Continue work on adding continue option for timesheet record
                // set TimeLogId = 0
                $scope.timeLog.timeLogId = 0;
                $scope.timeLog.startTime = timeNow;

                // 07/02/2019 09:17 am - SSN - Added nullify dateModified 
                $scope.timeLog.dateModified = null;

                // 05/21/2019 07:31 am - SSN - Forgotten
                $scope.timeLog.totalSeconds = null;

                $scope.editableTimeLog = angular.copy($scope.timeLog);



                setTimeout(() => {
                    $scope.getDisciplines(data2.discipline.disciplineShort);
                    $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
                }
                    , 500);


            }

            function getTimelogError(data) {
                var temp = data;

            }

            function getTimelogCatch(data) {
                var temp = data;

            }


            $scope.submitForm = function () {


                console.log('timesheetContinueController - submitForm - (101)');

                var test = $scope.editableTimeLog;

                var promise = null;

                $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

                if ($scope.editableTimeLog.timeLogId === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }

                if (promise) {

                    // 05/21/2019 11:56 am - SSN - Tested OK.
                    promise.then(
                        function (data) {

                            var test1 = data;

                            $scope.timeLog = angular.copy($scope.editableTimeLog);

                            $uibModalInstance.close(true);

                            toastr.info("Record added.  Reloading page...");

                            // 05/21/2019 12:54 pm - SSN - Reload page.
                            $timeout(() => {
                                location.reload();
                            }, 1000);



                        },
                        function (error) {

                            console.log(error);

                            // 09/28/2019 03:57 pm - SSN - [20190928-1256] - [009] - Adding Entity Framework model attribute
                            // $uibModalInstance.close();

                            toastr.error("Failed to add record. See console log.");

                            $scope.feedbackToUserClassNameCase = 2;
                            $scope.feedbackToUserText = error.data;

                        });
                }


            };



            $scope.cancelForm = function () {


                // 11/14/2019 05:09 pm - SSN - [20191114-1459] - [010] - ChangeMonitroService


                // changeMonitorService
                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }
                $uibModalInstance.dismiss(false); //same as cancel???

            };



            $scope.getDisciplines = function (lookupValue) {

                if (lookupValue === null) lookupValue = "";

                var deferred = $q.defer();

                $http({
                    method: 'GET',
                    url: 'api/DisciplineAPI'

                }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);

                return deferred.promise;

                function typeaheadDisciplineSuccess(response) {

                    var addresses = [];

                    angular.forEach(response.data,
                        function (item) {

                            if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                                addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                            }
                        }
                    );

                    deferred.resolve(addresses);

                }

                function typeaheadDisciplineError(response) {

                    deferred.reject(response);
                }

            };





        }]);


    return {
        timesheetApp: timesheetApp
    };

}();



export { timesheetContinueController_instance };
