
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive

/// <reference path="../../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>

declare var ssn_devsite_angular_module: any;

var downdownList_angular_module = angular.module("demoSites_Index_Timesheet", ['ui.bootstrap']);


downdownList_angular_module.controller('utilityController', function ($scope, $attrs, $location) {

    console.log('20190913-0950 -  controller top ');

    var formName = $attrs['formName'];

    var form1 = $("[name='" + formName + "']").get(0);
 
    var absUrl = $location.absUrl().trim();
 

    $(form1).attr("action", absUrl  );
   
   
    console.log('20190913-1356 -  controller bottom ');

    $scope.submitForm_1 = {
        onSubmit: function (event) {
            console.log('20190913-0948 - Submitting form 1');

            //console.log(this.formName);
            //console.log("------------------------------------------");
            //console.log(this.keyColumn);


            if (!this.formName.$valid) {
                event.preventDefault();
            }
        }
    }
 

    console.log('20190913-0951 -  controller bottom ');

});


downdownList_angular_module.directive('dropdownListDirective', function () {

    var controller = function ($http, $q, $scope) {

        var vm = this;

        vm.isValid = function () {


            console.log("--------------------------------------------------");


            console.log('test-20190913-2235 - begin 101 ');

            //console.log(this.formName);
            //console.log(this.keyColumn);

            console.log($scope.disciplineSelected);

            var _isValid = false;
            if ($scope.disciplineSelected) {

                var selectedValue = $scope.disciplineSelected.id;
                if (selectedValue) {

                    console.log($scope.disciplineSelected.id);
                    $("[name='" + this.keyColumn + "']").val($scope.disciplineSelected.id); 
                    _isValid = true;
                }
            }

            console.log("--------------------------------------------------");


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

        restrict: "E",
        templateUrl: "/js/DropdownList/DropDownListDirective.html",
        controller: controller,
        controllerAs: 'vm101',
        bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
        scope: {
            keyColumn: "@key",
            formName: "="
        }
    };

});
