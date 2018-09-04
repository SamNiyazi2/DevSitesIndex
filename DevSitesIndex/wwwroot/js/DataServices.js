// 09/01/2018 01:21 pm - SSN

module.factory("dataService", function ($http, $q) {

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

        $http.post('/api/demositesapi', devSite )
            .then(function (result) {

                deferred.resolve(result.data);
            },
            function () {
                deferred.reject();
            });

        return deferred.promise;

    };



    return {

        devSites: _devSites,
        getDevSites: _getDevSites,
        addDevSite: _addDevSite
    };


});
