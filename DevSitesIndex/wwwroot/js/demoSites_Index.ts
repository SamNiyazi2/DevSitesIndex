

// 09/21/2019 08:00 am - SSN - [20190921-0357] - [011] - Creating multiple entry for Webpack



/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../node_modules/@types//knockout/index.d.ts" />
/// <reference path="../js/shared/DataServices.ts"/>
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />



import * as angular from 'angular'
import * as globals from './globals';
import { IDevSiteTechnology } from './Interfaces/IDevSiteTechnology';


var ssn_devsite_angular_module_instance = function () {

    // 06/15/2021 02:50 am - SSN - [20210613-0452] - [039] - Adding tags to DevSite
    // var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']);
    var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute', 'ui.bootstrap']);

    // 12/07/2019 07:12 am - SSN - [20191207-0704] - [002] - AngularJS - Routing - Authentication
    // Moved  $routeProvider code to Routing_Config.ts


    // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
    // = function
    var demoSiteIndexController_101 = function ($scope, $http, $window, dataService) {

        $scope.Title = "Title set in Angular controller.";


        // $scope.data = [];
        $scope.data = dataService;

        $scope.isBusy2 = true;

        // 06/13/2021 08:35 am - SSN - [20210613-0452] - [012] - Adding tags to DevSite
        // Temp Todo
        dataService.getDevSites(50, 1)
            .then(function (result) {

                $scope.data_local = ko.observable(result.data);

            },
                function (ex) {

                    console.error("20190910-0101 - demosites_index");
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

            angular.copy(content, $scope.editablerow);

        }

        $scope.saveData = function (indx) {


            let theIndex = $scope.data_local().findIndex(r => r.id === $scope.editablerow.id);

            $scope.data_local()[theIndex] = $scope.editablerow;

            $scope.data.updateDevSite($scope.editablerow)
                .then((response) => {
                    console.log(response);
                },
                    (error) => {
                        console.error("20190908-0628-E - demoSites_Index - updateDevSite Error");
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



    // 04/15/2021 11:33 am - SSN - Adding projcet tags
    ssn_devsite_angular_module.directive('devSiteTagsCompiler', ['$compile', '$timeout', '$templateCache', function ($compile, $timeout, $templateCache) {

        return {
            restrict: 'A',

            controller: ['$rootScope', '$scope', function ($rootScope, $scope) {


                console.log('devSiteTagsCompiler - $templateCache - 20210615-0148');
                console.log('$templateCache:');
                console.log($templateCache);

                //$templateCache.removeAll();

                $scope.$on("$destroy", function () {

                    console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
                    console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
                    console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
                    console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');

                });


                $scope.$on("call_devSiteTagsCompiler", function (event, args) {

                    console.log('%c ' + 'call_devSiteTagsCompiler 20210614-2345', 'color:red;font-size:14pt');
                    console.log(event);
                    console.log(args);

                    if (args.msg && args.msg == "doRecompileList") {

                        console.log('%c ' + 'Call doRecompileList - 20210614-2347', 'color:yellow;font-size:14pt');

                        $scope.doRecompileList();
                    }

                });


                $scope.doRecompileList = function () {

                    console.log('%c ' + 'Process doRecompileList  20210614-1949', 'color:yellow;font-size:12pt');

                    //$scope.$destroy();
                    //$scope.$new();



                    while ($rootScope.listOfAddedDirectives.length > 0) {
                        console.log('20210615-0436 ===========')
                        console.log(`Destroying scopes.... [${$rootScope.listOfAddedDirectives.length}]`)

                        const _tempScope = $rootScope.listOfAddedDirectives.pop();
                        _tempScope.$destroy();
                    }


                    $scope.$broadcast('call-to-compile', { key: 'Calling-from-doRecompileList' });

                }




            }],


            link: function (scope, element, attrs) {

                $timeout(function () {


                    $compile(element.contents())(scope);

                }, 2000);


                scope.$on('call-to-compile', function (event, args) {


                    console.log('%c ' + 'devSiteTagsCompiler - all-to-compile', 'color:red;font-size:10pt');
                    console.log(event);
                    console.log(args);
                    console.log('--------------------------------------');
                    $compile(element.contents())(scope);


                });
            }
        }

    }]);




    // 04/15/2021 11:33 am - SSN - Adding projcet tags
    interface IScope_Custom extends angular.IScope {
        theTags: any
    }

    ssn_devsite_angular_module.directive('devSiteTags', function () {


        return {
            templateUrl: './js/devsiteTags/dev-site-tags.html',

            scope: {
                theTags: "="
            },

            link: function (scope: IScope_Custom, elem, attrs) {

                if (scope.theTags === undefined) {
                    scope.theTags = {};
                }
            },

            controller: ["$rootScope", "$scope", "dataService", function ($rootScope, $scope, dataService) {

                const vm = this;

                if (!$rootScope.listOfAddedDirectives) {
                    $rootScope.listOfAddedDirectives = []
                }

                $rootScope.listOfAddedDirectives.push($scope);


                $scope.$on("$destroy", function () {

                    console.log('%c ' + 'Destroy firing for devSiteTags', 'color:yellow;font-size:14pt');

                });

                 

                $scope.addingDevSiteTag = false;
                $scope.removingDevSiteTag = false;




                $scope.addDevSiteTag = function (devSiteTechnologySelectedRecord_forEdit) {

// If we pass an object, then we are editing; otherwise, adding a new tag
                    $scope.devSiteTechnologySelectedRecord = devSiteTechnologySelectedRecord_forEdit

                    $scope.containerViewValue = "";

                    $scope.editableDevSite = $scope.devSiteTechnologySelectedRecord;

                    if (!$scope.editableDevSite ) {

                        $scope.editableDevSite = {
                            id: 0, // Needs to be zero for add to work.
                            technology: {
                                id: -4
                            }
                        };

                    }
                     console.log(`%c addDevSiteTag (or edit)`, 'color:yellow');
                    console.log($scope.devSiteTechnologySelectedRecord);


                    $scope.addingDevSiteTag = true;
                }



                $scope.saveNewDevsiteTag = function () {

                    if ($scope.disableSaveButton) {
                        return;
                    }

                    $scope.disableSaveButton = true;


                    $scope.feedbackToUserClassNameCase = 0;

                    $scope.feedbackToUserText = "";



                    console.log('%c ' + 'saveNewDevsiteTag 0616-0236', 'color:yellow;font-size:12pt');

                    console.log('$scope.editableDevSite:')
                    console.log($scope.editableDevSite)


                    console.log('---------------------------------------');
                    console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
                    console.log($scope.devSiteTechnologySelectedRecord);
                    console.log('---------------------------------------');


                    console.log(`DevSiteID : [${$scope.theTags.id}] technologyId: [${$scope.editableDevSite.technology.id}] `)

                    console.log('---------------------------------------');
                    console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
                    console.log($scope.devSiteTechnologySelectedRecord);
                    console.log('---------------------------------------');

                    console.log($scope.theTags);
                    console.log($scope.editableDevSite);

                    const newRec: IDevSiteTechnology = {
                        id: $scope.editableDevSite.id,
                        devSiteId: $scope.theTags.id,
                        technologyId: $scope.editableDevSite.technology.id
                    };

                    console.log('%c  demoSites_ondex - 20210616-0339', 'color:yellow;font-size:14pt;');
                    console.log(newRec);


                    dataService.addDevSiteTechnology(newRec).then(addDevSiteTechnologySuccess, addDevSiteTechnologyError).catch(addDevSiteTechnologyCatch);




                    function addDevSiteTechnologySuccess(data) {

                        console.log('%c  demoSites_ondex - 20210616-0344 - Success', 'color:green;font-size:14pt;');
                        console.log(data);
                        console.log(data[0]);

                        $scope.disableSaveButton = false;

                        const newOrUpdatedRecord = { id: data[0].id, technology: { description: data[0].technology.description } };

                        let existingRecordIndex = $scope.theTags.devSiteTechnologies.findIndex(r=> r.id== data[0].id );
                        if (existingRecordIndex >-1) {

                            console.log('%c  demoSites_ondex - 20210616-0344 - CHECK ', 'color:green;font-size:14pt;');

                            console.log($scope.theTags.devSiteTechnologies)


                            $scope.theTags.devSiteTechnologies.splice(existingRecordIndex, 1, newOrUpdatedRecord);


                            console.log($scope.theTags.devSiteTechnologies)


                        } else {
                            $scope.theTags.devSiteTechnologies.push(newOrUpdatedRecord );
                        }

                        //   $scope.theTags.push($scope.newDevSiteTag);

                        $scope.addingDevSiteTag = false;

                    }


                    function addDevSiteTechnologyError(error) {

                        console.log('%c  demoSites_ondex - 20210616-0345 - Error', 'color:red;font-size:14pt;');
                        console.log(error);

                        $scope.feedbackToUserClassNameCase = 2;

                        $scope.feedbackToUserText = error.data;

                        $scope.disableSaveButton = false;

                    }


                    function addDevSiteTechnologyCatch(error) {

                        console.log('%c  demoSites_ondex - 20210616-0346 - catch ', 'color:red;font-size:14pt;');
                        console.log(error);

                        $scope.feedbackToUserClassNameCase = 2;

                        $scope.feedbackToUserText = error.data;

                        $scope.disableSaveButton = false;
                    }




                    return;

                }




                $scope.cancelNewDevsiteTag = function () {
                    $scope.addingDevSiteTag = false;

                    $scope.feedbackToUserClassNameCase = 0;
                    $scope.feedbackToUserText = ""; 
                    $scope.editableDevSite = {};


                }


                $scope.removeDevSiteTag = function (rec) {

                    $scope.removingDevSiteTag = true;
                    $scope.devSiteTechnologySelectedRecord = rec;

                }


                $scope.confirmedRemoveDevSiteTag = function () {

                    console.log('%c confirmedRemoveDevSiteTag  20210616-2026', 'color:yellow');
                    console.log($scope.devSiteTechnologySelectedRecord);

                    dataService.deleteDevSiteTechnology($scope.devSiteTechnologySelectedRecord.id)
                        .then(deleteDevSiteTechnologySuccess, deleteDevSiteTechnologyError)
                        .catch(deleteDevSiteTechnologyCatch);


                    function deleteDevSiteTechnologySuccess(data) {

                        console.log('%c deleteDevSiteTechnologySuccess 20210616-2055', 'color:yellow');
                        console.log(data);
                        $scope.theTags.devSiteTechnologies = $scope.theTags.devSiteTechnologies.filter(t => t.id !== $scope.devSiteTechnologySelectedRecord.id);
                        $scope.removingDevSiteTag = false;

                    }

                    function deleteDevSiteTechnologyError(error) {

                        console.log('%c deleteDevSiteTechnologyError 20210616-2056', 'color:red');
                        console.log(error);

                        $scope.feedbackToUserClassNameCase = 2;

                        $scope.feedbackToUserText = error.data;
                    }

                    function deleteDevSiteTechnologyCatch(error) {

                        console.log('%c deleteDrvSiteTechnologyCatch 20210616-2056', 'color:red');
                        console.log(error);

                    }


                }

                $scope.cancelRemoveDevSiteTag = function () {

                    $scope.removingDevSiteTag = false;
                    $scope.devSiteTechnologySelectedRecord = null;

                }



                $scope.feedbackToUserClassNameCase = 0;
                $scope.feedbackToUserText = "";

                $scope.feedbackToUserClassNameSet = function () {

                    switch ($scope.feedbackToUserClassNameCase) {
                        case 1:
                            return "rounded margined info_good";
                        case 2:
                            return "rounded margined info_bad";
                        default:
                            return "";
                    }

                }


            }]

        }

    });


    return {
        ssn_devsite_angular_module: ssn_devsite_angular_module
    };

}();



export { ssn_devsite_angular_module_instance };