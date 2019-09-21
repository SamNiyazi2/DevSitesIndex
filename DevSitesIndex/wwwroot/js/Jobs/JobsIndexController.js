/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" /> 
/// <reference path="../DataServices.ts"/>
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("JobsIndexController - 20190921-0448 - Top");
import * as globals from "../globals";
// 09/21/2019 04:42 am - SSN - [20190921-0357] - [003] - Creating multiple entry for Webpack
var jobsIndexController_instance = function () {
    console.log("globals - 20190920-0714-f-2");
    var Jobs_Angular_Module = globals.default.getInstance("timesheetApp");
    Jobs_Angular_Module.controller('jobsIndexController', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
        // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
        //$scope.sqlStatsRecord = {};
        var columnBag = {
            columnName: 'dateAdded',
            columnNameSelected: 'dateAdded',
            currentPageNo: 1,
            desc: true,
            recordsPerPage: 4,
            totalRecordCount: 0,
            caption: "Date Added"
        };
        var _fieldList = [
            __assign({}, columnBag, { columnName: 'projectTitle_ForActivity', caption: 'Project Title' }),
            __assign({}, columnBag, { columnName: 'jobTitle', caption: 'Job Title' }),
            __assign({}, columnBag, { columnName: 'dateAdded', caption: 'Date Added' }),
            __assign({}, columnBag, { columnName: 'lastActivityDate', caption: 'Last Activity Date' }),
            __assign({}, columnBag, { columnName: 'activityAge', caption: 'Activity Age' }),
        ];
        $scope.fieldsList = _fieldList;
        getJobsList(columnBag);
        function getJobsList(columnBag) {
            dataService.getJobs(columnBag).then(getJobsSuccess, getJobsError).catch(getTimelogCatch);
            function getJobsSuccess(data) {
                $scope.databag = {
                    jobs: data.dataList, column: data.columnName, desc: data.desc
                };
                $scope.sqlStatsRecord = data.sqlStatsRecord;
                var currentColumnIndex = $scope.fieldsList.findIndex(function (r) { return r.column === data.columnName; });
                if (currentColumnIndex > -1) {
                    $scope.fieldsList[currentColumnIndex].desc = data.desc;
                }
            }
            function getJobsError(data) { var temp = data; }
            function getTimelogCatch(data) { var temp = data; }
        }
        $scope.sortMethod101 = function (columnBag) {
            if (columnBag.columnName != columnBag.columnNameSelected) {
                columnBag.columnNameSelected = columnBag.columnName;
            }
            else {
                columnBag.desc = !columnBag.desc;
            }
            getJobsList(columnBag);
        };
        $scope.pagingmethod101 = function (columnBag) {
            getJobsList(columnBag);
            $scope.sqlStatsRecord = columnBag;
        };
        $scope.showCreateTimesheetForm = function (jobID) {
            if (isNaN(jobID)) {
                jobID = 0;
            }
            $uibModal.open({
                templateUrl: '/js/timesheet/timesheetTemplate.html',
                controller: 'TimesheetController',
                backdrop: false,
                resolve: {
                    jobId: function () {
                        return jobID;
                    }
                }
            });
        };
    });
    console.log("JobsIndexController - 20190921-0448-YYY - bottom of function");
    return {
        Jobs_Angular_Module: Jobs_Angular_Module
    };
}();
console.log("JobsIndexController - 20190921-0448-ZZZ - bottom");
export { jobsIndexController_instance };
//# sourceMappingURL=JobsIndexController.js.map