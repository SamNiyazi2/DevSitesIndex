// 11/14/2019 07:31 pm - SSN - [20191114-1931] - [001] - Job - option to change job status
import * as ssn_globals from "../globals";
var jobStatusChangeRecord_instance = function () {
    var angular_Module = ssn_globals.globals_instance.getInstance_v002('JobstatusChangedRecord', "timesheetApp");
    angular_Module.directive('jobStatusChangeRecord', function () {
        var parentTable = null;
        return {
            templateUrl: '/js/Jobs/jobStatusChangeRecord.html',
            scope: {
                actionLink: '@',
                optionLabel: '@'
            },
            link: function (scope, el, attrs) {
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
                    return windowName1;
                };
            }
        };
    });
    return {
        angular_Module: angular_Module
    };
}();
export { jobStatusChangeRecord_instance };
//# sourceMappingURL=JobStatusChangeRecord.js.map