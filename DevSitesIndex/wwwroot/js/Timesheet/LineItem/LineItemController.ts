
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />

// 06/06/2021 03:06 am - SSN - [20210606-0227] - [005] - Testng for deployment

'use strict';

import { IJob_LineitemJS } from '../../Interfaces/IJob_Lineitem';


import * as globals from "../../globals";
import * as angular from "angular";
import * as tostr from "toastr";


import { AppInsights_Util } from '../../Util/ApplicationInsights_Monitor';
import { ILoggerModule } from '../../Util/Logger/ILoggerErrorMessage';
import { DDLD_CONSTANTS } from '../../DropdownList/DropdownListDirectiveConstants';
import { BROADCAST_IDENTIFIERS } from '../../Shared/Broadcast_Identifers';


AppInsights_Util.doSetup("LineItemController");


var lineItemController_instance = function () {





    var doSetup = function (ngApplicationName) {



        var angularApp = globals.globals_instance.getInstance_v002('LineItemController', ngApplicationName);





        angularApp.controller('LineItemController', ['$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', 'containerViewValue', lineItemControllerFunction]);


        function lineItemControllerFunction($q, $uibModalInstance, $rootScope, $scope, dataService, changeMonitorService, ssn_logger: ILoggerModule, jobId, containerViewValue) {


            $scope.defaultValue = containerViewValue;

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
                    lineItem: $scope.defaultValue

                }

                $scope.editableJob_LineItem = newRec;


            }




            function getJobError(err) {

                console.error('LineItemController - getJobError - 20210606-0611-B ');
                console.log(err);

                toastr.error("Failed to load record.  See console log.");

                ssn_logger.cl_error({ callSource: "20210620-1721", message: "LineItemController - getJobError - Failed to get record", errorObject: err });

            }

            function getJobCatch(err) {

                console.error('LineItemController - getJobError - 20210606-0611-D ');
                console.log(err);

                toastr.error("Failed to load record.  See console log.");

                ssn_logger.cl_error({ callSource: "20210606-0611-C-2-2", message: "LineItemController -getJobCatch - Failed to get record", errorObject: err });

            }




            $scope.submitForm = function () {


                if ($scope.disableSaveButton) return;

                $scope.disableSaveButton = true;


                $scope.editableJob_LineItem.lineItem = $scope.defaultValue;

                if ($scope.editableJob_LineItem.lineItem == "0") {

                    toastr.error("Failed to save record.  See console log.");

                    $scope.disableSaveButton = false;

                    ssn_logger.cl_error({ callSource: "20210615-0401", message: "LineItem new entry error - saving '0' record " });

                    return;

                }


                var promise = null;

                try {

                    promise = dataService.addOrUpdateJob_LineItem($scope.editableJob_LineItem);


                    if (promise) {

                        promise.then(
                            function (data) {



                                $rootScope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_DROPDOWN_LIST, keyColumn: "lineItemId", id: data.lineItemId, description: data.lineItem });



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

                                ssn_logger.cl_error({ callSource: "20210606-2055", message: "function > error", errorObject: error });

                            });
                    }

                } catch (error) {


                    ssn_logger.cl_error({ callSource: "20210606-2052", message: "function > error", errorObject: error });

                    toastr.error("Failed to save record.  See console log.");

                }

            };



            $scope.cancelForm = function () {


                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }


                $uibModalInstance.dismiss();

            };




        }






















        angularApp.directive('lineItemNoDuplicate', ["$q", "ssn_logger", function ($q, ssn_logger: ILoggerModule) {

            return {
                require: 'ngModel',

                link: function (scope, elem, attr, ngModel_ctrl) {



                    ngModel_ctrl.$parsers.unshift(function (value) {

                        console.log('%c *x*x*x*x*x*x*x*x*x*x*x*x*x*x*x', 'color:red;font-size:14pt');


                        console.log(`%c ---------------- ngModel_ctrl--------  ------------------`, 'color:red;font-size:14pt;');
                        console.log(ngModel_ctrl);



                        const testvalue1 = attr["name"];

                        console.log('11) -------------------------------');
                        console.log(testvalue1);
                        console.log('22) -------------------------------');
                        console.log(value)
                        console.log('44) -------------------------------');
                        console.log(attr)
                        console.log('55) -------------------------------');


                        ngModel_ctrl.$setValidity(attr.name, false);


                        return value;
                    });



                    ngModel_ctrl.$asyncValidators.duplicateLineItem = function (modelValue, viewValue) {


                        // We are taking care of duplicates by invering the logic in the DropdownListDirective.

                        var deferred = $q.defer();

                        //if (modelValue && modelValue.id) {

                        //    deferred.resolve();
                        //} else {

                        //    deferred.reject();
                        //}

                        deferred.resolve();

                        return deferred.promise;
                    }

                }
            };
        }]);


    }



    return {

        doSetup: doSetup
    };




}();



export { lineItemController_instance }
