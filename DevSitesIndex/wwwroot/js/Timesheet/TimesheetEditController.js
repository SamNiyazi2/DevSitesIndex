// 11/16/2019 04:47 pm - SSN - [20191116-1516] - [003] - Timelog edit (AngularJS client version)
// Copied from TimesheetClockoutController
import * as ssn_globals from "../globals";
import * as angular from 'angular';
import * as util from '../site';
var timesheetEditController_instance = function () {
    var timesheetApp = ssn_globals.globals_instance.getInstance("timesheetApp");
    // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view
    // 11/22/2019 02:18 pm - SSN - [20191121-0503] - [015] - Timelog edit options on project search
    // Injecting Servingpage
    timesheetApp.controller('TimesheetEditController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', '$timeout', '$rootScope', 'servingPage',
        function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, servingPage) {
            $timeout(function () {
                changeMonitorService.setupMonitor();
                util.site_instance.setDefaults();
            }, 600);
            dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
                .catch(getTimelogCatch);
            $scope.pageTitle = "Edit [" + servingPage + ']';
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
            $scope.setStopTime = function () {
                var timeNow = new Date();
                timeNow.setMilliseconds(0);
                //timeNow.setSeconds(0);
                $scope.editableTimeLog.stopTime = timeNow;
            };
            function getTimelogSuccess(data) {
                var timeNow = new Date();
                timeNow.setMilliseconds(0);
                timeNow.setSeconds(0);
                var data2 = data;
                util.site_instance.fnConverDate(data2);
                $scope.timeLog = data2;
                $scope.editableTimeLog = angular.copy($scope.timeLog);
                $timeout(function () {
                    //  $scope.getDisciplines(data2.discipline.disciplineShort);
                    $scope.disciplineSelected = { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort };
                }, 500);
            }
            function getTimelogError(data) {
                console.log('timesheetEditController - 20191116-1648');
                console.log(data);
                toastr.warning("Error posted to console. (1648)");
            }
            function getTimelogCatch(data) {
                console.log('timesheetEditController - 20191116-1649');
                console.log(data);
                toastr.warning("Error posted to console. (1649)");
            }
            $scope.submitForm = function () {
                $scope.feedbackToUserText = "";
                $scope.feedbackToUserClassNameCase = "";
                var test = $scope.editableTimeLog;
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
                    promise.then(function (data) {
                        var test1 = data;
                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                        $uibModalInstance.close();
                        toastr.info("Record saved.");
                        // Refactor [20191120-0438] - Begin
                        var id_temp = $scope.editableTimeLog.timeLogId;
                        // 11/22/2019 04:09 pm - SSN - [20191121-0503] - [019] - Timelog edit options on project search
                        console.log("servingPage 5 ", servingPage);
                        var haveMatch_on_servingPage = false;
                        if (ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Timelog)
                            ||
                                ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Job_Timelog)) {
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
                        // Refactor [20191120-0438] - End
                    }, function (error) {
                        var test2 = error;
                        console.log(error);
                        toastr.error("Failed to save record.");
                        toastr.warning("Error posted to console.");
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
                $uibModalInstance.dismiss();
            };
            //$scope.getDisciplines = function (lookupValue) {
            //    if (lookupValue === null) lookupValue = "";
            //    var deferred = $q.defer();
            //    $http({
            //        method: 'GET',
            //        url: 'api/DisciplineAPI'
            //    }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
            //    return deferred.promise;
            //    function typeaheadDisciplineSuccess(response) {
            //        var addresses = [];
            //        angular.forEach(response.data,
            //            function (item) {
            //                if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
            //                    addresses.push({ id: item.disciplineId, title: item.disciplineShort });
            //                }
            //            }
            //        );
            //        deferred.resolve(addresses);
            //    }
            //    function typeaheadDisciplineError(response) {
            //        deferred.reject(response);
            //    }
            //};
        }]);
    return {
        timesheetApp: timesheetApp
    };
}();
export { timesheetEditController_instance };
//# sourceMappingURL=TimesheetEditController.js.map