

// 12/15/2019 01:33 pm - SSN - [20191213-1145] - [008] - Adding Karma Jasmine testing for AngularJS


////angular.module('movieApp', []);

////angular.module('movieApp')
////    .controller(['$scope', '$location', 'SearchController', function SearchController($scope, $location) {

////        //        $scope.search = function () {

////        //            if ($scope.query) {

////        ////                $location.path('/results').search('q', $scope.query);
////        //            }
////        //        }
////    }]);




//(function () {
//    'use strict';

// Creating the module and factory we referenced in the beforeEach blocks in our test file
angular.module('api.users', [])
    .factory('Users', function () {
        var Users = {};


        var userList = [
            {
                id: '1',
                name: 'Jane',
                role: 'Designer',
                location: 'New York',
                twitter: 'gijane'
            },
            {
                id: '2',
                name: 'Bob',
                role: 'Developer',
                location: 'New York',
                twitter: 'billybob'
            },
            {
                id: '3',
                name: 'Jim',
                role: 'Developer',
                location: 'Chicago',
                twitter: 'jimbo'
            },
            {
                id: '4',
                name: 'Bill',
                role: 'Designer',
                location: 'LA',
                twitter: 'dabill'
            }
        ];



        // Users.method = function() {};
        Users.all = function () {
            return userList;
        };
        return Users;
    });
//})();





var sampleApp = angular.module('sampleApp', []);

sampleApp.controller(['$scope', 'AngularJSController', function ($scope) {
    $scope.ID = 5;
}]);





var app = angular.module('navApp', []);

app.controller(['$scope', '$location', 'NavCtrl', function ($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    };
}]);







angular.module('authoring-controllers', []).
    controller(['$scope', '$location' , 'BasketNavigationService', 'NavCtrl', function ($scope, $location, BasketNavigationService) {

        $scope.test = function () {
            $scope.testVar = BasketNavigationService.showBasketList();
        };
    }]);