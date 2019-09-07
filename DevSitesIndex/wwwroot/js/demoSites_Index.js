// 08/31/2018 08:51 am - SSN 
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../js/DataServices.ts"/>
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
        var test = "Test-2090609-1506 - dataService.getDevSites call";
        console.log(test);
        console.log("demosite-20190906-1710 - then");
        console.log(result);
        console.log($scope.data.devSites());
        console.log("demosite-20190906-1710 - ======================================");
        $scope.data_local = ko.observable($scope.data.devSites());
        //$scope.data_local =  $scope.data.devSites;
        console.log($scope.data_local());
    }, function () {
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
        // $scope.editablerow = angular.copy(content);
        $scope.editablerow = content;
    };
    $scope.saveData = function (indx) {
        console.log("20190906-0655 - saveData Begin indx [" + indx + "]");
        console.log(indx);
        //        console.log($scope.data_local[indx]);
        //        $scope.data_local[indx] = angular.copy($scope.editablerow);
        console.log("After assignment");
        console.log($scope.data_local()[indx]);
        console.log("Result from save (20190906-1636-B)");
        $scope.data.updateDevSite($scope.data_local()[indx])
            .then(function (response) {
            console.log("Then response");
            console.log(response);
        }, function (error) {
            console.log("Failed:");
            console.log(error);
        });
        $scope.reset();
        console.log("20190906-0655 - saveData Begin indx [" + indx + "]");
    };
    $scope.reset = function () {
        $scope.editablerow = [];
    };
    $scope.loadTemplate = function (content) {
        console.log("loadTemplate");
        //  console.log(content);
        if (content.id === $scope.editablerow.id)
            return 'edit';
        else
            return 'view';
    };
    // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] 
}
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
//# sourceMappingURL=demoSites_Index.js.map