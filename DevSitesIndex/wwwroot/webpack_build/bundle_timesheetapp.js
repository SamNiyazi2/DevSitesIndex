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
/*!*******************************************************************************************!*\
  !*** C:/Sams_P/DevSitesIndex/DevSitesIndex/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************************************************/
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
/*!*****************************************************************************************************!*\
  !*** C:/Sams_P/DevSitesIndex/DevSitesIndex/node_modules/applicationinsights-js/bundle/ai.module.js ***!
  \*****************************************************************************************************/
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

 // Add autofocus="true" to set focus

var dropdownListDirective_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
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
        console.log("DropdownListDirective-20210106-0707:  submitForm_2");
        console.log("DropdownListDirective-20210106-0707:  submitForm_2");
        console.log("DropdownListDirective-20210106-0707:  submitForm_2");
        console.log("DropdownListDirective-20210106-0707:  submitForm_2");
      };

      $scope.submitForm_1 = function (event, form) {
        console.log("DropdownListDirective-20210106-0707:  submitForm_1");
        console.log("DropdownListDirective-20210106-0707:  submitForm_1");
        console.log("DropdownListDirective-20210106-0707:  submitForm_1");
        console.log("DropdownListDirective-20210106-0707:  submitForm_1");

        if (!form.$valid) {
          event.preventDefault();
        }
      };
    }]);
    downdownList_angular_module.directive('dropdownListDirective', function () {
      var controller = ['$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', function ($http, $q, $scope, $rootScope, $timeout, changeMonitorService) {
        var _isValid = false;
        var vm = this;
        vm.isValidBoolean = false;
        vm.firstRun = true;
        vm.hitCount = 0;
        vm.isInvalidDropdownListDirectiveInput = true; // 11/28/2019 08:29 am - SSN - Adding - Need to initial for $watch to work.

        vm.disciplineSelected_XXX = "";
        $scope.$on('$destroy', function () {});
        $scope.$watch('parentKeyColumn', function (newVal, oldVal) {
          //  all directive code here
          console.log(" 123 ......" + vm.parentKeyColumn);
          console.log("Reloaded successfully......" + vm.parentKeyColumn);
          console.log("Reloaded successfully......" + vm.parentKeyColumn);
          console.log("Reloaded successfully......" + vm.parentKeyColumn);
          console.log("Reloaded successfully......" + vm.parentKeyColumn);
          console.log("Reloaded successfully......" + vm.parentKeyColumn);
          console.log("[", newVal, "] [", oldVal, "]");
        });
        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          console.log("ssn-20210105-2214----WARCH-----------");
          console.log("---------------------------------------------");
          console.log(oldValue);
          console.log(newValue);
          console.log("---------------------------------------------");

          if (vm.formName) {
            if (vm.formName.$dirty) {
              changeMonitorService.doSetHaveChange(true);
            }
          }

          vm.isInvalidDropdownListDirectiveInput = true;

          if (newValue) {
            if (newValue.id) {
              if (newValue.id > 0) {
                vm.isInvalidDropdownListDirectiveInput = false;
              }
            }
          }
        });

        vm.setupUrl = function () {
          console.log("20210105-2305-----------------");
          console.log("------------------------------");
          console.log("this.keyColumn");
          console.log(this.keyColumn);
          console.log("-----------------------------");
          console.log("----------------------------");
          console.log("---------------------------");
          vm.hitCount += 1;

          if (!this.keyColumn) {
            console.log('No keyColumn-201912291545(Note)');
            console.log('No keyColumn-201912291545(Note)');
            console.log('No keyColumn-201912291545(Note)');
            console.log('No keyColumn-201912291545(Note)');
            return;
          }

          switch (this.keyColumn.toLowerCase()) {
            case 'timelog.disciplineid':
            case 'disciplineid':
              vm.APIUrlListAll = '/api/DisciplineAPI';
              vm.APIUrlSingleRecord = '/api/DisciplineAPI';
              break;
            // 12/10/2020 04:32 pm - SSN - [20201210-1625] - [002] - Update Timelog edit MVC

            case 'timelog.lineitemid':
              vm.APIUrlListAll = '/api/job_LineItem/typeahead_jobrecords';
              vm.APIUrlSingleRecord = '/api/job_LineItem/typeahead';
              break;

            case 'timelog.jobid':
            case 'jobid':
              vm.APIUrlListAll = '/api/jobapi/typeahead';
              vm.APIUrlSingleRecord = '/api/jobapi/typeahead';
              break;
            // 11/27/2019 04:46 pm - SSN - Adding

            case 'job.projectid':
              vm.APIUrlListAll = '/api/projectapi/typeahead';
              break;

            default:
              console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
              console.log('----------------------------');
              console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
              console.log('----------------------------');
              console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
              console.log('----------------------------');
              console.log('DropdownListDirective - no case for [', this.keyColumn, '] 20201210-1656');
              console.log('----------------------------');
          }

          console.log("20210105-2305---B--------------");
          console.log("------------------------------");

          if (this.parentKeyColumn) {
            console.log('typeof this.parentKeyColumn [', _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.parentKeyColumn), "]");
            console.log(this.parentKeyColumn);
            var parentKeyColumnValue = this.parentKeyColumn; //undefined;

            console.log('20201210-1749 - parentKeyColumnValue [', parentKeyColumnValue, ']');

            if (parentKeyColumnValue) {
              console.log(" ********************* Updating AppUrl with parentKeyColumnValue [", parentKeyColumnValue, ')');
              vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
            }
          }
        };

        vm.changing = function () {
          console.log("changing changing changing changing");
          console.log("changing changing changing changing");
          console.log("changing changing changing changing");
          console.log("changing changing changing changing");
          $rootScope.$broadcast('dropdownListDirective_Change_start', {
            msg: 'select new value',
            keyColumn: vm.keyColumn,
            keyValue: vm.ngModelTemp
          });
        };

        $rootScope.$on('dropdownListDirective_Change_start', function (events, args) {
          console.log('---------------------------------------------');
          console.log('dropdownListDirective_Change_start - listener');
          console.log('---------------------------------------------');
          console.log('dropdownListDirective_Change_start - listener');
          console.log('---------------------------------------------');
          console.log(events);
          console.log(args);
          console.log('---------------------------------------------');
          console.log('parentKeyName ( this vm bind )');
          console.log(vm.parentKeyName);
          console.log(args.keyColumn);
          console.log('---------------------------------------------');
          console.log('---------------------------------------------');

          if (vm.parentKeyName == args.keyColumn) {
            console.log('---------------------------------------------');
            console.log(' vm.parentKeyColumn and args.keyValue before update:');
            console.log(vm.parentKeyColumn);
            console.log(args.keyValue);
            vm.parentKeyColumn = args.keyValue;
            console.log('Update vm.parentKeyColumn = args.keyValue');
            console.log(vm.parentKeyColumn);
            console.log(args.keyValue);

            if (args.msg == "select new value") {
              console.log('update keyColumn jQuery  [select new value]');
              console.log(vm.keyColumn);
              $("[name='" + vm.keyColumn + "']").val('');
              vm.disciplineSelected_XXX = "";
              vm.isReady = false;
            } //console.log("Update vm.ngModelTemp with args.keyValue")
            //vm.ngModelTemp = null;
            //console.log('Call vm.setupUrl.  Reset vm101.disciplineSelected_XXX');
            //if (vm.disciplineSelected_XXX) {
            //    console.log( "Update vm.disciplineSelected_XXX")
            //    if (vm.disciplineSelected_XXX.id) {
            //        console.log("Update vm.disciplineSelected_XXX.id")
            //        vm.disciplineSelected_XXX.id = "";
            //    }
            //    if (vm.disciplineSelected_XXX.title ) {
            //        console.log("Update vm.disciplineSelected_XXX.title")
            //        vm.disciplineSelected_XXX.title = "";
            //    }
            //        console.log("Update vm.ngModelTemp")
            //        vm.ngModelTemp = null;
            //}


            vm.setupUrl();
            console.log('---------------------------------------------');
          }
        });

        vm.isValid = function () {
          $rootScope.$broadcast('dropdownListDirective_Change_start', {
            msg: 'Starting change',
            keyColumn: vm.keyColumn
          });
          vm.setupUrl();
          var keyColumnValue = $("[name='" + this.keyColumn + "']").val();
          var keyValueSelected = null; // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          //   if (vm.disciplineSelected_XXX === undefined && this.angularControlId > 0) {

          if (this.angularControlId > 0) {
            keyValueSelected = this.angularControlId;
          } // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          //if (vm.disciplineSelected_XXX === undefined && keyColumnValue > 0) {


          if (keyColumnValue > 0) {
            keyValueSelected = keyColumnValue;
          }

          console.log("20210106-0349  -----------------");
          console.log("------------------------------");
          console.log("keyValueSelected");
          console.log('[', keyValueSelected, ']');
          console.log("------------------------------"); // for testing only
          // for testing only
          // for testing only
          // for testing only
          /////////////////////////////////////////////////////////////////  if (keyValueSelected == null) keyValueSelected = 2;
          // for testing only
          // for testing only
          // for testing only
          // for testing only

          console.log("------------------------------");
          console.log("-----------------------------");
          console.log("----------------------------");
          console.log("---------------------------"); // 11/28/2019 09:47 am - SSN - Setting vm.disciplineSelected_XXX = "" for $watch
          // if (vm.disciplineSelected_XXX === undefined && keyValueSelected > 0) {

          if (keyValueSelected > 0) {
            vm.getDisciplineCurrent(keyValueSelected).then(vm.currentDisplineLookupSuccess);
            vm.isValidBoolean = true;
            $rootScope.$broadcast('dropdownListDirective_Change_start', {
              msg: 'Has valid value',
              keyColumn: vm.keyColumn,
              keyValue: keyValueSelected
            });
            return true;
          }

          console.log("20210105-2305--- Done --------------");
          console.log("------------------------------");
          console.log('dropdownListDirective - (xxxxx101-B) vm.disciplineSelected_XXX    [', vm.disciplineSelected_XXX, ']');
          _isValid = vm.setInputVariables();
          vm.isValidBoolean = _isValid;
          console.log('*************** _isValid', _isValid);
          vm.firstRun = false;
          return _isValid;
        };

        vm.xxxxxxxxxxxxxxxxxxxxxxxxxxx = function () {
          console.log('---------------------');
          console.log('----------------------');
          console.log('-----------------------');
          console.log('------------------------');
          console.log('-------------------------');
          console.log('DropdownListDirective - Watch fired - 99999999999999 ');
          console.log('-------------------------');
          console.log('------------------------');
          console.log('-----------------------');
          console.log('----------------------');
          console.log('---------------------');
          console.log('vm.keyColumn');
          console.log(vm.keyColumn);
          console.log('this.keyColumn');
          console.log(this.keyColumn);
          console.log('vm.parentKeyColumn');
          console.log(vm.parentKeyColumn);
          console.log('this.parentKeyColumn');
          console.log(this.parentKeyColumn);

          if (vm.parentKeyColumn) {
            $scope.$watch("vm.parentKeyColumn", function (newValue, oldValue) {
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
              console.log(oldValue);
              console.log(newValue);
              console.log(vm.parentKeyColumn); // var parentKeyColumnValue = $("[name='" + this.parentKeyColumn + "']").val();

              var parentKeyColumnValue = vm.parentKeyColumn;
              console.log('20201210-2158 - parentKeyColumnValue [', parentKeyColumnValue, ']');
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
              console.log('DropdownListDirective - Watch fired - 20201210-1829 XXXXXXXXXXx');
              console.log('---------------------------------------------------------------');
            }.bind(this));
          }
        };

        vm.setInputVariables = function () {
          var _isValid_local = false;

          if (vm.disciplineSelected_XXX) {
            if (vm.disciplineSelected_XXX.id) {
              if (this.angularControlId !== vm.disciplineSelected_XXX.id) {
                this.angularControlId = vm.disciplineSelected_XXX.id;
                $("[name='" + this.keyColumn + "']").val(vm.disciplineSelected_XXX.id);
                console.log('DropdownListDirective - 20201210-1703');
                console.log('DropdownListDirective - 20201210-1703');
                console.log('  this.keyColumn: ');
                console.log('[', this.keyColumn, ']');
                console.log('  this.parentKeyColumn: ');
                console.log('[', this.parentKeyColumn, ']');
                console.log('  vm.parentKeyColumn: ');
                console.log('[', vm.parentKeyColumn, ']');

                if (this.ngModelTemp) {
                  this.ngModelTemp = vm.disciplineSelected_XXX.id;
                }

                console.log('  this.ngModelTemp: ');
                console.log('[', this.ngModelTemp, ']');
                console.log('  vm.ngModelTemp: ');
                console.log('[', vm.ngModelTemp, ']');
                console.log('  vm.disciplineSelected_XXX:');
                console.log(vm.disciplineSelected_XXX);
                console.log('  vm.disciplineSelected_XXX.id');
                console.log(vm.disciplineSelected_XXX.id);
                console.log('DropdownListDirective - 20201210-1703');
                console.log('DropdownListDirective - 20201210-1703');
                vm.getDisciplineCurrent(this.angularControlId).then(vm.currentDisplineLookupSuccess);
                _isValid_local = this.angularControlId > 0;
              } else {
                _isValid_local = true;
              }
            }
          }

          vm.isValidBoolean = _isValid_local;
          return _isValid_local;
        };

        vm.validateEntry = function (event) {
          vm.setInputVariables();
        };

        vm.currentDisplineLookupSuccess = function (data) {
          if (data) {
            // 09/16/2019 05:30 am - SSN - [20190916-0355] - [008] - Adding JobAPI controller
            console.log('DropdownListDirective - 20201210-1701');
            console.log(data);

            if (data.disciplineId) {
              vm.disciplineSelected_XXX = {
                id: data.disciplineId,
                title: data.disciplineShort
              };
              vm.angularControlId = data.disciplineId;
            }

            if (data.ta_id) {
              vm.disciplineSelected_XXX = {
                id: data.ta_id,
                title: data.ta_description
              };
              vm.angularControlId = data.ta_id;
            }
          }
        };

        vm.getDisciplines = function (lookupValue) {
          vm.setupUrl();
          console.log("getDiscipline-00000000001");
          console.log("-------------------------");
          console.log("vm.APIUrlListAll");
          console.log(vm.APIUrlListAll);
          console.log('  this.parentKeyColumn: ');
          console.log('[', this.parentKeyColumn, ']');
          console.log('  vm.parentKeyColumn: ');
          console.log('[', vm.parentKeyColumn, ']');
          console.log("-------------------------");
          if (lookupValue === null) lookupValue = "";
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: vm.APIUrlListAll
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
          console.log('20210105-2243');
          console.log('----------------');
          console.log('getDisciplineCurrent');
          console.log('----------------');

          if (lookupID === null) {
            console.log('20210105-2243');
            console.log('----------------  CANCEL');
            return null;
          }

          var deferred = $q.defer();
          console.log('  this.keyColumn: ');
          console.log('[', this.keyColumn, ']');
          console.log('  this.parentKeyColumn: ');
          console.log('[', this.parentKeyColumn, ']');
          console.log(vm.APIUrlSingleRecord);
          console.log(lookupID);
          console.log(vm.ngModelTemp);
          console.log('--------------');
          console.log('---------------');
          console.log('----------------');
          $http({
            method: 'GET',
            url: vm.APIUrlSingleRecord + "/" + lookupID
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
          vm.xxxxxxxxxxxxxxxxxxxxxxxxxxx();
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
        require: 'ngModel',
        bindToController: true,
        scope: {
          keyColumn: "@key",
          // 12/10/2020 05:46 pm - SSN - [20201210-1625] - [005] - Update Timelog edit MVC
          parentKeyColumn: "=parentkey",
          parentKeyName: "@",
          formName: "=",
          angularControlId: "=?aci",
          ngModelTemp: "="
        },
        link: function link(scope, el, attrs, ctrl) {
          console.log("1111111111");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
          console.log(ctrl);
          console.log('DropdownlistDirective-20210106-0730 customValidator BBBBBBBBBBBBBB');

          function customValidator(ngModelValue) {
            console.log('DropdownlistDirective-20210106-0730 customValidator CCCCCCCCCCCCC');
            console.log(ngModelValue); // check if contains uppercase
            // if it does contain uppercase, set our custom `uppercaseValidator` to valid/true
            // otherwise set it to non-valid/false

            ctrl.$setValidity('uppercaseValidator', false);
            return ngModelValue;
          }

          ctrl.$parsers.push(customValidator);
          console.log('DropdownlistDirective-20210106-0730 customValidator DDDDDDDDDD'); // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus

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
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./Interceptors/SessonTimeoutInterceptor.js":
/*!**************************************************!*\
  !*** ./Interceptors/SessonTimeoutInterceptor.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
 // 12/07/2019 03:53 am - SSN - [20191207-0353] - [001] - SessionTimeoutInterceptor
// https://code.angularjs.org/1.2.27/docs/api/ng/service/$http#interceptors

console.log('sessionTimeoutInterceptor - top - 20191207-0410');

var sessionTimeoutInterceptor_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    console.log('sessionTimeoutInterceptor - function top - 20191207-0411');
    var angularjs_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('SessionTimeoutInterceptor', currentApplication);
    angularjs_module.config(['$httpProvider', function ($httpProvider) {
      // 08/21/2020 10:53 am - SSN - Adding $location
      var interceptor = ['$q', '$rootScope', '$location', //  'userSession',
      function ($q, $rootScope, $location) {
        console.log('sessionTimeoutInterceptor - Main function - 20191207-0412-MF');
        var service = {
          // run this function before making requests
          request: function request(config) {
            ////////console.log('sessionTimeoutInterceptor - Main function - SERVICE - 20191207-0412-SERVICE');
            ////////console.log('config next:');
            ////////console.log(config);
            ////////////if (config.method === 'GET' || userSession.isAuth()) {
            ////////////    // the request looks good, so return the config
            return config; ////////////}
            ////////////// bad request, so reject
            ////////////return $q.reject(config);
          },
          requestError: function requestError(rejection) {
            console.log('sessionTimeoutIntercepter - requestError - 20200821-1046-001');
            return $q.reject(rejection);
          },
          response: function response(result) {
            console.log('sessionTimeoutIntercepter - response - 20200821-1046-002');
            return result;
          },
          responseError: function responseError(response) {
            console.log('sessionTimeoutIntercepter - responseError - 20200821-1046-003');
            return $q.reject(response);
          }
        };
        return service;
      }];
      $httpProvider.interceptors.push(interceptor);
    }]);
  };

  return {
    doSetup: doSetup
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (sessionTimeoutInterceptor_instance);

/***/ }),

/***/ "./Routing/Routing_Config.js":
/*!***********************************!*\
  !*** ./Routing/Routing_Config.js ***!
  \***********************************/
/*! exports provided: routing_config_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing_config_instance", function() { return routing_config_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
 // 12/07/2019 07:06 am - SSN - [20191207-0704] - [001] - AngularJS - Routing - Authentication
// Moved from demoSites_index.ts - Begin
// ssn_devsite_angular_module 

var routing_config_instance = function () {
  // from Routing_Config to Routing_Config with move.
  // Moved outside to shared between doSetup_a and doSetup_b
  var angularJS_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('Routing_Config', "demoSites_Index", ['ngRoute']); // from Routing_Config to Routing_Config with move.

  var doSetup_a = function doSetup_a() {
    // 09/26/2019 05:51 am - SSN - [20190926-0551] Add $locationProvider
    angularJS_module.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
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
    }]); // Moved from demoSites_index.ts - End
  }; // 12/07/2019 08:02 am - SSN - [20191207-0704] - [003] - AngularJS - Routing - Authentication
  // Source: https://stackoverflow.com/questions/17209203/angularjs-protecting-routes-with-angularjs-depending-if-the-user-is-authorized


  var doSetup_b = function doSetup_b() {
    angularJS_module.config(function ($routeProvider) {
      $routeProvider.when('/needsauthorisation', {
        //config for controller and template
        resolve: {
          //This function is injected with the AuthService where you'll put your authentication logic
          'auth': function auth(AuthService) {
            return AuthService.authenticate();
          }
        }
      });
    }).run(function ($rootScope, $location) {
      //If the route change failed due to authentication error, redirect them out
      $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
        if (rejection === 'Not Authenticated') {
          $location.path('/');
        }
      });
    }).factory('AuthService', function ($q) {
      return {
        authenticate: function authenticate() {
          //Authentication logic here
          // if (isAuthenticated) {
          if (false) {} else {
            //Else send a rejection
            return $q.reject('Not Authenticated');
          }
        }
      };
    });
  };

  var doSetup = function doSetup() {
    doSetup_a();
    doSetup_b();
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
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "./globals.js");
// 11/21/2019 05:50 am - SSN - [20191121-0503] - [003] - Timelog edit options on project search


var TimelogLinkOptions = function () {
  var doSetup = function doSetup(defaultAppName) {
    //var TimelogLinkOptions_angular_module = globals_instance.getInstance(defaultAppName, []);
    var TimelogLinkOptions_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimelogLinkOptions', defaultAppName);
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
              changeMonitorService.reset();
            }

            function modalEdit_cancel(result) {
              changeMonitorService.reset();
            }
          }; // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage


          $scope.timesheetForm_ClockOut = function (_timelogId2, _servingPage2) {
            // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
            // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
            // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
            //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
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
              changeMonitorService.reset();
            }

            function modalClockout_cancel(result) {
              changeMonitorService.reset();
            }
          }; // 05/19/2019 08:39 am - SSN - [20190519-0837] - [002] - Adding timesheet "Continue" option
          // 11/21/2019 04:09 pm - SSN - [20191121-0503] - [011] - Timelog edit options on project search
          // Add servingPage


          $scope.timesheetForm_ClockContinue = function (_timelogId3, _servingPage3) {
            // 05/19/2019 09:37 am - SSN - [20190519-0837] - [003] - Adding timesheet "Continue" option
            // 11/14/2019 02:44 pm - SSN - TimesheetContinueController_modal 
            var TimesheetContinueController_modal = $uibModal.open({
              // animation: 'slide-in-up',
              templateUrl: '/js/timesheet/templates//timesheetTemplate.html',
              controller: 'TimesheetContinueController',
              //  windowClass: 'ssn-mobile-modal',
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
              changeMonitorService.reset();
            }

            function TimesheetContinueController_modal_cancel(result) {
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
      $("#" + item.tr_2_id).remove();
      $("#" + item.tr_1_id).replaceWith(item.html);
      $compile($("#" + item.tr_1_id).contents())($scope);
    });

    $scope.timesheetForm_ClockOut = function (_timelogId) {
      // 04/29/2019 04:16 pm - SSN - [20190429-1616] - [001] - Timesheet - stop / continue
      // 05/03/2019 03:54 pm - SSN - [20190503-1539] - [004] - Add link to create timelog
      // Testing:             templateUrl:  'js/timesheet/timesheetTemplate.html' 
      //                   to templateUrl: '/js/timesheet/timesheetTemplate.html'
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
        changeMonitorService.reset();
      }

      function modalClockout_cancel(result) {
        changeMonitorService.reset();
      }
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
        changeMonitorService.reset();
      }

      function TimesheetContinueController_modal_cancel(result) {
        changeMonitorService.reset();
      }
    }; // 11/14/2019 04:41 pm - SSN - [20191114-1459] - [008] - ChangeMonitroService
    // Testing - Not working.


    function modalClosingHook($scope) {
      $scope.$on('modal.closing', function (event, reason, closed) {
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
        changeMonitorService.reset();
      }

      function modalEdit_cancel(result) {
        changeMonitorService.reset();
      }
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

  timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'jobId', function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, jobId) {
    changeMonitorService.setupMonitor(); // 12/29/2019 11:21 pm - SSN - Adding disableSaveButton 

    $scope.disableSaveButton = false; // 11/28/2019 02:47 am - SSN - [20191128-0247] - [001] - Clock-in not saving
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
      console.error('TimeshetController - getJobSuccess  -  20190930-2106-B ');
      console.log(data);
    }

    function getJobCatch(data) {
      console.error('TimeshetController - getJobSuccess  -  20190930-2106-C ');
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
      if ($scope.disableSaveButton) return;
      $scope.disableSaveButton = true;
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
          $scope.disableSaveButton = false;
          console.error("TimesheetController - 20190921-0640 - promise > error");
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
      console.error('timesheetEditController - 20191116-1648');
      console.log(data);
      toastr.warning("Error posted to console. (1648)");
    }

    function getTimelogCatch(data) {
      console.error('timesheetEditController - 20191116-1649');
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

/***/ "./Timesheet/timesheet_main.ts":
/*!*************************************!*\
  !*** ./Timesheet/timesheet_main.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.js");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Interceptors/SessonTimeoutInterceptor */ "./Interceptors/SessonTimeoutInterceptor.js");
/* harmony import */ var _Routing_Routing_Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Routing/Routing_Config */ "./Routing/Routing_Config.js");
/* harmony import */ var _Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.js");
// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack
// 11/09/2019 12:05 pm - SSN - Added ChangeMonitor
// 11/14/2019 03:20 pm - SSN - [20191114-1459] - [004] - ChangeMonitroService
//import { ChangeMonitor_Util } from '../Util/ChangeMonitor';
 // 11/20/2019 04:40 am - SSN - [20191120-0429] - [002] - Timelog index clock-out refresh updated row





 // 12/07/2019 04:09 am - SSN - [20191207-0353] - [002] - SessionTimeoutInterceptor

 // 12/07/2019 08:07 am - SSN - [20191207-0704] - [004] - AngularJS - Routing - Authentication


_Routing_Routing_Config__WEBPACK_IMPORTED_MODULE_7__["routing_config_instance"].doSetup();
var ngApplicationName = 'timesheetApp';
_Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_6__["default"].doSetup(ngApplicationName); //ChangeMonitor_Util

_Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__["changeMonitorService_instance"].doSetup(ngApplicationName);
_Util_PageUpdater__WEBPACK_IMPORTED_MODULE_1__["PageUpdater_Instance"].doSetup(ngApplicationName); // 11/16/2019 06:27 pm - SSN - [20191116-1516] - [006] - Timelog edit (AngularJS client version)
// 11/25/2019 11:34 pm - SSN - [20191125-2153] - [005] - Job create - Replace dropdown with dropdownListDirective
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit
////////////////////////////////////////dropdownListDirective_instance.doSetup(null); // Original entry for timelog edit

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__["dropdownListDirective_instance"].doSetup(ngApplicationName);
_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName); // 11/23/2019 08:56 am - SSN

_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_5__["RestorePreviousPageState_instance"].doSetup(ngApplicationName); // 10/01/2019 11:09 am - SSN - [20191001-0944] - [007] - Adding Application Insights for JavaScript

console.log("Timesheet_main - 20191001-1110");
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].doSetup();
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].logEvent("Timesheet_main", {
  SourceCode: "20191001-1112-C",
  Message: "Loading timesheet_main"
});
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].logEvent(document.location.hostname, {
  SourceCode: "20191105-0503",
  Message: "Loading timesheet_main"
}); // 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only


_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_8__["doSetup"](ngApplicationName);

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

  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', 'servingPage', function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService, servingPage) {
    // 11/16/2019 03:08 pm - SSN - [20191116-1419] - [004] - Add RowVersion  to Timelog.
    changeMonitorService.setupMonitor(); // 04/29/2019 05:51 pm - SSN - [20190429-1748] - [002] - Angular clock out popup
    // $scope.timeLog = dataService.getTimelog($routeParams.id);
    // $scope.timeLog = dataService.getTimelog(timelogId);

    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch); // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
    // Add pageTitle

    $scope.pageTitle = "Clock-out"; // 12/29/2019 11:25 pm - SSN - Adding disableSaveButton 

    $scope.disableSaveButton = false; // 11/16/2019 02:48 pm - SSN - [20191116-1419] - [002] - Add RowVersion  to Timelog.
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
      if ($scope.disableSaveButton) return;
      $scope.disableSaveButton = true;
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
          toastr.info("Clocked-out"); // 11/25/2019 06:38 pm - SSN - [20191125-1803] - [002] - clock-out is not updating index row
          // Added servingPage

          PageUpdaterService.timelog_index($scope.editableTimeLog.timeLogId, servingPage);
        }, function (error) {
          $scope.disableSaveButton = false;
          var test2 = error;
          console.error(error);
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
    $scope.pageTitle = "Continue / Line Item"; // 12/29/2019 11:17 pm - SSN - Adding disableSaveButton 

    $scope.disableSaveButton = false; // 09/28/2019 03:59 pm - SSN - [20190928-1256] - [010] - Adding Entity Framework model attribute

    $scope.feedbackToUserText = "";
    $scope.feedbackToUserClassNameCase = "";
    $scope.versionForHTMLRefresh = "17";

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
      if ($scope.disableSaveButton) return;
      $scope.disableSaveButton = true;
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
          $scope.disableSaveButton = false;
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
        applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].downloadAndSetup(config);
      }
    }
  };

  var doTest = function doTest() {
    // 10/1/2019 03:45 am - SSN 

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
    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackPageView(name, url, properties); //, measurements, duration);
  };

  var logEvent = function logEvent(name, properties, measurements) {
    // 10/1/2019 03:45 am - SSN 
    applicationinsights_js__WEBPACK_IMPORTED_MODULE_1__["AppInsights"].trackEvent(name, properties, measurements);
  };

  var logException = function logException(exception, props, handledAt) {
    // 10/1/2019 03:45 am - SSN 
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



/***/ }),

/***/ "./Util/ChangeMonitor/ChangeMonitor.js":
/*!*********************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitor.js ***!
  \*********************************************/
/*! exports provided: ChangeMonitor_Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeMonitor_Util", function() { return ChangeMonitor_Util; });
/* harmony import */ var _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.js");
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
    // 08/15/2020 08:28 am - SSN - Added
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (x, y, z) {
      if (x.type && (x.type.toLowerCase() === "submit" || x.type.toLowerCase() === "reset")) {
        x.addEventListener('click', ChangeMonitor_Util.setItemToResetChangedFlag_ssn);
      }
    });
    var inputs = document.querySelectorAll('input');
    inputs.forEach(function (x, y, z) {
      if (!bypassObject(x)) {
        x.addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }

      if (x.type && (x.type.toLowerCase() === "submit" || x.type.toLowerCase() === "reset")) {
        x.addEventListener('click', ChangeMonitor_Util.setItemToResetChangedFlag_ssn);
      }
    });
    var textareas = document.querySelectorAll('textarea');
    textareas.forEach(function (x, y, z) {
      if (!bypassObject(x)) {
        x.addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }
    });
    var selects = document.querySelectorAll('select');
    selects.forEach(function (x, y, z) {
      if (!bypassObject(x)) {
        x.addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
      }
    });
  };

  var bypassObject = function bypassObject(obj1) {
    // 08/15/2020 0:18 am - SSN - Added email and password (login)
    if (obj1.type) {
      if (obj1.type.toLowerCase() === 'hidden' || obj1.type.toLowerCase() === 'submit' || obj1.type.toLowerCase() === 'search' || obj1.type.toLowerCase() === 'email' || obj1.type.toLowerCase() === 'password') {
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
    var isChrome = getBrowserName() === 'chrome';

    if (true) {
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


/***/ }),

/***/ "./Util/ChangeMonitor/ChangeMonitorFlag.js":
/*!*************************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitorFlag.js ***!
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

/***/ "./Util/ChangeMonitor/ChangeMonitorService.js":
/*!****************************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitorService.js ***!
  \****************************************************/
/*! exports provided: changeMonitorService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeMonitorService_instance", function() { return changeMonitorService_instance; });
/* harmony import */ var _ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.js");
/* harmony import */ var _ChangeMonitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangeMonitor */ "./Util/ChangeMonitor/ChangeMonitor.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globals */ "./globals.js");
// 11/14/2019 02:59 pm - SSN - [20191114-1459] - [001] - ChangeMonitroService




var changeMonitorService_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var ssn_ChangeMonitorService_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance_v002('ChangeMonitorService', currentApplication);
    ssn_ChangeMonitorService_module.factory("changeMonitorService", ['$http', '$q', function ($http, $q) {
      var _setupMonitor = function _setupMonitor() {
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
        dataService.timelogRefreshRecord(id_temp, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);

        function refreshRecord_Sucess(result) {
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
/* harmony import */ var _ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 11/22/2019 09:41 pm - SSN - Created to restore page on hitting the back button or recalling the page.
// 12/28/2019 10:0 pm - SSN - Adding AppInsights_Util 



var RestorePreviousPageState_instance = function () {
  var doSetup = function doSetup(ngApplicationName) {
    _ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_0__["AppInsights_Util"].logEvent("DemoSites_20191228_2228", {
      SourceCode: "20191228-2210",
      Message: "doSetup"
    });
    var angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('RestorePreviousPageState', ngApplicationName);
    angular_module.controller('restorePreviousPageAndTaskQueueController', ['$scope', '$attrs', '$location', function ($scope, $attrs, $location) {}]);
    angular_module.directive('restorePreviousPageStateAndTaskQueue', function () {
      //    $rootScope.$broadcast('site_Task_Queue_List', result);
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
        var URL_Track_Ref = get_URL_Track_Record();
        if (!URL_Track_Ref) return;
        if (!URL_Track_Ref.currentRecord) return;
        var currentRecord = URL_Track_Ref.currentRecord;

        if (currentRecord) {
          if (currentRecord.element) {
            if (currentRecord.element.clientX) {
              var x = currentRecord.element.clientX;
              var y = currentRecord.element.clientY;
              var selectedElement = document.elementFromPoint(x, y);

              if (selectedElement && selectedElement.attributes) {
                var bypass = true;

                if ("A ".toUpperCase().indexOf(selectedElement.nodeName.toUpperCase()) > -1) {
                  bypass = false;
                }

                for (var x_1 = 0; x_1 < selectedElement.attributes.length; x_1++) {
                  if (selectedElement.attributes[x_1].name === "ng-click") {}

                  if (selectedElement.attributes[x_1].name === "href") {}
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
            setTimeout(function () {
              URL_Track_Ref.URL_Track.urls.splice(URL_Track_Ref.currentIndex);
              window.localStorage.setItem('URL_Track', JSON.stringify(URL_Track_Ref.URL_Track));
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
// 08/31/2020 04:54 am - SSN - [20200831-0417] - [004] - Disable collapsable divs with no content
/// <reference path="../../node_modules_hack/SSN_console_model.d.ts" />
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
    } // 08/31/2020 04:29 am - SSN - [20200831-0417] - [002] - Disable collapsable divs with no content


    site_Class.prototype.disableEmptyCollapsableDivs = function () {
      // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to a only - Was hiding mobile hamberger menu.
      $('a[data-toggle="collapse"]').each(function (ndx, obj1) {
        var divId = $(obj1).attr('aria-controls');
        var childrenCount = $("#" + divId).children().length;

        if (childrenCount === 0) {
          $(obj1).css('color', 'orange');
          $(obj1).css('font-size', '24pt');
          $(obj1).replaceWith(function () {
            return $("<span/>").text($(obj1).text());
          });
        }
      });
    }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack


    site_Class.prototype.setDefaults = function () {
      $("[cmd-name]").on('click', function (e) {
        var cmdName = $(this).attr('cmd-name');
        var popupName = $(this).attr('popup-name');
        var jQueryObjectName = $(this).attr('jQueryObjectName');
        var jQueryObjectName2 = $(this).attr('jQueryObjectName2');

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
        } // 11/08/2019 01:04 pm - SSN - [20191108-1043] - [008] - Persisting search on return to index
        // 
        // 01/02/2020 04:06 pm - SSN - Moved from  prefixPreWithShowHideAnchor


        $('[ssn-cmd=returnToCallerLink]').click(function (e) {
          e.preventDefault();
          e.stopPropagation();
          var returnToCallerKey = $("#returnToCallerKey").val();
          document.location.href = e.target.href + "&returnToCallerKey=" + returnToCallerKey;
        });
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
        $(this).draggable({
          handle: ".modal-header"
        });
      });
    };

    ; // 08/21/2019 01:48 pm 
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function showCollapsedDivs() {

    site_Class.prototype.showCollapsedDivs = function () {
      // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to divs only - Was hiding mobile hamberger menu.
      $("a[data-toggle='collapse']").trigger('click');
    }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function prefixPreWithShowHideAnchor() {


    site_Class.prototype.prefixPreWithShowHideAnchor = function (caller) {
      // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
      // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
      console.log('site.ts 20200102-1528 - prefixPreWithShowHideAnchor [' + caller + ']');
      $('pre').each(function (aa) {
        var autoCollapse = $(this).attr('ssn-auto-collapse');

        if (autoCollapse === "false") {
          return;
        }

        ;
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
 // 01/02/2020 04:20 pm - SSN - [20200102-1611] - [003] - Seperate AngularJS utility from general DOM utilities
// Of course we are calling utility more than once. Need to call functions where they apply.

if (typeof window["site_routine_run"] != "number") {
  window["site_routine_run"] = 0;
}

window["site_routine_run"] = window["site_routine_run"] + 1;

if (window["site_routine_run"] === 1) {
  $(function () {
    // 12/30/2019 01:23 am - SSN - Add timeot
    // site_instance.setDefaults();
    setTimeout(function () {
      site_instance.setDefaults();
    }, 2000); // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
    // 09/10/2019 08:53 pm - SSN - Replaced
    // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.

    setTimeout(function () {
      site_instance.prefixPreWithShowHideAnchor('20200102-1534-2'); // 08/31/2020 04:32 am - SSN - [20200831-0417] - [003] - Disable collapsable divs with no content

      setTimeout(function () {
        return site_instance.disableEmptyCollapsableDivs();
      }, 1000);
    }, 2000);
  });
}

var d2 = new Date();
site_instance_NS.site_Class.loadCounter++; // 11/25/2019 02:37 pm - SSN - [20191125-1414] - [003] - Project jobs - filter 
// https://stackoverflow.com/questions/6361465/how-to-check-if-click-event-is-already-bound-jquery

$.fn.isBound = function (type, fn) {
  if (!this.data('events')) {
    return false;
  }

  var data = this.data('events')[type];

  if (data === undefined || data.length === 0) {
    return false;
  }

  return -1 !== $.inArray(fn, data);
}; // 11/25/2019 02:29 pm - SSN - [20191125-1414] - [002] - Project jobs - filter 


function Job_Timelog_setFilter() {
  console.log('site.ts 20200102-1531 - job_Timelog_setFilter ');

  if ($("#filterText").isBound('keyup', Job_Timelog_setFilter)) {
    console.log("Already bound");
    return;
  }

  $("#filterText").on('keyup', function (e) {
    console.log('project_jobs - fitlerText - KeyUp');
    console.log(e);
  });
}

$(function () {
  console.log('site - project_jobs - filter - 2 - setup');
  Job_Timelog_setFilter();
});

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi ./Timesheet/timesheet_main.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Timesheet/timesheet_main.ts */"./Timesheet/timesheet_main.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vSW50ZXJjZXB0b3JzL1Nlc3NvblRpbWVvdXRJbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9Sb3V0aW5nL1JvdXRpbmdfQ29uZmlnLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEFwcC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHkudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldF9tYWluLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEy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ZUEseUIiLCJmaWxlIjoiYnVuZGxlX3RpbWVzaGVldGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9hZGREZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iIFsyMDE5MDkzMC0xOTA4XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIyLzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE4XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG4gICAgICAgICAgICB2YXIgX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9Qcm9qZWN0QVBJL3JlZnJlc2hyZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHByb2plY3Qgc2VhcmNoIHJlY29yZCAgWzIwMTkxMTIyLTE2MDhdIFsnICsgaWQgKyAnXSBbJyArIHNlcnZpbmdQYWdlICsgJ10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV2U2l0ZXM6IGtvLm9ic2VydmFibGUoX2RldlNpdGVzKSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBhZGREZXZTaXRlOiBfYWRkRGV2U2l0ZSxcclxuICAgICAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDQgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAyXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGV2U2l0ZTogX3VwZGF0ZURldlNpdGUsXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGltZUxvZzogX2luc2VydFRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRUaW1lbG9nOiBfZ2V0VGltZWxvZyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVMb2c6IF9hZGRPclVwZGF0ZVRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzOiBfZ2V0Sm9icyxcclxuICAgICAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlczogX2dldEpvYl9TdGF0dXNlcyxcclxuICAgICAgICAgICAgICAgIGdldEpvYjogX2dldEpvYixcclxuICAgICAgICAgICAgICAgIHRpbWVsb2dSZWZyZXNoUmVjb3JkOiBfVGltZWxvZ1JlZnJlc2hSZWNvcmQsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQ6IF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmRcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8xMy8yMDE5IDA1OjQ4IGFtIC0gU1NOIC0gWzIwMTkwOTEzLTA1NDhdIC0gWzAwMV0gLSBDcmF0ZSBnZW5lcmljIGRyb3Bkb3duIGxpc3QgZGlyZWN0aXZlXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPiBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjUyIGFtIC0gU1NOIC0gQWRkZWQgaW1wb3J0IGFuZ3VsYXJcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjIxIGFtIC0gU1NOIC0gUmVwbGFjZSBhbmd1bGFyLm1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuaW50ZXJmYWNlIExvb2t1cFJlY29yZCB7XHJcbiAgICBpZDogbnVtYmVyXHJcbn1cclxuXHJcbi8vIEFkZCBhdXRvZm9jdXM9XCJ0cnVlXCIgdG8gc2V0IGZvY3VzXHJcblxyXG52YXIgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gTmVlZGVkIHRvIGJlIGFibGUgdG8gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgZm9ybTEgPSAkKFwiW25hbWU9J1wiICsgZm9ybU5hbWUgKyBcIiddXCIpLmdldCgwKTtcclxuICAgICAgICAgICAgdmFyIGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKS50cmltKCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMiA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV8yXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wZG93bkxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDcwNzogIHN1Ym1pdEZvcm1fMlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV8yXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV8xXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEcm9wZG93bkxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDcwNzogIHN1Ym1pdEZvcm1fMVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtLiR2YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBbJyRodHRwJywgJyRxJywgJyRzY29wZScsICckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlLCAkcm9vdFNjb3BlLCAkdGltZW91dCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5maXJzdFJ1biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2bS5oaXRDb3VudCA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwODoyOSBhbSAtIFNTTiAtIEFkZGluZyAtIE5lZWQgdG8gaW5pdGlhbCBmb3IgJHdhdGNoIHRvIHdvcmsuXHJcbiAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgncGFyZW50S2V5Q29sdW1uJywgZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGFsbCBkaXJlY3RpdmUgY29kZSBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIgMTIzIC4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGVkIHN1Y2Nlc3NmdWxseS4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGVkIHN1Y2Nlc3NmdWxseS4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGVkIHN1Y2Nlc3NmdWxseS4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGVkIHN1Y2Nlc3NmdWxseS4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlbG9hZGVkIHN1Y2Nlc3NmdWxseS4uLi4uLlwiICsgdm0ucGFyZW50S2V5Q29sdW1uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbXCIsIG5ld1ZhbCwgXCJdIFtcIiwgb2xkVmFsLCBcIl1cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZTogTG9va3VwUmVjb3JkLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzc24tMjAyMTAxMDUtMjIxNC0tLS1XQVJDSC0tLS0tLS0tLS0tXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUuJGRpcnR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UuZG9TZXRIYXZlQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMjEwMTA1LTIzMDUtLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmtleUNvbHVtblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgKz0gMTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5rZXlDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGtleUNvbHVtbi0yMDE5MTIyOTE1NDUoTm90ZSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGtleUNvbHVtbi0yMDE5MTIyOTE1NDUoTm90ZSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGtleUNvbHVtbi0yMDE5MTIyOTE1NDUoTm90ZSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIGtleUNvbHVtbi0yMDE5MTIyOTE1NDUoTm90ZSknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5kaXNjaXBsaW5laWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkaXNjaXBsaW5laWQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL0Rpc2NpcGxpbmVBUEknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEyLzEwLzIwMjAgMDQ6MzIgcG0gLSBTU04gLSBbMjAyMDEyMTAtMTYyNV0gLSBbMDAyXSAtIFVwZGF0ZSBUaW1lbG9nIGVkaXQgTVZDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cubGluZWl0ZW1pZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL2pvYl9MaW5lSXRlbS90eXBlYWhlYWRfam9icmVjb3Jkcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9qb2JfTGluZUl0ZW0vdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5qb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwNDo0NiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2IucHJvamVjdGlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbiwgJ10gMjAyMDEyMTAtMTY1NicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4sICddIDIwMjAxMjEwLTE2NTYnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uLCAnXSAyMDIwMTIxMC0xNjU2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbiwgJ10gMjAyMDEyMTAtMTY1NicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMjEwMTA1LTIzMDUtLS1CLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlDb2x1bW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0eXBlb2YgdGhpcy5wYXJlbnRLZXlDb2x1bW4gWycsIHR5cGVvZiAodGhpcy5wYXJlbnRLZXlDb2x1bW4pLCBcIl1cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGFyZW50S2V5Q29sdW1uKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEtleUNvbHVtblZhbHVlID0gdGhpcy5wYXJlbnRLZXlDb2x1bW47IC8vdW5kZWZpbmVkO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMDEyMTAtMTc0OSAtIHBhcmVudEtleUNvbHVtblZhbHVlIFsnLCBwYXJlbnRLZXlDb2x1bW5WYWx1ZSwgJ10nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudEtleUNvbHVtblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiAqKioqKioqKioqKioqKioqKioqKiogVXBkYXRpbmcgQXBwVXJsIHdpdGggcGFyZW50S2V5Q29sdW1uVmFsdWUgW1wiLCBwYXJlbnRLZXlDb2x1bW5WYWx1ZSwgJyknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSB2bS5BUElVcmxMaXN0QWxsICsgXCIvXCIgKyBwYXJlbnRLZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jaGFuZ2luZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5naW5nIGNoYW5naW5nIGNoYW5naW5nIGNoYW5naW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdpbmcgY2hhbmdpbmcgY2hhbmdpbmcgY2hhbmdpbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2luZyBjaGFuZ2luZyBjaGFuZ2luZyBjaGFuZ2luZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5naW5nIGNoYW5naW5nIGNoYW5naW5nIGNoYW5naW5nXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCcsIHsgbXNnOiAnc2VsZWN0IG5ldyB2YWx1ZScsIGtleUNvbHVtbjogdm0ua2V5Q29sdW1uLCBrZXlWYWx1ZTogdm0ubmdNb2RlbFRlbXAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJG9uKCdkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0JywgZnVuY3Rpb24gKGV2ZW50cywgYXJncykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQgLSBsaXN0ZW5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCAtIGxpc3RlbmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyZW50S2V5TmFtZSAoIHRoaXMgdm0gYmluZCApJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnBhcmVudEtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3Mua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5TmFtZSA9PSBhcmdzLmtleUNvbHVtbikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdm0ucGFyZW50S2V5Q29sdW1uIGFuZCBhcmdzLmtleVZhbHVlIGJlZm9yZSB1cGRhdGU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnBhcmVudEtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3Mua2V5VmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBhcmVudEtleUNvbHVtbiA9IGFyZ3Mua2V5VmFsdWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0ZSB2bS5wYXJlbnRLZXlDb2x1bW4gPSBhcmdzLmtleVZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnBhcmVudEtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3Mua2V5VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnID09IFwic2VsZWN0IG5ldyB2YWx1ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSBrZXlDb2x1bW4galF1ZXJ5ICBbc2VsZWN0IG5ldyB2YWx1ZV0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmtleUNvbHVtbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmtleUNvbHVtbiArIFwiJ11cIikudmFsKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNSZWFkeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJVcGRhdGUgdm0ubmdNb2RlbFRlbXAgd2l0aCBhcmdzLmtleVZhbHVlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdm0ubmdNb2RlbFRlbXAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQ2FsbCB2bS5zZXR1cFVybC4gIFJlc2V0IHZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coIFwiVXBkYXRlIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFhcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKFwiVXBkYXRlIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWRcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLnRpdGxlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC50aXRsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC50aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGUgdm0ubmdNb2RlbFRlbXBcIilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICB2bS5uZ01vZGVsVGVtcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQnLCB7IG1zZzogJ1N0YXJ0aW5nIGNoYW5nZScsIGtleUNvbHVtbjogdm0ua2V5Q29sdW1uIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0dXBVcmwoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbHVtblZhbHVlID0gJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVNlbGVjdGVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFNldHRpbmcgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCIgZm9yICR3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFuZ3VsYXJDb250cm9sSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYW5ndWxhckNvbnRyb2xJZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVTZWxlY3RlZCA9IHRoaXMuYW5ndWxhckNvbnRyb2xJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gU2V0dGluZyB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIiBmb3IgJHdhdGNoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPT09IHVuZGVmaW5lZCAmJiBrZXlDb2x1bW5WYWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5Q29sdW1uVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBrZXlDb2x1bW5WYWx1ZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDIxMDEwNi0wMzQ5ICAtLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlWYWx1ZVNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJywga2V5VmFsdWVTZWxlY3RlZCwgJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdGVzdGluZyBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRlc3Rpbmcgb25seVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciB0ZXN0aW5nIG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdGVzdGluZyBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIGlmIChrZXlWYWx1ZVNlbGVjdGVkID09IG51bGwpIGtleVZhbHVlU2VsZWN0ZWQgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciB0ZXN0aW5nIG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdGVzdGluZyBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIHRlc3Rpbmcgb25seVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciB0ZXN0aW5nIG9ubHlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFNldHRpbmcgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCIgZm9yICR3YXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KGtleVZhbHVlU2VsZWN0ZWQpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0JywgeyBtc2c6ICdIYXMgdmFsaWQgdmFsdWUnLCBrZXlDb2x1bW46IHZtLmtleUNvbHVtbiwga2V5VmFsdWU6IGtleVZhbHVlU2VsZWN0ZWQgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMjEwMTA1LTIzMDUtLS0gRG9uZSAtLS0tLS0tLS0tLS0tLVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtICh4eHh4eDEwMS1CKSB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYICAgIFsnLCB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLCAnXScpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkID0gdm0uc2V0SW5wdXRWYXJpYWJsZXMoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gX2lzVmFsaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKiogX2lzVmFsaWQnLCBfaXNWYWxpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpcnN0UnVuID0gZmFsc2U7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaXNWYWxpZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDk5OTk5OTk5OTk5OTk5ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZtLmtleUNvbHVtbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmtleUNvbHVtbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmtleUNvbHVtbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5Q29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS5wYXJlbnRLZXlDb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5wYXJlbnRLZXlDb2x1bW4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhpcy5wYXJlbnRLZXlDb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBhcmVudEtleUNvbHVtbik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5Q29sdW1uKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goXCJ2bS5wYXJlbnRLZXlDb2x1bW5cIiwgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0ucGFyZW50S2V5Q29sdW1uKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBwYXJlbnRLZXlDb2x1bW5WYWx1ZSA9ICQoXCJbbmFtZT0nXCIgKyB0aGlzLnBhcmVudEtleUNvbHVtbiArIFwiJ11cIikudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50S2V5Q29sdW1uVmFsdWUgPSB2bS5wYXJlbnRLZXlDb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjAxMjEwLTIxNTggLSBwYXJlbnRLZXlDb2x1bW5WYWx1ZSBbJywgcGFyZW50S2V5Q29sdW1uVmFsdWUsICddJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBXYXRjaCBmaXJlZCAtIDIwMjAxMjEwLTE4MjkgWFhYWFhYWFhYWHgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkX2xvY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFuZ3VsYXJDb250cm9sSWQgIT09IHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmd1bGFyQ29udHJvbElkID0gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSAyMDIwMTIxMC0xNzAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMjAxMjEwLTE3MDMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgdGhpcy5rZXlDb2x1bW46ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJywgdGhpcy5rZXlDb2x1bW4sICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgIHRoaXMucGFyZW50S2V5Q29sdW1uOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHRoaXMucGFyZW50S2V5Q29sdW1uLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgdm0ucGFyZW50S2V5Q29sdW1uOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHZtLnBhcmVudEtleUNvbHVtbiwgJ10nKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uZ01vZGVsVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5nTW9kZWxUZW1wID0gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgIHRoaXMubmdNb2RlbFRlbXA6ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJywgdGhpcy5uZ01vZGVsVGVtcCwgJ10nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgIHZtLm5nTW9kZWxUZW1wOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHZtLm5nTW9kZWxUZW1wLCAnXScpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSAyMDIwMTIxMC0xNzAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMjAxMjEwLTE3MDMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQodGhpcy5hbmd1bGFyQ29udHJvbElkKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZF9sb2NhbCA9IHRoaXMuYW5ndWxhckNvbnRyb2xJZCA+IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkX2xvY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gX2lzVmFsaWRfbG9jYWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfaXNWYWxpZF9sb2NhbDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0udmFsaWRhdGVFbnRyeSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXRJbnB1dFZhcmlhYmxlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjMwIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwOF0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSAyMDIwMTIxMC0xNzAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGlzY2lwbGluZUlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFuZ3VsYXJDb250cm9sSWQgPSBkYXRhLmRpc2NpcGxpbmVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEudGFfaWQsIHRpdGxlOiBkYXRhLnRhX2Rlc2NyaXB0aW9uIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hbmd1bGFyQ29udHJvbElkID0gZGF0YS50YV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RGlzY2lwbGluZS0wMDAwMDAwMDAwMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidm0uQVBJVXJsTGlzdEFsbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5BUElVcmxMaXN0QWxsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgIHRoaXMucGFyZW50S2V5Q29sdW1uOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHRoaXMucGFyZW50S2V5Q29sdW1uLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgdm0ucGFyZW50S2V5Q29sdW1uOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHZtLnBhcmVudEtleUNvbHVtbiwgJ10nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsTGlzdEFsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwNToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxNi0wMzU1XSAtIFswMDZdIC0gQWRkaW5nIEpvYkFQSSBjb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hpbGUgZGV2ZWxvcG1lbnQgaW4gcHJvZ3Jlc3NcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZUlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS50YV9pZCwgdGl0bGU6IGl0ZW0udGFfZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMTYvMjAxOSAwMjo1NyBhbSAtIFNTTiAtIEFkZGVkIHRvIGdldCBjdXJyZW50IHZhbHVlIGFuZCB1cGRhdGUgdmlldy5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCA9IGZ1bmN0aW9uIChsb29rdXBJRCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ2V0RGlzY2lwbGluZUN1cnJlbnQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cElEID09PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAgdGhpcy5rZXlDb2x1bW46ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJywgdGhpcy5rZXlDb2x1bW4sICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgIHRoaXMucGFyZW50S2V5Q29sdW1uOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWycsIHRoaXMucGFyZW50S2V5Q29sdW1uLCAnXScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLkFQSVVybFNpbmdsZVJlY29yZClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsb29rdXBJRClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5uZ01vZGVsVGVtcClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tJylcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybFNpbmdsZVJlY29yZCArIFwiL1wiICsgbG9va3VwSURcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2bS54eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHgoKTtcclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgdm0uaXNSZWFkeSA9IHRydWU7IH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9Ecm9wZG93bkxpc3QvRHJvcERvd25MaXN0RGlyZWN0aXZlLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDEyLzEwLzIwMjAgMDU6NDYgcG0gLSBTU04gLSBbMjAyMDEyMTAtMTYyNV0gLSBbMDA1XSAtIFVwZGF0ZSBUaW1lbG9nIGVkaXQgTVZDXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5Q29sdW1uOiBcIj1wYXJlbnRrZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlOYW1lOiBcIkBcIixcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIiwgLy8gTmVlZGVkIGZvciBwb3N0aW5nIGZvcm0gKFJlcGxhY2luZyB1cmwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQ29udHJvbElkOiBcIj0/YWNpXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxUZW1wOiBcIj1cIlxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMsIGN0cmwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxMTExMTExMTExXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdHJsKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25saXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MzAgY3VzdG9tVmFsaWRhdG9yIEJCQkJCQkJCQkJCQkJCJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGN1c3RvbVZhbGlkYXRvcihuZ01vZGVsVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bmxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDczMCBjdXN0b21WYWxpZGF0b3IgQ0NDQ0NDQ0NDQ0NDQycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgY29udGFpbnMgdXBwZXJjYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0IGRvZXMgY29udGFpbiB1cHBlcmNhc2UsIHNldCBvdXIgY3VzdG9tIGB1cHBlcmNhc2VWYWxpZGF0b3JgIHRvIHZhbGlkL3RydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHNldCBpdCB0byBub24tdmFsaWQvZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCd1cHBlcmNhc2VWYWxpZGF0b3InLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZ01vZGVsVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3RybC4kcGFyc2Vycy5wdXNoKGN1c3RvbVZhbGlkYXRvcik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bmxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDczMCBjdXN0b21WYWxpZGF0b3IgRERERERERERERCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDU6MjkgYW0gLSBTU04gLSBbMjAxOTExMjgtMDUyOV0gLSBbMDAxXSAtIEF1dG9mb2N1c1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYXV0b2ZvY3VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2V0Zm9jdXNGdW5jID0gZnVuY3Rpb24gKGVsZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYXV0b2ZvY3VzLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dE9iaiA9IGVsZW0uZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpLmZpbHRlcignOnZpc2libGU6Zmlyc3QnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRPYmoudmFsKCkgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRPYmouZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHNldGZvY3VzRnVuYyhlbCk7IH0sIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDAzOjUzIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMV0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5cclxuLy8gaHR0cHM6Ly9jb2RlLmFuZ3VsYXJqcy5vcmcvMS4yLjI3L2RvY3MvYXBpL25nL3NlcnZpY2UvJGh0dHAjaW50ZXJjZXB0b3JzXHJcblxyXG5cclxuY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSB0b3AgLSAyMDE5MTIwNy0wNDEwJyk7XHJcblxyXG5sZXQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gZnVuY3Rpb24gdG9wIC0gMjAxOTEyMDctMDQxMScpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJqc19tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3InLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBhbmd1bGFyanNfbW9kdWxlLmNvbmZpZyhbXHJcbiAgICAgICAgICAgICckaHR0cFByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDIwIDEwOjUzIGFtIC0gU1NOIC0gQWRkaW5nICRsb2NhdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvciA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnJHEnLFxyXG4gICAgICAgICAgICAgICAgICAgICckcm9vdFNjb3BlJyxcclxuICAgICAgICAgICAgICAgICAgICAnJGxvY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgLy8gICd1c2VyU2Vzc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRxLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24pIHsgLy8gLCB1c2VyU2Vzc2lvblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIDIwMTkxMjA3LTA0MTItTUYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGJlZm9yZSBtYWtpbmcgcmVxdWVzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIE1haW4gZnVuY3Rpb24gLSBTRVJWSUNFIC0gMjAxOTEyMDctMDQxMi1TRVJWSUNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnY29uZmlnIG5leHQ6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZyhjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9pZiAoY29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdXNlclNlc3Npb24uaXNBdXRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8gICAgLy8gdGhlIHJlcXVlc3QgbG9va3MgZ29vZCwgc28gcmV0dXJuIHRoZSBjb25maWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8gYmFkIHJlcXVlc3QsIHNvIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL3JldHVybiAkcS5yZWplY3QoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXF1ZXN0RXJyb3IgLSAyMDIwMDgyMS0xMDQ2LTAwMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdGVyIC0gcmVzcG9uc2UgLSAyMDIwMDgyMS0xMDQ2LTAwMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXNwb25zZUVycm9yIC0gMjAyMDA4MjEtMTA0Ni0wMDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKGludGVyY2VwdG9yKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yX2luc3RhbmNlO1xyXG5cclxuIiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuLy8gMTIvMDcvMjAxOSAwNzowNiBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wNzA0XSAtIFswMDFdIC0gQW5ndWxhckpTIC0gUm91dGluZyAtIEF1dGhlbnRpY2F0aW9uXHJcblxyXG4vLyBNb3ZlZCBmcm9tIGRlbW9TaXRlc19pbmRleC50cyAtIEJlZ2luXHJcblxyXG4vLyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBcclxuXHJcblxyXG5cclxudmFyIHJvdXRpbmdfY29uZmlnX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIGZyb20gUm91dGluZ19Db25maWcgdG8gUm91dGluZ19Db25maWcgd2l0aCBtb3ZlLlxyXG4gICAgLy8gTW92ZWQgb3V0c2lkZSB0byBzaGFyZWQgYmV0d2VlbiBkb1NldHVwX2EgYW5kIGRvU2V0dXBfYlxyXG4gICAgdmFyIGFuZ3VsYXJKU19tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1JvdXRpbmdfQ29uZmlnJywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJ10pO1xyXG5cclxuXHJcblxyXG4gICAgLy8gZnJvbSBSb3V0aW5nX0NvbmZpZyB0byBSb3V0aW5nX0NvbmZpZyB3aXRoIG1vdmUuXHJcblxyXG4gICAgdmFyIGRvU2V0dXBfYSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzI2LzIwMTkgMDU6NTEgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDU1MV0gQWRkICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICAgICAgYW5ndWxhckpTX21vZHVsZS5jb25maWcoW1wiJHJvdXRlUHJvdmlkZXJcIiwgXCIkbG9jYXRpb25Qcm92aWRlclwiLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblxyXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlci53aGVuKFwiL1wiLCB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBcImRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlc0luZGV4Lmh0bWxcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzEwLzIwMTkgMDE6NDcgYW0gLSBTU04gLSBbMjAxOTA5MTAtMDE0N10gLSBbMDAxXSAtIFdBUk5JTkc6IFRyaWVkIHRvIGxvYWQgYW5ndWxhciBtb3JlIHRoYW4gb25jZS5cclxuICAgICAgICAgICAgLy8gVHVybiBvZmZcclxuICAgICAgICAgICAgLy8kcm91dGVQcm92aWRlci53aGVuKFwiL2RldGFpbFwiLCB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnRyb2xsZXI6IFwiZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXJcIixcclxuICAgICAgICAgICAgLy8gICAgLy8gdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlRGV0YWlsLmh0bWxcIlxyXG4gICAgICAgICAgICAvLyAgICB0ZW1wbGF0ZVVybDogXCIvRGV2U2l0ZXMvQ3JlYXRlX3BhcnRpYWxcIlxyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yNi8yMDE5IDA1OjUxIGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA1NTFdIEFkZCAkbG9jYXRpb25Qcm92aWRlclxyXG4gICAgICAgICAgICAvLyBVc2UgdGhlIEhUTUw1IGhpc3RvcnkgQVBJXHJcbiAgICAgICAgICAgIC8vICAkcm91dGVQcm92aWRlci5vdGhlcndpc2UoeyByZWRpcmVjdFRvOiBcIi9cIiB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRvZG86ICAxMS8xMy8yMDE5IDEwOjE5IHBtIC0gU1NOIC0gVGVzdGluZ1xyXG4gICAgICAgICAgICAvLyBUYWtlIG91dFxyXG4gICAgICAgICAgICAvLyAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe30pO1xyXG5cclxuICAgICAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSwgcmV3cml0ZUxpbmtzOiBmYWxzZSB9KS5oYXNoUHJlZml4KCchJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gTW92ZWQgZnJvbSBkZW1vU2l0ZXNfaW5kZXgudHMgLSBFbmRcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDEyLzA3LzIwMTkgMDg6MDIgYW0gLSBTU04gLSBbMjAxOTEyMDctMDcwNF0gLSBbMDAzXSAtIEFuZ3VsYXJKUyAtIFJvdXRpbmcgLSBBdXRoZW50aWNhdGlvblxyXG5cclxuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTcyMDkyMDMvYW5ndWxhcmpzLXByb3RlY3Rpbmctcm91dGVzLXdpdGgtYW5ndWxhcmpzLWRlcGVuZGluZy1pZi10aGUtdXNlci1pcy1hdXRob3JpemVkXHJcblxyXG4gICAgdmFyIGRvU2V0dXBfYiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJKU19tb2R1bGUuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgLndoZW4oJy9uZWVkc2F1dGhvcmlzYXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25maWcgZm9yIGNvbnRyb2xsZXIgYW5kIHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgZnVuY3Rpb24gaXMgaW5qZWN0ZWQgd2l0aCB0aGUgQXV0aFNlcnZpY2Ugd2hlcmUgeW91J2xsIHB1dCB5b3VyIGF1dGhlbnRpY2F0aW9uIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRoJzogZnVuY3Rpb24gKEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UuYXV0aGVudGljYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAvL0lmIHRoZSByb3V0ZSBjaGFuZ2UgZmFpbGVkIGR1ZSB0byBhdXRoZW50aWNhdGlvbiBlcnJvciwgcmVkaXJlY3QgdGhlbSBvdXRcclxuICAgICAgICAgICAgJHJvb3RTY29wZS4kb24oJyRyb3V0ZUNoYW5nZUVycm9yJywgZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cywgcmVqZWN0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZWplY3Rpb24gPT09ICdOb3QgQXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KS5mYWN0b3J5KCdBdXRoU2VydmljZScsIGZ1bmN0aW9uICgkcSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0F1dGhlbnRpY2F0aW9uIGxvZ2ljIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgYXV0aGVudGljYXRlZCwgcmV0dXJuIGFueXRoaW5nIHlvdSB3YW50LCBwcm9iYWJseSBhIHVzZXIgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRWxzZSBzZW5kIGEgcmVqZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QoJ05vdCBBdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGRvU2V0dXBfYSgpO1xyXG4gICAgICAgIGRvU2V0dXBfYigpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHJvdXRpbmdfY29uZmlnX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG52YXIgVGltZWxvZ0xpbmtPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICAvL3ZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlKGRlZmF1bHRBcHBOYW1lLCBbXSk7XHJcbiAgICAgICAgdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZWxvZ0xpbmtPcHRpb25zJywgZGVmYXVsdEFwcE5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgndGltZWxvZ0xpbmtPcHRpb25zJywgWyckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCBmdW5jdGlvbiAoJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgLy9iaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRzY29wZScsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbEVkaXQgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsICAvLyB1c2luZyBzYW1lIGh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDg6MzkgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAyXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDk6MzcgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAzXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJywgLy8/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDg6NDUgYW0gLSBTU04gLSBDb3BpZWQgZnJvbSBKb2JJbmRleENvbnRyb2xsZXIudHMgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAxMV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAvLyBEdXBsaWNhdGUgLSBXcm9uZyB3YXkgdG8gZ28hXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uIChqb2JJRCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqb2JJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU2Vjb25kczogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogJ0AnXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9sb2NhbCwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdGFsU2Vjb25kc19mcm9tQXR0ciA9IGF0dHJzWyd0b3RhbFNlY29uZHMnXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXZlT3BlblJlY29yZCA9IHRvdGFsU2Vjb25kc19mcm9tQXR0ciA9PT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2xvY2tvdXRPcHRpb24gPSBoYXZlT3BlblJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbiA9ICFoYXZlT3BlblJlY29yZCA/IFwiQ29udGludWVcIiA6IFwiTGluZSBpdGVtXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMTo0MiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEFwcF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIC8vIDA1LzAzLzIwMTkgMDY6MzMgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEzXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAvLyBDb252ZXJ0IHRvIFRTXHJcblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRBcHAtZmlsZW5hbWUnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuICAgIC8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgaXMgaW4gdXNlIGJ5IERhdGFTZXJ2aWNlcy5qc1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoXCJ0aW1lc2hlZXRDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICckY29tcGlsZScsIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbCwgY2hhbmdlTW9uaXRvclNlcnZpY2UsICRjb21waWxlKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xOS8yMDE5IDA2OjQzIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIEFkZGVkIHRvIHJlLWJpbmQgbmctY2xpY2tcclxuXHJcbiAgICAgICAgJHNjb3BlLiRvbignVGltZUxvZ19JbmRleF9SZWZyZXNoJywgZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMl9pZCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5yZXBsYWNlV2l0aChpdGVtLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tPdXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA1LzE5LzIwMTkgMDg6MzkgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAyXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb3NpbmdIb29rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTQvMjAxOSAwNDo0MSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDhdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuICAgICAgICAvLyBUZXN0aW5nIC0gTm90IHdvcmtpbmcuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLiRvbignbW9kYWwuY2xvc2luZycsIGZ1bmN0aW9uIChldmVudCwgcmVhc29uLCBjbG9zZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiWW91IGFyZSBhYm91dCB0byBsZWF2ZSB0aGUgZWRpdCB2aWV3LiBVbmNhdWdodCByZWFzb24uIEFyZSB5b3Ugc3VyZT9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWNrZWQgb3V0c2lkZVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrZHJvcCBjbGlja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbmNlbCBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY2FuY2VsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNjYXBlIGtleVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlc2NhcGUga2V5IHByZXNzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY29uZmlybShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGpvYklEKSkge1xyXG4gICAgICAgICAgICAgICAgam9iSUQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjEwIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG5cclxuXHJcbiAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIC8vIDA5LzMwLzIwMTkgMDY6NTYgcG0gLSBTU04gLSAoSW5qZWN0IGpvYklkKVxyXG4gICAgLy8gMTEvMjgvMjAxOSAwMjo1OCBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDJdIC0gQ2xvY2staW4gbm90IHNhdmluZyAtIEFkZCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnam9iSWQnLFxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgam9iSWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzI5LzIwMTkgMTE6MjEgcG0gLSBTU04gLSBBZGRpbmcgZGlzYWJsZVNhdmVCdXR0b24gXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDI6NDcgYW0gLSBTU04gLSBbMjAxOTExMjgtMDI0N10gLSBbMDAxXSAtIENsb2NrLWluIG5vdCBzYXZpbmdcclxuICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2Iuam9iVGl0bGUgPSBkYXRhLmpvYlRpdGxlO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5qb2IucHJvamVjdC5wcm9qZWN0VGl0bGUgPSBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGV0Q29udHJvbGxlciAtIGdldEpvYlN1Y2Nlc3MgIC0gIDIwMTkwOTMwLTIxMDYtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGV0Q29udHJvbGxlciAtIGdldEpvYlN1Y2Nlc3MgIC0gIDIwMTkwOTMwLTIxMDYtQyAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiAwLCB0aXRsZTogJycgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDU6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEyXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nIFxyXG4gICAgICAgICAgICAvLyBBZGQgcGFnZVRpdGxlXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNsb2NrLWluXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgLy8gdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lTG9nSWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogdGltZU5vdyxcclxuICAgICAgICAgICAgICAgIHdvcmtEZXRhaWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNjaXBsaW5lSWQ6ICcyJyxcclxuICAgICAgICAgICAgICAgIGpvYklkOiBqb2JJZFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcF9UaW1lc2hlZXRDb250cm9sbGVyOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE2LzIwMTkgMDQ6NDcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4vLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG52YXIgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xOS8yMDE5IDEyOjQ4IGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIEFkZGluZyAkY29tcGlsZSBmb3IgZHluYW1pY2FsbHkgbG9hZGVkIHZpZXdcclxuICAgIC8vIDExLzIyLzIwMTkgMDI6MTggcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAvLyBJbmplY3RpbmcgU2VydmluZ3BhZ2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnJHRpbWVvdXQnLCAnJHJvb3RTY29wZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDQ6MDMgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDA2XSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuICAgICAgICAvLyBSZW1vdmUgZnVuY3Rpb24gbmFtZVxyXG4gICAgICAgIC8vICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCAkdGltZW91dCwgJHJvb3RTY29wZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiRWRpdCBbXCIgKyBzZXJ2aW5nUGFnZSArICddJztcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2V0U3RvcFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy90aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMoZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lU2hvcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNjaXBsaW5lU2VsZWN0ZWQgPSB7IGlkOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDgpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEJlZ2luXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkX3RlbXAgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuVGltZWxvZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5Kb2JfVGltZWxvZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLlByb2plY3RzX1NlYXJjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5wcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEVuZFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QyID0gZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHZhciBhZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgICAgICAvL307XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjUvMjAxOSAwNTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMTFdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBSZWZhY3RvciAtIFRpbWVsb2cgb25seVxyXG5cclxuaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRBcHAnO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNsb2Nrb3V0Y29udHJvbGxlcic7XHJcblxyXG5cclxuLy8gMTEvMTYvMjAxOSAwNDo1NyBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuXHJcbmltcG9ydCB7IFRpbWVsb2dMaW5rT3B0aW9ucyB9IGZyb20gJy4vVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zJztcclxuXHJcblxyXG5cclxudmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAvLyAxMS8yMS8yMDE5IDA2OjQ1IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwN10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgVGltZWxvZ0xpbmtPcHRpb25zLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuICAgIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwX1RpbWVzaGVldENvbnRyb2xsZXI7XHJcblxyXG4gICAgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbiAgICB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxuICAgIHRpbWVzaGVldEFwcF9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG4gICAgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7IGRvU2V0dXAgfTtcclxuXHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcbi8vIDExLzA5LzIwMTkgMTI6MDUgcG0gLSBTU04gLSBBZGRlZCBDaGFuZ2VNb25pdG9yXHJcbi8vIDExLzE0LzIwMTkgMDM6MjAgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA0XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4vL2ltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvcic7XHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6NDAgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAyXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuaW1wb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1BhZ2VVcGRhdGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG4vLyAxMi8wNy8yMDE5IDA0OjA5IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMl0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5pbXBvcnQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciBmcm9tICcuLi9JbnRlcmNlcHRvcnMvU2Vzc29uVGltZW91dEludGVyY2VwdG9yJztcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDA4OjA3IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwNF0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuXHJcbmltcG9ydCB7IHJvdXRpbmdfY29uZmlnX2luc3RhbmNlIH0gZnJvbSAnLi4vUm91dGluZy9Sb3V0aW5nX0NvbmZpZyc7XHJcblxyXG5yb3V0aW5nX2NvbmZpZ19pbnN0YW5jZS5kb1NldHVwKCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9ICd0aW1lc2hlZXRBcHAnO1xyXG5cclxuc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvci5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcbi8vQ2hhbmdlTW9uaXRvcl9VdGlsXHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblBhZ2VVcGRhdGVyX0luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzE2LzIwMTkgMDY6MjcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG5cclxuLy8gMTEvMjUvMjAxOSAxMTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0yMTUzXSAtIFswMDVdIC0gSm9iIGNyZWF0ZSAtIFJlcGxhY2UgZHJvcGRvd24gd2l0aCBkcm9wZG93bkxpc3REaXJlY3RpdmVcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG5cclxuXHJcbmRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4vLyAxMS8yMy8yMDE5IDA4OjU2IGFtIC0gU1NOXHJcblJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDExOjA5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwN10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuY29uc29sZS5sb2coXCJUaW1lc2hlZXRfbWFpbiAtIDIwMTkxMDAxLTExMTBcIik7XHJcblxyXG5cclxuQXBwSW5zaWdodHNfVXRpbC5kb1NldHVwKCk7XHJcblxyXG5cclxuQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIlRpbWVzaGVldF9tYWluXCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTAwMS0xMTEyLUNcIiwgTWVzc2FnZTogXCJMb2FkaW5nIHRpbWVzaGVldF9tYWluXCIgfSk7XHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsIHsgU291cmNlQ29kZTogXCIyMDE5MTEwNS0wNTAzXCIsIE1lc3NhZ2U6IFwiTG9hZGluZyB0aW1lc2hlZXRfbWFpblwiIH0pO1xyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDU6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDExXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuLy8gUmVmYWN0b3IgLSBUaW1lbG9nIG9ubHlcclxuXHJcbmltcG9ydCAqIGFzIHggZnJvbSAnLi9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5JztcclxuXHJcbnguZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcbi8vIDA1LzE5LzIwMTkgMTI6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDAzXSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuLy8gMDkvMjEvMjAxOSAxMTo1MiBhbSAgLSBTU04gLSBVcGdyYWRpbmcgdG8gdXNlIEJhYmVsL1dXZWJwYWNrXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgLy8gMDUvMTkvMjAxOSAxMDowNiBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDZdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIC8vIDExLzE2LzIwMTkgMDI6NTIgcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAzXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjAvMjAxOSAwNDo0MyBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDNdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG4gICAgLy8gSW5qZWN0IFBhZ2VVcGRhdGVyU2VydmljZVxyXG5cclxuICAgIC8vIDExLzI1LzIwMTkgMDY6MzkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAzXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICdQYWdlVXBkYXRlclNlcnZpY2UnLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgUGFnZVVwZGF0ZXJTZXJ2aWNlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDM6MDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDA0XSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo1MSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDJdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKCRyb3V0ZVBhcmFtcy5pZCk7XHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDU6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEyXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nIFxyXG4gICAgICAgICAgICAvLyBBZGQgcGFnZVRpdGxlXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNsb2NrLW91dFwiO1xyXG5cclxuICAgICAgICAgICAgLy8gMTIvMjkvMjAxOSAxMToyNSBwbSAtIFNTTiAtIEFkZGluZyBkaXNhYmxlU2F2ZUJ1dHRvbiBcclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDI6NDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAyXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICAvLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5zdG9wVGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNylcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgwMzA2KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNS8yMDE5IDA2OjM4IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE4MDNdIC0gWzAwMl0gLSBjbG9jay1vdXQgaXMgbm90IHVwZGF0aW5nIGluZGV4IHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VVcGRhdGVyU2VydmljZS50aW1lbG9nX2luZGV4KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkLCBzZXJ2aW5nUGFnZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcblxyXG5cclxuLy8gMDUvMTkvMjAxOSAwOTo0NSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDVdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcbi8vIENvcGllZCBmcm9tIENsb2Nrb3V0LlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxuY29uc3QgbmdBcHBsaWNhdGlvbk5hbWUgPSBcInRpbWVzaGVldEFwcFwiO1xyXG5cclxudmFyIHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MDcgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDAyXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgY29uc29sZS5sb2coJ0FkZGluZyBDaGFuZ2VNb25pdG9yU2VydmljZScpO1xyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICckdGltZW91dCcsICd0aW1lbG9nSWQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCB0aW1lbG9nSWQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ29udGludWUgLyBMaW5lIEl0ZW1cIjtcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzI5LzIwMTkgMTE6MTcgcG0gLSBTU04gLSBBZGRpbmcgZGlzYWJsZVNhdmVCdXR0b24gXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTkgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDEwXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCA9IFwiMTdcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMjo0MSBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDNdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgVGltZUxvZ0lkID0gMFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudGltZUxvZ0lkID0gMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDcvMDIvMjAxOSAwOToxNyBhbSAtIFNTTiAtIEFkZGVkIG51bGxpZnkgZGF0ZU1vZGlmaWVkIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDA3OjMxIGFtIC0gU1NOIC0gRm9yZ290dGVuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyIC0gc3VibWl0Rm9ybSAtICgxMDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU3IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAwOV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByZWNvcmQuIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDA1OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAxMF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyhmYWxzZSk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMDk6NDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA0XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0cyB9IGZyb20gJ2FwcGxpY2F0aW9uaW5zaWdodHMtanMnO1xyXG5cclxuXHJcblxyXG52YXIgQXBwSW5zaWdodHNfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG5cclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IGVudmlyb25tZW50LmFwcEluc2lnaHRzLmluc3RydW1lbnRhdGlvbktleVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhdmVJbnN0cnVtZW50YXRpb25LZXkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWcuaW5zdHJ1bWVudGF0aW9uS2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHMuZG93bmxvYWRBbmRTZXR1cChjb25maWcpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9UZXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICBcclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBwYWdlIHZpZXcgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxyXG4gICAgICAgICAgICBcIkZpcnN0UGFnZS0yMDE5MTAwMS0xMDE1XCIsIC8qIChvcHRpb25hbCkgcGFnZSBuYW1lICovXHJcbiAgICAgICAgICAgIG51bGwsIC8qIChvcHRpb25hbCkgcGFnZSB1cmwgaWYgYXZhaWxhYmxlICovXHJcbiAgICAgICAgICAgIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCAvKiAob3B0aW9uYWwpIGRpbWVuc2lvbiBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIHsgbWVhc3VyZW1lbnQxOiAxIH0sIC8qIChvcHRpb25hbCkgbWV0cmljIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgMTIzIC8qIHBhZ2UgdmlldyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBldmVudCAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQoXCJUZXN0RXZlbnQtMjAxOTEwMDEtMTAxNlwiLCB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgeyBtZWFzdXJlbWVudDE6IDEgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgbG9nUGFnZVZpZXcgPSBmdW5jdGlvbiAobmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnksIGR1cmF0aW9uPzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhuYW1lLCB1cmwsIHByb3BlcnRpZXMpOy8vLCBtZWFzdXJlbWVudHMsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V2ZW50ID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55KSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuIFxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb246IEVycm9yLCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMDkvMjAxOSAxMTowMyBhbSAtIFNTTiAtIENyZWF0ZWRcclxuXHJcbi8vIDExLzE4LzIwMTkgMDI6MjYgcG0gLSBTU04gLSBDcmVhdGUgY2xhc3MgZm9yIGhhdmVDaGFuZ2VzXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxudmFyIENoYW5nZU1vbml0b3JfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2V0SXRlbUNoYW5nZWRfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMDkvMjAxOSAwODowOCBhbSAtIFNTTiAtIEFkZGVkIG1vbml0b3JDaGFuZ2VfU1NOXHJcbiAgICB2YXIgbW9uaXRvckNoYW5nZV9TU04gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA4OjI4IGFtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBidXR0b25zLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA6MTggYW0gLSBTU04gLSBBZGRlZCBlbWFpbCBhbmQgcGFzc3dvcmQgKGxvZ2luKVxyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlYXJjaCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZW1haWwnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDAyOjI3IHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBpZiAob2JqMS5ub0NoYW5nZU1vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iajEuaWQgJiYgIW9iajEubmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfdjAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXM6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJywgX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdDaGFuZ2VNb25pdG9yU2VydmljZScsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2RvU2V0SGF2ZUNoYW5nZSA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNldHVwTW9uaXRvcjogX3NldHVwTW9uaXRvcixcclxuICAgICAgICAgICAgICAgIGdldEhhdmVDaGFuZ2VzOiBfZ2V0SGF2ZUNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICByZXNldDogX3Jlc2V0LFxyXG4gICAgICAgICAgICAgICAgZG9TZXRIYXZlQ2hhbmdlOiBfZG9TZXRIYXZlQ2hhbmdlXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6MjkgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAxXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuXHJcbi8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XVxyXG52YXIgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgcGFnZVVwZGF0ZXJfTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQYWdlVXBkYXRlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIHBhZ2VVcGRhdGVyX01vZHVsZS5mYWN0b3J5KCdQYWdlVXBkYXRlclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfdGltZWxvZ19pbmRleCA9IGZ1bmN0aW9uIChpZF90ZW1wLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ19pbmRleDogX3RpbWVsb2dfaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9O1xyXG4gICAgIFxyXG4iLCLvu79cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG4vLyAxMi8yOC8yMDE5IDEwOjAgcG0gLSBTU04gLSBBZGRpbmcgQXBwSW5zaWdodHNfVXRpbCBcclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuIFxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgICBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDE5MTIyOF8yMjI4XCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTIyOC0yMjEwXCIsIE1lc3NhZ2U6IFwiZG9TZXR1cFwiIH0pO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZScsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigncmVzdG9yZVByZXZpb3VzUGFnZUFuZFRhc2tRdWV1ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZUFuZFRhc2tRdWV1ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l0ZV9UYXNrX1F1ZXVlX0xpc3QnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVBvc3RlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgLy99O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXN0b3JlUG9zLCAzMDApO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJlbGF0aXZlUGF0aCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MDQ2ODYvZ2V0LXJlbGF0aXZlLXBhdGgtb2YtdGhlLXBhZ2UtdXJsLXVzaW5nLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyguK1xcd1xcLykoLispLywgXCIvJDJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzYXZlVXJsKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeVBvc3RlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGFscmVhZHlQb3N0ZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbUluZm8gPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zY3JlZW5YKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtSW5mbyA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WTogZS5jbGllbnRZLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1ggPSB3aW5kb3cuc2Nyb2xsWDtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID0geyB1cmw6IGdldFJlbGF0aXZlUGF0aCgpLCBwb3NYOiBwb3NYLCBwb3NZOiBwb3NZLCBlbGVtZW50OiBlbGVtSW5mbyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnB1c2goVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1kgPSBwb3NZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLmVsZW1lbnQgPSBlbGVtSW5mbztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJsc1tVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleF0gPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRfVVJMX1RyYWNrX1JlY29yZChjcmVhdGVJZk5vdEZvdW5kOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX3RlbXA6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVJMX1RyYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFja190ZW1wID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZUlmTm90Rm91bmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfdGVtcCA9ICd7XCJ1cmxzXCI6W119JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFjayA9IEpTT04ucGFyc2UoVVJMX1RyYWNrX3RlbXApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZ2V0UmVsYXRpdmVQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGN1cnJlbnRJbmRleCA9IDA7IGN1cnJlbnRJbmRleCA8IFVSTF9UcmFjay51cmxzLmxlbmd0aDsgY3VycmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XS51cmwgPT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkOiBjdXJyZW50UmVjb3JkLCBVUkxfVHJhY2s6IFVSTF9UcmFjaywgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzdG9yZVBvcygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjdXJyZW50UmVjb3JkLnBvc1ksIGxlZnQ6IGN1cnJlbnRSZWNvcmQucG9zWCwgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpZ2hsaWdodENsaWNrU291cmNlKCk7IH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgVVJMX1RyYWNrLnVybHMuc3BsaWNlKGN1cnJlbnRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBieXBhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBIFwiLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxlY3RlZEVsZW1lbnQubm9kZU5hbWUudG9VcHBlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcIm5nLWNsaWNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcImhyZWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFieXBhc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuVGVtcCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS5wcmVwZW5kVG8oc2VsZWN0ZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLnRleHQoJChzZWxlY3RlZEVsZW1lbnQpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLmFkZENsYXNzKCdjc3NIaWxpZ2h0MTAxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmVtb3ZlQWRkZWRDbGFzcyhzcGFuVGVtcCk7IH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMuc3BsaWNlKFVSTF9UcmFja19SZWYuY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFkZGVkQ2xhc3Mob2JqUmVmKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQob2JqUmVmKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvdXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUuaHRtbFwiLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDEwLzAxLzIwMTkgMDk6NDcgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDAzXSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHJcblxyXG4gICAgYXBwSW5zaWdodHM6IHtcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzJ1xyXG4gICAgICAgIC8vIDEwLzMxLzIwMTkgMDM6NTggYW0gLSBTU04gLSBBZGRlZFxyXG5cclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMDcvMjAxOSAwODozNCBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgXCJJbnN0cnVtZW50YXRpb25LZXlcIjogXCJkZWxldGVkXCIsIFwiZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzXCIgLFxyXG4gICAgICAgIC8vIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAtIFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCJcclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCIsXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn07Iiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG4vLyAwOC8zMS8yMDIwIDA0OjU0IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwNF0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2NvbnNvbGVfbW9kZWwuZC50c1wiIC8+XHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjI5IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwMl0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgIGRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpIHtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBhIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuXHJcbiAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLmVhY2goKG5keCwgb2JqMSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXZJZCA9ICQob2JqMSkuYXR0cignYXJpYS1jb250cm9scycpO1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkNvdW50PSAgICAkKFwiI1wiICsgZGl2SWQpLmNoaWxkcmVuKCkubGVuZ3RoIDtcclxuICBcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50PT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcyggJ2NvbG9yJywgJ29yYW5nZScgKTtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcygnZm9udC1zaXplJywgJzI0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPHNwYW4vPlwiKS50ZXh0KCQob2JqMSkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIC8vIDAxLzAyLzIwMjAgMDQ6MDYgcG0gLSBTU04gLSBNb3ZlZCBmcm9tICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdbc3NuLWNtZD1yZXR1cm5Ub0NhbGxlckxpbmtdJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5Ub0NhbGxlcktleSA9ICQoXCIjcmV0dXJuVG9DYWxsZXJLZXlcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgICAgIC8vIDA5LzA0LzIwMjAgMDE6NTUgYW0gLSBTU04gLSBbMjAyMDA5MDQtMDE1NV0gYXBwbHkgdG8gZGl2cyBvbmx5IC0gV2FzIGhpZGluZyBtb2JpbGUgaGFtYmVyZ2VyIG1lbnUuXHJcbiAgICAgICAgICAgICQoXCJhW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcihjYWxsZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTI4IC0gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yIFsnICsgY2FsbGVyICsgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ3ByZScpLmVhY2goZnVuY3Rpb24gKGFhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGF1dG9Db2xsYXBzZSA9ICQodGhpcykuYXR0cignc3NuLWF1dG8tY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdXRvQ29sbGFwc2UgPT09IFwiZmFsc2VcIikgeyByZXR1cm47fTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBCZWdpblxyXG5cclxuICAgICAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgICAgICBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICAgICAgZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gaW5wdXQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiAobWF0Y2ggPSB2YWx1ZS5tYXRjaCh0aGlzLmlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRba2V5XSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAgICBzZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICAvLyAgICBzZXRUaW1lb3V0KHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgLy8gICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIC8vICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG5cclxuICAgICAgICAvL307XHJcblxyXG4gICAgICAgIC8vfSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxubGV0IHNpdGVfaW5zdGFuY2UgPSBuZXcgc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzKCk7XHJcbmV4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5cclxuLy8gMDEvMDIvMjAyMCAwNDoyMCBwbSAtIFNTTiAtIFsyMDIwMDEwMi0xNjExXSAtIFswMDNdIC0gU2VwZXJhdGUgQW5ndWxhckpTIHV0aWxpdHkgZnJvbSBnZW5lcmFsIERPTSB1dGlsaXRpZXNcclxuLy8gT2YgY291cnNlIHdlIGFyZSBjYWxsaW5nIHV0aWxpdHkgbW9yZSB0aGFuIG9uY2UuIE5lZWQgdG8gY2FsbCBmdW5jdGlvbnMgd2hlcmUgdGhleSBhcHBseS5cclxuXHJcblxyXG5cclxuaWYgKHR5cGVvZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSkgIT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgIHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSAwO1xyXG59XHJcblxyXG53aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID0gd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSArIDE7XHJcblxyXG5cclxuaWYgKHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPT09IDEpIHtcclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEyLzMwLzIwMTkgMDE6MjMgYW0gLSBTU04gLSBBZGQgdGltZW90XHJcbiAgICAgICAgLy8gc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7IH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoJzIwMjAwMTAyLTE1MzQtMicpO1xyXG5cclxuICAgICAgICAgICAgLy8gMDgvMzEvMjAyMCAwNDozMiBhbSAtIFNTTiAtIFsyMDIwMDgzMS0wNDE3XSAtIFswMDNdIC0gRGlzYWJsZSBjb2xsYXBzYWJsZSBkaXZzIHdpdGggbm8gY29udGVudFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaXRlX2luc3RhbmNlLmRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpLCAxMDAwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAsIDIwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCdldmVudHMnKVt0eXBlXTtcclxuXHJcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoLTEgIT09ICQuaW5BcnJheShmbiwgZGF0YSkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjI5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwMl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MzEgLSBqb2JfVGltZWxvZ19zZXRGaWx0ZXIgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQgLSBLZXlVcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKChlKSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMiAtIHNldHVwJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9