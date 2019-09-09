// 09/01/2018 01:21 pm - SSN
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module
// 05/04/2019 09:26 am - SSN - [20190504-0855] - [004] - Testing if we can replace global variable
// Convert to TypeScript
// 05/04/2019 09:58 am - SSN - Since having to import angular when converting to a module
///// <reference path="../../../node_modules/@types/angular/index.d.ts" />
// 05/04/2019 08:55 am - SSN - [20190504-0855] - [001] - Testing if we can replace global variable
// Convert to TypeScript
// var ssn_devsite_angular_module = angular.module("demoSites_Index", []);
// Pass angulat module as a parameter. Create function
ssn_devsite_angular_module.factory("dataService", function ($http, $q) {
    var _devSites = [];
    var _getDevSites = function () {
        var deferred = $q.defer();
        $http.get('/api/demositesapi')
            .then(function (result) {
            angular.copy(result.data, _devSites);
            deferred.resolve();
        }, function () {
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
        }, function (errorMessage) {
            deferred.reject({ Error: 'Failed call to get timelog [20190829-1819]' });
        });
        return deferred.promise;
    };
    var _addDevSite = function (devSite) {
        var deferred = $q.defer();
        $http.post('/api/demositesapi', devSite)
            .then(function (result) {
            deferred.resolve(result.data);
        }, function () {
            deferred.reject();
        });
        return deferred.promise;
    };
    // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - edit div content
    var _updateDevSite = function (devSite) {
        var deferred = $q.defer();
        $http.post('/api/demositesapi', devSite)
            .then(function (result) {
            deferred.resolve(result.data);
        }, function () {
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
        }, function (error) {
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
        }, function (error) {
            deferred.reject(error);
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
        updateTimeLog: _addOrUpdateTimeLog
    };
});
//# sourceMappingURL=DataServices.js.map