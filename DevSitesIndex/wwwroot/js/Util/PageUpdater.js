import { globals_instance } from "../globals";
// 11/20/2019 04:29 am - SSN - [20191120-0429] - [001] - Timelog index clock-out refresh updated row
// Refactor [20191120-0438]
var PageUpdater_Instance = function () {
    var doSetup = function (currentApplication) {
        var pageUpdater_Module = globals_instance.getInstance_v002('PageUpdater', currentApplication);
        pageUpdater_Module.factory('PageUpdaterService', ['$rootScope', 'dataService', function ($rootScope, dataService) {
                // 11/21/2019 06:28 am - SSN - [20191121-0503] - [005] - Timelog edit options on project search
                // Adding servingPage
                var _timelog_index = function (id_temp, servingPage) {
                    dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                    function refreshRecord_Sucess(result) {
                        $rootScope.$broadcast('TimeLog_Index_Refresh', result);
                    }
                    function refreshRecord_Error(result) {
                        console.error(result);
                    }
                };
                return {
                    timelog_index: _timelog_index
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { PageUpdater_Instance };
//# sourceMappingURL=PageUpdater.js.map