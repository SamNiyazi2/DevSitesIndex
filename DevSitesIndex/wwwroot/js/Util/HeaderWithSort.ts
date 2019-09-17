
// 09/17/2019 02:04 am - SSN - [20190916-1123] - [018] - Adding job status

/// <reference path="../../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>

declare var headerWithSort_angular_module: any;

headerWithSort_angular_module = angular.module("timesheetApp");

'use strict';

headerWithSort_angular_module.controller('utilityController', function ($scope, dataService) {


    console.log("headerWithSort - UtilityController");



    $scope.sortMethod101 = function (column) {
        console.log("Calling sort method [20190917-0554-bbbb");

        console.log("Calling sort ************************** 3");

        console.log(column);

        return dataService.getJobs(1, 10, column.column, column.desc);
        


    }

});


headerWithSort_angular_module.directive('headerWithSort', function () {



    return {

        restrict: "A",

        //transclude: true,
        templateUrl: "/js/Util/headerWithSort.html"

        ,
        scope: {
            columnlist: "=columnlist", sortmethod: "&", datasource: "="}

            ,
            link: function (scope, el, attrs) {


                scope.sort = function (column) {

                                        // Duplicate [20190917-0541] - begin
                    

                    scope.sortmethod();
                    
                    return;
                 //   .then(getJobsSuccess, getJobsError).catch(getTimelogCatch);

                 


                    function getJobsSuccess(data) {
                         
                        scope.datasource = data;
              
                      

                    }

                    function getJobsError(data) { var temp = data; }

                    function getTimelogCatch(data) { var temp = data; }
                    // Duplicate [20190917-0541] - End

                }
 

            }
        };

    });
