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

/***/ "./DataServices.js":
/*!*************************!*\
  !*** ./DataServices.js ***!
  \*************************/
/*! exports provided: dataService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService_instance", function() { return dataService_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module



var dataService_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance(currentApplication);
    ssn_devsite_angular_module.factory("dataService", ['$http', '$q', function ($http, $q) {
      var _devSites = [];

      var _getDevSites = function _getDevSites() {
        var deferred = $q.defer();
        $http.get('/api/demositesapi').then(function (result) {
          angular__WEBPACK_IMPORTED_MODULE_1__["copy"](result.data, _devSites);
          deferred.resolve();
        }, function () {
          deferred.reject();
        });
        return deferred.promise;
      }; // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup


      var _getTimelog = function _getTimelog(id) {
        var deferred = $q.defer(); // 09/24/2019 07:15 am - SSN - [20190924-0401] - [009] - Quick timelog entry

        $http.get('/api/timelogapi/get_custom/' + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get timelog [20190829-1819]'
          });
        });
        return deferred.promise;
      };

      var _addDevSite = function _addDevSite(devSite) {
        var deferred = $q.defer();
        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function () {
          deferred.reject();
        });
        return deferred.promise;
      }; // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - editMode div content


      var _updateDevSite = function _updateDevSite(devSite) {
        var deferred = $q.defer(); // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 
        // 09/24/2019 03:38 am - SSN - Logic error - updating wrong link
        //       $http.post('/api/demositesapi', devSite)

        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function () {
          deferred.reject();
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


      var _getJobs = function _getJobs(columnBag) {
        var deferred = $q.defer(); // 09/22/2019 08:23 am - SSN - [20190922-0822] - [001] - Plug in job status filter on job's index - update data source

        var job_statuses_selected = columnBag.job_statuses_selected.length == 0 ? "nothing-201909221117" : columnBag.job_statuses_selected.join(',');
        $http.get('/api/jobapi/list/' + columnBag.currentPageNo + "/" + columnBag.recordsPerPage + "/" + columnBag.columnName + "/" + columnBag.desc + "/" + job_statuses_selected).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get jobs [20190917-0057]'
          });
        });
        return deferred.promise;
      }; // 09/30/2019 07:06 pm - SSN - Adding


      var _getJob = function _getJob(id) {
        console.log("DataServices - 20190930-1907 - getJob [" + id + "]");
        var deferred = $q.defer();
        $http.get('/api/jobapi/get_custom/' + id).then(function (result) {
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
      };

      return {
        devSites: ko.observable(_devSites),
        getDevSites: _getDevSites,
        addDevSite: _addDevSite,
        // 09/06/2019 04:44 pm - SSN - [20190906-0518] - [002] - Angular - editMode div content
        updateDevSite: _updateDevSite,
        insertTimeLog: _insertTimeLog,
        getTimelog: _getTimelog,
        updateTimeLog: _addOrUpdateTimeLog,
        getJobs: _getJobs,
        getJob_Statuses: _getJob_Statuses,
        getJob: _getJob
      };
    }]);
  };

  return {
    //        ssn_devsite_angular_module: ssn_devsite_angular_module
    doSetup: doSetup
  };
}();



/***/ }),

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
console.log("demosites_index_p3 - top ");

var demoSites_index_p3_instance = function () {
  console.log("demosites_index_p3 - instance - top ");

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
        this.errorMessage = ko.observable();
        console.log("20190926-0627 - index_p3.cshtml - replace data source"); // 09/26/2019 06:44 am - SSN - [20190926-0638] - [003] - Move scripts from index_p1.cshtml to demoSites_index_p1
        // Set with loaddata
        //this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

        this.requestDelConfirm = function (itemToDelete) {
          console.log("index_p3 - 20190921-0947-3");
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

      var vm = new ViewModel();
      ko.applyBindings(vm);
      vm.loadData();
    });
  };

  doSetup();
  console.log("demosites_index_p3 - instance - bottom ");
}();

console.log("demosites_index_p3 - bottom ");


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
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataServices */ "./DataServices.js");
/* harmony import */ var _demoSites_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demoSites_Index */ "./demoSites_Index.js");
// 09/26/2019 06:47 am - SSN - [20190926-0638] - [004] - Move scripts from index_p1.cshtml to demoSites_index_p1



_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup('demoSites_Index');
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
/// <reference path="../js/DataServices.ts"/>
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />



var ssn_devsite_angular_module_instance = function () {
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance("demoSites_Index", ['ngRoute']); // 09/26/2019 05:51 am - SSN - [20190926-0551] Add $locationProvider

  ssn_devsite_angular_module.config(["$routeProvider", "$locationProvider", "$rootScope", function ($routeProvider, $locationProvider, $rootScope) {
    $routeProvider.when("/", {
      controller: "demoSiteIndexController_101",
      templateUrl: "/templates/SitesIndex.html"
    }); // 09/10/2019 01:47 am - SSN - [20190910-0147] - [001] - WARNING: Tried to load angular more than once.
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

    $locationProvider.html5Mode({
      enabled: true,
      rewriteLinks: false
    }).hashPrefix('!');
    console.log("setting routes [20190926-0556]");
  }]); // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // = function

  var demoSiteIndexController_101 = function demoSiteIndexController_101($scope, $http, $window, dataService) {
    $scope.Title = "Title set in Angular controller."; // $scope.data = [];

    $scope.data = dataService;
    $scope.isBusy2 = true; //    $http.get('./api/demositesapi')

    dataService.getDevSites().then(function (result) {
      $scope.data_local = ko.observable($scope.data.devSites());
    }, function (ex) {
      console.log("20190910-0101");
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
      $scope.editablerow = angular__WEBPACK_IMPORTED_MODULE_0__["copy"](content); ///////////////////////////////////////////$scope.editablerow = content;
    };

    $scope.saveData = function (indx) {
      var theIndex = $scope.data_local().findIndex(function (r) {
        return r.id === $scope.editablerow.id;
      });
      $scope.data_local()[theIndex] = $scope.editablerow;
      $scope.data.updateDevSite($scope.editablerow).then(function (response) {
        console.log("20190908-0628-S - demoSites_Index - updateDevSite Success");
        console.log(response);
      }, function (error) {
        console.log("20190908-0628-E - demoSites_Index - updateDevSite Error");
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
  };

  return {
    ssn_devsite_angular_module: ssn_devsite_angular_module
  };
}();



/***/ }),

/***/ "./globals.js":
/*!********************!*\
  !*** ./globals.js ***!
  \********************/
/*! exports provided: globals_instance, test_103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals_instance", function() { return globals_instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test_103", function() { return test_103; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


var globals_instance = function () {
  var SSN_Globals =
  /** @class */
  function () {
    function SSN_Globals() {} // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock


    SSN_Globals.getInstance = function (applicationName, args) {
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


      return SSN_Globals.getInstance_Original(applicationName, args);
    };

    SSN_Globals.getInstance_Original = function (applicationName, args) {
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
            console.log("Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
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
            console.log('GLOBALS - asyncGreet - 45');
            deferred.notify('About to greet ' + namePassedIn + '.');

            if (okToGreet(namePassedIn)) {
              console.log('GLOBALS - asyncGreet - 50');
              deferred.resolve('Hello, ' + namePassedIn + '!');
            } else {
              console.log('GLOBALS - asyncGreet - 53');
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


  function getInstance(applicationName, args) {
    if (args === void 0) {
      args = null;
    }

    return SSN_Globals.getInstance(applicationName, args);
  }

  return {
    getInstance: getInstance
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL2RlbW9TaXRlc19pbmRleF9wMy50cyIsIndlYnBhY2s6Ly8vLi9EZW1vU2l0ZXNfaW5kZXhfcDNfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9kZW1vU2l0ZXNfSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBOztBQUlBLElBQUksb0JBQW9CLEdBQUc7QUFHdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsa0JBQVYsRUFBb0M7QUFHOUMsUUFBSSwwQkFB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UUEsSUFBSSxRQUFRLEdBQUc7QUFHWCxNQUFJLElBQUksR0FBRyxTQUFQLElBQU87QUFHUCxxREFBaUIsQ0FBQyxJQUFELEVBQU8sa0JBQVAsQ0FBakIsRUFBNkMsTUFBN0MsQ0FBb0QsQ0FBQyxzQkFBRCxFQUF5QixVQUFVLG9CQUFWLEVBQThCO0FBRXZHLDBCQUFvQixDQUFDLFNBQXJCLENBQStCLDBCQUEvQixFQUEyRCxJQUEzRCxDQUFnRSxnQkFBaEUsRUFBa0YsY0FBbEYsV0FBd0csY0FBeEc7QUFFSCxLQUptRCxDQUFwRDs7QUFPQSxhQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQWtDO0FBRTlCLGFBQU8sQ0FBQyxHQUFSLENBQVksNkNBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFFRCxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBZ0M7QUFDNUIsYUFBTyxDQUFDLEdBQVIsQ0FBWSw2Q0FBWjtBQUNBLGFBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNIOztBQUVELGFBQVMsY0FBVCxDQUF3QixRQUF4QixFQUFnQztBQUM1QixhQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBRUg7QUFHSixHQTVCRDs7QUFnQ0EsU0FBTztBQUNILFFBQUksRUFBRTtBQURILEdBQVA7QUFLSCxDQXhDYyxFQUFmOztBQTJDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1RBLHlCIiwiZmlsZSI6ImJ1bmRsZV9EZXZTaXRlc0luZGV4X3AzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwM10gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgdmFyIF91cGRhdGVEZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wOS8yMDE5IDEwOjMzIHBtIC0gU1NOIC0gWzIwMTkwOTA5LTIxMzZdIC0gWzAwNF0gLSBzZWxlY3QgdG9wIDIwIFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwMzozOCBhbSAtIFNTTiAtIExvZ2ljIGVycm9yIC0gdXBkYXRpbmcgd3JvbmcgbGlua1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTIvMjAxOSAxMToyNiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIHZhciBfaW5zZXJ0VGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDM6MDAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDA0XSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICB2YXIgX2FkZE9yVXBkYXRlVGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE3LzIwMTkgMTI6NTYgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE2XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBvcHRpb24gdG8gbGlzdCBKb2JzXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xOC8yMDE5IDAzOjI0IGFtIC0gU1NOIC0gWzIwMTkwOTE3LTA5MjldIC0gWzAxN10gLSBBZGRpbmcgcGFnaW5nIGZvciBhbmd1bGFyIGxpc3RzXHJcbiAgICAgICAgICAgIC8vIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChwYWdlTm8sIHJlY29yZHNQZXJQYWdlLCBjb2x1bW5OYW1lLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU2VydmljZXMgLSAyMDE5MDkzMC0xOTA3IC0gZ2V0Sm9iIFtcIiArIGlkICsgXCJdXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXZTaXRlczoga28ub2JzZXJ2YWJsZShfZGV2U2l0ZXMpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZXM6IF9nZXREZXZTaXRlcyxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8yNi8yMDE5IDA2OjM4IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwMV0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcblxyXG5cclxuLy8gICAgMDgvMjEvMjAxOCAwMjo0NiBhbSAtIFNTTiAtIENvcGllZCAtIEJlZ2luXHJcbi8vICAwOC8yMS8yMDE4IDAyOjQ2IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gQzpcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxodG1sNS1saW5lLW9mLWJ1c2luZXNzLWFwcGxpY2F0aW9uc1xcZFxcZGVtb3NcXENvZGVkSG9tZXMuV2ViXFxWaWV3c1xcSG9tZXNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPiBcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIEtub2Nrb3V0IHJlbGF0ZWRcclxuXHJcbmNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gdG9wIFwiKTtcclxuXHJcbnZhciBkZW1vU2l0ZXNfaW5kZXhfcDNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gaW5zdGFuY2UgLSB0b3AgXCIpO1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI2LzIwMTkgMDY6NDIgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDYzOF0gLSBbMDAyXSAtIE1vdmUgc2NyaXB0cyBmcm9tIGluZGV4X3AxLmNzaHRtbCB0byBkZW1vU2l0ZXNfaW5kZXhfcDFcclxuICAgICAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIERlbW9TaXRlc19pbmRleF9wMS50c1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJlZ2luXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZ2V0SlNPTihcIi9hcGkvZGVtb3NpdGVzYXBpL3RvcD9yZWNvcmRDb3VudD0xNVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEVuZFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MjYtMDYyNyAtIGluZGV4X3AzLmNzaHRtbCAtIHJlcGxhY2UgZGF0YSBzb3VyY2VcIilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNi8yMDE5IDA2OjQ0IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwM10gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2l0aCBsb2FkZGF0YVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShASHRtbC5SYXcoTW9kZWwuZGV2U2l0ZXNKU09OKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdERlbENvbmZpcm0gPSBmdW5jdGlvbiAoaXRlbVRvRGVsZXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhfcDMgLSAyMDE5MDkyMS0wOTQ3LTNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmN1cnJlbnRJdGVtID0gaXRlbVRvRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Sm9iID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjc2hvdy1qb2InKS5tb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdDYWxsaW5nIGRlbC4gWzIwMTkwODEyLTIxMjhdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1Ub0RlbGV0ZSA9IGtvLnRvSlModm0uY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG4gICAgICAgICAgICB2bS5sb2FkRGF0YSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZG9TZXR1cCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gaW5zdGFuY2UgLSBib3R0b20gXCIpO1xyXG4gXHJcblxyXG59KCk7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJkZW1vc2l0ZXNfaW5kZXhfcDMgLSBib3R0b20gXCIpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yNi8yMDE5IDA2OjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwNF0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcbiBcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmltcG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9IGZyb20gXCIuL0RlbW9TaXRlc19pbmRleF9wM1wiXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4vRGF0YVNlcnZpY2VzJztcclxuXHJcbmltcG9ydCB7IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlIH0gZnJvbSAnLi9kZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cCgnZGVtb1NpdGVzX0luZGV4Jyk7XHJcblxyXG5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZS5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTtcclxuIFxyXG5kZW1vU2l0ZXNfaW5kZXhfcDNfaW5zdGFuY2UgO1xyXG4gIiwi77u/XHJcblxyXG4vLyAwOS8yMS8yMDE5IDA4OjAwIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy8va25vY2tvdXQvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9qcy9EYXRhU2VydmljZXMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcblxyXG52YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwiZGVtb1NpdGVzX0luZGV4XCIsIFsnbmdSb3V0ZSddKTtcclxuXHJcbiAgICAvLyAwOS8yNi8yMDE5IDA1OjUxIGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA1NTFdIEFkZCAkbG9jYXRpb25Qcm92aWRlclxyXG4gICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuY29uZmlnKFtcIiRyb3V0ZVByb3ZpZGVyXCIsIFwiJGxvY2F0aW9uUHJvdmlkZXJcIiwgXCIkcm9vdFNjb3BlXCIsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIsICRyb290U2NvcGUpIHtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbihcIi9cIiwge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBcImRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVzSW5kZXguaHRtbFwiXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDE6NDcgYW0gLSBTU04gLSBbMjAxOTA5MTAtMDE0N10gLSBbMDAxXSAtIFdBUk5JTkc6IFRyaWVkIHRvIGxvYWQgYW5ndWxhciBtb3JlIHRoYW4gb25jZS5cclxuICAgICAgICAvLyBUdXJuIG9mZlxyXG4gICAgICAgIC8vJHJvdXRlUHJvdmlkZXIud2hlbihcIi9kZXRhaWxcIiwge1xyXG4gICAgICAgIC8vICAgIGNvbnRyb2xsZXI6IFwiZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXJcIixcclxuICAgICAgICAvLyAgICAvLyB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVEZXRhaWwuaHRtbFwiXHJcbiAgICAgICAgLy8gICAgdGVtcGxhdGVVcmw6IFwiL0RldlNpdGVzL0NyZWF0ZV9wYXJ0aWFsXCJcclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzI2LzIwMTkgMDU6NTEgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDU1MV0gQWRkICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICAgICAgLy8gVXNlIHRoZSBIVE1MNSBoaXN0b3J5IEFQSVxyXG4gICAgICAgIC8vICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcclxuXHJcbiAgICAgICAgLy8gVG9kbzogIDExLzEzLzIwMTkgMTA6MTkgcG0gLSBTU04gLSBUZXN0aW5nXHJcbiAgICAgICAgLy8gVGFrZSBvdXRcclxuICAgICAgICAvLyAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe30pO1xyXG5cclxuICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoeyBlbmFibGVkOiB0cnVlLCByZXdyaXRlTGlua3M6IGZhbHNlIH0pLmhhc2hQcmVmaXgoJyEnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHRpbmcgcm91dGVzIFsyMDE5MDkyNi0wNTU2XVwiKTtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyA9IGZ1bmN0aW9uXHJcbiAgICB2YXIgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICR3aW5kb3csIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5UaXRsZSA9IFwiVGl0bGUgc2V0IGluIEFuZ3VsYXIgY29udHJvbGxlci5cIjtcclxuXHJcblxyXG4gICAgICAgIC8vICRzY29wZS5kYXRhID0gW107XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhU2VydmljZTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzQnVzeTIgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAgICAkaHR0cC5nZXQoJy4vYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGV2U2l0ZXMoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFfbG9jYWwgPSBrby5vYnNlcnZhYmxlKCRzY29wZS5kYXRhLmRldlNpdGVzKCkpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMTkwOTEwLTAxMDFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2ZhaWxlZCBjYWxsIHRvIGFwaS9kZW1vc2l0ZXNhcGkgKDIwMTgwODMxLTA5NDApIC0gU2VlIGNvbnNvbGUuJyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlzQnVzeTIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8wNy8yMDE5IDEyOjUxIHBtIC0gU1NOIC0gWzIwMTkwNDA3LTEyNTBdIC0gQWRkaW5nIEFuZ3VsYXJKUyBjYWxsIHRvIGVkaXQgRGV2U2l0ZVxyXG5cclxuICAgICAgICAkc2NvcGUuZWRpdENvbW1hbmQxMDEgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBhbGVydCgnZWRpdENvbW1hbmQxMDEgLSB0ZXN0Jyk7XHJcbiAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIDA5LzA2LzIwMTkgMDU6MTkgYW0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAxXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgIC8vIGh0dHBzOi8vd3d3LnR1dG9yaWFsc3BsYW5lLmNvbS9hbmd1bGFyanMtdXBkYXRlLXRhYmxlLXJvdy9cclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZS5cclxuICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSAnJztcclxuXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUuZWRpdENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlcm93ID0gYW5ndWxhci5jb3B5KGNvbnRlbnQpO1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vJHNjb3BlLmVkaXRhYmxlcm93ID0gY29udGVudDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuc2F2ZURhdGEgPSBmdW5jdGlvbiAoaW5keCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aGVJbmRleCA9ICRzY29wZS5kYXRhX2xvY2FsKCkuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXRhX2xvY2FsKClbdGhlSW5kZXhdID0gJHNjb3BlLmVkaXRhYmxlcm93O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGEudXBkYXRlRGV2U2l0ZSgkc2NvcGUuZWRpdGFibGVyb3cpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMTkwOTA4LTA2MjgtUyAtIGRlbW9TaXRlc19JbmRleCAtIHVwZGF0ZURldlNpdGUgU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMTkwOTA4LTA2MjgtRSAtIGRlbW9TaXRlc19JbmRleCAtIHVwZGF0ZURldlNpdGUgRXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucmVzZXQoKTtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlcm93ID0gW107XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5sb2FkVGVtcGxhdGUgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnRlbnQuaWQgPT09ICRzY29wZS5lZGl0YWJsZXJvdy5pZCkgcmV0dXJuICdlZGl0TW9kZSc7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuICd2aWV3TW9kZSc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzA2LzIwMTkgMDU6MTkgYW0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAxXVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDEyOjAxIGFtIC0gU1NOIC0gWzIwMTkwOTA4LTAwMDFdIC0gWzAwMV0gLSBDb25jdXJyZW5jeVxyXG4gICAgICAgIC8vIENoZWNrIHdlIGFyZSBub3QgaHlwZXJsaW5rIGludmFsaWQgYWRkcmVzc2VzXHJcblxyXG4gICAgICAgICRzY29wZS5pc1ZhbGlkVXJsID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC5zaXRlVXJsID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFRvVGVzdCA9IGNvbnRlbnQuc2l0ZVVybC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYzEgPSB1cmxUb1Rlc3Quc3Vic3RyKDAsIDcpO1xyXG4gICAgICAgICAgICBsZXQgYzIgPSB1cmxUb1Rlc3Quc3Vic3RyKDAsIDgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsaWRjaGVtYXMgPSBcInxodHRwOi8vfGh0dHBzOi8vfFwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbGlkT3B0aW9ucyA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YWxpZE9wdGlvbnMgKz0gKHZhbGlkY2hlbWFzLmluZGV4T2YoYzEpID09IDEpID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMikgPT0gMSkgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodmFsaWRPcHRpb25zID4gMCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMDkvMDgvMjAxOSAwNTozMSBwbSAtIFNTTiAtIEFkZGVkXHJcbiAgICAgICAgJHNjb3BlLnNldFRhYmxlUm93Q2xhc3MgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDIgPT0gMCA/ICdldmVuUm93JyA6ICdvZGRSb3cnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKFwiZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXCIsIFsnJHNjb3BlJywgJyRodHRwJywgJyR3aW5kb3cnLCAnZGF0YVNlcnZpY2UnLCBkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFdKTtcclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMl0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXIgIFxyXG4gICAgdmFyIGRldlNpdGVVcGRhdGVDb250cm9sbGVyID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICR3aW5kb3csIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5kZXZTaXRlUmVjb3JkID0ge1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAkc2NvcGUuc2F2ZSA9IGZ1bmN0aW9uIChmb3JtU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgLy9hbGVydChcInRlc3Qgc3VibWl0XCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMjoyMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDJdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIC8vIEFkZGVkIGNhc3RcclxuICAgICAgICAgICAgdmFyIGY6IEhUTUxGb3JtRWxlbWVudCA9IDxhbnk+JChmb3JtU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFmLnZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIGZvcm0uJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWxlcnQoJHNjb3BlLmRldlNpdGVSZWNvcmQuc2l0ZVRpdGxlKTtcclxuICAgICAgICAgICAgYWxlcnQoJHNjb3BlLmRldlNpdGVSZWNvcmQuc29sdXRpb25fRGV0YWlscyk7XHJcblxyXG4gICAgICAgICAgICAvLyAkaHR0cC5wb3N0KFwiLi9hcGkvZGVtb3NpdGVzYXBpXCIsICRzY29wZS5kZXZTaXRlUmVjb3JkKTtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuYWRkRGV2U2l0ZSgkc2NvcGUuZGV2U2l0ZVJlY29yZClcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHdpbmRvdy5sb2NhdGlvbiA9ICcjLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdGYWlsZWQgdG8gc2F2ZSByZWNvcmQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDQ1Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlOiBnZXRJbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH07XHJcblxyXG5leHBvcnQgeyB0ZXN0XzEwMyB9O1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=