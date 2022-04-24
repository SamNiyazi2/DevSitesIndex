
// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp


import * as ssn_globals from "../globals";


var timesheetApp_instance = function () {



    // 05/03/2019 06:33 pm - SSN - [20190503-1539] - [013] - Add link to create timelog
    // Convert to TS



    var timesheetApp = ssn_globals.globals_instance.getInstance_v002('TimesheetApp-filename', "timesheetApp");



    // 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js


    // 11/14/2019 03:35 pm - SSN - [20191114-1459] - [005] - ChangeMonitroService
    // Inject changeMonitorService

    timesheetApp.controller("timesheetController", ['$scope', '$timeout', '$uibModal', 'changeMonitorService', '$compile', 'ssn_logger', 'dataService', function ($scope, $timeout, $uibModal, changeMonitorService, $compile, ssn_logger, dataService) {





        // 11/19/2019 06:43 am - SSN - [20191119-0048] Added to re-bind ng-click

        $scope.$on('TimeLog_Index_Refresh', function (event, item) {

            $("#" + item.tr_2_id).remove();

            $("#" + item.tr_1_id).replaceWith(item.html);

            $compile($("#" + item.tr_1_id).contents())($scope);

            hightlightRawsAffected(item);


        });


        $scope.$on('TimeLog_Index_Insert', function (event, item) {

            $("#timesheet_index_tbody").prepend(item.html);


            $compile($("#" + item.tr_1_id).contents())($scope);


            document.querySelector('#topOfTimesheetTable').scrollIntoView({
                behavior: 'smooth'
            });


            hightlightRawsAffected(item);


        });



        function hightlightRawsAffected(item) {


            // We assume that the logic remains the same for naming rows.  Bad idea!
            const rowId1 = item.tr_1_id;
            const rowId2 = item.tr_1_id.substring(0, item.tr_1_id.length - 1) + '2';

            $("#" + rowId1).addClass("cssHilight102");
            $("#" + rowId2).addClass("cssHilight102");

        }


        // Todo-SSN - 06/23/2021 05:51 am - SSN - [20210623-0158] - [012] - Limit user access to their timesheet records
        $scope.currentUser = null;
        $scope.callingService = false;
        $scope.CounterCallSource = 0;
 
        $scope.userHasAccess = function () {

            if ($scope.callingService) { return false; }

            if ($scope.CounterCallSource < 4) {

                if ($scope.currentUser == null) {
                    
                    $scope.CounterCallSource++;

                    $scope.callingService = true;
                    dataService.getCurrentUser().then(getCurrentUserSuccess, getCurrentUserError).catch(getCurrentUserCatch);
                }

            } 

             return $scope.currentUser && $scope.currentUser.isAuthenticated ;


            function getCurrentUserSuccess(data) {
 
                $scope.currentUser = data;
                $scope.callingService = false;

            };


            function getCurrentUserError(error) {

                console.log('%c getCurrentUser error - 20210623-0609 ', 'color:red;font-size:14pt');
                console.log(error);

                $scope.currentUser = null;
                $scope.callingService = false;
                
                ssn_logger.cl_error({ callSource: "20210623-0744", message: `Call to getCurrentUser failed.`, errorObject: error });


            };


            function getCurrentUserCatch(error) {

                console.log('%c getCurrentUser error - 20210623-0610 ', 'color:red;font-size:14pt');
                console.log(error);
                $scope.currentUser = null;
                $scope.callingService = false;


                ssn_logger.cl_error({ callSource: "20210623-0745", message: `Call to getCurrentUser failed.`, errorObject: error });

            };



        }

        $scope.timesheetForm_ClockOut = function (timelogId) {


            // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue

            // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
            // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
            //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'


            let modalClockout = $uibModal.open({
                templateUrl: '/js/timesheet/templates/TimelogClockout.html',
                controller: 'TimesheetClockOutController',
                windowClass: 'ssn-mobile-modal',

                backdrop: 'static',
                keyboard: false,


                resolve: {
                    timelogId: function () {
                        return timelogId;
                    }
                }
            });



            // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService

            modalClockout.result.then(modalClockout_save, modalClockout_cancel);

            function modalClockout_save(result) {


                ssn_logger.cl_normal({ callSource: "20210619-0626", message: "Closing modalClockout" }, "red", true);



                changeMonitorService.reset();
            }



            function modalClockout_cancel(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0627", message: "Cancel modalClockout" }, "yellow", true);

                changeMonitorService.reset();
            }



        };


        // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option


        $scope.timesheetForm_ClockContinue = function (timelogId) {



            // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option

            // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 

            let TimesheetContinueController_modal = $uibModal.open({

                animation: 'slide-in-up',
                templateUrl: '/js/timesheet/templates//timesheetTemplate.html?v=' + $scope.versionForHTMLRefresh,
                controller: 'TimesheetContinueController',
                windowClass: 'ssn-mobile-modal',

                backdrop: 'static',
                keyboard: false,

                resolve: {
                    timelogId: function () {
                        return timelogId;
                    }
                }
            });



            modalClosingHook($scope);

            // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService


            TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);

            function TimesheetContinueController_modal_save(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0628-A", message: "save TimesheetContinue" }, "yellow", true);
                ssn_logger.cl_normal({ callSource: "20210619-0628-B", message: result }, "yellow", true);

                changeMonitorService.reset();

            }

            function TimesheetContinueController_modal_cancel(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0629", message: "cancel TimesheetContinue" }, "yellow", true);
                ssn_logger.cl_normal({ callSource: "20210619-0629-B", message: result }, "yellow", true);
                changeMonitorService.reset();

            }


        };


        // 11/14/2019 04:41 pm - SSN - [20191114-1459] - [008] - ChangeMonitroService
        // Testing - Not working.

        function modalClosingHook($scope) {


            $scope.$on('modal.closing', function (event, reason, closed) {

                ssn_logger.cl_normal({ callSource: "20210619-0630-A", message: "Modal closing hook" }, "yellow", true);
                ssn_logger.cl_normal({ callSource: "20210619-0630-B", message: reason }, "yellow", true);
                ssn_logger.cl_normal({ callSource: "20210619-0630-C", message: closed }, "yellow", true);

                var message = "You are about to leave the edit view. Uncaught reason. Are you sure?";

                switch (reason) {
                    // clicked outside
                    case "backdrop click":
                        message = "Any changes will be lost, are you sure?";
                        break;

                    // cancel button
                    case "cancel":
                        message = "Any changes will be lost, are you sure?";
                        break;

                    // escape key
                    case "escape key press":
                        message = "Any changes will be lost, are you sure?";
                        break;
                }
                if (!confirm(message)) {
                    event.preventDefault();
                }
            });


        }


        // 06/08/2021 11:01 pm - SSN - [20210608-2247] - [003] - Test line item -  Prep for deployment

        // jobId to timelogId_v01

        $scope.showCreateTimesheetForm = function (timelogId_v01) {


            if (isNaN(timelogId_v01)) {
                timelogId_v01 = 0;
            }

            // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog

            // 06/19/2021 06:31 am - SSN - Capture open return results
            const showCreateTimesheetForm_modal = $uibModal.open({

                templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                controller: 'TimesheetController',

                backdrop: 'static',
                keyboard: false,

                resolve: {
                    timelogId_v01: function () {
                        return timelogId_v01;
                    }
                }
            });


            showCreateTimesheetForm_modal.result.then(showCreateTimesheetForm_modal_save, showCreateTimesheetForm_modal_cancel);

            function showCreateTimesheetForm_modal_save(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0633", message: "save showCreateTimesheetForm" }, "yellow", true);

                changeMonitorService.reset();

            }

            function showCreateTimesheetForm_modal_cancel(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0634", message: "save showCreateTimesheetForm" }, "red", true);

                changeMonitorService.reset();

            }




        }





        // 11/16/2019 04:35 pm - SSN - [20191116-1516] - [002] - Timelog edit (AngularJS client version)


        $scope.timesheetForm_Edit = function (timelogId) {


            let modalEdit = $uibModal.open({

                templateUrl: '/js/timesheet/templates/TimelogClockout.html',  // using same html
                controller: 'TimesheetEditController',


                backdrop: 'static',
                keyboard: false,


                resolve: {
                    timelogId: function () {
                        return timelogId;
                    }
                }
            });



            modalEdit.result.then(modalEdit_save, modalEdit_cancel);

            function modalEdit_save(result) {



                ssn_logger.cl_normal({ callSource: "20210619-0639", message: "save TimesheetEditController" }, "yellow", true);

                changeMonitorService.reset();

            }



            function modalEdit_cancel(result) {

                ssn_logger.cl_normal({ callSource: "20210619-0640", message: "save TimesheetEditController" }, "red", true);
                changeMonitorService.reset();
            }



        };



    }]);
























    return {
        timesheetApp: timesheetApp
    };


}();



// 09/21/2019 03:58 am - SSN - [20190921-0357] - [002] - Creating multiple entry for Webpack

export { timesheetApp_instance };
