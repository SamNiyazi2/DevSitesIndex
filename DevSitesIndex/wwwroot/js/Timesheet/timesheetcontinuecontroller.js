// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.
console.log("timesheetContinueController - 20190921-1137 - TOP ");
import * as globals from "../globals";
import * as angular from 'angular';
import * as util from '../site';
var timesheetContinueController_instance = function () {
    var timesheetApp = globals.default.getInstance("timesheetApp");
    timesheetApp.controller('TimesheetContinueController', function ($scope, $uibModalInstance, $http, $q, dataService, $timeout, timelogId) {
        dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
            .catch(getTimelogCatch);
        $scope.pageTitle = "Continue";
        function getTimelogSuccess(data) {
            var data2 = data;
            util.site_instance.fnConverDate(data2);
            var timeNow = new Date();
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
            setTimeout(function () {
                $scope.getDisciplines(data2.discipline.disciplineShort);
                $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
            }, 500);
        }
        function getTimelogError(data) {
            var temp = data;
        }
        function getTimelogCatch(data) {
            var temp = data;
        }
        $scope.submitForm = function () {
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
                promise.then(function (data) {
                    var test1 = data;
                    $scope.timeLog = angular.copy($scope.editableTimeLog);
                    $uibModalInstance.close();
                    toastr.info("Record added.  Reloading page...");
                    // 05/21/2019 12:54 pm - SSN - Reload page.
                    $timeout(function () {
                        location.reload();
                    }, 1000);
                }, function (error) {
                    console.log(error);
                    $uibModalInstance.close();
                    toastr.error("Failed to add record. See console log.");
                });
            }
        };
        $scope.cancelForm = function () {
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
    });
}();
console.log("timesheetContinueController - 20190921-1137 - Bottom");
export { timesheetContinueController_instance };
//# sourceMappingURL=timesheetcontinuecontroller.js.map