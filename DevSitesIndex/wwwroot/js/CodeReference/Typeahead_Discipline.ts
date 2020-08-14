
// 05/30/2019 07:23 pm - SSN - Created

/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

var app = angular.module('timesheetApp', ['ui.bootstrap']);

app.directive('typeaheadDiscipline', function () {

    var controller = function ($http, $q, $scope) {

        var vm = this;

        vm.isValid = function () {


            var isInvalid = null;
            var isPristine = null;

            isInvalid = $scope.$eval("   false");
            isPristine = $scope.$eval("   false");

            isInvalid = $scope.$eval(vm.formName + ".disciplineSelectedLocal.$invalid");
            isPristine = $scope.$eval(vm.formName + ".disciplineSelectedLocal.$pristine");

            var _isValid = isInvalid && !isPristine;

            return _isValid;

        }


        vm.getDisciplines = function (lookupValue) {


            if (lookupValue === null) lookupValue = "";

            var deferred = $q.defer();


            $http({
                method: 'GET',
                url: '/api/DisciplineAPI'

            }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);

            return deferred.promise;


            function typeaheadDisciplineSuccess(response) {

                var addresses = [];

                angular.forEach(response.data,
                    function (item) {

                        if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                            addresses.push({ id: item.disciplineId, title: item.disciplineShort });
                        }
                    }
                );

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
        bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
        scope: {
            keyColumn: "=key",
            formName: "@"
        }

      


    };
});
