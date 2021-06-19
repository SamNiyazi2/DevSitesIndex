
// 06/08/2021 02:44 pm - SSN - [20210606-0227] - [030] - Testng for deployment - Line item
// 06/19/2021 06:07 am - SSN - Revised to be form-based.

import * as angular from 'angular'

import * as ssn_globals from "../../globals";
import { ILoggerModule } from '../Logger/ILoggerErrorMessage';

 

interface IScope_Custom extends angular.IScope {
    objectList: string[]
}


const ssn_auto_focus = function () {

    const doSetup = function (callSource: string, applicationName: string) {

        var Jobs_Angular_Module: angular.IModule = ssn_globals.globals_instance.getInstance_v002('ssn_set_focus', applicationName);
          
        Jobs_Angular_Module.directive('ssnAutoFocus', ['$rootScope', '$timeout', 'ssn_logger', function ($rootScope, $timeout, ssn_logger: ILoggerModule) {

   
            return {

                restrict: 'A', 

                link: function (scope, elem, attrs) {

                    scope.$on('$destroy', function () {
                         

                    });
                     

                    $rootScope.ssnAutoFocus_alreadySet = true;

                    const setFocus = function () {

                        let focusAlreadySet = false;

                        angular.forEach(elem[0], function (obj) {
                             
                            if (focusAlreadySet) return;
  
                            if (obj.type.toLowerCase() !="hidden" && (  obj.tagName.toLowerCase() == "input" || obj.tagName.toLowerCase() == "textarea")) {
                                 
                                if (obj.value == "") { 
                                    
                                    obj.focus();
                                    focusAlreadySet = true;
                                    return;
                                }
                            }
                        });

                    }
                     
                    $timeout(() => setFocus(), 1000);
                     
                }
            }


        }]);

    }


    return {
        doSetup
    }


}();


export { ssn_auto_focus };

