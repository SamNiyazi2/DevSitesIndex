
// 06/08/2021 02:44 pm - SSN - [20210606-0227] - [030] - Testng for deployment - Line item

import * as angular from 'angular'

import * as ssn_globals from "../../globals";
import { ILoggerModule } from '../Logger/ILoggerErrorMessage';

 

interface IScope_Custom extends angular.IScope {
    objectList: string[]
}


const ssn_auto_focus = function () {

    const doSetup = function (callSource: string, applicationName: string) {

        var Jobs_Angular_Module: angular.IModule = ssn_globals.globals_instance.getInstance_v002('ssn_set_focus', applicationName);


        Jobs_Angular_Module.directive('ssnAutoFocus', ['ssn_logger', function (ssn_logger: ILoggerModule) {


            ssn_logger.cl_normal({ callSource: '2021008-1509', message: 'ssnAutoFocus in directive' }, 'yellow');


            return {

                restrict: 'A',
                // link: function (scope: IScope_Custom, elem, attrs) {

                link: function (scope, elem, attrs) {

                    ssn_logger.cl_normal({ callSource: '2021008-1526-d', message: 'ssnAutoFocus firing' }, 'cyan');

                    //if (scope.objectList == null) {

                    //}
                    elem.focus();

                }
            }
        }]);

    }


    return {
        doSetup
    }


}();


export { ssn_auto_focus };

