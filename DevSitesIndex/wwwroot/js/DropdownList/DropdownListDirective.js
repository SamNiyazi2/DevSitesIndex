// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
import * as angular from 'angular';
// 09/20/2019 10:21 am - SSN - Replace angular.module
import * as ssn_globals from '../globals';
var dropdownListDirective_instance = function () {
    var downdownList_angular_module = ssn_globals.globals_instance.getInstance("demoSites_Index_Timesheet", ['ui.bootstrap']);
    downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {
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
    downdownList_angular_module.directive('dropdownListDirective', function () {
        var controller = function ($http, $q, $scope) {
            var vm = this;
            vm.firstRun = true;
            vm.isValid = function () {
                var _isValid = false;
                if ($scope.disciplineSelected) {
                    var selectedValue = $scope.disciplineSelected.id;
                    if (selectedValue) {
                        $("[name='" + this.keyColumn + "']").val($scope.disciplineSelected.id);
                        _isValid = true;
                    }
                }
                // 09/16/2019 02:48 am - SSN - Added to set default value
                var currentValue = $("[name='" + this.keyColumn + "']").val();
                if (vm.firstRun) {
                    // 09/16/2019 04:18 am - SSN - [20190916-0355] - [003] - Adding JobAPI controller
                    vm.APIUrl = "NotSet_20190916_0415";
                    vm.typeAheadLabel = "NotSet_20190916_0534";
                    switch (this.keyColumn.toLowerCase()) {
                        case 'timelog.disciplineid':
                            vm.APIUrl = '/api/DisciplineAPI';
                            vm.typeAheadLabel = "Descipline";
                            break;
                        case 'timelog.jobid':
                            vm.APIUrl = '/api/jobapi/typeahead';
                            vm.typeAheadLabel = "Job Title";
                            break;
                    }
                    vm.firstRun = false;
                    vm.getDisciplineCurrent(currentValue).then(vm.currentDisplineLookupSuccess);
                }
                return _isValid;
            };
            vm.currentDisplineLookupSuccess = function (data) {
                if (data) {
                    ////                    $scope.disciplineSelected = { id: response.data.disciplineId, title: response.data.disciplineShort };
                    //addresses.push({ id: response.data.disciplineId, title: response.data.disciplineShort });
                    // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
                    if (data.disciplineId) {
                        $scope.disciplineSelected = { id: data.disciplineId, title: data.disciplineShort };
                    }
                    if (data.ta_id) {
                        $scope.disciplineSelected = { id: data.ta_id, title: data.ta_description };
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
        };
        return {
            restrict: "E",
            templateUrl: "/js/DropdownList/DropDownListDirective.html",
            controller: ['$http', '$q', '$scope', controller],
            controllerAs: 'vm101',
            bindToController: true,
            scope: {
                keyColumn: "@key",
                formName: "=" // Needed for posting form (Replacing url)
            }
        };
    });
    return {
        downdownList_angular_module: downdownList_angular_module
    };
}();
export { dropdownListDirective_instance };
//# sourceMappingURL=DropdownListDirective.js.map