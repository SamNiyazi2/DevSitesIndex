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
var ngDefaultApplication = 'demoSites_Index';



_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup(ngDefaultApplication);
_demoSites_Index__WEBPACK_IMPORTED_MODULE_2__["ssn_devsite_angular_module_instance"].ssn_devsite_angular_module;
_DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__["demosites_index_p1_instance"]; // 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript

console.log("DemoSites_Index_main - 20191001-1017");
 // 11/23/2019 08:53 am - SSN 


_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_4__["RestorePreviousPageState_instance"].doSetup(ngDefaultApplication);
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
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']); // 09/26/2019 05:51 am - SSN - [20190926-0551] Add $locationProvider

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vQzovU2Ftcy9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL2FwcGxpY2F0aW9uaW5zaWdodHMtanMvYnVuZGxlL2FpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X3AxLnRzIiwid2VicGFjazovLy8uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yLnRzIiwid2VicGFjazovLy8uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL2RlbW9TaXRlc19JbmRleC50cyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhclwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7OztBQ2hCQSxnRUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUssOERBQThEO0FBQ25FLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLLDhEQUE4RDtBQUNuRSxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDREQUE0RDtBQUNqRSxDQUFDLGdCQUFnQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsaUNBQWlELENBQUMsbUJBQVMsRUFBRSxPQUFTLENBQUMsbUNBQUU7QUFDekU7QUFDQSxrREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDBEQUEwRCxFQUFFO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQUEsb0dBQUM7QUFDRixxQzs7Ozs7Ozs7Ozs7O0FDelRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUE7O0FBSUEsSUFBSSxvQkFBb0IsR0FBRztBQUd2QixNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxrQkFBVixFQUFvQztBQUc5QyxRQUFJLDBCQUEwQixHQUFHLDBEQUF5QixnQkFBekIsQ0FBMEMsY0FBMUMsRUFBMEQsa0JBQTFELENBQWpDO0FBR0EsOEJBQTBCLENBQUMsT0FBM0IsQ0FBbUMsYUFBbkMsRUFBa0QsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixVQUFVLEtBQVYsRUFBaUIsRUFBakIsRUFBbUI7QUFFakYsVUFBSSxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBSSxZQUFZLEdBQUcsU0FBZixZQUFlO0FBRWYsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUdBLGFBQUssQ0FBQyxHQUFOLENBQVUsbUJBQVYsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLHVEQUFhLE1BQU0sQ0FBQyxJQUFwQixFQUEwQixTQUExQjtBQUNBLGtCQUFRLENBQUMsT0FBVDtBQUNILFNBTEwsRUFNUTtBQUNJLGtCQUFRLENBQUMsTUFBVDtBQUNILFNBUlQ7QUFVQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BaEJELENBSmlGLENBdUJqRjs7O0FBRUEsVUFBSSxXQUFXLEdBQUcsU0FBZCxXQUFjLENBQVUsRUFBVixFQUFZO0FBRTFCLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWYsQ0FGMEIsQ0FJMUI7O0FBRUEsYUFBSyxDQUFDLEdBQU4sQ0FBVSxnQ0FBZ0MsRUFBMUMsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNBLGlCQUFPLENBQUMsS0FBUixDQUFjLFlBQWQ7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWpCRCxDQXpCaUYsQ0E4Q2pGO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxxQkFBcUIsR0FBRyxTQUF4QixxQkFBd0IsQ0FBVSxFQUFWLEVBQWMsV0FBZCxFQUF5QjtBQUVqRCxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLEdBQU4sQ0FBVSxtQ0FBbUMsRUFBbkMsR0FBd0MsZUFBeEMsR0FBMEQsV0FBcEUsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNBLGlCQUFPLENBQUMsS0FBUixDQUFjLFlBQWQ7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWZEOztBQWtCQSxVQUFJLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBVSxPQUFWLEVBQWlCO0FBRS9CLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsSUFBTixDQUFXLG1CQUFYLEVBQWdDLE9BQWhDLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRO0FBQ0ksa0JBQVEsQ0FBQyxNQUFUO0FBQ0gsU0FQVDtBQVNBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBRUgsT0FmRCxDQW5FaUYsQ0FxRmpGOzs7QUFDQSxVQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFVLE9BQVYsRUFBaUI7QUFHbEMsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZixDQUhrQyxDQUtsQztBQUNBO0FBQ0E7O0FBQ0EsYUFBSyxDQUFDLElBQU4sQ0FBVyxtQkFBWCxFQUFnQyxPQUFoQyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUTtBQUNJLGtCQUFRLENBQUMsTUFBVDtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BbkJELENBdEZpRixDQTRHakY7OztBQUVBLFVBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQVUsT0FBVixFQUFpQjtBQUVsQyxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxpQkFBWCxFQUE4QixPQUE5QixFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUNYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BZkQsQ0E5R2lGLENBZ0lqRjs7O0FBQ0EsVUFBSSxtQkFBbUIsR0FBRyxTQUF0QixtQkFBc0IsQ0FBVSxPQUFWLEVBQWlCO0FBR3ZDLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsSUFBTixDQUFXLGlCQUFYLEVBQThCLE9BQTlCLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsS0FBVixFQUFlO0FBRVgsa0JBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCO0FBQ0gsU0FSVDtBQVVBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBRUgsT0FqQkQsQ0FqSWlGLENBc0pqRjtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVcsQ0FBVSxTQUFWLEVBQTJDO0FBRXRELFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWYsQ0FGc0QsQ0FJdEQ7O0FBRUEsWUFBSSxxQkFBcUIsR0FBSyxTQUFTLENBQUMscUJBQVYsQ0FBZ0MsTUFBaEMsSUFBMEMsQ0FBM0MsR0FBZ0Qsc0JBQWhELEdBQXlFLFNBQVMsQ0FBQyxxQkFBVixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxDQUF0RztBQUdBLGFBQUssQ0FBQyxHQUFOLENBQVUsc0JBQXNCLFNBQVMsQ0FBQyxhQUFoQyxHQUFnRCxHQUFoRCxHQUFzRCxTQUFTLENBQUMsY0FBaEUsR0FBaUYsR0FBakYsR0FBdUYsU0FBUyxDQUFDLFVBQWpHLEdBQThHLEdBQTlHLEdBQW9ILFNBQVMsQ0FBQyxJQUE5SCxHQUFxSSxHQUFySSxHQUEySSxxQkFBM0ksR0FBbUssYUFBbkssR0FDSixTQUFTLENBQUMsU0FEaEIsRUFHSyxJQUhMLENBR1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQU5MLEVBT1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNILFNBVFQ7QUFXQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BckJELENBNUppRixDQW9MakY7OztBQUNBLFVBQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLEVBQVYsRUFBWTtBQUd0QixlQUFPLENBQUMsR0FBUixDQUFZLDRDQUE0QyxFQUE1QyxHQUFpRCxHQUE3RDtBQUdBLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFHQSxhQUFLLENBQUMsR0FBTixDQUFVLDRCQUE0QixFQUF0QyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLFlBQVYsRUFBc0I7QUFDbEIsa0JBQVEsQ0FBQyxNQUFULENBQWdCO0FBQUUsaUJBQUssRUFBRTtBQUFULFdBQWhCO0FBQ0gsU0FQVDtBQVNBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FuQkQsQ0FyTGlGLENBNk1qRjs7O0FBRUEsVUFBSSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBbUI7QUFFbkIsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUscUJBQVYsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BZEQsQ0EvTWlGLENBbU9qRjs7O0FBRUEsVUFBSSw0QkFBNEIsR0FBRyxTQUEvQiw0QkFBK0IsQ0FBVSxFQUFWLEVBQWMsV0FBZCxFQUF5QjtBQUV4RCxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLEdBQU4sQ0FBVSxtQ0FBbUMsRUFBbkMsR0FBd0MsZUFBeEMsR0FBMEQsV0FBcEUsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBQ2xCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUhMLEVBSVEsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUUsZ0VBQWdFLEVBQWhFLEdBQXFFLEtBQXJFLEdBQTZFLFdBQTdFLEdBQTJGO0FBQXBHLFdBQWhCO0FBQ0EsaUJBQU8sQ0FBQyxLQUFSLENBQWMsWUFBZDtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BZEQ7O0FBbUJBLGFBQU87QUFFSCxnQkFBUSxFQUFFLEVBQUUsQ0FBQyxVQUFILENBQWMsU0FBZCxDQUZQO0FBR0gsbUJBQVcsRUFBRSxZQUhWO0FBSUgsa0JBQVUsRUFBRSxXQUpUO0FBS0g7QUFDQSxxQkFBYSxFQUFFLGNBTlo7QUFRSCxxQkFBYSxFQUFFLGNBUlo7QUFTSCxrQkFBVSxFQUFFLFdBVFQ7QUFVSCxxQkFBYSxFQUFFLG1CQVZaO0FBV0gsZUFBTyxFQUFFLFFBWE47QUFZSCx1QkFBZSxFQUFFLGdCQVpkO0FBYUgsY0FBTSxFQUFFLE9BYkw7QUFjSCw0QkFBb0IsRUFBRSxxQkFkbkI7QUFlSCxtQ0FBMkIsRUFBRTtBQWYxQixPQUFQO0FBb0JILEtBNVFpRCxDQUFsRDtBQTZRSCxHQW5SRDs7QUFxUkEsU0FBTztBQUNIO0FBQ0EsV0FBTyxFQUFFO0FBRk4sR0FBUDtBQU1ILENBOVIwQixFQUEzQjs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxJQUFJLG9CQUFvQixHQUFHLGlCQUEzQjtBQUVBO0FBRUE7QUFFQTtBQUVBLGtFQUFvQixDQUFDLE9BQXJCLENBQTZCLG9CQUE3QjtBQUVBLG9GQUFtQyxDQUFDLDBCQUFwQztBQUVBLCtFQUEyQixDLENBRTNCOztBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksc0NBQVo7Q0FLQTs7QUFDQTtBQUVBLGdHQUFpQyxDQUFDLE9BQWxDLENBQTBDLG9CQUExQztBQUlBLGtGQUFnQixDQUFDLE9BQWpCO0FBRUEsa0ZBQWdCLENBQUMsUUFBakIsQ0FBMEIsc0JBQTFCLEVBQWtEO0FBQUUsWUFBVSxFQUFFLGtCQUFkO0FBQWtDLFNBQU8sRUFBRTtBQUEzQyxDQUFsRCxFOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBOztBQUlBLElBQUksMkJBQTJCLEdBQUc7QUFJOUI7QUFHSSxNQUFJLFNBQVMsR0FBRyxTQUFaLFNBQVk7QUFFWjtBQUNBLFFBQUksSUFBSSxHQUFHLElBQVgsQ0FIWSxDQU1aO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDLGFBQUwsR0FBcUIsRUFBckIsQ0FSWSxDQVFhO0FBR3pCOztBQUVBLFFBQUksQ0FBQyx3QkFBTCxHQUFnQyxFQUFFLENBQUMsVUFBSCxDQUFjLEVBQWQsQ0FBaEM7QUFDQSxRQUFJLENBQUMsa0NBQUwsR0FBMEMsRUFBRSxDQUFDLFVBQUgsRUFBMUM7QUFDQSxRQUFJLENBQUMsdUNBQUwsR0FBK0MsRUFBRSxDQUFDLFVBQUgsQ0FBYyxLQUFkLENBQS9DLENBZlksQ0FpQlo7QUFDQTs7QUFDQSxRQUFJLENBQUMsV0FBTCxHQUFtQixFQUFFLENBQUMsVUFBSCxFQUFuQjtBQUVBLFFBQUksQ0FBQyxZQUFMLEdBQW9CLEVBQUUsQ0FBQyxVQUFILEVBQXBCLENBckJZLENBdUJaO0FBQ0E7O0FBRUEsU0FBSyxZQUFMLEdBQW9CLEVBQUUsQ0FBQyxlQUFILENBQW1CLEVBQW5CLENBQXBCLENBMUJZLENBNkJaOztBQUNBLFNBQUssUUFBTCxHQUFnQjtBQUNaLFVBQUksSUFBSSxHQUFHLElBQVgsQ0FEWSxDQUdaO0FBRUE7O0FBQ0EsT0FBQyxDQUFDLE9BQUYsQ0FBVSxzQ0FBVixFQUFrRCxVQUFVLElBQVYsRUFBYztBQUU1RCxZQUFJLENBQUMsWUFBTCxDQUFrQixTQUFsQjtBQUNBLFlBQUksQ0FBQyxZQUFMLENBQWtCLElBQWxCO0FBQ0gsT0FKRDtBQU1ILEtBWkQsQ0E5QlksQ0E2Q1o7OztBQUdBLFNBQUssY0FBTCxHQUFzQjtBQUVsQixVQUFJLFdBQVcsR0FBVyxJQUFJLENBQUMsWUFBTCxHQUFvQixNQUE5QyxDQUZrQixDQUdsQjs7QUFFQSxhQUFPLFdBQVA7QUFFSCxLQVBELENBaERZLENBMERaO0FBQ0E7OztBQUNBLFNBQUssaUJBQUwsR0FBeUIsVUFBVSxZQUFWLEVBQXNCO0FBRTNDLFVBQUksQ0FBQyxXQUFMLENBQWlCLFlBQWpCO0FBQ0EsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsS0FBckIsQ0FBMkI7QUFBRSxnQkFBUSxFQUFFLFFBQVo7QUFBc0IsZ0JBQVEsRUFBRTtBQUFoQyxPQUEzQjtBQUVILEtBTEQ7O0FBU0EsU0FBSyxPQUFMLEdBQWUsVUFBVSxTQUFWLEVBQW1CO0FBRTlCLE9BQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxLQUFmO0FBRUgsS0FKRDs7QUFPQSxTQUFLLEdBQUwsR0FBVztBQUVQLFVBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxJQUFILENBQVEsRUFBRSxDQUFDLFdBQVgsQ0FBbkI7QUFDQSxPQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLEtBQWxCLENBQXdCLE1BQXhCO0FBRUgsS0FMRDs7QUFTQSxTQUFLLGlCQUFMLEdBQXlCLFVBQVUsT0FBVixFQUFpQjtBQUN0QyxVQUFJLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxLQUFWLENBQXBCLEVBQXNDO0FBQ2xDLGVBQU8sSUFBUDtBQUVIO0FBQ0osS0FMRDs7QUFPQSxTQUFLLGlCQUFMLEdBQXlCLFVBQVUsT0FBVixFQUFpQjtBQUN0QyxVQUFJLGdCQUFnQixDQUFDLE9BQUQsRUFBVSxLQUFWLENBQXBCLEVBQXNDO0FBQ2xDLGVBQU8sT0FBTyxDQUFDLFNBQVIsQ0FBa0IsQ0FBbEIsQ0FBUDtBQUNILE9BRkQsTUFHSztBQUVELGVBQU8sT0FBUDtBQUNIO0FBQ0osS0FSRCxDQTVGWSxDQXVHWjtBQUNBO0FBQ0E7OztBQUNBLFNBQUssUUFBTCxHQUFnQjtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBLFVBQUksUUFBUSxHQUFHO0FBQ1gsc0JBQWMsSUFBSSxDQUFDO0FBRFIsT0FBZjtBQUlBLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUFYLENBZFksQ0FpQlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBOztBQUVBLE9BQUMsQ0FBQyxJQUFGLENBQU87QUFDSCxZQUFJLEVBQUUsTUFESDtBQUVILFlBQUksRUFBRSxJQUZIO0FBR0gsV0FBRyxFQUFFLDBCQUhGO0FBSUgsbUJBQVcsRUFBRSxrQkFKVjtBQUtILGdCQUFRLEVBQUU7QUFMUCxPQUFQLEVBTUcsSUFOSCxDQU1RLFVBQVUsUUFBVixFQUFrQjtBQUV0QixZQUFJLENBQUMsWUFBTCxDQUFrQixTQUFsQjtBQUNBLFlBQUksQ0FBQyxZQUFMLENBQWtCLFFBQWxCLEVBSHNCLENBS3RCOztBQUVBLFlBQUksQ0FBQyx3QkFBTCxDQUE4QixFQUE5QjtBQUNBLFlBQUksQ0FBQyxrQ0FBTCxDQUF3QyxFQUF4Qzs7QUFFQSxZQUFJLFFBQVEsQ0FBQyxNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQ3ZCLGNBQUksQ0FBQyx3QkFBTCxDQUE4Qiw2QkFBOUI7QUFDQSxjQUFJLENBQUMsa0NBQUwsQ0FBd0MsZUFBeEM7QUFDSDs7QUFHRCxZQUFJLENBQUMsSUFBSSxDQUFDLHVDQUFMLEVBQUwsRUFBcUQ7QUFDakQsb0JBQVUsQ0FBQyx1REFBbUIsMkJBQXBCLEVBQWlELElBQWpELENBQVY7QUFDSCxTQUZELE1BR0s7QUFDRDtBQUNBLG9CQUFVLENBQUMsdURBQW1CLGlCQUFwQixFQUF1QyxJQUF2QyxDQUFWO0FBRUg7QUFFSixPQS9CRDtBQW1DSCxLQWpFRDs7QUFvRUEsU0FBSyxvQkFBTCxHQUE0QixVQUFVLFVBQVYsRUFBb0I7QUFFNUMsVUFBSSxhQUFhLEdBQUcsRUFBcEI7O0FBRUEsY0FBUSxVQUFSO0FBQ0ksYUFBSyxDQUFMO0FBQ0ksdUJBQWEsR0FBRyxjQUFoQjtBQUNBOztBQUVKLGFBQUssQ0FBTDtBQUNJLHVCQUFhLEdBQUcsWUFBaEI7QUFDQTs7QUFFSixhQUFLLENBQUw7QUFDSSx1QkFBYSxHQUFHLG1CQUFoQjtBQUNBO0FBWFI7O0FBZUEsYUFBTyxZQUFZLEdBQVosR0FBa0IsYUFBekI7QUFFSCxLQXJCRDtBQXdCSCxHQXRNRDs7QUF3TUEsTUFBSSxFQUFFLEdBQUcsSUFBSSxTQUFKLEVBQVQ7QUFDQSxJQUFFLENBQUMsYUFBSCxDQUFpQixFQUFqQjtBQUNBLElBQUUsQ0FBQyxRQUFIO0FBS1AsQ0F0TmlDLEVBQWxDOztBQTBOQSxJQUFJLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQixDQUFVLE1BQVYsRUFBa0IsVUFBbEIsRUFBNEI7QUFDL0MsUUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFuQjtBQUNBLE1BQUksVUFBVSxDQUFDLE1BQVgsR0FBb0IsTUFBTSxDQUFDLE1BQS9CLEVBQ0ksT0FBTyxLQUFQO0FBQ0osU0FBTyxNQUFNLENBQUMsU0FBUCxDQUFpQixDQUFqQixFQUFvQixVQUFVLENBQUMsTUFBL0IsTUFBMkMsVUFBbEQ7QUFDSCxDQUxELEMsQ0FTQTs7Ozs7Ozs7Ozs7Ozs7O0FDL09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFDQTs7QUFJQSxJQUFJLGdCQUFnQixHQUFHO0FBR25CLFNBQU8sQ0FBQyxHQUFSLENBQVksb0VBQVo7QUFFQSxTQUFPLENBQUMsR0FBUixDQUFZLHVCQUFaO0FBQ0EsU0FBTyxDQUFDLEdBQVIsQ0FBWSx3REFBWjtBQUlBLE1BQUksTUFBTSxHQUFHO0FBRVQsc0JBQWtCLEVBQUUsd0RBQVcsQ0FBQyxXQUFaLENBQXdCO0FBRm5DLEdBQWI7O0FBTUEsTUFBSSxzQkFBc0IsR0FBRyxTQUF6QixzQkFBeUI7QUFFekIsV0FBTyxNQUFNLENBQUMsa0JBQWQ7QUFDSCxHQUhEOztBQU1BLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVTtBQUVWLFFBQUksQ0FBQyxrRUFBVyxDQUFDLE1BQWpCLEVBQXlCO0FBRXJCO0FBRUE7QUFDQSxVQUFJLHNCQUFzQixFQUExQixFQUE4QjtBQUMxQixlQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFDQSwwRUFBVyxDQUFDLGdCQUFaLENBQTZCLE1BQTdCO0FBQ0gsT0FIRCxNQUdPO0FBQ0gsZUFBTyxDQUFDLEdBQVIsQ0FBWSxtRUFBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksbUVBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLG1FQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxpREFBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksbUVBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLG1FQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxtRUFBWjtBQUNIO0FBQ0o7QUFHSixHQXRCRDs7QUF5QkEsTUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFTO0FBRVQ7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaO0FBRUE7O0FBQ0Esc0VBQVcsQ0FBQyxhQUFaLENBQ0kseUJBREo7QUFDK0I7QUFDM0IsUUFGSjtBQUVVO0FBQ047QUFBRSxXQUFLLEVBQUUsT0FBVDtBQUFrQixXQUFLLEVBQUU7QUFBekIsS0FISjtBQUd3QztBQUNwQztBQUFFLGtCQUFZLEVBQUU7QUFBaEIsS0FKSjtBQUl5QjtBQUNyQjtBQUFJO0FBTFI7QUFRQTs7QUFDQSxzRUFBVyxDQUFDLFVBQVosQ0FBdUIseUJBQXZCLEVBQWtEO0FBQUUsV0FBSyxFQUFFLE9BQVQ7QUFBa0IsV0FBSyxFQUFFO0FBQXpCLEtBQWxELEVBQXNGO0FBQUUsa0JBQVksRUFBRTtBQUFoQixLQUF0RjtBQUVILEdBakJEOztBQW9CQSxNQUFJLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBVSxJQUFWLEVBQXlCLEdBQXpCLEVBQXVDLFVBQXZDLEVBQXlELFlBQXpELEVBQTZFLFFBQTdFLEVBQThGO0FBRTVHO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSwwQ0FBWjtBQUVBLFdBQU8sQ0FBQyxHQUFSLENBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QixVQUF2QjtBQUdBLHNFQUFXLENBQUMsYUFBWixDQUEwQixJQUExQixFQUFnQyxHQUFoQyxFQUFxQyxVQUFyQyxFQVI0RyxDQVEzRDtBQUVwRCxHQVZEOztBQVlBLE1BQUksUUFBUSxHQUFHLFNBQVgsUUFBVyxDQUFVLElBQVYsRUFBd0IsVUFBeEIsRUFBMEMsWUFBMUMsRUFBNEQ7QUFFdkU7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLHVDQUFaO0FBRUEsV0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLFVBQWxCLEVBQThCLFlBQTlCO0FBR0Esc0VBQVcsQ0FBQyxVQUFaLENBQXVCLElBQXZCLEVBQTZCLFVBQTdCLEVBQXlDLFlBQXpDO0FBRUgsR0FWRDs7QUFZQSxNQUFJLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBVSxTQUFWLEVBQTRCLEtBQTVCLEVBQXlDLFNBQXpDLEVBQTJEO0FBRTFFO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUVBLFdBQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUVBLHNFQUFXLENBQUMsY0FBWixDQUEyQixTQUEzQixFQUFzQyxTQUF0QyxFQUFpRCxLQUFqRDtBQUVILEdBVEQ7O0FBWUEsU0FBTztBQUNILFdBQU8sRUFBRSxPQUROO0FBRUgsVUFBTSxFQUFFLE1BRkw7QUFHSCxlQUFXLEVBQUUsV0FIVjtBQUlILFlBQVEsRUFBRSxRQUpQO0FBS0gsZ0JBQVksRUFBRTtBQUxYLEdBQVA7QUFRSCxDQS9Hc0IsRUFBdkI7O0FBaUhBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0dBQVo7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7QUFJQSxJQUFJLGlDQUFpQyxHQUFHO0FBR3BDLFNBQU8sQ0FBQyxHQUFSLENBQVksbUVBQVo7O0FBR0EsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsb0JBQVYsRUFBOEI7QUFHeEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSxxRkFBWixFQUFtRyxvQkFBbkcsRUFBeUgsR0FBekg7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLDJFQUFaO0FBSUEsUUFBSSxjQUFjLEdBQW9CLHlEQUFnQixDQUFDLGdCQUFqQixDQUFrQywwQkFBbEMsRUFBOEQsb0JBQTlELENBQXRDO0FBRUEsa0JBQWMsQ0FBQyxVQUFmLENBQTBCLDJDQUExQixFQUF1RSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFdBQXJCLEVBQWtDLFVBQVUsTUFBVixFQUFrQixNQUFsQixFQUEwQixTQUExQixFQUFtQyxDQUczSSxDQUhzRSxDQUF2RTtBQU9BLGtCQUFjLENBQUMsU0FBZixDQUF5QixzQ0FBekIsRUFBaUU7QUFFN0Q7QUFHQSxhQUFPLENBQUMsR0FBUixDQUFZLGdFQUFaO0FBR0EsVUFBSSxhQUFhLEdBQUcsS0FBcEI7O0FBR0EsVUFBSSxVQUFVLEdBQUcsU0FBYixVQUFhLENBQVUsS0FBVixFQUFpQixFQUFqQixFQUFxQixNQUFyQixFQUEyQixDQUMzQyxDQUREOztBQUtBLE9BQUMsQ0FBQztBQUdFLGNBQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVLENBQVYsRUFBVztBQUFJLGlCQUFPLENBQUMsQ0FBRCxDQUFQO0FBQWEsU0FBN0Q7QUFDQSxjQUFNLENBQUMsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0MsVUFBVSxDQUFWLEVBQVc7QUFBSSxpQkFBTyxDQUFDLENBQUQsQ0FBUDtBQUFhLFNBQXBFO0FBRUEsa0JBQVUsQ0FBQyxVQUFELEVBQWEsR0FBYixDQUFWO0FBRUgsT0FSQSxDQUFEOztBQVlBLGVBQVMsZUFBVCxHQUF3QjtBQUVwQjtBQUNBLGVBQU8sUUFBUSxDQUFDLFFBQVQsQ0FBa0IsSUFBbEIsQ0FBdUIsT0FBdkIsQ0FBK0IsY0FBL0IsRUFBK0MsS0FBL0MsQ0FBUDtBQUNIOztBQUdELGVBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFrQjtBQUVkLFlBQUksYUFBSixFQUFtQjtBQUVuQixxQkFBYSxHQUFHLElBQWhCO0FBR0EsWUFBSSxhQUFhLEdBQUcsb0JBQW9CLENBQUMsSUFBRCxDQUF4QztBQUdBLFlBQUksUUFBUSxHQUFHLEVBQWY7O0FBRUEsWUFBSSxDQUFDLENBQUMsT0FBTixFQUFlO0FBR1gsa0JBQVEsR0FBRztBQUVQLG1CQUFPLEVBQUUsQ0FBQyxDQUFDLE9BRko7QUFHUCxtQkFBTyxFQUFFLENBQUMsQ0FBQztBQUhKLFdBQVg7QUFNSDs7QUFJRCxZQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBbEI7QUFDQSxZQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBbEI7O0FBRUEsWUFBSSxhQUFhLENBQUMsYUFBZCxJQUErQixTQUFuQyxFQUE4QztBQUUxQyx1QkFBYSxDQUFDLGFBQWQsR0FBOEI7QUFBRSxlQUFHLEVBQUUsZUFBZSxFQUF0QjtBQUEwQixnQkFBSSxFQUFFLElBQWhDO0FBQXNDLGdCQUFJLEVBQUUsSUFBNUM7QUFBa0QsbUJBQU8sRUFBRTtBQUEzRCxXQUE5QjtBQUVBLHVCQUFhLENBQUMsU0FBZCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFrQyxhQUFhLENBQUMsYUFBaEQ7QUFFSCxTQU5ELE1BTU87QUFFSCx1QkFBYSxDQUFDLGFBQWQsQ0FBNEIsSUFBNUIsR0FBbUMsSUFBbkM7QUFDQSx1QkFBYSxDQUFDLGFBQWQsQ0FBNEIsSUFBNUIsR0FBbUMsSUFBbkM7QUFHQSx1QkFBYSxDQUFDLGFBQWQsQ0FBNEIsT0FBNUIsR0FBc0MsUUFBdEM7QUFFQSx1QkFBYSxDQUFDLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBNkIsYUFBYSxDQUFDLFlBQTNDLElBQTJELGFBQWEsQ0FBQyxhQUF6RTtBQUNIOztBQUdELGNBQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLElBQUksQ0FBQyxTQUFMLENBQWUsYUFBYSxDQUFDLFNBQTdCLENBQXpDO0FBRUg7O0FBR0QsZUFBUyxvQkFBVCxDQUE4QixnQkFBOUIsRUFBK0Q7QUFBakM7QUFBQTtBQUFpQzs7QUFFM0QsWUFBSSxjQUFjLEdBQVEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsV0FBNUIsQ0FBMUI7O0FBRUEsWUFBSSxjQUFjLElBQUksU0FBdEIsRUFBaUM7QUFFN0IsY0FBSSxDQUFDLGdCQUFMLEVBQXVCLE9BQU8sSUFBUDtBQUV2Qix3QkFBYyxHQUFHLGFBQWpCO0FBQ0g7O0FBR0QsWUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYLENBQWhCO0FBR0EsWUFBSSxHQUFHLEdBQUcsZUFBZSxFQUF6QjtBQUNBLFlBQUksYUFBYSxHQUFHLFNBQXBCO0FBRUEsWUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFwQjs7QUFFQSxhQUFLLFlBQVksR0FBRyxDQUFwQixFQUF1QixZQUFZLEdBQUcsU0FBUyxDQUFDLElBQVYsQ0FBZSxNQUFyRCxFQUE2RCxZQUFZLEVBQXpFLEVBQTZFO0FBQ3pFLGNBQUksU0FBUyxDQUFDLElBQVYsQ0FBZSxZQUFmLEVBQTZCLEdBQTdCLElBQW9DLEdBQXhDLEVBQTZDO0FBQ3pDLHlCQUFhLEdBQUcsU0FBUyxDQUFDLElBQVYsQ0FBZSxZQUFmLENBQWhCO0FBQ0E7QUFDSDtBQUNKOztBQUVELGVBQU87QUFDSCx1QkFBYSxFQUFFLGFBRFo7QUFDMkIsbUJBQVMsRUFBRSxTQUR0QztBQUNpRCxzQkFBWSxFQUFFO0FBRC9ELFNBQVA7QUFJSDs7QUFHRCxlQUFTLFVBQVQsR0FBbUI7QUFHZixlQUFPLENBQUMsR0FBUixDQUFZLGlFQUFaO0FBR0EsWUFBSSxhQUFhLEdBQUcsb0JBQW9CLEVBQXhDO0FBRUEsWUFBSSxDQUFDLGFBQUwsRUFBb0I7QUFDcEIsWUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFuQixFQUFrQztBQUdsQyxZQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBbEM7O0FBRUEsWUFBSSxhQUFKLEVBQW1CO0FBRWYsZ0JBQU0sQ0FBQyxRQUFQLENBQWdCO0FBQ1osZUFBRyxFQUFFLGFBQWEsQ0FBQyxJQURQO0FBQ2EsZ0JBQUksRUFBRSxhQUFhLENBQUMsSUFEakM7QUFDdUMsb0JBQVEsRUFBRTtBQURqRCxXQUFoQjtBQUtBLG9CQUFVLENBQUM7QUFBYyxnQ0FBb0I7QUFBSyxXQUF4QyxFQUEwQyxJQUExQyxDQUFWLENBUGUsQ0FZZjtBQUdBO0FBRUg7QUFJSjs7QUFHRCxlQUFTLG9CQUFULEdBQTZCO0FBR3pCLGVBQU8sQ0FBQyxHQUFSLENBQVksMkVBQVo7QUFHQSxZQUFJLGFBQWEsR0FBRyxvQkFBb0IsRUFBeEM7QUFFQSxZQUFJLENBQUMsYUFBTCxFQUFvQjtBQUNwQixZQUFJLENBQUMsYUFBYSxDQUFDLGFBQW5CLEVBQWtDO0FBR2xDLFlBQUksYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFsQztBQUVBLGVBQU8sQ0FBQyxHQUFSLENBQVkscUJBQVo7O0FBRUEsWUFBSSxhQUFKLEVBQW1CO0FBR2YsaUJBQU8sQ0FBQyxHQUFSLENBQVksbUJBQVo7O0FBRUEsY0FBSSxhQUFhLENBQUMsT0FBbEIsRUFBMkI7QUFFdkIsbUJBQU8sQ0FBQyxHQUFSLENBQVksbUJBQVo7O0FBRUEsZ0JBQUksYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBMUIsRUFBbUM7QUFFL0IscUJBQU8sQ0FBQyxHQUFSLENBQVksbUJBQVo7QUFFQSxrQkFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBOUI7QUFDQSxrQkFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBOUI7QUFHQSxrQkFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQXRCO0FBRUEscUJBQU8sQ0FBQyxHQUFSLENBQVksbUJBQVo7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaOztBQUVBLGtCQUFJLGVBQUosRUFBcUI7QUFFakIsb0JBQUksVUFBUSxHQUFHLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsU0FBbkIsQ0FBNkIsZUFBN0IsQ0FBZjtBQUVBLGlCQUFDLENBQUMsVUFBRCxDQUFELENBQVksSUFBWixDQUFpQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLElBQW5CLEVBQWpCO0FBQ0EsaUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBWSxRQUFaLENBQXFCLGVBQXJCO0FBR0EsMEJBQVUsQ0FBQztBQUFjLGtDQUFnQixDQUFDLFVBQUQsQ0FBaEI7QUFBNkIsaUJBQTVDLEVBQThDLElBQTlDLENBQVY7QUFDSDtBQUVKO0FBR0o7O0FBSUQsb0JBQVUsQ0FBQztBQUVQLG1CQUFPLENBQUMsR0FBUixDQUFZLDJEQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksc0JBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLGFBQWEsQ0FBQyxTQUFkLENBQXdCLElBQXhCLENBQTZCLE1BQXpDO0FBRUEsc0JBQVUsQ0FBQztBQUFRLDJCQUFhLENBQUMsU0FBZCxDQUF3QixJQUF4QixDQUE2QixNQUE3QixDQUFvQyxhQUFhLENBQUMsWUFBbEQ7QUFBaUUsYUFBMUUsRUFBNEUsSUFBNUUsQ0FBVjtBQUdBLG1CQUFPLENBQUMsR0FBUixDQUFZLGFBQWEsQ0FBQyxTQUFkLENBQXdCLElBQXhCLENBQTZCLE1BQXpDO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksb0JBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxvQkFBWjtBQUVBLGtCQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixXQUE1QixFQUF5QyxJQUFJLENBQUMsU0FBTCxDQUFlLGFBQWEsQ0FBQyxTQUE3QixDQUF6QztBQUVILFdBaEJTLEVBZ0JQLElBaEJPLENBQVY7QUFrQkg7QUFFSjs7QUFHRCxlQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWdDO0FBRzVCLFNBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWO0FBR0g7O0FBS0QsYUFBTztBQUVILGdCQUFRLEVBQUUsR0FGUDtBQUlILG1CQUFXLEVBQUUsd0NBSlY7QUFRSCxZQUFJLEVBQUUsY0FBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQXFCLEtBQXJCLEVBQTBCLENBRS9CO0FBVkUsT0FBUDtBQWdCSCxLQXhRRDtBQTBRSCxHQTNSRDs7QUE2UkEsU0FBTztBQUNILFdBQU8sRUFBRTtBQUROLEdBQVA7QUFJSCxDQXZTdUMsRUFBeEM7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUdBLElBQUksbUNBQW1DLEdBQUc7QUFFdEMsTUFBSSwwQkFBMEIsR0FBRywwREFBeUIsZ0JBQXpCLENBQTBDLGdCQUExQyxFQUE0RCxpQkFBNUQsRUFBK0UsQ0FBQyxTQUFELENBQS9FLENBQWpDLENBRnNDLENBSXRDOztBQUNBLDRCQUEwQixDQUFDLE1BQTNCLENBQWtDLENBQUMsZ0JBQUQsRUFBbUIsbUJBQW5CLEVBQXdDLFVBQVUsY0FBVixFQUEwQixpQkFBMUIsRUFBMkM7QUFFakgsa0JBQWMsQ0FBQyxJQUFmLENBQW9CLEdBQXBCLEVBQXlCO0FBQ3JCLGdCQUFVLEVBQUUsNkJBRFM7QUFFckIsaUJBQVcsRUFBRTtBQUZRLEtBQXpCLEVBRmlILENBT2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFpQixDQUFDLFNBQWxCLENBQTRCO0FBQUUsYUFBTyxFQUFFLElBQVg7QUFBaUIsa0JBQVksRUFBRTtBQUEvQixLQUE1QixFQUFvRSxVQUFwRSxDQUErRSxHQUEvRTtBQUtBLFdBQU8sQ0FBQyxHQUFSLENBQVksZ0NBQVo7QUFFSCxHQWhDaUMsQ0FBbEMsRUFMc0MsQ0F3Q3RDO0FBQ0E7O0FBQ0EsTUFBSSwyQkFBMkIsR0FBRyxTQUE5QiwyQkFBOEIsQ0FBVSxNQUFWLEVBQWtCLEtBQWxCLEVBQXlCLE9BQXpCLEVBQWtDLFdBQWxDLEVBQTZDO0FBRTNFLFVBQU0sQ0FBQyxLQUFQLEdBQWUsa0NBQWYsQ0FGMkUsQ0FLM0U7O0FBQ0EsVUFBTSxDQUFDLElBQVAsR0FBYyxXQUFkO0FBRUEsVUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFBakIsQ0FSMkUsQ0FVM0U7O0FBQ0EsZUFBVyxDQUFDLFdBQVosR0FDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLFlBQU0sQ0FBQyxVQUFQLEdBQW9CLEVBQUUsQ0FBQyxVQUFILENBQWMsTUFBTSxDQUFDLElBQVAsQ0FBWSxRQUFaLEVBQWQsQ0FBcEI7QUFFSCxLQUxMLEVBTVEsVUFBVSxFQUFWLEVBQVk7QUFFUixhQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLEVBQVo7QUFDQSxXQUFLLENBQUMsZ0VBQUQsQ0FBTDtBQUNILEtBWFQsRUFZSyxJQVpMLENBWVU7QUFFRixZQUFNLENBQUMsT0FBUCxHQUFpQixLQUFqQjtBQUNILEtBZkwsRUFYMkUsQ0E2QjNFOztBQUVBLFVBQU0sQ0FBQyxjQUFQLEdBQXdCLFVBQVUsRUFBVixFQUFZO0FBR2hDLFdBQUssQ0FBQyx1QkFBRCxDQUFMO0FBQ0EsT0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixLQUFsQixDQUF3QjtBQUFFLGdCQUFRLEVBQUUsUUFBWjtBQUFzQixnQkFBUSxFQUFFO0FBQWhDLE9BQXhCO0FBRUgsS0FORCxDQS9CMkUsQ0F1QzNFO0FBQ0E7QUFFQTs7O0FBQ0EsVUFBTSxDQUFDLFdBQVAsR0FBcUIsRUFBckI7O0FBSUEsVUFBTSxDQUFDLFdBQVAsR0FBcUIsVUFBVSxPQUFWLEVBQWlCO0FBRWxDLFlBQU0sQ0FBQyxXQUFQLEdBQXFCLDZDQUFhLE9BQWIsQ0FBckIsQ0FGa0MsQ0FHbEM7QUFFSCxLQUxEOztBQU9BLFVBQU0sQ0FBQyxRQUFQLEdBQWtCLFVBQVUsSUFBVixFQUFjO0FBRzVCLFVBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFNBQXBCLENBQThCLGFBQUM7QUFBSSxnQkFBQyxDQUFDLEVBQUYsS0FBUyxNQUFNLENBQUMsV0FBUCxDQUFUO0FBQThCLE9BQWpFLENBQWY7QUFFQSxZQUFNLENBQUMsVUFBUCxHQUFvQixRQUFwQixJQUFnQyxNQUFNLENBQUMsV0FBdkM7QUFFQSxZQUFNLENBQUMsSUFBUCxDQUFZLGFBQVosQ0FBMEIsTUFBTSxDQUFDLFdBQWpDLEVBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFTO0FBQ1gsZUFBTyxDQUFDLEdBQVIsQ0FBWSwyREFBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNILE9BSkwsRUFLUSxVQUFDLEtBQUQsRUFBTTtBQUNGLGVBQU8sQ0FBQyxHQUFSLENBQVkseURBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFDSCxPQVJUO0FBV0EsWUFBTSxDQUFDLEtBQVA7QUFHSCxLQXJCRDs7QUF1QkEsVUFBTSxDQUFDLEtBQVAsR0FBZTtBQUNYLFlBQU0sQ0FBQyxXQUFQLEdBQXFCLEVBQXJCO0FBQ0gsS0FGRDs7QUFLQSxVQUFNLENBQUMsWUFBUCxHQUFzQixVQUFVLE9BQVYsRUFBaUI7QUFFbkMsVUFBSSxPQUFPLENBQUMsRUFBUixLQUFlLE1BQU0sQ0FBQyxXQUFQLENBQW1CLEVBQXRDLEVBQTBDLE9BQU8sVUFBUCxDQUExQyxLQUNLLE9BQU8sVUFBUDtBQUNSLEtBSkQsQ0FsRjJFLENBMEYzRTtBQUVBO0FBQ0E7OztBQUVBLFVBQU0sQ0FBQyxVQUFQLEdBQW9CLFVBQVUsT0FBVixFQUFpQjtBQUdqQyxVQUFJLENBQUMsT0FBRCxJQUFZLE9BQU8sQ0FBQyxPQUFSLElBQW1CLElBQW5DLEVBQXlDLE9BQU8sS0FBUDtBQUV6QyxVQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsT0FBUixDQUFnQixXQUFoQixHQUE4QixJQUE5QixFQUFsQjtBQUdBLFVBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQyxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLENBQVQ7QUFDQSxVQUFJLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFUO0FBRUEsVUFBTSxXQUFXLEdBQUcsb0JBQXBCO0FBRUEsVUFBSSxZQUFZLEdBQUcsQ0FBbkI7QUFFQSxrQkFBWSxJQUFLLFdBQVcsQ0FBQyxPQUFaLENBQW9CLEVBQXBCLEtBQTJCLENBQTVCLEdBQWlDLENBQWpDLEdBQXFDLENBQXJEO0FBQ0Esa0JBQVksSUFBSyxXQUFXLENBQUMsT0FBWixDQUFvQixFQUFwQixLQUEyQixDQUE1QixHQUFpQyxDQUFqQyxHQUFxQyxDQUFyRDtBQUVBLGFBQVEsWUFBWSxHQUFHLENBQXZCO0FBRUgsS0FwQkQsQ0EvRjJFLENBcUgzRTs7O0FBQ0EsVUFBTSxDQUFDLGdCQUFQLEdBQTBCLFVBQVUsS0FBVixFQUFlO0FBRXJDLGFBQU8sS0FBSyxHQUFHLENBQVIsSUFBYSxDQUFiLEdBQWlCLFNBQWpCLEdBQTZCLFFBQXBDO0FBQ0gsS0FIRDtBQUtILEdBM0hEOztBQStIQSw0QkFBMEIsQ0FBQyxVQUEzQixDQUFzQyw2QkFBdEMsRUFBcUUsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixTQUFwQixFQUErQixhQUEvQixFQUE4QywyQkFBOUMsQ0FBckUsRUF6S3NDLENBMkt0QztBQUNBOztBQUNBLE1BQUksdUJBQXVCLEdBQUcsU0FBMUIsdUJBQTBCLENBQVUsTUFBVixFQUFrQixLQUFsQixFQUF5QixPQUF6QixFQUFrQyxXQUFsQyxFQUE2QztBQUV2RSxVQUFNLENBQUMsYUFBUCxHQUF1QixFQUF2Qjs7QUFJQSxVQUFNLENBQUMsSUFBUCxHQUFjLFVBQVUsWUFBVixFQUFzQjtBQUNoQztBQUVBO0FBQ0E7QUFDQSxVQUFJLENBQUMsR0FBeUIsQ0FBQyxDQUFDLFlBQUQsQ0FBL0I7O0FBRUEsVUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFGLEVBQUwsRUFBZ0I7QUFDWixhQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFQLENBQXFCLFNBQXRCLENBQUw7QUFDQSxXQUFLLENBQUMsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsZ0JBQXRCLENBQUwsQ0FaZ0MsQ0FjaEM7O0FBQ0EsaUJBQVcsQ0FBQyxVQUFaLENBQXVCLE1BQU0sQ0FBQyxhQUE5QixFQUNLLElBREwsQ0FFUTtBQUNJLGVBQU8sQ0FBQyxRQUFSLEdBQW1CLElBQW5CO0FBQ0gsT0FKVCxFQUtRO0FBQ0ksYUFBSyxDQUFDLHdCQUFELENBQUw7QUFDSCxPQVBUO0FBV0gsS0ExQkQ7QUEyQkgsR0FqQ0Q7O0FBb0NBLFNBQU87QUFDSCw4QkFBMEIsRUFBRTtBQUR6QixHQUFQO0FBSUgsQ0FyTnlDLEVBQTFDOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFFQTtBQUVPLElBQU0sV0FBVyxHQUFHO0FBR3ZCLGFBQVcsRUFBRTtBQUVUO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFrQixFQUFFO0FBWFg7QUFIVSxDQUFwQixDOzs7Ozs7Ozs7Ozs7QUNKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7O0FBTUEsSUFBSSxnQkFBZ0IsR0FBRztBQUduQjtBQUFBO0FBQUE7QUFBQSw0QkF1SUMsQ0F2SUQsQ0FLSTs7O0FBY2Msa0NBQWQsVUFBOEIsVUFBOUIsRUFBa0QsZUFBbEQsRUFBMkUsSUFBM0UsRUFBZ0c7QUFFNUY7QUFDQTtBQUh1RTtBQUFBO0FBQXFCLFFBSzVGO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBLGFBQU8sV0FBVyxDQUFDLG9CQUFaLENBQWlDLFVBQWpDLEVBQTZDLGVBQTdDLEVBQThELElBQTlELENBQVA7QUFFSCxLQXBCYTs7QUFnQ0EsdUNBQWQsVUFBbUMsVUFBbkMsRUFBdUQsZUFBdkQsRUFBZ0YsSUFBaEYsRUFBcUc7QUFBckI7QUFBQTtBQUFxQjs7QUFHakcsVUFBSSxVQUFVLEdBQWdCLElBQTlCO0FBRUEsVUFBSSxRQUFRLEdBQUksV0FBVyxDQUFDLDBCQUFiLENBQXlDLE1BQXpDLENBQWdELFVBQUMsQ0FBRCxFQUFlO0FBQUssZ0JBQUMsQ0FBQyxJQUFGO0FBQTBCLE9BQTlGLENBQWY7O0FBSUEsVUFBSSxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUVyQixZQUFJLFFBQVEsQ0FBQyxNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBRXJCLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksd0RBQXdELGVBQXhELEdBQTBFLHFCQUExRSxHQUFrRyxRQUFRLENBQUMsTUFBM0csR0FBb0gsR0FBaEk7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNIOztBQUVELGtCQUFVLEdBQUcsUUFBUSxDQUFDLENBQUQsQ0FBckI7QUFFSCxPQW5CRCxNQW1CTztBQUVILGdCQUFRLGVBQVI7QUFFSSxlQUFLLGNBQUw7QUFFSSxzQkFBVSxHQUFHO0FBQ1Qsa0JBQUksRUFBRSxlQURHO0FBRVQ7QUFDQSxzQkFBUSxFQUFFLCtDQUFlLGNBQWYsRUFBK0IsQ0FBQyxTQUFELEVBQVksY0FBWixFQUE0QixZQUE1QixDQUEvQjtBQUhELGFBQWI7QUFNQSx1QkFBVyxDQUFDLDBCQUFaLENBQXVDLElBQXZDLENBQTRDLFVBQTVDO0FBRUE7O0FBRUosZUFBSywyQkFBTDtBQUVJLHNCQUFVLEdBQUc7QUFDVCxrQkFBSSxFQUFFLGVBREc7QUFFVCxzQkFBUSxFQUFFLCtDQUFlLDJCQUFmLEVBQTRDLElBQTVDO0FBRkQsYUFBYjtBQUtBLHVCQUFXLENBQUMsMEJBQVosQ0FBdUMsSUFBdkMsQ0FBNEMsVUFBNUM7QUFFQTs7QUFHSixlQUFLLGlCQUFMO0FBRUksc0JBQVUsR0FBRztBQUNULGtCQUFJLEVBQUUsZUFERztBQUVULHNCQUFRLEVBQUUsK0NBQWUsaUJBQWYsRUFBa0MsSUFBbEM7QUFGRCxhQUFiO0FBS0EsdUJBQVcsQ0FBQywwQkFBWixDQUF1QyxJQUF2QyxDQUE0QyxVQUE1QztBQUVBOztBQUVKO0FBRUksbUJBQU8sQ0FBQyxHQUFSLENBQVkseURBQXlELGVBQXpELEdBQTJFLCtCQUF2RjtBQUVBO0FBekNSO0FBK0NIOztBQUdELGFBQU8sVUFBVSxDQUFDLFFBQWxCO0FBR0gsS0FuRmE7O0FBaERDLDZDQUE0QyxFQUE1QyxDQUhuQixDQUdtRTs7QUFvSW5FO0FBQUMsR0F2SUQ7O0FBb0pBLE1BQUksWUFBWSxHQUFHO0FBR2YsUUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUI7QUFFakIsVUFBSSxXQUFKOztBQUVBLFVBQUk7QUFDQSxtQkFBVyxHQUFHLCtDQUFlLGtCQUFmLENBQWQ7QUFFSCxPQUhELENBSUEsT0FBTyxHQUFQLEVBQVk7QUFFUixtQkFBVyxHQUFHLCtDQUFlLGtCQUFmLEVBQW1DLEVBQW5DLENBQWQ7QUFFSDs7QUFHRCxpQkFBVyxDQUFDLE9BQVosQ0FBb0Isc0JBQXBCLEVBQTRDLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQW1CO0FBRzNFLFlBQUksU0FBUyxHQUFHLFNBQVosU0FBWSxDQUFVLFlBQVYsRUFBc0I7QUFFbEMsY0FBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUdBLG9CQUFVLENBQUM7QUFFUCxtQkFBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtBQUVBLG9CQUFRLENBQUMsTUFBVCxDQUFnQixvQkFBb0IsWUFBcEIsR0FBbUMsR0FBbkQ7O0FBR0EsZ0JBQUksU0FBUyxDQUFDLFlBQUQsQ0FBYixFQUE2QjtBQUN6QixxQkFBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLHNCQUFRLENBQUMsT0FBVCxDQUFpQixZQUFZLFlBQVosR0FBMkIsR0FBNUM7QUFDSCxhQUhELE1BR087QUFDSCxxQkFBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtBQUVBLHNCQUFRLENBQUMsTUFBVCxDQUFnQixjQUFjLFlBQWQsR0FBNkIsa0JBQTdDO0FBQ0g7QUFDSixXQWZTLEVBZVAsSUFmTyxDQUFWO0FBa0JBLGlCQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILFNBeEJEOztBQTJCQSxpQkFBUyxTQUFULENBQW1CLElBQW5CLEVBQXVCO0FBQ25CLGlCQUFPLEtBQVA7QUFDSDs7QUFFRCxlQUFPO0FBRUgsbUJBQVMsRUFBRTtBQUZSLFNBQVA7QUFNSCxPQXhDMkMsQ0FBNUM7QUF5Q0gsS0F4REQ7O0FBMkRBLFdBQU87QUFDSCxvQkFBYyxFQUFFO0FBRGIsS0FBUDtBQU9ILEdBckVrQixFQUFuQixDQXZKbUIsQ0E2T25COzs7QUFFQSxXQUFTLGdCQUFULENBQTBCLFVBQTFCLEVBQThDLGVBQTlDLEVBQXVFLElBQXZFLEVBQTRGO0FBQXJCO0FBQUE7QUFBcUI7O0FBRXhGLFdBQU8sV0FBVyxDQUFDLGVBQVosQ0FBNEIsVUFBNUIsRUFBd0MsZUFBeEMsRUFBeUQsSUFBekQsQ0FBUDtBQUNIOztBQUlELFNBQU87QUFFSCxvQkFBZ0IsRUFBRTtBQUZmLEdBQVA7QUFPSCxDQTdQc0IsRUFBdkI7O0FBbVFBLElBQUksUUFBUSxHQUFHO0FBR1gsTUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFPO0FBR1AscURBQWlCLENBQUMsSUFBRCxFQUFPLGtCQUFQLENBQWpCLEVBQTZDLE1BQTdDLENBQW9ELENBQUMsc0JBQUQsRUFBeUIsVUFBVSxvQkFBVixFQUE4QjtBQUV2RywwQkFBb0IsQ0FBQyxTQUFyQixDQUErQiwwQkFBL0IsRUFBMkQsSUFBM0QsQ0FBZ0UsZ0JBQWhFLEVBQWtGLGNBQWxGLFdBQXdHLGNBQXhHO0FBRUgsS0FKbUQsQ0FBcEQ7O0FBT0EsYUFBUyxnQkFBVCxDQUEwQixRQUExQixFQUFrQztBQUU5QixhQUFPLENBQUMsR0FBUixDQUFZLDZDQUFaO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7O0FBRUQsYUFBUyxjQUFULENBQXdCLFFBQXhCLEVBQWdDO0FBQzVCLGFBQU8sQ0FBQyxHQUFSLENBQVksNkNBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFFRCxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBZ0M7QUFDNUIsYUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGFBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUVIO0FBR0osR0E1QkQ7O0FBZ0NBLFNBQU87QUFDSCxRQUFJLEVBQUU7QUFESCxHQUFQO0FBS0gsQ0F4Q2MsRUFBZixDLENBMkNBOzs7QUFFQSxJQUFLLG1CQUFMOztBQUFBLFdBQUssbUJBQUwsRUFBd0I7QUFFcEI7QUFDQTtBQUNBO0FBQ0gsQ0FMRCxFQUFLLG1CQUFtQixLQUFuQixtQkFBbUIsTUFBeEI7O0FBT0EsU0FBUyw4QkFBVCxDQUF3QyxLQUF4QyxFQUFvRSxTQUFwRSxFQUFrRztBQUU5RixTQUFPLFNBQVMsS0FBSyxLQUFyQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVVEO0FBRUE7QUFDQTtBQUdBLElBQUksRUFBRSxHQUFHLElBQUksSUFBSixFQUFUO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxFQUE1QyxFLENBR0E7QUFFQTtBQUlBOztBQUNBLElBQVUsZ0JBQVY7O0FBQUEsV0FBVSxnQkFBVixFQUEwQjtBQUV0QjtBQUFBO0FBQUE7QUFBQTtBQThSSTtBQUVBO0FBRUEsMEJBQWUsaUdBQWYsQ0FsU0osQ0FvVUk7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDSCxLQWhXRCxDQUlJOzs7QUFDQTtBQUVJLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsVUFBVSxDQUFWLEVBQVc7QUFFbkMsWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxVQUFiLENBQWQ7QUFDQSxZQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLFlBQWIsQ0FBaEI7QUFDQSxZQUFJLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsa0JBQWIsQ0FBdkI7QUFDQSxZQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsbUJBQWIsQ0FBeEIsQ0FMbUMsQ0FPbkM7O0FBRUEsZUFBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLFdBQWpDLEVBQThDLFNBQTlDLEVBQXlELG1CQUF6RCxFQUE4RSxnQkFBOUUsRUFBZ0csbUJBQWhHLEVBQXFILGlCQUFySDs7QUFFQSxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixpQkFBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLE9BQTdCO0FBRUEsV0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLEtBQWIsQ0FBbUI7QUFBRSxvQkFBUSxFQUFFLFFBQVo7QUFBc0Isb0JBQVEsRUFBRTtBQUFoQyxXQUFuQjtBQUVBLFdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLElBQTFCLENBQStCLGNBQS9CO0FBQ0gsU0FsQmtDLENBb0JuQzs7O0FBQ0EsWUFBSSxPQUFPLEtBQUssWUFBaEIsRUFBOEI7QUFFMUIsaUJBQU8sQ0FBQyxHQUFSLENBQVksZUFBWixFQUE2QixPQUE3QixFQUFzQyxrQkFBdEMsRUFBMEQsZ0JBQTFEO0FBRUEsV0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsSUFBcEI7QUFFSDs7QUFFRCxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixpQkFBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLE9BQTdCLEVBQXNDLGtCQUF0QyxFQUEwRCxnQkFBMUQ7QUFFQSxXQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixJQUFwQjtBQUVIOztBQUVELFlBQUksT0FBTyxLQUFLLGVBQWhCLEVBQWlDO0FBQzdCO0FBRUEsa0JBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxjQUF6QyxDQUF3RDtBQUNwRCxvQkFBUSxFQUFFO0FBRDBDLFdBQXhEO0FBSUgsU0E1Q2tDLENBNkNuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssa0JBQWhCLEVBQW9DO0FBRWhDLGNBQUksQ0FBQyxHQUFHLElBQUksSUFBSixFQUFSO0FBRUEsY0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQUYsS0FBa0IsR0FBbEIsR0FBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFGLEtBQWUsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsQ0FBekIsR0FBc0QsR0FBdEQsR0FBNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFGLEVBQUQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLENBQTdELEdBQXFGLEdBQXJGLEdBQTJGLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBRixFQUFELEVBQWUsQ0FBZixFQUFrQixHQUFsQixDQUE1RixHQUFxSCxHQUFySCxHQUEySCxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUE1SCxHQUF1SixHQUF2SixHQUE2SixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUF2SztBQUVBLFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEdBQXBCLENBQXdCLEVBQXhCO0FBRUgsU0F2RGtDLENBMERuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssaUJBQWhCLEVBQW1DO0FBRy9CO0FBRUE7QUFHQSxjQUFJLEdBQUcsR0FBRyxJQUFJLElBQUosRUFBVjtBQUVBLGNBQUksWUFBWSxHQUE4QixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixFQUF3QixLQUF0RTtBQUVBLGNBQUksR0FBRyxHQUFHLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBVjtBQUVBLGNBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFKLEdBQWMsT0FBZCxLQUEwQixHQUFHLENBQUMsT0FBSixHQUFjLE9BQWQsRUFBeEM7QUFFQSxjQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBRUEsV0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsR0FBckIsQ0FBeUIsT0FBekI7QUFFSDtBQUlKLE9BcEZELEVBRkosQ0EyRkk7QUFFQTs7QUFDQSxVQUFJLENBQUMsR0FBRyxTQUFKLENBQUksQ0FBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCLEtBQXJCLEVBQXlCO0FBRTdCLFlBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFMLEVBQVY7QUFDQSxZQUFJLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBakIsRUFBc0IsT0FBTyxHQUFQO0FBQ3RCLFlBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxNQUFMLENBQVksR0FBWixJQUFtQixHQUE1QjtBQUNBLFlBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBakIsQ0FBaEIsQ0FBVDtBQUVBLGVBQU8sRUFBUDtBQUNILE9BUkQsQ0E5RkosQ0F5R0k7OztBQUVBLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QjtBQUNuQixZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsU0FBVixFQUFSOztBQUVBLFlBQUksQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLFdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDSCxTQUZELE1BRU87QUFDSCxXQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLE9BQW5CLENBQTJCLE1BQTNCO0FBQ0g7QUFDSixPQVJELEVBM0dKLENBMkhJO0FBQ0E7QUFDQTs7QUFDQSxPQUFDLENBQUMsUUFBRCxDQUFELENBQVksRUFBWixDQUFlLE1BQWYsRUFBdUI7QUFDbkIsZUFBTyxDQUFDLEdBQVIsQ0FBWSxnREFBWjtBQUNBLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxTQUFSLENBQWtCO0FBQ2QsZ0JBQU0sRUFBRTtBQURNLFNBQWxCO0FBR0gsT0FMRDtBQVFILEtBdElEOztBQXNJQyxLQTNJTCxDQWtKSTtBQUNBO0FBQ0E7O0FBQ0E7QUFFSSxPQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixPQUE5QixDQUFzQyxPQUF0QztBQUNILEtBSEQsQ0FySkosQ0ErSkk7QUFDQTs7O0FBQ0E7QUFHSTtBQUNBO0FBRUEsT0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTLElBQVQsQ0FBYyxVQUFVLEVBQVYsRUFBWTtBQUV0QixTQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUjtBQUVBLFlBQUksV0FBVyxHQUFHLEVBQWxCOztBQUVBLFlBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFiOztBQUNBLFlBQUksY0FBYyxHQUFHLEVBQXJCOztBQUVBLFlBQUksTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFFdEIscUJBQVcsR0FBRyxhQUFhLE1BQWIsR0FBc0IsSUFBcEM7QUFDQSx3QkFBYyxHQUFHLE9BQU8sTUFBeEI7QUFDSCxTQUpELE1BS0s7QUFDRCxnQkFBTSxHQUFHLEVBQVQ7QUFDSDs7QUFFRCxTQUFDLENBQUMsa0NBQWtDLFdBQWxDLEdBQWdELGFBQWhELEdBQWdFLGNBQWhFLEdBQWlGLFVBQWxGLENBQUQsQ0FBK0YsWUFBL0YsQ0FBNEcsSUFBNUc7QUFFSCxPQXBCRCxFQU5KLENBNkJJOztBQUNBLFVBQUksS0FBSixFQUFXLGNBOUJmLENBZ0VJOzs7QUFFQSxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsQ0FBVixFQUFXO0FBRW5DLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsVUFBYixDQUFkOztBQUVBLFlBQUksT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBRzNCLGNBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxNQUFSLEdBQWlCLElBQWpCLEVBQVg7O0FBQ0EsY0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBYixDQUoyQixDQU0zQjs7O0FBQ0EsY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxPQUFiLENBQWI7O0FBQ0EsY0FBSSxjQUFjLEdBQUcsRUFBckI7O0FBRUEsY0FBSSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUN0QixrQkFBTSxHQUFHLEVBQVQ7QUFDSCxXQUZELE1BR0s7QUFDRCwwQkFBYyxHQUFHLE9BQU8sTUFBeEI7QUFDSDs7QUFFRCxjQUFJLElBQUksQ0FBQyxFQUFMLENBQVEsVUFBUixDQUFKLEVBQXlCO0FBQ3JCLGlCQUFLLENBQUMsSUFBTixDQUFXLGNBQWMsY0FBekI7O0FBQ0EsZ0JBQUksQ0FBQyxPQUFMO0FBQ0gsV0FIRCxNQUdPO0FBQ0gsZ0JBQUksQ0FBQyxNQUFMOztBQUNBLGlCQUFLLENBQUMsSUFBTixDQUFXLGNBQWMsY0FBekI7QUFFSDtBQUVKO0FBRUosT0FoQ0QsRUFsRUosQ0F1R0k7QUFDQTs7QUFHQSxPQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQyxLQUFsQyxDQUF3QyxVQUFDLENBQUQsRUFBRTtBQUV0QyxTQUFDLENBQUMsY0FBRjtBQUNBLFNBQUMsQ0FBQyxlQUFGO0FBRUEsWUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3QixHQUF4QixFQUF4QjtBQUVBLGdCQUFRLENBQUMsUUFBVCxDQUFrQixJQUFsQixHQUE2QyxDQUFDLENBQUMsTUFBRixDQUFVLElBQVYsR0FBaUIscUJBQWpCLEdBQXlDLGlCQUF0RjtBQUVILE9BVEQ7QUFlSCxLQTFIRCxDQWpLSixDQXlTSTtBQUNBOzs7QUFDQSxrREFBYSxLQUFiLEVBQWtCO0FBRWQsVUFBSSxxRUFBTyxLQUFQLE1BQWlCLFFBQXJCLEVBQStCLE9BQU8sS0FBUDs7QUFFL0IsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFFbkIsWUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFOLENBQXFCLEdBQXJCLENBQUwsRUFBZ0M7QUFFaEMsWUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUQsQ0FBakI7O0FBQ0EsWUFBSSxJQUFJLEdBQUcscUVBQU8sS0FBVixDQUFSOztBQUNBLFlBQUksS0FBSjs7QUFDQSxZQUFJLElBQUksS0FBSyxRQUFULEtBQXNCLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBTixDQUFZLEtBQUssWUFBakIsQ0FBOUIsQ0FBSixFQUFtRTtBQUMvRCxlQUFLLENBQUMsR0FBRCxDQUFMLEdBQWEsSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFiO0FBQ0gsU0FGRCxNQUdLLElBQUksSUFBSSxLQUFLLFFBQWIsRUFBdUI7QUFDeEIsZUFBSyxZQUFMLENBQWtCLEtBQWxCO0FBQ0g7QUFDSjtBQUNKLEtBbEJEOztBQXpTTyw2QkFBc0IsQ0FBdEI7QUE4Vlg7QUFBQyxHQWhXRDs7QUFBYSxnQ0FBVSxVQUFWO0FBa1doQixDQXBXRCxFQUFVLGdCQUFnQixLQUFoQixnQkFBZ0IsTUFBMUIsRSxDQXNXQTs7O0FBR0EsSUFBSSxhQUFhLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxVQUFyQixFQUFwQjtBQUNBO0FBR0EsQ0FBQyxDQUFDO0FBRUUsZUFBYSxDQUFDLFdBQWQsR0FGRixDQUtFO0FBQ0E7QUFDQTs7QUFDQSxZQUFVLENBQUMsYUFBYSxDQUFDLDJCQUFmLEVBQTRDLElBQTVDLENBQVY7QUFHSCxDQVhBLENBQUQ7QUFjQSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUosRUFBVDtBQUNBLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLFdBQTVCO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksZ0JBQWdCLENBQUMsVUFBakIsQ0FBNEIsV0FBeEM7QUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLEVBQVosRSxDQUlBO0FBRUE7O0FBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxPQUFMLEdBQWUsVUFBVSxJQUFWLEVBQWdCLEVBQWhCLEVBQWtCO0FBRTdCLFNBQU8sQ0FBQyxHQUFSLENBQVksaUJBQVo7QUFFQSxTQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFDQSxTQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFHQSxTQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaO0FBQ0EsU0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQVo7O0FBRUEsTUFBSSxDQUFDLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBTCxFQUEwQjtBQUN0QixXQUFPLENBQUMsR0FBUixDQUFZLHNCQUFaO0FBQ0EsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsTUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFMLENBQVUsUUFBVixFQUFvQixJQUFwQixDQUFYOztBQUVBLE1BQUksSUFBSSxLQUFLLFNBQVQsSUFBc0IsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsQ0FBMUMsRUFBNkM7QUFDekMsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBUSxDQUFDLENBQUQsS0FBTyxDQUFDLENBQUMsT0FBRixDQUFVLEVBQVYsRUFBYyxJQUFkLENBQWY7QUFDSCxDQXZCRCxDLENBMkJBOzs7QUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaOztBQUVBLFNBQVMscUJBQVQsR0FBOEI7QUFFMUIsU0FBTyxDQUFDLEdBQVIsQ0FBWSxxQ0FBWjs7QUFHQSxNQUFJLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsT0FBakIsQ0FBeUIsT0FBekIsRUFBa0MscUJBQWxDLENBQUosRUFBOEQ7QUFDMUQsV0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFDSDs7QUFFRCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVUsQ0FBVixFQUFXO0FBRXBDLFdBQU8sQ0FBQyxHQUFSLENBQVksMkJBQVo7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFhLENBQWI7QUFDSCxHQUpEO0FBTUg7O0FBRUQsQ0FBQyxDQUFDO0FBRUUsU0FBTyxDQUFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUVBLHVCQUFxQjtBQUV4QixDQU5BLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Y0EseUIiLCJmaWxlIjoiYnVuZGxlX0RlbW9TaXRlc19pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZGV2U2l0ZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2RlbW9zaXRlc2FwaScpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MDgyOS0xODE5XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9hZGREZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0YVNlcnZpY2VzIC0gMjAxOTA5MzAtMTkwNyAtIGdldEpvYiBbXCIgKyBpZCArIFwiXVwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMThdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgIHZhciBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL1Byb2plY3RBUEkvcmVmcmVzaHJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgcHJvamVjdCBzZWFyY2ggcmVjb3JkICBbMjAxOTExMjItMTYwOF0gWycgKyBpZCArICddIFsnICsgc2VydmluZ1BhZ2UgKyAnXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXZTaXRlczoga28ub2JzZXJ2YWJsZShfZGV2U2l0ZXMpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZXM6IF9nZXREZXZTaXRlcyxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDA5LzIxLzIwMTkgMDc6MTQgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDA5XSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiBcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmxldCBuZ0RlZmF1bHRBcHBsaWNhdGlvbiA9ICdkZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlICB9IGZyb20gXCIuL0RlbW9TaXRlc19pbmRleF9wMVwiXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4vRGF0YVNlcnZpY2VzJztcclxuXHJcbmltcG9ydCB7IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlIH0gZnJvbSAnLi9kZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0RlZmF1bHRBcHBsaWNhdGlvbiApO1xyXG5cclxuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2Uuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU7XHJcblxyXG5kZW1vc2l0ZXNfaW5kZXhfcDFfaW5zdGFuY2U7XHJcblxyXG4vLyAxMC8wMS8yMDE5IDEwOjE1IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNl0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcbmNvbnNvbGUubG9nKFwiRGVtb1NpdGVzX0luZGV4X21haW4gLSAyMDE5MTAwMS0xMDE3XCIpO1xyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDg6NTMgYW0gLSBTU04gXHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnO1xyXG5cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdEZWZhdWx0QXBwbGljYXRpb24pO1xyXG5cclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoKTtcclxuXHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfSW5kZXhfTWFpblwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEwMDEtMTEzMi1DMlwiLCBNZXNzYWdlOiBcIkxvYWRpbmcgRGVtb1NpdGVzX0luZGV4X01haW5cIiB9KTtcclxuXHJcblxyXG4gICIsIu+7v1xyXG4vLyAwNi8wNi8yMDE5IDA1OjQ0IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBpbmRleF9wMS5jc2h0bWxcclxuXHJcbi8vIDA4LzIxLzIwMTggMDI6NDYgYW0gLSBTU04gLSBDb3BpZWQgLSBCZWdpblxyXG4vLyAwOC8yMS8yMDE4IDAyOjQ2IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gQzogXFxTYW1zX1Byb2plY3RzXFxQbHVyYWxTaWdodFxcaHRtbDUgLSBsaW5lIC0gb2YgLSBidXNpbmVzcyAtIGFwcGxpY2F0aW9uc1xcZFxcZGVtb3NcXENvZGVkSG9tZXMuV2ViXFxWaWV3c1xcSG9tZXNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPiBcclxuXHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL2pzL3NpdGUnO1xyXG5cclxuXHJcblxyXG52YXIgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gS25vY2tvdXQgcmVsYXRlZFxyXG5cclxuXHJcbiAgICAgICAgdmFyIFZpZXdNb2RlbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDA4LzEyLzIwMTkgMDU6NTggYW0gLSBTU04gLSBbMjAxOTA4MTItMDUxNV0gLSBbMDA2XSAtIEFwcGx5IGZ1bGx0ZXh0IHNlYXJjaFxyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTAvMjAxOSAwNDoyMCBhbSAtIFNTTiAtIFsyMDE5MDkxMC0wMTQ3XSAtIFswMDldIC0gV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlxyXG4gICAgICAgICAgICAvLyBTaW5jZSBib3VuZCB0byBjb250cm9sLCBpdCBkaXNwbGF5cyB0aGUgb2JzZXJ2YWJsZSBhcyBvYmplY3Rbb2JqZWN0XS4gVGFrZSBvdXQuXHJcbiAgICAgICAgICAgIHNlbGYuU2VhcmNoVGV4dF9LTyA9IFwiXCI7IC8vIGtvLm9ic2VydmFibGUoe30pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA4LzIxLzIwMTkgMTI6MTYgcG0gLSBTU04gLSBbMjAxOTA4MjEtMTIxMF0gLSBbMDAzXSAtIFNlYXJjaFJlc3VsdHNGZWVkYmFja19LT1xyXG5cclxuICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08gPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08gPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgICAgIHNlbGYucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yX0RvbnRDYWxsX0tPID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wOC8yMDE5IDA3OjEwIHBtIC0gU1NOIC0gWzIwMTkwOTA4LTAwMDFdIC0gWzAwN10gLSBDb25jdXJyZW5jeVxyXG4gICAgICAgICAgICAvLy8vLy90aGlzLmN1cnJlbnRJdGVtID0ge307XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudEl0ZW0gPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmVycm9yTWVzc2FnZSA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbCAtIFVwZGF0ZVxyXG4gICAgICAgICAgICAvLyAgdGhpcy5kZXZTaXRlc0pTT04gPSBrby5vYnNlcnZhYmxlQXJyYXkoQEh0bWwuUmF3KE1vZGVsLmRldlNpdGVzSlNPTikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kZXZTaXRlc0pTT04gPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbCAtIFVwZGF0ZVxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzUgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA1XSAtIFNlbGVjdCB0b3AgMTVcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJC5nZXRKU09OKFwiL2FwaS9kZW1vc2l0ZXNhcGkvdG9wP3JlY29yZENvdW50PTE1XCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDgvMTYvMjAxOSAwNDoyNSBwbSAtIFNTTiAtIFsyMDE5MDgxNi0xNjI1XSAtIFswMDFdIC0gQ29ycmVjdCBsb2dpYyBmb3IgZ2V0dGluZyByZWNvcmQgY291bnQgdG8gc2hvdyBubyBzZWFyY2ggcmVzdWx0cyBtZXNzYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRSZWNvcmRDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVjb3JkQ291bnQ6IG51bWJlciA9IHNlbGYuZGV2U2l0ZXNKU09OKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgLy8gc2VsZi5kZXZTaXRlc0pTT05cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjb3JkQ291bnQ7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA4LzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDA5XSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgICAgIC8vIFJlbmFtZWQgZGVsLWNvbmZpcm0gZGVsX2NvbmZpcm1fcDFcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0RGVsQ29uZmlybSA9IGZ1bmN0aW9uIChpdGVtVG9EZWxldGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRJdGVtKGl0ZW1Ub0RlbGV0ZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjZGVsX2NvbmZpcm1fcDEnKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93Sm9iID0gZnVuY3Rpb24gKGRldlNpdGVJRCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzaG93LWpvYicpLm1vZGFsKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpdGVtVG9EZWxldGUgPSBrby50b0pTKHZtLmN1cnJlbnRJdGVtKTtcclxuICAgICAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZjYWxsaW5nY21kID0gZnVuY3Rpb24gKHNpdGVVcmwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdHJpbmdTdGFydHNXaXRoKHNpdGVVcmwsICdjbWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2l0ZVVybFdpdGhvdXRDTUQgPSBmdW5jdGlvbiAoc2l0ZVVybCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0cmluZ1N0YXJ0c1dpdGgoc2l0ZVVybCwgJ2NtZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNpdGVVcmwuc3Vic3RyaW5nKDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaXRlVXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA4LzEyLzIwMTkgMDU6NTcgYW0gLSBTU04gLSBbMjAxOTA4MTItMDUxNV0gLSBbMDA1XSAtIEFwcGx5IGZ1bGx0ZXh0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNjI0NTkwNS9mZXRjaGluZy1vci1zZW5kaW5nLWRhdGEtZnJvbS1hLWZvcm0tdXNpbmcta25vY2tvdXQtanNcclxuICAgICAgICAgICAgLy9zZWxmLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy92YXIgZGF0YSA9IEpTT04uc3RyaW5naWZ5KFxyXG4gICAgICAgICAgICAgICAgLy8gICAge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgIFNlYXJjaFRleHQ6IHNlbGYuU2VhcmNoVGV4dF9LTygpXHJcbiAgICAgICAgICAgICAgICAvLyAgICB9KTsgLy8gcHJlcGFyZSByZXF1ZXN0IGRhdGFcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMTAvMjAxOSAwNDoyMCBhbSAtIFNTTiAtIFsyMDE5MDkxMC0wMTQ3XSAtIFswMDldIC0gV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlxyXG4gICAgICAgICAgICAgICAgLy8gXCJTZWFyY2hUZXh0XCI6IHNlbGYuU2VhcmNoVGV4dF9LTygpXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFfcHJlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VhcmNoVGV4dFwiOiBzZWxmLlNlYXJjaFRleHRfS09cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhX3ByZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vJC5wb3N0KFwiL2VjaG8vanNvblwiLCBkYXRhLCBmdW5jdGlvbiAocmVzcG9uc2UpIC8vIHNlbmRzICdwb3N0JyByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAvL3tcclxuICAgICAgICAgICAgICAgIC8vICAgIC8vIG9uIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIC8vICAgIHNlbGYucmVzcG9uc2VKU09OKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIC8vfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8kLnBvc3QoXCIvYXBpL2RlbW9zaXRlc2FwaS9TZWFyY2hcIiwgZGF0YSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBzZWxmLmRldlNpdGVzSlNPTihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9kZW1vc2l0ZXNhcGkvU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgICAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDgvMjEvMjAxOSAxMjoxNCBwbSAtIFNTTiAtIFsyMDE5MDgyMS0xMjEwXSAtIFswMDJdIC0gU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08oJ1NlYXJjaCByZXR1cm5lZCBubyByZWNvcmRzLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2VsZi5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JfRG9udENhbGxfS08oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHV0aWwuc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSAtIFNTTiAtIFsyMDE5MDgyMS0xMzQ4XSBbMDAxXSAtIEFkZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodXRpbC5zaXRlX2luc3RhbmNlLnNob3dDb2xsYXBzZWREaXZzLCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZXRDbGFzc0ZvckRlbW9TdGF0ZSA9IGZ1bmN0aW9uIChmb3JEZW1vX3YyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2xhc3MgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZm9yRGVtb192Mikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGFzcyA9ICcgZm9yRGVtb19ZZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJ2ZvckRlbW9fTm8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJ2ZvckRlbW9fVW5kZWNpZGVkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBcInNpdGVEaXZcIiArIFwiIFwiICsgc2VsZWN0ZWRDbGFzcztcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh2bSk7XHJcbiAgICAgICAgdm0ubG9hZERhdGEoKTtcclxuXHJcbiAgICAgICBcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbnZhciBzdHJpbmdTdGFydHNXaXRoID0gZnVuY3Rpb24gKHN0cmluZywgc3RhcnRzV2l0aCkge1xyXG4gICAgc3RyaW5nID0gc3RyaW5nIHx8IFwiXCI7XHJcbiAgICBpZiAoc3RhcnRzV2l0aC5sZW5ndGggPiBzdHJpbmcubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIHN0YXJ0c1dpdGgubGVuZ3RoKSA9PT0gc3RhcnRzV2l0aDtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNzoxNiBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTBdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IGRlbW9zaXRlc19pbmRleF9wMV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcblxyXG5cclxuLy8gMTAvMDEvMjAxOSAwOTo0OSBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDRdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEFwcEluc2lnaHRzIH0gZnJvbSAnYXBwbGljYXRpb25pbnNpZ2h0cy1qcyc7XHJcblxyXG5cclxuXHJcbnZhciBBcHBJbnNpZ2h0c19VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0c19tb25pdG9yIC0gMjAxOTEwMDEtMDk1MSAtIDAwMS1CIC0gdG9wIGluc3RhbmNlJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIyMDE5MTAzMS0wNTQ3LTAwMS0wMDJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudCk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG5cclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IGVudmlyb25tZW50LmFwcEluc2lnaHRzLmluc3RydW1lbnRhdGlvbktleVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhdmVJbnN0cnVtZW50YXRpb25LZXkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWcuaW5zdHJ1bWVudGF0aW9uS2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zdHJ1bWVudGF0aW9uS2V5IGlzIG5vdCBzZXQgIC0gIDIwMTkxMDExLTE2NTQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9UZXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gZG9UZXN0Jyk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIHBhZ2UgdmlldyAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcoXHJcbiAgICAgICAgICAgIFwiRmlyc3RQYWdlLTIwMTkxMDAxLTEwMTVcIiwgLyogKG9wdGlvbmFsKSBwYWdlIG5hbWUgKi9cclxuICAgICAgICAgICAgbnVsbCwgLyogKG9wdGlvbmFsKSBwYWdlIHVybCBpZiBhdmFpbGFibGUgKi9cclxuICAgICAgICAgICAgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIC8qIChvcHRpb25hbCkgZGltZW5zaW9uIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgeyBtZWFzdXJlbWVudDE6IDEgfSwgLyogKG9wdGlvbmFsKSBtZXRyaWMgZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICAxMjMgLyogcGFnZSB2aWV3IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIGV2ZW50ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChcIlRlc3RFdmVudC0yMDE5MTAwMS0xMDE2XCIsIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCB7IG1lYXN1cmVtZW50MTogMSB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBsb2dQYWdlVmlldyA9IGZ1bmN0aW9uIChuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSwgZHVyYXRpb24/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWN0aW9uSW5zaWdodHNfTW9uaXRvciAtIGxvZ1BhZ2VWaWV3Jyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHVybCwgcHJvcGVydGllcyk7XHJcblxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWN0aW9uSW5zaWdodHNfTW9uaXRvciAtIGxvZ0V2ZW50Jyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uOiBFcnJvciwgcHJvcHM/OiBhbnksIGhhbmRsZWRBdD86IHN0cmluZykge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nRXhjZXB0aW9uICcpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbiwgaGFuZGxlZEF0LCBwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXAsXHJcbiAgICAgICAgZG9UZXN0OiBkb1Rlc3QsXHJcbiAgICAgICAgbG9nUGFnZVZpZXc6IGxvZ1BhZ2VWaWV3LFxyXG4gICAgICAgIGxvZ0V2ZW50OiBsb2dFdmVudCxcclxuICAgICAgICBsb2dFeGNlcHRpb246IGxvZ0V4Y2VwdGlvblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uSW5zaWdodHNfbW9uaXRvciAtIDIwMTkxMDAxLTA5NTEgLSBaWlogLSBib3R0b20gZmlsZSBPT09PT09PT09PT09PT09PT09PT09PT09PT09PTyAnKTtcclxuXHJcbmV4cG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yMi8yMDE5IDA5OjQxIHBtIC0gU1NOIC0gQ3JlYXRlZCB0byByZXN0b3JlIHBhZ2Ugb24gaGl0dGluZyB0aGUgYmFjayBidXR0b24gb3IgcmVjYWxsaW5nIHRoZSBwYWdlLlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggVG9wIC0gc2V0dXA/Pz8nKTtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdEZWZhdWx0QXBwbGljYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCAtIFNldHVwIC0gbmdEZWZhdWx0QXBwbGljYXRpb24gWycsIG5nRGVmYXVsdEFwcGxpY2F0aW9uLCAnXScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eCAtIFNldHVwIC0gZGlyZWN0aXZlPz8/Jyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZScsIG5nRGVmYXVsdEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigncmVzdG9yZVByZXZpb3VzUGFnZUFuZFRhc2tRdWV1ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZUFuZFRhc2tRdWV1ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l0ZV9UYXNrX1F1ZXVlX0xpc3QnLCByZXN1bHQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgZGlyZWN0aXZlICAqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5UG9zdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgcmVzdG9yZVBvcyAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjdXJyZW50UmVjb3JkLnBvc1ksIGxlZnQ6IGN1cnJlbnRSZWNvcmQucG9zWCwgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRDbGlja1NvdXJjZSgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAtICBoaWdobGlnaHRDbGlja1NvdXJjZSAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHgtMDAyXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwM1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEVsZW1lbnQ6IFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLnRleHQoJChzZWxlY3RlZEVsZW1lbnQpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gUmVtb3ZpbmcgY3VycmVudCByZW9jcmQuLi4gMTAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQgMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleCkgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKiogQ291bnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNDAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFkZGVkQ2xhc3Mob2JqUmVmKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQob2JqUmVmKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvdXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUuaHRtbFwiLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcblxyXG4vLyAwOS8yMS8yMDE5IDA4OjAwIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAxMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy8va25vY2tvdXQvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9qcy9EYXRhU2VydmljZXMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcblxyXG52YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ2RlbW9TaXRlX2luZGV4JywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJ10pO1xyXG5cclxuICAgIC8vIDA5LzI2LzIwMTkgMDU6NTEgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDU1MV0gQWRkICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5jb25maWcoW1wiJHJvdXRlUHJvdmlkZXJcIiwgXCIkbG9jYXRpb25Qcm92aWRlclwiLCBmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblxyXG4gICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvXCIsIHtcclxuICAgICAgICAgICAgY29udHJvbGxlcjogXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlc0luZGV4Lmh0bWxcIlxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDAxOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwMV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgLy8gVHVybiBvZmZcclxuICAgICAgICAvLyRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvZGV0YWlsXCIsIHtcclxuICAgICAgICAvLyAgICBjb250cm9sbGVyOiBcImRldlNpdGVVcGRhdGVDb250cm9sbGVyXCIsXHJcbiAgICAgICAgLy8gICAgLy8gdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy9TaXRlRGV0YWlsLmh0bWxcIlxyXG4gICAgICAgIC8vICAgIHRlbXBsYXRlVXJsOiBcIi9EZXZTaXRlcy9DcmVhdGVfcGFydGlhbFwiXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yNi8yMDE5IDA1OjUxIGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA1NTFdIEFkZCAkbG9jYXRpb25Qcm92aWRlclxyXG4gICAgICAgIC8vIFVzZSB0aGUgSFRNTDUgaGlzdG9yeSBBUElcclxuICAgICAgICAvLyAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogXCIvXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvZG86ICAxMS8xMy8yMDE5IDEwOjE5IHBtIC0gU1NOIC0gVGVzdGluZ1xyXG4gICAgICAgIC8vIFRha2Ugb3V0XHJcbiAgICAgICAgLy8gJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHt9KTtcclxuXHJcbiAgICAgICAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSwgcmV3cml0ZUxpbmtzOiBmYWxzZSB9KS5oYXNoUHJlZml4KCchJyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZyByb3V0ZXMgWzIwMTkwOTI2LTA1NTZdXCIpO1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgLy8gMDkvMjEvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuICAgIC8vID0gZnVuY3Rpb25cclxuICAgIHZhciBkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDEgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLlRpdGxlID0gXCJUaXRsZSBzZXQgaW4gQW5ndWxhciBjb250cm9sbGVyLlwiO1xyXG5cclxuXHJcbiAgICAgICAgLy8gJHNjb3BlLmRhdGEgPSBbXTtcclxuICAgICAgICAkc2NvcGUuZGF0YSA9IGRhdGFTZXJ2aWNlO1xyXG5cclxuICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vICAgICRodHRwLmdldCgnLi9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICBkYXRhU2VydmljZS5nZXREZXZTaXRlcygpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCA9IGtvLm9ic2VydmFibGUoJHNjb3BlLmRhdGEuZGV2U2l0ZXMoKSk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MTAtMDEwMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudHV0b3JpYWxzcGxhbmUuY29tL2FuZ3VsYXJqcy11cGRhdGUtdGFibGUtcm93L1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplLlxyXG4gICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBhbmd1bGFyLmNvcHkoY29udGVudCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8kc2NvcGUuZWRpdGFibGVyb3cgPSBjb250ZW50O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlRGF0YSA9IGZ1bmN0aW9uIChpbmR4KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHRoZUluZGV4ID0gJHNjb3BlLmRhdGFfbG9jYWwoKS5maW5kSW5kZXgociA9PiByLmlkID09PSAkc2NvcGUuZWRpdGFibGVyb3cuaWQpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGFfbG9jYWwoKVt0aGVJbmRleF0gPSAkc2NvcGUuZWRpdGFibGVyb3c7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YS51cGRhdGVEZXZTaXRlKCRzY29wZS5lZGl0YWJsZXJvdylcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MDgtMDYyOC1TIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMjAxOTA5MDgtMDYyOC1FIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5yZXNldCgpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBbXTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudC5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKSByZXR1cm4gJ2VkaXRNb2RlJztcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJ3ZpZXdNb2RlJztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdXHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMTI6MDEgYW0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDAxXSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBoeXBlcmxpbmsgaW52YWxpZCBhZGRyZXNzZXNcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzVmFsaWRVcmwgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghY29udGVudCB8fCBjb250ZW50LnNpdGVVcmwgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsVG9UZXN0ID0gY29udGVudC5zaXRlVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjMSA9IHVybFRvVGVzdC5zdWJzdHIoMCwgNyk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IHVybFRvVGVzdC5zdWJzdHIoMCwgOCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGNoZW1hcyA9IFwifGh0dHA6Ly98aHR0cHM6Ly98XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWRPcHRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMSkgPT0gMSkgPyAxIDogMDtcclxuICAgICAgICAgICAgdmFsaWRPcHRpb25zICs9ICh2YWxpZGNoZW1hcy5pbmRleE9mKGMyKSA9PSAxKSA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh2YWxpZE9wdGlvbnMgPiAwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDA1OjMxIHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICAkc2NvcGUuc2V0VGFibGVSb3dDbGFzcyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PSAwID8gJ2V2ZW5Sb3cnIDogJ29kZFJvdyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIiwgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHdpbmRvdycsICdkYXRhU2VydmljZScsIGRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMV0pO1xyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciAgXHJcbiAgICB2YXIgZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLmRldlNpdGVSZWNvcmQgPSB7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwidGVzdCBzdWJtaXRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjIwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwMl0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgLy8gQWRkZWQgY2FzdFxyXG4gICAgICAgICAgICB2YXIgZjogSFRNTEZvcm1FbGVtZW50ID0gPGFueT4kKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWYudmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgZm9ybS4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zaXRlVGl0bGUpO1xyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zb2x1dGlvbl9EZXRhaWxzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICRodHRwLnBvc3QoXCIuL2FwaS9kZW1vc2l0ZXNhcGlcIiwgJHNjb3BlLmRldlNpdGVSZWNvcmQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5hZGREZXZTaXRlKCRzY29wZS5kZXZTaXRlUmVjb3JkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uID0gJyMvJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIHJlY29yZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcbi8vIDEwLzAxLzIwMTkgMDk6NDcgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDAzXSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHJcblxyXG4gICAgYXBwSW5zaWdodHM6IHtcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzJ1xyXG4gICAgICAgIC8vIDEwLzMxLzIwMTkgMDM6NTggYW0gLSBTU04gLSBBZGRlZFxyXG5cclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMDcvMjAxOSAwODozNCBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgXCJJbnN0cnVtZW50YXRpb25LZXlcIjogXCJkZWxldGVkXCIsIFwiZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzXCIgLFxyXG4gICAgICAgIC8vIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAtIFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCJcclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCIsXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn07Iiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDQ1Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dMT0JBTFMgLSBhc3luY0dyZWV0IC0gNTAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxubGV0IGQxID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIEFBQUEgJywgZDEpO1xyXG5cclxuXHJcbi8vMDgvMjMvMjAxOCAwMToyNCBhbSAtIFNTTlxyXG5cclxuLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcblxyXG5cclxuLy8gdmFyIHNpdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcbm5hbWVzcGFjZSBzaXRlX2luc3RhbmNlX05TIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3Mgc2l0ZV9DbGFzcyB7XHJcblxyXG4gICAgICAgIHN0YXRpYyBsb2FkQ291bnRlcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICBzZXREZWZhdWx0cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBOYW1lID0gJCh0aGlzKS5hdHRyKCdwb3B1cC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICAgYWxlcnQoJ2NsaWNrZWQgbWUhIGNtZE5hbWUgWycgKyBjbWROYW1lICsgXCJdIHBvcHVwLW5hbWUgIFtcIiArIHBvcHVwTmFtZSArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY21kLW5hbWUnLCBjbWROYW1lLCAncG9wdXBOYW1lJywgcG9wdXBOYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZSAnLCBqUXVlcnlPYmplY3ROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZTInLCBqUXVlcnlPYmplY3ROYW1lMik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUsICdqUXVlcnlPYmplY3ROYW1lJywgalF1ZXJ5T2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZScsIGpRdWVyeU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gZnVuY3Rpb24gKHN0cjEsIGxlbiwgY2hhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBzdHIxLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMSA9IGNoYXIucmVwZWF0KGxlbikgKyBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczIgPSBzMS5zdWJzdHJpbmcobGVuICsgKHN0ci5sZW5ndGggLSBsZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDEwOjI4IGFtIC0gU1NOXHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wMi8yMDE5IDA3OjI1IHBtIC0gU1NOIC0gWzIwMTkxMTAxLTA1MjZdIC0gWzAxM10gLSBDaGVjayBsb2dpbiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gRGlkIG5vdCBmaW5pc2guXHJcbiAgICAgICAgICAgIC8vIFRvZG8tU1NOXHJcbiAgICAgICAgICAgICQoJy5tb2RhbCcpLm9uKCdzaG93JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgIC0gIDIwMTkxMTAyLTE5MzAgLSBTZXR0aW5nIGRyYWdnYWJsZS4nKVxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzI0LzIwMTkgMTE6MjAgcG0gLSBTU04gLSBEaXNhYmxlXHJcbiAgICAgICAgICAgIGlmIChmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzAxLzIwMTkgMDQ6NTIgYW0gLSBTU04gLSBVc2UgSmF2YVNjcmlwdCBvbmx5XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3QxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAxMjozMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDRdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgYSBvZiBsaXN0MSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG4gICAgICAgICAgICAgICAgbGlzdDEuZm9yRWFjaChmdW5jdGlvbiAoYSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE3LzIwMTkgMDQ6MTYgYW0gLSBTU04gLSBVcGRhdGUgdG8gZXhjbHVkZSBoaWdobGlnaHRpbmdcclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPC9nLCAnJmx0OycpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhjbHVkZSA8aCBhbmQgPG4uIEFscmVhZHkgc2V0dXAgZm9yIDxpLiAgU2VlIHNpdGUuY3NzLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDcvMjAxOSAxMTo1MCBhbSAtIFNTTiAtIFVwZGF0ZSAtIE1hdGNoZXMgc2hvd24gaHR0cHM6Ly93d3cucmVnZXh0ZXN0ZXIuY29tL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvPChbXml8Xi9pfF5ofF4vaHxebnxeL25dKXsxfVteXFxzfF4+XXsxfS9nLCAnJmx0OyQxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJ1xcbjEtLS1cXG5bJCZdXFxuMi0tLVxcblskMV1cXG4zLS0tXFxuWyQyXVxcbjQtLS1cXG5bJDNdXFxuXFxuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IGNvdmVycmVkIGgxLCBoMiwgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGtub2Nrb3V0IGlzIGRvaW5nIGl0cyBvd24gdGhpbmcgd2hlbiBpdCBjb21lcyB0byB0YWdzLiBFdmlkZW50IHdpdGggdGhlIHVzZSBvZiBnZW5lcmljIHR5cGVzICggZnVuY3Rpb248U29tZVR5cGU+IClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICcmbHQ7JDMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgLy8gXHJcblxyXG5cclxuICAgICAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAgICAgLy8gU291cmNlIGh0dHBzOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL1VwbG9hZEZpbGUvMWQzMTE5L2RhdGUtc2VyaWFsaXphdGlvbi13aXRoLWFuZ3VsYXItanMtd2ViLWFwaS9cclxuXHJcbiAgICAgICAgaXNvODYwMVJlZ0V4ID0gLygxOXwyMHwyMSlcXGRcXGQoWy0vLl0pKDBbMS05XXwxWzAxMl0pXFwyKDBbMS05XXxbMTJdWzAtOV18M1swMV0pVChcXGRcXGQpKFs6Ly5dKShcXGRcXGQpKFs6Ly5dKShcXGRcXGQpLztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2godGhpcy5pc284NjAxUmVnRXgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZuQ29udmVyRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gICAgc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgICAgIC8vICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgLy8gICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB7XHJcblxyXG4gICAgICAgIC8vICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIC8vICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAvL30oKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmxldCBzaXRlX2luc3RhbmNlID0gbmV3IHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcygpO1xyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgIHNldFRpbWVvdXQoc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0geHh4eHh4eHh4eHgnKTtcclxuY29uc29sZS5sb2coc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKTtcclxuY29uc29sZS5sb2coZDIpO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZm4uaXNCb3VuZC0wMjQ1Jyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3RoaXMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcInRoaXMuZGF0YSgnZXZlbnRzJylcIik7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEoJ2V2ZW50cycpKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSgnZXZlbnRzJykpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVuZGVmaW5lZCA8PDw8PDw8PDw8XCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyJyk7XHJcblxyXG5mdW5jdGlvbiBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAzMzMgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDInKTtcclxuXHJcbiAgICBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=