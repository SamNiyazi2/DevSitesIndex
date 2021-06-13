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

/***/ "./Shared/SharedUtil.js":
/*!******************************!*\
  !*** ./Shared/SharedUtil.js ***!
  \******************************/
/*! exports provided: LoadAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAll", function() { return LoadAll; });
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.js");
/* harmony import */ var _Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Interceptors/SessonTimeoutInterceptor */ "./Interceptors/SessonTimeoutInterceptor.js");
// 01/02/2020 02:30 pm - SSN - [20200102-1234] - [010] - Add AngularJS login




var ngApplicationName = 'timesheetApp';

function LoadAll() {
  _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_0__["RestorePreviousPageState_instance"].doSetup(ngApplicationName, "SharedUtil_20210606_1732");
  _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_1__["changeMonitorService_instance"].doSetup(ngApplicationName);
  _DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName);
  _Interceptors_SessonTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_3__["default"].doSetup(ngApplicationName);
}



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

/***/ "./users/login.js":
/*!************************!*\
  !*** ./users/login.js ***!
  \************************/
/*! exports provided: loginController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginController_instance", function() { return loginController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site */ "./site.js");
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
/* harmony import */ var _Shared_SharedUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Shared/SharedUtil */ "./Shared/SharedUtil.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./users/login.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGF0YVNlcnZpY2VzLnRzIiwid2VicGFjazovLy8uL0ludGVyY2VwdG9ycy9TZXNzb25UaW1lb3V0SW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL1NoYXJlZFV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9nbG9iYWxzLnRzIiwid2VicGFjazovLy8uL3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvbG9naW4udHMiLCJ3ZWJwYWNrOi8vLy4vdXNlcnMvdXNlcnNfbWFpbi50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FDaEJBLGdFQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSyw4REFBOEQ7QUFDbkUsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUssOERBQThEO0FBQ25FLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNERBQTREO0FBQ2pFLENBQUMsZ0JBQWdCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUQsQ0FBQyxtQkFBUyxFQUFFLE9BQVMsQ0FBQyxtQ0FBRTtBQUN6RTtBQUNBLGtEQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMERBQTBELEVBQUU7QUFDakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFBQSxvR0FBQztBQUNGLHFDOzs7Ozs7Ozs7Ozs7QUN6VEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFFQTs7QUFHQSxJQUFJLG9CQUFvQixHQUFHO0FBR3ZCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGtCQUFWLEVBQW9DO0FBRzlDLFFBQUksMEJBQTBCLEdBQUcsMERBQXlCLGdCQUF6QixDQUEwQyxjQUExQyxFQUEwRCxrQkFBMUQsQ0FBakM7QUFHQSw4QkFBMEIsQ0FBQyxPQUEzQixDQUFtQyxhQUFuQyxFQUFrRCxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQVUsS0FBVixFQUFpQixFQUFqQixFQUFtQjtBQUVqRixVQUFJLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxVQUFJLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBVSxjQUFWLEVBQWlDLFdBQWpDLEVBQW1EO0FBRWxFLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLHVCQUFxQixjQUFyQixHQUFtQyxHQUFuQyxHQUF1QyxXQUFqRCxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsdURBQWEsTUFBTSxDQUFDLElBQXBCLEVBQTBCLFNBQTFCO0FBQ0Esa0JBQVEsQ0FBQyxPQUFUO0FBQ0gsU0FMTCxFQU1RO0FBQ0ksa0JBQVEsQ0FBQyxNQUFUO0FBQ0gsU0FSVDtBQVVBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FmRCxDQUppRixDQXNCakY7OztBQUVBLFVBQUksaUJBQWlCLEdBQUcsU0FBcEIsaUJBQW9CO0FBRXBCLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLCtCQUFWLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBakI7QUFDSCxTQUpMLEVBS1E7QUFDSSxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsQ0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWRELENBeEJpRixDQXlDakY7OztBQUVBLFVBQUksV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFVLEVBQVYsRUFBWTtBQUUxQixZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmLENBRjBCLENBSTFCOztBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUsZ0NBQWdDLEVBQTFDLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFDQSxpQkFBTyxDQUFDLEtBQVIsQ0FBYyxZQUFkO0FBQ0gsU0FSVDtBQVVBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FqQkQsQ0EzQ2lGLENBZ0VqRjtBQUNBO0FBQ0E7OztBQUNBLFVBQUkscUJBQXFCLEdBQUcsU0FBeEIscUJBQXdCLENBQVUsRUFBVixFQUFjLFdBQWQsRUFBeUI7QUFFakQsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUsbUNBQW1DLEVBQW5DLEdBQXdDLGVBQXhDLEdBQTBELFdBQXBFLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFDQSxpQkFBTyxDQUFDLEtBQVIsQ0FBYyxZQUFkO0FBQ0gsU0FSVDtBQVVBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FmRDs7QUFrQkEsVUFBSSxXQUFXLEdBQUcsU0FBZCxXQUFjLENBQVUsT0FBVixFQUFpQjtBQUUvQixZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxtQkFBWCxFQUFnQyxPQUFoQyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUTtBQUNJLGtCQUFRLENBQUMsTUFBVDtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BZkQsQ0FyRmlGLENBdUdqRjs7O0FBQ0EsVUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUIsQ0FBVSxPQUFWLEVBQWlCO0FBR2xDLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWYsQ0FIa0MsQ0FLbEM7QUFDQTtBQUNBOztBQUNBLGFBQUssQ0FBQyxJQUFOLENBQVcsbUJBQVgsRUFBZ0MsT0FBaEMsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1E7QUFDSSxrQkFBUSxDQUFDLE1BQVQ7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFFSCxPQW5CRCxDQXhHaUYsQ0E4SGpGOzs7QUFFQSxVQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFVLE9BQVYsRUFBaUI7QUFFbEMsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxJQUFOLENBQVcsaUJBQVgsRUFBOEIsT0FBOUIsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFDWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFFSCxPQWZELENBaElpRixDQWtKakY7OztBQUNBLFVBQUksbUJBQW1CLEdBQUcsU0FBdEIsbUJBQXNCLENBQVUsT0FBVixFQUFpQjtBQUd2QyxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxpQkFBWCxFQUE4QixPQUE5QixFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUVYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUlQ7QUFVQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BakJELENBbkppRixDQXVLakY7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsVUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQVUsU0FBVixFQUEyQztBQUV0RCxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmLENBRnNELENBSXREOztBQUVBLFlBQUkscUJBQXFCLEdBQUssU0FBUyxDQUFDLHFCQUFWLENBQWdDLE1BQWhDLElBQTBDLENBQTNDLEdBQWdELHNCQUFoRCxHQUF5RSxTQUFTLENBQUMscUJBQVYsQ0FBZ0MsSUFBaEMsQ0FBcUMsR0FBckMsQ0FBdEc7QUFHQSxhQUFLLENBQUMsR0FBTixDQUFVLHNCQUFzQixTQUFTLENBQUMsYUFBaEMsR0FBZ0QsR0FBaEQsR0FBc0QsU0FBUyxDQUFDLGNBQWhFLEdBQWlGLEdBQWpGLEdBQXVGLFNBQVMsQ0FBQyxVQUFqRyxHQUE4RyxHQUE5RyxHQUFvSCxTQUFTLENBQUMsSUFBOUgsR0FBcUksR0FBckksR0FBMkkscUJBQTNJLEdBQW1LLGFBQW5LLEdBQ0osU0FBUyxDQUFDLFNBRGhCLEVBR0ssSUFITCxDQUdVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FOTCxFQU9RLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFDSCxTQVRUO0FBV0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQXJCRCxDQTdLaUYsQ0FxTWpGOzs7QUFDQSxVQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxFQUFWLEVBQVk7QUFJdEIsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZixDQUpzQixDQU90QjtBQUNBOztBQUNBLGFBQUssQ0FBQyxHQUFOLENBQVUsd0JBQXdCLEVBQWxDLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQW5CRCxDQXRNaUYsQ0E4TmpGOzs7QUFFQSxVQUFJLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQjtBQUVuQixZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLEdBQU4sQ0FBVSxxQkFBVixFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLFlBQVYsRUFBc0I7QUFDbEIsa0JBQVEsQ0FBQyxNQUFULENBQWdCO0FBQUUsaUJBQUssRUFBRTtBQUFULFdBQWhCO0FBQ0gsU0FQVDtBQVNBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FkRCxDQWhPaUYsQ0FvUGpGOzs7QUFFQSxVQUFJLDRCQUE0QixHQUFHLFNBQS9CLDRCQUErQixDQUFVLEVBQVYsRUFBYyxXQUFkLEVBQXlCO0FBRXhELFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLG1DQUFtQyxFQUFuQyxHQUF3QyxlQUF4QyxHQUEwRCxXQUFwRSxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFDbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSEwsRUFJUSxVQUFVLFlBQVYsRUFBc0I7QUFDbEIsa0JBQVEsQ0FBQyxNQUFULENBQWdCO0FBQUUsaUJBQUssRUFBRSxnRUFBZ0UsRUFBaEUsR0FBcUUsS0FBckUsR0FBNkUsV0FBN0UsR0FBMkY7QUFBcEcsV0FBaEI7QUFDQSxpQkFBTyxDQUFDLEtBQVIsQ0FBYyxZQUFkO0FBQ0gsU0FQVDtBQVNBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBQ0gsT0FkRCxDQXRQaUYsQ0EwUWpGOzs7QUFFQSxVQUFJLHVCQUF1QixHQUFHLFNBQTFCLHVCQUEwQixDQUFVLFlBQVYsRUFBc0I7QUFHaEQsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxJQUFOLENBQVcsc0JBQVgsRUFBbUMsWUFBbkMsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFFWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFFSCxPQWpCRDs7QUFzQkEsYUFBTztBQUVILGdCQUFRLEVBQUUsRUFBRSxDQUFDLFVBQUgsQ0FBYyxTQUFkLENBRlA7QUFHSCxtQkFBVyxFQUFFLFlBSFY7QUFJSCx3QkFBZ0IsRUFBRSxpQkFKZjtBQUtILGtCQUFVLEVBQUUsV0FMVDtBQU1IO0FBQ0EscUJBQWEsRUFBRSxjQVBaO0FBU0gscUJBQWEsRUFBRSxjQVRaO0FBVUgsa0JBQVUsRUFBRSxXQVZUO0FBV0gscUJBQWEsRUFBRSxtQkFYWjtBQVlILGVBQU8sRUFBRSxRQVpOO0FBYUgsdUJBQWUsRUFBRSxnQkFiZDtBQWNILGNBQU0sRUFBRSxPQWRMO0FBZUgsNEJBQW9CLEVBQUUscUJBZm5CO0FBZ0JILG1DQUEyQixFQUFFLDRCQWhCMUI7QUFpQkgsK0JBQXVCO0FBakJwQixPQUFQO0FBc0JILEtBeFRpRCxDQUFsRDtBQXlUSCxHQS9URDs7QUFpVUEsU0FBTztBQUNIO0FBQ0EsV0FBTyxFQUFFO0FBRk4sR0FBUDtBQU1ILENBMVUwQixFQUEzQjs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtDQUdBO0FBR0E7O0FBR0EsSUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFKLEVBQVY7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLHFDQUFtQyxDQUFDLENBQUMsa0JBQUYsRUFBL0M7QUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLGlEQUFaOztBQUVBLElBQUksa0NBQWtDLEdBQUc7QUFHckMsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsa0JBQVYsRUFBb0M7QUFHOUMsV0FBTyxDQUFDLEdBQVIsQ0FBWSwwREFBWjtBQUdBLFFBQUksZ0JBQWdCLEdBQUcseURBQWdCLENBQUMsZ0JBQWpCLENBQWtDLDJCQUFsQyxFQUErRCxrQkFBL0QsQ0FBdkI7QUFFQSxvQkFBZ0IsQ0FBQyxNQUFqQixDQUF3QixDQUNwQixlQURvQixFQUVwQixVQUFVLGFBQVYsRUFBdUI7QUFFbkI7QUFFQSxVQUFJLFdBQVcsR0FBRyxDQUNkLElBRGMsRUFFZCxZQUZjLEVBR2QsV0FIYyxFQUloQjtBQUNFLGdCQUFVLEVBQVYsRUFBYyxVQUFkLEVBQTBCLFNBQTFCLEVBQW1DO0FBRy9CLGVBQU8sQ0FBQyxHQUFSLENBQVksOERBQVo7QUFFQSxZQUFJLE9BQU8sR0FBRztBQUVWO0FBQ0EsaUJBQU8sRUFBRSxpQkFBVSxNQUFWLEVBQWdCO0FBRXJCO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxtQkFBTyxNQUFQLENBUnFCLENBU3JCO0FBRUE7QUFDQTtBQUVILFdBakJTO0FBa0JWLHNCQUFZLEVBQUUsc0JBQVUsU0FBVixFQUFtQjtBQUM3QixtQkFBTyxDQUFDLEdBQVIsQ0FBWSw4REFBWjtBQUNBLG1CQUFPLEVBQUUsQ0FBQyxNQUFILENBQVUsU0FBVixDQUFQO0FBQ0gsV0FyQlM7QUFzQlYsa0JBQVEsRUFBRSxrQkFBVSxNQUFWLEVBQWdCO0FBQ3RCLG1CQUFPLENBQUMsR0FBUixDQUFZLDBEQUFaO0FBQ0EsbUJBQU8sTUFBUDtBQUNILFdBekJTO0FBMEJWLHVCQUFhLEVBQUUsdUJBQVUsUUFBVixFQUFrQjtBQUM3QixtQkFBTyxDQUFDLEdBQVIsQ0FBWSwrREFBWjtBQUNBLG1CQUFPLEVBQUUsQ0FBQyxNQUFILENBQVUsUUFBVixDQUFQO0FBQ0g7QUE3QlMsU0FBZDtBQWlDQSxlQUFPLE9BQVA7QUFFSCxPQTdDYSxDQUFsQjtBQWdEQSxtQkFBYSxDQUFDLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBZ0MsV0FBaEM7QUFFSCxLQXhEbUIsQ0FBeEI7QUE0REgsR0FwRUQ7O0FBc0VBLFNBQU87QUFDSCxXQUFPLEVBQUU7QUFETixHQUFQO0FBSUgsQ0E3RXdDLEVBQXpDOztBQWlGZSxpR0FBZixFOzs7Ozs7Ozs7Ozs7QUMvRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUdBLElBQU0saUJBQWlCLEdBQUcsY0FBMUI7O0FBR0EsU0FBUyxPQUFULEdBQWdCO0FBRVosa0dBQWlDLENBQUMsT0FBbEMsQ0FBMEMsaUJBQTFDLEVBQTZELDBCQUE3RDtBQUVBLHdHQUE2QixDQUFDLE9BQTlCLENBQXNDLGlCQUF0QztBQUVBLG9FQUFvQixDQUFDLE9BQXJCLENBQTZCLGlCQUE3QjtBQUVBLGdGQUF5QixDQUFDLE9BQTFCLENBQWtDLGlCQUFsQztBQUVIOzs7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztHQUdBOzs7QUFJQTtBQUNBOztBQUdBLElBQUksZ0JBQWdCLEdBQUc7QUFFbkIsTUFBSSxJQUFJLEdBQUc7QUFBQyxjQUFVLEVBQUM7QUFBWixHQUFYO0FBRUEsTUFBSSxNQUFNLEdBQUc7QUFFVCxzQkFBa0IsRUFBRSx3REFBVyxDQUFDLFdBQVosQ0FBd0I7QUFGbkMsR0FBYjs7QUFNQSxNQUFJLHNCQUFzQixHQUFHLFNBQXpCLHNCQUF5QjtBQUV6QixXQUFPLE1BQU0sQ0FBQyxrQkFBZDtBQUNILEdBSEQ7O0FBTUEsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsVUFBVixFQUEyQjtBQUVyQyxRQUFJLENBQUMsVUFBTCxHQUFrQixVQUFsQjs7QUFFQSxRQUFJLENBQUMsa0VBQVcsQ0FBQyxNQUFqQixFQUF5QjtBQUVyQjtBQUVBO0FBQ0EsVUFBSSxzQkFBc0IsRUFBMUIsRUFBOEI7QUFFMUIsMEVBQVcsQ0FBQyxnQkFBWixDQUE2QixNQUE3QjtBQUNIO0FBQ0o7QUFHSixHQWhCRDs7QUFtQkEsTUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFTO0FBRVQ7O0FBRUE7QUFDQSxzRUFBVyxDQUFDLGFBQVosQ0FDSSx5QkFESjtBQUMrQjtBQUMzQixRQUZKO0FBRVU7QUFDTjtBQUFFLFdBQUssRUFBRSxPQUFUO0FBQWtCLFdBQUssRUFBRTtBQUF6QixLQUhKO0FBR3dDO0FBQ3BDO0FBQUUsa0JBQVksRUFBRTtBQUFoQixLQUpKO0FBSXlCO0FBQ3JCO0FBQUk7QUFMUjtBQVFBOztBQUNBLHNFQUFXLENBQUMsVUFBWixDQUF1Qix5QkFBdkIsRUFBa0Q7QUFBRSxXQUFLLEVBQUUsT0FBVDtBQUFrQixXQUFLLEVBQUU7QUFBekIsS0FBbEQsRUFBc0Y7QUFBRSxrQkFBWSxFQUFFO0FBQWhCLEtBQXRGO0FBRUgsR0FoQkQ7O0FBbUJBLE1BQUksV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFVLElBQVYsRUFBeUIsR0FBekIsRUFBdUMsVUFBdkMsRUFBeUQsWUFBekQsRUFBNkUsUUFBN0UsRUFBOEY7QUFFNUc7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLG9EQUFaLEVBQWtFLGNBQWxFO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSx1QkFBWjs7QUFFQSxRQUFNLFFBQVE7QUFBSyxvQkFBYyxFQUFFLElBQUksQ0FBQztBQUExQixPQUF5QyxVQUF6QyxDQUFkOztBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQVkscUJBQVo7QUFFQSxzRUFBVyxDQUFDLGFBQVosQ0FBMEIsSUFBMUIsRUFBZ0MsR0FBaEMsRUFBcUMsVUFBckMsRUFYNEcsQ0FXM0Q7QUFFcEQsR0FiRDs7QUFlQSxNQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVcsQ0FBVSxJQUFWLEVBQXdCLFVBQXhCLEVBQTBDLFlBQTFDLEVBQTREO0FBRXZFO0FBRUEsc0VBQVcsQ0FBQyxVQUFaLENBQXVCLElBQXZCLEVBQTZCLFVBQTdCLEVBQXlDLFlBQXpDO0FBRUgsR0FORDs7QUFRQSxNQUFJLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBVSxTQUFWLEVBQTRCLEtBQTVCLEVBQXlDLFNBQXpDLEVBQTJEO0FBRTFFO0FBRUEsc0VBQVcsQ0FBQyxjQUFaLENBQTJCLFNBQTNCLEVBQXNDLFNBQXRDLEVBQWlELEtBQWpEO0FBRUgsR0FORDs7QUFTQSxTQUFPO0FBQ0gsV0FBTyxFQUFFLE9BRE47QUFFSCxVQUFNLEVBQUUsTUFGTDtBQUdILGVBQVcsRUFBRSxXQUhWO0FBSUgsWUFBUSxFQUFFLFFBSlA7QUFLSCxnQkFBWSxFQUFFO0FBTFgsR0FBUDtBQVFILENBOUZzQixFQUF2Qjs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBSSxrQkFBa0IsR0FBRztBQUVyQixNQUFJLGtCQUFrQixHQUFHLFNBQXJCLGtCQUFxQixDQUFrQyxFQUFsQyxFQUEyQztBQUVoRSx3RUFBaUIsQ0FBQyxXQUFsQixHQUFnQyxJQUFoQztBQUNILEdBSEQ7O0FBTUEsTUFBSSw2QkFBNkIsR0FBRyxTQUFoQyw2QkFBZ0MsQ0FBa0MsRUFBbEMsRUFBMkM7QUFFM0Usd0VBQWlCLENBQUMsV0FBbEIsR0FBZ0MsS0FBaEM7QUFDSCxHQUhELENBUnFCLENBY3JCOzs7QUFDQSxNQUFJLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFvQjtBQUdwQjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixDQUFkO0FBRUEsV0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBUTtBQUVwQixVQUFJLENBQUMsQ0FBQyxJQUFGLEtBQVcsQ0FBQyxDQUFDLElBQUYsQ0FBTyxXQUFQLE9BQXlCLFFBQXpCLElBQXFDLENBQUMsQ0FBQyxJQUFGLENBQU8sV0FBUCxPQUF5QixPQUF6RSxDQUFKLEVBQXVGO0FBRW5GLFNBQUMsQ0FBQyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixrQkFBa0IsQ0FBQyw2QkFBL0M7QUFFSDtBQUVKLEtBUkQ7QUFZQSxRQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsT0FBMUIsQ0FBYjtBQUVBLFVBQU0sQ0FBQyxPQUFQLENBQWUsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBUTtBQUVuQixVQUFJLENBQUMsWUFBWSxDQUFDLENBQUQsQ0FBakIsRUFBc0I7QUFFbEIsU0FBQyxDQUFDLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLGtCQUFrQixDQUFDLGtCQUFoRDtBQUVIOztBQUdELFVBQUksQ0FBQyxDQUFDLElBQUYsS0FBVyxDQUFDLENBQUMsSUFBRixDQUFPLFdBQVAsT0FBeUIsUUFBekIsSUFBcUMsQ0FBQyxDQUFDLElBQUYsQ0FBTyxXQUFQLE9BQXlCLE9BQXpFLENBQUosRUFBdUY7QUFFbkYsU0FBQyxDQUFDLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCLGtCQUFrQixDQUFDLDZCQUEvQztBQUVIO0FBRUosS0FmRDtBQW1CQSxRQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBaEI7QUFFQSxhQUFTLENBQUMsT0FBVixDQUFrQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFRO0FBRXRCLFVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBRCxDQUFqQixFQUFzQjtBQUNsQixTQUFDLENBQUMsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsa0JBQWtCLENBQUMsa0JBQWhEO0FBQ0g7QUFDSixLQUxEO0FBU0EsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFFBQTFCLENBQWQ7QUFFQSxXQUFPLENBQUMsT0FBUixDQUFnQixVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFRO0FBRXBCLFVBQUksQ0FBQyxZQUFZLENBQUMsQ0FBRCxDQUFqQixFQUFzQjtBQUNsQixTQUFDLENBQUMsZ0JBQUYsQ0FBbUIsUUFBbkIsRUFBNkIsa0JBQWtCLENBQUMsa0JBQWhEO0FBQ0g7QUFDSixLQUxEO0FBT0gsR0EzREQ7O0FBK0RBLE1BQUksWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFVLElBQVYsRUFBYztBQUc3QjtBQUVBLFFBQUksSUFBSSxDQUFDLElBQVQsRUFBZTtBQUNYLFVBQ0ksSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLE9BQTRCLFFBQTVCLElBQ0EsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLE9BQTRCLFFBRDVCLElBRUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLE9BQTRCLFFBRjVCLElBR0EsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLE9BQTRCLE9BSDVCLElBSUEsSUFBSSxDQUFDLElBQUwsQ0FBVSxXQUFWLE9BQTRCLFVBTGhDLEVBSzRDO0FBRXhDLGVBQU8sSUFBUDtBQUNIO0FBQ0osS0FmNEIsQ0FpQjdCOzs7QUFDQSxRQUFJLElBQUksQ0FBQyxlQUFULEVBQTBCO0FBQ3RCLGFBQU8sSUFBUDtBQUNIOztBQUVELFFBQUksQ0FBQyxJQUFJLENBQUMsRUFBTixJQUFZLENBQUMsSUFBSSxDQUFDLElBQXRCLEVBQTRCLE9BQU8sSUFBUDtBQUU1QixRQUFJLElBQUksQ0FBQyxFQUFMLENBQVEsV0FBUixHQUFzQixPQUF0QixDQUE4QixRQUE5QixJQUEwQyxDQUFDLENBQS9DLEVBQWtELE9BQU8sSUFBUDtBQUVsRCxRQUFJLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixHQUF3QixPQUF4QixDQUFnQyxRQUFoQyxJQUE0QyxDQUFDLENBQWpELEVBQW9ELE9BQU8sSUFBUDtBQUVwRCxRQUFJLElBQUksQ0FBQyxFQUFMLENBQVEsV0FBUixHQUFzQixPQUF0QixDQUE4QixRQUE5QixJQUEwQyxDQUFDLENBQS9DLEVBQWtELE9BQU8sSUFBUDtBQUVsRCxRQUFJLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixHQUF3QixPQUF4QixDQUFnQyxRQUFoQyxJQUE0QyxDQUFDLENBQWpELEVBQW9ELE9BQU8sSUFBUDtBQUdwRCxXQUFPLEtBQVA7QUFDSCxHQWxDRDs7QUF1Q0EsTUFBSSxnQkFBZ0IsR0FBRyxTQUFuQixnQkFBbUI7QUFJbkIsUUFBSSxRQUFRLEdBQUcsY0FBYyxPQUFPLFFBQXBDOztBQUVBLFFBQUksSUFBSixFQUFVO0FBR04sVUFBSSxRQUFKLEVBQWM7QUFFVixjQUFNLENBQUMsZ0JBQVAsQ0FBd0IsY0FBeEIsRUFBd0MsVUFBVSxDQUFWLEVBQVc7QUFFL0MsY0FBSSxDQUFDLG9FQUFpQixDQUFDLFdBQXZCLEVBQW9DO0FBRXBDLGNBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFFQSxXQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBYixFQUFvQixXQUFwQixHQUFrQyxtQkFBbEMsQ0FOK0MsQ0FNWTs7QUFDM0QsaUJBQU8sMERBQVAsQ0FQK0MsQ0FPbUQ7QUFDckcsU0FSRDtBQVVILE9BZkssQ0FrQk47OztBQUNBLFVBQUksQ0FBQyxRQUFMLEVBQWU7QUFFWCxjQUFNLENBQUMsY0FBUCxHQUF3QixVQUFVLENBQVYsRUFBVztBQUUvQixjQUFJLENBQUMsb0VBQWlCLENBQUMsV0FBdkIsRUFBb0M7QUFFcEMsY0FBSSxtQkFBbUIsR0FBRyxLQUExQjtBQUVBLFdBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFiLEVBQW9CLFdBQXBCLEdBQWtDLG1CQUFsQyxDQU4rQixDQU00Qjs7QUFDM0QsaUJBQU8sOERBQVAsQ0FQK0IsQ0FPdUU7QUFDekcsU0FSRDtBQVVIO0FBR0o7QUFFSixHQTFDRCxDQXJIcUIsQ0FvS3JCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUI7QUFFakIsUUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsU0FBakIsQ0FBMkIsV0FBM0IsRUFBZDs7QUFFQSxZQUFRLElBQVI7QUFDSSxXQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsTUFBZCxJQUF3QixDQUFDLENBQTlCO0FBQ0ksZUFBTyxNQUFQOztBQUNKLFdBQUssS0FBSyxDQUFDLE9BQU4sQ0FBYyxLQUFkLElBQXVCLENBQUMsQ0FBeEIsSUFBNkIsQ0FBQyxDQUFPLE1BQU8sQ0FBQyxHQUFsRDtBQUNJLGVBQU8sT0FBUDs7QUFDSixXQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBZCxJQUEwQixDQUFDLENBQTNCLElBQWdDLENBQUMsQ0FBTyxNQUFPLENBQUMsTUFBckQ7QUFDSSxlQUFPLFFBQVA7O0FBQ0osV0FBSyxLQUFLLENBQUMsT0FBTixDQUFjLFNBQWQsSUFBMkIsQ0FBQyxDQUFqQztBQUNJLGVBQU8sSUFBUDs7QUFDSixXQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsU0FBZCxJQUEyQixDQUFDLENBQWpDO0FBQ0ksZUFBTyxTQUFQOztBQUNKLFdBQUssS0FBSyxDQUFDLE9BQU4sQ0FBYyxRQUFkLElBQTBCLENBQUMsQ0FBaEM7QUFDSSxlQUFPLFFBQVA7O0FBQ0o7QUFDSSxlQUFPLE9BQVA7QUFkUjtBQWlCSCxHQXJCRCxDQXZLcUIsQ0ErTHJCOzs7QUFDQSxNQUFJLHdCQUF3QixHQUFHLFNBQTNCLHdCQUEyQjtBQUUzQixjQUFVLENBQUMsaUJBQUQsRUFBb0IsSUFBcEIsQ0FBVjtBQUNBLG9CQUFnQjtBQUVuQixHQUxEOztBQVFBLFNBQU87QUFFSCxvQkFBZ0IsRUFBRSxnQkFGZjtBQUdILGtCQUFjLEVBQUUsY0FIYjtBQUlILHFCQUFpQixFQUFFLGlCQUpoQjtBQUtILHNCQUFrQixFQUFFLGtCQUxqQjtBQU1ILGlDQUE2QixFQUFFLDZCQU41QjtBQU9ILDRCQUF3QixFQUFFO0FBUHZCLEdBQVA7QUFVSCxDQWxOd0IsRUFBekI7O0FBdU5BLENBQUMsQ0FBQztBQUVFLG9CQUFrQixDQUFDLHdCQUFuQjtBQUVILENBSkEsQ0FBRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdOQTtBQUdBO0FBQUE7QUFBQTtBQUFBLHNDQXFDQzs7QUFqQ0csd0JBQUksaUNBQUosRUFBSSxhQUFKLEVBQWU7U0FBZjtBQUdJLFVBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxvQkFBRCxDQUF6QjtBQUdBLGFBQU8sQ0FBQyxHQUFSLENBQVksd0JBQVosdUVBQThDLFlBQTlDOztBQUdBLFVBQUksT0FBUSxZQUFSLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0Esb0JBQVksR0FBRyxLQUFmO0FBQ0g7O0FBRUQsYUFBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxZQUFoQyxFQUE4QyxHQUE5QztBQUNBLGFBQU8sWUFBUDtBQUNILEtBcEJjO1NBdUJmLGFBQWdCLFlBQWhCLEVBQXFDO0FBRWpDLFlBQU0sQ0FBQyxvQkFBRCxDQUFOLEdBQStCLFlBQS9CO0FBRUEsYUFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4QyxZQUE5QztBQUVILEtBN0JjO29CQUFBOztBQUFBLEdBQWY7QUFpQ0o7QUFBQyxDQXJDRDs7QUF3Q0EsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVCQUFKLEVBQXhCOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFNQSxJQUFJLDZCQUE2QixHQUFHO0FBR2hDLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGtCQUFWLEVBQW9DO0FBSTlDLFFBQUksK0JBQStCLEdBQUcsMERBQXlCLGdCQUF6QixDQUEwQyxzQkFBMUMsRUFBa0Usa0JBQWxFLENBQXRDO0FBR0EsbUNBQStCLENBQUMsT0FBaEMsQ0FBd0Msc0JBQXhDLEVBQWdFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQW1CO0FBSS9GLFVBQUksYUFBYSxHQUFHLFNBQWhCLGFBQWdCO0FBRWhCLHlFQUFrQixDQUFDLHdCQUFuQjtBQUNILE9BSEQ7O0FBTUEsVUFBSSxlQUFlLEdBQUcsU0FBbEIsZUFBa0I7QUFFbEIsZUFBTyxvRUFBaUIsQ0FBQyxXQUF6QjtBQUVILE9BSkQ7O0FBT0EsVUFBSSxNQUFNLEdBQUcsU0FBVCxNQUFTO0FBRVQsNEVBQWlCLENBQUMsV0FBbEIsR0FBZ0MsS0FBaEM7QUFFSCxPQUpEOztBQU9BLFVBQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CLENBQVUsT0FBVixFQUFpQjtBQUVwQyw0RUFBaUIsQ0FBQyxXQUFsQixHQUFnQyxPQUFoQztBQUVILE9BSkQ7O0FBTUEsYUFBTztBQUNILG9CQUFZLEVBQUUsYUFEWDtBQUVILHNCQUFjLEVBQUUsZUFGYjtBQUdILGFBQUssRUFBRSxNQUhKO0FBSUgsdUJBQWUsRUFBRTtBQUpkLE9BQVA7QUFTSCxLQXZDK0QsQ0FBaEU7QUEwQ0gsR0FqREQ7O0FBcURBLFNBQU87QUFDSCxXQUFPLEVBQUU7QUFETixHQUFQO0FBS0gsQ0E3RG1DLEVBQXBDOzs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBRUE7O0FBSUEsSUFBSSxpQ0FBaUMsR0FBRztBQUV2QztBQUNEO0FBRUksTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsaUJBQVYsRUFBb0MsaUJBQXBDLEVBQTZEO0FBR3ZFLGlGQUFnQixDQUFDLFFBQWpCLENBQTBCLHlCQUExQixFQUFxRDtBQUFFLGdCQUFVLEVBQUUsZUFBZDtBQUErQixhQUFPLEVBQUUsU0FBeEM7QUFBbUQsdUJBQWlCLEVBQUU7QUFBdEUsS0FBckQ7QUFHQSxRQUFJLGNBQWMsR0FBb0IseURBQWdCLENBQUMsZ0JBQWpCLENBQWtDLDBCQUFsQyxFQUE4RCxpQkFBOUQsQ0FBdEM7QUFFQSxrQkFBYyxDQUFDLFVBQWYsQ0FBMEIsMkNBQTFCLEVBQXVFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsV0FBckIsRUFBa0MsVUFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCLFNBQTFCLEVBQW1DLENBRzNJLENBSHNFLENBQXZFO0FBT0Esa0JBQWMsQ0FBQyxTQUFmLENBQXlCLHNDQUF6QixFQUFpRTtBQUU3RDtBQUdBLFVBQUksYUFBYSxHQUFHLEtBQXBCLENBTDZELENBUTdEO0FBQ0E7O0FBSUEsT0FBQyxDQUFDO0FBR0UsY0FBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVUsQ0FBVixFQUFXO0FBQUksaUJBQU8sQ0FBQyxDQUFELENBQVA7QUFBYSxTQUE3RDtBQUNBLGNBQU0sQ0FBQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QyxVQUFVLENBQVYsRUFBVztBQUFJLGlCQUFPLENBQUMsQ0FBRCxDQUFQO0FBQWEsU0FBcEU7QUFFQSxrQkFBVSxDQUFDLFVBQUQsRUFBYSxHQUFiLENBQVY7QUFFSCxPQVJBLENBQUQ7O0FBWUEsZUFBUyxlQUFULEdBQXdCO0FBRXBCO0FBQ0EsZUFBTyxRQUFRLENBQUMsUUFBVCxDQUFrQixJQUFsQixDQUF1QixPQUF2QixDQUErQixjQUEvQixFQUErQyxLQUEvQyxDQUFQO0FBQ0g7O0FBR0QsZUFBUyxPQUFULENBQWlCLENBQWpCLEVBQWtCO0FBRWQsWUFBSSxhQUFKLEVBQW1CO0FBRW5CLHFCQUFhLEdBQUcsSUFBaEI7QUFHQSxZQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxJQUFELENBQXhDO0FBR0EsWUFBSSxRQUFRLEdBQUcsRUFBZjs7QUFFQSxZQUFJLENBQUMsQ0FBQyxPQUFOLEVBQWU7QUFHWCxrQkFBUSxHQUFHO0FBRVAsbUJBQU8sRUFBRSxDQUFDLENBQUMsT0FGSjtBQUdQLG1CQUFPLEVBQUUsQ0FBQyxDQUFDO0FBSEosV0FBWDtBQU1IOztBQUlELFlBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFsQjtBQUNBLFlBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFsQjs7QUFFQSxZQUFJLGFBQWEsQ0FBQyxhQUFkLElBQStCLFNBQW5DLEVBQThDO0FBRTFDLHVCQUFhLENBQUMsYUFBZCxHQUE4QjtBQUFFLGVBQUcsRUFBRSxlQUFlLEVBQXRCO0FBQTBCLGdCQUFJLEVBQUUsSUFBaEM7QUFBc0MsZ0JBQUksRUFBRSxJQUE1QztBQUFrRCxtQkFBTyxFQUFFO0FBQTNELFdBQTlCO0FBRUEsdUJBQWEsQ0FBQyxTQUFkLENBQXdCLElBQXhCLENBQTZCLElBQTdCLENBQWtDLGFBQWEsQ0FBQyxhQUFoRDtBQUVILFNBTkQsTUFNTztBQUVILHVCQUFhLENBQUMsYUFBZCxDQUE0QixJQUE1QixHQUFtQyxJQUFuQztBQUNBLHVCQUFhLENBQUMsYUFBZCxDQUE0QixJQUE1QixHQUFtQyxJQUFuQztBQUdBLHVCQUFhLENBQUMsYUFBZCxDQUE0QixPQUE1QixHQUFzQyxRQUF0QztBQUVBLHVCQUFhLENBQUMsU0FBZCxDQUF3QixJQUF4QixDQUE2QixhQUFhLENBQUMsWUFBM0MsSUFBMkQsYUFBYSxDQUFDLGFBQXpFO0FBQ0g7O0FBR0QsY0FBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxhQUFhLENBQUMsU0FBN0IsQ0FBekM7QUFFSDs7QUFHRCxlQUFTLG9CQUFULENBQThCLGdCQUE5QixFQUErRDtBQUFqQztBQUFBO0FBQWlDOztBQUUzRCxZQUFJLGNBQWMsR0FBUSxNQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixXQUE1QixDQUExQjs7QUFFQSxZQUFJLGNBQWMsSUFBSSxTQUF0QixFQUFpQztBQUU3QixjQUFJLENBQUMsZ0JBQUwsRUFBdUIsT0FBTyxJQUFQO0FBRXZCLHdCQUFjLEdBQUcsYUFBakI7QUFDSDs7QUFHRCxZQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVgsQ0FBaEI7QUFHQSxZQUFJLEdBQUcsR0FBRyxlQUFlLEVBQXpCO0FBQ0EsWUFBSSxhQUFhLEdBQUcsU0FBcEI7QUFFQSxZQUFJLFlBQVksR0FBRyxDQUFDLENBQXBCOztBQUVBLGFBQUssWUFBWSxHQUFHLENBQXBCLEVBQXVCLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBVixDQUFlLE1BQXJELEVBQTZELFlBQVksRUFBekUsRUFBNkU7QUFDekUsY0FBSSxTQUFTLENBQUMsSUFBVixDQUFlLFlBQWYsRUFBNkIsR0FBN0IsSUFBb0MsR0FBeEMsRUFBNkM7QUFDekMseUJBQWEsR0FBRyxTQUFTLENBQUMsSUFBVixDQUFlLFlBQWYsQ0FBaEI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsZUFBTztBQUNILHVCQUFhLEVBQUUsYUFEWjtBQUMyQixtQkFBUyxFQUFFLFNBRHRDO0FBQ2lELHNCQUFZLEVBQUU7QUFEL0QsU0FBUDtBQUlIOztBQUdELGVBQVMsVUFBVCxHQUFtQjtBQUdmLFlBQUksYUFBYSxHQUFHLG9CQUFvQixFQUF4QztBQUdBLFlBQUksQ0FBQyxhQUFMLEVBQW9CO0FBR3BCLFlBQUksQ0FBQyxhQUFhLENBQUMsYUFBbkIsRUFBa0M7QUFJbEMsWUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWxDOztBQUVBLFlBQUksYUFBSixFQUFtQjtBQUVmLGdCQUFNLENBQUMsUUFBUCxDQUFnQjtBQUNaLGVBQUcsRUFBRSxhQUFhLENBQUMsSUFEUDtBQUNhLGdCQUFJLEVBQUUsYUFBYSxDQUFDLElBRGpDO0FBQ3VDLG9CQUFRLEVBQUU7QUFEakQsV0FBaEI7QUFNQSxvQkFBVSxDQUFDO0FBQWMsZ0NBQW9CO0FBQUssV0FBeEMsRUFBMEMsSUFBMUMsQ0FBVixDQVJlLENBYWY7QUFHQTtBQUVIO0FBSUo7O0FBR0QsZUFBUyxvQkFBVCxHQUE2QjtBQUl6QixZQUFJLGFBQWEsR0FBRyxvQkFBb0IsRUFBeEM7QUFFQSxZQUFJLENBQUMsYUFBTCxFQUFvQjtBQUNwQixZQUFJLENBQUMsYUFBYSxDQUFDLGFBQW5CLEVBQWtDO0FBR2xDLFlBQUksYUFBYSxHQUFHLGFBQWEsQ0FBQyxhQUFsQzs7QUFHQSxZQUFJLGFBQUosRUFBbUI7QUFHZixjQUFJLGFBQWEsQ0FBQyxPQUFsQixFQUEyQjtBQUd2QixnQkFBSSxhQUFhLENBQUMsT0FBZCxDQUFzQixPQUExQixFQUFtQztBQUcvQixrQkFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBOUI7QUFDQSxrQkFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLE9BQWQsQ0FBc0IsT0FBOUI7QUFHQSxrQkFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLENBQTFCLEVBQTZCLENBQTdCLENBQXRCOztBQUlBLGtCQUFJLGVBQWUsSUFBSSxlQUFlLENBQUMsVUFBdkMsRUFBbUQ7QUFFL0Msb0JBQUksTUFBTSxHQUFHLElBQWI7O0FBRUEsb0JBQUksS0FBSyxXQUFMLEdBQW1CLE9BQW5CLENBQTJCLGVBQWUsQ0FBQyxRQUFoQixDQUF5QixXQUF6QixFQUEzQixJQUFxRSxDQUFDLENBQTFFLEVBQTZFO0FBQ3pFLHdCQUFNLEdBQUcsS0FBVDtBQUNIOztBQUVELHFCQUFLLElBQUksR0FBQyxHQUFHLENBQWIsRUFBZ0IsR0FBQyxHQUFHLGVBQWUsQ0FBQyxVQUFoQixDQUEyQixNQUEvQyxFQUF1RCxHQUFDLEVBQXhELEVBQTREO0FBRXhELHNCQUFJLGVBQWUsQ0FBQyxVQUFoQixDQUEyQixHQUEzQixFQUE4QixJQUE5QixLQUF1QyxVQUEzQyxFQUF1RCxDQUV0RDs7QUFDRCxzQkFBSSxlQUFlLENBQUMsVUFBaEIsQ0FBMkIsR0FBM0IsRUFBOEIsSUFBOUIsS0FBdUMsTUFBM0MsRUFBbUQsQ0FFbEQ7QUFDSjs7QUFFRCxvQkFBSSxDQUFDLE1BQUwsRUFBYTtBQUVULHNCQUFJLFVBQVEsR0FBRyxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLFNBQW5CLENBQTZCLGVBQTdCLENBQWY7QUFFQSxtQkFBQyxDQUFDLFVBQUQsQ0FBRCxDQUFZLElBQVosQ0FBaUIsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixJQUFuQixFQUFqQjtBQUNBLG1CQUFDLENBQUMsVUFBRCxDQUFELENBQVksUUFBWixDQUFxQixlQUFyQjtBQUVBLDRCQUFVLENBQUM7QUFBYyxvQ0FBZ0IsQ0FBQyxVQUFELENBQWhCO0FBQTZCLG1CQUE1QyxFQUE4QyxJQUE5QyxDQUFWO0FBRUg7QUFFSjtBQUVKO0FBR0o7O0FBSUQsb0JBQVUsQ0FBQztBQUlQLHNCQUFVLENBQUM7QUFDUCwyQkFBYSxDQUFDLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBNkIsTUFBN0IsQ0FBb0MsYUFBYSxDQUFDLFlBQWxEO0FBQ0Esb0JBQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDLElBQUksQ0FBQyxTQUFMLENBQWUsYUFBYSxDQUFDLFNBQTdCLENBQXpDO0FBSUgsYUFOUyxFQU1QLElBTk8sQ0FBVjtBQVFILFdBWlMsRUFZUCxJQVpPLENBQVY7QUFjSDtBQUVKOztBQUdELGVBQVMsZ0JBQVQsQ0FBMEIsTUFBMUIsRUFBZ0M7QUFHNUIsU0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVY7QUFHSDs7QUFLRCxhQUFPO0FBRUgsZ0JBQVEsRUFBRSxHQUZQO0FBSUgsbUJBQVcsRUFBRSx3Q0FKVjtBQVFILFlBQUksRUFBRSxjQUFVLEtBQVYsRUFBaUIsRUFBakIsRUFBcUIsS0FBckIsRUFBMEIsQ0FFL0I7QUFWRSxPQUFQO0FBZ0JILEtBL1FEO0FBaVJILEdBaFNEOztBQWtTQSxTQUFPO0FBQ0gsV0FBTyxFQUFFO0FBRE4sR0FBUDtBQUlILENBM1N1QyxFQUF4Qzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFFQTtBQUVPLElBQU0sV0FBVyxHQUFHO0FBR3ZCLGFBQVcsRUFBRTtBQUVUO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBLHNCQUFrQixFQUFFO0FBaEJYO0FBSFUsQ0FBcEIsQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOztBQU1BLElBQUksZ0JBQWdCLEdBQUc7QUFHbkI7QUFBQTtBQUFBO0FBQUEsNEJBdUlDLENBdklELENBS0k7OztBQWNjLGtDQUFkLFVBQThCLFVBQTlCLEVBQWtELGVBQWxELEVBQTJFLElBQTNFLEVBQWdHO0FBRTVGO0FBQ0E7QUFIdUU7QUFBQTtBQUFxQixRQUs1RjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxhQUFPLFdBQVcsQ0FBQyxvQkFBWixDQUFpQyxVQUFqQyxFQUE2QyxlQUE3QyxFQUE4RCxJQUE5RCxDQUFQO0FBRUgsS0FwQmE7O0FBZ0NBLHVDQUFkLFVBQW1DLFVBQW5DLEVBQXVELGVBQXZELEVBQWdGLElBQWhGLEVBQXFHO0FBQXJCO0FBQUE7QUFBcUI7O0FBR2pHLFVBQUksVUFBVSxHQUFnQixJQUE5QjtBQUVBLFVBQUksUUFBUSxHQUFJLFdBQVcsQ0FBQywwQkFBYixDQUF5QyxNQUF6QyxDQUFnRCxVQUFDLENBQUQsRUFBZTtBQUFLLGdCQUFDLENBQUMsSUFBRjtBQUEwQixPQUE5RixDQUFmOztBQUlBLFVBQUksUUFBUSxDQUFDLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFFckIsWUFBSSxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUVyQixpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLHdEQUF3RCxlQUF4RCxHQUEwRSxxQkFBMUUsR0FBa0csUUFBUSxDQUFDLE1BQTNHLEdBQW9ILEdBQWhJO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDSDs7QUFFRCxrQkFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQXJCO0FBRUgsT0FuQkQsTUFtQk87QUFFSCxnQkFBUSxlQUFSO0FBRUksZUFBSyxjQUFMO0FBRUksc0JBQVUsR0FBRztBQUNULGtCQUFJLEVBQUUsZUFERztBQUVUO0FBQ0Esc0JBQVEsRUFBRSwrQ0FBZSxjQUFmLEVBQStCLENBQUMsU0FBRCxFQUFZLGNBQVosRUFBNEIsWUFBNUIsQ0FBL0I7QUFIRCxhQUFiO0FBTUEsdUJBQVcsQ0FBQywwQkFBWixDQUF1QyxJQUF2QyxDQUE0QyxVQUE1QztBQUVBOztBQUVKLGVBQUssMkJBQUw7QUFFSSxzQkFBVSxHQUFHO0FBQ1Qsa0JBQUksRUFBRSxlQURHO0FBRVQsc0JBQVEsRUFBRSwrQ0FBZSwyQkFBZixFQUE0QyxJQUE1QztBQUZELGFBQWI7QUFLQSx1QkFBVyxDQUFDLDBCQUFaLENBQXVDLElBQXZDLENBQTRDLFVBQTVDO0FBRUE7O0FBR0osZUFBSyxpQkFBTDtBQUVJLHNCQUFVLEdBQUc7QUFDVCxrQkFBSSxFQUFFLGVBREc7QUFFVCxzQkFBUSxFQUFFLCtDQUFlLGlCQUFmLEVBQWtDLElBQWxDO0FBRkQsYUFBYjtBQUtBLHVCQUFXLENBQUMsMEJBQVosQ0FBdUMsSUFBdkMsQ0FBNEMsVUFBNUM7QUFFQTs7QUFFSjtBQUVJLG1CQUFPLENBQUMsS0FBUixDQUFjLHlEQUF5RCxlQUF6RCxHQUEyRSwrQkFBekY7QUFFQTtBQXpDUjtBQStDSDs7QUFHRCxhQUFPLFVBQVUsQ0FBQyxRQUFsQjtBQUdILEtBbkZhOztBQWhEQyw2Q0FBNEMsRUFBNUMsQ0FIbkIsQ0FHbUU7O0FBb0luRTtBQUFDLEdBdklEOztBQW9KQSxNQUFJLFlBQVksR0FBRztBQUdmLFFBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCO0FBRWpCLFVBQUksV0FBSjs7QUFFQSxVQUFJO0FBQ0EsbUJBQVcsR0FBRywrQ0FBZSxrQkFBZixDQUFkO0FBRUgsT0FIRCxDQUlBLE9BQU8sR0FBUCxFQUFZO0FBRVIsbUJBQVcsR0FBRywrQ0FBZSxrQkFBZixFQUFtQyxFQUFuQyxDQUFkO0FBRUg7O0FBR0QsaUJBQVcsQ0FBQyxPQUFaLENBQW9CLHNCQUFwQixFQUE0QyxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQVUsS0FBVixFQUFpQixFQUFqQixFQUFtQjtBQUczRSxZQUFJLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FBVSxZQUFWLEVBQXNCO0FBRWxDLGNBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFHQSxvQkFBVSxDQUFDO0FBRVAsb0JBQVEsQ0FBQyxNQUFULENBQWdCLG9CQUFvQixZQUFwQixHQUFtQyxHQUFuRDs7QUFHQSxnQkFBSSxTQUFTLENBQUMsWUFBRCxDQUFiLEVBQTZCO0FBQ3pCLHNCQUFRLENBQUMsT0FBVCxDQUFpQixZQUFZLFlBQVosR0FBMkIsR0FBNUM7QUFDSCxhQUZELE1BRU87QUFFSCxzQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsY0FBYyxZQUFkLEdBQTZCLGtCQUE3QztBQUNIO0FBQ0osV0FYUyxFQVdQLElBWE8sQ0FBVjtBQWNBLGlCQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILFNBcEJEOztBQXVCQSxpQkFBUyxTQUFULENBQW1CLElBQW5CLEVBQXVCO0FBQ25CLGlCQUFPLEtBQVA7QUFDSDs7QUFFRCxlQUFPO0FBRUgsbUJBQVMsRUFBRTtBQUZSLFNBQVA7QUFNSCxPQXBDMkMsQ0FBNUM7QUFxQ0gsS0FwREQ7O0FBdURBLFdBQU87QUFDSCxvQkFBYyxFQUFFO0FBRGIsS0FBUDtBQU9ILEdBakVrQixFQUFuQixDQXZKbUIsQ0F5T25COzs7QUFFQSxXQUFTLGdCQUFULENBQTBCLFVBQTFCLEVBQThDLGVBQTlDLEVBQXVFLElBQXZFLEVBQTRGO0FBQXJCO0FBQUE7QUFBcUI7O0FBRXhGLFdBQU8sV0FBVyxDQUFDLGVBQVosQ0FBNEIsVUFBNUIsRUFBd0MsZUFBeEMsRUFBeUQsSUFBekQsQ0FBUDtBQUNIOztBQUlELFNBQU87QUFFSCxvQkFBZ0IsRUFBRTtBQUZmLEdBQVA7QUFPSCxDQXpQc0IsRUFBdkI7O0FBK1BBLElBQUksUUFBUSxHQUFHO0FBR1gsTUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFPO0FBR1AscURBQWlCLENBQUMsSUFBRCxFQUFPLGtCQUFQLENBQWpCLEVBQTZDLE1BQTdDLENBQW9ELENBQUMsc0JBQUQsRUFBeUIsVUFBVSxvQkFBVixFQUE4QjtBQUV2RywwQkFBb0IsQ0FBQyxTQUFyQixDQUErQiwwQkFBL0IsRUFBMkQsSUFBM0QsQ0FBZ0UsZ0JBQWhFLEVBQWtGLGNBQWxGLFdBQXdHLGNBQXhHO0FBRUgsS0FKbUQsQ0FBcEQ7O0FBT0EsYUFBUyxnQkFBVCxDQUEwQixRQUExQixFQUFrQztBQUU5QixhQUFPLENBQUMsR0FBUixDQUFZLDZDQUFaO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7O0FBRUQsYUFBUyxjQUFULENBQXdCLFFBQXhCLEVBQWdDO0FBQzVCLGFBQU8sQ0FBQyxHQUFSLENBQVksNkNBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFFRCxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBZ0M7QUFDNUIsYUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGFBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUVIO0FBR0osR0E1QkQ7O0FBZ0NBLFNBQU87QUFDSCxRQUFJLEVBQUU7QUFESCxHQUFQO0FBS0gsQ0F4Q2MsRUFBZixDLENBMkNBOzs7QUFFQSxJQUFLLG1CQUFMOztBQUFBLFdBQUssbUJBQUwsRUFBd0I7QUFFcEI7QUFDQTtBQUNBO0FBQ0gsQ0FMRCxFQUFLLG1CQUFtQixLQUFuQixtQkFBbUIsTUFBeEI7O0FBT0EsU0FBUyw4QkFBVCxDQUF3QyxLQUF4QyxFQUFvRSxTQUFwRSxFQUFrRztBQUU5RixTQUFPLFNBQVMsS0FBSyxLQUFyQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFVEO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUosRUFBVDtBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQVosRUFBNEMsRUFBNUMsRSxDQUdBO0FBRUE7QUFJQTs7QUFDQSxJQUFVLGdCQUFWOztBQUFBLFdBQVUsZ0JBQVYsRUFBMEI7QUFFdEI7QUFBQTtBQUFBO0FBQUE7QUFpVkk7QUFFQTtBQUVBLDBCQUFlLGlHQUFmLENBclZKLENBdVhJO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0gsS0FuWkQsQ0FPSTs7O0FBRUE7QUFHSTtBQUVBLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLElBQS9CLENBQW9DLFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBVTtBQUUxQyxZQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLGVBQWIsQ0FBWjtBQUdBLFlBQUksYUFBYSxHQUFLLENBQUMsQ0FBQyxNQUFNLEtBQVAsQ0FBRCxDQUFlLFFBQWYsR0FBMEIsTUFBaEQ7O0FBRUEsWUFBSSxhQUFhLEtBQUksQ0FBckIsRUFBd0I7QUFDcEIsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEdBQVIsQ0FBYSxPQUFiLEVBQXNCLFFBQXRCO0FBQ0EsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE1BQXpCO0FBRUEsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFdBQVIsQ0FBb0I7QUFDaEIsbUJBQU8sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsRUFBbEIsQ0FBUDtBQUNILFdBRkQ7QUFJSDtBQUNKLE9BaEJEO0FBbUJILEtBeEJELENBVEosQ0FxQ0k7OztBQUNBO0FBRUksT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFVLENBQVYsRUFBVztBQUVuQyxZQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLFVBQWIsQ0FBZDtBQUNBLFlBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsWUFBYixDQUFoQjtBQUNBLFlBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxrQkFBYixDQUF2QjtBQUNBLFlBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxtQkFBYixDQUF4Qjs7QUFHQSxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixXQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQjtBQUFFLG9CQUFRLEVBQUUsUUFBWjtBQUFzQixvQkFBUSxFQUFFO0FBQWhDLFdBQW5CO0FBRUEsV0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUIsQ0FBK0IsY0FBL0I7QUFDSCxTQWJrQyxDQWVuQzs7O0FBQ0EsWUFBSSxPQUFPLEtBQUssWUFBaEIsRUFBOEI7QUFFMUIsV0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsSUFBcEI7QUFFSDs7QUFFRCxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixXQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixJQUFwQjtBQUVIOztBQUVELFlBQUksT0FBTyxLQUFLLGVBQWhCLEVBQWlDO0FBQzdCO0FBRUEsa0JBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxjQUF6QyxDQUF3RDtBQUNwRCxvQkFBUSxFQUFFO0FBRDBDLFdBQXhEO0FBSUgsU0FuQ2tDLENBb0NuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssa0JBQWhCLEVBQW9DO0FBRWhDLGNBQUksQ0FBQyxHQUFHLElBQUksSUFBSixFQUFSO0FBRUEsY0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQUYsS0FBa0IsR0FBbEIsR0FBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFGLEtBQWUsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsQ0FBekIsR0FBc0QsR0FBdEQsR0FBNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFGLEVBQUQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLENBQTdELEdBQXFGLEdBQXJGLEdBQTJGLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBRixFQUFELEVBQWUsQ0FBZixFQUFrQixHQUFsQixDQUE1RixHQUFxSCxHQUFySCxHQUEySCxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUE1SCxHQUF1SixHQUF2SixHQUE2SixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUF2SztBQUVBLFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEdBQXBCLENBQXdCLEVBQXhCO0FBRUgsU0E5Q2tDLENBaURuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssaUJBQWhCLEVBQW1DO0FBRy9CO0FBRUE7QUFHQSxjQUFJLEdBQUcsR0FBRyxJQUFJLElBQUosRUFBVjtBQUVBLGNBQUksWUFBWSxHQUE4QixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixFQUF3QixLQUF0RTtBQUVBLGNBQUksR0FBRyxHQUFHLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBVjtBQUVBLGNBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFKLEdBQWMsT0FBZCxLQUEwQixHQUFHLENBQUMsT0FBSixHQUFjLE9BQWQsRUFBeEM7QUFFQSxjQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBRUEsV0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsR0FBckIsQ0FBeUIsT0FBekI7QUFFSCxTQXZFa0MsQ0ErRW5DO0FBQ0E7QUFDQTs7O0FBRUEsU0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MsS0FBbEMsQ0FBd0MsVUFBQyxDQUFELEVBQUU7QUFFdEMsV0FBQyxDQUFDLGNBQUY7QUFDQSxXQUFDLENBQUMsZUFBRjtBQUVBLGNBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsR0FBeEIsRUFBeEI7QUFFQSxrQkFBUSxDQUFDLFFBQVQsQ0FBa0IsSUFBbEIsR0FBNkMsQ0FBQyxDQUFDLE1BQUYsQ0FBVSxJQUFWLEdBQWlCLHFCQUFqQixHQUF5QyxpQkFBdEY7QUFFSCxTQVREO0FBZ0JILE9BbkdELEVBRkosQ0EwR0k7QUFFQTs7QUFDQSxVQUFJLENBQUMsR0FBRyxTQUFKLENBQUksQ0FBVSxJQUFWLEVBQWdCLEdBQWhCLEVBQXFCLEtBQXJCLEVBQXlCO0FBRTdCLFlBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFMLEVBQVY7QUFDQSxZQUFJLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBakIsRUFBc0IsT0FBTyxHQUFQO0FBQ3RCLFlBQUksRUFBRSxHQUFHLEtBQUksQ0FBQyxNQUFMLENBQVksR0FBWixJQUFtQixHQUE1QjtBQUNBLFlBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxTQUFILENBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFKLEdBQWEsR0FBakIsQ0FBaEIsQ0FBVDtBQUVBLGVBQU8sRUFBUDtBQUNILE9BUkQsQ0E3R0osQ0F3SEk7OztBQUVBLE9BQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxFQUFWLENBQWEsUUFBYixFQUF1QjtBQUNuQixZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsU0FBVixFQUFSOztBQUVBLFlBQUksQ0FBQyxHQUFHLENBQVIsRUFBVztBQUNQLFdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDSCxTQUZELE1BRU87QUFDSCxXQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLE9BQW5CLENBQTJCLE1BQTNCO0FBQ0g7QUFDSixPQVJELEVBMUhKLENBMElJO0FBQ0E7QUFDQTs7QUFDQSxPQUFDLENBQUMsUUFBRCxDQUFELENBQVksRUFBWixDQUFlLE1BQWYsRUFBdUI7QUFFbkIsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFNBQVIsQ0FBa0I7QUFDZCxnQkFBTSxFQUFFO0FBRE0sU0FBbEI7QUFHSCxPQUxEO0FBV0EsT0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0I7QUFHZCxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLElBQWxCLENBQXVCLG1CQUF2QixFQUE0QyxVQUFDLENBQUQsRUFBRTtBQUUxQyxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLENBQVo7QUFFSCxTQUxEO0FBUUksU0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixJQUFsQixDQUF1QixXQUF2QixFQUFvQyxVQUFDLENBQUQsRUFBRTtBQUV0QyxrQkFBUSxDQUFDLENBQUMsS0FBVjtBQUNJLGlCQUFLLENBQUw7QUFDSSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBOztBQUNKLGlCQUFLLENBQUw7QUFDSSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWjtBQUNBOztBQUNKLGlCQUFLLENBQUw7QUFFSSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSx1Q0FBWjtBQUNBLHFCQUFPLENBQUMsR0FBUixDQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBSCxDQUFiO0FBRUE7O0FBR0o7QUFDSSxtQkFBSyxDQUFDLFNBQUQsQ0FBTDtBQWhCUixXQUZzQyxDQXFCdEM7QUFDQTtBQUNBOztBQUVILFNBekJHO0FBMEJQLE9BckNEO0FBeUNILEtBak1EOztBQWlNQyxLQXZPTCxDQThPSTtBQUNBO0FBQ0E7O0FBQ0E7QUFDSTtBQUNBLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLE9BQS9CLENBQXVDLE9BQXZDO0FBQ0gsS0FIRCxDQWpQSixDQTJQSTtBQUNBOzs7QUFDQSxpRUFBNEIsTUFBNUIsRUFBa0M7QUFHOUI7QUFDQTtBQUVBLGFBQU8sQ0FBQyxHQUFSLENBQVksMERBQTBELE1BQTFELEdBQW1FLEdBQS9FO0FBRUEsT0FBQyxDQUFDLEtBQUQsQ0FBRCxDQUFTLElBQVQsQ0FBYyxVQUFVLEVBQVYsRUFBWTtBQUV0QixZQUFJLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLG1CQUFiLENBQW5COztBQUNBLFlBQUksWUFBWSxLQUFLLE9BQXJCLEVBQThCO0FBQUU7QUFBUTs7QUFBQTtBQUV4QyxTQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUjtBQUVBLFlBQUksV0FBVyxHQUFHLEVBQWxCOztBQUVBLFlBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFiOztBQUNBLFlBQUksY0FBYyxHQUFHLEVBQXJCOztBQUVBLFlBQUksTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFFdEIscUJBQVcsR0FBRyxhQUFhLE1BQWIsR0FBc0IsSUFBcEM7QUFDQSx3QkFBYyxHQUFHLE9BQU8sTUFBeEI7QUFDSCxTQUpELE1BS0s7QUFDRCxnQkFBTSxHQUFHLEVBQVQ7QUFDSDs7QUFFRCxTQUFDLENBQUMsa0NBQWtDLFdBQWxDLEdBQWdELGFBQWhELEdBQWdFLGNBQWhFLEdBQWlGLFVBQWxGLENBQUQsQ0FBK0YsWUFBL0YsQ0FBNEcsSUFBNUc7QUFFSCxPQXZCRCxFQVI4QixDQW1DOUI7O0FBRUEsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFVLENBQVYsRUFBVztBQUVuQyxZQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLFVBQWIsQ0FBZDs7QUFFQSxZQUFJLE9BQU8sS0FBSyxhQUFoQixFQUErQjtBQUczQixjQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsTUFBUixHQUFpQixJQUFqQixFQUFYOztBQUNBLGNBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQWIsQ0FKMkIsQ0FNM0I7OztBQUNBLGNBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsT0FBYixDQUFiOztBQUNBLGNBQUksY0FBYyxHQUFHLEVBQXJCOztBQUVBLGNBQUksTUFBTSxLQUFLLFNBQWYsRUFBMEI7QUFDdEIsa0JBQU0sR0FBRyxFQUFUO0FBQ0gsV0FGRCxNQUdLO0FBQ0QsMEJBQWMsR0FBRyxPQUFPLE1BQXhCO0FBQ0g7O0FBRUQsY0FBSSxJQUFJLENBQUMsRUFBTCxDQUFRLFVBQVIsQ0FBSixFQUF5QjtBQUNyQixpQkFBSyxDQUFDLElBQU4sQ0FBVyxjQUFjLGNBQXpCOztBQUNBLGdCQUFJLENBQUMsT0FBTDtBQUNILFdBSEQsTUFHTztBQUNILGdCQUFJLENBQUMsTUFBTDs7QUFDQSxpQkFBSyxDQUFDLElBQU4sQ0FBVyxjQUFjLGNBQXpCO0FBRUg7QUFFSjtBQUVKLE9BaENEO0FBd0NILEtBN0VELENBN1BKLENBNFZJO0FBQ0E7OztBQUNBLGtEQUFhLEtBQWIsRUFBa0I7QUFFZCxVQUFJLHFFQUFPLEtBQVAsTUFBaUIsUUFBckIsRUFBK0IsT0FBTyxLQUFQOztBQUUvQixXQUFLLElBQUksR0FBVCxJQUFnQixLQUFoQixFQUF1QjtBQUVuQixZQUFJLENBQUMsS0FBSyxDQUFDLGNBQU4sQ0FBcUIsR0FBckIsQ0FBTCxFQUFnQztBQUVoQyxZQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRCxDQUFqQjs7QUFDQSxZQUFJLElBQUksR0FBRyxxRUFBTyxLQUFWLENBQVI7O0FBQ0EsWUFBSSxLQUFKOztBQUNBLFlBQUksSUFBSSxLQUFLLFFBQVQsS0FBc0IsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFOLENBQVksS0FBSyxZQUFqQixDQUE5QixDQUFKLEVBQW1FO0FBQy9ELGVBQUssQ0FBQyxHQUFELENBQUwsR0FBYSxJQUFJLElBQUosQ0FBUyxLQUFULENBQWI7QUFDSCxTQUZELE1BR0ssSUFBSSxJQUFJLEtBQUssUUFBYixFQUF1QjtBQUN4QixlQUFLLFlBQUwsQ0FBa0IsS0FBbEI7QUFDSDtBQUNKO0FBQ0osS0FsQkQ7O0FBNVZPLDZCQUFzQixDQUF0QjtBQWlaWDtBQUFDLEdBblpEOztBQUFhLGdDQUFVLFVBQVY7QUFxWmhCLENBdlpELEVBQVUsZ0JBQWdCLEtBQWhCLGdCQUFnQixNQUExQixFLENBeVpBOzs7QUFHQSxJQUFJLGFBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQXJCLEVBQXBCO0NBS0E7QUFDQTs7QUFJQSxJQUFJLE9BQVEsTUFBTSxDQUFDLGtCQUFELENBQWQsSUFBdUMsUUFBM0MsRUFBcUQ7QUFFakQsUUFBTSxDQUFDLGtCQUFELENBQU4sR0FBNkIsQ0FBN0I7QUFDSDs7QUFFRCxNQUFNLENBQUMsa0JBQUQsQ0FBTixHQUE2QixNQUFNLENBQUMsa0JBQUQsQ0FBTixHQUE2QixDQUExRDs7QUFHQSxJQUFJLE1BQU0sQ0FBQyxrQkFBRCxDQUFOLEtBQStCLENBQW5DLEVBQXNDO0FBR2xDLEdBQUMsQ0FBQztBQUVFO0FBQ0E7QUFDQSxjQUFVLENBQUM7QUFBUSxtQkFBYSxDQUFDLFdBQWQ7QUFBOEIsS0FBdkMsRUFBeUMsSUFBekMsQ0FBVixDQUpGLENBT0U7QUFDQTtBQUNBOztBQUNBLGNBQVUsQ0FBQztBQUNQLG1CQUFhLENBQUMsMkJBQWQsQ0FBMEMsaUJBQTFDLEVBRE8sQ0FHUDs7QUFFQSxnQkFBVSxDQUFDO0FBQU0sNEJBQWEsQ0FBYjtBQUEyQyxPQUFsRCxFQUFvRCxJQUFwRCxDQUFWO0FBRUgsS0FQUyxFQVFKLElBUkksQ0FBVjtBQWNILEdBeEJBLENBQUQ7QUEwQkg7O0FBR0QsSUFBSSxFQUFFLEdBQUcsSUFBSSxJQUFKLEVBQVQ7QUFDQSxnQkFBZ0IsQ0FBQyxVQUFqQixDQUE0QixXQUE1QixHLENBSUE7QUFFQTs7QUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLE9BQUwsR0FBZSxVQUFVLElBQVYsRUFBZ0IsRUFBaEIsRUFBa0I7QUFHN0IsTUFBSSxDQUFDLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBTCxFQUEwQjtBQUN0QixXQUFPLEtBQVA7QUFDSDs7QUFFRCxNQUFJLElBQUksR0FBRyxLQUFLLElBQUwsQ0FBVSxRQUFWLEVBQW9CLElBQXBCLENBQVg7O0FBRUEsTUFBSSxJQUFJLEtBQUssU0FBVCxJQUFzQixJQUFJLENBQUMsTUFBTCxLQUFnQixDQUExQyxFQUE2QztBQUN6QyxXQUFPLEtBQVA7QUFDSDs7QUFFRCxTQUFRLENBQUMsQ0FBRCxLQUFPLENBQUMsQ0FBQyxPQUFGLENBQVUsRUFBVixFQUFjLElBQWQsQ0FBZjtBQUNILENBZEQsQyxDQWtCQTs7O0FBR0EsU0FBUyxxQkFBVCxHQUE4QjtBQUUxQixTQUFPLENBQUMsR0FBUixDQUFZLGdEQUFaOztBQUdBLE1BQUksQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLDBDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7QUNsaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSw0QkFBWjs7QUFFQSxJQUFJLHdCQUF3QixHQUFHO0FBRzNCLFNBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFHQSxNQUFJLFVBQVUsR0FBRywwREFBNkIsZ0JBQTdCLENBQThDLGlCQUE5QyxFQUFpRSxjQUFqRSxDQUFqQixDQU4yQixDQVMzQjs7QUFDQSxZQUFVLENBQUMsVUFBWCxDQUFzQixpQkFBdEIsRUFBeUMsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixPQUF4QixFQUFpQyxJQUFqQyxFQUF1QyxhQUF2QyxFQUFzRCxzQkFBdEQsRUFBOEUsVUFBOUUsRUFBMEYsWUFBMUYsRUFHckMsVUFBVSxNQUFWLEVBQWtCLGlCQUFsQixFQUFxQyxLQUFyQyxFQUE0QyxFQUE1QyxFQUFnRCxXQUFoRCxFQUE2RCxvQkFBN0QsRUFBbUYsUUFBbkYsRUFBNkYsVUFBN0YsRUFBdUc7QUFHbkcsV0FBTyxDQUFDLEdBQVIsQ0FBWSx1REFBWjtBQUdBLFlBQVEsQ0FBQztBQUNMLDBCQUFvQixDQUFDLFlBQXJCO0FBQ0EsMERBQW1CLFdBQW5CO0FBQ0gsS0FITyxFQUdMLEdBSEssQ0FBUjtBQU1BLFVBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFVBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQzs7QUFHQSxVQUFNLENBQUMsMEJBQVAsR0FBb0M7QUFFaEMsY0FBUSxNQUFNLENBQUMsMkJBQWY7QUFDSSxhQUFLLENBQUw7QUFDSSxpQkFBTyw0QkFBUDs7QUFDSixhQUFLLENBQUw7QUFDSSxpQkFBTywyQkFBUDs7QUFDSjtBQUNJLGlCQUFPLEVBQVA7QUFOUjtBQVNILEtBWEQ7O0FBZUEsVUFBTSxDQUFDLFVBQVAsR0FBb0I7QUFFaEIsWUFBTSxDQUFDLGtCQUFQLEdBQTRCLEVBQTVCO0FBQ0EsWUFBTSxDQUFDLDJCQUFQLEdBQXFDLEVBQXJDO0FBR0EsVUFBSSxPQUFPLEdBQUcsSUFBZDs7QUFHQSxVQUFJLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFNBQXZCLEtBQXFDLENBQXpDLEVBQTRDO0FBQ3hDLGVBQU8sR0FBRyxXQUFXLENBQUMsYUFBWixDQUEwQixNQUFNLENBQUMsZUFBakMsQ0FBVjtBQUNILE9BRkQsTUFHSztBQUNELGVBQU8sR0FBRyxXQUFXLENBQUMsYUFBWixDQUEwQixNQUFNLENBQUMsZUFBakMsQ0FBVjtBQUNIOztBQUVELFVBQUksT0FBSixFQUFhO0FBRVQsZUFBTyxDQUFDLElBQVIsQ0FDSSxVQUFVLElBQVYsRUFBYztBQUdWLGdCQUFNLENBQUMsT0FBUCxHQUFpQiw2Q0FBYSxNQUFNLENBQUMsZUFBcEIsQ0FBakI7QUFHQSwyQkFBaUIsQ0FBQyxLQUFsQjtBQUNBLGdCQUFNLENBQUMsSUFBUCxDQUFZLGVBQVo7O0FBS0EsbUJBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBb0M7QUFFaEMsc0JBQVUsQ0FBQyxVQUFYLENBQXNCLHVCQUF0QixFQUErQyxNQUEvQztBQUVIOztBQUVELG1CQUFTLG1CQUFULENBQTZCLE1BQTdCLEVBQW1DO0FBRS9CLG1CQUFPLENBQUMsS0FBUixDQUFjLE1BQWQ7QUFFSDtBQUdKLFNBMUJMLEVBMkJJLFVBQVUsS0FBVixFQUFlO0FBRVgsY0FBSSxLQUFLLEdBQUcsS0FBWjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFFQSxnQkFBTSxDQUFDLEtBQVAsQ0FBYSx3QkFBYjtBQUNBLGdCQUFNLENBQUMsT0FBUCxDQUFlLDBCQUFmO0FBRUEsZ0JBQU0sQ0FBQywyQkFBUCxHQUFxQyxDQUFyQztBQUNBLGdCQUFNLENBQUMsa0JBQVAsR0FBNEIsS0FBSyxDQUFDLElBQWxDO0FBRUgsU0F2Q0w7QUF3Q0g7QUFHSixLQTdERDs7QUFnRUEsVUFBTSxDQUFDLFVBQVAsR0FBb0I7QUFFaEIsVUFBSSxvQkFBb0IsQ0FBQyxjQUFyQixFQUFKLEVBQTJDO0FBQ3ZDLFlBQUksQ0FBQyxPQUFPLENBQUMsNERBQUQsQ0FBWixFQUE0RTtBQUMvRTs7QUFFRCx1QkFBaUIsQ0FBQyxPQUFsQjtBQUVILEtBUkQ7O0FBYUEsVUFBTSxDQUFDLEtBQVAsR0FBZTtBQUVYLGFBQU8sQ0FBQyxHQUFSLENBQVksd0NBQVo7QUFHQSx1QkFBaUIsQ0FBQyxJQUFsQixDQUF1QjtBQUNuQixtQkFBVyxFQUFFLHNCQURNO0FBRW5CLGtCQUFVLEVBQUUsaUJBRk87QUFHbkIsZ0JBQVEsRUFBRSxRQUhTO0FBSW5CLGdCQUFRLEVBQUUsS0FKUztBQUtuQixlQUFPLEVBQUU7QUFMVSxPQUF2QjtBQVFILEtBYkQ7O0FBaUJBLFdBQU8sQ0FBQyxHQUFSLENBQVkseURBQVo7QUFHSCxHQW5Jb0MsQ0FBekM7QUFzSUEsU0FBTztBQUNILGNBQVUsRUFBRTtBQURULEdBQVA7QUFJSCxDQXBKOEIsRUFBL0I7O0FBd0pBO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQ0FBWixFOzs7Ozs7Ozs7Ozs7QUNuS0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFHQSwrREFBd0IsQ0FBQyxVQUF6QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHlCIiwiZmlsZSI6ImJ1bmRsZV91c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4vSUNvbHVtbkJhZyc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uIChyZWNvcmRzUGVyUGFnZTpudW1iZXIsIGN1cnJlbnRQYWdlOm51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcbiBcclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtyZWNvcmRzUGVyUGFnZX0vJHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuY29weShyZXN1bHQuZGF0YSwgX2RldlNpdGVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjI5IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAxOF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYC9hcGkvZGVtb3NpdGVzYXBpL3JlY29yZGNvdW50YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldFRpbWVsb2cvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE3LzIwMTkgMTI6NTYgYW0gLSBTU04gLSBbMjAxOTA5MTYtMTEyM10gLSBbMDE2XSAtIEFkZGluZyBqb2Igc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBvcHRpb24gdG8gbGlzdCBKb2JzXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xOC8yMDE5IDAzOjI0IGFtIC0gU1NOIC0gWzIwMTkwOTE3LTA5MjldIC0gWzAxN10gLSBBZGRpbmcgcGFnaW5nIGZvciBhbmd1bGFyIGxpc3RzXHJcbiAgICAgICAgICAgIC8vIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChwYWdlTm8sIHJlY29yZHNQZXJQYWdlLCBjb2x1bW5OYW1lLCBkZXNjKSB7XHJcbiAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDk6MTQgYW0gLSBTU04gLSBQYXNzIHByb2plY3RJZFxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAoY29sdW1uQmFnOiBJQ29sdW1uQmFnVGVtcC5kZWZhdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yMi8yMDE5IDA4OjIzIGFtIC0gU1NOIC0gWzIwMTkwOTIyLTA4MjJdIC0gWzAwMV0gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4IC0gdXBkYXRlIGRhdGEgc291cmNlXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGpvYl9zdGF0dXNlc19zZWxlY3RlZCA9ICgoY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5sZW5ndGggPT0gMCkgPyBcIm5vdGhpbmctMjAxOTA5MjIxMTE3XCIgOiBjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmpvaW4oJywnKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvbGlzdC8nICsgY29sdW1uQmFnLmN1cnJlbnRQYWdlTm8gKyBcIi9cIiArIGNvbHVtbkJhZy5yZWNvcmRzUGVyUGFnZSArIFwiL1wiICsgY29sdW1uQmFnLmNvbHVtbk5hbWUgKyBcIi9cIiArIGNvbHVtbkJhZy5kZXNjICsgXCIvXCIgKyBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgKyBcIj9wcm9qZWN0SWQ9XCJcclxuICAgICAgICAgICAgICAgICAgICArIGNvbHVtbkJhZy5ma19maWx0ZXIpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYnMgWzIwMTkwOTE3LTAwNTddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMzAvMjAxOSAwNzowNiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICB2YXIgX2dldEpvYiA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAxMDo1MiBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDJdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRfY3VzdG9tLycgKyBpZClcclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0Sm9iLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2IgWzIwMTkwOTMwLTE5MDhdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDAxOjI1IHBtIC0gU1NOIC0gWzIwMTkwOTIxLTExMjldIC0gWzAwM10gLSBQbHVnIGluIGpvYiBzdGF0dXMgZmlsdGVyIG9uIGpvYidzIGluZGV4XHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEpvYl9TdGF0dXNlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9qb2Jfc3RhdHVzQVBJLycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iX3N0YXR1c2VzIFsyMDE5MDkyMS0xMzI2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjIvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMThdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbiAgICAgICAgICAgIHZhciBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL1Byb2plY3RBUEkvcmVmcmVzaHJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgcHJvamVjdCBzZWFyY2ggcmVjb3JkICBbMjAxOTExMjItMTYwOF0gWycgKyBpZCArICddIFsnICsgc2VydmluZ1BhZ2UgKyAnXScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzA3LzIwMjEgMDY6MjIgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE1XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAgICAgdmFyIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYl9MaW5lSXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvam9iX2xpbmVJdGVtQVBJJywgam9iX0xpbmVJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgZGV2U2l0ZXM6IGtvLm9ic2VydmFibGUoX2RldlNpdGVzKSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlc0NvdW50OiBfZ2V0RGV2U2l0ZXNDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDAzOjUzIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMV0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5cclxuLy8gaHR0cHM6Ly9jb2RlLmFuZ3VsYXJqcy5vcmcvMS4yLjI3L2RvY3MvYXBpL25nL3NlcnZpY2UvJGh0dHAjaW50ZXJjZXB0b3JzXHJcblxyXG5cclxuY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZyhgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIHRvcCAke2QudG9Mb2NhbGVUaW1lU3RyaW5nKCl9YCk7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSB0b3AgLSAyMDE5MTIwNy0wNDEwJyk7XHJcblxyXG5sZXQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gZnVuY3Rpb24gdG9wIC0gMjAxOTEyMDctMDQxMScpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJqc19tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3InLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBhbmd1bGFyanNfbW9kdWxlLmNvbmZpZyhbXHJcbiAgICAgICAgICAgICckaHR0cFByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDIwIDEwOjUzIGFtIC0gU1NOIC0gQWRkaW5nICRsb2NhdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvciA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnJHEnLFxyXG4gICAgICAgICAgICAgICAgICAgICckcm9vdFNjb3BlJyxcclxuICAgICAgICAgICAgICAgICAgICAnJGxvY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgLy8gICd1c2VyU2Vzc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRxLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24pIHsgLy8gLCB1c2VyU2Vzc2lvblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIDIwMTkxMjA3LTA0MTItTUYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGJlZm9yZSBtYWtpbmcgcmVxdWVzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIE1haW4gZnVuY3Rpb24gLSBTRVJWSUNFIC0gMjAxOTEyMDctMDQxMi1TRVJWSUNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnY29uZmlnIG5leHQ6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZyhjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9pZiAoY29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdXNlclNlc3Npb24uaXNBdXRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8gICAgLy8gdGhlIHJlcXVlc3QgbG9va3MgZ29vZCwgc28gcmV0dXJuIHRoZSBjb25maWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8gYmFkIHJlcXVlc3QsIHNvIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL3JldHVybiAkcS5yZWplY3QoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXF1ZXN0RXJyb3IgLSAyMDIwMDgyMS0xMDQ2LTAwMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVqZWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdGVyIC0gcmVzcG9uc2UgLSAyMDIwMDgyMS0xMDQ2LTAwMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXNwb25zZUVycm9yIC0gMjAyMDA4MjEtMTA0Ni0wMDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmljZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKGludGVyY2VwdG9yKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yX2luc3RhbmNlO1xyXG5cclxuIiwi77u/XHJcblxyXG4vLyAwMS8wMi8yMDIwIDAyOjMwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTEyMzRdIC0gWzAxMF0gLSBBZGQgQW5ndWxhckpTIGxvZ2luXHJcblxyXG5cclxuaW1wb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnO1xyXG5cclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvclNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9EYXRhU2VydmljZXMnO1xyXG5cclxuaW1wb3J0IHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgZnJvbSAnLi4vSW50ZXJjZXB0b3JzL1Nlc3NvblRpbWVvdXRJbnRlcmNlcHRvcic7XHJcblxyXG5cclxuY29uc3QgbmdBcHBsaWNhdGlvbk5hbWUgPSAndGltZXNoZWV0QXBwJztcclxuXHJcblxyXG5mdW5jdGlvbiBMb2FkQWxsKCkge1xyXG5cclxuICAgIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lLCBcIlNoYXJlZFV0aWxfMjAyMTA2MDZfMTczMlwiKTtcclxuXHJcbiAgICBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbiAgICBkYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbiAgICBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IExvYWRBbGwgfTtcclxuXHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMDk6NDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA0XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0cyB9IGZyb20gJ2FwcGxpY2F0aW9uaW5zaWdodHMtanMnO1xyXG4gXHJcblxyXG52YXIgQXBwSW5zaWdodHNfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHtjYWxsU291cmNlOidOb3RTZXQtMjAyMTA2MDYyMjI4J307XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBlbnZpcm9ubWVudC5hcHBJbnNpZ2h0cy5pbnN0cnVtZW50YXRpb25LZXlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYXZlSW5zdHJ1bWVudGF0aW9uS2V5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnLmluc3RydW1lbnRhdGlvbktleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZTpzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc2VsZi5jYWxsU291cmNlID0gY2FsbFNvdXJjZTtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAoY29uZmlnKTtcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgIFxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIHBhZ2UgdmlldyAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcoXHJcbiAgICAgICAgICAgIFwiRmlyc3RQYWdlLTIwMTkxMDAxLTEwMTVcIiwgLyogKG9wdGlvbmFsKSBwYWdlIG5hbWUgKi9cclxuICAgICAgICAgICAgbnVsbCwgLyogKG9wdGlvbmFsKSBwYWdlIHVybCBpZiBhdmFpbGFibGUgKi9cclxuICAgICAgICAgICAgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIC8qIChvcHRpb25hbCkgZGltZW5zaW9uIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgeyBtZWFzdXJlbWVudDE6IDEgfSwgLyogKG9wdGlvbmFsKSBtZXRyaWMgZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICAxMjMgLyogcGFnZSB2aWV3IGR1cmF0aW9uIGluIG1pbGxpc2Vjb25kcyAqL1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qIGV4YW1wbGU6IHRyYWNrIGV2ZW50ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChcIlRlc3RFdmVudC0yMDE5MTAwMS0xMDE2XCIsIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCB7IG1lYXN1cmVtZW50MTogMSB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBsb2dQYWdlVmlldyA9IGZ1bmN0aW9uIChuYW1lPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSwgZHVyYXRpb24/OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbkluc2lnaHRzICAtIGxvZ1BhZ2VWaWV3IC0gMjAyMTA2MDYtMjIyMycsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyBjYWxsU291cmNlX2FpbTogc2VsZi5jYWxsU291cmNlLCAuLi5wcm9wZXJ0aWVzIH07XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3UHJvcHMgKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCBtZWFzdXJlbWVudHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbjogRXJyb3IsIHByb3BzPzogYW55LCBoYW5kbGVkQXQ/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihleGNlcHRpb24sIGhhbmRsZWRBdCwgcHJvcHMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwLFxyXG4gICAgICAgIGRvVGVzdDogZG9UZXN0LFxyXG4gICAgICAgIGxvZ1BhZ2VWaWV3OiBsb2dQYWdlVmlldyxcclxuICAgICAgICBsb2dFdmVudDogbG9nRXZlbnQsXHJcbiAgICAgICAgbG9nRXhjZXB0aW9uOiBsb2dFeGNlcHRpb25cclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8wOS8yMDE5IDExOjAzIGFtIC0gU1NOIC0gQ3JlYXRlZFxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMjoyNiBwbSAtIFNTTiAtIENyZWF0ZSBjbGFzcyBmb3IgaGF2ZUNoYW5nZXNcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG52YXIgQ2hhbmdlTW9uaXRvcl9VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZXRJdGVtQ2hhbmdlZF9zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8wOS8yMDE5IDA4OjA4IGFtIC0gU1NOIC0gQWRkZWQgbW9uaXRvckNoYW5nZV9TU05cclxuICAgIHZhciBtb25pdG9yQ2hhbmdlX1NTTiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDg6MjggYW0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGxldCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHgudHlwZSAmJiAoeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIgfHwgeC50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwicmVzZXRcIikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHRleHRhcmVhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XHJcblxyXG4gICAgICAgIHRleHRhcmVhcy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYnlwYXNzT2JqZWN0ID0gZnVuY3Rpb24gKG9iajEpOiBib29sZWFuIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzE1LzIwMjAgMDoxOCBhbSAtIFNTTiAtIEFkZGVkIGVtYWlsIGFuZCBwYXNzd29yZCAobG9naW4pXHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdoaWRkZW4nIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc2VhcmNoJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdlbWFpbCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAncGFzc3dvcmQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDExLzI1LzIwMTkgMDI6MjcgcG0gLSBTU04gLSBBZGRlZFxyXG4gICAgICAgIGlmIChvYmoxLm5vQ2hhbmdlTW9uaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghb2JqMS5pZCAmJiAhb2JqMS5uYW1lKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl92MDEgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZ2V0QnJvd3Nlck5hbWUoKSA9PT0gJ2Nocm9tZSc7XHJcblxyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2Fubm90IHVzZSB3aXRoIENocm9tZVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIigyKSBZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzA1LzIwMTkxIDA0OjUzIGFtIC0gU1NOIFxyXG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHVzZXJzIGZyb20gbmF2aWdhdGluZyBhd2F5IGZyb20gQW5ndWxhciBiYXNlZCBwYWdlcyB3aXRoIHBlbmRpbmcgY2hhbmdlcy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTgyOTEyL2hvdy10by1kZXRlY3QtYnJvd3Nlci13aXRoLWFuZ3VsYXJcclxuICAgIHZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2VkZ2UnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdvcHInKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5vcHI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5jaHJvbWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZigndHJpZGVudCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignc2FmYXJpJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE5lZWRlZCBzbyB3ZSBjYW4gY2FsbCBmcm9tIHBvcHVwcy5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobW9uaXRvckNoYW5nZV9TU04sIDIwMDApO1xyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDEoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDE6IHNldHVwTW9uaXRvcl92MDEsXHJcbiAgICAgICAgZ2V0QnJvd3Nlck5hbWU6IGdldEJyb3dzZXJOYW1lLFxyXG4gICAgICAgIG1vbml0b3JDaGFuZ2VfU1NOOiBtb25pdG9yQ2hhbmdlX1NTTixcclxuICAgICAgICBzZXRJdGVtQ2hhbmdlZF9zc246IHNldEl0ZW1DaGFuZ2VkX3NzbixcclxuICAgICAgICBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbjogc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24sXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzOiBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3NcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlczogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLCBfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDAyOjU5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuL0NoYW5nZU1vbml0b3JGbGFnJztcclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi8uLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxudmFyIGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0NoYW5nZU1vbml0b3JTZXJ2aWNlJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUuZmFjdG9yeShcImNoYW5nZU1vbml0b3JTZXJ2aWNlXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfc2V0dXBNb25pdG9yID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRIYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZG9TZXRIYXZlQ2hhbmdlID0gZnVuY3Rpb24gKHNldHRpbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHNldHRpbmc7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dXBNb25pdG9yOiBfc2V0dXBNb25pdG9yLFxyXG4gICAgICAgICAgICAgICAgZ2V0SGF2ZUNoYW5nZXM6IF9nZXRIYXZlQ2hhbmdlcyxcclxuICAgICAgICAgICAgICAgIHJlc2V0OiBfcmVzZXQsXHJcbiAgICAgICAgICAgICAgICBkb1NldEhhdmVDaGFuZ2U6IF9kb1NldEhhdmVDaGFuZ2VcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yMi8yMDE5IDA5OjQxIHBtIC0gU1NOIC0gQ3JlYXRlZCB0byByZXN0b3JlIHBhZ2Ugb24gaGl0dGluZyB0aGUgYmFjayBidXR0b24gb3IgcmVjYWxsaW5nIHRoZSBwYWdlLlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbi8vIDEyLzI4LzIwMTkgMTA6MCBwbSAtIFNTTiAtIEFkZGluZyBBcHBJbnNpZ2h0c19VdGlsIFxyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuaW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuXHJcbnZhciBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gLy8gMDYvMDYvMjAyMSAwNToyOSBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMDldIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcbi8vIGNhbGxTb3VyY2VfcGFyZW50XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAobmdBcHBsaWNhdGlvbk5hbWU6c3RyaW5nLCBjYWxsU291cmNlX3BhcmVudDogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KFwiRGVtb1NpdGVzXzIwMTkxMjI4XzIyMjhcIiwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMjI4LTIyMTBcIiwgTWVzc2FnZTogXCJkb1NldHVwXCIsIENhbGxTb3VyY2VfcGFyZW50OiBjYWxsU291cmNlX3BhcmVudH0pO1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJfbW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZScsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigncmVzdG9yZVByZXZpb3VzUGFnZUFuZFRhc2tRdWV1ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24pIHtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZUFuZFRhc2tRdWV1ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l0ZV9UYXNrX1F1ZXVlX0xpc3QnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVBvc3RlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUpIHtcclxuICAgICAgICAgICAgLy99O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKGUpIHsgc2F2ZVVybChlKTsgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChyZXN0b3JlUG9zLCAzMDApO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJlbGF0aXZlUGF0aCgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ1MDQ2ODYvZ2V0LXJlbGF0aXZlLXBhdGgtb2YtdGhlLXBhZ2UtdXJsLXVzaW5nLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyguK1xcd1xcLykoLispLywgXCIvJDJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzYXZlVXJsKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeVBvc3RlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGFscmVhZHlQb3N0ZWQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlbUluZm8gPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZS5zY3JlZW5YKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbGVtSW5mbyA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFg6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WTogZS5jbGllbnRZLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1ggPSB3aW5kb3cuc2Nyb2xsWDtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NZID0gd2luZG93LnNjcm9sbFk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID0geyB1cmw6IGdldFJlbGF0aXZlUGF0aCgpLCBwb3NYOiBwb3NYLCBwb3NZOiBwb3NZLCBlbGVtZW50OiBlbGVtSW5mbyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnB1c2goVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWCA9IHBvc1g7XHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1kgPSBwb3NZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLmVsZW1lbnQgPSBlbGVtSW5mbztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJsc1tVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleF0gPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRfVVJMX1RyYWNrX1JlY29yZChjcmVhdGVJZk5vdEZvdW5kOiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX3RlbXA6IGFueSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVVJMX1RyYWNrJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFja190ZW1wID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZUlmTm90Rm91bmQpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfdGVtcCA9ICd7XCJ1cmxzXCI6W119JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFjayA9IEpTT04ucGFyc2UoVVJMX1RyYWNrX3RlbXApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZ2V0UmVsYXRpdmVQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gLTFcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGN1cnJlbnRJbmRleCA9IDA7IGN1cnJlbnRJbmRleCA8IFVSTF9UcmFjay51cmxzLmxlbmd0aDsgY3VycmVudEluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XS51cmwgPT0gdXJsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkOiBjdXJyZW50UmVjb3JkLCBVUkxfVHJhY2s6IFVSTF9UcmFjaywgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXhcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVzdG9yZVBvcygpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBjdXJyZW50UmVjb3JkLnBvc1ksIGxlZnQ6IGN1cnJlbnRSZWNvcmQucG9zWCwgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpZ2hsaWdodENsaWNrU291cmNlKCk7IH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgVVJMX1RyYWNrLnVybHMuc3BsaWNlKGN1cnJlbnRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB4ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50ICYmIHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBieXBhc3MgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJBIFwiLnRvVXBwZXJDYXNlKCkuaW5kZXhPZihzZWxlY3RlZEVsZW1lbnQubm9kZU5hbWUudG9VcHBlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBieXBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcIm5nLWNsaWNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlc1t4XS5uYW1lID09PSBcImhyZWZcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFieXBhc3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcGFuVGVtcCA9ICQoJzxzcGFuPjwvc3Bhbj4nKS5wcmVwZW5kVG8oc2VsZWN0ZWRFbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLnRleHQoJChzZWxlY3RlZEVsZW1lbnQpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLmFkZENsYXNzKCdjc3NIaWxpZ2h0MTAxJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmVtb3ZlQWRkZWRDbGFzcyhzcGFuVGVtcCk7IH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMuc3BsaWNlKFVSTF9UcmFja19SZWYuY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZUFkZGVkQ2xhc3Mob2JqUmVmKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQob2JqUmVmKS5yZW1vdmUoKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvdXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUuaHRtbFwiLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDEwLzAxLzIwMTkgMDk6NDcgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDAzXSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHJcblxyXG4gICAgYXBwSW5zaWdodHM6IHtcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzJ1xyXG4gICAgICAgIC8vIDEwLzMxLzIwMTkgMDM6NTggYW0gLSBTU04gLSBBZGRlZFxyXG5cclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMDcvMjAxOSAwODozNCBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgXCJJbnN0cnVtZW50YXRpb25LZXlcIjogXCJkZWxldGVkXCIsIFwiZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzXCIgLFxyXG4gICAgICAgIC8vIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAtIFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCJcclxuXHJcbiAgICAgICAgLy8gMDYvMDYvMjAyMSAwNjoyMSBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTBdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuICAgICAgICAvLyBSZXBsYWNlIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAgd2l0aCBEZXZTaXRlc0luZGV4MjAxOTAxMjdfXzA5MjlfcmVkZXBsb3lfdjAyXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBcIjI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkM1wiXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn07Iiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG4vLyAwOC8zMS8yMDIwIDA0OjU0IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwNF0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2NvbnNvbGVfbW9kZWwuZC50c1wiIC8+XHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjI5IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwMl0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgIGRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpIHtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBhIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuXHJcbiAgICAgICAgICAgICQoJ2FbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXScpLmVhY2goKG5keCwgb2JqMSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXZJZCA9ICQob2JqMSkuYXR0cignYXJpYS1jb250cm9scycpO1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkNvdW50PSAgICAkKFwiI1wiICsgZGl2SWQpLmNoaWxkcmVuKCkubGVuZ3RoIDtcclxuICBcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50PT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcyggJ2NvbG9yJywgJ29yYW5nZScgKTtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcygnZm9udC1zaXplJywgJzI0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPHNwYW4vPlwiKS50ZXh0KCQob2JqMSkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic21vb3RoLXNjcm9sbFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGpRdWVyeU9iamVjdE5hbWUpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMDgvMjAxOSAwMTozMyBhbSAtIFNTTiAtIFsyMDE5MDQwNy0yMzQ1XSAtIFRpbWVMb2dcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2QgPSBkLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIHAoZC5nZXRNb250aCgpICsgMSwgMiwgJzAnKSArIFwiLVwiICsgcChkLmdldERhdGUoKSwgMiwgJzAnKSArIFwiVFwiICsgcChkLmdldEhvdXJzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRNaW51dGVzKCksIDIsICcwJykgKyBcIjpcIiArIHAoZC5nZXRTZWNvbmRzKCksIDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA0LzE5LzIwMTkgMDQ6NDggcG0gLSBTU04gLSBbMjAxOTA0MTktMTY0N10gLSBTZXQgYW1vdW50IGZvciBUb3RhbFNlY29uZHNcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMToxMCBwbSAtIFNTTiAtIEFkZHJlc3NpbmcgZXJyb3IuIHN0cmluZyB8IG51bWJlciB8IHN0cmluZ1tdIGNhbm5vdCBjb252ZXJ0IHRvcCBzdHJpbmcgfCBudW1iZXJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjAyMDE5IDAyOjM5IHBtIC0gU1NOIC0gTm8gY2FsY3VsYXRpbmcgZWxhcHNlZCB0aW1lIGNvcnJlY3RseSB3aXRoIFR5cGVTY3JpcHQgY29udmVyc2lvbi5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWREYXRlOiBzdHJpbmcgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+JChqUXVlcnlPYmplY3ROYW1lKVswXSkudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkMTIgPSBuZXcgRGF0ZShzZWxlY3RlZERhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8yID0gTWF0aC5mbG9vcihkZWx0YV8xIC8gMTAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZTIpLnZhbChkZWx0YV8yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIC8vIDAxLzAyLzIwMjAgMDQ6MDYgcG0gLSBTU04gLSBNb3ZlZCBmcm9tICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcbiAgICAgICAgICAgICAgICAkKCdbc3NuLWNtZD1yZXR1cm5Ub0NhbGxlckxpbmtdJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXR1cm5Ub0NhbGxlcktleSA9ICQoXCIjcmV0dXJuVG9DYWxsZXJLZXlcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAoPEhUTUxBbmNob3JFbGVtZW50PmUudGFyZ2V0KS5ocmVmICsgXCImcmV0dXJuVG9DYWxsZXJLZXk9XCIgKyByZXR1cm5Ub0NhbGxlcktleTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXIgbGkgYScpLmJpbmQoJ2NvbnRleHRtZW51IGNsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNDE0LTEwMDcgLSBjb250ZXh0IG1lbnUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJy5uYXZiYXIgbGkgYScpLmJpbmQoJ21vdXNlZG93bicsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWZ0IG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pZGRsZSBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQgICAyMDggICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJChlLnRhcmdldCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90aGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoJCh0aGlzLm1vYmlsZU5hdmJhck1lbnVPcHRpb24ubmF0aXZlRWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBkaXZzIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuICAgICAgICAgICAgJChcImFbZGF0YS10b2dnbGU9J2NvbGxhcHNlJ11cIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcbiAgICAgICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKGNhbGxlcikge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MjggLSBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IgWycgKyBjYWxsZXIgKyAnXScpO1xyXG5cclxuICAgICAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXV0b0NvbGxhcHNlID0gJCh0aGlzKS5hdHRyKCdzc24tYXV0by1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9Db2xsYXBzZSA9PT0gXCJmYWxzZVwiKSB7IHJldHVybjt9O1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ByZSA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ1Nob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4vLyAwMS8wMi8yMDIwIDA0OjIwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTE2MTFdIC0gWzAwM10gLSBTZXBlcmF0ZSBBbmd1bGFySlMgdXRpbGl0eSBmcm9tIGdlbmVyYWwgRE9NIHV0aWxpdGllc1xyXG4vLyBPZiBjb3Vyc2Ugd2UgYXJlIGNhbGxpbmcgdXRpbGl0eSBtb3JlIHRoYW4gb25jZS4gTmVlZCB0byBjYWxsIGZ1bmN0aW9ucyB3aGVyZSB0aGV5IGFwcGx5LlxyXG5cclxuXHJcblxyXG5pZiAodHlwZW9mICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdKSAhPSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9IDA7XHJcbn1cclxuXHJcbndpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSB3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdICsgMTtcclxuXHJcblxyXG5pZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9PT0gMSkge1xyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTIvMzAvMjAxOSAwMToyMyBhbSAtIFNTTiAtIEFkZCB0aW1lb3RcclxuICAgICAgICAvLyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzNC0yJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjMyIGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwM10gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNpdGVfaW5zdGFuY2UuZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCksIDEwMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICwgMjAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxubGV0IGQyID0gbmV3IERhdGUoKTtcclxuc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKys7XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MzcgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAzXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYzNjE0NjUvaG93LXRvLWNoZWNrLWlmLWNsaWNrLWV2ZW50LWlzLWFscmVhZHktYm91bmQtanF1ZXJ5XHJcbiQuZm4uaXNCb3VuZCA9IGZ1bmN0aW9uICh0eXBlLCBmbikge1xyXG5cclxuXHJcbiAgICBpZiAoIXRoaXMuZGF0YSgnZXZlbnRzJykpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoJ2V2ZW50cycpW3R5cGVdO1xyXG5cclxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgtMSAhPT0gJC5pbkFycmF5KGZuLCBkYXRhKSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MjkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAyXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcblxyXG5mdW5jdGlvbiBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUudHMgMjAyMDAxMDItMTUzMSAtIGpvYl9UaW1lbG9nX3NldEZpbHRlciAnKTtcclxuXHJcblxyXG4gICAgaWYgKCQoXCIjZmlsdGVyVGV4dFwiKS5pc0JvdW5kKCdrZXl1cCcsIEpvYl9UaW1lbG9nX3NldEZpbHRlcikpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgYm91bmRcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIjZmlsdGVyVGV4dFwiKS5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygncHJvamVjdF9qb2JzIC0gZml0bGVyVGV4dCAtIEtleVVwJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGUpKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAyIC0gc2V0dXAnKTtcclxuXHJcbiAgICBKb2JfVGltZWxvZ19zZXRGaWx0ZXIoKTtcclxuXHJcbn0pO1xyXG5cclxuIiwi77u/XHJcbi8vIDAxLzAyLzIwMjAgMTI6MzQgcG0gLSBTU04gLSBbMjAyMDAxMDItMTIzNF0gLSBbMDAxXSAtIEFkZCBBbmd1bGFySlMgbG9naW5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxuY29uc29sZS5sb2coJ2xvZ2luICAyMDIwMDEwMi0xMjQzIC0gMDAxJyk7XHJcblxyXG52YXIgbG9naW5Db250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnbG9naW4gIDIwMjAwMTAyLTEyNDMgLSAwMDIgLSBJbnN0YW5jZSB0b3AgJyk7XHJcblxyXG5cclxuICAgIHZhciBhbmd1bGFyQXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdMb2dpbkNvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gJHVpYk1vZGFsICR1aWJNb2RhbEluc3RhbmNlXHJcbiAgICBhbmd1bGFyQXBwLmNvbnRyb2xsZXIoJ2xvZ2luQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbCcsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICckdGltZW91dCcsICckcm9vdFNjb3BlJyAsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsICR0aW1lb3V0LCAkcm9vdFNjb3BlICkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiAgMjAyMDAxMDItMTI0MyAtIDAwMyAtIGNvbnRyb2xsZXIgZnVuY3Rpb24gdG9wICcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIC0gZnVuY3Rpb24gY2xpY2sgPSAyMDIwMDEwMi0xMzM0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL1VzZXJzL2xvZ2luLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdsb2dpbkNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW4gIDIwMjAwMTAyLTEyNDMgLSAwMDUgLSBjb250cm9sbGVyIGZ1bmN0aW9uIGJvdHRvbScpO1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFuZ3VsYXJBcHA6IGFuZ3VsYXJBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGxvZ2luQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuY29uc29sZS5sb2coJ2xvZ2luICAyMDIwMDEwMi0xMjQzIC0gMDAyIC0gZnVuY3Rpb24gYm90dG9tICcpO1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwMS8wMi8yMDIwIDEyOjQyIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTEyMzRdIC0gWzAwMl0gLSBBZGQgQW5ndWxhckpTIGxvZ2luXHJcblxyXG5cclxuaW1wb3J0ICogYXMgeCBmcm9tICcuLi9TaGFyZWQvU2hhcmVkVXRpbCc7XHJcblxyXG5pbXBvcnQgeyBsb2dpbkNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tIFwiLi9sb2dpblwiO1xyXG5cclxueC5Mb2FkQWxsKCk7XHJcblxyXG5cclxubG9naW5Db250cm9sbGVyX2luc3RhbmNlLmFuZ3VsYXJBcHA7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==