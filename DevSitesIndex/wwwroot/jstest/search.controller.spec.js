
// 12/16/2019 08:44 am - SSN - [20191216-0844] - [001] - M04-21-03 - Redo - Unit testing a controller

describe('PS - 3 - Search controller', function () {

    var $scope;
    var $location;

    beforeEach(function () {

            angular.mock.module('movieApp');

    });

    beforeEach(

        function () {

        



            //inject(function (_$controller_, _$location_) {

            //    $scope = {};

            //    $location = _$location_;
            //    _$controller_('SearchController', { $scope: $scope, $location: $location });

            //});

        }

    );


    it('should redirect to the query results page for non-empty query', function () {


        angular.mock.module('movieApp');

        inject(['$controller', '$location', function (_$controller_, _$location_) {

            $scope = {};

            $location = _$location_;

            $controller = _$controller_;
            
            $controller('SearchController', { $scope: $scope, $location: $location });

        }]);



        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');

    });


    //it('should not redirect to the query results page for empty query', function () {

    //    $scope.query = '';
    //    $scope.search();
    //    var results = $location.url() || $location.url('/');
    //    expect(results).toBeTruthy();

    //});


});
