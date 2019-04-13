// 09/01/2018 01:21 pm - SSN

// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module

ssn_devsite_angular_module.factory("dataService", function ($http, $q) {

    var _devSites = [];

    var _getDevSites = function () {

        var deferred = $q.defer();

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



    return {

        devSites: _devSites,
        getDevSites: _getDevSites,
        addDevSite: _addDevSite,
        insertTimeLog: _insertTimeLog
    };


});
