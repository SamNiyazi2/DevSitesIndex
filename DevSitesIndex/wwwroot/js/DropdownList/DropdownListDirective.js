// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
import * as angular from 'angular';
// 09/20/2019 10:21 am - SSN - Replace angular.module
import * as ssn_globals from '../globals';
// Add autofocus="true" to set focus
var dropdownListDirective_instance = function () {
    var doSetup = function (defaultAppName) {
        if (typeof (defaultAppName) != "string") {
            defaultAppName = "demoSites_Index_Timesheet";
        }
        var downdownList_angular_module = ssn_globals.globals_instance.getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);
        var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', 'ssn_logger', function ($scope, $attrs, $location, ssn_logger) {
                $scope.submitForm_1 = function (event, form) {
                    console.log("%c DropdownListDirective-20210106-0707:  submitForm_1", 'color:red;font-weight:bold');
                    console.log("%c DropdownListDirective-20210106-0707:  submitForm_2", 'color:red;font-weight:bold');
                    console.log("%c DropdownListDirective-20210106-0707:  submitForm_3", 'color:red;font-weight:bold');
                    console.log("%c DropdownListDirective-20210106-0707:  submitForm_4", 'color:red;font-weight:bold');
                    console.log("%c DropdownListDirective-20210106-0707:  submitForm_5", 'color:red;font-weight:bold');
                    if (!form.$valid) {
                        console.log(form);
                        event.preventDefault();
                        scrollIntoAppView();
                    }
                };
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
                };
            }]);
        downdownList_angular_module.directive('dropdownListDirectiveInputBox', ["$q", "ssn_logger", function ($q, ssn_logger) {
                return {
                    require: 'ngModel',
                    // 06/07/2021 02:04 am - SSN - [20210606-0227] - [014] - Testng for deployment
                    // We are using this for adding new items to master.
                    link: function (scope, elem, attr, ngModel_ctrl) {
                        var dropdownListDireciveInputBoxInverse = attr["dropdownListDirectiveInputBoxInverse"];
                        //console.log(`%c 20210610-2118 dropdownListDireciveInputBoxInverse [${dropdownListDireciveInputBoxInverse}]`, 'color:blue;font-size:20pt;');
                        //console.log(attr);
                        elem.bind('blur', function (event) {
                            ngModel_ctrl.$setViewValue(ngModel_ctrl.$modelValue);
                        });
                        var dropdownListDirectiveInputBox = attr.dropdownListDirectiveInputBox.split(',');
                        ngModel_ctrl.$parsers.unshift(function (value) {
                            //const testvalue1 = attr["name"];
                            //const testvalue2 = attr.name + '.dropdownListDirectiveInputBox';
                            //const testvalue3 = dropdownListDirectiveInputBox;
                            //console.log('%c *x*x*x*x*x*x*x*x*x*x*x*x*x*x*x', 'color:red;font-size:20px');
                            //console.log(`%c ---------------- ngModel_ctrl-------- 565dd ------------------`, 'color:red;font-size:20pt;');
                            //console.log(ngModel_ctrl);
                            //console.log(testvalue1);
                            //console.log('11) -------------------------------');
                            //console.log(testvalue2);
                            //console.log('22) -------------------------------');
                            //console.log(testvalue3)
                            //console.log('33) -------------------------------');
                            //console.log(value)
                            //console.log('44) -------------------------------');
                            //console.log(attr)
                            //console.log('55) -------------------------------');
                            // Do usage. Not implemented in applicatiokn logic.
                            ngModel_ctrl.$setValidity(attr.name + '.dropdownListDirectiveInputBox', dropdownListDirectiveInputBox.indexOf(value) === -1);
                            // ngModel.$setValidity(attr.name , dropdownListDirectiveInputBox.indexOf(value) === -1);
                            return value;
                        });
                        ngModel_ctrl.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {
                            // Does fire.
                            // modelValue doesn't honor selected value after it has already been set.
                            // Until we caome up with a way to reset it, disable by bypassing as valid.
                            //console.log(`%c ---------------- ngModel_ctrl-------- 149 ------------------`, 'color:red;font-size:20pt;');
                            //console.log(ngModel_ctrl);
                            //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx')
                            //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx')
                            //console.log(' 144 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxc')
                            //console.log(modelValue);
                            //console.log('---------------------------------------------')
                            //console.log(viewValue);
                            //console.log('=============================================')
                            var deferred = $q.defer();
                            var validationResult = modelValue && modelValue.id;
                            validationResult = !!validationResult;
                            //console.log('%c dorpdownlistDirecitve isValidDropdownDirectiveSelection', 'color:green;font-size:14pt');
                            //console.log(`%c dropdownListDireciveInputBoxInverse [${dropdownListDireciveInputBoxInverse}] `, 'color:green;font-size:14pt');
                            //console.log(`%c validationResult 1 [${validationResult }] `, 'color:green;font-size:14pt');
                            if (dropdownListDireciveInputBoxInverse)
                                validationResult = !validationResult;
                            //console.log(`%c validationResult 2 [${validationResult}] `, 'color:green;font-size:14pt');
                            if (validationResult) {
                                deferred.resolve();
                            }
                            else {
                                deferred.reject();
                            }
                            // return the promise of the asynchronous validator
                            return deferred.promise;
                        };
                    }
                };
            }]);
        downdownList_angular_module.directive('dropdownListDirective', ['ssn_logger', '$timeout', function (ssn_logger, $timeout) {
                var controller = ['$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', 'ssn_logger', function ($http, $q, $scope, $rootScope, $timeout, changeMonitorService, ssn_logger) {
                        var vm = this;
                        vm.isReady = false;
                        // vm.tempControlName = `DropdownListDirective_${vm.callSource}_` + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                        // vm.tempControlName = this.keyColumn;
                        vm.tempControlName = "DropdownListDirective_" + Math.random() + "_";
                        vm.blackListErrorName = vm.tempControlName + ".dropdownListDirectiveInputBox";
                        vm.dropdownListDireciveInputBoxInverse = false;
                        vm.errorTriggered = function (errorName) {
                            return !!vm.formName.$error[errorName];
                        };
                        vm.errorTriggeredWithControlName = function (controlName, errorName) {
                            // return vm.formName[controlName].$error[errorName];
                            // Testing with 'required' return a boolean.  
                            return (vm.formName[controlName])["$error"][errorName];
                        };
                        $scope.$on('dropdownListDirective_Change_start', function (events, args) {
                            var isHandled = false;
                            // This fires on start and once on change
                            if (vm.parentKeyName && vm.parentKeyName == args.keyColumn && args.keyValue) {
                                console.log('---------------------------------------------');
                                console.log(' vm.parentKeyColumn and args.keyValue before update:');
                                console.log(vm.parentKeyColumn);
                                console.log(args.keyValue);
                                vm.parentKeyColumn = args.keyValue;
                                isHandled = true;
                            }
                            if ((args.msg == "update dropdown list") && vm.keyColumn && args.keyColumn && (vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase())) {
                                ssn_logger.cl_normal({ callSource: '20210610-1708-B', message: "dropdownListDirective_Change_start update dropdown - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]" }, 'green', true);
                                console.log('events:', events);
                                console.log('args', args);
                                vm.getDisciplines(args.description);
                                vm.disciplineSelected_XXX = { id: args.id, title: args.description };
                                isHandled = true;
                            }
                            if (args.msg == "validateThis") {
                                ssn_logger.cl_normal({ callSource: '20210609-1529', message: 'call validateThis' }, 'blue', true);
                                vm.validateThis();
                                isHandled = true;
                            }
                            if (args.msg == "select new value") {
                                ////console.log('update keyColumn jQuery  [select new value]');
                                ////console.log(vm.keyColumn);
                                //console.log(`zzzzzz    000 zzzzzzz set zero 22 zzzzzzzzzzzzzzzzzzzzzzzzzzz`, 'color:red;font-weight:bold;font-size:20pt;');
                                //console.log(vm.ngModel);
                                //console.log('----------------------------------');
                                vm.ngModel = 0;
                                //console.log(vm.ngModel);
                                //console.log('----------------------------------');
                                if (vm.hiddenFieldName) {
                                    $("[name='" + vm.hiddenFieldName + "']").val('');
                                }
                                //////////////////////////////////////////////////////  vm.disciplineSelected_XXX = "";
                                isHandled = true;
                            }
                            if (!isHandled) {
                                ssn_logger.cl_normal({ callSource: '20210609-0547', message: "dropdownListDirective_Change_start not handled - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]" }, 'red');
                                console.log('events:', events);
                                console.log('args', args);
                            }
                        });
                        // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
                        // disciplineSelected_XXX  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)
                        vm.disciplineSelected_XXX = "";
                        $scope.$on('$destroy', function () {
                        });
                        $scope.$watch('vm101.ngModel', function (newValue, oldValue) {
                            //ssn_logger.cl_normal({ callSource: '20210609-1438', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'yellow');
                            //console.log(oldValue);
                            //console.log(newValue);
                            if (newValue) {
                                //                        ssn_logger.cl_normal({ callSource: '20210609-1438-B', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'green');
                                vm.validateThis();
                            }
                            else {
                                //ssn_logger.cl_normal({ callSource: '20210609-1438-C-2', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red');
                                // vm.isReady = true;
                            }
                        });
                        $scope.$watch('vm101.parentKeyColumn', function (newValue, oldValue) {
                            //console.log(`%c20210608-0054-A - parent key value changed keyColumn [${vm.keyColumn}]  parentKeyColumn [${vm.parentKeyColumn}]`, 'color:yellow');
                            //console.log(oldValue);
                            //console.log(newValue);
                            //console.log(typeof oldValue);
                            //console.log(typeof newValue);
                            //console.log('--------------------------');
                            if (oldValue != newValue && oldValue != null) { // oldValue is null on first call.
                                vm.setIsValidBoolean(false);
                                //console.log('%c20210608-0054-B - parent key value changed - reset local key   keyColumn [${vm.keyColumn}]  parentKeyColumn [${vm.parentKeyColumn}]', 'color:yellow;font-size:20px;');
                                //console.log('%c20210608-0054 - parent key value changed - reset local key', 'color:red;font-size:20px;');
                                //console.log('%c20210608-0054 - parent key value changed - reset local key', 'color:yellow;font-size:20px;');
                                // vm.ngModel = undefined;
                                vm.ngModel = 0;
                                vm.disciplineSelected_XXX = "";
                                if (vm.hiddenFieldName) {
                                    //console.log('%c20210609-1512 - hiddenFieldName - parent key value changed - reset local key', 'color:red;font-size:20px;');
                                    $("[name='" + vm.hiddenFieldName + "']").val('');
                                }
                            }
                        });
                        //$scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {
                        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
                            // Works 
                            //console.log("TTTTTTTTTTTTXXXXXXXXXXXXXXXXXXX");
                            //console.log('%c' + ' disciplineSelected_XXX', 'color:cyan;font-size:20pt;');
                            //console.log(oldValue);
                            //console.log('------------------------------------------');
                            //console.log(newValue);
                            //console.log('%c ------------------------------------------','color:red;font-size:20pt;');
                            //console.log(vm.ngModel);
                            //console.log('%c ------------------------------------------', 'color:red;font-size:20pt;');
                            //console.log('------------------------------------------');
                            //console.log('============================================');
                            if (newValue && newValue.id) {
                                vm.ngModel = newValue.id;
                                //console.log(`%c ---------------- -------- 395 ------------------`, 'color:red;font-size:20pt;');
                                //console.log( vm.ngModel  );
                                if (vm.hiddenFieldName) {
                                    $("[name='" + vm.hiddenFieldName + "']").val(newValue.id);
                                }
                            }
                            if (vm.formName) {
                                if (vm.formName.$dirty) {
                                    changeMonitorService.doSetHaveChange(true);
                                }
                            }
                            vm.setIsValidBoolean(false);
                            if (newValue) {
                                if (newValue.id) {
                                    if (newValue.id > 0) {
                                        vm.setIsValidBoolean(true);
                                    }
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
                                case 'timelog.lineitemid':
                                case 'lineitemid':
                                    vm.APIUrlListAll = '/api/job_LineItem/typeahead_jobrecords';
                                    vm.APIUrlSingleRecord = '/api/job_LineItem/typeahead';
                                    break;
                                case 'timelog.jobid':
                                case 'jobid':
                                    vm.APIUrlListAll = '/api/jobapi/typeahead';
                                    vm.APIUrlSingleRecord = '/api/jobapi/typeahead';
                                    break;
                                // 11/27/2019 04:46 pm - SSN - Adding
                                case 'job.projectid':
                                    vm.APIUrlListAll = '/api/projectapi/typeahead';
                                    vm.APIUrlSingleRecord = '/api/projectapi/typeahead';
                                    break;
                                default:
                                    console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
                                    console.log('----------------------------');
                                    console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
                                    console.log('----------------------------');
                                    console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
                                    console.log('----------------------------');
                                    console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
                                    console.log('----------------------------');
                            }
                            if (vm.APIUrlListAll == undefined) {
                                var errorMessage = "DropdownListDirective - missing definition for APIUrlListAll [" + this.keyColumn + "] 20210608-1310";
                                console.log('----------------------------');
                                console.log("%c" + errorMessage, 'color:red');
                                console.log('----------------------------');
                                ssn_logger.cl_error({ callSource: '20210608-1311', message: errorMessage });
                            }
                            if (vm.APIUrlSingleRecord == undefined) {
                                var errorMessage = "DropdownListDirective - missing definition for vm.APIUrlSingleRecord [" + this.keyColumn + "] 20210608-1427";
                                console.log('----------------------------');
                                console.log("%c" + errorMessage, 'color:red');
                                console.log('----------------------------');
                                ssn_logger.cl_error({ callSource: '20210608-1428', message: errorMessage });
                            }
                            if (vm.parentKeyColumn) {
                                var parentKeyColumnValue = this.parentKeyColumn; //undefined;
                                if (parentKeyColumnValue) {
                                    vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
                                }
                            }
                        };
                        vm.changing = function () {
                            $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'select new value', keyColumn: vm.keyColumn, keyValue: vm.ngModel });
                        };
                        vm.validateThis = function () {
                            vm.setupUrl();
                            vm.setIsValidBoolean(false);
                            if (vm.ngModel > 0) {
                                vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess, vm.currentDisplineLookupError);
                                vm.setIsValidBoolean(true);
                                // $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: vm.keyColumn, keyValue: vm.ngModel });
                            }
                            else {
                                ssn_logger.cl_normal({ callSource: '20210609-0528', message: "validateThis: vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]" }, 'red');
                                if (vm.containerViewValue) {
                                    vm.disciplineSelected_XXX = { title: vm.containerViewValue };
                                }
                                vm.isReady = true;
                            }
                        };
                        vm.currentDisplineLookupSuccess = function (data) {
                            if (data) {
                                if (data.disciplineId) {
                                    vm.disciplineSelected_XXX = { id: data.disciplineId, title: data.disciplineShort };
                                }
                                if (data.ta_id) {
                                    vm.disciplineSelected_XXX = { id: data.ta_id, title: data.ta_description };
                                }
                            }
                            else {
                                ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-030" }, "red");
                                ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-031" }, "red");
                                ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-032" }, "red");
                                ssn_logger.cl_normal({ callSource: "DropdownList-20210609-0143", message: "Debugging-033" }, "red");
                            }
                        };
                        vm.currentDisplineLookupError = function (error) {
                            ssn_logger.cl_error({ callSource: '20210608-2158-A', message: "currentDisplineLookupError " });
                            ssn_logger.cl_error({ callSource: '20210608-2158-B', message: "currentDisplineLookupError ", errorObject: error });
                        };
                        // Called from view input element
                        vm.getDisciplines = function (lookupValue) {
                            try {
                                vm.containerViewValue = lookupValue;
                            }
                            catch (ex) {
                                ssn_logger.cl_normal({ callSource: "20210607-1607-A", message: "getDiscipline call to assign containerViewValue failed" }, "Red");
                                ssn_logger.cl_error({ callSource: "20210612-0041", message: "getDiscipline call to assign containerViewValue failed [" + lookupValue + "]" });
                            }
                            vm.setupUrl();
                            if (lookupValue === null)
                                lookupValue = "";
                            var deferred = $q.defer();
                            $http({
                                method: 'GET',
                                url: vm.APIUrlListAll
                            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                            return deferred.promise;
                            function typeaheadDisciplineSuccess(response) {
                                vm.addresses = [];
                                angular.forEach(response.data, function (item) {
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
                                });
                                if (vm.addresses.length == 1) {
                                    //  vm.disciplineSelected_XXX = vm.addresses[0];
                                    vm.ngModel = vm.addresses[0].id;
                                }
                                deferred.resolve(vm.addresses);
                            }
                            function typeaheadDisciplineError(response) {
                                ssn_logger.cl_normal({ callSource: "20210608-2139", message: "typeaheadDisciplineError" }, "red");
                                ssn_logger.cl_normal({ callSource: "20210608-2140", message: response }, "red");
                                deferred.reject(response);
                            }
                        };
                        vm.getDisciplineCurrent = function (lookupID) {
                            //console.log(`%c getDisciplineCurrent 303  keyColumn[${vm.keyColumn}]   lookupID [${lookupID}]`, 'color:cyan');
                            //console.log(`%c vm.APIUrlSingleRecord  [${vm.APIUrlSingleRecord}] `, 'color:blue');
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
                                ssn_logger.cl_error({ callSource: '20210608-1415', message: "Calling getDisciplineCurrent  with null lookupID" });
                                return null;
                            }
                            var deferred = $q.defer();
                            var localUrl = vm.APIUrlSingleRecord + "/" + lookupID;
                            $http({
                                method: 'GET',
                                url: localUrl
                            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                            return deferred.promise;
                            function typeaheadDisciplineSuccess(response) {
                                //console.log(`%c getDisciplineCurrent  222 keyColumn[${vm.keyColumn}]  lookupID  [${lookupID}] success`, 'color:green');
                                //console.log(response.data);
                                deferred.resolve(response.data);
                                vm.isReady = true;
                            }
                            function typeaheadDisciplineError(response) {
                                console.log("%c getDisciplineCurrent 202 lookupID  [" + lookupID + "] error", 'color:red');
                                console.log(response);
                                ssn_logger.cl_error({ callSource: '20210608-1316', message: "Failed call to [" + localUrl + "]" });
                                deferred.reject(response);
                            }
                        };
                        vm.formErrors = function () {
                            return vm.formName;
                        };
                        vm.formErrorsByControl = function (controlName, errorName) {
                            return (vm.formName[controlName])["$error"][errorName];
                        };
                        vm.setIsValidBoolean = function (setting) {
                            vm.isValidBoolean = vm.dropdownListDireciveInputBoxInverse ? !setting : setting;
                        };
                        vm.setIsValidBoolean(true);
                    }];
                return {
                    restrict: "E",
                    templateUrl: "/js/DropdownList/DropDownListDirective.html",
                    controller: controller,
                    controllerAs: 'vm101',
                    require: 'ngModel',
                    bindToController: true,
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
                        dropdownListDireciveInputBoxInverse: "@"
                    },
                    link: {
                        pre: function (scope, el, attrs, ctrl) {
                        },
                        post: function (scope, el, attrs, ctrl) {
                            try {
                                this.containerViewValue = "NotSet-20210607-0213";
                            }
                            catch (e) {
                                ssn_logger.cl_normal({ callSource: "20210607-1608-A", message: "Update containerViewValue" }, "yellow");
                                ssn_logger.cl_normal({ callSource: "20210607-1608-B", message: this.callSource }, "yellow");
                            }
                            ctrl.$parsers.unshift(function (value) {
                                console.log('20210607-0127  link');
                                console.log('20210607-0127 2 link');
                                console.log('20210607-0127 2 link');
                                console.log('20210607-0127 222 link');
                                var valid = false;
                                ctrl.$setValidity('dropdownListDirectiveInputBox', valid);
                                return value; //valid ? value : undefined;
                            });
                            // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus
                            if (attrs.autofocus) {
                                var setfocusFunc_1 = function (elem) {
                                    if (attrs.autofocus.toLowerCase() === "true") {
                                        var inputObj = elem.find('input[type=text]').filter(':visible:first');
                                        if (inputObj.val() === "") {
                                            inputObj.focus();
                                        }
                                    }
                                };
                                $timeout(function () { setfocusFunc_1(el); }, 1000);
                            }
                            //el.bind('keydown keypress', (event) => {
                            //    if (event.which == 27) {
                            //        console.log('1')
                            //        console.log('12v')
                            //        console.log('12')
                            //        console.log('1')
                            //        scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: this.keyColumn, keyValue: this.ngModel });
                            //    }
                            //});
                        }
                    }
                };
            }]);
    };
    return {
        doSetup: doSetup
    };
}();
export { dropdownListDirective_instance };
//# sourceMappingURL=DropdownListDirective.js.map