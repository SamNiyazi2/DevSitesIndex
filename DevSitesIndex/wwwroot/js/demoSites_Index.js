ssn_devsite_angular_module = angular.module("demoSites_Index", []);
ssn_devsite_angular_module.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "demoSiteIndexController",
            templateUrl: "/templates/SitesIndex.html"
        });
        $routeProvider.when("/detail", {
            controller: "devSiteUpdateController",
            templateUrl: "/DevSites/Create_partial"
        });
        $routeProvider.otherwise({ redirectTo: "/" });
    }]);
function demoSiteIndexController($scope, $http, dataService) {
    $scope.Title = "Title set in Angular controller.";
    $scope.data = dataService;
    $scope.isBusy2 = true;
    dataService.getDevSites()
        .then(function (result) {
    }, function () {
        alert('failed call to api/demositesapi (20180831-0940');
    })
        .then(function () {
        $scope.isBusy2 = false;
    });
    $scope.editCommand101 = function (id) {
        alert('editCommand101 - test');
        $('#del-confirm').modal({ backdrop: 'static', keyboard: false });
    };
}
function devSiteUpdateController($scope, $http, $window, dataService) {
    $scope.devSiteRecord = {};
    $scope.save = function (formSelector) {
        var f = $(formSelector);
        if (!f.valid()) {
            alert('Invalid form.');
            return false;
        }
        alert($scope.devSiteRecord.siteTitle);
        alert($scope.devSiteRecord.solution_Details);
        dataService.addDevSite($scope.devSiteRecord)
            .then(function () {
            $window.location = '#/';
        }, function () {
            alert('Failed to save record.');
        });
    };
}
//# sourceMappingURL=demoSites_Index.js.map