import { globals_instance } from "../globals";
// 09/24/2019 09:38 am - SSN - [20190924-0731] - [008] - Project search option
// 11/22/2019 01:40 pm - SSN - [20191121-0503] - [012] - Timelog edit options on project search
// Replace incomplete code for project search
var ProjectIndexController_instance = function () {
    var doSetup = function (defaultAppName) {
        var angular_Module = globals_instance.getInstance("timesheetApp");
        angular_Module.controller('ProjectsIndexController', ['$scope', '$compile', function ($scope, $compile) {
                console.log('ProjectsIndexController - new - 20191122-1344');
                // 11/22/2019 01:57 pm - SSN - [20191121-0503] - [014] - Timelog edit options on project search
                $scope.$on('TimeLog_Index_Refresh', function (event, item) {
                    console.log('ProjectsIndex - Firing TimeLog_Index_Refresh - 20191122-1406');
                    console.log('item', item);
                    console.log(item);
                    $("#" + item.tr_2_id).remove();
                    $("#" + item.tr_1_id).replaceWith(item.html);
                    $compile($("#" + item.tr_1_id).contents())($scope);
                });
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { ProjectIndexController_instance };
//# sourceMappingURL=ProjectsIndex.js.map