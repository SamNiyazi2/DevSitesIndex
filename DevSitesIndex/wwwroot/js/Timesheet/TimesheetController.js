import * as globals from "../globals";
import * as angular from "angular";
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 09/18/2019 11:13 am - SSN - [20190918-0943] - [008] - Adding job status option to index
var timesheetController_instance = function () {
    var timesheetApp = globals.globals_instance.getInstance_v002('TimesheetController', "timesheetApp");
    // 09/30/2019 06:56 pm - SSN - (Inject jobId)
    // 11/28/2019 02:58 am - SSN - [20191128-0247] - [002] - Clock-in not saving - Add changeMonitorService
    timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'jobId',
        function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, jobId) {
            changeMonitorService.setupMonitor();
            // 11/28/2019 02:47 am - SSN - [20191128-0247] - [001] - Clock-in not saving
            // Adding feedback
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
            };
            dataService.getJob(jobId).then(getJobSuccess, getJobError).catch(getJobCatch);
            function getJobSuccess(data) {
                $scope.editableTimeLog.job = {};
                $scope.editableTimeLog.job.jobTitle = data.jobTitle;
                $scope.editableTimeLog.job.project = {};
                $scope.editableTimeLog.job.project.projectTitle = data.project.projectTitle;
            }
            function getJobError(data) {
                console.log('TimeshetController - getJobSuccess  -  20190930-2106-B ');
                console.log(data);
            }
            function getJobCatch(data) {
                console.log('TimeshetController - getJobSuccess  -  20190930-2106-C ');
                console.log(data);
            }
            $scope.disciplineSelected = { id: 0, title: '' };
            // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
            // Add pageTitle
            $scope.pageTitle = "Clock-in";
            var timeNow = new Date();
            timeNow.setMilliseconds(0);
            // timeNow.setSeconds(0);
            $scope.timeLog = {
                timeLogId: 0,
                id: 0,
                startTime: timeNow,
                workDetail: "",
                disciplineId: '2',
                jobId: jobId
            };
            $scope.editableTimeLog = angular.copy($scope.timeLog);
            $scope.submitForm = function () {
                var test = $scope.editableTimeLog;
                var promise = null;
                $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;
                if ($scope.editableTimeLog.id === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }
                if (promise) {
                    promise.then(function (data) {
                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                        $uibModalInstance.close();
                        toastr.info("Clocked-in");
                    }, function (error) {
                        console.log("TimesheetController - 20190921-0640 - promise > error");
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
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?'))
                        return;
                }
                $uibModalInstance.dismiss(); //same as cancel???
            };
            // 04/13/2019 11:00 am - SSN - [20190413-1037] - Add discipline lookup
            $scope.getDisciplines = function (lookupValue) {
                if (lookupValue === null)
                    lookupValue = "";
                var deferred = $q.defer();
                // 05/03/2019 04:16 pm - SSN - [20190503-1539] - [006] - Add link to create timelog
                // from   url:  'api/DisciplineAPI'
                //   to   url: '/api/DisciplineAPI'
                $http({
                    method: 'GET',
                    url: '/api/DisciplineAPI'
                }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                return deferred.promise;
                function typeaheadDisciplineSuccess(response) {
                    var addresses = [];
                    console.log("angular - forEach - 20190920-0720-o");
                    angular.forEach(response.data, function (item) {
                        if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                            addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                        }
                    });
                    deferred.resolve(addresses);
                }
                function typeaheadDisciplineError(response) {
                    deferred.reject(response);
                }
            };
        }]);
    return {
        timesheetApp_TimesheetController: timesheetApp
    };
}();
export { timesheetController_instance };
//# sourceMappingURL=TimesheetController.js.map