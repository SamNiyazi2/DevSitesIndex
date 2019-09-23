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

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!*****************************************************************************************!*\
  !*** C:/Sams/DevSitesIndex/DevSitesIndex/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

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
    ssn_devsite_angular_module.factory("dataService", function ($http, $q) {
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
        var deferred = $q.defer();
        $http.get('/api/timelogapi/' + id).then(function (result) {
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
      }; // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - edit div content


      var _updateDevSite = function _updateDevSite(devSite) {
        var deferred = $q.defer(); // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 
        //       $http.post('/api/demositesapi', devSite)

        $http.post('/api/demositesapi/Top?recordCount=20', devSite).then(function (result) {
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
        console.log(job_statuses_selected);
        $http.get('/api/jobapi/list/' + columnBag.currentPageNo + "/" + columnBag.recordsPerPage + "/" + columnBag.columnName + "/" + columnBag.desc + "/" + job_statuses_selected).then(function (result) {
          deferred.resolve(result.data);
        }, function (errorMessage) {
          deferred.reject({
            Error: 'Failed call to get jobs [20190917-0057]'
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
        // 09/06/2019 04:44 pm - SSN - [20190906-0518] - [002] - Angular - edit div content
        updateDevSite: _updateDevSite,
        insertTimeLog: _insertTimeLog,
        getTimelog: _getTimelog,
        updateTimeLog: _addOrUpdateTimeLog,
        getJobs: _getJobs,
        getJob_Statuses: _getJob_Statuses
      };
    });
  };

  return {
    //        ssn_devsite_angular_module: ssn_devsite_angular_module
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./DemoSites_index_main.ts":
/*!*********************************!*\
  !*** ./DemoSites_index_main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DemoSites_index_p1 */ "./DemoSites_index_p1.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataServices */ "./DataServices.js");
/* harmony import */ var _demoSites_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demoSites_Index */ "./demoSites_Index.js");
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack



_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup('demoSites_Index');
_demoSites_Index__WEBPACK_IMPORTED_MODULE_2__["ssn_devsite_angular_module_instance"].ssn_devsite_angular_module;
_DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__["demosites_index_p1_instance"];

/***/ }),

/***/ "./DemoSites_index_p1.js":
/*!*******************************!*\
  !*** ./DemoSites_index_p1.js ***!
  \*******************************/
/*! exports provided: demosites_index_p1_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demosites_index_p1_instance", function() { return demosites_index_p1_instance; });
/* harmony import */ var _js_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/site */ "./site.js");
// 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml
// 08/21/2018 02:46 am - SSN - Copied - Begin
// 08/21/2018 02:46 am - SSN - Copied from C: \Sams_Projects\PluralSight\html5 - line - of - business - applications\d\demos\CodedHomes.Web\Views\Homes
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" /> 


var demosites_index_p1_instance = function () {
  // Knockout related
  var ViewModel = function ViewModel() {
    // 08/12/2019 05:58 am - SSN - [20190812-0515] - [006] - Apply fulltext search
    var self = this; // 09/10/2019 04:20 am - SSN - [20190910-0147] - [009] - WARNING: Tried to load angular more than once.
    // Since bound to control, it displays the observable as object[object]. Take out.

    self.SearchText_KO = ""; // ko.observable({});
    // 08/21/2019 12:16 pm - SSN - [20190821-1210] - [003] - SearchResultsFeedback_KO

    self.SearchResultsFeedback_KO = ko.observable("");
    self.SearchResultsFeedback_ClassName_KO = ko.observable();
    self.prefixPreWithShowHideAnchor_DontCall_KO = ko.observable(false); // 09/08/2019 07:10 pm - SSN - [20190908-0001] - [007] - Concurrency
    //////this.currentItem = {};

    self.currentItem = ko.observable();
    self.errorMessage = ko.observable(); // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
    //  this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

    this.devSitesJSON = ko.observableArray([]); // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update

    this.loadData = function () {
      var self = this; // 09/09/2019 10:35 pm - SSN - [20190909-2136] - [005] - Select top 15
      // $.getJSON("/api/demositesapi", function (data) {

      $.getJSON("/api/demositesapi/top?recordCount=15", function (data) {
        self.devSitesJSON.removeAll();
        self.devSitesJSON(data);
      });
    }; // 08/16/2019 04:25 pm - SSN - [20190816-1625] - [001] - Correct logic for getting record count to show no search results message


    this.getRecordCount = function () {
      var recordCount = self.devSitesJSON().length; // self.devSitesJSON

      return recordCount;
    }; // 09/08/2019 08:07 pm - SSN - [20190908-0001] - [009] - Concurrency
    // Renamed del-confirm del_confirm_p1


    this.requestDelConfirm = function (itemToDelete) {
      self.currentItem(itemToDelete);
      $('#del_confirm_p1').modal({
        backdrop: 'static',
        keyboard: false
      });
    };

    this.showJob = function (devSiteID) {
      $('#show-job').modal();
    };

    this.del = function () {
      var itemToDelete = ko.toJS(vm.currentItem);
      $('#del-confirm').modal('hide');
    };

    this.checkIfcallingcmd = function (siteUrl) {
      if (stringStartsWith(siteUrl, 'cmd')) {
        return true;
      }
    };

    this.siteUrlWithoutCMD = function (siteUrl) {
      if (stringStartsWith(siteUrl, 'cmd')) {
        return siteUrl.substring(4);
      } else {
        return siteUrl;
      }
    }; // 08/12/2019 05:57 am - SSN - [20190812-0515] - [005] - Apply fulltext search
    // https://stackoverflow.com/questions/16245905/fetching-or-sending-data-from-a-form-using-knockout-js
    //self.onSubmit = function () {


    this.onSubmit = function () {
      //var data = JSON.stringify(
      //    {
      //        SearchText: self.SearchText_KO()
      //    }); // prepare request data
      // 09/10/2019 04:20 am - SSN - [20190910-0147] - [009] - WARNING: Tried to load angular more than once.
      // "SearchText": self.SearchText_KO()
      var data_pre = {
        "SearchText": self.SearchText_KO
      };
      var data = JSON.stringify(data_pre); //$.post("/echo/json", data, function (response) // sends 'post' request
      //{
      //    // on success callback
      //    self.responseJSON(response);
      //})
      //$.post("/api/demositesapi/Search", data, function (response) {
      //    self.devSitesJSON.removeAll();
      //    self.devSitesJSON(response);
      //});

      $.ajax({
        type: "POST",
        data: data,
        url: "/api/demositesapi/Search",
        contentType: "application/json",
        dataType: 'json'
      }).done(function (response) {
        self.devSitesJSON.removeAll();
        self.devSitesJSON(response); // 08/21/2019 12:14 pm - SSN - [20190821-1210] - [002] - SearchResultsFeedback_KO

        self.SearchResultsFeedback_KO('');
        self.SearchResultsFeedback_ClassName_KO("");

        if (response.length === 0) {
          self.SearchResultsFeedback_KO('Search returned no records.');
          self.SearchResultsFeedback_ClassName_KO("alert-warning");
        }

        if (!self.prefixPreWithShowHideAnchor_DontCall_KO()) {
          setTimeout(_js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].prefixPreWithShowHideAnchor, 2000);
        } else {
          // 08/21/2019 01:48 pm - SSN - [20190821-1348] [001] - Added
          setTimeout(_js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].showCollapsedDivs, 2000);
        }
      });
    };

    this.getClassForDemoState = function (forDemo_v2) {
      var selectedClass = "";

      switch (forDemo_v2) {
        case 1:
          selectedClass = ' forDemo_Yes';
          break;

        case 2:
          selectedClass = 'forDemo_No';
          break;

        case 3:
          selectedClass = 'forDemo_Undecided';
          break;
      }

      return "siteDiv" + " " + selectedClass;
    };
  };

  var vm = new ViewModel();
  ko.applyBindings(vm);
  vm.loadData();
}();

var stringStartsWith = function stringStartsWith(string, startsWith) {
  string = string || "";
  if (startsWith.length > string.length) return false;
  return string.substring(0, startsWith.length) === startsWith;
}; // 09/21/2019 07:16 am - SSN - [20190921-0357] - [010] - Creating multiple entry for Webpack




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
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance("demoSites_Index", ['ngRoute']);
  ssn_devsite_angular_module.config(["$routeProvider", function ($routeProvider) {
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

    $routeProvider.otherwise({
      redirectTo: "/"
    });
  }]); // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // = function

  var demoSiteIndexController_101 = function demoSiteIndexController_101($scope, $http, dataService) {
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
    }; // 09/06/2019 05:19 am - SSN - [20190906-0518] - [001] - Angular - edit div content
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
      if (content.id === $scope.editablerow.id) return 'edit';else return 'view';
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

  ssn_devsite_angular_module.controller("demoSiteIndexController_101", demoSiteIndexController_101); // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
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
/*! exports provided: globals_instance, test_102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals_instance", function() { return globals_instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test_102", function() { return test_102; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


var globals_instance = function () {
  var SSN_Globals =
  /** @class */
  function () {
    function SSN_Globals() {} // 09/23/2019 06:13 am - SSN - [20190923-0613] - [001] - Adding a lock


    SSN_Globals.getInstance = function (applicationName, args) {
      if (args === void 0) {
        args = null;
      }

      console.log("AAAAAAAAAAAAAAAAAAAAAA checking globals_instance_local");
      factorySetup.doFactorySetup(); //    console.log('GLOBALS - getInstance - 65');

      console.log("Bottom of getInstance==============================================");
      return SSN_Globals.getInstance_Original(applicationName, args);
    };

    SSN_Globals.getInstance_Original = function (applicationName, args) {
      if (args === void 0) {
        args = null;
      }

      console.log("Global - 20190923-0618 - &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      var angularApp = null;
      var selected = SSN_Globals.ssn_devsite_angular_module.filter(function (r) {
        return r.name === applicationName;
      });

      if (selected.length > 0) {
        console.log("Globals - 20190923-0543 - 001 - Found application [" + applicationName + "]  Instance count [" + selected.length + "]");
        angularApp = selected[0];
      } else {
        switch (applicationName) {
          case 'timesheetApp':
            console.log("Globals - 20190923-0543 - 002 - Creating application [" + applicationName + "]");
            console.log(args);
            console.log("Default: ngRoute, ui.bootstrap");
            angularApp = {
              name: applicationName,
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('timesheetApp', ['ngRoute', 'ui.bootstrap'])
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            console.log("Globals - 20190923-0543 - 002-ZZZ - Created application [" + applicationName + "]");
            break;

          case 'demoSites_Index_Timesheet':
            console.log("Globals - 20190923-0543 - 003 - Creating application [" + applicationName + "]");
            console.log(args);
            console.log("Default: args");
            angularApp = {
              name: applicationName,
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('demoSites_Index_Timesheet', args)
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            console.log("Globals - 20190923-0543 - 003-ZZZ - Created application [" + applicationName + "]");
            break;

          case 'demoSites_Index':
            console.log("Globals - 20190923-0543 - 003 - Creating application [" + applicationName + "]");
            console.log(args);
            console.log("Default: args");
            angularApp = {
              name: applicationName,
              instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]("demoSites_Index", args)
            };
            SSN_Globals.ssn_devsite_angular_module.push(angularApp);
            console.log("Globals - 20190923-0543 - 003-ZZZ - Created application [" + applicationName + "]");
            break;

          default:
            console.log("Globals ************* No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
            break;
        }
      }

      console.log("Global - 20190923-0618 - RETURNING zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
      console.log(angularApp.instance);
      return angularApp.instance;
    };

    SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];

    return SSN_Globals;
  }();

  var factorySetup = function () {
    var doFactorySetup = function doFactorySetup() {
      console.log("Checking factory ZZZZZZZZZZZZZZZZZZZZz-2");

      try {
        if (angular__WEBPACK_IMPORTED_MODULE_0__["module"]("globalAngularApp")) {
          console.log("...................Exists");
          return;
        }
      } catch (err) {
        /* failed to require */
      }

      var app_globals = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('globalAngularApp', []); //////////   console.log("doFactorySetup - AAAAAAAAAAAAAAAAAAAAAAAAAA");

      app_globals.factory("globalAngularAppUtil", function ($http, $q) {
        var doTest101 = function doTest101() {
          console.log('GLOBALS - asyncGreet - 40 - QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQqQQQQQQQQ');
          var deferred = $q.defer();
          setTimeout(function () {
            console.log('GLOBALS - asyncGreet - 45');
            deferred.notify('About to greet ' + name + '.');

            if (okToGreet(name)) {
              console.log('GLOBALS - asyncGreet - 50');
              deferred.resolve('Hello, ' + name + '!');
            } else {
              console.log('GLOBALS - asyncGreet - 53');
              deferred.reject('Greeting ' + name + ' is not allowed.');
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
      });
    };

    return {
      doFactorySetup: doFactorySetup
    }; //console.log("calling factory setup ********************");
    //doFactorySetup();
    //console.log("calling factory setup *****    DONE    ********************");
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



var test_102 = function () {
  var app_globals;

  try {
    app_globals = angular__WEBPACK_IMPORTED_MODULE_0__["module"]("globalAngularApp");
    console.log("...................Exists");
  } catch (err) {
    /* failed to require */
    app_globals = angular__WEBPACK_IMPORTED_MODULE_0__["module"]('globalAngularApp', []);
    console.log("...................CREATING ************************************");
  } //console.log("asyncGreet - calling app_globals module- Before");
  //console.log(app_globals);
  //console.log("asyncGreet - calling app_globals module - After ");


  function theControllerFunction(globalAngularAppUtil) {
    console.log("asyncGreet - calling app_globals module- Before  - controller XXXXXXXXXXXXXXXXXXXXXXXXx-1");
    console.log(globalAngularAppUtil);
    console.log("asyncGreet - calling app_globals module- after  - controller XXXXXXXXXXXXXXXXXXXXXXXXx-2");
    console.log("**********************************************888");
    console.log("**********************************************888");
    console.log("**********************************************888");
    console.log("**********************************************888");
    console.log("Call to doTest101 - Before -----------------------------------------------");
    globalAngularAppUtil.doTest101();
    console.log("Call to doTest101 - After -----------------------------------------------");

    function okToGreet(name) {
      return false;
    } //function asyncGreet(name) {
    //    // perform some asynchronous operation, resolve or reject the promise when appropriate.
    //    return $q(function (resolve, reject) {
    //        setTimeout(function () {
    //            if (okToGreet(name)) {
    //                resolve('Hello, ' + name + '!');
    //            } else {
    //                reject('Greeting ' + name + ' is not allowed.');
    //            }
    //        }, 1000);
    //    });
    //}
    //var promise = asyncGreet('Robin Hood');
    //promise.then(function (greeting) {
    //    alert('Success: ' + greeting);
    //}, function (reason) {
    //    alert('Failed: ' + reason);
    //});

  }

  var test101 = app_globals.controller('globalsComponent', ['globalAngularAppUtil', theControllerFunction]);
  return {
    app_globals: app_globals,
    test101: test101
  };
}();



/***/ }),

/***/ "./site.js":
/*!*****************!*\
  !*** ./site.js ***!
  \*****************/
/*! exports provided: site_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site_instance", function() { return site_instance; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


// 05/19/2019 01:18 pm - SSN - [20190519-1132] - [007] - Address definitely typed errors - No errors
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />   
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />
//08/23/2018 01:24 am - SSN
// 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
var site_instance = function () {
  // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
  var setDefaults = function setDefaults() {
    $("[cmd-name]").on('click', function (e) {
      var cmdName = $(this).attr('cmd-name');
      var popupName = $(this).attr('popup-name');
      var jQueryObjectName = $(this).attr('jQueryObjectName');
      var jQueryObjectName2 = $(this).attr('jQueryObjectName2'); //      alert('clicked me! cmdName [' + cmdName + "] popup-name  [" + popupName + "]");

      if (cmdName === "open-popup") {
        $(popupName).modal({
          backdrop: 'static',
          keyboard: false
        });
        $("#addSite_PageContent").load("/times/start");
      } // 03/14/2019 09:33 am - SSN - Adding hide and show


      if (cmdName === "hideObject") {
        $(jQueryObjectName).hide();
      }

      if (cmdName === "showObject") {
        $(jQueryObjectName).show();
      }

      if (cmdName === "smooth-scroll") {
        //$('body').scrollspy({ target: jQueryObjectName });
        document.querySelector(jQueryObjectName).scrollIntoView({
          behavior: 'smooth'
        });
      } // 04/08/2019 01:33 am - SSN - [20190407-2345] - TimeLog


      if (cmdName === "set-default-time") {
        var d = new Date();
        var cd = d.getFullYear() + "-" + p(d.getMonth() + 1, 2, '0') + "-" + p(d.getDate(), 2, '0') + "T" + p(d.getHours(), 2, '0') + ":" + p(d.getMinutes(), 2, '0') + ":" + p(d.getSeconds(), 2, '0');
        $(jQueryObjectName).val(cd);
      } // 04/19/2019 04:48 pm - SSN - [20190419-1647] - Set amount for TotalSeconds


      if (cmdName === "set-TotalPeriod") {
        // 05/19/2019 01:10 pm - SSN - Addressing error. string | number | string[] cannot convert top string | number
        // 05/202019 02:39 pm - SSN - No calculating elapsed time correctly with TypeScript conversion.
        var d11 = new Date();
        var selectedDate = $(jQueryObjectName)[0].value;
        var d12 = new Date(selectedDate);
        var delta_1 = d11.getTime().valueOf() - d12.getTime().valueOf();
        var delta_2 = Math.floor(delta_1 / 1000);
        $(jQueryObjectName2).val(delta_2);
      }
    }); // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function p(str1, len, char) {

    var p = function p(str1, len, _char) {
      var str = str1.toString();
      if (str.length > len) return str;
      var s1 = _char.repeat(len) + str;
      var s2 = s1.substring(len + (str.length - len));
      return s2;
    }; // 03/14/2019 10:28 am - SSN


    $(window).on('scroll', function () {
      var y = $(window).scrollTop();

      if (y > 0) {
        $('.fixed_anchor').fadeIn('slow');
      } else {
        $('.fixed_anchor').fadeOut('slow');
      }
    });
  }; // 08/21/2019 01:48 pm 
  // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
  // function showCollapsedDivs() {


  var showCollapsedDivs = function showCollapsedDivs() {
    $("[data-toggle='collapse']").trigger('click');
  }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
  // function prefixPreWithShowHideAnchor() {


  var prefixPreWithShowHideAnchor = function prefixPreWithShowHideAnchor() {
    // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
    // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
    $('pre').each(function (aa) {
      $(this).hide();
      var titleAttrib = "";

      var _title = $(this).attr("title");

      var _title_caption = "";

      if (_title !== undefined) {
        titleAttrib = " title='" + _title + "' ";
        _title_caption = ": " + _title;
      } else {
        _title = "";
      }

      $('<p><a cmd-name="showsibling" ' + titleAttrib + ' >Show code' + _title_caption + '</a></p>').insertBefore(this);
    }); // 05/01/2019 04:52 am - SSN - Use JavaScript only

    var list1 = document.querySelectorAll('pre'); // 05/19/2019 12:30 pm - SSN - [20190519-1132] - [004] - Address definitely typed errors
    // for (var a of list1) {
    // list1.forEach(function (currentItem, currentIndex, listObj) {

    list1.forEach(function (a, currentIndex, listObj) {
      // 05/17/2019 04:16 am - SSN - Update to exclude highlighting
      //var b = a.innerHTML.replace(/</g, '&lt;');  
      // Exclude <h and <n. Already setup for <i.  See site.css.
      // 06/07/2019 11:50 am - SSN - Update - Matches shown https://www.regextester.com/
      // var b = a.innerHTML.replace(/<([^i|^/i|^h|^/h|^n|^/n]){1}[^\s|^>]{1}/g, '&lt;$1');
      // var b = a.innerHTML.replace(/(<)((?!\/?[n|i|h]))(.*?>)/g, '\n1---\n[$&]\n2---\n[$1]\n3---\n[$2]\n4---\n[$3]\n\n');
      // We have not coverred h1, h2, etc.
      // knockout is doing its own thing when it comes to tags. Evident with the use of generic types ( function<SomeType> )
      var b = a.innerHTML.replace(/(<)((?!\/?[n|i|h]))(.*?>)/g, '&lt;$3');
      a.innerHTML = b;
    }); // 04/26/2019 10:14 pm - SSN - [20190426-2156] - [002] - Hide pre and add a link to show.

    $("[cmd-name]").on('click', function (e) {
      var cmdName = $(this).attr('cmd-name');

      if (cmdName === "showsibling") {
        var _pre = $(this).parent().next();

        var _link = $(this); // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title


        var _title = $(this).attr('title');

        var _title_caption = "";

        if (_title === undefined) {
          _title = "";
        } else {
          _title_caption = ": " + _title;
        }

        if (_pre.is(":visible")) {
          _link.text('Show code' + _title_caption);

          _pre.fadeOut();
        } else {
          _pre.fadeIn();

          _link.text('Hide code' + _title_caption);
        }
      }
    });
  }; // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - Begin
  // Source https://www.c-sharpcorner.com/UploadFile/1d3119/date-serialization-with-angular-js-web-api/


  var iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
  // function fnConverDate(input) {

  var fnConverDate = function fnConverDate(input) {
    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(input) !== "object") return input;

    for (var key in input) {
      if (!input.hasOwnProperty(key)) continue;
      var value = input[key];

      var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value);

      var match;

      if (type === 'string' && (match = value.match(iso8601RegEx))) {
        input[key] = new Date(value);
      } else if (type === "object") {
        fnConverDate(value);
      }
    }
  };

  $(function () {
    setDefaults(); // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
    // 09/10/2019 08:53 pm - SSN - Replaced
    // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.

    setTimeout(prefixPreWithShowHideAnchor, 2000); //$(function () {
    //    console.log('20190910-2054 - prefixPreWithShowHideAnchor timeout to jquery ready');
    //    prefixPreWithShowHideAnchor();
    //});
  });
  return {
    fnConverDate: fnConverDate,
    showCollapsedDivs: showCollapsedDivs,
    prefixPreWithShowHideAnchor: prefixPreWithShowHideAnchor
  };
}();



/***/ }),

/***/ 0:
/*!***************************************!*\
  !*** multi ./DemoSites_index_main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./DemoSites_index_main.ts */"./DemoSites_index_main.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X3AxLnRzIiwid2VicGFjazovLy8uL2RlbW9TaXRlc19JbmRleC50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0Is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QUFLLEdBQUcsS0FBSyxDQUFDLEdBQUQsQ0FBakI7O0FBQ0EsVUFBSSxJQUFJLEdBQUcscUVBQU8sS0FBVixDQUFSOztBQUNBLFVBQUksS0FBSjs7QUFDQSxVQUFJLElBQUksS0FBSyxRQUFULEtBQXNCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLFlBQVosQ0FBOUIsQ0FBSixFQUE4RDtBQUMxRCxhQUFLLENBQUMsR0FBRCxDQUFMLEdBQWEsSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFiO0FBQ0gsT0FGRCxNQUdLLElBQUksSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDeEIsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSDtBQUNKO0FBQ0osR0FsQkQ7O0FBd0JBLEdBQUMsQ0FBQztBQUVFLGVBQVcsR0FGYixDQUlFO0FBQ0E7QUFDQTs7QUFDQSxjQUFVLENBQUMsMkJBQUQsRUFBOEIsSUFBOUIsQ0FBVixDQVBGLENBUUU7QUFDQTtBQUNBO0FBQ0E7QUFHSCxHQWRBLENBQUQ7QUFpQkEsU0FBTztBQUVILGdCQUFZLEVBQUUsWUFGWDtBQUdILHFCQUFpQixFQUFFLGlCQUhoQjtBQUlILCtCQUEyQixFQUFFO0FBSjFCLEdBQVA7QUFPSCxDQWxTbUIsRUFBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQSx5QiIsImZpbGUiOiJidW5kbGVfRGV2U2l0ZXNJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIu+7v1xyXG5cclxuLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBSZW5hbWUgbW9kdWxlIHRvIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcblxyXG5cclxuLy8gMDUvMDQvMjAxOSAwOToyNiBhbSAtIFNTTiAtIFsyMDE5MDUwNC0wODU1XSAtIFswMDRdIC0gVGVzdGluZyBpZiB3ZSBjYW4gcmVwbGFjZSBnbG9iYWwgdmFyaWFibGVcclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcbi8vIDA1LzA0LzIwMTkgMDk6NTggYW0gLSBTU04gLSBTaW5jZSBoYXZpbmcgdG8gaW1wb3J0IGFuZ3VsYXIgd2hlbiBjb252ZXJ0aW5nIHRvIGEgbW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgICBJQ29sdW1uQmFnVGVtcCBmcm9tICcuL0lDb2x1bW5CYWcnO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBkYXRhU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuZmFjdG9yeShcImRhdGFTZXJ2aWNlXCIsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwM10gLSBBbmd1bGFyIC0gZWRpdCBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGkvVG9wP3JlY29yZENvdW50PTIwJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coam9iX3N0YXR1c2VzX3NlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYnMgWzIwMTkwOTE3LTAwNTddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdCBkaXYgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGV2U2l0ZTogX3VwZGF0ZURldlNpdGUsXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGltZUxvZzogX2luc2VydFRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRUaW1lbG9nOiBfZ2V0VGltZWxvZyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVMb2c6IF9hZGRPclVwZGF0ZVRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzOiBfZ2V0Sm9icyxcclxuICAgICAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlczogX2dldEpvYl9TdGF0dXNlc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDA3OjE0IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwOV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG4gXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vanMvc2l0ZSc7XHJcblxyXG5pbXBvcnQgeyBkZW1vc2l0ZXNfaW5kZXhfcDFfaW5zdGFuY2UgIH0gZnJvbSBcIi4vRGVtb1NpdGVzX2luZGV4X3AxXCJcclxuXHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi9EYXRhU2VydmljZXMnO1xyXG5cclxuaW1wb3J0IHsgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgfSBmcm9tICcuL2RlbW9TaXRlc19JbmRleCc7XHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKCdkZW1vU2l0ZXNfSW5kZXgnKTtcclxuXHJcbnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlO1xyXG4gIiwi77u/XHJcbi8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbFxyXG5cclxuLy8gMDgvMjEvMjAxOCAwMjo0NiBhbSAtIFNTTiAtIENvcGllZCAtIEJlZ2luXHJcbi8vIDA4LzIxLzIwMTggMDI6NDYgYW0gLSBTU04gLSBDb3BpZWQgZnJvbSBDOiBcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxodG1sNSAtIGxpbmUgLSBvZiAtIGJ1c2luZXNzIC0gYXBwbGljYXRpb25zXFxkXFxkZW1vc1xcQ29kZWRIb21lcy5XZWJcXFZpZXdzXFxIb21lc1xyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMva25vY2tvdXQvaW5kZXguZC50c1wiIC8+IFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vanMvc2l0ZSc7XHJcblxyXG5cclxuXHJcbnZhciBkZW1vc2l0ZXNfaW5kZXhfcDFfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyBLbm9ja291dCByZWxhdGVkXHJcblxyXG5cclxuICAgICAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gMDgvMTIvMjAxOSAwNTo1OCBhbSAtIFNTTiAtIFsyMDE5MDgxMi0wNTE1XSAtIFswMDZdIC0gQXBwbHkgZnVsbHRleHQgc2VhcmNoXHJcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xMC8yMDE5IDA0OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwOV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgICAgIC8vIFNpbmNlIGJvdW5kIHRvIGNvbnRyb2wsIGl0IGRpc3BsYXlzIHRoZSBvYnNlcnZhYmxlIGFzIG9iamVjdFtvYmplY3RdLiBUYWtlIG91dC5cclxuICAgICAgICAgICAgc2VsZi5TZWFyY2hUZXh0X0tPID0gXCJcIjsgLy8ga28ub2JzZXJ2YWJsZSh7fSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDgvMjEvMjAxOSAxMjoxNiBwbSAtIFNTTiAtIFsyMDE5MDgyMS0xMjEwXSAtIFswMDNdIC0gU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPXHJcblxyXG4gICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTyA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyA9IGtvLm9ic2VydmFibGUoKTtcclxuICAgICAgICAgICAgc2VsZi5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JfRG9udENhbGxfS08gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA4LzIwMTkgMDc6MTAgcG0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDA3XSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgICAgIC8vLy8vL3RoaXMuY3VycmVudEl0ZW0gPSB7fTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50SXRlbSA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuZXJyb3JNZXNzYWdlID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDYvMjAxOSAwNTo0NCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gaW5kZXhfcDEuY3NodG1sIC0gVXBkYXRlXHJcbiAgICAgICAgICAgIC8vICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShASHRtbC5SYXcoTW9kZWwuZGV2U2l0ZXNKU09OKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDYvMjAxOSAwNTo0NCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gaW5kZXhfcDEuY3NodG1sIC0gVXBkYXRlXHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozNSBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDVdIC0gU2VsZWN0IHRvcCAxNVxyXG5cclxuICAgICAgICAgICAgICAgIC8vICQuZ2V0SlNPTihcIi9hcGkvZGVtb3NpdGVzYXBpXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaS90b3A/cmVjb3JkQ291bnQ9MTVcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOC8xNi8yMDE5IDA0OjI1IHBtIC0gU1NOIC0gWzIwMTkwODE2LTE2MjVdIC0gWzAwMV0gLSBDb3JyZWN0IGxvZ2ljIGZvciBnZXR0aW5nIHJlY29yZCBjb3VudCB0byBzaG93IG5vIHNlYXJjaCByZXN1bHRzIG1lc3NhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldFJlY29yZENvdW50ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZWNvcmRDb3VudDogbnVtYmVyID0gc2VsZi5kZXZTaXRlc0pTT04oKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyBzZWxmLmRldlNpdGVzSlNPTlxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmRDb3VudDtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDgvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDkwOC0wMDAxXSAtIFswMDldIC0gQ29uY3VycmVuY3lcclxuICAgICAgICAgICAgLy8gUmVuYW1lZCBkZWwtY29uZmlybSBkZWxfY29uZmlybV9wMVxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3REZWxDb25maXJtID0gZnVuY3Rpb24gKGl0ZW1Ub0RlbGV0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudEl0ZW0oaXRlbVRvRGVsZXRlKTtcclxuICAgICAgICAgICAgICAgICQoJyNkZWxfY29uZmlybV9wMScpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dKb2IgPSBmdW5jdGlvbiAoZGV2U2l0ZUlEKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3Nob3ctam9iJykubW9kYWwoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5kZWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1Ub0RlbGV0ZSA9IGtvLnRvSlModm0uY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZmNhbGxpbmdjbWQgPSBmdW5jdGlvbiAoc2l0ZVVybCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1N0YXJ0c1dpdGgoc2l0ZVVybCwgJ2NtZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaXRlVXJsV2l0aG91dENNRCA9IGZ1bmN0aW9uIChzaXRlVXJsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyaW5nU3RhcnRzV2l0aChzaXRlVXJsLCAnY21kJykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2l0ZVVybC5zdWJzdHJpbmcoNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpdGVVcmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDgvMTIvMjAxOSAwNTo1NyBhbSAtIFNTTiAtIFsyMDE5MDgxMi0wNTE1XSAtIFswMDVdIC0gQXBwbHkgZnVsbHRleHQgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjQ1OTA1L2ZldGNoaW5nLW9yLXNlbmRpbmctZGF0YS1mcm9tLWEtZm9ybS11c2luZy1rbm9ja291dC1qc1xyXG4gICAgICAgICAgICAvL3NlbGYub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvL3ZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgU2VhcmNoVGV4dDogc2VsZi5TZWFyY2hUZXh0X0tPKClcclxuICAgICAgICAgICAgICAgIC8vICAgIH0pOyAvLyBwcmVwYXJlIHJlcXVlc3QgZGF0YVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8xMC8yMDE5IDA0OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwOV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgICAgICAgICAvLyBcIlNlYXJjaFRleHRcIjogc2VsZi5TZWFyY2hUZXh0X0tPKClcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YV9wcmUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZWFyY2hUZXh0XCI6IHNlbGYuU2VhcmNoVGV4dF9LT1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGFfcHJlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8kLnBvc3QoXCIvZWNoby9qc29uXCIsIGRhdGEsIGZ1bmN0aW9uIChyZXNwb25zZSkgLy8gc2VuZHMgJ3Bvc3QnIHJlcXVlc3RcclxuICAgICAgICAgICAgICAgIC8ve1xyXG4gICAgICAgICAgICAgICAgLy8gICAgLy8gb24gc3VjY2VzcyBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgLy8gICAgc2VsZi5yZXNwb25zZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgLy99KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyQucG9zdChcIi9hcGkvZGVtb3NpdGVzYXBpL1NlYXJjaFwiLCBkYXRhLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICBzZWxmLmRldlNpdGVzSlNPTi5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIHNlbGYuZGV2U2l0ZXNKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIC8vfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2RlbW9zaXRlc2FwaS9TZWFyY2hcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDE5IDEyOjE0IHBtIC0gU1NOIC0gWzIwMTkwODIxLTEyMTBdIC0gWzAwMl0gLSBTZWFyY2hSZXN1bHRzRmVlZGJhY2tfS09cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08oJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyhcIlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTygnU2VhcmNoIHJldHVybmVkIG5vIHJlY29yZHMuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyhcImFsZXJ0LXdhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxmLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcl9Eb250Q2FsbF9LTygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodXRpbC5zaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIC0gU1NOIC0gWzIwMTkwODIxLTEzNDhdIFswMDFdIC0gQWRkZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh1dGlsLnNpdGVfaW5zdGFuY2Uuc2hvd0NvbGxhcHNlZERpdnMsIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdldENsYXNzRm9yRGVtb1N0YXRlID0gZnVuY3Rpb24gKGZvckRlbW9fdjIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRDbGFzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChmb3JEZW1vX3YyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJyBmb3JEZW1vX1llcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xhc3MgPSAnZm9yRGVtb19Obyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xhc3MgPSAnZm9yRGVtb19VbmRlY2lkZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic2l0ZURpdlwiICsgXCIgXCIgKyBzZWxlY3RlZENsYXNzO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2bSA9IG5ldyBWaWV3TW9kZWwoKTtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHZtKTtcclxuICAgICAgICB2bS5sb2FkRGF0YSgpO1xyXG5cclxuICAgICAgIFxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxudmFyIHN0cmluZ1N0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyaW5nLCBzdGFydHNXaXRoKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcgfHwgXCJcIjtcclxuICAgIGlmIChzdGFydHNXaXRoLmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc3RhcnRzV2l0aC5sZW5ndGgpID09PSBzdGFydHNXaXRoO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA3OjE2IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMF0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuZXhwb3J0IHsgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDg6MDAgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDExXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzLy9rbm9ja291dC9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2pzL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuXHJcbnZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJ10pO1xyXG5cclxuXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5jb25maWcoW1wiJHJvdXRlUHJvdmlkZXJcIiwgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvXCIsIHtcclxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlc0luZGV4Lmh0bWxcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDAxOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwMV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgLy8gVHVybiBvZmZcclxuICAgICAgICAvLyRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvZGV0YWlsXCIsIHtcclxuICAgICAgICAvLyAgICBjb250cm9sbGVyOiBcImRldlNpdGVVcGRhdGVDb250cm9sbGVyXCIsXHJcbiAgICAgICAgLy8gICAgLy8gdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlRGV0YWlsLmh0bWxcIlxyXG4gICAgICAgIC8vICAgIHRlbXBsYXRlVXJsOiBcIi9EZXZTaXRlcy9DcmVhdGVfcGFydGlhbFwiXHJcbiAgICAgICAgLy99KTtcclxuXHJcbiAgICAgICAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogXCIvXCIgfSk7XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyA9IGZ1bmN0aW9uXHJcbiAgICB2YXIgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5UaXRsZSA9IFwiVGl0bGUgc2V0IGluIEFuZ3VsYXIgY29udHJvbGxlci5cIjtcclxuXHJcblxyXG4gICAgICAgIC8vICRzY29wZS5kYXRhID0gW107XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhU2VydmljZTtcclxuXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vICAgICRodHRwLmdldCgnLi9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICBkYXRhU2VydmljZS5nZXREZXZTaXRlcygpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCA9IGtvLm9ic2VydmFibGUoJHNjb3BlLmRhdGEuZGV2U2l0ZXMoKSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MTAtMDEwMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXQgZGl2IGNvbnRlbnRcclxuICAgICAgICAvLyBodHRwczovL3d3dy50dXRvcmlhbHNwbGFuZS5jb20vYW5ndWxhcmpzLXVwZGF0ZS10YWJsZS1yb3cvXHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUuXHJcbiAgICAgICAgJHNjb3BlLmVkaXRhYmxlcm93ID0gJyc7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmVkaXRDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9IGFuZ3VsYXIuY29weShjb250ZW50KTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyRzY29wZS5lZGl0YWJsZXJvdyA9IGNvbnRlbnQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLnNhdmVEYXRhID0gZnVuY3Rpb24gKGluZHgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGhlSW5kZXggPSAkc2NvcGUuZGF0YV9sb2NhbCgpLmZpbmRJbmRleChyID0+IHIuaWQgPT09ICRzY29wZS5lZGl0YWJsZXJvdy5pZCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCgpW3RoZUluZGV4XSA9ICRzY29wZS5lZGl0YWJsZXJvdztcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXRhLnVwZGF0ZURldlNpdGUoJHNjb3BlLmVkaXRhYmxlcm93KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDE5MDkwOC0wNjI4IC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MDgtMDYyOCAtIGRlbW9TaXRlc19JbmRleCAtIHVwZGF0ZURldlNpdGUgU3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5yZXNldCgpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBbXTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudC5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKSByZXR1cm4gJ2VkaXQnO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAndmlldyc7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzA2LzIwMTkgMDU6MTkgYW0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAxXVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDEyOjAxIGFtIC0gU1NOIC0gWzIwMTkwOTA4LTAwMDFdIC0gWzAwMV0gLSBDb25jdXJyZW5jeVxyXG4gICAgICAgIC8vIENoZWNrIHdlIGFyZSBub3QgaHlwZXJsaW5rIGludmFsaWQgYWRkcmVzc2VzXHJcblxyXG4gICAgICAgICRzY29wZS5pc1ZhbGlkVXJsID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQgfHwgY29udGVudC5zaXRlVXJsID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFRvVGVzdCA9IGNvbnRlbnQuc2l0ZVVybC50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYzEgPSB1cmxUb1Rlc3Quc3Vic3RyKDAsIDcpO1xyXG4gICAgICAgICAgICBsZXQgYzIgPSB1cmxUb1Rlc3Quc3Vic3RyKDAsIDgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsaWRjaGVtYXMgPSBcInxodHRwOi8vfGh0dHBzOi8vfFwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IHZhbGlkT3B0aW9ucyA9IDA7XHJcblxyXG4gICAgICAgICAgICB2YWxpZE9wdGlvbnMgKz0gKHZhbGlkY2hlbWFzLmluZGV4T2YoYzEpID09IDEpID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMikgPT0gMSkgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAodmFsaWRPcHRpb25zID4gMCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMDkvMDgvMjAxOSAwNTozMSBwbSAtIFNTTiAtIEFkZGVkXHJcbiAgICAgICAgJHNjb3BlLnNldFRhYmxlUm93Q2xhc3MgPSBmdW5jdGlvbiAoaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDIgPT0gMCA/ICdldmVuUm93JyA6ICdvZGRSb3cnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKFwiZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXCIsIGRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMSk7XHJcblxyXG4gICAgLy8gMDkvMjEvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuICAgIC8vIGZ1bmN0aW9uIGRldlNpdGVVcGRhdGVDb250cm9sbGVyICBcclxuICAgIHZhciBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkd2luZG93LCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICAgICAkc2NvcGUuZGV2U2l0ZVJlY29yZCA9IHtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnNhdmUgPSBmdW5jdGlvbiAoZm9ybVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoXCJ0ZXN0IHN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDI6MjAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDAyXSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICAvLyBBZGRlZCBjYXN0XHJcbiAgICAgICAgICAgIHZhciBmOiBIVE1MRm9ybUVsZW1lbnQgPSA8YW55PiQoZm9ybVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZi52YWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnSW52YWxpZCBmb3JtLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KCRzY29wZS5kZXZTaXRlUmVjb3JkLnNpdGVUaXRsZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCRzY29wZS5kZXZTaXRlUmVjb3JkLnNvbHV0aW9uX0RldGFpbHMpO1xyXG5cclxuICAgICAgICAgICAgLy8gJGh0dHAucG9zdChcIi4vYXBpL2RlbW9zaXRlc2FwaVwiLCAkc2NvcGUuZGV2U2l0ZVJlY29yZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmFkZERldlNpdGUoJHNjb3BlLmRldlNpdGVSZWNvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24gPSAnIy8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHNhdmUgcmVjb3JkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG4gXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZShhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUFBQUFBQUFBQUFBQUFBQUFBQUFBQSBjaGVja2luZyBnbG9iYWxzX2luc3RhbmNlX2xvY2FsXCIpO1xyXG5cclxuICAgICAgICAgICAgZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gZ2V0SW5zdGFuY2UgLSA2NScpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm90dG9tIG9mIGdldEluc3RhbmNlPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsIC0gMjAxOTA5MjMtMDYxOCAtICYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmJiYmXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDIgLSBDcmVhdGluZyBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRlZmF1bHQ6IG5nUm91dGUsIHVpLmJvb3RzdHJhcFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDItWlpaIC0gQ3JlYXRlZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAzIC0gQ3JlYXRpbmcgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEZWZhdWx0OiBhcmdzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAzLVpaWiAtIENyZWF0ZWQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMyAtIENyZWF0aW5nIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVmYXVsdDogYXJnc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDMtWlpaIC0gQ3JlYXRlZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWwgLSAyMDE5MDkyMy0wNjE4IC0gUkVUVVJOSU5HIHp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6enp6XCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coYW5ndWxhckFwcC5pbnN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGZhY3RvcnkgWlpaWlpaWlpaWlpaWlpaWlpaWlp6LTJcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbmd1bGFyLm1vZHVsZShcImdsb2JhbEFuZ3VsYXJBcHBcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIuLi4uLi4uLi4uLi4uLi4uLi4uRXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHsgLyogZmFpbGVkIHRvIHJlcXVpcmUgKi8gfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8gICBjb25zb2xlLmxvZyhcImRvRmFjdG9yeVNldHVwIC0gQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNDAgLSBRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFxUVFRUVFRUVEnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA0NScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZSArICcuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZSArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhbGxpbmcgZmFjdG9yeSBzZXR1cCAqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAvL2RvRmFjdG9yeVNldHVwKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNhbGxpbmcgZmFjdG9yeSBzZXR1cCAqKioqKiAgICBET05FICAgICoqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlOiBnZXRJbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoXCJnbG9iYWxBbmd1bGFyQXBwXCIpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCIuLi4uLi4uLi4uLi4uLi4uLi4uRXhpc3RzXCIpO1xyXG5cclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgLyogZmFpbGVkIHRvIHJlcXVpcmUgKi9cclxuICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLi4uLi4uLi4uLi4uLi4uLi4uLkNSRUFUSU5HICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKFwiYXN5bmNHcmVldCAtIGNhbGxpbmcgYXBwX2dsb2JhbHMgbW9kdWxlLSBCZWZvcmVcIik7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFwcF9nbG9iYWxzKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJhc3luY0dyZWV0IC0gY2FsbGluZyBhcHBfZ2xvYmFscyBtb2R1bGUgLSBBZnRlciBcIik7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB0aGVDb250cm9sbGVyRnVuY3Rpb24oZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhc3luY0dyZWV0IC0gY2FsbGluZyBhcHBfZ2xvYmFscyBtb2R1bGUtIEJlZm9yZSAgLSBjb250cm9sbGVyIFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWHgtMVwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZ2xvYmFsQW5ndWxhckFwcFV0aWwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXN5bmNHcmVldCAtIGNhbGxpbmcgYXBwX2dsb2JhbHMgbW9kdWxlLSBhZnRlciAgLSBjb250cm9sbGVyIFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWHgtMlwiKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKjg4OFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKio4ODhcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqODg4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKjg4OFwiKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbCB0byBkb1Rlc3QxMDEgLSBCZWZvcmUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNhbGwgdG8gZG9UZXN0MTAxIC0gQWZ0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvL2Z1bmN0aW9uIGFzeW5jR3JlZXQobmFtZSkge1xyXG4gICAgICAgIC8vICAgIC8vIHBlcmZvcm0gc29tZSBhc3luY2hyb25vdXMgb3BlcmF0aW9uLCByZXNvbHZlIG9yIHJlamVjdCB0aGUgcHJvbWlzZSB3aGVuIGFwcHJvcHJpYXRlLlxyXG4gICAgICAgIC8vICAgIHJldHVybiAkcShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZSArICchJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWUgKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAvLyAgICB9KTtcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgLy92YXIgcHJvbWlzZSA9IGFzeW5jR3JlZXQoJ1JvYmluIEhvb2QnKTtcclxuICAgICAgICAvL3Byb21pc2UudGhlbihmdW5jdGlvbiAoZ3JlZXRpbmcpIHtcclxuICAgICAgICAvLyAgICBhbGVydCgnU3VjY2VzczogJyArIGdyZWV0aW5nKTtcclxuICAgICAgICAvL30sIGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAvLyAgICBhbGVydCgnRmFpbGVkOiAnICsgcmVhc29uKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgdGVzdDEwMSA9IGFwcF9nbG9iYWxzLmNvbnRyb2xsZXIoJ2dsb2JhbHNDb21wb25lbnQnLCBbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgdGhlQ29udHJvbGxlckZ1bmN0aW9uXSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhcHBfZ2xvYmFsczogYXBwX2dsb2JhbHMsXHJcbiAgICAgICAgdGVzdDEwMTogdGVzdDEwMVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRlc3RfMTAyIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxudmFyIHNpdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICB2YXIgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgIGFsZXJ0KCdjbGlja2VkIG1lISBjbWROYW1lIFsnICsgY21kTmFtZSArIFwiXSBwb3B1cC1uYW1lICBbXCIgKyBwb3B1cE5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgIHZhciBzaG93Q29sbGFwc2VkRGl2cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJChcIltkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgdmFyIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDA1LzAxLzIwMTkgMDQ6NTIgYW0gLSBTU04gLSBVc2UgSmF2YVNjcmlwdCBvbmx5XHJcblxyXG4gICAgICAgIHZhciBsaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xyXG5cclxuICAgICAgICAvLyAwNS8xOS8yMDE5IDEyOjMwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwNF0gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbiAgICAgICAgLy8gZm9yICh2YXIgYSBvZiBsaXN0MSkge1xyXG4gICAgICAgIC8vIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuICAgICAgICBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChhLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE3LzIwMTkgMDQ6MTYgYW0gLSBTU04gLSBVcGRhdGUgdG8gZXhjbHVkZSBoaWdobGlnaHRpbmdcclxuICAgICAgICAgICAgLy92YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgJyZsdDsnKTsgIFxyXG4gICAgICAgICAgICAvLyBFeGNsdWRlIDxoIGFuZCA8bi4gQWxyZWFkeSBzZXR1cCBmb3IgPGkuICBTZWUgc2l0ZS5jc3MuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDcvMjAxOSAxMTo1MCBhbSAtIFNTTiAtIFVwZGF0ZSAtIE1hdGNoZXMgc2hvd24gaHR0cHM6Ly93d3cucmVnZXh0ZXN0ZXIuY29tL1xyXG4gICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwoW15pfF4vaXxeaHxeL2h8Xm58Xi9uXSl7MX1bXlxcc3xePl17MX0vZywgJyZsdDskMScpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnXFxuMS0tLVxcblskJl1cXG4yLS0tXFxuWyQxXVxcbjMtLS1cXG5bJDJdXFxuNC0tLVxcblskM11cXG5cXG4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IGNvdmVycmVkIGgxLCBoMiwgZXRjLlxyXG4gICAgICAgICAgICAvLyBrbm9ja291dCBpcyBkb2luZyBpdHMgb3duIHRoaW5nIHdoZW4gaXQgY29tZXMgdG8gdGFncy4gRXZpZGVudCB3aXRoIHRoZSB1c2Ugb2YgZ2VuZXJpYyB0eXBlcyAoIGZ1bmN0aW9uPFNvbWVUeXBlPiApXHJcbiAgICAgICAgICAgIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJyZsdDskMycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYjtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgIHZhciBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICB2YXIgZm5Db252ZXJEYXRlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKGlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMTkwOTEwLTIwNTQgLSBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IgdGltZW91dCB0byBqcXVlcnkgcmVhZHknKTtcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKTtcclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==