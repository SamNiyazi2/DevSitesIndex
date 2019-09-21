﻿

// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module


// 05/04/2019 09:26 am - SSN - [20190504-0855] - [004] - Testing if we can replace global variable
// Convert to TypeScript
// 05/04/2019 09:58 am - SSN - Since having to import angular when converting to a module




console.log("");
console.log("DataServices loading - 20190920-0714-a");

// import { IColumnBag } from './IColumnBag';
import * as   IColumnBagTemp from './IColumnBag';

//import {  getInstance } from './globals';
import * as   globals from './globals';


console.log("angular - 20190920-0720-j");


import * as angular from "angular";






var dataService_instance = function () {


    var doSetup = function (currentApplication: string) {

        console.log("DataService:  Name of application beign served [" + currentApplication + "]");


        var ssn_devsite_angular_module = globals.default.getInstance(currentApplication);



        ssn_devsite_angular_module.factory("dataService", function ($http, $q) {

            var _devSites = [];

            var _getDevSites = function () {

                var deferred = $q.defer();



                console.log("angular - 20190920-0720-h");




                $http.get('/api/demositesapi')
                    .then(function (result) {

                        angular.copy(result.data, _devSites);
                        deferred.resolve();
                    },
                        function () {
                            deferred.reject();
                        });

                return deferred.promise;
            };


            // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup

            var _getTimelog = function (id) {

                var deferred = $q.defer();

                $http.get('/api/timelogapi/' + id)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get timelog [20190829-1819]' });
                        });

                return deferred.promise;
            };


            var _addDevSite = function (devSite) {

                var deferred = $q.defer();

                $http.post('/api/demositesapi', devSite)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function () {
                            deferred.reject();
                        });

                return deferred.promise;

            };


            // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - edit div content
            var _updateDevSite = function (devSite) {


                var deferred = $q.defer();

                // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 

                //       $http.post('/api/demositesapi', devSite)
                $http.post('/api/demositesapi/Top?recordCount=20', devSite)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function () {
                            deferred.reject();
                        });

                return deferred.promise;

            };


            // 04/12/2019 11:26 am - SSN - [20190412-1126] - Timelog - save data

            var _insertTimeLog = function (timeLog) {

                var deferred = $q.defer();

                $http.post('/api/timeLogAPI', timeLog)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject(error);
                        });

                return deferred.promise;

            };


            // 05/19/2019 03:00 pm - SSN - [20190519-1412] - [004] - Continue work on adding continue option for timesheet record
            var _addOrUpdateTimeLog = function (timeLog) {


                var deferred = $q.defer();

                $http.post('/api/timeLogAPI', timeLog)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            deferred.reject(error);
                        });

                return deferred.promise;

            };



            // 09/17/2019 12:56 am - SSN - [20190916-1123] - [016] - Adding job status
            // Adding option to list Jobs

            // 09/18/2019 03:24 am - SSN - [20190917-0929] - [017] - Adding paging for angular lists
            // var _getJobs = function (pageNo, recordsPerPage, columnName, desc) {
            var _getJobs = function (columnBag: IColumnBagTemp.default) {

                var deferred = $q.defer();

                //$http.get('/api/jobapi/list/' + pageNo + "/" + recordsPerPage + "/" + columnName + "/" + desc)
                $http.get('/api/jobapi/list/' + columnBag.currentPageNo + "/" + columnBag.recordsPerPage + "/" + columnBag.columnName + "/" + columnBag.desc)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get jobs [20190917-0057]' });
                        });

                return deferred.promise;
            };



            return {

                devSites: ko.observable(_devSites),
                getDevSites: _getDevSites,
                addDevSite: _addDevSite,
                // 09/06/2019 04:44 pm - SSN - [20190906-0518] - [002] - Angular - edit div content
                updateDevSite: _updateDevSite,

                insertTimeLog: _insertTimeLog,
                getTimelog: _getTimelog,
                updateTimeLog: _addOrUpdateTimeLog,
                getJobs: _getJobs
            };


        });
    };

    return {
//        ssn_devsite_angular_module: ssn_devsite_angular_module
        doSetup: doSetup
    };


}();




console.log("DataServices loading - 20190920-0714-zzz");
console.log("");



export { dataService_instance };


