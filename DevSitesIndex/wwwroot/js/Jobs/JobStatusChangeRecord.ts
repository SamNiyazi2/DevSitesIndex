﻿
// 11/14/2019 07:31 pm - SSN - [20191114-1931] - [001] - Job - option to change job status

import * as ssn_globals from "../globals";

var jobStatusChangeRecord_instance = function () {


    var jobStatusChangeRecord_Module: angular.IModule = ssn_globals.globals_instance.getInstance("timesheetApp");
    /////////////////////////////////   jobsIndexController
    // , '$http', '$q', 'dataService', '$timeout', '$sce', '$uibModal'
    // , $http, $q, dataService, $timeout, $sce, $uibModal
    jobStatusChangeRecord_Module.controller('ProjectIndexController', ['$scope',


        function ($scope) {

            console.log('ProjectIndexController- 20191115-1621-A');



        }]);


    jobStatusChangeRecord_Module.directive('jobStatusChangeRecord', function () {


        let parentTable = null;

        return {

            templateUrl: '/js/Jobs/jobStatusChangeRecord.html',

            scope: {
                actionLink: '@',
                optionLabel: '@'
            },


            link: function (scope, el, attrs) {


                if (parentTable == null) {
                    parentTable = el.parents('table');
                }

                let parentWidth = parentTable.width() - 20; //  jobStatusChangeRecord_on padding

                el.find('.jobStatusChangeRecord_on').css({ 'width': parentWidth + 'px' });

            },


            controller: function ($scope) {

                $scope.displayContent = false;

                $scope.showContent = function () {

                    $scope.displayContent = !$scope.displayContent;
                }


            }

        };

    });



    return {
        jobStatusChangeRecord_Module: jobStatusChangeRecord_Module
    };


}();




export { jobStatusChangeRecord_instance };