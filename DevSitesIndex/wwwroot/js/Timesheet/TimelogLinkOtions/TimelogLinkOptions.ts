
// 11/21/2019 05:50 am - SSN - [20191121-0503] - [003] - Timelog edit options on project search


import { globals_instance, Timelog_ServingPage } from "../../globals";
import { IScope } from "angular";



interface IScope_local extends IScope {

    continue_or_lineItem_caption: string,
    showClockoutOption: boolean,
    totalSeconds: any,
    timelogId: any
}


var TimelogLinkOptions = function () {

    var doSetup = function (defaultAppName) {


        //var TimelogLinkOptions_angular_module = globals_instance.getInstance(defaultAppName, []);
        var TimelogLinkOptions_angular_module = globals_instance.getInstance_v002('TimelogLinkOptions', defaultAppName);





        TimelogLinkOptions_angular_module.directive('timelogLinkOptions', ['$uibModal', 'changeMonitorService', function ($uibModal, changeMonitorService) {


            return {

                restrict: "E",
                templateUrl: "/js/Timesheet/TimelogLinkOtions/TimelogLinkOptions.html",

                //controllerAs: 'vm101',
                //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.

                controller: ['$scope', function ($scope) {




                }],

                scope: {

                    timelogId: "@",
                    totalSeconds: "@",
                    servingPage: '@',
                    jobId: '@',
                    userHasAccess:"&"

                },

                link: function (scope: IScope_local, el, attrs) {

                    let haveOpenRecord = scope.timelogId && scope.totalSeconds === undefined;

                    scope.showClockoutOption = haveOpenRecord;

                    scope.continue_or_lineItem_caption = !haveOpenRecord ? "Continue" : "Line item";

                }

            }

        }]);


    }

    return {

        doSetup: doSetup
    };


}();


export { TimelogLinkOptions };

