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
        devSites: _devSites,
        getDevSites: _getDevSites,
        addDevSite: _addDevSite,
        insertTimeLog: _insertTimeLog,
        getTimelog: _getTimelog,
        addOrUpdateTimeLog: _addOrUpdateTimeLog
    };
});
//# sourceMappingURL=DataServices.js.map