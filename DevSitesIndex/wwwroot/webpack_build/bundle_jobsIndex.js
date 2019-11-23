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

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance(defaultAppName, ['ui.bootstrap']);
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
    downdownList_angular_module.directive('checkAvailability', checkAvailabilityFunc);

    function checkAvailabilityFunc($http, $q) {
      return {
        restrict: 'A',
        require: 'ngModel',
        scope: {},
        link: function link(scope, element, attr, ngModel) {
          ngModel.$asyncValidators.invalidUsername = function (modelValue, viewValue) {
            console.log('firing ngModel  invalidUserName function xxxxxxxxxxxxxxxxxxxxx');
            console.log('modelValue');
            console.log(modelValue);
            console.log('viewValue');
            console.log(viewValue);
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
        vm.isInvalidUserName = true;
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
          console.log('dropdownListDirective - watching vm.formName.$error.invalidUsername (1841)');
          console.log('form change');
          console.log(oldValue);
          console.log(newValue);
        });
        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          console.log('dropdownListDirective - watching firing (0345)');
          vm.isInvalidUserName = true;

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
                  vm.isInvalidUserName = false;
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
          }

          console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']');
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
  var Jobs_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
  Jobs_Angular_Module.controller('jobsIndexController', ['$scope', '$http', '$q', 'dataService', '$timeout', '$sce', '$uibModal', function ($scope, $http, $q, dataService, $timeout, $sce, $uibModal) {
    // 09/18/2019 01:15 am - SSN - [20190917-0929] - [010] - Adding paging for angular lists
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
      job_statuses_selected: [$scope.job_statuses_selected]
    };
    var _fieldList = [__assign({}, columnBag_defaults, {
      columnName: 'projectTitle_ForActivity',
      caption: 'Project Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'jobTitle',
      caption: 'Job Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateAdded',
      caption: 'Date Added',
      columnNameSelected: 'dateAdded',
      desc: true
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateUpdated',
      caption: 'Date Updated'
    }), __assign({}, columnBag_defaults, {
      columnName: 'activityAge',
      caption: 'Activity Age'
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

      function getJobsError(data) {
        var temp = data;
        console.log('20191110-0935 - JobsIndexController - getJobsError');
        console.log(data);
      }

      function getTimelogCatch(data) {
        var temp = data;
        console.log('20191110-0936 - JobsIndexController - getJobsCatch');
        console.log(data);
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
    }; // 09/28/2019 04:06 pm - SSN - [20190928-1256] - [011] - Adding Entity Framework model attribute
    // Duplicate - Wrong way to go!


    $scope.showCreateTimesheetForm = function (jobID) {
      if (isNaN(jobID)) {
        jobID = 0;
      }

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
    var angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
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

    var TimelogLinkOptions_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance(defaultAppName);
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
          }; // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
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
          }; // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
          // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage


          $scope.timesheetForm_ClockContinue = function (_timelogId4, _servingPage4) {
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
                  return _timelogId4;
                },
                servingPage: function servingPage() {
                  return _servingPage4;
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
          };
        }],
        scope: {
          timelogId: "@",
          totalSeconds: "@",
          servingPage: '@'
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

/***/ "./Timesheet/TimesheetClockOutController.js":
/*!**************************************************!*\
  !*** ./Timesheet/TimesheetClockOutController.js ***!
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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp"); // 11/16/2019 02:52 pm - SSN - [20191116-1419] - [003] - Add RowVersion  to Timelog.
  // Inject changeMonitorService
  // 11/20/2019 04:43 am - SSN - [20191120-0429] - [003] - Timelog index clock-out refresh updated row
  // Inject PageUpdaterService

  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService) {
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
      timeNow.setMilliseconds(0);
      timeNow.setSeconds(0);
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
          console.log('timesheetClockoutController - 20191120-0423 - timelog_index update [', $scope.editableTimeLog.timeLogId, ']');
          PageUpdaterService.timelog_index($scope.editableTimeLog.timeLogId);
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

/***/ "./Timesheet/TimesheetContinueController.js":
/*!**************************************************!*\
  !*** ./Timesheet/TimesheetContinueController.js ***!
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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance(ngApplicationName); // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp"); // 09/30/2019 06:56 pm - SSN - (Inject jobId)

  timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'jobId', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, jobId) {
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
        }, function (error) {
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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp"); // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view
  // 11/22/2019 02:18 pm - SSN - [20191121-0503] - [015] - Timelog edit options on project search
  // Injecting Servingpage

  timesheetApp.controller('TimesheetEditController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', '$timeout', '$rootScope', 'servingPage', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, servingPage) {
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
    }

    if (!obj1.id && !obj1.name) return true;
    if (obj1.id.toLowerCase().indexOf('search') > -1) return true;
    if (obj1.name.toLowerCase().indexOf('search') > -1) return true;
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
    var ssn_ChangeMonitorService_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance(currentApplication);
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
  var headerWithSort_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
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
  var app = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance('timesheetApp');
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
    var pageUpdater_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance(currentApplication);
    pageUpdater_Module.factory('PageUpdaterService', ['$rootScope', 'dataService', function ($rootScope, dataService) {
      // 11/21/2019 06:28 am - SSN - [20191121-0503] - [005] - Timelog edit options on project search
      // Adding servingPage
      var _timelog_index = function _timelog_index(id_temp, servingPage) {
        console.log('PageUpdater - timelog_index - 001 [', id_temp, '] servingPage [' + servingPage + ']');
        dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
        console.log('PageUpdater - timelog_index - 002 ');

        function refreshRecord_Sucess(result) {
          console.log('PageUpdater - timelog_index - 003 ');
          console.log(result);
          var tr_1_id_jq = "#" + result.tr_1_id;
          var tr_2_id_jq = "#" + result.tr_2_id;
          $(tr_2_id_jq).remove();
          $(tr_1_id_jq).replaceWith(result);
          console.log('PageUpdater - timelog_index - 005 - broadcast ');
          $rootScope.$broadcast('TimeLog_Index_Refresh', {
            id: id_temp,
            servingPage: servingPage
          });
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
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');
  console.log('RestorePreviousPageState xxxxxxxxxxxxxxxxxxxxxxxxx');

  var doSetup = function doSetup(ngDefaultApplication) {
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('RestorePreviousPageState yyyyyyyyyyyyyyyyyyyyy');
    console.log('ngDefaultApplication [', ngDefaultApplication, ']');
    var angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance(ngDefaultApplication);
    angular_module.controller('utilityControllerQueue', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {}]);
    angular_module.directive('siteTaskQueueList', function () {
      //    $rootScope.$broadcast('site_Task_Queue_List', result);
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      console.log('RestorePreviousPageState ***********************');
      var alreadyPosted = false;

      var controller = function controller($http, $q, $scope) {}; //var RestorePreviousPageState = function ()
      //{
      //  var doSetup = function () {


      $(function () {
        window.addEventListener('click', function (e) {
          saveUrl(e);
        });
        window.addEventListener('beforeunload', function (e) {
          saveUrl(e);
        });
        setTimeout(restorePos, 300);
      }); //}
      //    return {
      //        doSetup: doSetup
      //    };
      //     }();
      //}

      function saveUrl(e) {
        if (alreadyPosted) return;
        alreadyPosted = true; //let URL_Track_temp: any = window.localStorage.getItem('URL_Track');
        //if (URL_Track_temp == undefined) {
        //    URL_Track_temp = '{"urls":[]}';
        //}
        //let URL_Track = JSON.parse(URL_Track_temp);
        //let url = document.location.href;
        //let currentRecord = undefined;
        //let currentIndex = -1;
        //for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
        //    if (URL_Track.urls[currentIndex].url == url) {
        //        currentRecord = URL_Track.urls[currentIndex];
        //        break;
        //    }
        //}

        var URL_Track_Ref = get_URL_Track_Record();
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
            url: document.location.href,
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

      function get_URL_Track_Record() {
        var URL_Track_temp = window.localStorage.getItem('URL_Track');
        if (URL_Track_temp == undefined) return;
        var URL_Track = JSON.parse(URL_Track_temp);
        var url = document.location.href;
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
        var currentRecord = get_URL_Track_Record().currentRecord;

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
        ////////////let URL_Track_temp: any = window.localStorage.getItem('URL_Track');
        ////////////if (URL_Track_temp == undefined) return;
        ////////////let URL_Track = JSON.parse(URL_Track_temp);
        ////////////let url = document.location.href;
        ////////////let currentRecord = undefined;
        ////////////let currentIndex = -1
        ////////////for (currentIndex = 0; currentIndex < URL_Track.urls.length; currentIndex++) {
        ////////////    if (URL_Track.urls[currentIndex].url == url) {
        ////////////        currentRecord = URL_Track.urls[currentIndex];
        ////////////        break;
        ////////////    }
        ////////////}
        var currentRecord = get_URL_Track_Record().currentRecord;
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
          } //console.log('************ Count');
          //console.log('************ Count');
          //console.log(URL_Track.urls.length);
          //  setTimeout(() => { URL_Track.urls.splice(currentIndex) }, 2000);
          //console.log(URL_Track.urls.length);
          //console.log('************ Count');
          //console.log('************ Count');
          // window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track));

        }
      }

      function removeAddedClass(objRef) {
        $(objRef).remove();
      }

      return {
        restrict: "E",
        //template: "<h1>siteTaskQueueList</h1>",
        templateUrl: "/js/util/RestorePreviousPageState.html",
        //controllerAs: 'vm101',
        //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
        //controller: controller,
        //controller: ['$http', '$q', '$scope', '$timeout', controller],
        //controllerAs: 'vm101',
        //bindToController: true, //required in 1.3+ with controllerAs - VERIFIED.
        //scope: {
        //    keyColumn: "@key",
        //    formName: "=", // Needed for posting form (Replacing url)
        //    angularControlId: "=?aci"
        //},
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
  var pagingDirective_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
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
  var angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
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
  var Job_Status_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
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
/* harmony import */ var _Timesheet_TimesheetController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Timesheet/TimesheetController */ "./Timesheet/TimesheetController.js");
/* harmony import */ var _JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JobStatusChangeRecord */ "./jobs/JobStatusChangeRecord.js");
/* harmony import */ var _Timesheet_TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Timesheet/TimelogLinkOtions/TimelogLinkOptions */ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.js");
/* harmony import */ var _Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Util/ChangeMonitorService */ "./Util/ChangeMonitorService.js");
/* harmony import */ var _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Timesheet/TimesheetEditController */ "./Timesheet/TimesheetEditController.js");
/* harmony import */ var _Timesheet_TimesheetContinueController__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Timesheet/TimesheetContinueController */ "./Timesheet/TimesheetContinueController.js");
/* harmony import */ var _Timesheet_TimesheetClockOutController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Timesheet/TimesheetClockOutController */ "./Timesheet/TimesheetClockOutController.js");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.js");
/* harmony import */ var _Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Projects/ProjectsIndex */ "./Projects/ProjectsIndex.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index





 //import { timesheetApp_instance } from '../Timesheet/TimesheetApp';  // for timesheet related links
//import { timesheetContinueController_instance } from '../Timesheet/timesheetcontinuecontroller';
//import { timesheetClockoutController_instance } from '../Timesheet/timesheetclockoutcontroller';
// 11/14/2019 08:28 pm - SSN - [20191114-1931] - [006] - Job - option to change job status 
// Adding jobStatusChangeRecord_instance 











var ngApplicationName = "timesheetApp"; // 11/22/2019 09:06 pm - SSN - [20191121-0503] - [023] - Timelog edit options on project search

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_14__["dropdownListDirective_instance"].doSetup(ngApplicationName); // 11/21/2019 08:18 am - SSN - [20191121-0503] - [009] - Timelog edit options on project search

_Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_8__["changeMonitorService_instance"].doSetup(ngApplicationName);
_Timesheet_TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_7__["TimelogLinkOptions"].doSetup(ngApplicationName); // 11/22/2019 01:48 pm - SSN - [20191121-0503] - [013] - Timelog edit options on project search

_Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_13__["ProjectIndexController_instance"].doSetup(ngApplicationName);
_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName);
_Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__["jobsIndexController_instance"].Jobs_Angular_Module;
_Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__["headerWithSort_instance"].headerWithSort_angular_module;
_Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__["pagingDirective_instance"].pagingDirective_angular_module;
_JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__["jobStatusDirective_instance"].Job_Status_Angular_Module;
_Timesheet_TimesheetController__WEBPACK_IMPORTED_MODULE_5__["timesheetController_instance"].timesheetApp_TimesheetController; //timesheetContinueController_instance;
//timesheetClockoutController_instance;
//timesheetApp_instance.timesheetApp;

_JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_6__["jobStatusChangeRecord_instance"].angular_Module; // 11/21/2019 03:51 pm - SSN - [20191121-0503] - [010] - Timelog edit options on project search
// Added timelog related links with Timelog_Row_Options

_Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_9__["timesheetEditController_instance"].timesheetApp;
_Timesheet_TimesheetContinueController__WEBPACK_IMPORTED_MODULE_10__["timesheetContinueController_instance"].timesheetApp;
_Timesheet_TimesheetClockOutController__WEBPACK_IMPORTED_MODULE_11__["timesheetClockoutController_instance"].timesheetApp;
_Util_PageUpdater__WEBPACK_IMPORTED_MODULE_12__["PageUpdater_Instance"].doSetup(ngApplicationName); // 11/23/2019 09:07 pm - SSN 

_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_15__["RestorePreviousPageState_instance"].doSetup(ngApplicationName);

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
console.log(d2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vUHJvamVjdHMvUHJvamVjdHNJbmRleC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0hlYWRlcldpdGhTb3J0LnRzIiwid2VicGFjazovLy8uL1V0aWwvSm9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1BhZ2VVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL1V0aWwvcGFnaW5nRGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JTdGF0dXNDaGFuZ2VSZWNvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JTdGF0dXNEaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JzSW5kZXhfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Q0FBQywyQkFBZixFQUE0QyxJQUE1QyxDQUFWO0FBR0gsQ0FYQSxDQUFEO0FBY0EsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFKLEVBQVQ7QUFDQSxnQkFBZ0IsQ0FBQyxVQUFqQixDQUE0QixXQUE1QjtBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksb0NBQVo7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLFdBQXhDO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxFQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVlBLHlCIiwiZmlsZSI6ImJ1bmRsZV9qb2JzSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvbGlzdC8nICsgY29sdW1uQmFnLmN1cnJlbnRQYWdlTm8gKyBcIi9cIiArIGNvbHVtbkJhZy5yZWNvcmRzUGVyUGFnZSArIFwiL1wiICsgY29sdW1uQmFnLmNvbHVtbk5hbWUgKyBcIi9cIiArIGNvbHVtbkJhZy5kZXNjICsgXCIvXCIgKyBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVNlcnZpY2VzIC0gMjAxOTA5MzAtMTkwNyAtIGdldEpvYiBbXCIgKyBpZCArIFwiXVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMThdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgIHZhciBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG5cclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMTkxMTE2LTA1NTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0QXBwTmFtZSB0eXBlIGFuZCBuYW1lIFsnLCB0eXBlb2YgKGRlZmF1bHRBcHBOYW1lKSwgJ10gWycsIGRlZmF1bHRBcHBOYW1lLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gTmVlZGVkIHRvIGJlIGFibGUgdG8gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgZm9ybTEgPSAkKFwiW25hbWU9J1wiICsgZm9ybU5hbWUgKyBcIiddXCIpLmdldCgwKTtcclxuICAgICAgICAgICAgdmFyIGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKS50cmltKCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMiA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBzdWJtaXRGb3JtXzJcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtXzEgPSBmdW5jdGlvbiAoZXZlbnQsIGZvcm0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHN1Ym1pdEZvcm1fMVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2NoZWNrQXZhaWxhYmlsaXR5JywgY2hlY2tBdmFpbGFiaWxpdHlGdW5jKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hlY2tBdmFpbGFiaWxpdHlGdW5jKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIG5nTW9kZWwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJGFzeW5jVmFsaWRhdG9ycy5pbnZhbGlkVXNlcm5hbWUgPSBmdW5jdGlvbiAobW9kZWxWYWx1ZSwgdmlld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmlyaW5nIG5nTW9kZWwgIGludmFsaWRVc2VyTmFtZSBmdW5jdGlvbiB4eHh4eHh4eHh4eHh4eHh4eHh4eHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZWxWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2aWV3VmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmlld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUsICR0aW1lb3V0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWRVc2VyTmFtZSA9IHRydWU7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZm9ybU5hbWUuJGVycm9yJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gd2F0Y2hpbmcgdm0uZm9ybU5hbWUuJGVycm9yLmludmFsaWRVc2VybmFtZSAoMTg0MSknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZTogTG9va3VwUmVjb3JkLCBvbGRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gd2F0Y2hpbmcgZmlyaW5nICgwMzQ1KScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWRVc2VyTmFtZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2xkVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3VmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDFcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaWQgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgM1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNJbnZhbGlkVXNlck5hbWUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNWYWxpZCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5oaXRDb3VudCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpdGNvdW50IFwiLCB2bS5oaXRDb3VudCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMua2V5Q29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBrZXlDb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5kaXNjaXBsaW5laWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkaXNjaXBsaW5laWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbHVtblZhbHVlID0gJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSA9ICg5OTktQSkgLSB0aGlzLmFuZ3VsYXJDb250cm9sSWQnLCB0aGlzLmFuZ3VsYXJDb250cm9sSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgPSAoOTk5LUIpIC0ga2V5Q29sdW1uVmFsdWUgWycsIGtleUNvbHVtblZhbHVlLCAnXScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVNlbGVjdGVkID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYgdGhpcy5hbmd1bGFyQ29udHJvbElkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVNlbGVjdGVkID0gdGhpcy5hbmd1bGFyQ29udHJvbElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5Q29sdW1uVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBrZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9PT0gdW5kZWZpbmVkICYmIGtleVZhbHVlU2VsZWN0ZWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYeHggc2V0IGRlZmFsdFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudChrZXlWYWx1ZVNlbGVjdGVkKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gKHh4eHh4MTAxLUIpIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggICAgWycsIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgsICddJylcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdm0uc2V0SW5wdXRWYXJpYWJsZXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gX2lzVmFsaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKiogX2lzVmFsaWQnLCBfaXNWYWxpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpcnN0UnVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaXNWYWxpZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkX2xvY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuZ3VsYXJDb250cm9sSWQgIT09IHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFyQ29udHJvbElkID0gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KHRoaXMuYW5ndWxhckNvbnRyb2xJZCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWRfbG9jYWwgPSB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnZudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm52blwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZF9sb2NhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IF9pc1ZhbGlkX2xvY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaXNWYWxpZEJvb2xlYW4gKDA1MjIpXCIsIHZtLmlzVmFsaWRCb29sZWFuKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2lzVmFsaWRfbG9jYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlRW50cnkgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdCAtIHZhbGlkYXRlRW50cnkgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjMwIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwOF0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDMtQScpO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEuZGlzY2lwbGluZVNob3J0IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hbmd1bGFyQ29udHJvbElkID0gZGF0YS5kaXNjaXBsaW5lSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50YV9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgLSAyMDE5MTExNy0xMDI1IC0gMTAzLUInKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEudGFfaWQsIHRpdGxlOiBkYXRhLnRhX2Rlc2NyaXB0aW9uIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hbmd1bGFyQ29udHJvbElkID0gZGF0YS50YV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB2bS5BUElVcmxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDU6MTMgYW0gLSBTU04gLSBbMjAxOTA5MTYtMDM1NV0gLSBbMDA2XSAtIEFkZGluZyBKb2JBUEkgY29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoaWxlIGRldmVsb3BtZW50IGluIHByb2dyZXNzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0udGFfaWQsIHRpdGxlOiBpdGVtLnRhX2Rlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDI6NTcgYW0gLSBTU04gLSBBZGRlZCB0byBnZXQgY3VycmVudCB2YWx1ZSBhbmQgdXBkYXRlIHZpZXcuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQgPSBmdW5jdGlvbiAobG9va3VwSUQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBnZXREaXNjaXBsaW5lQ3VycmVudCBYWFhYWFhYWCBbJywgbG9va3VwSUQsICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBJRCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsICsgXCIvXCIgKyBsb29rdXBJRFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7IHZtLmlzVmFsaWQoKTsgfSwgNjAwKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL0Ryb3Bkb3duTGlzdC9Ecm9wRG93bkxpc3REaXJlY3RpdmUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogWyckaHR0cCcsICckcScsICckc2NvcGUnLCAnJHRpbWVvdXQnLCBjb250cm9sbGVyXSxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAga2V5Q29sdW1uOiBcIkBrZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBmb3JtTmFtZTogXCI9XCIsIC8vIE5lZWRlZCBmb3IgcG9zdGluZyBmb3JtIChSZXBsYWNpbmcgdXJsKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhckNvbnRyb2xJZDogXCI9P2FjaVwiXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gMTEvMTYvMjAxOSAwNjowMiBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDVdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbiAgICAgICAgLy8gUmV2aXNlZCBzbyB3ZSBjYW4gcGFzcyBpbiBkZWZhdWx0IGFwcGxpY2F0aW9uIG5hbWUgZm9yIG1vZHVsZS5cclxuICAgICAgICAvLyAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlOiBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUsXHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBJQ29sdW1uQmFnIGZyb20gJy4uL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuaW1wb3J0IHsgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gXCIuLi9VdGlsL0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVcIjtcclxuXHJcbmpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2U7XHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNDo0MiBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDNdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBqb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgSm9ic19Bbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICBKb2JzX0FuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoJ2pvYnNJbmRleENvbnRyb2xsZXInLCBbJyRzY29wZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICckdGltZW91dCcsICckc2NlJywgJyR1aWJNb2RhbCcsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCAkdGltZW91dCwgJHNjZSwgJHVpYk1vZGFsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMToxNSBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTBdIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyRzY29wZS5zcWxTdGF0c1JlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gIFNldHVwIGludGlhaWwgdmFsdWVzIGZvciBsaXN0XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gWzFdOyAvLyBvcGVuXHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnX2RlZmF1bHRzOiBJQ29sdW1uQmFnID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogJz8/Pz8nLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZVNlbGVjdGVkOiAnJywvLyBsZWF2ZSBibGFuay4gIExlbmd0aCBpcyB1c2VkIHRvIHNlbGVjdCBzZWxlY3RlZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogNCxcclxuICAgICAgICAgICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCI/Pz9cIixcclxuICAgICAgICAgICAgICAgIGpvYl9zdGF0dXNlc19zZWxlY3RlZDogWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IF9maWVsZExpc3Q6IElDb2x1bW5CYWdbXSA9IFtcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAncHJvamVjdFRpdGxlX0ZvckFjdGl2aXR5JywgY2FwdGlvbjogJ1Byb2plY3QgVGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2pvYlRpdGxlJywgY2FwdGlvbjogJ0pvYiBUaXRsZScgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnZGF0ZUFkZGVkJywgY2FwdGlvbjogJ0RhdGUgQWRkZWQnLCBjb2x1bW5OYW1lU2VsZWN0ZWQ6ICdkYXRlQWRkZWQnLCBkZXNjOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2RhdGVVcGRhdGVkJywgY2FwdGlvbjogJ0RhdGUgVXBkYXRlZCcgfSxcclxuICAgICAgICAgICAgICAgIHsgLi4uY29sdW1uQmFnX2RlZmF1bHRzLCBjb2x1bW5OYW1lOiAnYWN0aXZpdHlBZ2UnLCBjYXB0aW9uOiAnQWN0aXZpdHkgQWdlJywgfSxcclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RDb2x1bW5FbnRyaWVzID0gX2ZpZWxkTGlzdC5maWx0ZXIociA9PiByLmNvbHVtbk5hbWVTZWxlY3RlZC5sZW5ndGggPiAwKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0Q29sdW1uRW50cmllc1wiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0Q29sdW1uRW50cmllcyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RDb2x1bW5FbnRyaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbkJhZyA9IHNlbGVjdENvbHVtbkVudHJpZXNbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0ID0gX2ZpZWxkTGlzdDtcclxuXHJcblxyXG4gICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzTGlzdChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYnMoY29sdW1uQmFnKS50aGVuKGdldEpvYnNTdWNjZXNzLCBnZXRKb2JzRXJyb3IpLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3QuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5kZXNjID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kYXRhYmFnID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JzOiBkYXRhLmRhdGFMaXN0LCBjb2x1bW46IGRhdGEuc3FsU3RhdHNSZWNvcmQuY29sdW1uTmFtZSwgZGVzYzogZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBjb252ZXJ0IHRvIGFuIGFycmF5LiBXZSBkb24ndCBoYXZlIGEgc2V0dGVyIG9uIGFuIGludGVyZmFjZS5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q29sdW1uSW5kZXggPSAkc2NvcGUuZmllbGRzTGlzdC5maW5kSW5kZXgociA9PiByLmNvbHVtbk5hbWUgPT09IGRhdGEuc3FsU3RhdHNSZWNvcmQuY29sdW1uTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uSW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3RbY3VycmVudENvbHVtbkluZGV4XS5kZXNjID0gZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JzRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNSAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzRXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNiAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzQ2F0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNvcnRNZXRob2QxMDEgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbkJhZy5jb2x1bW5OYW1lICE9IGNvbHVtbkJhZy5jb2x1bW5OYW1lU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5CYWcuY29sdW1uTmFtZVNlbGVjdGVkID0gY29sdW1uQmFnLmNvbHVtbk5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5CYWcuZGVzYyA9ICFjb2x1bW5CYWcuZGVzYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2luZ21ldGhvZDEwMSA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZCA9IGNvbHVtbkJhZztcclxuIFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDEwOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwN10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c19jaGFuZ2VkMTAxID0gZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZlNlbGVjdGVkSXRlbSA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuaW5kZXhPZihqb2Jfc3RhdHVzLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZlNlbGVjdGVkSXRlbSA+IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuc3BsaWNlKGluZGV4T2ZTZWxlY3RlZEl0ZW0sIDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRbJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGhdID0gam9iX3N0YXR1cy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNxbFN0YXRzUmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7IC8vLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDU6MjAgYW0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDA3XSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX2NoZWNrQWxsID0gZnVuY3Rpb24gKGVuYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLmpvYl9zdGF0dXNlcy5tYXAoZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHsgcmV0dXJuIGpvYl9zdGF0dXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDExXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAvLyBEdXBsaWNhdGUgLSBXcm9uZyB3YXkgdG8gZ28hXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAoam9iSUQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4oam9iSUQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSUQgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iX1N0YXR1c2VzKCkudGhlbihnZXRKb2JfU3RhdHVzZXNTdWNjZXNzLCBnZXRKb2JfU3RhdHVzZXNFcnJvcikuY2F0Y2goZ2V0Sm9iX1N0YXR1c2VzQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNTdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9iSW5kZXhDb250cm9sbGVyIC0gIDIwMTkwOTIyLTA3NTggLSBEYXRhIGVycm9yID8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgKGNhdGNoKSA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlcygpO1xyXG5cclxuXHJcbiAgICAgICAgfV1cclxuXHJcbiAgICApO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IEpvYnNfQW5ndWxhcl9Nb2R1bGVcclxuICAgIH1cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMDkvMjQvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNzMxXSAtIFswMDhdIC0gUHJvamVjdCBzZWFyY2ggb3B0aW9uXHJcbi8vIDExLzIyLzIwMTkgMDE6NDAgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDEyXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbi8vIFJlcGxhY2UgaW5jb21wbGV0ZSBjb2RlIGZvciBwcm9qZWN0IHNlYXJjaFxyXG5cclxudmFyIFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcignUHJvamVjdHNJbmRleENvbnRyb2xsZXInLCBbJyRzY29wZScsICckY29tcGlsZScsIGZ1bmN0aW9uICgkc2NvcGUsICRjb21waWxlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdHNJbmRleENvbnRyb2xsZXIgLSBuZXcgLSAyMDE5MTEyMi0xMzQ0Jyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDAxOjU3IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiRvbignVGltZUxvZ19JbmRleF9SZWZyZXNoJywgZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Byb2plY3RzSW5kZXggLSBGaXJpbmcgVGltZUxvZ19JbmRleF9SZWZyZXNoIC0gMjAxOTExMjItMTQwNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW0nLCBpdGVtKTtcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzJfaWQpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG52YXIgVGltZWxvZ0xpbmtPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRpbWVsb2dMaW5rT3B0aW9ucyAtIDIwMTkxMTIxLTA1NTQtQlwiKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHRBcHBOYW1lIHR5cGUgYW5kIG5hbWUgWycsIHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpLCAnXSBbJywgZGVmYXVsdEFwcE5hbWUsICddJyk7XHJcblxyXG5cclxuICAgICAgICAvL3ZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGRlZmF1bHRBcHBOYW1lLCBbXSk7XHJcbiAgICAgICAgdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoZGVmYXVsdEFwcE5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgndGltZWxvZ0xpbmtPcHRpb25zJywgWyckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCBmdW5jdGlvbiAoJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgLy9iaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVsb2dMaW5rT3B0aW9ucyAtIFsnICsgdGltZWxvZ0lkICsgJ10gIE9PT09PT09PT09PT09PT09PTycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgLSB4MjAxOTExMTYtMTYzNyAtIHRpbWVzaGVldEZvcm1fRWRpdCAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpbmdQYWdlJywgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbEVkaXQgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsICAvLyB1c2luZyBzYW1lIGh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSAtIHgyMDE5MTExNi0xNjQwIC0gbW9kYWxFZGl0X3NhdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQxIC0gbW9kYWxFZGl0X2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTYtMTY0MyAtIHRpbWVzaGVldEZvcm1fRWRpdCAtIGVuZCAnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gYmVnaW4gJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0yIC0gbW9kYWxDbG9ja291dF8xICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTMgLSBtb2RhbENsb2Nrb3V0XzIgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBlbmQgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDk6MzcgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAzXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUtaW4tdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy8vdGltZXNoZWV0VGVtcGxhdGUuaHRtbD92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlIC0gMjAxOTExMTQtMTQ0OCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsIC0gMjAxOTExMTQtMTQ0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDk6MzcgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAzXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUtaW4tdXAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy8vdGltZXNoZWV0VGVtcGxhdGUuaHRtbD92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlIC0gMjAxOTExMTQtMTQ0OCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsIC0gMjAxOTExMTQtMTQ0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHRcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTZWNvbmRzOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTonQCdcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX2xvY2FsLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG90YWxTZWNvbmRzX2Zyb21BdHRyID0gYXR0cnNbJ3RvdGFsU2Vjb25kcyddO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVPcGVuUmVjb3JkID0gdG90YWxTZWNvbmRzX2Zyb21BdHRyID09PSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnNob3dDbG9ja291dE9wdGlvbiA9IGhhdmVPcGVuUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5jb250aW51ZV9vcl9saW5lSXRlbV9jYXB0aW9uID0gIWhhdmVPcGVuUmVjb3JkID8gXCJDb250aW51ZVwiIDogXCJMaW5lIGl0ZW1cIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcbi8vIDA1LzE5LzIwMTkgMTI6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDAzXSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuLy8gMDkvMjEvMjAxOSAxMTo1MiBhbSAgLSBTU04gLSBVcGdyYWRpbmcgdG8gdXNlIEJhYmVsL1dXZWJwYWNrXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgLy8gMDUvMTkvMjAxOSAxMDowNiBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDZdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIC8vIDExLzE2LzIwMTkgMDI6NTIgcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAzXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjAvMjAxOSAwNDo0MyBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDNdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG4gICAgLy8gSW5qZWN0IFBhZ2VVcGRhdGVyU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnUGFnZVVwZGF0ZXJTZXJ2aWNlJyxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCBQYWdlVXBkYXRlclNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNi8yMDE5IDAzOjA4IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwNF0gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NTEgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAyXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZygkcm91dGVQYXJhbXMuaWQpO1xyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKTtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1vdXRcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMjo0OCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDJdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlclxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG4gXHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG4gXHJcbiBcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDcpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNilcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiBcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXIgLSAyMDE5MTEyMC0wNDIzIC0gdGltZWxvZ19pbmRleCB1cGRhdGUgWycgLCAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCAsJ10nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlVXBkYXRlclNlcnZpY2UudGltZWxvZ19pbmRleCgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvL307XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDA1LzE5LzIwMTkgMDk6NDUgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA1XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG4vLyBDb3BpZWQgZnJvbSBDbG9ja291dC5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gXCJ0aW1lc2hlZXRBcHBcIjtcclxuXHJcbnZhciB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UobmdBcHBsaWNhdGlvbk5hbWUgKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzowNyBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDJdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQWRkaW5nIENoYW5nZU1vbml0b3JTZXJ2aWNlJyk7XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJyR0aW1lb3V0JywgJ3RpbWVsb2dJZCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScgLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCB0aW1lbG9nSWQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ29udGludWUgLyBMaW5lIEl0ZW1cIjtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU5IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAxMF0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2ggPSBcIjE1XCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDI6NDEgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDAzXSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICAgICAgLy8gc2V0IFRpbWVMb2dJZCA9IDBcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnRpbWVMb2dJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA3LzAyLzIwMTkgMDk6MTcgYW0gLSBTU04gLSBBZGRlZCBudWxsaWZ5IGRhdGVNb2RpZmllZCBcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLmRhdGVNb2RpZmllZCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAwNzozMSBhbSAtIFNTTiAtIEZvcmdvdHRlblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudG90YWxTZWNvbmRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyhkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAsIDUwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXIgLSBzdWJtaXRGb3JtIC0gKDEwMSknKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuZGlzY2lwbGluZUlkID0gJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMTE6NTYgYW0gLSBTU04gLSBUZXN0ZWQgT0suXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgYWRkZWQuICBSZWxvYWRpbmcgcGFnZS4uLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDEyOjU0IHBtIC0gU1NOIC0gUmVsb2FkIHBhZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTcgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDA5XSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIHJlY29yZC4gU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDA1OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAxMF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyhmYWxzZSk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG4vLyAwOS8xOC8yMDE5IDExOjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwOF0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICAvLyAwOS8zMC8yMDE5IDA2OjU2IHBtIC0gU1NOIC0gKEluamVjdCBqb2JJZClcclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnam9iSWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgam9iSWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2Ioam9iSWQpLnRoZW4oZ2V0Sm9iU3VjY2VzcywgZ2V0Sm9iRXJyb3IpLmNhdGNoKGdldEpvYkNhdGNoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYlN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuam9iID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5qb2JUaXRsZSA9IGRhdGEuam9iVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0LnByb2plY3RUaXRsZSA9IGRhdGEucHJvamVjdC5wcm9qZWN0VGl0bGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGV0Q29udHJvbGxlciAtIGdldEpvYlN1Y2Nlc3MgIC0gIDIwMTkwOTMwLTIxMDYtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogMCwgdGl0bGU6ICcnIH07XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1pblwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0ge1xyXG4gICAgICAgICAgICAgICAgdGltZUxvZ0lkOiAwLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHRpbWVOb3csXHJcbiAgICAgICAgICAgICAgICB3b3JrRGV0YWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZUlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBqb2JJZDogam9iSWRcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuZGlzY2lwbGluZUlkID0gJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEzLzIwMTkgMTE6MDAgYW0gLSBTU04gLSBbMjAxOTA0MTMtMTAzN10gLSBBZGQgZGlzY2lwbGluZSBsb29rdXBcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAgIHVybDogICdhcGkvRGlzY2lwbGluZUFQSSdcclxuICAgICAgICAgICAgICAgIC8vICAgdG8gICB1cmw6ICcvYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5ndWxhciAtIGZvckVhY2ggLSAyMDE5MDkyMC0wNzIwLW9cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwX1RpbWVzaGVldENvbnRyb2xsZXI6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTYvMjAxOSAwNDo0NyBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbi8vIENvcGllZCBmcm9tIFRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlclxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xOS8yMDE5IDEyOjQ4IGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIEFkZGluZyAkY29tcGlsZSBmb3IgZHluYW1pY2FsbHkgbG9hZGVkIHZpZXdcclxuICAgIC8vIDExLzIyLzIwMTkgMDI6MTggcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAvLyBJbmplY3RpbmcgU2VydmluZ3BhZ2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnJHRpbWVvdXQnLCAnJHJvb3RTY29wZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRyb2xsZXIoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgJHRpbWVvdXQsICRyb290U2NvcGUsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkVkaXQgW1wiICsgc2VydmluZ1BhZ2UgKyAnXSc7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNldFN0b3BUaW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OClcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEJlZ2luXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkX3RlbXAgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmluZ1BhZ2UgNSBcIiwgc2VydmluZ1BhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLkpvYl9UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdIC0gRW5kXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRodHRwKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgICB1cmw6ICdhcGkvRGlzY2lwbGluZUFQSSdcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh6W3ldKSkge1xyXG4gICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHpbeV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHpbeV0udHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgelt5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWFzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBieXBhc3NPYmplY3QgPSBmdW5jdGlvbiAob2JqMSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2hpZGRlbicgfHwgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yIC0gc2V0dXBNb25pdG9yJyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBnZXRCcm93c2VyTmFtZSgpID09PSAnY2hyb21lJztcclxuXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gYmVmb3JlVW5sb2FkIG9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBDYW5ub3QgdXNlIHdpdGggQ2hyb21lXHJcbiAgICAgICAgICAgIGlmICghaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKDIpIFlvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMDUvMjAxOTEgMDQ6NTMgYW0gLSBTU04gXHJcbiAgICAvLyBOZWVkIHRvIHByZXZlbnQgdXNlcnMgZnJvbSBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBBbmd1bGFyIGJhc2VkIHBhZ2VzIHdpdGggcGVuZGluZyBjaGFuZ2VzLlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxODI5MTIvaG93LXRvLWRldGVjdC1icm93c2VyLXdpdGgtYW5ndWxhclxyXG4gICAgdmFyIGdldEJyb3dzZXJOYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZWRnZScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ29wcicpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLm9wcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2Nocm9tZScpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLmNocm9tZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCd0cmlkZW50JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdzYWZhcmknKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvdGhlcic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTmVlZGVkIHNvIHdlIGNhbiBjYWxsIGZyb20gcG9wdXBzLlxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChtb25pdG9yQ2hhbmdlX1NTTiwgMjAwMCk7XHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMTogc2V0dXBNb25pdG9yX3YwMSxcclxuICAgICAgICBnZXRCcm93c2VyTmFtZTogZ2V0QnJvd3Nlck5hbWUsXHJcbiAgICAgICAgbW9uaXRvckNoYW5nZV9TU046IG1vbml0b3JDaGFuZ2VfU1NOLFxyXG4gICAgICAgIHNldEl0ZW1DaGFuZ2VkX3Nzbjogc2V0SXRlbUNoYW5nZWRfc3NuLFxyXG4gICAgICAgIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuOiBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbixcclxuICAgICAgICBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3M6IHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzc1xyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpO1xyXG5cclxufSk7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3IgLSAyMDE5MTEwOS0xMTE0LUYnKTtcclxuXHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTgvMjAxOSAwMzoxOCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gQ2hhbmdlTW9uaXRvci50c1xyXG5cclxuXHJcbmNsYXNzIENoYW5nZU1vbml0b3JGbGFnX2NsYXNzIHtcclxuXHJcblxyXG5cclxuICAgIGdldCBoYXZlQ2hhbmdlcygpOiBib29sZWFue1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBnZXR0ZXIgJyk7XHJcblxyXG4gICAgICAgIGxldCBfaGF2ZUNoYW5nZXMgPSB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl07XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVvZiAoX2hhdmVDaGFuZ2VzKSBcIiwgdHlwZW9mIChfaGF2ZUNoYW5nZXMpICk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcyA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXMgIDogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLF9oYXZlQ2hhbmdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxubGV0IENoYW5nZU1vbml0b3JGbGFnID0gbmV3IENoYW5nZU1vbml0b3JGbGFnX2NsYXNzKCk7XHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE0LzIwMTkgMDI6NTkgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDAxXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3InO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wICcpO1xyXG5cclxudmFyIGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gdG9wIERPU0VUVVAnKTtcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCAgIElOICAgIERPU0VUVVAnKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZU1vbml0b3JTZXJ2aWNlIGZhY3RvcnkgLSAyMDE5MTExNi0xMzQ4IHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9zZXR1cE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklub21wbGV0ZSBUZXN0aW5nIHNldHVwTW9uaXRvciBwbHVnZ2VkIGluXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRIYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cE1vbml0b3I6IF9zZXR1cE1vbml0b3IsXHJcbiAgICAgICAgICAgICAgICBnZXRIYXZlQ2hhbmdlczogX2dldEhhdmVDaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IF9yZXNldFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSBib3R0b20gJyk7XHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE3LzIwMTkgMDI6MDQgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE4XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5pbnRlcmZhY2UgaUZpeFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcclxuXHJcbiAgICBzb3J0KCk6IGFueSxcclxuICAgIHNvcnRtZXRob2QoKTogYW55LFxyXG4gICAgZGlzcGxheUFycm93KCk6IHN0cmluZ1xyXG59XHJcblxyXG5cclxuXHJcbi8vIDA5LzIxLzIwMTkgMDU6MjEgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDA3XSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxudmFyIGhlYWRlcldpdGhTb3J0X2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHNjZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2hlYWRlcldpdGhTb3J0JywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1V0aWwvaGVhZGVyV2l0aFNvcnQuaHRtbFwiLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ubGlzdDogXCI9Y29sdW1ubGlzdFwiLCBzb3J0bWV0aG9kOiBcIiZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLnNvcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWFkZXJXaXRoU29ydCAtIDIwMTkwOTIxLTA2MTMgLSBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc29ydG1ldGhvZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuZGlzcGxheUFycm93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8veHh4eHh4ICAgICAgY29uc29sZS5sb2coXCJoZWFkZXJXaXRoU29ydCAtIDIwMTkxMTEwLTA3NDkgLSBbXCIsIHRoaXMuY29sdW1ubGlzdC5kZXNjLCBcIl1cIiwgdGhpcy5jb2x1bW5saXN0LmNvbHVtbk5hbWUsICBEYXRlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5jb2x1bW5saXN0LmRlc2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoXCImIzk2NTA7XCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sKFwiJiM5NjYwO1wiKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU6IGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IGhlYWRlcldpdGhTb3J0X2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDkvMjIvMjAxOSAxMjo0NSBwbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDhdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG52YXIgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgYXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZSgndGltZXNoZWV0QXBwJyk7XHJcblxyXG4gICAgdmFyIGpvYlN0YXR1c0Rpc3BsYXkgPSBhcHAuZGlyZWN0aXZlKCdqb2JTdGF0dXNEaXNwbGF5JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnNbJ2pvYlN0YXR1cyddLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSAnMScpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX29wZW5fMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPT0gJzInKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19QZW5kaW5nXzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09ICczJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ29tcGxldGVkXzMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ2FuY2VsbGVkXzQnO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2pvYl9zdGF0dXNfb3Blbl8xIGpvYl9zdGF0dXNfUGVuZGluZ18yIGpvYl9zdGF0dXNfQ29tcGxldGVkXzMgam9iX3N0YXR1c19DYW5jZWxsZWRfNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBqb2JTdGF0dXNEaXNwbGF5OiBqb2JTdGF0dXNEaXNwbGF5XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6MjkgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAxXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuXHJcbi8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XVxyXG52YXIgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgcGFnZVVwZGF0ZXJfTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBwYWdlVXBkYXRlcl9Nb2R1bGUuZmFjdG9yeSgnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI4IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGRpbmcgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3RpbWVsb2dfaW5kZXggPSBmdW5jdGlvbiAoaWRfdGVtcCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDIgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAzICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHJfMV9pZF9qcSA9IFwiI1wiICsgcmVzdWx0LnRyXzFfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyXzJfaWRfanEgPSBcIiNcIiArIHJlc3VsdC50cl8yX2lkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHRyXzJfaWRfanEpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHRyXzFfaWRfanEpLnJlcGxhY2VXaXRoKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDUgLSBicm9hZGNhc3QgJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgeyBpZDogaWRfdGVtcCwgc2VydmluZ1BhZ2U6IHNlcnZpbmdQYWdlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ19pbmRleDogX3RpbWVsb2dfaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9O1xyXG5cclxuY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gTG9hZGVkJyk7XHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnKTtcclxuICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcpO1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnKTtcclxuICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCcpO1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgnKTtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdEZWZhdWx0QXBwbGljYXRpb24pIHtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHl5eXl5eXl5eXl5eXl5eXl5eXl5eScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeXl5eXl5eXl5eXl5eXl5eXl5eXl5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB5eXl5eXl5eXl5eXl5eXl5eXl5eXknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHl5eXl5eXl5eXl5eXl5eXl5eXl5eScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeXl5eXl5eXl5eXl5eXl5eXl5eXl5Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB5eXl5eXl5eXl5eXl5eXl5eXl5eXknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHl5eXl5eXl5eXl5eXl5eXl5eXl5eScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCduZ0RlZmF1bHRBcHBsaWNhdGlvbiBbJywgbmdEZWZhdWx0QXBwbGljYXRpb24sJ10nKVxyXG5cclxuICAgICAgICB2YXIgYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKG5nRGVmYXVsdEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyUXVldWUnLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3NpdGVUYXNrUXVldWVMaXN0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXRlX1Rhc2tfUXVldWVfTGlzdCcsIHJlc3VsdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVBvc3RlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy92YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlID0gZnVuY3Rpb24gKClcclxuICAgICAgICAgICAgLy97XHJcblxyXG4gICAgICAgICAgICAvLyAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXN0b3JlUG9zLCAzMDApO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIC8vICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICAgICAgICAgIC8vICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgfSgpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL2xldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vaWYgKFVSTF9UcmFja190ZW1wID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAvL2xldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9sZXQgdXJsID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2xldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgLy9sZXQgY3VycmVudEluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9mb3IgKGN1cnJlbnRJbmRleCA9IDA7IGN1cnJlbnRJbmRleCA8IFVSTF9UcmFjay51cmxzLmxlbmd0aDsgY3VycmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLCBwb3NYOiBwb3NYLCBwb3NZOiBwb3NZLCBlbGVtZW50OiBlbGVtSW5mbyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnB1c2goVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1kgPSBwb3NZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLmVsZW1lbnQgPSBlbGVtSW5mbztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJsc1tVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleF0gPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRfVVJMX1RyYWNrX1JlY29yZCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX3RlbXA6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVJMX1RyYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFja190ZW1wID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGN1cnJlbnRJbmRleCA9IDA7IGN1cnJlbnRJbmRleCA8IFVSTF9UcmFjay51cmxzLmxlbmd0aDsgY3VycmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XS51cmwgPT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkOiBjdXJyZW50UmVjb3JkLCBVUkxfVHJhY2s6IFVSTF9UcmFjaywgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzdG9yZVBvcygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCkuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGN1cnJlbnRSZWNvcmQucG9zWSwgbGVmdDogY3VycmVudFJlY29yZC5wb3NYLCBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL2xldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vaWYgKFVSTF9UcmFja190ZW1wID09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL2xldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vbGV0IHVybCA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9sZXQgY3VycmVudFJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9sZXQgY3VycmVudEluZGV4ID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9mb3IgKGN1cnJlbnRJbmRleCA9IDA7IGN1cnJlbnRJbmRleCA8IFVSTF9UcmFjay51cmxzLmxlbmd0aDsgY3VycmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLyAgICBpZiAoVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XS51cmwgPT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8gICAgICAgIGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLyAgICB9XHJcbiAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy99XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKS5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDNcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLmFkZENsYXNzKCdoZWlnaHRfc2VsZWN0ZWQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIHNldFRpbWVvdXQoKCkgPT4geyBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KSB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhVUkxfVHJhY2sudXJscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFkZGVkQ2xhc3Mob2JqUmVmKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQob2JqUmVmKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RlbXBsYXRlOiBcIjxoMT5zaXRlVGFza1F1ZXVlTGlzdDwvaDE+XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIC8vYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb250cm9sbGVyOiBbJyRodHRwJywgJyRxJywgJyRzY29wZScsICckdGltZW91dCcsIGNvbnRyb2xsZXJdLFxyXG4gICAgICAgICAgICAgICAgLy9jb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICAvL2JpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG4gICAgICAgICAgICAgICAgLy9zY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICBmb3JtTmFtZTogXCI9XCIsIC8vIE5lZWRlZCBmb3IgcG9zdGluZyBmb3JtIChSZXBsYWNpbmcgdXJsKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICBhbmd1bGFyQ29udHJvbElkOiBcIj0/YWNpXCJcclxuXHJcbiAgICAgICAgICAgICAgICAvL30sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA5LzE3LzIwMTkgMDk6MzEgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDAxXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE5LzIwMTkgMDQ6MjEgYW0gLSBTU04gLSBbMjAxOTA5MTktMDM1NF0gLSBbMDA1XSAtIFB1dHRpbmcgdGhpbmdzIGJhY2sgLSBDbGVhbnVwIGZyb20gaW1wbGVtZW50aW5nIEFNRCAtIEFkZGluZyB0c2NvbmZpZy5qc29uICAgICBcImFsd2F5c1N0cmljdFwiOiB0cnVlLFxyXG4vL2ltcG9ydCBhbmd1bGFyICA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG5cclxuICAgIGluaXQxMDEoKTogYW55LFxyXG4gICAgcHJldmlvdXNkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIG5leHRkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIHNheVdoYXRQYWdlV2VBcmVPbjogc3RyaW5nLFxyXG4gICAgc3Fsc3RhdHNyZWNvcmQ6IGFueSxcclxuICAgIG9uTmV4dCgpOiBhbnksXHJcbiAgICBvblByZXZpb3VzKCk6IGFueSxcclxuICAgIHBhZ2luZ21ldGhvZCgpOiBhbnlcclxuXHJcbn1cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNTowNyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDRdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdwYWdpbmdEaXJlY3RpdmUnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVXRpbC9wYWdpbmdEaXJlY3RpdmUuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luZ21ldGhvZDogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFnOiBcIj1cIixcclxuICAgICAgICAgICAgICAgIHNxbHN0YXRzcmVjb3JkOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VDb3VudCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzY29wZS5zcWxzdGF0c3JlY29yZC50b3RhbFJlY29yZENvdW50IC8gc2NvcGUuc3Fsc3RhdHNyZWNvcmQucmVjb3Jkc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEJ1dHRvbnMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByZXZpb3VzZGlzYWJsZWQgPSBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIDw9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubmV4dGRpc2FibGVkID0gc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA+PSB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlBhZ2UgXCIgKyBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgXCIgb2YgXCIgKyB0b3RhbFBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIk5vIHJlY29yZHMuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChzY29wZS5pbml0MTAxLCAxMDAwKTsgLy8gdG8gcGlja3VwIGFjdHVhbCB2YWx1ZXMgYWZ0ZXIgQVBJIGNhbGwgdG8gZ2V0IGRhdGEsIGp1c3QgaW4gY2FzZSEhIVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vblByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID0gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID4gMSA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyAtIDEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vbk5leHQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxQYWdlQ291bnQgPSBnZXRUb3RhbFBhZ2VDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPSB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPCB0b3RhbFBhZ2VDb3VudCA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyArIDEgOiB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFnaW5nbWV0aG9kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuaW5pdDEwMSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZTogcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNDUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZShhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2U6IGdldEluc3RhbmNlXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDY6MzIgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5lbnVtIFRpbWVsb2dfU2VydmluZ1BhZ2UgeyAvLyBTZXJ2aW5nUGFnZSAoZm9yIElERSBTZWFyY2gpXHJcblxyXG4gICAgVGltZWxvZyA9ICdUaW1lbG9nJyxcclxuICAgIEpvYl9UaW1lbG9nID0gJ0pvYl9UaW1lbG9nJyxcclxuICAgIFByb2plY3RzX1NlYXJjaCA9ICdQcm9qZWN0c19TZWFyY2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSh2YWx1ZTogVGltZWxvZ19TZXJ2aW5nUGFnZSwgY29tcGFyZVRvOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBhcmVUbyA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIHRlc3RfMTAzLCBUaW1lbG9nX1NlcnZpbmdQYWdlLCBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwNzozMSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xOTMxXSAtIFswMDFdIC0gSm9iIC0gb3B0aW9uIHRvIGNoYW5nZSBqb2Igc3RhdHVzXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxudmFyIGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG4gXHJcblxyXG5cclxuICAgIGFuZ3VsYXJfTW9kdWxlLmRpcmVjdGl2ZSgnam9iU3RhdHVzQ2hhbmdlUmVjb3JkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHBhcmVudFRhYmxlID0gbnVsbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL0pvYnMvam9iU3RhdHVzQ2hhbmdlUmVjb3JkLmh0bWwnLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbkxpbms6ICdAJyxcclxuICAgICAgICAgICAgICAgIG9wdGlvbkxhYmVsOiAnQCdcclxuICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VGFibGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFRhYmxlID0gZWwucGFyZW50cygndGFibGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50V2lkdGggPSBwYXJlbnRUYWJsZS53aWR0aCgpIC0gMjA7IC8vICBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfb24gcGFkZGluZ1xyXG5cclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJy5qb2JTdGF0dXNDaGFuZ2VSZWNvcmRfb24nKS5jc3MoeyAnd2lkdGgnOiBwYXJlbnRXaWR0aCArICdweCcgfSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzcGxheUNvbnRlbnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5Q29udGVudCA9ICEkc2NvcGUuZGlzcGxheUNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0V2luZG93TmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpbmRvd05hbWUgPSB0aGlzLmFjdGlvbkxpbmsudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3aW5kb3dOYW1lMSA9IHdpbmRvd05hbWUucmVwbGFjZSgvW15hLXp8XjAtOV0qL2lnLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dOYW1lMTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyX01vZHVsZVxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcbi8vIDA5LzE4LzIwMTkgMDk6NDMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDAxXSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcbiAgICBqb2Jfc3RhdHVzX2NsaWNrKGVudHJ5OiBhbnkpOiBhbnksXHJcbiAgICBqb2Jfc3RhdHVzX2NoZWNrZWQoZW50cnk6IGFueSk6IGFueVxyXG59O1xyXG5cclxuXHJcbnZhciBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZS5jb250cm9sbGVyKFwidXRpbGl0eUNvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUuZGlyZWN0aXZlKCdqb2JTdGF0dXNPcHRpb24nLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9qb2JzL2pvYlN0YXR1cy5odG1sXCIsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7XHJcbiAgICAgICAgICAgICAgICBlbnRyeTogXCI9XCIsXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkZnVuY3Rpb246IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgam9ic3RhdHVzZXNzZWxlY3RlZDEwMjogXCI9XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogaUZpeFNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuam9iX3N0YXR1c19jbGljayA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRmdW5jdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmpvYl9zdGF0dXNfY2hlY2tlZCA9IGZ1bmN0aW9uIChlbnRyeSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuam9ic3RhdHVzZXNzZWxlY3RlZDEwMi5pbmRleE9mKGVudHJ5LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNTZWxlY3RlZCA+IC0xO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlOiBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG4iLCJcclxuLy8gMDkvMjEvMjAxOSAxMTozMSBhbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDJdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuXHJcbmltcG9ydCB7IGhlYWRlcldpdGhTb3J0X2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9IZWFkZXJXaXRoU29ydCc7XHJcbmltcG9ydCB7IHBhZ2luZ0RpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvcGFnaW5nRGlyZWN0aXZlJztcclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBqb2JTdGF0dXNEaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuL0pvYlN0YXR1c0RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IGpvYnNJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9Kb2JzL0pvYnNJbmRleENvbnRyb2xsZXInO1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXInO1xyXG5cclxuXHJcbi8vaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEFwcCc7ICAvLyBmb3IgdGltZXNoZWV0IHJlbGF0ZWQgbGlua3NcclxuLy9pbXBvcnQgeyB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvdGltZXNoZWV0Y29udGludWVjb250cm9sbGVyJztcclxuLy9pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyJztcclxuXHJcblxyXG4vLyAxMS8xNC8yMDE5IDA4OjI4IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE5MzFdIC0gWzAwNl0gLSBKb2IgLSBvcHRpb24gdG8gY2hhbmdlIGpvYiBzdGF0dXMgXHJcbi8vIEFkZGluZyBqb2JTdGF0dXNDaGFuZ2VSZWNvcmRfaW5zdGFuY2UgXHJcbmltcG9ydCB7IGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSB9IGZyb20gJy4vSm9iU3RhdHVzQ2hhbmdlUmVjb3JkJztcclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucyc7XHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yU2VydmljZSc7XHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUGFnZVVwZGF0ZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0SW5kZXhDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNJbmRleCc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG5sZXQgbmdBcHBsaWNhdGlvbk5hbWUgPSBcInRpbWVzaGVldEFwcFwiO1xyXG5cclxuLy8gMTEvMjIvMjAxOSAwOTowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMjNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDg6MTggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA5XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5UaW1lbG9nTGlua09wdGlvbnMuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjIvMjAxOSAwMTo0OCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5Kb2JzX0FuZ3VsYXJfTW9kdWxlO1xyXG5cclxuaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UuaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5wYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UucGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlLkpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU7XHJcblxyXG5cclxudGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjtcclxuXHJcbi8vdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlO1xyXG5cclxuLy90aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2U7XHJcblxyXG4vL3RpbWVzaGVldEFwcF9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG5cclxuXHJcbmpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZS5hbmd1bGFyX01vZHVsZTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwMzo1MSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTBdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuLy8gQWRkZWQgdGltZWxvZyByZWxhdGVkIGxpbmtzIHdpdGggVGltZWxvZ19Sb3dfT3B0aW9uc1xyXG50aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbnRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbnRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblBhZ2VVcGRhdGVyX0luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuLy8gMTEvMjMvMjAxOSAwOTowNyBwbSAtIFNTTiBcclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICBhbGVydCgnY2xpY2tlZCBtZSEgY21kTmFtZSBbJyArIGNtZE5hbWUgKyBcIl0gcG9wdXAtbmFtZSAgW1wiICsgcG9wdXBOYW1lICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbWQtbmFtZScsIGNtZE5hbWUsICdwb3B1cE5hbWUnLCBwb3B1cE5hbWUsICdqUXVlcnlPYmplY3ROYW1lICcsIGpRdWVyeU9iamVjdE5hbWUsICdqUXVlcnlPYmplY3ROYW1lMicsIGpRdWVyeU9iamVjdE5hbWUyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwb3B1cE5hbWUpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMDk6MzMgYW0gLSBTU04gLSBBZGRpbmcgaGlkZSBhbmQgc2hvd1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUsICdqUXVlcnlPYmplY3ROYW1lJywgalF1ZXJ5T2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzbW9vdGgtc2Nyb2xsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGpRdWVyeU9iamVjdE5hbWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAwNC8wOC8yMDE5IDAxOjMzIGFtIC0gU1NOIC0gWzIwMTkwNDA3LTIzNDVdIC0gVGltZUxvZ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1kZWZhdWx0LXRpbWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZCA9IGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgcChkLmdldE1vbnRoKCkgKyAxLCAyLCAnMCcpICsgXCItXCIgKyBwKGQuZ2V0RGF0ZSgpLCAyLCAnMCcpICsgXCJUXCIgKyBwKGQuZ2V0SG91cnMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS52YWwoY2QpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMTkvMjAxOSAwNDo0OCBwbSAtIFNTTiAtIFsyMDE5MDQxOS0xNjQ3XSAtIFNldCBhbW91bnQgZm9yIFRvdGFsU2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1Ub3RhbFBlcmlvZFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMDIwMTkgMDI6MzkgcG0gLSBTU04gLSBObyBjYWxjdWxhdGluZyBlbGFwc2VkIHRpbWUgY29ycmVjdGx5IHdpdGggVHlwZVNjcmlwdCBjb252ZXJzaW9uLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMiA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZDExLmdldFRpbWUoKS52YWx1ZU9mKCkgLSBkMTIuZ2V0VGltZSgpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lMikudmFsKGRlbHRhXzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAgLSAgMjAxOTExMDItMTkzMCAtIFNldHRpbmcgZHJhZ2dhYmxlLicpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBcIi5tb2RhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbZGF0YS10b2dnbGU9J2NvbGxhcHNlJ11cIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcbiAgICAgICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgICAgICQoJ3ByZScpLmVhY2goZnVuY3Rpb24gKGFhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlQXR0cmliID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYiA9IFwiIHRpdGxlPSdcIiArIF90aXRsZSArIFwiJyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCc8cD48YSBjbWQtbmFtZT1cInNob3dzaWJsaW5nXCIgJyArIHRpdGxlQXR0cmliICsgJyA+U2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uICsgJzwvYT48L3A+JykuaW5zZXJ0QmVmb3JlKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMS8yMDE5IDA0OjUyIGFtIC0gU1NOIC0gVXNlIEphdmFTY3JpcHQgb25seVxyXG5cclxuICAgICAgICAgICAgdmFyIGxpc3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDEyOjMwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwNF0gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbiAgICAgICAgICAgIC8vIGZvciAodmFyIGEgb2YgbGlzdDEpIHtcclxuICAgICAgICAgICAgLy8gbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG4gICAgICAgICAgICBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChhLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xNy8yMDE5IDA0OjE2IGFtIC0gU1NOIC0gVXBkYXRlIHRvIGV4Y2x1ZGUgaGlnaGxpZ2h0aW5nXHJcbiAgICAgICAgICAgICAgICAvL3ZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPC9nLCAnJmx0OycpOyAgXHJcbiAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIDxoIGFuZCA8bi4gQWxyZWFkeSBzZXR1cCBmb3IgPGkuICBTZWUgc2l0ZS5jc3MuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMTkgMTE6NTAgYW0gLSBTU04gLSBVcGRhdGUgLSBNYXRjaGVzIHNob3duIGh0dHBzOi8vd3d3LnJlZ2V4dGVzdGVyLmNvbS9cclxuICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPChbXml8Xi9pfF5ofF4vaHxebnxeL25dKXsxfVteXFxzfF4+XXsxfS9nLCAnJmx0OyQxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnXFxuMS0tLVxcblskJl1cXG4yLS0tXFxuWyQxXVxcbjMtLS1cXG5bJDJdXFxuNC0tLVxcblskM11cXG5cXG4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIG5vdCBjb3ZlcnJlZCBoMSwgaDIsIGV0Yy5cclxuICAgICAgICAgICAgICAgIC8vIGtub2Nrb3V0IGlzIGRvaW5nIGl0cyBvd24gdGhpbmcgd2hlbiBpdCBjb21lcyB0byB0YWdzLiBFdmlkZW50IHdpdGggdGhlIHVzZSBvZiBnZW5lcmljIHR5cGVzICggZnVuY3Rpb248U29tZVR5cGU+IClcclxuICAgICAgICAgICAgICAgIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJyZsdDskMycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBhLmlubmVySFRNTCA9IGI7XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9saW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnSGlkZSBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgIC8vIFxyXG5cclxuXHJcbiAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5lLnRhcmdldCkuaHJlZiArIFwiJnJldHVyblRvQ2FsbGVyS2V5PVwiICsgcmV0dXJuVG9DYWxsZXJLZXk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICBzZXRUaW1lb3V0KHNpdGVfaW5zdGFuY2UucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIHh4eHh4eHh4eHh4Jyk7XHJcbmNvbnNvbGUubG9nKHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcik7XHJcbmNvbnNvbGUubG9nKGQyKTtcclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==