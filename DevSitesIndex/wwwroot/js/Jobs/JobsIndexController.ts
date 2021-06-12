
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" /> 
/// <reference path="../DataServices.ts"/>



import * as angular from 'angular'
import IColumnBag from '../IColumnBag';
import * as ssn_globals from "../globals";

import { jobStatusDisplayDirective_instance } from "../Util/JobStatusDisplayDirective";

jobStatusDisplayDirective_instance;


// 09/21/2019 04:42 am - SSN - [20190921-0357] - [003] - Creating multiple entry for Webpack

var jobsIndexController_instance = function () {


    var Jobs_Angular_Module: angular.IModule = ssn_globals.globals_instance.getInstance_v002('JobIndexController', "timesheetApp");







    // 11/27/2019 09:24 am - SSN - Passing in projectId
    Jobs_Angular_Module.controller('jobsIndexController', ['$scope', '$http', '$q', 'dataService', '$timeout', '$sce', '$uibModal',


        function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {

            $scope.hasErrors = false;
            $scope.feedbackToUserClassNameCase = 0;
            $scope.errorMessages = "";

            $scope.showOriginalTable = false;
            $scope.tableTopIdForScroll = "jobIndexTableID"

            $scope.hideProjectTitle = false;

            var qd = {};
            if (location.search) location.search.substr(1).split("&").forEach(function (item) {
                var s = item.split("="), k = s[0], v = s[1]
                    && decodeURIComponent(s[1]); (qd[k] = qd[k] || []).push(v)
            })


            // 12/03/2019 10:12 pm - SSN - parseInt
            // 12/04/2019 06:25 am - SSN - Change from local to $scope
            $scope.projectId = parseInt(qd['id']);

            // 12/03/2019 10:25 pm - SSN - Hide project title.
            $scope.hideProjectTitle = $scope.projectId > 0;

            // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
            //$scope.sqlStatsRecord = {};

            //  Setup intiail values for list

            $scope.job_statuses_selected = [1]; // open

            let columnBag_defaults: IColumnBag = {
                columnName: '????',
                columnNameSelected: '',// leave blank.  Length is used to select selected column
                currentPageNo: 1,
                recordsPerPage: 4,
                desc: null,
                totalRecordCount: 0,
                caption: "???",
                job_statuses_selected: [$scope.job_statuses_selected],
                fk_filter: $scope.projectId
            };

            console.log('JobIndexController.ts - 20200814-0901');
            console.log(columnBag_defaults);


            let _fieldList: IColumnBag[] = [
                { ...columnBag_defaults, columnName: 'projectTitle_ForActivity', caption: 'Project Title' },
                { ...columnBag_defaults, columnName: 'jobTitle', caption: 'Job Title' },
                { ...columnBag_defaults, columnName: 'dateAdded', caption: 'Date Added', cssForTableHead: 'hidden-xs' },
                { ...columnBag_defaults, columnName: 'dateUpdated', caption: 'Date Updated', cssForTableHead: 'hidden-xs' },
                { ...columnBag_defaults, columnName: 'activityAge', caption: 'Activity Age', cssForTableHead: 'hidden-xs', columnNameSelected: 'activityAge', desc: true },
            ];

            if ($scope.hideProjectTitle) {

                _fieldList.splice(0, 1);

            }


            let selectColumnEntries = _fieldList.filter(r => r.columnNameSelected.length > 0);


            let columnBag = null;

            if (selectColumnEntries.length > 0) {
                columnBag = selectColumnEntries[0];
            }

            $scope.fieldsList = _fieldList;


            getJobsList(columnBag);



            function getJobsList(columnBag: IColumnBag) {



                console.log('jobsIndexController.ts - 20200814-0903');
                console.log(columnBag);

                dataService.getJobs(columnBag).then(getJobsSuccess, getJobsError).catch(getTimelogCatch);


                function getJobsSuccess(data) {

                    $scope.fieldsList.forEach(r => {
                        r.desc = null;
                    });


                    if (data.hasErrors) {

                        $scope.feedbackToUserClassNameCase = 2;
                        $scope.hasErrors = true;
                        $scope.errorMessages = "";

                        for (var i = 0; i < data.feedbackMessages.length; i++) {
                            for (var i2 = 0; i2 < data.feedbackMessages[i].errorMessages.length; i2++) {
                                $scope.errorMessages += data.feedbackMessages[i].errorMessages[i2];
                            }
                        }
                    }
                    else {


                        console.log('jobsIndexController.ts - 20200814-0904');
                        console.log(data);


                        $scope.databag = {
                            jobs: data.dataList, column: data.sqlStatsRecord.columnName, desc: data.sqlStatsRecord.desc
                        }


                        // We need to convert to an array. We don't have a setter on an interface.
                        data.sqlStatsRecord.job_statuses_selected = data.sqlStatsRecord.job_statuses_selected.split(',');

                        $scope.sqlStatsRecord = data.sqlStatsRecord;

                        var currentColumnIndex = $scope.fieldsList.findIndex(r => r.columnName === data.sqlStatsRecord.columnName);

                        if (currentColumnIndex > -1) {

                            $scope.fieldsList[currentColumnIndex].desc = data.sqlStatsRecord.desc;

                        }

                    }

                }


                function getJobsError(data) {
                    var temp = data;
                    console.log('20191110-0935 - JobsIndexController - getJobsError');
                    console.error(data);
                }

                function getTimelogCatch(data) {
                    var temp = data;
                    console.log('20191110-0936 - JobsIndexController - getJobsCatch');
                    console.error(data);
                }

            }



            $scope.sortMethod101 = function (columnBag: IColumnBag) {

                if (columnBag.columnName != columnBag.columnNameSelected) {
                    columnBag.columnNameSelected = columnBag.columnName;
                }
                else {
                    columnBag.desc = !columnBag.desc;
                }
                getJobsList(columnBag);

            }


            $scope.pagingmethod101 = function (columnBag: IColumnBag) {


                getJobsList(columnBag);

                $scope.sqlStatsRecord = columnBag;

                // 12/02/2019 02:48 am - SSN - Added

                if ($scope.tableTopIdForScroll) {
                    document.querySelector("#" + $scope.tableTopIdForScroll).scrollIntoView({
                        behavior: 'smooth'
                    });

                }
            }




            // 09/22/2019 10:47 am - SSN - [20190922-0822] - [007] - Plug in job status filter on job's index - update data source

            $scope.job_status_changed101 = function (job_status) {

                var indexOfSelectedItem = $scope.job_statuses_selected.indexOf(job_status.id);

                if (indexOfSelectedItem > -1)
                    $scope.job_statuses_selected.splice(indexOfSelectedItem, 1);
                else
                    $scope.job_statuses_selected[$scope.job_statuses_selected.length] = job_status.id;

                if ($scope.sqlStatsRecord) {
                    $scope.sqlStatsRecord.job_statuses_selected = $scope.job_statuses_selected; //.join(',');
                }

                columnBag.job_statuses_selected = $scope.sqlStatsRecord.job_statuses_selected;

                getJobsList(columnBag);
            }



            // 09/22/2019 05:20 am - SSN - [20190921-1129] - [007] - Plug in job status filter on job's index


            $scope.job_statuses_checkAll = function (enable) {

                if (enable) {
                    $scope.job_statuses_selected = $scope.job_statuses.map(function (job_status) { return job_status.id });
                }
                else {
                    $scope.job_statuses_selected = [];
                }

                columnBag.job_statuses_selected = $scope.job_statuses_selected


                getJobsList(columnBag);
            }




            function getJob_Statuses() {

                dataService.getJob_Statuses().then(getJob_StatusesSuccess, getJob_StatusesError).catch(getJob_StatusesCatch);


                function getJob_StatusesSuccess(data) {
                    $scope.job_statuses = data;
                }


                function getJob_StatusesError(data) {
                    console.log("JobIndexController -  20190922-0758 - Data error ?????????????????????????????");
                    console.error(data);
                }


                function getJob_StatusesCatch(data) {
                    console.log("JobIndexController -  20190922-0758 - Data error (catch) ?????????????????????????????");
                    console.error(data);
                }

            }


            $scope.feedbackToUserClassNameSet = function () {

                switch ($scope.feedbackToUserClassNameCase) {
                    case 1:
                        return "  margined info_good";
                    case 2:
                        return "  margined info_bad";
                    default:
                        return "";
                }

            }


            getJob_Statuses();


        }]

    );


    return {
        Jobs_Angular_Module: Jobs_Angular_Module
    }


}();



export { jobsIndexController_instance };

