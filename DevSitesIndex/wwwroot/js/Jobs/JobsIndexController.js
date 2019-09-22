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
import * as globals from "../globals";
import { jobStatusDisplayDirective_instance } from "../Util/JobStatusDisplayDirective";
jobStatusDisplayDirective_instance;
// 09/21/2019 04:42 am - SSN - [20190921-0357] - [003] - Creating multiple entry for Webpack
var jobsIndexController_instance = function () {
    var Jobs_Angular_Module = globals.default.getInstance("timesheetApp");
    Jobs_Angular_Module.controller('jobsIndexController', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
        // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
        //$scope.sqlStatsRecord = {};
        //  Setup intiail values for list
        $scope.job_statuses_selected = [1]; // open
        var columnBag = {
            columnName: 'dateAdded',
            columnNameSelected: 'dateAdded',
            currentPageNo: 1,
            desc: true,
            recordsPerPage: 4,
            totalRecordCount: 0,
            caption: "Date Added",
            job_statuses_selected: [$scope.job_statuses_selected]
        };
        var _fieldList = [
            __assign({}, columnBag, { columnName: 'projectTitle_ForActivity', caption: 'Project Title' }),
            __assign({}, columnBag, { columnName: 'jobTitle', caption: 'Job Title' }),
            __assign({}, columnBag, { columnName: 'dateAdded', caption: 'Date Added' }),
            __assign({}, columnBag, { columnName: 'lastActivityDate', caption: 'Last Activity' }),
            __assign({}, columnBag, { columnName: 'activityAge', caption: 'Activity Age' }),
        ];
        $scope.fieldsList = _fieldList;
        getJobsList(columnBag);
        function getJobsList(columnBag) {
            console.log("jobIndexController - getJobsList - 20190922-1154-A-1");
            console.log(columnBag);
            dataService.getJobs(columnBag).then(getJobsSuccess, getJobsError).catch(getTimelogCatch);
            console.log("jobIndexController - getJobsList - 20190922-1154-A-2");
            console.log($scope.job_statuses_selected);
            function getJobsSuccess(data) {
                $scope.databag = {
                    jobs: data.dataList, column: data.columnName, desc: data.desc
                };
                console.log("jobIndexController - getJobsList - XXXXXXXXXXXXXXXXX 20190922-1301-XXXXXXX");
                console.log(data.dataList);
                // We need to convert to an array. We don't have a setter on an interface.
                data.sqlStatsRecord.job_statuses_selected = data.sqlStatsRecord.job_statuses_selected.split(',');
                console.log("jobIndexController - getJobsList - 20190922-1154-B");
                console.log(data.sqlStatsRecord);
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
        // 09/22/2019 10:47 am - SSN - [20190922-0822] - [007] - Plug in job status filter on job's index - update data source
        $scope.job_status_changed101 = function (job_status) {
            console.log("JOBINDEXCONTROLLER ZZZZZZZ - 20190922-0908-Working-002");
            console.log(job_status);
            console.log($scope.sqlStatsRecord);
            var indexOfSelectedItem = $scope.job_statuses_selected.indexOf(job_status.id);
            if (indexOfSelectedItem > -1)
                $scope.job_statuses_selected.splice(indexOfSelectedItem, 1);
            else
                $scope.job_statuses_selected[$scope.job_statuses_selected.length] = job_status.id;
            if ($scope.sqlStatsRecord) {
                $scope.sqlStatsRecord.job_statuses_selected = $scope.job_statuses_selected; //.join(',');
            }
            console.log($scope.sqlStatsRecord);
            columnBag.job_statuses_selected = $scope.sqlStatsRecord.job_statuses_selected;
            getJobsList(columnBag);
        };
        // 09/22/2019 05:20 am - SSN - [20190921-1129] - [007] - Plug in job status filter on job's index
        $scope.job_statuses_checkAll = function (enable) {
            console.log("JobIndexController - 20190922-1127");
            console.log($scope.job_statuses_selected);
            if (enable) {
                $scope.job_statuses_selected = $scope.job_statuses.map(function (job_status) { return job_status.id; });
            }
            else {
                $scope.job_statuses_selected = [];
            }
            console.log($scope.job_statuses_selected);
            columnBag.job_statuses_selected = $scope.job_statuses_selected;
            getJobsList(columnBag);
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
        //function getJob_Statuses() {
        //    dataService.getJob_Statuses().then(getJob_StatusesSuccess, getJob_StatusesError).catch(getJob_StatusesCatch);
        //    function getJob_StatusesSuccess(data) {
        //        $scope.job_statuses = data;
        //        console.log(data);
        //    }
        //    function getJob_StatusesError(data) {
        //        var temp = data;
        //        console.log("jobStatusDirective - parent controller -  20190921-1323-B - Data error ?????????????????????????????");
        //        console.log(data);
        //    }
        //    function getJob_StatusesCatch(data) {
        //        var temp = data;
        //        console.log("jobStatusDirective - parent controller -  20190921-1323-C - Data error (catch) ?????????????????????????????");
        //        console.log(data);
        //    }
        //}
        //getJob_Statuses();
        function getJob_Statuses() {
            dataService.getJob_Statuses().then(getJob_StatusesSuccess, getJob_StatusesError).catch(getJob_StatusesCatch);
            function getJob_StatusesSuccess(data) {
                $scope.job_statuses = data;
            }
            function getJob_StatusesError(data) {
                console.log("JobIndexController -  20190922-0758 - Data error ?????????????????????????????");
                console.log(data);
            }
            function getJob_StatusesCatch(data) {
                console.log("JobIndexController -  20190922-0758 - Data error (catch) ?????????????????????????????");
                console.log(data);
            }
        }
        getJob_Statuses();
    });
    return {
        Jobs_Angular_Module: Jobs_Angular_Module
    };
}();
export { jobsIndexController_instance };
//# sourceMappingURL=JobsIndexController.js.map