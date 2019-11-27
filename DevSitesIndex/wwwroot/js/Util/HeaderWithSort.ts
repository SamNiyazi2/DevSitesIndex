
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />


// 09/17/2019 02:04 am - SSN - [20190916-1123] - [018] - Adding job status


import * as angular from 'angular'

import * as ssn_globals from "../globals";


interface iFixScope extends ng.IScope {

    sort(): any,
    sortmethod(): any,
    displayArrow(): string
}



// 09/21/2019 05:21 am - SSN - [20190921-0357] - [007] - Creating multiple entry for Webpack


var headerWithSort_instance = function () {


    var headerWithSort_angular_module: angular.IModule = ssn_globals.globals_instance.getInstance_v002('HeaderWithSort', "timesheetApp");


    headerWithSort_angular_module.controller('utilityController', ['$scope', '$sce', 'dataService', function ($scope, $sce, dataService) {

    }]);


    headerWithSort_angular_module.directive('headerWithSort', ['$sce', function ($sce) {

        return {

            restrict: "A",
            templateUrl: "/js/Util/headerWithSort.html",
            scope: {
                columnlist: "=columnlist", sortmethod: "&"
            }
            ,
            link: function (scope: iFixScope, el, attrs) {

                scope.sort = function () {
                    console.log("headerWithSort - 20190921-0613 - ");
                    scope.sortmethod();

                };

                scope.displayArrow = function () {
                    ////////////////////////////////////////////xxxxxx      console.log("headerWithSort - 20191110-0749 - [", this.columnlist.desc, "]", this.columnlist.columnName,  Date());
                    switch (this.columnlist.desc) {
                        case true:
                            return $sce.trustAsHtml("&#9650;"); break;
                        case false:
                            return $sce.trustAsHtml("&#9660;"); break;
                        default:
                            return "";
                    }

                };


            }
        };

    }]);


    return {
        headerWithSort_angular_module: headerWithSort_angular_module
    };


}();

export { headerWithSort_instance };

