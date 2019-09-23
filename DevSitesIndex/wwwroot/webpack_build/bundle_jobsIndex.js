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

/***/ "./DataServices.ts":
/*!*************************!*\
  !*** ./DataServices.ts ***!
  \*************************/
/*! exports provided: dataService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService_instance", function() { return dataService_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module



var dataService_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance(currentApplication);
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

/***/ "./Jobs/JobsIndexController.ts":
/*!*************************************!*\
  !*** ./Jobs/JobsIndexController.ts ***!
  \*************************************/
/*! exports provided: jobsIndexController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobsIndexController_instance", function() { return jobsIndexController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var _Util_JobStatusDisplayDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/JobStatusDisplayDirective */ "./Util/JobStatusDisplayDirective.ts");
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" /> 
/// <reference path="../DataServices.ts"/>
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};



_Util_JobStatusDisplayDirective__WEBPACK_IMPORTED_MODULE_1__["jobStatusDisplayDirective_instance"]; // 09/21/2019 04:42 am - SSN - [20190921-0357] - [003] - Creating multiple entry for Webpack

var jobsIndexController_instance = function () {
  var Jobs_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("timesheetApp");
  Jobs_Angular_Module.controller('jobsIndexController', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
    // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
    //$scope.sqlStatsRecord = {};
    //  Setup intiail values for list
    $scope.job_statuses_selected = [1]; // open

    var columnBag = {
      columnName: 'dateAdded',
      columnNameSelected: 'dateAdded',
      currentPageNo: 1,
      desc: true,
      recordsPerPage: 4,
      totalRecordCount: 0,
      caption: "Date Added",
      job_statuses_selected: [$scope.job_statuses_selected]
    };
    var _fieldList = [__assign(__assign({}, columnBag), {
      columnName: 'projectTitle_ForActivity',
      caption: 'Project Title'
    }), __assign(__assign({}, columnBag), {
      columnName: 'jobTitle',
      caption: 'Job Title'
    }), __assign(__assign({}, columnBag), {
      columnName: 'dateAdded',
      caption: 'Date Added'
    }), __assign(__assign({}, columnBag), {
      columnName: 'lastActivityDate',
      caption: 'Last Activity'
    }), __assign(__assign({}, columnBag), {
      columnName: 'activityAge',
      caption: 'Activity Age'
    })];
    $scope.fieldsList = _fieldList;
    getJobsList(columnBag);

    function getJobsList(columnBag) {
      dataService.getJobs(columnBag).then(getJobsSuccess, getJobsError)["catch"](getTimelogCatch);

      function getJobsSuccess(data) {
        $scope.databag = {
          jobs: data.dataList,
          column: data.columnName,
          desc: data.desc
        }; // We need to convert to an array. We don't have a setter on an interface.

        data.sqlStatsRecord.job_statuses_selected = data.sqlStatsRecord.job_statuses_selected.split(',');
        $scope.sqlStatsRecord = data.sqlStatsRecord;
        var currentColumnIndex = $scope.fieldsList.findIndex(function (r) {
          return r.column === data.columnName;
        });

        if (currentColumnIndex > -1) {
          $scope.fieldsList[currentColumnIndex].desc = data.desc;
        }
      }

      function getJobsError(data) {
        var temp = data;
      }

      function getTimelogCatch(data) {
        var temp = data;
      }
    }

    $scope.sortMethod101 = function (columnBag) {
      if (columnBag.columnName != columnBag.columnNameSelected) {
        columnBag.columnNameSelected = columnBag.columnName;
      } else {
        columnBag.desc = !columnBag.desc;
      }

      getJobsList(columnBag);
    };

    $scope.pagingmethod101 = function (columnBag) {
      getJobsList(columnBag);
      $scope.sqlStatsRecord = columnBag;
    }; // 09/22/2019 10:47 am - SSN - [20190922-0822] - [007] - Plug in job status filter on job's index - update data source


    $scope.job_status_changed101 = function (job_status) {
      var indexOfSelectedItem = $scope.job_statuses_selected.indexOf(job_status.id);
      if (indexOfSelectedItem > -1) $scope.job_statuses_selected.splice(indexOfSelectedItem, 1);else $scope.job_statuses_selected[$scope.job_statuses_selected.length] = job_status.id;

      if ($scope.sqlStatsRecord) {
        $scope.sqlStatsRecord.job_statuses_selected = $scope.job_statuses_selected; //.join(',');
      }

      columnBag.job_statuses_selected = $scope.sqlStatsRecord.job_statuses_selected;
      getJobsList(columnBag);
    }; // 09/22/2019 05:20 am - SSN - [20190921-1129] - [007] - Plug in job status filter on job's index


    $scope.job_statuses_checkAll = function (enable) {
      if (enable) {
        $scope.job_statuses_selected = $scope.job_statuses.map(function (job_status) {
          return job_status.id;
        });
      } else {
        $scope.job_statuses_selected = [];
      }

      columnBag.job_statuses_selected = $scope.job_statuses_selected;
      getJobsList(columnBag);
    };

    $scope.showCreateTimesheetForm = function (jobID) {
      if (isNaN(jobID)) {
        jobID = 0;
      }

      $uibModal.open({
        templateUrl: '/js/timesheet/timesheetTemplate.html',
        controller: 'TimesheetController',
        backdrop: false,
        resolve: {
          jobId: function jobId() {
            return jobID;
          }
        }
      });
    };

    function getJob_Statuses() {
      dataService.getJob_Statuses().then(getJob_StatusesSuccess, getJob_StatusesError)["catch"](getJob_StatusesCatch);

      function getJob_StatusesSuccess(data) {
        $scope.job_statuses = data;
      }

      function getJob_StatusesError(data) {
        console.log("JobIndexController -  20190922-0758 - Data error ?????????????????????????????");
        console.log(data);
      }

      function getJob_StatusesCatch(data) {
        console.log("JobIndexController -  20190922-0758 - Data error (catch) ?????????????????????????????");
        console.log(data);
      }
    }

    getJob_Statuses();
  });
  return {
    Jobs_Angular_Module: Jobs_Angular_Module
  };
}();



/***/ }),

/***/ "./Timesheet/TimesheetController.ts":
/*!******************************************!*\
  !*** ./Timesheet/TimesheetController.ts ***!
  \******************************************/
/*! exports provided: timesheetController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetController_instance", function() { return timesheetController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);

 /// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 09/18/2019 11:13 am - SSN - [20190918-0943] - [008] - Adding job status option to index

var timesheetController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("timesheetApp");
  timesheetApp.controller('TimesheetController', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, jobId) {
    $scope.disciplineSelected = {
      id: 0,
      title: ''
    }; // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
    // Add pageTitle

    $scope.pageTitle = "Clock-in";
    var timeNow = new Date();
    timeNow.setMilliseconds(0); // timeNow.setSeconds(0);

    $scope.timeLog = {
      timeLogId: 0,
      id: 0,
      startTime: timeNow,
      workDetail: "",
      disciplineId: '2',
      jobId: jobId
    };
    $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog);

    $scope.submitForm = function () {
      var test = $scope.editableTimeLog;
      var promise = null;
      $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

      if ($scope.editableTimeLog.id === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        promise.then(function (data) {
          var test1 = data;
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
        }, function (error) {
          var test2 = error;
          console.log("TimesheetController - 20190921-0640 - promise > error");
          console.log(error);
        });
      }

      $uibModalInstance.close();
      toastr.info("Clocked-in");
    };

    $scope.cancelForm = function () {
      $uibModalInstance.dismiss(); //same as cancel???
    }; // 04/13/2019 11:00 am - SSN - [20190413-1037] - Add discipline lookup


    $scope.getDisciplines = function (lookupValue) {
      if (lookupValue === null) lookupValue = "";
      var deferred = $q.defer(); // 05/03/2019 04:16 pm - SSN - [20190503-1539] - [006] - Add link to create timelog
      // from   url:  'api/DisciplineAPI'
      //   to   url: '/api/DisciplineAPI'

      $http({
        method: 'GET',
        url: '/api/DisciplineAPI'
      }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
      return deferred.promise;

      function typeaheadDisciplineSuccess(response) {
        var addresses = [];
        console.log("angular - forEach - 20190920-0720-o");
        angular__WEBPACK_IMPORTED_MODULE_1__["forEach"](response.data, function (item) {
          if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
            addresses.push({
              id: item.disciplineId,
              title: item.disciplineShort
            });
          }
        });
        deferred.resolve(addresses);
      }

      function typeaheadDisciplineError(response) {
        deferred.reject(response);
      }
    };
  });
  return {
    timesheetApp_TimesheetController: timesheetApp
  };
}();



/***/ }),

/***/ "./Util/HeaderWithSort.ts":
/*!********************************!*\
  !*** ./Util/HeaderWithSort.ts ***!
  \********************************/
/*! exports provided: headerWithSort_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerWithSort_instance", function() { return headerWithSort_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
 // 09/21/2019 05:21 am - SSN - [20190921-0357] - [007] - Creating multiple entry for Webpack

var headerWithSort_instance = function () {
  var headerWithSort_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("timesheetApp");
  headerWithSort_angular_module.controller('utilityController', function ($scope, dataService) {});
  headerWithSort_angular_module.directive('headerWithSort', function () {
    return {
      restrict: "A",
      templateUrl: "/js/Util/headerWithSort.html",
      scope: {
        columnlist: "=columnlist",
        sortmethod: "&"
      },
      link: function link(scope, el, attrs) {
        scope.sort = function () {
          console.log("headerWithSort - 20190921-0613 - ");
          scope.sortmethod();
        };
      }
    };
  });
  return {
    headerWithSort_angular_module: headerWithSort_angular_module
  };
}();



/***/ }),

/***/ "./Util/JobStatusDisplayDirective.ts":
/*!*******************************************!*\
  !*** ./Util/JobStatusDisplayDirective.ts ***!
  \*******************************************/
/*! exports provided: jobStatusDisplayDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusDisplayDirective_instance", function() { return jobStatusDisplayDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 09/22/2019 12:45 pm - SSN - [20190922-0822] - [008] - Plug in job status filter on job's index - update data source


var jobStatusDisplayDirective_instance = function () {
  var app = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance('timesheetApp');
  var jobStatusDisplay = app.directive('jobStatusDisplay', function () {
    return {
      link: function link(scope, el, attrs) {
        scope.$watch(attrs['jobStatus'], function (newValue, oldValue) {
          var className = '';
          if (newValue == '1') className = 'job_status_open_1';else if (newValue == '2') className = 'job_status_Pending_2';else if (newValue == '3') className = 'job_status_Completed_3';else className = 'job_status_Cancelled_4';
          el.removeClass('job_status_open_1 job_status_Pending_2 job_status_Completed_3 job_status_Cancelled_4');
          el.addClass(className);
        });
      }
    };
  });
  return {
    jobStatusDisplay: jobStatusDisplay
  };
}();



/***/ }),

/***/ "./Util/pagingDirective.ts":
/*!*********************************!*\
  !*** ./Util/pagingDirective.ts ***!
  \*********************************/
/*! exports provided: pagingDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagingDirective_instance", function() { return pagingDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 09/17/2019 09:31 am - SSN - [20190917-0929] - [001] - Adding paging for angular lists
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" />
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
 // 09/21/2019 05:07 am - SSN - [20190921-0357] - [004] - Creating multiple entry for Webpack

var pagingDirective_instance = function () {
  var pagingDirective_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("timesheetApp");
  pagingDirective_angular_module.controller('utilityController', function ($scope, dataService) {});
  pagingDirective_angular_module.directive('pagingDirective', function ($timeout) {
    return {
      restrict: "A",
      templateUrl: "/js/Util/pagingDirective.html",
      scope: {
        pagingmethod: "&",
        databag: "=",
        sqlstatsrecord: "="
      },
      link: function link(scope, el, attrs) {
        scope.sayWhatPageWeAreOn = "";

        scope.init101 = function () {
          setupButtons();
        };

        function getTotalPageCount() {
          return Math.ceil(scope.sqlstatsrecord.totalRecordCount / scope.sqlstatsrecord.recordsPerPage);
        }

        function setupButtons() {
          var totalPageCount = getTotalPageCount();
          scope.previousdisabled = scope.sqlstatsrecord.currentPageNo <= 1;
          scope.nextdisabled = scope.sqlstatsrecord.currentPageNo >= totalPageCount;

          if (totalPageCount > 0) {
            scope.sayWhatPageWeAreOn = "Page " + scope.sqlstatsrecord.currentPageNo + " of " + totalPageCount;
          } else {
            scope.sayWhatPageWeAreOn = "No records.";
          }

          $timeout(scope.init101, 1000); // to pickup actual values after API call to get data, just in case!!!
        }

        scope.onPrevious = function () {
          this.sqlstatsrecord.currentPageNo = this.sqlstatsrecord.currentPageNo > 1 ? this.sqlstatsrecord.currentPageNo - 1 : 1;
          scope.pagingmethod();
          setupButtons();
        };

        scope.onNext = function () {
          var totalPageCount = getTotalPageCount();
          this.sqlstatsrecord.currentPageNo = this.sqlstatsrecord.currentPageNo < totalPageCount ? this.sqlstatsrecord.currentPageNo + 1 : totalPageCount;
          scope.pagingmethod();
          setupButtons();
        };

        scope.init101();
      }
    };
  });
  return {
    pagingDirective_angular_module: pagingDirective_angular_module
  };
}();



/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/// <reference path="../../node_modules/@types/angular/index.d.ts" />


var SSN_Globals =
/** @class */
function () {
  function SSN_Globals() {}

  SSN_Globals.getInstance = function (applicationName, args) {
    if (args === void 0) {
      args = null;
    }

    var selected = SSN_Globals.ssn_devsite_angular_module.filter(function (r) {
      return r.name === applicationName;
    });

    if (selected.length > 0) {
      return selected[0].instance;
    } else {
      switch (applicationName) {
        case 'timesheetApp':
          var obj = {
            name: applicationName,
            instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('timesheetApp', ['ngRoute', 'ui.bootstrap'])
          };
          SSN_Globals.ssn_devsite_angular_module.push(obj);
          break;

        case 'demoSites_Index_Timesheet':
          var obj = {
            name: applicationName,
            instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]('demoSites_Index_Timesheet', args)
          };
          SSN_Globals.ssn_devsite_angular_module.push(obj);
          break;

        case 'demoSites_Index':
          var obj = {
            name: applicationName,
            instance: angular__WEBPACK_IMPORTED_MODULE_0__["module"]("demoSites_Index", args)
          };
          SSN_Globals.ssn_devsite_angular_module.push(obj);
          break;

        default:
          console.log("No case for application name [" + applicationName + "]  [20190920-0955] globals.ts");
          break;
      }

      return obj.instance;
    }
  };

  SSN_Globals.ssn_devsite_angular_module = []; //angular.IModule[];

  return SSN_Globals;
}(); // 09/20/2019 09:38 am - SSN - Pass in args


function getInstance(applicationName, args) {
  if (args === void 0) {
    args = null;
  }

  return SSN_Globals.getInstance(applicationName, args);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getInstance: getInstance
});

/***/ }),

/***/ "./jobs/JobStatusDirective.ts":
/*!************************************!*\
  !*** ./jobs/JobStatusDirective.ts ***!
  \************************************/
/*! exports provided: jobStatusDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusDirective_instance", function() { return jobStatusDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 09/18/2019 09:43 am - SSN - [20190918-0943] - [001] - Adding job status option to index
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />

;

var jobStatusDirective_instance = function () {
  var Job_Status_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["default"].getInstance("timesheetApp");
  Job_Status_Angular_Module.controller("utilityController", function ($scope, dataService) {});
  Job_Status_Angular_Module.directive('jobStatusOption', function () {
    return {
      restrict: "A",
      templateUrl: "/js/jobs/jobStatus.html",
      scope: {
        entry: "=",
        checkedfunction: "&",
        jobstatusesselected102: "="
      },
      link: function link(scope, el, attrs) {
        scope.job_status_click = function (entry) {
          this.checkedfunction();
        };

        scope.job_status_checked = function (entry) {
          var isSelected = this.jobstatusesselected102.indexOf(entry.id);
          return isSelected > -1;
        };
      }
    };
  });
  return {
    Job_Status_Angular_Module: Job_Status_Angular_Module
  };
}();



/***/ }),

/***/ "./jobs/JobsIndex_main.ts":
/*!********************************!*\
  !*** ./jobs/JobsIndex_main.ts ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/HeaderWithSort */ "./Util/HeaderWithSort.ts");
/* harmony import */ var _Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/pagingDirective */ "./Util/pagingDirective.ts");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.ts");
/* harmony import */ var _JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobStatusDirective */ "./jobs/JobStatusDirective.ts");
/* harmony import */ var _Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Jobs/JobsIndexController */ "./Jobs/JobsIndexController.ts");
/* harmony import */ var _Timesheet_TimesheetController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Timesheet/TimesheetController */ "./Timesheet/TimesheetController.ts");
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index





 //import { timesheetApp_instance } from '../Timesheet/TimesheetApp';  // for timesheet related links
//import { timesheetContinueController_instance } from '../Timesheet/timesheetcontinuecontroller';
//import { timesheetClockoutController_instance } from '../Timesheet/timesheetclockoutcontroller';

_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup("timesheetApp");
_Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__["jobsIndexController_instance"].Jobs_Angular_Module;
_Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__["headerWithSort_instance"].headerWithSort_angular_module;
_Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__["pagingDirective_instance"].pagingDirective_angular_module;
_JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__["jobStatusDirective_instance"].Job_Status_Angular_Module;
_Timesheet_TimesheetController__WEBPACK_IMPORTED_MODULE_5__["timesheetController_instance"].timesheetApp_TimesheetController; //timesheetContinueController_instance;
//timesheetClockoutController_instance;
//timesheetApp_instance.timesheetApp;

/***/ }),

/***/ 0:
/*!**************************************!*\
  !*** multi ./jobs/JobsIndex_main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./jobs/JobsIndex_main.ts */"./jobs/JobsIndex_main.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0pvYnMvSm9ic0luZGV4Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0hlYWRlcldpdGhTb3J0LnRzIiwid2VicGFjazovLy8uL1V0aWwvSm9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL3BhZ2luZ0RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL2pvYnMvSm9iU3RhdHVzRGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2pvYnMvSm9ic0luZGV4X21haW4udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FPQTtBQUNBO0FBQ0E7O0FBR0Esa0VBQW9CLENBQUMsT0FBckIsQ0FBNkIsY0FBN0I7QUFFQSxzRkFBNEIsQ0FBQyxtQkFBN0I7QUFFQSw0RUFBdUIsQ0FBQyw2QkFBeEI7QUFFQSw4RUFBd0IsQ0FBQyw4QkFBekI7QUFFQSwrRUFBMkIsQ0FBQyx5QkFBNUI7QUFHQSwyRkFBNEIsQ0FBQyxnQ0FBN0IsQyxDQUVBO0FBRUE7QUFFQSxxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0EseUIiLCJmaWxlIjoiYnVuZGxlX2pvYnNJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBSZW5hbWUgbW9kdWxlIHRvIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcblxyXG5cclxuLy8gMDUvMDQvMjAxOSAwOToyNiBhbSAtIFNTTiAtIFsyMDE5MDUwNC0wODU1XSAtIFswMDRdIC0gVGVzdGluZyBpZiB3ZSBjYW4gcmVwbGFjZSBnbG9iYWwgdmFyaWFibGVcclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcbi8vIDA1LzA0LzIwMTkgMDk6NTggYW0gLSBTU04gLSBTaW5jZSBoYXZpbmcgdG8gaW1wb3J0IGFuZ3VsYXIgd2hlbiBjb252ZXJ0aW5nIHRvIGEgbW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgICBJQ29sdW1uQmFnVGVtcCBmcm9tICcuL0lDb2x1bW5CYWcnO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBkYXRhU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHMuZGVmYXVsdC5nZXRJbnN0YW5jZShjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuZmFjdG9yeShcImRhdGFTZXJ2aWNlXCIsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwM10gLSBBbmd1bGFyIC0gZWRpdCBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGkvVG9wP3JlY29yZENvdW50PTIwJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coam9iX3N0YXR1c2VzX3NlbGVjdGVkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXZTaXRlczoga28ub2JzZXJ2YWJsZShfZGV2U2l0ZXMpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZXM6IF9nZXREZXZTaXRlcyxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXQgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXNcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBJQ29sdW1uQmFnIGZyb20gJy4uL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5pbXBvcnQgeyBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlICB9IGZyb20gXCIuLi9VdGlsL0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVcIjtcclxuXHJcbmpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgO1xyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDQ6NDIgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDAzXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG52YXIgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGdsb2JhbHMuZGVmYXVsdC5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICBKb2JzX0FuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoJ2pvYnNJbmRleENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsICRzY2UsICR1aWJNb2RhbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDE6MTUgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDEwXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8kc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vICBTZXR1cCBpbnRpYWlsIHZhbHVlcyBmb3IgbGlzdFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IFsxXTsgLy8gb3BlblxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbHVtbkJhZzogSUNvbHVtbkJhZyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6ICdkYXRlQWRkZWQnLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZVNlbGVjdGVkOiAnZGF0ZUFkZGVkJyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1BlclBhZ2U6IDQsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCJEYXRlIEFkZGVkXCIsXHJcbiAgICAgICAgICAgICAgICBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ6IFskc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBfZmllbGRMaXN0OiBJQ29sdW1uQmFnW10gPSBbXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZywgY29sdW1uTmFtZTogJ3Byb2plY3RUaXRsZV9Gb3JBY3Rpdml0eScsIGNhcHRpb246ICdQcm9qZWN0IFRpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWcsIGNvbHVtbk5hbWU6ICdqb2JUaXRsZScsIGNhcHRpb246ICdKb2IgVGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZywgY29sdW1uTmFtZTogJ2RhdGVBZGRlZCcsIGNhcHRpb246ICdEYXRlIEFkZGVkJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWcsIGNvbHVtbk5hbWU6ICdsYXN0QWN0aXZpdHlEYXRlJywgY2FwdGlvbjogJ0xhc3QgQWN0aXZpdHknIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZywgY29sdW1uTmFtZTogJ2FjdGl2aXR5QWdlJywgY2FwdGlvbjogJ0FjdGl2aXR5IEFnZScsIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3QgPSBfZmllbGRMaXN0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNMaXN0KGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYnMoY29sdW1uQmFnKS50aGVuKGdldEpvYnNTdWNjZXNzLCBnZXRKb2JzRXJyb3IpLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFiYWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYnM6IGRhdGEuZGF0YUxpc3QsIGNvbHVtbjogZGF0YS5jb2x1bW5OYW1lLCBkZXNjOiBkYXRhLmRlc2NcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQgdG8gYW4gYXJyYXkuIFdlIGRvbid0IGhhdmUgYSBzZXR0ZXIgb24gYW4gaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gZGF0YS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkID0gZGF0YS5zcWxTdGF0c1JlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2x1bW5JbmRleCA9ICRzY29wZS5maWVsZHNMaXN0LmZpbmRJbmRleChyID0+IHIuY29sdW1uID09PSBkYXRhLmNvbHVtbk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmllbGRzTGlzdFtjdXJyZW50Q29sdW1uSW5kZXhdLmRlc2MgPSBkYXRhLmRlc2M7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNFcnJvcihkYXRhKSB7IHZhciB0ZW1wID0gZGF0YTsgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7IHZhciB0ZW1wID0gZGF0YTsgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc29ydE1ldGhvZDEwMSA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uQmFnLmNvbHVtbk5hbWUgIT0gY29sdW1uQmFnLmNvbHVtbk5hbWVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5jb2x1bW5OYW1lU2VsZWN0ZWQgPSBjb2x1bW5CYWcuY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5kZXNjID0gIWNvbHVtbkJhZy5kZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnaW5nbWV0aG9kMTAxID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZCA9IGNvbHVtbkJhZztcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAxMDo0NyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDddIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNfY2hhbmdlZDEwMSA9IGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4T2ZTZWxlY3RlZEl0ZW0gPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmluZGV4T2Yoam9iX3N0YXR1cy5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZTZWxlY3RlZEl0ZW0gPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGljZShpbmRleE9mU2VsZWN0ZWRJdGVtLCAxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoXSA9IGpvYl9zdGF0dXMuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5zcWxTdGF0c1JlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkOyAvLy5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwNToyMCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDddIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG4gXHJcbiBcclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19jaGVja0FsbCA9IGZ1bmN0aW9uIChlbmFibGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7IHJldHVybiBqb2Jfc3RhdHVzLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKGpvYklEKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYklEID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iX1N0YXR1c2VzKCkudGhlbihnZXRKb2JfU3RhdHVzZXNTdWNjZXNzLCBnZXRKb2JfU3RhdHVzZXNFcnJvcikuY2F0Y2goZ2V0Sm9iX1N0YXR1c2VzQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNTdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9iSW5kZXhDb250cm9sbGVyIC0gIDIwMTkwOTIyLTA3NTggLSBEYXRhIGVycm9yID8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgKGNhdGNoKSA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgSm9ic19Bbmd1bGFyX01vZHVsZTogSm9ic19Bbmd1bGFyX01vZHVsZVxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwiIFxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuXHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZGVmYXVsdC5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG4gICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgam9iSWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IDAsIHRpdGxlOiAnJyB9O1xyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW5cIjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IHtcclxuICAgICAgICAgICAgICAgIHRpbWVMb2dJZDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB0aW1lTm93LFxyXG4gICAgICAgICAgICAgICAgd29ya0RldGFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmVJZDogJzInLFxyXG4gICAgICAgICAgICAgICAgam9iSWQ6IGpvYklkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gXHJcbiAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5kaXNjaXBsaW5lSWQgPSAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmlkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEzLzIwMTkgMTE6MDAgYW0gLSBTU04gLSBbMjAxOTA0MTMtMTAzN10gLSBBZGQgZGlzY2lwbGluZSBsb29rdXBcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAgIHVybDogICdhcGkvRGlzY2lwbGluZUFQSSdcclxuICAgICAgICAgICAgICAgIC8vICAgdG8gICB1cmw6ICcvYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhciAtIGZvckVhY2ggLSAyMDE5MDkyMC0wNzIwLW9cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuIFxyXG5leHBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xNy8yMDE5IDAyOjA0IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxOF0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcblxyXG4gICAgc29ydCgpOiBhbnksXHJcbiAgICBzb3J0bWV0aG9kKCk6IGFueVxyXG59XHJcblxyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDU6MjEgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDA3XSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxudmFyIGhlYWRlcldpdGhTb3J0X2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuICAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdoZWFkZXJXaXRoU29ydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1V0aWwvaGVhZGVyV2l0aFNvcnQuaHRtbFwiLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ubGlzdDogXCI9Y29sdW1ubGlzdFwiLCBzb3J0bWV0aG9kOiBcIiZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUgLCBlbCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHNjb3BlLnNvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWFkZXJXaXRoU29ydCAtIDIwMTkwOTIxLTA2MTMgLSBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc29ydG1ldGhvZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlOiBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBoZWFkZXJXaXRoU29ydF9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vIDA5LzIyLzIwMTkgMTI6NDUgcG0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDA4XSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxudmFyIGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGFwcCA9IHNzbl9nbG9iYWxzLmRlZmF1bHQuZ2V0SW5zdGFuY2UoJ3RpbWVzaGVldEFwcCcpO1xyXG5cclxuICAgIHZhciBqb2JTdGF0dXNEaXNwbGF5ID0gYXBwLmRpcmVjdGl2ZSgnam9iU3RhdHVzRGlzcGxheScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzWydqb2JTdGF0dXMnXSwgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gJzEnKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19vcGVuXzEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09ICcyJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfUGVuZGluZ18yJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA9PSAnMycpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX0NvbXBsZXRlZF8zJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX0NhbmNlbGxlZF80JztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdqb2Jfc3RhdHVzX29wZW5fMSBqb2Jfc3RhdHVzX1BlbmRpbmdfMiBqb2Jfc3RhdHVzX0NvbXBsZXRlZF8zIGpvYl9zdGF0dXNfQ2FuY2VsbGVkXzQnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgam9iU3RhdHVzRGlzcGxheTogam9iU3RhdHVzRGlzcGxheVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDA5LzE3LzIwMTkgMDk6MzEgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDAxXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE5LzIwMTkgMDQ6MjEgYW0gLSBTU04gLSBbMjAxOTA5MTktMDM1NF0gLSBbMDA1XSAtIFB1dHRpbmcgdGhpbmdzIGJhY2sgLSBDbGVhbnVwIGZyb20gaW1wbGVtZW50aW5nIEFNRCAtIEFkZGluZyB0c2NvbmZpZy5qc29uICAgICBcImFsd2F5c1N0cmljdFwiOiB0cnVlLFxyXG4vL2ltcG9ydCBhbmd1bGFyICA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG5cclxuICAgIGluaXQxMDEoKTogYW55LFxyXG4gICAgcHJldmlvdXNkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIG5leHRkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIHNheVdoYXRQYWdlV2VBcmVPbjogc3RyaW5nLFxyXG4gICAgc3Fsc3RhdHNyZWNvcmQ6IGFueSxcclxuICAgIG9uTmV4dCgpOiBhbnksXHJcbiAgICBvblByZXZpb3VzKCk6IGFueSxcclxuICAgIHBhZ2luZ21ldGhvZCgpOiBhbnlcclxuXHJcbn1cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNTowNyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDRdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5kZWZhdWx0LmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG4gICAgXHJcbiAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncGFnaW5nRGlyZWN0aXZlJywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVXRpbC9wYWdpbmdEaXJlY3RpdmUuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luZ21ldGhvZDogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFnOiBcIj1cIixcclxuICAgICAgICAgICAgICAgIHNxbHN0YXRzcmVjb3JkOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VDb3VudCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzY29wZS5zcWxzdGF0c3JlY29yZC50b3RhbFJlY29yZENvdW50IC8gc2NvcGUuc3Fsc3RhdHNyZWNvcmQucmVjb3Jkc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEJ1dHRvbnMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByZXZpb3VzZGlzYWJsZWQgPSBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIDw9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubmV4dGRpc2FibGVkID0gc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA+PSB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlBhZ2UgXCIgKyBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgXCIgb2YgXCIgKyB0b3RhbFBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIk5vIHJlY29yZHMuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChzY29wZS5pbml0MTAxLCAxMDAwKTsgLy8gdG8gcGlja3VwIGFjdHVhbCB2YWx1ZXMgYWZ0ZXIgQVBJIGNhbGwgdG8gZ2V0IGRhdGEsIGp1c3QgaW4gY2FzZSEhIVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vblByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID0gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID4gMSA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyAtIDEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vbk5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA9IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA8IHRvdGFsUGFnZUNvdW50ID8gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgMSA6IHRvdGFsUGFnZUNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGU6IHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgcGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5jbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RlZFswXS5pbnN0YW5jZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iajogSUFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2gob2JqKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmo6IElBbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2gob2JqKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmo6IElBbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKG9iaik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmluc3RhbmNlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuZnVuY3Rpb24gZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgZ2V0SW5zdGFuY2UgfTtcclxuIiwiXHJcbi8vIDA5LzE4LzIwMTkgMDk6NDMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDAxXSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcbiAgICBqb2Jfc3RhdHVzX2NsaWNrKGVudHJ5OiBhbnkpOiBhbnksXHJcbiAgICBqb2Jfc3RhdHVzX2NoZWNrZWQoZW50cnk6IGFueSk6IGFueVxyXG59O1xyXG5cclxuXHJcbnZhciBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlID0gc3NuX2dsb2JhbHMuZGVmYXVsdC5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZS5jb250cm9sbGVyKFwidXRpbGl0eUNvbnRyb2xsZXJcIiwgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUuZGlyZWN0aXZlKCdqb2JTdGF0dXNPcHRpb24nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9qb2JzL2pvYlN0YXR1cy5odG1sXCIsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeTogXCI9XCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkZnVuY3Rpb246IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgam9ic3RhdHVzZXNzZWxlY3RlZDEwMjogXCI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogaUZpeFNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuam9iX3N0YXR1c19jbGljayA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRmdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmpvYl9zdGF0dXNfY2hlY2tlZCA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuam9ic3RhdHVzZXNzZWxlY3RlZDEwMi5pbmRleE9mKGVudHJ5LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTZWxlY3RlZCA+IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlOiBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG4iLCJcclxuLy8gMDkvMjEvMjAxOSAxMTozMSBhbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDJdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuXHJcbmltcG9ydCB7IGhlYWRlcldpdGhTb3J0X2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9IZWFkZXJXaXRoU29ydCc7XHJcbmltcG9ydCB7IHBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvcGFnaW5nRGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuL0pvYlN0YXR1c0RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXInO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXInO1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEFwcCc7ICAvLyBmb3IgdGltZXNoZWV0IHJlbGF0ZWQgbGlua3NcclxuLy9pbXBvcnQgeyB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvdGltZXNoZWV0Y29udGludWVjb250cm9sbGVyJztcclxuLy9pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyJztcclxuXHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5Kb2JzX0FuZ3VsYXJfTW9kdWxlO1xyXG5cclxuaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UuaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5wYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UucGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlLkpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU7XHJcblxyXG5cclxudGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjtcclxuXHJcbi8vdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlO1xyXG5cclxuLy90aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2U7XHJcblxyXG4vL3RpbWVzaGVldEFwcF9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiBcclxuXHJcblxyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=