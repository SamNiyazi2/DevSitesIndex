"use strict";
// 05/30/2019 07:23 pm - SSN - Created
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
var app = angular.module('timesheetApp', ['ui.bootstrap']);
app.directive('typeaheadDiscipline', function () {
    var controller = function ($http, $q, $scope) {
        var vm = this;
        vm.isValid = function () {
            console.log('test-20190530-2235 - begin 101 ');
            console.log(vm.formName);
            console.log('test-20190530-2235 - begin 102 ');
            var isInvalid = null;
            var isPristine = null;
            isInvalid = $scope.$eval("   false");
            isPristine = $scope.$eval("   false");
            console.log(isInvalid);
            console.log(isPristine);
            isInvalid = $scope.$eval(vm.formName + ".disciplineSelectedLocal.$invalid");
            isPristine = $scope.$eval(vm.formName + ".disciplineSelectedLocal.$pristine");
            //            console.log(vm.formName + ".disciplineSelectedLocal" );
            console.log(isInvalid);
            console.log(isPristine);
            console.log('test-20190530-2235 - begin 103');
            var _isValid = isInvalid && !isPristine;
            console.log('test-20190530-2235 - end ');
            return _isValid;
        };
        vm.getDisciplines = function (lookupValue) {
            if (lookupValue === null)
                lookupValue = "";
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: '/api/DisciplineAPI'
            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
            return deferred.promise;
            function typeaheadDisciplineSuccess(response) {
                var addresses = [];
                angular.forEach(response.data, function (item) {
                    if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                        addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                    }
                });
                deferred.resolve(addresses);
            }
            function typeaheadDisciplineError(response) {
                deferred.reject(response);
            }
        };
    };
    return {
        restrict: 'E',
        templateUrl: '/js/CodeReference/Typeahead_Discipline.html',
        controller: controller,
        controllerAs: 'vm101',
        bindToController: true,
        scope: {
            keyColumn: "=key",
            formName: "@"
        }
    };
});
//# sourceMappingURL=Typeahead_Discipline.js.map