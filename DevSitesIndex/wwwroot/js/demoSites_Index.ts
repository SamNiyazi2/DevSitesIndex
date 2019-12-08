

// 09/21/2019 08:00 am - SSN - [20190921-0357] - [011] - Creating multiple entry for Webpack



/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../node_modules/@types//knockout/index.d.ts" />
/// <reference path="../js/DataServices.ts"/>
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />



import * as angular from 'angular'
import * as globals from './globals';


var ssn_devsite_angular_module_instance = function () {

    var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']);

        // 12/07/2019 07:12 am - SSN - [20191207-0704] - [002] - AngularJS - Routing - Authentication
    // Moved  $routeProvider code to Routing_Config.ts


    // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
    // = function
    var demoSiteIndexController_101 = function ($scope, $http, $window, dataService) {

        $scope.Title = "Title set in Angular controller.";


        // $scope.data = [];
        $scope.data = dataService;

        $scope.isBusy2 = true;

        //    $http.get('./api/demositesapi')
        dataService.getDevSites()
            .then(function (result) {

                $scope.data_local = ko.observable($scope.data.devSites());

            },
                function (ex) {

                    console.log("20190910-0101");
                    console.log(ex)
                    alert('failed call to api/demositesapi (20180831-0940) - See console.');
                })
            .then(function () {

                $scope.isBusy2 = false;
            });


        // 04/07/2019 12:51 pm - SSN - [20190407-1250] - Adding AngularJS call to edit DevSite

        $scope.editCommand101 = function (id) {


            alert('editCommand101 - test');
            $('#del-confirm').modal({ backdrop: 'static', keyboard: false });

        };

        // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] - Angular - editMode div content
        // https://www.tutorialsplane.com/angularjs-update-table-row/

        // Initialize.
        $scope.editablerow = '';



        $scope.editContent = function (content) {

            $scope.editablerow = angular.copy(content);
            ///////////////////////////////////////////$scope.editablerow = content;

        }

        $scope.saveData = function (indx) {


            let theIndex = $scope.data_local().findIndex(r => r.id === $scope.editablerow.id);

            $scope.data_local()[theIndex] = $scope.editablerow;

            $scope.data.updateDevSite($scope.editablerow)
                .then((response) => {
                    console.log("20190908-0628-S - demoSites_Index - updateDevSite Success");
                    console.log(response);
                },
                    (error) => {
                        console.log("20190908-0628-E - demoSites_Index - updateDevSite Error");
                        console.log(error);
                    });


            $scope.reset();


        };

        $scope.reset = function () {
            $scope.editablerow = [];
        };


        $scope.loadTemplate = function (content) {

            if (content.id === $scope.editablerow.id) return 'editMode';
            else return 'viewMode';
        }



        // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001]

        // 09/08/2019 12:01 am - SSN - [20190908-0001] - [001] - Concurrency
        // Check we are not hyperlink invalid addresses

        $scope.isValidUrl = function (content) {


            if (!content || content.siteUrl == null) return false;

            const urlToTest = content.siteUrl.toLowerCase().trim();


            let c1 = urlToTest.substr(0, 7);
            let c2 = urlToTest.substr(0, 8);

            const validchemas = "|http://|https://|";

            let validOptions = 0;

            validOptions += (validchemas.indexOf(c1) == 1) ? 1 : 0;
            validOptions += (validchemas.indexOf(c2) == 1) ? 1 : 0;

            return (validOptions > 0);

        }

        // 09/08/2019 05:31 pm - SSN - Added
        $scope.setTableRowClass = function (index) {

            return index % 2 == 0 ? 'evenRow' : 'oddRow';
        }

    }



    ssn_devsite_angular_module.controller("demoSiteIndexController_101", ['$scope', '$http', '$window', 'dataService', demoSiteIndexController_101]);

    // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
    // function devSiteUpdateController  
    var devSiteUpdateController = function ($scope, $http, $window, dataService) {

        $scope.devSiteRecord = {
        };


        $scope.save = function (formSelector) {
            //alert("test submit");

            // 05/19/2019 02:20 pm - SSN - [20190519-1412] - [002] - Continue work on adding continue option for timesheet record
            // Added cast
            var f: HTMLFormElement = <any>$(formSelector);

            if (!f.valid()) {
                alert('Invalid form.');
                return false;
            }
            alert($scope.devSiteRecord.siteTitle);
            alert($scope.devSiteRecord.solution_Details);

            // $http.post("./api/demositesapi", $scope.devSiteRecord);
            dataService.addDevSite($scope.devSiteRecord)
                .then(
                    function () {
                        $window.location = '#/';
                    },
                    function () {
                        alert('Failed to save record.');
                    });



        };
    }


    return {
        ssn_devsite_angular_module: ssn_devsite_angular_module
    };

}();



export { ssn_devsite_angular_module_instance };
