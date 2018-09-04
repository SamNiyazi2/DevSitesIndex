// 08/31/2018 08:51 am - SSN 

var module = angular.module("demoSites_Index", []);


module.config(["$routeProvider", function ($routeProvider) {

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

}

function devSiteUpdateController($scope, $http, $window, dataService ) {

    $scope.devSiteRecord = {
    };


    $scope.save = function (formSelector) {
        //alert("test submit");
      
        var f = $(formSelector);

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