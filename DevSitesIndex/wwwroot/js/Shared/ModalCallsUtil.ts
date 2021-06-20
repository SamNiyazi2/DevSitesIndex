
// 06/09/2021 11:52 pm - SSN - [20210608-2247] - [010] - Test line item -  Prep for deployment


import * as angular from 'angular';

import * as ssn_globals from '../globals'

import { globals_instance, Timelog_ServingPage } from "../globals";



const ModalCallsUtil = function () {



    const doSetup = function (callSource, ngApplicationName) {

        const timesheetApp = ssn_globals.globals_instance.getInstance_v002('ModalCallsUtil' + '_X_' + callSource, ngApplicationName);





        timesheetApp.controller('ModalCallSUtilController', ['$scope', 'ssn_logger', '$uibModal','changeMonitorService', 

            function ($scope, ssn_logger, $uibModal, changeMonitorService) {



                //  ssn_logger.cl_normal({ callSource: '20210610-0024', message: 'ModalCallsUtil doSetup' }, 'yellow', true);



                $scope.addNewLineItem = function (jobID, containerViewValue) {


                    ssn_logger.cl_normal({ callSource: '20210610-0043-A', message: 'Calling addNewLineItem' }, 'yellow', true);
                    ssn_logger.cl_normal({ callSource: '20210610-0043-B', message: `jobID [${jobID}]` }, 'yellow', true);
                    ssn_logger.cl_normal({ callSource: '20210610-0043-C', message: `containerViewValue [${containerViewValue}]` }, 'yellow', true);


                    $uibModal.open({
                        templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
                        controller: 'LineItemController',

                        backdrop: 'static',
                        keyboard: false,


                        resolve: {
                            jobId: function () {
                                return jobID;
                            },
                            containerViewValue: function () {
                                return containerViewValue;
                            }
                        }

                    });

                }




                // 06/15/2021 03:25 am - SSN - [20210613-0452] - [040] - Adding tags to DevSite


                $scope.addNewTechnology = function (containerViewValue) {


                    ssn_logger.cl_normal({ callSource: '20210615-0326-A', message: 'Calling addNewTechnology ' }, 'yellow', true); 
                    ssn_logger.cl_normal({ callSource: '20210615-0326-C', message: `containerViewValue [${containerViewValue}]` }, 'yellow', true);


                    $uibModal.open({
                        templateUrl: '/js/Technology/TechnologyCreate.html',
                        controller: 'TechnologyController',

                        backdrop: 'static',
                        keyboard: false,


                        resolve: {
                            
                            containerViewValue: function () {
                                return containerViewValue;
                            }
                        }

                    });

                }












                // 06/20/2021 08:15 am - SSN - Moved from TimelogLinkOptions.ts



                // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                // Add servingPage

                $scope.timesheetForm_Edit = function (timelogId, servingPage: Timelog_ServingPage) {


                    let modalEdit = $uibModal.open({

                        templateUrl: '/js/timesheet/templates/TimelogClockout.html',  // using same html
                        controller: 'TimesheetEditController',


                        backdrop: 'static',
                        keyboard: false,


                        resolve: {
                            timelogId: function () {
                                return timelogId;
                            },
                            servingPage: function () {
                                return servingPage;
                            }

                        }
                    });



                    modalEdit.result.then(modalEdit_save, modalEdit_cancel);

                    function modalEdit_save(result) {

                        changeMonitorService.reset();

                    }



                    function modalEdit_cancel(result) {

                        changeMonitorService.reset();
                    }


                }



                // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                // Add servingPage

                $scope.timesheetForm_ClockOut = function (timelogId, servingPage: Timelog_ServingPage) {


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
                            },
                            servingPage: function () {
                                return servingPage;
                            }

                        }
                    });



                    // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService

                    modalClockout.result.then(modalClockout_save, modalClockout_cancel);

                    function modalClockout_save(result) {

                        changeMonitorService.reset();

                    }



                    function modalClockout_cancel(result) {

                        changeMonitorService.reset();

                    }


                };




                // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option

                // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
                // Add servingPage


                $scope.timesheetForm_ClockContinue = function (timelogId, servingPage: Timelog_ServingPage) {



                    // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option

                    // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 

                    let TimesheetContinueController_modal = $uibModal.open({

                        // animation: 'slide-in-up',
                        templateUrl: '/js/timesheet/templates//timesheetTemplate.html', //?v=' + $scope.versionForHTMLRefresh,
                        controller: 'TimesheetContinueController',
                        //  windowClass: 'ssn-mobile-modal',

                        backdrop: 'static',
                        keyboard: false,

                        resolve: {
                            timelogId: function () {
                                return timelogId;
                            },
                            servingPage: function () {
                                return servingPage;
                            }

                        }
                    });




                    // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService


                    TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);
                    function TimesheetContinueController_modal_save(result) {

                        console.log('%c TimelogLinkOptions - TimesheetContinueController_modal_save - 20210612-0155', 'color:yellow;font-size:14pt');


                        changeMonitorService.reset();

                    }

                    function TimesheetContinueController_modal_cancel(result) {

                        console.log('%c TimelogLinkOptions - TimesheetContinueController_modal_cancel - 20210612-0156', 'color:yellow;font-size:14pt');


                        changeMonitorService.reset();

                    }


                };





                // 11/27/2019 08:45 am - SSN - Copied from JobIndexController.ts 


                // 09/28/2019 04:06 pm - SSN - [20190928-1256] - [011] - Adding Entity Framework model attribute
                // Duplicate - Wrong way to go!


                // 06/08/2021 11:01 pm - SSN - [20210608-2247] - [004] - Test line item -  Prep for deployment

                // jobId to timelogId_v01

                $scope.showCreateTimesheetForm = function (timelogId_v01) {



                    const TimesheetController_modal = $uibModal.open({
                        templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                        controller: 'TimesheetController',



                        // 06/08/2021 03:56 pm - SSN - [20210606-0227] - [037] - Testng for deployment - Line item
                        // backdrop: false,

                        backdrop: 'static',
                        keyboard: false,


                        resolve: {
                            timelogId_v01: function () {
                                return timelogId_v01;
                            }
                        }
                    });






                    // 06/19/2021 07:01 am - SSN - Capture modal results


                    TimesheetController_modal.result.then(TimesheetController_modal_save, TimesheetController_modal_cancel);

                    function TimesheetController_modal_save(result) {

                        console.log('%c TimelogLinkOptions - TimesheetController save - 20210619-0702', 'color:yellow;font-size:14pt');


                        changeMonitorService.reset();

                    }

                    function TimesheetController_modal_cancel(result) {

                        console.log('%c TimelogLinkOptions - TimesheetController cancel - 20210619-0703', 'color:red;font-size:14pt');


                        changeMonitorService.reset();

                    }






                };



                $scope.showCreateTimesheetFormWithJobId = function (jobId) {


                    if (isNaN(jobId)) {
                        jobId = 0;
                    }


                    const TimesheetCreateController_modal = $uibModal.open({

                        templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
                        controller: 'TimesheetCreateController',

                        backdrop: 'static',
                        keyboard: false,

                        resolve: {
                            jobId: function () {
                                return jobId;
                            }
                        }
                    });




                    // 06/19/2021 07:03 am - SSN - Capture modal results


                    TimesheetCreateController_modal.result.then(TimesheetCreateController_modal_save, TimesheetCreateController_modal_cancel);

                    function TimesheetCreateController_modal_save(result) {

                        console.log('%c TimelogLinkOptions - TimesheetCreateController save - 20210619-0704', 'color:yellow;font-size:14pt');


                        changeMonitorService.reset();

                    }

                    function TimesheetCreateController_modal_cancel(result) {

                        console.log('%c TimelogLinkOptions - TimesheetCreateController cancel - 20210619-0705', 'color:red;font-size:14pt');


                        changeMonitorService.reset();

                    }












                }





            }]);


    }



    return {
        doSetup: doSetup
    }


}();


export { ModalCallsUtil };

