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
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack
var ngApplicationName = 'demoSites_Index';



_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup(ngApplicationName);
_demoSites_Index__WEBPACK_IMPORTED_MODULE_2__["ssn_devsite_angular_module_instance"].ssn_devsite_angular_module;
_DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__["demosites_index_p1_instance"]; // 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript

 // 11/23/2019 08:53 am - SSN 


_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_4__["RestorePreviousPageState_instance"].doSetup(ngApplicationName);
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__["AppInsights_Util"].doSetup();
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__["AppInsights_Util"].logEvent("DemoSites_Index_Main", {
  SourceCode: "20191001-1132-C2",
  Message: "Loading DemoSites_Index_Main"
});

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
    // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch

    self.SearchText_KO = ko.observable(); // 08/21/2019 12:16 pm - SSN - [20190821-1210] - [003] - SearchResultsFeedback_KO

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
    }; // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch


    this.ressetSearchForm = function () {
      self.SearchResultsFeedback_KO('');
      self.SearchResultsFeedback_ClassName_KO("");
      self.SearchText_KO("");
      self.loadData();
    }; // 08/12/2019 05:57 am - SSN - [20190812-0515] - [005] - Apply fulltext search
    // https://stackoverflow.com/questions/16245905/fetching-or-sending-data-from-a-form-using-knockout-js
    //self.onSubmit = function () {


    this.onSubmit = function () {
      var searchText = self.SearchText_KO();

      if (searchText === undefined) {
        self.SearchResultsFeedback_KO('Input is required for search.');
        self.SearchResultsFeedback_ClassName_KO("alert-warning");
        return;
      } else {
        searchText = searchText.trim();

        if (searchText === "") {
          self.SearchResultsFeedback_KO('Input is required for search. (2)');
          self.SearchResultsFeedback_ClassName_KO("alert-warning");
          return;
        }
      } //var data = JSON.stringify(
      //    {
      //        SearchText: self.SearchText_KO()
      //    }); // prepare request data
      // 09/10/2019 04:20 am - SSN - [20190910-0147] - [009] - WARNING: Tried to load angular more than once.
      // "SearchText": self.SearchText_KO()
      // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch


      var data_pre = {
        // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch
        "SearchText": self.SearchText_KO()
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
          setTimeout(function () {
            return _js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].prefixPreWithShowHideAnchor('20200102-1533');
          }, 2000);
        } else {
          // 08/21/2019 01:48 pm - SSN - [20190821-1348] [001] - Added
          setTimeout(_js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].showCollapsedDivs, 2000);
        }
      }).fail(function (response) {
        // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch
        console.error(response);
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
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']); // 12/07/2019 07:12 am - SSN - [20191207-0704] - [002] - AngularJS - Routing - Authentication
  // Moved  $routeProvider code to Routing_Config.ts
  // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // = function

  var demoSiteIndexController_101 = function demoSiteIndexController_101($scope, $http, $window, dataService) {
    $scope.Title = "Title set in Angular controller."; // $scope.data = [];

    $scope.data = dataService;
    $scope.isBusy2 = true; //    $http.get('./api/demositesapi')

    dataService.getDevSites().then(function (result) {
      $scope.data_local = ko.observable($scope.data.devSites());
    }, function (ex) {
      console.error("20190910-0101");
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
        console.log(response);
      }, function (error) {
        console.error("20190908-0628-E - demoSites_Index - updateDevSite Error");
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
  }; // 04/15/2021 11:33 am - SSN - Adding projcet tags


  ssn_devsite_angular_module.directive('devSiteTagsCompiler', function ($compile, $timeout) {
    return {
      restrict: 'A',
      link: function link(scope, element, attrs) {
        $timeout(function () {
          console.log('Firinging compile - start');
          $compile(element.contents())(scope);
          console.log('Firinging compile - end');
        }, 3000);
      }
    };
  }); // 04/15/2021 11:33 am - SSN - Adding projcet tags

  ssn_devsite_angular_module.directive('devSiteTags', function () {
    return {
      templateUrl: './js/devsiteTags/dev-site-tags.html',
      scope: true,
      controller: function controller($scope) {
        $scope.addingDevSiteTag = false;
        $scope.removingDevSiteTag = false;
        $scope.theTags = ["C#", "ASP.NET", "Entity Framework"];

        $scope.addDevSiteTag = function () {
          $scope.addingDevSiteTag = true;
        };

        $scope.saveNewDevsiteTag = function () {
          $scope.theTags.push($scope.newDevSiteTag);
          $scope.addingDevSiteTag = false;
        };

        $scope.cancelNewDevsiteTag = function () {
          $scope.addingDevSiteTag = false;
        };

        $scope.removeDevSiteTag = function (_devSiteTagToRemove) {
          $scope.removingDevSiteTag = true;
          $scope.devSiteTagToRemove = _devSiteTagToRemove;
        };

        $scope.confirmedRemoveDevSiteTag = function () {
          $scope.theTags = $scope.theTags.filter(function (t) {
            return t !== $scope.devSiteTagToRemove;
          });
          $scope.removingDevSiteTag = false;
          $scope.devSiteTagToRemove = null;
        };

        $scope.cancelRemoveDevSiteTag = function () {
          $scope.removingDevSiteTag = false;
          $scope.devSiteTagToRemove = null;
        };
      }
    };
  });
  return {
    ssn_devsite_angular_module: ssn_devsite_angular_module
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
      $(document).ready(function () {
        console.log('20210414-0904-A');
        $('.navbar li a').bind('contextmenu click', function (e) {
          console.log('20210414-1007 - context menu');
          console.log(e);
        });
        $('.navbar li a').bind('mousedown', function (e) {
          switch (e.which) {
            case 1:
              console.log('Left mouse button is pressed');
              break;

            case 2:
              console.log('Middle mouse button is pressed');
              break;

            case 3:
              console.log('Right mouse button is pressed   208  ');
              break;

            default:
              alert('Nothing');
          } //if ($(this.mobileNavbarMenuOption.nativeElement).is(':visible')) {
          //    $(this.mobileNavbarMenuOption.nativeElement).trigger('click');
          //}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0RlbW9TaXRlc19pbmRleF9tYWluLnRzIiwid2VicGFjazovLy8uL0RlbW9TaXRlc19pbmRleF9wMS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9kZW1vU2l0ZXNfSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLDBDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BoQkEseUIiLCJmaWxlIjoiYnVuZGxlX0RlbW9TaXRlc19pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9hZGREZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iIFsyMDE5MDkzMC0xOTA4XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIyLzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE4XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG4gICAgICAgICAgICB2YXIgX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9Qcm9qZWN0QVBJL3JlZnJlc2hyZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHByb2plY3Qgc2VhcmNoIHJlY29yZCAgWzIwMTkxMTIyLTE2MDhdIFsnICsgaWQgKyAnXSBbJyArIHNlcnZpbmdQYWdlICsgJ10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV2U2l0ZXM6IGtvLm9ic2VydmFibGUoX2RldlNpdGVzKSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBhZGREZXZTaXRlOiBfYWRkRGV2U2l0ZSxcclxuICAgICAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDQgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAyXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGV2U2l0ZTogX3VwZGF0ZURldlNpdGUsXHJcblxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0VGltZUxvZzogX2luc2VydFRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRUaW1lbG9nOiBfZ2V0VGltZWxvZyxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRpbWVMb2c6IF9hZGRPclVwZGF0ZVRpbWVMb2csXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzOiBfZ2V0Sm9icyxcclxuICAgICAgICAgICAgICAgIGdldEpvYl9TdGF0dXNlczogX2dldEpvYl9TdGF0dXNlcyxcclxuICAgICAgICAgICAgICAgIGdldEpvYjogX2dldEpvYixcclxuICAgICAgICAgICAgICAgIHRpbWVsb2dSZWZyZXNoUmVjb3JkOiBfVGltZWxvZ1JlZnJlc2hSZWNvcmQsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQ6IF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmRcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDA3OjE0IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwOV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG4gXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vanMvc2l0ZSc7XHJcblxyXG5sZXQgbmdBcHBsaWNhdGlvbk5hbWUgPSAnZGVtb1NpdGVzX0luZGV4JztcclxuXHJcbmltcG9ydCB7IGRlbW9zaXRlc19pbmRleF9wMV9pbnN0YW5jZSAgfSBmcm9tIFwiLi9EZW1vU2l0ZXNfaW5kZXhfcDFcIlxyXG5cclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuL0RhdGFTZXJ2aWNlcyc7XHJcblxyXG5pbXBvcnQgeyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSB9IGZyb20gJy4vZGVtb1NpdGVzX0luZGV4JztcclxuXHJcbmRhdGFTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUgKTtcclxuXHJcbnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlO1xyXG5cclxuLy8gMTAvMDEvMjAxOSAxMDoxNSBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDZdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDg6NTMgYW0gLSBTU04gXHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnO1xyXG5cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoKTtcclxuXHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfSW5kZXhfTWFpblwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEwMDEtMTEzMi1DMlwiLCBNZXNzYWdlOiBcIkxvYWRpbmcgRGVtb1NpdGVzX0luZGV4X01haW5cIiB9KTtcclxuXHJcblxyXG4gICIsIu+7v1xyXG4vLyAwNi8wNi8yMDE5IDA1OjQ0IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBpbmRleF9wMS5jc2h0bWxcclxuXHJcbi8vIDA4LzIxLzIwMTggMDI6NDYgYW0gLSBTU04gLSBDb3BpZWQgLSBCZWdpblxyXG4vLyAwOC8yMS8yMDE4IDAyOjQ2IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gQzogXFxTYW1zX1Byb2plY3RzXFxQbHVyYWxTaWdodFxcaHRtbDUgLSBsaW5lIC0gb2YgLSBidXNpbmVzcyAtIGFwcGxpY2F0aW9uc1xcZFxcZGVtb3NcXENvZGVkSG9tZXMuV2ViXFxWaWV3c1xcSG9tZXNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPiBcclxuXHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL2pzL3NpdGUnO1xyXG5cclxuXHJcblxyXG52YXIgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gS25vY2tvdXQgcmVsYXRlZFxyXG5cclxuXHJcbiAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAwOC8xMi8yMDE5IDA1OjU4IGFtIC0gU1NOIC0gWzIwMTkwODEyLTA1MTVdIC0gWzAwNl0gLSBBcHBseSBmdWxsdGV4dCBzZWFyY2hcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA0OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwOV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgLy8gU2luY2UgYm91bmQgdG8gY29udHJvbCwgaXQgZGlzcGxheXMgdGhlIG9ic2VydmFibGUgYXMgb2JqZWN0W29iamVjdF0uIFRha2Ugb3V0LlxyXG5cclxuICAgICAgICAvLyAxMi8yMC8yMDE5IDA1OjA2IHBtIC0gU1NOIC0gWzIwMTkxMjIwLTE3MDZdIEFkZGluZyByZXNldFNlYXJjaFxyXG4gICAgICAgIHNlbGYuU2VhcmNoVGV4dF9LTyA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMTI6MTYgcG0gLSBTU04gLSBbMjAxOTA4MjEtMTIxMF0gLSBbMDAzXSAtIFNlYXJjaFJlc3VsdHNGZWVkYmFja19LT1xyXG5cclxuICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTyA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfQ2xhc3NOYW1lX0tPID0ga28ub2JzZXJ2YWJsZSgpO1xyXG4gICAgICAgIHNlbGYucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yX0RvbnRDYWxsX0tPID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMDc6MTAgcG0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDA3XSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8vLy8vdGhpcy5jdXJyZW50SXRlbSA9IHt9O1xyXG4gICAgICAgIHNlbGYuY3VycmVudEl0ZW0gPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgICAgIHNlbGYuZXJyb3JNZXNzYWdlID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgICAgICAvLyAwNi8wNi8yMDE5IDA1OjQ0IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBpbmRleF9wMS5jc2h0bWwgLSBVcGRhdGVcclxuICAgICAgICAvLyAgdGhpcy5kZXZTaXRlc0pTT04gPSBrby5vYnNlcnZhYmxlQXJyYXkoQEh0bWwuUmF3KE1vZGVsLmRldlNpdGVzSlNPTikpO1xyXG5cclxuICAgICAgICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNi8wNi8yMDE5IDA1OjQ0IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBpbmRleF9wMS5jc2h0bWwgLSBVcGRhdGVcclxuICAgICAgICB0aGlzLmxvYWREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wOS8yMDE5IDEwOjM1IHBtIC0gU1NOIC0gWzIwMTkwOTA5LTIxMzZdIC0gWzAwNV0gLSBTZWxlY3QgdG9wIDE1XHJcblxyXG4gICAgICAgICAgICAvLyAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaS90b3A/cmVjb3JkQ291bnQ9MTVcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldlNpdGVzSlNPTi5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMTYvMjAxOSAwNDoyNSBwbSAtIFNTTiAtIFsyMDE5MDgxNi0xNjI1XSAtIFswMDFdIC0gQ29ycmVjdCBsb2dpYyBmb3IgZ2V0dGluZyByZWNvcmQgY291bnQgdG8gc2hvdyBubyBzZWFyY2ggcmVzdWx0cyBtZXNzYWdlXHJcblxyXG5cclxuICAgICAgICB0aGlzLmdldFJlY29yZENvdW50ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IHJlY29yZENvdW50OiBudW1iZXIgPSBzZWxmLmRldlNpdGVzSlNPTigpLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gc2VsZi5kZXZTaXRlc0pTT05cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZWNvcmRDb3VudDtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDA5XSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8gUmVuYW1lZCBkZWwtY29uZmlybSBkZWxfY29uZmlybV9wMVxyXG4gICAgICAgIHRoaXMucmVxdWVzdERlbENvbmZpcm0gPSBmdW5jdGlvbiAoaXRlbVRvRGVsZXRlKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRJdGVtKGl0ZW1Ub0RlbGV0ZSk7XHJcbiAgICAgICAgICAgICQoJyNkZWxfY29uZmlybV9wMScpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zaG93Sm9iID0gZnVuY3Rpb24gKGRldlNpdGVJRCkge1xyXG5cclxuICAgICAgICAgICAgJCgnI3Nob3ctam9iJykubW9kYWwoKTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1Ub0RlbGV0ZSA9IGtvLnRvSlModm0uY3VycmVudEl0ZW0pO1xyXG4gICAgICAgICAgICAkKCcjZGVsLWNvbmZpcm0nKS5tb2RhbCgnaGlkZScpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2hlY2tJZmNhbGxpbmdjbWQgPSBmdW5jdGlvbiAoc2l0ZVVybCkge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nU3RhcnRzV2l0aChzaXRlVXJsLCAnY21kJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2l0ZVVybFdpdGhvdXRDTUQgPSBmdW5jdGlvbiAoc2l0ZVVybCkge1xyXG4gICAgICAgICAgICBpZiAoc3RyaW5nU3RhcnRzV2l0aChzaXRlVXJsLCAnY21kJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzaXRlVXJsLnN1YnN0cmluZyg0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2l0ZVVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMi8yMC8yMDE5IDA1OjA2IHBtIC0gU1NOIC0gWzIwMTkxMjIwLTE3MDZdIEFkZGluZyByZXNldFNlYXJjaFxyXG5cclxuICAgICAgICB0aGlzLnJlc3NldFNlYXJjaEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTygnJyk7XHJcbiAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyhcIlwiKTtcclxuICAgICAgICAgICAgc2VsZi5TZWFyY2hUZXh0X0tPKFwiXCIpO1xyXG4gICAgICAgICAgICBzZWxmLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAwOC8xMi8yMDE5IDA1OjU3IGFtIC0gU1NOIC0gWzIwMTkwODEyLTA1MTVdIC0gWzAwNV0gLSBBcHBseSBmdWxsdGV4dCBzZWFyY2hcclxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI0NTkwNS9mZXRjaGluZy1vci1zZW5kaW5nLWRhdGEtZnJvbS1hLWZvcm0tdXNpbmcta25vY2tvdXQtanNcclxuICAgICAgICAvL3NlbGYub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBzZWFyY2hUZXh0ID0gc2VsZi5TZWFyY2hUZXh0X0tPKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlYXJjaFRleHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08oJ0lucHV0IGlzIHJlcXVpcmVkIGZvciBzZWFyY2guJyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRleHQgPSBzZWFyY2hUZXh0LnRyaW0oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoVGV4dCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCdJbnB1dCBpcyByZXF1aXJlZCBmb3Igc2VhcmNoLiAoMiknKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy92YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAvLyAgICB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICBTZWFyY2hUZXh0OiBzZWxmLlNlYXJjaFRleHRfS08oKVxyXG4gICAgICAgICAgICAvLyAgICB9KTsgLy8gcHJlcGFyZSByZXF1ZXN0IGRhdGFcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xMC8yMDE5IDA0OjIwIGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwOV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgICAgIC8vIFwiU2VhcmNoVGV4dFwiOiBzZWxmLlNlYXJjaFRleHRfS08oKVxyXG5cclxuICAgICAgICAgICAgLy8gMTIvMjAvMjAxOSAwNTowNiBwbSAtIFNTTiAtIFsyMDE5MTIyMC0xNzA2XSBBZGRpbmcgcmVzZXRTZWFyY2hcclxuICAgICAgICAgICAgdmFyIGRhdGFfcHJlID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gMTIvMjAvMjAxOSAwNTowNiBwbSAtIFNTTiAtIFsyMDE5MTIyMC0xNzA2XSBBZGRpbmcgcmVzZXRTZWFyY2hcclxuICAgICAgICAgICAgICAgIFwiU2VhcmNoVGV4dFwiOiBzZWxmLlNlYXJjaFRleHRfS08oKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhX3ByZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8kLnBvc3QoXCIvZWNoby9qc29uXCIsIGRhdGEsIGZ1bmN0aW9uIChyZXNwb25zZSkgLy8gc2VuZHMgJ3Bvc3QnIHJlcXVlc3RcclxuICAgICAgICAgICAgLy97XHJcbiAgICAgICAgICAgIC8vICAgIC8vIG9uIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgLy8gICAgc2VsZi5yZXNwb25zZUpTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvL30pXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kLnBvc3QoXCIvYXBpL2RlbW9zaXRlc2FwaS9TZWFyY2hcIiwgZGF0YSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBzZWxmLmRldlNpdGVzSlNPTi5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgLy8gICAgc2VsZi5kZXZTaXRlc0pTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL2RlbW9zaXRlc2FwaS9TZWFyY2hcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldlNpdGVzSlNPTi5yZW1vdmVBbGwoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDE5IDEyOjE0IHBtIC0gU1NOIC0gWzIwMTkwODIxLTEyMTBdIC0gWzAwMl0gLSBTZWFyY2hSZXN1bHRzRmVlZGJhY2tfS09cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCdTZWFyY2ggcmV0dXJuZWQgbm8gcmVjb3Jkcy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yX0RvbnRDYWxsX0tPKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHV0aWwuc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoJzIwMjAwMTAyLTE1MzMnKSAsIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSAtIFNTTiAtIFsyMDE5MDgyMS0xMzQ4XSBbMDAxXSAtIEFkZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh1dGlsLnNpdGVfaW5zdGFuY2Uuc2hvd0NvbGxhcHNlZERpdnMsIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gMTIvMjAvMjAxOSAwNTowNiBwbSAtIFNTTiAtIFsyMDE5MTIyMC0xNzA2XSBBZGRpbmcgcmVzZXRTZWFyY2hcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5nZXRDbGFzc0ZvckRlbW9TdGF0ZSA9IGZ1bmN0aW9uIChmb3JEZW1vX3YyKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRDbGFzcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGZvckRlbW9fdjIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJyBmb3JEZW1vX1llcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xhc3MgPSAnZm9yRGVtb19Obyc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2xhc3MgPSAnZm9yRGVtb19VbmRlY2lkZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFwic2l0ZURpdlwiICsgXCIgXCIgKyBzZWxlY3RlZENsYXNzO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcblxyXG4gICAga28uYXBwbHlCaW5kaW5ncyh2bSk7XHJcblxyXG4gICAgdm0ubG9hZERhdGEoKTtcclxuXHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxudmFyIHN0cmluZ1N0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc3RyaW5nLCBzdGFydHNXaXRoKSB7XHJcbiAgICBzdHJpbmcgPSBzdHJpbmcgfHwgXCJcIjtcclxuICAgIGlmIChzdGFydHNXaXRoLmxlbmd0aCA+IHN0cmluZy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc3RhcnRzV2l0aC5sZW5ndGgpID09PSBzdGFydHNXaXRoO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA3OjE2IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMF0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuZXhwb3J0IHsgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuXHJcblxyXG5cclxudmFyIEFwcEluc2lnaHRzX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBlbnZpcm9ubWVudC5hcHBJbnNpZ2h0cy5pbnN0cnVtZW50YXRpb25LZXlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYXZlSW5zdHJ1bWVudGF0aW9uS2V5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnLmluc3RydW1lbnRhdGlvbktleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmICghQXBwSW5zaWdodHMuY29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKHRoaXMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEwLzExLzIwMTkgMDQ6NTQgcG0gLSBTU04gLSBBZGRlZCBjaGVja1xyXG4gICAgICAgICAgICBpZiAoaGF2ZUluc3RydW1lbnRhdGlvbktleSgpKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAoY29uZmlnKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvVGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgcGFnZSB2aWV3ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgXCJGaXJzdFBhZ2UtMjAxOTEwMDEtMTAxNVwiLCAvKiAob3B0aW9uYWwpIHBhZ2UgbmFtZSAqL1xyXG4gICAgICAgICAgICBudWxsLCAvKiAob3B0aW9uYWwpIHBhZ2UgdXJsIGlmIGF2YWlsYWJsZSAqL1xyXG4gICAgICAgICAgICB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgLyogKG9wdGlvbmFsKSBkaW1lbnNpb24gZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICB7IG1lYXN1cmVtZW50MTogMSB9LCAvKiAob3B0aW9uYWwpIG1ldHJpYyBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIDEyMyAvKiBwYWdlIHZpZXcgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgZXZlbnQgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KFwiVGVzdEV2ZW50LTIwMTkxMDAxLTEwMTZcIiwgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIHsgbWVhc3VyZW1lbnQxOiAxIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGxvZ1BhZ2VWaWV3ID0gZnVuY3Rpb24gKG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55LCBkdXJhdGlvbj86IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcobmFtZSwgdXJsLCBwcm9wZXJ0aWVzKTsvLywgbWVhc3VyZW1lbnRzLCBkdXJhdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFdmVudCA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiBcclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uOiBFcnJvciwgcHJvcHM/OiBhbnksIGhhbmRsZWRBdD86IHN0cmluZykge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbiwgaGFuZGxlZEF0LCBwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXAsXHJcbiAgICAgICAgZG9UZXN0OiBkb1Rlc3QsXHJcbiAgICAgICAgbG9nUGFnZVZpZXc6IGxvZ1BhZ2VWaWV3LFxyXG4gICAgICAgIGxvZ0V2ZW50OiBsb2dFdmVudCxcclxuICAgICAgICBsb2dFeGNlcHRpb246IGxvZ0V4Y2VwdGlvblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzIyLzIwMTkgMDk6NDEgcG0gLSBTU04gLSBDcmVhdGVkIHRvIHJlc3RvcmUgcGFnZSBvbiBoaXR0aW5nIHRoZSBiYWNrIGJ1dHRvbiBvciByZWNhbGxpbmcgdGhlIHBhZ2UuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuLy8gMTIvMjgvMjAxOSAxMDowIHBtIC0gU1NOIC0gQWRkaW5nIEFwcEluc2lnaHRzX1V0aWwgXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5cclxudmFyIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiBcclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG5cclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfMjAxOTEyMjhfMjIyOFwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEyMjgtMjIxMFwiLCBNZXNzYWdlOiBcImRvU2V0dXBcIiB9KTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IGFscmVhZHlQb3N0ZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAmJiBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnlwYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQSBcIi50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJuZy1jbGlja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJocmVmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnlwYXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS5hZGRDbGFzcygnY3NzSGlsaWdodDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlbW92ZUFkZGVkQ2xhc3Moc3BhblRlbXApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG5cclxuLy8gMDkvMjEvMjAxOSAwODowMCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTFdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vanMvRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5cclxudmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdkZW1vU2l0ZV9pbmRleCcsIFwiZGVtb1NpdGVzX0luZGV4XCIsIFsnbmdSb3V0ZSddKTtcclxuXHJcbiAgICAvLyAxMi8wNy8yMDE5IDA3OjEyIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwMl0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuICAgIC8vIE1vdmVkICAkcm91dGVQcm92aWRlciBjb2RlIHRvIFJvdXRpbmdfQ29uZmlnLnRzXHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyA9IGZ1bmN0aW9uXHJcbiAgICB2YXIgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICR3aW5kb3csIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5UaXRsZSA9IFwiVGl0bGUgc2V0IGluIEFuZ3VsYXIgY29udHJvbGxlci5cIjtcclxuXHJcblxyXG4gICAgICAgIC8vICRzY29wZS5kYXRhID0gW107XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhU2VydmljZTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzQnVzeTIgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAgICAkaHR0cC5nZXQoJy4vYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGV2U2l0ZXMoKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFfbG9jYWwgPSBrby5vYnNlcnZhYmxlKCRzY29wZS5kYXRhLmRldlNpdGVzKCkpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiMjAxOTA5MTAtMDEwMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudHV0b3JpYWxzcGxhbmUuY29tL2FuZ3VsYXJqcy11cGRhdGUtdGFibGUtcm93L1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplLlxyXG4gICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBhbmd1bGFyLmNvcHkoY29udGVudCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8kc2NvcGUuZWRpdGFibGVyb3cgPSBjb250ZW50O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlRGF0YSA9IGZ1bmN0aW9uIChpbmR4KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRoZUluZGV4ID0gJHNjb3BlLmRhdGFfbG9jYWwoKS5maW5kSW5kZXgociA9PiByLmlkID09PSAkc2NvcGUuZWRpdGFibGVyb3cuaWQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGFfbG9jYWwoKVt0aGVJbmRleF0gPSAkc2NvcGUuZWRpdGFibGVyb3c7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YS51cGRhdGVEZXZTaXRlKCRzY29wZS5lZGl0YWJsZXJvdylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIyMDE5MDkwOC0wNjI4LUUgLSBkZW1vU2l0ZXNfSW5kZXggLSB1cGRhdGVEZXZTaXRlIEVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnJlc2V0KCk7XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9IFtdO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAkc2NvcGUubG9hZFRlbXBsYXRlID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250ZW50LmlkID09PSAkc2NvcGUuZWRpdGFibGVyb3cuaWQpIHJldHVybiAnZWRpdE1vZGUnO1xyXG4gICAgICAgICAgICBlbHNlIHJldHVybiAndmlld01vZGUnO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8wNi8yMDE5IDA1OjE5IGFtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMV1cclxuXHJcbiAgICAgICAgLy8gMDkvMDgvMjAxOSAxMjowMSBhbSAtIFNTTiAtIFsyMDE5MDkwOC0wMDAxXSAtIFswMDFdIC0gQ29uY3VycmVuY3lcclxuICAgICAgICAvLyBDaGVjayB3ZSBhcmUgbm90IGh5cGVybGluayBpbnZhbGlkIGFkZHJlc3Nlc1xyXG5cclxuICAgICAgICAkc2NvcGUuaXNWYWxpZFVybCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKCFjb250ZW50IHx8IGNvbnRlbnQuc2l0ZVVybCA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cmxUb1Rlc3QgPSBjb250ZW50LnNpdGVVcmwudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGMxID0gdXJsVG9UZXN0LnN1YnN0cigwLCA3KTtcclxuICAgICAgICAgICAgbGV0IGMyID0gdXJsVG9UZXN0LnN1YnN0cigwLCA4KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkY2hlbWFzID0gXCJ8aHR0cDovL3xodHRwczovL3xcIjtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWxpZE9wdGlvbnMgPSAwO1xyXG5cclxuICAgICAgICAgICAgdmFsaWRPcHRpb25zICs9ICh2YWxpZGNoZW1hcy5pbmRleE9mKGMxKSA9PSAxKSA/IDEgOiAwO1xyXG4gICAgICAgICAgICB2YWxpZE9wdGlvbnMgKz0gKHZhbGlkY2hlbWFzLmluZGV4T2YoYzIpID09IDEpID8gMSA6IDA7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKHZhbGlkT3B0aW9ucyA+IDApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMDU6MzEgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgICRzY29wZS5zZXRUYWJsZVJvd0NsYXNzID0gZnVuY3Rpb24gKGluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggJSAyID09IDAgPyAnZXZlblJvdycgOiAnb2RkUm93JztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcihcImRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMVwiLCBbJyRzY29wZScsICckaHR0cCcsICckd2luZG93JywgJ2RhdGFTZXJ2aWNlJywgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXSk7XHJcblxyXG4gICAgLy8gMDkvMjEvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuICAgIC8vIGZ1bmN0aW9uIGRldlNpdGVVcGRhdGVDb250cm9sbGVyICBcclxuICAgIHZhciBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkd2luZG93LCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICAgICAkc2NvcGUuZGV2U2l0ZVJlY29yZCA9IHtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnNhdmUgPSBmdW5jdGlvbiAoZm9ybVNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIC8vYWxlcnQoXCJ0ZXN0IHN1Ym1pdFwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDI6MjAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDAyXSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICAvLyBBZGRlZCBjYXN0XHJcbiAgICAgICAgICAgIHZhciBmOiBIVE1MRm9ybUVsZW1lbnQgPSA8YW55PiQoZm9ybVNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZi52YWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnSW52YWxpZCBmb3JtLicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFsZXJ0KCRzY29wZS5kZXZTaXRlUmVjb3JkLnNpdGVUaXRsZSk7XHJcbiAgICAgICAgICAgIGFsZXJ0KCRzY29wZS5kZXZTaXRlUmVjb3JkLnNvbHV0aW9uX0RldGFpbHMpO1xyXG5cclxuICAgICAgICAgICAgLy8gJGh0dHAucG9zdChcIi4vYXBpL2RlbW9zaXRlc2FwaVwiLCAkc2NvcGUuZGV2U2l0ZVJlY29yZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmFkZERldlNpdGUoJHNjb3BlLmRldlNpdGVSZWNvcmQpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR3aW5kb3cubG9jYXRpb24gPSAnIy8nO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnRmFpbGVkIHRvIHNhdmUgcmVjb3JkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDA0LzE1LzIwMjEgMTE6MzMgYW0gLSBTU04gLSBBZGRpbmcgcHJvamNldCB0YWdzXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2RldlNpdGVUYWdzQ29tcGlsZXInLCBmdW5jdGlvbiAoJGNvbXBpbGUsICR0aW1lb3V0KSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZpcmluZ2luZyBjb21waWxlIC0gc3RhcnQnKVxyXG4gICAgICAgICAgICAgICAgICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaXJpbmdpbmcgY29tcGlsZSAtIGVuZCcpXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwNC8xNS8yMDIxIDExOjMzIGFtIC0gU1NOIC0gQWRkaW5nIHByb2pjZXQgdGFnc1xyXG5cclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZGV2U2l0ZVRhZ3MnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnLi9qcy9kZXZzaXRlVGFncy9kZXYtc2l0ZS10YWdzLmh0bWwnLFxyXG4gICAgICAgICAgICBzY29wZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZGluZ0RldlNpdGVUYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5yZW1vdmluZ0RldlNpdGVUYWcgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRoZVRhZ3MgPSBbXCJDI1wiLCBcIkFTUC5ORVRcIiwgXCJFbnRpdHkgRnJhbWV3b3JrXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGREZXZTaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNhdmVOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLnB1c2goJHNjb3BlLm5ld0RldlNpdGVUYWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5yZW1vdmVEZXZTaXRlVGFnID0gZnVuY3Rpb24gKF9kZXZTaXRlVGFnVG9SZW1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVtb3ZpbmdEZXZTaXRlVGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGV2U2l0ZVRhZ1RvUmVtb3ZlID0gX2RldlNpdGVUYWdUb1JlbW92ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpcm1lZFJlbW92ZURldlNpdGVUYWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzID0gJHNjb3BlLnRoZVRhZ3MuZmlsdGVyKHQgPT4gdCAhPT0gJHNjb3BlLmRldlNpdGVUYWdUb1JlbW92ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92aW5nRGV2U2l0ZVRhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kZXZTaXRlVGFnVG9SZW1vdmUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2FuY2VsUmVtb3ZlRGV2U2l0ZVRhZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92aW5nRGV2U2l0ZVRhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kZXZTaXRlVGFnVG9SZW1vdmUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgfTsiLCLvu79cclxuLy8gMTAvMDEvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDNdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cclxuXHJcbiAgICBhcHBJbnNpZ2h0czoge1xyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICdkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTMnXHJcbiAgICAgICAgLy8gMTAvMzEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIEFkZGVkXHJcblxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICcyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDMnLFxyXG5cclxuICAgICAgICAvLyAxMS8wNy8yMDE5IDA4OjM0IHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICBcIkluc3RydW1lbnRhdGlvbktleVwiOiBcImRlbGV0ZWRcIiwgXCJkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTNcIiAsXHJcbiAgICAgICAgLy8gUFMtRmFicmlrYW1SZXNpZGVuY2VzIC0gXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuXHJcblxyXG4gICAgfVxyXG5cclxufTsiLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX3YwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICAgICAgLy8vLyAgRE8gTk9UIFJFTU9WRS5cclxuICAgICAgICAgICAgLy8vLyBPcHRpb24gdG8gY2FsbCBhbiBpbmplY3RlZCBBbmd1bGFySlMgc2VydmVyIGZyb20gaGVyZS4gVGVzdGVkLiAgXHJcblxyXG4gICAgICAgICAgICAvL2ZhY3RvcnlTZXR1cC5kb0ZhY3RvcnlTZXR1cCgpO1xyXG5cclxuICAgICAgICAgICAgLy90cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJnbG9iYWxzOiAyMDE5MDkyMy0xMTM2IC0gQ2FsbGluZyB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgdGVzdF8xMDMuZG9JdCgpO1xyXG4gICAgICAgICAgICAvL30gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcihcImdsb2JhbHM6ICAyMDE5MDkyMy0xMTM1IC0gRmFpbGVkIGNhbGwgdG8gdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VfdjAwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBnZXRJbnN0YW5jZV92MDAyOiBnZXRJbnN0YW5jZV92MDAyXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDY6MzIgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5lbnVtIFRpbWVsb2dfU2VydmluZ1BhZ2UgeyAvLyBTZXJ2aW5nUGFnZSAoZm9yIElERSBTZWFyY2gpXHJcblxyXG4gICAgVGltZWxvZyA9ICdUaW1lbG9nJyxcclxuICAgIEpvYl9UaW1lbG9nID0gJ0pvYl9UaW1lbG9nJyxcclxuICAgIFByb2plY3RzX1NlYXJjaCA9ICdQcm9qZWN0c19TZWFyY2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSh2YWx1ZTogVGltZWxvZ19TZXJ2aW5nUGFnZSwgY29tcGFyZVRvOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBhcmVUbyA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIHRlc3RfMTAzLCBUaW1lbG9nX1NlcnZpbmdQYWdlLCBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcbi8vIDA4LzMxLzIwMjAgMDQ6NTQgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDA0XSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fY29uc29sZV9tb2RlbC5kLnRzXCIgLz5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzMxLzIwMjAgMDQ6MjkgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDAyXSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbiAgICAgICAgZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCkge1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGEgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG5cclxuICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykuZWFjaCgobmR4LCBvYmoxKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdklkID0gJChvYmoxKS5hdHRyKCdhcmlhLWNvbnRyb2xzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQ9ICAgICQoXCIjXCIgKyBkaXZJZCkuY2hpbGRyZW4oKS5sZW5ndGggO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ291bnQ9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCAnY29sb3InLCAnb3JhbmdlJyApO1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCdmb250LXNpemUnLCAnMjRwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoXCI8c3Bhbi8+XCIpLnRleHQoJChvYmoxKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgc2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lMiA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZTInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd09iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzbW9vdGgtc2Nyb2xsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGpRdWVyeU9iamVjdE5hbWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAwNC8wOC8yMDE5IDAxOjMzIGFtIC0gU1NOIC0gWzIwMTkwNDA3LTIzNDVdIC0gVGltZUxvZ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1kZWZhdWx0LXRpbWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZCA9IGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgcChkLmdldE1vbnRoKCkgKyAxLCAyLCAnMCcpICsgXCItXCIgKyBwKGQuZ2V0RGF0ZSgpLCAyLCAnMCcpICsgXCJUXCIgKyBwKGQuZ2V0SG91cnMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS52YWwoY2QpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMTkvMjAxOSAwNDo0OCBwbSAtIFNTTiAtIFsyMDE5MDQxOS0xNjQ3XSAtIFNldCBhbW91bnQgZm9yIFRvdGFsU2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1Ub3RhbFBlcmlvZFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMDIwMTkgMDI6MzkgcG0gLSBTU04gLSBObyBjYWxjdWxhdGluZyBlbGFwc2VkIHRpbWUgY29ycmVjdGx5IHdpdGggVHlwZVNjcmlwdCBjb252ZXJzaW9uLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMiA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZDExLmdldFRpbWUoKS52YWx1ZU9mKCkgLSBkMTIuZ2V0VGltZSgpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lMikudmFsKGRlbHRhXzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAgICAgLy8gMDEvMDIvMjAyMCAwNDowNiBwbSAtIFNTTiAtIE1vdmVkIGZyb20gIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuICAgICAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICg8SFRNTEFuY2hvckVsZW1lbnQ+ZS50YXJnZXQpLmhyZWYgKyBcIiZyZXR1cm5Ub0NhbGxlcktleT1cIiArIHJldHVyblRvQ2FsbGVyS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBwKHN0cjEsIGxlbiwgY2hhcikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGZ1bmN0aW9uIChzdHIxLCBsZW4sIGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW4pIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczEgPSBjaGFyLnJlcGVhdChsZW4pICsgc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDIvMjAxOSAwNzoyNSBwbSAtIFNTTiAtIFsyMDE5MTEwMS0wNTI2XSAtIFswMTNdIC0gQ2hlY2sgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIERpZCBub3QgZmluaXNoLlxyXG4gICAgICAgICAgICAvLyBUb2RvLVNTTlxyXG4gICAgICAgICAgICAkKCcubW9kYWwnKS5vbignc2hvdycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBcIi5tb2RhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDQxNC0wOTA0LUEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyIGxpIGEnKS5iaW5kKCdjb250ZXh0bWVudSBjbGljaycsIChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDQxNC0xMDA3IC0gY29udGV4dCBtZW51Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCcubmF2YmFyIGxpIGEnKS5iaW5kKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS53aGljaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTGVmdCBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNaWRkbGUgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JpZ2h0IG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkICAgMjA4ICAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ05vdGhpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKCQodGhpcy5tb2JpbGVOYXZiYXJNZW51T3B0aW9uLm5hdGl2ZUVsZW1lbnQpLmlzKCc6dmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgJCh0aGlzLm1vYmlsZU5hdmJhck1lbnVPcHRpb24ubmF0aXZlRWxlbWVudCkudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgICAgIC8vIDA5LzA0LzIwMjAgMDE6NTUgYW0gLSBTU04gLSBbMjAyMDA5MDQtMDE1NV0gYXBwbHkgdG8gZGl2cyBvbmx5IC0gV2FzIGhpZGluZyBtb2JpbGUgaGFtYmVyZ2VyIG1lbnUuXHJcbiAgICAgICAgICAgICQoXCJhW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcihjYWxsZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTI4IC0gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yIFsnICsgY2FsbGVyICsgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ3ByZScpLmVhY2goZnVuY3Rpb24gKGFhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGF1dG9Db2xsYXBzZSA9ICQodGhpcykuYXR0cignc3NuLWF1dG8tY29sbGFwc2UnKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdXRvQ29sbGFwc2UgPT09IFwiZmFsc2VcIikgeyByZXR1cm47fTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBCZWdpblxyXG5cclxuICAgICAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgICAgICBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICAgICAgZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gaW5wdXQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiAobWF0Y2ggPSB2YWx1ZS5tYXRjaCh0aGlzLmlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRba2V5XSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAgICBzZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICAvLyAgICBzZXRUaW1lb3V0KHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgLy8gICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIC8vICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG5cclxuICAgICAgICAvL307XHJcblxyXG4gICAgICAgIC8vfSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxubGV0IHNpdGVfaW5zdGFuY2UgPSBuZXcgc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzKCk7XHJcbmV4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5cclxuLy8gMDEvMDIvMjAyMCAwNDoyMCBwbSAtIFNTTiAtIFsyMDIwMDEwMi0xNjExXSAtIFswMDNdIC0gU2VwZXJhdGUgQW5ndWxhckpTIHV0aWxpdHkgZnJvbSBnZW5lcmFsIERPTSB1dGlsaXRpZXNcclxuLy8gT2YgY291cnNlIHdlIGFyZSBjYWxsaW5nIHV0aWxpdHkgbW9yZSB0aGFuIG9uY2UuIE5lZWQgdG8gY2FsbCBmdW5jdGlvbnMgd2hlcmUgdGhleSBhcHBseS5cclxuXHJcblxyXG5cclxuaWYgKHR5cGVvZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSkgIT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgIHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSAwO1xyXG59XHJcblxyXG53aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID0gd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSArIDE7XHJcblxyXG5cclxuaWYgKHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPT09IDEpIHtcclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEyLzMwLzIwMTkgMDE6MjMgYW0gLSBTU04gLSBBZGQgdGltZW90XHJcbiAgICAgICAgLy8gc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7IH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoJzIwMjAwMTAyLTE1MzQtMicpO1xyXG5cclxuICAgICAgICAgICAgLy8gMDgvMzEvMjAyMCAwNDozMiBhbSAtIFNTTiAtIFsyMDIwMDgzMS0wNDE3XSAtIFswMDNdIC0gRGlzYWJsZSBjb2xsYXBzYWJsZSBkaXZzIHdpdGggbm8gY29udGVudFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaXRlX2luc3RhbmNlLmRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpLCAxMDAwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAsIDIwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCdldmVudHMnKVt0eXBlXTtcclxuXHJcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoLTEgIT09ICQuaW5BcnJheShmbiwgZGF0YSkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjI5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwMl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MzEgLSBqb2JfVGltZWxvZ19zZXRGaWx0ZXIgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQgLSBLZXlVcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKChlKSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMiAtIHNldHVwJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9