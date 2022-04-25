

// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module


// 05/04/2019 09:26 am - SSN - [20190504-0855] - [004] - Testing if we can replace global variable
// Convert to TypeScript
// 05/04/2019 09:58 am - SSN - Since having to import angular when converting to a module


import * as   IColumnBagTemp from '../Interfaces/IColumnBag';
import { ITechnology } from '../Interfaces/ITechnology';
import { IDevSiteTechnology } from '../Interfaces/IDevSiteTechnology';

import * as   globals from '../globals';

import * as angular from "angular";
import { ssn_AngularJslogger } from '../Util/Logger/ssn_AngularJslogger';


var dataService_instance = function () {


    var doSetup = function (currentApplication: string) {


        var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('DataServices', currentApplication);


        ssn_devsite_angular_module.factory("dataService", ['$http', '$q', function ($http, $q) {


            var _getDevSites = function (recordsPerPage: number, currentPage: number) {

                var deferred = $q.defer();

                $http.get(`/api/demositesapi/${recordsPerPage}/${currentPage}`)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            console.error('%c ' + 'dataservice getDevSites error', 'color:red;font-size:13pt;');
                            console.log(error);

                            deferred.reject(error);
                        });

                return deferred.promise;
            };



            // 06/15/2021 05:10 am - SSN - [20210613-0452] - [045] - Adding tags to DevSite

            var _getDevSite = function (devSiteId: number) {

                var deferred = $q.defer();

                $http.get(`/api/demositesapi/${devSiteId}`)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject(error);
                        });

                return deferred.promise;
            };


            // 06/13/2021 10:29 am - SSN - [20210613-0452] - [018] - Adding tags to DevSite

            var _getDevSitesCount = function () {

                var deferred = $q.defer();

                $http.get(`/api/demositesapi/recordcount`)
                    .then(function (result) {

                        deferred.resolve(result);
                    },
                        function (error) {
                            deferred.reject(error);
                        });

                return deferred.promise;
            };


            // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup

            var _getTimelog = function (id) {

                var deferred = $q.defer();

                // 09/24/2019 07:15 am - SSN - [20190924-0401] - [009] - Quick timelog entry

                $http.get('/api/timelogapi/getTimelog/' + id)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject({ Error: 'Failed call to get timelog [20190829-1819]' });
                            console.error(error);
                        });

                return deferred.promise;
            };



            // 11/19/2019 02:00 am - SSN - [20191119-0048] Created    
            // 11/21/2019 06:26 am - SSN - [20191121-0503] - [004] - Timelog edit options on project search
            // Add servingPage
            var _TimelogRefreshRecord = function (id, servingPage) {

                var deferred = $q.defer();

                $http.get('/api/timelogapi/RefreshRecord/' + id + "?servingPage=" + servingPage)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject({ Error: 'Failed call to get timelog [20191119-0201]' });
                            console.error(error);
                        });

                return deferred.promise;
            };


            var _addDevSite = function (devSite) {

                var deferred = $q.defer();

                $http.post('/api/demositesapi', devSite)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject(error);
                        });

                return deferred.promise;

            };


            // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - editMode div content
            var _updateDevSite = function (devSite) {


                var deferred = $q.defer();

                // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 
                // 09/24/2019 03:38 am - SSN - Logic error - updating wrong link
                //       $http.post('/api/demositesapi', devSite)
                $http.post('/api/demositesapi', devSite)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {
                            deferred.reject(error);
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
            // 11/27/2019 09:14 am - SSN - Pass projectId
            var _getJobs = function (columnBag: IColumnBagTemp.default) {

                var deferred = $q.defer();

                // 09/22/2019 08:23 am - SSN - [20190922-0822] - [001] - Plug in job status filter on job's index - update data source

                var job_statuses_selected = ((columnBag.job_statuses_selected.length == 0) ? "nothing-201909221117" : columnBag.job_statuses_selected.join(','));


                $http.get('/api/jobapi/list/' + columnBag.currentPageNo + "/" + columnBag.recordsPerPage + "/" + columnBag.columnName + "/" + columnBag.desc + "/" + job_statuses_selected + "?projectId="
                    + columnBag.fk_filter)

                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get jobs [20190917-0057]' });
                        });

                return deferred.promise;
            };


            // 09/30/2019 07:06 pm - SSN - Adding
            var _getJob = function (id) {

                var deferred = $q.defer();

                // 06/08/2021 10:52 pm - SSN - [20210608-2247] - [002] - Test line item -  Prep for deployment
                // $http.get('/api/jobapi/get_custom/' + id)
                $http.get('/api/jobapi/getJob/' + id)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get job [20190930-1908]' });
                        });

                return deferred.promise;
            };




            // 09/21/2019 01:25 pm - SSN - [20190921-1129] - [003] - Plug in job status filter on job's index

            var _getJob_Statuses = function () {

                var deferred = $q.defer();

                $http.get('/api/job_statusAPI/')
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get job_statuses [20190921-1326' });
                        });

                return deferred.promise;
            };





            // 11/22/2019 04:06 pm - SSN - [20191121-0503] - [018] - Timelog edit options on project search

            var _ProjectsSearchRefreshRecord = function (id, servingPage) {

                var deferred = $q.defer();

                $http.get('/api/ProjectAPI/refreshrecord/' + id + "?servingPage=" + servingPage)
                    .then(function (result) {
                        deferred.resolve(result.data);
                    },
                        function (errorMessage) {
                            deferred.reject({ Error: 'Failed call to get project search record  [20191122-1608] [' + id + '] [' + servingPage + ']' });
                            console.error(errorMessage);
                        });

                return deferred.promise;
            };





            // 06/07/2021 06:22 am - SSN - [20210606-0227] - [015] - Testng for deployment

            var addOrUpdateJob_LineItem = function (job_LineItem) {


                var deferred = $q.defer();

                $http.post('/api/job_lineItemAPI', job_LineItem)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            deferred.reject(error);
                        });

                return deferred.promise;

            };



            // 06/15/2021 06:00 pm - SSN - [20210613-0452] - [049] - Adding tags to DevSite

            var addOrUpdateTechnology = function (technology: ITechnology) {


                var deferred = $q.defer();

                $http.post('/api/technologyAPI', technology)
                    .then(function (result) {

                        console.log('%c ' + 'DataServices - TechnlogyAPI - 20220424-2058-ZZZ - Success', 'font-size:12pt;color:green;');
                        console.dir(result);


                        deferred.resolve(result.data);
                    },
                        function (error) {

                            console.log('%c ' + 'DataServices - TechnlogyAPI - 20220424-2059 - Failure', 'font-size:14pt;color:red;');
                            deferred.reject(error);
                        });

                return deferred.promise;

            };

            // Todo-SSN - 06/23/2021 04:10 am - SSN - [20210623-0158] - [007] - Limit user access to their timesheet records

            function getHttpGetPromise(url) {

                var deferred = $q.defer();
                $http.get(url)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            deferred.reject({ Error: 'Failed call to get current user [20210623-0413]' });

                            console.log(`%c 20210623-0415:  Error calling ${url}`)
                            console.error(error);


                        });

                return deferred.promise;
            }




            function getHttpPostPromise(url, body) {

                var deferred = $q.defer();

                $http.post(url, body)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            deferred.reject(error);
                        });

                return deferred.promise;

            }


            // 06/16/2021 08:42 pm - SSN - [20210613-0452] - [105] - Adding tags to DevSite
            function getHttpDeletePromise(url, id) {

                var deferred = $q.defer();

                $http.delete(`${url}/${id}`)
                    .then(function (result) {

                        deferred.resolve(result.data);
                    },
                        function (error) {

                            deferred.reject(error);
                        });

                return deferred.promise;

            }


            // 06/16/2021 02:59 am - SSN - [20210613-0452] - [061] - Adding tags to DevSite

            var addDevSiteTechnology = function (devSiteTechnology: IDevSiteTechnology) {

                console.log('%c ' + 'addDevSiteTechnology - 20220424-0925', 'font-site:12pt;color:yellow;');
                console.log('%c ' + 'devSiteTechnology record: ');
                console.dir(devSiteTechnology);

                return getHttpPostPromise('/api/DevSitetechnologyAPI/post_custom', devSiteTechnology);

            };


            // 06/16/2021 08:33 pm - SSN - [20210613-0452] - [103] - Adding tags to DevSite

            var deleteDevSiteTechnology = function (id: number) {

                return getHttpDeletePromise('/api/DevSitetechnologyAPI', id);

            };


            // Todo-SSN - 06/23/2021 04:17 am - SSN - [20210623-0158] - [008] - Limit user access to their timesheet records
            const getCurrentUser = function () {
                return getHttpGetPromise('/api/IdentitySupport/GetCurrentUser');
            }



            return {

                getDevSites: _getDevSites,
                getDevSite: _getDevSite,
                getDevSitesCount: _getDevSitesCount,
                addDevSite: _addDevSite,
                // 09/06/2019 04:44 pm - SSN - [20190906-0518] - [002] - Angular - editMode div content
                updateDevSite: _updateDevSite,

                insertTimeLog: _insertTimeLog,
                getTimelog: _getTimelog,
                updateTimeLog: _addOrUpdateTimeLog,
                getJobs: _getJobs,
                getJob_Statuses: _getJob_Statuses,
                getJob: _getJob,
                timelogRefreshRecord: _TimelogRefreshRecord,
                projectsSearchRefreshRecord: _ProjectsSearchRefreshRecord,
                addOrUpdateJob_LineItem,
                addOrUpdateTechnology,
                addDevSiteTechnology,
                deleteDevSiteTechnology,
                getCurrentUser

            };


        }]);
    };

    return {
        //        ssn_devsite_angular_module: ssn_devsite_angular_module
        doSetup: doSetup
    };


}();



export { dataService_instance };


