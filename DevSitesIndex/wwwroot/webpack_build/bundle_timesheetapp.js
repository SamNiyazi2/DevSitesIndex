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

/***/ "../../node_modules/applicationinsights-js/bundle/ai.module.js":
/*!***************************************************************************************************!*\
  !*** C:/Sams/DevSitesIndex/DevSitesIndex/node_modules/applicationinsights-js/bundle/ai.module.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
// THIS FILE WAS AUTOGENERATED
var Microsoft;
(function (Microsoft) {
    var Telemetry;
    (function (Telemetry) {
        "use strict";
        /**
         * Data struct to contain only C section with custom fields.
         */
        var Base = /** @class */ (function () {
            function Base() {
            }
            return Base;
        }());
        Telemetry.Base = Base;
    })(Telemetry = Microsoft.Telemetry || (Microsoft.Telemetry = {}));
})(Microsoft || (Microsoft = {}));
// THIS FILE WAS AUTOGENERATED
/// <reference path="Base.ts" />
var Microsoft;
(function (Microsoft) {
    var Telemetry;
    (function (Telemetry) {
        "use strict";
        /**
         * System variables for a telemetry item.
         */
        var Envelope = /** @class */ (function () {
            function Envelope() {
                this.ver = 1;
                this.sampleRate = 100.0;
                this.tags = {};
            }
            return Envelope;
        }());
        Telemetry.Envelope = Envelope;
    })(Telemetry = Microsoft.Telemetry || (Microsoft.Telemetry = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        var Context;
        (function (Context) {
            "use strict";
        })(Context = ApplicationInsights.Context || (ApplicationInsights.Context = {}));
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="./ISerializable.ts" />
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="./Contracts/Generated/Envelope.ts" />
/// <reference path="./Context/IApplication.ts"/>
/// <reference path="./Context/IDevice.ts"/>
/// <reference path="./Context/IInternal.ts"/>
/// <reference path="./Context/ILocation.ts"/>
/// <reference path="./Context/IOperation.ts"/>
/// <reference path="./Context/ISample.ts"/>
/// <reference path="./Context/IUser.ts"/>
/// <reference path="./Context/ISession.ts"/>
/// <reference path="./Telemetry/IEnvelope.ts"/>
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
// THIS FILE WAS AUTOGENERATED
var AI;
(function (AI) {
    "use strict";
    /**
     * Defines the level of severity for the event.
     */
    var SeverityLevel;
    (function (SeverityLevel) {
        SeverityLevel[SeverityLevel["Verbose"] = 0] = "Verbose";
        SeverityLevel[SeverityLevel["Information"] = 1] = "Information";
        SeverityLevel[SeverityLevel["Warning"] = 2] = "Warning";
        SeverityLevel[SeverityLevel["Error"] = 3] = "Error";
        SeverityLevel[SeverityLevel["Critical"] = 4] = "Critical";
    })(SeverityLevel = AI.SeverityLevel || (AI.SeverityLevel = {}));
})(AI || (AI = {}));
/// <reference path="./IConfig.ts" />
/// <reference path="./ITelemetryContext.ts" />
/// <reference path="./Contracts/Generated/SeverityLevel.ts" />
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
var Microsoft;
(function (Microsoft) {
    var ApplicationInsights;
    (function (ApplicationInsights) {
        "use strict";
        var UtilHelpers = /** @class */ (function () {
            function UtilHelpers() {
            }
            /**
             * generate random id string
             */
            UtilHelpers.newId = function () {
                var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var result = "";
                var random = Math.random() * 1073741824; //5 symbols in base64, almost maxint
                while (random > 0) {
                    var char = base64chars.charAt(random % 64);
                    result += char;
                    random = Math.floor(random / 64);
                }
                return result;
            };
            return UtilHelpers;
        }());
        ApplicationInsights.UtilHelpers = UtilHelpers;
    })(ApplicationInsights = Microsoft.ApplicationInsights || (Microsoft.ApplicationInsights = {}));
})(Microsoft || (Microsoft = {}));
/// <reference path="../JavaScriptSDK.Interfaces/IConfig.ts"/>
/// <reference path="../JavaScriptSDK.Interfaces/IAppInsights.ts"/>
/// <reference path="../JavaScriptSDK/UtilHelpers.ts"/>
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AppInsightsModule = /** @class */ (function () {
        function AppInsightsModule() {
        }
        AppInsightsModule._createLazyMethod = function (name) {
            var aiObject = window[AppInsightsModule.appInsightsName];
            // Define a temporary method that queues-up a the real method call
            aiObject[name] = function () {
                // Capture the original arguments passed to the method
                var originalArguments = arguments;
                // If the queue is available, it means that the function wasn't yet replaced with actual function value
                if (aiObject.queue) {
                    aiObject.queue.push(function () { return aiObject[name].apply(aiObject, originalArguments); });
                }
                else {
                    // otherwise execute the function
                    aiObject[name].apply(aiObject, originalArguments);
                }
            };
        };
        ;
        AppInsightsModule._defineLazyMethods = function () {
            var aiObject = window[AppInsightsModule.appInsightsName];
            // capture initial cookie if possible
            try {
                aiObject.cookie = document.cookie;
            }
            catch (e) {
            }
            aiObject.queue = [];
            var method = [
                "clearAuthenticatedUserContext",
                "flush",
                "setAuthenticatedUserContext",
                "startTrackEvent",
                "startTrackPage",
                "stopTrackEvent",
                "stopTrackPage",
                "trackDependency",
                "trackEvent",
                "trackException",
                "trackMetric",
                "trackPageView",
                "trackTrace"
            ];
            while (method.length) {
                AppInsightsModule._createLazyMethod(method.pop());
            }
        };
        AppInsightsModule._download = function (aiConfig) {
            AppInsightsModule.appInsightsInstance.config = aiConfig;
            var aiObject = window[AppInsightsModule.appInsightsName];
            // if script was previously downloaded and initialized, queue will be deleted, reinitialize it
            if (!aiObject.queue) {
                aiObject.queue = [];
            }
            setTimeout(function () {
                var scriptElement = document.createElement("script");
                scriptElement.src = aiConfig.url || "https://az416426.vo.msecnd.net/scripts/a/ai.0.js";
                document.head.appendChild(scriptElement);
            });
            // collect global errors by wrapping the window.onerror method
            if (!aiConfig.disableExceptionTracking) {
                var method_1 = "onerror";
                AppInsightsModule._createLazyMethod("_" + method_1);
                var originalOnError = window[method_1];
                window[method_1] = function (message, url, lineNumber, columnNumber, error) {
                    var handled = originalOnError && originalOnError(message, url, lineNumber, columnNumber, error);
                    if (handled !== true) {
                        aiObject["_" + method_1](message, url, lineNumber, columnNumber, error);
                    }
                    return handled;
                };
            }
        };
        Object.defineProperty(AppInsightsModule, "appInsightsInstance", {
            get: function () {
                if (typeof window === 'undefined') {
                    return;
                }
                if (!window[AppInsightsModule.appInsightsName]) {
                    window[AppInsightsModule.appInsightsName] = {
                        downloadAndSetup: AppInsightsModule._download,
                        // exposing it for unit tests only, not part of interface
                        _defineLazyMethods: AppInsightsModule._defineLazyMethods
                    };
                    AppInsightsModule._defineLazyMethods();
                }
                return window[AppInsightsModule.appInsightsName];
            },
            enumerable: true,
            configurable: true
        });
        AppInsightsModule.appInsightsInitialized = false;
        AppInsightsModule.appInsightsName = "appInsights";
        return AppInsightsModule;
    }());
    exports.AppInsights = AppInsightsModule.appInsightsInstance;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=ai.module.js.map

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

/***/ "./DropdownList/DropdownListDirective.js":
/*!***********************************************!*\
  !*** ./DropdownList/DropdownListDirective.js ***!
  \***********************************************/
/*! exports provided: dropdownListDirective_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownListDirective_instance", function() { return dropdownListDirective_instance; });
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
 // 09/20/2019 10:21 am - SSN - Replace angular.module



var dropdownListDirective_instance = function () {
  var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance("demoSites_Index_Timesheet", ['ui.bootstrap']);
  downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {
    // Needed to be able to submit form
    var formName = $attrs['formName'];
    var form1 = $("[name='" + formName + "']").get(0);
    var absUrl = $location.absUrl().trim(); ///////////////////// $(form1).attr("action", absUrl);

    $scope.submitForm_2 = function (event, form) {};

    $scope.submitForm_1 = function (event, form) {
      if (!form.$valid) {
        event.preventDefault();
      }
    };
  }]);
  downdownList_angular_module.directive('dropdownListDirective', function () {
    var controller = function controller($http, $q, $scope) {
      var vm = this;
      vm.firstRun = true;

      vm.isValid = function () {
        var _isValid = false;

        if ($scope.disciplineSelected) {
          var selectedValue = $scope.disciplineSelected.id;

          if (selectedValue) {
            $("[name='" + this.keyColumn + "']").val($scope.disciplineSelected.id);
            _isValid = true;
          }
        } // 09/16/2019 02:48 am - SSN - Added to set default value


        var currentValue = $("[name='" + this.keyColumn + "']").val();

        if (vm.firstRun) {
          // 09/16/2019 04:18 am - SSN - [20190916-0355] - [003] - Adding JobAPI controller
          vm.APIUrl = "NotSet_20190916_0415";
          vm.typeAheadLabel = "NotSet_20190916_0534";

          switch (this.keyColumn.toLowerCase()) {
            case 'timelog.disciplineid':
              vm.APIUrl = '/api/DisciplineAPI';
              vm.typeAheadLabel = "Descipline";
              break;

            case 'timelog.jobid':
              vm.APIUrl = '/api/jobapi/typeahead';
              vm.typeAheadLabel = "Job Title";
              break;
          }

          vm.firstRun = false;
          vm.getDisciplineCurrent(currentValue).then(vm.currentDisplineLookupSuccess);
        }

        return _isValid;
      };

      vm.currentDisplineLookupSuccess = function (data) {
        if (data) {
          ////                    $scope.disciplineSelected = { id: response.data.disciplineId, title: response.data.disciplineShort };
          //addresses.push({ id: response.data.disciplineId, title: response.data.disciplineShort });
          // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
          if (data.disciplineId) {
            $scope.disciplineSelected = {
              id: data.disciplineId,
              title: data.disciplineShort
            };
          }

          if (data.ta_id) {
            $scope.disciplineSelected = {
              id: data.ta_id,
              title: data.ta_description
            };
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
    };

    return {
      restrict: "E",
      templateUrl: "/js/DropdownList/DropDownListDirective.html",
      controller: ['$http', '$q', '$scope', controller],
      controllerAs: 'vm101',
      bindToController: true,
      scope: {
        keyColumn: "@key",
        formName: "=" // Needed for posting form (Replacing url)

      }
    };
  });
  return {
    downdownList_angular_module: downdownList_angular_module
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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp"); // 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - ssn_devsite_angular_module is in use by DataServices.js
  // 11/14/2019 03:35 pm - SSN - [20191114-1459] - [005] - ChangeMonitroService
  // Inject changeMonitorService

  timesheetApp.controller("timesheetController", ['$scope', '$uibModal', 'changeMonitorService', function ($scope, $uibModal, changeMonitorService) {
    $scope.timesheetForm_ClockOut = function (_timelogId) {
      // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
      // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
      // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
      //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
      console.log('TimesheetApp - 20191114-1435 - modalClockout  - begin ');
      var modalClockout = $uibModal.open({
        templateUrl: '/js/timesheet/templates/TimeLogEdit.html',
        controller: 'TimesheetClockOutController',
        windowClass: 'ssn-mobile-modal',
        size: 'md',
        //05/03/2019 05:50 pm - SSN - [20190503-1539] - [011] - Add link to create timelog 
        // Added backdrop
        backdrop: false,
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
        size: 'md',
        backdrop: false,
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
        // 05/03/2019 04:29 pm - SSN - [20190503-1539] - [007] - Add link to create timelog - Prevent close (Testing)
        // windowClass: 'ssn-mobile-modal',
        // size: 'md',
        backdrop: false,
        resolve: {
          jobId: function jobId() {
            return jobID;
          }
        }
      });
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

/***/ "./Timesheet/timesheet_main.js":
/*!*************************************!*\
  !*** ./Timesheet/timesheet_main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitorService */ "./Util/ChangeMonitorService.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DataServices */ "./DataServices.js");
/* harmony import */ var _TimesheetApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimesheetApp */ "./Timesheet/TimesheetApp.js");
/* harmony import */ var _TimesheetController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TimesheetController */ "./Timesheet/TimesheetController.js");
/* harmony import */ var _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timesheetcontinuecontroller */ "./Timesheet/timesheetcontinuecontroller.js");
/* harmony import */ var _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timesheetclockoutcontroller */ "./Timesheet/timesheetclockoutcontroller.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack
// 11/09/2019 12:05 pm - SSN - Added ChangeMonitor
// 11/14/2019 03:20 pm - SSN - [20191114-1459] - [004] - ChangeMonitroService
//import { ChangeMonitor_Util } from '../Util/ChangeMonitor';







var ngApplicationName = 'timesheetApp'; //ChangeMonitor_Util

_Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__["changeMonitorService_instance"].doSetup(ngApplicationName);
_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_6__["dropdownListDirective_instance"];
_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup(ngApplicationName);
_TimesheetController__WEBPACK_IMPORTED_MODULE_3__["timesheetController_instance"].timesheetApp_TimesheetController;
_timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_4__["timesheetContinueController_instance"].timesheetApp;
_timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_5__["timesheetClockoutController_instance"].timesheetApp;
_TimesheetApp__WEBPACK_IMPORTED_MODULE_2__["timesheetApp_instance"].timesheetApp; // 10/01/2019 11:09 am - SSN - [20191001-0944] - [007] - Adding Application Insights for JavaScript

console.log("Timesheet_main - 20191001-1110");

_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_7__["AppInsights_Util"].doSetup();
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_7__["AppInsights_Util"].logEvent("Timesheet_main", {
  SourceCode: "20191001-1112-C",
  Message: "Loading timesheet_main"
});
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_7__["AppInsights_Util"].logEvent(document.location.hostname, {
  SourceCode: "20191105-0503",
  Message: "Loading timesheet_main"
});

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
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance("timesheetApp");
  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'timelogId', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, timelogId) {
    // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
    // $scope.timeLog = dataService.getTimelog($routeParams.id);
    // $scope.timeLog = dataService.getTimelog(timelogId);
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch); // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
    // Add pageTitle

    $scope.pageTitle = "Clock-out";

    function getTimelogSuccess(data) {
      //$scope.disciplineSelected = { id: 0, title: '' };
      //let timeNow = new Date();
      //timeNow.setMilliseconds(0);
      // timeNow.setSeconds(0);
      //$scope.timeLog = {
      //    timeLogId: 0,
      //    id: 0,
      //    startTime: timeNow,
      //    workDetail: "",
      //    disciplineId: '2',
      //    jobId: jobId
      //};
      var data2 = data;
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data2);
      $scope.timeLog = data2; // $scope.disciplineSelected = data2.discipline.disciplineShort; // { id: data2.discipline.disciplineId, title: data2.discipline.disciplineShort};

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
      console.log('timesheetClockOutController - 20190922-1426');
      console.log(data);
    }

    function getTimelogCatch(data) {
      console.log('timesheetClockOutController - 20190922-1427');
      console.log(data);
    }

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
          alert("System Error! Check console.");
          console.log(error);
        });
      }

      $uibModalInstance.close();
      toastr.info("Clocked-out");
    };

    $scope.cancelForm = function () {
      $uibModalInstance.dismiss(); //same as cancel???
    }; // 04/13/2019 11:00 am - SSN - [20190413-1037] - Add discipline lookup


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

/***/ "./Util/ApplicationInsights_Monitor.js":
/*!*********************************************!*\
  !*** ./Util/ApplicationInsights_Monitor.js ***!
  \*********************************************/
/*! exports provided: AppInsights_Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInsights_Util", function() { return AppInsights_Util; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment */ "./environment.js");
/* harmony import */ var applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! applicationinsights-js */ "../../node_modules/applicationinsights-js/bundle/ai.module.js");
/* harmony import */ var applicationinsights_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__);
// 10/01/2019 09:49 am - SSN - [20191001-0944] - [004] - Adding Application Insights for JavaScript
// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/



var AppInsights_Util = function () {
  console.log('ApplicationInsights_monitor - 20191001-0951 - 001-B - top instance');
  console.log("20191031-0547-001-002");
  console.log(_environment__WEBPACK_IMPORTED_MODULE_0__["environment"]);
  var config = {
    instrumentationKey: _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appInsights.instrumentationKey
  };

  var haveInstrumentationKey = function haveInstrumentationKey() {
    return config.instrumentationKey;
  };

  var doSetup = function doSetup() {
    if (!applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].config) {
      // AppInsights.downloadAndSetup(this.config);
      // 10/11/2019 04:54 pm - SSN - Added check
      if (haveInstrumentationKey()) {
        console.log(config);
        applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].downloadAndSetup(config);
      } else {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log('instrumentationKey is not set  -  20191011-1654');
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
      }
    }
  };

  var doTest = function doTest() {
    // 10/1/2019 03:45 am - SSN 
    console.log('ApplictionInsights_Monitor - doTest');
    /* example: track page view */

    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackPageView("FirstPage-20191001-1015",
    /* (optional) page name */
    null,
    /* (optional) page url if available */
    {
      prop1: "prop1",
      prop2: "prop2"
    },
    /* (optional) dimension dictionary */
    {
      measurement1: 1
    },
    /* (optional) metric dictionary */
    123
    /* page view duration in milliseconds */
    );
    /* example: track event */

    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackEvent("TestEvent-20191001-1016", {
      prop1: "prop1",
      prop2: "prop2"
    }, {
      measurement1: 1
    });
  };

  var logPageView = function logPageView(name, url, properties, measurements, duration) {
    // 10/1/2019 03:45 am - SSN 
    console.log('ApplictionInsights_Monitor - logPageView');
    console.log(name, url, properties);
    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackPageView(name, url, properties); //, measurements, duration);
  };

  var logEvent = function logEvent(name, properties, measurements) {
    // 10/1/2019 03:45 am - SSN 
    console.log('ApplictionInsights_Monitor - logEvent');
    console.log(name, properties, measurements);
    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackEvent(name, properties, measurements);
  };

  var logException = function logException(exception, props, handledAt) {
    // 10/1/2019 03:45 am - SSN 
    console.log('ApplictionInsights_Monitor - logException ');
    console.log(props);
    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackException(exception, handledAt, props);
  };

  return {
    doSetup: doSetup,
    doTest: doTest,
    logPageView: logPageView,
    logEvent: logEvent,
    logException: logException
  };
}();

console.log('ApplicationInsights_monitor - 20191001-0951 - ZZZ - bottom file OOOOOOOOOOOOOOOOOOOOOOOOOOOOO ');


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
// 11/09/2019 11:03 am - SSN - Created
var ChangeMonitor_Util = function () {
  var haveChanges = false;

  var setItemChanged_ssn = function setItemChanged_ssn(ev) {
    ChangeMonitor_Util.haveChanges = true;
  };

  var setItemToResetChangedFlag_ssn = function setItemToResetChangedFlag_ssn(ev) {
    console.log('changeMonitor - reset change flag');
    ChangeMonitor_Util.haveChanges = false;
  }; // 11/09/2019 08:08 am - SSN - Added monitorChange_SSN


  var monitorChange_SSN = function monitorChange_SSN() {
    console.log('site - monitorChangeXXXXX - 20191109-0810 - 5');
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
          if (!ChangeMonitor_Util.haveChanges) return;
          var confirmationMessage = "\o/";
          (e || window.event).returnValue = confirmationMessage; //Gecko + IE

          return "You will lose all pending changes if you leave this page"; //Webkit, Safari, Chrome etc.
        });
      } // Cannot use with Chrome


      if (!isChrome) {
        window.onbeforeunload = function (e) {
          if (!ChangeMonitor_Util.haveChanges) return;
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
    haveChanges: haveChanges,
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

/***/ "./Util/ChangeMonitorService.js":
/*!**************************************!*\
  !*** ./Util/ChangeMonitorService.js ***!
  \**************************************/
/*! exports provided: changeMonitorService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMonitorService_instance", function() { return changeMonitorService_instance; });
/* harmony import */ var _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitor */ "./Util/ChangeMonitor.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 11/14/2019 02:59 pm - SSN - [20191114-1459] - [001] - ChangeMonitroService


console.log('ChangeMonitorService  - 20191114-1505 - top ');

var changeMonitorService_instance = function () {
  console.log('ChangeMonitorService  - 20191114-1505 - top DOSETUP');

  var doSetup = function doSetup(currentApplication) {
    console.log('ChangeMonitorService  - 20191114-1505 - top   IN    DOSETUP');
    var ssn_ChangeMonitorService_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance(currentApplication);
    ssn_ChangeMonitorService_module.factory("changeMonitorService", ['$http', '$q', function ($http, $q) {
      var _setupMonitor = function _setupMonitor() {
        console.log("Inomplete Testing setupMonitor plugged in");
        _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitor_Util"].setupMonitor_FullProcess();
      };

      var _getHaveChanges = function _getHaveChanges() {
        return _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitor_Util"].haveChanges;
      };

      var _reset = function _reset() {
        _Util_ChangeMonitor__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitor_Util"].haveChanges = false;
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

/***/ "./environment.js":
/*!************************!*\
  !*** ./environment.js ***!
  \************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// 10/01/2019 09:47 am - SSN - [20191001-0944] - [003] - Adding Application Insights for JavaScript
// https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/
var environment = {
  appInsights: {
    // instrumentationKey: 'd9f2121b-9475-4fd6-97cb-4df016e33ce3'
    // 10/31/2019 03:58 am - SSN - Added
    // instrumentationKey: '27233881-18ab-41ea-b5f9-f24b8ed62bd3',
    // 11/07/2019 08:34 pm - SSN - Replaced
    //    "InstrumentationKey": "deleted", "d9f2121b-9475-4fd6-97cb-4df016e33ce3" ,
    // PS-FabrikamResidences - "33c6def5-430f-4cd4-8b6f-996820820dab"
    instrumentationKey: "33c6def5-430f-4cd4-8b6f-996820820dab"
  }
};

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
    }); // 11/08/2019 01:04 pm - SSN - [20191108-1043] - [008] - Persisting search on return to index
    // 

    $('[ssn-cmd=returnToCallerLink]').click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      var returnToCallerKey = $("#returnToCallerKey").val();
      document.location.href = e.target.href + "&returnToCallerKey=" + returnToCallerKey;
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

    setTimeout(prefixPreWithShowHideAnchor, 2000);
  });
  return {
    fnConverDate: fnConverDate,
    showCollapsedDivs: showCollapsedDivs,
    prefixPreWithShowHideAnchor: prefixPreWithShowHideAnchor
  };
}();


console.log('site - 20191104-1750');
console.log('site - 20191104-1750-ZZZ');

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./Timesheet/timesheet_main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Timesheet/timesheet_main.js */"./Timesheet/timesheet_main.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vQzovU2Ftcy9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL2FwcGxpY2F0aW9uaW5zaWdodHMtanMvYnVuZGxlL2FpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0QXBwLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvclNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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RCxNQUdLLElBQUksSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDeEIsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSDtBQUNKO0FBQ0osR0FsQkQ7O0FBeUJBLEdBQUMsQ0FBQztBQUVFLGVBQVcsR0FGYixDQUtFO0FBQ0E7QUFDQTs7QUFDQSxjQUFVLENBQUMsMkJBQUQsRUFBOEIsSUFBOUIsQ0FBVjtBQUdILEdBWEEsQ0FBRDtBQWtCQSxTQUFPO0FBRUgsZ0JBQVksRUFBRSxZQUZYO0FBR0gscUJBQWlCLEVBQUUsaUJBSGhCO0FBSUgsK0JBQTJCLEVBQUU7QUFKMUIsR0FBUDtBQVNILENBalZtQixFQUFwQjs7QUFvVkE7QUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLHNCQUFaO0FBT0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSwwQkFBWixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVXQSx5QiIsImZpbGUiOiJidW5kbGVfdGltZXNoZWV0YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIHN0cnVjdCB0byBjb250YWluIG9ubHkgQyBzZWN0aW9uIHdpdGggY3VzdG9tIGZpZWxkcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gQmFzZSgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5CYXNlID0gQmFzZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQmFzZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTeXN0ZW0gdmFyaWFibGVzIGZvciBhIHRlbGVtZXRyeSBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBFbnZlbG9wZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRW52ZWxvcGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJhdGUgPSAxMDAuMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBFbnZlbG9wZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5FbnZlbG9wZSA9IEVudmVsb3BlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVNlcmlhbGl6YWJsZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9FbnZlbG9wZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUFwcGxpY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lEZXZpY2UudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUludGVybmFsLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lMb2NhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JT3BlcmF0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTYW1wbGUudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVVzZXIudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNlc3Npb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RlbGVtZXRyeS9JRW52ZWxvcGUudHNcIi8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBBSTtcclxuKGZ1bmN0aW9uIChBSSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGxldmVsIG9mIHNldmVyaXR5IGZvciB0aGUgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBTZXZlcml0eUxldmVsO1xyXG4gICAgKGZ1bmN0aW9uIChTZXZlcml0eUxldmVsKSB7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiVmVyYm9zZVwiXSA9IDBdID0gXCJWZXJib3NlXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAxXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJXYXJuaW5nXCJdID0gMl0gPSBcIldhcm5pbmdcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkNyaXRpY2FsXCJdID0gNF0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICB9KShTZXZlcml0eUxldmVsID0gQUkuU2V2ZXJpdHlMZXZlbCB8fCAoQUkuU2V2ZXJpdHlMZXZlbCA9IHt9KSk7XHJcbn0pKEFJIHx8IChBSSA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lDb25maWcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVGVsZW1ldHJ5Q29udGV4dC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvU2V2ZXJpdHlMZXZlbC50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgdmFyIFV0aWxIZWxwZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVdGlsSGVscGVycygpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogZ2VuZXJhdGUgcmFuZG9tIGlkIHN0cmluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXRpbEhlbHBlcnMubmV3SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0Y2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTA3Mzc0MTgyNDsgLy81IHN5bWJvbHMgaW4gYmFzZTY0LCBhbG1vc3QgbWF4aW50XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmFuZG9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gYmFzZTY0Y2hhcnMuY2hhckF0KHJhbmRvbSAlIDY0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKHJhbmRvbSAvIDY0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsSGVscGVycztcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uSW5zaWdodHMuVXRpbEhlbHBlcnMgPSBVdGlsSGVscGVycztcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUNvbmZpZy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQXBwSW5zaWdodHMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLL1V0aWxIZWxwZXJzLnRzXCIvPlxyXG5kZWZpbmUoXCJKYXZhU2NyaXB0U0RLLk1vZHVsZS9BcHBJbnNpZ2h0c01vZHVsZVwiLCBbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIEFwcEluc2lnaHRzTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcEluc2lnaHRzTW9kdWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBEZWZpbmUgYSB0ZW1wb3JhcnkgbWV0aG9kIHRoYXQgcXVldWVzLXVwIGEgdGhlIHJlYWwgbWV0aG9kIGNhbGxcclxuICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBvcmlnaW5hbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBhdmFpbGFibGUsIGl0IG1lYW5zIHRoYXQgdGhlIGZ1bmN0aW9uIHdhc24ndCB5ZXQgcmVwbGFjZWQgd2l0aCBhY3R1YWwgZnVuY3Rpb24gdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5pdGlhbCBjb29raWUgaWYgcG9zc2libGVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LmNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBbXHJcbiAgICAgICAgICAgICAgICBcImNsZWFyQXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZsdXNoXCIsXHJcbiAgICAgICAgICAgICAgICBcInNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0RlcGVuZGVuY3lcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V4Y2VwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja01ldHJpY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1BhZ2VWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrVHJhY2VcIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB3aGlsZSAobWV0aG9kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QobWV0aG9kLnBvcCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkID0gZnVuY3Rpb24gKGFpQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2UuY29uZmlnID0gYWlDb25maWc7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBpZiBzY3JpcHQgd2FzIHByZXZpb3VzbHkgZG93bmxvYWRlZCBhbmQgaW5pdGlhbGl6ZWQsIHF1ZXVlIHdpbGwgYmUgZGVsZXRlZCwgcmVpbml0aWFsaXplIGl0XHJcbiAgICAgICAgICAgIGlmICghYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IGFpQ29uZmlnLnVybCB8fCBcImh0dHBzOi8vYXo0MTY0MjYudm8ubXNlY25kLm5ldC9zY3JpcHRzL2EvYWkuMC5qc1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3QgZ2xvYmFsIGVycm9ycyBieSB3cmFwcGluZyB0aGUgd2luZG93Lm9uZXJyb3IgbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghYWlDb25maWcuZGlzYWJsZUV4Y2VwdGlvblRyYWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kXzEgPSBcIm9uZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKFwiX1wiICsgbWV0aG9kXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsT25FcnJvciA9IHdpbmRvd1ttZXRob2RfMV07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbbWV0aG9kXzFdID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVkID0gb3JpZ2luYWxPbkVycm9yICYmIG9yaWdpbmFsT25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W1wiX1wiICsgbWV0aG9kXzFdKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcEluc2lnaHRzTW9kdWxlLCBcImFwcEluc2lnaHRzSW5zdGFuY2VcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBbmRTZXR1cDogQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvc2luZyBpdCBmb3IgdW5pdCB0ZXN0cyBvbmx5LCBub3QgcGFydCBvZiBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmluZUxhenlNZXRob2RzOiBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lID0gXCJhcHBJbnNpZ2h0c1wiO1xyXG4gICAgICAgIHJldHVybiBBcHBJbnNpZ2h0c01vZHVsZTtcclxuICAgIH0oKSk7XHJcbiAgICBleHBvcnRzLkFwcEluc2lnaHRzID0gQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFpLm1vZHVsZS5qcy5tYXAiLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9hZGREZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYnMgWzIwMTkwOTE3LTAwNTddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMzAvMjAxOSAwNzowNiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYiA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGFTZXJ2aWNlcyAtIDIwMTkwOTMwLTE5MDcgLSBnZXRKb2IgW1wiICsgaWQgKyBcIl1cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iIFsyMDE5MDkzMC0xOTA4XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2JcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA5LzEzLzIwMTkgMDU6NDggYW0gLSBTU04gLSBbMjAxOTA5MTMtMDU0OF0gLSBbMDAxXSAtIENyYXRlIGdlbmVyaWMgZHJvcGRvd24gbGlzdCBkaXJlY3RpdmVcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6NTIgYW0gLSBTU04gLSBBZGRlZCBpbXBvcnQgYW5ndWxhclxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6MjEgYW0gLSBTU04gLSBSZXBsYWNlIGFuZ3VsYXIubW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5cclxudmFyIGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoXCJkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0XCIsIFsndWkuYm9vdHN0cmFwJ10pO1xyXG5cclxuXHJcbiAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIC8vIE5lZWRlZCB0byBiZSBhYmxlIHRvIHN1Ym1pdCBmb3JtXHJcbiAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgIHZhciBmb3JtMSA9ICQoXCJbbmFtZT0nXCIgKyBmb3JtTmFtZSArIFwiJ11cIikuZ2V0KDApO1xyXG4gICAgICAgIHZhciBhYnNVcmwgPSAkbG9jYXRpb24uYWJzVXJsKCkudHJpbSgpO1xyXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybV8yID0gZnVuY3Rpb24gKGV2ZW50LCBmb3JtKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFmb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3REaXJlY3RpdmUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2bS5maXJzdFJ1biA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB2bS5pc1ZhbGlkID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDI6NDggYW0gLSBTU04gLSBBZGRlZCB0byBzZXQgZGVmYXVsdCB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSAkKFwiW25hbWU9J1wiICsgdGhpcy5rZXlDb2x1bW4gKyBcIiddXCIpLnZhbCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodm0uZmlyc3RSdW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwNDoxOCBhbSAtIFNTTiAtIFsyMDE5MDkxNi0wMzU1XSAtIFswMDNdIC0gQWRkaW5nIEpvYkFQSSBjb250cm9sbGVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybCA9IFwiTm90U2V0XzIwMTkwOTE2XzA0MTVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0udHlwZUFoZWFkTGFiZWwgPSBcIk5vdFNldF8yMDE5MDkxNl8wNTM0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5kaXNjaXBsaW5laWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS50eXBlQWhlYWRMYWJlbCA9IFwiRGVzY2lwbGluZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmpvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0udHlwZUFoZWFkTGFiZWwgPSBcIkpvYiBUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQoY3VycmVudFZhbHVlKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX2lzVmFsaWQ7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLy8vICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogcmVzcG9uc2UuZGF0YS5kaXNjaXBsaW5lSWQsIHRpdGxlOiByZXNwb25zZS5kYXRhLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYWRkcmVzc2VzLnB1c2goeyBpZDogcmVzcG9uc2UuZGF0YS5kaXNjaXBsaW5lSWQsIHRpdGxlOiByZXNwb25zZS5kYXRhLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwNTozMCBhbSAtIFNTTiAtIFsyMDE5MDkxNi0wMzU1XSAtIFswMDhdIC0gQWRkaW5nIEpvYkFQSSBjb250cm9sbGVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YS50YV9pZCwgdGl0bGU6IGRhdGEudGFfZGVzY3JpcHRpb24gfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybFxyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwNToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxNi0wMzU1XSAtIFswMDZdIC0gQWRkaW5nIEpvYkFQSSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGlsZSBkZXZlbG9wbWVudCBpbiBwcm9ncmVzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS50YV9pZCwgdGl0bGU6IGl0ZW0udGFfZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE2LzIwMTkgMDI6NTcgYW0gLSBTU04gLSBBZGRlZCB0byBnZXQgY3VycmVudCB2YWx1ZSBhbmQgdXBkYXRlIHZpZXcuXHJcblxyXG4gICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCA9IGZ1bmN0aW9uIChsb29rdXBJRCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBJRCA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB2bS5BUElVcmwgKyBcIi9cIiArIGxvb2t1cElEXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9Ecm9wZG93bkxpc3QvRHJvcERvd25MaXN0RGlyZWN0aXZlLmh0bWxcIixcclxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckaHR0cCcsICckcScsICckc2NvcGUnLCBjb250cm9sbGVyXSxcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcbiAgICAgICAgICAgICAgICBmb3JtTmFtZTogXCI9XCIgIC8vIE5lZWRlZCBmb3IgcG9zdGluZyBmb3JtIChSZXBsYWNpbmcgdXJsKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZTogZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAxOjQyIGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG52YXIgdGltZXNoZWV0QXBwX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDUvMDMvMjAxOSAwNjozMyBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTNdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgIC8vIENvbnZlcnQgdG8gVFNcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBpcyBpbiB1c2UgYnkgRGF0YVNlcnZpY2VzLmpzXHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MzUgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA1XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcihcInRpbWVzaGVldENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gYmVnaW4gJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZUxvZ0VkaXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAnbWQnLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vMDUvMDMvMjAxOSAwNTo1MCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTFdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgICAgICAvLyBBZGRlZCBiYWNrZHJvcFxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDM6MzYgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA2XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb2Nrb3V0LnJlc3VsdC50aGVuKG1vZGFsQ2xvY2tvdXRfc2F2ZSwgbW9kYWxDbG9ja291dF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTIgLSBtb2RhbENsb2Nrb3V0XzEgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUtMyAtIG1vZGFsQ2xvY2tvdXRfMiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUgLSBtb2RhbENsb2Nrb3V0ICAtIGVuZCAnKTtcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDk6MzcgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAzXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCBcclxuXHJcbiAgICAgICAgICAgIGxldCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcbiAgICAgICAgICAgICAgICBzaXplOiAnbWQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDE5MTExNC0xNDQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDE5MTExNC0xNDQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTQvMjAxOSAwNDo0MSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDhdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuICAgICAgICAvLyBUZXN0aW5nIC0gTm90IHdvcmtpbmcuXHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vayAoJHNjb3BlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbW9kYWwuY2xvc2luZyAtIGJlZ2luJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RhbC5jbG9zaW5nOiAnICsgKGNsb3NlZCA/ICdjbG9zZScgOiAnZGlzbWlzcycpICsgJygnICsgcmVhc29uICsgJyknKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiWW91IGFyZSBhYm91dCB0byBsZWF2ZSB0aGUgZWRpdCB2aWV3LiBVbmNhdWdodCByZWFzb24uIEFyZSB5b3Ugc3VyZT9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrZWQgb3V0c2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrZHJvcCBjbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc2NhcGUga2V5IHByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbC5jbG9zaW5nIC0gZW5kJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uIChqb2JJRCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTihqb2JJRCkpIHtcclxuICAgICAgICAgICAgICAgIGpvYklEID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNDoxMCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuXHJcblxyXG4gICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjI5IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwN10gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyAtIFByZXZlbnQgY2xvc2UgKFRlc3RpbmcpXHJcbiAgICAgICAgICAgICAgICAvLyB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG4gICAgICAgICAgICAgICAgLy8gc2l6ZTogJ21kJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqb2JJRDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMDkvMzAvMjAxOSAwNjo1NiBwbSAtIFNTTiAtIChJbmplY3Qgam9iSWQpXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2pvYklkJyxcclxuICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGpvYklkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2Iuam9iVGl0bGUgPSBkYXRhLmpvYlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdC5wcm9qZWN0VGl0bGUgPSBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZXRDb250cm9sbGVyIC0gZ2V0Sm9iU3VjY2VzcyAgLSAgMjAxOTA5MzAtMjEwNi1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IDAsIHRpdGxlOiAnJyB9O1xyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW5cIjtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IHtcclxuICAgICAgICAgICAgICAgIHRpbWVMb2dJZDogMCxcclxuICAgICAgICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiB0aW1lTm93LFxyXG4gICAgICAgICAgICAgICAgd29ya0RldGFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGRpc2NpcGxpbmVJZDogJzInLFxyXG4gICAgICAgICAgICAgICAgam9iSWQ6IGpvYklkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmRpc2NpcGxpbmVJZCA9ICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtaW5cIik7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMy8yMDE5IDExOjAwIGFtIC0gU1NOIC0gWzIwMTkwNDEzLTEwMzddIC0gQWRkIGRpc2NpcGxpbmUgbG9va3VwXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG4gICAgICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDZdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgICAgICAgICAgICAgIC8vIGZyb20gICB1cmw6ICAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcbiAgICAgICAgICAgICAgICAvLyAgIHRvICAgdXJsOiAnL2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvRGlzY2lwbGluZUFQSSdcclxuXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFuZ3VsYXIgLSBmb3JFYWNoIC0gMjAxOTA5MjAtMDcyMC1vXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcF9UaW1lc2hlZXRDb250cm9sbGVyOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA5LzIxLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDAxXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxuLy8gMTEvMDkvMjAxOSAxMjowNSBwbSAtIFNTTiAtIEFkZGVkIENoYW5nZU1vbml0b3JcclxuLy8gMTEvMTQvMjAxOSAwMzoyMCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDRdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbi8vaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yJztcclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0QXBwJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vdGltZXNoZWV0Y29udGludWVjb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlJztcclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9ICd0aW1lc2hlZXRBcHAnO1xyXG5cclxuXHJcbi8vQ2hhbmdlTW9uaXRvcl9VdGlsXHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbmRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZTtcclxuXHJcbmRhdGFTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxudGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjtcclxuXHJcbnRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG50aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxudGltZXNoZWV0QXBwX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbi8vIDEwLzAxLzIwMTkgMTE6MDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA3XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5jb25zb2xlLmxvZyhcIlRpbWVzaGVldF9tYWluIC0gMjAxOTEwMDEtMTExMFwiKTtcclxuXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoKTtcclxuXHJcblxyXG5cclxuQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIlRpbWVzaGVldF9tYWluXCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTAwMS0xMTEyLUNcIiwgTWVzc2FnZTogXCJMb2FkaW5nIHRpbWVzaGVldF9tYWluXCIgfSk7XHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsIHsgU291cmNlQ29kZTogXCIyMDE5MTEwNS0wNTAzXCIsIE1lc3NhZ2U6IFwiTG9hZGluZyB0aW1lc2hlZXRfbWFpblwiIH0pO1xyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG4vLyAwNS8xOS8yMDE5IDEyOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwM10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbi8vIDA5LzIxLzIwMTkgMTE6NTIgYW0gIC0gU1NOIC0gVXBncmFkaW5nIHRvIHVzZSBCYWJlbC9XV2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gIFxyXG4gICAgLy8gMDUvMTkvMjAxOSAxMDowNiBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDZdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICd0aW1lbG9nSWQnLFxyXG5cclxuICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIHRpbWVsb2dJZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjUxIHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2coJHJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2stb3V0XCI7XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiAwLCB0aXRsZTogJycgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9sZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy8gdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vJHNjb3BlLnRpbWVMb2cgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICB0aW1lTG9nSWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAvLyAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIC8vICAgIHN0YXJ0VGltZTogdGltZU5vdyxcclxuICAgICAgICAgICAgICAgIC8vICAgIHdvcmtEZXRhaWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAvLyAgICBkaXNjaXBsaW5lSWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIC8vICAgIGpvYklkOiBqb2JJZFxyXG4gICAgICAgICAgICAgICAgLy99O1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0gZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQ7IC8vIHsgaWQ6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnR9O1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyhkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZCA9IHsgaWQ6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAsIDUwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuZGlzY2lwbGluZUlkID0gJHNjb3BlLmRpc2NpcGxpbmVTZWxlY3RlZC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJTeXN0ZW0gRXJyb3IhIENoZWNrIGNvbnNvbGUuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuIFxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDA0LzEzLzIwMTkgMTE6MDAgYW0gLSBTU04gLSBbMjAxOTA0MTMtMTAzN10gLSBBZGQgZGlzY2lwbGluZSBsb29rdXBcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcblxyXG5cclxuLy8gMDUvMTkvMjAxOSAwOTo0NSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDVdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcbi8vIENvcGllZCBmcm9tIENsb2Nrb3V0LlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxuY29uc3QgbmdBcHBsaWNhdGlvbk5hbWUgPSBcInRpbWVzaGVldEFwcFwiO1xyXG5cclxudmFyIHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShuZ0FwcGxpY2F0aW9uTmFtZSApO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjA3IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgQ2hhbmdlTW9uaXRvclNlcnZpY2UnKTtcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAndGltZWxvZ0lkJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJyAsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsIHRpbWVsb2dJZCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDb250aW51ZSAvIExpbmUgSXRlbVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTkgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDEwXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCA9IFwiMTVcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMjo0MSBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDNdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgVGltZUxvZ0lkID0gMFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudGltZUxvZ0lkID0gMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDcvMDIvMjAxOSAwOToxNyBhbSAtIFNTTiAtIEFkZGVkIG51bGxpZnkgZGF0ZU1vZGlmaWVkIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDA3OjMxIGFtIC0gU1NOIC0gRm9yZ290dGVuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmRpc2NpcGxpbmVJZCA9ICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU3IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAwOV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByZWNvcmQuIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwNTowOSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMTBdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoZmFsc2UpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuXHJcblxyXG5cclxudmFyIEFwcEluc2lnaHRzX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbkluc2lnaHRzX21vbml0b3IgLSAyMDE5MTAwMS0wOTUxIC0gMDAxLUIgLSB0b3AgaW5zdGFuY2UnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIjIwMTkxMDMxLTA1NDctMDAxLTAwMlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVudmlyb25tZW50KTtcclxuXHJcblxyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcblxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogZW52aXJvbm1lbnQuYXBwSW5zaWdodHMuaW5zdHJ1bWVudGF0aW9uS2V5XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGF2ZUluc3RydW1lbnRhdGlvbktleSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5pbnN0cnVtZW50YXRpb25LZXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIUFwcEluc2lnaHRzLmNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwSW5zaWdodHMuZG93bmxvYWRBbmRTZXR1cCh0aGlzLmNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMC8xMS8yMDE5IDA0OjU0IHBtIC0gU1NOIC0gQWRkZWQgY2hlY2tcclxuICAgICAgICAgICAgaWYgKGhhdmVJbnN0cnVtZW50YXRpb25LZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAoY29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnN0cnVtZW50YXRpb25LZXkgaXMgbm90IHNldCAgLSAgMjAxOTEwMTEtMTY1NCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljdGlvbkluc2lnaHRzX01vbml0b3IgLSBkb1Rlc3QnKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgcGFnZSB2aWV3ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgXCJGaXJzdFBhZ2UtMjAxOTEwMDEtMTAxNVwiLCAvKiAob3B0aW9uYWwpIHBhZ2UgbmFtZSAqL1xyXG4gICAgICAgICAgICBudWxsLCAvKiAob3B0aW9uYWwpIHBhZ2UgdXJsIGlmIGF2YWlsYWJsZSAqL1xyXG4gICAgICAgICAgICB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgLyogKG9wdGlvbmFsKSBkaW1lbnNpb24gZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICB7IG1lYXN1cmVtZW50MTogMSB9LCAvKiAob3B0aW9uYWwpIG1ldHJpYyBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIDEyMyAvKiBwYWdlIHZpZXcgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgZXZlbnQgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KFwiVGVzdEV2ZW50LTIwMTkxMDAxLTEwMTZcIiwgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIHsgbWVhc3VyZW1lbnQxOiAxIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGxvZ1BhZ2VWaWV3ID0gZnVuY3Rpb24gKG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55LCBkdXJhdGlvbj86IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nUGFnZVZpZXcnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdXJsLCBwcm9wZXJ0aWVzKTtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcobmFtZSwgdXJsLCBwcm9wZXJ0aWVzKTsvLywgbWVhc3VyZW1lbnRzLCBkdXJhdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFdmVudCA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nRXZlbnQnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb246IEVycm9yLCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljdGlvbkluc2lnaHRzX01vbml0b3IgLSBsb2dFeGNlcHRpb24gJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5jb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0c19tb25pdG9yIC0gMjAxOTEwMDEtMDk1MSAtIFpaWiAtIGJvdHRvbSBmaWxlIE9PT09PT09PT09PT09PT09PT09PT09PT09PT09PICcpO1xyXG5cclxuZXhwb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzA5LzIwMTkgMTE6MDMgYW0gLSBTU04gLSBDcmVhdGVkXHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBsZXQgaGF2ZUNoYW5nZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1DaGFuZ2VkX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvcl9VdGlsLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZU1vbml0b3IgLSByZXNldCBjaGFuZ2UgZmxhZycpO1xyXG4gICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NpdGUgLSBtb25pdG9yQ2hhbmdlWFhYWFggLSAyMDE5MTEwOS0wODEwIC0gNScpO1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoelt5XS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoelt5XS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fCBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvYmoxLmlkICYmICFvYmoxLm5hbWUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yIC0gc2V0dXBNb25pdG9yJyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBnZXRCcm93c2VyTmFtZSgpID09PSAnY2hyb21lJztcclxuXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gYmVmb3JlVW5sb2FkIG9uJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yX1V0aWwuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JfVXRpbC5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIigyKSBZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzA1LzIwMTkxIDA0OjUzIGFtIC0gU1NOIFxyXG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHVzZXJzIGZyb20gbmF2aWdhdGluZyBhd2F5IGZyb20gQW5ndWxhciBiYXNlZCBwYWdlcyB3aXRoIHBlbmRpbmcgY2hhbmdlcy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTgyOTEyL2hvdy10by1kZXRlY3QtYnJvd3Nlci13aXRoLWFuZ3VsYXJcclxuICAgIHZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2VkZ2UnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdvcHInKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5vcHI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5jaHJvbWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZigndHJpZGVudCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignc2FmYXJpJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE5lZWRlZCBzbyB3ZSBjYW4gY2FsbCBmcm9tIHBvcHVwcy5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobW9uaXRvckNoYW5nZV9TU04sIDIwMDApO1xyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDEoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDE6IHNldHVwTW9uaXRvcl92MDEsXHJcbiAgICAgICAgZ2V0QnJvd3Nlck5hbWU6IGdldEJyb3dzZXJOYW1lLFxyXG4gICAgICAgIGhhdmVDaGFuZ2VzOiBoYXZlQ2hhbmdlcyxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvciAtIDIwMTkxMTA5LTExMTQtRicpO1xyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDAyOjU5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCAnKTtcclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCBET1NFVFVQJyk7XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgICBJTiAgICBET1NFVFVQJyk7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZS5mYWN0b3J5KFwiY2hhbmdlTW9uaXRvclNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5vbXBsZXRlIFRlc3Rpbmcgc2V0dXBNb25pdG9yIHBsdWdnZWQgaW5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEhhdmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBDaGFuZ2VNb25pdG9yX1V0aWwuaGF2ZUNoYW5nZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3Jlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvcl9VdGlsLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBNb25pdG9yOiBfc2V0dXBNb25pdG9yLFxyXG4gICAgICAgICAgICAgICAgZ2V0SGF2ZUNoYW5nZXM6IF9nZXRIYXZlQ2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBfcmVzZXRcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yU2VydmljZSAgLSAyMDE5MTExNC0xNTA1IC0gYm90dG9tICcpO1xyXG4iLCLvu79cclxuLy8gMTAvMDEvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDNdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cclxuXHJcbiAgICBhcHBJbnNpZ2h0czoge1xyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICdkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTMnXHJcbiAgICAgICAgLy8gMTAvMzEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIEFkZGVkXHJcblxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICcyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDMnLFxyXG5cclxuICAgICAgICAvLyAxMS8wNy8yMDE5IDA4OjM0IHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICBcIkluc3RydW1lbnRhdGlvbktleVwiOiBcImRlbGV0ZWRcIiwgXCJkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTNcIiAsXHJcbiAgICAgICAgLy8gUFMtRmFicmlrYW1SZXNpZGVuY2VzIC0gXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuXHJcblxyXG4gICAgfVxyXG5cclxufTsiLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICAgICAgLy8vLyAgRE8gTk9UIFJFTU9WRS5cclxuICAgICAgICAgICAgLy8vLyBPcHRpb24gdG8gY2FsbCBhbiBpbmplY3RlZCBBbmd1bGFySlMgc2VydmVyIGZyb20gaGVyZS4gVGVzdGVkLiAgXHJcblxyXG4gICAgICAgICAgICAvL2ZhY3RvcnlTZXR1cC5kb0ZhY3RvcnlTZXR1cCgpO1xyXG5cclxuICAgICAgICAgICAgLy90cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJnbG9iYWxzOiAyMDE5MDkyMy0xMTM2IC0gQ2FsbGluZyB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgdGVzdF8xMDMuZG9JdCgpO1xyXG4gICAgICAgICAgICAvL30gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcihcImdsb2JhbHM6ICAyMDE5MDkyMy0xMTM1IC0gRmFpbGVkIGNhbGwgdG8gdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX09yaWdpbmFsKGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfT3JpZ2luYWwoYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA0NScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZShhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlKGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBnZXRJbnN0YW5jZTogZ2V0SW5zdGFuY2VcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9O1xyXG5cclxuZXhwb3J0IHsgdGVzdF8xMDMgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNS8xOS8yMDE5IDAxOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwN10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzIC0gTm8gZXJyb3JzXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+ICAgXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuICBcclxuXHJcbi8vMDgvMjMvMjAxOCAwMToyNCBhbSAtIFNTTlxyXG5cclxuLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcbiBcclxuXHJcbnZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgdmFyIHNldERlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICBhbGVydCgnY2xpY2tlZCBtZSEgY21kTmFtZSBbJyArIGNtZE5hbWUgKyBcIl0gcG9wdXAtbmFtZSAgW1wiICsgcG9wdXBOYW1lICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtZC1uYW1lJywgY21kTmFtZSwgJ3BvcHVwTmFtZScsIHBvcHVwTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUgJywgalF1ZXJ5T2JqZWN0TmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUyJywgalF1ZXJ5T2JqZWN0TmFtZTIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMDIvMjAxOSAwNzoyNSBwbSAtIFNTTiAtIFsyMDE5MTEwMS0wNTI2XSAtIFswMTNdIC0gQ2hlY2sgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgLy8gRGlkIG5vdCBmaW5pc2guXHJcbiAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAkKCcubW9kYWwnKS5vbignc2hvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgIC0gIDIwMTkxMTAyLTE5MzAgLSBTZXR0aW5nIGRyYWdnYWJsZS4nKVxyXG4gICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLm1vZGFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgdmFyIHNob3dDb2xsYXBzZWREaXZzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgdmFyIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQXR0cmliID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIGlmIChfdGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAwNS8wMS8yMDE5IDA0OjUyIGFtIC0gU1NOIC0gVXNlIEphdmFTY3JpcHQgb25seVxyXG5cclxuICAgICAgICB2YXIgbGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcclxuXHJcbiAgICAgICAgLy8gMDUvMTkvMjAxOSAxMjozMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDRdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4gICAgICAgIC8vIGZvciAodmFyIGEgb2YgbGlzdDEpIHtcclxuICAgICAgICAvLyBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50SXRlbSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcbiAgICAgICAgbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoYSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xNy8yMDE5IDA0OjE2IGFtIC0gU1NOIC0gVXBkYXRlIHRvIGV4Y2x1ZGUgaGlnaGxpZ2h0aW5nXHJcbiAgICAgICAgICAgIC8vdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88L2csICcmbHQ7Jyk7ICBcclxuICAgICAgICAgICAgLy8gRXhjbHVkZSA8aCBhbmQgPG4uIEFscmVhZHkgc2V0dXAgZm9yIDxpLiAgU2VlIHNpdGUuY3NzLlxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzA3LzIwMTkgMTE6NTAgYW0gLSBTU04gLSBVcGRhdGUgLSBNYXRjaGVzIHNob3duIGh0dHBzOi8vd3d3LnJlZ2V4dGVzdGVyLmNvbS9cclxuICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88KFteaXxeL2l8Xmh8Xi9ofF5ufF4vbl0pezF9W15cXHN8Xj5dezF9L2csICcmbHQ7JDEnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJ1xcbjEtLS1cXG5bJCZdXFxuMi0tLVxcblskMV1cXG4zLS0tXFxuWyQyXVxcbjQtLS1cXG5bJDNdXFxuXFxuJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBXZSBoYXZlIG5vdCBjb3ZlcnJlZCBoMSwgaDIsIGV0Yy5cclxuICAgICAgICAgICAgLy8ga25vY2tvdXQgaXMgZG9pbmcgaXRzIG93biB0aGluZyB3aGVuIGl0IGNvbWVzIHRvIHRhZ3MuIEV2aWRlbnQgd2l0aCB0aGUgdXNlIG9mIGdlbmVyaWMgdHlwZXMgKCBmdW5jdGlvbjxTb21lVHlwZT4gKVxyXG4gICAgICAgICAgICB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICcmbHQ7JDMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICBhLmlubmVySFRNTCA9IGI7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDExLzA4LzIwMTkgMDE6MDQgcG0gLSBTU04gLSBbMjAxOTExMDgtMTA0M10gLSBbMDA4XSAtIFBlcnNpc3Rpbmcgc2VhcmNoIG9uIHJldHVybiB0byBpbmRleFxyXG4gICAgICAgIC8vIFxyXG5cclxuXHJcbiAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICg8SFRNTEFuY2hvckVsZW1lbnQ+ZS50YXJnZXQpLmhyZWYgKyBcIiZyZXR1cm5Ub0NhbGxlcktleT1cIiArIHJldHVyblRvQ2FsbGVyS2V5O1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBCZWdpblxyXG5cclxuICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgdmFyIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgIHZhciBmbkNvbnZlckRhdGUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2goaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciBcclxuXHJcblxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTEwNC0xNzUwJyk7XHJcblxyXG4gXHJcblxyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTA0LTE3NTAtWlpaJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=