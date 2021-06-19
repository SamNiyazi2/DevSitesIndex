

// 06/18/2021 12:02 am - SSN - Updating timesheet table on insert/update

import { globals_instance } from "../globals";
import * as ssn_globals from "../globals";

 

const Timesheet_Table_Refresh_Service = function () {

    const angularApp = globals_instance.getInstance_v002('Timesheet_table_refresh', "timesheetApp");


    angularApp.config(['$provide', function ($provide) {


        $provide.factory('TimesheetTableRefreshController', ['$rootScope', 'dataService', 'ssn_logger', function ($rootScope, dataService, ssn_logger) {

            return {

                refreshTimesheetTable: function (servingPage: ssn_globals.Timelog_ServingPage, timelogId: number, newRecord: boolean) {


                    let haveMatch_on_servingPage = false;


                    if (
                        ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Timelog)
                        ||
                        ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Job_Timelog)
                    ) {
                        dataService.timelogRefreshRecord(timelogId, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                        haveMatch_on_servingPage = true;
                    }


                    if (ssn_globals.Timelog_ServingPage_checkvalue(servingPage, ssn_globals.Timelog_ServingPage.Projects_Search)) {
                        dataService.projectsSearchRefreshRecord(timelogId, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
                        haveMatch_on_servingPage = true;
                    }


                    if (!haveMatch_on_servingPage) {
 
                        ssn_logger.cl_error({ callSource: 'DemoSite-20210618-0450', message: `No match for servingPage [${servingPage}]` });

                    }



                    function refreshRecord_Sucess(result) {

                        if (newRecord) {
                            $rootScope.$broadcast('TimeLog_Index_Insert', result);
                        } else {
                            $rootScope.$broadcast('TimeLog_Index_Refresh', result);
                        }

                    }

                    function refreshRecord_Error(result) {

                        console.log('%c Timesheet_Table_Refresh - 20210618-0050 - Failed to refresh timesheet record', 'color:red;font-size:12pt');
                        console.error(result);

                        ssn_logger.cl_error({ callSource: 'DemoSite-20210618-0449', message: 'Failed to refresh timesheet record'});


                    }

                     


                }
            };
        }]);





    }]);

}();

export { Timesheet_Table_Refresh_Service };


