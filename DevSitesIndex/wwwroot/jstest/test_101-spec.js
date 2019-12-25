
// 12/13/2019 12:23 pm - SSN - [20191213-1145] - [006] - Adding Karma Jasmine testing for AngularJS

// Initial test

//import * as x from '../js/Timesheet/TimesheetController';


describe("Test-101-20191213-1233", function () {

    console.log("Ran test-20191213-1225");

    var $scope;
    var $location;

    // angular.module('movieApp');

    //beforeEach(function () {
    //    angular.module('movieApp');
    //});


    //beforeEach(angular.mock.inject([ '$controller' , '$location' , function (_$controller_, _$location_) {

    //    $scope = {};
    //    $location = _$location_;

    ////    _$controller_( 'SearchController', { $scope: $scope, $location: $location });

    //}]));

    console.log("Ran test-20191213-1506");


    it('should do something', function () {

        console.log("Ran test-20191213-1456");


    });






});













describe('Users factory', function () {
    var Users;

    // Before each test load our api.users module
    beforeEach(angular.mock.module('api.users'));

    // Before each test set our injected Users factory (_Users_) to our local Users variable
    beforeEach(inject(['Users', function (_Users_) {
        Users = _Users_;
    }]));

    // A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(Users).toBeDefined();
    });





    // A simple test to verify the Users service exists
    it('should exist', function () {
        expect(Users).toBeDefined();
    });

    // A set of tests for our Users.all() method
    describe('.all()', function () {
        // A simple test to verify the method all exists
        it('should exist', function () {
            expect(Users.all).toBeDefined();
        });
    });



    //it('should return a hard-coded list of users', function () {
    //    expect(Users.all()).toEqual(userList);
    //});


});













//describe('AngularJSController', function () {

//    beforeEach( angular.mock.module('sampleApp'));

//    var $controller;

//    beforeEach(inject(['$controller', function (_$controller_) {
//        $controller = _$controller_;
//    }]));

//    describe('$scope.ID', function () {

//        it('Check the scope object', function () {
//            var $scope = {};
//            var controller = $controller('AngularJSController', { $scope: $scope });
//            expect($scope.ID).toEqual(5);
//        });
//    });
//});
















//describe('NavCtrl', function () {



//    beforeEach(angular.mock.module('navApp'));

//    var scope, $location, createController;

//    beforeEach(inject(['$rootScope', '$controller', '$location', function ($rootScope, $controller, _$location_) {
//        $location = _$location_;
//        scope = $rootScope.$new();

//        createController = function () {
//            return $controller('NavCtrl', {
//                '$scope': scope
//            });
//        };
//    }]));

//    it('should have a method to check if the path is active', function () {
//        var controller = createController();
//        $location.path('/about');
//        expect($location.path()).toBe('/about');
//        expect(scope.isActive('/about')).toBe(true);
//        expect(scope.isActive('/contact')).toBe(false);
//    });
//});












//describe('NavCtrl', function () {

//    var scope, scope2, $location, createController;

   


//    beforeEach(inject(['$injector', '$rootScope', '$controller', '$location', function ($injector , $rootScope, $controller, _$location_) {

//    //    angular.module('authoring-controllers');

//        $location = _$location_;
//        scope = $rootScope.$new();

//        rootScope = $injector.get('$rootScope');
//        scope2 = rootScope.$new();  


//        createController = function () {
//            return $controller('NavCtrl', {
//                '$scope': scope
//            });
//        };

//        var controller = $injector.get('$controller'); 
//        controller('NavCtrl', { '$scope': scope2 });


//    }]));

//    it('should create $scope.testVar when calling test',
//        function () {
//            expect(scope.testVar).toBeUndefined();
//         //   scope.test();
//            scope2.test();
//            expect(scope.testVar).toBedefined();
//        });
//});

 
