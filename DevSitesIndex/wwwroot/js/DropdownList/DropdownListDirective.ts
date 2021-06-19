
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive

/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../shared/DataServices.ts"/>


// 09/20/2019 10:52 am - SSN - Added import angular
import * as angular from 'angular';


// 09/20/2019 10:21 am - SSN - Replace angular.module


import * as ssn_globals from '../globals';
import { dataService_instance } from '../shared/DataServices';
import { ILoggerModule } from '../Util/Logger/ILoggerErrorMessage';
import { DDLD_CONSTANTS } from './DropdownListDirectiveConstants';
import { BROADCAST_IDENTIFIERS } from '../Shared/Broadcast_Identifers';

interface LookupRecord {
    id: number
}

interface IScope_DDLD extends angular.IScope {

    formName: any
}


// Add autofocus="true" to set focus

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

                    console.log(form);



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

                        //   console.log('%c ' + 'Destroy dropdownListDirectiveInputBox - 20210614-2154', 'color:red;font-size:14pt;');

                    });

                }

                ,


                // 06/07/2021 02:04 am - SSN - [20210606-0227] - [014] - Testng for deployment
                // We are using this for adding new items to master.

                link: function (scope, elem, attr, ngModel_ctrl) {

                    const dropdownListDirectiveInputBoxInverse = attr["dropdownListDirectiveInputBoxInverse"];
                    const keyColumn = attr["keyColumn"];

                    console.log('%c dropdownListDirectiveInputBox link - 20210617-1916', 'color:yellow;font-size:14pt;');

                    console.log('dropdownListDirectiveInputBoxInverse:');
                    console.log(dropdownListDirectiveInputBoxInverse);
                    console.log('keyColumn:');
                    console.log(keyColumn);


                    //console.log(`%c 20210610-2118 dropdownListDirectiveInputBoxInverse [${dropdownListDirectiveInputBoxInverse}]`, 'color:blue;font-size:20pt;');
                    //console.log(attr);


                    elem.bind('blur', (event) => {

                        console.log('%c dropdown blur - 20210617-1805 ', 'color:yellow;font-size:10pt;');



                        console.log('ngModel_ctrl.$modelValue');
                        console.log(ngModel_ctrl.$modelValue);


                        console.log('ngModel_ctrl.$viewValue');
                        console.log(ngModel_ctrl.$viewValue);

                        console.log('ngModel_ctrl');
                        console.log(ngModel_ctrl);










                        //  This updates the view to reflect the new item but does not update the typeahead source. ("No results found" is displayed)
                        if (ngModel_ctrl.$modelValue) {
                            //console.log('%c dropdown blur - setting $setViewValue 20210618-0340-aaaa', 'color:yellow;font-size:14pt;');
                            ngModel_ctrl.$setViewValue(ngModel_ctrl.$modelValue)
                        }
                        else {
                            console.log('%c dropdown blur - NOT setting modelValue 20210618-0340', 'color:RED;font-size:14pt;');
                        }



                        if (dropdownListDirectiveInputBoxInverse && dropdownListDirectiveInputBoxInverse=="true") {


                            console.log(`%c  20210617-1901 - dropdownListDirectiveInputBoxInverse [${dropdownListDirectiveInputBoxInverse}]`, 'color:yellow;font-size:12pt');

                            // 06/18/2021 06:43 pm - SSN - Change $modelValue to $modelValue.id (edit timesheet)
                            // scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE, keyColumn: keyColumn, keyValue: ngModel_ctrl.$ModelValue });
                            scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE, callSource: '20210618-1858', keyColumn: keyColumn, keyValue: ngModel_ctrl.$modelValue.id });

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



                    ngModel_ctrl.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {

                        // Does fire.
                        // modelValue doesn't honor selected value after it has already been set.
                        // Until we caome up with a way to reset it, disable by bypassing as valid.

                        console.log('20210618-1815');
                        console.log('ngModel_ctrl.$dirty:')
                        console.log(ngModel_ctrl.$dirty)

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

                vm.isReady = false;


                // 06/18/2021 07:55 pm - SSN
                // Move outside function to post new entries.  Looking to update typeahead on addition on new entries so "No results found" could disappear

                vm.addresses = [];

                // vm.tempControlName = `DropdownListDirective_${vm.callSource}_` + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                // vm.tempControlName = this.keyColumn;
                vm.tempControlName = `DropdownListDirective_${Math.random()}_`;

                vm.blackListErrorName = vm.tempControlName + ".dropdownListDirectiveInputBox";

                vm.dropdownListDirectiveInputBoxInverse = false;


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

                    console.log(`%c [${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}]`, 'color:blue;font-size:12pt');
                    console.log(events);
                    console.log(args);
                    console.log('-----------------------------');







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
                                callSource: '20210617-2154', message: `hiddenFieldName not defined while updating [${args.keyColumn}]} vm.CallSource [${vm.callSource}]`
                            });

                        }

                        isHandled = true;

                    }












                    if ((args.msg == DDLD_CONSTANTS.UPDATE_DROPDOWN_LIST) && vm.keyColumn && args.keyColumn && (vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase())) {

                        ssn_logger.cl_normal({ callSource: '20210610-1708-B-2', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] update dropdown - vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'green', true);
                        console.log('events:', events);
                        console.log('args', args);

                        ///////////////////////////////////////////////////////////////////////////  vm.getDisciplines(args.description);

                        vm.disciplineSelected_XXX = { id: args.id, title: args.description };


                        ssn_logger.cl_normal({ callSource: '20210618-1952', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] adding new entry to 'addresses'` }, 'red', true);
                        vm.addresses.push({ id: args.id, title: args.description });


                        ///////////////////////////////////////////////     vm.ngModel.$setViewValue(args.description)


                        //$timeout(() => {

                        //    console.log('20210618-0330 - setViewValue ');
                        //    vm.ngModel = "";
                        //}
                        //    , 1000);


                        //$timeout(() => {

                        //    console.log('20210618-0330 - setViewValue ');
                        //    vm.ngModel = args.description ;
                        //}
                        //    , 2000);



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

                        ////////////////////////////////////////////////////////  vm.disciplineSelected_XXX = "";

                        isHandled = true;
                    }



                    if (!isHandled) {

                        ssn_logger.cl_normal({ callSource: '20210609-0547', message: `[${BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE}] not handled - vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red');
                        console.log('events:', events);
                        console.log('args', args);
                    }


                });






                // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
                // disciplineSelected_XXX  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)


                vm.disciplineSelected_XXX = "";

                $scope.$on('$destroy', function () {

                    //   console.log('%c ' + 'Destroy DropDownListDirective - 20210614-2152', 'color:red;font-size:14pt;');

                });



                $scope.$watch('vm101.ngModel', function (newValue, oldValue) {

                    ssn_logger.cl_normal({ callSource: '20210609-1438', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'yellow');

                    console.log(oldValue);
                    console.log(newValue);

                    // 06/13/2021 10:12 pm - SSN - [20210613-0452] - [022] - Adding tags to DevSite

                    if (newValue) {
                        // if (newValue != undefined) {

                        ssn_logger.cl_normal({ callSource: '20210609-1438-B', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'green');

                        vm.validateThis();

                    } else {

                        ssn_logger.cl_normal({ callSource: '20210609-1438-C-2', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red');



                        // vm.isReady = true;


                    }

                });


                $scope.$watch('vm101.parentKeyColumn', function (newValue, oldValue) {


                    ssn_logger.cl_normal({ callSource: '20210617-1845', message: 'vm101.parentKeyColumn - watch' }, 'yellow', true);


                    if (oldValue != newValue && oldValue != null) { // oldValue is null on first call.


                        // vm.ngModel = undefined;

                        // 06/13/2021 10:07 pm - SSN - [20210613-0452] - [021] - Adding tags to DevSite 


                        vm.ngModel = -1020;

                        console.log(`%c vm101.parentKeyColumn - setting ngModel [${vm.ngModel}]  keyColumn [${vm.keyColumn}]  20210617-1214`, 'color:cyan;font-size:12pt');

                        //vm.ngModel = -1;



                        vm.disciplineSelected_XXX = "";

                        if (vm.hiddenFieldName) {

                            console.log(`%c vm101.parentKeyColumn - setting ngModel [${vm.ngModel}]  keyColumn [${vm.keyColumn}]  20210617-1847 - blank out [${vm.hiddenFieldName}]`, 'color:cyan;font-size:12pt');


                            $("[name='" + vm.hiddenFieldName + "']").val('');

                        }

                    }

                });


                //$scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {
                $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {


                    console.log(`%c vm101.disciplineSelected_XXX watch - 20210617-1227`, 'color:cyan;font-size:12pt');

                    console.log('%c shows null for new value ', 'color:red');

                    console.log(vm.disciplineSelected_XXX);

                    console.log('newValue:');
                    console.log(newValue);

                    console.log('oldValue:');
                    console.log(oldValue);



                    console.log('%c shows null for both values ', 'color:red');

                    console.log('vm.$modelValue:');
                    console.log(vm.$modelValue);

                    console.log('vm.$viewValue:');
                    console.log(vm.$viewValue);


                    if (newValue && newValue.id) {



                        vm.ngModel = newValue.id;

                        console.log(`%c setting ngModel [${vm.ngModel}]  keyColumn [${vm.keyColumn}] 20210617-1213`, 'color:cyan;font-size:12pt');




                        if (vm.hiddenFieldName) {

                            console.log(`%c setting ngModel [${vm.ngModel}]  keyColumn [${vm.keyColumn}] update vm.hiddenFieldName  [${vm.hiddenFieldName}]  with [${newValue.id}] 20210618-2008`, 'color:red;font-size:12pt');

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

                    $scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.SELECT_NEW_VALUE, callSource:"20210618-1916-changing", keyColumn: vm.keyColumn, keyValue: vm.ngModel });


                }

                // 06/16/2021 10:36 pm - SSN - [20210613-0452] - [107] - Adding tags to DevSite

                vm.typeaheadOnSelect = function (item, model, label) {

                    console.log(`%c typeaheadOnSelect 20210616-2237 `);
                    console.log('item xxxxxxxxx:')
                    console.log(item)
                    console.log('model:')
                    console.log(model)
                    console.log('label:')
                    console.log(label)


                    vm.disciplineSelected_XXX = item;


                    vm.ngModel = item.id;

                    console.log(`%c setting ngModel [${vm.ngModel}]  keyColumn [${vm.keyColumn}]  20210617-1212`, 'color:cyan;font-size:12pt');
                    console.log('item:');
                    console.log(item);
                    console.log('-----------------------');
                    console.log(' ');

                }



                vm.validateThis = function () {


                    vm.setupUrl();


                    // 06/13/2021 10:39 pm - SSN - [20210613-0452] - [026] - Adding tags to DevSite


                    console.log('%c DropdownListDirective vm.validateThis - 20210617-1043  ', 'color:yellow');
                    console.log(vm.ngModel);

                    if (vm.ngModel > 0) {
                        // if (vm.ngModel != undefined) {

                        vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess, vm.currentDisplineLookupError);


                        // $scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CHANGE_MSG.HAS_VALID_VALUE, keyColumn: vm.keyColumn, keyValue: vm.ngModel });


                    } else {

                        ssn_logger.cl_normal({ callSource: '20210609-0528', message: `validateThis: vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'yellow');

                        if (vm.containerViewValue) {
                            vm.disciplineSelected_XXX = { title: vm.containerViewValue };

                        }
                        vm.isReady = true;
                    }




                }



                vm.currentDisplineLookupSuccess = function (data) {

                    console.log('%c currentDisplineLookupSuccess - 20210617-1051', 'color:yellow');
                    console.log('%c update vm.disciplineSelected_XXX  20210618-1918', 'color:yellow;font-size:12pt;');
                    console.log('%c check data.disciplineid data.ta_id ', 'color:red;font-size:12pt;');

                     console.log(data);


                    if (data) {

                        if (data.disciplineId) {

                            vm.disciplineSelected_XXX = { id: data.disciplineId, title: data.disciplineShort };

                        }

                        if (data.ta_id) {

                            vm.disciplineSelected_XXX = { id: data.ta_id, title: data.ta_description };

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

                    console.log('%c getDisciplines  20210618-1919', 'color:yellow;font-size:16pt;');

                    try {
// For adding new entries
                        vm.containerViewValue = lookupValue;

                    } catch (ex) {

                        ssn_logger.cl_normal({ callSource: "20210607-1607-A", message: "getDiscipline call to assign containerViewValue failed" }, "Red");

                        ssn_logger.cl_error({ callSource: "20210612-0041", message: `getDiscipline call to assign containerViewValue failed [${lookupValue}]` });

                    }

                    vm.setupUrl();

                    if (lookupValue === null) lookupValue = "";



                    if ($scope.queryIsInProgress) {
                        return $scope.deferred_getDisciplineQuery.promise;
                    } else {
                        return executeQuery();
                    }



                    function executeQuery() {

                        $scope.queryIsInProgress = true;
                        $scope.deferred_getDisciplineQuery = $q.defer();


                        console.log(' ');
                        console.log('%c getDisciplines - 20210617-1119 ', 'color:yellow');

                        console.log('vm.APIUrlListAll:');
                        console.log(vm.APIUrlListAll);



                        // Debounce
                        $timeout(() => {

                            $http({
                                method: 'GET',
                                url: vm.APIUrlListAll

                            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);

                        }, 500);


                        return $scope.deferred_getDisciplineQuery.promise;


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



                            if (vm.addresses.length == 1) {

                                //  vm.disciplineSelected_XXX = vm.addresses[0];


                                // 06/12/2021 01:15 pm - SSN - Testing if can get over preventing users from altering single matches.
                                //////////////// vm.disciplineSelected_XXX = { id: vm.addresses[0].id };
                                // vm.ngModel = vm.addresses[0].id;

                            }


                            $scope.deferred_getDisciplineQuery.resolve(vm.addresses);

                            $scope.queryIsInProgress = false;

                        }

                        function typeaheadDisciplineError(error) {

                            ssn_logger.cl_normal({ callSource: "20210608-2139", message: "typeaheadDisciplineError" }, "red",true);
                            ssn_logger.cl_error({ callSource: "20210608-2140", message: "typeaheadDisciplineError", errorObject: error });

                            $scope.deferred_getDisciplineQuery.reject(error);
                            $scope.queryIsInProgress = false;

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

                        vm.isReady = true;
                    }

                    function typeaheadDisciplineError(response) {

                        console.log(`%c getDisciplineCurrent 202 lookupID  [${lookupID}] error`, 'color:red');

                        console.log(response);

                        ssn_logger.cl_error({ callSource: '20210608-1316', message: `Failed call to [${localUrl}]` });

                        deferred.reject(response);


                    }


                    function typeaheadDisciplineCatch(response) {

                        console.log(`%c typeaheadDisciplineCatch  lookupID  [${lookupID}] catch`, 'color:red,font-size:14pt;');

                        console.log(response);

                        ssn_logger.cl_error({ callSource: '20210608-1316', message: `Failed call to [${localUrl}]` });

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
                                ssn_logger.cl_normal({ callSource: "20210607-1608-A", message: "Update containerViewValue" }, "red",true);
                                ssn_logger.cl_normal({ callSource: "20210607-1608-B", message: this.callSource }, "red",true);

                            }


                            //ctrl.$parsers.unshift(function (value) {


                            //    console.log('20210607-0127  link');
                            //    console.log('20210607-0127 2 link');
                            //    console.log('20210607-0127 2 link');
                            //    console.log('20210607-0127 222 link');

                            //    var valid = false;
                            //    ctrl.$setValidity('dropdownListDirectiveInputBox', valid);
                            //    return value; //valid ? value : undefined;
                            //});










                            // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus

                            if (attrs.autofocus) {

                                console.log('attr.autofocus');
                                console.log('attr.autofocus');
                                console.log('attr.autofocus');

                                let setfocusFunc = (elem) => {

                                    console.log('attr.autofocus - 2');
                                    console.log('attr.autofocus - 2');
                                    console.log('attr.autofocus - 2');

                                    if (attrs.autofocus.toLowerCase() === "true") {

                                        console.log('attr.autofocus - 3');
                                        console.log('attr.autofocus - 3');
                                        console.log('attr.autofocus - 3');

                                        let inputObj = elem.find('input[type=text]').filter(':visible:first');

                                        if (inputObj.val() === "") {




                                            inputObj.focus();




                                            if (scope.formName) {

                                                console.log('%c ' + '20210612-0353-A - setfocus ', 'color:yellow;font-size:14pt;')
                                                console.log('%c ' + 'thisformName:', 'color:yellow;font-size:14pt;')
                                                console.log(scope.formName)

                                                console.log('%c ' + 'thisformName.$touched', 'color:yellow;font-size:14pt;')
                                                console.log('%c ' + scope.formName.$touched, 'color:yellow;font-size:14pt;')

                                                scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.DO_SET_FOCUS, jqueryObjectRef: inputObj });



                                            }
                                            else {
                                                console.log('%c ' + '20210612-0353-B - setfocus  - NO FORM NAME', 'color:red;font-size:14pt;')

                                            }
                                        }

                                    }
                                };

                                $timeout(function () { setfocusFunc(el); }, 1000);



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

