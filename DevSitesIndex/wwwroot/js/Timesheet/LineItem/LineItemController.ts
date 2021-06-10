
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />

// 06/06/2021 03:06 am - SSN - [20210606-0227] - [005] - Testng for deployment

'use strict';

import { IJob_LineitemJS } from '../../Interfaces/IJob_Lineitem';


import * as globals from "../../globals";
import * as angular from "angular";
import * as tostr from "toastr";


import { AppInsights_Util } from '../../Util/ApplicationInsights_Monitor';
import { ILoggerModule } from '../../Util/Logger/ILoggerErrorMessage';


AppInsights_Util.doSetup("LineItemController");


var lineItemController_instance = function () {


    var doSetup = function () {


        var timesheetApp = globals.globals_instance.getInstance_v002('LineItemController', "timesheetApp");

        timesheetApp.controller('LineItemController', ['$uibModalInstance', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', 'containerViewValue', lineItemControllerFunction]);



        function lineItemControllerFunction($uibModalInstance, $scope, dataService, changeMonitorService, ssn_logger: ILoggerModule, jobId, containerViewValue) {


            ssn_logger.cl_normal({ callSource: '20210606-1912', message: 'Definition' }, 'red', true);
            ssn_logger.cl_normal({ callSource: '20210606-1912-B', message: `jobId [${jobId}]` }, 'red', true);




            AppInsights_Util.logEvent("DemoSites_20210606_1514", { SourceCode: "20210606-1514", Message: "Init" });

            changeMonitorService.setupMonitor();

            $scope.pageTitle = "Line item-001";

            $scope.disableSaveButton = false;

            $scope.feedbackToUserText = "";
            $scope.feedbackToUserClassNameCase = "";

            $scope.feedbackToUserClassNameSet = function () {

                switch ($scope.feedbackToUserClassNameCase) {
                    case 1:
                        return "rounded margined info_good";
                    case 2:
                        return "rounded margined info_bad";
                    default:
                        return "";
                }

            }


            dataService.getJob(jobId).then(getJobSuccess, getJobError).catch(getJobCatch);




            function getJobSuccess(data) {

                console.log('20210609-0537 - lineItemCOntroller');
                console.log('20210609-0537 - lineItemCOntroller 2');
                console.log('20210609-0537 - lineItemCOntroller 3');
                console.log('20210609-0537 - lineItemCOntroller 4');
                console.log('20210609-0537 - lineItemCOntroller 5');

                console.log(data);

                let newRec: IJob_LineitemJS;

                newRec = {
                    jobId: data.jobID,
                    job: {
                        jobTitle: data.jobTitle
                        ,
                        project: {
                            projectTitle: data.project.projectTitle
                        }
                    },
                    lineItem: containerViewValue
                }

                $scope.editableJob_LineItem = newRec;
            }




            function getJobError(data) {

                console.error('LineItemController - getJobError - 20210606-0611-B ');
                console.log(data);

            }

            function getJobCatch(err) {

                //console.error('LineItemController - getJobCatch  - 20210606-0611-C ');
                //console.log(data);


                ssn_logger.cl_error({ callSource: "20210606-0611-C-2-2", message: "getJobCatch -Failed to get record", errorObject: err });

                toastr.error("Failed to load record.  See console log.");

            }




            $scope.submitForm = function () {


                if ($scope.disableSaveButton) return;

                $scope.disableSaveButton = true;


                var test = $scope.editableJob_LineItem;





                ssn_logger.cl_normal({ callSource: "20210606-2259", message: "Show value" }, 'yellow');

                console.log(test);




                var promise = null;

                try {

                    promise = dataService.addOrUpdateJob_LineItem($scope.editableJob_LineItem);


                    if (promise) {

                        promise.then(
                            function (data) {

                                $scope.job_Lineitem = angular.copy($scope.editableTimeLog);

                                $uibModalInstance.close();

                                toastr.info("Line item saved.");


                            },
                            function (error) {

                                $scope.disableSaveButton = false;

                                console.error("LineItemController - 20210606-0548 - promise > error");
                                console.log(error);

                                toastr.error("Failed to save record.  See console log.");


                                $scope.feedbackToUserClassNameCase = 2;
                                $scope.feedbackToUserText = error.data;


                            });
                    }

                } catch (e) {


                    ssn_logger.cl_error({ callSource: "20210606-2052", message: "function > error", errorObject: e });

                    toastr.error("Failed to save record.  See console log.");

                }

            };



            $scope.cancelForm = function () {


                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }


                $uibModalInstance.dismiss(); //same as cancel???

            };




        }




    }

    return {

        doSetup: doSetup
    };

}();


export { lineItemController_instance }
