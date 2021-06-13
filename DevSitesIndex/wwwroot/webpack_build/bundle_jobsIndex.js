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

      var _getDevSites = function _getDevSites(recordsPerPage, currentPage) {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/" + recordsPerPage + "/" + currentPage).then(function (result) {
          angular__WEBPACK_IMPORTED_MODULE_1__["copy"](result.data, _devSites);
          deferred.resolve();
        }, function () {
          deferred.reject();
        });
        return deferred.promise;
      }; // 06/13/2021 10:29 am - SSN - [20210613-0452] - [018] - Adding tags to DevSite


      var _getDevSitesCount = function _getDevSitesCount() {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/recordcount").then(function (result) {
          deferred.resolve(result);
        }, function () {
          deferred.reject(0);
        });
        return deferred.promise;
      }; // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup


      var _getTimelog = function _getTimelog(id) {
        var deferred = $q.defer(); // 09/24/2019 07:15 am - SSN - [20190924-0401] - [009] - Quick timelog entry

        $http.get('/api/timelogapi/getTimelog/' + id).then(function (result) {
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
        var deferred = $q.defer(); // 06/08/2021 10:52 pm - SSN - [20210608-2247] - [002] - Test line item -  Prep for deployment
        // $http.get('/api/jobapi/get_custom/' + id)

        $http.get('/api/jobapi/getJob/' + id).then(function (result) {
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
      }; // 06/07/2021 06:22 am - SSN - [20210606-0227] - [015] - Testng for deployment


      var addOrUpdateJob_LineItem = function addOrUpdateJob_LineItem(job_LineItem) {
        var deferred = $q.defer();
        $http.post('/api/job_lineItemAPI', job_LineItem).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };

      return {
        devSites: ko.observable(_devSites),
        getDevSites: _getDevSites,
        getDevSitesCount: _getDevSitesCount,
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
        projectsSearchRefreshRecord: _ProjectsSearchRefreshRecord,
        addOrUpdateJob_LineItem: addOrUpdateJob_LineItem
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

 // Add autofocus="true" to set focus

var dropdownListDirective_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
    if (typeof defaultAppName != "string") {
      defaultAppName = "demoSites_Index_Timesheet";
    }

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);
    var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', 'ssn_logger', function ($scope, $attrs, $location, ssn_logger) {
      $scope.submitForm_1 = function (event, form) {
        console.log("%c DropdownListDirective-20210106-0707:  submitForm_1", 'color:red;font-weight:bold');
        console.log("%c DropdownListDirective-20210106-0707:  submitForm_2", 'color:red;font-weight:bold');
        console.log("%c DropdownListDirective-20210106-0707:  submitForm_3", 'color:red;font-weight:bold');
        console.log("%c DropdownListDirective-20210106-0707:  submitForm_4", 'color:red;font-weight:bold');
        console.log("%c DropdownListDirective-20210106-0707:  submitForm_5", 'color:red;font-weight:bold');

        if (!form.$valid) {
          console.log(form);
          event.preventDefault();
          scrollIntoAppView();
        }
      }; // https://www.code-sample.com/2018/11/angularjs-scroll-to-error-on-submit-and.html


      var scrollIntoAppView = function scrollIntoAppView() {
        var elt = $(".has-error:visible");

        if (elt.length) {
          $('html, body').animate({
            // scrollTop: (elt.first().offset().top)
            // scrollTop: (elt.first().closest('div').prevAll('div').offset().top)
            scrollTop: elt.first().closest('div.form-group').offset().top - 80
          }, 500);
        }
      };
    }]);
    downdownList_angular_module.directive('dropdownListDirectiveInputBox', ["$q", "ssn_logger", function ($q, ssn_logger) {
      return {
        require: 'ngModel',
        // 06/07/2021 02:04 am - SSN - [20210606-0227] - [014] - Testng for deployment
        // We are using this for adding new items to master.
        link: function link(scope, elem, attr, ngModel_ctrl) {
          var dropdownListDireciveInputBoxInverse = attr["dropdownListDirectiveInputBoxInverse"]; //console.log(`%c 20210610-2118 dropdownListDireciveInputBoxInverse [${dropdownListDireciveInputBoxInverse}]`, 'color:blue;font-size:20pt;');
          //console.log(attr);

          elem.bind('blur', function (event) {
            ngModel_ctrl.$setViewValue(ngModel_ctrl.$modelValue);
          });
          var dropdownListDirectiveInputBox = attr.dropdownListDirectiveInputBox.split(',');
          ngModel_ctrl.$parsers.unshift(function (value) {
            //const testvalue1 = attr["name"];
            //const testvalue2 = attr.name + '.dropdownListDirectiveInputBox';
            //const testvalue3 = dropdownListDirectiveInputBox;
            //console.log('%c *x*x*x*x*x*x*x*x*x*x*x*x*x*x*x', 'color:red;font-size:20px');
            //console.log(`%c ---------------- ngModel_ctrl-------- 565dd ------------------`, 'color:red;font-size:20pt;');
            //console.log(ngModel_ctrl);
            //console.log(testvalue1);
            //console.log('11) -------------------------------');
            //console.log(testvalue2);
            //console.log('22) -------------------------------');
            //console.log(testvalue3)
            //console.log('33) -------------------------------');
            //console.log(value)
            //console.log('44) -------------------------------');
            //console.log(attr)
            //console.log('55) -------------------------------');
            // Do usage. Not implemented in applicatiokn logic.
            ngModel_ctrl.$setValidity(attr.name + '.dropdownListDirectiveInputBox', dropdownListDirectiveInputBox.indexOf(value) === -1); // ngModel.$setValidity(attr.name , dropdownListDirectiveInputBox.indexOf(value) === -1);

            return value;
          });

          ngModel_ctrl.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {
            // Does fire.
            // modelValue doesn't honor selected value after it has already been set.
            // Until we caome up with a way to reset it, disable by bypassing as valid.
            //console.log(`%c ---------------- ngModel_ctrl-------- 149 ------------------`, 'color:red;font-size:20pt;');
            //console.log(ngModel_ctrl);
            //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx')
            //console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx')
            //console.log(' 144 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxxc')
            //console.log(modelValue);
            //console.log('---------------------------------------------')
            //console.log(viewValue);
            //console.log('=============================================')
            var deferred = $q.defer();
            var validationResult = modelValue && modelValue.id;
            validationResult = !!validationResult; //console.log('%c dorpdownlistDirecitve isValidDropdownDirectiveSelection', 'color:green;font-size:14pt');
            //console.log(`%c dropdownListDireciveInputBoxInverse [${dropdownListDireciveInputBoxInverse}] `, 'color:green;font-size:14pt');
            //console.log(`%c validationResult 1 [${validationResult }] `, 'color:green;font-size:14pt');

            if (dropdownListDireciveInputBoxInverse) validationResult = !validationResult; //console.log(`%c validationResult 2 [${validationResult}] `, 'color:green;font-size:14pt');

            if (validationResult) {
              deferred.resolve();
            } else {
              deferred.reject();
            } // return the promise of the asynchronous validator


            return deferred.promise;
          };
        }
      };
    }]);
    downdownList_angular_module.directive('dropdownListDirective', ['ssn_logger', '$timeout', function (ssn_logger, $timeout) {
      var controller = ['$window', '$http', '$q', '$scope', '$rootScope', '$timeout', 'changeMonitorService', 'ssn_logger', function ($window, $http, $q, $scope, $rootScope, $timeout, changeMonitorService, ssn_logger) {
        var vm = this;
        vm.isReady = false; // vm.tempControlName = `DropdownListDirective_${vm.callSource}_` + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
        // vm.tempControlName = this.keyColumn;

        vm.tempControlName = "DropdownListDirective_" + Math.random() + "_";
        vm.blackListErrorName = vm.tempControlName + ".dropdownListDirectiveInputBox";
        vm.dropdownListDireciveInputBoxInverse = false;

        vm.errorTriggered = function (errorName) {
          return !!vm.formName.$error[errorName];
        };

        vm.errorTriggeredWithControlName = function (controlName, errorName) {
          // return vm.formName[controlName].$error[errorName];
          // Testing with 'required' return a boolean.  
          return vm.formName[controlName]["$error"][errorName];
        }; // ssss


        $scope.$on('dropdownListDirective_autofocus', function (events, args) {
          console.log('%c ' + '20210612-0317 - dropdownListDirective_autofocus ', 'color:yellow;font-size:20pt'); //  inputObj.focus();

          console.log(events);
          console.log(args);

          if (args.msg === "doSetFocus" && args.jqueryObjectRef) {
            console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
            console.log(args.jqueryObjectRef);
            args.jqueryObjectRef.focus();
            console.log(args.jqueryObjectRef);
            console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
          }
        }); //$window.addEvent
        //angular.element($window).on('blur', function () {
        //    console.log('%c ' + 'DropdownListDirective - blur triggered');
        //    console.log('%c ' + 'DropdownListDirective - blur triggered 2');
        //    console.log('%c ' + 'DropdownListDirective - blur triggered 4');
        //    console.log('%c ' + 'DropdownListDirective - blur triggered 6');
        //});

        $scope.$on('dropdownListDirective_Change_start', function (events, args) {
          var isHandled = false; // This fires on start and once on change

          if (vm.parentKeyName && vm.parentKeyName == args.keyColumn && args.keyValue) {
            console.log('---------------------------------------------');
            console.log(' vm.parentKeyColumn and args.keyValue before update:');
            console.log(vm.parentKeyColumn);
            console.log(args.keyValue);
            vm.parentKeyColumn = args.keyValue;
            isHandled = true;
          }

          if (args.msg == "update dropdown list" && vm.keyColumn && args.keyColumn && vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase()) {
            ssn_logger.cl_normal({
              callSource: '20210610-1708-B',
              message: "dropdownListDirective_Change_start update dropdown - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'green', true);
            console.log('events:', events);
            console.log('args', args);
            vm.getDisciplines(args.description);
            vm.disciplineSelected_XXX = {
              id: args.id,
              title: args.description
            };
            isHandled = true;
          }

          if (args.msg == "validateThis") {
            ssn_logger.cl_normal({
              callSource: '20210609-1529',
              message: 'call validateThis'
            }, 'blue', true);
            vm.validateThis();
            isHandled = true;
          }

          if (args.msg == "select new value") {
            ////console.log('update keyColumn jQuery  [select new value]');
            ////console.log(vm.keyColumn);
            //console.log(`zzzzzz    000 zzzzzzz set zero 22 zzzzzzzzzzzzzzzzzzzzzzzzzzz`, 'color:red;font-weight:bold;font-size:20pt;');
            //console.log(vm.ngModel);
            //console.log('----------------------------------');
            vm.ngModel = 0; //console.log(vm.ngModel);
            //console.log('----------------------------------');

            if (vm.hiddenFieldName) {
              $("[name='" + vm.hiddenFieldName + "']").val('');
            } //////////////////////////////////////////////////////  vm.disciplineSelected_XXX = "";


            isHandled = true;
          }

          if (!isHandled) {
            ssn_logger.cl_normal({
              callSource: '20210609-0547',
              message: "dropdownListDirective_Change_start not handled - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'red');
            console.log('events:', events);
            console.log('args', args);
          }
        }); // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
        // disciplineSelected_XXX  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)

        vm.disciplineSelected_XXX = "";
        $scope.$on('$destroy', function () {});
        $scope.$watch('vm101.ngModel', function (newValue, oldValue) {
          //ssn_logger.cl_normal({ callSource: '20210609-1438', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'yellow');
          //console.log(oldValue);
          //console.log(newValue);
          if (newValue) {
            //                        ssn_logger.cl_normal({ callSource: '20210609-1438-B', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'green');
            vm.validateThis();
          } else {//ssn_logger.cl_normal({ callSource: '20210609-1438-C-2', message: `CHANGE vm.keyColumn [${vm.keyColumn}]  ngModel [${vm.ngModel}]   parentKeyColumn [${vm.parentKeyColumn}]` }, 'red');
            // vm.isReady = true;
          }
        });
        $scope.$watch('vm101.parentKeyColumn', function (newValue, oldValue) {
          //console.log(`%c20210608-0054-A - parent key value changed keyColumn [${vm.keyColumn}]  parentKeyColumn [${vm.parentKeyColumn}]`, 'color:yellow');
          //console.log(oldValue);
          //console.log(newValue);
          //console.log(typeof oldValue);
          //console.log(typeof newValue);
          //console.log('--------------------------');
          if (oldValue != newValue && oldValue != null) {
            // oldValue is null on first call.
            vm.setIsValidBoolean(false); //console.log('%c20210608-0054-B - parent key value changed - reset local key   keyColumn [${vm.keyColumn}]  parentKeyColumn [${vm.parentKeyColumn}]', 'color:yellow;font-size:20px;');
            //console.log('%c20210608-0054 - parent key value changed - reset local key', 'color:red;font-size:20px;');
            //console.log('%c20210608-0054 - parent key value changed - reset local key', 'color:yellow;font-size:20px;');
            // vm.ngModel = undefined;

            vm.ngModel = 0;
            vm.disciplineSelected_XXX = "";

            if (vm.hiddenFieldName) {
              //console.log('%c20210609-1512 - hiddenFieldName - parent key value changed - reset local key', 'color:red;font-size:20px;');
              $("[name='" + vm.hiddenFieldName + "']").val('');
            }
          }
        }); //$scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {

        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          // Works 
          //console.log("TTTTTTTTTTTTXXXXXXXXXXXXXXXXXXX");
          //console.log('%c' + ' disciplineSelected_XXX', 'color:cyan;font-size:20pt;');
          //console.log(oldValue);
          //console.log('------------------------------------------');
          //console.log(newValue);
          //console.log('%c ------------------------------------------','color:red;font-size:20pt;');
          //console.log(vm.ngModel);
          //console.log('%c ------------------------------------------', 'color:red;font-size:20pt;');
          //console.log('------------------------------------------');
          //console.log('============================================');
          if (newValue && newValue.id) {
            vm.ngModel = newValue.id; //console.log(`%c ---------------- -------- 395 ------------------`, 'color:red;font-size:20pt;');
            //console.log( vm.ngModel  );

            if (vm.hiddenFieldName) {
              $("[name='" + vm.hiddenFieldName + "']").val(newValue.id);
            }
          }

          if (vm.formName) {
            if (vm.formName.$dirty) {
              changeMonitorService.doSetHaveChange(true);
            }
          }

          vm.setIsValidBoolean(false);

          if (newValue) {
            if (newValue.id) {
              if (newValue.id > 0) {
                vm.setIsValidBoolean(true);
              }
            }
          }
        }, true);

        vm.setupUrl = function () {
          if (!this.keyColumn) {
            return;
          }

          vm.APIUrlListAll = undefined;
          vm.APIUrlSingleRecord = undefined;

          switch (this.keyColumn.toLowerCase()) {
            case 'timelog.disciplineid':
            case 'disciplineid':
              vm.APIUrlListAll = '/api/DisciplineAPI';
              vm.APIUrlSingleRecord = '/api/DisciplineAPI';
              break;
            // 12/10/2020 04:32 pm - SSN - [20201210-1625] - [002] - Update Timelog edit MVC
            ///////////////////////////////////////case 'timelog.lineitemid':

            case 'lineitemid':
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
              vm.APIUrlSingleRecord = '/api/projectapi/typeahead';
              break;

            default:
              console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
              console.log('----------------------------');
              console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
              console.log('----------------------------');
              console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
              console.log('----------------------------');
              console.log("%cDropdownListDirective - no case for [" + this.keyColumn + "] 20201210-1656", 'color:red');
              console.log('----------------------------');
          }

          if (vm.APIUrlListAll == undefined) {
            var errorMessage = "DropdownListDirective - missing definition for APIUrlListAll [" + this.keyColumn + "] 20210608-1310";
            console.log('----------------------------');
            console.log("%c" + errorMessage, 'color:red');
            console.log('----------------------------');
            ssn_logger.cl_error({
              callSource: '20210608-1311',
              message: errorMessage
            });
          }

          if (vm.APIUrlSingleRecord == undefined) {
            var errorMessage = "DropdownListDirective - missing definition for vm.APIUrlSingleRecord [" + this.keyColumn + "] 20210608-1427";
            console.log('----------------------------');
            console.log("%c" + errorMessage, 'color:red');
            console.log('----------------------------');
            ssn_logger.cl_error({
              callSource: '20210608-1428',
              message: errorMessage
            });
          }

          if (vm.parentKeyColumn) {
            var parentKeyColumnValue = this.parentKeyColumn; //undefined;

            if (parentKeyColumnValue) {
              vm.APIUrlListAll = vm.APIUrlListAll + "/" + parentKeyColumnValue;
            }
          }
        };

        vm.changing = function () {
          $scope.$broadcast('dropdownListDirective_Change_start', {
            msg: 'select new value',
            keyColumn: vm.keyColumn,
            keyValue: vm.ngModel
          });
        };

        vm.validateThis = function () {
          vm.setupUrl();
          vm.setIsValidBoolean(false);

          if (vm.ngModel > 0) {
            vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess, vm.currentDisplineLookupError);
            vm.setIsValidBoolean(true); // $scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: vm.keyColumn, keyValue: vm.ngModel });
          } else {
            ssn_logger.cl_normal({
              callSource: '20210609-0528',
              message: "validateThis: vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'red');

            if (vm.containerViewValue) {
              vm.disciplineSelected_XXX = {
                title: vm.containerViewValue
              };
            }

            vm.isReady = true;
          }
        };

        vm.currentDisplineLookupSuccess = function (data) {
          if (data) {
            if (data.disciplineId) {
              vm.disciplineSelected_XXX = {
                id: data.disciplineId,
                title: data.disciplineShort
              };
            }

            if (data.ta_id) {
              vm.disciplineSelected_XXX = {
                id: data.ta_id,
                title: data.ta_description
              };
            }
          } else {
            ssn_logger.cl_normal({
              callSource: "DropdownList-20210609-0143",
              message: "Debugging-030"
            }, "red");
            ssn_logger.cl_normal({
              callSource: "DropdownList-20210609-0143",
              message: "Debugging-031"
            }, "red");
            ssn_logger.cl_normal({
              callSource: "DropdownList-20210609-0143",
              message: "Debugging-032"
            }, "red");
            ssn_logger.cl_normal({
              callSource: "DropdownList-20210609-0143",
              message: "Debugging-033"
            }, "red");
          }
        };

        vm.currentDisplineLookupError = function (error) {
          ssn_logger.cl_error({
            callSource: '20210608-2158-A',
            message: "currentDisplineLookupError "
          });
          ssn_logger.cl_error({
            callSource: '20210608-2158-B',
            message: "currentDisplineLookupError ",
            errorObject: error
          });
        }; // Called from view input element


        vm.getDisciplines = function (lookupValue) {
          try {
            vm.containerViewValue = lookupValue;
          } catch (ex) {
            ssn_logger.cl_normal({
              callSource: "20210607-1607-A",
              message: "getDiscipline call to assign containerViewValue failed"
            }, "Red");
            ssn_logger.cl_error({
              callSource: "20210612-0041",
              message: "getDiscipline call to assign containerViewValue failed [" + lookupValue + "]"
            });
          }

          vm.setupUrl();
          if (lookupValue === null) lookupValue = "";
          var deferred = $q.defer();
          $http({
            method: 'GET',
            url: vm.APIUrlListAll
          }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
          return deferred.promise;

          function typeaheadDisciplineSuccess(response) {
            vm.addresses = [];
            angular__WEBPACK_IMPORTED_MODULE_0__["forEach"](response.data, function (item) {
              if (item.disciplineId) {
                if (item.disciplineShort.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                  vm.addresses.push({
                    id: item.disciplineId,
                    title: item.disciplineShort
                  });
                }
              }

              if (item.ta_id) {
                if (item.ta_description.toLowerCase().indexOf(lookupValue.toLowerCase()) > -1) {
                  vm.addresses.push({
                    id: item.ta_id,
                    title: item.ta_description
                  });
                }
              }
            });

            if (vm.addresses.length == 1) {//  vm.disciplineSelected_XXX = vm.addresses[0];
              // 06/12/2021 01:15 pm - SSN - Testing if can get over preventing users from altering single matches.
              //////////////// vm.disciplineSelected_XXX = { id: vm.addresses[0].id };
              // vm.ngModel = vm.addresses[0].id;
            }

            deferred.resolve(vm.addresses);
          }

          function typeaheadDisciplineError(response) {
            ssn_logger.cl_normal({
              callSource: "20210608-2139",
              message: "typeaheadDisciplineError"
            }, "red");
            ssn_logger.cl_normal({
              callSource: "20210608-2140",
              message: response
            }, "red");
            deferred.reject(response);
          }
        };

        vm.getDisciplineCurrent = function (lookupID) {
          //console.log(`%c getDisciplineCurrent 303  keyColumn[${vm.keyColumn}]   lookupID [${lookupID}]`, 'color:cyan');
          //console.log(`%c vm.APIUrlSingleRecord  [${vm.APIUrlSingleRecord}] `, 'color:blue');
          if (lookupID === null) {
            console.log('20210105-2243');
            console.log('20210105-2243');
            console.log('20210105-2243');
            console.log('20210105-2243');
            console.log('20210105-2243');
            console.log('DropdownListDirective lookupID is null');
            console.log('----------------  CANCEL');
            console.log('----------------  CANCEL');
            console.log('----------------  CANCEL');
            console.log('----------------  CANCEL');
            console.log('----------------  CANCEL');
            console.log('----------------  CANCEL');
            ssn_logger.cl_error({
              callSource: '20210608-1415',
              message: "Calling getDisciplineCurrent  with null lookupID"
            });
            return null;
          }

          var deferred = $q.defer();
          var localUrl = vm.APIUrlSingleRecord + "/" + lookupID;
          $http({
            method: 'GET',
            url: localUrl
          }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
          return deferred.promise;

          function typeaheadDisciplineSuccess(response) {
            //console.log(`%c getDisciplineCurrent  222 keyColumn[${vm.keyColumn}]  lookupID  [${lookupID}] success`, 'color:green');
            //console.log(response.data);
            deferred.resolve(response.data);
            vm.isReady = true;
          }

          function typeaheadDisciplineError(response) {
            console.log("%c getDisciplineCurrent 202 lookupID  [" + lookupID + "] error", 'color:red');
            console.log(response);
            ssn_logger.cl_error({
              callSource: '20210608-1316',
              message: "Failed call to [" + localUrl + "]"
            });
            deferred.reject(response);
          }
        };

        vm.formErrors = function () {
          return vm.formName;
        };

        vm.formErrorsByControl = function (controlName, errorName) {
          return vm.formName[controlName]["$error"][errorName];
        };

        vm.setIsValidBoolean = function (setting) {
          vm.isValidBoolean = vm.dropdownListDireciveInputBoxInverse ? !setting : setting;
        };

        vm.setIsValidBoolean(true);
      }];
      return {
        restrict: "E",
        templateUrl: "/js/DropdownList/DropDownListDirective.html",
        controller: controller,
        controllerAs: 'vm101',
        require: 'ngModel',
        bindToController: true,
        scope: {
          callSource: "@",
          keyColumn: "@key",
          parentKeyColumn: "=parentkey",
          parentKeyName: "@",
          formName: "=",
          hiddenFieldName: "@",
          ngModel: "=",
          addFunc: "&",
          addFuncSource: "@",
          // Holder for typed in value, if it doesn't exist, so it can be copied to the add form.
          containerViewValue: "=?",
          dropdownListDireciveInputBoxInverse: "@"
        },
        link: {
          pre: function pre(scope, el, attrs, ctrl) {},
          post: function post(scope, el, attrs, ctrl) {
            try {
              this.containerViewValue = "NotSet-20210607-0213";
            } catch (e) {
              ssn_logger.cl_normal({
                callSource: "20210607-1608-A",
                message: "Update containerViewValue"
              }, "yellow");
              ssn_logger.cl_normal({
                callSource: "20210607-1608-B",
                message: this.callSource
              }, "yellow");
            }

            ctrl.$parsers.unshift(function (value) {
              console.log('20210607-0127  link');
              console.log('20210607-0127 2 link');
              console.log('20210607-0127 2 link');
              console.log('20210607-0127 222 link');
              var valid = false;
              ctrl.$setValidity('dropdownListDirectiveInputBox', valid);
              return value; //valid ? value : undefined;
            }); // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus

            if (attrs.autofocus) {
              var setfocusFunc_1 = function setfocusFunc_1(elem) {
                if (attrs.autofocus.toLowerCase() === "true") {
                  var inputObj = elem.find('input[type=text]').filter(':visible:first');

                  if (inputObj.val() === "") {
                    //  inputObj.focus();
                    if (scope.formName) {
                      console.log('%c ' + '20210612-0353 - setfocus ', 'color:yellow;font-size:14pt;');
                      console.log('%c ' + 'thisformName:', 'color:yellow;font-size:14pt;');
                      console.log(scope.formName);
                      console.log('%c ' + 'thisformName.$touched', 'color:yellow;font-size:14pt;');
                      console.log('%c ' + scope.formName.$touched, 'color:yellow;font-size:14pt;');
                      scope.$broadcast('dropdownListDirective_autofocus', {
                        msg: 'doSetFocus',
                        jqueryObjectRef: inputObj
                      });
                    } else {
                      console.log('%c ' + '20210612-0353 - setfocus  - NO FORM NAME', 'color:red;font-size:14pt;');
                    }
                  }
                }
              };

              $timeout(function () {
                setfocusFunc_1(el);
              }, 1000);
            } //el.bind('keydown keypress', (event) => {
            //    if (event.which == 27) {
            //        console.log('1')
            //        console.log('12v')
            //        console.log('12')
            //        console.log('1')
            //        scope.$broadcast('dropdownListDirective_Change_start', { msg: 'Has valid value', keyColumn: this.keyColumn, keyValue: this.ngModel });
            //    }
            //});

          }
        }
      };
    }]);
  };

  return {
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
    console.log('JobIndexController.ts - 20200814-0901');
    console.log(columnBag_defaults);
    var _fieldList = [__assign({}, columnBag_defaults, {
      columnName: 'projectTitle_ForActivity',
      caption: 'Project Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'jobTitle',
      caption: 'Job Title'
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateAdded',
      caption: 'Date Added',
      cssForTableHead: 'hidden-xs'
    }), __assign({}, columnBag_defaults, {
      columnName: 'dateUpdated',
      caption: 'Date Updated',
      cssForTableHead: 'hidden-xs'
    }), __assign({}, columnBag_defaults, {
      columnName: 'activityAge',
      caption: 'Activity Age',
      cssForTableHead: 'hidden-xs',
      columnNameSelected: 'activityAge',
      desc: true
    })];

    if ($scope.hideProjectTitle) {
      _fieldList.splice(0, 1);
    }

    var selectColumnEntries = _fieldList.filter(function (r) {
      return r.columnNameSelected.length > 0;
    });

    var columnBag = null;

    if (selectColumnEntries.length > 0) {
      columnBag = selectColumnEntries[0];
    }

    $scope.fieldsList = _fieldList;
    getJobsList(columnBag);

    function getJobsList(columnBag) {
      console.log('jobsIndexController.ts - 20200814-0903');
      console.log(columnBag);
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
          console.log('jobsIndexController.ts - 20200814-0904');
          console.log(data);
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

      if ($scope.tableTopIdForScroll) {
        document.querySelector("#" + $scope.tableTopIdForScroll).scrollIntoView({
          behavior: 'smooth'
        });
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
      // 11/22/2019 01:57 pm - SSN - [20191121-0503] - [014] - Timelog edit options on project search
      $scope.$on('TimeLog_Index_Refresh', function (event, item) {
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

/***/ "./Shared/ModalCallsUtil.js":
/*!**********************************!*\
  !*** ./Shared/ModalCallsUtil.js ***!
  \**********************************/
/*! exports provided: ModalCallsUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCallsUtil", function() { return ModalCallsUtil; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 06/09/2021 11:52 pm - SSN - [20210608-2247] - [010] - Test line item -  Prep for deployment


var ModalCallsUtil = function () {
  var doSetup = function doSetup(callSource, ngApplicationName) {
    var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('ModalCallsUtil' + '_X_' + callSource, ngApplicationName);
    timesheetApp.controller('ModalCallSUtilController', ['$scope', 'ssn_logger', '$uibModal', function ($scope, ssn_logger, $uibModal) {
      //  ssn_logger.cl_normal({ callSource: '20210610-0024', message: 'ModalCallsUtil doSetup' }, 'yellow', true);
      $scope.addNewLineItem = function (jobID, _containerViewValue) {
        ssn_logger.cl_normal({
          callSource: '20210610-0043-A',
          message: 'Calling addNewLineItem'
        }, 'yellow', true);
        ssn_logger.cl_normal({
          callSource: '20210610-0043-B',
          message: "jobID [" + jobID + "]"
        }, 'yellow', true);
        ssn_logger.cl_normal({
          callSource: '20210610-0043-C',
          message: "containerViewValue [" + _containerViewValue + "]"
        }, 'yellow', true);
        $uibModal.open({
          templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
          controller: 'LineItemController',
          backdrop: 'static',
          keyboard: false,
          resolve: {
            jobId: function jobId() {
              return jobID;
            },
            containerViewValue: function containerViewValue() {
              return _containerViewValue;
            }
          }
        });
      };
    }]);
  };

  return {
    doSetup: doSetup
  };
}();



/***/ }),

/***/ "./Timesheet/LineItem/LineItemController.js":
/*!**************************************************!*\
  !*** ./Timesheet/LineItem/LineItemController.js ***!
  \**************************************************/
/*! exports provided: lineItemController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineItemController_instance", function() { return lineItemController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "./globals.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 06/06/2021 03:06 am - SSN - [20210606-0227] - [005] - Testng for deployment




_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].doSetup("LineItemController");

var lineItemController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('LineItemController', "timesheetApp");

  var doSetup = function doSetup() {
    timesheetApp.controller('LineItemController', ['$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', 'containerViewValue', lineItemControllerFunction]);

    function lineItemControllerFunction($q, $uibModalInstance, $rootScope, $scope, dataService, changeMonitorService, ssn_logger, jobId, containerViewValue) {
      $scope.defaultValue = containerViewValue;
      _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logEvent("DemoSites_20210606_1514", {
        SourceCode: "20210606-1514",
        Message: "Init"
      });
      changeMonitorService.setupMonitor();
      $scope.pageTitle = "Line item-001";
      $scope.disableSaveButton = false;
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
        var newRec;
        newRec = {
          jobId: data.jobID,
          job: {
            jobTitle: data.jobTitle,
            project: {
              projectTitle: data.project.projectTitle
            }
          },
          lineItem: $scope.defaultValue
        };
        $scope.editableJob_LineItem = newRec;
      }

      function getJobError(err) {
        console.error('LineItemController - getJobError - 20210606-0611-B ');
        console.log(err);
        ssn_logger.cl_error({
          callSource: "20210620-1721",
          message: "LineItemController - getJobError - Failed to get record",
          errorObject: err
        });
      }

      function getJobCatch(err) {
        ssn_logger.cl_error({
          callSource: "20210606-0611-C-2-2",
          message: "LineItemController -getJobCatch - Failed to get record",
          errorObject: err
        });
        toastr.error("Failed to load record.  See console log.");
      }

      $scope.submitForm = function () {
        if ($scope.disableSaveButton) return;
        $scope.disableSaveButton = true;
        var test = $scope.editableJob_LineItem;
        $scope.editableJob_LineItem.lineItem = $scope.defaultValue;

        if ($scope.editableJob_LineItem.lineItem == "0") {
          toastr.error("Failed to save record.  See console log.");
          $scope.disableSaveButton = false;
          return;
        }

        var promise = null;

        try {
          promise = dataService.addOrUpdateJob_LineItem($scope.editableJob_LineItem);

          if (promise) {
            promise.then(function (data) {
              ssn_logger.cl_normal({
                callSource: "20210606-2259-C",
                message: "Show value"
              }, 'yellow');
              console.log('HHHHHHHHHHHHH-lineitemcontroller');
              console.log(data);
              console.log($scope.editableJob_LineItem);
              $rootScope.$broadcast('dropdownListDirective_Change_start', {
                msg: 'update dropdown list',
                keyColumn: "lineItemId",
                id: data.lineItemId,
                description: data.lineItem
              });
              $uibModalInstance.close();
              toastr.info("Line item saved.");
            }, function (error) {
              $scope.disableSaveButton = false;
              console.error("LineItemController - 20210606-0548 - promise > error");
              console.log(error);
              toastr.error("Failed to save record.  See console log.");
              $scope.feedbackToUserClassNameCase = 2;
              $scope.feedbackToUserText = error.data;
            });
          }
        } catch (e) {
          ssn_logger.cl_error({
            callSource: "20210606-2052",
            message: "function > error",
            errorObject: e
          });
          toastr.error("Failed to save record.  See console log.");
        }
      };

      $scope.cancelForm = function () {
        if (changeMonitorService.getHaveChanges()) {
          if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
        }

        $uibModalInstance.dismiss(); //same as cancel???
      };
    }
  };

  timesheetApp.directive('lineItemNoDuplicate', ["$q", "ssn_logger", function ($q, ssn_logger) {
    return {
      require: 'ngModel',
      link: function link(scope, elem, attr, ngModel_ctrl) {
        ngModel_ctrl.$parsers.unshift(function (value) {
          console.log('%c *x*x*x*x*x*x*x*x*x*x*x*x*x*x*x', 'color:red;font-size:20px');
          console.log("%c ---------------- ngModel_ctrl--------  ------------------", 'color:red;font-size:20pt;');
          console.log(ngModel_ctrl);
          var testvalue1 = attr["name"];
          console.log('11) -------------------------------');
          console.log(testvalue1);
          console.log('22) -------------------------------');
          console.log(value);
          console.log('44) -------------------------------');
          console.log(attr);
          console.log('55) -------------------------------');
          ngModel_ctrl.$setValidity(attr.name, false);
          return value;
        });

        ngModel_ctrl.$asyncValidators.duplicateLineItem = function (modelValue, viewValue) {
          // We are taking care of duplicates by invering the logic in the DropdownListDirective.
          var deferred = $q.defer(); //if (modelValue && modelValue.id) {
          //    deferred.resolve();
          //} else {
          //    deferred.reject();
          //}

          deferred.resolve();
          return deferred.promise;
        };
      }
    };
  }]);
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
              console.log('%c TimelogLinkOptions - TimesheetContinueController_modal_save - 20210612-0155', 'color:yellow;font-size:14pt');
              changeMonitorService.reset();
            }

            function TimesheetContinueController_modal_cancel(result) {
              console.log('%c TimelogLinkOptions - TimesheetContinueController_modal_cancel - 20210612-0156', 'color:yellow;font-size:14pt');
              changeMonitorService.reset();
            }
          }; // 11/27/2019 08:45 am - SSN - Copied from JobIndexController.ts 
          // 09/28/2019 04:06 pm - SSN - [20190928-1256] - [011] - Adding Entity Framework model attribute
          // Duplicate - Wrong way to go!
          // 06/08/2021 11:01 pm - SSN - [20210608-2247] - [004] - Test line item -  Prep for deployment
          // jobId to timelogId_v01


          $scope.showCreateTimesheetForm = function (_timelogId_v) {
            $uibModal.open({
              templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
              controller: 'TimesheetController',
              // 06/08/2021 03:56 pm - SSN - [20210606-0227] - [037] - Testng for deployment - Line item
              // backdrop: false,
              backdrop: 'static',
              keyboard: false,
              resolve: {
                timelogId_v01: function timelogId_v01() {
                  return _timelogId_v;
                }
              }
            });
          };

          $scope.showCreateTimesheetFormWithJobId = function (_jobId) {
            if (isNaN(_jobId)) {
              _jobId = 0;
            }

            $uibModal.open({
              templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
              controller: 'TimesheetCreateController',
              backdrop: 'static',
              keyboard: false,
              resolve: {
                jobId: function jobId() {
                  return _jobId;
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
          var haveOpenRecord = scope.timelogId && scope.totalSeconds === undefined;
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
    } // 06/08/2021 11:01 pm - SSN - [20210608-2247] - [003] - Test line item -  Prep for deployment
    // jobId to timelogId_v01


    $scope.showCreateTimesheetForm = function (_timelogId_v) {
      if (isNaN(_timelogId_v)) {
        _timelogId_v = 0;
      } // 05/03/2019 04:10 pm - SSN - [20190503-1539] - [004] - Add link to create timelog


      $uibModal.open({
        templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
        controller: 'TimesheetController',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          timelogId_v01: function timelogId_v01() {
            return _timelogId_v;
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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.js");
/// <reference path="../../../node_modules/@types/toastr/index.d.ts" />
// 04/12/2019 03:57 am - SSN - [20190412-0142] - TimesheetApp
// 09/18/2019 11:13 am - SSN - [20190918-0943] - [008] - Adding job status option to index




var timesheetController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetController', "timesheetApp");
  timesheetApp.controller('TimesheetController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'ssn_logger', 'timelogId_v01', function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, ssn_logger, timelogId_v01) {
    changeMonitorService.setupMonitor(); // 05/03/2019 05:54 pm - SSN - [20190503-1539] - [012] - Add link to create timelog 
    // Add pageTitle

    $scope.pageTitle = "Clock-in - 1201";
    $scope.disableSaveButton = false;
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

    dataService.getTimelog(timelogId_v01).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch);

    function getTimelogSuccess(data) {
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data);
      $scope.editableTimeLog = data;
      var timeNow = new Date();
      timeNow.setMilliseconds(0);
      $scope.editableTimeLog.timeLogId = 0;
      $scope.editableTimeLog.startTime = timeNow;
      $scope.editableTimeLog.totalSeconds = null;
    }

    function getTimelogError(err) {
      console.error('TimesheetController - gotJobError -  20210606-0540-B ');
      console.log(err);
      ssn_logger.cl_error({
        callSource: '20210608-2306-a-1',
        message: 'Failed to get Timelogs record.',
        errorObject: err
      });
    }

    function getTimelogCatch(err) {
      console.error('TimesheetController - getJobCatch -  20210606-0540-C ');
      console.log(err);
      ssn_logger.cl_error({
        callSource: '20210608-2306-a-2',
        message: 'Failed to get Timelogs record.',
        errorObject: err
      });
    }

    $scope.submitForm = function () {
      if ($scope.disableSaveButton) return;
      $scope.disableSaveButton = true;
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
    }; //$scope.addNewLineItem = function (jobID, containerViewValue) {
    //    ssn_logger.cl_normal({ callSource: '20210609-1807-A', message:`Calling addNewLineItem` }, 'yellow', true);
    //    ssn_logger.cl_normal({ callSource: '20210609-1807-B', message:`jobID: [${jobID}]` }, 'yellow', true);
    //    ssn_logger.cl_normal({ callSource: '20210609-1807-c', message: `containerViewValue: [${containerViewValue}]` }, 'yellow', true);
    //    $uibModal.open({
    //        templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
    //        controller: 'LineItemController',
    //        // 06/08/2021 03:57 pm - SSN - [20210606-0227] - [038] - Testng for deployment - Line item
    //        // backdrop: false,
    //        backdrop: 'static',
    //        keyboard: false,
    //        resolve: {
    //            jobId: function () {
    //                return jobID;
    //            },
    //            containerViewValue: function () {
    //                return containerViewValue;
    //            }
    //        }
    //    });
    //}

  }]);
  return {
    timesheetApp: timesheetApp
  };
}();



/***/ }),

/***/ "./Timesheet/TimesheetCreateController.js":
/*!************************************************!*\
  !*** ./Timesheet/TimesheetCreateController.js ***!
  \************************************************/
/*! exports provided: timesheetCreateController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timesheetCreateController_instance", function() { return timesheetCreateController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/// <reference path="../../../node_modules/@types/toastr/index.d.ts" />
// 06/09/2021 04:43 pm - SSN - [20210608-2247] - [009] - Test line item -  Prep for deployment



var timesheetCreateController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetCreateController', "timesheetApp");
  timesheetApp.controller('TimesheetCreateController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, ssn_logger, jobId) {
    changeMonitorService.setupMonitor();
    $scope.pageTitle = "Create - 1643";
    $scope.disableSaveButton = false;
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
      console.log('20210609-0526');
      console.log('20210609-0526 1');
      console.log('20210609-0526 3');
      console.log('20210609-0526 4');
      console.log(data);
      var timeLog = {
        jobId: data.jobID,
        job: {
          jobTitle: data.jobTitle,
          project: {
            projectTitle: data.project.projectTitle
          }
        }
      }; //                util.site_instance.fnConverDate(data);

      $scope.editableTimeLog = timeLog;
      var timeNow = new Date();
      timeNow.setMilliseconds(0);
      $scope.editableTimeLog.startTime = timeNow;
    }

    function getJobError(err) {
      console.error('TimesheetCreateController - gotJobError -  20210609-1650-B ');
      console.log(err);
      ssn_logger.cl_error({
        callSource: '20210609-1650-a-1',
        message: 'Failed to get job record.',
        errorObject: err
      });
    }

    function getJobCatch(err) {
      console.error('TimesheetCreateController - getJobCatch -  20210609-1651-C ');
      console.log(err);
      ssn_logger.cl_error({
        callSource: '20210609-1651-a-2',
        message: 'Failed to get job record.',
        errorObject: err
      });
    }

    $scope.submitForm = function () {
      if ($scope.disableSaveButton) return;
      $scope.disableSaveButton = true;
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
          toastr.error("Failed to save record.  See console log.");
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
    }; //$scope.addNewLineItem = function (jobID, containerViewValue) {
    //    ssn_logger.cl_normal({ callSource: '20210609-1801-A', message: 'Calling addNewLineItem' }, 'yellow', true);
    //    ssn_logger.cl_normal({ callSource: '20210609-1801-B', message: `jobID [${jobID}]` }, 'yellow', true);
    //    ssn_logger.cl_normal({ callSource: '20210609-1801-C', message: `containerViewValue [${containerViewValue}]` }, 'yellow', true);
    //    $uibModal.open({
    //        templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
    //        controller: 'LineItemController',
    //        backdrop: 'static',
    //        keyboard: false,
    //        resolve: {
    //            jobId: function () {
    //                return jobID;
    //            },
    //            containerViewValue: function () {
    //                return containerViewValue;
    //            }
    //        }
    //    });
    //}

  }]);
  return {
    timesheetApp: timesheetApp
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

  timesheetApp.controller('TimesheetEditController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', '$timeout', '$rootScope', 'ssn_logger', 'servingPage', function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, $timeout, $rootScope, ssn_logger, servingPage) {
    $timeout(function () {
      changeMonitorService.setupMonitor();
      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].setDefaults();
    }, 600);
    $scope.disableSaveButton = false;
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch);
    $scope.pageTitle = "Edit [" + servingPage + '] 111-01';
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
      timeNow.setSeconds(0); //    let data2 = data;

      _site__WEBPACK_IMPORTED_MODULE_2__["site_instance"].fnConverDate(data);
      $scope.timeLog = data;
      $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog); //console.log('20210607-2041');
      //console.log('data------------------------------------------');
      //console.log(data);
      //console.log('$scope.timeLog------------------------------------------');
      //console.log($scope.timeLog);
      //console.log('$scope.editableTimeLog------------------------------------------');
      //console.log($scope.editableTimeLog);
      //console.log('------------------------------------------');
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
      $scope.disableSaveButton = true;
      $scope.feedbackToUserText = "";
      $scope.feedbackToUserClassNameCase = "";
      var test = $scope.editableTimeLog;
      console.log('20210607-1852');
      console.log(test);
      console.log('------------------------------------------');
      console.log($scope.editableTimeLog);
      console.log('------------------------------------------');
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
          toastr.info("Record saved.");
          var id_temp = $scope.editableTimeLog.timeLogId;
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
          }

          $scope.disableSaveButton = false;
        }, function (error) {
          console.log(error);
          toastr.error("Failed to save record.");
          toastr.warning("Error posted to console.");
          $scope.feedbackToUserClassNameCase = 2;
          $scope.feedbackToUserText = error.data;
          $scope.disableSaveButton = false;
        });
      }
    };

    $scope.cancelForm = function () {
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss();
    };

    $scope.addNewLineItem = function (jobID, _containerViewValue) {
      ssn_logger.cl_normal({
        callSource: '20210609-1802-A',
        message: 'Calling addNewLineItem'
      }, 'yellow', true);
      ssn_logger.cl_normal({
        callSource: '20210609-1802-B',
        message: "jobID [" + jobID + "]"
      }, 'yellow', true);
      ssn_logger.cl_normal({
        callSource: '20210609-1802-C',
        message: "containerViewValue [" + _containerViewValue + "]"
      }, 'yellow', true);
      $uibModal.open({
        templateUrl: '/js/timesheet/LineItem/LineItemTemplate.html',
        controller: 'LineItemController',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          jobId: function jobId() {
            return jobID;
          },
          containerViewValue: function containerViewValue() {
            return _containerViewValue;
          }
        }
      });
    };
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
/* harmony import */ var _Timesheet_TimesheetCreateController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Timesheet/TimesheetCreateController */ "./Timesheet/TimesheetCreateController.js");
/* harmony import */ var _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TimelogLinkOtions/TimelogLinkOptions */ "./Timesheet/TimelogLinkOtions/TimelogLinkOptions.js");
/* harmony import */ var _LineItem_LineItemController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LineItem/LineItemController */ "./Timesheet/LineItem/LineItemController.js");
/* harmony import */ var _Util_autofocus_ssnAutoFocus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Util/autofocus/ssnAutoFocus */ "./Util/autofocus/ssnAutoFocus.js");
/* harmony import */ var _Shared_ModalCallsUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Shared/ModalCallsUtil */ "./Shared/ModalCallsUtil.js");
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 











var doSetup = function doSetup(ngApplicationName) {
  _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_6__["TimelogLinkOptions"].doSetup(ngApplicationName);
  _TimesheetController__WEBPACK_IMPORTED_MODULE_1__["timesheetController_instance"].timesheetApp;
  _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_2__["timesheetContinueController_instance"].timesheetApp;
  _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_3__["timesheetClockoutController_instance"].timesheetApp;
  _TimesheetApp__WEBPACK_IMPORTED_MODULE_0__["timesheetApp_instance"].timesheetApp;
  _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_4__["timesheetEditController_instance"].timesheetApp;
  _Timesheet_TimesheetCreateController__WEBPACK_IMPORTED_MODULE_5__["timesheetCreateController_instance"].timesheetApp;
  _LineItem_LineItemController__WEBPACK_IMPORTED_MODULE_7__["lineItemController_instance"].doSetup();
  _Util_autofocus_ssnAutoFocus__WEBPACK_IMPORTED_MODULE_8__["ssn_auto_focus"].doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
  _Shared_ModalCallsUtil__WEBPACK_IMPORTED_MODULE_9__["ModalCallsUtil"].doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
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
      console.log('123----------------------------');
      console.log('123----------------------------');
      console.log(data);
      console.log('123----------------------------');
      console.log('123----------------------------');
      console.log('123----------------------------');
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

  timesheetApp.controller('TimesheetContinueController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'timelogId', 'changeMonitorService', function ($scope, $uibModalInstance, $http, $q, dataService, $timeout, timelogId, changeMonitorService) {
    changeMonitorService.setupMonitor();
    dataService.getTimelog(timelogId).then(getTimelogSuccess, getTimelogError)["catch"](getTimelogCatch);
    $scope.pageTitle = "Continue / Line Item - 888-V2"; // 12/29/2019 11:17 pm - SSN - Adding disableSaveButton 

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
      $scope.timeLog = data2;
      $scope.timeLog.timeLogId = 0;
      $scope.timeLog.startTime = timeNow;
      $scope.timeLog.dateModified = null;
      $scope.timeLog.totalSeconds = null;
      $scope.editableTimeLog = angular__WEBPACK_IMPORTED_MODULE_1__["copy"]($scope.timeLog);
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
}; // https://devblogs.microsoft.com/premier-developer/add-application-insights-to-an-angular-spa/





var AppInsights_Util = function () {
  var self = {
    callSource: 'NotSet-202106062228'
  };
  var config = {
    instrumentationKey: _environment__WEBPACK_IMPORTED_MODULE_0__["environment"].appInsights.instrumentationKey
  };

  var haveInstrumentationKey = function haveInstrumentationKey() {
    return config.instrumentationKey;
  };

  var doSetup = function doSetup(callSource) {
    self.callSource = callSource;

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
    console.log('ApplicationInsights  - logPageView - 20210606-2223', 'color:yellow');
    console.log(properties);
    console.log('---------------------');

    var newProps = __assign({
      callSource_aim: self.callSource
    }, properties);

    console.log(newProps);
    console.log('===================');
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
          scope.sortmethod();
        };

        scope.displayArrow = function () {
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

/***/ "./Util/Logger/ssn_AngularJslogger.js":
/*!********************************************!*\
  !*** ./Util/Logger/ssn_AngularJslogger.js ***!
  \********************************************/
/*! exports provided: ssn_AngularJslogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssn_AngularJslogger", function() { return ssn_AngularJslogger; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "./globals.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
// 06/06/2021 06:39 pm - SSN - [20210606-0227] - [011] - Testng for deployment



var ssn_AngularJslogger = function () {
  var doSetup = function doSetup(callSource, currentApplication) {
    _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].doSetup(callSource);
    var angularModule = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('ssn_logger', currentApplication);
    angularModule.factory("ssn_logger", ['$q', function ($q) {
      var cl_normal = function cl_normal(msg, color, load) {
        if (load === void 0) {
          load = false;
        }

        var style = "color:" + color + ";";

        if (load) {
          style += "font-size:12px;font-weight:bold;";
        }

        console.log("%c-----------------------------", style);
        console.log("%c" + msg.callSource, style);
        console.log("%c" + msg.message, style);
        console.log("%c=============================", style);
      };

      var cl_error = function cl_error(errorMsg) {
        var style = 'color:red;font-size:16px;font-weight:bold;';
        console.log("%c-----------------------------", style);
        console.log("%c" + callSource, style);
        console.log("%c" + errorMsg.callSource, style);
        console.log("%c" + errorMsg.message, style);
        console.log(errorMsg.errorObject);
        console.log("%c-----------------------------", style);
        _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logException(errorMsg.errorObject, {
          SourceCode1: "ssn-angjs-[" + callSource + "]",
          SourceCode2: errorMsg.callSource,
          Message: errorMsg.message
        });
      };

      return {
        cl_normal: cl_normal,
        cl_error: cl_error
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
  // 06/06/2021 05:29 pm - SSN - [20210606-0227] - [009] - Testng for deployment
  // callSource_parent
  var doSetup = function doSetup(ngApplicationName, callSource_parent) {
    _ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_0__["AppInsights_Util"].logEvent("DemoSites_20191228_2228", {
      SourceCode: "20191228-2210",
      Message: "doSetup",
      CallSource_parent: callSource_parent
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

/***/ "./Util/autofocus/ssnAutoFocus.js":
/*!****************************************!*\
  !*** ./Util/autofocus/ssnAutoFocus.js ***!
  \****************************************/
/*! exports provided: ssn_auto_focus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssn_auto_focus", function() { return ssn_auto_focus; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globals */ "./globals.js");
// 06/08/2021 02:44 pm - SSN - [20210606-0227] - [030] - Testng for deployment - Line item


var ssn_auto_focus = function () {
  var doSetup = function doSetup(callSource, applicationName) {
    var Jobs_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('ssn_set_focus', applicationName);
    Jobs_Angular_Module.directive('ssnAutoFocus', ['ssn_logger', function (ssn_logger) {
      ssn_logger.cl_normal({
        callSource: '2021008-1509',
        message: 'ssnAutoFocus in directive'
      }, 'yellow');
      return {
        restrict: 'A',
        // link: function (scope: IScope_Custom, elem, attrs) {
        link: function link(scope, elem, attrs) {
          ssn_logger.cl_normal({
            callSource: '2021008-1526-d',
            message: 'ssnAutoFocus firing'
          }, 'cyan'); //if (scope.objectList == null) {
          //}

          elem.focus();
        }
      };
    }]);
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
    // 06/06/2021 06:21 pm - SSN - [20210606-0227] - [010] - Testng for deployment
    // instrumentationKey: "33c6def5-430f-4cd4-8b6f-996820820dab",
    // Replace PS-FabrikamResidences  with DevSitesIndex20190127__0929_redeploy_v02
    instrumentationKey: "27233881-18ab-41ea-b5f9-f24b8ed62bd3"
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
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.js");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.js");
/* harmony import */ var _Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Projects/ProjectsIndex */ "./Projects/ProjectsIndex.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Util/Logger/ssn_AngularJslogger */ "./Util/Logger/ssn_AngularJslogger.js");
/* harmony import */ var _Util_autofocus_ssnAutoFocus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Util/autofocus/ssnAutoFocus */ "./Util/autofocus/ssnAutoFocus.js");
/* harmony import */ var _Timesheet_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Timesheet/Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.js");
// 09/21/2019 11:31 am - SSN - [20190921-1129] - [002] - Plug in job status filter on job's index














var ngApplicationName = "timesheetApp";
_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_10__["RestorePreviousPageState_instance"].doSetup(ngApplicationName, "jobIndex_main_20210606_1732");
_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_9__["dropdownListDirective_instance"].doSetup(ngApplicationName);
_Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_6__["changeMonitorService_instance"].doSetup(ngApplicationName);
_Projects_ProjectsIndex__WEBPACK_IMPORTED_MODULE_8__["ProjectIndexController_instance"].doSetup(ngApplicationName);
_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName);
_Jobs_JobsIndexController__WEBPACK_IMPORTED_MODULE_4__["jobsIndexController_instance"].Jobs_Angular_Module;
_Util_HeaderWithSort__WEBPACK_IMPORTED_MODULE_0__["headerWithSort_instance"].headerWithSort_angular_module;
_Util_pagingDirective__WEBPACK_IMPORTED_MODULE_1__["pagingDirective_instance"].pagingDirective_angular_module;
_JobStatusDirective__WEBPACK_IMPORTED_MODULE_3__["jobStatusDirective_instance"].Job_Status_Angular_Module;
_JobStatusChangeRecord__WEBPACK_IMPORTED_MODULE_5__["jobStatusChangeRecord_instance"].angular_Module;
_Util_PageUpdater__WEBPACK_IMPORTED_MODULE_7__["PageUpdater_Instance"].doSetup(ngApplicationName);
_Timesheet_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_13__["doSetup"](ngApplicationName);
_Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_11__["ssn_AngularJslogger"].doSetup('jobIndex_main', ngApplicationName);
_Util_autofocus_ssnAutoFocus__WEBPACK_IMPORTED_MODULE_12__["ssn_auto_focus"].doSetup("jobIndex_main", ngApplicationName);

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
              console.log($(e.target));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vSm9icy9Kb2JzSW5kZXhDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1Byb2plY3RzL1Byb2plY3RzSW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL01vZGFsQ2FsbHNVdGlsLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0QXBwLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRFZGl0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seS50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0hlYWRlcldpdGhTb3J0LnRzIiwid2VicGFjazovLy8uL1V0aWwvSm9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0xvZ2dlci9zc25fQW5ndWxhckpzbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzLnRzIiwid2VicGFjazovLy8uL1V0aWwvcGFnaW5nRGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JTdGF0dXNDaGFuZ2VSZWNvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JTdGF0dXNEaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vam9icy9Kb2JzSW5kZXhfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RCxLQUFPLENBQUMsQ0FBQyxPQUFGLENBQVUsRUFBVixFQUFjLElBQWQsQ0FBZjtBQUNILENBZEQsQyxDQWtCQTs7O0FBR0EsU0FBUyxxQkFBVCxHQUE4QjtBQUUxQixTQUFPLENBQUMsR0FBUixDQUFZLGdEQUFaOztBQUdBLE1BQUksQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLDBDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25oQkEseUIiLCJmaWxlIjoiYnVuZGxlX2pvYnNJbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uIChyZWNvcmRzUGVyUGFnZTpudW1iZXIsIGN1cnJlbnRQYWdlOm51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiBcclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtyZWNvcmRzUGVyUGFnZX0vJHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuY29weShyZXN1bHQuZGF0YSwgX2RldlNpdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjI5IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAxOF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYC9hcGkvZGVtb3NpdGVzYXBpL3JlY29yZGNvdW50YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldFRpbWVsb2cvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE3LzIwMTkgMTI6NTYgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE2XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBvcHRpb24gdG8gbGlzdCBKb2JzXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xOC8yMDE5IDAzOjI0IGFtIC0gU1NOIC0gWzIwMTkwOTE3LTA5MjldIC0gWzAxN10gLSBBZGRpbmcgcGFnaW5nIGZvciBhbmd1bGFyIGxpc3RzXHJcbiAgICAgICAgICAgIC8vIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChwYWdlTm8sIHJlY29yZHNQZXJQYWdlLCBjb2x1bW5OYW1lLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDk6MTQgYW0gLSBTU04gLSBQYXNzIHByb2plY3RJZFxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvbGlzdC8nICsgY29sdW1uQmFnLmN1cnJlbnRQYWdlTm8gKyBcIi9cIiArIGNvbHVtbkJhZy5yZWNvcmRzUGVyUGFnZSArIFwiL1wiICsgY29sdW1uQmFnLmNvbHVtbk5hbWUgKyBcIi9cIiArIGNvbHVtbkJhZy5kZXNjICsgXCIvXCIgKyBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgKyBcIj9wcm9qZWN0SWQ9XCJcclxuICAgICAgICAgICAgICAgICAgICArIGNvbHVtbkJhZy5ma19maWx0ZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYnMgWzIwMTkwOTE3LTAwNTddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMzAvMjAxOSAwNzowNiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYiA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAxMDo1MiBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDJdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0Sm9iLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMThdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgIHZhciBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL1Byb2plY3RBUEkvcmVmcmVzaHJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgcHJvamVjdCBzZWFyY2ggcmVjb3JkICBbMjAxOTExMjItMTYwOF0gWycgKyBpZCArICddIFsnICsgc2VydmluZ1BhZ2UgKyAnXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzA3LzIwMjEgMDY6MjIgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE1XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAgICAgdmFyIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYl9MaW5lSXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvam9iX2xpbmVJdGVtQVBJJywgam9iX0xpbmVJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV2U2l0ZXM6IGtvLm9ic2VydmFibGUoX2RldlNpdGVzKSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlc0NvdW50OiBfZ2V0RGV2U2l0ZXNDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG5pbnRlcmZhY2UgTG9va3VwUmVjb3JkIHtcclxuICAgIGlkOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9ERExEIGV4dGVuZHMgYW5ndWxhci5JU2NvcGUge1xyXG5cclxuICAgIGZvcm1OYW1lOiBhbnlcclxufVxyXG5cclxuXHJcbi8vIEFkZCBhdXRvZm9jdXM9XCJ0cnVlXCIgdG8gc2V0IGZvY3VzXHJcblxyXG52YXIgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRHJvcGRvd25MaXN0RGlyZWN0aXZlJywgZGVmYXVsdEFwcE5hbWUsIFsndWkuYm9vdHN0cmFwJ10pO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHV0aWxpdHlDb250cm9sbGVyX29iamVjdFJlZiA9IGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCAnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uLCBzc25fbG9nZ2VyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzFcIiwgJ2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIERyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV8yXCIsICdjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBEcm9wZG93bkxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDcwNzogIHN1Ym1pdEZvcm1fM1wiLCAnY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzRcIiwgJ2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIERyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV81XCIsICdjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSW50b0FwcFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmNvZGUtc2FtcGxlLmNvbS8yMDE4LzExL2FuZ3VsYXJqcy1zY3JvbGwtdG8tZXJyb3Itb24tc3VibWl0LWFuZC5odG1sXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxJbnRvQXBwVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZWx0ID0gJChcIi5oYXMtZXJyb3I6dmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWx0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbFRvcDogKGVsdC5maXJzdCgpLm9mZnNldCgpLnRvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsVG9wOiAoZWx0LmZpcnN0KCkuY2xvc2VzdCgnZGl2JykucHJldkFsbCgnZGl2Jykub2Zmc2V0KCkudG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IChlbHQuZmlyc3QoKS5jbG9zZXN0KCdkaXYuZm9ybS1ncm91cCcpLm9mZnNldCgpLnRvcCAtIDgwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3gnLCBbXCIkcVwiLCBcInNzbl9sb2dnZXJcIiwgZnVuY3Rpb24gKCRxLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMjEgMDI6MDQgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE0XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoaXMgZm9yIGFkZGluZyBuZXcgaXRlbXMgdG8gbWFzdGVyLlxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0ciwgbmdNb2RlbF9jdHJsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlID0gYXR0cltcImRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZVwiXTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyAyMDIxMDYxMC0yMTE4IGRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlfV1gLCAnY29sb3I6Ymx1ZTtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGF0dHIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5iaW5kKCdibHVyJywgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHNldFZpZXdWYWx1ZShuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94ID0gYXR0ci5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveC5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHRlc3R2YWx1ZTEgPSBhdHRyW1wibmFtZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB0ZXN0dmFsdWUyID0gYXR0ci5uYW1lICsgJy5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3QgdGVzdHZhbHVlMyA9IGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyAqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4KngnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyAtLS0tLS0tLS0tLS0tLS0tIG5nTW9kZWxfY3RybC0tLS0tLS0tIDU2NWRkIC0tLS0tLS0tLS0tLS0tLS0tLWAsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmdNb2RlbF9jdHJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGVzdHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzExKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGVzdHZhbHVlMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzIyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGVzdHZhbHVlMylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMzMpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnNDQpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdHRyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc1NSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gdXNhZ2UuIE5vdCBpbXBsZW1lbnRlZCBpbiBhcHBsaWNhdGlva24gbG9naWMuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHNldFZhbGlkaXR5KGF0dHIubmFtZSArICcuZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3gnLCBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuZ01vZGVsLiRzZXRWYWxpZGl0eShhdHRyLm5hbWUgLCBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kYXN5bmNWYWxpZGF0b3JzLmlzVmFsaWREcm9wZG93bkRpcmVjdGl2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvZXMgZmlyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWxWYWx1ZSBkb2Vzbid0IGhvbm9yIHNlbGVjdGVkIHZhbHVlIGFmdGVyIGl0IGhhcyBhbHJlYWR5IGJlZW4gc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbnRpbCB3ZSBjYW9tZSB1cCB3aXRoIGEgd2F5IHRvIHJlc2V0IGl0LCBkaXNhYmxlIGJ5IGJ5cGFzc2luZyBhcyB2YWxpZC5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyAtLS0tLS0tLS0tLS0tLS0tIG5nTW9kZWxfY3RybC0tLS0tLS0tIDE0OSAtLS0tLS0tLS0tLS0tLS0tLS1gLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5nTW9kZWxfY3RybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWHh4JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnIDE0NCBYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh4eGMnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtb2RlbFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2aWV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gbW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gISF2YWxpZGF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMgZG9ycGRvd25saXN0RGlyZWNpdHZlIGlzVmFsaWREcm9wZG93bkRpcmVjdGl2ZVNlbGVjdGlvbicsICdjb2xvcjpncmVlbjtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyBkcm9wZG93bkxpc3REaXJlY2l2ZUlucHV0Qm94SW52ZXJzZSBbJHtkcm9wZG93bkxpc3REaXJlY2l2ZUlucHV0Qm94SW52ZXJzZX1dIGAsICdjb2xvcjpncmVlbjtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyB2YWxpZGF0aW9uUmVzdWx0IDEgWyR7dmFsaWRhdGlvblJlc3VsdCB9XSBgLCAnY29sb3I6Z3JlZW47Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaXN0RGlyZWNpdmVJbnB1dEJveEludmVyc2UpIHZhbGlkYXRpb25SZXN1bHQgPSAhdmFsaWRhdGlvblJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIHZhbGlkYXRpb25SZXN1bHQgMiBbJHt2YWxpZGF0aW9uUmVzdWx0fV0gYCwgJ2NvbG9yOmdyZWVuO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25SZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgcHJvbWlzZSBvZiB0aGUgYXN5bmNocm9ub3VzIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIFsnc3NuX2xvZ2dlcicsICckdGltZW91dCcsIGZ1bmN0aW9uIChzc25fbG9nZ2VyLCAkdGltZW91dCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gWyckd2luZG93JywgJyRodHRwJywgJyRxJywgJyRzY29wZScsICckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCBmdW5jdGlvbiAoJHdpbmRvdywgJGh0dHAsICRxLCAkc2NvcGUsICRyb290U2NvcGUsICR0aW1lb3V0LCBjaGFuZ2VNb25pdG9yU2VydmljZSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNSZWFkeSA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdm0udGVtcENvbnRyb2xOYW1lID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZV8ke3ZtLmNhbGxTb3VyY2V9X2AgKyBkLmdldEhvdXJzKCkgKyBcIl9cIiArIGQuZ2V0TWludXRlcygpICsgXCJfXCIgKyBkLmdldFNlY29uZHMoKSArIFwiX1wiICsgZC5nZXRNaWxsaXNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgIC8vIHZtLnRlbXBDb250cm9sTmFtZSA9IHRoaXMua2V5Q29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdm0udGVtcENvbnRyb2xOYW1lID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZV8ke01hdGgucmFuZG9tKCl9X2A7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uYmxhY2tMaXN0RXJyb3JOYW1lID0gdm0udGVtcENvbnRyb2xOYW1lICsgXCIuZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5kcm9wZG93bkxpc3REaXJlY2l2ZUlucHV0Qm94SW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvclRyaWdnZXJlZCA9IGZ1bmN0aW9uIChlcnJvck5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdm0uZm9ybU5hbWUuJGVycm9yW2Vycm9yTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZXJyb3JUcmlnZ2VyZWRXaXRoQ29udHJvbE5hbWUgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUsIGVycm9yTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdm0uZm9ybU5hbWVbY29udHJvbE5hbWVdLiRlcnJvcltlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmcgd2l0aCAncmVxdWlyZWQnIHJldHVybiBhIGJvb2xlYW4uICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSlbXCIkZXJyb3JcIl1bZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNzc3NcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCdkcm9wZG93bkxpc3REaXJlY3RpdmVfYXV0b2ZvY3VzJywgZnVuY3Rpb24gKGV2ZW50cywgYXJncykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnMjAyMTA2MTItMDMxNyAtIGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9hdXRvZm9jdXMgJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MjBwdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIGlucHV0T2JqLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnID09PSBcImRvU2V0Rm9jdXNcIiAmJiBhcmdzLmpxdWVyeU9iamVjdFJlZikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmpxdWVyeU9iamVjdFJlZilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuanF1ZXJ5T2JqZWN0UmVmLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmpxdWVyeU9iamVjdFJlZilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyR3aW5kb3cuYWRkRXZlbnRcclxuICAgICAgICAgICAgICAgIC8vYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGJsdXIgdHJpZ2dlcmVkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnJWMgJyArICdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBibHVyIHRyaWdnZXJlZCAyJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnJWMgJyArICdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBibHVyIHRyaWdnZXJlZCA0Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnJWMgJyArICdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBibHVyIHRyaWdnZXJlZCA2Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCdkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0JywgZnVuY3Rpb24gKGV2ZW50cywgYXJncykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNIYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZmlyZXMgb24gc3RhcnQgYW5kIG9uY2Ugb24gY2hhbmdlXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBhcmVudEtleU5hbWUgJiYgdm0ucGFyZW50S2V5TmFtZSA9PSBhcmdzLmtleUNvbHVtbiAmJiBhcmdzLmtleVZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIHZtLnBhcmVudEtleUNvbHVtbiBhbmQgYXJncy5rZXlWYWx1ZSBiZWZvcmUgdXBkYXRlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5wYXJlbnRLZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmtleVZhbHVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5wYXJlbnRLZXlDb2x1bW4gPSBhcmdzLmtleVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXJncy5tc2cgPT0gXCJ1cGRhdGUgZHJvcGRvd24gbGlzdFwiKSAmJiB2bS5rZXlDb2x1bW4gJiYgYXJncy5rZXlDb2x1bW4gJiYgKHZtLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpID09IGFyZ3Mua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0xNzA4LUInLCBtZXNzYWdlOiBgZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCB1cGRhdGUgZHJvcGRvd24gLSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAnZ3JlZW4nLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50czonLCBldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJncycsIGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMoYXJncy5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogYXJncy5pZCwgdGl0bGU6IGFyZ3MuZGVzY3JpcHRpb24gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnID09IFwidmFsaWRhdGVUaGlzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE1MjknLCBtZXNzYWdlOiAnY2FsbCB2YWxpZGF0ZVRoaXMnIH0sICdibHVlJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZVRoaXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLm1zZyA9PSBcInNlbGVjdCBuZXcgdmFsdWVcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9jb25zb2xlLmxvZygndXBkYXRlIGtleUNvbHVtbiBqUXVlcnkgIFtzZWxlY3QgbmV3IHZhbHVlXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vY29uc29sZS5sb2codm0ua2V5Q29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGB6enp6enogICAgMDAwIHp6enp6enogc2V0IHplcm8gMjIgenp6enp6enp6enp6enp6enp6enp6enp6enp6YCwgJ2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZtLm5nTW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubmdNb2RlbCA9IDA7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2bS5uZ01vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGFuZGxlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMDU0NycsIG1lc3NhZ2U6IGBkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0IG5vdCBoYW5kbGVkIC0gdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzJywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDg6MjkgYW0gLSBTU04gLSBBZGRpbmcgLSBOZWVkIHRvIGluaXRpYWxpemEgZm9yICR3YXRjaCB0byB3b3JrLlxyXG4gICAgICAgICAgICAgICAgLy8gZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgaW5zdGVhZCBvZiBuZ01vZGVsIGJlY2F1c2Ugd2UgdXNlIGFuIG9iamVjdCBmb3Igc2VsZWN0ZWQgZW50cnksIGlkIGFuZCB0aWxlLiBuZ01vZGVsIGlzIHVzdWFsbHkgYSBrZXkuIChUaGUgaWQpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEubmdNb2RlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9zc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNDM4JywgbWVzc2FnZTogYENIQU5HRSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAneWVsbG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE0MzgtQicsIG1lc3NhZ2U6IGBDSEFOR0Ugdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ2dyZWVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZVRoaXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTQzOC1DLTInLCBtZXNzYWdlOiBgQ0hBTkdFIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdyZWQnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm0uaXNSZWFkeSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLnBhcmVudEtleUNvbHVtbicsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjMjAyMTA2MDgtMDA1NC1BIC0gcGFyZW50IGtleSB2YWx1ZSBjaGFuZ2VkIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCwgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHR5cGVvZiBuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlICYmIG9sZFZhbHVlICE9IG51bGwpIHsgLy8gb2xkVmFsdWUgaXMgbnVsbCBvbiBmaXJzdCBjYWxsLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uc2V0SXNWYWxpZEJvb2xlYW4oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMyMDIxMDYwOC0wMDU0LUIgLSBwYXJlbnQga2V5IHZhbHVlIGNoYW5nZWQgLSByZXNldCBsb2NhbCBrZXkgICBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjIwcHg7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjMjAyMTA2MDgtMDA1NCAtIHBhcmVudCBrZXkgdmFsdWUgY2hhbmdlZCAtIHJlc2V0IGxvY2FsIGtleScsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHg7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjMjAyMTA2MDgtMDA1NCAtIHBhcmVudCBrZXkgdmFsdWUgY2hhbmdlZCAtIHJlc2V0IGxvY2FsIGtleScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjIwcHg7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2bS5uZ01vZGVsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5uZ01vZGVsID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMyMDIxMDYwOS0xNTEyIC0gaGlkZGVuRmllbGROYW1lIC0gcGFyZW50IGtleSB2YWx1ZSBjaGFuZ2VkIC0gcmVzZXQgbG9jYWwga2V5JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBweDsnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWU6IExvb2t1cFJlY29yZCwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFdvcmtzIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJUVFRUVFRUVFRUVFRYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjJyArICcgZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh2bS5uZ01vZGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUuaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSBuZXdWYWx1ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIC0tLS0tLS0tLS0tLS0tLS0gLS0tLS0tLS0gMzk1IC0tLS0tLS0tLS0tLS0tLS0tLWAsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIHZtLm5nTW9kZWwgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKG5ld1ZhbHVlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lLiRkaXJ0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmRvU2V0SGF2ZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldElzVmFsaWRCb29sZWFuKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaWQgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNldElzVmFsaWRCb29sZWFuKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmRpc2NpcGxpbmVpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2NpcGxpbmVpZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL0Rpc2NpcGxpbmVBUEknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTIvMTAvMjAyMCAwNDozMiBwbSAtIFNTTiAtIFsyMDIwMTIxMC0xNjI1XSAtIFswMDJdIC0gVXBkYXRlIFRpbWVsb2cgZWRpdCBNVkNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vY2FzZSAndGltZWxvZy5saW5laXRlbWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGluZWl0ZW1pZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL2pvYl9MaW5lSXRlbS90eXBlYWhlYWRfam9icmVjb3Jkcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9qb2JfTGluZUl0ZW0vdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5qb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwNDo0NiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2IucHJvamVjdGlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLkFQSVVybExpc3RBbGwgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbWlzc2luZyBkZWZpbml0aW9uIGZvciBBUElVcmxMaXN0QWxsIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMTA2MDgtMTMxMGBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7ZXJyb3JNZXNzYWdlfWAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTMxMScsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLkFQSVVybFNpbmdsZVJlY29yZCA9PSB1bmRlZmluZWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbWlzc2luZyBkZWZpbml0aW9uIGZvciB2bS5BUElVcmxTaW5nbGVSZWNvcmQgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIxMDYwOC0xNDI3YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtlcnJvck1lc3NhZ2V9YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xNDI4JywgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5Q29sdW1uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEtleUNvbHVtblZhbHVlID0gdGhpcy5wYXJlbnRLZXlDb2x1bW47IC8vdW5kZWZpbmVkO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRLZXlDb2x1bW5WYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSB2bS5BUElVcmxMaXN0QWxsICsgXCIvXCIgKyBwYXJlbnRLZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jaGFuZ2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQnLCB7IG1zZzogJ3NlbGVjdCBuZXcgdmFsdWUnLCBrZXlDb2x1bW46IHZtLmtleUNvbHVtbiwga2V5VmFsdWU6IHZtLm5nTW9kZWwgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldElzVmFsaWRCb29sZWFuKGZhbHNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5uZ01vZGVsID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQodm0ubmdNb2RlbCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzLCB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5zZXRJc1ZhbGlkQm9vbGVhbih0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRzY29wZS4kYnJvYWRjYXN0KCdkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0JywgeyBtc2c6ICdIYXMgdmFsaWQgdmFsdWUnLCBrZXlDb2x1bW46IHZtLmtleUNvbHVtbiwga2V5VmFsdWU6IHZtLm5nTW9kZWwgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0wNTI4JywgbWVzc2FnZTogYHZhbGlkYXRlVGhpczogdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3JlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgdGl0bGU6IHZtLmNvbnRhaW5lclZpZXdWYWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogZGF0YS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogZGF0YS50YV9pZCwgdGl0bGU6IGRhdGEudGFfZGVzY3JpcHRpb24gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzBcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzMVwiIH0sIFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMyXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzNcIiB9LCBcInJlZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjE1OC1BJywgbWVzc2FnZTogYGN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yIGAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0yMTU4LUInLCBtZXNzYWdlOiBgY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgYCwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbGVkIGZyb20gdmlldyBpbnB1dCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmNvbnRhaW5lclZpZXdWYWx1ZSA9IGxvb2t1cFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDctQVwiLCBtZXNzYWdlOiBcImdldERpc2NpcGxpbmUgY2FsbCB0byBhc3NpZ24gY29udGFpbmVyVmlld1ZhbHVlIGZhaWxlZFwiIH0sIFwiUmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTItMDA0MVwiLCBtZXNzYWdlOiBgZ2V0RGlzY2lwbGluZSBjYWxsIHRvIGFzc2lnbiBjb250YWluZXJWaWV3VmFsdWUgZmFpbGVkIFske2xvb2t1cFZhbHVlfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybExpc3RBbGxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZVNob3J0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0udGFfaWQsIHRpdGxlOiBpdGVtLnRhX2Rlc2NyaXB0aW9uIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmFkZHJlc3Nlcy5sZW5ndGggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gdm0uYWRkcmVzc2VzWzBdO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMi8yMDIxIDAxOjE1IHBtIC0gU1NOIC0gVGVzdGluZyBpZiBjYW4gZ2V0IG92ZXIgcHJldmVudGluZyB1c2VycyBmcm9tIGFsdGVyaW5nIHNpbmdsZSBtYXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLyB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogdm0uYWRkcmVzc2VzWzBdLmlkIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2bS5uZ01vZGVsID0gdm0uYWRkcmVzc2VzWzBdLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUodm0uYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwOC0yMTM5XCIsIG1lc3NhZ2U6IFwidHlwZWFoZWFkRGlzY2lwbGluZUVycm9yXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwOC0yMTQwXCIsIG1lc3NhZ2U6IHJlc3BvbnNlIH0sIFwicmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQgPSBmdW5jdGlvbiAobG9va3VwSUQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgZ2V0RGlzY2lwbGluZUN1cnJlbnQgMzAzICBrZXlDb2x1bW5bJHt2bS5rZXlDb2x1bW59XSAgIGxvb2t1cElEIFske2xvb2t1cElEfV1gLCAnY29sb3I6Y3lhbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIHZtLkFQSVVybFNpbmdsZVJlY29yZCAgWyR7dm0uQVBJVXJsU2luZ2xlUmVjb3JkfV0gYCwgJ2NvbG9yOmJsdWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cElEID09PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIGxvb2t1cElEIGlzIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTQxNScsIG1lc3NhZ2U6IGBDYWxsaW5nIGdldERpc2NpcGxpbmVDdXJyZW50ICB3aXRoIG51bGwgbG9va3VwSURgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsVXJsID0gdm0uQVBJVXJsU2luZ2xlUmVjb3JkICsgXCIvXCIgKyBsb29rdXBJRDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGxvY2FsVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIGdldERpc2NpcGxpbmVDdXJyZW50ICAyMjIga2V5Q29sdW1uWyR7dm0ua2V5Q29sdW1ufV0gIGxvb2t1cElEICBbJHtsb29rdXBJRH1dIHN1Y2Nlc3NgLCAnY29sb3I6Z3JlZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBnZXREaXNjaXBsaW5lQ3VycmVudCAyMDIgbG9va3VwSUQgIFske2xvb2t1cElEfV0gZXJyb3JgLCAnY29sb3I6cmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTEzMTYnLCBtZXNzYWdlOiBgRmFpbGVkIGNhbGwgdG8gWyR7bG9jYWxVcmx9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5mb3JtRXJyb3JzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bS5mb3JtTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5mb3JtRXJyb3JzQnlDb250cm9sID0gZnVuY3Rpb24gKGNvbnRyb2xOYW1lLCBlcnJvck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSlbXCIkZXJyb3JcIl1bZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uc2V0SXNWYWxpZEJvb2xlYW4gPSBmdW5jdGlvbiAoc2V0dGluZzogQm9vbGVhbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IHZtLmRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlID8gIXNldHRpbmcgOiBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXRJc1ZhbGlkQm9vbGVhbih0cnVlKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfV07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9Ecm9wZG93bkxpc3QvRHJvcERvd25MaXN0RGlyZWN0aXZlLmh0bWxcIixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLCAvL3JlcXVpcmVkIGluIDEuMysgd2l0aCBjb250cm9sbGVyQXMgLSBWRVJJRklFRC5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxTb3VyY2U6IFwiQFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlDb2x1bW46IFwiQGtleVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlDb2x1bW46IFwiPXBhcmVudGtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEtleU5hbWU6IFwiQFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3JtTmFtZTogXCI9XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbkZpZWxkTmFtZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWw6IFwiPVwiLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRnVuYzogXCImXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRnVuY1NvdXJjZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvbGRlciBmb3IgdHlwZWQgaW4gdmFsdWUsIGlmIGl0IGRvZXNuJ3QgZXhpc3QsIHNvIGl0IGNhbiBiZSBjb3BpZWQgdG8gdGhlIGFkZCBmb3JtLlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogXCI9P1wiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkcm9wZG93bkxpc3REaXJlY2l2ZUlucHV0Qm94SW52ZXJzZTogXCJAXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZTogZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJWaWV3VmFsdWUgPSBcIk5vdFNldC0yMDIxMDYwNy0wMjEzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNy0xNjA4LUFcIiwgbWVzc2FnZTogXCJVcGRhdGUgY29udGFpbmVyVmlld1ZhbHVlXCIgfSwgXCJ5ZWxsb3dcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDgtQlwiLCBtZXNzYWdlOiB0aGlzLmNhbGxTb3VyY2UgfSwgXCJ5ZWxsb3dcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDctMDEyNyAgbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3IDIgbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3IDIgbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3IDIyMiBsaW5rJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIHZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7IC8vdmFsaWQgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDU6MjkgYW0gLSBTU04gLSBbMjAxOTExMjgtMDUyOV0gLSBbMDAxXSAtIEF1dG9mb2N1c1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNldGZvY3VzRnVuYyA9IChlbGVtKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYXV0b2ZvY3VzLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0T2JqID0gZWxlbS5maW5kKCdpbnB1dFt0eXBlPXRleHRdJykuZmlsdGVyKCc6dmlzaWJsZTpmaXJzdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0T2JqLnZhbCgpID09PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICBpbnB1dE9iai5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZm9ybU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJzIwMjEwNjEyLTAzNTMgLSBzZXRmb2N1cyAnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ3RoaXNmb3JtTmFtZTonLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLmZvcm1OYW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAndGhpc2Zvcm1OYW1lLiR0b3VjaGVkJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdDsnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArIHNjb3BlLmZvcm1OYW1lLiR0b3VjaGVkLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KCdkcm9wZG93bkxpc3REaXJlY3RpdmVfYXV0b2ZvY3VzJywgeyBtc2c6ICdkb1NldEZvY3VzJywganF1ZXJ5T2JqZWN0UmVmOiBpbnB1dE9iaiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICcyMDIxMDYxMi0wMzUzIC0gc2V0Zm9jdXMgIC0gTk8gRk9STSBOQU1FJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRmb2N1c0Z1bmMoZWwpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2VsLmJpbmQoJ2tleWRvd24ga2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGlmIChldmVudC53aGljaCA9PSAyNykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnMScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJzEydicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJzEyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnMScpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHNjb3BlLiRicm9hZGNhc3QoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQnLCB7IG1zZzogJ0hhcyB2YWxpZCB2YWx1ZScsIGtleUNvbHVtbjogdGhpcy5rZXlDb2x1bW4sIGtleVZhbHVlOiB0aGlzLm5nTW9kZWwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCBJQ29sdW1uQmFnIGZyb20gJy4uL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuaW1wb3J0IHsgam9iU3RhdHVzRGlzcGxheURpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gXCIuLi9VdGlsL0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVcIjtcclxuXHJcbmpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2U7XHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNDo0MiBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDNdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBqb2JzSW5kZXhDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgSm9ic19Bbmd1bGFyX01vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdKb2JJbmRleENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8yNy8yMDE5IDA5OjI0IGFtIC0gU1NOIC0gUGFzc2luZyBpbiBwcm9qZWN0SWRcclxuICAgIEpvYnNfQW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcignam9ic0luZGV4Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJyR0aW1lb3V0JywgJyRzY2UnLCAnJHVpYk1vZGFsJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCAkc2NlLCAkdWliTW9kYWwpIHtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5oYXNFcnJvcnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDA7XHJcbiAgICAgICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2VzID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zaG93T3JpZ2luYWxUYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUudGFibGVUb3BJZEZvclNjcm9sbCA9IFwiam9iSW5kZXhUYWJsZUlEXCJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5oaWRlUHJvamVjdFRpdGxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgcWQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCkgbG9jYXRpb24uc2VhcmNoLnN1YnN0cigxKS5zcGxpdChcIiZcIikuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBpdGVtLnNwbGl0KFwiPVwiKSwgayA9IHNbMF0sIHYgPSBzWzFdXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgZGVjb2RlVVJJQ29tcG9uZW50KHNbMV0pOyAocWRba10gPSBxZFtrXSB8fCBbXSkucHVzaCh2KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzAzLzIwMTkgMTA6MTIgcG0gLSBTU04gLSBwYXJzZUludFxyXG4gICAgICAgICAgICAvLyAxMi8wNC8yMDE5IDA2OjI1IGFtIC0gU1NOIC0gQ2hhbmdlIGZyb20gbG9jYWwgdG8gJHNjb3BlXHJcbiAgICAgICAgICAgICRzY29wZS5wcm9qZWN0SWQgPSBwYXJzZUludChxZFsnaWQnXSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8wMy8yMDE5IDEwOjI1IHBtIC0gU1NOIC0gSGlkZSBwcm9qZWN0IHRpdGxlLlxyXG4gICAgICAgICAgICAkc2NvcGUuaGlkZVByb2plY3RUaXRsZSA9ICRzY29wZS5wcm9qZWN0SWQgPiAwO1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMToxNSBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTBdIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyRzY29wZS5zcWxTdGF0c1JlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgLy8gIFNldHVwIGludGlhaWwgdmFsdWVzIGZvciBsaXN0XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gWzFdOyAvLyBvcGVuXHJcblxyXG4gICAgICAgICAgICBsZXQgY29sdW1uQmFnX2RlZmF1bHRzOiBJQ29sdW1uQmFnID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogJz8/Pz8nLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZVNlbGVjdGVkOiAnJywvLyBsZWF2ZSBibGFuay4gIExlbmd0aCBpcyB1c2VkIHRvIHNlbGVjdCBzZWxlY3RlZCBjb2x1bW5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTm86IDEsXHJcbiAgICAgICAgICAgICAgICByZWNvcmRzUGVyUGFnZTogNCxcclxuICAgICAgICAgICAgICAgIGRlc2M6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3RhbFJlY29yZENvdW50OiAwLFxyXG4gICAgICAgICAgICAgICAgY2FwdGlvbjogXCI/Pz9cIixcclxuICAgICAgICAgICAgICAgIGpvYl9zdGF0dXNlc19zZWxlY3RlZDogWyRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRdLFxyXG4gICAgICAgICAgICAgICAgZmtfZmlsdGVyOiAkc2NvcGUucHJvamVjdElkXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSm9iSW5kZXhDb250cm9sbGVyLnRzIC0gMjAyMDA4MTQtMDkwMScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5CYWdfZGVmYXVsdHMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBfZmllbGRMaXN0OiBJQ29sdW1uQmFnW10gPSBbXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ3Byb2plY3RUaXRsZV9Gb3JBY3Rpdml0eScsIGNhcHRpb246ICdQcm9qZWN0IFRpdGxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWdfZGVmYXVsdHMsIGNvbHVtbk5hbWU6ICdqb2JUaXRsZScsIGNhcHRpb246ICdKb2IgVGl0bGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2RhdGVBZGRlZCcsIGNhcHRpb246ICdEYXRlIEFkZGVkJywgY3NzRm9yVGFibGVIZWFkOiAnaGlkZGVuLXhzJyB9LFxyXG4gICAgICAgICAgICAgICAgeyAuLi5jb2x1bW5CYWdfZGVmYXVsdHMsIGNvbHVtbk5hbWU6ICdkYXRlVXBkYXRlZCcsIGNhcHRpb246ICdEYXRlIFVwZGF0ZWQnLCBjc3NGb3JUYWJsZUhlYWQ6ICdoaWRkZW4teHMnIH0sXHJcbiAgICAgICAgICAgICAgICB7IC4uLmNvbHVtbkJhZ19kZWZhdWx0cywgY29sdW1uTmFtZTogJ2FjdGl2aXR5QWdlJywgY2FwdGlvbjogJ0FjdGl2aXR5IEFnZScsIGNzc0ZvclRhYmxlSGVhZDogJ2hpZGRlbi14cycsIGNvbHVtbk5hbWVTZWxlY3RlZDogJ2FjdGl2aXR5QWdlJywgZGVzYzogdHJ1ZSB9LFxyXG4gICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5oaWRlUHJvamVjdFRpdGxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgX2ZpZWxkTGlzdC5zcGxpY2UoMCwgMSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdENvbHVtbkVudHJpZXMgPSBfZmllbGRMaXN0LmZpbHRlcihyID0+IHIuY29sdW1uTmFtZVNlbGVjdGVkLmxlbmd0aCA+IDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5CYWcgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdENvbHVtbkVudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnID0gc2VsZWN0Q29sdW1uRW50cmllc1swXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3QgPSBfZmllbGRMaXN0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGdldEpvYnNMaXN0KGNvbHVtbkJhZyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNMaXN0KGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2pvYnNJbmRleENvbnRyb2xsZXIudHMgLSAyMDIwMDgxNC0wOTAzJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5CYWcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYnMoY29sdW1uQmFnKS50aGVuKGdldEpvYnNTdWNjZXNzLCBnZXRKb2JzRXJyb3IpLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYnNTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZpZWxkc0xpc3QuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgci5kZXNjID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc0Vycm9ycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5oYXNFcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXJyb3JNZXNzYWdlcyA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuZmVlZGJhY2tNZXNzYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGRhdGEuZmVlZGJhY2tNZXNzYWdlc1tpXS5lcnJvck1lc3NhZ2VzLmxlbmd0aDsgaTIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5lcnJvck1lc3NhZ2VzICs9IGRhdGEuZmVlZGJhY2tNZXNzYWdlc1tpXS5lcnJvck1lc3NhZ2VzW2kyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnam9ic0luZGV4Q29udHJvbGxlci50cyAtIDIwMjAwODE0LTA5MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRhdGFiYWcgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JzOiBkYXRhLmRhdGFMaXN0LCBjb2x1bW46IGRhdGEuc3FsU3RhdHNSZWNvcmQuY29sdW1uTmFtZSwgZGVzYzogZGF0YS5zcWxTdGF0c1JlY29yZC5kZXNjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNvbnZlcnQgdG8gYW4gYXJyYXkuIFdlIGRvbid0IGhhdmUgYSBzZXR0ZXIgb24gYW4gaW50ZXJmYWNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuam9iX3N0YXR1c2VzX3NlbGVjdGVkLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3FsU3RhdHNSZWNvcmQgPSBkYXRhLnNxbFN0YXRzUmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2x1bW5JbmRleCA9ICRzY29wZS5maWVsZHNMaXN0LmZpbmRJbmRleChyID0+IHIuY29sdW1uTmFtZSA9PT0gZGF0YS5zcWxTdGF0c1JlY29yZC5jb2x1bW5OYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uSW5kZXggPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5maWVsZHNMaXN0W2N1cnJlbnRDb2x1bW5JbmRleF0uZGVzYyA9IGRhdGEuc3FsU3RhdHNSZWNvcmQuZGVzYztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9ic0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkxMTEwLTA5MzUgLSBKb2JzSW5kZXhDb250cm9sbGVyIC0gZ2V0Sm9ic0Vycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAxOTExMTAtMDkzNiAtIEpvYnNJbmRleENvbnRyb2xsZXIgLSBnZXRKb2JzQ2F0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc29ydE1ldGhvZDEwMSA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uQmFnLmNvbHVtbk5hbWUgIT0gY29sdW1uQmFnLmNvbHVtbk5hbWVTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5jb2x1bW5OYW1lU2VsZWN0ZWQgPSBjb2x1bW5CYWcuY29sdW1uTmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkJhZy5kZXNjID0gIWNvbHVtbkJhZy5kZXNjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnaW5nbWV0aG9kMTAxID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zcWxTdGF0c1JlY29yZCA9IGNvbHVtbkJhZztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMi8wMi8yMDE5IDAyOjQ4IGFtIC0gU1NOIC0gQWRkZWRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnRhYmxlVG9wSWRGb3JTY3JvbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgJHNjb3BlLnRhYmxlVG9wSWRGb3JTY3JvbGwpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDEwOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwN10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c19jaGFuZ2VkMTAxID0gZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZlNlbGVjdGVkSXRlbSA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuaW5kZXhPZihqb2Jfc3RhdHVzLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhPZlNlbGVjdGVkSXRlbSA+IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuc3BsaWNlKGluZGV4T2ZTZWxlY3RlZEl0ZW0sIDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRbJHNjb3BlLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGhdID0gam9iX3N0YXR1cy5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnNxbFN0YXRzUmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQ7IC8vLmpvaW4oJywnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLnNxbFN0YXRzUmVjb3JkLmpvYl9zdGF0dXNlc19zZWxlY3RlZDtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JzTGlzdChjb2x1bW5CYWcpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDU6MjAgYW0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDA3XSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX2NoZWNrQWxsID0gZnVuY3Rpb24gKGVuYWJsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gJHNjb3BlLmpvYl9zdGF0dXNlcy5tYXAoZnVuY3Rpb24gKGpvYl9zdGF0dXMpIHsgcmV0dXJuIGpvYl9zdGF0dXMuaWQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICRzY29wZS5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWRcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9ic0xpc3QoY29sdW1uQmFnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYl9TdGF0dXNlcygpLnRoZW4oZ2V0Sm9iX1N0YXR1c2VzU3VjY2VzcywgZ2V0Sm9iX1N0YXR1c2VzRXJyb3IpLmNhdGNoKGdldEpvYl9TdGF0dXNlc0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iX1N0YXR1c2VzU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmpvYl9zdGF0dXNlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYl9TdGF0dXNlc0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvYkluZGV4Q29udHJvbGxlciAtICAyMDE5MDkyMi0wNzU4IC0gRGF0YSBlcnJvciA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JfU3RhdHVzZXNDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJKb2JJbmRleENvbnRyb2xsZXIgLSAgMjAxOTA5MjItMDc1OCAtIERhdGEgZXJyb3IgKGNhdGNoKSA/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/P1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIiAgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIgIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzKCk7XHJcblxyXG5cclxuICAgICAgICB9XVxyXG5cclxuICAgICk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgSm9ic19Bbmd1bGFyX01vZHVsZTogSm9ic19Bbmd1bGFyX01vZHVsZVxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG4vLyAwOS8yNC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gWzIwMTkwOTI0LTA3MzFdIC0gWzAwOF0gLSBQcm9qZWN0IHNlYXJjaCBvcHRpb25cclxuLy8gMTEvMjIvMjAxOSAwMTo0MCBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTJdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuLy8gUmVwbGFjZSBpbmNvbXBsZXRlIGNvZGUgZm9yIHByb2plY3Qgc2VhcmNoXHJcblxyXG52YXIgUHJvamVjdEluZGV4Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Byb2plY3RJbmRleCcsIGRlZmF1bHRBcHBOYW1lKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9Nb2R1bGUuY29udHJvbGxlcignUHJvamVjdHNJbmRleENvbnRyb2xsZXInLCBbJyRzY29wZScsICckY29tcGlsZScsIGZ1bmN0aW9uICgkc2NvcGUsICRjb21waWxlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwMTo1NyBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8yX2lkKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5yZXBsYWNlV2l0aChpdGVtLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICRjb21waWxlKCQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLmNvbnRlbnRzKCkpKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFByb2plY3RJbmRleENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA2LzA5LzIwMjEgMTE6NTIgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDEwXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscydcclxuXHJcblxyXG5jb25zdCBNb2RhbENhbGxzVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZSwgbmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdNb2RhbENhbGxzVXRpbCcgKyAnX1hfJyArIGNhbGxTb3VyY2UsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdNb2RhbENhbGxTVXRpbENvbnRyb2xsZXInLCBbJyRzY29wZScsICdzc25fbG9nZ2VyJywgJyR1aWJNb2RhbCcsXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCBzc25fbG9nZ2VyLCAkdWliTW9kYWwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAvLyAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDAyNCcsIG1lc3NhZ2U6ICdNb2RhbENhbGxzVXRpbCBkb1NldHVwJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5hZGROZXdMaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JJRCwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwNDMtQScsIG1lc3NhZ2U6ICdDYWxsaW5nIGFkZE5ld0xpbmVJdGVtJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDQzLUInLCBtZXNzYWdlOiBgam9iSUQgWyR7am9iSUR9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDA0My1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L0xpbmVJdGVtL0xpbmVJdGVtVGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBNb2RhbENhbGxzVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA2LzA2LzIwMjEgMDM6MDYgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDA1XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgSUpvYl9MaW5laXRlbUpTIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9JSm9iX0xpbmVpdGVtJztcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgdG9zdHIgZnJvbSBcInRvYXN0clwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuLi8uLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoXCJMaW5lSXRlbUNvbnRyb2xsZXJcIik7XHJcblxyXG5cclxudmFyIGxpbmVJdGVtQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignTGluZUl0ZW1Db250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ0xpbmVJdGVtQ29udHJvbGxlcicsIFsnJHEnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJHJvb3RTY29wZScsICckc2NvcGUnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICdqb2JJZCcsICdjb250YWluZXJWaWV3VmFsdWUnLCBsaW5lSXRlbUNvbnRyb2xsZXJGdW5jdGlvbl0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxpbmVJdGVtQ29udHJvbGxlckZ1bmN0aW9uKCRxLCAkdWliTW9kYWxJbnN0YW5jZSwgJHJvb3RTY29wZSwgJHNjb3BlLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUsIGpvYklkLCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGVmYXVsdFZhbHVlID0gY29udGFpbmVyVmlld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDIxMDYwNl8xNTE0XCIsIHsgU291cmNlQ29kZTogXCIyMDIxMDYwNi0xNTE0XCIsIE1lc3NhZ2U6IFwiSW5pdFwiIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJMaW5lIGl0ZW0tMDAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXdSZWM6IElKb2JfTGluZWl0ZW1KUztcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdSZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGRhdGEuam9iSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlOiBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtOiAkc2NvcGUuZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbSA9IG5ld1JlYztcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMaW5lSXRlbUNvbnRyb2xsZXIgLSBnZXRKb2JFcnJvciAtIDIwMjEwNjA2LTA2MTEtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MjAtMTcyMVwiLCBtZXNzYWdlOiBcIkxpbmVJdGVtQ29udHJvbGxlciAtIGdldEpvYkVycm9yIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA2LTA2MTEtQy0yLTJcIiwgbWVzc2FnZTogXCJMaW5lSXRlbUNvbnRyb2xsZXIgLWdldEpvYkNhdGNoIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbS5saW5lSXRlbSA9ICRzY29wZS5kZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbS5saW5lSXRlbSA9PSBcIjBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtKCRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDYtMjI1OS1DXCIsIG1lc3NhZ2U6IFwiU2hvdyB2YWx1ZVwiIH0sICd5ZWxsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hISEhISEhISEhISEgtbGluZWl0ZW1jb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCcsIHsgbXNnOiAndXBkYXRlIGRyb3Bkb3duIGxpc3QnLCBrZXlDb2x1bW46IFwibGluZUl0ZW1JZFwiLCBpZDogZGF0YS5saW5lSXRlbUlkLCBkZXNjcmlwdGlvbjogZGF0YS5saW5lSXRlbSB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiTGluZSBpdGVtIHNhdmVkLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxpbmVJdGVtQ29udHJvbGxlciAtIDIwMjEwNjA2LTA1NDggLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNi0yMDUyXCIsIG1lc3NhZ2U6IFwiZnVuY3Rpb24gPiBlcnJvclwiLCBlcnJvck9iamVjdDogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuZGlyZWN0aXZlKCdsaW5lSXRlbU5vRHVwbGljYXRlJywgW1wiJHFcIiwgXCJzc25fbG9nZ2VyXCIsIGZ1bmN0aW9uICgkcSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcblxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHIsIG5nTW9kZWxfY3RybCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4KngnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgLS0tLS0tLS0tLS0tLS0tLSBuZ01vZGVsX2N0cmwtLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tYCwgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3R2YWx1ZTEgPSBhdHRyW1wibmFtZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzExKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQ0KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnNTUpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0VmFsaWRpdHkoYXR0ci5uYW1lLCBmYWxzZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kYXN5bmNWYWxpZGF0b3JzLmR1cGxpY2F0ZUxpbmVJdGVtID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHRha2luZyBjYXJlIG9mIGR1cGxpY2F0ZXMgYnkgaW52ZXJpbmcgdGhlIGxvZ2ljIGluIHRoZSBEcm9wZG93bkxpc3REaXJlY3RpdmUuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKG1vZGVsVmFsdWUgJiYgbW9kZWxWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfVxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuLFxyXG4gICAgdG90YWxTZWNvbmRzOiBhbnksXHJcbiAgICB0aW1lbG9nSWQ6IGFueVxyXG59XHJcblxyXG5cclxudmFyIFRpbWVsb2dMaW5rT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgLy92YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShkZWZhdWx0QXBwTmFtZSwgW10pO1xyXG4gICAgICAgIHZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVsb2dMaW5rT3B0aW9ucycsIGRlZmF1bHRBcHBOYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3RpbWVsb2dMaW5rT3B0aW9ucycsIFsnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgZnVuY3Rpb24gKCR1aWJNb2RhbCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLmh0bWxcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIC8vYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxFZGl0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLCAgLy8gdXNpbmcgc2FtZSBodG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDM6MzYgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA2XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbENsb2Nrb3V0LnJlc3VsdC50aGVuKG1vZGFsQ2xvY2tvdXRfc2F2ZSwgbW9kYWxDbG9ja291dF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLCAvLz92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDIxMDYxMi0wMTU1JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCAtIDIwMjEwNjEyLTAxNTYnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA4OjQ1IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gSm9iSW5kZXhDb250cm9sbGVyLnRzIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTFdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIC0gV3Jvbmcgd2F5IHRvIGdvIVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAxMTowMSBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDRdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBqb2JJZCB0byB0aW1lbG9nSWRfdjAxXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uICh0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udHJvbGxlcicsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8wOC8yMDIxIDAzOjU2IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzN10gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWRfdjAxOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWRfdjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybVdpdGhKb2JJZCA9IGZ1bmN0aW9uIChqb2JJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihqb2JJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTZWNvbmRzOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiAnQCdcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX2xvY2FsLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVPcGVuUmVjb3JkID0gc2NvcGUudGltZWxvZ0lkICYmIHNjb3BlLnRvdGFsU2Vjb25kcyA9PT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2xvY2tvdXRPcHRpb24gPSBoYXZlT3BlblJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbiA9ICFoYXZlT3BlblJlY29yZCA/IFwiQ29udGludWVcIiA6IFwiTGluZSBpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAxOjQyIGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG52YXIgdGltZXNoZWV0QXBwX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDUvMDMvMjAxOSAwNjozMyBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTNdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgIC8vIENvbnZlcnQgdG8gVFNcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEFwcC1maWxlbmFtZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBpcyBpbiB1c2UgYnkgRGF0YVNlcnZpY2VzLmpzXHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MzUgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA1XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcihcInRpbWVzaGVldENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJyRjb21waWxlJywgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJGNvbXBpbGUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE5LzIwMTkgMDY6NDMgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkZWQgdG8gcmUtYmluZCBuZy1jbGlja1xyXG5cclxuICAgICAgICAkc2NvcGUuJG9uKCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8yX2lkKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAkY29tcGlsZSgkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5jb250ZW50cygpKSgkc2NvcGUpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNC8yMDE5IDA0OjQxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwOF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgICAgIC8vIFRlc3RpbmcgLSBOb3Qgd29ya2luZy5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJZb3UgYXJlIGFib3V0IHRvIGxlYXZlIHRoZSBlZGl0IHZpZXcuIFVuY2F1Z2h0IHJlYXNvbi4gQXJlIHlvdSBzdXJlP1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tlZCBvdXRzaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhY2tkcm9wIGNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGUga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVzY2FwZSBrZXkgcHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAwNi8wOC8yMDIxIDExOjAxIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwM10gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgIC8vIGpvYklkIHRvIHRpbWVsb2dJZF92MDFcclxuXHJcbiAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKHRpbWVsb2dJZF92MDEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4odGltZWxvZ0lkX3YwMSkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVsb2dJZF92MDEgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjEwIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG5cclxuXHJcbiAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkX3YwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuXHJcbi8vIDA5LzE4LzIwMTkgMTE6MTMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA4XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tIFwiLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSVRpbWVsb2dKUyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUaW1lbG9nXCI7XHJcblxyXG5cclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBbJyR1aWJNb2RhbCcsICckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICd0aW1lbG9nSWRfdjAxJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCB0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW4gLSAxMjAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZF92MDEpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcikuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENvbnRyb2xsZXIgLSBnb3RKb2JFcnJvciAtICAyMDIxMDYwNi0wNTQwLUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjMwNi1hLTEnLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBUaW1lbG9ncyByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaW1lc2hlZXRDb250cm9sbGVyIC0gZ2V0Sm9iQ2F0Y2ggLSAgMjAyMTA2MDYtMDU0MC1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIzMDYtYS0yJywgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgVGltZWxvZ3MgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDAyOjQ3IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTAyNDddIC0gWzAwMV0gLSBDbG9jay1pbiBub3Qgc2F2aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgZmVlZGJhY2tcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDctQScsIG1lc3NhZ2U6YENhbGxpbmcgYWRkTmV3TGluZUl0ZW1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwNy1CJywgbWVzc2FnZTpgam9iSUQ6IFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwNy1jJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZTogWyR7Y29udGFpbmVyVmlld1ZhbHVlfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnRyb2xsZXI6ICdMaW5lSXRlbUNvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAvLyAwNi8wOC8yMDIxIDAzOjU3IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzOF0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuICAgICAgICAgICAgLy8gICAgICAgIC8vIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNi8wOS8yMDIxIDA0OjQzIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwOV0gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcblxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5pbXBvcnQgeyBJVGltZWxvZ0pTIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRpbWVsb2dcIjtcclxuXHJcblxyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDcmVhdGVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsIFsnJHVpYk1vZGFsJywgJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdzc25fbG9nZ2VyJywgJ2pvYklkJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBqb2JJZCkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDcmVhdGUgLSAxNjQzXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2Ioam9iSWQpLnRoZW4oZ2V0Sm9iU3VjY2VzcywgZ2V0Sm9iRXJyb3IpLmNhdGNoKGdldEpvYkNhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDktMDUyNicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDktMDUyNiAxJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwOS0wNTI2IDMnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA5LTA1MjYgNCcpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUxvZzogSVRpbWVsb2dKUyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogZGF0YS5qb2JJRCxcclxuICAgICAgICAgICAgICAgICAgICBqb2I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZTogZGF0YS5wcm9qZWN0LnByb2plY3RUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gdGltZUxvZztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlciAtIGdvdEpvYkVycm9yIC0gIDIwMjEwNjA5LTE2NTAtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNjUwLWEtMScsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZ2V0IGpvYiByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXIgLSBnZXRKb2JDYXRjaCAtICAyMDIxMDYwOS0xNjUxLUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTY1MS1hLTInLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBqb2IgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuYWRkTmV3TGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iSUQsIGNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1BJywgbWVzc2FnZTogJ0NhbGxpbmcgYWRkTmV3TGluZUl0ZW0nIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1CJywgbWVzc2FnZTogYGpvYklEIFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbVRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcbiBcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE2LzIwMTkgMDQ6NDcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4vLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTkvMjAxOSAxMjo0OCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRpbmcgJGNvbXBpbGUgZm9yIGR5bmFtaWNhbGx5IGxvYWRlZCB2aWV3XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgWyckdWliTW9kYWwnLCAnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICckdGltZW91dCcsICckcm9vdFNjb3BlJywnc3NuX2xvZ2dlcicsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJFZGl0IFtcIiArIHNlcnZpbmdQYWdlICsgJ10gMTExLTAxJztcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2V0U3RvcFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy90aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzIwMjEwNjA3LTIwNDEnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2RhdGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJHNjb3BlLnRpbWVMb2ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyRzY29wZS5lZGl0YWJsZVRpbWVMb2ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDgpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDctMTg1MicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZF90ZW1wID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLkpvYl9UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMi1BJywgbWVzc2FnZTogJ0NhbGxpbmcgYWRkTmV3TGluZUl0ZW0nIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDItQicsIG1lc3NhZ2U6IGBqb2JJRCBbJHtqb2JJRH1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xODAyLUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGluZUl0ZW1Db250cm9sbGVyJyxcclxuICBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRBcHAnO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNsb2Nrb3V0Y29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMnO1xyXG5pbXBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL0xpbmVJdGVtL0xpbmVJdGVtQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHNzbl9hdXRvX2ZvY3VzIH0gZnJvbSAnLi4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzJztcclxuaW1wb3J0IHsgTW9kYWxDYWxsc1V0aWwgfSBmcm9tICcuLi9TaGFyZWQvTW9kYWxDYWxsc1V0aWwnO1xyXG5cclxuXHJcblxyXG52YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgIFRpbWVsb2dMaW5rT3B0aW9ucy5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuICAgIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuICAgIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRBcHBfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UuZG9TZXR1cCgpXHJcbiAgICBzc25fYXV0b19mb2N1cy5kb1NldHVwKFwiVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seVwiLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbiAgICBNb2RhbENhbGxzVXRpbC5kb1NldHVwKFwiVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seVwiLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb1NldHVwIH07XHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcbi8vIDA1LzE5LzIwMTkgMTI6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDAzXSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuLy8gMDkvMjEvMjAxOSAxMTo1MiBhbSAgLSBTU04gLSBVcGdyYWRpbmcgdG8gdXNlIEJhYmVsL1dXZWJwYWNrXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgLy8gMDUvMTkvMjAxOSAxMDowNiBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDZdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIC8vIDExLzE2LzIwMTkgMDI6NTIgcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAzXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjAvMjAxOSAwNDo0MyBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDNdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG4gICAgLy8gSW5qZWN0IFBhZ2VVcGRhdGVyU2VydmljZVxyXG5cclxuICAgIC8vIDExLzI1LzIwMTkgMDY6MzkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAzXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICdQYWdlVXBkYXRlclNlcnZpY2UnLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgUGFnZVVwZGF0ZXJTZXJ2aWNlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDM6MDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDA0XSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo1MSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDJdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKCRyb3V0ZVBhcmFtcy5pZCk7XHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDU6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEyXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nIFxyXG4gICAgICAgICAgICAvLyBBZGQgcGFnZVRpdGxlXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNsb2NrLW91dFwiO1xyXG5cclxuICAgICAgICAgICAgLy8gMTIvMjkvMjAxOSAxMToyNSBwbSAtIFNTTiAtIEFkZGluZyBkaXNhYmxlU2F2ZUJ1dHRvbiBcclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDI6NDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAyXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICAvLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCAnMTIzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoICcxMjMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMjMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggJzEyMy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coICcxMjMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgwMzA3KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI3Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDYpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9ICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lIC0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1vdXRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI1LzIwMTkgMDY6MzggcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAyXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVVwZGF0ZXJTZXJ2aWNlLnRpbWVsb2dfaW5kZXgoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsIHNlcnZpbmdQYWdlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QyID0gZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAwNS8xOS8yMDE5IDA5OjQ1IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNV0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuLy8gQ29waWVkIGZyb20gQ2xvY2tvdXQuXHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG52YXIgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzowNyBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDJdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAndGltZWxvZ0lkJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCAkdGltZW91dCwgdGltZWxvZ0lkLCBjaGFuZ2VNb25pdG9yU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNvbnRpbnVlIC8gTGluZSBJdGVtIC0gODg4LVYyXCI7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8yOS8yMDE5IDExOjE3IHBtIC0gU1NOIC0gQWRkaW5nIGRpc2FibGVTYXZlQnV0dG9uIFxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU5IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAxMF0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2ggPSBcIjE3XCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuICBcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcbiBcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnRpbWVMb2dJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnRvdGFsU2Vjb25kcyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcbiAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlciAtIHN1Ym1pdEZvcm0gLSAoMTAxKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMTo1NiBhbSAtIFNTTiAtIFRlc3RlZCBPSy5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIlJlY29yZCBhZGRlZC4gIFJlbG9hZGluZyBwYWdlLi4uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMTI6NTQgcG0gLSBTU04gLSBSZWxvYWQgcGFnZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1NyBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMDldIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBhZGQgcmVjb3JkLiBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwNTowOSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMTBdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoZmFsc2UpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuIFxyXG5cclxudmFyIEFwcEluc2lnaHRzX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNlbGYgPSB7Y2FsbFNvdXJjZTonTm90U2V0LTIwMjEwNjA2MjIyOCd9O1xyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcblxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogZW52aXJvbm1lbnQuYXBwSW5zaWdodHMuaW5zdHJ1bWVudGF0aW9uS2V5XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGF2ZUluc3RydW1lbnRhdGlvbktleSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5pbnN0cnVtZW50YXRpb25LZXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGNhbGxTb3VyY2U6c3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHNlbGYuY2FsbFNvdXJjZSA9IGNhbGxTb3VyY2U7XHJcblxyXG4gICAgICAgIGlmICghQXBwSW5zaWdodHMuY29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKHRoaXMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEwLzExLzIwMTkgMDQ6NTQgcG0gLSBTU04gLSBBZGRlZCBjaGVja1xyXG4gICAgICAgICAgICBpZiAoaGF2ZUluc3RydW1lbnRhdGlvbktleSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9UZXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICBcclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBwYWdlIHZpZXcgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxyXG4gICAgICAgICAgICBcIkZpcnN0UGFnZS0yMDE5MTAwMS0xMDE1XCIsIC8qIChvcHRpb25hbCkgcGFnZSBuYW1lICovXHJcbiAgICAgICAgICAgIG51bGwsIC8qIChvcHRpb25hbCkgcGFnZSB1cmwgaWYgYXZhaWxhYmxlICovXHJcbiAgICAgICAgICAgIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCAvKiAob3B0aW9uYWwpIGRpbWVuc2lvbiBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIHsgbWVhc3VyZW1lbnQxOiAxIH0sIC8qIChvcHRpb25hbCkgbWV0cmljIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgMTIzIC8qIHBhZ2UgdmlldyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBldmVudCAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQoXCJUZXN0RXZlbnQtMjAxOTEwMDEtMTAxNlwiLCB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgeyBtZWFzdXJlbWVudDE6IDEgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgbG9nUGFnZVZpZXcgPSBmdW5jdGlvbiAobmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnksIGR1cmF0aW9uPzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0cyAgLSBsb2dQYWdlVmlldyAtIDIwMjEwNjA2LTIyMjMnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgY2FsbFNvdXJjZV9haW06IHNlbGYuY2FsbFNvdXJjZSwgLi4ucHJvcGVydGllcyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzICk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhuYW1lLCB1cmwsIHByb3BlcnRpZXMpOy8vLCBtZWFzdXJlbWVudHMsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V2ZW50ID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55KSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuIFxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb246IEVycm9yLCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMDkvMjAxOSAxMTowMyBhbSAtIFNTTiAtIENyZWF0ZWRcclxuXHJcbi8vIDExLzE4LzIwMTkgMDI6MjYgcG0gLSBTU04gLSBDcmVhdGUgY2xhc3MgZm9yIGhhdmVDaGFuZ2VzXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxudmFyIENoYW5nZU1vbml0b3JfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2V0SXRlbUNoYW5nZWRfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMDkvMjAxOSAwODowOCBhbSAtIFNTTiAtIEFkZGVkIG1vbml0b3JDaGFuZ2VfU1NOXHJcbiAgICB2YXIgbW9uaXRvckNoYW5nZV9TU04gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA4OjI4IGFtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBidXR0b25zLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA6MTggYW0gLSBTU04gLSBBZGRlZCBlbWFpbCBhbmQgcGFzc3dvcmQgKGxvZ2luKVxyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlYXJjaCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZW1haWwnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDAyOjI3IHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBpZiAob2JqMS5ub0NoYW5nZU1vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iajEuaWQgJiYgIW9iajEubmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfdjAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXM6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJywgX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdDaGFuZ2VNb25pdG9yU2VydmljZScsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2RvU2V0SGF2ZUNoYW5nZSA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNldHVwTW9uaXRvcjogX3NldHVwTW9uaXRvcixcclxuICAgICAgICAgICAgICAgIGdldEhhdmVDaGFuZ2VzOiBfZ2V0SGF2ZUNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICByZXNldDogX3Jlc2V0LFxyXG4gICAgICAgICAgICAgICAgZG9TZXRIYXZlQ2hhbmdlOiBfZG9TZXRIYXZlQ2hhbmdlXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xNy8yMDE5IDAyOjA0IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxOF0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIGlGaXhTY29wZSBleHRlbmRzIG5nLklTY29wZSB7XHJcblxyXG4gICAgc29ydCgpOiBhbnksXHJcbiAgICBzb3J0bWV0aG9kKCk6IGFueSxcclxuICAgIGRpc3BsYXlBcnJvdygpOiBzdHJpbmdcclxufVxyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDA1OjIxIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwN10gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcbnZhciBoZWFkZXJXaXRoU29ydF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0hlYWRlcldpdGhTb3J0JywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIGhlYWRlcldpdGhTb3J0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHNjZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2hlYWRlcldpdGhTb3J0JywgWyckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL1V0aWwvaGVhZGVyV2l0aFNvcnQuaHRtbFwiLFxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgY29sdW1ubGlzdDogXCI9Y29sdW1ubGlzdFwiLCBzb3J0bWV0aG9kOiBcIiZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLnNvcnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnNvcnRtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmRpc3BsYXlBcnJvdyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmNvbHVtbmxpc3QuZGVzYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzSHRtbChcIiYjOTY1MDtcIik7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwoXCImIzk2NjA7XCIpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTogaGVhZGVyV2l0aFNvcnRfYW5ndWxhcl9tb2R1bGVcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8yMi8yMDE5IDEyOjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwOF0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbnZhciBqb2JTdGF0dXNEaXNwbGF5RGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBhcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmUnLCAndGltZXNoZWV0QXBwJyk7XHJcblxyXG4gICAgdmFyIGpvYlN0YXR1c0Rpc3BsYXkgPSBhcHAuZGlyZWN0aXZlKCdqb2JTdGF0dXNEaXNwbGF5JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kd2F0Y2goYXR0cnNbJ2pvYlN0YXR1cyddLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSAnMScpIGNsYXNzTmFtZSA9ICdqb2Jfc3RhdHVzX29wZW5fMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPT0gJzInKSBjbGFzc05hbWUgPSAnam9iX3N0YXR1c19QZW5kaW5nXzInO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID09ICczJykgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ29tcGxldGVkXzMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY2xhc3NOYW1lID0gJ2pvYl9zdGF0dXNfQ2FuY2VsbGVkXzQnO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWwucmVtb3ZlQ2xhc3MoJ2pvYl9zdGF0dXNfb3Blbl8xIGpvYl9zdGF0dXNfUGVuZGluZ18yIGpvYl9zdGF0dXNfQ29tcGxldGVkXzMgam9iX3N0YXR1c19DYW5jZWxsZWRfNCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmFkZENsYXNzKGNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBqb2JTdGF0dXNEaXNwbGF5OiBqb2JTdGF0dXNEaXNwbGF5XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0Rpc3BsYXlEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuXHJcbi8vIDA2LzA2LzIwMjEgMDY6MzkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDExXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uLy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyRXJyb3JNZXNzYWdlLCBJTG9nZ2VyTW9kdWxlLCBJTG9nZ2VyTWVzc2FnZSB9IGZyb20gJy4vSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4uLy4uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcblxyXG5jb25zdCBzc25fQW5ndWxhckpzbG9nZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSAoY2FsbFNvdXJjZTogc3RyaW5nLCBjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoY2FsbFNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuZ3VsYXJNb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignc3NuX2xvZ2dlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJNb2R1bGUuZmFjdG9yeShcInNzbl9sb2dnZXJcIiwgWyckcScsIGZ1bmN0aW9uICgkcSk6IElMb2dnZXJNb2R1bGUge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbF9ub3JtYWwgPSBmdW5jdGlvbiAobXNnOiBJTG9nZ2VyTWVzc2FnZSwgY29sb3I6IHN0cmluZywgbG9hZDogYm9vbGVhbj1mYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGBjb2xvcjoke2NvbG9yfTtgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gYGZvbnQtc2l6ZToxMnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7YDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZy5jYWxsU291cmNlLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgbXNnLm1lc3NhZ2UsIHN0eWxlICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjPT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIiwgc3R5bGUgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnOiBJTG9nZ2VyRXJyb3JNZXNzYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7JztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGNhbGxTb3VyY2UsIHN0eWxlICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBlcnJvck1zZy5jYWxsU291cmNlLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZXJyb3JNc2cubWVzc2FnZSwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTXNnLmVycm9yT2JqZWN0KTsgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3R5bGUgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmxvZ0V4Y2VwdGlvbiggZXJyb3JNc2cuZXJyb3JPYmplY3QsIHsgU291cmNlQ29kZTE6IGBzc24tYW5nanMtWyR7Y2FsbFNvdXJjZX1dYCwgU291cmNlQ29kZTI6IGVycm9yTXNnLmNhbGxTb3VyY2UsIE1lc3NhZ2U6IGVycm9yTXNnLm1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbF9ub3JtYWwsXHJcbiAgICAgICAgICAgICAgICBjbF9lcnJvclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHNzbl9Bbmd1bGFySnNsb2dnZXIgfTtcclxuIiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgVGltZWxvZ19TZXJ2aW5nUGFnZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG4vLyAxMS8yMC8yMDE5IDA0OjI5IGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwMV0gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcblxyXG4vLyBSZWZhY3RvciBbMjAxOTExMjAtMDQzOF1cclxudmFyIFBhZ2VVcGRhdGVyX0luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIHBhZ2VVcGRhdGVyX01vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUGFnZVVwZGF0ZXInLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBwYWdlVXBkYXRlcl9Nb2R1bGUuZmFjdG9yeSgnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI4IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGRpbmcgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3RpbWVsb2dfaW5kZXggPSBmdW5jdGlvbiAoaWRfdGVtcCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuIFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9TdWNlc3MocmVzdWx0KSB7XHJcblxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVsb2dfaW5kZXg6IF90aW1lbG9nX2luZGV4XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfTtcclxuICAgICBcclxuIiwi77u/XHJcbi8vIDExLzIyLzIwMTkgMDk6NDEgcG0gLSBTU04gLSBDcmVhdGVkIHRvIHJlc3RvcmUgcGFnZSBvbiBoaXR0aW5nIHRoZSBiYWNrIGJ1dHRvbiBvciByZWNhbGxpbmcgdGhlIHBhZ2UuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuLy8gMTIvMjgvMjAxOSAxMDowIHBtIC0gU1NOIC0gQWRkaW5nIEFwcEluc2lnaHRzX1V0aWwgXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5cclxudmFyIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAvLyAwNi8wNi8yMDIxIDA1OjI5IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAwOV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuLy8gY2FsbFNvdXJjZV9wYXJlbnRcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZTpzdHJpbmcsIGNhbGxTb3VyY2VfcGFyZW50OiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfMjAxOTEyMjhfMjIyOFwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEyMjgtMjIxMFwiLCBNZXNzYWdlOiBcImRvU2V0dXBcIiwgQ2FsbFNvdXJjZV9wYXJlbnQ6IGNhbGxTb3VyY2VfcGFyZW50fSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICB2YXIgYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCdyZXN0b3JlUHJldmlvdXNQYWdlQW5kVGFza1F1ZXVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsICRsb2NhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlQW5kVGFza1F1ZXVlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXRlX1Rhc2tfUXVldWVfTGlzdCcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5UG9zdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy92YXIgY29udHJvbGxlciA9IGZ1bmN0aW9uICgkaHR0cCwgJHEsICRzY29wZSkge1xyXG4gICAgICAgICAgICAvL307XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RvcmVQb3MsIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUwNDY4Ni9nZXQtcmVsYXRpdmUtcGF0aC1vZi10aGUtcGFnZS11cmwtdXNpbmctamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKC4rXFx3XFwvKSguKykvLCBcIi8kMlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVVcmwoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYWxyZWFkeVBvc3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHdpbmRvdy5zY3JvbGxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPSB7IHVybDogZ2V0UmVsYXRpdmVQYXRoKCksIHBvc1g6IHBvc1gsIHBvc1k6IHBvc1ksIGVsZW1lbnQ6IGVsZW1JbmZvIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMucHVzaChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NYID0gcG9zWDtcclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWSA9IHBvc1k7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQuZWxlbWVudCA9IGVsZW1JbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzW1VSTF9UcmFja19SZWYuY3VycmVudEluZGV4XSA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9VUkxfVHJhY2tfUmVjb3JkKGNyZWF0ZUlmTm90Rm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX3RlbXAgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlSWZOb3RGb3VuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja190ZW1wID0gJ3tcInVybHNcIjpbXX0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrID0gSlNPTi5wYXJzZShVUkxfVHJhY2tfdGVtcCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRSZWxhdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY3VycmVudEluZGV4ID0gMDsgY3VycmVudEluZGV4IDwgVVJMX1RyYWNrLnVybHMubGVuZ3RoOyBjdXJyZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZCA9IFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQ6IGN1cnJlbnRSZWNvcmQsIFVSTF9UcmFjazogVVJMX1RyYWNrLCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXN0b3JlUG9zKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGN1cnJlbnRSZWNvcmQucG9zWSwgbGVmdDogY3VycmVudFJlY29yZC5wb3NYLCBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRDbGlja1NvdXJjZSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ5cGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkEgXCIudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5cGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwibmctY2xpY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwiaHJlZlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5cGFzcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkudGV4dCgkKHNlbGVjdGVkRWxlbWVudCkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5zcGxpY2UoVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRkZWRDbGFzcyhvYmpSZWYpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChvYmpSZWYpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy91dGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS5odG1sXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDYvMDgvMjAyMSAwMjo0NCBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMzBdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50IC0gTGluZSBpdGVtXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vTG9nZ2VyL0lMb2dnZXJFcnJvck1lc3NhZ2UnO1xyXG5cclxuIFxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9DdXN0b20gZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XHJcbiAgICBvYmplY3RMaXN0OiBzdHJpbmdbXVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3NuX2F1dG9fZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHZhciBKb2JzX0FuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ3Nzbl9zZXRfZm9jdXMnLCBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbiAgICAgICAgSm9ic19Bbmd1bGFyX01vZHVsZS5kaXJlY3RpdmUoJ3NzbkF1dG9Gb2N1cycsIFsnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uIChzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTAwOC0xNTA5JywgbWVzc2FnZTogJ3NzbkF1dG9Gb2N1cyBpbiBkaXJlY3RpdmUnIH0sICd5ZWxsb3cnKTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICAvLyBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9DdXN0b20sIGVsZW0sIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDA4LTE1MjYtZCcsIG1lc3NhZ2U6ICdzc25BdXRvRm9jdXMgZmlyaW5nJyB9LCAnY3lhbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIChzY29wZS5vYmplY3RMaXN0ID09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBzc25fYXV0b19mb2N1cyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA5LzE3LzIwMTkgMDk6MzEgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDAxXSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE5LzIwMTkgMDQ6MjEgYW0gLSBTU04gLSBbMjAxOTA5MTktMDM1NF0gLSBbMDA1XSAtIFB1dHRpbmcgdGhpbmdzIGJhY2sgLSBDbGVhbnVwIGZyb20gaW1wbGVtZW50aW5nIEFNRCAtIEFkZGluZyB0c2NvbmZpZy5qc29uICAgICBcImFsd2F5c1N0cmljdFwiOiB0cnVlLFxyXG4vL2ltcG9ydCBhbmd1bGFyICA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuXHJcbmludGVyZmFjZSBpRml4U2NvcGUgZXh0ZW5kcyBuZy5JU2NvcGUge1xyXG5cclxuICAgIGluaXQxMDEoKTogYW55LFxyXG4gICAgcHJldmlvdXNkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIG5leHRkaXNhYmxlZDogYm9vbGVhbixcclxuICAgIHNheVdoYXRQYWdlV2VBcmVPbjogc3RyaW5nLFxyXG4gICAgc3Fsc3RhdHNyZWNvcmQ6IGFueSxcclxuICAgIG9uTmV4dCgpOiBhbnksXHJcbiAgICBvblByZXZpb3VzKCk6IGFueSxcclxuICAgIHBhZ2luZ21ldGhvZCgpOiBhbnlcclxuXHJcbn1cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5cclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwNTowNyBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDRdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbnZhciBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICB2YXIgcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ3BhZ2luZ0RpcmVjdGl2ZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICBwYWdpbmdEaXJlY3RpdmVfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdwYWdpbmdEaXJlY3RpdmUnLCBbJyR0aW1lb3V0JywgZnVuY3Rpb24gKCR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVXRpbC9wYWdpbmdEaXJlY3RpdmUuaHRtbFwiLFxyXG5cclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2luZ21ldGhvZDogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhYmFnOiBcIj1cIixcclxuICAgICAgICAgICAgICAgIHNxbHN0YXRzcmVjb3JkOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5pbml0MTAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXR1cEJ1dHRvbnMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXRUb3RhbFBhZ2VDb3VudCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzY29wZS5zcWxzdGF0c3JlY29yZC50b3RhbFJlY29yZENvdW50IC8gc2NvcGUuc3Fsc3RhdHNyZWNvcmQucmVjb3Jkc1BlclBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZXR1cEJ1dHRvbnMoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbFBhZ2VDb3VudCA9IGdldFRvdGFsUGFnZUNvdW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnByZXZpb3VzZGlzYWJsZWQgPSBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vIDw9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUubmV4dGRpc2FibGVkID0gc2NvcGUuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyA+PSB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdGFsUGFnZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIlBhZ2UgXCIgKyBzY29wZS5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vICsgXCIgb2YgXCIgKyB0b3RhbFBhZ2VDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5zYXlXaGF0UGFnZVdlQXJlT24gPSBcIk5vIHJlY29yZHMuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dChzY29wZS5pbml0MTAxLCAxMDAwKTsgLy8gdG8gcGlja3VwIGFjdHVhbCB2YWx1ZXMgYWZ0ZXIgQVBJIGNhbGwgdG8gZ2V0IGRhdGEsIGp1c3QgaW4gY2FzZSEhIVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vblByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID0gdGhpcy5zcWxzdGF0c3JlY29yZC5jdXJyZW50UGFnZU5vID4gMSA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyAtIDEgOiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYWdpbmdtZXRob2QoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dXBCdXR0b25zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5vbk5leHQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxQYWdlQ291bnQgPSBnZXRUb3RhbFBhZ2VDb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPSB0aGlzLnNxbHN0YXRzcmVjb3JkLmN1cnJlbnRQYWdlTm8gPCB0b3RhbFBhZ2VDb3VudCA/IHRoaXMuc3Fsc3RhdHNyZWNvcmQuY3VycmVudFBhZ2VObyArIDEgOiB0b3RhbFBhZ2VDb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGFnaW5nbWV0aG9kKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldHVwQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuaW5pdDEwMSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZTogcGFnaW5nRGlyZWN0aXZlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBwYWdpbmdEaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMC8wMS8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwM10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcblxyXG5cclxuICAgIGFwcEluc2lnaHRzOiB7XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJ2Q5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlMydcclxuICAgICAgICAvLyAxMC8zMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gQWRkZWRcclxuXHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJzI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkMycsXHJcblxyXG4gICAgICAgIC8vIDExLzA3LzIwMTkgMDg6MzQgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIFwiSW5zdHJ1bWVudGF0aW9uS2V5XCI6IFwiZGVsZXRlZFwiLCBcImQ5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlM1wiICxcclxuICAgICAgICAvLyBQUy1GYWJyaWthbVJlc2lkZW5jZXMgLSBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiXHJcblxyXG4gICAgICAgIC8vIDA2LzA2LzIwMjEgMDY6MjEgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDEwXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6IFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCIsXHJcbiAgICAgICAgLy8gUmVwbGFjZSBQUy1GYWJyaWthbVJlc2lkZW5jZXMgIHdpdGggRGV2U2l0ZXNJbmRleDIwMTkwMTI3X18wOTI5X3JlZGVwbG95X3YwMlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDNcIlxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59OyIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZV92MDAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlX3YwMDI6IGdldEluc3RhbmNlX3YwMDJcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwNjozMiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbmVudW0gVGltZWxvZ19TZXJ2aW5nUGFnZSB7IC8vIFNlcnZpbmdQYWdlIChmb3IgSURFIFNlYXJjaClcclxuXHJcbiAgICBUaW1lbG9nID0gJ1RpbWVsb2cnLFxyXG4gICAgSm9iX1RpbWVsb2cgPSAnSm9iX1RpbWVsb2cnLFxyXG4gICAgUHJvamVjdHNfU2VhcmNoID0gJ1Byb2plY3RzX1NlYXJjaCdcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHZhbHVlOiBUaW1lbG9nX1NlcnZpbmdQYWdlLCBjb21wYXJlVG86IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICByZXR1cm4gY29tcGFyZVRvID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgdGVzdF8xMDMsIFRpbWVsb2dfU2VydmluZ1BhZ2UsIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDA3OjMxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE5MzFdIC0gWzAwMV0gLSBKb2IgLSBvcHRpb24gdG8gY2hhbmdlIGpvYiBzdGF0dXNcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG52YXIgam9iU3RhdHVzQ2hhbmdlUmVjb3JkX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgYW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignSm9ic3RhdHVzQ2hhbmdlZFJlY29yZCcsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgYW5ndWxhcl9Nb2R1bGUuZGlyZWN0aXZlKCdqb2JTdGF0dXNDaGFuZ2VSZWNvcmQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBsZXQgcGFyZW50VGFibGUgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvSm9icy9qb2JTdGF0dXNDaGFuZ2VSZWNvcmQuaHRtbCcsXHJcblxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uTGluazogJ0AnLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uTGFiZWw6ICdAJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRUYWJsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VGFibGUgPSBlbC5wYXJlbnRzKCd0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnRXaWR0aCA9IHBhcmVudFRhYmxlLndpZHRoKCkgLSAyMDsgLy8gIGpvYlN0YXR1c0NoYW5nZVJlY29yZF9vbiBwYWRkaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnLmpvYlN0YXR1c0NoYW5nZVJlY29yZF9vbicpLmNzcyh7ICd3aWR0aCc6IHBhcmVudFdpZHRoICsgJ3B4JyB9KTtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNwbGF5Q29udGVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc3BsYXlDb250ZW50ID0gISRzY29wZS5kaXNwbGF5Q29udGVudDtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRXaW5kb3dOYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2luZG93TmFtZSA9IHRoaXMuYWN0aW9uTGluay50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpbmRvd05hbWUxID0gd2luZG93TmFtZS5yZXBsYWNlKC9bXmEtenxeMC05XSovaWcsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd05hbWUxO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXJfTW9kdWxlXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuLy8gMDkvMTgvMjAxOSAwOTo0MyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDFdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcblxyXG5pbnRlcmZhY2UgaUZpeFNjb3BlIGV4dGVuZHMgbmcuSVNjb3BlIHtcclxuICAgIGpvYl9zdGF0dXNfY2xpY2soZW50cnk6IGFueSk6IGFueSxcclxuICAgIGpvYl9zdGF0dXNfY2hlY2tlZChlbnRyeTogYW55KTogYW55XHJcbn07XHJcblxyXG5cclxudmFyIGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0pvYlN0YXR1c0RpcmVjdGl2ZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICBKb2JfU3RhdHVzX0FuZ3VsYXJfTW9kdWxlLmNvbnRyb2xsZXIoXCJ1dGlsaXR5Q29udHJvbGxlclwiLCBbJyRzY29wZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgSm9iX1N0YXR1c19Bbmd1bGFyX01vZHVsZS5kaXJlY3RpdmUoJ2pvYlN0YXR1c09wdGlvbicsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL2pvYnMvam9iU3RhdHVzLmh0bWxcIixcclxuICAgICAgICAgICAgc2NvcGU6IHtcclxuICAgICAgICAgICAgICAgIGVudHJ5OiBcIj1cIixcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRmdW5jdGlvbjogXCImXCIsXHJcbiAgICAgICAgICAgICAgICBqb2JzdGF0dXNlc3NlbGVjdGVkMTAyOiBcIj1cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICxcclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBpRml4U2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS5qb2Jfc3RhdHVzX2NsaWNrID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZGZ1bmN0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUuam9iX3N0YXR1c19jaGVja2VkID0gZnVuY3Rpb24gKGVudHJ5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gdGhpcy5qb2JzdGF0dXNlc3NlbGVjdGVkMTAyLmluZGV4T2YoZW50cnkuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpc1NlbGVjdGVkID4gLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU6IEpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGVcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlIH07XHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDExOjMxIGFtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwMl0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG5cclxuaW1wb3J0IHsgaGVhZGVyV2l0aFNvcnRfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0hlYWRlcldpdGhTb3J0JztcclxuaW1wb3J0IHsgcGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9wYWdpbmdEaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGpvYlN0YXR1c0RpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4vSm9iU3RhdHVzRGlyZWN0aXZlJztcclxuaW1wb3J0IHsgam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL0pvYnMvSm9ic0luZGV4Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IGpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZSB9IGZyb20gJy4vSm9iU3RhdHVzQ2hhbmdlUmVjb3JkJztcclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvclNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUGFnZVVwZGF0ZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0SW5kZXhDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vUHJvamVjdHMvUHJvamVjdHNJbmRleCc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcbmltcG9ydCB7IHNzbl9Bbmd1bGFySnNsb2dnZXIgfSBmcm9tICcuLi9VdGlsL0xvZ2dlci9zc25fQW5ndWxhckpzbG9nZ2VyJztcclxuaW1wb3J0IHsgc3NuX2F1dG9fZm9jdXMgfSBmcm9tICcuLi9VdGlsL2F1dG9mb2N1cy9zc25BdXRvRm9jdXMnO1xyXG5pbXBvcnQgKiBhcyB4IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5JztcclxuXHJcbmxldCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG5cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUsIFwiam9iSW5kZXhfbWFpbl8yMDIxMDYwNl8xNzMyXCIpO1xyXG5kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5Qcm9qZWN0SW5kZXhDb250cm9sbGVyX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuam9ic0luZGV4Q29udHJvbGxlcl9pbnN0YW5jZS5Kb2JzX0FuZ3VsYXJfTW9kdWxlO1xyXG5oZWFkZXJXaXRoU29ydF9pbnN0YW5jZS5oZWFkZXJXaXRoU29ydF9hbmd1bGFyX21vZHVsZTtcclxucGFnaW5nRGlyZWN0aXZlX2luc3RhbmNlLnBhZ2luZ0RpcmVjdGl2ZV9hbmd1bGFyX21vZHVsZTtcclxuam9iU3RhdHVzRGlyZWN0aXZlX2luc3RhbmNlLkpvYl9TdGF0dXNfQW5ndWxhcl9Nb2R1bGU7XHJcbmpvYlN0YXR1c0NoYW5nZVJlY29yZF9pbnN0YW5jZS5hbmd1bGFyX01vZHVsZTtcclxuUGFnZVVwZGF0ZXJfSW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbnguZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuc3NuX0FuZ3VsYXJKc2xvZ2dlci5kb1NldHVwKCdqb2JJbmRleF9tYWluJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5zc25fYXV0b19mb2N1cy5kb1NldHVwKFwiam9iSW5kZXhfbWFpblwiLCBuZ0FwcGxpY2F0aW9uTmFtZSk7Iiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG4vLyAwOC8zMS8yMDIwIDA0OjU0IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwNF0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2NvbnNvbGVfbW9kZWwuZC50c1wiIC8+XHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjI5IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwMl0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgIGRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpIHtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBhIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuXHJcbiAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLmVhY2goKG5keCwgb2JqMSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXZJZCA9ICQob2JqMSkuYXR0cignYXJpYS1jb250cm9scycpO1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkNvdW50PSAgICAkKFwiI1wiICsgZGl2SWQpLmNoaWxkcmVuKCkubGVuZ3RoIDtcclxuICBcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50PT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcyggJ2NvbG9yJywgJ29yYW5nZScgKTtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcygnZm9udC1zaXplJywgJzI0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPHNwYW4vPlwiKS50ZXh0KCQob2JqMSkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIC8vIDAxLzAyLzIwMjAgMDQ6MDYgcG0gLSBTU04gLSBNb3ZlZCBmcm9tICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdbc3NuLWNtZD1yZXR1cm5Ub0NhbGxlckxpbmtdJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5Ub0NhbGxlcktleSA9ICQoXCIjcmV0dXJuVG9DYWxsZXJLZXlcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXIgbGkgYScpLmJpbmQoJ2NvbnRleHRtZW51IGNsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNDE0LTEwMDcgLSBjb250ZXh0IG1lbnUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXIgbGkgYScpLmJpbmQoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWZ0IG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pZGRsZSBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQgICAyMDggICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJChlLnRhcmdldCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90aGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoJCh0aGlzLm1vYmlsZU5hdmJhck1lbnVPcHRpb24ubmF0aXZlRWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBkaXZzIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuICAgICAgICAgICAgJChcImFbZGF0YS10b2dnbGU9J2NvbGxhcHNlJ11cIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcbiAgICAgICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKGNhbGxlcikge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MjggLSBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IgWycgKyBjYWxsZXIgKyAnXScpO1xyXG5cclxuICAgICAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXV0b0NvbGxhcHNlID0gJCh0aGlzKS5hdHRyKCdzc24tYXV0by1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9Db2xsYXBzZSA9PT0gXCJmYWxzZVwiKSB7IHJldHVybjt9O1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ByZSA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ1Nob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4vLyAwMS8wMi8yMDIwIDA0OjIwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTE2MTFdIC0gWzAwM10gLSBTZXBlcmF0ZSBBbmd1bGFySlMgdXRpbGl0eSBmcm9tIGdlbmVyYWwgRE9NIHV0aWxpdGllc1xyXG4vLyBPZiBjb3Vyc2Ugd2UgYXJlIGNhbGxpbmcgdXRpbGl0eSBtb3JlIHRoYW4gb25jZS4gTmVlZCB0byBjYWxsIGZ1bmN0aW9ucyB3aGVyZSB0aGV5IGFwcGx5LlxyXG5cclxuXHJcblxyXG5pZiAodHlwZW9mICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdKSAhPSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9IDA7XHJcbn1cclxuXHJcbndpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSB3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdICsgMTtcclxuXHJcblxyXG5pZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9PT0gMSkge1xyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTIvMzAvMjAxOSAwMToyMyBhbSAtIFNTTiAtIEFkZCB0aW1lb3RcclxuICAgICAgICAvLyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzNC0yJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjMyIGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwM10gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNpdGVfaW5zdGFuY2UuZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCksIDEwMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICwgMjAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxubGV0IGQyID0gbmV3IERhdGUoKTtcclxuc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKys7XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MzcgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAzXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYzNjE0NjUvaG93LXRvLWNoZWNrLWlmLWNsaWNrLWV2ZW50LWlzLWFscmVhZHktYm91bmQtanF1ZXJ5XHJcbiQuZm4uaXNCb3VuZCA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xyXG5cclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSgnZXZlbnRzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoJ2V2ZW50cycpW3R5cGVdO1xyXG5cclxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgtMSAhPT0gJC5pbkFycmF5KGZuLCBkYXRhKSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MjkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAyXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcblxyXG5mdW5jdGlvbiBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUudHMgMjAyMDAxMDItMTUzMSAtIGpvYl9UaW1lbG9nX3NldEZpbHRlciAnKTtcclxuXHJcblxyXG4gICAgaWYgKCQoXCIjZmlsdGVyVGV4dFwiKS5pc0JvdW5kKCdrZXl1cCcsIEpvYl9UaW1lbG9nX3NldEZpbHRlcikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgYm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjZmlsdGVyVGV4dFwiKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdF9qb2JzIC0gZml0bGVyVGV4dCAtIEtleVVwJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGUpKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAyIC0gc2V0dXAnKTtcclxuXHJcbiAgICBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBhbmd1bGFyOyJdLCJzb3VyY2VSb290IjoiIn0=