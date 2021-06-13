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

var d = new Date();
console.log("sessionTimeoutInterceptor - top " + d.toLocaleTimeString());
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
    console.log('Routing_Config.ts - 20210417-0819');
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
      }); // 04/17/2021 08:20 am - SSN - Adding for record

      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        // https://weblogs.asp.net/dwahlin/dynamically-loading-controllers-and-views-with-angularjs-and-requirejs
        console.log('20210417-0822: $routeChangeStart - Incomplete authentication check');
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
/* harmony import */ var _Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Util/Logger/ssn_AngularJslogger */ "./Util/Logger/ssn_AngularJslogger.js");
/* harmony import */ var _Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.js");
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

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__["dropdownListDirective_instance"].doSetup(ngApplicationName); // 06/07/2021 05:00 pm - SSN - [20210606-0227] - [019] - Testng for deployment - Line item


_Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_8__["ssn_AngularJslogger"].doSetup("timesheet_main", ngApplicationName);
_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName); // 11/23/2019 08:56 am - SSN

_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_5__["RestorePreviousPageState_instance"].doSetup(ngApplicationName, "timesheet_main_20210606_1731"); // 10/01/2019 11:09 am - SSN - [20191001-0944] - [007] - Adding Application Insights for JavaScript

_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].doSetup("timesheet_main");
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].logEvent("Timesheet_main", {
  SourceCode: "20191001-1112-C",
  Message: "Loading timesheet_main"
});
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__["AppInsights_Util"].logEvent(document.location.hostname, {
  SourceCode: "20191105-0503",
  Message: "Loading timesheet_main"
}); // 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 
// Refactor - Timelog only


_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_9__["doSetup"](ngApplicationName);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vSW50ZXJjZXB0b3JzL1Nlc3NvblRpbWVvdXRJbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly8vLi9Sb3V0aW5nL1JvdXRpbmdfQ29uZmlnLnRzIiwid2VicGFjazovLy8uL1NoYXJlZC9Nb2RhbENhbGxzVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEFwcC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHkudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldF9tYWluLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvTG9nZ2VyL3Nzbl9Bbmd1bGFySnNsb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9QYWdlVXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL2F1dG9mb2N1cy9zc25BdXRvRm9jdXMudHMiLCJ3ZWJwYWNrOi8vLy4vZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vZ2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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SUFBZCxDQUFmO0FBQ0gsQ0FkRCxDLENBa0JBOzs7QUFHQSxTQUFTLHFCQUFULEdBQThCO0FBRTFCLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0RBQVo7O0FBR0EsTUFBSSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLE9BQWpCLENBQXlCLE9BQXpCLEVBQWtDLHFCQUFsQyxDQUFKLEVBQThEO0FBQzFELFdBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBQ0g7O0FBRUQsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFVLENBQVYsRUFBVztBQUVwQyxXQUFPLENBQUMsR0FBUixDQUFZLG1DQUFaO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBYSxDQUFiO0FBQ0gsR0FKRDtBQU1IOztBQUVELENBQUMsQ0FBQztBQUVFLFNBQU8sQ0FBQyxHQUFSLENBQVksMENBQVo7QUFFQSx1QkFBcUI7QUFFeEIsQ0FOQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbmhCQSx5QiIsImZpbGUiOiJidW5kbGVfdGltZXNoZWV0YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIHN0cnVjdCB0byBjb250YWluIG9ubHkgQyBzZWN0aW9uIHdpdGggY3VzdG9tIGZpZWxkcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gQmFzZSgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5CYXNlID0gQmFzZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQmFzZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTeXN0ZW0gdmFyaWFibGVzIGZvciBhIHRlbGVtZXRyeSBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBFbnZlbG9wZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRW52ZWxvcGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJhdGUgPSAxMDAuMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBFbnZlbG9wZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5FbnZlbG9wZSA9IEVudmVsb3BlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVNlcmlhbGl6YWJsZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9FbnZlbG9wZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUFwcGxpY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lEZXZpY2UudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUludGVybmFsLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lMb2NhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JT3BlcmF0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTYW1wbGUudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVVzZXIudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNlc3Npb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RlbGVtZXRyeS9JRW52ZWxvcGUudHNcIi8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBBSTtcclxuKGZ1bmN0aW9uIChBSSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGxldmVsIG9mIHNldmVyaXR5IGZvciB0aGUgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBTZXZlcml0eUxldmVsO1xyXG4gICAgKGZ1bmN0aW9uIChTZXZlcml0eUxldmVsKSB7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiVmVyYm9zZVwiXSA9IDBdID0gXCJWZXJib3NlXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAxXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJXYXJuaW5nXCJdID0gMl0gPSBcIldhcm5pbmdcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkNyaXRpY2FsXCJdID0gNF0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICB9KShTZXZlcml0eUxldmVsID0gQUkuU2V2ZXJpdHlMZXZlbCB8fCAoQUkuU2V2ZXJpdHlMZXZlbCA9IHt9KSk7XHJcbn0pKEFJIHx8IChBSSA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lDb25maWcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVGVsZW1ldHJ5Q29udGV4dC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvU2V2ZXJpdHlMZXZlbC50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgdmFyIFV0aWxIZWxwZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVdGlsSGVscGVycygpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogZ2VuZXJhdGUgcmFuZG9tIGlkIHN0cmluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXRpbEhlbHBlcnMubmV3SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0Y2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTA3Mzc0MTgyNDsgLy81IHN5bWJvbHMgaW4gYmFzZTY0LCBhbG1vc3QgbWF4aW50XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmFuZG9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gYmFzZTY0Y2hhcnMuY2hhckF0KHJhbmRvbSAlIDY0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKHJhbmRvbSAvIDY0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsSGVscGVycztcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uSW5zaWdodHMuVXRpbEhlbHBlcnMgPSBVdGlsSGVscGVycztcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUNvbmZpZy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQXBwSW5zaWdodHMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLL1V0aWxIZWxwZXJzLnRzXCIvPlxyXG5kZWZpbmUoXCJKYXZhU2NyaXB0U0RLLk1vZHVsZS9BcHBJbnNpZ2h0c01vZHVsZVwiLCBbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIEFwcEluc2lnaHRzTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcEluc2lnaHRzTW9kdWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBEZWZpbmUgYSB0ZW1wb3JhcnkgbWV0aG9kIHRoYXQgcXVldWVzLXVwIGEgdGhlIHJlYWwgbWV0aG9kIGNhbGxcclxuICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBvcmlnaW5hbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBhdmFpbGFibGUsIGl0IG1lYW5zIHRoYXQgdGhlIGZ1bmN0aW9uIHdhc24ndCB5ZXQgcmVwbGFjZWQgd2l0aCBhY3R1YWwgZnVuY3Rpb24gdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5pdGlhbCBjb29raWUgaWYgcG9zc2libGVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LmNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBbXHJcbiAgICAgICAgICAgICAgICBcImNsZWFyQXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZsdXNoXCIsXHJcbiAgICAgICAgICAgICAgICBcInNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0RlcGVuZGVuY3lcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V4Y2VwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja01ldHJpY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1BhZ2VWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrVHJhY2VcIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB3aGlsZSAobWV0aG9kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QobWV0aG9kLnBvcCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkID0gZnVuY3Rpb24gKGFpQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2UuY29uZmlnID0gYWlDb25maWc7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBpZiBzY3JpcHQgd2FzIHByZXZpb3VzbHkgZG93bmxvYWRlZCBhbmQgaW5pdGlhbGl6ZWQsIHF1ZXVlIHdpbGwgYmUgZGVsZXRlZCwgcmVpbml0aWFsaXplIGl0XHJcbiAgICAgICAgICAgIGlmICghYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IGFpQ29uZmlnLnVybCB8fCBcImh0dHBzOi8vYXo0MTY0MjYudm8ubXNlY25kLm5ldC9zY3JpcHRzL2EvYWkuMC5qc1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3QgZ2xvYmFsIGVycm9ycyBieSB3cmFwcGluZyB0aGUgd2luZG93Lm9uZXJyb3IgbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghYWlDb25maWcuZGlzYWJsZUV4Y2VwdGlvblRyYWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kXzEgPSBcIm9uZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKFwiX1wiICsgbWV0aG9kXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsT25FcnJvciA9IHdpbmRvd1ttZXRob2RfMV07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbbWV0aG9kXzFdID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVkID0gb3JpZ2luYWxPbkVycm9yICYmIG9yaWdpbmFsT25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W1wiX1wiICsgbWV0aG9kXzFdKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcEluc2lnaHRzTW9kdWxlLCBcImFwcEluc2lnaHRzSW5zdGFuY2VcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBbmRTZXR1cDogQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvc2luZyBpdCBmb3IgdW5pdCB0ZXN0cyBvbmx5LCBub3QgcGFydCBvZiBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmluZUxhenlNZXRob2RzOiBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lID0gXCJhcHBJbnNpZ2h0c1wiO1xyXG4gICAgICAgIHJldHVybiBBcHBJbnNpZ2h0c01vZHVsZTtcclxuICAgIH0oKSk7XHJcbiAgICBleHBvcnRzLkFwcEluc2lnaHRzID0gQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFpLm1vZHVsZS5qcy5tYXAiLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcbnZhciBkYXRhU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEYXRhU2VydmljZXMnLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUuZmFjdG9yeShcImRhdGFTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgX2RldlNpdGVzID0gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzID0gZnVuY3Rpb24gKHJlY29yZHNQZXJQYWdlOm51bWJlciwgY3VycmVudFBhZ2U6bnVtYmVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS8ke3JlY29yZHNQZXJQYWdlfS8ke2N1cnJlbnRQYWdlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5jb3B5KHJlc3VsdC5kYXRhLCBfZGV2U2l0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MjkgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDE4XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXNDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvcmVjb3JkY291bnRgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjQ5IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMV0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRUaW1lbG9nID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDA3OjE1IGFtIC0gU1NOIC0gWzIwMTkwOTI0LTA0MDFdIC0gWzAwOV0gLSBRdWljayB0aW1lbG9nIGVudHJ5XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvZ2V0VGltZWxvZy8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTA4MjktMTgxOV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTkvMjAxOSAwMjowMCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBDcmVhdGVkICAgIFxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI2IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgdmFyIF9UaW1lbG9nUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL1JlZnJlc2hSZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCB0aW1lbG9nIFsyMDE5MTExOS0wMjAxXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ1IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwM10gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgdmFyIF91cGRhdGVEZXZTaXRlID0gZnVuY3Rpb24gKGRldlNpdGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wOS8yMDE5IDEwOjMzIHBtIC0gU1NOIC0gWzIwMTkwOTA5LTIxMzZdIC0gWzAwNF0gLSBzZWxlY3QgdG9wIDIwIFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwMzozOCBhbSAtIFNTTiAtIExvZ2ljIGVycm9yIC0gdXBkYXRpbmcgd3JvbmcgbGlua1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTIvMjAxOSAxMToyNiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIHZhciBfaW5zZXJ0VGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDM6MDAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDA0XSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICB2YXIgX2FkZE9yVXBkYXRlVGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8wOC8yMDIxIDEwOjUyIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwMl0gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcbiAgICAgICAgICAgICAgICAvLyAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRKb2IvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDcvMjAyMSAwNjoyMiBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTVdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iX0xpbmVJdGVtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9qb2JfbGluZUl0ZW1BUEknLCBqb2JfTGluZUl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBkZXZTaXRlczoga28ub2JzZXJ2YWJsZShfZGV2U2l0ZXMpLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZXM6IF9nZXREZXZTaXRlcyxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzQ291bnQ6IF9nZXREZXZTaXRlc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8xMy8yMDE5IDA1OjQ4IGFtIC0gU1NOIC0gWzIwMTkwOTEzLTA1NDhdIC0gWzAwMV0gLSBDcmF0ZSBnZW5lcmljIGRyb3Bkb3duIGxpc3QgZGlyZWN0aXZlXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPiBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjUyIGFtIC0gU1NOIC0gQWRkZWQgaW1wb3J0IGFuZ3VsYXJcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjIxIGFtIC0gU1NOIC0gUmVwbGFjZSBhbmd1bGFyLm1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX0RETEQgZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XHJcblxyXG4gICAgZm9ybU5hbWU6IGFueVxyXG59XHJcblxyXG5cclxuLy8gQWRkIGF1dG9mb2N1cz1cInRydWVcIiB0byBzZXQgZm9jdXNcclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChkZWZhdWx0QXBwTmFtZSkgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBkZWZhdWx0QXBwTmFtZSA9IFwiZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldFwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsICdzc25fbG9nZ2VyJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24sIHNzbl9sb2dnZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybV8xID0gZnVuY3Rpb24gKGV2ZW50LCBmb3JtKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBEcm9wZG93bkxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDcwNzogIHN1Ym1pdEZvcm1fMVwiLCAnY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzJcIiwgJ2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIERyb3Bkb3duTGlzdERpcmVjdGl2ZS0yMDIxMDEwNi0wNzA3OiAgc3VibWl0Rm9ybV8zXCIsICdjb2xvcjpyZWQ7Zm9udC13ZWlnaHQ6Ym9sZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBEcm9wZG93bkxpc3REaXJlY3RpdmUtMjAyMTAxMDYtMDcwNzogIHN1Ym1pdEZvcm1fNFwiLCAnY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlLTIwMjEwMTA2LTA3MDc6ICBzdWJtaXRGb3JtXzVcIiwgJ2NvbG9yOnJlZDtmb250LXdlaWdodDpib2xkJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZm9ybS4kdmFsaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJbnRvQXBwVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuY29kZS1zYW1wbGUuY29tLzIwMTgvMTEvYW5ndWxhcmpzLXNjcm9sbC10by1lcnJvci1vbi1zdWJtaXQtYW5kLmh0bWxcclxuICAgICAgICAgICAgdmFyIHNjcm9sbEludG9BcHBWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbHQgPSAkKFwiLmhhcy1lcnJvcjp2aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbHQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsVG9wOiAoZWx0LmZpcnN0KCkub2Zmc2V0KCkudG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxUb3A6IChlbHQuZmlyc3QoKS5jbG9zZXN0KCdkaXYnKS5wcmV2QWxsKCdkaXYnKS5vZmZzZXQoKS50b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogKGVsdC5maXJzdCgpLmNsb3Nlc3QoJ2Rpdi5mb3JtLWdyb3VwJykub2Zmc2V0KCkudG9wIC0gODApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIFtcIiRxXCIsIFwic3NuX2xvZ2dlclwiLCBmdW5jdGlvbiAoJHEsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDcvMjAyMSAwMjowNCBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTRdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgdXNpbmcgdGhpcyBmb3IgYWRkaW5nIG5ldyBpdGVtcyB0byBtYXN0ZXIuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRyLCBuZ01vZGVsX2N0cmwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25MaXN0RGlyZWNpdmVJbnB1dEJveEludmVyc2UgPSBhdHRyW1wiZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlXCJdO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIDIwMjEwNjEwLTIxMTggZHJvcGRvd25MaXN0RGlyZWNpdmVJbnB1dEJveEludmVyc2UgWyR7ZHJvcGRvd25MaXN0RGlyZWNpdmVJbnB1dEJveEludmVyc2V9XWAsICdjb2xvcjpibHVlO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYXR0cik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmJpbmQoJ2JsdXInLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0Vmlld1ZhbHVlKG5nTW9kZWxfY3RybC4kbW9kZWxWYWx1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3ggPSBhdHRyLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94LnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc3QgdGVzdHZhbHVlMSA9IGF0dHJbXCJuYW1lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IHRlc3R2YWx1ZTIgPSBhdHRyLm5hbWUgKyAnLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zdCB0ZXN0dmFsdWUzID0gZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3g7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjICp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHgnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIC0tLS0tLS0tLS0tLS0tLS0gbmdNb2RlbF9jdHJsLS0tLS0tLS0gNTY1ZGQgLS0tLS0tLS0tLS0tLS0tLS0tYCwgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0dmFsdWUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMTEpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0dmFsdWUyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMjIpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0dmFsdWUzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCczMykgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc0NCkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGF0dHIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzU1KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyB1c2FnZS4gTm90IGltcGxlbWVudGVkIGluIGFwcGxpY2F0aW9rbiBsb2dpYy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0VmFsaWRpdHkoYXR0ci5uYW1lICsgJy5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5nTW9kZWwuJHNldFZhbGlkaXR5KGF0dHIubmFtZSAsIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRhc3luY1ZhbGlkYXRvcnMuaXNWYWxpZERyb3Bkb3duRGlyZWN0aXZlU2VsZWN0aW9uID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBmaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbFZhbHVlIGRvZXNuJ3QgaG9ub3Igc2VsZWN0ZWQgdmFsdWUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVudGlsIHdlIGNhb21lIHVwIHdpdGggYSB3YXkgdG8gcmVzZXQgaXQsIGRpc2FibGUgYnkgYnlwYXNzaW5nIGFzIHZhbGlkLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIC0tLS0tLS0tLS0tLS0tLS0gbmdNb2RlbF9jdHJsLS0tLS0tLS0gMTQ5IC0tLS0tLS0tLS0tLS0tLS0tLWAsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmdNb2RlbF9jdHJsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh4JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYeHgnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcgMTQ0IFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWHh4YycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1vZGVsVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZpZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSBtb2RlbFZhbHVlICYmIG1vZGVsVmFsdWUuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSAhIXZhbGlkYXRpb25SZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyBkb3JwZG93bmxpc3REaXJlY2l0dmUgaXNWYWxpZERyb3Bkb3duRGlyZWN0aXZlU2VsZWN0aW9uJywgJ2NvbG9yOmdyZWVuO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIGRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlfV0gYCwgJ2NvbG9yOmdyZWVuO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIHZhbGlkYXRpb25SZXN1bHQgMSBbJHt2YWxpZGF0aW9uUmVzdWx0IH1dIGAsICdjb2xvcjpncmVlbjtmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkxpc3REaXJlY2l2ZUlucHV0Qm94SW52ZXJzZSkgdmFsaWRhdGlvblJlc3VsdCA9ICF2YWxpZGF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgdmFsaWRhdGlvblJlc3VsdCAyIFske3ZhbGlkYXRpb25SZXN1bHR9XSBgLCAnY29sb3I6Z3JlZW47Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBwcm9taXNlIG9mIHRoZSBhc3luY2hyb25vdXMgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZHJvcGRvd25MaXN0RGlyZWN0aXZlJywgWydzc25fbG9nZ2VyJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKHNzbl9sb2dnZXIsICR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBbJyR3aW5kb3cnLCAnJGh0dHAnLCAnJHEnLCAnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uICgkd2luZG93LCAkaHR0cCwgJHEsICRzY29wZSwgJHJvb3RTY29wZSwgJHRpbWVvdXQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc1JlYWR5ID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB2bS50ZW1wQ29udHJvbE5hbWUgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlXyR7dm0uY2FsbFNvdXJjZX1fYCArIGQuZ2V0SG91cnMoKSArIFwiX1wiICsgZC5nZXRNaW51dGVzKCkgKyBcIl9cIiArIGQuZ2V0U2Vjb25kcygpICsgXCJfXCIgKyBkLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdm0udGVtcENvbnRyb2xOYW1lID0gdGhpcy5rZXlDb2x1bW47XHJcbiAgICAgICAgICAgICAgICB2bS50ZW1wQ29udHJvbE5hbWUgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlXyR7TWF0aC5yYW5kb20oKX1fYDtcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5ibGFja0xpc3RFcnJvck5hbWUgPSB2bS50ZW1wQ29udHJvbE5hbWUgKyBcIi5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZtLmRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmVycm9yVHJpZ2dlcmVkID0gZnVuY3Rpb24gKGVycm9yTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2bS5mb3JtTmFtZS4kZXJyb3JbZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvclRyaWdnZXJlZFdpdGhDb250cm9sTmFtZSA9IGZ1bmN0aW9uIChjb250cm9sTmFtZSwgZXJyb3JOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB2bS5mb3JtTmFtZVtjb250cm9sTmFtZV0uJGVycm9yW2Vycm9yTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVzdGluZyB3aXRoICdyZXF1aXJlZCcgcmV0dXJuIGEgYm9vbGVhbi4gIFxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKVtcIiRlcnJvclwiXVtlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc3Nzc1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9hdXRvZm9jdXMnLCBmdW5jdGlvbiAoZXZlbnRzLCBhcmdzKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICcyMDIxMDYxMi0wMzE3IC0gZHJvcGRvd25MaXN0RGlyZWN0aXZlX2F1dG9mb2N1cyAnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToyMHB0JylcclxuICAgICAgICAgICAgICAgICAgICAvLyAgaW5wdXRPYmouZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT09IFwiZG9TZXRGb2N1c1wiICYmIGFyZ3MuanF1ZXJ5T2JqZWN0UmVmKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuanF1ZXJ5T2JqZWN0UmVmKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncy5qcXVlcnlPYmplY3RSZWYuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3MuanF1ZXJ5T2JqZWN0UmVmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vJHdpbmRvdy5hZGRFdmVudFxyXG4gICAgICAgICAgICAgICAgLy9hbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJyVjICcgKyAnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gYmx1ciB0cmlnZ2VyZWQnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGJsdXIgdHJpZ2dlcmVkIDInKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGJsdXIgdHJpZ2dlcmVkIDQnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIGJsdXIgdHJpZ2dlcmVkIDYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQnLCBmdW5jdGlvbiAoZXZlbnRzLCBhcmdzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0hhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmaXJlcyBvbiBzdGFydCBhbmQgb25jZSBvbiBjaGFuZ2VcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5TmFtZSAmJiB2bS5wYXJlbnRLZXlOYW1lID09IGFyZ3Mua2V5Q29sdW1uICYmIGFyZ3Mua2V5VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdm0ucGFyZW50S2V5Q29sdW1uIGFuZCBhcmdzLmtleVZhbHVlIGJlZm9yZSB1cGRhdGU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLnBhcmVudEtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZ3Mua2V5VmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBhcmVudEtleUNvbHVtbiA9IGFyZ3Mua2V5VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhcmdzLm1zZyA9PSBcInVwZGF0ZSBkcm9wZG93biBsaXN0XCIpICYmIHZtLmtleUNvbHVtbiAmJiBhcmdzLmtleUNvbHVtbiAmJiAodm0ua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkgPT0gYXJncy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTE3MDgtQicsIG1lc3NhZ2U6IGBkcm9wZG93bkxpc3REaXJlY3RpdmVfQ2hhbmdlX3N0YXJ0IHVwZGF0ZSBkcm9wZG93biAtIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdncmVlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzJywgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyhhcmdzLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBhcmdzLmlkLCB0aXRsZTogYXJncy5kZXNjcmlwdGlvbiB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT0gXCJ2YWxpZGF0ZVRoaXNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTUyOScsIG1lc3NhZ2U6ICdjYWxsIHZhbGlkYXRlVGhpcycgfSwgJ2JsdWUnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnID09IFwic2VsZWN0IG5ldyB2YWx1ZVwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vL2NvbnNvbGUubG9nKCd1cGRhdGUga2V5Q29sdW1uIGpRdWVyeSAgW3NlbGVjdCBuZXcgdmFsdWVdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy9jb25zb2xlLmxvZyh2bS5rZXlDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYHp6enp6eiAgICAwMDAgenp6enp6eiBzZXQgemVybyAyMiB6enp6enp6enp6enp6enp6enp6enp6enp6enpgLCAnY29sb3I6cmVkO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codm0ubmdNb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5uZ01vZGVsID0gMDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZtLm5nTW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIYW5kbGVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0wNTQ3JywgbWVzc2FnZTogYGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQgbm90IGhhbmRsZWQgLSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAncmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudHM6JywgZXZlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FyZ3MnLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwODoyOSBhbSAtIFNTTiAtIEFkZGluZyAtIE5lZWQgdG8gaW5pdGlhbGl6YSBmb3IgJHdhdGNoIHRvIHdvcmsuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNjaXBsaW5lU2VsZWN0ZWRfWFhYICBpbnN0ZWFkIG9mIG5nTW9kZWwgYmVjYXVzZSB3ZSB1c2UgYW4gb2JqZWN0IGZvciBzZWxlY3RlZCBlbnRyeSwgaWQgYW5kIHRpbGUuIG5nTW9kZWwgaXMgdXN1YWxseSBhIGtleS4gKFRoZSBpZClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5uZ01vZGVsJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3Nzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE0MzgnLCBtZXNzYWdlOiBgQ0hBTkdFIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICd5ZWxsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTQzOC1CJywgbWVzc2FnZTogYENIQU5HRSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAnZ3JlZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9zc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNDM4LUMtMicsIG1lc3NhZ2U6IGBDSEFOR0Ugdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3JlZCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2bS5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEucGFyZW50S2V5Q29sdW1uJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMyMDIxMDYwOC0wMDU0LUEgLSBwYXJlbnQga2V5IHZhbHVlIGNoYW5nZWQga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0eXBlb2Ygb2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codHlwZW9mIG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUgJiYgb2xkVmFsdWUgIT0gbnVsbCkgeyAvLyBvbGRWYWx1ZSBpcyBudWxsIG9uIGZpcnN0IGNhbGwuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5zZXRJc1ZhbGlkQm9vbGVhbihmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYzIwMjEwNjA4LTAwNTQtQiAtIHBhcmVudCBrZXkgdmFsdWUgY2hhbmdlZCAtIHJlc2V0IGxvY2FsIGtleSAgIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MjBweDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMyMDIxMDYwOC0wMDU0IC0gcGFyZW50IGtleSB2YWx1ZSBjaGFuZ2VkIC0gcmVzZXQgbG9jYWwga2V5JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBweDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMyMDIxMDYwOC0wMDU0IC0gcGFyZW50IGtleSB2YWx1ZSBjaGFuZ2VkIC0gcmVzZXQgbG9jYWwga2V5JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MjBweDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZtLm5nTW9kZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYzIwMjEwNjA5LTE1MTIgLSBoaWRkZW5GaWVsZE5hbWUgLSBwYXJlbnQga2V5IHZhbHVlIGNoYW5nZWQgLSByZXNldCBsb2NhbCBrZXknLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4OycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZTogTG9va3VwUmVjb3JkLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya3MgXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIlRUVFRUVFRUVFRUVFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJWMnICsgJyBkaXNjaXBsaW5lU2VsZWN0ZWRfWFhYJywgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjIwcHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScsJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHZtLm5nTW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubmdNb2RlbCA9IG5ld1ZhbHVlLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgLS0tLS0tLS0tLS0tLS0tLSAtLS0tLS0tLSAzOTUgLS0tLS0tLS0tLS0tLS0tLS0tYCwgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggdm0ubmdNb2RlbCAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwobmV3VmFsdWUuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUuJGRpcnR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UuZG9TZXRIYXZlQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0SXNWYWxpZEJvb2xlYW4oZmFsc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uc2V0SXNWYWxpZEJvb2xlYW4odHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMua2V5Q29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuZGlzY2lwbGluZWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMi8xMC8yMDIwIDA0OjMyIHBtIC0gU1NOIC0gWzIwMjAxMjEwLTE2MjVdIC0gWzAwMl0gLSBVcGRhdGUgVGltZWxvZyBlZGl0IE1WQ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jYXNlICd0aW1lbG9nLmxpbmVpdGVtaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsaW5laXRlbWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvam9iX0xpbmVJdGVtL3R5cGVhaGVhZF9qb2JyZWNvcmRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL2pvYl9MaW5lSXRlbS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmpvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvam9iYXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA0OjQ2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYi5wcm9qZWN0aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL3Byb2plY3RhcGkvdHlwZWFoZWFkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL3Byb2plY3RhcGkvdHlwZWFoZWFkJztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uQVBJVXJsTGlzdEFsbCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBtaXNzaW5nIGRlZmluaXRpb24gZm9yIEFQSVVybExpc3RBbGwgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIxMDYwOC0xMzEwYFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtlcnJvck1lc3NhZ2V9YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzExJywgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uQVBJVXJsU2luZ2xlUmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBtaXNzaW5nIGRlZmluaXRpb24gZm9yIHZtLkFQSVVybFNpbmdsZVJlY29yZCBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjEwNjA4LTE0MjdgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2Vycm9yTWVzc2FnZX1gLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTE0MjgnLCBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5wYXJlbnRLZXlDb2x1bW4pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50S2V5Q29sdW1uVmFsdWUgPSB0aGlzLnBhcmVudEtleUNvbHVtbjsgLy91bmRlZmluZWQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudEtleUNvbHVtblZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9IHZtLkFQSVVybExpc3RBbGwgKyBcIi9cIiArIHBhcmVudEtleUNvbHVtblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmNoYW5naW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdCgnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCcsIHsgbXNnOiAnc2VsZWN0IG5ldyB2YWx1ZScsIGtleUNvbHVtbjogdm0ua2V5Q29sdW1uLCBrZXlWYWx1ZTogdm0ubmdNb2RlbCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0udmFsaWRhdGVUaGlzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0dXBVcmwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0SXNWYWxpZEJvb2xlYW4oZmFsc2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm5nTW9kZWwgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCh2bS5uZ01vZGVsKS50aGVuKHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MsIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnNldElzVmFsaWRCb29sZWFuKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHNjb3BlLiRicm9hZGNhc3QoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9DaGFuZ2Vfc3RhcnQnLCB7IG1zZzogJ0hhcyB2YWxpZCB2YWx1ZScsIGtleUNvbHVtbjogdm0ua2V5Q29sdW1uLCBrZXlWYWx1ZTogdm0ubmdNb2RlbCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTA1MjgnLCBtZXNzYWdlOiBgdmFsaWRhdGVUaGlzOiB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAncmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyB0aXRsZTogdm0uY29udGFpbmVyVmlld1ZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEuZGlzY2lwbGluZVNob3J0IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLnRhX2lkLCB0aXRsZTogZGF0YS50YV9kZXNjcmlwdGlvbiB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzMFwiIH0sIFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMxXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzJcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzM1wiIH0sIFwicmVkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0yMTU4LUEnLCBtZXNzYWdlOiBgY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgYCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIxNTgtQicsIG1lc3NhZ2U6IGBjdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvciBgLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsZWQgZnJvbSB2aWV3IGlucHV0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uY29udGFpbmVyVmlld1ZhbHVlID0gbG9va3VwVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDctMTYwNy1BXCIsIG1lc3NhZ2U6IFwiZ2V0RGlzY2lwbGluZSBjYWxsIHRvIGFzc2lnbiBjb250YWluZXJWaWV3VmFsdWUgZmFpbGVkXCIgfSwgXCJSZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxMi0wMDQxXCIsIG1lc3NhZ2U6IGBnZXREaXNjaXBsaW5lIGNhbGwgdG8gYXNzaWduIGNvbnRhaW5lclZpZXdWYWx1ZSBmYWlsZWQgWyR7bG9va3VwVmFsdWV9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0dXBVcmwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsTGlzdEFsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGlzY2lwbGluZUlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS50YV9pZCwgdGl0bGU6IGl0ZW0udGFfZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uYWRkcmVzc2VzLmxlbmd0aCA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB2bS5hZGRyZXNzZXNbMF07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzEyLzIwMjEgMDE6MTUgcG0gLSBTU04gLSBUZXN0aW5nIGlmIGNhbiBnZXQgb3ZlciBwcmV2ZW50aW5nIHVzZXJzIGZyb20gYWx0ZXJpbmcgc2luZ2xlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiB2bS5hZGRyZXNzZXNbMF0uaWQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZtLm5nTW9kZWwgPSB2bS5hZGRyZXNzZXNbMF0uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSh2bS5hZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxMzlcIiwgbWVzc2FnZTogXCJ0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3JcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxNDBcIiwgbWVzc2FnZTogcmVzcG9uc2UgfSwgXCJyZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCA9IGZ1bmN0aW9uIChsb29rdXBJRCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGAlYyBnZXREaXNjaXBsaW5lQ3VycmVudCAzMDMgIGtleUNvbHVtblske3ZtLmtleUNvbHVtbn1dICAgbG9va3VwSUQgWyR7bG9va3VwSUR9XWAsICdjb2xvcjpjeWFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgdm0uQVBJVXJsU2luZ2xlUmVjb3JkICBbJHt2bS5BUElVcmxTaW5nbGVSZWNvcmR9XSBgLCAnY29sb3I6Ymx1ZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwSUQgPT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDEwNS0yMjQzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDEwNS0yMjQzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDEwNS0yMjQzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDEwNS0yMjQzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDEwNS0yMjQzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgbG9va3VwSUQgaXMgbnVsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xNDE1JywgbWVzc2FnZTogYENhbGxpbmcgZ2V0RGlzY2lwbGluZUN1cnJlbnQgIHdpdGggbnVsbCBsb29rdXBJRGAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxVcmwgPSB2bS5BUElVcmxTaW5nbGVSZWNvcmQgKyBcIi9cIiArIGxvb2t1cElEO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbG9jYWxVcmxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgZ2V0RGlzY2lwbGluZUN1cnJlbnQgIDIyMiBrZXlDb2x1bW5bJHt2bS5rZXlDb2x1bW59XSAgbG9va3VwSUQgIFske2xvb2t1cElEfV0gc3VjY2Vzc2AsICdjb2xvcjpncmVlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIGdldERpc2NpcGxpbmVDdXJyZW50IDIwMiBsb29rdXBJRCAgWyR7bG9va3VwSUR9XSBlcnJvcmAsICdjb2xvcjpyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTMxNicsIG1lc3NhZ2U6IGBGYWlsZWQgY2FsbCB0byBbJHtsb2NhbFVybH1dYCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZvcm1FcnJvcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZtLmZvcm1OYW1lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZvcm1FcnJvcnNCeUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUsIGVycm9yTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKVtcIiRlcnJvclwiXVtlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXRJc1ZhbGlkQm9vbGVhbiA9IGZ1bmN0aW9uIChzZXR0aW5nOiBCb29sZWFuKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLmlzVmFsaWRCb29sZWFuID0gdm0uZHJvcGRvd25MaXN0RGlyZWNpdmVJbnB1dEJveEludmVyc2UgPyAhc2V0dGluZyA6IHNldHRpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnNldElzVmFsaWRCb29sZWFuKHRydWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL0Ryb3Bkb3duTGlzdC9Ecm9wRG93bkxpc3REaXJlY3RpdmUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbFNvdXJjZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEtleUNvbHVtbjogXCI9cGFyZW50a2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5TmFtZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRmllbGROYW1lOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbDogXCI9XCIsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jOiBcIiZcIixcclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jU291cmNlOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZGVyIGZvciB0eXBlZCBpbiB2YWx1ZSwgaWYgaXQgZG9lc24ndCBleGlzdCwgc28gaXQgY2FuIGJlIGNvcGllZCB0byB0aGUgYWRkIGZvcm0uXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBcIj0/XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTGlzdERpcmVjaXZlSW5wdXRCb3hJbnZlcnNlOiBcIkBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9ERExELCBlbCwgYXR0cnMsIGN0cmwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9ERExELCBlbCwgYXR0cnMsIGN0cmwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclZpZXdWYWx1ZSA9IFwiTm90U2V0LTIwMjEwNjA3LTAyMTNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDgtQVwiLCBtZXNzYWdlOiBcIlVwZGF0ZSBjb250YWluZXJWaWV3VmFsdWVcIiB9LCBcInllbGxvd1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDctMTYwOC1CXCIsIG1lc3NhZ2U6IHRoaXMuY2FsbFNvdXJjZSB9LCBcInllbGxvd1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3ICBsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgMiBsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgMiBsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgMjIyIGxpbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3RybC4kc2V0VmFsaWRpdHkoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94JywgdmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTsgLy92YWxpZCA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwNToyOSBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wNTI5XSAtIFswMDFdIC0gQXV0b2ZvY3VzXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJzLmF1dG9mb2N1cykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2V0Zm9jdXNGdW5jID0gKGVsZW0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXRPYmogPSBlbGVtLmZpbmQoJ2lucHV0W3R5cGU9dGV4dF0nKS5maWx0ZXIoJzp2aXNpYmxlOmZpcnN0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRPYmoudmFsKCkgPT09IFwiXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGlucHV0T2JqLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5mb3JtTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnMjAyMTA2MTItMDM1MyAtIHNldGZvY3VzICcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAndGhpc2Zvcm1OYW1lOicsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUuZm9ybU5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICd0aGlzZm9ybU5hbWUuJHRvdWNoZWQnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgc2NvcGUuZm9ybU5hbWUuJHRvdWNoZWQsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRicm9hZGNhc3QoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9hdXRvZm9jdXMnLCB7IG1zZzogJ2RvU2V0Rm9jdXMnLCBqcXVlcnlPYmplY3RSZWY6IGlucHV0T2JqIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJzIwMjEwNjEyLTAzNTMgLSBzZXRmb2N1cyAgLSBOTyBGT1JNIE5BTUUnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0OycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7IHNldGZvY3VzRnVuYyhlbCk7IH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZWwuYmluZCgna2V5ZG93biBrZXlwcmVzcycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgaWYgKGV2ZW50LndoaWNoID09IDI3KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCcxJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnMTJ2JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnMTInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIGNvbnNvbGUubG9nKCcxJylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgc2NvcGUuJGJyb2FkY2FzdCgnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCcsIHsgbXNnOiAnSGFzIHZhbGlkIHZhbHVlJywga2V5Q29sdW1uOiB0aGlzLmtleUNvbHVtbiwga2V5VmFsdWU6IHRoaXMubmdNb2RlbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcblxyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbi8vIDEyLzA3LzIwMTkgMDM6NTMgYW0gLSBTU04gLSBbMjAxOTEyMDctMDM1M10gLSBbMDAxXSAtIFNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JcclxuXHJcblxyXG4vLyBodHRwczovL2NvZGUuYW5ndWxhcmpzLm9yZy8xLjIuMjcvZG9jcy9hcGkvbmcvc2VydmljZS8kaHR0cCNpbnRlcmNlcHRvcnNcclxuXHJcblxyXG5jb25zdCBkID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKGBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gdG9wICR7ZC50b0xvY2FsZVRpbWVTdHJpbmcoKX1gKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIHRvcCAtIDIwMTkxMjA3LTA0MTAnKTtcclxuXHJcbmxldCBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSBmdW5jdGlvbiB0b3AgLSAyMDE5MTIwNy0wNDExJyk7XHJcblxyXG5cclxuICAgICAgICB2YXIgYW5ndWxhcmpzX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJqc19tb2R1bGUuY29uZmlnKFtcclxuICAgICAgICAgICAgJyRodHRwUHJvdmlkZXInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA4LzIxLzIwMjAgMTA6NTMgYW0gLSBTU04gLSBBZGRpbmcgJGxvY2F0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICckcScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRyb290U2NvcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICckbG9jYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAvLyAgJ3VzZXJTZXNzaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJHEsICRyb290U2NvcGUsICRsb2NhdGlvbikgeyAvLyAsIHVzZXJTZXNzaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSBNYWluIGZ1bmN0aW9uIC0gMjAxOTEyMDctMDQxMi1NRicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcnVuIHRoaXMgZnVuY3Rpb24gYmVmb3JlIG1ha2luZyByZXF1ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIFNFUlZJQ0UgLSAyMDE5MTIwNy0wNDEyLVNFUlZJQ0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdjb25maWcgbmV4dDonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL2lmIChjb25maWcubWV0aG9kID09PSAnR0VUJyB8fCB1c2VyU2Vzc2lvbi5pc0F1dGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLyAgICAvLyB0aGUgcmVxdWVzdCBsb29rcyBnb29kLCBzbyByZXR1cm4gdGhlIGNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLyBiYWQgcmVxdWVzdCwgc28gcmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vcmV0dXJuICRxLnJlamVjdChjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRlciAtIHJlcXVlc3RFcnJvciAtIDIwMjAwODIxLTEwNDYtMDAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXNwb25zZSAtIDIwMjAwODIxLTEwNDYtMDAyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRlciAtIHJlc3BvbnNlRXJyb3IgLSAyMDIwMDgyMS0xMDQ2LTAwMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goaW50ZXJjZXB0b3IpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JfaW5zdGFuY2U7XHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDA3OjA2IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwMV0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuXHJcbi8vIE1vdmVkIGZyb20gZGVtb1NpdGVzX2luZGV4LnRzIC0gQmVnaW5cclxuXHJcbi8vIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlIFxyXG5cclxuXHJcblxyXG52YXIgcm91dGluZ19jb25maWdfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZnJvbSBSb3V0aW5nX0NvbmZpZyB0byBSb3V0aW5nX0NvbmZpZyB3aXRoIG1vdmUuXHJcbiAgICAvLyBNb3ZlZCBvdXRzaWRlIHRvIHNoYXJlZCBiZXR3ZWVuIGRvU2V0dXBfYSBhbmQgZG9TZXR1cF9iXHJcbiAgICB2YXIgYW5ndWxhckpTX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUm91dGluZ19Db25maWcnLCBcImRlbW9TaXRlc19JbmRleFwiLCBbJ25nUm91dGUnXSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBmcm9tIFJvdXRpbmdfQ29uZmlnIHRvIFJvdXRpbmdfQ29uZmlnIHdpdGggbW92ZS5cclxuXHJcbiAgICB2YXIgZG9TZXR1cF9hID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjYvMjAxOSAwNTo1MSBhbSAtIFNTTiAtIFsyMDE5MDkyNi0wNTUxXSBBZGQgJGxvY2F0aW9uUHJvdmlkZXJcclxuICAgICAgICBhbmd1bGFySlNfbW9kdWxlLmNvbmZpZyhbXCIkcm91dGVQcm92aWRlclwiLCBcIiRsb2NhdGlvblByb3ZpZGVyXCIsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvXCIsIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVzSW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTAvMjAxOSAwMTo0NyBhbSAtIFNTTiAtIFsyMDE5MDkxMC0wMTQ3XSAtIFswMDFdIC0gV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlxyXG4gICAgICAgICAgICAvLyBUdXJuIG9mZlxyXG4gICAgICAgICAgICAvLyRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvZGV0YWlsXCIsIHtcclxuICAgICAgICAgICAgLy8gICAgY29udHJvbGxlcjogXCJkZXZTaXRlVXBkYXRlQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAvLyAgICAvLyB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVEZXRhaWwuaHRtbFwiXHJcbiAgICAgICAgICAgIC8vICAgIHRlbXBsYXRlVXJsOiBcIi9EZXZTaXRlcy9DcmVhdGVfcGFydGlhbFwiXHJcbiAgICAgICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI2LzIwMTkgMDU6NTEgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDU1MV0gQWRkICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgSFRNTDUgaGlzdG9yeSBBUElcclxuICAgICAgICAgICAgLy8gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9kbzogIDExLzEzLzIwMTkgMTA6MTkgcG0gLSBTU04gLSBUZXN0aW5nXHJcbiAgICAgICAgICAgIC8vIFRha2Ugb3V0XHJcbiAgICAgICAgICAgIC8vICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7fSk7XHJcblxyXG4gICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoeyBlbmFibGVkOiB0cnVlLCByZXdyaXRlTGlua3M6IGZhbHNlIH0pLmhhc2hQcmVmaXgoJyEnKTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICAvLyBNb3ZlZCBmcm9tIGRlbW9TaXRlc19pbmRleC50cyAtIEVuZFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTIvMDcvMjAxOSAwODowMiBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wNzA0XSAtIFswMDNdIC0gQW5ndWxhckpTIC0gUm91dGluZyAtIEF1dGhlbnRpY2F0aW9uXHJcblxyXG4gICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzIwOTIwMy9hbmd1bGFyanMtcHJvdGVjdGluZy1yb3V0ZXMtd2l0aC1hbmd1bGFyanMtZGVwZW5kaW5nLWlmLXRoZS11c2VyLWlzLWF1dGhvcml6ZWRcclxuXHJcbiAgICB2YXIgZG9TZXR1cF9iID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUm91dGluZ19Db25maWcudHMgLSAyMDIxMDQxNy0wODE5Jyk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJKU19tb2R1bGUuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgLndoZW4oJy9uZWVkc2F1dGhvcmlzYXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25maWcgZm9yIGNvbnRyb2xsZXIgYW5kIHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgZnVuY3Rpb24gaXMgaW5qZWN0ZWQgd2l0aCB0aGUgQXV0aFNlcnZpY2Ugd2hlcmUgeW91J2xsIHB1dCB5b3VyIGF1dGhlbnRpY2F0aW9uIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRoJzogZnVuY3Rpb24gKEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UuYXV0aGVudGljYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAvL0lmIHRoZSByb3V0ZSBjaGFuZ2UgZmFpbGVkIGR1ZSB0byBhdXRoZW50aWNhdGlvbiBlcnJvciwgcmVkaXJlY3QgdGhlbSBvdXRcclxuICAgICAgICAgICAgJHJvb3RTY29wZS4kb24oJyRyb3V0ZUNoYW5nZUVycm9yJywgZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cywgcmVqZWN0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZWplY3Rpb24gPT09ICdOb3QgQXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTcvMjAyMSAwODoyMCBhbSAtIFNTTiAtIEFkZGluZyBmb3IgcmVjb3JkXHJcblxyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJHJvdXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIG5leHQsIGN1cnJlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3dlYmxvZ3MuYXNwLm5ldC9kd2FobGluL2R5bmFtaWNhbGx5LWxvYWRpbmctY29udHJvbGxlcnMtYW5kLXZpZXdzLXdpdGgtYW5ndWxhcmpzLWFuZC1yZXF1aXJlanNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDQxNy0wODIyOiAkcm91dGVDaGFuZ2VTdGFydCAtIEluY29tcGxldGUgYXV0aGVudGljYXRpb24gY2hlY2snKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSkuZmFjdG9yeSgnQXV0aFNlcnZpY2UnLCBmdW5jdGlvbiAoJHEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BdXRoZW50aWNhdGlvbiBsb2dpYyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIGF1dGhlbnRpY2F0ZWQsIHJldHVybiBhbnl0aGluZyB5b3Ugd2FudCwgcHJvYmFibHkgYSB1c2VyIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vsc2Ugc2VuZCBhIHJlamVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KCdOb3QgQXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBkb1NldHVwX2EoKTtcclxuICAgICAgICBkb1NldHVwX2IoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyByb3V0aW5nX2NvbmZpZ19pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA2LzA5LzIwMjEgMTE6NTIgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDEwXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscydcclxuXHJcblxyXG5jb25zdCBNb2RhbENhbGxzVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZSwgbmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdNb2RhbENhbGxzVXRpbCcgKyAnX1hfJyArIGNhbGxTb3VyY2UsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdNb2RhbENhbGxTVXRpbENvbnRyb2xsZXInLCBbJyRzY29wZScsICdzc25fbG9nZ2VyJywgJyR1aWJNb2RhbCcsXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCBzc25fbG9nZ2VyLCAkdWliTW9kYWwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAvLyAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDAyNCcsIG1lc3NhZ2U6ICdNb2RhbENhbGxzVXRpbCBkb1NldHVwJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5hZGROZXdMaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JJRCwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwNDMtQScsIG1lc3NhZ2U6ICdDYWxsaW5nIGFkZE5ld0xpbmVJdGVtJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDQzLUInLCBtZXNzYWdlOiBgam9iSUQgWyR7am9iSUR9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDA0My1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L0xpbmVJdGVtL0xpbmVJdGVtVGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBNb2RhbENhbGxzVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA2LzA2LzIwMjEgMDM6MDYgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDA1XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IHsgSUpvYl9MaW5laXRlbUpTIH0gZnJvbSAnLi4vLi4vSW50ZXJmYWNlcy9JSm9iX0xpbmVpdGVtJztcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgdG9zdHIgZnJvbSBcInRvYXN0clwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuLi8uLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoXCJMaW5lSXRlbUNvbnRyb2xsZXJcIik7XHJcblxyXG5cclxudmFyIGxpbmVJdGVtQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignTGluZUl0ZW1Db250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ0xpbmVJdGVtQ29udHJvbGxlcicsIFsnJHEnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJHJvb3RTY29wZScsICckc2NvcGUnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICdqb2JJZCcsICdjb250YWluZXJWaWV3VmFsdWUnLCBsaW5lSXRlbUNvbnRyb2xsZXJGdW5jdGlvbl0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxpbmVJdGVtQ29udHJvbGxlckZ1bmN0aW9uKCRxLCAkdWliTW9kYWxJbnN0YW5jZSwgJHJvb3RTY29wZSwgJHNjb3BlLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUsIGpvYklkLCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGVmYXVsdFZhbHVlID0gY29udGFpbmVyVmlld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDIxMDYwNl8xNTE0XCIsIHsgU291cmNlQ29kZTogXCIyMDIxMDYwNi0xNTE0XCIsIE1lc3NhZ2U6IFwiSW5pdFwiIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJMaW5lIGl0ZW0tMDAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXdSZWM6IElKb2JfTGluZWl0ZW1KUztcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdSZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGRhdGEuam9iSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlOiBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtOiAkc2NvcGUuZGVmYXVsdFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbSA9IG5ld1JlYztcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMaW5lSXRlbUNvbnRyb2xsZXIgLSBnZXRKb2JFcnJvciAtIDIwMjEwNjA2LTA2MTEtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MjAtMTcyMVwiLCBtZXNzYWdlOiBcIkxpbmVJdGVtQ29udHJvbGxlciAtIGdldEpvYkVycm9yIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA2LTA2MTEtQy0yLTJcIiwgbWVzc2FnZTogXCJMaW5lSXRlbUNvbnRyb2xsZXIgLWdldEpvYkNhdGNoIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbS5saW5lSXRlbSA9ICRzY29wZS5kZWZhdWx0VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbS5saW5lSXRlbSA9PSBcIjBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtKCRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDYtMjI1OS1DXCIsIG1lc3NhZ2U6IFwiU2hvdyB2YWx1ZVwiIH0sICd5ZWxsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hISEhISEhISEhISEgtbGluZWl0ZW1jb250cm9sbGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnZHJvcGRvd25MaXN0RGlyZWN0aXZlX0NoYW5nZV9zdGFydCcsIHsgbXNnOiAndXBkYXRlIGRyb3Bkb3duIGxpc3QnLCBrZXlDb2x1bW46IFwibGluZUl0ZW1JZFwiLCBpZDogZGF0YS5saW5lSXRlbUlkLCBkZXNjcmlwdGlvbjogZGF0YS5saW5lSXRlbSB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiTGluZSBpdGVtIHNhdmVkLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxpbmVJdGVtQ29udHJvbGxlciAtIDIwMjEwNjA2LTA1NDggLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNi0yMDUyXCIsIG1lc3NhZ2U6IFwiZnVuY3Rpb24gPiBlcnJvclwiLCBlcnJvck9iamVjdDogZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuZGlyZWN0aXZlKCdsaW5lSXRlbU5vRHVwbGljYXRlJywgW1wiJHFcIiwgXCJzc25fbG9nZ2VyXCIsIGZ1bmN0aW9uICgkcSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcblxyXG4gICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHIsIG5nTW9kZWxfY3RybCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4KngnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgLS0tLS0tLS0tLS0tLS0tLSBuZ01vZGVsX2N0cmwtLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tYCwgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3R2YWx1ZTEgPSBhdHRyW1wibmFtZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzExKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQ0KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cilcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnNTUpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0VmFsaWRpdHkoYXR0ci5uYW1lLCBmYWxzZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kYXN5bmNWYWxpZGF0b3JzLmR1cGxpY2F0ZUxpbmVJdGVtID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHRha2luZyBjYXJlIG9mIGR1cGxpY2F0ZXMgYnkgaW52ZXJpbmcgdGhlIGxvZ2ljIGluIHRoZSBEcm9wZG93bkxpc3REaXJlY3RpdmUuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKG1vZGVsVmFsdWUgJiYgbW9kZWxWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfVxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuLFxyXG4gICAgdG90YWxTZWNvbmRzOiBhbnksXHJcbiAgICB0aW1lbG9nSWQ6IGFueVxyXG59XHJcblxyXG5cclxudmFyIFRpbWVsb2dMaW5rT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgLy92YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShkZWZhdWx0QXBwTmFtZSwgW10pO1xyXG4gICAgICAgIHZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVsb2dMaW5rT3B0aW9ucycsIGRlZmF1bHRBcHBOYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3RpbWVsb2dMaW5rT3B0aW9ucycsIFsnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgZnVuY3Rpb24gKCR1aWJNb2RhbCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLmh0bWxcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIC8vYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxFZGl0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLCAgLy8gdXNpbmcgc2FtZSBodG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDM6MzYgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA2XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbENsb2Nrb3V0LnJlc3VsdC50aGVuKG1vZGFsQ2xvY2tvdXRfc2F2ZSwgbW9kYWxDbG9ja291dF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLCAvLz92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDIxMDYxMi0wMTU1JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCAtIDIwMjEwNjEyLTAxNTYnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA4OjQ1IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gSm9iSW5kZXhDb250cm9sbGVyLnRzIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTFdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIC0gV3Jvbmcgd2F5IHRvIGdvIVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAxMTowMSBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDRdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBqb2JJZCB0byB0aW1lbG9nSWRfdjAxXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uICh0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udHJvbGxlcicsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8wOC8yMDIxIDAzOjU2IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzN10gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWRfdjAxOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWRfdjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybVdpdGhKb2JJZCA9IGZ1bmN0aW9uIChqb2JJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihqb2JJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1dLFxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxTZWNvbmRzOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogJ0AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiAnQCdcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX2xvY2FsLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhdmVPcGVuUmVjb3JkID0gc2NvcGUudGltZWxvZ0lkICYmIHNjb3BlLnRvdGFsU2Vjb25kcyA9PT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5zaG93Q2xvY2tvdXRPcHRpb24gPSBoYXZlT3BlblJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbiA9ICFoYXZlT3BlblJlY29yZCA/IFwiQ29udGludWVcIiA6IFwiTGluZSBpdGVtXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBUaW1lbG9nTGlua09wdGlvbnMgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNC8xMi8yMDE5IDAxOjQyIGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG52YXIgdGltZXNoZWV0QXBwX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDUvMDMvMjAxOSAwNjozMyBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTNdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgIC8vIENvbnZlcnQgdG8gVFNcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEFwcC1maWxlbmFtZScsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSBpcyBpbiB1c2UgYnkgRGF0YVNlcnZpY2VzLmpzXHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MzUgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA1XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcihcInRpbWVzaGVldENvbnRyb2xsZXJcIiwgWyckc2NvcGUnLCAnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJyRjb21waWxlJywgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJGNvbXBpbGUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE5LzIwMTkgMDY6NDMgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkZWQgdG8gcmUtYmluZCBuZy1jbGlja1xyXG5cclxuICAgICAgICAkc2NvcGUuJG9uKCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8yX2lkKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAkY29tcGlsZSgkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5jb250ZW50cygpKSgkc2NvcGUpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNC8yMDE5IDA0OjQxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwOF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgICAgIC8vIFRlc3RpbmcgLSBOb3Qgd29ya2luZy5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJZb3UgYXJlIGFib3V0IHRvIGxlYXZlIHRoZSBlZGl0IHZpZXcuIFVuY2F1Z2h0IHJlYXNvbi4gQXJlIHlvdSBzdXJlP1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tlZCBvdXRzaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhY2tkcm9wIGNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGUga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVzY2FwZSBrZXkgcHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAwNi8wOC8yMDIxIDExOjAxIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwM10gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgIC8vIGpvYklkIHRvIHRpbWVsb2dJZF92MDFcclxuXHJcbiAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKHRpbWVsb2dJZF92MDEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNOYU4odGltZWxvZ0lkX3YwMSkpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVsb2dJZF92MDEgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjEwIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG5cclxuXHJcbiAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkX3YwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuXHJcbi8vIDA5LzE4LzIwMTkgMTE6MTMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA4XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tIFwiLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSVRpbWVsb2dKUyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUaW1lbG9nXCI7XHJcblxyXG5cclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBbJyR1aWJNb2RhbCcsICckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICd0aW1lbG9nSWRfdjAxJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCB0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW4gLSAxMjAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZF92MDEpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcikuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENvbnRyb2xsZXIgLSBnb3RKb2JFcnJvciAtICAyMDIxMDYwNi0wNTQwLUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjMwNi1hLTEnLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBUaW1lbG9ncyByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaW1lc2hlZXRDb250cm9sbGVyIC0gZ2V0Sm9iQ2F0Y2ggLSAgMjAyMTA2MDYtMDU0MC1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIzMDYtYS0yJywgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgVGltZWxvZ3MgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDAyOjQ3IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTAyNDddIC0gWzAwMV0gLSBDbG9jay1pbiBub3Qgc2F2aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgZmVlZGJhY2tcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDctQScsIG1lc3NhZ2U6YENhbGxpbmcgYWRkTmV3TGluZUl0ZW1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwNy1CJywgbWVzc2FnZTpgam9iSUQ6IFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwNy1jJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZTogWyR7Y29udGFpbmVyVmlld1ZhbHVlfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnRyb2xsZXI6ICdMaW5lSXRlbUNvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICAvLyAwNi8wOC8yMDIxIDAzOjU3IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzOF0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuICAgICAgICAgICAgLy8gICAgICAgIC8vIGJhY2tkcm9wOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNi8wOS8yMDIxIDA0OjQzIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwOV0gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcblxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5pbXBvcnQgeyBJVGltZWxvZ0pTIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRpbWVsb2dcIjtcclxuXHJcblxyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDcmVhdGVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsIFsnJHVpYk1vZGFsJywgJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdzc25fbG9nZ2VyJywgJ2pvYklkJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBqb2JJZCkge1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDcmVhdGUgLSAxNjQzXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2Ioam9iSWQpLnRoZW4oZ2V0Sm9iU3VjY2VzcywgZ2V0Sm9iRXJyb3IpLmNhdGNoKGdldEpvYkNhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDktMDUyNicpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDktMDUyNiAxJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwOS0wNTI2IDMnKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA5LTA1MjYgNCcpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZUxvZzogSVRpbWVsb2dKUyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogZGF0YS5qb2JJRCxcclxuICAgICAgICAgICAgICAgICAgICBqb2I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgam9iVGl0bGU6IGRhdGEuam9iVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZTogZGF0YS5wcm9qZWN0LnByb2plY3RUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gdGltZUxvZztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlciAtIGdvdEpvYkVycm9yIC0gIDIwMjEwNjA5LTE2NTAtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNjUwLWEtMScsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZ2V0IGpvYiByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXIgLSBnZXRKb2JDYXRjaCAtICAyMDIxMDYwOS0xNjUxLUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTY1MS1hLTInLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBqb2IgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuYWRkTmV3TGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iSUQsIGNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1BJywgbWVzc2FnZTogJ0NhbGxpbmcgYWRkTmV3TGluZUl0ZW0nIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1CJywgbWVzc2FnZTogYGpvYklEIFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMS1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbVRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcbiBcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE2LzIwMTkgMDQ6NDcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4vLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTkvMjAxOSAxMjo0OCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRpbmcgJGNvbXBpbGUgZm9yIGR5bmFtaWNhbGx5IGxvYWRlZCB2aWV3XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgWyckdWliTW9kYWwnLCAnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3RpbWVsb2dJZCcsICckdGltZW91dCcsICckcm9vdFNjb3BlJywnc3NuX2xvZ2dlcicsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJFZGl0IFtcIiArIHNlcnZpbmdQYWdlICsgJ10gMTExLTAxJztcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2V0U3RvcFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy90aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzIwMjEwNjA3LTIwNDEnKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2RhdGEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnJHNjb3BlLnRpbWVMb2ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyRzY29wZS5lZGl0YWJsZVRpbWVMb2ctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDgpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MDctMTg1MicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpZF90ZW1wID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLkpvYl9UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwMi1BJywgbWVzc2FnZTogJ0NhbGxpbmcgYWRkTmV3TGluZUl0ZW0nIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDItQicsIG1lc3NhZ2U6IGBqb2JJRCBbJHtqb2JJRH1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xODAyLUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGluZUl0ZW1Db250cm9sbGVyJyxcclxuICBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRBcHAnO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNsb2Nrb3V0Y29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMnO1xyXG5pbXBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL0xpbmVJdGVtL0xpbmVJdGVtQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHNzbl9hdXRvX2ZvY3VzIH0gZnJvbSAnLi4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzJztcclxuaW1wb3J0IHsgTW9kYWxDYWxsc1V0aWwgfSBmcm9tICcuLi9TaGFyZWQvTW9kYWxDYWxsc1V0aWwnO1xyXG5cclxuXHJcblxyXG52YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgIFRpbWVsb2dMaW5rT3B0aW9ucy5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuICAgIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuICAgIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRBcHBfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UuZG9TZXR1cCgpXHJcbiAgICBzc25fYXV0b19mb2N1cy5kb1NldHVwKFwiVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seVwiLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbiAgICBNb2RhbENhbGxzVXRpbC5kb1NldHVwKFwiVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seVwiLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb1NldHVwIH07XHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcbi8vIDExLzA5LzIwMTkgMTI6MDUgcG0gLSBTU04gLSBBZGRlZCBDaGFuZ2VNb25pdG9yXHJcbi8vIDExLzE0LzIwMTkgMDM6MjAgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA0XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4vL2ltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvcic7XHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6NDAgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAyXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuaW1wb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1BhZ2VVcGRhdGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG4vLyAxMi8wNy8yMDE5IDA0OjA5IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMl0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5pbXBvcnQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciBmcm9tICcuLi9JbnRlcmNlcHRvcnMvU2Vzc29uVGltZW91dEludGVyY2VwdG9yJztcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDA4OjA3IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwNF0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuXHJcbmltcG9ydCB7IHJvdXRpbmdfY29uZmlnX2luc3RhbmNlIH0gZnJvbSAnLi4vUm91dGluZy9Sb3V0aW5nX0NvbmZpZyc7XHJcblxyXG5yb3V0aW5nX2NvbmZpZ19pbnN0YW5jZS5kb1NldHVwKCk7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9ICd0aW1lc2hlZXRBcHAnO1xyXG5cclxuc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvci5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcbi8vQ2hhbmdlTW9uaXRvcl9VdGlsXHJcbmNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblBhZ2VVcGRhdGVyX0luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzE2LzIwMTkgMDY6MjcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG5cclxuLy8gMTEvMjUvMjAxOSAxMTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0yMTUzXSAtIFswMDVdIC0gSm9iIGNyZWF0ZSAtIFJlcGxhY2UgZHJvcGRvd24gd2l0aCBkcm9wZG93bkxpc3REaXJlY3RpdmVcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG5cclxuXHJcbmRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIDA2LzA3LzIwMjEgMDU6MDAgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE5XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudCAtIExpbmUgaXRlbVxyXG5cclxuaW1wb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9IGZyb20gJy4uL1V0aWwvTG9nZ2VyL3Nzbl9Bbmd1bGFySnNsb2dnZXInO1xyXG5cclxuc3NuX0FuZ3VsYXJKc2xvZ2dlci5kb1NldHVwKFwidGltZXNoZWV0X21haW5cIixuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmRhdGFTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDg6NTYgYW0gLSBTU05cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUsIFwidGltZXNoZWV0X21haW5fMjAyMTA2MDZfMTczMVwiKTtcclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDExOjA5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwN10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuIFxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoXCJ0aW1lc2hlZXRfbWFpblwiKTtcclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KFwiVGltZXNoZWV0X21haW5cIiwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMDAxLTExMTItQ1wiLCBNZXNzYWdlOiBcIkxvYWRpbmcgdGltZXNoZWV0X21haW5cIiB9KTtcclxuQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMTA1LTA1MDNcIiwgTWVzc2FnZTogXCJMb2FkaW5nIHRpbWVzaGVldF9tYWluXCIgfSk7XHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwNTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMTFdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBSZWZhY3RvciAtIFRpbWVsb2cgb25seVxyXG5cclxuaW1wb3J0ICogYXMgeCBmcm9tICcuL1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHknO1xyXG5cclxueC5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuIiwi77u/XHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuLy8gMDUvMTkvMjAxOSAxMjoxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDNdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4vLyAwOS8yMS8yMDE5IDExOjUyIGFtICAtIFNTTiAtIFVwZ3JhZGluZyB0byB1c2UgQmFiZWwvV1dlYnBhY2tcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAvLyAwNS8xOS8yMDE5IDEwOjA2IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG4gICAgLy8gMTEvMTYvMjAxOSAwMjo1MiBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDNdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yMC8yMDE5IDA0OjQzIGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwM10gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcbiAgICAvLyBJbmplY3QgUGFnZVVwZGF0ZXJTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjUvMjAxOSAwNjozOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDNdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAndGltZWxvZ0lkJywgJ1BhZ2VVcGRhdGVyU2VydmljZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCBQYWdlVXBkYXRlclNlcnZpY2UsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMzowOCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDRdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjUxIHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2coJHJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2stb3V0XCI7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8yOS8yMDE5IDExOjI1IHBtIC0gU1NOIC0gQWRkaW5nIGRpc2FibGVTYXZlQnV0dG9uIFxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMjo0OCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDJdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlclxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoICcxMjMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggJzEyMy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBkYXRhKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzEyMy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCAnMTIzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggJzEyMy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgLy8gdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDcpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNilcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLW91dFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjUvMjAxOSAwNjozOCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDJdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlVXBkYXRlclNlcnZpY2UudGltZWxvZ19pbmRleCgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCwgc2VydmluZ1BhZ2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDA1LzE5LzIwMTkgMDk6NDUgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA1XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG4vLyBDb3BpZWQgZnJvbSBDbG9ja291dC5cclxuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gXCJ0aW1lc2hlZXRBcHBcIjtcclxuXHJcbnZhciB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjA3IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICckdGltZW91dCcsICd0aW1lbG9nSWQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCB0aW1lbG9nSWQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ29udGludWUgLyBMaW5lIEl0ZW0gLSA4ODgtVjJcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzI5LzIwMTkgMTE6MTcgcG0gLSBTU04gLSBBZGRpbmcgZGlzYWJsZVNhdmVCdXR0b24gXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTkgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDEwXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCA9IFwiMTdcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudGltZUxvZ0lkID0gMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy5kYXRlTW9kaWZpZWQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudG90YWxTZWNvbmRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyIC0gc3VibWl0Rm9ybSAtICgxMDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU3IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAwOV0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGFkZCByZWNvcmQuIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDA1OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAxMF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcyhmYWxzZSk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMDk6NDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA0XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0cyB9IGZyb20gJ2FwcGxpY2F0aW9uaW5zaWdodHMtanMnO1xyXG4gXHJcblxyXG52YXIgQXBwSW5zaWdodHNfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHtjYWxsU291cmNlOidOb3RTZXQtMjAyMTA2MDYyMjI4J307XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBlbnZpcm9ubWVudC5hcHBJbnNpZ2h0cy5pbnN0cnVtZW50YXRpb25LZXlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYXZlSW5zdHJ1bWVudGF0aW9uS2V5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnLmluc3RydW1lbnRhdGlvbktleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZTpzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc2VsZi5jYWxsU291cmNlID0gY2FsbFNvdXJjZTtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAoY29uZmlnKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgIFxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIHBhZ2UgdmlldyAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcoXHJcbiAgICAgICAgICAgIFwiRmlyc3RQYWdlLTIwMTkxMDAxLTEwMTVcIiwgLyogKG9wdGlvbmFsKSBwYWdlIG5hbWUgKi9cclxuICAgICAgICAgICAgbnVsbCwgLyogKG9wdGlvbmFsKSBwYWdlIHVybCBpZiBhdmFpbGFibGUgKi9cclxuICAgICAgICAgICAgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIC8qIChvcHRpb25hbCkgZGltZW5zaW9uIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgeyBtZWFzdXJlbWVudDE6IDEgfSwgLyogKG9wdGlvbmFsKSBtZXRyaWMgZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICAxMjMgLyogcGFnZSB2aWV3IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIGV2ZW50ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChcIlRlc3RFdmVudC0yMDE5MTAwMS0xMDE2XCIsIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCB7IG1lYXN1cmVtZW50MTogMSB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBsb2dQYWdlVmlldyA9IGZ1bmN0aW9uIChuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSwgZHVyYXRpb24/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbkluc2lnaHRzICAtIGxvZ1BhZ2VWaWV3IC0gMjAyMTA2MDYtMjIyMycsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyBjYWxsU291cmNlX2FpbTogc2VsZi5jYWxsU291cmNlLCAuLi5wcm9wZXJ0aWVzIH07XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvcHMgKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCBtZWFzdXJlbWVudHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbjogRXJyb3IsIHByb3BzPzogYW55LCBoYW5kbGVkQXQ/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihleGNlcHRpb24sIGhhbmRsZWRBdCwgcHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwLFxyXG4gICAgICAgIGRvVGVzdDogZG9UZXN0LFxyXG4gICAgICAgIGxvZ1BhZ2VWaWV3OiBsb2dQYWdlVmlldyxcclxuICAgICAgICBsb2dFdmVudDogbG9nRXZlbnQsXHJcbiAgICAgICAgbG9nRXhjZXB0aW9uOiBsb2dFeGNlcHRpb25cclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDg6MjggYW0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgICAgIHRleHRhcmVhcy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYnlwYXNzT2JqZWN0ID0gZnVuY3Rpb24gKG9iajEpOiBib29sZWFuIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDoxOCBhbSAtIFNTTiAtIEFkZGVkIGVtYWlsIGFuZCBwYXNzd29yZCAobG9naW4pXHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdoaWRkZW4nIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc2VhcmNoJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdlbWFpbCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncGFzc3dvcmQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDI6MjcgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGlmIChvYmoxLm5vQ2hhbmdlTW9uaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZ2V0QnJvd3Nlck5hbWUoKSA9PT0gJ2Nocm9tZSc7XHJcblxyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2Fubm90IHVzZSB3aXRoIENocm9tZVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIigyKSBZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzA1LzIwMTkxIDA0OjUzIGFtIC0gU1NOIFxyXG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHVzZXJzIGZyb20gbmF2aWdhdGluZyBhd2F5IGZyb20gQW5ndWxhciBiYXNlZCBwYWdlcyB3aXRoIHBlbmRpbmcgY2hhbmdlcy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTgyOTEyL2hvdy10by1kZXRlY3QtYnJvd3Nlci13aXRoLWFuZ3VsYXJcclxuICAgIHZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2VkZ2UnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdvcHInKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5vcHI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5jaHJvbWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZigndHJpZGVudCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignc2FmYXJpJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE5lZWRlZCBzbyB3ZSBjYW4gY2FsbCBmcm9tIHBvcHVwcy5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobW9uaXRvckNoYW5nZV9TU04sIDIwMDApO1xyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDEoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDE6IHNldHVwTW9uaXRvcl92MDEsXHJcbiAgICAgICAgZ2V0QnJvd3Nlck5hbWU6IGdldEJyb3dzZXJOYW1lLFxyXG4gICAgICAgIG1vbml0b3JDaGFuZ2VfU1NOOiBtb25pdG9yQ2hhbmdlX1NTTixcclxuICAgICAgICBzZXRJdGVtQ2hhbmdlZF9zc246IHNldEl0ZW1DaGFuZ2VkX3NzbixcclxuICAgICAgICBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbjogc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24sXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzOiBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3NcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlczogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLCBfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDAyOjU5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuL0NoYW5nZU1vbml0b3JGbGFnJztcclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi8uLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0NoYW5nZU1vbml0b3JTZXJ2aWNlJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUuZmFjdG9yeShcImNoYW5nZU1vbml0b3JTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2V0dXBNb25pdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRIYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZG9TZXRIYXZlQ2hhbmdlID0gZnVuY3Rpb24gKHNldHRpbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHNldHRpbmc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBNb25pdG9yOiBfc2V0dXBNb25pdG9yLFxyXG4gICAgICAgICAgICAgICAgZ2V0SGF2ZUNoYW5nZXM6IF9nZXRIYXZlQ2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBfcmVzZXQsXHJcbiAgICAgICAgICAgICAgICBkb1NldEhhdmVDaGFuZ2U6IF9kb1NldEhhdmVDaGFuZ2VcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG5cclxuLy8gMDYvMDYvMjAyMSAwNjozOSBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTFdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCB7IElMb2dnZXJFcnJvck1lc3NhZ2UsIElMb2dnZXJNb2R1bGUsIElMb2dnZXJNZXNzYWdlIH0gZnJvbSAnLi9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuXHJcblxyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuXHJcbmNvbnN0IHNzbl9Bbmd1bGFySnNsb2dnZXIgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IChjYWxsU291cmNlOiBzdHJpbmcsIGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzX1V0aWwuZG9TZXR1cChjYWxsU291cmNlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5ndWxhck1vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdzc25fbG9nZ2VyJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgYW5ndWxhck1vZHVsZS5mYWN0b3J5KFwic3NuX2xvZ2dlclwiLCBbJyRxJywgZnVuY3Rpb24gKCRxKTogSUxvZ2dlck1vZHVsZSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsX25vcm1hbCA9IGZ1bmN0aW9uIChtc2c6IElMb2dnZXJNZXNzYWdlLCBjb2xvcjogc3RyaW5nLCBsb2FkOiBib29sZWFuPWZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gYGNvbG9yOiR7Y29sb3J9O2A7XHJcbiAgICAgICAgICAgICAgICBpZiAobG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSBgZm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6Ym9sZDtgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgbXNnLmNhbGxTb3VyY2UsIHN0eWxlICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2cubWVzc2FnZSwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiLCBzdHlsZSApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xfZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3JNc2c6IElMb2dnZXJFcnJvck1lc3NhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9ICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6Ym9sZDsnO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgY2FsbFNvdXJjZSwgc3R5bGUgKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGVycm9yTXNnLmNhbGxTb3VyY2UsIHN0eWxlICk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBlcnJvck1zZy5tZXNzYWdlLCBzdHlsZSApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNc2cuZXJyb3JPYmplY3QpOyBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHlsZSApO1xyXG5cclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXhjZXB0aW9uKCBlcnJvck1zZy5lcnJvck9iamVjdCwgeyBTb3VyY2VDb2RlMTogYHNzbi1hbmdqcy1bJHtjYWxsU291cmNlfV1gLCBTb3VyY2VDb2RlMjogZXJyb3JNc2cuY2FsbFNvdXJjZSwgTWVzc2FnZTogZXJyb3JNc2cubWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsX25vcm1hbCxcclxuICAgICAgICAgICAgICAgIGNsX2Vycm9yXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9O1xyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6MjkgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAxXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuXHJcbi8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XVxyXG52YXIgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgcGFnZVVwZGF0ZXJfTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQYWdlVXBkYXRlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIHBhZ2VVcGRhdGVyX01vZHVsZS5mYWN0b3J5KCdQYWdlVXBkYXRlclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfdGltZWxvZ19pbmRleCA9IGZ1bmN0aW9uIChpZF90ZW1wLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ19pbmRleDogX3RpbWVsb2dfaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9O1xyXG4gICAgIFxyXG4iLCLvu79cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG4vLyAxMi8yOC8yMDE5IDEwOjAgcG0gLSBTU04gLSBBZGRpbmcgQXBwSW5zaWdodHNfVXRpbCBcclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuIC8vIDA2LzA2LzIwMjEgMDU6MjkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDA5XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4vLyBjYWxsU291cmNlX3BhcmVudFxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lOnN0cmluZywgY2FsbFNvdXJjZV9wYXJlbnQ6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDE5MTIyOF8yMjI4XCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTIyOC0yMjEwXCIsIE1lc3NhZ2U6IFwiZG9TZXR1cFwiLCBDYWxsU291cmNlX3BhcmVudDogY2FsbFNvdXJjZV9wYXJlbnR9KTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IGFscmVhZHlQb3N0ZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAmJiBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnlwYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQSBcIi50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJuZy1jbGlja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJocmVmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnlwYXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS5hZGRDbGFzcygnY3NzSGlsaWdodDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlbW92ZUFkZGVkQ2xhc3Moc3BhblRlbXApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNi8wOC8yMDIxIDAyOjQ0IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzMF0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG4gXHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX0N1c3RvbSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcclxuICAgIG9iamVjdExpc3Q6IHN0cmluZ1tdXHJcbn1cclxuXHJcblxyXG5jb25zdCBzc25fYXV0b19mb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBkb1NldHVwID0gZnVuY3Rpb24gKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdmFyIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignc3NuX3NldF9mb2N1cycsIGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuICAgICAgICBKb2JzX0FuZ3VsYXJfTW9kdWxlLmRpcmVjdGl2ZSgnc3NuQXV0b0ZvY3VzJywgWydzc25fbG9nZ2VyJywgZnVuY3Rpb24gKHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDA4LTE1MDknLCBtZXNzYWdlOiAnc3NuQXV0b0ZvY3VzIGluIGRpcmVjdGl2ZScgfSwgJ3llbGxvdycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6ICdBJyxcclxuICAgICAgICAgICAgICAgIC8vIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX0N1c3RvbSwgZWxlbSwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0sIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwMDgtMTUyNi1kJywgbWVzc2FnZTogJ3NzbkF1dG9Gb2N1cyBmaXJpbmcnIH0sICdjeWFuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHNjb3BlLm9iamVjdExpc3QgPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICBlbGVtLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwXHJcbiAgICB9XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHNzbl9hdXRvX2ZvY3VzIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTAvMDEvMjAxOSAwOTo0NyBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDNdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG5cclxuXHJcbiAgICBhcHBJbnNpZ2h0czoge1xyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICdkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTMnXHJcbiAgICAgICAgLy8gMTAvMzEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIEFkZGVkXHJcblxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6ICcyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDMnLFxyXG5cclxuICAgICAgICAvLyAxMS8wNy8yMDE5IDA4OjM0IHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICBcIkluc3RydW1lbnRhdGlvbktleVwiOiBcImRlbGV0ZWRcIiwgXCJkOWYyMTIxYi05NDc1LTRmZDYtOTdjYi00ZGYwMTZlMzNjZTNcIiAsXHJcbiAgICAgICAgLy8gUFMtRmFicmlrYW1SZXNpZGVuY2VzIC0gXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIlxyXG5cclxuICAgICAgICAvLyAwNi8wNi8yMDIxIDA2OjIxIHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAxMF0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiLFxyXG4gICAgICAgIC8vIFJlcGxhY2UgUFMtRmFicmlrYW1SZXNpZGVuY2VzICB3aXRoIERldlNpdGVzSW5kZXgyMDE5MDEyN19fMDkyOV9yZWRlcGxveV92MDJcclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IFwiMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzXCJcclxuXHJcblxyXG4gICAgfVxyXG5cclxufTsiLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuXHJcblxyXG4vLyAwOS8xOC8yMDE5IDEwOjMzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwNl0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU1MzI0NTEwL2hvdy10by1tYWtlLWEtc2luZ2xldG9uLWluLXR5cGVzY3JpcHQtd29yay1hY3Jvc3MtbXVsdGlwbGUtbW9kdWxlc1xyXG5cclxuXHJcbmltcG9ydCBJQW5ndWxhckFwcCBmcm9tICcuL0lBbmd1bGFyQXBwJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgZ2xvYmFsc19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY2xhc3MgU1NOX0dsb2JhbHMge1xyXG5cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IElBbmd1bGFyQXBwW10gPSBbXTsgLy9hbmd1bGFyLklNb2R1bGVbXTtcclxuXHJcbiAgICAgICAgLy8gMDkvMjMvMjAxOSAwNjoxMyBhbSAtIFNTTiAtIFsyMDE5MDkyMy0wNjEzXSAtIFswMDFdIC0gQWRkaW5nIGEgbG9ja1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX3YwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICAgICAgLy8vLyAgRE8gTk9UIFJFTU9WRS5cclxuICAgICAgICAgICAgLy8vLyBPcHRpb24gdG8gY2FsbCBhbiBpbmplY3RlZCBBbmd1bGFySlMgc2VydmVyIGZyb20gaGVyZS4gVGVzdGVkLiAgXHJcblxyXG4gICAgICAgICAgICAvL2ZhY3RvcnlTZXR1cC5kb0ZhY3RvcnlTZXR1cCgpO1xyXG5cclxuICAgICAgICAgICAgLy90cnkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJnbG9iYWxzOiAyMDE5MDkyMy0xMTM2IC0gQ2FsbGluZyB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgdGVzdF8xMDMuZG9JdCgpO1xyXG4gICAgICAgICAgICAvL30gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5lcnJvcihcImdsb2JhbHM6ICAyMDE5MDkyMy0xMTM1IC0gRmFpbGVkIGNhbGwgdG8gdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAvL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGFuZ3VsYXJBcHA6IElBbmd1bGFyQXBwID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZCA9IChTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZSkuZmlsdGVyKChyOiBJQW5ndWxhckFwcCkgPT4gci5uYW1lID09PSBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAtIDIwMTkwOTIzLTA1NDMgLSAwMDEgLSBGb3VuZCBhcHBsaWNhdGlvbiBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIEluc3RhbmNlIGNvdW50IFtcIiArIHNlbGVjdGVkLmxlbmd0aCArIFwiXVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0gc2VsZWN0ZWRbMF07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVzaGVldEFwcCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTAvMjAxOSAwODozNiBhbSAtIFNTTiAtIEFkZGluZyAnbmdTYW5pdGl6ZScgZm9yIG5nLWJpbmQtaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCd0aW1lc2hlZXRBcHAnLCBbJ25nUm91dGUnLCAndWkuYm9vdHN0cmFwJywgJ25nU2FuaXRpemUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZW1vU2l0ZXNfSW5kZXgnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZShcImRlbW9TaXRlc19JbmRleFwiLCBhcmdzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnkoJ0Fib3V0IHRvIGdyZWV0ICcgKyBuYW1lUGFzc2VkSW4gKyAnLicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChva1RvR3JlZXQobmFtZVBhc3NlZEluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgnSGVsbG8sICcgKyBuYW1lUGFzc2VkSW4gKyAnIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoJ0dyZWV0aW5nICcgKyBuYW1lUGFzc2VkSW4gKyAnIGlzIG5vdCBhbGxvd2VkLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9rVG9HcmVldChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvVGVzdDEwMTogZG9UZXN0MTAxXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkb0ZhY3RvcnlTZXR1cDogZG9GYWN0b3J5U2V0dXBcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yMC8yMDE5IDA5OjM4IGFtIC0gU1NOIC0gUGFzcyBpbiBhcmdzXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SW5zdGFuY2VfdjAwMihjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpOiBhbmd1bGFyLklNb2R1bGUge1xyXG5cclxuICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2UsIGFwcGxpY2F0aW9uTmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBnZXRJbnN0YW5jZV92MDAyOiBnZXRJbnN0YW5jZV92MDAyXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG52YXIgdGVzdF8xMDMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb0l0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhci5pbmplY3RvcihbJ25nJywgJ2dsb2JhbEFuZ3VsYXJBcHAnXSkuaW52b2tlKFsnZ2xvYmFsQW5ndWxhckFwcFV0aWwnLCBmdW5jdGlvbiAoZ2xvYmFsQW5ndWxhckFwcFV0aWwpIHtcclxuXHJcbiAgICAgICAgICAgIGdsb2JhbEFuZ3VsYXJBcHBVdGlsLmRvVGVzdDEwMSgnTmFtZSBwYXNzZWQgdG8gZG9UZXN0MTAxJykudGhlbihkb1Rlc3QxMDFTdWNjZXNzLCBkb1Rlc3QxMDFFcnJvcikuY2F0Y2goZG9UZXN0MTAxQ2F0Y2gpO1xyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMVN1Y2Nlc3MgLSAyMDE5MDkyNC0wMzE2ICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFFcnJvcihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUVycm9yIC0gMjAxOTA5MjQtMDMxNi1CICcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkb1Rlc3QxMDFDYXRjaChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFscyAtIGRvVGVzdDEwMUNhdGNoIC0gMjAxOTA5MjQtMDMxNi1DJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvSXQ6IGRvSXRcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbi8vIDExLzIxLzIwMTkgMDY6MzIgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA2XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5lbnVtIFRpbWVsb2dfU2VydmluZ1BhZ2UgeyAvLyBTZXJ2aW5nUGFnZSAoZm9yIElERSBTZWFyY2gpXHJcblxyXG4gICAgVGltZWxvZyA9ICdUaW1lbG9nJyxcclxuICAgIEpvYl9UaW1lbG9nID0gJ0pvYl9UaW1lbG9nJyxcclxuICAgIFByb2plY3RzX1NlYXJjaCA9ICdQcm9qZWN0c19TZWFyY2gnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSh2YWx1ZTogVGltZWxvZ19TZXJ2aW5nUGFnZSwgY29tcGFyZVRvOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgcmV0dXJuIGNvbXBhcmVUbyA9PT0gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIHRlc3RfMTAzLCBUaW1lbG9nX1NlcnZpbmdQYWdlLCBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcbi8vIDA4LzMxLzIwMjAgMDQ6NTQgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDA0XSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fY29uc29sZV9tb2RlbC5kLnRzXCIgLz5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzMxLzIwMjAgMDQ6MjkgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDAyXSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbiAgICAgICAgZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCkge1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGEgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG5cclxuICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykuZWFjaCgobmR4LCBvYmoxKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdklkID0gJChvYmoxKS5hdHRyKCdhcmlhLWNvbnRyb2xzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQ9ICAgICQoXCIjXCIgKyBkaXZJZCkuY2hpbGRyZW4oKS5sZW5ndGggO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuQ291bnQ9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCAnY29sb3InLCAnb3JhbmdlJyApO1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCdmb250LXNpemUnLCAnMjRwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoXCI8c3Bhbi8+XCIpLnRleHQoJChvYmoxKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgc2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lMiA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZTInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd09iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzbW9vdGgtc2Nyb2xsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGpRdWVyeU9iamVjdE5hbWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAwNC8wOC8yMDE5IDAxOjMzIGFtIC0gU1NOIC0gWzIwMTkwNDA3LTIzNDVdIC0gVGltZUxvZ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1kZWZhdWx0LXRpbWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZCA9IGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgcChkLmdldE1vbnRoKCkgKyAxLCAyLCAnMCcpICsgXCItXCIgKyBwKGQuZ2V0RGF0ZSgpLCAyLCAnMCcpICsgXCJUXCIgKyBwKGQuZ2V0SG91cnMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS52YWwoY2QpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMTkvMjAxOSAwNDo0OCBwbSAtIFNTTiAtIFsyMDE5MDQxOS0xNjQ3XSAtIFNldCBhbW91bnQgZm9yIFRvdGFsU2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1Ub3RhbFBlcmlvZFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMDIwMTkgMDI6MzkgcG0gLSBTU04gLSBObyBjYWxjdWxhdGluZyBlbGFwc2VkIHRpbWUgY29ycmVjdGx5IHdpdGggVHlwZVNjcmlwdCBjb252ZXJzaW9uLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMiA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZDExLmdldFRpbWUoKS52YWx1ZU9mKCkgLSBkMTIuZ2V0VGltZSgpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lMikudmFsKGRlbHRhXzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAgICAgLy8gMDEvMDIvMjAyMCAwNDowNiBwbSAtIFNTTiAtIE1vdmVkIGZyb20gIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuICAgICAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICg8SFRNTEFuY2hvckVsZW1lbnQ+ZS50YXJnZXQpLmhyZWYgKyBcIiZyZXR1cm5Ub0NhbGxlcktleT1cIiArIHJldHVyblRvQ2FsbGVyS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBwKHN0cjEsIGxlbiwgY2hhcikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGZ1bmN0aW9uIChzdHIxLCBsZW4sIGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW4pIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczEgPSBjaGFyLnJlcGVhdChsZW4pICsgc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDIvMjAxOSAwNzoyNSBwbSAtIFNTTiAtIFsyMDE5MTEwMS0wNTI2XSAtIFswMTNdIC0gQ2hlY2sgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIERpZCBub3QgZmluaXNoLlxyXG4gICAgICAgICAgICAvLyBUb2RvLVNTTlxyXG4gICAgICAgICAgICAkKCcubW9kYWwnKS5vbignc2hvdycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBcIi5tb2RhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhciBsaSBhJykuYmluZCgnY29udGV4dG1lbnUgY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA0MTQtMTAwNyAtIGNvbnRleHQgbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLm5hdmJhciBsaSBhJykuYmluZCgnbW91c2Vkb3duJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlkZGxlIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSaWdodCBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCAgIDIwOCAgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKGUudGFyZ2V0KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3RoaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmICgkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICQodGhpcy5tb2JpbGVOYXZiYXJNZW51T3B0aW9uLm5hdGl2ZUVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGRpdnMgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG4gICAgICAgICAgICAkKFwiYVtkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoY2FsbGVyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAwOTo1NiBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDFdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgMjAyMDAxMDItMTUyOCAtIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciBbJyArIGNhbGxlciArICddJyk7XHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdXRvQ29sbGFwc2UgPSAkKHRoaXMpLmF0dHIoJ3Nzbi1hdXRvLWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b0NvbGxhcHNlID09PSBcImZhbHNlXCIpIHsgcmV0dXJuO307XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlQXR0cmliID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYiA9IFwiIHRpdGxlPSdcIiArIF90aXRsZSArIFwiJyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCc8cD48YSBjbWQtbmFtZT1cInNob3dzaWJsaW5nXCIgJyArIHRpdGxlQXR0cmliICsgJyA+U2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uICsgJzwvYT48L3A+JykuaW5zZXJ0QmVmb3JlKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9saW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnSGlkZSBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAgICAgLy8gU291cmNlIGh0dHBzOi8vd3d3LmMtc2hhcnBjb3JuZXIuY29tL1VwbG9hZEZpbGUvMWQzMTE5L2RhdGUtc2VyaWFsaXphdGlvbi13aXRoLWFuZ3VsYXItanMtd2ViLWFwaS9cclxuXHJcbiAgICAgICAgaXNvODYwMVJlZ0V4ID0gLygxOXwyMHwyMSlcXGRcXGQoWy0vLl0pKDBbMS05XXwxWzAxMl0pXFwyKDBbMS05XXxbMTJdWzAtOV18M1swMV0pVChcXGRcXGQpKFs6Ly5dKShcXGRcXGQpKFs6Ly5dKShcXGRcXGQpLztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG4gICAgICAgIGZuQ29udmVyRGF0ZShpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGlucHV0O1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dFtrZXldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2g7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgKG1hdGNoID0gdmFsdWUubWF0Y2godGhpcy5pc284NjAxUmVnRXgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0W2tleV0gPSBuZXcgRGF0ZSh2YWx1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZuQ29udmVyRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gICAgc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgICAgIC8vICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgLy8gICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvL3JldHVybiB7XHJcblxyXG4gICAgICAgIC8vICAgIGZuQ29udmVyRGF0ZTogZm5Db252ZXJEYXRlLFxyXG4gICAgICAgIC8vICAgIHNob3dDb2xsYXBzZWREaXZzOiBzaG93Q29sbGFwc2VkRGl2cyxcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3I6IHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICAvL30oKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8vZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbmxldCBzaXRlX2luc3RhbmNlID0gbmV3IHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcygpO1xyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxuXHJcbi8vIDAxLzAyLzIwMjAgMDQ6MjAgcG0gLSBTU04gLSBbMjAyMDAxMDItMTYxMV0gLSBbMDAzXSAtIFNlcGVyYXRlIEFuZ3VsYXJKUyB1dGlsaXR5IGZyb20gZ2VuZXJhbCBET00gdXRpbGl0aWVzXHJcbi8vIE9mIGNvdXJzZSB3ZSBhcmUgY2FsbGluZyB1dGlsaXR5IG1vcmUgdGhhbiBvbmNlLiBOZWVkIHRvIGNhbGwgZnVuY3Rpb25zIHdoZXJlIHRoZXkgYXBwbHkuXHJcblxyXG5cclxuXHJcbmlmICh0eXBlb2YgKHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0pICE9IFwibnVtYmVyXCIpIHtcclxuXHJcbiAgICB3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID0gMDtcclxufVxyXG5cclxud2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9IHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gKyAxO1xyXG5cclxuXHJcbmlmICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID09PSAxKSB7XHJcblxyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAxMi8zMC8yMDE5IDAxOjIzIGFtIC0gU1NOIC0gQWRkIHRpbWVvdFxyXG4gICAgICAgIC8vIHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpOyB9LCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNpdGVfaW5zdGFuY2UucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCcyMDIwMDEwMi0xNTM0LTInKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDA4LzMxLzIwMjAgMDQ6MzIgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDAzXSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2l0ZV9pbnN0YW5jZS5kaXNhYmxlRW1wdHlDb2xsYXBzYWJsZURpdnMoKSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLCAyMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjozNyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDNdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM2MTQ2NS9ob3ctdG8tY2hlY2staWYtY2xpY2stZXZlbnQtaXMtYWxyZWFkeS1ib3VuZC1qcXVlcnlcclxuJC5mbi5pc0JvdW5kID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcblxyXG5cclxuICAgIGlmICghdGhpcy5kYXRhKCdldmVudHMnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmZ1bmN0aW9uIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTMxIC0gam9iX1RpbWVsb2dfc2V0RmlsdGVyICcpO1xyXG5cclxuXHJcbiAgICBpZiAoJChcIiNmaWx0ZXJUZXh0XCIpLmlzQm91bmQoJ2tleXVwJywgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBib3VuZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNmaWx0ZXJUZXh0XCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2pvYnMgLSBmaXRsZXJUZXh0IC0gS2V5VXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDIgLSBzZXR1cCcpO1xyXG5cclxuICAgIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpO1xyXG5cclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==