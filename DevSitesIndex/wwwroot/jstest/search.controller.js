
// 12/16/2019 10:53 am - SSN - [20191216-0844] - [002] - M04-21-03 - Redo - Unit testing a controller

console.log("Loading search.controller.js");

angular.module('movieApp', [])
    .controller( 'SearchController' , function( $scope, $location ){

        console.log("Loading search.controller.js - In controller ");

        $scope.search = function() { 

            if ( $scope.query ) {
                $location.path('/results').search('q',$scope.query);
            }
        }

    });



