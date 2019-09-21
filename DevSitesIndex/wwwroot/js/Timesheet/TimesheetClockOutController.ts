﻿


console.log("globals - 20190920-0714-d");


// import { getInstance } from "../globals";
import * as globals from "../globals";

// 09/19/2019 04:23 am - SSN - [20190919-0354] - [006] - Putting things back - Cleanup from implementing AMD - Adding tsconfig.json     "alwaysStrict": true,
// import angular = require("angular");
import * as angular from 'angular'





// 09/19/2019 05:43 am - SSN - [20190919-0354] - [012] - Putting things back - Cleanup from implementing AMD - Adding tsconfig.json     "alwaysStrict": true,
import * as util from '../site';





//////////////////////////////////////////////////////// <reference path="../site.js" />
// 05/19/2019 10:06 am - SSN - [20190519-0837] - [006] - Adding timesheet "Continue" option


// 05/19/2019 12:18 pm - SSN - [20190519-1132] - [003] - Address definitely typed errors
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />


// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp





// 09/19/2019 03:57 am - SSN - [20190919-0354] - [001] - Putting things back - Cleanup from implementing AMD - Adding tsconfig.json     "alwaysStrict": true,

// var timesheetApp = angular.module('timesheetApp', ['ngRoute', 'ui.bootstrap']);  //,  'ui.bootstrap'    


var timesheetApp = globals.default.getInstance("timesheetApp");






timesheetApp.controller('TimesheetClockOutController',

    function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, timelogId) {



        // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
        // $scope.timeLog = dataService.getTimelog($routeParams.id);
        // $scope.timeLog = dataService.getTimelog(timelogId);
        dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)
            .catch(getTimelogCatch);



        // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
        // Add pageTitle
        $scope.pageTitle = "Clock-out";


        function getTimelogSuccess(data) {


            //$scope.disciplineSelected = { id: 0, title: '' };


            //let timeNow = new Date();
            //timeNow.setMilliseconds(0);
            // timeNow.setSeconds(0);

            //$scope.timeLog = {
            //    timeLogId: 0,
            //    id: 0,
            //    startTime: timeNow,
            //    workDetail: "",
            //    disciplineId: '2',
            //    jobId: jobId
            //};
            let data2 = data;
            util.fnConverDate(data2);
            $scope.timeLog = data2;

            // $scope.disciplineSelected = data2.discipline.disciplineShort; // { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort};

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

                promise.then(
                    function (data) {

                        var test1 = data;

                        $scope.timeLog = angular.copy($scope.editableTimeLog);
                    },
                    function (error) {

                        var test2 = error;
                        alert("System Error! Check console.");
                        console.log(error);

                    });
            }


            $uibModalInstance.close();
            toastr.info("Clocked-out");
        };



        $scope.cancelForm = function () {


            $uibModalInstance.dismiss(); //same as cancel???

        };



        // 04/13/2019 11:00 am - SSN - [20190413-1037] - Add discipline lookup

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





    });

console.log("Bottom of TimesheetClockOutController.js");
