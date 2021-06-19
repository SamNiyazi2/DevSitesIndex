
// 06/09/2021 11:52 pm - SSN - [20210608-2247] - [010] - Test line item -  Prep for deployment


import * as angular from 'angular';

import * as ssn_globals from '../globals'


const ModalCallsUtil = function () {



    const doSetup = function (callSource, ngApplicationName) {

        const timesheetApp = ssn_globals.globals_instance.getInstance_v002('ModalCallsUtil' + '_X_' + callSource, ngApplicationName);





        timesheetApp.controller('ModalCallSUtilController', ['$scope', 'ssn_logger', '$uibModal',

            function ($scope, ssn_logger, $uibModal) {



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


            }]);


    }



    return {
        doSetup: doSetup
    }


}();


export { ModalCallsUtil };

