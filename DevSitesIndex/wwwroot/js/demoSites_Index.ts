


// 08/31/2018 08:51 am - SSN 
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module


/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" />
/////////////////////////////////////// <reference path="../../../node_modules/@types/bootstrap/index.d.ts" />

/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

// Convert to TypeScript
// 05/04/2019 09:17 am - SSN - [20190504-0855] - [003] - Testing if we can replace global variable

/// <reference path="../js/DataServices.ts"/>

declare var ssn_devsite_angular_module: any;

ssn_devsite_angular_module = angular.module("demoSites_Index", []);




ssn_devsite_angular_module.config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "demoSiteIndexController",
        templateUrl: "/templates/SitesIndex.html"
    });

    $routeProvider.when("/detail", {
        controller: "devSiteUpdateController",
        // templateUrl: "/templates/SiteDetail.html"
        templateUrl: "/DevSites/Create_partial"
    });

    $routeProvider.otherwise({ redirectTo: "/" });



}]);


function demoSiteIndexController($scope, $http, dataService) {

    $scope.Title = "Title set in Angular controller.";


    // $scope.data = [];
    $scope.data = dataService;
    $scope.isBusy2 = true;

    //    $http.get('./api/demositesapi')
    dataService.getDevSites()
        .then(function (result) {
        },
            function () {

                alert('failed call to api/demositesapi (20180831-0940');
            })
        .then(function () {

            $scope.isBusy2 = false;
        });


    // 04/07/2019 12:51 pm - SSN - [20190407-1250] - Adding AngularJS call to edit DevSite

    $scope.editCommand101 = function (id) {


        alert('editCommand101 - test');
        $('#del-confirm').modal({ backdrop: 'static', keyboard: false });

    };

    // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] - Angular - edit div content
    // https://www.tutorialsplane.com/angularjs-update-table-row/

    // Initialize.
    $scope.editablerow = '';


    $scope.editContent = function (content) {

        console.log('20190906-0642');
        console.log(content);

        $scope.editablerow = angular.copy(content);

    }

    $scope.saveData = function (indx) {

        console.log("20190906-0655 - Begin");
        console.log(indx);

        $scope.rows[indx] = angular.copy($scope.editablerow);
        $scope.reset();

        console.log("20190906-0655 - End");

    };

    $scope.reset = function () {
        $scope.editablerow = [];
    };


    $scope.loadTemplate = function (content) {
      
        if (content.id === $scope.editablerow.id) return 'edit';
        else return 'view';
    }
    // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] 
}

function devSiteUpdateController($scope, $http, $window, dataService) {

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