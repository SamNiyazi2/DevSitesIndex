// 09/16/2019 10:53 pm - SSN - [20190916-1123] - [011] - Adding job status
/// <reference path="../../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
console.log('20190916-2321 - top of JobsIndexController');
Jobs_Angular_Module = angular.module("timesheetApp");
Jobs_Angular_Module.controller('jobsIndexController', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
    $scope.fieldsList = [
        { column: 'projectTitle_ForActivity', caption: 'Project Title', desc: 'true' },
        { column: 'jobTitle', caption: 'Job Title', desc: 'true' },
        { column: 'dateAdded', caption: 'Date Added', desc: 'true' },
        { column: 'lastActivityDate', caption: 'Last Activity Date', desc: 'true' },
        { column: 'activityAge', caption: 'Activity Age', desc: 'true' },
    ];
    var columnName = 'dateAdded';
    var desc = 'false';
    // Duplicate [20190917-0541] - begin
    dataService.getJobs(1, 10, columnName, desc).then(getJobsSuccess, getJobsError).catch(getTimelogCatch);
    function getJobsSuccess(data) {
        $scope.databag = {
            jobs: data.dataList, column: columnName, desc: data.desc
        };
    }
    ;
    function getJobsError(data) { var temp = data; }
    function getTimelogCatch(data) { var temp = data; }
    // Duplicate [20190917-0541] - End
    $scope.sortMethod101 = function (column) {
        console.log("calling controller sortMethod101 20190917-0730");
        // Duplicate [20190917-0541] - begin
        dataService.getJobs(1, 10, column.column, column.desc).then(getJobsSuccess, getJobsError).catch(getTimelogCatch);
        function getJobsSuccess(data) {
            $scope.databag = {
                jobs: data.dataList, column: data.columnName, desc: data.desc
            };
            var currentColumnIndex = $scope.fieldsList.findIndex(function (r) { return r.column === data.columnName; });
            if (currentColumnIndex > -1) {
                $scope.fieldsList[currentColumnIndex].desc = data.desc;
            }
            var rowCount = $scope.fieldsList.length;
            $scope.fieldsList.push({ column: 'column ' + (rowCount + 1), caption: 'Title ' + (rowCount + 1), desc: 'true' });
        }
        function getJobsError(data) { var temp = data; }
        function getTimelogCatch(data) { var temp = data; }
        // Duplicate [20190917-0541] - End
    };
    // 09/17/2019 12:37 am - SSN - [20190916-1123] - [015] - Adding job status
    // Copied from TimesheetApp.ts
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
//# sourceMappingURL=JobsIndexController.js.map