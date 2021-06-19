import { globals_instance } from "../globals";


// 12/07/2019 07:06 am - SSN - [20191207-0704] - [001] - AngularJS - Routing - Authentication

// Moved from demoSites_index.ts - Begin

// ssn_devsite_angular_module 



var routing_config_instance = function () {

    // from Routing_Config to Routing_Config with move.
    // Moved outside to shared between doSetup_a and doSetup_b
    var angularJS_module = globals_instance.getInstance_v002('Routing_Config', "demoSites_Index", ['ngRoute']);



    // from Routing_Config to Routing_Config with move.

    var doSetup_a = function () {


        // 09/26/2019 05:51 am - SSN - [20190926-0551] Add $locationProvider
        angularJS_module.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

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



            // 09/26/2019 05:51 am - SSN - [20190926-0551] Add $locationProvider
            // Use the HTML5 history API
            //  $routeProvider.otherwise({ redirectTo: "/" });

            // Todo:  11/13/2019 10:19 pm - SSN - Testing
            // Take out
            // $routeProvider.otherwise({});

            $locationProvider.html5Mode({ enabled: true, rewriteLinks: false }).hashPrefix('!');



        }]);


        // Moved from demoSites_index.ts - End





    }




    // 12/07/2019 08:02 am - SSN - [20191207-0704] - [003] - AngularJS - Routing - Authentication

    // Source: https://stackoverflow.com/questions/17209203/angularjs-protecting-routes-with-angularjs-depending-if-the-user-is-authorized

    var doSetup_b = function () {

        console.log('Routing_Config.ts - 20210417-0819');

        angularJS_module.config(function ($routeProvider) {
            $routeProvider
                .when('/needsauthorisation', {
                    //config for controller and template
                    resolve: {
                        //This function is injected with the AuthService where you'll put your authentication logic
                        'auth': function (AuthService) {
                            return AuthService.authenticate();
                        }
                    }
                });
        }).run(function ($rootScope, $location) {
            //If the route change failed due to authentication error, redirect them out
            $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {


                if (rejection === 'Not Authenticated') {
                    $location.path('/');
                }
            })

            // 04/17/2021 08:20 am - SSN - Adding for record

            $rootScope.$on('$routeChangeStart', function (event, next, current) {

                // https://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs
                console.log('20210417-0822: $routeChangeStart - Incomplete authentication check');

            });


        }).factory('AuthService', function ($q) {
            return {
                authenticate: function () {


                    //Authentication logic here
                    // if (isAuthenticated) {
                    if (false) {
                        //If authenticated, return anything you want, probably a user object
                        return true;
                    } else {
                        //Else send a rejection
                        return $q.reject('Not Authenticated');
                    }
                }
            }
        });

    }



    var doSetup = function () {

        doSetup_a();
        doSetup_b();
    }




    return {
        doSetup: doSetup
    };


}();



export { routing_config_instance };

