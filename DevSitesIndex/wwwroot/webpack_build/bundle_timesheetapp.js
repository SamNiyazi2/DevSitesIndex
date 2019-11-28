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

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']);
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
      var controller = function controller($http, $q, $scope, $timeout) {
        var _isValid = false;
        var vm = this;
        vm.isValidBoolean = false;
        vm.firstRun = true;
        vm.hitCount = 0;
        vm.isInvalidDropdownListDirectiveInput = true;
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
          console.log('dropdownListDirective - watching vm.formName.$error.isInvalidDropdownListDirectiveInputCheck2 (1841)');
          console.log('form change');
          console.log(oldValue);
          console.log(newValue);
        });
        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          console.log('dropdownListDirective - watching firing (0345)');
          vm.isInvalidDropdownListDirectiveInput = true;

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
        $timeout(function () {
          vm.isReady = true;
        }, 2000);
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

  timesheetApp.controller('TimesheetController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'jobId', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, jobId) {
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
      $scope.editableTimeLog.disciplineId = $scope.disciplineSelected.id;

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

/***/ "./Timesheet/timesheet_main.js":
/*!*************************************!*\
  !*** ./Timesheet/timesheet_main.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/ChangeMonitorService */ "./Util/ChangeMonitorService.js");
/* harmony import */ var _Util_PageUpdater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/PageUpdater */ "./Util/PageUpdater.js");
/* harmony import */ var _DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataServices */ "./DataServices.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Timesheet_main_timesheetOnly */ "./Timesheet/Timesheet_main_timesheetOnly.js");
// 09/21/2019 03:57 am - SSN - [20190921-0357] - [001] - Creating multiple entry for Webpack
// 11/09/2019 12:05 pm - SSN - Added ChangeMonitor
// 11/14/2019 03:20 pm - SSN - [20191114-1459] - [004] - ChangeMonitroService
//import { ChangeMonitor_Util } from '../Util/ChangeMonitor';
 // 11/20/2019 04:40 am - SSN - [20191120-0429] - [002] - Timelog index clock-out refresh updated row






var ngApplicationName = 'timesheetApp'; //ChangeMonitor_Util

_Util_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__["changeMonitorService_instance"].doSetup(ngApplicationName);
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


_Timesheet_main_timesheetOnly__WEBPACK_IMPORTED_MODULE_6__["doSetup"](ngApplicationName);

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

  timesheetApp.controller('TimesheetClockOutController', ['$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'timelogId', 'PageUpdaterService', 'servingPage', function TimesheetController($scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, timelogId, PageUpdaterService, servingPage) {
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
    var ssn_ChangeMonitorService_module = _globals__WEBPACK_IMPORTED_MODULE_2__["globals_instance"].getInstance_v002('ChangeMonitorService', currentApplication);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vQzovU2Ftcy9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL2FwcGxpY2F0aW9uaW5zaWdodHMtanMvYnVuZGxlL2FpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9EYXRhU2VydmljZXMudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRBcHAudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5LnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL1BhZ2VVcGRhdGVyLnRzIiwid2VicGFjazovLy8uL1V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7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LENBQVg7O0FBRUEsTUFBSSxJQUFJLEtBQUssU0FBVCxJQUFzQixJQUFJLENBQUMsTUFBTCxLQUFnQixDQUExQyxFQUE2QztBQUN6QyxXQUFPLEtBQVA7QUFDSDs7QUFFRCxTQUFRLENBQUMsQ0FBRCxLQUFPLENBQUMsQ0FBQyxPQUFGLENBQVUsRUFBVixFQUFjLElBQWQsQ0FBZjtBQUNILENBdkJELEMsQ0EyQkE7OztBQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQVo7O0FBRUEsU0FBUyxxQkFBVCxHQUE4QjtBQUUxQixTQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaOztBQUdBLE1BQUksQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLGtDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVjQSx5QiIsImZpbGUiOiJidW5kbGVfdGltZXNoZWV0YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIHN0cnVjdCB0byBjb250YWluIG9ubHkgQyBzZWN0aW9uIHdpdGggY3VzdG9tIGZpZWxkcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gQmFzZSgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5CYXNlID0gQmFzZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQmFzZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTeXN0ZW0gdmFyaWFibGVzIGZvciBhIHRlbGVtZXRyeSBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBFbnZlbG9wZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRW52ZWxvcGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJhdGUgPSAxMDAuMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBFbnZlbG9wZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5FbnZlbG9wZSA9IEVudmVsb3BlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVNlcmlhbGl6YWJsZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9FbnZlbG9wZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUFwcGxpY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lEZXZpY2UudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUludGVybmFsLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lMb2NhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JT3BlcmF0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTYW1wbGUudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVVzZXIudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNlc3Npb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RlbGVtZXRyeS9JRW52ZWxvcGUudHNcIi8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBBSTtcclxuKGZ1bmN0aW9uIChBSSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGxldmVsIG9mIHNldmVyaXR5IGZvciB0aGUgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBTZXZlcml0eUxldmVsO1xyXG4gICAgKGZ1bmN0aW9uIChTZXZlcml0eUxldmVsKSB7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiVmVyYm9zZVwiXSA9IDBdID0gXCJWZXJib3NlXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAxXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJXYXJuaW5nXCJdID0gMl0gPSBcIldhcm5pbmdcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkNyaXRpY2FsXCJdID0gNF0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICB9KShTZXZlcml0eUxldmVsID0gQUkuU2V2ZXJpdHlMZXZlbCB8fCAoQUkuU2V2ZXJpdHlMZXZlbCA9IHt9KSk7XHJcbn0pKEFJIHx8IChBSSA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lDb25maWcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVGVsZW1ldHJ5Q29udGV4dC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvU2V2ZXJpdHlMZXZlbC50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgdmFyIFV0aWxIZWxwZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVdGlsSGVscGVycygpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogZ2VuZXJhdGUgcmFuZG9tIGlkIHN0cmluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXRpbEhlbHBlcnMubmV3SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0Y2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTA3Mzc0MTgyNDsgLy81IHN5bWJvbHMgaW4gYmFzZTY0LCBhbG1vc3QgbWF4aW50XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmFuZG9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gYmFzZTY0Y2hhcnMuY2hhckF0KHJhbmRvbSAlIDY0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKHJhbmRvbSAvIDY0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsSGVscGVycztcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uSW5zaWdodHMuVXRpbEhlbHBlcnMgPSBVdGlsSGVscGVycztcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUNvbmZpZy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQXBwSW5zaWdodHMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLL1V0aWxIZWxwZXJzLnRzXCIvPlxyXG5kZWZpbmUoXCJKYXZhU2NyaXB0U0RLLk1vZHVsZS9BcHBJbnNpZ2h0c01vZHVsZVwiLCBbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIEFwcEluc2lnaHRzTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcEluc2lnaHRzTW9kdWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBEZWZpbmUgYSB0ZW1wb3JhcnkgbWV0aG9kIHRoYXQgcXVldWVzLXVwIGEgdGhlIHJlYWwgbWV0aG9kIGNhbGxcclxuICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBvcmlnaW5hbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBhdmFpbGFibGUsIGl0IG1lYW5zIHRoYXQgdGhlIGZ1bmN0aW9uIHdhc24ndCB5ZXQgcmVwbGFjZWQgd2l0aCBhY3R1YWwgZnVuY3Rpb24gdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5pdGlhbCBjb29raWUgaWYgcG9zc2libGVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LmNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBbXHJcbiAgICAgICAgICAgICAgICBcImNsZWFyQXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZsdXNoXCIsXHJcbiAgICAgICAgICAgICAgICBcInNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0RlcGVuZGVuY3lcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V4Y2VwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja01ldHJpY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1BhZ2VWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrVHJhY2VcIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB3aGlsZSAobWV0aG9kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QobWV0aG9kLnBvcCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkID0gZnVuY3Rpb24gKGFpQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2UuY29uZmlnID0gYWlDb25maWc7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBpZiBzY3JpcHQgd2FzIHByZXZpb3VzbHkgZG93bmxvYWRlZCBhbmQgaW5pdGlhbGl6ZWQsIHF1ZXVlIHdpbGwgYmUgZGVsZXRlZCwgcmVpbml0aWFsaXplIGl0XHJcbiAgICAgICAgICAgIGlmICghYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IGFpQ29uZmlnLnVybCB8fCBcImh0dHBzOi8vYXo0MTY0MjYudm8ubXNlY25kLm5ldC9zY3JpcHRzL2EvYWkuMC5qc1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3QgZ2xvYmFsIGVycm9ycyBieSB3cmFwcGluZyB0aGUgd2luZG93Lm9uZXJyb3IgbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghYWlDb25maWcuZGlzYWJsZUV4Y2VwdGlvblRyYWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kXzEgPSBcIm9uZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKFwiX1wiICsgbWV0aG9kXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsT25FcnJvciA9IHdpbmRvd1ttZXRob2RfMV07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbbWV0aG9kXzFdID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVkID0gb3JpZ2luYWxPbkVycm9yICYmIG9yaWdpbmFsT25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W1wiX1wiICsgbWV0aG9kXzFdKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcEluc2lnaHRzTW9kdWxlLCBcImFwcEluc2lnaHRzSW5zdGFuY2VcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBbmRTZXR1cDogQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvc2luZyBpdCBmb3IgdW5pdCB0ZXN0cyBvbmx5LCBub3QgcGFydCBvZiBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmluZUxhenlNZXRob2RzOiBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lID0gXCJhcHBJbnNpZ2h0c1wiO1xyXG4gICAgICAgIHJldHVybiBBcHBJbnNpZ2h0c01vZHVsZTtcclxuICAgIH0oKSk7XHJcbiAgICBleHBvcnRzLkFwcEluc2lnaHRzID0gQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFpLm1vZHVsZS5qcy5tYXAiLCLvu79cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gUmVuYW1lIG1vZHVsZSB0byBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZVxyXG5cclxuXHJcbi8vIDA1LzA0LzIwMTkgMDk6MjYgYW0gLSBTU04gLSBbMjAxOTA1MDQtMDg1NV0gLSBbMDA0XSAtIFRlc3RpbmcgaWYgd2UgY2FuIHJlcGxhY2UgZ2xvYmFsIHZhcmlhYmxlXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG4vLyAwNS8wNC8yMDE5IDA5OjU4IGFtIC0gU1NOIC0gU2luY2UgaGF2aW5nIHRvIGltcG9ydCBhbmd1bGFyIHdoZW4gY29udmVydGluZyB0byBhIG1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzICAgSUNvbHVtbkJhZ1RlbXAgZnJvbSAnLi9JQ29sdW1uQmFnJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIF9kZXZTaXRlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvZGVtb3NpdGVzYXBpJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmNvcHkocmVzdWx0LmRhdGEsIF9kZXZTaXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE5LzIwMTkgMDI6MDAgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQ3JlYXRlZCAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyNiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDRdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcbiAgICAgICAgICAgIHZhciBfVGltZWxvZ1JlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9SZWZyZXNoUmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzEyLzIwMTkgMTE6MjYgYW0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhXHJcblxyXG4gICAgICAgICAgICB2YXIgX2luc2VydFRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAzOjAwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwNF0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgdmFyIF9hZGRPclVwZGF0ZVRpbWVMb2cgPSBmdW5jdGlvbiAodGltZUxvZykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA5OjE0IGFtIC0gU1NOIC0gUGFzcyBwcm9qZWN0SWRcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkICsgXCI/cHJvamVjdElkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBjb2x1bW5CYWcuZmtfZmlsdGVyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXRhU2VydmljZXMgLSAyMDE5MDkzMC0xOTA3IC0gZ2V0Sm9iIFtcIiArIGlkICsgXCJdXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRldlNpdGVzOiBrby5vYnNlcnZhYmxlKF9kZXZTaXRlcyksXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG5cclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIDIwMTkxMTE2LTA1NTFcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0QXBwTmFtZSB0eXBlIGFuZCBuYW1lIFsnLCB0eXBlb2YgKGRlZmF1bHRBcHBOYW1lKSwgJ10gWycsIGRlZmF1bHRBcHBOYW1lLCAnXScpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gTmVlZGVkIHRvIGJlIGFibGUgdG8gc3VibWl0IGZvcm1cclxuICAgICAgICAgICAgdmFyIGZvcm1OYW1lID0gJGF0dHJzWydmb3JtTmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgZm9ybTEgPSAkKFwiW25hbWU9J1wiICsgZm9ybU5hbWUgKyBcIiddXCIpLmdldCgwKTtcclxuICAgICAgICAgICAgdmFyIGFic1VybCA9ICRsb2NhdGlvbi5hYnNVcmwoKS50cmltKCk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAkKGZvcm0xKS5hdHRyKFwiYWN0aW9uXCIsIGFic1VybCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMiA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBzdWJtaXRGb3JtXzJcIilcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMiAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtXzEgPSBmdW5jdGlvbiAoZXZlbnQsIGZvcm0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHN1Ym1pdEZvcm1fMVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIxICQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMSAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjEgJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3ZhbGlkYXRlRHJvcGRvd25MaXN0RGlyZWN0aXZlJywgdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVEcm9wZG93bkxpc3REaXJlY3RpdmVGdW5jKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIsIG5nTW9kZWwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWwuJGFzeW5jVmFsaWRhdG9ycy5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dENoZWNrMiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJGh0dHAsICRxLCAkc2NvcGUsICR0aW1lb3V0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZmlyc3RSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgPSAwO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc0ludmFsaWREcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dCA9IHRydWU7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqIENsZWFudXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKiogQ2xlYW51cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKiBDbGVhbnVwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5mb3JtTmFtZS4kZXJyb3InLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSB3YXRjaGluZyB2bS5mb3JtTmFtZS4kZXJyb3IuaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRDaGVjazIgKDE4NDEpJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZm9ybSBjaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWU6IExvb2t1cFJlY29yZCwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIHdhdGNoaW5nIGZpcmluZyAoMDM0NSknKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNJbnZhbGlkRHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29sZFZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld1ZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZCAxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbmQgMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmlkID4gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kIDNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzSW52YWxpZERyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzVmFsaWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaGl0Q291bnQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXRjb3VudCBcIiwgdm0uaGl0Q291bnQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8ga2V5Q29sdW1uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuZGlzY2lwbGluZWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDQ6NDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iLnByb2plY3RpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWycsIHRoaXMua2V5Q29sdW1uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJywgdGhpcy5rZXlDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFsnLCB0aGlzLmtleUNvbHVtbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleUNvbHVtblZhbHVlID0gJChcIltuYW1lPSdcIiArIHRoaXMua2V5Q29sdW1uICsgXCInXVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZSA9ICg5OTktQSkgLSB0aGlzLmFuZ3VsYXJDb250cm9sSWQnLCB0aGlzLmFuZ3VsYXJDb250cm9sSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgPSAoOTk5LUIpIC0ga2V5Q29sdW1uVmFsdWUgWycsIGtleUNvbHVtblZhbHVlLCAnXScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlWYWx1ZVNlbGVjdGVkID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYgdGhpcy5hbmd1bGFyQ29udHJvbElkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlWYWx1ZVNlbGVjdGVkID0gdGhpcy5hbmd1bGFyQ29udHJvbElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5Q29sdW1uVmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBrZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID09PSB1bmRlZmluZWQgJiYga2V5VmFsdWVTZWxlY3RlZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFh4eCBzZXQgZGVmYWx0XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KGtleVZhbHVlU2VsZWN0ZWQpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFyZSB3ZSBldmVyIHJlYWNoaW5nIHRoaXMgcG9pbnQ/XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSAoeHh4eHgxMDEtQikgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgICBbJywgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCwgJ10nKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBfaXNWYWxpZCA9IHZtLnNldElucHV0VmFyaWFibGVzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5pc1ZhbGlkQm9vbGVhbiA9IF9pc1ZhbGlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqIF9pc1ZhbGlkJywgX2lzVmFsaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5maXJzdFJ1biA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2lzVmFsaWQ7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uc2V0SW5wdXRWYXJpYWJsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfaXNWYWxpZF9sb2NhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmd1bGFyQ29udHJvbElkICE9PSB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5ndWxhckNvbnRyb2xJZCA9IHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB0aGlzLmtleUNvbHVtbiArIFwiJ11cIikudmFsKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFguaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCh0aGlzLmFuZ3VsYXJDb250cm9sSWQpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc1ZhbGlkX2xvY2FsID0gdGhpcy5hbmd1bGFyQ29udHJvbElkID4gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm52bnZudm5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzVmFsaWRfbG9jYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uaXNWYWxpZEJvb2xlYW4gPSBfaXNWYWxpZF9sb2NhbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImlzVmFsaWRCb29sZWFuICgwNTIyKVwiLCB2bS5pc1ZhbGlkQm9vbGVhbilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9pc1ZhbGlkX2xvY2FsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZUVudHJ5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3QgLSB2YWxpZGF0ZUVudHJ5ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0SW5wdXRWYXJpYWJsZXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjMwIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwOF0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkcm9wZG93bkxpc3REaXJlY3RpdmUgLSBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAxOTExMTctMTAyNSAtIDEwMy1BJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFuZ3VsYXJDb250cm9sSWQgPSBkYXRhLmRpc2NpcGxpbmVJZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyAtIDIwMTkxMTE3LTEwMjUgLSAxMDMtQicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLnRhX2lkLCB0aXRsZTogZGF0YS50YV9kZXNjcmlwdGlvbiB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYW5ndWxhckNvbnRyb2xJZCA9IGRhdGEudGFfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDA1OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE2LTAzNTVdIC0gWzAwNl0gLSBBZGRpbmcgSm9iQVBJIGNvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXaGlsZSBkZXZlbG9wbWVudCBpbiBwcm9ncmVzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBpdGVtLmRpc2NpcGxpbmVTaG9ydCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLnRhX2lkLCB0aXRsZTogaXRlbS50YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGFkZHJlc3Nlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8xNi8yMDE5IDAyOjU3IGFtIC0gU1NOIC0gQWRkZWQgdG8gZ2V0IGN1cnJlbnQgdmFsdWUgYW5kIHVwZGF0ZSB2aWV3LlxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50ID0gZnVuY3Rpb24gKGxvb2t1cElEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gZ2V0RGlzY2lwbGluZUN1cnJlbnQgWFhYWFhYWFggWycsIGxvb2t1cElELCAnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwSUQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybCArIFwiL1wiICsgbG9va3VwSURcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyB2bS5pc1ZhbGlkKCk7IH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyB2bS5pc1JlYWR5ID0gdHJ1ZTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvRHJvcGRvd25MaXN0L0Ryb3BEb3duTGlzdERpcmVjdGl2ZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBbJyRodHRwJywgJyRxJywgJyRzY29wZScsICckdGltZW91dCcsIGNvbnRyb2xsZXJdLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBrZXlDb2x1bW46IFwiQGtleVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIiwgLy8gTmVlZGVkIGZvciBwb3N0aW5nIGZvcm0gKFJlcGxhY2luZyB1cmwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQ29udHJvbElkOiBcIj0/YWNpXCJcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA2OjAyIHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuICAgICAgICAvLyBSZXZpc2VkIHNvIHdlIGNhbiBwYXNzIGluIGRlZmF1bHQgYXBwbGljYXRpb24gbmFtZSBmb3IgbW9kdWxlLlxyXG4gICAgICAgIC8vICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGU6IGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZSxcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG5cclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yMS8yMDE5IDA1OjUwIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwM10gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIFRpbWVsb2dfU2VydmluZ1BhZ2UgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBJU2NvcGUgfSBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX2xvY2FsIGV4dGVuZHMgSVNjb3BlIHtcclxuXHJcbiAgICBjb250aW51ZV9vcl9saW5lSXRlbV9jYXB0aW9uOiBzdHJpbmcsXHJcbiAgICBzaG93Q2xvY2tvdXRPcHRpb246IGJvb2xlYW5cclxufVxyXG5cclxuXHJcbnZhciBUaW1lbG9nTGlua09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGltZWxvZ0xpbmtPcHRpb25zIC0gMjAxOTExMjEtMDU1NC1CXCIpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdEFwcE5hbWUgdHlwZSBhbmQgbmFtZSBbJywgdHlwZW9mIChkZWZhdWx0QXBwTmFtZSksICddIFsnLCBkZWZhdWx0QXBwTmFtZSwgJ10nKTtcclxuXHJcblxyXG4gICAgICAgIC8vdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoZGVmYXVsdEFwcE5hbWUsIFtdKTtcclxuICAgICAgICB2YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lbG9nTGlua09wdGlvbnMnLCBkZWZhdWx0QXBwTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCd0aW1lbG9nTGlua09wdGlvbnMnLCBbJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsIGZ1bmN0aW9uICgkdWliTW9kYWwsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVGltZXNoZWV0L1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucy5odG1sXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICAvL2JpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fRWRpdCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZWxvZ0xpbmtPcHRpb25zIC0gWycgKyB0aW1lbG9nSWQgKyAnXSAgT09PT09PT09PT09PT09PT09PJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSAtIHgyMDE5MTExNi0xNjM3IC0gdGltZXNoZWV0Rm9ybV9FZGl0ICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmluZ1BhZ2UnLCBzZXJ2aW5nUGFnZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsRWRpdC5yZXN1bHQudGhlbihtb2RhbEVkaXRfc2F2ZSwgbW9kYWxFZGl0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlIC0geDIwMTkxMTE2LTE2NDAgLSBtb2RhbEVkaXRfc2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDEgLSBtb2RhbEVkaXRfY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQzIC0gdGltZXNoZWV0Rm9ybV9FZGl0IC0gZW5kICcpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA0OjE2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE2MTZdIC0gWzAwMV0gLSBUaW1lc2hlZXQgLSBzdG9wIC8gY29udGludWVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDM6NTQgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmc6ICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAgJ2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgdG8gdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNSAtIG1vZGFsQ2xvY2tvdXQgIC0gYmVnaW4gJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0yIC0gbW9kYWxDbG9ja291dF8xICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTMgLSBtb2RhbENsb2Nrb3V0XzIgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBlbmQgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSAtIDIwMTkxMTE0LTE0NDgnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCAtIDIwMTkxMTE0LTE0NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA4OjQ1IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gSm9iSW5kZXhDb250cm9sbGVyLnRzIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTFdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIC0gV3Jvbmcgd2F5IHRvIGdvIVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAoam9iSUQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfV0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBcIkBcIixcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFNlY29uZHM6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiAnQCcsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6ICdAJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfbG9jYWwsIGVsLCBhdHRycykge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b3RhbFNlY29uZHNfZnJvbUF0dHIgPSBhdHRyc1sndG90YWxTZWNvbmRzJ107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZU9wZW5SZWNvcmQgPSB0b3RhbFNlY29uZHNfZnJvbUF0dHIgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2hvd0Nsb2Nrb3V0T3B0aW9uID0gaGF2ZU9wZW5SZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRpbnVlX29yX2xpbmVJdGVtX2NhcHRpb24gPSAhaGF2ZU9wZW5SZWNvcmQgPyBcIkNvbnRpbnVlXCIgOiBcIkxpbmUgaXRlbVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IFRpbWVsb2dMaW5rT3B0aW9ucyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA0LzEyLzIwMTkgMDE6NDIgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRBcHBfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwNS8wMy8yMDE5IDA2OjMzIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxM10gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgLy8gQ29udmVydCB0byBUU1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0QXBwLWZpbGVuYW1lJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlIGlzIGluIHVzZSBieSBEYXRhU2VydmljZXMuanNcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzozNSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDVdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuICAgIC8vIEluamVjdCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKFwidGltZXNoZWV0Q29udHJvbGxlclwiLCBbJyRzY29wZScsICckdWliTW9kYWwnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnJGNvbXBpbGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWwsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCAkY29tcGlsZSkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTkvMjAxOSAwNjo0MyBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRlZCB0byByZS1iaW5kIG5nLWNsaWNrXHJcblxyXG4gICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIGZ1bmN0aW9uIChldmVudCwgaXRlbSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkxMTIyLTE3NTcnKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMl9pZCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5yZXBsYWNlV2l0aChpdGVtLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tPdXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE0LTE0MzUgLSBtb2RhbENsb2Nrb3V0ICAtIGJlZ2luICcpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsQ2xvY2tvdXQgPSAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJyxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0QXBwIC0gMjAxOTExMTQtMTQzNS0yIC0gbW9kYWxDbG9ja291dF8xICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1LTMgLSBtb2RhbENsb2Nrb3V0XzIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNC0xNDM1IC0gbW9kYWxDbG9ja291dCAgLSBlbmQgJyk7XHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWw/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvc2luZ0hvb2soJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDE5MTExNC0xNDQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDE5MTExNC0xNDQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKVwiLCBjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE0LzIwMTkgMDQ6NDEgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA4XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAgICAgLy8gVGVzdGluZyAtIE5vdCB3b3JraW5nLlxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb2RhbENsb3NpbmdIb29rKCRzY29wZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGFsLmNsb3NpbmcgLSBiZWdpbicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ21vZGFsLmNsb3NpbmcnLCBmdW5jdGlvbiAoZXZlbnQsIHJlYXNvbiwgY2xvc2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGFsLmNsb3Npbmc6ICcgKyAoY2xvc2VkID8gJ2Nsb3NlJyA6ICdkaXNtaXNzJykgKyAnKCcgKyByZWFzb24gKyAnKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJZb3UgYXJlIGFib3V0IHRvIGxlYXZlIHRoZSBlZGl0IHZpZXcuIFVuY2F1Z2h0IHJlYXNvbi4gQXJlIHlvdSBzdXJlP1wiO1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpY2tlZCBvdXRzaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJhY2tkcm9wIGNsaWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFueSBjaGFuZ2VzIHdpbGwgYmUgbG9zdCwgYXJlIHlvdSBzdXJlP1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuY2VsIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjYW5jZWxcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2NhcGUga2V5XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImVzY2FwZSBrZXkgcHJlc3NcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsLmNsb3NpbmcgLSBlbmQnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnNob3dDcmVhdGVUaW1lc2hlZXRGb3JtID0gZnVuY3Rpb24gKGpvYklEKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGlzTmFOKGpvYklEKSkge1xyXG4gICAgICAgICAgICAgICAgam9iSUQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA0OjEwIHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG5cclxuXHJcbiAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2MzcgLSB0aW1lc2hlZXRGb3JtX0VkaXQgJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbW9kYWxFZGl0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLCAgLy8gdXNpbmcgc2FtZSBodG1sXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbEVkaXQucmVzdWx0LnRoZW4obW9kYWxFZGl0X3NhdmUsIG1vZGFsRWRpdF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxFZGl0X3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDAgLSBtb2RhbEVkaXRfc2F2ZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpXCIsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGVldEFwcCAtIDIwMTkxMTE2LTE2NDEgLSBtb2RhbEVkaXRfY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKClcIiwgY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hlZXRBcHAgLSAyMDE5MTExNi0xNjQzIC0gdGltZXNoZWV0Rm9ybV9FZGl0IC0gZW5kICcpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMl0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTAxNDJdIC0gVGltZXNoZWV0QXBwXHJcblxyXG4vLyAwOS8xOC8yMDE5IDExOjEzIGFtIC0gU1NOIC0gWzIwMTkwOTE4LTA5NDNdIC0gWzAwOF0gLSBBZGRpbmcgam9iIHN0YXR1cyBvcHRpb24gdG8gaW5kZXhcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMDkvMzAvMjAxOSAwNjo1NiBwbSAtIFNTTiAtIChJbmplY3Qgam9iSWQpXHJcbiAgICAvLyAxMS8yOC8yMDE5IDAyOjU4IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTAyNDddIC0gWzAwMl0gLSBDbG9jay1pbiBub3Qgc2F2aW5nIC0gQWRkIGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdqb2JJZCcsXHJcbiAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgam9iSWQpIHtcclxuIFxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgZmVlZGJhY2tcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRKb2Ioam9iSWQpLnRoZW4oZ2V0Sm9iU3VjY2VzcywgZ2V0Sm9iRXJyb3IpLmNhdGNoKGdldEpvYkNhdGNoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYlN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuam9iID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5qb2JUaXRsZSA9IGRhdGEuam9iVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmpvYi5wcm9qZWN0LnByb2plY3RUaXRsZSA9IGRhdGEucHJvamVjdC5wcm9qZWN0VGl0bGU7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVzaGV0Q29udHJvbGxlciAtIGdldEpvYlN1Y2Nlc3MgIC0gIDIwMTkwOTMwLTIxMDYtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lc2hldENvbnRyb2xsZXIgLSBnZXRKb2JTdWNjZXNzICAtICAyMDE5MDkzMC0yMTA2LUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogMCwgdGl0bGU6ICcnIH07XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1pblwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgIC8vIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0ge1xyXG4gICAgICAgICAgICAgICAgdGltZUxvZ0lkOiAwLFxyXG4gICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IHRpbWVOb3csXHJcbiAgICAgICAgICAgICAgICB3b3JrRGV0YWlsOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZGlzY2lwbGluZUlkOiAnMicsXHJcbiAgICAgICAgICAgICAgICBqb2JJZDogam9iSWRcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS50aW1lTG9nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5kaXNjaXBsaW5lSWQgPSAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmlkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtaW5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDAyOjQ3IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTAyNDddIC0gWzAwMV0gLSBDbG9jay1pbiBub3Qgc2F2aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgZmVlZGJhY2tcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTMvMjAxOSAxMTowMCBhbSAtIFNTTiAtIFsyMDE5MDQxMy0xMDM3XSAtIEFkZCBkaXNjaXBsaW5lIGxvb2t1cFxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuICAgICAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDQ6MTYgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA2XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAgICAgICAgICAgICAvLyBmcm9tICAgdXJsOiAgJ2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG4gICAgICAgICAgICAgICAgLy8gICB0byAgIHVybDogJy9hcGkvRGlzY2lwbGluZUFQSSdcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL0Rpc2NpcGxpbmVBUEknXHJcblxyXG4gICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzc2VzID0gW107XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbmd1bGFyIC0gZm9yRWFjaCAtIDIwMTkwOTIwLTA3MjAtb1wiKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNi8yMDE5IDA0OjQ3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwM10gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuLy8gQ29waWVkIGZyb20gVGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTkvMjAxOSAxMjo0OCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRpbmcgJGNvbXBpbGUgZm9yIGR5bmFtaWNhbGx5IGxvYWRlZCB2aWV3XHJcbiAgICAvLyAxMS8yMi8yMDE5IDAyOjE4IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgLy8gSW5qZWN0aW5nIFNlcnZpbmdwYWdlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAndGltZWxvZ0lkJywgJyR0aW1lb3V0JywgJyRyb290U2NvcGUnLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDA0OjAzIHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwNl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbiAgICAgICAgLy8gUmVtb3ZlIGZ1bmN0aW9uIG5hbWVcclxuICAgICAgICAvLyAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCAkdGltZW91dCwgJHJvb3RTY29wZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHRpbWVsb2dJZCwgJHRpbWVvdXQsICRyb290U2NvcGUsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuICAgICAgICAgICAgfSwgNjAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkVkaXQgW1wiICsgc2VydmluZ1BhZ2UgKyAnXSc7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNldFN0b3BUaW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIC8vdGltZU5vdy5zZXRTZWNvbmRzKDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTIgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YTIpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhMjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUudGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OClcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ5Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OSlcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDEgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gYW5ndWxhci5jb3B5KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XSAtIEJlZ2luXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlkX3RlbXAgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZDtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VydmluZ1BhZ2UgNSBcIiwgc2VydmluZ1BhZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLkpvYl9UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZChpZF90ZW1wLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIHRvIHJlZnJlc2ggcGFnZSAqKioqKiAyMDE5MTEyMi0xOTQ5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIG1hdGNoIGZvciBzZXJ2aW5nUGFnZSB0byByZWZyZXNoIHBhZ2UgKioqKiogMjAxOTExMjItMTk0OScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgdG8gcmVmcmVzaCBwYWdlICoqKioqIDIwMTkxMTIyLTE5NDknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfUmVmcmVzaCcsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdIC0gRW5kXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICRodHRwKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgICB1cmw6ICdhcGkvRGlzY2lwbGluZUFQSSdcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAvLyAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIGFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlc29sdmUoYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGRlZmVycmVkLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbi8vIFJlZmFjdG9yIC0gVGltZWxvZyBvbmx5XHJcblxyXG5pbXBvcnQgeyB0aW1lc2hlZXRBcHBfaW5zdGFuY2UgfSBmcm9tICcuL1RpbWVzaGVldEFwcCc7XHJcbmltcG9ydCB7IHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL1RpbWVzaGVldENvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNvbnRpbnVlY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyJztcclxuXHJcblxyXG4vLyAxMS8xNi8yMDE5IDA0OjU3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuaW1wb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXInO1xyXG5cclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMnO1xyXG5cclxuXHJcblxyXG52YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgIC8vIDExLzIxLzIwMTkgMDY6NDUgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA3XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICBUaW1lbG9nTGlua09wdGlvbnMuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHBfVGltZXNoZWV0Q29udHJvbGxlcjtcclxuXHJcbiAgICB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG5cclxuICAgIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG4gICAgdGltZXNoZWV0QXBwX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuXHJcbiAgICB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9TZXR1cCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA5LzIxLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDAxXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxuLy8gMTEvMDkvMjAxOSAxMjowNSBwbSAtIFNTTiAtIEFkZGVkIENoYW5nZU1vbml0b3JcclxuLy8gMTEvMTQvMjAxOSAwMzoyMCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDRdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbi8vaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yJztcclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6NDAgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAyXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuaW1wb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1BhZ2VVcGRhdGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gJ3RpbWVzaGVldEFwcCc7XHJcblxyXG4gXHJcblxyXG4vL0NoYW5nZU1vbml0b3JfVXRpbFxyXG5jaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5QYWdlVXBkYXRlcl9JbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4vLyAxMS8xNi8yMDE5IDA2OjI3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcbi8vIDExLzI1LzIwMTkgMTE6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMjE1M10gLSBbMDA1XSAtIEpvYiBjcmVhdGUgLSBSZXBsYWNlIGRyb3Bkb3duIHdpdGggZHJvcGRvd25MaXN0RGlyZWN0aXZlXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Ryb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG51bGwpOyAvLyBPcmlnaW5hbCBlbnRyeSBmb3IgdGltZWxvZyBlZGl0XHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChudWxsKTsgLy8gT3JpZ2luYWwgZW50cnkgZm9yIHRpbWVsb2cgZWRpdFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobnVsbCk7IC8vIE9yaWdpbmFsIGVudHJ5IGZvciB0aW1lbG9nIGVkaXRcclxuXHJcblxyXG5kcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjMvMjAxOSAwODo1NiBhbSAtIFNTTlxyXG5SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTAvMDEvMjAxOSAxMTowOSBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDddIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcbmNvbnNvbGUubG9nKFwiVGltZXNoZWV0X21haW4gLSAyMDE5MTAwMS0xMTEwXCIpO1xyXG5cclxuXHJcbkFwcEluc2lnaHRzX1V0aWwuZG9TZXR1cCgpO1xyXG5cclxuXHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJUaW1lc2hlZXRfbWFpblwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEwMDEtMTExMi1DXCIsIE1lc3NhZ2U6IFwiTG9hZGluZyB0aW1lc2hlZXRfbWFpblwiIH0pO1xyXG5BcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTExMDUtMDUwM1wiLCBNZXNzYWdlOiBcIkxvYWRpbmcgdGltZXNoZWV0X21haW5cIiB9KTtcclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbi8vIFJlZmFjdG9yIC0gVGltZWxvZyBvbmx5XHJcblxyXG5pbXBvcnQgKiBhcyB4IGZyb20gJy4vVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seSc7XHJcblxyXG54LmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG4vLyAwNS8xOS8yMDE5IDEyOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwM10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbi8vIDA5LzIxLzIwMTkgMTE6NTIgYW0gIC0gU1NOIC0gVXBncmFkaW5nIHRvIHVzZSBCYWJlbC9XV2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIC8vIDA1LzE5LzIwMTkgMTA6MDYgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA2XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICAvLyAxMS8xNi8yMDE5IDAyOjUyIHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwM10gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgIC8vIEluamVjdCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIC8vIDExLzIwLzIwMTkgMDQ6NDMgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAzXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuICAgIC8vIEluamVjdCBQYWdlVXBkYXRlclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yNS8yMDE5IDA2OjM5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE4MDNdIC0gWzAwM10gLSBjbG9jay1vdXQgaXMgbm90IHVwZGF0aW5nIGluZGV4IHJvd1xyXG4gICAgLy8gQWRkZWQgc2VydmluZ1BhZ2VcclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgJ3NlcnZpbmdQYWdlJyxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udHJvbGxlcigkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCBQYWdlVXBkYXRlclNlcnZpY2UsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMzowOCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDRdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjUxIHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2coJHJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2stb3V0XCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE2LzIwMTkgMDI6NDggcG0gLSBTU04gLSBbMjAxOTExMTYtMTQxOV0gLSBbMDAyXSAtIEFkZCBSb3dWZXJzaW9uICB0byBUaW1lbG9nLlxyXG4gICAgICAgICAgICAvLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5zdG9wVGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEyID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhMik7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGEyO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgwMzA3KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI3Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDYpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MSA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXIgLSAyMDE5MTEyMC0wNDIzIC0gdGltZWxvZ19pbmRleCB1cGRhdGUgWycsICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkLCAnXScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI1LzIwMTkgMDY6MzggcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAyXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVVwZGF0ZXJTZXJ2aWNlLnRpbWVsb2dfaW5kZXgoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsIHNlcnZpbmdQYWdlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVzdDIgPSBlcnJvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAwNS8xOS8yMDE5IDA5OjQ1IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNV0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuLy8gQ29waWVkIGZyb20gQ2xvY2tvdXQuXHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG52YXIgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzowNyBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDJdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQWRkaW5nIENoYW5nZU1vbml0b3JTZXJ2aWNlJyk7XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJyR0aW1lb3V0JywgJ3RpbWVsb2dJZCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsIHRpbWVsb2dJZCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDb250aW51ZSAvIExpbmUgSXRlbVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTkgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDEwXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCA9IFwiMTVcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkYXRhMiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMjo0MSBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDNdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgVGltZUxvZ0lkID0gMFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cudGltZUxvZ0lkID0gMDtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDcvMDIvMjAxOSAwOToxNyBhbSAtIFNTTiAtIEFkZGVkIG51bGxpZnkgZGF0ZU1vZGlmaWVkIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDA3OjMxIGFtIC0gU1NOIC0gRm9yZ290dGVuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBhbmd1bGFyLmNvcHkoJHNjb3BlLnRpbWVMb2cpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmdldERpc2NpcGxpbmVzKGRhdGEyLmRpc2NpcGxpbmUuZGlzY2lwbGluZVNob3J0KTtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkID0geyBpZDogZGF0YTIuZGlzY2lwbGluZS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhMi5kaXNjaXBsaW5lLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlciAtIHN1Ym1pdEZvcm0gLSAoMTAxKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5kaXNjaXBsaW5lSWQgPSAkc2NvcGUuZGlzY2lwbGluZVNlbGVjdGVkLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMTo1NiBhbSAtIFNTTiAtIFRlc3RlZCBPSy5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QxID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGFuZ3VsYXIuY29weSgkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIlJlY29yZCBhZGRlZC4gIFJlbG9hZGluZyBwYWdlLi4uXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMTI6NTQgcG0gLSBTU04gLSBSZWxvYWQgcGFnZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1NyBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMDldIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBhZGQgcmVjb3JkLiBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwNTowOSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMTBdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoZmFsc2UpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2FwaS9EaXNjaXBsaW5lQVBJJ1xyXG5cclxuICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShhZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuXHJcblxyXG5cclxudmFyIEFwcEluc2lnaHRzX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdGlvbkluc2lnaHRzX21vbml0b3IgLSAyMDE5MTAwMS0wOTUxIC0gMDAxLUIgLSB0b3AgaW5zdGFuY2UnKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIjIwMTkxMDMxLTA1NDctMDAxLTAwMlwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVudmlyb25tZW50KTtcclxuXHJcblxyXG5cclxuICAgIHZhciBjb25maWcgPSB7XHJcblxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogZW52aXJvbm1lbnQuYXBwSW5zaWdodHMuaW5zdHJ1bWVudGF0aW9uS2V5XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGF2ZUluc3RydW1lbnRhdGlvbktleSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZy5pbnN0cnVtZW50YXRpb25LZXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIUFwcEluc2lnaHRzLmNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwSW5zaWdodHMuZG93bmxvYWRBbmRTZXR1cCh0aGlzLmNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMC8xMS8yMDE5IDA0OjU0IHBtIC0gU1NOIC0gQWRkZWQgY2hlY2tcclxuICAgICAgICAgICAgaWYgKGhhdmVJbnN0cnVtZW50YXRpb25LZXkoKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAoY29uZmlnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbnN0cnVtZW50YXRpb25LZXkgaXMgbm90IHNldCAgLSAgMjAxOTEwMTEtMTY1NCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljdGlvbkluc2lnaHRzX01vbml0b3IgLSBkb1Rlc3QnKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgcGFnZSB2aWV3ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgXCJGaXJzdFBhZ2UtMjAxOTEwMDEtMTAxNVwiLCAvKiAob3B0aW9uYWwpIHBhZ2UgbmFtZSAqL1xyXG4gICAgICAgICAgICBudWxsLCAvKiAob3B0aW9uYWwpIHBhZ2UgdXJsIGlmIGF2YWlsYWJsZSAqL1xyXG4gICAgICAgICAgICB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgLyogKG9wdGlvbmFsKSBkaW1lbnNpb24gZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICB7IG1lYXN1cmVtZW50MTogMSB9LCAvKiAob3B0aW9uYWwpIG1ldHJpYyBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIDEyMyAvKiBwYWdlIHZpZXcgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgZXZlbnQgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KFwiVGVzdEV2ZW50LTIwMTkxMDAxLTEwMTZcIiwgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIHsgbWVhc3VyZW1lbnQxOiAxIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGxvZ1BhZ2VWaWV3ID0gZnVuY3Rpb24gKG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55LCBkdXJhdGlvbj86IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nUGFnZVZpZXcnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgdXJsLCBwcm9wZXJ0aWVzKTtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcobmFtZSwgdXJsLCBwcm9wZXJ0aWVzKTsvLywgbWVhc3VyZW1lbnRzLCBkdXJhdGlvbik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFdmVudCA9IGZ1bmN0aW9uIChuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM/OiBhbnksIG1lYXN1cmVtZW50cz86IGFueSkge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY3Rpb25JbnNpZ2h0c19Nb25pdG9yIC0gbG9nRXZlbnQnKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQobmFtZSwgcHJvcGVydGllcywgbWVhc3VyZW1lbnRzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V4Y2VwdGlvbiA9IGZ1bmN0aW9uIChleGNlcHRpb246IEVycm9yLCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljdGlvbkluc2lnaHRzX01vbml0b3IgLSBsb2dFeGNlcHRpb24gJyk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5jb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0c19tb25pdG9yIC0gMjAxOTEwMDEtMDk1MSAtIFpaWiAtIGJvdHRvbSBmaWxlIE9PT09PT09PT09PT09PT09PT09PT09PT09PT09PICcpO1xyXG5cclxuZXhwb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzA5LzIwMTkgMTE6MDMgYW0gLSBTU04gLSBDcmVhdGVkXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAyOjI2IHBtIC0gU1NOIC0gQ3JlYXRlIGNsYXNzIGZvciBoYXZlQ2hhbmdlc1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcbnZhciBDaGFuZ2VNb25pdG9yX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNldEl0ZW1DaGFuZ2VkX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDExLzA5LzIwMTkgMDg6MDggYW0gLSBTU04gLSBBZGRlZCBtb25pdG9yQ2hhbmdlX1NTTlxyXG4gICAgdmFyIG1vbml0b3JDaGFuZ2VfU1NOID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoelt5XS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoelt5XS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fCBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMTEvMjUvMjAxOSAwMjoyNyBwbSAtIFNTTiAtIEFkZGVkXHJcbiAgICAgICAgaWYgKG9iajEubm9DaGFuZ2VNb25pdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvYmoxLmlkICYmICFvYmoxLm5hbWUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfdjAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvciAtIHNldHVwTW9uaXRvcicpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGlzQ2hyb21lID0gZ2V0QnJvd3Nlck5hbWUoKSA9PT0gJ2Nocm9tZSc7XHJcblxyXG4gICAgICAgIGlmICh0cnVlKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZSAtIGJlZm9yZVVubG9hZCBvbicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIllvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gQ2Fubm90IHVzZSB3aXRoIENocm9tZVxyXG4gICAgICAgICAgICBpZiAoIWlzQ2hyb21lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY29uZmlybWF0aW9uTWVzc2FnZSA9IFwiXFxvL1wiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAoZSB8fCB3aW5kb3cuZXZlbnQpLnJldHVyblZhbHVlID0gY29uZmlybWF0aW9uTWVzc2FnZTsgICAgIC8vR2Vja28gKyBJRVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIigyKSBZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDExLzA1LzIwMTkxIDA0OjUzIGFtIC0gU1NOIFxyXG4gICAgLy8gTmVlZCB0byBwcmV2ZW50IHVzZXJzIGZyb20gbmF2aWdhdGluZyBhd2F5IGZyb20gQW5ndWxhciBiYXNlZCBwYWdlcyB3aXRoIHBlbmRpbmcgY2hhbmdlcy5cclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ4MTgyOTEyL2hvdy10by1kZXRlY3QtYnJvd3Nlci13aXRoLWFuZ3VsYXJcclxuICAgIHZhciBnZXRCcm93c2VyTmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc3QgYWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXHJcblxyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2VkZ2UnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdlZGdlJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdvcHInKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5vcHI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29wZXJhJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xICYmICEhKDxhbnk+d2luZG93KS5jaHJvbWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Nocm9tZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZigndHJpZGVudCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2llJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdmaXJlZm94JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZmlyZWZveCc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignc2FmYXJpJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnc2FmYXJpJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3RoZXInO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIE5lZWRlZCBzbyB3ZSBjYW4gY2FsbCBmcm9tIHBvcHVwcy5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQobW9uaXRvckNoYW5nZV9TU04sIDIwMDApO1xyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDEoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIHNldHVwTW9uaXRvcl92MDE6IHNldHVwTW9uaXRvcl92MDEsXHJcbiAgICAgICAgZ2V0QnJvd3Nlck5hbWU6IGdldEJyb3dzZXJOYW1lLFxyXG4gICAgICAgIG1vbml0b3JDaGFuZ2VfU1NOOiBtb25pdG9yQ2hhbmdlX1NTTixcclxuICAgICAgICBzZXRJdGVtQ2hhbmdlZF9zc246IHNldEl0ZW1DaGFuZ2VkX3NzbixcclxuICAgICAgICBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbjogc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24sXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzOiBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3NcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yIC0gMjAxOTExMDktMTExNC1GJyk7XHJcblxyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gZ2V0dGVyICcpO1xyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSApO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXMgO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXQgaGF2ZUNoYW5nZXMoX2hhdmVDaGFuZ2VzICA6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJyxfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNC8yMDE5IDAyOjU5IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwMV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JGbGFnJztcclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yJztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCAnKTtcclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvclNlcnZpY2UgIC0gMjAxOTExMTQtMTUwNSAtIHRvcCBET1NFVFVQJyk7XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSB0b3AgICBJTiAgICBET1NFVFVQJyk7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdDaGFuZ2VNb25pdG9yU2VydmljZScsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZU1vbml0b3JTZXJ2aWNlIGZhY3RvcnkgLSAyMDE5MTExNi0xMzQ4IHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9zZXR1cE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIklub21wbGV0ZSBUZXN0aW5nIHNldHVwTW9uaXRvciBwbHVnZ2VkIGluXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JfVXRpbC5zZXR1cE1vbml0b3JfRnVsbFByb2Nlc3MoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRIYXZlQ2hhbmdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9yZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cE1vbml0b3I6IF9zZXR1cE1vbml0b3IsXHJcbiAgICAgICAgICAgICAgICBnZXRIYXZlQ2hhbmdlczogX2dldEhhdmVDaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IF9yZXNldFxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JTZXJ2aWNlICAtIDIwMTkxMTE0LTE1MDUgLSBib3R0b20gJyk7XHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UsIFRpbWVsb2dfU2VydmluZ1BhZ2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuLy8gMTEvMjAvMjAxOSAwNDoyOSBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDFdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG5cclxuLy8gUmVmYWN0b3IgWzIwMTkxMTIwLTA0MzhdXHJcbnZhciBQYWdlVXBkYXRlcl9JbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBwYWdlVXBkYXRlcl9Nb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1BhZ2VVcGRhdGVyJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgcGFnZVVwZGF0ZXJfTW9kdWxlLmZhY3RvcnkoJ1BhZ2VVcGRhdGVyU2VydmljZScsIFsnJHJvb3RTY29wZScsICdkYXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCBkYXRhU2VydmljZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNjoyOCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDVdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgLy8gQWRkaW5nIHNlcnZpbmdQYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF90aW1lbG9nX2luZGV4ID0gZnVuY3Rpb24gKGlkX3RlbXAsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAxIFsnLCBpZF90ZW1wLCAnXSBzZXJ2aW5nUGFnZSBbJyArIHNlcnZpbmdQYWdlICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDEgWycsIGlkX3RlbXAsICddIHNlcnZpbmdQYWdlIFsnICsgc2VydmluZ1BhZ2UgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1BhZ2VVcGRhdGVyIC0gdGltZWxvZ19pbmRleCAtIDAwMSBbJywgaWRfdGVtcCwgJ10gc2VydmluZ1BhZ2UgWycgKyBzZXJ2aW5nUGFnZSArICddJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIHRpbWVsb2dfaW5kZXggLSAwMDIgJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfU3VjZXNzKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGFnZVVwZGF0ZXIgLSB0aW1lbG9nX2luZGV4IC0gMDAzICcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVsb2dfaW5kZXg6IF90aW1lbG9nX2luZGV4XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfTtcclxuXHJcbmNvbnNvbGUubG9nKCdQYWdlVXBkYXRlciAtIExvYWRlZCcpO1xyXG4iLCLvu79cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5cclxudmFyIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4IFRvcCAtIHNldHVwPz8/Jyk7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nRGVmYXVsdEFwcGxpY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggLSBTZXR1cCAtIG5nRGVmYXVsdEFwcGxpY2F0aW9uIFsnLCBuZ0RlZmF1bHRBcHBsaWNhdGlvbiwgJ10nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHggLSBTZXR1cCAtIGRpcmVjdGl2ZT8/PycpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0RlZmF1bHRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIGRpcmVjdGl2ZSAgKioqKioqKioqKioqKioqKioqKioqKionKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYWxyZWFkeVBvc3RlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RvcmVQb3MsIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUwNDY4Ni9nZXQtcmVsYXRpdmUtcGF0aC1vZi10aGUtcGFnZS11cmwtdXNpbmctamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKC4rXFx3XFwvKSguKykvLCBcIi8kMlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVVcmwoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYWxyZWFkeVBvc3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHdpbmRvdy5zY3JvbGxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPSB7IHVybDogZ2V0UmVsYXRpdmVQYXRoKCksIHBvc1g6IHBvc1gsIHBvc1k6IHBvc1ksIGVsZW1lbnQ6IGVsZW1JbmZvIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMucHVzaChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NYID0gcG9zWDtcclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWSA9IHBvc1k7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQuZWxlbWVudCA9IGVsZW1JbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzW1VSTF9UcmFja19SZWYuY3VycmVudEluZGV4XSA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9VUkxfVHJhY2tfUmVjb3JkKGNyZWF0ZUlmTm90Rm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX3RlbXAgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlSWZOb3RGb3VuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja190ZW1wID0gJ3tcInVybHNcIjpbXX0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrID0gSlNPTi5wYXJzZShVUkxfVHJhY2tfdGVtcCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRSZWxhdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY3VycmVudEluZGV4ID0gMDsgY3VycmVudEluZGV4IDwgVVJMX1RyYWNrLnVybHMubGVuZ3RoOyBjdXJyZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZCA9IFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQ6IGN1cnJlbnRSZWNvcmQsIFVSTF9UcmFjazogVVJMX1RyYWNrLCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXN0b3JlUG9zKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlIC0gIHJlc3RvcmVQb3MgICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IGhpZ2hsaWdodENsaWNrU291cmNlKCk7IH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgVVJMX1RyYWNrLnVybHMuc3BsaWNlKGN1cnJlbnRJbmRleCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUgLSAgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UgICoqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4LTAwMlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieHh4eHh4eHh4eHh4eC0wMDNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEVsZW1lbnQgPSBkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KHgsIHkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRFbGVtZW50OiBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc3BhblRlbXApLmFkZENsYXNzKCdjc3NIaWxpZ2h0MTAxJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmVtb3ZlQWRkZWRDbGFzcyhzcGFuVGVtcCk7IH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSAtIFJlbW92aW5nIGN1cnJlbnQgcmVvY3JkLi4uIDEwMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50IDInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5zcGxpY2UoVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXgpIH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKiBDb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqIENvdW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMC8wMS8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwM10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcblxyXG5cclxuICAgIGFwcEluc2lnaHRzOiB7XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJ2Q5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlMydcclxuICAgICAgICAvLyAxMC8zMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gQWRkZWRcclxuXHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJzI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkMycsXHJcblxyXG4gICAgICAgIC8vIDExLzA3LzIwMTkgMDg6MzQgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIFwiSW5zdHJ1bWVudGF0aW9uS2V5XCI6IFwiZGVsZXRlZFwiLCBcImQ5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlM1wiICxcclxuICAgICAgICAvLyBQUy1GYWJyaWthbVJlc2lkZW5jZXMgLSBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiLFxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59OyIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFscyAqKioqKioqKioqKioqIE5vIGNhc2UgZm9yIGFwcGxpY2F0aW9uIG5hbWUgW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBbMjAxOTA5MjAtMDk1NV0gZ2xvYmFscy50c1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyQXBwLmluc3RhbmNlO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdmFyIGZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBkb0ZhY3RvcnlTZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBfZ2xvYmFscztcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhcHBfZ2xvYmFscyA9IGFuZ3VsYXIubW9kdWxlKCdnbG9iYWxBbmd1bGFyQXBwJywgW10pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGFwcF9nbG9iYWxzLmZhY3RvcnkoXCJnbG9iYWxBbmd1bGFyQXBwVXRpbFwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9UZXN0MTAxID0gZnVuY3Rpb24gKG5hbWVQYXNzZWRJbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA0NScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdHTE9CQUxTIC0gYXN5bmNHcmVldCAtIDUwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0xPQkFMUyAtIGFzeW5jR3JlZXQgLSA1MycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZV92MDAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlX3YwMDI6IGdldEluc3RhbmNlX3YwMDJcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwNjozMiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbmVudW0gVGltZWxvZ19TZXJ2aW5nUGFnZSB7IC8vIFNlcnZpbmdQYWdlIChmb3IgSURFIFNlYXJjaClcclxuXHJcbiAgICBUaW1lbG9nID0gJ1RpbWVsb2cnLFxyXG4gICAgSm9iX1RpbWVsb2cgPSAnSm9iX1RpbWVsb2cnLFxyXG4gICAgUHJvamVjdHNfU2VhcmNoID0gJ1Byb2plY3RzX1NlYXJjaCdcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHZhbHVlOiBUaW1lbG9nX1NlcnZpbmdQYWdlLCBjb21wYXJlVG86IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICByZXR1cm4gY29tcGFyZVRvID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgdGVzdF8xMDMsIFRpbWVsb2dfU2VydmluZ1BhZ2UsIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAwNS8xOS8yMDE5IDAxOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwN10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzIC0gTm8gZXJyb3JzXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvaW5kZXguZC50c1wiIC8+ICAgXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fanF1ZXJ5X21vZGFsLmQudHNcIiAvPlxyXG5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgc2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lMiA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZTInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIGFsZXJ0KCdjbGlja2VkIG1lISBjbWROYW1lIFsnICsgY21kTmFtZSArIFwiXSBwb3B1cC1uYW1lICBbXCIgKyBwb3B1cE5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NtZC1uYW1lJywgY21kTmFtZSwgJ3BvcHVwTmFtZScsIHBvcHVwTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUgJywgalF1ZXJ5T2JqZWN0TmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUyJywgalF1ZXJ5T2JqZWN0TmFtZTIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcIm9wZW4tcG9wdXBcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKHBvcHVwTmFtZSkubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNhZGRTaXRlX1BhZ2VDb250ZW50XCIpLmxvYWQoXCIvdGltZXMvc3RhcnRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAwOTozMyBhbSAtIFNTTiAtIEFkZGluZyBoaWRlIGFuZCBzaG93XHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJoaWRlT2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lLCAnalF1ZXJ5T2JqZWN0TmFtZScsIGpRdWVyeU9iamVjdE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd09iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnYm9keScpLnNjcm9sbHNweSh7IHRhcmdldDogalF1ZXJ5T2JqZWN0TmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihqUXVlcnlPYmplY3ROYW1lKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LWRlZmF1bHQtdGltZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnZhbChjZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LVRvdGFsUGVyaW9kXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDE6MTAgcG0gLSBTU04gLSBBZGRyZXNzaW5nIGVycm9yLiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXSBjYW5ub3QgY29udmVydCB0b3Agc3RyaW5nIHwgbnVtYmVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDExID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZTogc3RyaW5nID0gKDxIVE1MSW5wdXRFbGVtZW50PiQoalF1ZXJ5T2JqZWN0TmFtZSlbMF0pLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBkMTEuZ2V0VGltZSgpLnZhbHVlT2YoKSAtIGQxMi5nZXRUaW1lKCkudmFsdWVPZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMiA9IE1hdGguZmxvb3IoZGVsdGFfMSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgICAgICAvLyBmdW5jdGlvbiBwKHN0cjEsIGxlbiwgY2hhcikge1xyXG4gICAgICAgICAgICB2YXIgcCA9IGZ1bmN0aW9uIChzdHIxLCBsZW4sIGNoYXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBsZW4pIHJldHVybiBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczEgPSBjaGFyLnJlcGVhdChsZW4pICsgc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHMyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDIvMjAxOSAwNzoyNSBwbSAtIFNTTiAtIFsyMDE5MTEwMS0wNTI2XSAtIFswMTNdIC0gQ2hlY2sgbG9naW4gc3RhdHVzXHJcbiAgICAgICAgICAgIC8vIERpZCBub3QgZmluaXNoLlxyXG4gICAgICAgICAgICAvLyBUb2RvLVNTTlxyXG4gICAgICAgICAgICAkKCcubW9kYWwnKS5vbignc2hvdycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzICAtICAyMDE5MTEwMi0xOTMwIC0gU2V0dGluZyBkcmFnZ2FibGUuJylcclxuICAgICAgICAgICAgICAgICQodGhpcykuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLm1vZGFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAwOTo1NiBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDFdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yNC8yMDE5IDExOjIwIHBtIC0gU1NOIC0gRGlzYWJsZVxyXG4gICAgICAgICAgICBpZiAoZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8wMS8yMDE5IDA0OjUyIGFtIC0gU1NOIC0gVXNlIEphdmFTY3JpcHQgb25seVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMTI6MzAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA0XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGEgb2YgbGlzdDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuICAgICAgICAgICAgICAgIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGEsIGN1cnJlbnRJbmRleCwgbGlzdE9iaikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xNy8yMDE5IDA0OjE2IGFtIC0gU1NOIC0gVXBkYXRlIHRvIGV4Y2x1ZGUgaGlnaGxpZ2h0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgJyZsdDsnKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgPGggYW5kIDxuLiBBbHJlYWR5IHNldHVwIGZvciA8aS4gIFNlZSBzaXRlLmNzcy5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMTkgMTE6NTAgYW0gLSBTU04gLSBVcGRhdGUgLSBNYXRjaGVzIHNob3duIGh0dHBzOi8vd3d3LnJlZ2V4dGVzdGVyLmNvbS9cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwoW15pfF4vaXxeaHxeL2h8Xm58Xi9uXSl7MX1bXlxcc3xePl17MX0vZywgJyZsdDskMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLyg8KSgoPyFcXC8/W258aXxoXSkpKC4qPz4pL2csICdcXG4xLS0tXFxuWyQmXVxcbjItLS1cXG5bJDFdXFxuMy0tLVxcblskMl1cXG40LS0tXFxuWyQzXVxcblxcbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIG5vdCBjb3ZlcnJlZCBoMSwgaDIsIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBrbm9ja291dCBpcyBkb2luZyBpdHMgb3duIHRoaW5nIHdoZW4gaXQgY29tZXMgdG8gdGFncy4gRXZpZGVudCB3aXRoIHRoZSB1c2Ugb2YgZ2VuZXJpYyB0eXBlcyAoIGZ1bmN0aW9uPFNvbWVUeXBlPiApXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnJmx0OyQzJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhLmlubmVySFRNTCA9IGI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfcHJlID0gJCh0aGlzKS5wYXJlbnQoKS5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9saW5rID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnU2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlT3V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3ByZS5mYWRlSW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2xpbmsudGV4dCgnSGlkZSBjb2RlJyArIF90aXRsZV9jYXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMDgvMjAxOSAwMTowNCBwbSAtIFNTTiAtIFsyMDE5MTEwOC0xMDQzXSAtIFswMDhdIC0gUGVyc2lzdGluZyBzZWFyY2ggb24gcmV0dXJuIHRvIGluZGV4XHJcbiAgICAgICAgICAgIC8vIFxyXG5cclxuXHJcbiAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5lLnRhcmdldCkuaHJlZiArIFwiJnJldHVyblRvQ2FsbGVyS2V5PVwiICsgcmV0dXJuVG9DYWxsZXJLZXk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTtcclxuXHJcblxyXG4gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICBzZXRUaW1lb3V0KHNpdGVfaW5zdGFuY2UucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcbmNvbnNvbGUubG9nKCdzaXRlIC0gMjAxOTExMTUtMTc0MCAtIHh4eHh4eHh4eHh4Jyk7XHJcbmNvbnNvbGUubG9nKHNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcik7XHJcbmNvbnNvbGUubG9nKGQyKTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjozNyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDNdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM2MTQ2NS9ob3ctdG8tY2hlY2staWYtY2xpY2stZXZlbnQtaXMtYWxyZWFkeS1ib3VuZC1qcXVlcnlcclxuJC5mbi5pc0JvdW5kID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2ZuLmlzQm91bmQtMDI0NScpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aGlzJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmRhdGEoJ2V2ZW50cycpXCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhKCdldmVudHMnKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bmRlZmluZWQgPDw8PDw8PDw8PFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRhdGEgPSB0aGlzLmRhdGEoJ2V2ZW50cycpW3R5cGVdO1xyXG5cclxuICAgIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgtMSAhPT0gJC5pbkFycmF5KGZuLCBkYXRhKSk7XHJcbn07XHJcblxyXG5cclxuXHJcbi8vIDExLzI1LzIwMTkgMDI6MjkgcG0gLSBTU04gLSBbMjAxOTExMjUtMTQxNF0gLSBbMDAyXSAtIFByb2plY3Qgam9icyAtIGZpbHRlciBcclxuXHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlcicpO1xyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMzMzICcpO1xyXG5cclxuXHJcbiAgICBpZiAoJChcIiNmaWx0ZXJUZXh0XCIpLmlzQm91bmQoJ2tleXVwJywgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBib3VuZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNmaWx0ZXJUZXh0XCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2pvYnMgLSBmaXRsZXJUZXh0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKGUpKTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3NpdGUgLSBwcm9qZWN0X2pvYnMgLSBmaWx0ZXIgLSAyJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9