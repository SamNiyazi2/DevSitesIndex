// 08/31/2018 08:51 am - SSN 
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../js/DataServices.ts"/>
// 09/10/2019 03:05 am - SSN - [20190910-0147] - [006] - WARNING: Tried to load angular more than once.
// Added + 'ngRoute'
ssn_devsite_angular_module = angular.module("demoSites_Index", ['ngRoute']);
ssn_devsite_angular_module.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "demoSiteIndexController_101",
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
function demoSiteIndexController_101($scope, $http, dataService) {
    $scope.Title = "Title set in Angular controller.";
    // $scope.data = [];
    $scope.data = dataService;
    $scope.isBusy2 = true;
    //    $http.get('./api/demositesapi')
    dataService.getDevSites()
        .then(function (result) {
        $scope.data_local = ko.observable($scope.data.devSites());
    }, function (ex) {
        console.log("20190910-0101");
        console.log(ex);
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
    };
    $scope.saveData = function (indx) {
        var theIndex = $scope.data_local().findIndex(function (r) { return r.id === $scope.editablerow.id; });
        $scope.data_local()[theIndex] = $scope.editablerow;
        $scope.data.updateDevSite($scope.editablerow)
            .then(function (response) {
            console.log("20190908-0628 - demoSites_Index - updateDevSite Success");
            console.log(response);
        }, function (error) {
            console.log("20190908-0628 - demoSites_Index - updateDevSite Success");
            console.log(error);
        });
        $scope.reset();
    };
    $scope.reset = function () {
        $scope.editablerow = [];
    };
    $scope.loadTemplate = function (content) {
        if (content.id === $scope.editablerow.id)
            return 'edit';
        else
            return 'view';
    };
    // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001]
    // 09/08/2019 12:01 am - SSN - [20190908-0001] - [001] - Concurrency
    // Check we are not hyperlink invalid addresses
    $scope.isValidUrl = function (content) {
        if (!content || content.siteUrl == null)
            return false;
        var urlToTest = content.siteUrl.toLowerCase().trim();
        var c1 = urlToTest.substr(0, 7);
        var c2 = urlToTest.substr(0, 8);
        var validchemas = "|http://|https://|";
        var validOptions = 0;
        validOptions += (validchemas.indexOf(c1) == 1) ? 1 : 0;
        validOptions += (validchemas.indexOf(c2) == 1) ? 1 : 0;
        return (validOptions > 0);
    };
    // 09/08/2019 05:31 pm - SSN - Added
    $scope.setTableRowClass = function (index) {
        return index % 2 == 0 ? 'evenRow' : 'oddRow';
    };
}
console.log("20190910-0327");
console.log("Creating conroller demoSiteIndexController_101");
// 09/10/2019 03:30 am - SSN - [20190910-0147] - [008] - WARNING: Tried to load angular more than once.
// Adding line. Function was already functioning before all new changes.
ssn_devsite_angular_module.controller("demoSiteIndexController_101", demoSiteIndexController_101);
console.log("20190910-0327-Done");
function devSiteUpdateController($scope, $http, $window, dataService) {
    $scope.devSiteRecord = {};
    $scope.save = function (formSelector) {
        //alert("test submit");
        // 05/19/2019 02:20 pm - SSN - [20190519-1412] - [002] - Continue work on adding continue option for timesheet record
        // Added cast
        var f = $(formSelector);
        if (!f.valid()) {
            alert('Invalid form.');
            return false;
        }
        alert($scope.devSiteRecord.siteTitle);
        alert($scope.devSiteRecord.solution_Details);
        // $http.post("./api/demositesapi", $scope.devSiteRecord);
        dataService.addDevSite($scope.devSiteRecord)
            .then(function () {
            $window.location = '#/';
        }, function () {
            alert('Failed to save record.');
        });
    };
}
console.log('demoSites_Index loaded');
//# sourceMappingURL=demoSites_Index.js.map