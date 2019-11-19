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
          console.error(errorMessage);
        });
        return deferred.promise;
      }; // 11/19/2019 02:00 am - SSN - [20191119-0048] Created    


      var _TimelogRefreshRecord = function _TimelogRefreshRecord(id) {
        var deferred = $q.defer();
        $http.get('/api/timelogapi/RefreshRecord/' + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get timelog [20191119-0201]'
          });
          console.error(errorMessage);
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
        getJob: _getJob,
        timelogRefreshRecord: _TimelogRefreshRecord
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

  ssn_devsite_angular_module.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL2RlbW9TaXRlc19pbmRleF9wMy50cyIsIndlYnBhY2s6Ly8vLi9EZW1vU2l0ZXNfaW5kZXhfcDNfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9kZW1vU2l0ZXNfSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBOztBQUlBLElBQUksb0JBQW9CLEdBQUc7QUFHdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsa0JBQVYsRUFBb0M7QUFHOUMsUUFBSSwwQkFB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QU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFFSDtBQUdKLEdBNUJEOztBQWdDQSxTQUFPO0FBQ0gsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUtILENBeENjLEVBQWY7O0FBMkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVEEseUIiLCJmaWxlIjoiYnVuZGxlX0RldlNpdGVzSW5kZXhfcDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgdmFyIF9UaW1lbG9nUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvbGlzdC8nICsgY29sdW1uQmFnLmN1cnJlbnRQYWdlTm8gKyBcIi9cIiArIGNvbHVtbkJhZy5yZWNvcmRzUGVyUGFnZSArIFwiL1wiICsgY29sdW1uQmFnLmNvbHVtbk5hbWUgKyBcIi9cIiArIGNvbHVtbkJhZy5kZXNjICsgXCIvXCIgKyBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVNlcnZpY2VzIC0gMjAxOTA5MzAtMTkwNyAtIGdldEpvYiBbXCIgKyBpZCArIFwiXVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV2U2l0ZXM6IGtvLm9ic2VydmFibGUoX2RldlNpdGVzKSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBhZGREZXZTaXRlOiBfYWRkRGV2U2l0ZSxcclxuICAgICAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDQgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAyXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGV2U2l0ZTogX3VwZGF0ZURldlNpdGUsXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGltZUxvZzogX2luc2VydFRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRUaW1lbG9nOiBfZ2V0VGltZWxvZyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVMb2c6IF9hZGRPclVwZGF0ZVRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzOiBfZ2V0Sm9icyxcclxuICAgICAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlczogX2dldEpvYl9TdGF0dXNlcyxcclxuICAgICAgICAgICAgICAgIGdldEpvYjogX2dldEpvYixcclxuICAgICAgICAgICAgICAgIHRpbWVsb2dSZWZyZXNoUmVjb3JkOiBfVGltZWxvZ1JlZnJlc2hSZWNvcmRcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8yNi8yMDE5IDA2OjM4IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwMV0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcblxyXG5cclxuLy8gICAgMDgvMjEvMjAxOCAwMjo0NiBhbSAtIFNTTiAtIENvcGllZCAtIEJlZ2luXHJcbi8vICAwOC8yMS8yMDE4IDAyOjQ2IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gQzpcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxodG1sNS1saW5lLW9mLWJ1c2luZXNzLWFwcGxpY2F0aW9uc1xcZFxcZGVtb3NcXENvZGVkSG9tZXMuV2ViXFxWaWV3c1xcSG9tZXNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPiBcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIEtub2Nrb3V0IHJlbGF0ZWRcclxuXHJcbmNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gdG9wIFwiKTtcclxuXHJcbnZhciBkZW1vU2l0ZXNfaW5kZXhfcDNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gaW5zdGFuY2UgLSB0b3AgXCIpO1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI2LzIwMTkgMDY6NDIgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDYzOF0gLSBbMDAyXSAtIE1vdmUgc2NyaXB0cyBmcm9tIGluZGV4X3AxLmNzaHRtbCB0byBkZW1vU2l0ZXNfaW5kZXhfcDFcclxuICAgICAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIERlbW9TaXRlc19pbmRleF9wMS50c1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEJlZ2luXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZ2V0SlNPTihcIi9hcGkvZGVtb3NpdGVzYXBpL3RvcD9yZWNvcmRDb3VudD0xNVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIEVuZFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MjYtMDYyNyAtIGluZGV4X3AzLmNzaHRtbCAtIHJlcGxhY2UgZGF0YSBzb3VyY2VcIilcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNi8yMDE5IDA2OjQ0IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwM10gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgd2l0aCBsb2FkZGF0YVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShASHRtbC5SYXcoTW9kZWwuZGV2U2l0ZXNKU09OKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdERlbENvbmZpcm0gPSBmdW5jdGlvbiAoaXRlbVRvRGVsZXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhfcDMgLSAyMDE5MDkyMS0wOTQ3LTNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmN1cnJlbnRJdGVtID0gaXRlbVRvRGVsZXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Sm9iID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcjc2hvdy1qb2InKS5tb2RhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdDYWxsaW5nIGRlbC4gWzIwMTkwODEyLTIxMjhdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1Ub0RlbGV0ZSA9IGtvLnRvSlModm0uY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgICAgICAgICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG4gICAgICAgICAgICB2bS5sb2FkRGF0YSgpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgZG9TZXR1cCgpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZGVtb3NpdGVzX2luZGV4X3AzIC0gaW5zdGFuY2UgLSBib3R0b20gXCIpO1xyXG4gXHJcblxyXG59KCk7XHJcblxyXG5cclxuY29uc29sZS5sb2coXCJkZW1vc2l0ZXNfaW5kZXhfcDMgLSBib3R0b20gXCIpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yNi8yMDE5IDA2OjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA2MzhdIC0gWzAwNF0gLSBNb3ZlIHNjcmlwdHMgZnJvbSBpbmRleF9wMS5jc2h0bWwgdG8gZGVtb1NpdGVzX2luZGV4X3AxXHJcbiBcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmltcG9ydCB7IGRlbW9TaXRlc19pbmRleF9wM19pbnN0YW5jZSB9IGZyb20gXCIuL0RlbW9TaXRlc19pbmRleF9wM1wiXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4vRGF0YVNlcnZpY2VzJztcclxuXHJcbmltcG9ydCB7IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlIH0gZnJvbSAnLi9kZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cCgnZGVtb1NpdGVzX0luZGV4Jyk7XHJcblxyXG5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZS5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTtcclxuIFxyXG5kZW1vU2l0ZXNfaW5kZXhfcDNfaW5zdGFuY2UgO1xyXG4gIiwi77u/XHJcblxyXG4vLyAwOS8yMS8yMDE5IDA4OjAwIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy8va25vY2tvdXQvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9qcy9EYXRhU2VydmljZXMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcblxyXG52YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwiZGVtb1NpdGVzX0luZGV4XCIsIFsnbmdSb3V0ZSddKTtcclxuXHJcbiAgICAvLyAwOS8yNi8yMDE5IDA1OjUxIGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA1NTFdIEFkZCAkbG9jYXRpb25Qcm92aWRlclxyXG4gICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuY29uZmlnKFtcIiRyb3V0ZVByb3ZpZGVyXCIsIFwiJGxvY2F0aW9uUHJvdmlkZXJcIiwgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG5cclxuICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKFwiL1wiLCB7XHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvU2l0ZXNJbmRleC5odG1sXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMDkvMTAvMjAxOSAwMTo0NyBhbSAtIFNTTiAtIFsyMDE5MDkxMC0wMTQ3XSAtIFswMDFdIC0gV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlxyXG4gICAgICAgIC8vIFR1cm4gb2ZmXHJcbiAgICAgICAgLy8kcm91dGVQcm92aWRlci53aGVuKFwiL2RldGFpbFwiLCB7XHJcbiAgICAgICAgLy8gICAgY29udHJvbGxlcjogXCJkZXZTaXRlVXBkYXRlQ29udHJvbGxlclwiLFxyXG4gICAgICAgIC8vICAgIC8vIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvU2l0ZURldGFpbC5odG1sXCJcclxuICAgICAgICAvLyAgICB0ZW1wbGF0ZVVybDogXCIvRGV2U2l0ZXMvQ3JlYXRlX3BhcnRpYWxcIlxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjYvMjAxOSAwNTo1MSBhbSAtIFNTTiAtIFsyMDE5MDkyNi0wNTUxXSBBZGQgJGxvY2F0aW9uUHJvdmlkZXJcclxuICAgICAgICAvLyBVc2UgdGhlIEhUTUw1IGhpc3RvcnkgQVBJXHJcbiAgICAgICAgLy8gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBUb2RvOiAgMTEvMTMvMjAxOSAxMDoxOSBwbSAtIFNTTiAtIFRlc3RpbmdcclxuICAgICAgICAvLyBUYWtlIG91dFxyXG4gICAgICAgIC8vICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7fSk7XHJcblxyXG4gICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7IGVuYWJsZWQ6IHRydWUsIHJld3JpdGVMaW5rczogZmFsc2UgfSkuaGFzaFByZWZpeCgnIScpO1xyXG5cclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyByb3V0ZXMgWzIwMTkwOTI2LTA1NTZdXCIpO1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgLy8gMDkvMjEvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuICAgIC8vID0gZnVuY3Rpb25cclxuICAgIHZhciBkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDEgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLlRpdGxlID0gXCJUaXRsZSBzZXQgaW4gQW5ndWxhciBjb250cm9sbGVyLlwiO1xyXG5cclxuXHJcbiAgICAgICAgLy8gJHNjb3BlLmRhdGEgPSBbXTtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGFTZXJ2aWNlO1xyXG5cclxuICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vICAgICRodHRwLmdldCgnLi9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICBkYXRhU2VydmljZS5nZXREZXZTaXRlcygpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCA9IGtvLm9ic2VydmFibGUoJHNjb3BlLmRhdGEuZGV2U2l0ZXMoKSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MTAtMDEwMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudHV0b3JpYWxzcGxhbmUuY29tL2FuZ3VsYXJqcy11cGRhdGUtdGFibGUtcm93L1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplLlxyXG4gICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBhbmd1bGFyLmNvcHkoY29udGVudCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8kc2NvcGUuZWRpdGFibGVyb3cgPSBjb250ZW50O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlRGF0YSA9IGZ1bmN0aW9uIChpbmR4KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRoZUluZGV4ID0gJHNjb3BlLmRhdGFfbG9jYWwoKS5maW5kSW5kZXgociA9PiByLmlkID09PSAkc2NvcGUuZWRpdGFibGVyb3cuaWQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGFfbG9jYWwoKVt0aGVJbmRleF0gPSAkc2NvcGUuZWRpdGFibGVyb3c7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YS51cGRhdGVEZXZTaXRlKCRzY29wZS5lZGl0YWJsZXJvdylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MDgtMDYyOC1TIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MDgtMDYyOC1FIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5yZXNldCgpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBbXTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudC5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKSByZXR1cm4gJ2VkaXRNb2RlJztcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJ3ZpZXdNb2RlJztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdXHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMTI6MDEgYW0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDAxXSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBoeXBlcmxpbmsgaW52YWxpZCBhZGRyZXNzZXNcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzVmFsaWRVcmwgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghY29udGVudCB8fCBjb250ZW50LnNpdGVVcmwgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsVG9UZXN0ID0gY29udGVudC5zaXRlVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjMSA9IHVybFRvVGVzdC5zdWJzdHIoMCwgNyk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IHVybFRvVGVzdC5zdWJzdHIoMCwgOCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGNoZW1hcyA9IFwifGh0dHA6Ly98aHR0cHM6Ly98XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWRPcHRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMSkgPT0gMSkgPyAxIDogMDtcclxuICAgICAgICAgICAgdmFsaWRPcHRpb25zICs9ICh2YWxpZGNoZW1hcy5pbmRleE9mKGMyKSA9PSAxKSA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh2YWxpZE9wdGlvbnMgPiAwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDA1OjMxIHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICAkc2NvcGUuc2V0VGFibGVSb3dDbGFzcyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PSAwID8gJ2V2ZW5Sb3cnIDogJ29kZFJvdyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIiwgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHdpbmRvdycsICdkYXRhU2VydmljZScsIGRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMV0pO1xyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciAgXHJcbiAgICB2YXIgZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLmRldlNpdGVSZWNvcmQgPSB7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwidGVzdCBzdWJtaXRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjIwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwMl0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgLy8gQWRkZWQgY2FzdFxyXG4gICAgICAgICAgICB2YXIgZjogSFRNTEZvcm1FbGVtZW50ID0gPGFueT4kKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWYudmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgZm9ybS4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zaXRlVGl0bGUpO1xyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zb2x1dGlvbl9EZXRhaWxzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICRodHRwLnBvc3QoXCIuL2FwaS9kZW1vc2l0ZXNhcGlcIiwgJHNjb3BlLmRldlNpdGVSZWNvcmQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5hZGREZXZTaXRlKCRzY29wZS5kZXZTaXRlUmVjb3JkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uID0gJyMvJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIHJlY29yZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNDUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZShhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2U6IGdldEluc3RhbmNlXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfTtcclxuXHJcbmV4cG9ydCB7IHRlc3RfMTAzIH07XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==