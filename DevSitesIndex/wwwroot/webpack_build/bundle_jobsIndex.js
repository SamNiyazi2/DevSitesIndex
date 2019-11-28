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

/***/ "./DropdownList/DropdownListDirective.js":
/*!***********************************************!*\
  !*** ./DropdownList/DropdownListDirective.js ***!
  \***********************************************/
/*! exports provided: dropdownListDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownListDirective_instance", function() { return dropdownListDirective_instance; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./globals.js");

// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
 // 09/20/2019 10:21 am - SSN - Replace angular.module



var dropdownListDirective_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
    console.log("DropdownListDirective - 20191116-0551");
    console.log('defaultAppName type and name [', _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(defaultAppName), '] [', defaultAppName, ']');

    if (typeof defaultAppName != "string") {
      defaultAppName = "demoSites_Index_Timesheet";
    }

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);
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
      var controller = function controller($http, $q, $scope, $timeout) {
        var _isValid = false;
        var vm = this;
        vm.isValidBoolean = false;
        vm.firstRun = true;
        vm.hitCount = 0;
        vm.isInvalidDropdownListDirectiveInput = true;
        $scope.$on('$destroy', function () {
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
          console.log("************ Cleanup");
        });
        $scope.$watch('vm101.formName.$error', function (newValue, oldValue) {
          console.log('dropdownListDirective - watching vm.formName.$error.isInvalidDropdownListDirectiveInputCheck2 (1841)');
          console.log('form change');
          console.log(oldValue);
          console.log(newValue);
        });
        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          console.log('dropdownListDirective - watching firing (0345)');
          vm.isInvalidDropdownListDirectiveInput = true;

          if (newValue) {
            console.log('oldValue');
            console.log(oldValue);
            console.log('newValue');
            console.log(newValue);
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

          var keyColumnValue = $("[name='" + this.keyColumn + "']").val();
          console.log('dropdownListDirective = (999-A) - this.angularControlId', this.angularControlId);
          console.log('dropdownListDirective = (999-B) - keyColumnValue [', keyColumnValue, ']');
          var keyValueSelected = null;

          if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {
            keyValueSelected = this.angularControlId;
          }

          if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {
            keyValueSelected = keyColumnValue;
          }

          if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {
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
          console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 101');

          if (data) {
            console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 102'); // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller

            console.log(data);

            if (data.disciplineId) {
              console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-A');
              vm.disciplineSelected_XXX = {
                id: data.disciplineId,
                title: data.disciplineShort
              };
              vm.angularControlId = data.disciplineId;
            }

            if (data.ta_id) {
              console.log('dropdownListDirective - currentDisplineLookupSuccess - 20191117-1025 - 103-B');
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
            angular__WEBPACK_IMPORTED_MODULE_1__["forEach"](response.data, function (item) {
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
          console.log('dropdownListDirective - getDisciplineCurrent XXXXXXXX [', lookupID, ']');
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
      };

      return {
        restrict: "E",
        templateUrl: "/js/DropdownList/DropDownListDirective.html",
        controller: ['$http', '$q', '$scope', '$timeout', controller],
        controllerAs: 'vm101',
        bindToController: true,
        scope: {
          keyColumn: "@key",
          formName: "=",
          angularControlId: "=?aci"
        },
        link: function link(scope, el, attrs) {}
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

/***/ "./Jobs/JobsIndexController.js":
/*!*************************************!*\
  !*** ./Jobs/JobsIndexController.js ***!
  \*************************************/
/*! exports provided: jobsIndexController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobsIndexController_instance", function() { return jobsIndexController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var _Util_JobStatusDisplayDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/JobStatusDisplayDirective */ "./Util/JobStatusDisplayDirective.js");
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
    var qd = {};
    if (location.search) location.search.substr(1).split("&").forEach(function (item) {
      var s = item.split("="),
          k = s[0],
          v = s[1] && decodeURIComponent(s[1]);
      (qd[k] = qd[k] || []).push(v);
    });
    var projectId = qd['id']; // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
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
      fk_filter: projectId
    };
    var _fieldList = [__assign({}, columnBag_defaults, {
      columnName: 'projectTitle_ForActivity',
      caption: 'Project Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'jobTitle',
      caption: 'Job Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateAdded',
      caption: 'Date Added'
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateUpdated',
      caption: 'Date Updated'
    }), __assign({}, columnBag_defaults, {
      columnName: 'activityAge',
      caption: 'Activity Age',
      columnNameSelected: 'activityAge',
      desc: true
    })];

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

/***/ "./Projects/ProjectsIndex.js":
/*!***********************************!*\
  !*** ./Projects/ProjectsIndex.js ***!
  \***********************************/
/*! exports provided: ProjectIndexController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectIndexController_instance", function() { return ProjectIndexController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.js":
/*!***********************************************************!*\
  !*** ./Timesheet/TimelogLinkOtions/TimelogLinkOptions.js ***!
  \***********************************************************/
/*! exports provided: TimelogLinkOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogLinkOptions", function() { return TimelogLinkOptions; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./globals.js");

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

/***/ "./Timesheet/TimesheetApp.js":
/*!***********************************!*\
  !*** ./Timesheet/TimesheetApp.js ***!
  \***********************************/
/*! exports provided: timesheetApp_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetApp_instance", function() { return timesheetApp_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./Timesheet/TimesheetController.js":
/*!******************************************!*\
  !*** ./Timesheet/TimesheetController.js ***!
  \******************************************/
/*! exports provided: timesheetController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetController_instance", function() { return timesheetController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);

 /// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 09/18/2019 11:13 am - SSN - [20190918-0943] - [008] - Adding job status option to index

var timesheetController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetController', "timesheetApp"); // 09/30/2019 06:56 pm - SSN - (Inject jobId)
  // 11/28/2019 02:58 am - SSN - [20191128-0247] - [002] - Clock-in not saving - Add changeMonitorService

  timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'jobId', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, jobId) {
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
      $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

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
  }]);
  return {
    timesheetApp_TimesheetController: timesheetApp
  };
}();



/***/ }),

/***/ "./Timesheet/TimesheetEditController.js":
/*!**********************************************!*\
  !*** ./Timesheet/TimesheetEditController.js ***!
  \**********************************************/
/*! exports provided: timesheetEditController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetEditController_instance", function() { return timesheetEditController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.js");
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

/***/ "./Timesheet/Timesheet_main_timesheetOnly.js":
/*!***************************************************!*\
  !*** ./Timesheet/Timesheet_main_timesheetOnly.js ***!
  \***************************************************/
/*! exports provided: doSetup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSetup", function() { return doSetup; });
/* harmony import */ var _TimesheetApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimesheetApp */ "./Timesheet/TimesheetApp.js");
/* harmony import */ var _TimesheetController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimesheetController */ "./Timesheet/TimesheetController.js");
/* harmony import */ var _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timesheetcontinuecontroller */ "./Timesheet/timesheetcontinuecontroller.js");
/* harmony import */ var _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheetclockoutcontroller */ "./Timesheet/timesheetclockoutcontroller.js");
/* harmony import */ var _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Timesheet/TimesheetEditController */ "./Timesheet/TimesheetEditController.js");
/* harmony import */ var _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TimelogLinkOtions/TimelogLinkOptions */ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.js");
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

/***/ "./Timesheet/timesheetclockoutcontroller.js":
/*!**************************************************!*\
  !*** ./Timesheet/timesheetclockoutcontroller.js ***!
  \**************************************************/
/*! exports provided: timesheetClockoutController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetClockoutController_instance", function() { return timesheetClockoutController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.js");
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

  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', 'servingPage', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService, servingPage) {
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

/***/ "./Timesheet/timesheetcontinuecontroller.js":
/*!**************************************************!*\
  !*** ./Timesheet/timesheetcontinuecontroller.js ***!
  \**************************************************/
/*! exports provided: timesheetContinueController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetContinueController_instance", function() { return timesheetContinueController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.js");
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
      $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

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

/***/ "./Util/ChangeMonitor.js":
/*!*******************************!*\
  !*** ./Util/ChangeMonitor.js ***!
  \*******************************/
/*! exports provided: ChangeMonitor_Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMonitor_Util", function() { return ChangeMonitor_Util; });
/* harmony import */ var _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitorFlag */ "./Util/ChangeMonitorFlag.js");
// 11/09/2019 11:03 am - SSN - Created
// 11/18/2019 02:26 pm - SSN - Create class for haveChanges


var ChangeMonitor_Util = function () {
  var setItemChanged_ssn = function setItemChanged_ssn(ev) {
    _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = true;
  };

  var setItemToResetChangedFlag_ssn = function setItemToResetChangedFlag_ssn(ev) {
    _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
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
          if (!_Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges) return;
          var confirmationMessage = "\o/";
          (e || window.event).returnValue = confirmationMessage; //Gecko + IE

          return "You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
        });
      } // Cannot use with Chrome


      if (!isChrome) {
        window.onbeforeunload = function (e) {
          if (!_Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges) return;
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

/***/ "./Util/ChangeMonitorFlag.js":
/*!***********************************!*\
  !*** ./Util/ChangeMonitorFlag.js ***!
  \***********************************/
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
        console.log("Setting default value ");
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

/***/ "./Util/ChangeMonitorService.js":
/*!**************************************!*\
  !*** ./Util/ChangeMonitorService.js ***!
  \**************************************/
/*! exports provided: changeMonitorService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMonitorService_instance", function() { return changeMonitorService_instance; });
/* harmony import */ var _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitorFlag */ "./Util/ChangeMonitorFlag.js");
/* harmony import */ var _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/ChangeMonitor */ "./Util/ChangeMonitor.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./globals.js");
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
        _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_1__["ChangeMonitor_Util"].setupMonitor_FullProcess();
      };

      var _getHaveChanges = function _getHaveChanges() {
        return _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges;
      };

      var _reset = function _reset() {
        _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
      };

      return {
        setupMonitor: _setupMonitor,
        getHaveChanges: _getHaveChanges,
        reset: _reset
      };
    }]);
  };

  return {
    doSetup: doSetup
  };
}();


console.log('ChangeMonitorService  - 20191114-1505 - bottom ');

/***/ }),

/***/ "./Util/HeaderWithSort.js":
/*!********************************!*\
  !*** ./Util/HeaderWithSort.js ***!
  \********************************/
/*! exports provided: headerWithSort_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerWithSort_instance", function() { return headerWithSort_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./Util/JobStatusDisplayDirective.js":
/*!*******************************************!*\
  !*** ./Util/JobStatusDisplayDirective.js ***!
  \*******************************************/
/*! exports provided: jobStatusDisplayDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusDisplayDirective_instance", function() { return jobStatusDisplayDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./Util/PageUpdater.js":
/*!*****************************!*\
  !*** ./Util/PageUpdater.js ***!
  \*****************************/
/*! exports provided: PageUpdater_Instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageUpdater_Instance", function() { return PageUpdater_Instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./Util/RestorePreviousPageState.js":
/*!******************************************!*\
  !*** ./Util/RestorePreviousPageState.js ***!
  \******************************************/
/*! exports provided: RestorePreviousPageState_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePreviousPageState_instance", function() { return RestorePreviousPageState_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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
      var alreadyPosted = false;

      var controller = function controller($http, $q, $scope) {};

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
        console.log('RestorePreviousPageState -  restorePos  ***********************');
        var URL_Track_Ref = get_URL_Track_Record();
        if (!URL_Track_Ref) return;
        if (!URL_Track_Ref.currentRecord) return;
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
              var selectedElement = document.elementFromPoint(x, y);
              console.log("selectedElement: ");
              console.log(selectedElement);

              if (selectedElement) {
                var spanTemp_1 = $('<span></span>').prependTo(selectedElement);
                $(spanTemp_1).text($(selectedElement).text());
                $(spanTemp_1).addClass('cssHilight101');
                setTimeout(function () {
                  removeAddedClass(spanTemp_1);
                }, 2000);
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
            }, 2000);
            console.log(URL_Track_Ref.URL_Track.urls.length);
            console.log('************ Count');
            console.log('************ Count');
            window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
          }, 4000);
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

/***/ "./Util/pagingDirective.js":
/*!*********************************!*\
  !*** ./Util/pagingDirective.js ***!
  \*********************************/
/*! exports provided: pagingDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pagingDirective_instance", function() { return pagingDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./jobs/JobStatusChangeRecord.js":
/*!***************************************!*\
  !*** ./jobs/JobStatusChangeRecord.js ***!
  \***************************************/
/*! exports provided: jobStatusChangeRecord_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusChangeRecord_instance", function() { return jobStatusChangeRecord_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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

/***/ "./jobs/JobStatusDirective.js":
/*!************************************!*\
  !*** ./jobs/JobStatusDirective.js ***!
  \************************************/
/*! exports provided: jobStatusDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobStatusDirective_instance", function() { return jobStatusDirective_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
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
/* harmony import */ var _Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/HeaderWithSort */ "./Util/HeaderWithSort.js");
/* harmony import */ var _Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/pagingDirective */ "./Util/pagingDirective.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.js");
/* harmony import */ var _JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobStatusDirective */ "./jobs/JobStatusDirective.js");
/* harmony import */ var _Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Jobs/JobsIndexController */ "./Jobs/JobsIndexController.js");
/* harmony import */ var _JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JobStatusChangeRecord */ "./jobs/JobStatusChangeRecord.js");
/* harmony import */ var _Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/ChangeMonitorService */ "./Util/ChangeMonitorService.js");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.js");
/* harmony import */ var _Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Projects/ProjectsIndex */ "./Projects/ProjectsIndex.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Timesheet_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Timesheet/Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.js");
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index




 // 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 







var ngApplicationName = "timesheetApp"; // 11/23/2019 09:07 pm - SSN 
// 11/25/2019 04:40 pm - SSN - [20191125-1414] - [007] - Project jobs - filter 
// Moved to top.  Directive is not loading???

_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__["RestorePreviousPageState_instance"].doSetup(ngApplicationName); // 11/22/2019 09:06 pm - SSN - [20191121-0503] - [023] - Timelog edit options on project search

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__["dropdownListDirective_instance"].doSetup(ngApplicationName); // 11/21/2019 08:18 am - SSN - [20191121-0503] - [009] - Timelog edit options on project search

_Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__["changeMonitorService_instance"].doSetup(ngApplicationName); // 11/22/2019 01:48 pm - SSN - [20191121-0503] - [013] - Timelog edit options on project search

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vUHJvamVjdHMvUHJvamVjdHNJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5LnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZy50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvSGVhZGVyV2l0aFNvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9Kb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9wYWdpbmdEaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0NoYW5nZVJlY29yZC50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYnNJbmRleF9tYWluLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9D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QyxHQUFSLENBQVkscUNBQVo7O0FBR0EsTUFBSSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLE9BQWpCLENBQXlCLE9BQXpCLEVBQWtDLHFCQUFsQyxDQUFKLEVBQThEO0FBQzFELFdBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBQ0g7O0FBRUQsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFVLENBQVYsRUFBVztBQUVwQyxXQUFPLENBQUMsR0FBUixDQUFZLDJCQUFaO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBYSxDQUFiO0FBQ0gsR0FKRDtBQU1IOztBQUVELENBQUMsQ0FBQztBQUVFLFNBQU8sQ0FBQyxHQUFSLENBQVksa0NBQVo7QUFFQSx1QkFBcUI7QUFFeEIsQ0FOQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNWNBLHlCIiwiZmlsZSI6ImJ1bmRsZV9qb2JzSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA5OjE0IGFtIC0gU1NOIC0gUGFzcyBwcm9qZWN0SWRcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkICsgXCI/cHJvamVjdElkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBjb2x1bW5CYWcuZmtfZmlsdGVyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU2VydmljZXMgLSAyMDE5MDkzMC0xOTA3IC0gZ2V0Sm9iIFtcIiArIGlkICsgXCJdXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG5cclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMTkxMTE2LTA1NTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0QXBwTmFtZSB0eXBlIGFuZCBuYW1lIFsnLCB0eXBlb2YgKGRlZmF1bHRBcHBOYW1lKSwgJ10gWycsIGRlZmF1bHRBcHBOYW1lLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gTmVlZGVkIHRvIGJlIGFibGUgdG8gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgZm9ybTEgPSAkKFwiW25hbWU9J1wiICsgZm9ybU5hbWUgKyBcIiddXCIpLmdldCgwKTtcclxuICAgICAgICAgICAgdmFyIGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKS50cmltKCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMiA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBzdWJtaXRGb3JtXzJcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtXzEgPSBmdW5jdGlvbiAoZXZlbnQsIGZvcm0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHN1Ym1pdEZvcm1fMVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3ZhbGlkYXRlRHJvcGRvd25MaXN0RGlyZWN0aXZlJywgdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIG5nTW9kZWwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJGFzeW5jVmFsaWRhdG9ycy5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dENoZWNrMiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUsICR0aW1lb3V0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IHRydWU7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5mb3JtTmFtZS4kZXJyb3InLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSB3YXRjaGluZyB2bS5mb3JtTmFtZS4kZXJyb3IuaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRDaGVjazIgKDE4NDEpJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWU6IExvb2t1cFJlY29yZCwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHdhdGNoaW5nIGZpcmluZyAoMDM0NSknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29sZFZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld1ZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXRjb3VudCBcIiwgdm0uaGl0Q291bnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8ga2V5Q29sdW1uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuZGlzY2lwbGluZWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDQ6NDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iLnByb2plY3RpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbHVtblZhbHVlID0gJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSA9ICg5OTktQSkgLSB0aGlzLmFuZ3VsYXJDb250cm9sSWQnLCB0aGlzLmFuZ3VsYXJDb250cm9sSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgPSAoOTk5LUIpIC0ga2V5Q29sdW1uVmFsdWUgWycsIGtleUNvbHVtblZhbHVlLCAnXScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVNlbGVjdGVkID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYgdGhpcy5hbmd1bGFyQ29udHJvbElkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVNlbGVjdGVkID0gdGhpcy5hbmd1bGFyQ29udHJvbElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5Q29sdW1uVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBrZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFh4eCBzZXQgZGVmYWx0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KGtleVZhbHVlU2VsZWN0ZWQpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFyZSB3ZSBldmVyIHJlYWNoaW5nIHRoaXMgcG9pbnQ/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSAoeHh4eHgxMDEtQikgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgICBbJywgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCwgJ10nKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IHZtLnNldElucHV0VmFyaWFibGVzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IF9pc1ZhbGlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqIF9pc1ZhbGlkJywgX2lzVmFsaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5maXJzdFJ1biA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2lzVmFsaWQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uc2V0SW5wdXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfaXNWYWxpZF9sb2NhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmd1bGFyQ29udHJvbElkICE9PSB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ndWxhckNvbnRyb2xJZCA9IHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB0aGlzLmtleUNvbHVtbiArIFwiJ11cIikudmFsKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCh0aGlzLmFuZ3VsYXJDb250cm9sSWQpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkX2xvY2FsID0gdGhpcy5hbmd1bGFyQ29udHJvbElkID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWRfbG9jYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBfaXNWYWxpZF9sb2NhbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzVmFsaWRCb29sZWFuICgwNTIyKVwiLCB2bS5pc1ZhbGlkQm9vbGVhbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkX2xvY2FsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZUVudHJ5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3QgLSB2YWxpZGF0ZUVudHJ5ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0SW5wdXRWYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjMwIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwOF0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMy1BJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFuZ3VsYXJDb250cm9sSWQgPSBkYXRhLmRpc2NpcGxpbmVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDMtQicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLnRhX2lkLCB0aXRsZTogZGF0YS50YV9kZXNjcmlwdGlvbiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYW5ndWxhckNvbnRyb2xJZCA9IGRhdGEudGFfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwNl0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGlsZSBkZXZlbG9wbWVudCBpbiBwcm9ncmVzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLnRhX2lkLCB0aXRsZTogaXRlbS50YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDAyOjU3IGFtIC0gU1NOIC0gQWRkZWQgdG8gZ2V0IGN1cnJlbnQgdmFsdWUgYW5kIHVwZGF0ZSB2aWV3LlxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50ID0gZnVuY3Rpb24gKGxvb2t1cElEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gZ2V0RGlzY2lwbGluZUN1cnJlbnQgWFhYWFhYWFggWycsIGxvb2t1cElELCAnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwSUQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybCArIFwiL1wiICsgbG9va3VwSURcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyB2bS5pc1ZhbGlkKCk7IH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyB2bS5pc1JlYWR5ID0gdHJ1ZTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvRHJvcGRvd25MaXN0L0Ryb3BEb3duTGlzdERpcmVjdGl2ZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRodHRwJywgJyRxJywgJyRzY29wZScsICckdGltZW91dCcsIGNvbnRyb2xsZXJdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlDb2x1bW46IFwiQGtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIiwgLy8gTmVlZGVkIGZvciBwb3N0aW5nIGZvcm0gKFJlcGxhY2luZyB1cmwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQ29udHJvbElkOiBcIj0/YWNpXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA2OjAyIHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuICAgICAgICAvLyBSZXZpc2VkIHNvIHdlIGNhbiBwYXNzIGluIGRlZmF1bHQgYXBwbGljYXRpb24gbmFtZSBmb3IgbW9kdWxlLlxyXG4gICAgICAgIC8vICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGU6IGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZSxcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG5cclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPiBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0IElDb2x1bW5CYWcgZnJvbSAnLi4vSUNvbHVtbkJhZyc7XHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5pbXBvcnQgeyBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSBcIi4uL1V0aWwvSm9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZVwiO1xyXG5cclxuam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZTtcclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA0OjQyIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwM10gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxudmFyIGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBKb2JzX0FuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYkluZGV4Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzI3LzIwMTkgMDk6MjQgYW0gLSBTU04gLSBQYXNzaW5nIGluIHByb2plY3RJZFxyXG4gICAgSm9ic19Bbmd1bGFyX01vZHVsZS5jb250cm9sbGVyKCdqb2JzSW5kZXhDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAnJHNjZScsICckdWliTW9kYWwnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsICRzY2UsICR1aWJNb2RhbCkge1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmhhc0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMDtcclxuICAgICAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZXMgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNob3dPcmlnaW5hbFRhYmxlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHFkID0ge307XHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5zZWFyY2gpIGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkuc3BsaXQoXCImXCIpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzID0gaXRlbS5zcGxpdChcIj1cIiksIGsgPSBzWzBdLCB2ID0gc1sxXVxyXG4gICAgICAgICAgICAgICAgICAgICYmIGRlY29kZVVSSUNvbXBvbmVudChzWzFdKTsgKHFkW2tdID0gcWRba10gfHwgW10pLnB1c2godilcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gcWRbJ2lkJ107XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDE6MTUgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDEwXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8kc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vICBTZXR1cCBpbnRpYWlsIHZhbHVlcyBmb3IgbGlzdFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IFsxXTsgLy8gb3BlblxyXG5cclxuICAgICAgICAgICAgbGV0IGNvbHVtbkJhZ19kZWZhdWx0czogSUNvbHVtbkJhZyA9IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6ICc/Pz8/JyxcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWVTZWxlY3RlZDogJycsLy8gbGVhdmUgYmxhbmsuICBMZW5ndGggaXMgdXNlZCB0byBzZWxlY3Qgc2VsZWN0ZWQgY29sdW1uXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UGFnZU5vOiAxLFxyXG4gICAgICAgICAgICAgICAgcmVjb3Jkc1BlclBhZ2U6IDQsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdG90YWxSZWNvcmRDb3VudDogMCxcclxuICAgICAgICAgICAgICAgIGNhcHRpb246IFwiPz8/XCIsXHJcbiAgICAgICAgICAgICAgICBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ6IFskc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkXSxcclxuICAgICAgICAgICAgICAgIGZrX2ZpbHRlcjogcHJvamVjdElkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IF9maWVsZExpc3Q6IElDb2x1bW5CYWdbXSA9IFtcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAncHJvamVjdFRpdGxlX0ZvckFjdGl2aXR5JywgY2FwdGlvbjogJ1Byb2plY3QgVGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2pvYlRpdGxlJywgY2FwdGlvbjogJ0pvYiBUaXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnZGF0ZUFkZGVkJywgY2FwdGlvbjogJ0RhdGUgQWRkZWQnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2RhdGVVcGRhdGVkJywgY2FwdGlvbjogJ0RhdGUgVXBkYXRlZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnYWN0aXZpdHlBZ2UnLCBjYXB0aW9uOiAnQWN0aXZpdHkgQWdlJywgY29sdW1uTmFtZVNlbGVjdGVkOiAnYWN0aXZpdHlBZ2UnLCBkZXNjOiB0cnVlIH0sXHJcbiAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0Q29sdW1uRW50cmllcyA9IF9maWVsZExpc3QuZmlsdGVyKHIgPT4gci5jb2x1bW5OYW1lU2VsZWN0ZWQubGVuZ3RoID4gMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdENvbHVtbkVudHJpZXNcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdENvbHVtbkVudHJpZXMpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNvbHVtbkJhZyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0Q29sdW1uRW50cmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5CYWcgPSBzZWxlY3RDb2x1bW5FbnRyaWVzWzBdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmllbGRzTGlzdCA9IF9maWVsZExpc3Q7XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9ic0xpc3QoY29sdW1uQmFnOiBJQ29sdW1uQmFnKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2JzKGNvbHVtbkJhZykudGhlbihnZXRKb2JzU3VjY2VzcywgZ2V0Sm9ic0Vycm9yKS5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0LmZvckVhY2gociA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuZGVzYyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNFcnJvcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVycm9yTWVzc2FnZXMgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmZlZWRiYWNrTWVzc2FnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBkYXRhLmZlZWRiYWNrTWVzc2FnZXNbaV0uZXJyb3JNZXNzYWdlcy5sZW5ndGg7IGkyKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlcyArPSBkYXRhLmZlZWRiYWNrTWVzc2FnZXNbaV0uZXJyb3JNZXNzYWdlc1tpMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFiYWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JzOiBkYXRhLmRhdGFMaXN0LCBjb2x1bW46IGRhdGEuc3FsU3RhdHNSZWNvcmQuY29sdW1uTmFtZSwgZGVzYzogZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQgdG8gYW4gYXJyYXkuIFdlIGRvbid0IGhhdmUgYSBzZXR0ZXIgb24gYW4gaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSBkYXRhLnNxbFN0YXRzUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2x1bW5JbmRleCA9ICRzY29wZS5maWVsZHNMaXN0LmZpbmRJbmRleChyID0+IHIuY29sdW1uTmFtZSA9PT0gZGF0YS5zcWxTdGF0c1JlY29yZC5jb2x1bW5OYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uSW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0W2N1cnJlbnRDb2x1bW5JbmRleF0uZGVzYyA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuZGVzYztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9ic0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkxMTEwLTA5MzUgLSBKb2JzSW5kZXhDb250cm9sbGVyIC0gZ2V0Sm9ic0Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNiAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzQ2F0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc29ydE1ldGhvZDEwMSA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uQmFnLmNvbHVtbk5hbWUgIT0gY29sdW1uQmFnLmNvbHVtbk5hbWVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5jb2x1bW5OYW1lU2VsZWN0ZWQgPSBjb2x1bW5CYWcuY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5kZXNjID0gIWNvbHVtbkJhZy5kZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnaW5nbWV0aG9kMTAxID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuICAgICAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkID0gY29sdW1uQmFnO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAxMDo0NyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDddIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNfY2hhbmdlZDEwMSA9IGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4T2ZTZWxlY3RlZEl0ZW0gPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmluZGV4T2Yoam9iX3N0YXR1cy5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4T2ZTZWxlY3RlZEl0ZW0gPiAtMSlcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGljZShpbmRleE9mU2VsZWN0ZWRJdGVtLCAxKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoXSA9IGpvYl9zdGF0dXMuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5zcWxTdGF0c1JlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkOyAvLy5qb2luKCcsJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA1OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwN10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19jaGVja0FsbCA9IGZ1bmN0aW9uIChlbmFibGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZW5hYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXMubWFwKGZ1bmN0aW9uIChqb2Jfc3RhdHVzKSB7IHJldHVybiBqb2Jfc3RhdHVzLmlkIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlcygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2JfU3RhdHVzZXMoKS50aGVuKGdldEpvYl9TdGF0dXNlc1N1Y2Nlc3MsIGdldEpvYl9TdGF0dXNlc0Vycm9yKS5jYXRjaChnZXRKb2JfU3RhdHVzZXNDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlc1N1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNFcnJvcihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9iSW5kZXhDb250cm9sbGVyIC0gIDIwMTkwOTIyLTA3NTggLSBEYXRhIGVycm9yIChjYXRjaCkgPz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIgIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiICBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgfV1cclxuXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IEpvYnNfQW5ndWxhcl9Nb2R1bGVcclxuICAgIH1cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMDkvMjQvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNzMxXSAtIFswMDhdIC0gUHJvamVjdCBzZWFyY2ggb3B0aW9uXHJcbi8vIDExLzIyLzIwMTkgMDE6NDAgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDEyXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbi8vIFJlcGxhY2UgaW5jb21wbGV0ZSBjb2RlIGZvciBwcm9qZWN0IHNlYXJjaFxyXG5cclxudmFyIFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQcm9qZWN0SW5kZXgnLCBkZWZhdWx0QXBwTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoJ1Byb2plY3RzSW5kZXhDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkY29tcGlsZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RzSW5kZXhDb250cm9sbGVyIC0gbmV3IC0gMjAxOTExMjItMTM0NCcpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwMTo1NyBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQcm9qZWN0c0luZGV4IC0gRmlyaW5nIFRpbWVMb2dfSW5kZXhfUmVmcmVzaCAtIDIwMTkxMTIyLTE0MDYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtJywgaXRlbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzJfaWQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG52YXIgVGltZWxvZ0xpbmtPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVsb2dMaW5rT3B0aW9ucyAtIDIwMTkxMTIxLTA1NTQtQlwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHRBcHBOYW1lIHR5cGUgYW5kIG5hbWUgWycsIHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpLCAnXSBbJywgZGVmYXVsdEFwcE5hbWUsICddJyk7XHJcblxyXG5cclxuICAgICAgICAvL3ZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGRlZmF1bHRBcHBOYW1lLCBbXSk7XHJcbiAgICAgICAgdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZWxvZ0xpbmtPcHRpb25zJywgZGVmYXVsdEFwcE5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgndGltZWxvZ0xpbmtPcHRpb25zJywgWyckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCBmdW5jdGlvbiAoJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgLy9iaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVsb2dMaW5rT3B0aW9ucyAtIFsnICsgdGltZWxvZ0lkICsgJ10gIE9PT09PT09PT09PT09PT09PTycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgLSB4MjAxOTExMTYtMTYzNyAtIHRpbWVzaGVldEZvcm1fRWRpdCAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpbmdQYWdlJywgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbEVkaXQgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsICAvLyB1c2luZyBzYW1lIGh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSAtIHgyMDE5MTExNi0xNjQwIC0gbW9kYWxFZGl0X3NhdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQxIC0gbW9kYWxFZGl0X2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTYtMTY0MyAtIHRpbWVzaGVldEZvcm1fRWRpdCAtIGVuZCAnKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUgLSBtb2RhbENsb2Nrb3V0ICAtIGJlZ2luICcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUtMiAtIG1vZGFsQ2xvY2tvdXRfMSAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0zIC0gbW9kYWxDbG9ja291dF8yICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDE5MTExNC0xNDQ4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDE5MTExNC0xNDQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwODo0NSBhbSAtIFNTTiAtIENvcGllZCBmcm9tIEpvYkluZGV4Q29udHJvbGxlci50cyBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDExXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSAtIFdyb25nIHdheSB0byBnbyFcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTZWNvbmRzOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiAnQCdcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX2xvY2FsLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxTZWNvbmRzX2Zyb21BdHRyID0gYXR0cnNbJ3RvdGFsU2Vjb25kcyddO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVPcGVuUmVjb3JkID0gdG90YWxTZWNvbmRzX2Zyb21BdHRyID09PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDbG9ja291dE9wdGlvbiA9IGhhdmVPcGVuUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5jb250aW51ZV9vcl9saW5lSXRlbV9jYXB0aW9uID0gIWhhdmVPcGVuUmVjb3JkID8gXCJDb250aW51ZVwiIDogXCJMaW5lIGl0ZW1cIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAxOjQyIGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG52YXIgdGltZXNoZWV0QXBwX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDUvMDMvMjAxOSAwNjozMyBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTNdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgIC8vIENvbnZlcnQgdG8gVFNcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEFwcC1maWxlbmFtZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBpcyBpbiB1c2UgYnkgRGF0YVNlcnZpY2VzLmpzXHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MzUgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA1XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcihcInRpbWVzaGVldENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJyRjb21waWxlJywgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJGNvbXBpbGUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE5LzIwMTkgMDY6NDMgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkZWQgdG8gcmUtYmluZCBuZy1jbGlja1xyXG5cclxuICAgICAgICAkc2NvcGUuJG9uKCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDE5MTEyMi0xNzU3Jyk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzJfaWQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMV9pZCkucmVwbGFjZVdpdGgoaXRlbS5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICRjb21waWxlKCQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLmNvbnRlbnRzKCkpKCRzY29wZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDQ6MTYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTYxNl0gLSBbMDAxXSAtIFRpbWVzaGVldCAtIHN0b3AgLyBjb250aW51ZVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwMzo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgICAgICAgICAgLy8gVGVzdGluZzogICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICAnanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnIFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0byB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCdcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBiZWdpbiAnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUtMiAtIG1vZGFsQ2xvY2tvdXRfMSAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0zIC0gbW9kYWxDbG9ja291dF8yICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA1LzE5LzIwMTkgMDg6MzkgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAyXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb3NpbmdIb29rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlIC0gMjAxOTExMTQtMTQ0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsIC0gMjAxOTExMTQtMTQ0OScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNC8yMDE5IDA0OjQxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwOF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgICAgIC8vIFRlc3RpbmcgLSBOb3Qgd29ya2luZy5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbC5jbG9zaW5nIC0gYmVnaW4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbC5jbG9zaW5nOiAnICsgKGNsb3NlZCA/ICdjbG9zZScgOiAnZGlzbWlzcycpICsgJygnICsgcmVhc29uICsgJyknKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiWW91IGFyZSBhYm91dCB0byBsZWF2ZSB0aGUgZWRpdCB2aWV3LiBVbmNhdWdodCByZWFzb24uIEFyZSB5b3Ugc3VyZT9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrZWQgb3V0c2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrZHJvcCBjbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc2NhcGUga2V5IHByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbC5jbG9zaW5nIC0gZW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uIChqb2JJRCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihqb2JJRCkpIHtcclxuICAgICAgICAgICAgICAgIGpvYklEID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNDoxMCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuXHJcblxyXG4gICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTYvMjAxOSAwNDozNSBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDJdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjM3IC0gdGltZXNoZWV0Rm9ybV9FZGl0ICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQwIC0gbW9kYWxFZGl0X3NhdmUnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQxIC0gbW9kYWxFZGl0X2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTYtMTY0MyAtIHRpbWVzaGVldEZvcm1fRWRpdCAtIGVuZCAnKTtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIC8vIDA5LzMwLzIwMTkgMDY6NTYgcG0gLSBTU04gLSAoSW5qZWN0IGpvYklkKVxyXG4gICAgLy8gMTEvMjgvMjAxOSAwMjo1OCBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDJdIC0gQ2xvY2staW4gbm90IHNhdmluZyAtIEFkZCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnam9iSWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIGpvYklkKSB7XHJcbiBcclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDI6NDcgYW0gLSBTU04gLSBbMjAxOTExMjgtMDI0N10gLSBbMDAxXSAtIENsb2NrLWluIG5vdCBzYXZpbmdcclxuICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2Iuam9iVGl0bGUgPSBkYXRhLmpvYlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdC5wcm9qZWN0VGl0bGUgPSBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZXRDb250cm9sbGVyIC0gZ2V0Sm9iU3VjY2VzcyAgLSAgMjAxOTA5MzAtMjEwNi1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IDAsIHRpdGxlOiAnJyB9O1xyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW5cIjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IHtcclxuICAgICAgICAgICAgICAgIHRpbWVMb2dJZDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB0aW1lTm93LFxyXG4gICAgICAgICAgICAgICAgd29ya0RldGFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmVJZDogJzInLFxyXG4gICAgICAgICAgICAgICAgam9iSWQ6IGpvYklkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuICBcclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuZGlzY2lwbGluZUlkID0gJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEzLzIwMTkgMTE6MDAgYW0gLSBTU04gLSBbMjAxOTA0MTMtMTAzN10gLSBBZGQgZGlzY2lwbGluZSBsb29rdXBcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAgIHVybDogICdhcGkvRGlzY2lwbGluZUFQSSdcclxuICAgICAgICAgICAgICAgIC8vICAgdG8gICB1cmw6ICcvYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhciAtIGZvckVhY2ggLSAyMDE5MDkyMC0wNzIwLW9cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwX1RpbWVzaGVldENvbnRyb2xsZXI6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTYvMjAxOSAwNDo0NyBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbi8vIENvcGllZCBmcm9tIFRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlclxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIC8vIDExLzE5LzIwMTkgMTI6NDggYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkaW5nICRjb21waWxlIGZvciBkeW5hbWljYWxseSBsb2FkZWQgdmlld1xyXG4gICAgLy8gMTEvMjIvMjAxOSAwMjoxOCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTVdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgIC8vIEluamVjdGluZyBTZXJ2aW5ncGFnZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICckdGltZW91dCcsICckcm9vdFNjb3BlJywgJ3NlcnZpbmdQYWdlJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMjUvMjAxOSAwNDowMyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDZdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4gICAgICAgIC8vIFJlbW92ZSBmdW5jdGlvbiBuYW1lXHJcbiAgICAgICAgLy8gICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgJHRpbWVvdXQsICRyb290U2NvcGUsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJFZGl0IFtcIiArIHNlcnZpbmdQYWdlICsgJ10nO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zZXRTdG9wVGltZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICAvL3RpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICRzY29wZS5nZXREaXNjaXBsaW5lcyhkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAsIDUwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDgpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDkpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9ICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lIC0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIHNhdmVkLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWZhY3RvciBbMjAxOTExMjAtMDQzOF0gLSBCZWdpblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZF90ZW1wID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTldIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlcnZpbmdQYWdlIDUgXCIsIHNlcnZpbmdQYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuVGltZWxvZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5Kb2JfVGltZWxvZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLlByb2plY3RzX1NlYXJjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5wcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEVuZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QyID0gZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvL307XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjUvMjAxOSAwNTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMTFdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBSZWZhY3RvciAtIFRpbWVsb2cgb25seVxyXG5cclxuaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRBcHAnO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNsb2Nrb3V0Y29udHJvbGxlcic7XHJcblxyXG5cclxuLy8gMTEvMTYvMjAxOSAwNDo1NyBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IFRpbWVsb2dMaW5rT3B0aW9ucyB9IGZyb20gJy4vVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zJztcclxuXHJcblxyXG5cclxudmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAvLyAxMS8yMS8yMDE5IDA2OjQ1IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwN10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgVGltZWxvZ0xpbmtPcHRpb25zLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuICAgIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwX1RpbWVzaGVldENvbnRyb2xsZXI7XHJcblxyXG4gICAgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbiAgICB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxuICAgIHRpbWVzaGVldEFwcF9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG4gICAgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IGRvU2V0dXAgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcbi8vIDA1LzE5LzIwMTkgMTI6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDAzXSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuLy8gMDkvMjEvMjAxOSAxMTo1MiBhbSAgLSBTU04gLSBVcGdyYWRpbmcgdG8gdXNlIEJhYmVsL1dXZWJwYWNrXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgLy8gMDUvMTkvMjAxOSAxMDowNiBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDZdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIC8vIDExLzE2LzIwMTkgMDI6NTIgcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAzXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjAvMjAxOSAwNDo0MyBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDNdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG4gICAgLy8gSW5qZWN0IFBhZ2VVcGRhdGVyU2VydmljZVxyXG5cclxuICAgIC8vIDExLzI1LzIwMTkgMDY6MzkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAzXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICdQYWdlVXBkYXRlclNlcnZpY2UnLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsIFBhZ2VVcGRhdGVyU2VydmljZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNi8yMDE5IDAzOjA4IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwNF0gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NTEgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAyXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZygkcm91dGVQYXJhbXMuaWQpO1xyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKTtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1vdXRcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMjo0OCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDJdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlclxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDcpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNilcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9ICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lIC0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1vdXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlciAtIDIwMTkxMTIwLTA0MjMgLSB0aW1lbG9nX2luZGV4IHVwZGF0ZSBbJywgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjUvMjAxOSAwNjozOCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDJdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlVXBkYXRlclNlcnZpY2UudGltZWxvZ19pbmRleCgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCwgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDA1LzE5LzIwMTkgMDk6NDUgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA1XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG4vLyBDb3BpZWQgZnJvbSBDbG9ja291dC5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gXCJ0aW1lc2hlZXRBcHBcIjtcclxuXHJcbnZhciB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjA3IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgQ2hhbmdlTW9uaXRvclNlcnZpY2UnKTtcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAndGltZWxvZ0lkJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCAkdGltZW91dCwgdGltZWxvZ0lkLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNvbnRpbnVlIC8gTGluZSBJdGVtXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1OSBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTBdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoID0gXCIxNVwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjQxIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwM10gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgICAgIC8vIHNldCBUaW1lTG9nSWQgPSAwXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuc3RhcnRUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNy8wMi8yMDE5IDA5OjE3IGFtIC0gU1NOIC0gQWRkZWQgbnVsbGlmeSBkYXRlTW9kaWZpZWQgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy5kYXRlTW9kaWZpZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMDc6MzEgYW0gLSBTU04gLSBGb3Jnb3R0ZW5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnRvdGFsU2Vjb25kcyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMoZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyIC0gc3VibWl0Rm9ybSAtICgxMDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmRpc2NpcGxpbmVJZCA9ICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU3IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAwOV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByZWNvcmQuIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDA1OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAxMF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyhmYWxzZSk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh6W3ldKSkge1xyXG4gICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHpbeV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpbeV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWFzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBieXBhc3NPYmplY3QgPSBmdW5jdGlvbiAob2JqMSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2hpZGRlbicgfHwgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDI6MjcgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGlmIChvYmoxLm5vQ2hhbmdlTW9uaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX3YwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3IgLSBzZXR1cE1vbml0b3InKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUgLSBiZWZvcmVVbmxvYWQgb24nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvciAtIDIwMTkxMTA5LTExMTQtRicpO1xyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIGdldHRlciAnKTtcclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykgKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKF9oYXZlQ2hhbmdlcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgX2hhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnX2hhdmVDaGFuZ2VzIDogWycsIF9oYXZlQ2hhbmdlcywgJ10nKTtcclxuICAgICAgICByZXR1cm4gX2hhdmVDaGFuZ2VzIDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlcyAgOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXSA9IF9oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gc2V0dGVyICcsX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgJyk7XHJcblxyXG52YXIgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgRE9TRVRVUCcpO1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wICAgSU4gICAgRE9TRVRVUCcpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignQ2hhbmdlTW9uaXRvclNlcnZpY2UnLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZS5mYWN0b3J5KFwiY2hhbmdlTW9uaXRvclNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VNb25pdG9yU2VydmljZSBmYWN0b3J5IC0gMjAxOTExMTYtMTM0OCB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2V0dXBNb25pdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbm9tcGxldGUgVGVzdGluZyBzZXR1cE1vbml0b3IgcGx1Z2dlZCBpblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBNb25pdG9yOiBfc2V0dXBNb25pdG9yLFxyXG4gICAgICAgICAgICAgICAgZ2V0SGF2ZUNoYW5nZXM6IF9nZXRIYXZlQ2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBfcmVzZXRcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gYm90dG9tICcpO1xyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xNy8yMDE5IDAyOjA0IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxOF0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcblxyXG4gICAgc29ydCgpOiBhbnksXHJcbiAgICBzb3J0bWV0aG9kKCk6IGFueSxcclxuICAgIGRpc3BsYXlBcnJvdygpOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA1OjIxIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwN10gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcbnZhciBoZWFkZXJXaXRoU29ydF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0hlYWRlcldpdGhTb3J0JywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHNjZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2hlYWRlcldpdGhTb3J0JywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1V0aWwvaGVhZGVyV2l0aFNvcnQuaHRtbFwiLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ubGlzdDogXCI9Y29sdW1ubGlzdFwiLCBzb3J0bWV0aG9kOiBcIiZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLnNvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWFkZXJXaXRoU29ydCAtIDIwMTkwOTIxLTA2MTMgLSBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc29ydG1ldGhvZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGxheUFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8veHh4eHh4ICAgICAgY29uc29sZS5sb2coXCJoZWFkZXJXaXRoU29ydCAtIDIwMTkxMTEwLTA3NDkgLSBbXCIsIHRoaXMuY29sdW1ubGlzdC5kZXNjLCBcIl1cIiwgdGhpcy5jb2x1bW5saXN0LmNvbHVtbk5hbWUsICBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW5saXN0LmRlc2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoXCImIzk2NTA7XCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKFwiJiM5NjYwO1wiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU6IGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IGhlYWRlcldpdGhTb3J0X2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDkvMjIvMjAxOSAxMjo0NSBwbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDhdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG52YXIgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgYXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdKb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlJywgJ3RpbWVzaGVldEFwcCcpO1xyXG5cclxuICAgIHZhciBqb2JTdGF0dXNEaXNwbGF5ID0gYXBwLmRpcmVjdGl2ZSgnam9iU3RhdHVzRGlzcGxheScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzWydqb2JTdGF0dXMnXSwgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gJzEnKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19vcGVuXzEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09ICcyJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfUGVuZGluZ18yJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA9PSAnMycpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX0NvbXBsZXRlZF8zJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX0NhbmNlbGxlZF80JztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnJlbW92ZUNsYXNzKCdqb2Jfc3RhdHVzX29wZW5fMSBqb2Jfc3RhdHVzX1BlbmRpbmdfMiBqb2Jfc3RhdHVzX0NvbXBsZXRlZF8zIGpvYl9zdGF0dXNfQ2FuY2VsbGVkXzQnKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5hZGRDbGFzcyhjbGFzc05hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgam9iU3RhdHVzRGlzcGxheTogam9iU3RhdHVzRGlzcGxheVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgVGltZWxvZ19TZXJ2aW5nUGFnZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG4vLyAxMS8yMC8yMDE5IDA0OjI5IGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwMV0gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcblxyXG4vLyBSZWZhY3RvciBbMjAxOTExMjAtMDQzOF1cclxudmFyIFBhZ2VVcGRhdGVyX0luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIHBhZ2VVcGRhdGVyX01vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUGFnZVVwZGF0ZXInLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBwYWdlVXBkYXRlcl9Nb2R1bGUuZmFjdG9yeSgnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI4IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGRpbmcgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3RpbWVsb2dfaW5kZXggPSBmdW5jdGlvbiAoaWRfdGVtcCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhU2VydmljZS50aW1lbG9nUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMiAnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9TdWNlc3MocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDMgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ19pbmRleDogX3RpbWVsb2dfaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9O1xyXG5cclxuY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gTG9hZGVkJyk7XHJcbiIsIu+7v1xyXG4vLyAxMS8yMi8yMDE5IDA5OjQxIHBtIC0gU1NOIC0gQ3JlYXRlZCB0byByZXN0b3JlIHBhZ2Ugb24gaGl0dGluZyB0aGUgYmFjayBidXR0b24gb3IgcmVjYWxsaW5nIHRoZSBwYWdlLlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggVG9wIC0gc2V0dXA/Pz8nKTtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdEZWZhdWx0QXBwbGljYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCAtIFNldHVwIC0gbmdEZWZhdWx0QXBwbGljYXRpb24gWycsIG5nRGVmYXVsdEFwcGxpY2F0aW9uLCAnXScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCAtIFNldHVwIC0gZGlyZWN0aXZlPz8/Jyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZScsIG5nRGVmYXVsdEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigncmVzdG9yZVByZXZpb3VzUGFnZUFuZFRhc2tRdWV1ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZUFuZFRhc2tRdWV1ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l0ZV9UYXNrX1F1ZXVlX0xpc3QnLCByZXN1bHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgZGlyZWN0aXZlICAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5UG9zdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgcmVzdG9yZVBvcyAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjdXJyZW50UmVjb3JkLnBvc1ksIGxlZnQ6IGN1cnJlbnRSZWNvcmQucG9zWCwgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRDbGlja1NvdXJjZSgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAtICBoaWdobGlnaHRDbGlja1NvdXJjZSAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwM1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEVsZW1lbnQ6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLnRleHQoJChzZWxlY3RlZEVsZW1lbnQpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gUmVtb3ZpbmcgY3VycmVudCByZW9jcmQuLi4gMTAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQgMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleCkgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFkZGVkQ2xhc3Mob2JqUmVmKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQob2JqUmVmKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvdXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUuaHRtbFwiLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA5LzE3LzIwMTkgMDk6MzEgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDAxXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE5LzIwMTkgMDQ6MjEgYW0gLSBTU04gLSBbMjAxOTA5MTktMDM1NF0gLSBbMDA1XSAtIFB1dHRpbmcgdGhpbmdzIGJhY2sgLSBDbGVhbnVwIGZyb20gaW1wbGVtZW50aW5nIEFNRCAtIEFkZGluZyB0c2NvbmZpZy5qc29uICAgICBcImFsd2F5c1N0cmljdFwiOiB0cnVlLFxyXG4vL2ltcG9ydCBhbmd1bGFyICA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG5cclxuICAgIGluaXQxMDEoKTogYW55LFxyXG4gICAgcHJldmlvdXNkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIG5leHRkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIHNheVdoYXRQYWdlV2VBcmVPbjogc3RyaW5nLFxyXG4gICAgc3Fsc3RhdHNyZWNvcmQ6IGFueSxcclxuICAgIG9uTmV4dCgpOiBhbnksXHJcbiAgICBvblByZXZpb3VzKCk6IGFueSxcclxuICAgIHBhZ2luZ21ldGhvZCgpOiBhbnlcclxuXHJcbn1cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNTowNyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDRdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ3BhZ2luZ0RpcmVjdGl2ZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdwYWdpbmdEaXJlY3RpdmUnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVXRpbC9wYWdpbmdEaXJlY3RpdmUuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luZ21ldGhvZDogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFnOiBcIj1cIixcclxuICAgICAgICAgICAgICAgIHNxbHN0YXRzcmVjb3JkOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VDb3VudCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzY29wZS5zcWxzdGF0c3JlY29yZC50b3RhbFJlY29yZENvdW50IC8gc2NvcGUuc3Fsc3RhdHNyZWNvcmQucmVjb3Jkc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEJ1dHRvbnMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByZXZpb3VzZGlzYWJsZWQgPSBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIDw9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubmV4dGRpc2FibGVkID0gc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA+PSB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlBhZ2UgXCIgKyBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgXCIgb2YgXCIgKyB0b3RhbFBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIk5vIHJlY29yZHMuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChzY29wZS5pbml0MTAxLCAxMDAwKTsgLy8gdG8gcGlja3VwIGFjdHVhbCB2YWx1ZXMgYWZ0ZXIgQVBJIGNhbGwgdG8gZ2V0IGRhdGEsIGp1c3QgaW4gY2FzZSEhIVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vblByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID0gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID4gMSA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyAtIDEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vbk5leHQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxQYWdlQ291bnQgPSBnZXRUb3RhbFBhZ2VDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPSB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPCB0b3RhbFBhZ2VDb3VudCA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyArIDEgOiB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFnaW5nbWV0aG9kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuaW5pdDEwMSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZTogcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA0NScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZV92MDAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlX3YwMDI6IGdldEluc3RhbmNlX3YwMDJcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwNjozMiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbmVudW0gVGltZWxvZ19TZXJ2aW5nUGFnZSB7IC8vIFNlcnZpbmdQYWdlIChmb3IgSURFIFNlYXJjaClcclxuXHJcbiAgICBUaW1lbG9nID0gJ1RpbWVsb2cnLFxyXG4gICAgSm9iX1RpbWVsb2cgPSAnSm9iX1RpbWVsb2cnLFxyXG4gICAgUHJvamVjdHNfU2VhcmNoID0gJ1Byb2plY3RzX1NlYXJjaCdcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHZhbHVlOiBUaW1lbG9nX1NlcnZpbmdQYWdlLCBjb21wYXJlVG86IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICByZXR1cm4gY29tcGFyZVRvID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgdGVzdF8xMDMsIFRpbWVsb2dfU2VydmluZ1BhZ2UsIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDA3OjMxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE5MzFdIC0gWzAwMV0gLSBKb2IgLSBvcHRpb24gdG8gY2hhbmdlIGpvYiBzdGF0dXNcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG52YXIgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgYW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSm9ic3RhdHVzQ2hhbmdlZFJlY29yZCcsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgYW5ndWxhcl9Nb2R1bGUuZGlyZWN0aXZlKCdqb2JTdGF0dXNDaGFuZ2VSZWNvcmQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgcGFyZW50VGFibGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvSm9icy9qb2JTdGF0dXNDaGFuZ2VSZWNvcmQuaHRtbCcsXHJcblxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTGluazogJ0AnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw6ICdAJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRUYWJsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VGFibGUgPSBlbC5wYXJlbnRzKCd0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRXaWR0aCA9IHBhcmVudFRhYmxlLndpZHRoKCkgLSAyMDsgLy8gIGpvYlN0YXR1c0NoYW5nZVJlY29yZF9vbiBwYWRkaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLmpvYlN0YXR1c0NoYW5nZVJlY29yZF9vbicpLmNzcyh7ICd3aWR0aCc6IHBhcmVudFdpZHRoICsgJ3B4JyB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5Q29udGVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc3BsYXlDb250ZW50ID0gISRzY29wZS5kaXNwbGF5Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRXaW5kb3dOYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZG93TmFtZSA9IHRoaXMuYWN0aW9uTGluay50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd05hbWUxID0gd2luZG93TmFtZS5yZXBsYWNlKC9bXmEtenxeMC05XSovaWcsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd05hbWUxO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXJfTW9kdWxlXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuLy8gMDkvMTgvMjAxOSAwOTo0MyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDFdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgaUZpeFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcclxuICAgIGpvYl9zdGF0dXNfY2xpY2soZW50cnk6IGFueSk6IGFueSxcclxuICAgIGpvYl9zdGF0dXNfY2hlY2tlZChlbnRyeTogYW55KTogYW55XHJcbn07XHJcblxyXG5cclxudmFyIGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYlN0YXR1c0RpcmVjdGl2ZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoXCJ1dGlsaXR5Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZS5kaXJlY3RpdmUoJ2pvYlN0YXR1c09wdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL2pvYnMvam9iU3RhdHVzLmh0bWxcIixcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGVudHJ5OiBcIj1cIixcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRmdW5jdGlvbjogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBqb2JzdGF0dXNlc3NlbGVjdGVkMTAyOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5qb2Jfc3RhdHVzX2NsaWNrID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZGZ1bmN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuam9iX3N0YXR1c19jaGVja2VkID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gdGhpcy5qb2JzdGF0dXNlc3NlbGVjdGVkMTAyLmluZGV4T2YoZW50cnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1NlbGVjdGVkID4gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU6IEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGVcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlIH07XHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDExOjMxIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwMl0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG5cclxuaW1wb3J0IHsgaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0hlYWRlcldpdGhTb3J0JztcclxuaW1wb3J0IHsgcGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9wYWdpbmdEaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4vSm9iU3RhdHVzRGlyZWN0aXZlJztcclxuaW1wb3J0IHsgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL0pvYnMvSm9ic0luZGV4Q29udHJvbGxlcic7XHJcbiAgXHJcblxyXG4vLyAxMS8xNC8yMDE5IDA4OjI4IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE5MzFdIC0gWzAwNl0gLSBKb2IgLSBvcHRpb24gdG8gY2hhbmdlIGpvYiBzdGF0dXMgXHJcbi8vIEFkZGluZyBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgXHJcbmltcG9ydCB7IGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSB9IGZyb20gJy4vSm9iU3RhdHVzQ2hhbmdlUmVjb3JkJztcclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbiBcclxuXHJcbmltcG9ydCB7IFBhZ2VVcGRhdGVyX0luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9QYWdlVXBkYXRlcic7XHJcbmltcG9ydCB7IFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9Qcm9qZWN0cy9Qcm9qZWN0c0luZGV4JztcclxuaW1wb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJztcclxuXHJcbmxldCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG5cclxuLy8gMTEvMjMvMjAxOSAwOTowNyBwbSAtIFNTTiBcclxuLy8gMTEvMjUvMjAxOSAwNDo0MCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDddIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBNb3ZlZCB0byB0b3AuICBEaXJlY3RpdmUgaXMgbm90IGxvYWRpbmc/Pz9cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4gXHJcblxyXG4vLyAxMS8yMi8yMDE5IDA5OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAyM10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwODoxOCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDldIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjIvMjAxOSAwMTo0OCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuIFxyXG5qb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlLkpvYnNfQW5ndWxhcl9Nb2R1bGU7XHJcblxyXG5oZWFkZXJXaXRoU29ydF9pbnN0YW5jZS5oZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTtcclxuXHJcbnBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZS5wYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5qb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UuSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZTtcclxuIFxyXG5qb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UuYW5ndWxhcl9Nb2R1bGU7XHJcbiBcclxuUGFnZVVwZGF0ZXJfSW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDU6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDExXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuLy8gUmVmYWN0b3IgLSBUaW1lbG9nIG9ubHlcclxuXHJcbmltcG9ydCAqIGFzIHggZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHknO1xyXG5cclxueC5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxubGV0IGQxID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIEFBQUEgJywgZDEpO1xyXG5cclxuXHJcbi8vMDgvMjMvMjAxOCAwMToyNCBhbSAtIFNTTlxyXG5cclxuLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcblxyXG5cclxuLy8gdmFyIHNpdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbm5hbWVzcGFjZSBzaXRlX2luc3RhbmNlX05TIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3Mgc2l0ZV9DbGFzcyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBsb2FkQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICBzZXREZWZhdWx0cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBOYW1lID0gJCh0aGlzKS5hdHRyKCdwb3B1cC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgYWxlcnQoJ2NsaWNrZWQgbWUhIGNtZE5hbWUgWycgKyBjbWROYW1lICsgXCJdIHBvcHVwLW5hbWUgIFtcIiArIHBvcHVwTmFtZSArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY21kLW5hbWUnLCBjbWROYW1lLCAncG9wdXBOYW1lJywgcG9wdXBOYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZSAnLCBqUXVlcnlPYmplY3ROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZTInLCBqUXVlcnlPYmplY3ROYW1lMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUsICdqUXVlcnlPYmplY3ROYW1lJywgalF1ZXJ5T2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZScsIGpRdWVyeU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gZnVuY3Rpb24gKHN0cjEsIGxlbiwgY2hhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBzdHIxLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMSA9IGNoYXIucmVwZWF0KGxlbikgKyBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczIgPSBzMS5zdWJzdHJpbmcobGVuICsgKHN0ci5sZW5ndGggLSBsZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDEwOjI4IGFtIC0gU1NOXHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wMi8yMDE5IDA3OjI1IHBtIC0gU1NOIC0gWzIwMTkxMTAxLTA1MjZdIC0gWzAxM10gLSBDaGVjayBsb2dpbiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gRGlkIG5vdCBmaW5pc2guXHJcbiAgICAgICAgICAgIC8vIFRvZG8tU1NOXHJcbiAgICAgICAgICAgICQoJy5tb2RhbCcpLm9uKCdzaG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgIC0gIDIwMTkxMTAyLTE5MzAgLSBTZXR0aW5nIGRyYWdnYWJsZS4nKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzI0LzIwMTkgMTE6MjAgcG0gLSBTU04gLSBEaXNhYmxlXHJcbiAgICAgICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzAxLzIwMTkgMDQ6NTIgYW0gLSBTU04gLSBVc2UgSmF2YVNjcmlwdCBvbmx5XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAxMjozMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDRdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgYSBvZiBsaXN0MSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG4gICAgICAgICAgICAgICAgbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoYSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE3LzIwMTkgMDQ6MTYgYW0gLSBTU04gLSBVcGRhdGUgdG8gZXhjbHVkZSBoaWdobGlnaHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPC9nLCAnJmx0OycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSA8aCBhbmQgPG4uIEFscmVhZHkgc2V0dXAgZm9yIDxpLiAgU2VlIHNpdGUuY3NzLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDcvMjAxOSAxMTo1MCBhbSAtIFNTTiAtIFVwZGF0ZSAtIE1hdGNoZXMgc2hvd24gaHR0cHM6Ly93d3cucmVnZXh0ZXN0ZXIuY29tL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPChbXml8Xi9pfF5ofF4vaHxebnxeL25dKXsxfVteXFxzfF4+XXsxfS9nLCAnJmx0OyQxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJ1xcbjEtLS1cXG5bJCZdXFxuMi0tLVxcblskMV1cXG4zLS0tXFxuWyQyXVxcbjQtLS1cXG5bJDNdXFxuXFxuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IGNvdmVycmVkIGgxLCBoMiwgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtub2Nrb3V0IGlzIGRvaW5nIGl0cyBvd24gdGhpbmcgd2hlbiBpdCBjb21lcyB0byB0YWdzLiBFdmlkZW50IHdpdGggdGhlIHVzZSBvZiBnZW5lcmljIHR5cGVzICggZnVuY3Rpb248U29tZVR5cGU+IClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICcmbHQ7JDMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgLy8gXHJcblxyXG5cclxuICAgICAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAgICAgLy8gU291cmNlIGh0dHBzOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL1VwbG9hZEZpbGUvMWQzMTE5L2RhdGUtc2VyaWFsaXphdGlvbi13aXRoLWFuZ3VsYXItanMtd2ViLWFwaS9cclxuXHJcbiAgICAgICAgaXNvODYwMVJlZ0V4ID0gLygxOXwyMHwyMSlcXGRcXGQoWy0vLl0pKDBbMS05XXwxWzAxMl0pXFwyKDBbMS05XXxbMTJdWzAtOV18M1swMV0pVChcXGRcXGQpKFs6Ly5dKShcXGRcXGQpKFs6Ly5dKShcXGRcXGQpLztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2godGhpcy5pc284NjAxUmVnRXgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZuQ29udmVyRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gICAgc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgICAgIC8vICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgLy8gICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB7XHJcblxyXG4gICAgICAgIC8vICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIC8vICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAvL30oKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmxldCBzaXRlX2luc3RhbmNlID0gbmV3IHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcygpO1xyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgIHNldFRpbWVvdXQoc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0geHh4eHh4eHh4eHgnKTtcclxuY29uc29sZS5sb2coc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKTtcclxuY29uc29sZS5sb2coZDIpO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZm4uaXNCb3VuZC0wMjQ1Jyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RoaXMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZGF0YSgnZXZlbnRzJylcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEoJ2V2ZW50cycpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSgnZXZlbnRzJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVmaW5lZCA8PDw8PDw8PDw8XCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyJyk7XHJcblxyXG5mdW5jdGlvbiBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAzMzMgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDInKTtcclxuXHJcbiAgICBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=