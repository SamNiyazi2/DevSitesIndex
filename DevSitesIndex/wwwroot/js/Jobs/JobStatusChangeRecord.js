// 11/14/2019 07:31 pm - SSN - [20191114-1931] - [001] - Job - option to change job status
import * as ssn_globals from "../globals";
var jobStatusChangeRecord_instance = function () {
    var jobStatusChangeRecord_Module = ssn_globals.globals_instance.getInstance("timesheetApp");
    /////////////////////////////////   jobsIndexController
    // , '$http', '$q', 'dataService', '$timeout', '$sce', '$uibModal'
    // , $http, $q, dataService, $timeout, $sce, $uibModal
    jobStatusChangeRecord_Module.controller('ProjectIndexController', ['$scope',
        function ($scope) {
            console.log('ProjectIndexController- 20191115-1621-A');
        }]);
    jobStatusChangeRecord_Module.directive('jobStatusChangeRecord', function () {
        var parentTable = null;
        return {
            templateUrl: '/js/Jobs/jobStatusChangeRecord.html',
            scope: {
                actionLink: '@',
                optionLabel: '@'
            },
            link: function (scope, el, attrs, ctrl) {
                if (parentTable == null) {
                    parentTable = el.parents('table');
                }
                var parentWidth = parentTable.width() - 20; //  jobStatusChangeRecord_on padding
                el.find('.jobStatusChangeRecord_on').css({ 'width': parentWidth + 'px' });
            },
            controller: function ($scope) {
                $scope.displayContent = false;
                $scope.showContent = function () {
                    $scope.displayContent = !$scope.displayContent;
                };
                $scope.getWindowName = function () {
                    var windowName = this.actionLink.trim();
                    var windowName1 = windowName.replace(/[^a-z|^0-9]*/ig, '');
                    console.log('************************************');
                    console.log('************************************');
                    console.log('************************************');
                    console.log('************************************');
                    console.log(windowName);
                    console.log(windowName1);
                    console.log('');
                    console.log('');
                    return windowName1;
                };
            }
        };
    });
    return {
        jobStatusChangeRecord_Module: jobStatusChangeRecord_Module
    };
}();
export { jobStatusChangeRecord_instance };
//# sourceMappingURL=JobStatusChangeRecord.js.map