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
                //console.log(window["timeLogRecord"]);
                //$scope.timeLogRecord = window["timeLogRecord"];
                console.log('-------------------');
                console.log('2-------------------');
                console.log('1-------------------');
                console.log($scope.timeLogRecord);
                console.log('5-----dddddddddddddd-------------');
                console.log($scope);
                console.log('5------------------');
                console.log('6-------------------');
                console.log('7-------------------');
                $scope.submitForm_1 = function (event, form) {
                    console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                    console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                    console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                    console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                    if (!form.$valid) {
                        event.preventDefault();
                        scrollIntoAppView();
                    }
                };
                // https://www.code-sample.com/2018/11/angularjs-scroll-to-error-on-submit-and.html
                var scrollIntoAppView = function () {
                    var elt = $(".has-error:visible");
                    if (elt.length) {
                        $('html, body').animate({
                            //scrollTop: (elt.first().offset().top)
                            scrollTop: (elt.first().closest('div').prevAll('div').offset().top)
                        }, 500);
                    }
                };
            }]);
        downdownList_angular_module.directive('blacklist', ["$q", function ($q) {
                return {
                    require: 'ngModel',
                    link: function (scope, elem, attr, ngModel) {
                        var blacklist = attr.blacklist.split(',');
                        ngModel.$parsers.unshift(function (value) {
                            ngModel.$setValidity(attr.name + '.blacklist', blacklist.indexOf(value) === -1);
                            console.log(ngModel);
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log(ngModel.$$rawModelValue);
                            console.log(ngModel.$modelValue);
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            console.log("101 ===============================");
                            return value;
                        });
                        ngModel.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log(modelValue);
                            console.log(viewValue);
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            console.log("102 ===============================");
                            var deferred = $q.defer();
                            // deferred.reject();
                            deferred.resolve();
                            // return the promise of the asynchronous validator
                            return deferred.promise;
                        };
                    }
                };
            }]);
        downdownList_angular_module.directive('dropdownListDirective', function () {
            var controller = ['$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', function ($http, $q, $scope, $rootScope, $timeout, changeMonitorService) {
                    var _isValid = false;
                    var vm = this;
                    var d = new Date();
                    vm.tempControlName = "DropdownListDirective_v1_" + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
                    vm.blackListErrorName = vm.tempControlName + ".blacklist";
                    vm.errorTriggered = function (errorName) {
                        return !!vm.formName.$error[errorName];
                    };
                    vm.isValidBoolean = false;
                    vm.isInvalidDropdownListDirectiveInput = true;
                    // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
                    // disciplineSelected_XXX  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log(" disciplineSelected_XXXdisciplineSelected_XXXdisciplineSelected_XXXdisciplineSelected_XXX");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    //console.log("104 ===============================");
                    vm.disciplineSelected_XXX = "";
                    $scope.$on('$destroy', function () {
                    });
                    $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
                        // Works
                        //console.log("ssn-20210105-2214----WARCH-----------1");
                        //console.log("ssn-20210105-2214----WARCH-----------2");
                        //console.log("ssn-20210105-2214----WARCH-----------3");
                        //console.log("ssn-20210105-2214----WARCH-----------4");
                        //console.log("ssn-20210105-2214----WARCH-----------");
                        //console.log("---------------------------------------------");
                        //console.log("-------  " + vm.keyColumn + "----------");
                        //console.log("-------  " + vm.keyColumn + "----------");
                        //console.log("-------  " + vm.keyColumn + "----------");
                        //console.log("-------  " + vm.keyColumn + "----------");
                        //console.log("-------  " + vm.keyColumn + "----------");
                        //console.log("---------------------------------------------");
                        //console.log("---------------------------------------------");
                        //console.log(oldValue);
                        //console.log(newValue);
                        //console.log("---------------------------------------------");
                        //console.log("----xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ");
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        if (newValue && newValue.id) {
                            vm.ngModel = newValue.id;
                            //console.log("777 --------------------- ");
                            //console.log("777 --------------------- ");
                            //console.log("777 --------------------- ");
                            //console.log(vm.hiddenFieldName);
                            //console.log(vm.hiddenFieldName);
                            //console.log(vm.hiddenFieldName);
                            //console.log("777 --------------------- ");
                            //console.log("777 --------------------- ");
                            //console.log("777 --------------------- ");
                            //console.log("777 --------------------- ");
                            if (vm.hiddenFieldName) {
                                console.log("654 --------------------- ");
                                console.log("654 --------------------- ");
                                console.log("654 --------------------- ");
                                console.log(vm.hiddenFieldName);
                                $("[name='" + vm.hiddenFieldName + "']").val(newValue.id);
                                console.log("654 --------------------- ");
                                console.log("654 --------------------- ");
                                console.log("654 --------------------- ");
                            }
                        }
                        else {
                            ////////////////////////////////////////////////////////  vm.ngModel = null;
                            ////////////////////////////////////////////////////////  vm.ngModel = null;
                            ////////////////////////////////////////////////////////  vm.ngModel = null;
                            ////////////////////////////////////////////////////////  vm.ngModel = null;
                            ////////////////////////////////////////////////////////  vm.ngModel = null;
                        }
                        //console.log("----xxxxxxxxxxxxxxxxxxx   vm.ngModel = null; xxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxx   vm.ngModel = null; xxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxx   vm.ngModel = null; xxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxx   vm.ngModel = null; xxxxxxxxxxxxxxxxxxxxx ");
                        //console.log("----xxxxxxxxxxxxxxxxxxx   vm.ngModel = null; xxxxxxxxxxxxxxxxxxxxx ");
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////////////////////////////
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
                    vm.setupUrl = function () {
                        //   console.log("20210105-2305-----------------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("20210105-2305---------   setupUrl  --------");
                        //console.log("------------------------------");
                        //console.log("this.keyColumn");
                        //console.log(this.keyColumn);
                        //console.log("-----------------------------");
                        //console.log("----------------------------");
                        //console.log("---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log("TEST CSS ---------------------------");
                        console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                        if (!this.keyColumn) {
                            console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                            console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                            console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                            console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                            console.log('%c No keyColumn-201912291545(Note)', 'font-color:red;font-size:20px;font-weight:bold;');
                            return;
                        }
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
                                break;
                            default:
                                console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
                                console.log('----------------------------');
                                console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
                                console.log('----------------------------');
                                console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
                                console.log('----------------------------');
                                console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
                                console.log('----------------------------');
                        }
                        //console.log(" ");
                        //console.log(" vm.APIUrlListAll  [" + vm.APIUrlListAll +"]");
                        //console.log(" vm.APIUrlSingleRecord [" + vm.APIUrlSingleRecord+"]");
                        //console.log(" ");
                        //console.log(" ");
                        //console.log("20210105-2305---B--------------");
                        //console.log("20210105-2305---B--------------");
                        //console.log("20210105-2305---B--------------");
                        //console.log("20210105-2305---B--------------");
                        //console.log("------------------------------");
                        if (vm.parentKeyColumn) {
                            //console.log('typeof this.parentKeyColumn [', typeof (vm.parentKeyColumn), "]");
                            //console.log('typeof this.parentKeyColumn [', typeof (vm.parentKeyColumn), "]");
                            //console.log('typeof this.parentKeyColumn [', typeof (this.parentKeyColumn), "]");
                            //console.log('typeof this.parentKeyColumn [', typeof (this.parentKeyColumn), "]");
                            //console.log('typeof this.parentKeyColumn [', typeof (this.parentKeyColumn), "]");
                            //                        console.log(this.parentKeyColumn);
                            var parentKeyColumnValue = this.parentKeyColumn; //undefined;
                            //console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');
                            //console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');
                            //console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');
                            //console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');
                            if (parentKeyColumnValue) {
                                //console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
                                //console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
                                //console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
                                //console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
                                vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
                            }
                        }
                    };
                    vm.changing = function () {
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        console.log("changing changing changing changing");
                        ///////////////////////////////////////////////
                        ///////////////////////////////////////////////
                        ///////////////////////////////////////////////
                        ///////////////////////////////////////////////
                        ///////////////////////////////////////////////
                        $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'select new value', keyColumn: vm.keyColumn, keyValue: vm.ngModel });
                    };
                    $scope.$on('dropdownListDirective_Change_start', function (events, args) {
                        console.log('---------------------------------------------');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('---------------------------------------------');
                        console.log('dropdownListDirective_Change_start - listener');
                        console.log('---------------------------------------------');
                        console.log(events);
                        console.log(args);
                        console.log('---------------------------------------------');
                        console.log('parentKeyName ( this vm bind )');
                        console.log(vm.parentKeyName);
                        console.log(args.keyColumn);
                        console.log('---------------------------------------------');
                        console.log('---------------------------------------------');
                        if (vm.parentKeyName == args.keyColumn) {
                            console.log('---------------------------------------------');
                            console.log(' vm.parentKeyColumn and args.keyValue before update:');
                            console.log(vm.parentKeyColumn);
                            console.log(args.keyValue);
                            vm.parentKeyColumn = args.keyValue;
                            //console.log('Update vm.parentKeyColumn = args.keyValue');
                            //console.log(vm.parentKeyColumn);
                            //console.log(args.keyValue);
                            if (args.msg == "select new value") {
                                //console.log('update keyColumn jQuery  [select new value]');
                                //console.log(vm.keyColumn);
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');
                                $("[name='" + vm.keyColumn + "']").val('');
                                vm.disciplineSelected_XXX = "";
                            }
                            vm.setupUrl();
                            //console.log('---------------------------------------------');
                        }
                    });
                    vm.isValid = function () {
                        $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Starting change', keyColumn: vm.keyColumn });
                        vm.setupUrl();
                        if (vm.ngModel > 0) {
                            vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess);
                            vm.isValidBoolean = true;
                            $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: vm.keyColumn, keyValue: vm.ngModel });
                            return true;
                        }
                        //////////////////////////////////////////////      _isValid = vm.setInputVariables();
                        vm.isValidBoolean = _isValid;
                        console.log('*************** _isValid', _isValid);
                        return _isValid;
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
                    };
                    vm.getDisciplines = function (lookupValue) {
                        vm.setupUrl();
                        //console.log("getDiscipline-00000000001");
                        //console.log("-------------------------");
                        //console.log("vm.APIUrlListAll");
                        //console.log(vm.APIUrlListAll);
                        //console.log('  this.parentKeyColumn: ');
                        //console.log('[', this.parentKeyColumn, ']');
                        //console.log('  vm.parentKeyColumn: ');
                        //console.log('[', vm.parentKeyColumn, ']');
                        //console.log("-------------------------");
                        if (lookupValue === null)
                            lookupValue = "";
                        var deferred = $q.defer();
                        $http({
                            method: 'GET',
                            url: vm.APIUrlListAll
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
                    vm.getDisciplineCurrent = function (lookupID) {
                        if (lookupID === null) {
                            console.log('20210105-2243');
                            console.log('20210105-2243');
                            console.log('20210105-2243');
                            console.log('20210105-2243');
                            console.log('20210105-2243');
                            console.log('----------------  CANCEL');
                            console.log('----------------  CANCEL');
                            console.log('----------------  CANCEL');
                            console.log('----------------  CANCEL');
                            console.log('----------------  CANCEL');
                            console.log('----------------  CANCEL');
                            return null;
                        }
                        var deferred = $q.defer();
                        $http({
                            method: 'GET',
                            url: vm.APIUrlSingleRecord + "/" + lookupID
                        }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
                        return deferred.promise;
                        function typeaheadDisciplineSuccess(response) {
                            deferred.resolve(response.data);
                        }
                        function typeaheadDisciplineError(response) {
                            deferred.reject(response);
                        }
                    };
                    $timeout(function () {
                        vm.isValid();
                    }, 600);
                    $timeout(function () { vm.isReady = true; }, 2000);
                }];
            return {
                restrict: "E",
                templateUrl: "/js/DropdownList/DropDownListDirective.html",
                controller: controller,
                controllerAs: 'vm101',
                require: 'ngModel',
                bindToController: true,
                scope: {
                    keyColumn: "@key",
                    // 12/10/2020 05:46 pm - SSN - [20201210-1625] - [005] - Update Timelog edit MVC
                    parentKeyColumn: "=parentkey",
                    parentKeyName: "@",
                    formName: "=",
                    hiddenFieldName: "@",
                    ngModel: "=",
                    //name: "@"
                    elementName: "@name"
                    //name:"="
                },
                link: function (scope, el, attrs, ctrl) {
                    ctrl.$parsers.unshift(function (value) {
                        var valid = false;
                        ctrl.$setValidity('blacklist', valid);
                        return value; //valid ? value : undefined;
                    });
                    function customValidator(ngModelValue) {
                        // check if contains uppercase
                        // if it does contain uppercase, set our custom `uppercaseValidator` to valid/true
                        // otherwise set it to non-valid/false
                        ctrl.$setValidity('uppercaseValidator', false);
                        return ngModelValue;
                    }
                    ctrl.$parsers.push(customValidator);
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
        doSetup: doSetup
    };
}();
export { dropdownListDirective_instance };
//# sourceMappingURL=DropdownListDirective.js.map