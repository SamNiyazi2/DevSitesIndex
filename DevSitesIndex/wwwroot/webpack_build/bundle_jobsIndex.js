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
    var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('DataServices', currentApplication);
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
      // 11/21/2019 06:26 am - SSN - [20191121-0503] - [004] - Timelog edit options on project search
      // Add servingPage


      var _TimelogRefreshRecord = function _TimelogRefreshRecord(id, servingPage) {
        var deferred = $q.defer();
        $http.get('/api/timelogapi/RefreshRecord/' + id + "?servingPage=" + servingPage).then(function (result) {
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
        timelogRefreshRecord: _TimelogRefreshRecord,
        projectsSearchRefreshRecord: _ProjectsSearchRefreshRecord
      };
    }]);
  };

  return {
    //        ssn_devsite_angular_module: ssn_devsite_angular_module
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./DropdownList/DropdownListDirective.ts":
/*!***********************************************!*\
  !*** ./DropdownList/DropdownListDirective.ts ***!
  \***********************************************/
/*! exports provided: dropdownListDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownListDirective_instance", function() { return dropdownListDirective_instance; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
 // 09/20/2019 10:21 am - SSN - Replace angular.module

 // Add autofocus="true" to set focus

var dropdownListDirective_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
    /////  console.log("DropdownListDirective - 20191116-0551");
    /////   console.log('defaultAppName type and name [', typeof (defaultAppName), '] [', defaultAppName, ']');
    if (typeof defaultAppName != "string") {
      defaultAppName = "demoSites_Index_Timesheet";
    }

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);
    var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {
      // Needed to be able to submit form
      var formName = $attrs['formName'];
      var form1 = $("[name='" + formName + "']").get(0);
      var absUrl = $location.absUrl().trim(); ///////////////////// $(form1).attr("action", absUrl);

      $scope.submitForm_2 = function (event, form) {
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("dropdownListDirective - submitForm_2");
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("2 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      };

      $scope.submitForm_1 = function (event, form) {
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("dropdownListDirective - submitForm_1");
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
        console.log("1 $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        if (!form.$valid) {
          event.preventDefault();
        }
      };
    }]);
    downdownList_angular_module.directive('validateDropdownListDirective', validateDropdownListDirectiveFunc);

    function validateDropdownListDirectiveFunc($http, $q) {
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {},
        link: function link(scope, element, attr, ngModel) {
          ngModel.$asyncValidators.isInvalidDropdownListDirectiveInputCheck2 = function (modelValue, viewValue) {
            var deferred = $q.defer();

            if (modelValue && modelValue.id) {
              deferred.resolve();
            } else {
              deferred.reject();
            }

            return deferred.promise;
          };
        }
      };
    }

    downdownList_angular_module.directive('dropdownListDirective', function () {
      var controller = ['$http', '$q', '$scope', '$timeout', 'changeMonitorService', function ($http, $q, $scope, $timeout, changeMonitorService) {
        var _isValid = false;
        var vm = this;
        vm.isValidBoolean = false;
        vm.firstRun = true;
        vm.hitCount = 0;
        vm.isInvalidDropdownListDirectiveInput = true; // 11/28/2019 08:29 am - SSN - Adding - Need to initial for $watch to work.

        vm.disciplineSelected_XXX = "";
        $scope.$on('$destroy', function () {
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
        });
        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          if (vm.formName) {
            if (vm.formName.$dirty) {
              changeMonitorService.doSetHaveChange(true);
            }
          }

          vm.isInvalidDropdownListDirectiveInput = true;

          if (newValue) {
            console.log('oldValue');
            console.log("[", oldValue, "]");
            console.log('newValue');
            console.log("[", newValue, "]");
            console.log("cond 1");

            if (newValue) {
              console.log("cond 1");

              if (newValue.id) {
                console.log("cond 2");

                if (newValue.id > 0) {
                  console.log("cond 3");
                  vm.isInvalidDropdownListDirectiveInput = false;
                }
              }
            }
          }
        });

        vm.isValid = function () {
          vm.hitCount += 1;
          console.log("hitcount ", vm.hitCount);

          if (!this.keyColumn) {
            console.log('No keyColumn');
            return;
          }

          switch (this.keyColumn.toLowerCase()) {
            case 'timelog.disciplineid':
            case 'disciplineid':
              vm.APIUrl = '/api/DisciplineAPI';
              break;

            case 'timelog.jobid':
            case 'jobid':
              vm.APIUrl = '/api/jobapi/typeahead';
              break;
            // 11/27/2019 04:46 pm - SSN - Adding

            case 'job.projectid':
              vm.APIUrl = '/api/projectapi/typeahead';
              break;

            default:
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
              console.log('DropdownListDirective - no case for [', this.keyColumn);
          }

          var keyColumnValue = $("[name='" + this.keyColumn + "']").val(); /////  console.log('dropdownListDirective = (999-A) - this.angularControlId', this.angularControlId);
          /////  console.log('dropdownListDirective = (999-B) - keyColumnValue [', keyColumnValue, ']');

          var keyValueSelected = null; // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          //   if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {

          if (this.angularControlId > 0) {
            keyValueSelected = this.angularControlId;
          } // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          //if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {


          if (keyColumnValue > 0) {
            keyValueSelected = keyColumnValue;
          } // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          // if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {


          if (keyValueSelected > 0) {
            console.log("XXXXXXXXXXXXxx set defalt");
            console.log("XXXXXXXXXXXXxx set defalt");
            console.log("XXXXXXXXXXXXxx set defalt");
            console.log("XXXXXXXXXXXXxx set defalt");
            console.log("XXXXXXXXXXXXxx set defalt");
            vm.getDisciplineCurrent(keyValueSelected).then(vm.currentDisplineLookupSuccess);
            vm.isValidBoolean = true;
            return true;
          } // Are we ever reaching this point?


          console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']');
          console.log("xxxxxxxxxxxxxxxxxxxxx");
          console.log("xxxxxxxxxxxxxxxxxxxxx");
          console.log("xxxxxxxxxxxxxxxxxxxxx");
          console.log("xxxxxxxxxxxxxxxxxxxxx");
          console.log("xxxxxxxxxxxxxxxxxxxxx");
          _isValid = vm.setInputVariables();
          vm.isValidBoolean = _isValid;
          console.log('*************** _isValid', _isValid);
          vm.firstRun = false;
          return _isValid;
        };

        vm.setInputVariables = function () {
          var _isValid_local = false;

          if (vm.disciplineSelected_XXX) {
            if (vm.disciplineSelected_XXX.id) {
              if (this.angularControlId !== vm.disciplineSelected_XXX.id) {
                this.angularControlId = vm.disciplineSelected_XXX.id;
                $("[name='" + this.keyColumn + "']").val(vm.disciplineSelected_XXX.id);
                vm.getDisciplineCurrent(this.angularControlId).then(vm.currentDisplineLookupSuccess);
                _isValid_local = this.angularControlId > 0;
              } else {
                console.log("nvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvnvn");
                _isValid_local = true;
              }
            }
          }

          vm.isValidBoolean = _isValid_local;
          console.log("isValidBoolean (0522)", vm.isValidBoolean);
          return _isValid_local;
        };

        vm.validateEntry = function (event) {
          console.log('dropdownList - validateEntry ');
          console.log(vm.disciplineSelected_XXX);
          console.log(event);
          vm.setInputVariables();
        };

        vm.currentDisplineLookupSuccess = function (data) {
          /////  console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 101');
          if (data) {
            /////   console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 102');
            // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
            console.log(data);

            if (data.disciplineId) {
              /////    console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-A');
              vm.disciplineSelected_XXX = {
                id: data.disciplineId,
                title: data.disciplineShort
              };
              vm.angularControlId = data.disciplineId;
            }

            if (data.ta_id) {
              /////    console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-B');
              vm.disciplineSelected_XXX = {
                id: data.ta_id,
                title: data.ta_description
              };
              vm.angularControlId = data.ta_id;
            }
          }
        };

        vm.getDisciplines = function (lookupValue) {
          if (lookupValue === null) lookupValue = "";
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: vm.APIUrl
          }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
          return deferred.promise;

          function typeaheadDisciplineSuccess(response) {
            var addresses = [];
            angular__WEBPACK_IMPORTED_MODULE_0__["forEach"](response.data, function (item) {
              // 09/16/2019 05:13 am - SSN - [20190916-0355] - [006] - Adding JobAPI controller
              // While development in progress
              if (item.disciplineId) {
                if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                  addresses.push({
                    id: item.disciplineId,
                    title: item.disciplineShort
                  });
                }
              }

              if (item.ta_id) {
                if (item.ta_description.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                  addresses.push({
                    id: item.ta_id,
                    title: item.ta_description
                  });
                }
              }
            });
            deferred.resolve(addresses);
          }

          function typeaheadDisciplineError(response) {
            deferred.reject(response);
          }
        }; // 09/16/2019 02:57 am - SSN - Added to get current value and update view.


        vm.getDisciplineCurrent = function (lookupID) {
          /////console.log('dropdownListDirective - getDisciplineCurrent 1111 [', vm.APIUrl, ']');
          /////console.log('dropdownListDirective - getDisciplineCurrent 2222 [', lookupID, ']');
          if (lookupID === null) return null;
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: vm.APIUrl + "/" + lookupID
          }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
          return deferred.promise;

          function typeaheadDisciplineSuccess(response) {
            deferred.resolve(response.data);
          }

          function typeaheadDisciplineError(response) {
            deferred.reject(response);
          }
        };

        $timeout(function () {
          vm.isValid();
        }, 600);
        $timeout(function () {
          vm.isReady = true;
        }, 2000);
      }];
      return {
        restrict: "E",
        templateUrl: "/js/DropdownList/DropDownListDirective.html",
        controller: controller,
        controllerAs: 'vm101',
        bindToController: true,
        scope: {
          keyColumn: "@key",
          formName: "=",
          angularControlId: "=?aci"
        },
        link: function link(scope, el, attrs) {
          // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus
          if (attrs.autofocus) {
            var setfocusFunc_1 = function setfocusFunc_1(elem) {
              if (attrs.autofocus.toLowerCase() === "true") {
                var inputObj = elem.find('input[type=text]').filter(':visible:first');

                if (inputObj.val() === "") {
                  inputObj.focus();
                }
              }
            };

            setTimeout(function () {
              setfocusFunc_1(el);
            }, 1000);
          }
        }
      };
    });
  };

  return {
    // 11/16/2019 06:02 pm - SSN - [20191116-1516] - [005] - Timelog edit (AngularJS client version)
    // Revised so we can pass in default application name for module.
    //        downdownList_angular_module: downdownList_angular_module,
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
  var Jobs_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('JobIndexController', "timesheetApp"); // 11/27/2019 09:24 am - SSN - Passing in projectId

  Jobs_Angular_Module.controller('jobsIndexController', ['$scope', '$http', '$q', 'dataService', '$timeout', '$sce', '$uibModal', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
    $scope.hasErrors = false;
    $scope.feedbackToUserClassNameCase = 0;
    $scope.errorMessages = "";
    $scope.showOriginalTable = false;
    $scope.tableTopIdForScroll = "jobIndexTableID";
    $scope.hideProjectTitle = false;
    var qd = {};
    if (location.search) location.search.substr(1).split("&").forEach(function (item) {
      var s = item.split("="),
          k = s[0],
          v = s[1] && decodeURIComponent(s[1]);
      (qd[k] = qd[k] || []).push(v);
    }); // 12/03/2019 10:12 pm - SSN - parseInt
    // 12/04/2019 06:25 am - SSN - Change from local to $scope

    $scope.projectId = parseInt(qd['id']); // 12/03/2019 10:25 pm - SSN - Hide project title.

    $scope.hideProjectTitle = $scope.projectId > 0; // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
    //$scope.sqlStatsRecord = {};
    //  Setup intiail values for list

    $scope.job_statuses_selected = [1]; // open

    var columnBag_defaults = {
      columnName: '????',
      columnNameSelected: '',
      currentPageNo: 1,
      recordsPerPage: 4,
      desc: null,
      totalRecordCount: 0,
      caption: "???",
      job_statuses_selected: [$scope.job_statuses_selected],
      fk_filter: $scope.projectId
    };
    var _fieldList = [__assign(__assign({}, columnBag_defaults), {
      columnName: 'projectTitle_ForActivity',
      caption: 'Project Title'
    }), __assign(__assign({}, columnBag_defaults), {
      columnName: 'jobTitle',
      caption: 'Job Title'
    }), __assign(__assign({}, columnBag_defaults), {
      columnName: 'dateAdded',
      caption: 'Date Added'
    }), __assign(__assign({}, columnBag_defaults), {
      columnName: 'dateUpdated',
      caption: 'Date Updated'
    }), __assign(__assign({}, columnBag_defaults), {
      columnName: 'activityAge',
      caption: 'Activity Age',
      columnNameSelected: 'activityAge',
      desc: true
    })];

    if ($scope.hideProjectTitle) {
      _fieldList.splice(0, 1);
    }

    var selectColumnEntries = _fieldList.filter(function (r) {
      return r.columnNameSelected.length > 0;
    });

    console.log("selectColumnEntries");
    console.log(selectColumnEntries);
    var columnBag = null;

    if (selectColumnEntries.length > 0) {
      columnBag = selectColumnEntries[0];
    }

    $scope.fieldsList = _fieldList;
    getJobsList(columnBag);

    function getJobsList(columnBag) {
      dataService.getJobs(columnBag).then(getJobsSuccess, getJobsError)["catch"](getTimelogCatch);

      function getJobsSuccess(data) {
        $scope.fieldsList.forEach(function (r) {
          r.desc = null;
        });

        if (data.hasErrors) {
          $scope.feedbackToUserClassNameCase = 2;
          $scope.hasErrors = true;
          $scope.errorMessages = "";

          for (var i = 0; i < data.feedbackMessages.length; i++) {
            for (var i2 = 0; i2 < data.feedbackMessages[i].errorMessages.length; i2++) {
              $scope.errorMessages += data.feedbackMessages[i].errorMessages[i2];
            }
          }
        } else {
          $scope.databag = {
            jobs: data.dataList,
            column: data.sqlStatsRecord.columnName,
            desc: data.sqlStatsRecord.desc
          }; // We need to convert to an array. We don't have a setter on an interface.

          data.sqlStatsRecord.job_statuses_selected = data.sqlStatsRecord.job_statuses_selected.split(',');
          $scope.sqlStatsRecord = data.sqlStatsRecord;
          var currentColumnIndex = $scope.fieldsList.findIndex(function (r) {
            return r.columnName === data.sqlStatsRecord.columnName;
          });

          if (currentColumnIndex > -1) {
            $scope.fieldsList[currentColumnIndex].desc = data.sqlStatsRecord.desc;
          }
        }
      }

      function getJobsError(data) {
        var temp = data;
        console.log('20191110-0935 - JobsIndexController - getJobsError');
        console.error(data);
      }

      function getTimelogCatch(data) {
        var temp = data;
        console.log('20191110-0936 - JobsIndexController - getJobsCatch');
        console.error(data);
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
      $scope.sqlStatsRecord = columnBag; // 12/02/2019 02:48 am - SSN - Added

      console.log('jobIndexControler - pagingMethod101');

      if ($scope.tableTopIdForScroll) {
        document.querySelector("#" + $scope.tableTopIdForScroll).scrollIntoView({
          behavior: 'smooth'
        });
        console.log('jobIndexControler - pagingMethod101 - scroll');
      }
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

    function getJob_Statuses() {
      dataService.getJob_Statuses().then(getJob_StatusesSuccess, getJob_StatusesError)["catch"](getJob_StatusesCatch);

      function getJob_StatusesSuccess(data) {
        $scope.job_statuses = data;
      }

      function getJob_StatusesError(data) {
        console.log("JobIndexController -  20190922-0758 - Data error ?????????????????????????????");
        console.error(data);
      }

      function getJob_StatusesCatch(data) {
        console.log("JobIndexController -  20190922-0758 - Data error (catch) ?????????????????????????????");
        console.error(data);
      }
    }

    $scope.feedbackToUserClassNameSet = function () {
      switch ($scope.feedbackToUserClassNameCase) {
        case 1:
          return "  margined info_good";

        case 2:
          return "  margined info_bad";

        default:
          return "";
      }
    };

    getJob_Statuses();
  }]);
  return {
    Jobs_Angular_Module: Jobs_Angular_Module
  };
}();



/***/ }),

/***/ "./Projects/ProjectsIndex.ts":
/*!***********************************!*\
  !*** ./Projects/ProjectsIndex.ts ***!
  \***********************************/
/*! exports provided: ProjectIndexController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIndexController_instance", function() { return ProjectIndexController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
 // 09/24/2019 09:38 am - SSN - [20190924-0731] - [008] - Project search option
// 11/22/2019 01:40 pm - SSN - [20191121-0503] - [012] - Timelog edit options on project search
// Replace incomplete code for project search

var ProjectIndexController_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
    var angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('ProjectIndex', defaultAppName);
    angular_Module.controller('ProjectsIndexController', ['$scope', '$compile', function ($scope, $compile) {
      console.log('ProjectsIndexController - new - 20191122-1344'); // 11/22/2019 01:57 pm - SSN - [20191121-0503] - [014] - Timelog edit options on project search

      $scope.$on('TimeLog_Index_Refresh', function (event, item) {
        console.log('ProjectsIndex - Firing TimeLog_Index_Refresh - 20191122-1406');
        console.log('item', item);
        console.log(item);
        $("#" + item.tr_2_id).remove();
        $("#" + item.tr_1_id).replaceWith(item.html);
        $compile($("#" + item.tr_1_id).contents())($scope);
      });
    }]);
  };

  return {
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.ts":
/*!***********************************************************!*\
  !*** ./Timesheet/TimelogLinkOtions/TimelogLinkOptions.ts ***!
  \***********************************************************/
/*! exports provided: TimelogLinkOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogLinkOptions", function() { return TimelogLinkOptions; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./globals.ts");

// 11/21/2019 05:50 am - SSN - [20191121-0503] - [003] - Timelog edit options on project search


var TimelogLinkOptions = function () {
  var doSetup = function doSetup(defaultAppName) {
    console.log("TimelogLinkOptions - 20191121-0554-B");
    console.log('defaultAppName type and name [', _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(defaultAppName), '] [', defaultAppName, ']'); //var TimelogLinkOptions_angular_module = globals_instance.getInstance(defaultAppName, []);

    var TimelogLinkOptions_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('TimelogLinkOptions', defaultAppName);
    TimelogLinkOptions_angular_module.directive('timelogLinkOptions', ['$uibModal', 'changeMonitorService', function ($uibModal, changeMonitorService) {
      return {
        restrict: "E",
        templateUrl: "/js/Timesheet/TimelogLinkOtions/TimelogLinkOptions.html",
        //controllerAs: 'vm101',
        //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
        controller: ['$scope', function ($scope) {
          // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage
          $scope.timesheetForm_Edit = function (_timelogId, _servingPage) {
            console.log('timelogLinkOptions - [' + _timelogId + ']  OOOOOOOOOOOOOOOOOO');
            console.log('TimelogLinkOptions_angular_module - x20191116-1637 - timesheetForm_Edit ');
            console.log('ServingPage', _servingPage);
            var modalEdit = $uibModal.open({
              templateUrl: '/js/timesheet/templates/TimelogClockout.html',
              controller: 'TimesheetEditController',
              backdrop: 'static',
              keyboard: false,
              resolve: {
                timelogId: function timelogId() {
                  return _timelogId;
                },
                servingPage: function servingPage() {
                  return _servingPage;
                }
              }
            });
            modalEdit.result.then(modalEdit_save, modalEdit_cancel);

            function modalEdit_save(result) {
              console.log('TimelogLinkOptions_angular_module - x20191116-1640 - modalEdit_save');
              console.log(result);
              changeMonitorService.reset();
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
            }

            function modalEdit_cancel(result) {
              console.log('TimesheetApp - 20191116-1641 - modalEdit_cancel');
              console.log(result);
              changeMonitorService.reset();
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
            }

            console.log('TimesheetApp - 20191116-1643 - timesheetForm_Edit - end ');
          }; // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage


          $scope.timesheetForm_ClockOut = function (_timelogId2, _servingPage2) {
            // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
            // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
            // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
            //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
            console.log('TimesheetApp - 20191114-1435 - modalClockout  - begin ');
            var modalClockout = $uibModal.open({
              templateUrl: '/js/timesheet/templates/TimelogClockout.html',
              controller: 'TimesheetClockOutController',
              windowClass: 'ssn-mobile-modal',
              backdrop: 'static',
              keyboard: false,
              resolve: {
                timelogId: function timelogId() {
                  return _timelogId2;
                },
                servingPage: function servingPage() {
                  return _servingPage2;
                }
              }
            }); // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService

            modalClockout.result.then(modalClockout_save, modalClockout_cancel);

            function modalClockout_save(result) {
              console.log('TimesheetApp - 20191114-1435-2 - modalClockout_1 ');
              console.log(result);
              changeMonitorService.reset();
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
            }

            function modalClockout_cancel(result) {
              console.log('TimesheetApp - 20191114-1435-3 - modalClockout_2 ');
              console.log(result);
              changeMonitorService.reset();
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
            }

            console.log('TimesheetApp - 20191114-1435 - modalClockout  - end ');
          }; // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
          // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage


          $scope.timesheetForm_ClockContinue = function (_timelogId3, _servingPage3) {
            // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option
            // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 
            var TimesheetContinueController_modal = $uibModal.open({
              animation: 'slide-in-up',
              templateUrl: '/js/timesheet/templates//timesheetTemplate.html?v=' + $scope.versionForHTMLRefresh,
              controller: 'TimesheetContinueController',
              windowClass: 'ssn-mobile-modal',
              backdrop: 'static',
              keyboard: false,
              resolve: {
                timelogId: function timelogId() {
                  return _timelogId3;
                },
                servingPage: function servingPage() {
                  return _servingPage3;
                }
              }
            }); // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService

            TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);

            function TimesheetContinueController_modal_save(result) {
              console.log('TimesheetContinueController_modal_save - 20191114-1448');
              console.log("result", result);
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
              changeMonitorService.reset();
            }

            function TimesheetContinueController_modal_cancel(result) {
              console.log('TimesheetContinueController_modal_cancel - 20191114-1449');
              console.log("result", result);
              console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
              changeMonitorService.reset();
            }
          }; // 11/27/2019 08:45 am - SSN - Copied from JobIndexController.ts 
          // 09/28/2019 04:06 pm - SSN - [20190928-1256] - [011] - Adding Entity Framework model attribute
          // Duplicate - Wrong way to go!


          $scope.showCreateTimesheetForm = function (jobID) {
            $uibModal.open({
              templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
              controller: 'TimesheetController',
              backdrop: false,
              resolve: {
                jobId: function jobId() {
                  return jobID;
                }
              }
            });
          };
        }],
        scope: {
          timelogId: "@",
          totalSeconds: "@",
          servingPage: '@',
          jobId: '@'
        },
        link: function link(scope, el, attrs) {
          var totalSeconds_fromAttr = attrs['totalSeconds'];
          var haveOpenRecord = totalSeconds_fromAttr === undefined;
          scope.showClockoutOption = haveOpenRecord;
          scope.continue_or_lineItem_caption = !haveOpenRecord ? "Continue" : "Line item";
        }
      };
    }]);
  };

  return {
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./Timesheet/TimesheetApp.ts":
/*!***********************************!*\
  !*** ./Timesheet/TimesheetApp.ts ***!
  \***********************************/
/*! exports provided: timesheetApp_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetApp_instance", function() { return timesheetApp_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 04/12/2019 01:42 am - SSN - [20190412-0142] - TimesheetApp


var timesheetApp_instance = function () {
  // 05/03/2019 06:33 pm - SSN - [20190503-1539] - [013] - Add link to create timelog
  // Convert to TS
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetApp-filename', "timesheetApp"); // 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js
  // 11/14/2019 03:35 pm - SSN - [20191114-1459] - [005] - ChangeMonitroService
  // Inject changeMonitorService

  timesheetApp.controller("timesheetController", ['$scope', '$uibModal', 'changeMonitorService', '$compile', function ($scope, $uibModal, changeMonitorService, $compile) {
    // 11/19/2019 06:43 am - SSN - [20191119-0048] Added to re-bind ng-click
    $scope.$on('TimeLog_Index_Refresh', function (event, item) {
      console.log('20191122-1757');
      console.log(item);
      $("#" + item.tr_2_id).remove();
      $("#" + item.tr_1_id).replaceWith(item.html);
      $compile($("#" + item.tr_1_id).contents())($scope);
    });

    $scope.timesheetForm_ClockOut = function (_timelogId) {
      // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
      // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
      // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
      //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
      console.log('TimesheetApp - 20191114-1435 - modalClockout  - begin ');
      var modalClockout = $uibModal.open({
        templateUrl: '/js/timesheet/templates/TimelogClockout.html',
        controller: 'TimesheetClockOutController',
        windowClass: 'ssn-mobile-modal',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          timelogId: function timelogId() {
            return _timelogId;
          }
        }
      }); // 11/14/2019 03:36 pm - SSN - [20191114-1459] - [006] - ChangeMonitroService

      modalClockout.result.then(modalClockout_save, modalClockout_cancel);

      function modalClockout_save(result) {
        console.log('TimesheetApp - 20191114-1435-2 - modalClockout_1 ');
        console.log(result);
        changeMonitorService.reset();
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
      }

      function modalClockout_cancel(result) {
        console.log('TimesheetApp - 20191114-1435-3 - modalClockout_2 ');
        console.log(result);
        changeMonitorService.reset();
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
      }

      console.log('TimesheetApp - 20191114-1435 - modalClockout  - end ');
    }; // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option


    $scope.timesheetForm_ClockContinue = function (_timelogId2) {
      // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option
      // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 
      var TimesheetContinueController_modal = $uibModal.open({
        animation: 'slide-in-up',
        templateUrl: '/js/timesheet/templates//timesheetTemplate.html?v=' + $scope.versionForHTMLRefresh,
        controller: 'TimesheetContinueController',
        windowClass: 'ssn-mobile-modal',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          timelogId: function timelogId() {
            return _timelogId2;
          }
        }
      });
      modalClosingHook($scope); // 11/14/2019 02:44 pm - SSN - [20191114-1459] - [007] - ChangeMonitroService

      TimesheetContinueController_modal.result.then(TimesheetContinueController_modal_save, TimesheetContinueController_modal_cancel);

      function TimesheetContinueController_modal_save(result) {
        console.log('TimesheetContinueController_modal_save - 20191114-1448');
        console.log("result", result);
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
        changeMonitorService.reset();
      }

      function TimesheetContinueController_modal_cancel(result) {
        console.log('TimesheetContinueController_modal_cancel - 20191114-1449');
        console.log("result", result);
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
        changeMonitorService.reset();
      }
    }; // 11/14/2019 04:41 pm - SSN - [20191114-1459] - [008] - ChangeMonitroService
    // Testing - Not working.


    function modalClosingHook($scope) {
      console.log('modal.closing - begin');
      $scope.$on('modal.closing', function (event, reason, closed) {
        console.log('modal.closing: ' + (closed ? 'close' : 'dismiss') + '(' + reason + ')');
        var message = "You are about to leave the edit view. Uncaught reason. Are you sure?";

        switch (reason) {
          // clicked outside
          case "backdrop click":
            message = "Any changes will be lost, are you sure?";
            break;
          // cancel button

          case "cancel":
            message = "Any changes will be lost, are you sure?";
            break;
          // escape key

          case "escape key press":
            message = "Any changes will be lost, are you sure?";
            break;
        }

        if (!confirm(message)) {
          event.preventDefault();
        }
      });
      console.log('model.closing - end');
    }

    $scope.showCreateTimesheetForm = function (jobID) {
      if (isNaN(jobID)) {
        jobID = 0;
      } // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog


      $uibModal.open({
        templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
        controller: 'TimesheetController',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          jobId: function jobId() {
            return jobID;
          }
        }
      });
    }; // 11/16/2019 04:35 pm - SSN - [20191116-1516] - [002] - Timelog edit (AngularJS client version)


    $scope.timesheetForm_Edit = function (_timelogId3) {
      console.log('TimesheetApp - 20191116-1637 - timesheetForm_Edit ');
      var modalEdit = $uibModal.open({
        templateUrl: '/js/timesheet/templates/TimelogClockout.html',
        controller: 'TimesheetEditController',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          timelogId: function timelogId() {
            return _timelogId3;
          }
        }
      });
      modalEdit.result.then(modalEdit_save, modalEdit_cancel);

      function modalEdit_save(result) {
        console.log('TimesheetApp - 20191116-1640 - modalEdit_save');
        console.log(result);
        changeMonitorService.reset();
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
      }

      function modalEdit_cancel(result) {
        console.log('TimesheetApp - 20191116-1641 - modalEdit_cancel');
        console.log(result);
        changeMonitorService.reset();
        console.log("changeMonitorService.getHaveChanges()", changeMonitorService.getHaveChanges());
      }

      console.log('TimesheetApp - 20191116-1643 - timesheetForm_Edit - end ');
    };
  }]);
  return {
    timesheetApp: timesheetApp
  };
}(); // 09/21/2019 03:58 am - SSN - [20190921-0357] - [002] - Creating multiple entry for Webpack




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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetController', "timesheetApp"); // 09/30/2019 06:56 pm - SSN - (Inject jobId)
  // 11/28/2019 02:58 am - SSN - [20191128-0247] - [002] - Clock-in not saving - Add changeMonitorService

  timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'jobId', function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, jobId) {
    changeMonitorService.setupMonitor(); // 11/28/2019 02:47 am - SSN - [20191128-0247] - [001] - Clock-in not saving
    // Adding feedback

    $scope.feedbackToUserText = "";
    $scope.feedbackToUserClassNameCase = "";

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

    dataService.getJob(jobId).then(getJobSuccess, getJobError)["catch"](getJobCatch);

    function getJobSuccess(data) {
      $scope.editableTimeLog.job = {};
      $scope.editableTimeLog.job.jobTitle = data.jobTitle;
      $scope.editableTimeLog.job.project = {};
      $scope.editableTimeLog.job.project.projectTitle = data.project.projectTitle;
    }

    function getJobError(data) {
      console.log('TimeshetController - getJobSuccess  -  20190930-2106-B ');
      console.log(data);
    }

    function getJobCatch(data) {
      console.log('TimeshetController - getJobSuccess  -  20190930-2106-C ');
      console.log(data);
    }

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

      if ($scope.editableTimeLog.id === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        promise.then(function (data) {
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
          $uibModalInstance.close();
          toastr.info("Clocked-in");
        }, function (error) {
          console.log("TimesheetController - 20190921-0640 - promise > error");
          console.log(error);
          toastr.error("Failed to save record.  See console log."); // 11/28/2019 02:47 am - SSN - [20191128-0247] - [001] - Clock-in not saving
          // Adding feedback

          $scope.feedbackToUserClassNameCase = 2;
          $scope.feedbackToUserText = error.data;
        });
      }
    };

    $scope.cancelForm = function () {
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss(); //same as cancel???
    };
  }]);
  return {
    timesheetApp_TimesheetController: timesheetApp
  };
}();



/***/ }),

/***/ "./Timesheet/TimesheetEditController.ts":
/*!**********************************************!*\
  !*** ./Timesheet/TimesheetEditController.ts ***!
  \**********************************************/
/*! exports provided: timesheetEditController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetEditController_instance", function() { return timesheetEditController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.ts");
// 11/16/2019 04:47 pm - SSN - [20191116-1516] - [003] - Timelog edit (AngularJS client version)
// Copied from TimesheetClockoutController




var timesheetEditController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetEditController', "timesheetApp"); // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view
  // 11/22/2019 02:18 pm - SSN - [20191121-0503] - [015] - Timelog edit options on project search
  // Injecting Servingpage

  timesheetApp.controller('TimesheetEditController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', '$timeout', '$rootScope', 'servingPage', // 11/25/2019 04:03 pm - SSN - [20191125-1414] - [006] - Project jobs - filter 
  // Remove function name
  //        function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, servingPage: ssn_globals.Timelog_ServingPage) {
  function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, servingPage) {
    $timeout(function () {
      changeMonitorService.setupMonitor();
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].setDefaults();
    }, 600);
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch);
    $scope.pageTitle = "Edit [" + servingPage + ']';
    $scope.feedbackToUserText = "";
    $scope.feedbackToUserClassNameCase = "";

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

    $scope.setStopTime = function () {
      var timeNow = new Date();
      timeNow.setMilliseconds(0); //timeNow.setSeconds(0);

      $scope.editableTimeLog.stopTime = timeNow;
    };

    function getTimelogSuccess(data) {
      var timeNow = new Date();
      timeNow.setMilliseconds(0);
      timeNow.setSeconds(0);
      var data2 = data;
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data2);
      $scope.timeLog = data2;
      $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog);
      $timeout(function () {
        //  $scope.getDisciplines(data2.discipline.disciplineShort);
        $scope.disciplineSelected = {
          id: data2.discipline.disciplineId,
          title: data2.discipline.disciplineShort
        };
      }, 500);
    }

    function getTimelogError(data) {
      console.log('timesheetEditController - 20191116-1648');
      console.log(data);
      toastr.warning("Error posted to console. (1648)");
    }

    function getTimelogCatch(data) {
      console.log('timesheetEditController - 20191116-1649');
      console.log(data);
      toastr.warning("Error posted to console. (1649)");
    }

    $scope.submitForm = function () {
      $scope.feedbackToUserText = "";
      $scope.feedbackToUserClassNameCase = "";
      var test = $scope.editableTimeLog;
      var promise = null;

      if ($scope.editableTimeLog.stopTime) {
        $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
      }

      if ($scope.editableTimeLog.timeLogId === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        promise.then(function (data) {
          var test1 = data;
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
          $uibModalInstance.close();
          toastr.info("Record saved."); // Refactor [20191120-0438] - Begin

          var id_temp = $scope.editableTimeLog.timeLogId; // 11/22/2019 04:09 pm - SSN - [20191121-0503] - [019] - Timelog edit options on project search

          console.log("servingPage 5 ", servingPage);
          var haveMatch_on_servingPage = false;

          if (_globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Timelog) || _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Job_Timelog)) {
            dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
            haveMatch_on_servingPage = true;
          }

          if (_globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Projects_Search)) {
            dataService.projectsSearchRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
            haveMatch_on_servingPage = true;
          }

          if (!haveMatch_on_servingPage) {
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
            console.log('No match for servingPage to refresh page ***** 20191122-1949');
          }

          function refreshRecord_Sucess(result) {
            $rootScope.$broadcast('TimeLog_Index_Refresh', result);
          }

          function refreshRecord_Error(result) {
            console.error(result);
          } // Refactor [20191120-0438] - End

        }, function (error) {
          var test2 = error;
          console.log(error);
          toastr.error("Failed to save record.");
          toastr.warning("Error posted to console.");
          $scope.feedbackToUserClassNameCase = 2;
          $scope.feedbackToUserText = error.data;
        });
      }
    };

    $scope.cancelForm = function () {
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss();
    }; //$scope.getDisciplines = function (lookupValue) {
    //    if (lookupValue === null) lookupValue = "";
    //    var deferred = $q.defer();
    //    $http({
    //        method: 'GET',
    //        url: 'api/DisciplineAPI'
    //    }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
    //    return deferred.promise;
    //    function typeaheadDisciplineSuccess(response) {
    //        var addresses = [];
    //        angular.forEach(response.data,
    //            function (item) {
    //                if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
    //                    addresses.push({ id: item.disciplineId, title: item.disciplineShort });
    //                }
    //            }
    //        );
    //        deferred.resolve(addresses);
    //    }
    //    function typeaheadDisciplineError(response) {
    //        deferred.reject(response);
    //    }
    //};

  }]);
  return {
    timesheetApp: timesheetApp
  };
}();



/***/ }),

/***/ "./Timesheet/Timesheet_main_timesheetOnly.ts":
/*!***************************************************!*\
  !*** ./Timesheet/Timesheet_main_timesheetOnly.ts ***!
  \***************************************************/
/*! exports provided: doSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetup", function() { return doSetup; });
/* harmony import */ var _TimesheetApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetApp */ "./Timesheet/TimesheetApp.ts");
/* harmony import */ var _TimesheetController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimesheetController */ "./Timesheet/TimesheetController.ts");
/* harmony import */ var _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timesheetcontinuecontroller */ "./Timesheet/timesheetcontinuecontroller.ts");
/* harmony import */ var _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheetclockoutcontroller */ "./Timesheet/timesheetclockoutcontroller.ts");
/* harmony import */ var _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Timesheet/TimesheetEditController */ "./Timesheet/TimesheetEditController.ts");
/* harmony import */ var _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimelogLinkOtions/TimelogLinkOptions */ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.ts");
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only



 // 11/16/2019 04:57 pm - SSN - [20191116-1516] - [004] - Timelog edit (AngularJS client version)




var doSetup = function doSetup(ngApplicationName) {
  // 11/21/2019 06:45 am - SSN - [20191121-0503] - [007] - Timelog edit options on project search
  _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_5__["TimelogLinkOptions"].doSetup(ngApplicationName);
  _TimesheetController__WEBPACK_IMPORTED_MODULE_1__["timesheetController_instance"].timesheetApp_TimesheetController;
  _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_2__["timesheetContinueController_instance"].timesheetApp;
  _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_3__["timesheetClockoutController_instance"].timesheetApp;
  _TimesheetApp__WEBPACK_IMPORTED_MODULE_0__["timesheetApp_instance"].timesheetApp;
  _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_4__["timesheetEditController_instance"].timesheetApp;
};



/***/ }),

/***/ "./Timesheet/timesheetclockoutcontroller.ts":
/*!**************************************************!*\
  !*** ./Timesheet/timesheetclockoutcontroller.ts ***!
  \**************************************************/
/*! exports provided: timesheetClockoutController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetClockoutController_instance", function() { return timesheetClockoutController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.ts");
// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 05/19/2019 12:18 pm - SSN - [20190519-1132] - [003] - Address definitely typed errors
// 09/21/2019 11:52 am  - SSN - Upgrading to use Babel/WWebpack




var timesheetClockoutController_instance = function () {
  // 05/19/2019 10:06 am - SSN - [20190519-0837] - [006] - Adding timesheet "Continue" option
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetClockOutController', "timesheetApp"); // 11/16/2019 02:52 pm - SSN - [20191116-1419] - [003] - Add RowVersion  to Timelog.
  // Inject changeMonitorService
  // 11/20/2019 04:43 am - SSN - [20191120-0429] - [003] - Timelog index clock-out refresh updated row
  // Inject PageUpdaterService
  // 11/25/2019 06:39 pm - SSN - [20191125-1803] - [003] - clock-out is not updating index row
  // Added servingPage

  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', 'servingPage', function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService, servingPage) {
    // 11/16/2019 03:08 pm - SSN - [20191116-1419] - [004] - Add RowVersion  to Timelog.
    changeMonitorService.setupMonitor(); // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
    // $scope.timeLog = dataService.getTimelog($routeParams.id);
    // $scope.timeLog = dataService.getTimelog(timelogId);

    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch); // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
    // Add pageTitle

    $scope.pageTitle = "Clock-out"; // 11/16/2019 02:48 pm - SSN - [20191116-1419] - [002] - Add RowVersion  to Timelog.
    // Copied from TimesheetContinueController

    $scope.feedbackToUserText = "";
    $scope.feedbackToUserClassNameCase = "";

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

    function getTimelogSuccess(data) {
      var timeNow = new Date();
      timeNow.setMilliseconds(0); // timeNow.setSeconds(0);

      data.stopTime = timeNow;
      var data2 = data;
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data2);
      $scope.timeLog = data2;
      $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog);
    }

    function getTimelogError(data) {
      console.error('timesheetClockOutController - 20190922-1426');
      console.log(data);
      toastr.warning("Error posted to console. (0307)");
    }

    function getTimelogCatch(data) {
      console.error('timesheetClockOutController - 20190922-1427');
      console.log(data);
      toastr.warning("Error posted to console. (0306)");
    }

    $scope.submitForm = function () {
      $scope.feedbackToUserText = "";
      $scope.feedbackToUserClassNameCase = "";
      var test = $scope.editableTimeLog;
      var promise = null;

      if ($scope.editableTimeLog.stopTime) {
        $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
      }

      if ($scope.editableTimeLog.timeLogId === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        promise.then(function (data) {
          var test1 = data;
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
          $uibModalInstance.close();
          toastr.info("Clocked-out");
          console.log('timesheetClockoutController - 20191120-0423 - timelog_index update [', $scope.editableTimeLog.timeLogId, ']'); // 11/25/2019 06:38 pm - SSN - [20191125-1803] - [002] - clock-out is not updating index row
          // Added servingPage

          PageUpdaterService.timelog_index($scope.editableTimeLog.timeLogId, servingPage);
        }, function (error) {
          var test2 = error;
          console.log(error);
          toastr.error("Failed to save record.");
          toastr.warning("Error posted to console.");
          $scope.feedbackToUserClassNameCase = 2;
          $scope.feedbackToUserText = error.data;
          return;
        });
      }
    };

    $scope.cancelForm = function () {
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss(); //same as cancel???
    };
  }]);
  return {
    timesheetApp: timesheetApp
  };
}();



/***/ }),

/***/ "./Timesheet/timesheetcontinuecontroller.ts":
/*!**************************************************!*\
  !*** ./Timesheet/timesheetcontinuecontroller.ts ***!
  \**************************************************/
/*! exports provided: timesheetContinueController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetContinueController_instance", function() { return timesheetContinueController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.ts");
// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.



var ngApplicationName = "timesheetApp";

var timesheetContinueController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetContinueController', ngApplicationName); // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

  console.log('Adding ChangeMonitorService');
  timesheetApp.controller('TimesheetContinueController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'timelogId', 'changeMonitorService', function ($scope, $uibModalInstance, $http, $q, dataService, $timeout, timelogId, changeMonitorService) {
    changeMonitorService.setupMonitor();
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch);
    $scope.pageTitle = "Continue / Line Item"; // 09/28/2019 03:59 pm - SSN - [20190928-1256] - [010] - Adding Entity Framework model attribute

    $scope.feedbackToUserText = "";
    $scope.feedbackToUserClassNameCase = "";
    $scope.versionForHTMLRefresh = "15";

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

    function getTimelogSuccess(data) {
      var data2 = data;
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data2);
      var timeNow = new Date();
      timeNow.setMilliseconds(0);
      $scope.timeLog = data2; // 05/19/2019 02:41 pm - SSN - [20190519-1412] - [003] - Continue work on adding continue option for timesheet record
      // set TimeLogId = 0

      $scope.timeLog.timeLogId = 0;
      $scope.timeLog.startTime = timeNow; // 07/02/2019 09:17 am - SSN - Added nullify dateModified 

      $scope.timeLog.dateModified = null; // 05/21/2019 07:31 am - SSN - Forgotten

      $scope.timeLog.totalSeconds = null;
      $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog);
      setTimeout(function () {
        $scope.getDisciplines(data2.discipline.disciplineShort);
        $scope.disciplineSelected = {
          id: data2.discipline.disciplineId,
          title: data2.discipline.disciplineShort
        };
      }, 500);
    }

    function getTimelogError(data) {
      var temp = data;
    }

    function getTimelogCatch(data) {
      var temp = data;
    }

    $scope.submitForm = function () {
      console.log('timesheetContinueController - submitForm - (101)');
      var test = $scope.editableTimeLog;
      var promise = null;

      if ($scope.editableTimeLog.timeLogId === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        // 05/21/2019 11:56 am - SSN - Tested OK.
        promise.then(function (data) {
          var test1 = data;
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
          $uibModalInstance.close(true);
          toastr.info("Record added.  Reloading page..."); // 05/21/2019 12:54 pm - SSN - Reload page.

          $timeout(function () {
            location.reload();
          }, 1000);
        }, function (error) {
          console.log(error); // 09/28/2019 03:57 pm - SSN - [20190928-1256] - [009] - Adding Entity Framework model attribute
          // $uibModalInstance.close();

          toastr.error("Failed to add record. See console log.");
          $scope.feedbackToUserClassNameCase = 2;
          $scope.feedbackToUserText = error.data;
        });
      }
    };

    $scope.cancelForm = function () {
      // 11/14/2019 05:09 pm - SSN - [20191114-1459] - [010] - ChangeMonitroService
      // changeMonitorService
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss(false); //same as cancel???
    };

    $scope.getDisciplines = function (lookupValue) {
      if (lookupValue === null) lookupValue = "";
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'api/DisciplineAPI'
      }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
      return deferred.promise;

      function typeaheadDisciplineSuccess(response) {
        var addresses = [];
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
  }]);
  return {
    timesheetApp: timesheetApp
  };
}();



/***/ }),

/***/ "./Util/ChangeMonitor/ChangeMonitor.ts":
/*!*********************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitor.ts ***!
  \*********************************************/
/*! exports provided: ChangeMonitor_Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMonitor_Util", function() { return ChangeMonitor_Util; });
/* harmony import */ var _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.ts");
// 11/09/2019 11:03 am - SSN - Created
// 11/18/2019 02:26 pm - SSN - Create class for haveChanges


var ChangeMonitor_Util = function () {
  var setItemChanged_ssn = function setItemChanged_ssn(ev) {
    _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = true;
  };

  var setItemToResetChangedFlag_ssn = function setItemToResetChangedFlag_ssn(ev) {
    _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
  }; // 11/09/2019 08:08 am - SSN - Added monitorChange_SSN


  var monitorChange_SSN = function monitorChange_SSN() {
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (x, y, z) {
      if (!bypassObject(z[y])) {
        z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }

      if (z[y].type) {
        if (z[y].type.toLowerCase() === "submit") {
          z[y].addEventListener('click', ChangeMonitor_Util.setItemToResetChangedFlag_ssn);
        }
      }
    });
    var textareas = document.querySelectorAll('textarea');
    textareas.forEach(function (x, y, z) {
      if (!bypassObject(z[y])) {
        z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }
    });
    var selects = document.querySelectorAll('select');
    selects.forEach(function (x, y, z) {
      if (!bypassObject(z[y])) {
        z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }
    });
  };

  var bypassObject = function bypassObject(obj1) {
    if (obj1.type) {
      if (obj1.type.toLowerCase() === 'hidden' || obj1.type.toLowerCase() === 'submit') {
        return true;
      }
    } // 11/25/2019 02:27 pm - SSN - Added


    if (obj1.noChangeMonitor) {
      return true;
    }

    if (!obj1.id && !obj1.name) return true;
    if (obj1.id.toLowerCase().indexOf('search') > -1) return true;
    if (obj1.name.toLowerCase().indexOf('search') > -1) return true;
    if (obj1.id.toLowerCase().indexOf('filter') > -1) return true;
    if (obj1.name.toLowerCase().indexOf('filter') > -1) return true;
    return false;
  };

  var setupMonitor_v01 = function setupMonitor_v01() {
    console.log('ChangeMonitor - setupMonitor');
    var isChrome = getBrowserName() === 'chrome';

    if (true) {
      console.log('site - beforeUnload on');

      if (isChrome) {
        window.addEventListener("beforeunload", function (e) {
          if (!_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges) return;
          var confirmationMessage = "\o/";
          (e || window.event).returnValue = confirmationMessage; //Gecko + IE

          return "You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
        });
      } // Cannot use with Chrome


      if (!isChrome) {
        window.onbeforeunload = function (e) {
          if (!_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges) return;
          var confirmationMessage = "\o/";
          (e || window.event).returnValue = confirmationMessage; //Gecko + IE

          return "(2) You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
        };
      }
    }
  }; // 11/05/20191 04:53 am - SSN 
  // Need to prevent users from navigating away from Angular based pages with pending changes.
  // https://stackoverflow.com/questions/48182912/how-to-detect-browser-with-angular


  var getBrowserName = function getBrowserName() {
    var agent = window.navigator.userAgent.toLowerCase();

    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';

      case agent.indexOf('opr') > -1 && !!window.opr:
        return 'opera';

      case agent.indexOf('chrome') > -1 && !!window.chrome:
        return 'chrome';

      case agent.indexOf('trident') > -1:
        return 'ie';

      case agent.indexOf('firefox') > -1:
        return 'firefox';

      case agent.indexOf('safari') > -1:
        return 'safari';

      default:
        return 'other';
    }
  }; // Needed so we can call from popups.


  var setupMonitor_FullProcess = function setupMonitor_FullProcess() {
    setTimeout(monitorChange_SSN, 2000);
    setupMonitor_v01();
  };

  return {
    setupMonitor_v01: setupMonitor_v01,
    getBrowserName: getBrowserName,
    monitorChange_SSN: monitorChange_SSN,
    setItemChanged_ssn: setItemChanged_ssn,
    setItemToResetChangedFlag_ssn: setItemToResetChangedFlag_ssn,
    setupMonitor_FullProcess: setupMonitor_FullProcess
  };
}();

$(function () {
  ChangeMonitor_Util.setupMonitor_FullProcess();
});
console.log('ChangeMonitor - 20191109-1114-F');


/***/ }),

/***/ "./Util/ChangeMonitor/ChangeMonitorFlag.ts":
/*!*************************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitorFlag.ts ***!
  \*************************************************/
/*! exports provided: ChangeMonitorFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMonitorFlag", function() { return ChangeMonitorFlag; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


// 11/18/2019 03:18 pm - SSN - Moved from ChangeMonitor.ts
var ChangeMonitorFlag_class =
/** @class */
function () {
  function ChangeMonitorFlag_class() {}

  Object.defineProperty(ChangeMonitorFlag_class.prototype, "haveChanges", {
    get: function get() {
      console.log('ChangeMonitorFlag.ts - getter ');
      var _haveChanges = window["haveChanges_GLOBAL"];
      console.log("typeof (_haveChanges) ", _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(_haveChanges));

      if (typeof _haveChanges === 'undefined') {
        console.log("ChangeMonitorFlag - Setting default value ");
        console.log("ChangeMonitorFlag - Setting default value ");
        console.log("ChangeMonitorFlag - Setting default value ");
        console.log("ChangeMonitorFlag - Setting default value ");
        console.log("ChangeMonitorFlag - Setting default value ");
        _haveChanges = false;
      }

      console.log('_haveChanges : [', _haveChanges, ']');
      return _haveChanges;
    },
    set: function set(_haveChanges) {
      window["haveChanges_GLOBAL"] = _haveChanges;
      console.log('ChangeMonitorFlag.ts - setter ', _haveChanges);
    },
    enumerable: true,
    configurable: true
  });
  return ChangeMonitorFlag_class;
}();

var ChangeMonitorFlag = new ChangeMonitorFlag_class();


/***/ }),

/***/ "./Util/ChangeMonitor/ChangeMonitorService.ts":
/*!****************************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitorService.ts ***!
  \****************************************************/
/*! exports provided: changeMonitorService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMonitorService_instance", function() { return changeMonitorService_instance; });
/* harmony import */ var _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.ts");
/* harmony import */ var _ChangeMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeMonitor */ "./Util/ChangeMonitor/ChangeMonitor.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./globals.ts");
// 11/14/2019 02:59 pm - SSN - [20191114-1459] - [001] - ChangeMonitroService



console.log('ChangeMonitorService  - 20191114-1505 - top ');

var changeMonitorService_instance = function () {
  console.log('ChangeMonitorService  - 20191114-1505 - top DOSETUP');

  var doSetup = function doSetup(currentApplication) {
    console.log('ChangeMonitorService  - 20191114-1505 - top   IN    DOSETUP');
    var ssn_ChangeMonitorService_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance_v002('ChangeMonitorService', currentApplication);
    ssn_ChangeMonitorService_module.factory("changeMonitorService", ['$http', '$q', function ($http, $q) {
      console.log('changeMonitorService factory - 20191116-1348 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

      var _setupMonitor = function _setupMonitor() {
        console.log("Inomplete Testing setupMonitor plugged in");
        _ChangeMonitor__WEBPACK_IMPORTED_MODULE_1__["ChangeMonitor_Util"].setupMonitor_FullProcess();
      };

      var _getHaveChanges = function _getHaveChanges() {
        return _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges;
      };

      var _reset = function _reset() {
        _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
      };

      var _doSetHaveChange = function _doSetHaveChange(setting) {
        _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = setting;
      };

      return {
        setupMonitor: _setupMonitor,
        getHaveChanges: _getHaveChanges,
        reset: _reset,
        doSetHaveChange: _doSetHaveChange
      };
    }]);
  };

  return {
    doSetup: doSetup
  };
}();


console.log('ChangeMonitorService  - 20191114-1505 - bottom ');

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
  var headerWithSort_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('HeaderWithSort', "timesheetApp");
  headerWithSort_angular_module.controller('utilityController', ['$scope', '$sce', 'dataService', function ($scope, $sce, dataService) {}]);
  headerWithSort_angular_module.directive('headerWithSort', ['$sce', function ($sce) {
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

        scope.displayArrow = function () {
          ////////////////////////////////////////////xxxxxx      console.log("headerWithSort - 20191110-0749 - [", this.columnlist.desc, "]", this.columnlist.columnName,  Date());
          switch (this.columnlist.desc) {
            case true:
              return $sce.trustAsHtml("&#9650;");
              break;

            case false:
              return $sce.trustAsHtml("&#9660;");
              break;

            default:
              return "";
          }
        };
      }
    };
  }]);
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
  var app = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('JobStatusDisplayDirective', 'timesheetApp');
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

/***/ "./Util/PageUpdater.ts":
/*!*****************************!*\
  !*** ./Util/PageUpdater.ts ***!
  \*****************************/
/*! exports provided: PageUpdater_Instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUpdater_Instance", function() { return PageUpdater_Instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
 // 11/20/2019 04:29 am - SSN - [20191120-0429] - [001] - Timelog index clock-out refresh updated row
// Refactor [20191120-0438]

var PageUpdater_Instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var pageUpdater_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('PageUpdater', currentApplication);
    pageUpdater_Module.factory('PageUpdaterService', ['$rootScope', 'dataService', function ($rootScope, dataService) {
      // 11/21/2019 06:28 am - SSN - [20191121-0503] - [005] - Timelog edit options on project search
      // Adding servingPage
      var _timelog_index = function _timelog_index(id_temp, servingPage) {
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
        console.log('PageUpdater - timelog_index - 002 ');

        function refreshRecord_Sucess(result) {
          console.log('PageUpdater - timelog_index - 003 ');
          console.log(result);
          $rootScope.$broadcast('TimeLog_Index_Refresh', result);
        }

        function refreshRecord_Error(result) {
          console.error(result);
        }
      };

      return {
        timelog_index: _timelog_index
      };
    }]);
  };

  return {
    doSetup: doSetup
  };
}();


console.log('PageUpdater - Loaded');

/***/ }),

/***/ "./Util/RestorePreviousPageState.ts":
/*!******************************************!*\
  !*** ./Util/RestorePreviousPageState.ts ***!
  \******************************************/
/*! exports provided: RestorePreviousPageState_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePreviousPageState_instance", function() { return RestorePreviousPageState_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 11/22/2019 09:41 pm - SSN - Created to restore page on hitting the back button or recalling the page.


var RestorePreviousPageState_instance = function () {
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx Top - setup???');

  var doSetup = function doSetup(ngDefaultApplication) {
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx - Setup - ngDefaultApplication [', ngDefaultApplication, ']');
    console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx - Setup - directive???');
    var angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('RestorePreviousPageState', ngDefaultApplication);
    angular_module.controller('restorePreviousPageAndTaskQueueController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {}]);
    angular_module.directive('restorePreviousPageStateAndTaskQueue', function () {
      //    $rootScope.$broadcast('site_Task_Queue_List', result);
      console.log('RestorePreviousPageState -  directive  ***********************');
      var alreadyPosted = false; //var controller = function ($http, $q, $scope) {
      //};

      $(function () {
        window.addEventListener('click', function (e) {
          saveUrl(e);
        });
        window.addEventListener('beforeunload', function (e) {
          saveUrl(e);
        });
        setTimeout(restorePos, 300);
      });

      function getRelativePath() {
        // Source: https://stackoverflow.com/questions/4504686/get-relative-path-of-the-page-url-using-javascript
        return document.location.href.replace(/(.+\w\/)(.+)/, "/$2");
      }

      function saveUrl(e) {
        if (alreadyPosted) return;
        alreadyPosted = true;
        var URL_Track_Ref = get_URL_Track_Record(true);
        var elemInfo = {};

        if (e.screenX) {
          elemInfo = {
            clientX: e.clientX,
            clientY: e.clientY
          };
        }

        var posX = window.scrollX;
        var posY = window.scrollY;

        if (URL_Track_Ref.currentRecord == undefined) {
          URL_Track_Ref.currentRecord = {
            url: getRelativePath(),
            posX: posX,
            posY: posY,
            element: elemInfo
          };
          URL_Track_Ref.URL_Track.urls.push(URL_Track_Ref.currentRecord);
        } else {
          URL_Track_Ref.currentRecord.posX = posX;
          URL_Track_Ref.currentRecord.posY = posY;
          URL_Track_Ref.currentRecord.element = elemInfo;
          URL_Track_Ref.URL_Track.urls[URL_Track_Ref.currentIndex] = URL_Track_Ref.currentRecord;
        }

        window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
      }

      function get_URL_Track_Record(createIfNotFound) {
        if (createIfNotFound === void 0) {
          createIfNotFound = false;
        }

        var URL_Track_temp = window.localStorage.getItem('URL_Track');

        if (URL_Track_temp == undefined) {
          if (!createIfNotFound) return null;
          URL_Track_temp = '{"urls":[]}';
        }

        var URL_Track = JSON.parse(URL_Track_temp);
        var url = getRelativePath();
        var currentRecord = undefined;
        var currentIndex = -1;

        for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
          if (URL_Track.urls[currentIndex].url == url) {
            currentRecord = URL_Track.urls[currentIndex];
            break;
          }
        }

        return {
          currentRecord: currentRecord,
          URL_Track: URL_Track,
          currentIndex: currentIndex
        };
      }

      function restorePos() {
        console.log('RestorePreviousPageState -  restorePos  ***********************  101 ');
        var URL_Track_Ref = get_URL_Track_Record();
        console.log('RestorePreviousPageState -  restorePos  ***********************  102 ');
        console.log('URL_Track_Ref');
        console.log(URL_Track_Ref);
        if (!URL_Track_Ref) return;
        console.log('RestorePreviousPageState -  restorePos  ***********************  103 ');
        if (!URL_Track_Ref.currentRecord) return;
        console.log('RestorePreviousPageState -  restorePos  ***********************  104 ');
        var currentRecord = URL_Track_Ref.currentRecord;

        if (currentRecord) {
          window.scrollTo({
            top: currentRecord.posY,
            left: currentRecord.posX,
            behavior: 'smooth'
          });
          setTimeout(function () {
            highlightClickSource();
          }, 1000); //  URL_Track.urls.splice(currentIndex);
          //   window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track));
        }
      }

      function highlightClickSource() {
        console.log('RestorePreviousPageState -  highlightClickSource  ***********************');
        var URL_Track_Ref = get_URL_Track_Record();
        if (!URL_Track_Ref) return;
        if (!URL_Track_Ref.currentRecord) return;
        var currentRecord = URL_Track_Ref.currentRecord;
        console.log("xxxxxxxxxxxxx-00000");

        if (currentRecord) {
          console.log("xxxxxxxxxxxxx-001");

          if (currentRecord.element) {
            console.log("xxxxxxxxxxxxx-002");

            if (currentRecord.element.clientX) {
              console.log("xxxxxxxxxxxxx-003");
              var x = currentRecord.element.clientX;
              var y = currentRecord.element.clientY;
              console.log("xxxxxxxxxxxxx-004 [", x, "] [", y, "]");
              var selectedElement = document.elementFromPoint(x, y);
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log(selectedElement);

              if (selectedElement && selectedElement.attributes) {
                var bypass = true;

                if ("A ".toUpperCase().indexOf(selectedElement.nodeName.toUpperCase()) > -1) {
                  bypass = false;
                }

                console.log("Node Name", selectedElement.nodeName);
                console.log("Node type", selectedElement.nodeType);
                console.log(selectedElement.attributes);

                for (var x_1 = 0; x_1 < selectedElement.attributes.length; x_1++) {
                  if (selectedElement.attributes[x_1].name === "ng-click") {
                    console.log('have ng-click ****************************');
                    console.log('have ng-click ****************************');
                    console.log('have ng-click ****************************');
                    console.log('have ng-click ****************************');
                  }

                  if (selectedElement.attributes[x_1].name === "href") {
                    console.log('have href ****************************');
                    console.log('have href ****************************');
                    console.log('have href ****************************');
                    console.log('have href ****************************');
                  }
                }

                if (!bypass) {
                  var spanTemp_1 = $('<span></span>').prependTo(selectedElement);
                  $(spanTemp_1).text($(selectedElement).text());
                  $(spanTemp_1).addClass('cssHilight101');
                  setTimeout(function () {
                    removeAddedClass(spanTemp_1);
                  }, 2000);
                }
              }
            }
          }

          setTimeout(function () {
            console.log('RestorePreviousPageState - Removing current reocrd... 101');
            console.log('************ Count 2');
            console.log('************ Count');
            console.log(URL_Track_Ref.URL_Track.urls.length);
            setTimeout(function () {
              URL_Track_Ref.URL_Track.urls.splice(URL_Track_Ref.currentIndex);
              window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
              console.log('************ Count 222');
              console.log('************ Count');
              console.log(URL_Track_Ref.URL_Track.urls.length);
            }, 2000);
          }, 2000);
        }
      }

      function removeAddedClass(objRef) {
        $(objRef).remove();
      }

      return {
        restrict: "E",
        templateUrl: "/js/util/RestorePreviousPageState.html",
        link: function link(scope, el, attrs) {}
      };
    });
  };

  return {
    doSetup: doSetup
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
  var pagingDirective_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('pagingDirective', "timesheetApp");
  pagingDirective_angular_module.controller('utilityController', ['$scope', 'dataService', function ($scope, dataService) {}]);
  pagingDirective_angular_module.directive('pagingDirective', ['$timeout', function ($timeout) {
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
  }]);
  return {
    pagingDirective_angular_module: pagingDirective_angular_module
  };
}();



/***/ }),

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
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

/***/ "./jobs/JobStatusChangeRecord.ts":
/*!***************************************!*\
  !*** ./jobs/JobStatusChangeRecord.ts ***!
  \***************************************/
/*! exports provided: jobStatusChangeRecord_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusChangeRecord_instance", function() { return jobStatusChangeRecord_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
// 11/14/2019 07:31 pm - SSN - [20191114-1931] - [001] - Job - option to change job status


var jobStatusChangeRecord_instance = function () {
  var angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('JobstatusChangedRecord', "timesheetApp");
  angular_Module.directive('jobStatusChangeRecord', function () {
    var parentTable = null;
    return {
      templateUrl: '/js/Jobs/jobStatusChangeRecord.html',
      scope: {
        actionLink: '@',
        optionLabel: '@'
      },
      link: function link(scope, el, attrs) {
        if (parentTable == null) {
          parentTable = el.parents('table');
        }

        var parentWidth = parentTable.width() - 20; //  jobStatusChangeRecord_on padding

        el.find('.jobStatusChangeRecord_on').css({
          'width': parentWidth + 'px'
        });
      },
      controller: function controller($scope) {
        $scope.displayContent = false;

        $scope.showContent = function () {
          $scope.displayContent = !$scope.displayContent;
        };

        $scope.getWindowName = function () {
          var windowName = this.actionLink.trim();
          var windowName1 = windowName.replace(/[^a-z|^0-9]*/ig, '');
          return windowName1;
        };
      }
    };
  });
  return {
    angular_Module: angular_Module
  };
}();



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
  var Job_Status_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('JobStatusDirective', "timesheetApp");
  Job_Status_Angular_Module.controller("utilityController", ['$scope', 'dataService', function ($scope, dataService) {}]);
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
/* harmony import */ var _JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobStatusChangeRecord */ "./jobs/JobStatusChangeRecord.ts");
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.ts");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.ts");
/* harmony import */ var _Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Projects/ProjectsIndex */ "./Projects/ProjectsIndex.ts");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.ts");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.ts");
/* harmony import */ var _Timesheet_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Timesheet/Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.ts");
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index




 // 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 







var ngApplicationName = "timesheetApp"; // 11/23/2019 09:07 pm - SSN 
// 11/25/2019 04:40 pm - SSN - [20191125-1414] - [007] - Project jobs - filter 
// Moved to top.  Directive is not loading???

_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__["RestorePreviousPageState_instance"].doSetup(ngApplicationName); // 11/22/2019 09:06 pm - SSN - [20191121-0503] - [023] - Timelog edit options on project search

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__["dropdownListDirective_instance"].doSetup(ngApplicationName); // 11/21/2019 08:18 am - SSN - [20191121-0503] - [009] - Timelog edit options on project search

_Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__["changeMonitorService_instance"].doSetup(ngApplicationName); // 11/22/2019 01:48 pm - SSN - [20191121-0503] - [013] - Timelog edit options on project search

_Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_8__["ProjectIndexController_instance"].doSetup(ngApplicationName);
_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName);
_Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__["jobsIndexController_instance"].Jobs_Angular_Module;
_Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__["headerWithSort_instance"].headerWithSort_angular_module;
_Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__["pagingDirective_instance"].pagingDirective_angular_module;
_JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__["jobStatusDirective_instance"].Job_Status_Angular_Module;
_JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_5__["jobStatusChangeRecord_instance"].angular_Module;
_Util_PageUpdater__WEBPACK_IMPORTED_MODULE_7__["PageUpdater_Instance"].doSetup(ngApplicationName); // 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only


_Timesheet_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_11__["doSetup"](ngApplicationName);

/***/ }),

/***/ "./site.ts":
/*!*****************!*\
  !*** ./site.ts ***!
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
var d1 = new Date();
console.log('site - 20191115-1740 - AAAA ', d1); //08/23/2018 01:24 am - SSN
// 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
// var site_instance = function () {

var site_instance_NS;

(function (site_instance_NS) {
  var site_Class =
  /** @class */
  function () {
    function site_Class() {
      // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - Begin
      // Source https://www.c-sharpcorner.com/UploadFile/1d3119/date-serialization-with-angular-js-web-api/
      this.iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/; //$(function () {
      //    setDefaults();
      //    // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
      //    // 09/10/2019 08:53 pm - SSN - Replaced
      //    // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.
      //    setTimeout(prefixPreWithShowHideAnchor, 2000);
      //});
      //return {
      //    fnConverDate: fnConverDate,
      //    showCollapsedDivs: showCollapsedDivs,
      //    prefixPreWithShowHideAnchor: prefixPreWithShowHideAnchor
      //};
      //}();
    } // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack


    site_Class.prototype.setDefaults = function () {
      $("[cmd-name]").on('click', function (e) {
        var cmdName = $(this).attr('cmd-name');
        var popupName = $(this).attr('popup-name');
        var jQueryObjectName = $(this).attr('jQueryObjectName');
        var jQueryObjectName2 = $(this).attr('jQueryObjectName2'); //      alert('clicked me! cmdName [' + cmdName + "] popup-name  [" + popupName + "]");

        console.log('cmd-name', cmdName, 'popupName', popupName, 'jQueryObjectName ', jQueryObjectName, 'jQueryObjectName2', jQueryObjectName2);

        if (cmdName === "open-popup") {
          console.log('exec cmdName ', cmdName);
          $(popupName).modal({
            backdrop: 'static',
            keyboard: false
          });
          $("#addSite_PageContent").load("/times/start");
        } // 03/14/2019 09:33 am - SSN - Adding hide and show


        if (cmdName === "hideObject") {
          console.log('exec cmdName ', cmdName, 'jQueryObjectName', jQueryObjectName);
          $(jQueryObjectName).hide();
        }

        if (cmdName === "showObject") {
          console.log('exec cmdName ', cmdName, 'jQueryObjectName', jQueryObjectName);
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
      }); // 11/02/2019 07:25 pm - SSN - [20191101-0526] - [013] - Check login status
      // Did not finish.
      // Todo-SSN

      $('.modal').on('show', function () {
        console.log('site.ts  -  20191102-1930 - Setting draggable.');
        $(this).draggable({
          handle: ".modal-header"
        });
      });
    };

    ; // 08/21/2019 01:48 pm 
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function showCollapsedDivs() {

    site_Class.prototype.showCollapsedDivs = function () {
      $("[data-toggle='collapse']").trigger('click');
    }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function prefixPreWithShowHideAnchor() {


    site_Class.prototype.prefixPreWithShowHideAnchor = function () {
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
      }); // 11/24/2019 11:20 pm - SSN - Disable

      if (false) { var list1; } // 04/26/2019 10:14 pm - SSN - [20190426-2156] - [002] - Hide pre and add a link to show.


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
      }); // 11/08/2019 01:04 pm - SSN - [20191108-1043] - [008] - Persisting search on return to index
      // 

      $('[ssn-cmd=returnToCallerLink]').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        var returnToCallerKey = $("#returnToCallerKey").val();
        document.location.href = e.target.href + "&returnToCallerKey=" + returnToCallerKey;
      });
    }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function fnConverDate(input) {


    site_Class.prototype.fnConverDate = function (input) {
      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(input) !== "object") return input;

      for (var key in input) {
        if (!input.hasOwnProperty(key)) continue;
        var value = input[key];

        var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value);

        var match;

        if (type === 'string' && (match = value.match(this.iso8601RegEx))) {
          input[key] = new Date(value);
        } else if (type === "object") {
          this.fnConverDate(value);
        }
      }
    };

    site_Class.loadCounter = 0;
    return site_Class;
  }();

  site_instance_NS.site_Class = site_Class;
})(site_instance_NS || (site_instance_NS = {})); //export { site_instance };


var site_instance = new site_instance_NS.site_Class();

$(function () {
  site_instance.setDefaults(); // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
  // 09/10/2019 08:53 pm - SSN - Replaced
  // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.

  setTimeout(site_instance.prefixPreWithShowHideAnchor, 2000);
});
var d2 = new Date();
site_instance_NS.site_Class.loadCounter++;
console.log('site - 20191115-1740 - xxxxxxxxxxx');
console.log(site_instance_NS.site_Class.loadCounter);
console.log(d2); // 11/25/2019 02:37 pm - SSN - [20191125-1414] - [003] - Project jobs - filter 
// https://stackoverflow.com/questions/6361465/how-to-check-if-click-event-is-already-bound-jquery

$.fn.isBound = function (type, fn) {
  console.log('fn.isBound-0245');
  console.log('this');
  console.log(this);
  console.log("this.data('events')");
  console.log(this.data('events'));

  if (!this.data('events')) {
    console.log("undefined <<<<<<<<<<");
    return false;
  }

  var data = this.data('events')[type];

  if (data === undefined || data.length === 0) {
    return false;
  }

  return -1 !== $.inArray(fn, data);
}; // 11/25/2019 02:29 pm - SSN - [20191125-1414] - [002] - Project jobs - filter 


console.log('site - project_jobs - filter');

function Job_Timelog_setFilter() {
  console.log('site - project_jobs - filter - 333 ');

  if ($("#filterText").isBound('keyup', Job_Timelog_setFilter)) {
    console.log("Already bound");
    return;
  }

  $("#filterText").on('keyup', function (e) {
    console.log('project_jobs - fitlerText');
    console.log(e);
  });
}

$(function () {
  console.log('site - project_jobs - filter - 2');
  Job_Timelog_setFilter();
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vUHJvamVjdHMvUHJvamVjdHNJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5LnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvSGVhZGVyV2l0aFNvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9Kb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9wYWdpbmdEaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0NoYW5nZVJlY29yZC50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYnNJbmRleF9tYWluLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0Is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QixDQUExQyxFQUE2QztBQUN6QyxXQUFPLEtBQVA7QUFDSDs7QUFFRCxTQUFRLENBQUMsQ0FBRCxLQUFPLENBQUMsQ0FBQyxPQUFGLENBQVUsRUFBVixFQUFjLElBQWQsQ0FBZjtBQUNILENBdkJELEMsQ0EyQkE7OztBQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQVo7O0FBRUEsU0FBUyxxQkFBVCxHQUE4QjtBQUUxQixTQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaOztBQUdBLE1BQUksQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLGtDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVjQSx5QiIsImZpbGUiOiJidW5kbGVfam9ic0luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9hZGREZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVNlcnZpY2VzIC0gMjAxOTA5MzAtMTkwNyAtIGdldEpvYiBbXCIgKyBpZCArIFwiXVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMThdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgIHZhciBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL1Byb2plY3RBUEkvcmVmcmVzaHJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgcHJvamVjdCBzZWFyY2ggcmVjb3JkICBbMjAxOTExMjItMTYwOF0gWycgKyBpZCArICddIFsnICsgc2VydmluZ1BhZ2UgKyAnXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXZTaXRlczoga28ub2JzZXJ2YWJsZShfZGV2U2l0ZXMpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZXM6IF9nZXREZXZTaXRlcyxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDA5LzEzLzIwMTkgMDU6NDggYW0gLSBTU04gLSBbMjAxOTA5MTMtMDU0OF0gLSBbMDAxXSAtIENyYXRlIGdlbmVyaWMgZHJvcGRvd24gbGlzdCBkaXJlY3RpdmVcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6NTIgYW0gLSBTU04gLSBBZGRlZCBpbXBvcnQgYW5ndWxhclxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6MjEgYW0gLSBTU04gLSBSZXBsYWNlIGFuZ3VsYXIubW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5pbnRlcmZhY2UgTG9va3VwUmVjb3JkIHtcclxuICAgIGlkOiBudW1iZXJcclxufVxyXG5cclxuLy8gQWRkIGF1dG9mb2N1cz1cInRydWVcIiB0byBzZXQgZm9jdXNcclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICAvLy8vLyAgY29uc29sZS5sb2coXCJEcm9wZG93bkxpc3REaXJlY3RpdmUgLSAyMDE5MTExNi0wNTUxXCIpO1xyXG5cclxuICAgICAgICAvLy8vLyAgIGNvbnNvbGUubG9nKCdkZWZhdWx0QXBwTmFtZSB0eXBlIGFuZCBuYW1lIFsnLCB0eXBlb2YgKGRlZmF1bHRBcHBOYW1lKSwgJ10gWycsIGRlZmF1bHRBcHBOYW1lLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gTmVlZGVkIHRvIGJlIGFibGUgdG8gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgZm9ybTEgPSAkKFwiW25hbWU9J1wiICsgZm9ybU5hbWUgKyBcIiddXCIpLmdldCgwKTtcclxuICAgICAgICAgICAgdmFyIGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKS50cmltKCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMiA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBzdWJtaXRGb3JtXzJcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtXzEgPSBmdW5jdGlvbiAoZXZlbnQsIGZvcm0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHN1Ym1pdEZvcm1fMVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3ZhbGlkYXRlRHJvcGRvd25MaXN0RGlyZWN0aXZlJywgdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIG5nTW9kZWwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJGFzeW5jVmFsaWRhdG9ycy5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dENoZWNrMiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3REaXJlY3RpdmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gWyckaHR0cCcsICckcScsICckc2NvcGUnLCAnJHRpbWVvdXQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUsICR0aW1lb3V0LCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZpcnN0UnVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZtLmhpdENvdW50ID0gMDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA4OjI5IGFtIC0gU1NOIC0gQWRkaW5nIC0gTmVlZCB0byBpbml0aWFsIGZvciAkd2F0Y2ggdG8gd29yay5cclxuICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSBcIlwiO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZTogTG9va3VwUmVjb3JkLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZS4kZGlydHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5kb1NldEhhdmVDaGFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29sZFZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW1wiLCBvbGRWYWx1ZSwgXCJdXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3VmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbXCIsIG5ld1ZhbHVlLCBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgMVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmhpdENvdW50ICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGl0Y291bnQgXCIsIHZtLmhpdENvdW50KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5rZXlDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGtleUNvbHVtbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmRpc2NpcGxpbmVpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2NpcGxpbmVpZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmpvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsID0gJy9hcGkvam9iYXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA0OjQ2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYi5wcm9qZWN0aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsID0gJy9hcGkvcHJvamVjdGFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlDb2x1bW5WYWx1ZSA9ICQoXCJbbmFtZT0nXCIgKyB0aGlzLmtleUNvbHVtbiArIFwiJ11cIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlID0gKDk5OS1BKSAtIHRoaXMuYW5ndWxhckNvbnRyb2xJZCcsIHRoaXMuYW5ndWxhckNvbnRyb2xJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8gIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgPSAoOTk5LUIpIC0ga2V5Q29sdW1uVmFsdWUgWycsIGtleUNvbHVtblZhbHVlLCAnXScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFNldHRpbmcgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCIgZm9yICR3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5ndWxhckNvbnRyb2xJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVTZWxlY3RlZCA9IHRoaXMuYW5ndWxhckNvbnRyb2xJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gU2V0dGluZyB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIiBmb3IgJHdhdGNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiBrZXlDb2x1bW5WYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Q29sdW1uVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBrZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFNldHRpbmcgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCIgZm9yICR3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFh4eCBzZXQgZGVmYWx0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYeHggc2V0IGRlZmFsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWHh4IHNldCBkZWZhbHRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFh4eCBzZXQgZGVmYWx0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYeHggc2V0IGRlZmFsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudChrZXlWYWx1ZVNlbGVjdGVkKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcmUgd2UgZXZlciByZWFjaGluZyB0aGlzIHBvaW50P1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gKHh4eHh4MTAxLUIpIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggICAgWycsIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgsICddJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWQgPSB2bS5zZXRJbnB1dFZhcmlhYmxlcygpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBfaXNWYWxpZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKiBfaXNWYWxpZCcsIF9pc1ZhbGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnNldElucHV0VmFyaWFibGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgX2lzVmFsaWRfbG9jYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5ndWxhckNvbnRyb2xJZCAhPT0gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPSB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdGhpcy5rZXlDb2x1bW4gKyBcIiddXCIpLnZhbCh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQodGhpcy5hbmd1bGFyQ29udHJvbElkKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZF9sb2NhbCA9IHRoaXMuYW5ndWxhckNvbnRyb2xJZCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkX2xvY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gX2lzVmFsaWRfbG9jYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc1ZhbGlkQm9vbGVhbiAoMDUyMilcIiwgdm0uaXNWYWxpZEJvb2xlYW4pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaXNWYWxpZF9sb2NhbDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0udmFsaWRhdGVFbnRyeSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0IC0gdmFsaWRhdGVFbnRyeSAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldElucHV0VmFyaWFibGVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8gIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgLSAyMDE5MTExNy0xMDI1IC0gMTAyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwNTozMCBhbSAtIFNTTiAtIFsyMDE5MDkxNi0wMzU1XSAtIFswMDhdIC0gQWRkaW5nIEpvYkFQSSBjb250cm9sbGVyXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLyAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDMtQScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogZGF0YS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYW5ndWxhckNvbnRyb2xJZCA9IGRhdGEuZGlzY2lwbGluZUlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGFfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMy1CJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEudGFfaWQsIHRpdGxlOiBkYXRhLnRhX2Rlc2NyaXB0aW9uIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hbmd1bGFyQ29udHJvbElkID0gZGF0YS50YV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB2bS5BUElVcmxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDU6MTMgYW0gLSBTU04gLSBbMjAxOTA5MTYtMDM1NV0gLSBbMDA2XSAtIEFkZGluZyBKb2JBUEkgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoaWxlIGRldmVsb3BtZW50IGluIHByb2dyZXNzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0udGFfaWQsIHRpdGxlOiBpdGVtLnRhX2Rlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDI6NTcgYW0gLSBTU04gLSBBZGRlZCB0byBnZXQgY3VycmVudCB2YWx1ZSBhbmQgdXBkYXRlIHZpZXcuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQgPSBmdW5jdGlvbiAobG9va3VwSUQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGdldERpc2NpcGxpbmVDdXJyZW50IDExMTEgWycsIHZtLkFQSVVybCwgJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8vL2NvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBnZXREaXNjaXBsaW5lQ3VycmVudCAyMjIyIFsnLCBsb29rdXBJRCwgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cElEID09PSBudWxsKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB2bS5BUElVcmwgKyBcIi9cIiArIGxvb2t1cElEXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgdm0uaXNWYWxpZCgpOyB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgdm0uaXNSZWFkeSA9IHRydWU7IH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9Ecm9wZG93bkxpc3QvRHJvcERvd25MaXN0RGlyZWN0aXZlLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6IFwiPVwiLCAvLyBOZWVkZWQgZm9yIHBvc3RpbmcgZm9ybSAoUmVwbGFjaW5nIHVybClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJDb250cm9sSWQ6IFwiPT9hY2lcIlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA1OjI5IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTA1MjldIC0gWzAwMV0gLSBBdXRvZm9jdXNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmF1dG9mb2N1cykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNldGZvY3VzRnVuYyA9IGZ1bmN0aW9uIChlbGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmF1dG9mb2N1cy50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRPYmogPSBlbGVtLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKS5maWx0ZXIoJzp2aXNpYmxlOmZpcnN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0T2JqLnZhbCgpID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0T2JqLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRmb2N1c0Z1bmMoZWwpOyB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gMTEvMTYvMjAxOSAwNjowMiBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDVdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbiAgICAgICAgLy8gUmV2aXNlZCBzbyB3ZSBjYW4gcGFzcyBpbiBkZWZhdWx0IGFwcGxpY2F0aW9uIG5hbWUgZm9yIG1vZHVsZS5cclxuICAgICAgICAvLyAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlOiBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUsXHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBJQ29sdW1uQmFnIGZyb20gJy4uL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuaW1wb3J0IHsgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gXCIuLi9VdGlsL0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVcIjtcclxuXHJcbmpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2U7XHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNDo0MiBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDNdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBqb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgSm9ic19Bbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdKb2JJbmRleENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8yNy8yMDE5IDA5OjI0IGFtIC0gU1NOIC0gUGFzc2luZyBpbiBwcm9qZWN0SWRcclxuICAgIEpvYnNfQW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcignam9ic0luZGV4Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJyR0aW1lb3V0JywgJyRzY2UnLCAnJHVpYk1vZGFsJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCAkc2NlLCAkdWliTW9kYWwpIHtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5oYXNFcnJvcnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDA7XHJcbiAgICAgICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2VzID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zaG93T3JpZ2luYWxUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUudGFibGVUb3BJZEZvclNjcm9sbCA9IFwiam9iSW5kZXhUYWJsZUlEXCJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5oaWRlUHJvamVjdFRpdGxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgcWQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkgbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBpdGVtLnNwbGl0KFwiPVwiKSwgayA9IHNbMF0sIHYgPSBzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHNbMV0pOyAocWRba10gPSBxZFtrXSB8fCBbXSkucHVzaCh2KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzAzLzIwMTkgMTA6MTIgcG0gLSBTU04gLSBwYXJzZUludFxyXG4gICAgICAgICAgICAvLyAxMi8wNC8yMDE5IDA2OjI1IGFtIC0gU1NOIC0gQ2hhbmdlIGZyb20gbG9jYWwgdG8gJHNjb3BlXHJcbiAgICAgICAgICAgICRzY29wZS5wcm9qZWN0SWQgPSBwYXJzZUludChxZFsnaWQnXSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8wMy8yMDE5IDEwOjI1IHBtIC0gU1NOIC0gSGlkZSBwcm9qZWN0IHRpdGxlLlxyXG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2plY3RUaXRsZSA9ICRzY29wZS5wcm9qZWN0SWQgPiAwO1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMToxNSBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTBdIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyRzY29wZS5zcWxTdGF0c1JlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gIFNldHVwIGludGlhaWwgdmFsdWVzIGZvciBsaXN0XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gWzFdOyAvLyBvcGVuXHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnX2RlZmF1bHRzOiBJQ29sdW1uQmFnID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogJz8/Pz8nLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZVNlbGVjdGVkOiAnJywvLyBsZWF2ZSBibGFuay4gIExlbmd0aCBpcyB1c2VkIHRvIHNlbGVjdCBzZWxlY3RlZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogNCxcclxuICAgICAgICAgICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCI/Pz9cIixcclxuICAgICAgICAgICAgICAgIGpvYl9zdGF0dXNlc19zZWxlY3RlZDogWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRdLFxyXG4gICAgICAgICAgICAgICAgZmtfZmlsdGVyOiAkc2NvcGUucHJvamVjdElkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IF9maWVsZExpc3Q6IElDb2x1bW5CYWdbXSA9IFtcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAncHJvamVjdFRpdGxlX0ZvckFjdGl2aXR5JywgY2FwdGlvbjogJ1Byb2plY3QgVGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2pvYlRpdGxlJywgY2FwdGlvbjogJ0pvYiBUaXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnZGF0ZUFkZGVkJywgY2FwdGlvbjogJ0RhdGUgQWRkZWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2RhdGVVcGRhdGVkJywgY2FwdGlvbjogJ0RhdGUgVXBkYXRlZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnYWN0aXZpdHlBZ2UnLCBjYXB0aW9uOiAnQWN0aXZpdHkgQWdlJywgY29sdW1uTmFtZVNlbGVjdGVkOiAnYWN0aXZpdHlBZ2UnLCBkZXNjOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmhpZGVQcm9qZWN0VGl0bGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfZmllbGRMaXN0LnNwbGljZSgwLCAxKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q29sdW1uRW50cmllcyA9IF9maWVsZExpc3QuZmlsdGVyKHIgPT4gci5jb2x1bW5OYW1lU2VsZWN0ZWQubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbHVtbkVudHJpZXNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdENvbHVtbkVudHJpZXMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbHVtbkJhZyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0Q29sdW1uRW50cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5CYWcgPSBzZWxlY3RDb2x1bW5FbnRyaWVzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmllbGRzTGlzdCA9IF9maWVsZExpc3Q7XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9ic0xpc3QoY29sdW1uQmFnOiBJQ29sdW1uQmFnKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2JzKGNvbHVtbkJhZykudGhlbihnZXRKb2JzU3VjY2VzcywgZ2V0Sm9ic0Vycm9yKS5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0LmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZGVzYyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNFcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZXMgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlZWRiYWNrTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBkYXRhLmZlZWRiYWNrTWVzc2FnZXNbaV0uZXJyb3JNZXNzYWdlcy5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlcyArPSBkYXRhLmZlZWRiYWNrTWVzc2FnZXNbaV0uZXJyb3JNZXNzYWdlc1tpMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFiYWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JzOiBkYXRhLmRhdGFMaXN0LCBjb2x1bW46IGRhdGEuc3FsU3RhdHNSZWNvcmQuY29sdW1uTmFtZSwgZGVzYzogZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQgdG8gYW4gYXJyYXkuIFdlIGRvbid0IGhhdmUgYSBzZXR0ZXIgb24gYW4gaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSBkYXRhLnNxbFN0YXRzUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2x1bW5JbmRleCA9ICRzY29wZS5maWVsZHNMaXN0LmZpbmRJbmRleChyID0+IHIuY29sdW1uTmFtZSA9PT0gZGF0YS5zcWxTdGF0c1JlY29yZC5jb2x1bW5OYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uSW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0W2N1cnJlbnRDb2x1bW5JbmRleF0uZGVzYyA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuZGVzYztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9ic0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkxMTEwLTA5MzUgLSBKb2JzSW5kZXhDb250cm9sbGVyIC0gZ2V0Sm9ic0Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNiAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzQ2F0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc29ydE1ldGhvZDEwMSA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uQmFnLmNvbHVtbk5hbWUgIT0gY29sdW1uQmFnLmNvbHVtbk5hbWVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5jb2x1bW5OYW1lU2VsZWN0ZWQgPSBjb2x1bW5CYWcuY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5kZXNjID0gIWNvbHVtbkJhZy5kZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnaW5nbWV0aG9kMTAxID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuICAgICAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkID0gY29sdW1uQmFnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDEyLzAyLzIwMTkgMDI6NDggYW0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYkluZGV4Q29udHJvbGVyIC0gcGFnaW5nTWV0aG9kMTAxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS50YWJsZVRvcElkRm9yU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNcIiArICRzY29wZS50YWJsZVRvcElkRm9yU2Nyb2xsKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdqb2JJbmRleENvbnRyb2xlciAtIHBhZ2luZ01ldGhvZDEwMSAtIHNjcm9sbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAxMDo0NyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDddIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNfY2hhbmdlZDEwMSA9IGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4T2ZTZWxlY3RlZEl0ZW0gPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmluZGV4T2Yoam9iX3N0YXR1cy5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZTZWxlY3RlZEl0ZW0gPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGljZShpbmRleE9mU2VsZWN0ZWRJdGVtLCAxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoXSA9IGpvYl9zdGF0dXMuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5zcWxTdGF0c1JlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkOyAvLy5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA1OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwN10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19jaGVja0FsbCA9IGZ1bmN0aW9uIChlbmFibGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7IHJldHVybiBqb2Jfc3RhdHVzLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlcygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2JfU3RhdHVzZXMoKS50aGVuKGdldEpvYl9TdGF0dXNlc1N1Y2Nlc3MsIGdldEpvYl9TdGF0dXNlc0Vycm9yKS5jYXRjaChnZXRKb2JfU3RhdHVzZXNDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlc1N1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNFcnJvcihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9iSW5kZXhDb250cm9sbGVyIC0gIDIwMTkwOTIyLTA3NTggLSBEYXRhIGVycm9yIChjYXRjaCkgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIgIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiICBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgfV1cclxuXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IEpvYnNfQW5ndWxhcl9Nb2R1bGVcclxuICAgIH1cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsImltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMDkvMjQvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNzMxXSAtIFswMDhdIC0gUHJvamVjdCBzZWFyY2ggb3B0aW9uXHJcbi8vIDExLzIyLzIwMTkgMDE6NDAgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDEyXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbi8vIFJlcGxhY2UgaW5jb21wbGV0ZSBjb2RlIGZvciBwcm9qZWN0IHNlYXJjaFxyXG5cclxudmFyIFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQcm9qZWN0SW5kZXgnLCBkZWZhdWx0QXBwTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoJ1Byb2plY3RzSW5kZXhDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkY29tcGlsZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RzSW5kZXhDb250cm9sbGVyIC0gbmV3IC0gMjAxOTExMjItMTM0NCcpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwMTo1NyBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0c0luZGV4IC0gRmlyaW5nIFRpbWVMb2dfSW5kZXhfUmVmcmVzaCAtIDIwMTkxMTIyLTE0MDYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtJywgaXRlbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzJfaWQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4iLCJcclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG52YXIgVGltZWxvZ0xpbmtPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVsb2dMaW5rT3B0aW9ucyAtIDIwMTkxMTIxLTA1NTQtQlwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHRBcHBOYW1lIHR5cGUgYW5kIG5hbWUgWycsIHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpLCAnXSBbJywgZGVmYXVsdEFwcE5hbWUsICddJyk7XHJcblxyXG5cclxuICAgICAgICAvL3ZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGRlZmF1bHRBcHBOYW1lLCBbXSk7XHJcbiAgICAgICAgdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZWxvZ0xpbmtPcHRpb25zJywgZGVmYXVsdEFwcE5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgndGltZWxvZ0xpbmtPcHRpb25zJywgWyckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCBmdW5jdGlvbiAoJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgLy9iaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVsb2dMaW5rT3B0aW9ucyAtIFsnICsgdGltZWxvZ0lkICsgJ10gIE9PT09PT09PT09PT09PT09PTycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgLSB4MjAxOTExMTYtMTYzNyAtIHRpbWVzaGVldEZvcm1fRWRpdCAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpbmdQYWdlJywgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbEVkaXQgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsICAvLyB1c2luZyBzYW1lIGh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSAtIHgyMDE5MTExNi0xNjQwIC0gbW9kYWxFZGl0X3NhdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQxIC0gbW9kYWxFZGl0X2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTYtMTY0MyAtIHRpbWVzaGVldEZvcm1fRWRpdCAtIGVuZCAnKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUgLSBtb2RhbENsb2Nrb3V0ICAtIGJlZ2luICcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUtMiAtIG1vZGFsQ2xvY2tvdXRfMSAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0zIC0gbW9kYWxDbG9ja291dF8yICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDE5MTExNC0xNDQ4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDE5MTExNC0xNDQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwODo0NSBhbSAtIFNTTiAtIENvcGllZCBmcm9tIEpvYkluZGV4Q29udHJvbGxlci50cyBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDExXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSAtIFdyb25nIHdheSB0byBnbyFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTZWNvbmRzOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiAnQCdcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX2xvY2FsLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxTZWNvbmRzX2Zyb21BdHRyID0gYXR0cnNbJ3RvdGFsU2Vjb25kcyddO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVPcGVuUmVjb3JkID0gdG90YWxTZWNvbmRzX2Zyb21BdHRyID09PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDbG9ja291dE9wdGlvbiA9IGhhdmVPcGVuUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5jb250aW51ZV9vcl9saW5lSXRlbV9jYXB0aW9uID0gIWhhdmVPcGVuUmVjb3JkID8gXCJDb250aW51ZVwiIDogXCJMaW5lIGl0ZW1cIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfTtcclxuXHJcbiIsIlxyXG4vLyAwNC8xMi8yMDE5IDAxOjQyIGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG52YXIgdGltZXNoZWV0QXBwX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDUvMDMvMjAxOSAwNjozMyBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTNdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgIC8vIENvbnZlcnQgdG8gVFNcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEFwcC1maWxlbmFtZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBpcyBpbiB1c2UgYnkgRGF0YVNlcnZpY2VzLmpzXHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MzUgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA1XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcihcInRpbWVzaGVldENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJyRjb21waWxlJywgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJGNvbXBpbGUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE5LzIwMTkgMDY6NDMgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkZWQgdG8gcmUtYmluZCBuZy1jbGlja1xyXG5cclxuICAgICAgICAkc2NvcGUuJG9uKCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDE5MTEyMi0xNzU3Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzJfaWQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMV9pZCkucmVwbGFjZVdpdGgoaXRlbS5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICRjb21waWxlKCQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLmNvbnRlbnRzKCkpKCRzY29wZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDQ6MTYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTYxNl0gLSBbMDAxXSAtIFRpbWVzaGVldCAtIHN0b3AgLyBjb250aW51ZVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwMzo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgICAgICAgICAgLy8gVGVzdGluZzogICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICAnanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnIFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0byB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCdcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBiZWdpbiAnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUtMiAtIG1vZGFsQ2xvY2tvdXRfMSAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0zIC0gbW9kYWxDbG9ja291dF8yICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA1LzE5LzIwMTkgMDg6MzkgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAyXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb3NpbmdIb29rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlIC0gMjAxOTExMTQtMTQ0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsIC0gMjAxOTExMTQtMTQ0OScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNC8yMDE5IDA0OjQxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwOF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgICAgIC8vIFRlc3RpbmcgLSBOb3Qgd29ya2luZy5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbC5jbG9zaW5nIC0gYmVnaW4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbC5jbG9zaW5nOiAnICsgKGNsb3NlZCA/ICdjbG9zZScgOiAnZGlzbWlzcycpICsgJygnICsgcmVhc29uICsgJyknKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiWW91IGFyZSBhYm91dCB0byBsZWF2ZSB0aGUgZWRpdCB2aWV3LiBVbmNhdWdodCByZWFzb24uIEFyZSB5b3Ugc3VyZT9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrZWQgb3V0c2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrZHJvcCBjbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc2NhcGUga2V5IHByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbC5jbG9zaW5nIC0gZW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uIChqb2JJRCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihqb2JJRCkpIHtcclxuICAgICAgICAgICAgICAgIGpvYklEID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNDoxMCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuXHJcblxyXG4gICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTYvMjAxOSAwNDozNSBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDJdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjM3IC0gdGltZXNoZWV0Rm9ybV9FZGl0ICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQwIC0gbW9kYWxFZGl0X3NhdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQxIC0gbW9kYWxFZGl0X2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTYtMTY0MyAtIHRpbWVzaGVldEZvcm1fRWRpdCAtIGVuZCAnKTtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCJcclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIC8vIDA5LzMwLzIwMTkgMDY6NTYgcG0gLSBTU04gLSAoSW5qZWN0IGpvYklkKVxyXG4gICAgLy8gMTEvMjgvMjAxOSAwMjo1OCBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDJdIC0gQ2xvY2staW4gbm90IHNhdmluZyAtIEFkZCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnam9iSWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgam9iSWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDI6NDcgYW0gLSBTU04gLSBbMjAxOTExMjgtMDI0N10gLSBbMDAxXSAtIENsb2NrLWluIG5vdCBzYXZpbmdcclxuICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2Iuam9iVGl0bGUgPSBkYXRhLmpvYlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdC5wcm9qZWN0VGl0bGUgPSBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZXRDb250cm9sbGVyIC0gZ2V0Sm9iU3VjY2VzcyAgLSAgMjAxOTA5MzAtMjEwNi1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IDAsIHRpdGxlOiAnJyB9O1xyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW5cIjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IHtcclxuICAgICAgICAgICAgICAgIHRpbWVMb2dJZDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB0aW1lTm93LFxyXG4gICAgICAgICAgICAgICAgd29ya0RldGFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmVJZDogJzInLFxyXG4gICAgICAgICAgICAgICAgam9iSWQ6IGpvYklkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVzaGVldENvbnRyb2xsZXIgLSAyMDE5MDkyMS0wNjQwIC0gcHJvbWlzZSA+IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDI6NDcgYW0gLSBTU04gLSBbMjAxOTExMjgtMDI0N10gLSBbMDAxXSAtIENsb2NrLWluIG5vdCBzYXZpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBmZWVkYmFja1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIlxyXG4vLyAxMS8xNi8yMDE5IDA0OjQ3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwM10gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuLy8gQ29waWVkIGZyb20gVGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTkvMjAxOSAxMjo0OCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRpbmcgJGNvbXBpbGUgZm9yIGR5bmFtaWNhbGx5IGxvYWRlZCB2aWV3XHJcbiAgICAvLyAxMS8yMi8yMDE5IDAyOjE4IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgLy8gSW5qZWN0aW5nIFNlcnZpbmdwYWdlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAndGltZWxvZ0lkJywgJyR0aW1lb3V0JywgJyRyb290U2NvcGUnLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDA0OjAzIHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwNl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbiAgICAgICAgLy8gUmVtb3ZlIGZ1bmN0aW9uIG5hbWVcclxuICAgICAgICAvLyAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCAkdGltZW91dCwgJHJvb3RTY29wZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgJHRpbWVvdXQsICRyb290U2NvcGUsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkVkaXQgW1wiICsgc2VydmluZ1BhZ2UgKyAnXSc7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNldFN0b3BUaW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OClcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEJlZ2luXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkX3RlbXAgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmluZ1BhZ2UgNSBcIiwgc2VydmluZ1BhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLkpvYl9UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdIC0gRW5kXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRodHRwKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgICB1cmw6ICdhcGkvRGlzY2lwbGluZUFQSSdcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIlxyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbi8vIFJlZmFjdG9yIC0gVGltZWxvZyBvbmx5XHJcblxyXG5pbXBvcnQgeyB0aW1lc2hlZXRBcHBfaW5zdGFuY2UgfSBmcm9tICcuL1RpbWVzaGVldEFwcCc7XHJcbmltcG9ydCB7IHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL1RpbWVzaGVldENvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyJztcclxuXHJcblxyXG4vLyAxMS8xNi8yMDE5IDA0OjU3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuaW1wb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXInO1xyXG5cclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMnO1xyXG5cclxuXHJcblxyXG52YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgIC8vIDExLzIxLzIwMTkgMDY6NDUgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA3XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICBUaW1lbG9nTGlua09wdGlvbnMuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjtcclxuXHJcbiAgICB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxuICAgIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG4gICAgdGltZXNoZWV0QXBwX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbiAgICB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9TZXR1cCB9O1xyXG5cclxuIiwiXHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuLy8gMDUvMTkvMjAxOSAxMjoxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDNdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4vLyAwOS8yMS8yMDE5IDExOjUyIGFtICAtIFNTTiAtIFVwZ3JhZGluZyB0byB1c2UgQmFiZWwvV1dlYnBhY2tcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAvLyAwNS8xOS8yMDE5IDEwOjA2IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG4gICAgLy8gMTEvMTYvMjAxOSAwMjo1MiBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDNdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yMC8yMDE5IDA0OjQzIGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwM10gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcbiAgICAvLyBJbmplY3QgUGFnZVVwZGF0ZXJTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjUvMjAxOSAwNjozOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDNdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAndGltZWxvZ0lkJywgJ1BhZ2VVcGRhdGVyU2VydmljZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCBQYWdlVXBkYXRlclNlcnZpY2UsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMzowOCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDRdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjUxIHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2coJHJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2stb3V0XCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDI6NDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAyXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICAvLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5zdG9wVGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgwMzA3KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI3Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDYpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXIgLSAyMDE5MTEyMC0wNDIzIC0gdGltZWxvZ19pbmRleCB1cGRhdGUgWycsICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkLCAnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI1LzIwMTkgMDY6MzggcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAyXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVVwZGF0ZXJTZXJ2aWNlLnRpbWVsb2dfaW5kZXgoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsIHNlcnZpbmdQYWdlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCJcclxuXHJcblxyXG4vLyAwNS8xOS8yMDE5IDA5OjQ1IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNV0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuLy8gQ29waWVkIGZyb20gQ2xvY2tvdXQuXHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG52YXIgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzowNyBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDJdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQWRkaW5nIENoYW5nZU1vbml0b3JTZXJ2aWNlJyk7XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJyR0aW1lb3V0JywgJ3RpbWVsb2dJZCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsIHRpbWVsb2dJZCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDb250aW51ZSAvIExpbmUgSXRlbVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTkgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDEwXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCA9IFwiMTVcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMjo0MSBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDNdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgVGltZUxvZ0lkID0gMFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudGltZUxvZ0lkID0gMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDcvMDIvMjAxOSAwOToxNyBhbSAtIFNTTiAtIEFkZGVkIG51bGxpZnkgZGF0ZU1vZGlmaWVkIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDA3OjMxIGFtIC0gU1NOIC0gRm9yZ290dGVuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlciAtIHN1Ym1pdEZvcm0gLSAoMTAxKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMTo1NiBhbSAtIFNTTiAtIFRlc3RlZCBPSy5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIlJlY29yZCBhZGRlZC4gIFJlbG9hZGluZyBwYWdlLi4uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMTI6NTQgcG0gLSBTU04gLSBSZWxvYWQgcGFnZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1NyBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMDldIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBhZGQgcmVjb3JkLiBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwNTowOSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMTBdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoZmFsc2UpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCJcclxuLy8gMTEvMDkvMjAxOSAxMTowMyBhbSAtIFNTTiAtIENyZWF0ZWRcclxuXHJcbi8vIDExLzE4LzIwMTkgMDI6MjYgcG0gLSBTU04gLSBDcmVhdGUgY2xhc3MgZm9yIGhhdmVDaGFuZ2VzXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxudmFyIENoYW5nZU1vbml0b3JfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2V0SXRlbUNoYW5nZWRfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMDkvMjAxOSAwODowOCBhbSAtIFNTTiAtIEFkZGVkIG1vbml0b3JDaGFuZ2VfU1NOXHJcbiAgICB2YXIgbW9uaXRvckNoYW5nZV9TU04gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh6W3ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh6W3ldLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgICAgIHRleHRhcmVhcy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh6W3ldKSkge1xyXG4gICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh6W3ldKSkge1xyXG4gICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgYnlwYXNzT2JqZWN0ID0gZnVuY3Rpb24gKG9iajEpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKG9iajEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdoaWRkZW4nIHx8IG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc3VibWl0Jykge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDAyOjI3IHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBpZiAob2JqMS5ub0NoYW5nZU1vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iajEuaWQgJiYgIW9iajEubmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yIC0gc2V0dXBNb25pdG9yJyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBnZXRCcm93c2VyTmFtZSgpID09PSAnY2hyb21lJztcclxuXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gYmVmb3JlVW5sb2FkIG9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBDYW5ub3QgdXNlIHdpdGggQ2hyb21lXHJcbiAgICAgICAgICAgIGlmICghaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKDIpIFlvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMDUvMjAxOTEgMDQ6NTMgYW0gLSBTU04gXHJcbiAgICAvLyBOZWVkIHRvIHByZXZlbnQgdXNlcnMgZnJvbSBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBBbmd1bGFyIGJhc2VkIHBhZ2VzIHdpdGggcGVuZGluZyBjaGFuZ2VzLlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxODI5MTIvaG93LXRvLWRldGVjdC1icm93c2VyLXdpdGgtYW5ndWxhclxyXG4gICAgdmFyIGdldEJyb3dzZXJOYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZWRnZScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ29wcicpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLm9wcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2Nocm9tZScpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLmNocm9tZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCd0cmlkZW50JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdzYWZhcmknKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvdGhlcic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTmVlZGVkIHNvIHdlIGNhbiBjYWxsIGZyb20gcG9wdXBzLlxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChtb25pdG9yQ2hhbmdlX1NTTiwgMjAwMCk7XHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMTogc2V0dXBNb25pdG9yX3YwMSxcclxuICAgICAgICBnZXRCcm93c2VyTmFtZTogZ2V0QnJvd3Nlck5hbWUsXHJcbiAgICAgICAgbW9uaXRvckNoYW5nZV9TU046IG1vbml0b3JDaGFuZ2VfU1NOLFxyXG4gICAgICAgIHNldEl0ZW1DaGFuZ2VkX3Nzbjogc2V0SXRlbUNoYW5nZWRfc3NuLFxyXG4gICAgICAgIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuOiBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbixcclxuICAgICAgICBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3M6IHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzc1xyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpO1xyXG5cclxufSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3IgLSAyMDE5MTEwOS0xMTE0LUYnKTtcclxuXHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfTtcclxuXHJcblxyXG4iLCJcclxuLy8gMTEvMTgvMjAxOSAwMzoxOCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gQ2hhbmdlTW9uaXRvci50c1xyXG5cclxuXHJcbmNsYXNzIENoYW5nZU1vbml0b3JGbGFnX2NsYXNzIHtcclxuXHJcblxyXG5cclxuICAgIGdldCBoYXZlQ2hhbmdlcygpOiBib29sZWFue1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBnZXR0ZXIgJyk7XHJcblxyXG4gICAgICAgIGxldCBfaGF2ZUNoYW5nZXMgPSB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl07XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVvZiAoX2hhdmVDaGFuZ2VzKSBcIiwgdHlwZW9mIChfaGF2ZUNoYW5nZXMpICk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcyA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXMgIDogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLF9oYXZlQ2hhbmdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxubGV0IENoYW5nZU1vbml0b3JGbGFnID0gbmV3IENoYW5nZU1vbml0b3JGbGFnX2NsYXNzKCk7XHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9O1xyXG5cclxuIiwiXHJcbi8vIDExLzE0LzIwMTkgMDI6NTkgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDAxXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfSBmcm9tICcuL0NoYW5nZU1vbml0b3InO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uLy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wICcpO1xyXG5cclxudmFyIGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wIERPU0VUVVAnKTtcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCAgIElOICAgIERPU0VUVVAnKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0NoYW5nZU1vbml0b3JTZXJ2aWNlJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUuZmFjdG9yeShcImNoYW5nZU1vbml0b3JTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlTW9uaXRvclNlcnZpY2UgZmFjdG9yeSAtIDIwMTkxMTE2LTEzNDggeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5vbXBsZXRlIFRlc3Rpbmcgc2V0dXBNb25pdG9yIHBsdWdnZWQgaW5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEhhdmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3Jlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9kb1NldEhhdmVDaGFuZ2UgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gc2V0dGluZztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cE1vbml0b3I6IF9zZXR1cE1vbml0b3IsXHJcbiAgICAgICAgICAgICAgICBnZXRIYXZlQ2hhbmdlczogX2dldEhhdmVDaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IF9yZXNldCxcclxuICAgICAgICAgICAgICAgIGRvU2V0SGF2ZUNoYW5nZTogX2RvU2V0SGF2ZUNoYW5nZVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSBib3R0b20gJyk7XHJcbiIsIlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE3LzIwMTkgMDI6MDQgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE4XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgaUZpeFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcclxuXHJcbiAgICBzb3J0KCk6IGFueSxcclxuICAgIHNvcnRtZXRob2QoKTogYW55LFxyXG4gICAgZGlzcGxheUFycm93KCk6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDU6MjEgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDA3XSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxudmFyIGhlYWRlcldpdGhTb3J0X2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSGVhZGVyV2l0aFNvcnQnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckc2NlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnaGVhZGVyV2l0aFNvcnQnLCBbJyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVXRpbC9oZWFkZXJXaXRoU29ydC5odG1sXCIsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5saXN0OiBcIj1jb2x1bW5saXN0XCIsIHNvcnRtZXRob2Q6IFwiJlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IGlGaXhTY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuc29ydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlYWRlcldpdGhTb3J0IC0gMjAxOTA5MjEtMDYxMyAtIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zb3J0bWV0aG9kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5kaXNwbGF5QXJyb3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy94eHh4eHggICAgICBjb25zb2xlLmxvZyhcImhlYWRlcldpdGhTb3J0IC0gMjAxOTExMTAtMDc0OSAtIFtcIiwgdGhpcy5jb2x1bW5saXN0LmRlc2MsIFwiXVwiLCB0aGlzLmNvbHVtbmxpc3QuY29sdW1uTmFtZSwgIERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbmxpc3QuZGVzYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbChcIiYjOTY1MDtcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoXCImIzk2NjA7XCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTogaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGVcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UgfTtcclxuXHJcbiIsIlxyXG4vLyAwOS8yMi8yMDE5IDEyOjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwOF0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbnZhciBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBhcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmUnLCAndGltZXNoZWV0QXBwJyk7XHJcblxyXG4gICAgdmFyIGpvYlN0YXR1c0Rpc3BsYXkgPSBhcHAuZGlyZWN0aXZlKCdqb2JTdGF0dXNEaXNwbGF5JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnNbJ2pvYlN0YXR1cyddLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSAnMScpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX29wZW5fMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPT0gJzInKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19QZW5kaW5nXzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09ICczJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ29tcGxldGVkXzMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ2FuY2VsbGVkXzQnO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2pvYl9zdGF0dXNfb3Blbl8xIGpvYl9zdGF0dXNfUGVuZGluZ18yIGpvYl9zdGF0dXNfQ29tcGxldGVkXzMgam9iX3N0YXR1c19DYW5jZWxsZWRfNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBqb2JTdGF0dXNEaXNwbGF5OiBqb2JTdGF0dXNEaXNwbGF5XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6MjkgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAxXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuXHJcbi8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XVxyXG52YXIgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgcGFnZVVwZGF0ZXJfTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQYWdlVXBkYXRlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIHBhZ2VVcGRhdGVyX01vZHVsZS5mYWN0b3J5KCdQYWdlVXBkYXRlclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfdGltZWxvZ19pbmRleCA9IGZ1bmN0aW9uIChpZF90ZW1wLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAyICcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMyAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nX2luZGV4OiBfdGltZWxvZ19pbmRleFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IFBhZ2VVcGRhdGVyX0luc3RhbmNlIH07XHJcblxyXG5jb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSBMb2FkZWQnKTtcclxuIiwiXHJcbi8vIDExLzIyLzIwMTkgMDk6NDEgcG0gLSBTU04gLSBDcmVhdGVkIHRvIHJlc3RvcmUgcGFnZSBvbiBoaXR0aW5nIHRoZSBiYWNrIGJ1dHRvbiBvciByZWNhbGxpbmcgdGhlIHBhZ2UuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuaW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuXHJcbnZhciBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCBUb3AgLSBzZXR1cD8/PycpO1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0RlZmF1bHRBcHBsaWNhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4IC0gU2V0dXAgLSBuZ0RlZmF1bHRBcHBsaWNhdGlvbiBbJywgbmdEZWZhdWx0QXBwbGljYXRpb24sICddJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4IC0gU2V0dXAgLSBkaXJlY3RpdmU/Pz8nKTtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJywgbmdEZWZhdWx0QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCdyZXN0b3JlUHJldmlvdXNQYWdlQW5kVGFza1F1ZXVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsICRsb2NhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlQW5kVGFza1F1ZXVlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXRlX1Rhc2tfUXVldWVfTGlzdCcsIHJlc3VsdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAtICBkaXJlY3RpdmUgICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGFscmVhZHlQb3N0ZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgcmVzdG9yZVBvcyAgKioqKioqKioqKioqKioqKioqKioqKiogIDEwMSAnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIHJlc3RvcmVQb3MgICoqKioqKioqKioqKioqKioqKioqKioqICAxMDIgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VSTF9UcmFja19SZWYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgcmVzdG9yZVBvcyAgKioqKioqKioqKioqKioqKioqKioqKiogIDEwMyAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgcmVzdG9yZVBvcyAgKioqKioqKioqKioqKioqKioqKioqKiogIDEwNCAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGN1cnJlbnRSZWNvcmQucG9zWSwgbGVmdDogY3VycmVudFJlY29yZC5wb3NYLCBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIGhpZ2hsaWdodENsaWNrU291cmNlICAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAwMDBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRZO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDQgW1wiLCB4LCBcIl0gW1wiLCB5LCBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEVsZW1lbnQ6ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRFbGVtZW50OiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkRWxlbWVudDogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEVsZW1lbnQ6ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ5cGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkEgXCIudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA+IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZSBOYW1lXCIsIHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJOb2RlIHR5cGVcIiwgc2VsZWN0ZWRFbGVtZW50Lm5vZGVUeXBlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwibmctY2xpY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgbmctY2xpY2sgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgbmctY2xpY2sgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgbmctY2xpY2sgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgbmctY2xpY2sgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcImhyZWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgaHJlZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGF2ZSBocmVmICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIGhyZWYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgaHJlZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnlwYXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS5hZGRDbGFzcygnY3NzSGlsaWdodDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlbW92ZUFkZGVkQ2xhc3Moc3BhblRlbXApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSBSZW1vdmluZyBjdXJyZW50IHJlb2NyZC4uLiAxMDEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCAyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50IDIyMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIlxyXG4vLyAwOS8xNy8yMDE5IDA5OjMxIGFtIC0gU1NOIC0gWzIwMTkwOTE3LTA5MjldIC0gWzAwMV0gLSBBZGRpbmcgcGFnaW5nIGZvciBhbmd1bGFyIGxpc3RzXHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOS8yMDE5IDA0OjIxIGFtIC0gU1NOIC0gWzIwMTkwOTE5LTAzNTRdIC0gWzAwNV0gLSBQdXR0aW5nIHRoaW5ncyBiYWNrIC0gQ2xlYW51cCBmcm9tIGltcGxlbWVudGluZyBBTUQgLSBBZGRpbmcgdHNjb25maWcuanNvbiAgICAgXCJhbHdheXNTdHJpY3RcIjogdHJ1ZSxcclxuLy9pbXBvcnQgYW5ndWxhciAgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcblxyXG5pbnRlcmZhY2UgaUZpeFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcclxuXHJcbiAgICBpbml0MTAxKCk6IGFueSxcclxuICAgIHByZXZpb3VzZGlzYWJsZWQ6IGJvb2xlYW4sXHJcbiAgICBuZXh0ZGlzYWJsZWQ6IGJvb2xlYW4sXHJcbiAgICBzYXlXaGF0UGFnZVdlQXJlT246IHN0cmluZyxcclxuICAgIHNxbHN0YXRzcmVjb3JkOiBhbnksXHJcbiAgICBvbk5leHQoKTogYW55LFxyXG4gICAgb25QcmV2aW91cygpOiBhbnksXHJcbiAgICBwYWdpbmdtZXRob2QoKTogYW55XHJcblxyXG59XHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcblxyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDU6MDcgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDA0XSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG52YXIgcGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdwYWdpbmdEaXJlY3RpdmUnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBbJyRzY29wZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncGFnaW5nRGlyZWN0aXZlJywgWyckdGltZW91dCcsIGZ1bmN0aW9uICgkdGltZW91dCkge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1V0aWwvcGFnaW5nRGlyZWN0aXZlLmh0bWxcIixcclxuXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdpbmdtZXRob2Q6IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YWJhZzogXCI9XCIsXHJcbiAgICAgICAgICAgICAgICBzcWxzdGF0c3JlY29yZDogXCI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogaUZpeFNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuc2F5V2hhdFBhZ2VXZUFyZU9uID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuaW5pdDEwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VG90YWxQYWdlQ291bnQoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwoc2NvcGUuc3Fsc3RhdHNyZWNvcmQudG90YWxSZWNvcmRDb3VudCAvIHNjb3BlLnNxbHN0YXRzcmVjb3JkLnJlY29yZHNQZXJQYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2V0dXBCdXR0b25zKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxQYWdlQ291bnQgPSBnZXRUb3RhbFBhZ2VDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wcmV2aW91c2Rpc2FibGVkID0gc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA8PSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLm5leHRkaXNhYmxlZCA9IHNjb3BlLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPj0gdG90YWxQYWdlQ291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VDb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2F5V2hhdFBhZ2VXZUFyZU9uID0gXCJQYWdlIFwiICsgc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyArIFwiIG9mIFwiICsgdG90YWxQYWdlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2F5V2hhdFBhZ2VXZUFyZU9uID0gXCJObyByZWNvcmRzLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoc2NvcGUuaW5pdDEwMSwgMTAwMCk7IC8vIHRvIHBpY2t1cCBhY3R1YWwgdmFsdWVzIGFmdGVyIEFQSSBjYWxsIHRvIGdldCBkYXRhLCBqdXN0IGluIGNhc2UhISFcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUub25QcmV2aW91cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA9IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA+IDEgPyB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gLSAxIDogMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFnaW5nbWV0aG9kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUub25OZXh0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsUGFnZUNvdW50ID0gZ2V0VG90YWxQYWdlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID0gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIDwgdG90YWxQYWdlQ291bnQgPyB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gKyAxIDogdG90YWxQYWdlQ291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhZ2luZ21ldGhvZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmluaXQxMDEoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGU6IHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgcGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX3YwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICAgICAgLy8vLyAgRE8gTk9UIFJFTU9WRS5cclxuICAgICAgICAgICAgLy8vLyBPcHRpb24gdG8gY2FsbCBhbiBpbmplY3RlZCBBbmd1bGFySlMgc2VydmVyIGZyb20gaGVyZS4gVGVzdGVkLiAgXHJcblxyXG4gICAgICAgICAgICAvL2ZhY3RvcnlTZXR1cC5kb0ZhY3RvcnlTZXR1cCgpO1xyXG5cclxuICAgICAgICAgICAgLy90cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJnbG9iYWxzOiAyMDE5MDkyMy0xMTM2IC0gQ2FsbGluZyB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgdGVzdF8xMDMuZG9JdCgpO1xyXG4gICAgICAgICAgICAvL30gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcihcImdsb2JhbHM6ICAyMDE5MDkyMy0xMTM1IC0gRmFpbGVkIGNhbGwgdG8gdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNDUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VfdjAwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBnZXRJbnN0YW5jZV92MDAyOiBnZXRJbnN0YW5jZV92MDAyXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDY6MzIgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5lbnVtIFRpbWVsb2dfU2VydmluZ1BhZ2UgeyAvLyBTZXJ2aW5nUGFnZSAoZm9yIElERSBTZWFyY2gpXHJcblxyXG4gICAgVGltZWxvZyA9ICdUaW1lbG9nJyxcclxuICAgIEpvYl9UaW1lbG9nID0gJ0pvYl9UaW1lbG9nJyxcclxuICAgIFByb2plY3RzX1NlYXJjaCA9ICdQcm9qZWN0c19TZWFyY2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSh2YWx1ZTogVGltZWxvZ19TZXJ2aW5nUGFnZSwgY29tcGFyZVRvOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBhcmVUbyA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIHRlc3RfMTAzLCBUaW1lbG9nX1NlcnZpbmdQYWdlLCBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUgfTtcclxuXHJcblxyXG4iLCJcclxuLy8gMTEvMTQvMjAxOSAwNzozMSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xOTMxXSAtIFswMDFdIC0gSm9iIC0gb3B0aW9uIHRvIGNoYW5nZSBqb2Igc3RhdHVzXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxudmFyIGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYnN0YXR1c0NoYW5nZWRSZWNvcmQnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuICAgIGFuZ3VsYXJfTW9kdWxlLmRpcmVjdGl2ZSgnam9iU3RhdHVzQ2hhbmdlUmVjb3JkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudFRhYmxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL0pvYnMvam9iU3RhdHVzQ2hhbmdlUmVjb3JkLmh0bWwnLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkxpbms6ICdAJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsOiAnQCdcclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VGFibGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRhYmxlID0gZWwucGFyZW50cygndGFibGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50V2lkdGggPSBwYXJlbnRUYWJsZS53aWR0aCgpIC0gMjA7IC8vICBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfb24gcGFkZGluZ1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5qb2JTdGF0dXNDaGFuZ2VSZWNvcmRfb24nKS5jc3MoeyAnd2lkdGgnOiBwYXJlbnRXaWR0aCArICdweCcgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzcGxheUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5Q29udGVudCA9ICEkc2NvcGUuZGlzcGxheUNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0V2luZG93TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpbmRvd05hbWUgPSB0aGlzLmFjdGlvbkxpbmsudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dOYW1lMSA9IHdpbmRvd05hbWUucmVwbGFjZSgvW15hLXp8XjAtOV0qL2lnLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dOYW1lMTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyX01vZHVsZVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgfTtcclxuIiwiXHJcbi8vIDA5LzE4LzIwMTkgMDk6NDMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDAxXSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcbiAgICBqb2Jfc3RhdHVzX2NsaWNrKGVudHJ5OiBhbnkpOiBhbnksXHJcbiAgICBqb2Jfc3RhdHVzX2NoZWNrZWQoZW50cnk6IGFueSk6IGFueVxyXG59O1xyXG5cclxuXHJcbnZhciBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdKb2JTdGF0dXNEaXJlY3RpdmUnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZS5jb250cm9sbGVyKFwidXRpbGl0eUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUuZGlyZWN0aXZlKCdqb2JTdGF0dXNPcHRpb24nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9qb2JzL2pvYlN0YXR1cy5odG1sXCIsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeTogXCI9XCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkZnVuY3Rpb246IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgam9ic3RhdHVzZXNzZWxlY3RlZDEwMjogXCI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogaUZpeFNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuam9iX3N0YXR1c19jbGljayA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRmdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmpvYl9zdGF0dXNfY2hlY2tlZCA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuam9ic3RhdHVzZXNzZWxlY3RlZDEwMi5pbmRleE9mKGVudHJ5LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTZWxlY3RlZCA+IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlOiBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG4iLCJcclxuLy8gMDkvMjEvMjAxOSAxMTozMSBhbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDJdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuXHJcbmltcG9ydCB7IGhlYWRlcldpdGhTb3J0X2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9IZWFkZXJXaXRoU29ydCc7XHJcbmltcG9ydCB7IHBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvcGFnaW5nRGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuL0pvYlN0YXR1c0RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXInO1xyXG4gIFxyXG5cclxuLy8gMTEvMTQvMjAxOSAwODoyOCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xOTMxXSAtIFswMDZdIC0gSm9iIC0gb3B0aW9uIHRvIGNoYW5nZSBqb2Igc3RhdHVzIFxyXG4vLyBBZGRpbmcgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlIFxyXG5pbXBvcnQgeyBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgfSBmcm9tICcuL0pvYlN0YXR1c0NoYW5nZVJlY29yZCc7XHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbiBcclxuXHJcbmltcG9ydCB7IFBhZ2VVcGRhdGVyX0luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9QYWdlVXBkYXRlcic7XHJcbmltcG9ydCB7IFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9Qcm9qZWN0cy9Qcm9qZWN0c0luZGV4JztcclxuaW1wb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJztcclxuXHJcbmxldCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG5cclxuLy8gMTEvMjMvMjAxOSAwOTowNyBwbSAtIFNTTiBcclxuLy8gMTEvMjUvMjAxOSAwNDo0MCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDddIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBNb3ZlZCB0byB0b3AuICBEaXJlY3RpdmUgaXMgbm90IGxvYWRpbmc/Pz9cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4gXHJcblxyXG4vLyAxMS8yMi8yMDE5IDA5OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAyM10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwODoxOCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDldIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjIvMjAxOSAwMTo0OCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuIFxyXG5qb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlLkpvYnNfQW5ndWxhcl9Nb2R1bGU7XHJcblxyXG5oZWFkZXJXaXRoU29ydF9pbnN0YW5jZS5oZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTtcclxuXHJcbnBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZS5wYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5qb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UuSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZTtcclxuIFxyXG5qb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UuYW5ndWxhcl9Nb2R1bGU7XHJcbiBcclxuUGFnZVVwZGF0ZXJfSW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDU6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDExXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuLy8gUmVmYWN0b3IgLSBUaW1lbG9nIG9ubHlcclxuXHJcbmltcG9ydCAqIGFzIHggZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHknO1xyXG5cclxueC5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuIiwiXHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxubGV0IGQxID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIEFBQUEgJywgZDEpO1xyXG5cclxuXHJcbi8vMDgvMjMvMjAxOCAwMToyNCBhbSAtIFNTTlxyXG5cclxuLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcblxyXG5cclxuLy8gdmFyIHNpdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbm5hbWVzcGFjZSBzaXRlX2luc3RhbmNlX05TIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3Mgc2l0ZV9DbGFzcyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBsb2FkQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICBzZXREZWZhdWx0cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBOYW1lID0gJCh0aGlzKS5hdHRyKCdwb3B1cC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgYWxlcnQoJ2NsaWNrZWQgbWUhIGNtZE5hbWUgWycgKyBjbWROYW1lICsgXCJdIHBvcHVwLW5hbWUgIFtcIiArIHBvcHVwTmFtZSArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY21kLW5hbWUnLCBjbWROYW1lLCAncG9wdXBOYW1lJywgcG9wdXBOYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZSAnLCBqUXVlcnlPYmplY3ROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZTInLCBqUXVlcnlPYmplY3ROYW1lMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUsICdqUXVlcnlPYmplY3ROYW1lJywgalF1ZXJ5T2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZScsIGpRdWVyeU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gZnVuY3Rpb24gKHN0cjEsIGxlbiwgY2hhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBzdHIxLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMSA9IGNoYXIucmVwZWF0KGxlbikgKyBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczIgPSBzMS5zdWJzdHJpbmcobGVuICsgKHN0ci5sZW5ndGggLSBsZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDEwOjI4IGFtIC0gU1NOXHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wMi8yMDE5IDA3OjI1IHBtIC0gU1NOIC0gWzIwMTkxMTAxLTA1MjZdIC0gWzAxM10gLSBDaGVjayBsb2dpbiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gRGlkIG5vdCBmaW5pc2guXHJcbiAgICAgICAgICAgIC8vIFRvZG8tU1NOXHJcbiAgICAgICAgICAgICQoJy5tb2RhbCcpLm9uKCdzaG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgIC0gIDIwMTkxMTAyLTE5MzAgLSBTZXR0aW5nIGRyYWdnYWJsZS4nKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzI0LzIwMTkgMTE6MjAgcG0gLSBTU04gLSBEaXNhYmxlXHJcbiAgICAgICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzAxLzIwMTkgMDQ6NTIgYW0gLSBTU04gLSBVc2UgSmF2YVNjcmlwdCBvbmx5XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAxMjozMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDRdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgYSBvZiBsaXN0MSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG4gICAgICAgICAgICAgICAgbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoYSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE3LzIwMTkgMDQ6MTYgYW0gLSBTU04gLSBVcGRhdGUgdG8gZXhjbHVkZSBoaWdobGlnaHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPC9nLCAnJmx0OycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSA8aCBhbmQgPG4uIEFscmVhZHkgc2V0dXAgZm9yIDxpLiAgU2VlIHNpdGUuY3NzLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDcvMjAxOSAxMTo1MCBhbSAtIFNTTiAtIFVwZGF0ZSAtIE1hdGNoZXMgc2hvd24gaHR0cHM6Ly93d3cucmVnZXh0ZXN0ZXIuY29tL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPChbXml8Xi9pfF5ofF4vaHxebnxeL25dKXsxfVteXFxzfF4+XXsxfS9nLCAnJmx0OyQxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJ1xcbjEtLS1cXG5bJCZdXFxuMi0tLVxcblskMV1cXG4zLS0tXFxuWyQyXVxcbjQtLS1cXG5bJDNdXFxuXFxuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IGNvdmVycmVkIGgxLCBoMiwgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtub2Nrb3V0IGlzIGRvaW5nIGl0cyBvd24gdGhpbmcgd2hlbiBpdCBjb21lcyB0byB0YWdzLiBFdmlkZW50IHdpdGggdGhlIHVzZSBvZiBnZW5lcmljIHR5cGVzICggZnVuY3Rpb248U29tZVR5cGU+IClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICcmbHQ7JDMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgLy8gXHJcblxyXG5cclxuICAgICAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAgICAgLy8gU291cmNlIGh0dHBzOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL1VwbG9hZEZpbGUvMWQzMTE5L2RhdGUtc2VyaWFsaXphdGlvbi13aXRoLWFuZ3VsYXItanMtd2ViLWFwaS9cclxuXHJcbiAgICAgICAgaXNvODYwMVJlZ0V4ID0gLygxOXwyMHwyMSlcXGRcXGQoWy0vLl0pKDBbMS05XXwxWzAxMl0pXFwyKDBbMS05XXxbMTJdWzAtOV18M1swMV0pVChcXGRcXGQpKFs6Ly5dKShcXGRcXGQpKFs6Ly5dKShcXGRcXGQpLztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2godGhpcy5pc284NjAxUmVnRXgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZuQ29udmVyRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gICAgc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgICAgIC8vICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgLy8gICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB7XHJcblxyXG4gICAgICAgIC8vICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIC8vICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAvL30oKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmxldCBzaXRlX2luc3RhbmNlID0gbmV3IHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcygpO1xyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgIHNldFRpbWVvdXQoc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0geHh4eHh4eHh4eHgnKTtcclxuY29uc29sZS5sb2coc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKTtcclxuY29uc29sZS5sb2coZDIpO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZm4uaXNCb3VuZC0wMjQ1Jyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RoaXMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZGF0YSgnZXZlbnRzJylcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEoJ2V2ZW50cycpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSgnZXZlbnRzJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVmaW5lZCA8PDw8PDw8PDw8XCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyJyk7XHJcblxyXG5mdW5jdGlvbiBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAzMzMgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDInKTtcclxuXHJcbiAgICBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=