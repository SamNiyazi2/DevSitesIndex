
// 06/15/2021 03:31 am - SSN - [20210613-0452] - [041] - Adding tags to DevSite



import * as globals from "..//globals";
import * as angular from "angular";
import * as tostr from "toastr";


import { AppInsights_Util } from '../Util/ApplicationInsights_Monitor';
import { ILoggerModule } from '../Util/Logger/ILoggerErrorMessage';
import { IDevSite } from "../Interfaces/IDevSite";
import { DDLD_CONSTANTS } from "../DropdownList/DropdownListDirectiveConstants";
import { BROADCAST_IDENTIFIERS } from "../Shared/Broadcast_Identifers";


AppInsights_Util.doSetup("TechnologyController_instance");


const TechnologyController_instance = function () {





    const doSetup = function (ngApplicationName) {



        var angularApp = globals.globals_instance.getInstance_v002('TechnologyController', ngApplicationName);



        angularApp.controller('TechnologyController', ["$sce", '$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'containerViewValue', TechnologyControllerFunction]);



        function TechnologyControllerFunction($sce, $q, $uibModalInstance, $rootScope, $scope, dataService, changeMonitorService, ssn_logger: ILoggerModule, containerViewValue) {


            $scope.defaultValue = containerViewValue;

            AppInsights_Util.logEvent("DemoSites_DevSiteTechnology", { SourceCode: "20210615-0342", Message: "Init" });

            changeMonitorService.setupMonitor();

            $scope.pageTitle = "Technology";

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


            $scope.editableTechnology = { description: $scope.defaultvalue };


            $scope.submitForm = function () {


                if ($scope.disableSaveButton) return;

                $scope.disableSaveButton = true;


                $scope.editableTechnology.description = $scope.defaultValue

                // During testing with LineItem, we were ending up with records being saved with the value "0".  Source not determined.
                if ($scope.editableTechnology.description == "0") {

                    toastr.error("Failed to save record.  See console log.");

                    $scope.disableSaveButton = false;

                    ssn_logger.cl_error({ callSource: "20210615-0358", message: "DevSite Technology new entry error - saving '0' record " });

                    return;

                }


                var promise = null;

                try {

                    promise = dataService.addOrUpdateTechnology($scope.editableTechnology);


                    if (promise) {

                        promise.then(
                            function (data) {

                                $rootScope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_DROPDOWN_LIST, keyColumn: "technologyId", id: data.id, description: data.description });

                                $uibModalInstance.close();

                                toastr.info(`New record '${$scope.editableTechnology.description}' saved.`);


                            },
                            function (error) {


                                // 04/24/2022 10:31 pm - SSN - Added reset & $sce
                                changeMonitorService.reset();


                                $scope.disableSaveButton = false;

                                console.error("DevSite Technology  - 20210615-0406 - promise > error");
                                console.log(error);

                                toastr.error("Failed to save record. See console log. (1021)");
                                toastr.error(`${error.data.ErrorMessage}`);


                                $scope.feedbackToUserClassNameCase = 2;
                                $scope.feedbackToUserText = $sce.trustAsHtml(error.data.ErrorMessage);

                                ssn_logger.cl_error({ callSource: "20210615-0409", message: "function > error", errorObject: error });


                            });
                    }

                } catch (error) {


                    ssn_logger.cl_error({ callSource: "20210615-0408", message: "function > error", errorObject: error });

                    toastr.error("Failed to save record.  See console log. (1022)");

                }

            };



            $scope.cancelForm = function () {


                if (changeMonitorService.getHaveChanges()) {
                    if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
                }


                $uibModalInstance.dismiss();

            };




        }
    }

    return {
        doSetup
    }

}();



export { TechnologyController_instance };
