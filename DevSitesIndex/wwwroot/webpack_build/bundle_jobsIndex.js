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

          var keyValueSelected = null;

          if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {
            keyValueSelected = this.angularControlId;
          }

          if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {
            keyValueSelected = keyColumnValue;
          }

          if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {
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
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log("selectedElement: *********************************");
              console.log(selectedElement);

              if (selectedElement && selectedElement.attributes) {
                var bypass = false;

                if (selectedElement.nodeName.toUpperCase() === "DIV") {
                  bypass = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vUHJvamVjdHMvUHJvamVjdHNJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5LnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvSGVhZGVyV2l0aFNvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9Kb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9wYWdpbmdEaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0NoYW5nZVJlY29yZC50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYlN0YXR1c0RpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9qb2JzL0pvYnNJbmRleF9tYWluLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0Is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Ozs7O0FDNWNBLHlCIiwiZmlsZSI6ImJ1bmRsZV9qb2JzSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA5OjE0IGFtIC0gU1NOIC0gUGFzcyBwcm9qZWN0SWRcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkICsgXCI/cHJvamVjdElkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBjb2x1bW5CYWcuZmtfZmlsdGVyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU2VydmljZXMgLSAyMDE5MDkzMC0xOTA3IC0gZ2V0Sm9iIFtcIiArIGlkICsgXCJdXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCJcclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG4vLyBBZGQgYXV0b2ZvY3VzPVwidHJ1ZVwiIHRvIHNldCBmb2N1c1xyXG5cclxudmFyIGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vLy8vICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMTkxMTE2LTA1NTFcIik7XHJcblxyXG4gICAgICAgIC8vLy8vICAgY29uc29sZS5sb2coJ2RlZmF1bHRBcHBOYW1lIHR5cGUgYW5kIG5hbWUgWycsIHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpLCAnXSBbJywgZGVmYXVsdEFwcE5hbWUsICddJyk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChkZWZhdWx0QXBwTmFtZSkgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBkZWZhdWx0QXBwTmFtZSA9IFwiZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldFwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGRlZmF1bHRBcHBOYW1lLCBbJ3VpLmJvb3RzdHJhcCddKTtcclxuXHJcblxyXG4gICAgICAgIHZhciB1dGlsaXR5Q29udHJvbGxlcl9vYmplY3RSZWYgPSBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBOZWVkZWQgdG8gYmUgYWJsZSB0byBzdWJtaXQgZm9ybVxyXG4gICAgICAgICAgICB2YXIgZm9ybU5hbWUgPSAkYXR0cnNbJ2Zvcm1OYW1lJ107XHJcbiAgICAgICAgICAgIHZhciBmb3JtMSA9ICQoXCJbbmFtZT0nXCIgKyBmb3JtTmFtZSArIFwiJ11cIikuZ2V0KDApO1xyXG4gICAgICAgICAgICB2YXIgYWJzVXJsID0gJGxvY2F0aW9uLmFic1VybCgpLnRyaW0oKTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vICQoZm9ybTEpLmF0dHIoXCJhY3Rpb25cIiwgYWJzVXJsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybV8yID0gZnVuY3Rpb24gKGV2ZW50LCBmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHN1Ym1pdEZvcm1fMlwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gc3VibWl0Rm9ybV8xXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZm9ybS4kdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgndmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmUnLCB2YWxpZGF0ZURyb3Bkb3duTGlzdERpcmVjdGl2ZUZ1bmMpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZURyb3Bkb3duTGlzdERpcmVjdGl2ZUZ1bmMoJGh0dHAsICRxKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0ciwgbmdNb2RlbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbC4kYXN5bmNWYWxpZGF0b3JzLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Q2hlY2syID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbFZhbHVlICYmIG1vZGVsVmFsdWUuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBbJyRodHRwJywgJyRxJywgJyRzY29wZScsICckdGltZW91dCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHEsICRzY29wZSwgJHRpbWVvdXQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDg6MjkgYW0gLSBTU04gLSBBZGRpbmcgLSBOZWVkIHRvIGluaXRpYWwgZm9yICR3YXRjaCB0byB3b3JrLlxyXG4gICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYJywgZnVuY3Rpb24gKG5ld1ZhbHVlOiBMb29rdXBSZWNvcmQsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lLiRkaXJ0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmRvU2V0SGF2ZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2xkVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbXCIsIG9sZFZhbHVlLCBcIl1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXdWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIltcIiwgbmV3VmFsdWUsIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXRjb3VudCBcIiwgdm0uaGl0Q291bnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8ga2V5Q29sdW1uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuZGlzY2lwbGluZWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDQ6NDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iLnByb2plY3RpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbHVtblZhbHVlID0gJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8gIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgPSAoOTk5LUEpIC0gdGhpcy5hbmd1bGFyQ29udHJvbElkJywgdGhpcy5hbmd1bGFyQ29udHJvbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLyAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSA9ICg5OTktQikgLSBrZXlDb2x1bW5WYWx1ZSBbJywga2V5Q29sdW1uVmFsdWUsICddJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleVZhbHVlU2VsZWN0ZWQgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSB0aGlzLmFuZ3VsYXJDb250cm9sSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiBrZXlDb2x1bW5WYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVTZWxlY3RlZCA9IGtleUNvbHVtblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9PT0gdW5kZWZpbmVkICYmIGtleVZhbHVlU2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYeHggc2V0IGRlZmFsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWHh4IHNldCBkZWZhbHRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFh4eCBzZXQgZGVmYWx0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYeHggc2V0IGRlZmFsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWHh4IHNldCBkZWZhbHRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQoa2V5VmFsdWVTZWxlY3RlZCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXJlIHdlIGV2ZXIgcmVhY2hpbmcgdGhpcyBwb2ludD9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtICh4eHh4eDEwMS1CKSB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYICAgIFsnLCB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLCAnXScpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHhcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdm0uc2V0SW5wdXRWYXJpYWJsZXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gX2lzVmFsaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKiogX2lzVmFsaWQnLCBfaXNWYWxpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpcnN0UnVuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaXNWYWxpZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkX2xvY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuZ3VsYXJDb250cm9sSWQgIT09IHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFyQ29udHJvbElkID0gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KHRoaXMuYW5ndWxhckNvbnRyb2xJZCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWRfbG9jYWwgPSB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnZudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm52blwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZF9sb2NhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IF9pc1ZhbGlkX2xvY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNWYWxpZEJvb2xlYW4gKDA1MjIpXCIsIHZtLmlzVmFsaWRCb29sZWFuKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2lzVmFsaWRfbG9jYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlRW50cnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdCAtIHZhbGlkYXRlRW50cnkgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8vICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLyAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDU6MzAgYW0gLSBTU04gLSBbMjAxOTA5MTYtMDM1NV0gLSBbMDA4XSAtIEFkZGluZyBKb2JBUEkgY29udHJvbGxlclxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGlzY2lwbGluZUlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8gICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgLSAyMDE5MTExNy0xMDI1IC0gMTAzLUEnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFuZ3VsYXJDb250cm9sSWQgPSBkYXRhLmRpc2NpcGxpbmVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLyAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDMtQicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLnRhX2lkLCB0aXRsZTogZGF0YS50YV9kZXNjcmlwdGlvbiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYW5ndWxhckNvbnRyb2xJZCA9IGRhdGEudGFfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwNl0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGlsZSBkZXZlbG9wbWVudCBpbiBwcm9ncmVzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLnRhX2lkLCB0aXRsZTogaXRlbS50YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDAyOjU3IGFtIC0gU1NOIC0gQWRkZWQgdG8gZ2V0IGN1cnJlbnQgdmFsdWUgYW5kIHVwZGF0ZSB2aWV3LlxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50ID0gZnVuY3Rpb24gKGxvb2t1cElEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLy8vL2NvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBnZXREaXNjaXBsaW5lQ3VycmVudCAxMTExIFsnLCB2bS5BUElVcmwsICddJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy9jb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gZ2V0RGlzY2lwbGluZUN1cnJlbnQgMjIyMiBbJywgbG9va3VwSUQsICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBJRCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsICsgXCIvXCIgKyBsb29rdXBJRFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7IHZtLmlzVmFsaWQoKTsgfSwgNjAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7IHZtLmlzUmVhZHkgPSB0cnVlOyB9LCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvRHJvcGRvd25MaXN0L0Ryb3BEb3duTGlzdERpcmVjdGl2ZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlDb2x1bW46IFwiQGtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIiwgLy8gTmVlZGVkIGZvciBwb3N0aW5nIGZvcm0gKFJlcGxhY2luZyB1cmwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQ29udHJvbElkOiBcIj0/YWNpXCJcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwNToyOSBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wNTI5XSAtIFswMDFdIC0gQXV0b2ZvY3VzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXRmb2N1c0Z1bmMgPSBmdW5jdGlvbiAoZWxlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0T2JqID0gZWxlbS5maW5kKCdpbnB1dFt0eXBlPXRleHRdJykuZmlsdGVyKCc6dmlzaWJsZTpmaXJzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dE9iai52YWwoKSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE9iai5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgc2V0Zm9jdXNGdW5jKGVsKTsgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIC8vIDExLzE2LzIwMTkgMDY6MDIgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDA1XSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4gICAgICAgIC8vIFJldmlzZWQgc28gd2UgY2FuIHBhc3MgaW4gZGVmYXVsdCBhcHBsaWNhdGlvbiBuYW1lIGZvciBtb2R1bGUuXHJcbiAgICAgICAgLy8gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZTogZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLFxyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPiBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgSUNvbHVtbkJhZyBmcm9tICcuLi9JQ29sdW1uQmFnJztcclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbmltcG9ydCB7IGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tIFwiLi4vVXRpbC9Kb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlXCI7XHJcblxyXG5qb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlO1xyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDQ6NDIgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDAzXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG52YXIgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSm9iSW5kZXhDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMjcvMjAxOSAwOToyNCBhbSAtIFNTTiAtIFBhc3NpbmcgaW4gcHJvamVjdElkXHJcbiAgICBKb2JzX0FuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoJ2pvYnNJbmRleENvbnRyb2xsZXInLCBbJyRzY29wZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICckdGltZW91dCcsICckc2NlJywgJyR1aWJNb2RhbCcsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCAkdGltZW91dCwgJHNjZSwgJHVpYk1vZGFsKSB7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuaGFzRXJyb3JzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAwO1xyXG4gICAgICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2hvd09yaWdpbmFsVGFibGUgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgcWQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkgbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBpdGVtLnNwbGl0KFwiPVwiKSwgayA9IHNbMF0sIHYgPSBzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHNbMV0pOyAocWRba10gPSBxZFtrXSB8fCBbXSkucHVzaCh2KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0SWQgPSBxZFsnaWQnXTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMToxNSBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTBdIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyRzY29wZS5zcWxTdGF0c1JlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gIFNldHVwIGludGlhaWwgdmFsdWVzIGZvciBsaXN0XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gWzFdOyAvLyBvcGVuXHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnX2RlZmF1bHRzOiBJQ29sdW1uQmFnID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogJz8/Pz8nLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZVNlbGVjdGVkOiAnJywvLyBsZWF2ZSBibGFuay4gIExlbmd0aCBpcyB1c2VkIHRvIHNlbGVjdCBzZWxlY3RlZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogNCxcclxuICAgICAgICAgICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCI/Pz9cIixcclxuICAgICAgICAgICAgICAgIGpvYl9zdGF0dXNlc19zZWxlY3RlZDogWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRdLFxyXG4gICAgICAgICAgICAgICAgZmtfZmlsdGVyOiBwcm9qZWN0SWRcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgX2ZpZWxkTGlzdDogSUNvbHVtbkJhZ1tdID0gW1xyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWdfZGVmYXVsdHMsIGNvbHVtbk5hbWU6ICdwcm9qZWN0VGl0bGVfRm9yQWN0aXZpdHknLCBjYXB0aW9uOiAnUHJvamVjdCBUaXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnam9iVGl0bGUnLCBjYXB0aW9uOiAnSm9iIFRpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWdfZGVmYXVsdHMsIGNvbHVtbk5hbWU6ICdkYXRlQWRkZWQnLCBjYXB0aW9uOiAnRGF0ZSBBZGRlZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnZGF0ZVVwZGF0ZWQnLCBjYXB0aW9uOiAnRGF0ZSBVcGRhdGVkJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWdfZGVmYXVsdHMsIGNvbHVtbk5hbWU6ICdhY3Rpdml0eUFnZScsIGNhcHRpb246ICdBY3Rpdml0eSBBZ2UnLCBjb2x1bW5OYW1lU2VsZWN0ZWQ6ICdhY3Rpdml0eUFnZScsIGRlc2M6IHRydWUgfSxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RDb2x1bW5FbnRyaWVzID0gX2ZpZWxkTGlzdC5maWx0ZXIociA9PiByLmNvbHVtbk5hbWVTZWxlY3RlZC5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Q29sdW1uRW50cmllc1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0Q29sdW1uRW50cmllcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RDb2x1bW5FbnRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbkJhZyA9IHNlbGVjdENvbHVtbkVudHJpZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0ID0gX2ZpZWxkTGlzdDtcclxuXHJcblxyXG4gICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzTGlzdChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYnMoY29sdW1uQmFnKS50aGVuKGdldEpvYnNTdWNjZXNzLCBnZXRKb2JzRXJyb3IpLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3QuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5kZXNjID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc0Vycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5oYXNFcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVlZGJhY2tNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGRhdGEuZmVlZGJhY2tNZXNzYWdlc1tpXS5lcnJvck1lc3NhZ2VzLmxlbmd0aDsgaTIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2VzICs9IGRhdGEuZmVlZGJhY2tNZXNzYWdlc1tpXS5lcnJvck1lc3NhZ2VzW2kyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YWJhZyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYnM6IGRhdGEuZGF0YUxpc3QsIGNvbHVtbjogZGF0YS5zcWxTdGF0c1JlY29yZC5jb2x1bW5OYW1lLCBkZXNjOiBkYXRhLnNxbFN0YXRzUmVjb3JkLmRlc2NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gY29udmVydCB0byBhbiBhcnJheS4gV2UgZG9uJ3QgaGF2ZSBhIHNldHRlciBvbiBhbiBpbnRlcmZhY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gZGF0YS5zcWxTdGF0c1JlY29yZC5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VycmVudENvbHVtbkluZGV4ID0gJHNjb3BlLmZpZWxkc0xpc3QuZmluZEluZGV4KHIgPT4gci5jb2x1bW5OYW1lID09PSBkYXRhLnNxbFN0YXRzUmVjb3JkLmNvbHVtbk5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDb2x1bW5JbmRleCA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3RbY3VycmVudENvbHVtbkluZGV4XS5kZXNjID0gZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNSAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzRXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDE5MTExMC0wOTM2IC0gSm9ic0luZGV4Q29udHJvbGxlciAtIGdldEpvYnNDYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zb3J0TWV0aG9kMTAxID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5CYWcuY29sdW1uTmFtZSAhPSBjb2x1bW5CYWcuY29sdW1uTmFtZVNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uQmFnLmNvbHVtbk5hbWVTZWxlY3RlZCA9IGNvbHVtbkJhZy5jb2x1bW5OYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uQmFnLmRlc2MgPSAhY29sdW1uQmFnLmRlc2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdpbmdtZXRob2QxMDEgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSBjb2x1bW5CYWc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDEwOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwN10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c19jaGFuZ2VkMTAxID0gZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZlNlbGVjdGVkSXRlbSA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuaW5kZXhPZihqb2Jfc3RhdHVzLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZlNlbGVjdGVkSXRlbSA+IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuc3BsaWNlKGluZGV4T2ZTZWxlY3RlZEl0ZW0sIDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRbJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGhdID0gam9iX3N0YXR1cy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNxbFN0YXRzUmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7IC8vLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDU6MjAgYW0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDA3XSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX2NoZWNrQWxsID0gZnVuY3Rpb24gKGVuYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLmpvYl9zdGF0dXNlcy5tYXAoZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHsgcmV0dXJuIGpvYl9zdGF0dXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYl9TdGF0dXNlcygpLnRoZW4oZ2V0Sm9iX1N0YXR1c2VzU3VjY2VzcywgZ2V0Sm9iX1N0YXR1c2VzRXJyb3IpLmNhdGNoKGdldEpvYl9TdGF0dXNlc0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlc0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvYkluZGV4Q29udHJvbGxlciAtICAyMDE5MDkyMi0wNzU4IC0gRGF0YSBlcnJvciA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgKGNhdGNoKSA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiAgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIgIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzKCk7XHJcblxyXG5cclxuICAgICAgICB9XVxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgSm9ic19Bbmd1bGFyX01vZHVsZTogSm9ic19Bbmd1bGFyX01vZHVsZVxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwiaW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG4vLyAwOS8yNC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gWzIwMTkwOTI0LTA3MzFdIC0gWzAwOF0gLSBQcm9qZWN0IHNlYXJjaCBvcHRpb25cclxuLy8gMTEvMjIvMjAxOSAwMTo0MCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTJdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuLy8gUmVwbGFjZSBpbmNvbXBsZXRlIGNvZGUgZm9yIHByb2plY3Qgc2VhcmNoXHJcblxyXG52YXIgUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Byb2plY3RJbmRleCcsIGRlZmF1bHRBcHBOYW1lKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcignUHJvamVjdHNJbmRleENvbnRyb2xsZXInLCBbJyRzY29wZScsICckY29tcGlsZScsIGZ1bmN0aW9uICgkc2NvcGUsICRjb21waWxlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdHNJbmRleENvbnRyb2xsZXIgLSBuZXcgLSAyMDE5MTEyMi0xMzQ0Jyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDAxOjU3IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiRvbignVGltZUxvZ19JbmRleF9SZWZyZXNoJywgZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RzSW5kZXggLSBGaXJpbmcgVGltZUxvZ19JbmRleF9SZWZyZXNoIC0gMjAxOTExMjItMTQwNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCBpdGVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMl9pZCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMV9pZCkucmVwbGFjZVdpdGgoaXRlbS5odG1sKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkY29tcGlsZSgkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5jb250ZW50cygpKSgkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBQcm9qZWN0SW5kZXhDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG5cclxuXHJcbiIsIlxyXG4vLyAxMS8yMS8yMDE5IDA1OjUwIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwM10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIFRpbWVsb2dfU2VydmluZ1BhZ2UgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBJU2NvcGUgfSBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX2xvY2FsIGV4dGVuZHMgSVNjb3BlIHtcclxuXHJcbiAgICBjb250aW51ZV9vcl9saW5lSXRlbV9jYXB0aW9uOiBzdHJpbmcsXHJcbiAgICBzaG93Q2xvY2tvdXRPcHRpb246IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbnZhciBUaW1lbG9nTGlua09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZWxvZ0xpbmtPcHRpb25zIC0gMjAxOTExMjEtMDU1NC1CXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdEFwcE5hbWUgdHlwZSBhbmQgbmFtZSBbJywgdHlwZW9mIChkZWZhdWx0QXBwTmFtZSksICddIFsnLCBkZWZhdWx0QXBwTmFtZSwgJ10nKTtcclxuXHJcblxyXG4gICAgICAgIC8vdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoZGVmYXVsdEFwcE5hbWUsIFtdKTtcclxuICAgICAgICB2YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lbG9nTGlua09wdGlvbnMnLCBkZWZhdWx0QXBwTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCd0aW1lbG9nTGlua09wdGlvbnMnLCBbJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsIGZ1bmN0aW9uICgkdWliTW9kYWwsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVGltZXNoZWV0L1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucy5odG1sXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICAvL2JpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fRWRpdCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZWxvZ0xpbmtPcHRpb25zIC0gWycgKyB0aW1lbG9nSWQgKyAnXSAgT09PT09PT09PT09PT09PT09PJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSAtIHgyMDE5MTExNi0xNjM3IC0gdGltZXNoZWV0Rm9ybV9FZGl0ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmluZ1BhZ2UnLCBzZXJ2aW5nUGFnZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsRWRpdC5yZXN1bHQudGhlbihtb2RhbEVkaXRfc2F2ZSwgbW9kYWxFZGl0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlIC0geDIwMTkxMTE2LTE2NDAgLSBtb2RhbEVkaXRfc2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDEgLSBtb2RhbEVkaXRfY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQzIC0gdGltZXNoZWV0Rm9ybV9FZGl0IC0gZW5kICcpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gYmVnaW4gJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0yIC0gbW9kYWxDbG9ja291dF8xICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTMgLSBtb2RhbENsb2Nrb3V0XzIgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBlbmQgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSAtIDIwMTkxMTE0LTE0NDgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCAtIDIwMTkxMTE0LTE0NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA4OjQ1IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gSm9iSW5kZXhDb250cm9sbGVyLnRzIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTFdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIC0gV3Jvbmcgd2F5IHRvIGdvIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAoam9iSUQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfV0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFNlY29uZHM6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6ICdAJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfbG9jYWwsIGVsLCBhdHRycykge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFNlY29uZHNfZnJvbUF0dHIgPSBhdHRyc1sndG90YWxTZWNvbmRzJ107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZU9wZW5SZWNvcmQgPSB0b3RhbFNlY29uZHNfZnJvbUF0dHIgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2hvd0Nsb2Nrb3V0T3B0aW9uID0gaGF2ZU9wZW5SZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRpbnVlX29yX2xpbmVJdGVtX2NhcHRpb24gPSAhaGF2ZU9wZW5SZWNvcmQgPyBcIkNvbnRpbnVlXCIgOiBcIkxpbmUgaXRlbVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFRpbWVsb2dMaW5rT3B0aW9ucyB9O1xyXG5cclxuIiwiXHJcbi8vIDA0LzEyLzIwMTkgMDE6NDIgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRBcHBfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwNS8wMy8yMDE5IDA2OjMzIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxM10gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgLy8gQ29udmVydCB0byBUU1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0QXBwLWZpbGVuYW1lJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlIGlzIGluIHVzZSBieSBEYXRhU2VydmljZXMuanNcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzozNSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDVdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuICAgIC8vIEluamVjdCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKFwidGltZXNoZWV0Q29udHJvbGxlclwiLCBbJyRzY29wZScsICckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWwsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCAkY29tcGlsZSkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTkvMjAxOSAwNjo0MyBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRlZCB0byByZS1iaW5kIG5nLWNsaWNrXHJcblxyXG4gICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkxMTIyLTE3NTcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMl9pZCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5yZXBsYWNlV2l0aChpdGVtLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tPdXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUgLSBtb2RhbENsb2Nrb3V0ICAtIGJlZ2luICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0yIC0gbW9kYWxDbG9ja291dF8xICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTMgLSBtb2RhbENsb2Nrb3V0XzIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBlbmQgJyk7XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDE5MTExNC0xNDQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDE5MTExNC0xNDQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE0LzIwMTkgMDQ6NDEgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA4XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAgICAgLy8gVGVzdGluZyAtIE5vdCB3b3JraW5nLlxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb2RhbENsb3NpbmdIb29rKCRzY29wZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGFsLmNsb3NpbmcgLSBiZWdpbicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ21vZGFsLmNsb3NpbmcnLCBmdW5jdGlvbiAoZXZlbnQsIHJlYXNvbiwgY2xvc2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGFsLmNsb3Npbmc6ICcgKyAoY2xvc2VkID8gJ2Nsb3NlJyA6ICdkaXNtaXNzJykgKyAnKCcgKyByZWFzb24gKyAnKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJZb3UgYXJlIGFib3V0IHRvIGxlYXZlIHRoZSBlZGl0IHZpZXcuIFVuY2F1Z2h0IHJlYXNvbi4gQXJlIHlvdSBzdXJlP1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tlZCBvdXRzaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhY2tkcm9wIGNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGUga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVzY2FwZSBrZXkgcHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsLmNsb3NpbmcgLSBlbmQnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGpvYklEKSkge1xyXG4gICAgICAgICAgICAgICAgam9iSUQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjEwIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG5cclxuXHJcbiAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2MzcgLSB0aW1lc2hlZXRGb3JtX0VkaXQgJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW9kYWxFZGl0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLCAgLy8gdXNpbmcgc2FtZSBodG1sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDAgLSBtb2RhbEVkaXRfc2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDEgLSBtb2RhbEVkaXRfY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQzIC0gdGltZXNoZWV0Rm9ybV9FZGl0IC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMl0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH07XHJcbiIsIlxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG4vLyAwOS8xOC8yMDE5IDExOjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwOF0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMDkvMzAvMjAxOSAwNjo1NiBwbSAtIFNTTiAtIChJbmplY3Qgam9iSWQpXHJcbiAgICAvLyAxMS8yOC8yMDE5IDAyOjU4IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTAyNDddIC0gWzAwMl0gLSBDbG9jay1pbiBub3Qgc2F2aW5nIC0gQWRkIGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdqb2JJZCcsXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBqb2JJZCkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgZmVlZGJhY2tcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2Ioam9iSWQpLnRoZW4oZ2V0Sm9iU3VjY2VzcywgZ2V0Sm9iRXJyb3IpLmNhdGNoKGdldEpvYkNhdGNoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYlN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuam9iID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5qb2JUaXRsZSA9IGRhdGEuam9iVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0LnByb2plY3RUaXRsZSA9IGRhdGEucHJvamVjdC5wcm9qZWN0VGl0bGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGV0Q29udHJvbGxlciAtIGdldEpvYlN1Y2Nlc3MgIC0gIDIwMTkwOTMwLTIxMDYtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogMCwgdGl0bGU6ICcnIH07XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1pblwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0ge1xyXG4gICAgICAgICAgICAgICAgdGltZUxvZ0lkOiAwLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHRpbWVOb3csXHJcbiAgICAgICAgICAgICAgICB3b3JrRGV0YWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZUlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBqb2JJZDogam9iSWRcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcF9UaW1lc2hlZXRDb250cm9sbGVyOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vIDExLzE2LzIwMTkgMDQ6NDcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4vLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG52YXIgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xOS8yMDE5IDEyOjQ4IGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIEFkZGluZyAkY29tcGlsZSBmb3IgZHluYW1pY2FsbHkgbG9hZGVkIHZpZXdcclxuICAgIC8vIDExLzIyLzIwMTkgMDI6MTggcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAvLyBJbmplY3RpbmcgU2VydmluZ3BhZ2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnJHRpbWVvdXQnLCAnJHJvb3RTY29wZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDQ6MDMgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDA2XSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuICAgICAgICAvLyBSZW1vdmUgZnVuY3Rpb24gbmFtZVxyXG4gICAgICAgIC8vICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCAkdGltZW91dCwgJHJvb3RTY29wZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiRWRpdCBbXCIgKyBzZXJ2aW5nUGFnZSArICddJztcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2V0U3RvcFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy90aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMoZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRFZGl0Q29udHJvbGxlciAtIDIwMTkxMTE2LTE2NDgnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgxNjQ4KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRFZGl0Q29udHJvbGxlciAtIDIwMTkxMTE2LTE2NDknKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgxNjQ5KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIlJlY29yZCBzYXZlZC5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdIC0gQmVnaW5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaWRfdGVtcCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzIyLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE5XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2aW5nUGFnZSA1IFwiLCBzZXJ2aW5nUGFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLlRpbWVsb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuSm9iX1RpbWVsb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS50aW1lbG9nUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5Qcm9qZWN0c19TZWFyY2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UucHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9TdWNlc3MocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWZhY3RvciBbMjAxOTExMjAtMDQzOF0gLSBFbmRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAvLyAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgLy8gICAgICAgIHVybDogJ2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgLy8gICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAgICAgLy99O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vIDExLzI1LzIwMTkgMDU6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDExXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuLy8gUmVmYWN0b3IgLSBUaW1lbG9nIG9ubHlcclxuXHJcbmltcG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0QXBwJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vdGltZXNoZWV0Y29udGludWVjb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXInO1xyXG5cclxuXHJcbi8vIDExLzE2LzIwMTkgMDQ6NTcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG5pbXBvcnQgeyB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRFZGl0Q29udHJvbGxlcic7XHJcblxyXG5pbXBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfSBmcm9tICcuL1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucyc7XHJcblxyXG5cclxuXHJcbnZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgLy8gMTEvMjEvMjAxOSAwNjo0NSBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDddIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgIFRpbWVsb2dMaW5rT3B0aW9ucy5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbiAgICB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcF9UaW1lc2hlZXRDb250cm9sbGVyO1xyXG5cclxuICAgIHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG4gICAgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbiAgICB0aW1lc2hlZXRBcHBfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxuICAgIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgeyBkb1NldHVwIH07XHJcblxyXG4iLCJcclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG4vLyAwNS8xOS8yMDE5IDEyOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwM10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbi8vIDA5LzIxLzIwMTkgMTE6NTIgYW0gIC0gU1NOIC0gVXBncmFkaW5nIHRvIHVzZSBCYWJlbC9XV2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIC8vIDA1LzE5LzIwMTkgMTA6MDYgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA2XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICAvLyAxMS8xNi8yMDE5IDAyOjUyIHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwM10gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgIC8vIEluamVjdCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIC8vIDExLzIwLzIwMTkgMDQ6NDMgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAzXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuICAgIC8vIEluamVjdCBQYWdlVXBkYXRlclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yNS8yMDE5IDA2OjM5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE4MDNdIC0gWzAwM10gLSBjbG9jay1vdXQgaXMgbm90IHVwZGF0aW5nIGluZGV4IHJvd1xyXG4gICAgLy8gQWRkZWQgc2VydmluZ1BhZ2VcclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgJ3NlcnZpbmdQYWdlJyxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsIFBhZ2VVcGRhdGVyU2VydmljZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNi8yMDE5IDAzOjA4IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwNF0gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NTEgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAyXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZygkcm91dGVQYXJhbXMuaWQpO1xyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKTtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1vdXRcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMjo0OCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDJdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlclxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDcpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNilcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9ICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lIC0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1vdXRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlciAtIDIwMTkxMTIwLTA0MjMgLSB0aW1lbG9nX2luZGV4IHVwZGF0ZSBbJywgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjUvMjAxOSAwNjozOCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDJdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlVXBkYXRlclNlcnZpY2UudGltZWxvZ19pbmRleCgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCwgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIlxyXG5cclxuXHJcbi8vIDA1LzE5LzIwMTkgMDk6NDUgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA1XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG4vLyBDb3BpZWQgZnJvbSBDbG9ja291dC5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gXCJ0aW1lc2hlZXRBcHBcIjtcclxuXHJcbnZhciB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjA3IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgQ2hhbmdlTW9uaXRvclNlcnZpY2UnKTtcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAndGltZWxvZ0lkJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCAkdGltZW91dCwgdGltZWxvZ0lkLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNvbnRpbnVlIC8gTGluZSBJdGVtXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1OSBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTBdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoID0gXCIxNVwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjQxIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwM10gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgICAgIC8vIHNldCBUaW1lTG9nSWQgPSAwXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuc3RhcnRUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNy8wMi8yMDE5IDA5OjE3IGFtIC0gU1NOIC0gQWRkZWQgbnVsbGlmeSBkYXRlTW9kaWZpZWQgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy5kYXRlTW9kaWZpZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMDc6MzEgYW0gLSBTU04gLSBGb3Jnb3R0ZW5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnRvdGFsU2Vjb25kcyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMoZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyIC0gc3VibWl0Rm9ybSAtICgxMDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmRpc2NpcGxpbmVJZCA9ICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU3IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAwOV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByZWNvcmQuIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDA1OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAxMF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyhmYWxzZSk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIlxyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh6W3ldKSkge1xyXG4gICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHpbeV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpbeV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWFzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBieXBhc3NPYmplY3QgPSBmdW5jdGlvbiAob2JqMSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2hpZGRlbicgfHwgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDI6MjcgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGlmIChvYmoxLm5vQ2hhbmdlTW9uaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX3YwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3IgLSBzZXR1cE1vbml0b3InKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUgLSBiZWZvcmVVbmxvYWQgb24nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvciAtIDIwMTkxMTA5LTExMTQtRicpO1xyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIGdldHRlciAnKTtcclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykgKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKF9oYXZlQ2hhbmdlcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgX2hhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnX2hhdmVDaGFuZ2VzIDogWycsIF9oYXZlQ2hhbmdlcywgJ10nKTtcclxuICAgICAgICByZXR1cm4gX2hhdmVDaGFuZ2VzIDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlcyAgOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXSA9IF9oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gc2V0dGVyICcsX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCJcclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgJyk7XHJcblxyXG52YXIgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgRE9TRVRVUCcpO1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wICAgSU4gICAgRE9TRVRVUCcpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignQ2hhbmdlTW9uaXRvclNlcnZpY2UnLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZS5mYWN0b3J5KFwiY2hhbmdlTW9uaXRvclNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VNb25pdG9yU2VydmljZSBmYWN0b3J5IC0gMjAxOTExMTYtMTM0OCB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2V0dXBNb25pdG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbm9tcGxldGUgVGVzdGluZyBzZXR1cE1vbml0b3IgcGx1Z2dlZCBpblwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2RvU2V0SGF2ZUNoYW5nZSA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNldHVwTW9uaXRvcjogX3NldHVwTW9uaXRvcixcclxuICAgICAgICAgICAgICAgIGdldEhhdmVDaGFuZ2VzOiBfZ2V0SGF2ZUNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICByZXNldDogX3Jlc2V0LFxyXG4gICAgICAgICAgICAgICAgZG9TZXRIYXZlQ2hhbmdlOiBfZG9TZXRIYXZlQ2hhbmdlXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIGJvdHRvbSAnKTtcclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTcvMjAxOSAwMjowNCBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMThdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG5cclxuICAgIHNvcnQoKTogYW55LFxyXG4gICAgc29ydG1ldGhvZCgpOiBhbnksXHJcbiAgICBkaXNwbGF5QXJyb3coKTogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNToyMSBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDddIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcblxyXG52YXIgaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdIZWFkZXJXaXRoU29ydCcsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRzY2UnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdoZWFkZXJXaXRoU29ydCcsIFsnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9VdGlsL2hlYWRlcldpdGhTb3J0Lmh0bWxcIixcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbmxpc3Q6IFwiPWNvbHVtbmxpc3RcIiwgc29ydG1ldGhvZDogXCImXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogaUZpeFNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5zb3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyV2l0aFNvcnQgLSAyMDE5MDkyMS0wNjEzIC0gXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnNvcnRtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3BsYXlBcnJvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3h4eHh4eCAgICAgIGNvbnNvbGUubG9nKFwiaGVhZGVyV2l0aFNvcnQgLSAyMDE5MTExMC0wNzQ5IC0gW1wiLCB0aGlzLmNvbHVtbmxpc3QuZGVzYywgXCJdXCIsIHRoaXMuY29sdW1ubGlzdC5jb2x1bW5OYW1lLCAgRGF0ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY29sdW1ubGlzdC5kZXNjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKFwiJiM5NjUwO1wiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbChcIiYjOTY2MDtcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlOiBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBoZWFkZXJXaXRoU29ydF9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vIDA5LzIyLzIwMTkgMTI6NDUgcG0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDA4XSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxudmFyIGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSm9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZScsICd0aW1lc2hlZXRBcHAnKTtcclxuXHJcbiAgICB2YXIgam9iU3RhdHVzRGlzcGxheSA9IGFwcC5kaXJlY3RpdmUoJ2pvYlN0YXR1c0Rpc3BsYXknLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLiR3YXRjaChhdHRyc1snam9iU3RhdHVzJ10sIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09ICcxJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfb3Blbl8xJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdWYWx1ZSA9PSAnMicpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX1BlbmRpbmdfMic7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPT0gJzMnKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19Db21wbGV0ZWRfMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19DYW5jZWxsZWRfNCc7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDbGFzcygnam9iX3N0YXR1c19vcGVuXzEgam9iX3N0YXR1c19QZW5kaW5nXzIgam9iX3N0YXR1c19Db21wbGV0ZWRfMyBqb2Jfc3RhdHVzX0NhbmNlbGxlZF80Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoY2xhc3NOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGpvYlN0YXR1c0Rpc3BsYXk6IGpvYlN0YXR1c0Rpc3BsYXlcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsImltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIFRpbWVsb2dfU2VydmluZ1BhZ2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMTEvMjAvMjAxOSAwNDoyOSBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDFdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG5cclxuLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdXHJcbnZhciBQYWdlVXBkYXRlcl9JbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBwYWdlVXBkYXRlcl9Nb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1BhZ2VVcGRhdGVyJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgcGFnZVVwZGF0ZXJfTW9kdWxlLmZhY3RvcnkoJ1BhZ2VVcGRhdGVyU2VydmljZScsIFsnJHJvb3RTY29wZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyOCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDVdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkaW5nIHNlcnZpbmdQYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF90aW1lbG9nX2luZGV4ID0gZnVuY3Rpb24gKGlkX3RlbXAsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDIgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAzICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVsb2dfaW5kZXg6IF90aW1lbG9nX2luZGV4XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfTtcclxuXHJcbmNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIExvYWRlZCcpO1xyXG4iLCJcclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5cclxudmFyIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4IFRvcCAtIHNldHVwPz8/Jyk7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nRGVmYXVsdEFwcGxpY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggLSBTZXR1cCAtIG5nRGVmYXVsdEFwcGxpY2F0aW9uIFsnLCBuZ0RlZmF1bHRBcHBsaWNhdGlvbiwgJ10nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggLSBTZXR1cCAtIGRpcmVjdGl2ZT8/PycpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0RlZmF1bHRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIGRpcmVjdGl2ZSAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVBvc3RlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RvcmVQb3MsIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUwNDY4Ni9nZXQtcmVsYXRpdmUtcGF0aC1vZi10aGUtcGFnZS11cmwtdXNpbmctamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKC4rXFx3XFwvKSguKykvLCBcIi8kMlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVVcmwoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYWxyZWFkeVBvc3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHdpbmRvdy5zY3JvbGxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPSB7IHVybDogZ2V0UmVsYXRpdmVQYXRoKCksIHBvc1g6IHBvc1gsIHBvc1k6IHBvc1ksIGVsZW1lbnQ6IGVsZW1JbmZvIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMucHVzaChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NYID0gcG9zWDtcclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWSA9IHBvc1k7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQuZWxlbWVudCA9IGVsZW1JbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzW1VSTF9UcmFja19SZWYuY3VycmVudEluZGV4XSA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9VUkxfVHJhY2tfUmVjb3JkKGNyZWF0ZUlmTm90Rm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX3RlbXAgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlSWZOb3RGb3VuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja190ZW1wID0gJ3tcInVybHNcIjpbXX0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrID0gSlNPTi5wYXJzZShVUkxfVHJhY2tfdGVtcCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRSZWxhdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY3VycmVudEluZGV4ID0gMDsgY3VycmVudEluZGV4IDwgVVJMX1RyYWNrLnVybHMubGVuZ3RoOyBjdXJyZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZCA9IFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQ6IGN1cnJlbnRSZWNvcmQsIFVSTF9UcmFjazogVVJMX1RyYWNrLCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXN0b3JlUG9zKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIHJlc3RvcmVQb3MgICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpZ2hsaWdodENsaWNrU291cmNlKCk7IH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgVVJMX1RyYWNrLnVybHMuc3BsaWNlKGN1cnJlbnRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UgICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRFbGVtZW50OiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkRWxlbWVudDogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEVsZW1lbnQ6ICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRFbGVtZW50OiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBieXBhc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIkRJVlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5cGFzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGUgTmFtZVwiLCBzZWxlY3RlZEVsZW1lbnQubm9kZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm9kZSB0eXBlXCIsIHNlbGVjdGVkRWxlbWVudC5ub2RlVHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcIm5nLWNsaWNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIG5nLWNsaWNrICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIG5nLWNsaWNrICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIG5nLWNsaWNrICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIG5nLWNsaWNrICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJocmVmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIGhyZWYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhdmUgaHJlZiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGF2ZSBocmVmICoqKioqKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIGhyZWYgKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5cGFzcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkudGV4dCgkKHNlbGVjdGVkRWxlbWVudCkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gUmVtb3ZpbmcgY3VycmVudCByZW9jcmQuLi4gMTAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQgMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5zcGxpY2UoVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCAyMjInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRkZWRDbGFzcyhvYmpSZWYpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChvYmpSZWYpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy91dGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS5odG1sXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8gMDkvMTcvMjAxOSAwOTozMSBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMDFdIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTkvMjAxOSAwNDoyMSBhbSAtIFNTTiAtIFsyMDE5MDkxOS0wMzU0XSAtIFswMDVdIC0gUHV0dGluZyB0aGluZ3MgYmFjayAtIENsZWFudXAgZnJvbSBpbXBsZW1lbnRpbmcgQU1EIC0gQWRkaW5nIHRzY29uZmlnLmpzb24gICAgIFwiYWx3YXlzU3RyaWN0XCI6IHRydWUsXHJcbi8vaW1wb3J0IGFuZ3VsYXIgID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcblxyXG4gICAgaW5pdDEwMSgpOiBhbnksXHJcbiAgICBwcmV2aW91c2Rpc2FibGVkOiBib29sZWFuLFxyXG4gICAgbmV4dGRpc2FibGVkOiBib29sZWFuLFxyXG4gICAgc2F5V2hhdFBhZ2VXZUFyZU9uOiBzdHJpbmcsXHJcbiAgICBzcWxzdGF0c3JlY29yZDogYW55LFxyXG4gICAgb25OZXh0KCk6IGFueSxcclxuICAgIG9uUHJldmlvdXMoKTogYW55LFxyXG4gICAgcGFnaW5nbWV0aG9kKCk6IGFueVxyXG5cclxufVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA1OjA3IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwNF0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxudmFyIHBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMigncGFnaW5nRGlyZWN0aXZlJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG4gICAgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3BhZ2luZ0RpcmVjdGl2ZScsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHRpbWVvdXQpIHtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9VdGlsL3BhZ2luZ0RpcmVjdGl2ZS5odG1sXCIsXHJcblxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgcGFnaW5nbWV0aG9kOiBcIiZcIixcclxuICAgICAgICAgICAgICAgIGRhdGFiYWc6IFwiPVwiLFxyXG4gICAgICAgICAgICAgICAgc3Fsc3RhdHNyZWNvcmQ6IFwiPVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IGlGaXhTY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLnNheVdoYXRQYWdlV2VBcmVPbiA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmluaXQxMDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwQnV0dG9ucygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRvdGFsUGFnZUNvdW50KCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHNjb3BlLnNxbHN0YXRzcmVjb3JkLnRvdGFsUmVjb3JkQ291bnQgLyBzY29wZS5zcWxzdGF0c3JlY29yZC5yZWNvcmRzUGVyUGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNldHVwQnV0dG9ucygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvdGFsUGFnZUNvdW50ID0gZ2V0VG90YWxQYWdlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucHJldmlvdXNkaXNhYmxlZCA9IHNjb3BlLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPD0gMTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5uZXh0ZGlzYWJsZWQgPSBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID49IHRvdGFsUGFnZUNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodG90YWxQYWdlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNheVdoYXRQYWdlV2VBcmVPbiA9IFwiUGFnZSBcIiArIHNjb3BlLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gKyBcIiBvZiBcIiArIHRvdGFsUGFnZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnNheVdoYXRQYWdlV2VBcmVPbiA9IFwiTm8gcmVjb3Jkcy5cIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KHNjb3BlLmluaXQxMDEsIDEwMDApOyAvLyB0byBwaWNrdXAgYWN0dWFsIHZhbHVlcyBhZnRlciBBUEkgY2FsbCB0byBnZXQgZGF0YSwganVzdCBpbiBjYXNlISEhXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm9uUHJldmlvdXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPSB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPiAxID8gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIC0gMSA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBhZ2luZ21ldGhvZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLm9uTmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA9IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA8IHRvdGFsUGFnZUNvdW50ID8gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgMSA6IHRvdGFsUGFnZUNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlOiBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGVcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwiXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDQ1Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDExLzE0LzIwMTkgMDc6MzEgcG0gLSBTU04gLSBbMjAxOTExMTQtMTkzMV0gLSBbMDAxXSAtIEpvYiAtIG9wdGlvbiB0byBjaGFuZ2Ugam9iIHN0YXR1c1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbnZhciBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBhbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdKb2JzdGF0dXNDaGFuZ2VkUmVjb3JkJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcbiAgICBhbmd1bGFyX01vZHVsZS5kaXJlY3RpdmUoJ2pvYlN0YXR1c0NoYW5nZVJlY29yZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBwYXJlbnRUYWJsZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy9Kb2JzL2pvYlN0YXR1c0NoYW5nZVJlY29yZC5odG1sJyxcclxuXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25MaW5rOiAnQCcsXHJcbiAgICAgICAgICAgICAgICBvcHRpb25MYWJlbDogJ0AnXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFRhYmxlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRUYWJsZSA9IGVsLnBhcmVudHMoJ3RhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudFdpZHRoID0gcGFyZW50VGFibGUud2lkdGgoKSAtIDIwOyAvLyAgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX29uIHBhZGRpbmdcclxuXHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCcuam9iU3RhdHVzQ2hhbmdlUmVjb3JkX29uJykuY3NzKHsgJ3dpZHRoJzogcGFyZW50V2lkdGggKyAncHgnIH0pO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc3BsYXlDb250ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNob3dDb250ZW50ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzcGxheUNvbnRlbnQgPSAhJHNjb3BlLmRpc3BsYXlDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmdldFdpbmRvd05hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW5kb3dOYW1lID0gdGhpcy5hY3Rpb25MaW5rLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2luZG93TmFtZTEgPSB3aW5kb3dOYW1lLnJlcGxhY2UoL1teYS16fF4wLTldKi9pZywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93TmFtZTE7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhbmd1bGFyX01vZHVsZTogYW5ndWxhcl9Nb2R1bGVcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlIH07XHJcbiIsIlxyXG4vLyAwOS8xOC8yMDE5IDA5OjQzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwMV0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG4gICAgam9iX3N0YXR1c19jbGljayhlbnRyeTogYW55KTogYW55LFxyXG4gICAgam9iX3N0YXR1c19jaGVja2VkKGVudHJ5OiBhbnkpOiBhbnlcclxufTtcclxuXHJcblxyXG52YXIgam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSm9iU3RhdHVzRGlyZWN0aXZlJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcihcInV0aWxpdHlDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlLmRpcmVjdGl2ZSgnam9iU3RhdHVzT3B0aW9uJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvam9icy9qb2JTdGF0dXMuaHRtbFwiLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgZW50cnk6IFwiPVwiLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tlZGZ1bmN0aW9uOiBcIiZcIixcclxuICAgICAgICAgICAgICAgIGpvYnN0YXR1c2Vzc2VsZWN0ZWQxMDI6IFwiPVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IGlGaXhTY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmpvYl9zdGF0dXNfY2xpY2sgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkZnVuY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5qb2Jfc3RhdHVzX2NoZWNrZWQgPSBmdW5jdGlvbiAoZW50cnkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSB0aGlzLmpvYnN0YXR1c2Vzc2VsZWN0ZWQxMDIuaW5kZXhPZihlbnRyeS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzU2VsZWN0ZWQgPiAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZTogSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuIiwiXHJcbi8vIDA5LzIxLzIwMTkgMTE6MzEgYW0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAyXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcblxyXG5pbXBvcnQgeyBoZWFkZXJXaXRoU29ydF9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvSGVhZGVyV2l0aFNvcnQnO1xyXG5pbXBvcnQgeyBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL3BhZ2luZ0RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vRGF0YVNlcnZpY2VzJztcclxuaW1wb3J0IHsgam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi9Kb2JTdGF0dXNEaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBqb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vSm9icy9Kb2JzSW5kZXhDb250cm9sbGVyJztcclxuICBcclxuXHJcbi8vIDExLzE0LzIwMTkgMDg6MjggcG0gLSBTU04gLSBbMjAxOTExMTQtMTkzMV0gLSBbMDA2XSAtIEpvYiAtIG9wdGlvbiB0byBjaGFuZ2Ugam9iIHN0YXR1cyBcclxuLy8gQWRkaW5nIGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSBcclxuaW1wb3J0IHsgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlIH0gZnJvbSAnLi9Kb2JTdGF0dXNDaGFuZ2VSZWNvcmQnO1xyXG5pbXBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZSc7XHJcblxyXG4gXHJcblxyXG5pbXBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUGFnZVVwZGF0ZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0SW5kZXhDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNJbmRleCc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG5sZXQgbmdBcHBsaWNhdGlvbk5hbWUgPSBcInRpbWVzaGVldEFwcFwiO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDk6MDcgcG0gLSBTU04gXHJcbi8vIDExLzI1LzIwMTkgMDQ6NDAgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDA3XSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuLy8gTW92ZWQgdG8gdG9wLiAgRGlyZWN0aXZlIGlzIG5vdCBsb2FkaW5nPz8/XHJcblJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuIFxyXG5cclxuLy8gMTEvMjIvMjAxOSAwOTowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMjNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDg6MTggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA5XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzIyLzIwMTkgMDE6NDggcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDEzXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbiBcclxuam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5Kb2JzX0FuZ3VsYXJfTW9kdWxlO1xyXG5cclxuaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UuaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5wYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UucGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlLkpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU7XHJcbiBcclxuam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlLmFuZ3VsYXJfTW9kdWxlO1xyXG4gXHJcblBhZ2VVcGRhdGVyX0luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbi8vIFJlZmFjdG9yIC0gVGltZWxvZyBvbmx5XHJcblxyXG5pbXBvcnQgKiBhcyB4IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5JztcclxuXHJcbnguZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiIsIlxyXG4vLyAwNS8xOS8yMDE5IDAxOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwN10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzIC0gTm8gZXJyb3JzXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+ICAgXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgc2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lMiA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZTInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIGFsZXJ0KCdjbGlja2VkIG1lISBjbWROYW1lIFsnICsgY21kTmFtZSArIFwiXSBwb3B1cC1uYW1lICBbXCIgKyBwb3B1cE5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtZC1uYW1lJywgY21kTmFtZSwgJ3BvcHVwTmFtZScsIHBvcHVwTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUgJywgalF1ZXJ5T2JqZWN0TmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUyJywgalF1ZXJ5T2JqZWN0TmFtZTIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZScsIGpRdWVyeU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd09iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnYm9keScpLnNjcm9sbHNweSh7IHRhcmdldDogalF1ZXJ5T2JqZWN0TmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihqUXVlcnlPYmplY3ROYW1lKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LWRlZmF1bHQtdGltZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnZhbChjZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LVRvdGFsUGVyaW9kXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDE6MTAgcG0gLSBTU04gLSBBZGRyZXNzaW5nIGVycm9yLiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXSBjYW5ub3QgY29udmVydCB0b3Agc3RyaW5nIHwgbnVtYmVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDExID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZTogc3RyaW5nID0gKDxIVE1MSW5wdXRFbGVtZW50PiQoalF1ZXJ5T2JqZWN0TmFtZSlbMF0pLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBkMTEuZ2V0VGltZSgpLnZhbHVlT2YoKSAtIGQxMi5nZXRUaW1lKCkudmFsdWVPZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMiA9IE1hdGguZmxvb3IoZGVsdGFfMSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBwKHN0cjEsIGxlbiwgY2hhcikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGZ1bmN0aW9uIChzdHIxLCBsZW4sIGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW4pIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczEgPSBjaGFyLnJlcGVhdChsZW4pICsgc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDIvMjAxOSAwNzoyNSBwbSAtIFNTTiAtIFsyMDE5MTEwMS0wNTI2XSAtIFswMTNdIC0gQ2hlY2sgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIERpZCBub3QgZmluaXNoLlxyXG4gICAgICAgICAgICAvLyBUb2RvLVNTTlxyXG4gICAgICAgICAgICAkKCcubW9kYWwnKS5vbignc2hvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzICAtICAyMDE5MTEwMi0xOTMwIC0gU2V0dGluZyBkcmFnZ2FibGUuJylcclxuICAgICAgICAgICAgICAgICQodGhpcykuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLm1vZGFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAwOTo1NiBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDFdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yNC8yMDE5IDExOjIwIHBtIC0gU1NOIC0gRGlzYWJsZVxyXG4gICAgICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMS8yMDE5IDA0OjUyIGFtIC0gU1NOIC0gVXNlIEphdmFTY3JpcHQgb25seVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMTI6MzAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA0XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGEgb2YgbGlzdDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuICAgICAgICAgICAgICAgIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGEsIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xNy8yMDE5IDA0OjE2IGFtIC0gU1NOIC0gVXBkYXRlIHRvIGV4Y2x1ZGUgaGlnaGxpZ2h0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgJyZsdDsnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgPGggYW5kIDxuLiBBbHJlYWR5IHNldHVwIGZvciA8aS4gIFNlZSBzaXRlLmNzcy5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMTkgMTE6NTAgYW0gLSBTU04gLSBVcGRhdGUgLSBNYXRjaGVzIHNob3duIGh0dHBzOi8vd3d3LnJlZ2V4dGVzdGVyLmNvbS9cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwoW15pfF4vaXxeaHxeL2h8Xm58Xi9uXSl7MX1bXlxcc3xePl17MX0vZywgJyZsdDskMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICdcXG4xLS0tXFxuWyQmXVxcbjItLS1cXG5bJDFdXFxuMy0tLVxcblskMl1cXG40LS0tXFxuWyQzXVxcblxcbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIG5vdCBjb3ZlcnJlZCBoMSwgaDIsIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBrbm9ja291dCBpcyBkb2luZyBpdHMgb3duIHRoaW5nIHdoZW4gaXQgY29tZXMgdG8gdGFncy4gRXZpZGVudCB3aXRoIHRoZSB1c2Ugb2YgZ2VuZXJpYyB0eXBlcyAoIGZ1bmN0aW9uPFNvbWVUeXBlPiApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnJmx0OyQzJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhLmlubmVySFRNTCA9IGI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9saW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnSGlkZSBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgIC8vIFxyXG5cclxuXHJcbiAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5lLnRhcmdldCkuaHJlZiArIFwiJnJldHVyblRvQ2FsbGVyS2V5PVwiICsgcmV0dXJuVG9DYWxsZXJLZXk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICBzZXRUaW1lb3V0KHNpdGVfaW5zdGFuY2UucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIHh4eHh4eHh4eHh4Jyk7XHJcbmNvbnNvbGUubG9nKHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcik7XHJcbmNvbnNvbGUubG9nKGQyKTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjozNyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDNdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM2MTQ2NS9ob3ctdG8tY2hlY2staWYtY2xpY2stZXZlbnQtaXMtYWxyZWFkeS1ib3VuZC1qcXVlcnlcclxuJC5mbi5pc0JvdW5kID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2ZuLmlzQm91bmQtMDI0NScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aGlzJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmRhdGEoJ2V2ZW50cycpXCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKCdldmVudHMnKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bmRlZmluZWQgPDw8PDw8PDw8PFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoJ2V2ZW50cycpW3R5cGVdO1xyXG5cclxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgtMSAhPT0gJC5pbkFycmF5KGZuLCBkYXRhKSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MjkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAyXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlcicpO1xyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMzMzICcpO1xyXG5cclxuXHJcbiAgICBpZiAoJChcIiNmaWx0ZXJUZXh0XCIpLmlzQm91bmQoJ2tleXVwJywgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBib3VuZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNmaWx0ZXJUZXh0XCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2pvYnMgLSBmaXRsZXJUZXh0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGUpKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAyJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9