import { globals_instance } from "../globals";

// 11/20/2019 04:29 am - SSN - [20191120-0429] - [001] - Timelog index clock-out refresh updated row

// Refactor [20191120-0438]
var PageUpdater_Instance = function () {


    var doSetup = function (currentApplication) {

        var pageUpdater_Module = globals_instance.getInstance(currentApplication);

        pageUpdater_Module.factory('PageUpdaterService', ['$rootScope', 'dataService', function ($rootScope, dataService) {


            var _timelog_index = function (id_temp) {

                console.log('PageUpdater - timelog_index - 001 [', id_temp, ']');

                dataService.timelogRefreshRecord(id_temp).then(refreshRecord_Sucess, refreshRecord_Error);

                console.log('PageUpdater - timelog_index - 002 ');


                function refreshRecord_Sucess(result) {

                    console.log('PageUpdater - timelog_index - 003 ');

                    let tr_1_id_jq = "#model_" + id_temp + "_a";
                    let tr_2_id_jq = "#model_" + id_temp + "_b";

                    $(tr_2_id_jq).remove();

                    $(tr_1_id_jq).replaceWith(result);

                    console.log('PageUpdater - timelog_index - 005 - broadcast ');

                    $rootScope.$broadcast('TimeLog_Index_Refresh', id_temp);

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
