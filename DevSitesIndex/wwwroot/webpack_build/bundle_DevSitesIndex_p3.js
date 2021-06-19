/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./DemoSites_index_p3.js":
/*!*******************************!*\
  !*** ./DemoSites_index_p3.js ***!
  \*******************************/
/*! exports provided: demoSites_index_p3_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demoSites_index_p3_instance", function() { return demoSites_index_p3_instance; });
// 09/26/2019 06:38 am - SSN - [20190926-0638] - [001] - Move scripts from index_p1.cshtml to demoSites_index_p1
//    08/21/2018 02:46 am - SSN - Copied - Begin
//  08/21/2018 02:46 am - SSN - Copied from C:\Sams_Projects\PluralSight\html5-line-of-business-applications\d\demos\CodedHomes.Web\Views\Homes
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" /> 
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />
// Knockout related
var demoSites_index_p3_instance = function () {
  var doSetup = function doSetup() {
    $(function () {
      var ViewModel = function ViewModel() {
        // 09/26/2019 06:42 am - SSN - [20190926-0638] - [002] - Move scripts from index_p1.cshtml to demoSites_index_p1
        // Copied from DemoSites_index_p1.ts
        // Begin
        this.devSitesJSON = ko.observableArray([]);

        this.loadData = function () {
          var self = this;
          $.getJSON("/api/demositesapi/top?recordCount=15", function (data) {
            self.devSitesJSON.removeAll();
            self.devSitesJSON(data);
          });
        }; // End


        this.currentItem = {};
        this.errorMessage = ko.observable(); // 09/26/2019 06:44 am - SSN - [20190926-0638] - [003] - Move scripts from index_p1.cshtml to demoSites_index_p1
        // Set with loaddata
        //this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

        this.requestDelConfirm = function (itemToDelete) {
          vm.currentItem = itemToDelete;
          $('#del-confirm').modal({
            backdrop: 'static',
            keyboard: false
          });
        };

        this.showJob = function () {
          $('#show-job').modal();
        };

        this.del = function () {
          alert('Calling del. [20190812-2128]');
          var itemToDelete = ko.toJS(vm.currentItem);
          $('#del-confirm').modal('hide');
        };
      };

      console.debug('20191213-1944 - demoSites_index_p3 - 001');
      var vm = new ViewModel();
      console.debug('20191213-1944 - demoSites_index_p3 - 002');
      ko.applyBindings(vm);
      console.debug('20191213-1944 - demoSites_index_p3 - 003');
      vm.loadData();
    });
  };

  doSetup();
}();



/***/ }),

/***/ "./DemoSites_index_p3_main.ts":
/*!************************************!*\
  !*** ./DemoSites_index_p3_main.ts ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DemoSites_index_p3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DemoSites_index_p3 */ "./DemoSites_index_p3.js");
/* harmony import */ var _shared_DataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/DataServices */ "./shared/DataServices.js");
/* harmony import */ var _demoSites_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demoSites_Index */ "./demoSites_Index.js");
// 09/26/2019 06:47 am - SSN - [20190926-0638] - [004] - Move scripts from index_p1.cshtml to demoSites_index_p1



_shared_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup('demoSites_Index');
_demoSites_Index__WEBPACK_IMPORTED_MODULE_2__["ssn_devsite_angular_module_instance"].ssn_devsite_angular_module;
_DemoSites_index_p3__WEBPACK_IMPORTED_MODULE_0__["demoSites_index_p3_instance"];

/***/ }),

/***/ "./demoSites_Index.js":
/*!****************************!*\
  !*** ./demoSites_Index.js ***!
  \****************************/
/*! exports provided: ssn_devsite_angular_module_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssn_devsite_angular_module_instance", function() { return ssn_devsite_angular_module_instance; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals */ "./globals.js");
// 09/21/2019 08:00 am - SSN - [20190921-0357] - [011] - Creating multiple entry for Webpack
/// <reference path="../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../node_modules/@types//knockout/index.d.ts" />
/// <reference path="../js/shared/DataServices.ts"/>
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />



var ssn_devsite_angular_module_instance = function () {
  // 06/15/2021 02:50 am - SSN - [20210613-0452] - [039] - Adding tags to DevSite
  // var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']);
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute', 'ui.bootstrap']); // 12/07/2019 07:12 am - SSN - [20191207-0704] - [002] - AngularJS - Routing - Authentication
  // Moved  $routeProvider code to Routing_Config.ts
  // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // = function

  var demoSiteIndexController_101 = function demoSiteIndexController_101($scope, $http, $window, dataService) {
    $scope.Title = "Title set in Angular controller."; // $scope.data = [];

    $scope.data = dataService;
    $scope.isBusy2 = true; // 06/13/2021 08:35 am - SSN - [20210613-0452] - [012] - Adding tags to DevSite
    // Temp Todo

    dataService.getDevSites(50, 1).then(function (result) {
      $scope.data_local = ko.observable(result.data);
    }, function (ex) {
      console.error("20190910-0101 - demosites_index");
      console.log(ex);
      alert('failed call to api/demositesapi (20180831-0940) - See console.');
    }).then(function () {
      $scope.isBusy2 = false;
    }); // 04/07/2019 12:51 pm - SSN - [20190407-1250] - Adding AngularJS call to edit DevSite

    $scope.editCommand101 = function (id) {
      alert('editCommand101 - test');
      $('#del-confirm').modal({
        backdrop: 'static',
        keyboard: false
      });
    }; // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] - Angular - editMode div content
    // https://www.tutorialsplane.com/angularjs-update-table-row/
    // Initialize.


    $scope.editablerow = '';

    $scope.editContent = function (content) {
      angular__WEBPACK_IMPORTED_MODULE_0__["copy"](content, $scope.editablerow);
    };

    $scope.saveData = function (indx) {
      var theIndex = $scope.data_local().findIndex(function (r) {
        return r.id === $scope.editablerow.id;
      });
      $scope.data_local()[theIndex] = $scope.editablerow;
      $scope.data.updateDevSite($scope.editablerow).then(function (response) {
        console.log(response);
      }, function (error) {
        console.error("20190908-0628-E - demoSites_Index - updateDevSite Error");
        console.log(error);
      });
      $scope.reset();
    };

    $scope.reset = function () {
      $scope.editablerow = [];
    };

    $scope.loadTemplate = function (content) {
      if (content.id === $scope.editablerow.id) return 'editMode';else return 'viewMode';
    }; // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001]
    // 09/08/2019 12:01 am - SSN - [20190908-0001] - [001] - Concurrency
    // Check we are not hyperlink invalid addresses


    $scope.isValidUrl = function (content) {
      if (!content || content.siteUrl == null) return false;
      var urlToTest = content.siteUrl.toLowerCase().trim();
      var c1 = urlToTest.substr(0, 7);
      var c2 = urlToTest.substr(0, 8);
      var validchemas = "|http://|https://|";
      var validOptions = 0;
      validOptions += validchemas.indexOf(c1) == 1 ? 1 : 0;
      validOptions += validchemas.indexOf(c2) == 1 ? 1 : 0;
      return validOptions > 0;
    }; // 09/08/2019 05:31 pm - SSN - Added


    $scope.setTableRowClass = function (index) {
      return index % 2 == 0 ? 'evenRow' : 'oddRow';
    };
  };

  ssn_devsite_angular_module.controller("demoSiteIndexController_101", ['$scope', '$http', '$window', 'dataService', demoSiteIndexController_101]); // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // function devSiteUpdateController  

  var devSiteUpdateController = function devSiteUpdateController($scope, $http, $window, dataService) {
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
      alert($scope.devSiteRecord.solution_Details); // $http.post("./api/demositesapi", $scope.devSiteRecord);

      dataService.addDevSite($scope.devSiteRecord).then(function () {
        $window.location = '#/';
      }, function () {
        alert('Failed to save record.');
      });
    };
  }; // 04/15/2021 11:33 am - SSN - Adding projcet tags


  ssn_devsite_angular_module.directive('devSiteTagsCompiler', ['$compile', '$timeout', '$templateCache', function ($compile, $timeout, $templateCache) {
    return {
      restrict: 'A',
      controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
        console.log('devSiteTagsCompiler - $templateCache - 20210615-0148');
        console.log('$templateCache:');
        console.log($templateCache); //$templateCache.removeAll();

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
          console.log('%c ' + 'Process doRecompileList  20210614-1949', 'color:yellow;font-size:12pt'); //$scope.$destroy();
          //$scope.$new();

          while ($rootScope.listOfAddedDirectives.length > 0) {
            console.log('20210615-0436 ===========');
            console.log("Destroying scopes.... [" + $rootScope.listOfAddedDirectives.length + "]");

            var _tempScope = $rootScope.listOfAddedDirectives.pop();

            _tempScope.$destroy();
          }

          $scope.$broadcast('call-to-compile', {
            key: 'Calling-from-doRecompileList'
          });
        };
      }],
      link: function link(scope, element, attrs) {
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
    };
  }]);
  ssn_devsite_angular_module.directive('devSiteTags', function () {
    return {
      templateUrl: './js/devsiteTags/dev-site-tags.html',
      scope: {
        theTags: "="
      },
      link: function link(scope, elem, attrs) {
        if (scope.theTags === undefined) {
          scope.theTags = {};
        }
      },
      controller: ["$rootScope", "$scope", "dataService", function ($rootScope, $scope, dataService) {
        var vm = this;

        if (!$rootScope.listOfAddedDirectives) {
          $rootScope.listOfAddedDirectives = [];
        }

        $rootScope.listOfAddedDirectives.push($scope);
        $scope.$on("$destroy", function () {
          console.log('%c ' + 'Destroy firing for devSiteTags', 'color:yellow;font-size:14pt');
        });
        console.log('demosites_index - devsiteTags - 20210615-0518');
        console.log($scope.theTags);
        $scope.addingDevSiteTag = false;
        $scope.removingDevSiteTag = false;

        $scope.addDevSiteTag = function (devSiteTechnologySelectedRecord_forEdit) {
          // If we pass an object, then we are editing; otherwise, adding a new tag
          $scope.devSiteTechnologySelectedRecord = devSiteTechnologySelectedRecord_forEdit;
          $scope.containerViewValue = "";
          $scope.editableDevSite = $scope.devSiteTechnologySelectedRecord;

          if (!$scope.editableDevSite) {
            $scope.editableDevSite = {
              id: 0,
              technology: {
                id: -4
              }
            };
          }

          console.log("%c addDevSiteTag (or edit)", 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          $scope.addingDevSiteTag = true;
        };

        $scope.saveNewDevsiteTag = function () {
          if ($scope.disableSaveButton) {
            return;
          }

          $scope.disableSaveButton = true;
          $scope.feedbackToUserClassNameCase = 0;
          $scope.feedbackToUserText = "";
          console.log('%c ' + 'saveNewDevsiteTag 0616-0236', 'color:yellow;font-size:12pt');
          console.log('$scope.editableDevSite:');
          console.log($scope.editableDevSite);
          console.log('---------------------------------------');
          console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          console.log('---------------------------------------');
          console.log("DevSiteID : [" + $scope.theTags.id + "] technologyId: [" + $scope.editableDevSite.technology.id + "] ");
          console.log('---------------------------------------');
          console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          console.log('---------------------------------------');
          console.log($scope.theTags);
          console.log($scope.editableDevSite);
          var newRec = {
            id: $scope.editableDevSite.id,
            devSiteId: $scope.theTags.id,
            technologyId: $scope.editableDevSite.technology.id
          };
          console.log('%c  demoSites_ondex - 20210616-0339', 'color:yellow;font-size:14pt;');
          console.log(newRec);
          dataService.addDevSiteTechnology(newRec).then(addDevSiteTechnologySuccess, addDevSiteTechnologyError)["catch"](addDevSiteTechnologyCatch);

          function addDevSiteTechnologySuccess(data) {
            console.log('%c  demoSites_ondex - 20210616-0344 - Success', 'color:green;font-size:14pt;');
            console.log(data);
            console.log(data[0]);
            $scope.disableSaveButton = false;
            var newOrUpdatedRecord = {
              id: data[0].id,
              technology: {
                description: data[0].technology.description
              }
            };
            var existingRecordIndex = $scope.theTags.devSiteTechnologies.findIndex(function (r) {
              return r.id == data[0].id;
            });

            if (existingRecordIndex > -1) {
              console.log('%c  demoSites_ondex - 20210616-0344 - CHECK ', 'color:green;font-size:14pt;');
              console.log($scope.theTags.devSiteTechnologies);
              $scope.theTags.devSiteTechnologies.splice(existingRecordIndex, 1, newOrUpdatedRecord);
              console.log($scope.theTags.devSiteTechnologies);
            } else {
              $scope.theTags.devSiteTechnologies.push(newOrUpdatedRecord);
            } //   $scope.theTags.push($scope.newDevSiteTag);


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
        };

        $scope.cancelNewDevsiteTag = function () {
          $scope.addingDevSiteTag = false;
          $scope.feedbackToUserClassNameCase = 0;
          $scope.feedbackToUserText = "";
          $scope.editableDevSite = {};
        };

        $scope.removeDevSiteTag = function (rec) {
          $scope.removingDevSiteTag = true;
          $scope.devSiteTechnologySelectedRecord = rec;
        };

        $scope.confirmedRemoveDevSiteTag = function () {
          console.log('%c confirmedRemoveDevSiteTag  20210616-2026', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          dataService.deleteDevSiteTechnology($scope.devSiteTechnologySelectedRecord.id).then(deleteDevSiteTechnologySuccess, deleteDevSiteTechnologyError)["catch"](deleteDevSiteTechnologyCatch);

          function deleteDevSiteTechnologySuccess(data) {
            console.log('%c deleteDevSiteTechnologySuccess 20210616-2055', 'color:yellow');
            console.log(data);
            $scope.theTags.devSiteTechnologies = $scope.theTags.devSiteTechnologies.filter(function (t) {
              return t.id !== $scope.devSiteTechnologySelectedRecord.id;
            });
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
        };

        $scope.cancelRemoveDevSiteTag = function () {
          $scope.removingDevSiteTag = false;
          $scope.devSiteTechnologySelectedRecord = null;
        };

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
        };
      }]
    };
  });
  return {
    ssn_devsite_angular_module: ssn_devsite_angular_module
  };
}();



/***/ }),

/***/ "./globals.js":
/*!********************!*\
  !*** ./globals.js ***!
  \********************/
/*! exports provided: globals_instance, test_103, Timelog_ServingPage, Timelog_ServingPage_checkvalue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals_instance", function() { return globals_instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test_103", function() { return test_103; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timelog_ServingPage", function() { return Timelog_ServingPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timelog_ServingPage_checkvalue", function() { return Timelog_ServingPage_checkvalue; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


var globals_instance = function () {
  var SSN_Globals =
  /** @class */
  function () {
    function SSN_Globals() {} // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock


    SSN_Globals.getInstance_v02 = function (callSource, applicationName, args) {
      ////  DO NOT REMOVE.
      //// Option to call an injected AngularJS server from here. Tested.  
      if (args === void 0) {
        args = null;
      } //factorySetup.doFactorySetup();
      //try {
      //    console.log("globals: 20190923-1136 - Calling test_102");
      //    test_103.doIt();
      //} catch (e) {
      //    console.error("globals:  20190923-1135 - Failed call to test_102");
      //    console.log(e);
      //}


      return SSN_Globals.getInstance_Original(callSource, applicationName, args);
    };

    SSN_Globals.getInstance_Original = function (callSource, applicationName, args) {
      if (args === void 0) {
        args = null;
      }

      var angularApp = null;
      var selected = SSN_Globals.ssn_devsite_angular_module.filter(function (r) {
        return r.name === applicationName;
      });

      if (selected.length > 0) {
        if (selected.length > 1) {
          console.log("********************************************");
          console.log("********************************************");
          console.log("********************************************");
          console.log("********************************************");
          console.log("Globals - 20190923-0543 - 001 - Found application [" + applicationName + "]  Instance count [" + selected.length + "]");
          console.log("********************************************");
          console.log("********************************************");
          console.log("********************************************");
          console.log("********************************************");
        }

        angularApp = selected[0];
      } else {
        switch (applicationName) {
          case 'timesheetApp':
            angularApp = {
              name: applicationName,
              // 11/10/2019 08:36 am - SSN - Adding 'ngSanitize' for ng-bind-html
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('timesheetApp', ['ngRoute', 'ui.bootstrap', 'ngSanitize'])
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            break;

          case 'demoSites_Index_Timesheet':
            angularApp = {
              name: applicationName,
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('demoSites_Index_Timesheet', args)
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            break;

          case 'demoSites_Index':
            angularApp = {
              name: applicationName,
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]("demoSites_Index", args)
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            break;

          default:
            console.error("Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
            break;
        }
      }

      return angularApp.instance;
    };

    SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];

    return SSN_Globals;
  }();

  var factorySetup = function () {
    var doFactorySetup = function doFactorySetup() {
      var app_globals;

      try {
        app_globals = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('globalAngularApp');
      } catch (err) {
        app_globals = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('globalAngularApp', []);
      }

      app_globals.factory("globalAngularAppUtil", ['$http', '$q', function ($http, $q) {
        var doTest101 = function doTest101(namePassedIn) {
          var deferred = $q.defer();
          setTimeout(function () {
            deferred.notify('About to greet ' + namePassedIn + '.');

            if (okToGreet(namePassedIn)) {
              deferred.resolve('Hello, ' + namePassedIn + '!');
            } else {
              deferred.reject('Greeting ' + namePassedIn + ' is not allowed.');
            }
          }, 1000);
          return deferred.promise;
        };

        function okToGreet(name) {
          return false;
        }

        return {
          doTest101: doTest101
        };
      }]);
    };

    return {
      doFactorySetup: doFactorySetup
    };
  }(); // 09/20/2019 09:38 am - SSN - Pass in args


  function getInstance_v002(callSource, applicationName, args) {
    if (args === void 0) {
      args = null;
    }

    return SSN_Globals.getInstance_v02(callSource, applicationName, args);
  }

  return {
    getInstance_v002: getInstance_v002
  };
}();

var test_103 = function () {
  var doIt = function doIt() {
    angular__WEBPACK_IMPORTED_MODULE_0__["injector"](['ng', 'globalAngularApp']).invoke(['globalAngularAppUtil', function (globalAngularAppUtil) {
      globalAngularAppUtil.doTest101('Name passed to doTest101').then(doTest101Success, doTest101Error)["catch"](doTest101Catch);
    }]);

    function doTest101Success(response) {
      console.log('globals - doTest101Success - 20190924-0316 ');
      console.log(response);
    }

    function doTest101Error(response) {
      console.log('globals - doTest101Error - 20190924-0316-B ');
      console.log(response);
    }

    function doTest101Catch(response) {
      console.log('globals - doTest101Catch - 20190924-0316-C');
      console.log(response);
    }
  };

  return {
    doIt: doIt
  };
}(); // 11/21/2019 06:32 am - SSN - [20191121-0503] - [006] - Timelog edit options on project search


var Timelog_ServingPage;

(function (Timelog_ServingPage) {
  Timelog_ServingPage["Timelog"] = "Timelog";
  Timelog_ServingPage["Job_Timelog"] = "Job_Timelog";
  Timelog_ServingPage["Projects_Search"] = "Projects_Search";
})(Timelog_ServingPage || (Timelog_ServingPage = {}));

function Timelog_ServingPage_checkvalue(value, compareTo) {
  return compareTo === value;
}



/***/ }),

/***/ "./shared/DataServices.js":
/*!********************************!*\
  !*** ./shared/DataServices.js ***!
  \********************************/
/*! exports provided: dataService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService_instance", function() { return dataService_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module


var dataService_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('DataServices', currentApplication);
    ssn_devsite_angular_module.factory("dataService", ['$http', '$q', function ($http, $q) {
      var _getDevSites = function _getDevSites(recordsPerPage, currentPage) {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/" + recordsPerPage + "/" + currentPage).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          console.error('%c ' + 'dataservice getDevSites error', 'color:red;font-size:13pt;');
          console.log(error);
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 06/15/2021 05:10 am - SSN - [20210613-0452] - [045] - Adding tags to DevSite


      var _getDevSite = function _getDevSite(devSiteId) {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/" + devSiteId).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 06/13/2021 10:29 am - SSN - [20210613-0452] - [018] - Adding tags to DevSite


      var _getDevSitesCount = function _getDevSitesCount() {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/recordcount").then(function (result) {
          deferred.resolve(result);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup


      var _getTimelog = function _getTimelog(id) {
        var deferred = $q.defer(); // 09/24/2019 07:15 am - SSN - [20190924-0401] - [009] - Quick timelog entry

        $http.get('/api/timelogapi/getTimelog/' + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject({
            Error: 'Failed call to get timelog [20190829-1819]'
          });
          console.error(error);
        });
        return deferred.promise;
      }; // 11/19/2019 02:00 am - SSN - [20191119-0048] Created    
      // 11/21/2019 06:26 am - SSN - [20191121-0503] - [004] - Timelog edit options on project search
      // Add servingPage


      var _TimelogRefreshRecord = function _TimelogRefreshRecord(id, servingPage) {
        var deferred = $q.defer();
        $http.get('/api/timelogapi/RefreshRecord/' + id + "?servingPage=" + servingPage).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject({
            Error: 'Failed call to get timelog [20191119-0201]'
          });
          console.error(error);
        });
        return deferred.promise;
      };

      var _addDevSite = function _addDevSite(devSite) {
        var deferred = $q.defer();
        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - editMode div content


      var _updateDevSite = function _updateDevSite(devSite) {
        var deferred = $q.defer(); // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 
        // 09/24/2019 03:38 am - SSN - Logic error - updating wrong link
        //       $http.post('/api/demositesapi', devSite)

        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 04/12/2019 11:26 am - SSN - [20190412-1126] - Timelog - save data


      var _insertTimeLog = function _insertTimeLog(timeLog) {
        var deferred = $q.defer();
        $http.post('/api/timeLogAPI', timeLog).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 05/19/2019 03:00 pm - SSN - [20190519-1412] - [004] - Continue work on adding continue option for timesheet record


      var _addOrUpdateTimeLog = function _addOrUpdateTimeLog(timeLog) {
        var deferred = $q.defer();
        $http.post('/api/timeLogAPI', timeLog).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 09/17/2019 12:56 am - SSN - [20190916-1123] - [016] - Adding job status
      // Adding option to list Jobs
      // 09/18/2019 03:24 am - SSN - [20190917-0929] - [017] - Adding paging for angular lists
      // var _getJobs = function (pageNo, recordsPerPage, columnName, desc) {
      // 11/27/2019 09:14 am - SSN - Pass projectId


      var _getJobs = function _getJobs(columnBag) {
        var deferred = $q.defer(); // 09/22/2019 08:23 am - SSN - [20190922-0822] - [001] - Plug in job status filter on job's index - update data source

        var job_statuses_selected = columnBag.job_statuses_selected.length == 0 ? "nothing-201909221117" : columnBag.job_statuses_selected.join(',');
        $http.get('/api/jobapi/list/' + columnBag.currentPageNo + "/" + columnBag.recordsPerPage + "/" + columnBag.columnName + "/" + columnBag.desc + "/" + job_statuses_selected + "?projectId=" + columnBag.fk_filter).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get jobs [20190917-0057]'
          });
        });
        return deferred.promise;
      }; // 09/30/2019 07:06 pm - SSN - Adding


      var _getJob = function _getJob(id) {
        var deferred = $q.defer(); // 06/08/2021 10:52 pm - SSN - [20210608-2247] - [002] - Test line item -  Prep for deployment
        // $http.get('/api/jobapi/get_custom/' + id)

        $http.get('/api/jobapi/getJob/' + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get job [20190930-1908]'
          });
        });
        return deferred.promise;
      }; // 09/21/2019 01:25 pm - SSN - [20190921-1129] - [003] - Plug in job status filter on job's index


      var _getJob_Statuses = function _getJob_Statuses() {
        var deferred = $q.defer();
        $http.get('/api/job_statusAPI/').then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get job_statuses [20190921-1326'
          });
        });
        return deferred.promise;
      }; // 11/22/2019 04:06 pm - SSN - [20191121-0503] - [018] - Timelog edit options on project search


      var _ProjectsSearchRefreshRecord = function _ProjectsSearchRefreshRecord(id, servingPage) {
        var deferred = $q.defer();
        $http.get('/api/ProjectAPI/refreshrecord/' + id + "?servingPage=" + servingPage).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get project search record  [20191122-1608] [' + id + '] [' + servingPage + ']'
          });
          console.error(errorMessage);
        });
        return deferred.promise;
      }; // 06/07/2021 06:22 am - SSN - [20210606-0227] - [015] - Testng for deployment


      var addOrUpdateJob_LineItem = function addOrUpdateJob_LineItem(job_LineItem) {
        var deferred = $q.defer();
        $http.post('/api/job_lineItemAPI', job_LineItem).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 06/15/2021 06:00 pm - SSN - [20210613-0452] - [049] - Adding tags to DevSite


      var addOrUpdateTechnology = function addOrUpdateTechnology(technology) {
        var deferred = $q.defer();
        $http.post('/api/technologyAPI', technology).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };

      function getHttpPostPromise(url, body) {
        var deferred = $q.defer();
        $http.post(url, body).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      } // 06/16/2021 08:42 pm - SSN - [20210613-0452] - [105] - Adding tags to DevSite


      function getHttpDeletePromise(url, id) {
        var deferred = $q.defer();
        $http["delete"](url + "/" + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      } // 06/16/2021 02:59 am - SSN - [20210613-0452] - [061] - Adding tags to DevSite


      var addDevSiteTechnology = function addDevSiteTechnology(devSiteTechnology) {
        return getHttpPostPromise('/api/DevSitetechnologyAPI/post_custom', devSiteTechnology);
      }; // 06/16/2021 08:33 pm - SSN - [20210613-0452] - [103] - Adding tags to DevSite


      var deleteDevSiteTechnology = function deleteDevSiteTechnology(id) {
        return getHttpDeletePromise('/api/DevSitetechnologyAPI', id);
      };

      return {
        getDevSites: _getDevSites,
        getDevSite: _getDevSite,
        getDevSitesCount: _getDevSitesCount,
        addDevSite: _addDevSite,
        // 09/06/2019 04:44 pm - SSN - [20190906-0518] - [002] - Angular - editMode div content
        updateDevSite: _updateDevSite,
        insertTimeLog: _insertTimeLog,
        getTimelog: _getTimelog,
        updateTimeLog: _addOrUpdateTimeLog,
        getJobs: _getJobs,
        getJob_Statuses: _getJob_Statuses,
        getJob: _getJob,
        timelogRefreshRecord: _TimelogRefreshRecord,
        projectsSearchRefreshRecord: _ProjectsSearchRefreshRecord,
        addOrUpdateJob_LineItem: addOrUpdateJob_LineItem,
        addOrUpdateTechnology: addOrUpdateTechnology,
        addDevSiteTechnology: addDevSiteTechnology,
        deleteDevSiteTechnology: deleteDevSiteTechnology
      };
    }]);
  };

  return {
    //        ssn_devsite_angular_module: ssn_devsite_angular_module
    doSetup: doSetup
  };
}();



/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./DemoSites_index_p3_main.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./DemoSites_index_p3_main.ts */"./DemoSites_index_p3_main.ts");


/***/ }),

/***/ "angular":
/*!**************************!*\
  !*** external "angular" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = angular;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X3AzLnRzIiwid2VicGFjazovLy8uL0RlbW9TaXRlc19pbmRleF9wM19tYWluLnRzIiwid2VicGFjazovLy8uL2RlbW9TaXRlc19JbmRleC50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NoYXJlZC9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBR0EsSUFBSSwyQkFBMkIsR0FBRztBQUk5QixNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVU7QUFHVixLQUFDLENBQUM7QUFFRSxV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b2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIu+7v1xyXG4vLyAwOS8yNi8yMDE5IDA2OjM4IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwMV0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcblxyXG5cclxuLy8gICAgMDgvMjEvMjAxOCAwMjo0NiBhbSAtIFNTTiAtIENvcGllZCAtIEJlZ2luXHJcbi8vICAwOC8yMS8yMDE4IDAyOjQ2IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gQzpcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxodG1sNS1saW5lLW9mLWJ1c2luZXNzLWFwcGxpY2F0aW9uc1xcZFxcZGVtb3NcXENvZGVkSG9tZXMuV2ViXFxWaWV3c1xcSG9tZXNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPiBcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIEtub2Nrb3V0IHJlbGF0ZWRcclxuXHJcblxyXG52YXIgZGVtb1NpdGVzX2luZGV4X3AzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBWaWV3TW9kZWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjYvMjAxOSAwNjo0MiBhbSAtIFNTTiAtIFsyMDE5MDkyNi0wNjM4XSAtIFswMDJdIC0gTW92ZSBzY3JpcHRzIGZyb20gaW5kZXhfcDEuY3NodG1sIHRvIGRlbW9TaXRlc19pbmRleF9wMVxyXG4gICAgICAgICAgICAgICAgLy8gQ29waWVkIGZyb20gRGVtb1NpdGVzX2luZGV4X3AxLnRzXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQmVnaW5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGV2U2l0ZXNKU09OID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJC5nZXRKU09OKFwiL2FwaS9kZW1vc2l0ZXNhcGkvdG9wP3JlY29yZENvdW50PTE1XCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRldlNpdGVzSlNPTi5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gRW5kXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJdGVtID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI2LzIwMTkgMDY6NDQgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDYzOF0gLSBbMDAzXSAtIE1vdmUgc2NyaXB0cyBmcm9tIGluZGV4X3AxLmNzaHRtbCB0byBkZW1vU2l0ZXNfaW5kZXhfcDFcclxuICAgICAgICAgICAgICAgIC8vIFNldCB3aXRoIGxvYWRkYXRhXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZGV2U2l0ZXNKU09OID0ga28ub2JzZXJ2YWJsZUFycmF5KEBIdG1sLlJhdyhNb2RlbC5kZXZTaXRlc0pTT04pKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVsQ29uZmlybSA9IGZ1bmN0aW9uIChpdGVtVG9EZWxldGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uY3VycmVudEl0ZW0gPSBpdGVtVG9EZWxldGU7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dKb2IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJyNzaG93LWpvYicpLm1vZGFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0NhbGxpbmcgZGVsLiBbMjAxOTA4MTItMjEyOF0nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbVRvRGVsZXRlID0ga28udG9KUyh2bS5jdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJzIwMTkxMjEzLTE5NDQgLSBkZW1vU2l0ZXNfaW5kZXhfcDMgLSAwMDEnKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2bSA9IG5ldyBWaWV3TW9kZWwoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoJzIwMTkxMjEzLTE5NDQgLSBkZW1vU2l0ZXNfaW5kZXhfcDMgLSAwMDInKTtcclxuXHJcbiAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZygnMjAxOTEyMTMtMTk0NCAtIGRlbW9TaXRlc19pbmRleF9wMyAtIDAwMycpO1xyXG5cclxuICAgICAgICAgICAgdm0ubG9hZERhdGEoKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGRvU2V0dXAoKTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yNi8yMDE5IDA2OjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwNF0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcbiBcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmltcG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9IGZyb20gXCIuL0RlbW9TaXRlc19pbmRleF9wM1wiXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4vc2hhcmVkL0RhdGFTZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgeyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSB9IGZyb20gJy4vZGVtb1NpdGVzX0luZGV4JztcclxuXHJcbmRhdGFTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAoJ2RlbW9TaXRlc19JbmRleCcpO1xyXG5cclxuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2Uuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU7XHJcbiBcclxuZGVtb1NpdGVzX2luZGV4X3AzX2luc3RhbmNlIDtcclxuICIsIu+7v1xyXG5cclxuLy8gMDkvMjEvMjAxOSAwODowMCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTFdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vanMvc2hhcmVkL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBJRGV2U2l0ZVRlY2hub2xvZ3kgfSBmcm9tICcuL0ludGVyZmFjZXMvSURldlNpdGVUZWNobm9sb2d5JztcclxuXHJcblxyXG52YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gMDYvMTUvMjAyMSAwMjo1MCBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMzldIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgLy8gdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ2RlbW9TaXRlX2luZGV4JywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJ10pO1xyXG4gICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ2RlbW9TaXRlX2luZGV4JywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCddKTtcclxuXHJcbiAgICAvLyAxMi8wNy8yMDE5IDA3OjEyIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwMl0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuICAgIC8vIE1vdmVkICAkcm91dGVQcm92aWRlciBjb2RlIHRvIFJvdXRpbmdfQ29uZmlnLnRzXHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyA9IGZ1bmN0aW9uXHJcbiAgICB2YXIgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICR3aW5kb3csIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5UaXRsZSA9IFwiVGl0bGUgc2V0IGluIEFuZ3VsYXIgY29udHJvbGxlci5cIjtcclxuXHJcblxyXG4gICAgICAgIC8vICRzY29wZS5kYXRhID0gW107XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhU2VydmljZTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzQnVzeTIgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAwNi8xMy8yMDIxIDA4OjM1IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAxMl0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgLy8gVGVtcCBUb2RvXHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGV2U2l0ZXMoNTAsIDEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCA9IGtvLm9ic2VydmFibGUocmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiMjAxOTA5MTAtMDEwMSAtIGRlbW9zaXRlc19pbmRleFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudHV0b3JpYWxzcGxhbmUuY29tL2FuZ3VsYXJqcy11cGRhdGUtdGFibGUtcm93L1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplLlxyXG4gICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmNvcHkoY29udGVudCwgJHNjb3BlLmVkaXRhYmxlcm93KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuc2F2ZURhdGEgPSBmdW5jdGlvbiAoaW5keCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aGVJbmRleCA9ICRzY29wZS5kYXRhX2xvY2FsKCkuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXRhX2xvY2FsKClbdGhlSW5kZXhdID0gJHNjb3BlLmVkaXRhYmxlcm93O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGEudXBkYXRlRGV2U2l0ZSgkc2NvcGUuZWRpdGFibGVyb3cpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiMjAxOTA5MDgtMDYyOC1FIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5yZXNldCgpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBbXTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudC5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKSByZXR1cm4gJ2VkaXRNb2RlJztcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJ3ZpZXdNb2RlJztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdXHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMTI6MDEgYW0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDAxXSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBoeXBlcmxpbmsgaW52YWxpZCBhZGRyZXNzZXNcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzVmFsaWRVcmwgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghY29udGVudCB8fCBjb250ZW50LnNpdGVVcmwgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsVG9UZXN0ID0gY29udGVudC5zaXRlVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjMSA9IHVybFRvVGVzdC5zdWJzdHIoMCwgNyk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IHVybFRvVGVzdC5zdWJzdHIoMCwgOCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGNoZW1hcyA9IFwifGh0dHA6Ly98aHR0cHM6Ly98XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWRPcHRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMSkgPT0gMSkgPyAxIDogMDtcclxuICAgICAgICAgICAgdmFsaWRPcHRpb25zICs9ICh2YWxpZGNoZW1hcy5pbmRleE9mKGMyKSA9PSAxKSA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh2YWxpZE9wdGlvbnMgPiAwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDA1OjMxIHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICAkc2NvcGUuc2V0VGFibGVSb3dDbGFzcyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PSAwID8gJ2V2ZW5Sb3cnIDogJ29kZFJvdyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIiwgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHdpbmRvdycsICdkYXRhU2VydmljZScsIGRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMV0pO1xyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciAgXHJcbiAgICB2YXIgZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLmRldlNpdGVSZWNvcmQgPSB7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwidGVzdCBzdWJtaXRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjIwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwMl0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgLy8gQWRkZWQgY2FzdFxyXG4gICAgICAgICAgICB2YXIgZjogSFRNTEZvcm1FbGVtZW50ID0gPGFueT4kKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWYudmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgZm9ybS4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zaXRlVGl0bGUpO1xyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zb2x1dGlvbl9EZXRhaWxzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICRodHRwLnBvc3QoXCIuL2FwaS9kZW1vc2l0ZXNhcGlcIiwgJHNjb3BlLmRldlNpdGVSZWNvcmQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5hZGREZXZTaXRlKCRzY29wZS5kZXZTaXRlUmVjb3JkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uID0gJyMvJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIHJlY29yZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTUvMjAyMSAxMTozMyBhbSAtIFNTTiAtIEFkZGluZyBwcm9qY2V0IHRhZ3NcclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZGV2U2l0ZVRhZ3NDb21waWxlcicsIFsnJGNvbXBpbGUnLCAnJHRpbWVvdXQnLCAnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJGNvbXBpbGUsICR0aW1lb3V0LCAkdGVtcGxhdGVDYWNoZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckcm9vdFNjb3BlJywgJyRzY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RldlNpdGVUYWdzQ29tcGlsZXIgLSAkdGVtcGxhdGVDYWNoZSAtIDIwMjEwNjE1LTAxNDgnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCckdGVtcGxhdGVDYWNoZTonKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCR0ZW1wbGF0ZUNhY2hlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyR0ZW1wbGF0ZUNhY2hlLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oXCIkZGVzdHJveVwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgZmlyaW5nIGZvciBkZXZTaXRlVGFnc0NvbXBpbGVyIGRldlNpdGVUYWdzQ29tcGlsZXInLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnRGVzdHJveSBmaXJpbmcgZm9yIGRldlNpdGVUYWdzQ29tcGlsZXIgZGV2U2l0ZVRhZ3NDb21waWxlcicsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGZpcmluZyBmb3IgZGV2U2l0ZVRhZ3NDb21waWxlciBkZXZTaXRlVGFnc0NvbXBpbGVyJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgZmlyaW5nIGZvciBkZXZTaXRlVGFnc0NvbXBpbGVyIGRldlNpdGVUYWdzQ29tcGlsZXInLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oXCJjYWxsX2RldlNpdGVUYWdzQ29tcGlsZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ2NhbGxfZGV2U2l0ZVRhZ3NDb21waWxlciAyMDIxMDYxNC0yMzQ1JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnICYmIGFyZ3MubXNnID09IFwiZG9SZWNvbXBpbGVMaXN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0NhbGwgZG9SZWNvbXBpbGVMaXN0IC0gMjAyMTA2MTQtMjM0NycsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kb1JlY29tcGlsZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kb1JlY29tcGlsZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ1Byb2Nlc3MgZG9SZWNvbXBpbGVMaXN0ICAyMDIxMDYxNC0xOTQ5JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLiRuZXcoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MTUtMDQzNiA9PT09PT09PT09PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXN0cm95aW5nIHNjb3Blcy4uLi4gWyR7JHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMubGVuZ3RofV1gKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3RlbXBTY29wZSA9ICRyb290U2NvcGUubGlzdE9mQWRkZWREaXJlY3RpdmVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGVtcFNjb3BlLiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2NhbGwtdG8tY29tcGlsZScsIHsga2V5OiAnQ2FsbGluZy1mcm9tLWRvUmVjb21waWxlTGlzdCcgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfV0sXHJcblxyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kb24oJ2NhbGwtdG8tY29tcGlsZScsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnZGV2U2l0ZVRhZ3NDb21waWxlciAtIGFsbC10by1jb21waWxlJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTBwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA0LzE1LzIwMjEgMTE6MzMgYW0gLSBTU04gLSBBZGRpbmcgcHJvamNldCB0YWdzXHJcbiAgICBpbnRlcmZhY2UgSVNjb3BlX0N1c3RvbSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcclxuICAgICAgICB0aGVUYWdzOiBhbnlcclxuICAgIH1cclxuXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2RldlNpdGVUYWdzJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2pzL2RldnNpdGVUYWdzL2Rldi1zaXRlLXRhZ3MuaHRtbCcsXHJcblxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgdGhlVGFnczogXCI9XCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX0N1c3RvbSwgZWxlbSwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUudGhlVGFncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudGhlVGFncyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogW1wiJHJvb3RTY29wZVwiLCBcIiRzY29wZVwiLCBcImRhdGFTZXJ2aWNlXCIsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxpc3RPZkFkZGVkRGlyZWN0aXZlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMucHVzaCgkc2NvcGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGZpcmluZyBmb3IgZGV2U2l0ZVRhZ3MnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbW9zaXRlc19pbmRleCAtIGRldnNpdGVUYWdzIC0gMjAyMTA2MTUtMDUxOCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnRoZVRhZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVtb3ZpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZERldlNpdGVUYWcgPSBmdW5jdGlvbiAoZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZF9mb3JFZGl0KSB7XHJcblxyXG4vLyBJZiB3ZSBwYXNzIGFuIG9iamVjdCwgdGhlbiB3ZSBhcmUgZWRpdGluZzsgb3RoZXJ3aXNlLCBhZGRpbmcgYSBuZXcgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQgPSBkZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkX2ZvckVkaXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvbnRhaW5lclZpZXdWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZURldlNpdGUgPSAkc2NvcGUuZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZWRpdGFibGVEZXZTaXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlRGV2U2l0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLCAvLyBOZWVkcyB0byBiZSB6ZXJvIGZvciBhZGQgdG8gd29yay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgYWRkRGV2U2l0ZVRhZyAob3IgZWRpdClgLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFkZGluZ0RldlNpdGVUYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNhdmVOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnc2F2ZU5ld0RldnNpdGVUYWcgMDYxNi0wMjM2JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJHNjb3BlLmVkaXRhYmxlRGV2U2l0ZTonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5lZGl0YWJsZURldlNpdGUpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkIDIwMjEwNjE2LTIyMjQnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXZTaXRlSUQgOiBbJHskc2NvcGUudGhlVGFncy5pZH1dIHRlY2hub2xvZ3lJZDogWyR7JHNjb3BlLmVkaXRhYmxlRGV2U2l0ZS50ZWNobm9sb2d5LmlkfV0gYClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAkc2NvcGUuZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZCAyMDIxMDYxNi0yMjI0JywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZWRpdGFibGVEZXZTaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UmVjOiBJRGV2U2l0ZVRlY2hub2xvZ3kgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkc2NvcGUuZWRpdGFibGVEZXZTaXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXZTaXRlSWQ6ICRzY29wZS50aGVUYWdzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWNobm9sb2d5SWQ6ICRzY29wZS5lZGl0YWJsZURldlNpdGUudGVjaG5vbG9neS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAgZGVtb1NpdGVzX29uZGV4IC0gMjAyMTA2MTYtMDMzOScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UmVjKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmFkZERldlNpdGVUZWNobm9sb2d5KG5ld1JlYykudGhlbihhZGREZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MsIGFkZERldlNpdGVUZWNobm9sb2d5RXJyb3IpLmNhdGNoKGFkZERldlNpdGVUZWNobm9sb2d5Q2F0Y2gpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGREZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICBkZW1vU2l0ZXNfb25kZXggLSAyMDIxMDYxNi0wMzQ0IC0gU3VjY2VzcycsICdjb2xvcjpncmVlbjtmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPclVwZGF0ZWRSZWNvcmQgPSB7IGlkOiBkYXRhWzBdLmlkLCB0ZWNobm9sb2d5OiB7IGRlc2NyaXB0aW9uOiBkYXRhWzBdLnRlY2hub2xvZ3kuZGVzY3JpcHRpb24gfSB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nUmVjb3JkSW5kZXggPSAkc2NvcGUudGhlVGFncy5kZXZTaXRlVGVjaG5vbG9naWVzLmZpbmRJbmRleChyPT4gci5pZD09IGRhdGFbMF0uaWQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nUmVjb3JkSW5kZXggPi0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICBkZW1vU2l0ZXNfb25kZXggLSAyMDIxMDYxNi0wMzQ0IC0gQ0hFQ0sgJywgJ2NvbG9yOmdyZWVuO2ZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMuc3BsaWNlKGV4aXN0aW5nUmVjb3JkSW5kZXgsIDEsIG5ld09yVXBkYXRlZFJlY29yZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMucHVzaChuZXdPclVwZGF0ZWRSZWNvcmQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAkc2NvcGUudGhlVGFncy5wdXNoKCRzY29wZS5uZXdEZXZTaXRlVGFnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZERldlNpdGVUZWNobm9sb2d5RXJyb3IoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAgZGVtb1NpdGVzX29uZGV4IC0gMjAyMTA2MTYtMDM0NSAtIEVycm9yJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGREZXZTaXRlVGVjaG5vbG9neUNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgIGRlbW9TaXRlc19vbmRleCAtIDIwMjEwNjE2LTAzNDYgLSBjYXRjaCAnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiOyBcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVEZXZTaXRlID0ge307XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZURldlNpdGVUYWcgPSBmdW5jdGlvbiAocmVjKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5yZW1vdmluZ0RldlNpdGVUYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkID0gcmVjO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpcm1lZFJlbW92ZURldlNpdGVUYWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBjb25maXJtZWRSZW1vdmVEZXZTaXRlVGFnICAyMDIxMDYxNi0yMDI2JywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3koJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRlbGV0ZURldlNpdGVUZWNobm9sb2d5U3VjY2VzcywgZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3lFcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGRlbGV0ZURldlNpdGVUZWNobm9sb2d5Q2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3lTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBkZWxldGVEZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MgMjAyMTA2MTYtMjA1NScsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMgPSAkc2NvcGUudGhlVGFncy5kZXZTaXRlVGVjaG5vbG9naWVzLmZpbHRlcih0ID0+IHQuaWQgIT09ICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92aW5nRGV2U2l0ZVRhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZURldlNpdGVUZWNobm9sb2d5RXJyb3IoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBkZWxldGVEZXZTaXRlVGVjaG5vbG9neUVycm9yIDIwMjEwNjE2LTIwNTYnLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVEZXZTaXRlVGVjaG5vbG9neUNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZGVsZXRlRHJ2U2l0ZVRlY2hub2xvZ3lDYXRjaCAyMDIxMDYxNi0yMDU2JywgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZW1vdmVEZXZTaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVtb3ZpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSB9OyIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZV92MDAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlX3YwMDI6IGdldEluc3RhbmNlX3YwMDJcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwNjozMiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbmVudW0gVGltZWxvZ19TZXJ2aW5nUGFnZSB7IC8vIFNlcnZpbmdQYWdlIChmb3IgSURFIFNlYXJjaClcclxuXHJcbiAgICBUaW1lbG9nID0gJ1RpbWVsb2cnLFxyXG4gICAgSm9iX1RpbWVsb2cgPSAnSm9iX1RpbWVsb2cnLFxyXG4gICAgUHJvamVjdHNfU2VhcmNoID0gJ1Byb2plY3RzX1NlYXJjaCdcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHZhbHVlOiBUaW1lbG9nX1NlcnZpbmdQYWdlLCBjb21wYXJlVG86IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICByZXR1cm4gY29tcGFyZVRvID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgdGVzdF8xMDMsIFRpbWVsb2dfU2VydmluZ1BhZ2UsIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG5cclxuLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBSZW5hbWUgbW9kdWxlIHRvIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcblxyXG5cclxuLy8gMDUvMDQvMjAxOSAwOToyNiBhbSAtIFNTTiAtIFsyMDE5MDUwNC0wODU1XSAtIFswMDRdIC0gVGVzdGluZyBpZiB3ZSBjYW4gcmVwbGFjZSBnbG9iYWwgdmFyaWFibGVcclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcbi8vIDA1LzA0LzIwMTkgMDk6NTggYW0gLSBTU04gLSBTaW5jZSBoYXZpbmcgdG8gaW1wb3J0IGFuZ3VsYXIgd2hlbiBjb252ZXJ0aW5nIHRvIGEgbW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgICBJQ29sdW1uQmFnVGVtcCBmcm9tICcuLi9JbnRlcmZhY2VzL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgeyBJVGVjaG5vbG9neSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVRlY2hub2xvZ3knO1xyXG5pbXBvcnQgeyBJRGV2U2l0ZVRlY2hub2xvZ3kgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lEZXZTaXRlVGVjaG5vbG9neSc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzID0gZnVuY3Rpb24gKHJlY29yZHNQZXJQYWdlOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtyZWNvcmRzUGVyUGFnZX0vJHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjICcgKyAnZGF0YXNlcnZpY2UgZ2V0RGV2U2l0ZXMgZXJyb3InLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxM3B0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA1OjEwIGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0NV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZUlkOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtkZXZTaXRlSWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MjkgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDE4XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXNDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvcmVjb3JkY291bnRgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRUaW1lbG9nLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTkvMjAxOSAwMjowMCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBDcmVhdGVkICAgIFxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI2IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgdmFyIF9UaW1lbG9nUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL1JlZnJlc2hSZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTIvMjAxOSAxMToyNiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIHZhciBfaW5zZXJ0VGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDM6MDAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDA0XSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICB2YXIgX2FkZE9yVXBkYXRlVGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8wOC8yMDIxIDEwOjUyIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwMl0gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcbiAgICAgICAgICAgICAgICAvLyAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRKb2IvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDcvMjAyMSAwNjoyMiBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTVdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iX0xpbmVJdGVtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9qb2JfbGluZUl0ZW1BUEknLCBqb2JfTGluZUl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA2OjAwIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0OV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkT3JVcGRhdGVUZWNobm9sb2d5ID0gZnVuY3Rpb24gKHRlY2hub2xvZ3k6IElUZWNobm9sb2d5KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90ZWNobm9sb2d5QVBJJywgdGVjaG5vbG9neSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SHR0cFBvc3RQcm9taXNlKHVybCwgYm9keSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCh1cmwsIGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTYvMjAyMSAwODo0MiBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFsxMDVdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRIdHRwRGVsZXRlUHJvbWlzZSh1cmwsIGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5kZWxldGUoYCR7dXJsfS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTYvMjAyMSAwMjo1OSBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswNjFdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgdmFyIGFkZERldlNpdGVUZWNobm9sb2d5ID0gZnVuY3Rpb24gKGRldlNpdGVUZWNobm9sb2d5OiBJRGV2U2l0ZVRlY2hub2xvZ3kpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHR0cFBvc3RQcm9taXNlKCcvYXBpL0RldlNpdGV0ZWNobm9sb2d5QVBJL3Bvc3RfY3VzdG9tJywgZGV2U2l0ZVRlY2hub2xvZ3kpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDA4OjMzIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwM10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAoaWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdHRwRGVsZXRlUHJvbWlzZSgnL2FwaS9EZXZTaXRldGVjaG5vbG9neUFQSScsIGlkKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZTogX2dldERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlc0NvdW50OiBfZ2V0RGV2U2l0ZXNDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkT3JVcGRhdGVUZWNobm9sb2d5LFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZVRlY2hub2xvZ3ksXHJcbiAgICAgICAgICAgICAgICBkZWxldGVEZXZTaXRlVGVjaG5vbG9neVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=