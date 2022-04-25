
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Create generic dropdown list directive

/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../Shared/DataServices.ts"/>


// 09/20/2019 10:52 am - SSN - Added import angular
import * as angular from 'angular';


// 09/20/2019 10:21 am - SSN - Replace angular.module


import * as ssn_globals from '../globals';
import { dataService_instance } from '../Shared/DataServices';
import { ILoggerModule } from '../Util/Logger/ILoggerErrorMessage';
import { DDLD_CONSTANTS } from './DropdownListDirectiveConstants';
import { BROADCAST_IDENTIFIERS } from '../Shared/Broadcast_Identifers';

interface LookupRecord {
    id: number
}

// 06/20/2021 11:14 pm - SSN - [20210620-2108] - [006] - Update TimeLog create option to use DrowndownListDirective
// Add IDropdownListDataSourceRecord and vm101 to IScope_DDLD.  Using to help user when they type a valid selection but escape the list and tab out of the field.
// Add ngModel

interface IDropdownListDataSourceRecord {
    id: number;
    title: string
}

interface IScope_DDLD extends angular.IScope {

    formName: any,
    vm101: {
        addresses: IDropdownListDataSourceRecord[]
    },
    ngModel

}



var dropdownListDirective_instance = function () {


    var doSetup = function (defaultAppName) {


        if (typeof (defaultAppName) != "string") {
            defaultAppName = "demoSites_Index_Timesheet";
        }



        var downdownList_angular_module = ssn_globals.globals_instance.getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);


        // Used for scroll page when form is invalid, on submit.
        var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', 'ssn_logger', function ($scope, $attrs, $location, ssn_logger) {


            $scope.submitForm_1 = function (event, form) {


                if (!form.$valid) {

                    // 06/21/2021 09:48 pm - SSN - [20210620-2108] - [027] - Update TimeLog create option to use DrowndownListDirective
                    // To trigger form to show error messages.
                    angular.forEach(form, function (control, o1, o2) {

                        if (control) {
                            if (typeof (control.$setDirty) == 'function') {
                                control.$setDirty();
                            }
                        }


                    });

                    event.preventDefault();
                    scrollIntoAppView();
                }
            }


            // https://www.code-sample.com/2018/11/angularjs-scroll-to-error-on-submit-and.html
            var scrollIntoAppView = function () {

                var elt = $(".has-error:visible");

                if (elt.length) {

                    $('html, body').animate({
                        // scrollTop: (elt.first().offset().top)
                        // scrollTop: (elt.first().closest('div').prevAll('div').offset().top)
                        scrollTop: (elt.first().closest('div.form-group').offset().top - 80)
                    }, 500);
                }
            }



        }]);





        downdownList_angular_module.directive('dropdownListDirectiveInputBox', ["$q", "ssn_logger", function ($q, ssn_logger: ILoggerModule) {

            return {
                require: 'ngModel',


                controller: function ($scope) {

                    $scope.$on('$destroy', function () {

                        //  console.log('%c ' + 'Destroy dropdownListDirectiveInputBox - 20210614-2154', 'color:red;font-size:14pt;');

                    });

                }

                ,


                // 06/07/2021 02:04 am - SSN - [20210606-0227] - [014] - Testng for deployment
                // We are using this for adding new items to master.

                link: function (scope: IScope_DDLD, elem, attr, ngModel_ctrl: angular.IController) {

                    const dropdownListDirectiveInputBoxInverse = attr["dropdownListDirectiveInputBoxInverse"];
                    const keyColumn = attr["keyColumn"];

                    // This clears the errors except for the uib-typeahead "No reulsts" message.
                    // Tested with adding new entries.

                    elem.bind('blur', (event) => {


                        //  This updates the view to reflect the new item but does not update the typeahead source. ("No results found" is displayed)
                        if (ngModel_ctrl.$modelValue) {
                            //console.log('%c dropdown blur - setting $setViewValue 20210618-0340-aaaa', 'color:yellow;font-size:14pt;');
                            ngModel_ctrl.$setViewValue(ngModel_ctrl.$modelValue)
                        }
                        else {

                            console.log('%c dropdown blur - NOT setting modelValue 20210618-0340', 'color:RED;font-size:14pt;');

                            // If user tabs out of the field withot selecting an enter, after they have typed in a valid entry, we will select it for them.
                            if (ngModel_ctrl.$viewValue && ngModel_ctrl.$viewValue != "") {

                                console.log('%c dropdown blur - Selecting on user\'s behalf ( check ) 20210620-2301-A', 'color:yellow;font-size:14pt;');


                                console.log('ngModel_ctrl.$viewValue :')
                                console.log(ngModel_ctrl.$viewValue)

                                console.log('ngModel_ctrl.$modelValue:')
                                console.log(ngModel_ctrl.$modelValue)

                                if (ngModel_ctrl && ngModel_ctrl.$viewValue) {

                                    const matchingRecords = scope.vm101.addresses.filter(r => r.title.toLowerCase().trim() == ngModel_ctrl.$viewValue.trim().toLowerCase());

                                    if (matchingRecords && matchingRecords.length == 1) {

                                        console.log('%c dropdown blur - Selecting on user\'s behalf ( Sucess ) 20210620-2301-B', 'color:green;font-size:14pt;');
                                        console.log('%c INCOMPLETE 20210620-2301-zB', 'color:RED;font-size:14pt;');

                                        // ngModel_ctrl.$setViewValue(matchingRecords[0].title);
                                        console.log(matchingRecords);
                                        console.log(elem);


                                    } else {

                                        console.log('%c dropdown blur - Selecting on user\'s behalf ( failure ) 20210620-2301-C', 'color:red;font-size:14pt;');

                                    }
                                }
                                else {

                                    console.log('%c dropdown blur - Selecting on user\'s behalf ( failure - $viewValue) 20210624-0319', 'color:red;font-size:14pt;');

                                }

                            }

                        }


                        if (dropdownListDirectiveInputBoxInverse && dropdownListDirectiveInputBoxInverse == "true") {


                            console.log(`%c  20210617-1901 - dropdownListDirectiveInputBoxInverse [${dropdownListDirectiveInputBoxInverse}]`, 'color:yellow;font-size:12pt');

                            // 06/18/2021 06:43 pm - SSN - Change $modelValue to $modelValue.id (edit timesheet)
                            // scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE, keyColumn: keyColumn, keyValue: ngModel_ctrl.$ModelValue });

                            // 06/19/2021 03:28 am - SSN - When adding a new entry with the switch dropdownListDirectiveInputBoxInverse set to true (Adding job title in job create)
                            //                             The $modelValue is the input string.  
                            //   We noted earlier that the $modelValue was an object.  

                            let keyValueSelected = undefined;

                            const incompleteDefinition_startingWithCondition = dropdownListDirectiveInputBoxInverse == "true";

                            if (incompleteDefinition_startingWithCondition) {
                                keyValueSelected = ngModel_ctrl.$modelValue
                            } else {
                                keyValueSelected = ngModel_ctrl.$modelValue.id
                            }

                            scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, {
                                msg: DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE,
                                callSource: '20210618-1858', keyColumn: keyColumn, keyValue: keyValueSelected
                            });

                            console.log('incomplete')
                            console.log('incomplete')
                            console.log('incomplete')
                            console.log('incomplete')
                            console.log('incomplete')
                        }


                    });


                    var dropdownListDirectiveInputBox = attr.dropdownListDirectiveInputBox.split(',');

                    // For reference
                    // Functional
                    ngModel_ctrl.$parsers.unshift(function (value) {

                        ngModel_ctrl.$setValidity(attr.name + '.dropdownListDirectiveInputBox', dropdownListDirectiveInputBox.indexOf(value) === -1);

                        return value;
                    });



                    // This triggers an error if we don't have an entry selected from the dropdown list. (An object with n id)

                    ngModel_ctrl.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {

                        // Does fire.
                        // modelValue doesn't honor selected value after it has already been set.
                        // Until we caome up with a way to reset it, disable by bypassing as valid.

                        console.log('20210618-1815  - blue validator isValidDropdownDirectiveSelection');
                        console.log('ngModel_ctrl.$dirty:')
                        console.log(ngModel_ctrl.$dirty)


                        console.log('modelValue:')
                        console.log(modelValue)


                        console.log('viewValue:')
                        console.log(viewValue)


                        let validationResult = true;

                        var deferred = $q.defer();

                        if (ngModel_ctrl.$dirty) {

                            validationResult = modelValue && modelValue.id;

                            if (dropdownListDirectiveInputBoxInverse == "true") validationResult = !validationResult;

                        }


                        if (validationResult) {

                            deferred.resolve();
                        } else {

                            deferred.reject();
                        }

                        // return the promise of the asynchronous validator
                        return deferred.promise;
                    }

                }
            };
        }]);





        downdownList_angular_module.directive('dropdownListDirective', ['ssn_logger', '$timeout', function (ssn_logger, $timeout) {


            var controller = ['$window', '$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', 'ssn_logger', function ($window, $http, $q, $scope, $rootScope, $timeout, changeMonitorService, ssn_logger: ILoggerModule) {

                var vm = this;


                // 06/18/2021 07:55 pm - SSN
                // Move outside function to post new entries.  Looking to update typeahead on addition on new entries so "No results found" could disappear

                vm.addresses = [];

                // vm.tempControlName = `DropdownListDirective_${vm.callSource}_` + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                // vm.tempControlName = this.keyColumn;
                vm.tempControlName = `DropdownListDirective_${Math.random()}_`;

                vm.blackListErrorName = vm.tempControlName + ".dropdownListDirectiveInputBox";

                vm.dropdownListDirectiveInputBoxInverse = false;



                vm.controlRef = function (controlName) {
                    if (!vm.formName) {
                        return;
                    }
                    return vm.formName[controlName];
                }

                vm.errorTriggered = function (errorName) {
                    if (!vm.formName) {
                        return;
                    }
                    return !!vm.formName.$error[errorName];
                }

                vm.errorTriggeredWithControlName = function (controlName, errorName) {

                    // return vm.formName[controlName].$error[errorName];
                    // Testing with 'required' return a boolean.  


                    if (!vm.formName) { return; }

                    if (!vm.formName[controlName]) { return; }

                    return (vm.formName[controlName])["$error"][errorName];

                }






                $scope.$on(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, function (events, args) {

                    let isHandled = false;

                    // This fires on start and once on change


                    if (args.msg === DDLD_CONSTANTS.DO_SET_FOCUS && args.jqueryObjectRef) {

                        args.jqueryObjectRef.focus();

                    }



                    if (vm.parentKeyName && vm.parentKeyName == args.keyColumn && args.keyValue) {

                        vm.parentKeyColumn = args.keyValue;

                        isHandled = true;

                    }



                    if ((args.msg == DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE) && vm.keyColumn && args.keyColumn && (vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase())) {

                        console.log(`%c update hidden key keyColumn [${vm.keyColumn}]`, 'color:yellow;font-size:12pt');
                        console.log(`%c update hidden key hiddenFieldName [${vm.hiddenFieldName}]`, 'color:yellow;font-size:12pt');
                        console.log(`%c update hidden key args.keyValue [${args.keyValue}]`, 'color:yellow;font-size:12pt');

                        console.log('vm.keyColumn ');
                        console.log(vm.keyColumn);

                        console.log('args.keyColumn');
                        console.log(args.keyColumn);


                        if (vm.hiddenFieldName) {

                            $("[name='" + vm.hiddenFieldName + "']").val(args.keyValue);

                        } else {

                            ssn_logger.cl_error({
                                callSource: '20210617-2154', message: `hiddenFieldName not defined while updating [${args.keyColumn}] vm.CallSource [${vm.callSource}]`
                            });

                        }

                        isHandled = true;

                    }












                    if ((args.msg == DDLD_CONSTANTS.UPDATE_DROPDOWN_LIST) && vm.keyColumn && args.keyColumn && (vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase())) {

                        ssn_logger.cl_normal({ callSource: '20210610-1708-B-2', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] update dropdown - vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'green', true);
                        console.log('events:', events);
                        console.log('args', args);

                        ///////////////////////////////////////////////////////////////////////////  vm.getDisciplines(args.description);

                        vm.disciplineSelected_XYZ = { id: args.id, title: args.description };


                        ssn_logger.cl_normal({ callSource: '20210618-1952', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] adding new entry to 'addresses'` }, 'red', true);
                        vm.addresses.push({ id: args.id, title: args.description });



                        isHandled = true;

                    }
















                    if (args.msg == DDLD_CONSTANTS.CALL_VALIDATE_THIS) {

                        ssn_logger.cl_normal({ callSource: '20210609-1529', message: 'call validateThis' }, 'blue', true);

                        vm.validateThis();

                        isHandled = true;
                    }






                    if (args.msg == DDLD_CONSTANTS.SELECT_NEW_VALUE) {

                        ssn_logger.cl_normal({ callSource: '20210617-0643', message: 'select new value firing' }, 'yellow', true);

                        if (vm.hiddenFieldName) {

                            $("[name='" + vm.hiddenFieldName + "']").val('');

                        }
                        // Todo
                        // Todo
                        // Todo
                        // Todo

                        ////////////////////////////////////////////////////////  vm.disciplineSelected_XYZ = "";

                        isHandled = true;
                    }



                    if (!isHandled) {

                        ssn_logger.cl_normal({ callSource: '20210609-0547', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] not handled - vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red');
                        console.log('events:', events);
                        console.log('args', args);
                    }


                });






                // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
                // disciplineSelected_XYZ  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)


                vm.disciplineSelected_XYZ = "";

                $scope.$on('$destroy', function () {

                    // console.log('%c ' + 'Destroy DropDownListDirective - 20210614-2152', 'color:red;font-size:14pt;');

                });



                $scope.$watch('vm101.ngModel', function (newValue, oldValue) {


                    // 06/13/2021 10:12 pm - SSN - [20210613-0452] - [022] - Adding tags to DevSite

                    // 06/25/2021 01:14 am - SSN - Replaced
                    // When replaced with validation against oldValue and oldValue is an input string (not a key id), textbox is not updated with new value.
                    if (newValue) {

                        vm.validateThis();

                    } 

                });


                $scope.$watch('vm101.parentKeyColumn', function (newValue, oldValue) {


                    if (oldValue != newValue && oldValue != null) { // oldValue is null on first call.


                        // vm.ngModel = undefined;

                        // 06/13/2021 10:07 pm - SSN - [20210613-0452] - [021] - Adding tags to DevSite 


                        vm.ngModel = -1020;


                        //vm.ngModel = -1;



                        vm.disciplineSelected_XYZ = "";

                        if (vm.hiddenFieldName) {

                            $("[name='" + vm.hiddenFieldName + "']").val('');

                        }

                    }

                });


                //$scope.$watch('vm101.disciplineSelected_XYZ', function (newValue: LookupRecord, oldValue) {
                $scope.$watch('vm101.disciplineSelected_XYZ', function (newValue, oldValue) {


                    if (newValue && newValue.id) {

                        vm.ngModel = newValue.id;

                        if (vm.hiddenFieldName) {

                            $("[name='" + vm.hiddenFieldName + "']").val(newValue.id);

                        }

                    }



                    if (vm.formName) {

                        if (vm.formName.$dirty) {

                            changeMonitorService.doSetHaveChange(true);
                        }
                    }





                }, true);





                vm.setupUrl = function () {

                    if (!this.keyColumn) {
                        return;
                    }

                    vm.APIUrlListAll = undefined;
                    vm.APIUrlSingleRecord = undefined;

                    switch (this.keyColumn.toLowerCase()) {

                        case 'timelog.disciplineid':
                        case 'disciplineid':

                            vm.APIUrlListAll = '/api/DisciplineAPI';
                            vm.APIUrlSingleRecord = '/api/DisciplineAPI';

                            break;


                        // 12/10/2020 04:32 pm - SSN - [20201210-1625] - [002] - Update Timelog edit MVC
                        ///////////////////////////////////////case 'timelog.lineitemid':
                        case 'lineitemid':

                            vm.APIUrlListAll = '/api/job_LineItemAPI/typeahead_jobrecords';
                            vm.APIUrlSingleRecord = '/api/job_LineItemAPI/typeahead';

                            break;



                        case 'timelog.jobid':
                        case 'job.jobid':
                        case 'jobid':
                            vm.APIUrlListAll = '/api/jobapi/typeahead_projectRecords';
                            vm.APIUrlSingleRecord = '/api/jobapi/typeahead';

                            break;

                        // 11/27/2019 04:46 pm - SSN - Adding
                        case 'job.projectid':
                            vm.APIUrlListAll = '/api/projectapi/typeahead';
                            vm.APIUrlSingleRecord = '/api/projectapi/typeahead';

                            break;

                        // 06/13/2021 10:13 pm - SSN - [20210613-0452] - [023] - Adding tags to DevSite
                        case 'technologyid':
                            vm.APIUrlListAll = '/api/technologyapi/typeahead';
                            vm.APIUrlSingleRecord = '/api/technologyapi/typeahead';

                            break;

                        default:
                            console.log(`%cDropdownListDirective - no case for [${this.keyColumn}] 20201210-1656`, 'color:red');
                            console.log('----------------------------');
                            console.log(`%cDropdownListDirective - no case for [${this.keyColumn}] 20201210-1656`, 'color:red');
                            console.log('----------------------------');
                            console.log(`%cDropdownListDirective - no case for [${this.keyColumn}] 20201210-1656`, 'color:red');
                            console.log('----------------------------');
                            console.log(`%cDropdownListDirective - no case for [${this.keyColumn}] 20201210-1656`, 'color:red');
                            console.log('----------------------------');

                    }




                    if (vm.APIUrlListAll == undefined) {

                        const errorMessage = `DropdownListDirective - missing definition for APIUrlListAll [${this.keyColumn}] 20210608-1310`

                        console.log('----------------------------');
                        console.log(`%c${errorMessage}`, 'color:red');
                        console.log('----------------------------');

                        ssn_logger.cl_error({ callSource: '20210608-1311', message: errorMessage });

                    }


                    if (vm.APIUrlSingleRecord == undefined) {


                        const errorMessage = `DropdownListDirective - missing definition for vm.APIUrlSingleRecord [${this.keyColumn}] 20210608-1427`

                        console.log('----------------------------');
                        console.log(`%c${errorMessage}`, 'color:red');
                        console.log('----------------------------');

                        ssn_logger.cl_error({ callSource: '20210608-1428', message: errorMessage });

                    }


                    if (vm.parentKeyColumn) {


                        var parentKeyColumnValue = this.parentKeyColumn; //undefined;


                        if (parentKeyColumnValue) {

                            vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
                        }

                    }

                }


                vm.changing = function () {

                    $scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.SELECT_NEW_VALUE, callSource: "20210618-1916-changing", keyColumn: vm.keyColumn, keyValue: vm.ngModel });


                }

                // 06/16/2021 10:36 pm - SSN - [20210613-0452] - [107] - Adding tags to DevSite

                vm.typeaheadOnSelect = function (item, model, label) {

                    vm.disciplineSelected_XYZ = item;

                    vm.ngModel = item.id;

                }



                vm.validateThis = function () {


                    vm.setupUrl();


                    // 06/13/2021 10:39 pm - SSN - [20210613-0452] - [026] - Adding tags to DevSite


                    if (vm.ngModel > 0) {
                        // if (vm.ngModel != undefined) {

                        vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess, vm.currentDisplineLookupError);


                        // $scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CHANGE_MSG.HAS_VALID_VALUE, keyColumn: vm.keyColumn, keyValue: vm.ngModel });


                    } else {

                        ssn_logger.cl_normal({ callSource: '20210609-0528', message: `validateThis: vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'yellow');

                        if (vm.containerViewValue) {

                            ssn_logger.cl_normal({ callSource: '20210625-0306', message: `validateThis: Updating disiplineSelected_XXX with [${vm.containerViewValue}] vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red', false, 14);

                            vm.disciplineSelected_XYZ = { title: vm.containerViewValue };

                        }
                    }




                }



                vm.currentDisplineLookupSuccess = function (data) {

                    if (data) {

                        if (data.disciplineId) {

                            vm.disciplineSelected_XYZ = { id: data.disciplineId, title: data.disciplineShort };

                        }

                        if (data.ta_id) {

                            vm.disciplineSelected_XYZ = { id: data.ta_id, title: data.ta_description };

                        }



                    } else {


                        ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-030" }, "red");
                        ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-031" }, "red");
                        ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-032" }, "red");
                        ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-033" }, "red");


                    }

                }


                vm.currentDisplineLookupError = function (error) {

                    ssn_logger.cl_error({ callSource: '20210608-2158-A', message: `currentDisplineLookupError ` });
                    ssn_logger.cl_error({ callSource: '20210608-2158-B', message: `currentDisplineLookupError `, errorObject: error });

                }


                // Called from view input element
                vm.getDisciplines = function (lookupValue) {


                    try {
                        // For adding new entries
                        vm.containerViewValue = lookupValue;

                    } catch (ex) {

                        ssn_logger.cl_normal({ callSource: "20210607-1607-A", message: "getDiscipline call to assign containerViewValue failed" }, "Red");

                        ssn_logger.cl_error({ callSource: "20210612-0041", message: `getDiscipline call to assign containerViewValue failed [${lookupValue}]` });

                    }

                    vm.setupUrl();

                    if (lookupValue === null) lookupValue = "";




                    return executeQuery();



                    function executeQuery() {

                        const deferred = $q.defer();


                        $http({
                            method: 'GET',
                            url: vm.APIUrlListAll

                        }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);



                        return deferred.promise;


                        function typeaheadDisciplineSuccess(response) {


                            vm.addresses = [];


                            angular.forEach(response.data,

                                function (item) {


                                    if (item.disciplineId) {

                                        if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                                            vm.addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                                        }
                                    }

                                    if (item.ta_id) {

                                        if (item.ta_description.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                                            vm.addresses.push({ id: item.ta_id, title: item.ta_description });
                                        }
                                    }

                                }
                            );


                            deferred.resolve(vm.addresses);

                        }



                        function typeaheadDisciplineError(error) {

                            ssn_logger.cl_normal({ callSource: "20210608-2139", message: "typeaheadDisciplineError" }, "red", true);
                            ssn_logger.cl_error({ callSource: "20210608-2140", message: "typeaheadDisciplineError", errorObject: error });

                            deferred.reject(error);

                        }

                    }

                };





                vm.getDisciplineCurrent = function (lookupID) {


                    if (lookupID === null) {

                        console.log('20210105-2243');
                        console.log('20210105-2243');
                        console.log('20210105-2243');
                        console.log('20210105-2243');
                        console.log('20210105-2243');
                        console.log('DropdownListDirective lookupID is null');
                        console.log('----------------  CANCEL');
                        console.log('----------------  CANCEL');
                        console.log('----------------  CANCEL');
                        console.log('----------------  CANCEL');
                        console.log('----------------  CANCEL');
                        console.log('----------------  CANCEL');

                        ssn_logger.cl_error({ callSource: '20210608-1415', message: `Calling getDisciplineCurrent  with null lookupID` });
                        return null;
                    }

                    var deferred = $q.defer();


                    const localUrl = vm.APIUrlSingleRecord + "/" + lookupID;


                    $http({
                        method: 'GET',
                        url: localUrl

                    }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError).catch(typeaheadDisciplineCatch);

                    return deferred.promise;


                    function typeaheadDisciplineSuccess(response) {

                        deferred.resolve(response.data);

                    }

                    function typeaheadDisciplineError(response) {

                        console.log(`%c getDisciplineCurrent 202 lookupID  [${lookupID}] error`, 'color:red');

                        console.log(response);

                        ssn_logger.cl_error({ callSource: '20210608-1316-B', message: `Failed call to [${localUrl}]`, errorObject: response });

                        deferred.reject(response);


                    }


                    function typeaheadDisciplineCatch(response) {

                        console.log(`%c typeaheadDisciplineCatch  lookupID  [${lookupID}] catch`, 'color:red,font-size:14pt;');

                        console.log(response);

                        ssn_logger.cl_error({ callSource: '20210608-1316-B', message: `Failed call to [${localUrl}]`, errorObject: response });

                        deferred.reject(response);


                    }

                };




                vm.formErrorsByControl = function (controlName, errorName) {
                    if (vm.formName) {
                        if (vm.formName[controlName]) {
                            return (vm.formName[controlName])["$error"][errorName];
                        }
                    }
                }





            }];




            return {

                restrict: "E",
                templateUrl: "/js/DropdownList/DropDownListDirective.html",
                controller: controller,
                controllerAs: 'vm101',
                require: 'ngModel',
                bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                scope: {

                    callSource: "@",

                    keyColumn: "@key",

                    parentKeyColumn: "=parentkey",
                    parentKeyName: "@",

                    formName: "=",

                    hiddenFieldName: "@",

                    ngModel: "=",


                    addFunc: "&",
                    addFuncSource: "@",

                    // Holder for typed in value, if it doesn't exist, so it can be copied to the add form.
                    containerViewValue: "=?",

                    dropdownListDirectiveInputBoxInverse: "@"
                },

                link: {
                    pre: function (scope: IScope_DDLD, el, attrs, ctrl) {



                    }

                    ,
                    post:
                        function (scope: IScope_DDLD, el, attrs, ctrl) {


                            try {
                                this.containerViewValue = "NotSet-20210607-0213";

                            } catch (e) {
                                ssn_logger.cl_normal({ callSource: "20210607-1608-A", message: "Update containerViewValue" }, "red", true);
                                ssn_logger.cl_normal({ callSource: "20210607-1608-B", message: this.callSource }, "red", true);

                            }



                        }
                }


            }



        }]);

    }

    return {



        doSetup: doSetup

    };



}();



export { dropdownListDirective_instance };

