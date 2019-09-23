
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />


// 09/17/2019 02:04 am - SSN - [20190916-1123] - [018] - Adding job status


import * as angular from 'angular'

import * as ssn_globals from "../globals";


interface iFixScope extends ng.IScope {

    sort(): any,
    sortmethod(): any
}



// 09/21/2019 05:21 am - SSN - [20190921-0357] - [007] - Creating multiple entry for Webpack


var headerWithSort_instance = function () {


    var headerWithSort_angular_module: angular.IModule = ssn_globals.globals_instance.getInstance("timesheetApp");


    headerWithSort_angular_module.controller('utilityController', function ($scope, dataService) {
         
    });


    headerWithSort_angular_module.directive('headerWithSort', function () {
         
        return {

            restrict: "A",
            templateUrl: "/js/Util/headerWithSort.html",
            scope: {
                columnlist: "=columnlist", sortmethod: "&"
            }
            ,
            link: function (scope: iFixScope , el, attrs) {
                 
                scope.sort = function () {
                    console.log("headerWithSort - 20190921-0613 - ");
                    scope.sortmethod();

                }

            }
        };

    });


    return {
        headerWithSort_angular_module: headerWithSort_angular_module
    };


}();

export { headerWithSort_instance };

