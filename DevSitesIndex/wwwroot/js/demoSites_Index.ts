﻿


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

// 09/10/2019 01:47 am - SSN - [20190910-0147] - [001] - WARNING: Tried to load angular more than once.
// Turn off
    //$routeProvider.when("/detail", {
    //    controller: "devSiteUpdateController",
    //    // templateUrl: "/templates/SiteDetail.html"
    //    templateUrl: "/DevSites/Create_partial"
    //});

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

    // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] - Angular - edit div content
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
                console.log("20190908-0628 - demoSites_Index - updateDevSite Success");
                console.log(response);
            },
                (error) => {
                    console.log("20190908-0628 - demoSites_Index - updateDevSite Success");
                    console.log(error);
                });


        $scope.reset();


    };

    $scope.reset = function () {
        $scope.editablerow = [];
    };


    $scope.loadTemplate = function (content) {

        if (content.id === $scope.editablerow.id) return 'edit';
        else return 'view';
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