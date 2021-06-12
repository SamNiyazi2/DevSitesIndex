/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 06/06/2021 03:06 am - SSN - [20210606-0227] - [005] - Testng for deployment
'use strict';
import * as globals from "../../globals";
import { AppInsights_Util } from '../../Util/ApplicationInsights_Monitor';
AppInsights_Util.doSetup("LineItemController");
var lineItemController_instance = function () {
    var timesheetApp = globals.globals_instance.getInstance_v002('LineItemController', "timesheetApp");
    var doSetup = function () {
        timesheetApp.controller('LineItemController', ['$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', 'containerViewValue', lineItemControllerFunction]);
        function lineItemControllerFunction($q, $uibModalInstance, $rootScope, $scope, dataService, changeMonitorService, ssn_logger, jobId, containerViewValue) {
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
            };
            dataService.getJob(jobId).then(getJobSuccess, getJobError).catch(getJobCatch);
            function getJobSuccess(data) {
                var newRec;
                newRec = {
                    jobId: data.jobID,
                    job: {
                        jobTitle: data.jobTitle,
                        project: {
                            projectTitle: data.project.projectTitle
                        }
                    },
                    lineItem: $scope.defaultValue
                };
                $scope.editableJob_LineItem = newRec;
            }
            function getJobError(err) {
                console.error('LineItemController - getJobError - 20210606-0611-B ');
                console.log(err);
                ssn_logger.cl_error({ callSource: "20210620-1721", message: "LineItemController - getJobError - Failed to get record", errorObject: err });
            }
            function getJobCatch(err) {
                ssn_logger.cl_error({ callSource: "20210606-0611-C-2-2", message: "LineItemController -getJobCatch - Failed to get record", errorObject: err });
                toastr.error("Failed to load record.  See console log.");
            }
            $scope.submitForm = function () {
                if ($scope.disableSaveButton)
                    return;
                $scope.disableSaveButton = true;
                var test = $scope.editableJob_LineItem;
                $scope.editableJob_LineItem.lineItem = $scope.defaultValue;
                var promise = null;
                try {
                    promise = dataService.addOrUpdateJob_LineItem($scope.editableJob_LineItem);
                    if (promise) {
                        promise.then(function (data) {
                            ssn_logger.cl_normal({ callSource: "20210606-2259-C", message: "Show value" }, 'yellow');
                            console.log('HHHHHHHHHHHHH-lineitemcontroller');
                            console.log(data);
                            console.log($scope.editableJob_LineItem);
                            $rootScope.$broadcast('dropdownListDirective_Change_start', { msg: 'update dropdown list', keyColumn: "lineItemId", id: data.lineItemId, description: data.lineItem });
                            $uibModalInstance.close();
                            toastr.info("Line item saved.");
                        }, function (error) {
                            $scope.disableSaveButton = false;
                            console.error("LineItemController - 20210606-0548 - promise > error");
                            console.log(error);
                            toastr.error("Failed to save record.  See console log.");
                            $scope.feedbackToUserClassNameCase = 2;
                            $scope.feedbackToUserText = error.data;
                        });
                    }
                }
                catch (e) {
                    ssn_logger.cl_error({ callSource: "20210606-2052", message: "function > error", errorObject: e });
                    toastr.error("Failed to save record.  See console log.");
                }
            };
            $scope.cancelForm = function () {
                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?'))
                        return;
                }
                $uibModalInstance.dismiss(); //same as cancel???
            };
        }
    };
    timesheetApp.directive('lineItemNoDuplicate', ["$q", "ssn_logger", function ($q, ssn_logger) {
            return {
                require: 'ngModel',
                link: function (scope, elem, attr, ngModel_ctrl) {
                    ngModel_ctrl.$parsers.unshift(function (value) {
                        console.log('%c *x*x*x*x*x*x*x*x*x*x*x*x*x*x*x', 'color:red;font-size:20px');
                        console.log("%c ---------------- ngModel_ctrl--------  ------------------", 'color:red;font-size:20pt;');
                        console.log(ngModel_ctrl);
                        var testvalue1 = attr["name"];
                        console.log('11) -------------------------------');
                        console.log(testvalue1);
                        console.log('22) -------------------------------');
                        console.log(value);
                        console.log('44) -------------------------------');
                        console.log(attr);
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
                    };
                }
            };
        }]);
    return {
        doSetup: doSetup
    };
}();
export { lineItemController_instance };
//# sourceMappingURL=LineItemController.js.map