/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import * as ssn_globals from "../globals";
// 09/21/2019 05:21 am - SSN - [20190921-0357] - [007] - Creating multiple entry for Webpack
var headerWithSort_instance = function () {
    var headerWithSort_angular_module = ssn_globals.globals_instance.getInstance("timesheetApp");
    headerWithSort_angular_module.controller('utilityController', ['$scope', 'dataService', function ($scope, dataService) {
        }]);
    headerWithSort_angular_module.directive('headerWithSort', function () {
        return {
            restrict: "A",
            templateUrl: "/js/Util/headerWithSort.html",
            scope: {
                columnlist: "=columnlist", sortmethod: "&"
            },
            link: function (scope, el, attrs) {
                scope.sort = function () {
                    console.log("headerWithSort - 20190921-0613 - ");
                    scope.sortmethod();
                };
            }
        };
    });
    return {
        headerWithSort_angular_module: headerWithSort_angular_module
    };
}();
export { headerWithSort_instance };
//# sourceMappingURL=HeaderWithSort.js.map