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

/***/ "./Interceptors/SessonTimeoutInterceptor.ts":
/*!**************************************************!*\
  !*** ./Interceptors/SessonTimeoutInterceptor.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
 // 12/07/2019 03:53 am - SSN - [20191207-0353] - [001] - SessionTimeoutInterceptor
// https://code.angularjs.org/1.2.27/docs/api/ng/service/$http#interceptors

console.log('sessionTimeoutInterceptor - top - 20191207-0410');

var sessionTimeoutInterceptor_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    console.log('sessionTimeoutInterceptor - function top - 20191207-0411');
    var angularjs_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('SessionTimeoutInterceptor', currentApplication);
    angularjs_module.config(['$httpProvider', function ($httpProvider) {
      var interceptor = ['$q', '$rootScope', //                'userSession',
      function ($q, $rootScope) {
        console.log('sessionTimeoutInterceptor - Main function - 20191207-0412-MF');
        var service = {
          // run this function before making requests
          'request': function request(config) {
            ////////console.log('sessionTimeoutInterceptor - Main function - SERVICE - 20191207-0412-SERVICE');
            ////////console.log('config next:');
            ////////console.log(config);
            ////////////if (config.method === 'GET' || userSession.isAuth()) {
            ////////////    // the request looks good, so return the config
            return config; ////////////}
            ////////////// bad request, so reject
            ////////////return $q.reject(config);
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

/***/ "./Shared/SharedUtil.ts":
/*!******************************!*\
  !*** ./Shared/SharedUtil.ts ***!
  \******************************/
/*! exports provided: LoadAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAll", function() { return LoadAll; });
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.ts");
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.ts");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.ts");
/* harmony import */ var _Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Interceptors/SessonTimeoutInterceptor */ "./Interceptors/SessonTimeoutInterceptor.ts");
// 01/02/2020 02:30 pm - SSN - [20200102-1234] - [010] - Add AngularJS login




var ngApplicationName = 'timesheetApp';

function LoadAll() {
  _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_0__["RestorePreviousPageState_instance"].doSetup(ngApplicationName);
  _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_1__["changeMonitorService_instance"].doSetup(ngApplicationName);
  _DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName);
  _Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_3__["default"].doSetup(ngApplicationName);
}



/***/ }),

/***/ "./Util/ApplicationInsights_Monitor.ts":
/*!*********************************************!*\
  !*** ./Util/ApplicationInsights_Monitor.ts ***!
  \*********************************************/
/*! exports provided: AppInsights_Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInsights_Util", function() { return AppInsights_Util; });
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment */ "./environment.ts");
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
        z[y].addEventListener('change', ChangeMonitor_Util.setItemChanged_ssn);
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

/***/ "./Util/RestorePreviousPageState.ts":
/*!******************************************!*\
  !*** ./Util/RestorePreviousPageState.ts ***!
  \******************************************/
/*! exports provided: RestorePreviousPageState_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePreviousPageState_instance", function() { return RestorePreviousPageState_instance; });
/* harmony import */ var _ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ "./globals.ts");
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

/***/ "./environment.ts":
/*!************************!*\
  !*** ./environment.ts ***!
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
      $("[data-toggle='collapse']").trigger('click');
    }; // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function prefixPreWithShowHideAnchor() {


    site_Class.prototype.prefixPreWithShowHideAnchor = function (caller) {
      // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
      // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
      console.log('site.ts 20200102-1528 - prefixPreWithShowHideAnchor [' + caller + ']');
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
      return site_instance.prefixPreWithShowHideAnchor('20200102-1534-2');
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

/***/ "./users/login.ts":
/*!************************!*\
  !*** ./users/login.ts ***!
  \************************/
/*! exports provided: loginController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginController_instance", function() { return loginController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.ts");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.ts");
// 01/02/2020 12:34 pm - SSN - [20200102-1234] - [001] - Add AngularJS login



console.log('login  20200102-1243 - 001');

var loginController_instance = function () {
  console.log('login  20200102-1243 - 002 - Instance top ');
  var angularApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('LoginController', "timesheetApp"); // $uibModal $uibModalInstance

  angularApp.controller('loginController', ['$scope', '$uibModal', '$http', '$q', 'dataService', 'changeMonitorService', '$timeout', '$rootScope', function ($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, $timeout, $rootScope) {
    console.log('login  20200102-1243 - 003 - controller function top ');
    $timeout(function () {
      changeMonitorService.setupMonitor();
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].setDefaults();
    }, 600);
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

    $scope.submitForm = function () {
      $scope.feedbackToUserText = "";
      $scope.feedbackToUserClassNameCase = "";
      var promise = null;

      if ($scope.editableTimeLog.timeLogId === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
      }

      if (promise) {
        promise.then(function (data) {
          $scope.timeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.editableTimeLog);
          $uibModalInstance.close();
          toastr.info("Record saved.");

          function refreshRecord_Sucess(result) {
            $rootScope.$broadcast('TimeLog_Index_Refresh', result);
          }

          function refreshRecord_Error(result) {
            console.error(result);
          }
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
    };

    $scope.login = function () {
      console.log('login - function click = 20200102-1334');
      $uibModalInstance.open({
        templateUrl: '/js/Users/login.html',
        controller: 'loginController',
        backdrop: 'static',
        keyboard: false,
        resolve: {}
      });
    };

    console.log('login  20200102-1243 - 005 - controller function bottom');
  }]);
  return {
    angularApp: angularApp
  };
}();


console.log('login  20200102-1243 - 002 - function bottom ');

/***/ }),

/***/ "./users/users_main.ts":
/*!*****************************!*\
  !*** ./users/users_main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shared_SharedUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/SharedUtil */ "./Shared/SharedUtil.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./users/login.ts");
// 01/02/2020 12:42 pm - SSN - [20200102-1234] - [002] - Add AngularJS login


_Shared_SharedUtil__WEBPACK_IMPORTED_MODULE_0__["LoadAll"]();
_login__WEBPACK_IMPORTED_MODULE_1__["loginController_instance"].angularApp;

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./users/users_main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./users/users_main.ts */"./users/users_main.ts");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0ludGVyY2VwdG9ycy9TZXNzb25UaW1lb3V0SW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL1NoYXJlZFV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdXNlcnNfbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQSx5QiIsImZpbGUiOiJidW5kbGVfdXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERhdGEgc3RydWN0IHRvIGNvbnRhaW4gb25seSBDIHNlY3Rpb24gd2l0aCBjdXN0b20gZmllbGRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBCYXNlKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCYXNlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkJhc2UgPSBCYXNlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJCYXNlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN5c3RlbSB2YXJpYWJsZXMgZm9yIGEgdGVsZW1ldHJ5IGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEVudmVsb3BlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBFbnZlbG9wZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlUmF0ZSA9IDEwMC4wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEVudmVsb3BlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkVudmVsb3BlID0gRW52ZWxvcGU7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JU2VyaWFsaXphYmxlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL0VudmVsb3BlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JQXBwbGljYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSURldmljZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JSW50ZXJuYWwudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUxvY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lPcGVyYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNhbXBsZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JVXNlci50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2Vzc2lvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVGVsZW1ldHJ5L0lFbnZlbG9wZS50c1wiLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIEFJO1xyXG4oZnVuY3Rpb24gKEFJKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbGV2ZWwgb2Ygc2V2ZXJpdHkgZm9yIHRoZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgdmFyIFNldmVyaXR5TGV2ZWw7XHJcbiAgICAoZnVuY3Rpb24gKFNldmVyaXR5TGV2ZWwpIHtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJWZXJib3NlXCJdID0gMF0gPSBcIlZlcmJvc2VcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJJbmZvcm1hdGlvblwiXSA9IDFdID0gXCJJbmZvcm1hdGlvblwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIldhcm5pbmdcIl0gPSAyXSA9IFwiV2FybmluZ1wiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiQ3JpdGljYWxcIl0gPSA0XSA9IFwiQ3JpdGljYWxcIjtcclxuICAgIH0pKFNldmVyaXR5TGV2ZWwgPSBBSS5TZXZlcml0eUxldmVsIHx8IChBSS5TZXZlcml0eUxldmVsID0ge30pKTtcclxufSkoQUkgfHwgKEFJID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUNvbmZpZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lUZWxlbWV0cnlDb250ZXh0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9TZXZlcml0eUxldmVsLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB2YXIgVXRpbEhlbHBlcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFV0aWxIZWxwZXJzKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBnZW5lcmF0ZSByYW5kb20gaWQgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVdGlsSGVscGVycy5uZXdJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxMDczNzQxODI0OyAvLzUgc3ltYm9scyBpbiBiYXNlNjQsIGFsbW9zdCBtYXhpbnRcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyYW5kb20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBiYXNlNjRjaGFycy5jaGFyQXQocmFuZG9tICUgNjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IocmFuZG9tIC8gNjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxIZWxwZXJzO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgQXBwbGljYXRpb25JbnNpZ2h0cy5VdGlsSGVscGVycyA9IFV0aWxIZWxwZXJzO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQ29uZmlnLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lBcHBJbnNpZ2h0cy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsvVXRpbEhlbHBlcnMudHNcIi8+XHJcbmRlZmluZShcIkphdmFTY3JpcHRTREsuTW9kdWxlL0FwcEluc2lnaHRzTW9kdWxlXCIsIFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgQXBwSW5zaWdodHNNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQXBwSW5zaWdodHNNb2R1bGUoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIERlZmluZSBhIHRlbXBvcmFyeSBtZXRob2QgdGhhdCBxdWV1ZXMtdXAgYSB0aGUgcmVhbCBtZXRob2QgY2FsbFxyXG4gICAgICAgICAgICBhaU9iamVjdFtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsQXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXVlIGlzIGF2YWlsYWJsZSwgaXQgbWVhbnMgdGhhdCB0aGUgZnVuY3Rpb24gd2Fzbid0IHlldCByZXBsYWNlZCB3aXRoIGFjdHVhbCBmdW5jdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBleGVjdXRlIHRoZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gY2FwdHVyZSBpbml0aWFsIGNvb2tpZSBpZiBwb3NzaWJsZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QuY29va2llID0gZG9jdW1lbnQuY29va2llO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiY2xlYXJBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwiZmx1c2hcIixcclxuICAgICAgICAgICAgICAgIFwic2V0QXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRGVwZW5kZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXhjZXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrTWV0cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrUGFnZVZpZXdcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tUcmFjZVwiXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHdoaWxlIChtZXRob2QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChtZXRob2QucG9wKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQgPSBmdW5jdGlvbiAoYWlDb25maWcpIHtcclxuICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZS5jb25maWcgPSBhaUNvbmZpZztcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGlmIHNjcmlwdCB3YXMgcHJldmlvdXNseSBkb3dubG9hZGVkIGFuZCBpbml0aWFsaXplZCwgcXVldWUgd2lsbCBiZSBkZWxldGVkLCByZWluaXRpYWxpemUgaXRcclxuICAgICAgICAgICAgaWYgKCFhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gYWlDb25maWcudXJsIHx8IFwiaHR0cHM6Ly9hejQxNjQyNi52by5tc2VjbmQubmV0L3NjcmlwdHMvYS9haS4wLmpzXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29sbGVjdCBnbG9iYWwgZXJyb3JzIGJ5IHdyYXBwaW5nIHRoZSB3aW5kb3cub25lcnJvciBtZXRob2RcclxuICAgICAgICAgICAgaWYgKCFhaUNvbmZpZy5kaXNhYmxlRXhjZXB0aW9uVHJhY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RfMSA9IFwib25lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QoXCJfXCIgKyBtZXRob2RfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxPbkVycm9yID0gd2luZG93W21ldGhvZF8xXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1ttZXRob2RfMV0gPSBmdW5jdGlvbiAobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZWQgPSBvcmlnaW5hbE9uRXJyb3IgJiYgb3JpZ2luYWxPbkVycm9yKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbXCJfXCIgKyBtZXRob2RfMV0obWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwSW5zaWdodHNNb2R1bGUsIFwiYXBwSW5zaWdodHNJbnN0YW5jZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFuZFNldHVwOiBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cG9zaW5nIGl0IGZvciB1bml0IHRlc3RzIG9ubHksIG5vdCBwYXJ0IG9mIGludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZGVmaW5lTGF6eU1ldGhvZHM6IEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWUgPSBcImFwcEluc2lnaHRzXCI7XHJcbiAgICAgICAgcmV0dXJuIEFwcEluc2lnaHRzTW9kdWxlO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuQXBwSW5zaWdodHMgPSBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWkubW9kdWxlLmpzLm1hcCIsIlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBSZW5hbWUgbW9kdWxlIHRvIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcblxyXG5cclxuLy8gMDUvMDQvMjAxOSAwOToyNiBhbSAtIFNTTiAtIFsyMDE5MDUwNC0wODU1XSAtIFswMDRdIC0gVGVzdGluZyBpZiB3ZSBjYW4gcmVwbGFjZSBnbG9iYWwgdmFyaWFibGVcclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcbi8vIDA1LzA0LzIwMTkgMDk6NTggYW0gLSBTU04gLSBTaW5jZSBoYXZpbmcgdG8gaW1wb3J0IGFuZ3VsYXIgd2hlbiBjb252ZXJ0aW5nIHRvIGEgbW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgICBJQ29sdW1uQmFnVGVtcCBmcm9tICcuL0lDb2x1bW5CYWcnO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBkYXRhU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEYXRhU2VydmljZXMnLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuZmFjdG9yeShcImRhdGFTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgX2RldlNpdGVzID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9kZW1vc2l0ZXNhcGknKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuY29weShyZXN1bHQuZGF0YSwgX2RldlNpdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjQ5IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMV0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRUaW1lbG9nID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDA3OjE1IGFtIC0gU1NOIC0gWzIwMTkwOTI0LTA0MDFdIC0gWzAwOV0gLSBRdWljayB0aW1lbG9nIGVudHJ5XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTA4MjktMTgxOV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTkvMjAxOSAwMjowMCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBDcmVhdGVkICAgIFxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI2IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgdmFyIF9UaW1lbG9nUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL1JlZnJlc2hSZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MTExOS0wMjAxXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwM10gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgdmFyIF91cGRhdGVEZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wOS8yMDE5IDEwOjMzIHBtIC0gU1NOIC0gWzIwMTkwOTA5LTIxMzZdIC0gWzAwNF0gLSBzZWxlY3QgdG9wIDIwIFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwMzozOCBhbSAtIFNTTiAtIExvZ2ljIGVycm9yIC0gdXBkYXRpbmcgd3JvbmcgbGlua1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTIvMjAxOSAxMToyNiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIHZhciBfaW5zZXJ0VGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDM6MDAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDA0XSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICB2YXIgX2FkZE9yVXBkYXRlVGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE3LzIwMTkgMTI6NTYgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE2XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBvcHRpb24gdG8gbGlzdCBKb2JzXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xOC8yMDE5IDAzOjI0IGFtIC0gU1NOIC0gWzIwMTkwOTE3LTA5MjldIC0gWzAxN10gLSBBZGRpbmcgcGFnaW5nIGZvciBhbmd1bGFyIGxpc3RzXHJcbiAgICAgICAgICAgIC8vIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChwYWdlTm8sIHJlY29yZHNQZXJQYWdlLCBjb2x1bW5OYW1lLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDk6MTQgYW0gLSBTU04gLSBQYXNzIHByb2plY3RJZFxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvbGlzdC8nICsgY29sdW1uQmFnLmN1cnJlbnRQYWdlTm8gKyBcIi9cIiArIGNvbHVtbkJhZy5yZWNvcmRzUGVyUGFnZSArIFwiL1wiICsgY29sdW1uQmFnLmNvbHVtbk5hbWUgKyBcIi9cIiArIGNvbHVtbkJhZy5kZXNjICsgXCIvXCIgKyBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgKyBcIj9wcm9qZWN0SWQ9XCJcclxuICAgICAgICAgICAgICAgICAgICArIGNvbHVtbkJhZy5ma19maWx0ZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYnMgWzIwMTkwOTE3LTAwNTddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMzAvMjAxOSAwNzowNiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYiA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDAzOjUzIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMV0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5cclxuLy8gaHR0cHM6Ly9jb2RlLmFuZ3VsYXJqcy5vcmcvMS4yLjI3L2RvY3MvYXBpL25nL3NlcnZpY2UvJGh0dHAjaW50ZXJjZXB0b3JzXHJcblxyXG5cclxuY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSB0b3AgLSAyMDE5MTIwNy0wNDEwJyk7XHJcblxyXG5sZXQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gZnVuY3Rpb24gdG9wIC0gMjAxOTEyMDctMDQxMScpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJqc19tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3InLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBhbmd1bGFyanNfbW9kdWxlLmNvbmZpZyhbXHJcbiAgICAgICAgICAgICckaHR0cFByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJjZXB0b3IgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyRxJyxcclxuICAgICAgICAgICAgICAgICAgICAnJHJvb3RTY29wZScsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgJ3VzZXJTZXNzaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJHEsICRyb290U2NvcGUpIHsgLy8gLCB1c2VyU2Vzc2lvblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIDIwMTkxMjA3LTA0MTItTUYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGJlZm9yZSBtYWtpbmcgcmVxdWVzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXF1ZXN0JzogZnVuY3Rpb24gKGNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIFNFUlZJQ0UgLSAyMDE5MTIwNy0wNDEyLVNFUlZJQ0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdjb25maWcgbmV4dDonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL2lmIChjb25maWcubWV0aG9kID09PSAnR0VUJyB8fCB1c2VyU2Vzc2lvbi5pc0F1dGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLyAgICAvLyB0aGUgcmVxdWVzdCBsb29rcyBnb29kLCBzbyByZXR1cm4gdGhlIGNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8gYmFkIHJlcXVlc3QsIHNvIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL3JldHVybiAkcS5yZWplY3QoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaChpbnRlcmNlcHRvcik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcl9pbnN0YW5jZTtcclxuXHJcbiIsIlxyXG5cclxuLy8gMDEvMDIvMjAyMCAwMjozMCBwbSAtIFNTTiAtIFsyMDIwMDEwMi0xMjM0XSAtIFswMTBdIC0gQWRkIEFuZ3VsYXJKUyBsb2dpblxyXG5cclxuXHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJztcclxuXHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vRGF0YVNlcnZpY2VzJztcclxuXHJcbmltcG9ydCBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIGZyb20gJy4uL0ludGVyY2VwdG9ycy9TZXNzb25UaW1lb3V0SW50ZXJjZXB0b3InO1xyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gJ3RpbWVzaGVldEFwcCc7XHJcblxyXG5cclxuZnVuY3Rpb24gTG9hZEFsbCgpIHtcclxuXHJcbiAgICBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbiAgICBcclxuICAgIHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgTG9hZEFsbCB9O1xyXG5cclxuIiwiXHJcblxyXG5cclxuLy8gMTAvMDEvMjAxOSAwOTo0OSBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDRdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcblxyXG5cclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLi9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IEFwcEluc2lnaHRzIH0gZnJvbSAnYXBwbGljYXRpb25pbnNpZ2h0cy1qcyc7XHJcblxyXG5cclxuXHJcbnZhciBBcHBJbnNpZ2h0c19VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0c19tb25pdG9yIC0gMjAxOTEwMDEtMDk1MSAtIDAwMS1CIC0gdG9wIGluc3RhbmNlJyk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCIyMDE5MTAzMS0wNTQ3LTAwMS0wMDJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlbnZpcm9ubWVudCk7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG5cclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IGVudmlyb25tZW50LmFwcEluc2lnaHRzLmluc3RydW1lbnRhdGlvbktleVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhdmVJbnN0cnVtZW50YXRpb25LZXkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWcuaW5zdHJ1bWVudGF0aW9uS2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zdHJ1bWVudGF0aW9uS2V5IGlzIG5vdCBzZXQgIC0gIDIwMTkxMDExLTE2NTQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9UZXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gZG9UZXN0Jyk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIHBhZ2UgdmlldyAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcoXHJcbiAgICAgICAgICAgIFwiRmlyc3RQYWdlLTIwMTkxMDAxLTEwMTVcIiwgLyogKG9wdGlvbmFsKSBwYWdlIG5hbWUgKi9cclxuICAgICAgICAgICAgbnVsbCwgLyogKG9wdGlvbmFsKSBwYWdlIHVybCBpZiBhdmFpbGFibGUgKi9cclxuICAgICAgICAgICAgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIC8qIChvcHRpb25hbCkgZGltZW5zaW9uIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgeyBtZWFzdXJlbWVudDE6IDEgfSwgLyogKG9wdGlvbmFsKSBtZXRyaWMgZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICAxMjMgLyogcGFnZSB2aWV3IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIGV2ZW50ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChcIlRlc3RFdmVudC0yMDE5MTAwMS0xMDE2XCIsIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCB7IG1lYXN1cmVtZW50MTogMSB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBsb2dQYWdlVmlldyA9IGZ1bmN0aW9uIChuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSwgZHVyYXRpb24/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWN0aW9uSW5zaWdodHNfTW9uaXRvciAtIGxvZ1BhZ2VWaWV3Jyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHVybCwgcHJvcGVydGllcyk7XHJcblxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWN0aW9uSW5zaWdodHNfTW9uaXRvciAtIGxvZ0V2ZW50Jyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uOiBFcnJvciwgcHJvcHM/OiBhbnksIGhhbmRsZWRBdD86IHN0cmluZykge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nRXhjZXB0aW9uICcpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbiwgaGFuZGxlZEF0LCBwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXAsXHJcbiAgICAgICAgZG9UZXN0OiBkb1Rlc3QsXHJcbiAgICAgICAgbG9nUGFnZVZpZXc6IGxvZ1BhZ2VWaWV3LFxyXG4gICAgICAgIGxvZ0V2ZW50OiBsb2dFdmVudCxcclxuICAgICAgICBsb2dFeGNlcHRpb246IGxvZ0V4Y2VwdGlvblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uSW5zaWdodHNfbW9uaXRvciAtIDIwMTkxMDAxLTA5NTEgLSBaWlogLSBib3R0b20gZmlsZSBPT09PT09PT09PT09PT09PT09PT09PT09PT09PTyAnKTtcclxuXHJcbmV4cG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfTtcclxuXHJcbiIsIlxyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDg6MjggYW0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgICAgIHRleHRhcmVhcy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYnlwYXNzT2JqZWN0ID0gZnVuY3Rpb24gKG9iajEpOiBib29sZWFuIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDoxOCBhbSAtIFNTTiAtIEFkZGVkIGVtYWlsIGFuZCBwYXNzd29yZCAobG9naW4pXHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdoaWRkZW4nIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc2VhcmNoJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdlbWFpbCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncGFzc3dvcmQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDI6MjcgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGlmIChvYmoxLm5vQ2hhbmdlTW9uaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZ2V0QnJvd3Nlck5hbWUoKSA9PT0gJ2Nocm9tZSc7XHJcblxyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2Fubm90IHVzZSB3aXRoIENocm9tZVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIigyKSBZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzA1LzIwMTkxIDA0OjUzIGFtIC0gU1NOIFxyXG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHVzZXJzIGZyb20gbmF2aWdhdGluZyBhd2F5IGZyb20gQW5ndWxhciBiYXNlZCBwYWdlcyB3aXRoIHBlbmRpbmcgY2hhbmdlcy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTgyOTEyL2hvdy10by1kZXRlY3QtYnJvd3Nlci13aXRoLWFuZ3VsYXJcclxuICAgIHZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2VkZ2UnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdvcHInKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5vcHI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5jaHJvbWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZigndHJpZGVudCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignc2FmYXJpJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE5lZWRlZCBzbyB3ZSBjYW4gY2FsbCBmcm9tIHBvcHVwcy5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobW9uaXRvckNoYW5nZV9TU04sIDIwMDApO1xyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDEoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDE6IHNldHVwTW9uaXRvcl92MDEsXHJcbiAgICAgICAgZ2V0QnJvd3Nlck5hbWU6IGdldEJyb3dzZXJOYW1lLFxyXG4gICAgICAgIG1vbml0b3JDaGFuZ2VfU1NOOiBtb25pdG9yQ2hhbmdlX1NTTixcclxuICAgICAgICBzZXRJdGVtQ2hhbmdlZF9zc246IHNldEl0ZW1DaGFuZ2VkX3NzbixcclxuICAgICAgICBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbjogc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24sXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzOiBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3NcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlczogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLCBfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiIsIlxyXG4vLyAxMS8xNC8yMDE5IDAyOjU5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuL0NoYW5nZU1vbml0b3JGbGFnJztcclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi8uLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0NoYW5nZU1vbml0b3JTZXJ2aWNlJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUuZmFjdG9yeShcImNoYW5nZU1vbml0b3JTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2V0dXBNb25pdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRIYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZG9TZXRIYXZlQ2hhbmdlID0gZnVuY3Rpb24gKHNldHRpbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHNldHRpbmc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBNb25pdG9yOiBfc2V0dXBNb25pdG9yLFxyXG4gICAgICAgICAgICAgICAgZ2V0SGF2ZUNoYW5nZXM6IF9nZXRIYXZlQ2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBfcmVzZXQsXHJcbiAgICAgICAgICAgICAgICBkb1NldEhhdmVDaGFuZ2U6IF9kb1NldEhhdmVDaGFuZ2VcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAxMS8yMi8yMDE5IDA5OjQxIHBtIC0gU1NOIC0gQ3JlYXRlZCB0byByZXN0b3JlIHBhZ2Ugb24gaGl0dGluZyB0aGUgYmFjayBidXR0b24gb3IgcmVjYWxsaW5nIHRoZSBwYWdlLlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbi8vIDEyLzI4LzIwMTkgMTA6MCBwbSAtIFNTTiAtIEFkZGluZyBBcHBJbnNpZ2h0c19VdGlsIFxyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuaW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuXHJcbnZhciBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KFwiRGVtb1NpdGVzXzIwMTkxMjI4XzIyMjhcIiwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMjI4LTIyMTBcIiwgTWVzc2FnZTogXCJkb1NldHVwXCIgfSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICB2YXIgYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCdyZXN0b3JlUHJldmlvdXNQYWdlQW5kVGFza1F1ZXVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsICRsb2NhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlQW5kVGFza1F1ZXVlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXRlX1Rhc2tfUXVldWVfTGlzdCcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5UG9zdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy92YXIgY29udHJvbGxlciA9IGZ1bmN0aW9uICgkaHR0cCwgJHEsICRzY29wZSkge1xyXG4gICAgICAgICAgICAvL307XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RvcmVQb3MsIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUwNDY4Ni9nZXQtcmVsYXRpdmUtcGF0aC1vZi10aGUtcGFnZS11cmwtdXNpbmctamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKC4rXFx3XFwvKSguKykvLCBcIi8kMlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVVcmwoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYWxyZWFkeVBvc3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHdpbmRvdy5zY3JvbGxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPSB7IHVybDogZ2V0UmVsYXRpdmVQYXRoKCksIHBvc1g6IHBvc1gsIHBvc1k6IHBvc1ksIGVsZW1lbnQ6IGVsZW1JbmZvIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMucHVzaChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NYID0gcG9zWDtcclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWSA9IHBvc1k7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQuZWxlbWVudCA9IGVsZW1JbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzW1VSTF9UcmFja19SZWYuY3VycmVudEluZGV4XSA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9VUkxfVHJhY2tfUmVjb3JkKGNyZWF0ZUlmTm90Rm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX3RlbXAgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlSWZOb3RGb3VuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja190ZW1wID0gJ3tcInVybHNcIjpbXX0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrID0gSlNPTi5wYXJzZShVUkxfVHJhY2tfdGVtcCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRSZWxhdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY3VycmVudEluZGV4ID0gMDsgY3VycmVudEluZGV4IDwgVVJMX1RyYWNrLnVybHMubGVuZ3RoOyBjdXJyZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZCA9IFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQ6IGN1cnJlbnRSZWNvcmQsIFVSTF9UcmFjazogVVJMX1RyYWNrLCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXN0b3JlUG9zKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGN1cnJlbnRSZWNvcmQucG9zWSwgbGVmdDogY3VycmVudFJlY29yZC5wb3NYLCBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRDbGlja1NvdXJjZSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ5cGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkEgXCIudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5cGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwibmctY2xpY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwiaHJlZlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5cGFzcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkudGV4dCgkKHNlbGVjdGVkRWxlbWVudCkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5zcGxpY2UoVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRkZWRDbGFzcyhvYmpSZWYpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChvYmpSZWYpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy91dGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS5odG1sXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH07XHJcblxyXG4iLCJcclxuLy8gMTAvMDEvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDNdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cclxuXHJcbiAgICBhcHBJbnNpZ2h0czoge1xyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICdkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTMnXHJcbiAgICAgICAgLy8gMTAvMzEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIEFkZGVkXHJcblxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICcyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDMnLFxyXG5cclxuICAgICAgICAvLyAxMS8wNy8yMDE5IDA4OjM0IHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICBcIkluc3RydW1lbnRhdGlvbktleVwiOiBcImRlbGV0ZWRcIiwgXCJkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTNcIiAsXHJcbiAgICAgICAgLy8gUFMtRmFicmlrYW1SZXNpZGVuY2VzIC0gXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuXHJcblxyXG4gICAgfVxyXG5cclxufTsiLCJcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX3YwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICAgICAgLy8vLyAgRE8gTk9UIFJFTU9WRS5cclxuICAgICAgICAgICAgLy8vLyBPcHRpb24gdG8gY2FsbCBhbiBpbmplY3RlZCBBbmd1bGFySlMgc2VydmVyIGZyb20gaGVyZS4gVGVzdGVkLiAgXHJcblxyXG4gICAgICAgICAgICAvL2ZhY3RvcnlTZXR1cC5kb0ZhY3RvcnlTZXR1cCgpO1xyXG5cclxuICAgICAgICAgICAgLy90cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJnbG9iYWxzOiAyMDE5MDkyMy0xMTM2IC0gQ2FsbGluZyB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgdGVzdF8xMDMuZG9JdCgpO1xyXG4gICAgICAgICAgICAvL30gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcihcImdsb2JhbHM6ICAyMDE5MDkyMy0xMTM1IC0gRmFpbGVkIGNhbGwgdG8gdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VfdjAwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBnZXRJbnN0YW5jZV92MDAyOiBnZXRJbnN0YW5jZV92MDAyXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDY6MzIgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5lbnVtIFRpbWVsb2dfU2VydmluZ1BhZ2UgeyAvLyBTZXJ2aW5nUGFnZSAoZm9yIElERSBTZWFyY2gpXHJcblxyXG4gICAgVGltZWxvZyA9ICdUaW1lbG9nJyxcclxuICAgIEpvYl9UaW1lbG9nID0gJ0pvYl9UaW1lbG9nJyxcclxuICAgIFByb2plY3RzX1NlYXJjaCA9ICdQcm9qZWN0c19TZWFyY2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSh2YWx1ZTogVGltZWxvZ19TZXJ2aW5nUGFnZSwgY29tcGFyZVRvOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBhcmVUbyA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIHRlc3RfMTAzLCBUaW1lbG9nX1NlcnZpbmdQYWdlLCBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUgfTtcclxuXHJcblxyXG4iLCJcclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIC8vIDAxLzAyLzIwMjAgMDQ6MDYgcG0gLSBTU04gLSBNb3ZlZCBmcm9tICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdbc3NuLWNtZD1yZXR1cm5Ub0NhbGxlckxpbmtdJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5Ub0NhbGxlcktleSA9ICQoXCIjcmV0dXJuVG9DYWxsZXJLZXlcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8yMS8yMDE5IDAxOjQ4IHBtIFxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2RhdGEtdG9nZ2xlPSdjb2xsYXBzZSddXCIpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcihjYWxsZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDA5OjU2IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMV0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG4gICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTI4IC0gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yIFsnICsgY2FsbGVyICsgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICQoJ3ByZScpLmVhY2goZnVuY3Rpb24gKGFhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlQXR0cmliID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYiA9IFwiIHRpdGxlPSdcIiArIF90aXRsZSArIFwiJyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCc8cD48YSBjbWQtbmFtZT1cInNob3dzaWJsaW5nXCIgJyArIHRpdGxlQXR0cmliICsgJyA+U2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uICsgJzwvYT48L3A+JykuaW5zZXJ0QmVmb3JlKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9saW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnSGlkZSBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAgICAgLy8gU291cmNlIGh0dHBzOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL1VwbG9hZEZpbGUvMWQzMTE5L2RhdGUtc2VyaWFsaXphdGlvbi13aXRoLWFuZ3VsYXItanMtd2ViLWFwaS9cclxuXHJcbiAgICAgICAgaXNvODYwMVJlZ0V4ID0gLygxOXwyMHwyMSlcXGRcXGQoWy0vLl0pKDBbMS05XXwxWzAxMl0pXFwyKDBbMS05XXxbMTJdWzAtOV18M1swMV0pVChcXGRcXGQpKFs6Ly5dKShcXGRcXGQpKFs6Ly5dKShcXGRcXGQpLztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2godGhpcy5pc284NjAxUmVnRXgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZuQ29udmVyRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gICAgc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgICAgIC8vICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgLy8gICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB7XHJcblxyXG4gICAgICAgIC8vICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIC8vICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAvL30oKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmxldCBzaXRlX2luc3RhbmNlID0gbmV3IHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcygpO1xyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG4gXHJcblxyXG4vLyAwMS8wMi8yMDIwIDA0OjIwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTE2MTFdIC0gWzAwM10gLSBTZXBlcmF0ZSBBbmd1bGFySlMgdXRpbGl0eSBmcm9tIGdlbmVyYWwgRE9NIHV0aWxpdGllc1xyXG4vLyBPZiBjb3Vyc2Ugd2UgYXJlIGNhbGxpbmcgdXRpbGl0eSBtb3JlIHRoYW4gb25jZS4gTmVlZCB0byBjYWxsIGZ1bmN0aW9ucyB3aGVyZSB0aGV5IGFwcGx5LlxyXG5cclxuICBcclxuXHJcbmlmICh0eXBlb2YgKHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0pICE9IFwibnVtYmVyXCIpIHtcclxuICAgICBcclxuICAgIHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSAwO1xyXG59XHJcblxyXG53aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID0gd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSArIDE7XHJcbiBcclxuXHJcbmlmICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID09PSAxKSB7XHJcblxyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMi8zMC8yMDE5IDAxOjIzIGFtIC0gU1NOIC0gQWRkIHRpbWVvdFxyXG4gICAgICAgIC8vIHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpOyB9LCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzNC0yJyksIDIwMDApO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjozNyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDNdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM2MTQ2NS9ob3ctdG8tY2hlY2staWYtY2xpY2stZXZlbnQtaXMtYWxyZWFkeS1ib3VuZC1qcXVlcnlcclxuJC5mbi5pc0JvdW5kID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcblxyXG5cclxuICAgIGlmICghdGhpcy5kYXRhKCdldmVudHMnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmZ1bmN0aW9uIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTMxIC0gam9iX1RpbWVsb2dfc2V0RmlsdGVyICcpO1xyXG5cclxuXHJcbiAgICBpZiAoJChcIiNmaWx0ZXJUZXh0XCIpLmlzQm91bmQoJ2tleXVwJywgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBib3VuZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNmaWx0ZXJUZXh0XCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2pvYnMgLSBmaXRsZXJUZXh0IC0gS2V5VXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDIgLSBzZXR1cCcpO1xyXG5cclxuICAgIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpO1xyXG5cclxufSk7XHJcblxyXG4iLCJcclxuLy8gMDEvMDIvMjAyMCAxMjozNCBwbSAtIFNTTiAtIFsyMDIwMDEwMi0xMjM0XSAtIFswMDFdIC0gQWRkIEFuZ3VsYXJKUyBsb2dpblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG5jb25zb2xlLmxvZygnbG9naW4gIDIwMjAwMTAyLTEyNDMgLSAwMDEnKTtcclxuXHJcbnZhciBsb2dpbkNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdsb2dpbiAgMjAyMDAxMDItMTI0MyAtIDAwMiAtIEluc3RhbmNlIHRvcCAnKTtcclxuXHJcblxyXG4gICAgdmFyIGFuZ3VsYXJBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0xvZ2luQ29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICAvLyAkdWliTW9kYWwgJHVpYk1vZGFsSW5zdGFuY2VcclxuICAgIGFuZ3VsYXJBcHAuY29udHJvbGxlcignbG9naW5Db250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJyR0aW1lb3V0JywgJyRyb290U2NvcGUnICxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJHRpbWVvdXQsICRyb290U2NvcGUgKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luICAyMDIwMDEwMi0xMjQzIC0gMDAzIC0gY29udHJvbGxlciBmdW5jdGlvbiB0b3AgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIlJlY29yZCBzYXZlZC5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QyID0gZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gLSBmdW5jdGlvbiBjbGljayA9IDIwMjAwMTAyLTEzMzQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2Uub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvVXNlcnMvbG9naW4uaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2xvZ2luQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiAgMjAyMDAxMDItMTI0MyAtIDAwNSAtIGNvbnRyb2xsZXIgZnVuY3Rpb24gYm90dG9tJyk7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYW5ndWxhckFwcDogYW5ndWxhckFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgbG9naW5Db250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG5jb25zb2xlLmxvZygnbG9naW4gIDIwMjAwMTAyLTEyNDMgLSAwMDIgLSBmdW5jdGlvbiBib3R0b20gJyk7XHJcblxyXG5cclxuIiwiXHJcbi8vIDAxLzAyLzIwMjAgMTI6NDIgcG0gLSBTU04gLSBbMjAyMDAxMDItMTIzNF0gLSBbMDAyXSAtIEFkZCBBbmd1bGFySlMgbG9naW5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyB4IGZyb20gJy4uL1NoYXJlZC9TaGFyZWRVdGlsJztcclxuXHJcbmltcG9ydCB7IGxvZ2luQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gXCIuL2xvZ2luXCI7XHJcblxyXG54LkxvYWRBbGwoKTtcclxuXHJcblxyXG5sb2dpbkNvbnRyb2xsZXJfaW5zdGFuY2UuYW5ndWxhckFwcDtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9