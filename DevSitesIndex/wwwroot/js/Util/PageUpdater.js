import { globals_instance } from "../globals";
// 11/20/2019 04:29 am - SSN - [20191120-0429] - [001] - Timelog index clock-out refresh updated row
// Refactor [20191120-0438]
var PageUpdater_Instance = function () {
    var doSetup = function (currentApplication) {
        var pageUpdater_Module = globals_instance.getInstance(currentApplication);
        pageUpdater_Module.factory('PageUpdaterService', ['$rootScope', 'dataService', function ($rootScope, dataService) {
                // 11/21/2019 06:28 am - SSN - [20191121-0503] - [005] - Timelog edit options on project search
                // Adding servingPage
                var _timelog_index = function (id_temp, servingPage) {
                    console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
                    dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                    console.log('PageUpdater - timelog_index - 002 ');
                    function refreshRecord_Sucess(result) {
                        console.log('PageUpdater - timelog_index - 003 ');
                        console.log(result);
                        var tr_1_id_jq = "#" + result.tr_1_id;
                        var tr_2_id_jq = "#" + result.tr_2_id;
                        $(tr_2_id_jq).remove();
                        $(tr_1_id_jq).replaceWith(result);
                        console.log('PageUpdater - timelog_index - 005 - broadcast ');
                        $rootScope.$broadcast('TimeLog_Index_Refresh', { id: id_temp, servingPage: servingPage });
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
console.log('PageUpdater - Loaded');
//# sourceMappingURL=PageUpdater.js.map