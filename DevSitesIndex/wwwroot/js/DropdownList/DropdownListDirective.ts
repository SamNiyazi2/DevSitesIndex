
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



var dropdownListDirective_instance = function () {


    var doSetup = function (defaultAppName) {


        console.log("DropdownListDirective - 20191116-0551");

        console.log('defaultAppName type and name [', typeof (defaultAppName), '] [', defaultAppName, ']');


        if (typeof (defaultAppName) != "string") {
            defaultAppName = "demoSites_Index_Timesheet";
        }


        var downdownList_angular_module = ssn_globals.globals_instance.getInstance(defaultAppName, ['ui.bootstrap']);


        var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {


            // Needed to be able to submit form
            var formName = $attrs['formName'];
            var form1 = $("[name='" + formName + "']").get(0);
            var absUrl = $location.absUrl().trim();
            ///////////////////// $(form1).attr("action", absUrl);


            $scope.submitForm_2 = function (event, form) {
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("dropdownListDirective - submitForm_2")
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

            }

            $scope.submitForm_1 = function (event, form) {

                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("dropdownListDirective - submitForm_1")
                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
                console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");


                if (!form.$valid) {
                    event.preventDefault();
                }
            }


        }]);









        downdownList_angular_module.directive('checkAvailability', checkAvailabilityFunc);

        function checkAvailabilityFunc($http, $q) {

            return {
                restrict: 'A',
                require: 'ngModel',
                scope: {

                },
                link: function (scope, element, attr, ngModel) {


                    ngModel.$asyncValidators.invalidUsername = function (modelValue, viewValue) {

                        console.log('firing ngModel  invalidUserName function xxxxxxxxxxxxxxxxxxxxx');
                        console.log('modelValue');
                        console.log(modelValue);
                        console.log('viewValue');
                        console.log(viewValue);

                          

                        var deferred = $q.defer()

                        if (modelValue && modelValue.id) {
                            deferred.resolve()
                        }
                        else {

                            deferred.reject();
                        }

                        return deferred.promise;

                    }

                }
            }
        }







        downdownList_angular_module.directive('dropdownListDirective', function () {



            var controller = function ($http, $q, $scope, $timeout) {

                let _isValid = false;

                var vm = this;


                vm.isValidBoolean = false;


                vm.firstRun = true;
                vm.hitCount = 0;


                vm.isInvalidUserName = true;






                $scope.$on('$destroy', function () {
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
                    console.log("************ Cleanup");
             
                });





                $scope.$watch('vm101.formName.$error', function (newValue, oldValue) {

                    console.log('dropdownListDirective - watching vm.formName.$error.invalidUsername (1841)');

                  
                        console.log('form change');
                        console.log(oldValue);
                        console.log(newValue);

                     

                });














                $scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {

                    console.log('dropdownListDirective - watching firing (0345)');

                    vm.isInvalidUserName = true;

                    if (newValue) {
                        console.log('oldValue');
                        console.log(oldValue);
                        console.log('newValue');
                        console.log(newValue);

                        console.log("cond 1");


                        if (newValue) {

                            console.log("cond 1");

                            if (newValue.id) {

                                console.log("cond 2");

                                if (newValue.id > 0) {

                                    console.log("cond 3");
                                    vm.isInvalidUserName = false;

                                }
                            }
                        }

                    }


                });




                vm.isValid = function () {



                    vm.hitCount += 1;

                    console.log("hitcount ", vm.hitCount);


                    if (!this.keyColumn) {
                        console.log('No keyColumn');
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

                    }


                    var keyColumnValue = $("[name='" + this.keyColumn + "']").val();

                    console.log('dropdownListDirective = (999-A) - this.angularControlId', this.angularControlId);
                    console.log('dropdownListDirective = (999-B) - keyColumnValue [', keyColumnValue, ']');



                    var keyValueSelected = null;


                    if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {
                        keyValueSelected = this.angularControlId;
                    }


                    if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {
                        keyValueSelected = keyColumnValue;
                    }


                    if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {
                        console.log("XXXXXXXXXXXXxx set defalt")
                        vm.getDisciplineCurrent(keyValueSelected).then(vm.currentDisplineLookupSuccess);

                        vm.isValidBoolean = true;
                        return true;
                    }


                    console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']')


                    _isValid = vm.setInputVariables();


                    vm.isValidBoolean = _isValid;

                    console.log('*************** _isValid', _isValid);

                    vm.firstRun = false;

                    return _isValid;




                }



                vm.setInputVariables = function () {

                    let _isValid_local = false;

                    if (vm.disciplineSelected_XXX) {

                        if (vm.disciplineSelected_XXX.id) {

                            if (this.angularControlId !== vm.disciplineSelected_XXX.id) {

                                this.angularControlId = vm.disciplineSelected_XXX.id;

                                $("[name='" + this.keyColumn + "']").val(vm.disciplineSelected_XXX.id);

                                vm.getDisciplineCurrent(this.angularControlId).then(vm.currentDisplineLookupSuccess);

                                _isValid_local = this.angularControlId > 0;

                            }
                            else {
                                console.log("nvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvn");
                                _isValid_local = true;
                            }
                        }
                    }


                    vm.isValidBoolean = _isValid_local;
                    console.log("isValidBoolean (0522)", vm.isValidBoolean)

                    return _isValid_local;

                }

                vm.validateEntry = function (event) {

                    console.log('dropdownList - validateEntry ');
                    console.log(vm.disciplineSelected_XXX);
                    console.log(event);

                    vm.setInputVariables();
                }

                vm.currentDisplineLookupSuccess = function (data) {



                    console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 101');

                    if (data) {


                        console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 102');
                         

                        // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
                         

                        console.log(data);

                        if (data.disciplineId) {

                            console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-A');
                     
                            vm.disciplineSelected_XXX = { id: data.disciplineId, title: data.disciplineShort };
                            vm.angularControlId = data.disciplineId;

                        }

                        if (data.ta_id) {
                            console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-B');
 
                            vm.disciplineSelected_XXX = { id: data.ta_id, title: data.ta_description };
                            vm.angularControlId = data.ta_id;
                        }


                    }

                }

                vm.getDisciplines = function (lookupValue) {




                    if (lookupValue === null) lookupValue = "";

                    var deferred = $q.defer();


                    $http({
                        method: 'GET',
                        url: vm.APIUrl

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


                    console.log('dropdownListDirective - getDisciplineCurrent XXXXXXXX [', lookupID, ']');

                    if (lookupID === null) return null;

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

            };












            return {

                restrict: "E",
                templateUrl: "/js/DropdownList/DropDownListDirective.html",
                controller: ['$http', '$q', '$scope', '$timeout', controller],
                controllerAs: 'vm101',
                bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
                scope: {

                    keyColumn: "@key",
                    formName: "=", // Needed for posting form (Replacing url)


                    angularControlId: "=?aci"

                },

                link: function (scope, el, attrs) {







                }

            }



        });

    }

    return {

        // 11/16/2019 06:02 pm - SSN - [20191116-1516] - [005] - Timelog edit (AngularJS client version)
        // Revised so we can pass in default application name for module.
        //        downdownList_angular_module: downdownList_angular_module,

        doSetup: doSetup

    };


}();



export { dropdownListDirective_instance };

