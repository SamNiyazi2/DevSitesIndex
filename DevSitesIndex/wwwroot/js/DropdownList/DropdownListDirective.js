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
        var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {
                // Needed to be able to submit form
                var formName = $attrs['formName'];
                var form1 = $("[name='" + formName + "']").get(0);
                var absUrl = $location.absUrl().trim();
                ///////////////////// $(form1).attr("action", absUrl);
                $scope.submitForm_2 = function (event, form) {
                };
                $scope.submitForm_1 = function (event, form) {
                    if (!form.$valid) {
                        event.preventDefault();
                    }
                };
            }]);
        downdownList_angular_module.directive('validateDropdownListDirective', validateDropdownListDirectiveFunc);
        function validateDropdownListDirectiveFunc($http, $q) {
            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {},
                link: function (scope, element, attr, ngModel) {
                    ngModel.$asyncValidators.isInvalidDropdownListDirectiveInputCheck2 = function (modelValue, viewValue) {
                        var deferred = $q.defer();
                        if (modelValue && modelValue.id) {
                            deferred.resolve();
                        }
                        else {
                            deferred.reject();
                        }
                        return deferred.promise;
                    };
                }
            };
        }
        downdownList_angular_module.directive('dropdownListDirective', function () {
            var controller = ['$http', '$q', '$scope', '$timeout', 'changeMonitorService', function ($http, $q, $scope, $timeout, changeMonitorService) {
                    var _isValid = false;
                    var vm = this;
                    vm.isValidBoolean = false;
                    vm.firstRun = true;
                    vm.hitCount = 0;
                    vm.isInvalidDropdownListDirectiveInput = true;
                    // 11/28/2019 08:29 am - SSN - Adding - Need to initial for $watch to work.
                    vm.disciplineSelected_XXX = "";
                    $scope.$on('$destroy', function () {
                    });
                    $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
                        if (vm.formName) {
                            if (vm.formName.$dirty) {
                                changeMonitorService.doSetHaveChange(true);
                            }
                        }
                        vm.isInvalidDropdownListDirectiveInput = true;
                        if (newValue) {
                            if (newValue.id) {
                                if (newValue.id > 0) {
                                    vm.isInvalidDropdownListDirectiveInput = false;
                                }
                            }
                        }
                    });
                    vm.isValid = function () {
                        vm.hitCount += 1;
                        if (!this.keyColumn) {
                            console.log('No keyColumn-201912291545(Note)');
                            return;
                        }
                        switch (this.keyColumn.toLowerCase()) {
                            case 'timelog.disciplineid':
                            case 'disciplineid':
                                vm.APIUrl = '/api/DisciplineAPI';
                                break;
                            case 'timelog.jobid':
                            case 'jobid':
                                vm.APIUrl = '/api/jobapi/typeahead';
                                break;
                            // 11/27/2019 04:46 pm - SSN - Adding
                            case 'job.projectid':
                                vm.APIUrl = '/api/projectapi/typeahead';
                                break;
                            default:
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                                console.log('DropdownListDirective - no case for [', this.keyColumn);
                        }
                        var keyColumnValue = $("[name='" + this.keyColumn + "']").val();
                        var keyValueSelected = null;
                        // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
                        //   if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {
                        if (this.angularControlId > 0) {
                            keyValueSelected = this.angularControlId;
                        }
                        // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
                        //if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {
                        if (keyColumnValue > 0) {
                            keyValueSelected = keyColumnValue;
                        }
                        // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
                        // if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {
                        if (keyValueSelected > 0) {
                            vm.getDisciplineCurrent(keyValueSelected).then(vm.currentDisplineLookupSuccess);
                            vm.isValidBoolean = true;
                            return true;
                        }
                        // Are we ever reaching this point?
                        console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']');
                        console.log("xxxxxxxxxxxxxxxxxxxxx");
                        console.log("xxxxxxxxxxxxxxxxxxxxx");
                        console.log("xxxxxxxxxxxxxxxxxxxxx");
                        console.log("xxxxxxxxxxxxxxxxxxxxx");
                        console.log("xxxxxxxxxxxxxxxxxxxxx");
                        _isValid = vm.setInputVariables();
                        vm.isValidBoolean = _isValid;
                        console.log('*************** _isValid', _isValid);
                        vm.firstRun = false;
                        return _isValid;
                    };
                    vm.setInputVariables = function () {
                        var _isValid_local = false;
                        if (vm.disciplineSelected_XXX) {
                            if (vm.disciplineSelected_XXX.id) {
                                if (this.angularControlId !== vm.disciplineSelected_XXX.id) {
                                    this.angularControlId = vm.disciplineSelected_XXX.id;
                                    $("[name='" + this.keyColumn + "']").val(vm.disciplineSelected_XXX.id);
                                    vm.getDisciplineCurrent(this.angularControlId).then(vm.currentDisplineLookupSuccess);
                                    _isValid_local = this.angularControlId > 0;
                                }
                                else {
                                    _isValid_local = true;
                                }
                            }
                        }
                        vm.isValidBoolean = _isValid_local;
                        return _isValid_local;
                    };
                    vm.validateEntry = function (event) {
                        vm.setInputVariables();
                    };
                    vm.currentDisplineLookupSuccess = function (data) {
                        if (data) {
                            // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
                            console.log(data);
                            if (data.disciplineId) {
                                vm.disciplineSelected_XXX = { id: data.disciplineId, title: data.disciplineShort };
                                vm.angularControlId = data.disciplineId;
                            }
                            if (data.ta_id) {
                                vm.disciplineSelected_XXX = { id: data.ta_id, title: data.ta_description };
                                vm.angularControlId = data.ta_id;
                            }
                        }
                    };
                    vm.getDisciplines = function (lookupValue) {
                        if (lookupValue === null)
                            lookupValue = "";
                        var deferred = $q.defer();
                        $http({
                            method: 'GET',
                            url: vm.APIUrl
                        }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                        return deferred.promise;
                        function typeaheadDisciplineSuccess(response) {
                            var addresses = [];
                            angular.forEach(response.data, function (item) {
                                // 09/16/2019 05:13 am - SSN - [20190916-0355] - [006] - Adding JobAPI controller
                                // While development in progress
                                if (item.disciplineId) {
                                    if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                                        addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                                    }
                                }
                                if (item.ta_id) {
                                    if (item.ta_description.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                                        addresses.push({ id: item.ta_id, title: item.ta_description });
                                    }
                                }
                            });
                            deferred.resolve(addresses);
                        }
                        function typeaheadDisciplineError(response) {
                            deferred.reject(response);
                        }
                    };
                    // 09/16/2019 02:57 am - SSN - Added to get current value and update view.
                    vm.getDisciplineCurrent = function (lookupID) {
                        if (lookupID === null)
                            return null;
                        var deferred = $q.defer();
                        $http({
                            method: 'GET',
                            url: vm.APIUrl + "/" + lookupID
                        }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                        return deferred.promise;
                        function typeaheadDisciplineSuccess(response) {
                            deferred.resolve(response.data);
                        }
                        function typeaheadDisciplineError(response) {
                            deferred.reject(response);
                        }
                    };
                    $timeout(function () { vm.isValid(); }, 600);
                    $timeout(function () { vm.isReady = true; }, 2000);
                }];
            return {
                restrict: "E",
                templateUrl: "/js/DropdownList/DropDownListDirective.html",
                controller: controller,
                controllerAs: 'vm101',
                bindToController: true,
                scope: {
                    keyColumn: "@key",
                    formName: "=",
                    angularControlId: "=?aci"
                },
                link: function (scope, el, attrs) {
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
                        setTimeout(function () { setfocusFunc_1(el); }, 1000);
                    }
                }
            };
        });
    };
    return {
        // 11/16/2019 06:02 pm - SSN - [20191116-1516] - [005] - Timelog edit (AngularJS client version)
        // Revised so we can pass in default application name for module.
        //        downdownList_angular_module: downdownList_angular_module,
        doSetup: doSetup
    };
}();
export { dropdownListDirective_instance };
//# sourceMappingURL=DropdownListDirective.js.map