// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 05/19/2019 12:18 pm - SSN - [20190519-1132] - [003] - Address definitely typed errors
// 09/21/2019 11:52 am  - SSN - Upgrading to use Babel/WWebpack
import * as ssn_globals from "../globals";
import * as angular from 'angular';
import * as util from '../site';
var timesheetClockoutController_instance = function () {
    // 05/19/2019 10:06 am - SSN - [20190519-0837] - [006] - Adding timesheet "Continue" option
    var timesheetApp = ssn_globals.globals_instance.getInstance("timesheetApp");
    // 11/16/2019 02:52 pm - SSN - [20191116-1419] - [003] - Add RowVersion  to Timelog.
    // Inject changeMonitorService
    timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId',
        function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId) {
            // 11/16/2019 03:08 pm - SSN - [20191116-1419] - [004] - Add RowVersion  to Timelog.
            changeMonitorService.setupMonitor();
            // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
            // $scope.timeLog = dataService.getTimelog($routeParams.id);
            // $scope.timeLog = dataService.getTimelog(timelogId);
            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);
            // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
            // Add pageTitle
            $scope.pageTitle = "Clock-out";
            // 11/16/2019 02:48 pm - SSN - [20191116-1419] - [002] - Add RowVersion  to Timelog.
            // Copied from TimesheetContinueController
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
            function getTimelogSuccess(data) {
                //$scope.disciplineSelected = { id: 0, title: '' };
                var timeNow = new Date();
                timeNow.setMilliseconds(0);
                timeNow.setSeconds(0);
                //$scope.timeLog = {
                //    timeLogId: 0,
                //    id: 0,
                //    startTime: timeNow,
                //    workDetail: "",
                //    disciplineId: '2',
                //    jobId: jobId
                //};
                data.stopTime = timeNow;
                var data2 = data;
                util.site_instance.fnConverDate(data2);
                $scope.timeLog = data2;
                $scope.editableTimeLog = angular.copy($scope.timeLog);
                setTimeout(function () {
                    $scope.getDisciplines(data2.discipline.disciplineShort);
                    $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
                }, 500);
            }
            function getTimelogError(data) {
                console.log('timesheetClockOutController - 20190922-1426');
                console.log(data);
                toastr.warning("Error posted to console. (0307)");
            }
            function getTimelogCatch(data) {
                console.log('timesheetClockOutController - 20190922-1427');
                console.log(data);
                toastr.warning("Error posted to console. (0306)");
            }
            $scope.submitForm = function () {
                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";
                var test = $scope.editableTimeLog;
                var promise = null;
                $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;
                $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
                if ($scope.editableTimeLog.id === 0) {
                    promise = dataService.insertTimeLog($scope.editableTimeLog);
                }
                else {
                    promise = dataService.updateTimeLog($scope.editableTimeLog);
                }
                if (promise) {
                    promise.then(function (data) {
                        var test1 = data;
                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                        $uibModalInstance.close();
                        toastr.info("Clocked-out");
                    }, function (error) {
                        var test2 = error;
                        console.log(error);
                        toastr.error("Failed to save record.");
                        toastr.warning("Error posted to console.");
                        $scope.feedbackToUserClassNameCase = 2;
                        $scope.feedbackToUserText = error.data;
                        return;
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
            $scope.getDisciplines = function (lookupValue) {
                if (lookupValue === null)
                    lookupValue = "";
                var deferred = $q.defer();
                $http({
                    method: 'GET',
                    url: 'api/DisciplineAPI'
                }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                return deferred.promise;
                function typeaheadDisciplineSuccess(response) {
                    var addresses = [];
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
        timesheetApp: timesheetApp
    };
}();
export { timesheetClockoutController_instance };
//# sourceMappingURL=TimesheetClockOutController.js.map