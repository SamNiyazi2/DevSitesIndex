// 09/17/2019 09:31 am - SSN - [20190917-0929] - [001] - Adding paging for angular lists
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
import * as ssn_globals from '../globals';
// 09/21/2019 05:07 am - SSN - [20190921-0357] - [004] - Creating multiple entry for Webpack
var pagingDirective_instance = function () {
    var pagingDirective_angular_module = ssn_globals.default.getInstance("timesheetApp");
    pagingDirective_angular_module.controller('utilityController', function ($scope, dataService) {
    });
    pagingDirective_angular_module.directive('pagingDirective', function ($timeout) {
        return {
            restrict: "A",
            templateUrl: "/js/Util/pagingDirective.html",
            scope: {
                pagingmethod: "&",
                databag: "=",
                sqlstatsrecord: "="
            },
            link: function (scope, el, attrs) {
                scope.sayWhatPageWeAreOn = "";
                scope.init101 = function () {
                    setupButtons();
                };
                function getTotalPageCount() {
                    return Math.ceil(scope.sqlstatsrecord.totalRecordCount / scope.sqlstatsrecord.recordsPerPage);
                }
                function setupButtons() {
                    var totalPageCount = getTotalPageCount();
                    scope.previousdisabled = scope.sqlstatsrecord.currentPageNo <= 1;
                    scope.nextdisabled = scope.sqlstatsrecord.currentPageNo >= totalPageCount;
                    if (totalPageCount > 0) {
                        scope.sayWhatPageWeAreOn = "Page " + scope.sqlstatsrecord.currentPageNo + " of " + totalPageCount;
                    }
                    else {
                        scope.sayWhatPageWeAreOn = "No records.";
                    }
                    $timeout(scope.init101, 1000); // to pickup actual values after API call to get data, just in case!!!
                }
                scope.onPrevious = function () {
                    this.sqlstatsrecord.currentPageNo = this.sqlstatsrecord.currentPageNo > 1 ? this.sqlstatsrecord.currentPageNo - 1 : 1;
                    scope.pagingmethod();
                    setupButtons();
                };
                scope.onNext = function () {
                    var totalPageCount = getTotalPageCount();
                    this.sqlstatsrecord.currentPageNo = this.sqlstatsrecord.currentPageNo < totalPageCount ? this.sqlstatsrecord.currentPageNo + 1 : totalPageCount;
                    scope.pagingmethod();
                    setupButtons();
                };
                scope.init101();
            }
        };
    });
    return {
        pagingDirective_angular_module: pagingDirective_angular_module
    };
}();
export { pagingDirective_instance };
//# sourceMappingURL=pagingDirective.js.map