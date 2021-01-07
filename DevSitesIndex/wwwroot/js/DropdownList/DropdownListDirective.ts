
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive

/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>


// 09/20/2019 10:52 am - SSN - Added import angular
import * as angular from 'angular';


// 09/20/2019 10:21 am - SSN - Replace angular.module


import * as ssn_globals from '../globals';

interface LookupRecord {
    id: number
}

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


                console.log("DropdownListDirective-20210106-0707:  submitForm_2");
                console.log("DropdownListDirective-20210106-0707:  submitForm_2");
                console.log("DropdownListDirective-20210106-0707:  submitForm_2");
                console.log("DropdownListDirective-20210106-0707:  submitForm_2");

            }

            $scope.submitForm_1 = function (event, form) {

                console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                console.log("DropdownListDirective-20210106-0707:  submitForm_1");
                console.log("DropdownListDirective-20210106-0707:  submitForm_1");

                if (!form.$valid) {
                    event.preventDefault();
                }
            }


        }]);

















        downdownList_angular_module.directive('dropdownListDirective', function () {



            var controller = ['$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', function ($http, $q, $scope, $rootScope, $timeout, changeMonitorService) {

                let _isValid = false;

                var vm = this;


                vm.isValidBoolean = false;


                vm.firstRun = true;
                vm.hitCount = 0;


                vm.isInvalidDropdownListDirectiveInput = true;


                // 11/28/2019 08:29 am - SSN - Adding - Need to initial for $watch to work.
                vm.disciplineSelected_XXX = "";



                $scope.$on('$destroy', function () {

                });



                $scope.$watch('parentKeyColumn', function (newVal, oldVal) {
                    //  all directive code here
                    console.log(" 123 ......" + vm.parentKeyColumn);
                    console.log("Reloaded successfully......" + vm.parentKeyColumn);
                    console.log("Reloaded successfully......" + vm.parentKeyColumn);
                    console.log("Reloaded successfully......" + vm.parentKeyColumn);
                    console.log("Reloaded successfully......" + vm.parentKeyColumn);
                    console.log("Reloaded successfully......" + vm.parentKeyColumn);

                    console.log("[", newVal, "] [", oldVal, "]");


                });















                $scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {


                    console.log("ssn-20210105-2214----WARCH-----------");
                    console.log("---------------------------------------------");

                    console.log(oldValue);
                    console.log(newValue);

                    console.log("---------------------------------------------");


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



                    console.log("20210105-2305-----------------");
                    console.log("------------------------------");

                    console.log("this.keyColumn");
                    console.log(this.keyColumn);
                    console.log("-----------------------------");
                    console.log("----------------------------");
                    console.log("---------------------------");



                    vm.hitCount += 1;


                    if (!this.keyColumn) {
                        console.log('No keyColumn-201912291545(Note)');
                        console.log('No keyColumn-201912291545(Note)');
                        console.log('No keyColumn-201912291545(Note)');
                        console.log('No keyColumn-201912291545(Note)');
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




                    console.log("20210105-2305---B--------------");
                    console.log("------------------------------");





                    if (this.parentKeyColumn) {

                        console.log('typeof this.parentKeyColumn [', typeof (this.parentKeyColumn), "]");



                        console.log(this.parentKeyColumn);



                        var parentKeyColumnValue = this.parentKeyColumn; //undefined;



                        console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');



                        if (parentKeyColumnValue) {
                            console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
                            vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
                        }

                    }





                }




                vm.changing = function () {
                    console.log("changing changing changing changing");
                    console.log("changing changing changing changing");
                    console.log("changing changing changing changing");
                    console.log("changing changing changing changing");



                    $rootScope.$broadcast('dropdownListDirective_Change_start', { msg: 'select new value', keyColumn: vm.keyColumn, keyValue: vm.ngModelTemp });


                }



                $rootScope.$on('dropdownListDirective_Change_start', function (events, args) {

                    console.log('---------------------------------------------');
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


                        console.log('Update vm.parentKeyColumn = args.keyValue');
                        console.log(vm.parentKeyColumn);
                        console.log(args.keyValue);

                        if (args.msg == "select new value") {

                            console.log('update keyColumn jQuery  [select new value]');
                            console.log(vm.keyColumn);

                            $("[name='" + vm.keyColumn + "']").val('');
                            vm.disciplineSelected_XXX = "";
                            vm.isReady = false;
                        }






                        //console.log("Update vm.ngModelTemp with args.keyValue")
                        //vm.ngModelTemp = null;

                        //console.log('Call vm.setupUrl.  Reset vm101.disciplineSelected_XXX');

                        //if (vm.disciplineSelected_XXX) {
                        //    console.log( "Update vm.disciplineSelected_XXX")
                        //    if (vm.disciplineSelected_XXX.id) {
                        //        console.log("Update vm.disciplineSelected_XXX.id")
                        //        vm.disciplineSelected_XXX.id = "";
                        //    }
                        //    if (vm.disciplineSelected_XXX.title ) {
                        //        console.log("Update vm.disciplineSelected_XXX.title")
                        //        vm.disciplineSelected_XXX.title = "";
                        //    }


                        //        console.log("Update vm.ngModelTemp")

                        //        vm.ngModelTemp = null;

                        //}

                        vm.setupUrl();
                        console.log('---------------------------------------------');
                    }

                });


                vm.isValid = function () {


                    $rootScope.$broadcast('dropdownListDirective_Change_start', { msg: 'Starting change', keyColumn: vm.keyColumn });


                    vm.setupUrl();




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


                    console.log("20210106-0349  -----------------");
                    console.log("------------------------------");

                    console.log("keyValueSelected");
                    console.log('[', keyValueSelected, ']');
                    console.log("------------------------------");
                    // for testing only
                    // for testing only
                    // for testing only
                    // for testing only
                    /////////////////////////////////////////////////////////////////  if (keyValueSelected == null) keyValueSelected = 2;
                    // for testing only
                    // for testing only
                    // for testing only
                    // for testing only

                    console.log("------------------------------");
                    console.log("-----------------------------");
                    console.log("----------------------------");
                    console.log("---------------------------");



                    // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
                    // if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {
                    if (keyValueSelected > 0) {

                        vm.getDisciplineCurrent(keyValueSelected).then(vm.currentDisplineLookupSuccess);

                        vm.isValidBoolean = true;


                        $rootScope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: vm.keyColumn, keyValue: keyValueSelected });

                        return true;
                    }


                    console.log("20210105-2305--- Done --------------");
                    console.log("------------------------------");




                    console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']')













                    _isValid = vm.setInputVariables();


                    vm.isValidBoolean = _isValid;

                    console.log('*************** _isValid', _isValid);

                    vm.firstRun = false;




                    return _isValid;




                }


                vm.xxxxxxxxxxxxxxxxxxxxxxxxxxx = function () {


                    console.log('---------------------');
                    console.log('----------------------');
                    console.log('-----------------------');
                    console.log('------------------------');
                    console.log('-------------------------');
                    console.log('DropdownListDirective - Watch fired - 99999999999999 ');
                    console.log('-------------------------');
                    console.log('------------------------');
                    console.log('-----------------------');
                    console.log('----------------------');
                    console.log('---------------------');


                    console.log('vm.keyColumn');
                    console.log(vm.keyColumn);

                    console.log('this.keyColumn');
                    console.log(this.keyColumn);


                    console.log('vm.parentKeyColumn');
                    console.log(vm.parentKeyColumn);

                    console.log('this.parentKeyColumn');
                    console.log(this.parentKeyColumn);


                    if (vm.parentKeyColumn) {



                        $scope.$watch("vm.parentKeyColumn", function (newValue, oldValue) {

                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');
                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');
                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');

                            console.log(oldValue);
                            console.log(newValue);

                            console.log(vm.parentKeyColumn)

                            // var parentKeyColumnValue = $("[name='" + this.parentKeyColumn + "']").val();
                            var parentKeyColumnValue = vm.parentKeyColumn;

                            console.log('20201210-2158 - parentKeyColumnValue [', parentKeyColumnValue, ']');


                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');
                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');
                            console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
                            console.log('---------------------------------------------------------------');



                        }.bind(this));

                    }
                }


                vm.setInputVariables = function () {







                    let _isValid_local = false;

                    if (vm.disciplineSelected_XXX) {

                        if (vm.disciplineSelected_XXX.id) {

                            if (this.angularControlId !== vm.disciplineSelected_XXX.id) {

                                this.angularControlId = vm.disciplineSelected_XXX.id;

                                $("[name='" + this.keyColumn + "']").val(vm.disciplineSelected_XXX.id);

                                console.log('DropdownListDirective - 20201210-1703');
                                console.log('DropdownListDirective - 20201210-1703');

                                console.log('  this.keyColumn: ');
                                console.log('[', this.keyColumn, ']');

                                console.log('  this.parentKeyColumn: ');
                                console.log('[', this.parentKeyColumn, ']');


                                console.log('  vm.parentKeyColumn: ');
                                console.log('[', vm.parentKeyColumn, ']');






                                if (this.ngModelTemp) {
                                    this.ngModelTemp = vm.disciplineSelected_XXX.id;
                                }

                                console.log('  this.ngModelTemp: ');
                                console.log('[', this.ngModelTemp, ']');


                                console.log('  vm.ngModelTemp: ');
                                console.log('[', vm.ngModelTemp, ']');




                                console.log('  vm.disciplineSelected_XXX:');
                                console.log(vm.disciplineSelected_XXX);

                                console.log('  vm.disciplineSelected_XXX.id');
                                console.log(vm.disciplineSelected_XXX.id);

                                console.log('DropdownListDirective - 20201210-1703');
                                console.log('DropdownListDirective - 20201210-1703');

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

                }

                vm.validateEntry = function (event) {

                    vm.setInputVariables();
                }

                vm.currentDisplineLookupSuccess = function (data) {



                    if (data) {

                        // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller

                        console.log('DropdownListDirective - 20201210-1701');
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

                }

                vm.getDisciplines = function (lookupValue) {



                    vm.setupUrl();



                    console.log("getDiscipline-00000000001");
                    console.log("-------------------------");

                    console.log("vm.APIUrlListAll");
                    console.log(vm.APIUrlListAll);


                    console.log('  this.parentKeyColumn: ');
                    console.log('[', this.parentKeyColumn, ']');


                    console.log('  vm.parentKeyColumn: ');
                    console.log('[', vm.parentKeyColumn, ']');


                    console.log("-------------------------");




                    if (lookupValue === null) lookupValue = "";

                    var deferred = $q.defer();


                    $http({
                        method: 'GET',
                        url: vm.APIUrlListAll

                    }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);

                    return deferred.promise;


                    function typeaheadDisciplineSuccess(response) {



                        var addresses = [];

                        angular.forEach(response.data,
                            function (item) {

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

                            }
                        );

                        deferred.resolve(addresses);

                    }

                    function typeaheadDisciplineError(response) {

                        deferred.reject(response);
                    }

                };





                // 09/16/2019 02:57 am - SSN - Added to get current value and update view.

                vm.getDisciplineCurrent = function (lookupID) {


                    console.log('20210105-2243')
                    console.log('----------------')
                    console.log('getDisciplineCurrent')
                    console.log('----------------')

                    if (lookupID === null) {

                        console.log('20210105-2243')
                        console.log('----------------  CANCEL')

                        return null;
                    }

                    var deferred = $q.defer();


                    console.log('  this.keyColumn: ');
                    console.log('[', this.keyColumn, ']');

                    console.log('  this.parentKeyColumn: ');
                    console.log('[', this.parentKeyColumn, ']');



                    console.log(vm.APIUrlSingleRecord)
                    console.log(lookupID)
                    console.log(vm.ngModelTemp)

                    console.log('--------------')

                    console.log('---------------')

                    console.log('----------------')




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
                    vm.xxxxxxxxxxxxxxxxxxxxxxxxxxx();
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
                bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                scope: {

                    keyColumn: "@key",

                    // 12/10/2020 05:46 pm - SSN - [20201210-1625] - [005] - Update Timelog edit MVC
                    parentKeyColumn: "=parentkey",
                    parentKeyName: "@",


                    formName: "=", // Needed for posting form (Replacing url)


                    angularControlId: "=?aci"

                    ,
                    ngModelTemp: "="

                },

                link: function (scope, el, attrs, ctrl) {

                    console.log("1111111111");
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                    console.log(ctrl);






                    console.log('DropdownlistDirective-20210106-0730 customValidator BBBBBBBBBBBBBB');

                    function customValidator(ngModelValue) {

                        console.log('DropdownlistDirective-20210106-0730 customValidator CCCCCCCCCCCCC');
                        console.log(ngModelValue);

                        // check if contains uppercase
                        // if it does contain uppercase, set our custom `uppercaseValidator` to valid/true
                        // otherwise set it to non-valid/false

                        ctrl.$setValidity('uppercaseValidator', false);
                        return ngModelValue;
                    }


                    ctrl.$parsers.push(customValidator);




                    console.log('DropdownlistDirective-20210106-0730 customValidator DDDDDDDDDD');



                    // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus

                    if (attrs.autofocus) {

                        let setfocusFunc = function (elem) {

                            if (attrs.autofocus.toLowerCase() === "true") {

                                let inputObj = elem.find('input[type=text]').filter(':visible:first');
                                if (inputObj.val() === "") {
                                    inputObj.focus();
                                }

                            }
                        };

                        setTimeout(function () { setfocusFunc(el); }, 1000);

                    }













                }

            }



        });

    }

    return {



        doSetup: doSetup

    };


}();



export { dropdownListDirective_instance };

