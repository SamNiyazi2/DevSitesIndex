/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import * as ssn_globals from "../globals";
// 09/21/2019 05:21 am - SSN - [20190921-0357] - [007] - Creating multiple entry for Webpack
var headerWithSort_instance = function () {
    var headerWithSort_angular_module = ssn_globals.globals_instance.getInstance_v002('HeaderWithSort', "timesheetApp");
    headerWithSort_angular_module.controller('utilityController', ['$scope', '$sce', 'dataService', function ($scope, $sce, dataService) {
        }]);
    headerWithSort_angular_module.directive('headerWithSort', ['$sce', function ($sce) {
            return {
                restrict: "A",
                templateUrl: "/js/Util/headerWithSort.html",
                scope: {
                    columnlist: "=columnlist", sortmethod: "&"
                },
                link: function (scope, el, attrs) {
                    scope.sort = function () {
                        scope.sortmethod();
                    };
                    scope.displayArrow = function () {
                        switch (this.columnlist.desc) {
                            case true:
                                return $sce.trustAsHtml("&#9650;");
                                break;
                            case false:
                                return $sce.trustAsHtml("&#9660;");
                                break;
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
//# sourceMappingURL=HeaderWithSort.js.map