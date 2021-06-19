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

/***/ "./DemoSites_index_main.ts":
/*!*********************************!*\
  !*** ./DemoSites_index_main.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DemoSites_index_p1 */ "./DemoSites_index_p1.js");
/* harmony import */ var _shared_DataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/DataServices */ "./shared/DataServices.js");
/* harmony import */ var _demoSites_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demoSites_Index */ "./demoSites_Index.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util/Logger/ssn_AngularJslogger */ "./Util/Logger/ssn_AngularJslogger.js");
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Util/ChangeMonitor/ChangeMonitorService */ "./Util/ChangeMonitor/ChangeMonitorService.js");
/* harmony import */ var _Technology_Technology__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Technology/Technology */ "./Technology/Technology.js");
/* harmony import */ var _Shared_ModalCallsUtil__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Shared/ModalCallsUtil */ "./Shared/ModalCallsUtil.js");
// 09/21/2019 07:14 am - SSN - [20190921-0357] - [009] - Creating multiple entry for Webpack
var ngApplicationName = 'demoSites_Index';



_shared_DataServices__WEBPACK_IMPORTED_MODULE_1__["dataService_instance"].doSetup(ngApplicationName);
_demoSites_Index__WEBPACK_IMPORTED_MODULE_2__["ssn_devsite_angular_module_instance"].ssn_devsite_angular_module;
_DemoSites_index_p1__WEBPACK_IMPORTED_MODULE_0__["demosites_index_p1_instance"]; // 10/01/2019 10:15 am - SSN - [20191001-0944] - [006] - Adding Application Insights for JavaScript

 // 11/23/2019 08:53 am - SSN 


_Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_4__["RestorePreviousPageState_instance"].doSetup(ngApplicationName, "DemoSites_index_main_20210606_1731");
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__["AppInsights_Util"].doSetup("DemoSies_index_main");
_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_3__["AppInsights_Util"].logEvent("DemoSites_Index_Main", {
  SourceCode: "20191001-1132-C2",
  Message: "Loading DemoSites_Index_Main"
}); // 06/13/2021 09:43 pm - SSN - [20210613-0452] - [020] - Adding tags to DevSite 


_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_5__["dropdownListDirective_instance"].doSetup(ngApplicationName);

_Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_6__["ssn_AngularJslogger"].doSetup('jobIndex_main', ngApplicationName);

_Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_7__["changeMonitorService_instance"].doSetup(ngApplicationName); // 06/15/2021 04:10 am - SSN - [20210613-0452] - [043] - Adding tags to DevSite


_Technology_Technology__WEBPACK_IMPORTED_MODULE_8__["TechnologyController_instance"].doSetup(ngApplicationName);

_Shared_ModalCallsUtil__WEBPACK_IMPORTED_MODULE_9__["ModalCallsUtil"].doSetup("DemoSites_Index_main", ngApplicationName);

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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
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
    self.errorMessage = ko.observable(); // 06/13/2021 08:49 am - SSN - [20210613-0452] - [015] - Adding tags to DevSite

    self.recordsPerPage_KO = ko.observable(3);
    self.currentPage_KO = ko.observable(1);
    self.devSitesCount_KO = ko.observable(-1); // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
    //  this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

    this.devSitesJSON = ko.observableArray([]); // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
    // 06/13/2021 08:44 am - SSN - [20210613-0452] - [014] - Adding tags to DevSite
    // Adding recordsPerPage and currentPage

    this.loadData = function (recordsPerPage, currentPage) {
      var self = this; // 09/09/2019 10:35 pm - SSN - [20190909-2136] - [005] - Select top 15
      // $.getJSON("/api/demositesapi", function (data) {
      // $.getJSON("/api/demositesapi/top?recordCount=15", function (data) {

      $.getJSON("/api/demositesapi/" + recordsPerPage + "/" + currentPage, function (data) {
        self.devSitesJSON.removeAll();
        self.devSitesJSON(data);
        document.querySelector('#topTitle').scrollIntoView({
          behavior: 'smooth'
        });
      });
      $.getJSON("/api/demositesapi/recordcount", function (data) {
        self.devSitesCount_KO(data);
      }).fail(function (response) {
        console.log('demositesapi - System error - 20210613-1036');
        console.error(response);
        self.SearchResultsFeedback_KO('System failure.');
        self.SearchResultsFeedback_ClassName_KO("alert alert-danger");
      });
    }; // 08/16/2019 04:25 pm - SSN - [20190816-1625] - [001] - Correct logic for getting record count to show no search results message


    this.getRecordCount = function () {
      var recordCount = self.devSitesJSON().length; // self.devSitesJSON

      return recordCount;
    }; // 06/13/2021 09:00 am - SSN - [20210613-0452] - [016] - Adding tags to DevSite


    this.onFirstPageKnockout = function () {
      return self.currentPage_KO() == 1;
    };

    this.onLastPageKnockout = function () {
      return self.currentPage_KO() >= self.totalPageCount();
    };

    this.totalPageCount = function () {
      return Math.ceil(self.devSitesCount_KO() / self.recordsPerPage_KO());
    };

    this.displayCurrentPageNumberAndTotalPages = function () {
      var currentPage = self.currentPage_KO();
      var totalPageCount = self.totalPageCount();
      return "Page " + currentPage + " of " + totalPageCount;
    };

    this.getCurrentPage = function () {
      return self.currentPage_KO();
    };

    this.prevDevSitePage = function () {
      var currentPage = self.currentPage_KO();
      currentPage = currentPage-- < 1 ? 1 : currentPage;
      self.currentPage_KO(currentPage);
      self.loadData(self.recordsPerPage_KO(), self.currentPage_KO());
      self.applyDisplayRequirements();
      self.updateAngularJSParts();
    };

    this.nextDevSitePage = function () {
      var currentPage = self.currentPage_KO();
      currentPage = currentPage++ > self.totalPageCount() ? self.totalPageCount() : currentPage;
      self.currentPage_KO(currentPage);
      self.loadData(self.recordsPerPage_KO(), self.currentPage_KO());
      self.applyDisplayRequirements();
      self.updateAngularJSParts();
    }; // 06/15/2021 12:13 am - SSN - [20210613-0452] - [037] - Adding tags to DevSite


    this.updateAngularJSParts = function () {
      setTimeout(function () {
        var _element = angular__WEBPACK_IMPORTED_MODULE_1__["element"]($("[dev-site-tags-compiler]"));

        var scope_temp = _element.scope();

        scope_temp.$broadcast("call_devSiteTagsCompiler", {
          msg: 'doRecompileList'
        });
      }, 1000);
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
      self.currentPage_KO(1);
      self.loadData(self.recordsPerPage_KO(), self.currentPage_KO());
      self.applyDisplayRequirements();
      self.updateAngularJSParts();
    }; // 06/14/2021 03:46 pm - SSN - [20210613-0452] - [028] - Adding tags to DevSite


    this.applyDisplayRequirements = function () {
      if (!self.prefixPreWithShowHideAnchor_DontCall_KO()) {
        setTimeout(function () {
          return _js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].prefixPreWithShowHideAnchor('20200102-1533');
        }, 2000);
      } else {
        // 08/21/2019 01:48 pm - SSN - [20190821-1348] [001] - Added
        setTimeout(_js_site__WEBPACK_IMPORTED_MODULE_0__["site_instance"].showCollapsedDivs, 2000);
      }
    }; // 08/12/2019 05:57 am - SSN - [20190812-0515] - [005] - Apply fulltext search
    // https://stackoverflow.com/questions/16245905/fetching-or-sending-data-from-a-form-using-knockout-js
    //self.onSubmit = function () {


    this.onSubmitDemoSiteSearch = function () {
      var searchText = self.SearchText_KO();
      self.SearchResultsFeedback_KO('');
      self.SearchResultsFeedback_ClassName_KO('');
      self.devSitesCount_KO(-2);

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
      }

      var data_pre = {
        "SearchText": self.SearchText_KO()
      };
      var data = JSON.stringify(data_pre);
      $.ajax({
        type: "POST",
        data: data,
        url: "/api/demositesapi/Search",
        contentType: "application/json",
        dataType: 'json'
      }).done(function (response) {
        self.devSitesJSON.removeAll();
        self.devSitesJSON(response);
        self.SearchResultsFeedback_KO('');
        self.SearchResultsFeedback_ClassName_KO("");

        if (response.length === 0) {
          self.SearchResultsFeedback_KO('Search returned no records.');
          self.SearchResultsFeedback_ClassName_KO("alert-warning");
        }

        self.applyDisplayRequirements();
        self.updateAngularJSParts();
      }).fail(function (response) {
        // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch
        console.log('demositesapi Search filaure - 20210422-1422');
        console.info(data);
        console.error(response);
        var errorMessage = 'Search failure. ';

        if (response.responseJSON['Exception:Message']) {
          errorMessage += " Error from server: [" + response.responseJSON['Exception:Message'] + "]";
        }

        self.SearchResultsFeedback_KO(errorMessage);
        self.SearchResultsFeedback_ClassName_KO("alert alert-danger");
        self.devSitesJSON.removeAll();
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
  vm.loadData(vm.recordsPerPage_KO(), vm.currentPage_KO());
}();

var stringStartsWith = function stringStartsWith(string, startsWith) {
  string = string || "";
  if (startsWith.length > string.length) return false;
  return string.substring(0, startsWith.length) === startsWith;
};



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
/* harmony import */ var _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownListDirectiveConstants */ "./DropdownList/DropdownListDirectiveConstants.js");
/* harmony import */ var _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Broadcast_Identifers */ "./Shared/Broadcast_Identifers.js");
// 09/13/2019 05:48 am - SSN - [20190913-0548] - [001] - Crate generic dropdown list directive
/// <reference path="../../../node_modules/@types/jquery/jquery.d.ts" /> 
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference path="../shared/DataServices.ts"/>
// 09/20/2019 10:52 am - SSN - Added import angular
 // 09/20/2019 10:21 am - SSN - Replace angular.module



 // Add autofocus="true" to set focus

var dropdownListDirective_instance = function () {
  var doSetup = function doSetup(defaultAppName) {
    if (typeof defaultAppName != "string") {
      defaultAppName = "demoSites_Index_Timesheet";
    }

    var downdownList_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('DropdownListDirective', defaultAppName, ['ui.bootstrap']); // Used for scroll page when form is invalid, on submit.

    var utilityController_objectRef = downdownList_angular_module.controller('utilityController', ['$scope', '$attrs', '$location', 'ssn_logger', function ($scope, $attrs, $location, ssn_logger) {
      $scope.submitForm_1 = function (event, form) {
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
        controller: function controller($scope) {
          $scope.$on('$destroy', function () {//   console.log('%c ' + 'Destroy dropdownListDirectiveInputBox - 20210614-2154', 'color:red;font-size:14pt;');
          });
        },
        // 06/07/2021 02:04 am - SSN - [20210606-0227] - [014] - Testng for deployment
        // We are using this for adding new items to master.
        link: function link(scope, elem, attr, ngModel_ctrl) {
          var dropdownListDirectiveInputBoxInverse = attr["dropdownListDirectiveInputBoxInverse"];
          var keyColumn = attr["keyColumn"];
          console.log('%c dropdownListDirectiveInputBox link - 20210617-1916', 'color:yellow;font-size:14pt;');
          console.log('dropdownListDirectiveInputBoxInverse:');
          console.log(dropdownListDirectiveInputBoxInverse);
          console.log('keyColumn:');
          console.log(keyColumn); //console.log(`%c 20210610-2118 dropdownListDirectiveInputBoxInverse [${dropdownListDirectiveInputBoxInverse}]`, 'color:blue;font-size:20pt;');
          //console.log(attr);

          elem.bind('blur', function (event) {
            console.log('%c dropdown blur - 20210617-1805 ', 'color:yellow;font-size:10pt;');
            console.log('ngModel_ctrl.$modelValue');
            console.log(ngModel_ctrl.$modelValue);
            console.log('ngModel_ctrl.$viewValue');
            console.log(ngModel_ctrl.$viewValue);
            console.log('ngModel_ctrl');
            console.log(ngModel_ctrl); //  This updates the view to reflect the new item but does not update the typeahead source. ("No results found" is displayed)

            if (ngModel_ctrl.$modelValue) {
              //console.log('%c dropdown blur - setting $setViewValue 20210618-0340-aaaa', 'color:yellow;font-size:14pt;');
              ngModel_ctrl.$setViewValue(ngModel_ctrl.$modelValue);
            } else {
              console.log('%c dropdown blur - NOT setting modelValue 20210618-0340', 'color:RED;font-size:14pt;');
            }

            if (dropdownListDirectiveInputBoxInverse && dropdownListDirectiveInputBoxInverse == "true") {
              console.log("%c  20210617-1901 - dropdownListDirectiveInputBoxInverse [" + dropdownListDirectiveInputBoxInverse + "]", 'color:yellow;font-size:12pt'); // 06/18/2021 06:43 pm - SSN - Change $modelValue to $modelValue.id (edit timesheet)
              // scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CONSTANTS.UPDATE_HIDDEN_KEY_VALUE, keyColumn: keyColumn, keyValue: ngModel_ctrl.$ModelValue });

              scope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
                msg: _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_HIDDEN_KEY_VALUE,
                callSource: '20210618-1858',
                keyColumn: keyColumn,
                keyValue: ngModel_ctrl.$modelValue.id
              });
              console.log('incomplete');
              console.log('incomplete');
              console.log('incomplete');
              console.log('incomplete');
              console.log('incomplete');
            }
          });
          var dropdownListDirectiveInputBox = attr.dropdownListDirectiveInputBox.split(','); // For reference
          // Functional

          ngModel_ctrl.$parsers.unshift(function (value) {
            ngModel_ctrl.$setValidity(attr.name + '.dropdownListDirectiveInputBox', dropdownListDirectiveInputBox.indexOf(value) === -1);
            return value;
          });

          ngModel_ctrl.$asyncValidators.isValidDropdownDirectiveSelection = function (modelValue, viewValue) {
            // Does fire.
            // modelValue doesn't honor selected value after it has already been set.
            // Until we caome up with a way to reset it, disable by bypassing as valid.
            console.log('20210618-1815');
            console.log('ngModel_ctrl.$dirty:');
            console.log(ngModel_ctrl.$dirty);
            var validationResult = true;
            var deferred = $q.defer();

            if (ngModel_ctrl.$dirty) {
              validationResult = modelValue && modelValue.id;
              if (dropdownListDirectiveInputBoxInverse == "true") validationResult = !validationResult;
            }

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
        vm.isReady = false; // 06/18/2021 07:55 pm - SSN
        // Move outside function to post new entries.  Looking to update typeahead on addition on new entries so "No results found" could disappear

        vm.addresses = []; // vm.tempControlName = `DropdownListDirective_${vm.callSource}_` + d.getHours() + "_" + d.getMinutes() + "_" + d.getSeconds() + "_" + d.getMilliseconds();
        // vm.tempControlName = this.keyColumn;

        vm.tempControlName = "DropdownListDirective_" + Math.random() + "_";
        vm.blackListErrorName = vm.tempControlName + ".dropdownListDirectiveInputBox";
        vm.dropdownListDirectiveInputBoxInverse = false;

        vm.errorTriggered = function (errorName) {
          if (!vm.formName) {
            return;
          }

          return !!vm.formName.$error[errorName];
        };

        vm.errorTriggeredWithControlName = function (controlName, errorName) {
          // return vm.formName[controlName].$error[errorName];
          // Testing with 'required' return a boolean.  
          if (!vm.formName) {
            return;
          }

          if (!vm.formName[controlName]) {
            return;
          }

          return vm.formName[controlName]["$error"][errorName];
        };

        $scope.$on(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, function (events, args) {
          var isHandled = false; // This fires on start and once on change

          console.log("%c [" + _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE + "]", 'color:blue;font-size:12pt');
          console.log(events);
          console.log(args);
          console.log('-----------------------------');

          if (args.msg === _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].DO_SET_FOCUS && args.jqueryObjectRef) {
            args.jqueryObjectRef.focus();
          }

          if (vm.parentKeyName && vm.parentKeyName == args.keyColumn && args.keyValue) {
            vm.parentKeyColumn = args.keyValue;
            isHandled = true;
          }

          if (args.msg == _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_HIDDEN_KEY_VALUE && vm.keyColumn && args.keyColumn && vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase()) {
            console.log("%c update hidden key keyColumn [" + vm.keyColumn + "]", 'color:yellow;font-size:12pt');
            console.log("%c update hidden key hiddenFieldName [" + vm.hiddenFieldName + "]", 'color:yellow;font-size:12pt');
            console.log("%c update hidden key args.keyValue [" + args.keyValue + "]", 'color:yellow;font-size:12pt');
            console.log('vm.keyColumn ');
            console.log(vm.keyColumn);
            console.log('args.keyColumn');
            console.log(args.keyColumn);

            if (vm.hiddenFieldName) {
              $("[name='" + vm.hiddenFieldName + "']").val(args.keyValue);
            } else {
              ssn_logger.cl_error({
                callSource: '20210617-2154',
                message: "hiddenFieldName not defined while updating [" + args.keyColumn + "]} vm.CallSource [" + vm.callSource + "]"
              });
            }

            isHandled = true;
          }

          if (args.msg == _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_DROPDOWN_LIST && vm.keyColumn && args.keyColumn && vm.keyColumn.toLowerCase() == args.keyColumn.toLowerCase()) {
            ssn_logger.cl_normal({
              callSource: '20210610-1708-B-2',
              message: "[" + _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE + "] update dropdown - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'green', true);
            console.log('events:', events);
            console.log('args', args); ///////////////////////////////////////////////////////////////////////////  vm.getDisciplines(args.description);

            vm.disciplineSelected_XXX = {
              id: args.id,
              title: args.description
            };
            ssn_logger.cl_normal({
              callSource: '20210618-1952',
              message: "[" + _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE + "] adding new entry to 'addresses'"
            }, 'red', true);
            vm.addresses.push({
              id: args.id,
              title: args.description
            }); ///////////////////////////////////////////////     vm.ngModel.$setViewValue(args.description)
            //$timeout(() => {
            //    console.log('20210618-0330 - setViewValue ');
            //    vm.ngModel = "";
            //}
            //    , 1000);
            //$timeout(() => {
            //    console.log('20210618-0330 - setViewValue ');
            //    vm.ngModel = args.description ;
            //}
            //    , 2000);

            isHandled = true;
          }

          if (args.msg == _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].CALL_VALIDATE_THIS) {
            ssn_logger.cl_normal({
              callSource: '20210609-1529',
              message: 'call validateThis'
            }, 'blue', true);
            vm.validateThis();
            isHandled = true;
          }

          if (args.msg == _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].SELECT_NEW_VALUE) {
            ssn_logger.cl_normal({
              callSource: '20210617-0643',
              message: 'select new value firing'
            }, 'yellow', true);

            if (vm.hiddenFieldName) {
              $("[name='" + vm.hiddenFieldName + "']").val('');
            } ////////////////////////////////////////////////////////  vm.disciplineSelected_XXX = "";


            isHandled = true;
          }

          if (!isHandled) {
            ssn_logger.cl_normal({
              callSource: '20210609-0547',
              message: "[" + _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE + "] not handled - vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'red');
            console.log('events:', events);
            console.log('args', args);
          }
        }); // 11/28/2019 08:29 am - SSN - Adding - Need to initializa for $watch to work.
        // disciplineSelected_XXX  instead of ngModel because we use an object for selected entry, id and tile. ngModel is usually a key. (The id)

        vm.disciplineSelected_XXX = "";
        $scope.$on('$destroy', function () {//   console.log('%c ' + 'Destroy DropDownListDirective - 20210614-2152', 'color:red;font-size:14pt;');
        });
        $scope.$watch('vm101.ngModel', function (newValue, oldValue) {
          ssn_logger.cl_normal({
            callSource: '20210609-1438',
            message: "CHANGE vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
          }, 'yellow');
          console.log(oldValue);
          console.log(newValue); // 06/13/2021 10:12 pm - SSN - [20210613-0452] - [022] - Adding tags to DevSite

          if (newValue) {
            // if (newValue != undefined) {
            ssn_logger.cl_normal({
              callSource: '20210609-1438-B',
              message: "CHANGE vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'green');
            vm.validateThis();
          } else {
            ssn_logger.cl_normal({
              callSource: '20210609-1438-C-2',
              message: "CHANGE vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'red'); // vm.isReady = true;
          }
        });
        $scope.$watch('vm101.parentKeyColumn', function (newValue, oldValue) {
          ssn_logger.cl_normal({
            callSource: '20210617-1845',
            message: 'vm101.parentKeyColumn - watch'
          }, 'yellow', true);

          if (oldValue != newValue && oldValue != null) {
            // oldValue is null on first call.
            // vm.ngModel = undefined;
            // 06/13/2021 10:07 pm - SSN - [20210613-0452] - [021] - Adding tags to DevSite 
            vm.ngModel = -1020;
            console.log("%c vm101.parentKeyColumn - setting ngModel [" + vm.ngModel + "]  keyColumn [" + vm.keyColumn + "]  20210617-1214", 'color:cyan;font-size:12pt'); //vm.ngModel = -1;

            vm.disciplineSelected_XXX = "";

            if (vm.hiddenFieldName) {
              console.log("%c vm101.parentKeyColumn - setting ngModel [" + vm.ngModel + "]  keyColumn [" + vm.keyColumn + "]  20210617-1847 - blank out [" + vm.hiddenFieldName + "]", 'color:cyan;font-size:12pt');
              $("[name='" + vm.hiddenFieldName + "']").val('');
            }
          }
        }); //$scope.$watch('vm101.disciplineSelected_XXX', function (newValue: LookupRecord, oldValue) {

        $scope.$watch('vm101.disciplineSelected_XXX', function (newValue, oldValue) {
          console.log("%c vm101.disciplineSelected_XXX watch - 20210617-1227", 'color:cyan;font-size:12pt');
          console.log('%c shows null for new value ', 'color:red');
          console.log(vm.disciplineSelected_XXX);
          console.log('newValue:');
          console.log(newValue);
          console.log('oldValue:');
          console.log(oldValue);
          console.log('%c shows null for both values ', 'color:red');
          console.log('vm.$modelValue:');
          console.log(vm.$modelValue);
          console.log('vm.$viewValue:');
          console.log(vm.$viewValue);

          if (newValue && newValue.id) {
            vm.ngModel = newValue.id;
            console.log("%c setting ngModel [" + vm.ngModel + "]  keyColumn [" + vm.keyColumn + "] 20210617-1213", 'color:cyan;font-size:12pt');

            if (vm.hiddenFieldName) {
              console.log("%c setting ngModel [" + vm.ngModel + "]  keyColumn [" + vm.keyColumn + "] update vm.hiddenFieldName  [" + vm.hiddenFieldName + "]  with [" + newValue.id + "] 20210618-2008", 'color:red;font-size:12pt');
              $("[name='" + vm.hiddenFieldName + "']").val(newValue.id);
            }
          }

          if (vm.formName) {
            if (vm.formName.$dirty) {
              changeMonitorService.doSetHaveChange(true);
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
              vm.APIUrlListAll = '/api/job_LineItemAPI/typeahead_jobrecords';
              vm.APIUrlSingleRecord = '/api/job_LineItemAPI/typeahead';
              break;

            case 'timelog.jobid':
            case 'job.jobid':
            case 'jobid':
              vm.APIUrlListAll = '/api/jobapi/typeahead_projectRecords';
              vm.APIUrlSingleRecord = '/api/jobapi/typeahead';
              break;
            // 11/27/2019 04:46 pm - SSN - Adding

            case 'job.projectid':
              vm.APIUrlListAll = '/api/projectapi/typeahead';
              vm.APIUrlSingleRecord = '/api/projectapi/typeahead';
              break;
            // 06/13/2021 10:13 pm - SSN - [20210613-0452] - [023] - Adding tags to DevSite

            case 'technologyid':
              vm.APIUrlListAll = '/api/technologyapi/typeahead';
              vm.APIUrlSingleRecord = '/api/technologyapi/typeahead';
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
          $scope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
            msg: _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].SELECT_NEW_VALUE,
            callSource: "20210618-1916-changing",
            keyColumn: vm.keyColumn,
            keyValue: vm.ngModel
          });
        }; // 06/16/2021 10:36 pm - SSN - [20210613-0452] - [107] - Adding tags to DevSite


        vm.typeaheadOnSelect = function (item, model, label) {
          console.log("%c typeaheadOnSelect 20210616-2237 ");
          console.log('item xxxxxxxxx:');
          console.log(item);
          console.log('model:');
          console.log(model);
          console.log('label:');
          console.log(label);
          vm.disciplineSelected_XXX = item;
          vm.ngModel = item.id;
          console.log("%c setting ngModel [" + vm.ngModel + "]  keyColumn [" + vm.keyColumn + "]  20210617-1212", 'color:cyan;font-size:12pt');
          console.log('item:');
          console.log(item);
          console.log('-----------------------');
          console.log(' ');
        };

        vm.validateThis = function () {
          vm.setupUrl(); // 06/13/2021 10:39 pm - SSN - [20210613-0452] - [026] - Adding tags to DevSite

          console.log('%c DropdownListDirective vm.validateThis - 20210617-1043  ', 'color:yellow');
          console.log(vm.ngModel);

          if (vm.ngModel > 0) {
            // if (vm.ngModel != undefined) {
            vm.getDisciplineCurrent(vm.ngModel).then(vm.currentDisplineLookupSuccess, vm.currentDisplineLookupError); // $scope.$broadcast(BROADCAST_IDENTIFIERS.DROPDOWN_LIST_DIRECTIVE, { msg: DDLD_CHANGE_MSG.HAS_VALID_VALUE, keyColumn: vm.keyColumn, keyValue: vm.ngModel });
          } else {
            ssn_logger.cl_normal({
              callSource: '20210609-0528',
              message: "validateThis: vm.keyColumn [" + vm.keyColumn + "]  ngModel [" + vm.ngModel + "]   parentKeyColumn [" + vm.parentKeyColumn + "]"
            }, 'yellow');

            if (vm.containerViewValue) {
              vm.disciplineSelected_XXX = {
                title: vm.containerViewValue
              };
            }

            vm.isReady = true;
          }
        };

        vm.currentDisplineLookupSuccess = function (data) {
          console.log('%c currentDisplineLookupSuccess - 20210617-1051', 'color:yellow');
          console.log('%c update vm.disciplineSelected_XXX  20210618-1918', 'color:yellow;font-size:12pt;');
          console.log('%c check data.disciplineid data.ta_id ', 'color:red;font-size:12pt;');
          console.log(data);

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
          console.log('%c getDisciplines  20210618-1919', 'color:yellow;font-size:16pt;');

          try {
            // For adding new entries
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

          if ($scope.queryIsInProgress) {
            return $scope.deferred_getDisciplineQuery.promise;
          } else {
            return executeQuery();
          }

          function executeQuery() {
            $scope.queryIsInProgress = true;
            $scope.deferred_getDisciplineQuery = $q.defer();
            console.log(' ');
            console.log('%c getDisciplines - 20210617-1119 ', 'color:yellow');
            console.log('vm.APIUrlListAll:');
            console.log(vm.APIUrlListAll); // Debounce

            $timeout(function () {
              $http({
                method: 'GET',
                url: vm.APIUrlListAll
              }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError);
            }, 500);
            return $scope.deferred_getDisciplineQuery.promise;

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

              $scope.deferred_getDisciplineQuery.resolve(vm.addresses);
              $scope.queryIsInProgress = false;
            }

            function typeaheadDisciplineError(error) {
              ssn_logger.cl_normal({
                callSource: "20210608-2139",
                message: "typeaheadDisciplineError"
              }, "red", true);
              ssn_logger.cl_error({
                callSource: "20210608-2140",
                message: "typeaheadDisciplineError",
                errorObject: error
              });
              $scope.deferred_getDisciplineQuery.reject(error);
              $scope.queryIsInProgress = false;
            }
          }
        };

        vm.getDisciplineCurrent = function (lookupID) {
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
          }).then(typeaheadDisciplineSuccess, typeaheadDisciplineError)["catch"](typeaheadDisciplineCatch);
          return deferred.promise;

          function typeaheadDisciplineSuccess(response) {
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

          function typeaheadDisciplineCatch(response) {
            console.log("%c typeaheadDisciplineCatch  lookupID  [" + lookupID + "] catch", 'color:red,font-size:14pt;');
            console.log(response);
            ssn_logger.cl_error({
              callSource: '20210608-1316',
              message: "Failed call to [" + localUrl + "]"
            });
            deferred.reject(response);
          }
        };

        vm.formErrorsByControl = function (controlName, errorName) {
          if (vm.formName) {
            if (vm.formName[controlName]) {
              return vm.formName[controlName]["$error"][errorName];
            }
          }
        };
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
          dropdownListDirectiveInputBoxInverse: "@"
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
              }, "red", true);
              ssn_logger.cl_normal({
                callSource: "20210607-1608-B",
                message: this.callSource
              }, "red", true);
            } //ctrl.$parsers.unshift(function (value) {
            //    console.log('20210607-0127  link');
            //    console.log('20210607-0127 2 link');
            //    console.log('20210607-0127 2 link');
            //    console.log('20210607-0127 222 link');
            //    var valid = false;
            //    ctrl.$setValidity('dropdownListDirectiveInputBox', valid);
            //    return value; //valid ? value : undefined;
            //});
            // 11/28/2019 05:29 am - SSN - [20191128-0529] - [001] - Autofocus


            if (attrs.autofocus) {
              console.log('attr.autofocus');
              console.log('attr.autofocus');
              console.log('attr.autofocus');

              var setfocusFunc_1 = function setfocusFunc_1(elem) {
                console.log('attr.autofocus - 2');
                console.log('attr.autofocus - 2');
                console.log('attr.autofocus - 2');

                if (attrs.autofocus.toLowerCase() === "true") {
                  console.log('attr.autofocus - 3');
                  console.log('attr.autofocus - 3');
                  console.log('attr.autofocus - 3');
                  var inputObj = elem.find('input[type=text]').filter(':visible:first');

                  if (inputObj.val() === "") {
                    inputObj.focus();

                    if (scope.formName) {
                      console.log('%c ' + '20210612-0353-A - setfocus ', 'color:yellow;font-size:14pt;');
                      console.log('%c ' + 'thisformName:', 'color:yellow;font-size:14pt;');
                      console.log(scope.formName);
                      console.log('%c ' + 'thisformName.$touched', 'color:yellow;font-size:14pt;');
                      console.log('%c ' + scope.formName.$touched, 'color:yellow;font-size:14pt;');
                      scope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
                        msg: _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].DO_SET_FOCUS,
                        jqueryObjectRef: inputObj
                      });
                    } else {
                      console.log('%c ' + '20210612-0353-B - setfocus  - NO FORM NAME', 'color:red;font-size:14pt;');
                    }
                  }
                }
              };

              $timeout(function () {
                setfocusFunc_1(el);
              }, 1000);
            }
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

/***/ "./DropdownList/DropdownListDirectiveConstants.js":
/*!********************************************************!*\
  !*** ./DropdownList/DropdownListDirectiveConstants.js ***!
  \********************************************************/
/*! exports provided: DDLD_CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DDLD_CONSTANTS", function() { return DDLD_CONSTANTS; });
// 06/17/2021 09:29 pm - SSN 
var DDLD_CONSTANTS = function () {
  return {
    NOT_DEFINED: "NOT_DEFINED",
    UPDATE_HIDDEN_KEY_VALUE: "UPDATE_HIDDEN_KEY_VALUE",
    SELECT_NEW_VALUE: "SELECT_NEW_VALUE",
    HAS_VALID_VALUE: "HAS_VALID_VALUE",
    DO_SET_FOCUS: "DO_SET_FOCUS",
    UPDATE_DROPDOWN_LIST: "UPDATE_DROPDOWN_LIST",
    CALL_VALIDATE_THIS: "CALL_VALIDATE_THIS"
  };
}();



/***/ }),

/***/ "./Shared/Broadcast_Identifers.js":
/*!****************************************!*\
  !*** ./Shared/Broadcast_Identifers.js ***!
  \****************************************/
/*! exports provided: BROADCAST_IDENTIFIERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROADCAST_IDENTIFIERS", function() { return BROADCAST_IDENTIFIERS; });
// 06/18/2021 02:58 am - SSN - Adding
var BROADCAST_IDENTIFIERS = {
  DROPDOWN_LIST_DIRECTIVE: "DROPDOWN_LIST_DIRECTIVE"
};

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
      }; // 06/15/2021 03:25 am - SSN - [20210613-0452] - [040] - Adding tags to DevSite


      $scope.addNewTechnology = function (_containerViewValue2) {
        ssn_logger.cl_normal({
          callSource: '20210615-0326-A',
          message: 'Calling addNewTechnology '
        }, 'yellow', true);
        ssn_logger.cl_normal({
          callSource: '20210615-0326-C',
          message: "containerViewValue [" + _containerViewValue2 + "]"
        }, 'yellow', true);
        $uibModal.open({
          templateUrl: '/js/Technology/TechnologyCreate.html',
          controller: 'TechnologyController',
          backdrop: 'static',
          keyboard: false,
          resolve: {
            containerViewValue: function containerViewValue() {
              return _containerViewValue2;
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

/***/ "./Technology/Technology.js":
/*!**********************************!*\
  !*** ./Technology/Technology.js ***!
  \**********************************/
/*! exports provided: TechnologyController_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyController_instance", function() { return TechnologyController_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ..//globals */ "./globals.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _DropdownList_DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DropdownList/DropdownListDirectiveConstants */ "./DropdownList/DropdownListDirectiveConstants.js");
/* harmony import */ var _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Broadcast_Identifers */ "./Shared/Broadcast_Identifers.js");
// 06/15/2021 03:31 am - SSN - [20210613-0452] - [041] - Adding tags to DevSite




_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].doSetup("TechnologyController_instance");

var TechnologyController_instance = function () {
  var doSetup = function doSetup(ngApplicationName) {
    var angularApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TechnologyController', ngApplicationName);
    angularApp.controller('TechnologyController', ['$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'containerViewValue', TechnologyControllerFunction]);

    function TechnologyControllerFunction($q, $uibModalInstance, $rootScope, $scope, dataService, changeMonitorService, ssn_logger, containerViewValue) {
      $scope.defaultValue = containerViewValue;
      _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logEvent("DemoSites_DevSiteTechnology", {
        SourceCode: "20210615-0342",
        Message: "Init"
      });
      changeMonitorService.setupMonitor();
      $scope.pageTitle = "Technology-001";
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

      $scope.editableTechnology = {
        description: $scope.defaultvalue
      };

      $scope.submitForm = function () {
        if ($scope.disableSaveButton) return;
        $scope.disableSaveButton = true;
        $scope.editableTechnology.description = $scope.defaultValue; // During testing with LineItem, we were ending up with records being saved with the value "0".  Source not determined.

        if ($scope.editableTechnology.description == "0") {
          toastr.error("Failed to save record.  See console log.");
          $scope.disableSaveButton = false;
          ssn_logger.cl_error({
            callSource: "20210615-0358",
            message: "DevSite Technology new entry error - saving '0' record "
          });
          return;
        }

        var promise = null;

        try {
          promise = dataService.addOrUpdateTechnology($scope.editableTechnology);

          if (promise) {
            promise.then(function (data) {
              $rootScope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
                msg: _DropdownList_DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_DROPDOWN_LIST,
                keyColumn: "technologyId",
                id: data.id,
                description: data.description
              });
              $uibModalInstance.close();
              toastr.info("New record '" + $scope.editableTechnology.description + "' saved.");
            }, function (error) {
              $scope.disableSaveButton = false;
              console.error("DevSite Technology  - 20210615-0406 - promise > error");
              console.log(error);
              toastr.error("Failed to save record.  See console log.");
              $scope.feedbackToUserClassNameCase = 2;
              $scope.feedbackToUserText = error.data;
              ssn_logger.cl_error({
                callSource: "20210615-0409",
                message: "function > error",
                errorObject: error
              });
            });
          }
        } catch (error) {
          ssn_logger.cl_error({
            callSource: "20210615-0408",
            message: "function > error",
            errorObject: error
          });
          toastr.error("Failed to save record.  See console log.");
        }
      };

      $scope.cancelForm = function () {
        if (changeMonitorService.getHaveChanges()) {
          if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
        }

        $uibModalInstance.dismiss();
      };
    }
  };

  return {
    doSetup: doSetup
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
    // 06/15/2021 08:08 am - SSN - [20210613-0452] - [047] - Adding tags to DevSite
    // AppInsights.trackException(exception, handledAt, props);
    if (exception) {
      props = __assign({}, props, exception);
    }

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
      var cl_normal = function cl_normal(msg, color, loud) {
        if (loud === void 0) {
          loud = false;
        }

        var style = "color:" + color + ";";

        if (loud) {
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
        console.log("%c-----------------------------", style); // 06/15/2021 08:38 am - SSN - [20210613-0452] - [048] - Adding tags to DevSite

        var props = {
          SourceCode1: "ssn-angjs-[" + callSource + "]",
          SourceCode2: errorMsg.callSource,
          Message: errorMsg.message
        };
        _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logException(errorMsg.errorObject, props);
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
/// <reference path="../js/shared/DataServices.ts"/>
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />



var ssn_devsite_angular_module_instance = function () {
  // 06/15/2021 02:50 am - SSN - [20210613-0452] - [039] - Adding tags to DevSite
  // var ssn_devsite_angular_module = globals.globals_instance.getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute']);
  var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('demoSite_index', "demoSites_Index", ['ngRoute', 'ui.bootstrap']); // 12/07/2019 07:12 am - SSN - [20191207-0704] - [002] - AngularJS - Routing - Authentication
  // Moved  $routeProvider code to Routing_Config.ts
  // 09/21/2019 08:23 am - SSN - [20190921-0357] - [012] - Creating multiple entry for Webpack
  // = function

  var demoSiteIndexController_101 = function demoSiteIndexController_101($scope, $http, $window, dataService) {
    $scope.Title = "Title set in Angular controller."; // $scope.data = [];

    $scope.data = dataService;
    $scope.isBusy2 = true; // 06/13/2021 08:35 am - SSN - [20210613-0452] - [012] - Adding tags to DevSite
    // Temp Todo

    dataService.getDevSites(50, 1).then(function (result) {
      $scope.data_local = ko.observable(result.data);
    }, function (ex) {
      console.error("20190910-0101 - demosites_index");
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
      angular__WEBPACK_IMPORTED_MODULE_0__["copy"](content, $scope.editablerow);
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


  ssn_devsite_angular_module.directive('devSiteTagsCompiler', ['$compile', '$timeout', '$templateCache', function ($compile, $timeout, $templateCache) {
    return {
      restrict: 'A',
      controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
        console.log('devSiteTagsCompiler - $templateCache - 20210615-0148');
        console.log('$templateCache:');
        console.log($templateCache); //$templateCache.removeAll();

        $scope.$on("$destroy", function () {
          console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
          console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
          console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
          console.log('%c ' + 'Destroy firing for devSiteTagsCompiler devSiteTagsCompiler', 'color:red;font-size:14pt');
        });
        $scope.$on("call_devSiteTagsCompiler", function (event, args) {
          console.log('%c ' + 'call_devSiteTagsCompiler 20210614-2345', 'color:red;font-size:14pt');
          console.log(event);
          console.log(args);

          if (args.msg && args.msg == "doRecompileList") {
            console.log('%c ' + 'Call doRecompileList - 20210614-2347', 'color:yellow;font-size:14pt');
            $scope.doRecompileList();
          }
        });

        $scope.doRecompileList = function () {
          console.log('%c ' + 'Process doRecompileList  20210614-1949', 'color:yellow;font-size:12pt'); //$scope.$destroy();
          //$scope.$new();

          while ($rootScope.listOfAddedDirectives.length > 0) {
            console.log('20210615-0436 ===========');
            console.log("Destroying scopes.... [" + $rootScope.listOfAddedDirectives.length + "]");

            var _tempScope = $rootScope.listOfAddedDirectives.pop();

            _tempScope.$destroy();
          }

          $scope.$broadcast('call-to-compile', {
            key: 'Calling-from-doRecompileList'
          });
        };
      }],
      link: function link(scope, element, attrs) {
        $timeout(function () {
          $compile(element.contents())(scope);
        }, 2000);
        scope.$on('call-to-compile', function (event, args) {
          console.log('%c ' + 'devSiteTagsCompiler - all-to-compile', 'color:red;font-size:10pt');
          console.log(event);
          console.log(args);
          console.log('--------------------------------------');
          $compile(element.contents())(scope);
        });
      }
    };
  }]);
  ssn_devsite_angular_module.directive('devSiteTags', function () {
    return {
      templateUrl: './js/devsiteTags/dev-site-tags.html',
      scope: {
        theTags: "="
      },
      link: function link(scope, elem, attrs) {
        if (scope.theTags === undefined) {
          scope.theTags = {};
        }
      },
      controller: ["$rootScope", "$scope", "dataService", function ($rootScope, $scope, dataService) {
        var vm = this;

        if (!$rootScope.listOfAddedDirectives) {
          $rootScope.listOfAddedDirectives = [];
        }

        $rootScope.listOfAddedDirectives.push($scope);
        $scope.$on("$destroy", function () {
          console.log('%c ' + 'Destroy firing for devSiteTags', 'color:yellow;font-size:14pt');
        });
        console.log('demosites_index - devsiteTags - 20210615-0518');
        console.log($scope.theTags);
        $scope.addingDevSiteTag = false;
        $scope.removingDevSiteTag = false;

        $scope.addDevSiteTag = function (devSiteTechnologySelectedRecord_forEdit) {
          // If we pass an object, then we are editing; otherwise, adding a new tag
          $scope.devSiteTechnologySelectedRecord = devSiteTechnologySelectedRecord_forEdit;
          $scope.containerViewValue = "";
          $scope.editableDevSite = $scope.devSiteTechnologySelectedRecord;

          if (!$scope.editableDevSite) {
            $scope.editableDevSite = {
              id: 0,
              technology: {
                id: -4
              }
            };
          }

          console.log("%c addDevSiteTag (or edit)", 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          $scope.addingDevSiteTag = true;
        };

        $scope.saveNewDevsiteTag = function () {
          if ($scope.disableSaveButton) {
            return;
          }

          $scope.disableSaveButton = true;
          $scope.feedbackToUserClassNameCase = 0;
          $scope.feedbackToUserText = "";
          console.log('%c ' + 'saveNewDevsiteTag 0616-0236', 'color:yellow;font-size:12pt');
          console.log('$scope.editableDevSite:');
          console.log($scope.editableDevSite);
          console.log('---------------------------------------');
          console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          console.log('---------------------------------------');
          console.log("DevSiteID : [" + $scope.theTags.id + "] technologyId: [" + $scope.editableDevSite.technology.id + "] ");
          console.log('---------------------------------------');
          console.log('%c $scope.devSiteTechnologySelectedRecord 20210616-2224', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          console.log('---------------------------------------');
          console.log($scope.theTags);
          console.log($scope.editableDevSite);
          var newRec = {
            id: $scope.editableDevSite.id,
            devSiteId: $scope.theTags.id,
            technologyId: $scope.editableDevSite.technology.id
          };
          console.log('%c  demoSites_ondex - 20210616-0339', 'color:yellow;font-size:14pt;');
          console.log(newRec);
          dataService.addDevSiteTechnology(newRec).then(addDevSiteTechnologySuccess, addDevSiteTechnologyError)["catch"](addDevSiteTechnologyCatch);

          function addDevSiteTechnologySuccess(data) {
            console.log('%c  demoSites_ondex - 20210616-0344 - Success', 'color:green;font-size:14pt;');
            console.log(data);
            console.log(data[0]);
            $scope.disableSaveButton = false;
            var newOrUpdatedRecord = {
              id: data[0].id,
              technology: {
                description: data[0].technology.description
              }
            };
            var existingRecordIndex = $scope.theTags.devSiteTechnologies.findIndex(function (r) {
              return r.id == data[0].id;
            });

            if (existingRecordIndex > -1) {
              console.log('%c  demoSites_ondex - 20210616-0344 - CHECK ', 'color:green;font-size:14pt;');
              console.log($scope.theTags.devSiteTechnologies);
              $scope.theTags.devSiteTechnologies.splice(existingRecordIndex, 1, newOrUpdatedRecord);
              console.log($scope.theTags.devSiteTechnologies);
            } else {
              $scope.theTags.devSiteTechnologies.push(newOrUpdatedRecord);
            } //   $scope.theTags.push($scope.newDevSiteTag);


            $scope.addingDevSiteTag = false;
          }

          function addDevSiteTechnologyError(error) {
            console.log('%c  demoSites_ondex - 20210616-0345 - Error', 'color:red;font-size:14pt;');
            console.log(error);
            $scope.feedbackToUserClassNameCase = 2;
            $scope.feedbackToUserText = error.data;
            $scope.disableSaveButton = false;
          }

          function addDevSiteTechnologyCatch(error) {
            console.log('%c  demoSites_ondex - 20210616-0346 - catch ', 'color:red;font-size:14pt;');
            console.log(error);
            $scope.feedbackToUserClassNameCase = 2;
            $scope.feedbackToUserText = error.data;
            $scope.disableSaveButton = false;
          }

          return;
        };

        $scope.cancelNewDevsiteTag = function () {
          $scope.addingDevSiteTag = false;
          $scope.feedbackToUserClassNameCase = 0;
          $scope.feedbackToUserText = "";
          $scope.editableDevSite = {};
        };

        $scope.removeDevSiteTag = function (rec) {
          $scope.removingDevSiteTag = true;
          $scope.devSiteTechnologySelectedRecord = rec;
        };

        $scope.confirmedRemoveDevSiteTag = function () {
          console.log('%c confirmedRemoveDevSiteTag  20210616-2026', 'color:yellow');
          console.log($scope.devSiteTechnologySelectedRecord);
          dataService.deleteDevSiteTechnology($scope.devSiteTechnologySelectedRecord.id).then(deleteDevSiteTechnologySuccess, deleteDevSiteTechnologyError)["catch"](deleteDevSiteTechnologyCatch);

          function deleteDevSiteTechnologySuccess(data) {
            console.log('%c deleteDevSiteTechnologySuccess 20210616-2055', 'color:yellow');
            console.log(data);
            $scope.theTags.devSiteTechnologies = $scope.theTags.devSiteTechnologies.filter(function (t) {
              return t.id !== $scope.devSiteTechnologySelectedRecord.id;
            });
            $scope.removingDevSiteTag = false;
          }

          function deleteDevSiteTechnologyError(error) {
            console.log('%c deleteDevSiteTechnologyError 20210616-2056', 'color:red');
            console.log(error);
            $scope.feedbackToUserClassNameCase = 2;
            $scope.feedbackToUserText = error.data;
          }

          function deleteDevSiteTechnologyCatch(error) {
            console.log('%c deleteDrvSiteTechnologyCatch 20210616-2056', 'color:red');
            console.log(error);
          }
        };

        $scope.cancelRemoveDevSiteTag = function () {
          $scope.removingDevSiteTag = false;
          $scope.devSiteTechnologySelectedRecord = null;
        };

        $scope.feedbackToUserClassNameCase = 0;
        $scope.feedbackToUserText = "";

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
      }]
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

/***/ "./shared/DataServices.js":
/*!********************************!*\
  !*** ./shared/DataServices.js ***!
  \********************************/
/*! exports provided: dataService_instance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataService_instance", function() { return dataService_instance; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 04/12/2019 02:35 pm - SSN - [20190412-1126] - Timelog - save data - Rename module to ssn_devsite_angular_module


var dataService_instance = function () {
  var doSetup = function doSetup(currentApplication) {
    var ssn_devsite_angular_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('DataServices', currentApplication);
    ssn_devsite_angular_module.factory("dataService", ['$http', '$q', function ($http, $q) {
      var _getDevSites = function _getDevSites(recordsPerPage, currentPage) {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/" + recordsPerPage + "/" + currentPage).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          console.error('%c ' + 'dataservice getDevSites error', 'color:red;font-size:13pt;');
          console.log(error);
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 06/15/2021 05:10 am - SSN - [20210613-0452] - [045] - Adding tags to DevSite


      var _getDevSite = function _getDevSite(devSiteId) {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/" + devSiteId).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 06/13/2021 10:29 am - SSN - [20210613-0452] - [018] - Adding tags to DevSite


      var _getDevSitesCount = function _getDevSitesCount() {
        var deferred = $q.defer();
        $http.get("/api/demositesapi/recordcount").then(function (result) {
          deferred.resolve(result);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 04/29/2019 05:49 pm - SSN - [20190429-1748] - [001] - Angular clock out popup


      var _getTimelog = function _getTimelog(id) {
        var deferred = $q.defer(); // 09/24/2019 07:15 am - SSN - [20190924-0401] - [009] - Quick timelog entry

        $http.get('/api/timelogapi/getTimelog/' + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject({
            Error: 'Failed call to get timelog [20190829-1819]'
          });
          console.error(error);
        });
        return deferred.promise;
      }; // 11/19/2019 02:00 am - SSN - [20191119-0048] Created    
      // 11/21/2019 06:26 am - SSN - [20191121-0503] - [004] - Timelog edit options on project search
      // Add servingPage


      var _TimelogRefreshRecord = function _TimelogRefreshRecord(id, servingPage) {
        var deferred = $q.defer();
        $http.get('/api/timelogapi/RefreshRecord/' + id + "?servingPage=" + servingPage).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject({
            Error: 'Failed call to get timelog [20191119-0201]'
          });
          console.error(error);
        });
        return deferred.promise;
      };

      var _addDevSite = function _addDevSite(devSite) {
        var deferred = $q.defer();
        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }; // 09/06/2019 04:45 pm - SSN - [20190906-0518] - [003] - Angular - editMode div content


      var _updateDevSite = function _updateDevSite(devSite) {
        var deferred = $q.defer(); // 09/09/2019 10:33 pm - SSN - [20190909-2136] - [004] - select top 20 
        // 09/24/2019 03:38 am - SSN - Logic error - updating wrong link
        //       $http.post('/api/demositesapi', devSite)

        $http.post('/api/demositesapi', devSite).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
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
      }; // 06/15/2021 06:00 pm - SSN - [20210613-0452] - [049] - Adding tags to DevSite


      var addOrUpdateTechnology = function addOrUpdateTechnology(technology) {
        var deferred = $q.defer();
        $http.post('/api/technologyAPI', technology).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      };

      function getHttpPostPromise(url, body) {
        var deferred = $q.defer();
        $http.post(url, body).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      } // 06/16/2021 08:42 pm - SSN - [20210613-0452] - [105] - Adding tags to DevSite


      function getHttpDeletePromise(url, id) {
        var deferred = $q.defer();
        $http["delete"](url + "/" + id).then(function (result) {
          deferred.resolve(result.data);
        }, function (error) {
          deferred.reject(error);
        });
        return deferred.promise;
      } // 06/16/2021 02:59 am - SSN - [20210613-0452] - [061] - Adding tags to DevSite


      var addDevSiteTechnology = function addDevSiteTechnology(devSiteTechnology) {
        return getHttpPostPromise('/api/DevSitetechnologyAPI/post_custom', devSiteTechnology);
      }; // 06/16/2021 08:33 pm - SSN - [20210613-0452] - [103] - Adding tags to DevSite


      var deleteDevSiteTechnology = function deleteDevSiteTechnology(id) {
        return getHttpDeletePromise('/api/DevSitetechnologyAPI', id);
      };

      return {
        getDevSites: _getDevSites,
        getDevSite: _getDevSite,
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
        addOrUpdateJob_LineItem: addOrUpdateJob_LineItem,
        addOrUpdateTechnology: addOrUpdateTechnology,
        addDevSiteTechnology: addDevSiteTechnology,
        deleteDevSiteTechnology: deleteDevSiteTechnology
      };
    }]);
  };

  return {
    //        ssn_devsite_angular_module: ssn_devsite_angular_module
    doSetup: doSetup
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
      });
      var imgSiteUrlQRCode = 0;
      $('#imgSiteUrlQRCode').click(function (e) {
        imgSiteUrlQRCode++;
        $(e.target).toggleClass('cssSiteUrlQRCode');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX2luZGV4X3AxLnRzIiwid2VicGFjazovLy8uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9TaGFyZWQvQnJvYWRjYXN0X0lkZW50aWZlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL01vZGFsQ2FsbHNVdGlsLnRzIiwid2VicGFjazovLy8uL1RlY2hub2xvZ3kvVGVjaG5vbG9neS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvci50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL1V0aWwvTG9nZ2VyL3Nzbl9Bbmd1bGFySnNsb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtb1NpdGVzX0luZGV4LnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL0RhdGFTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkEsZ0VBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FB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QixJQUFwQixDQUFYOztBQUVBLE1BQUksSUFBSSxLQUFLLFNBQVQsSUFBc0IsSUFBSSxDQUFDLE1BQUwsS0FBZ0IsQ0FBMUMsRUFBNkM7QUFDekMsV0FBTyxLQUFQO0FBQ0g7O0FBRUQsU0FBUSxDQUFDLENBQUQsS0FBTyxDQUFDLENBQUMsT0FBRixDQUFVLEVBQVYsRUFBYyxJQUFkLENBQWY7QUFDSCxDQWRELEMsQ0FrQkE7OztBQUdBLFNBQVMscUJBQVQsR0FBOEI7QUFFMUIsU0FBTyxDQUFDLEdBQVIsQ0FBWSxnREFBWjs7QUFHQSxNQUFJLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsT0FBakIsQ0FBeUIsT0FBekIsRUFBa0MscUJBQWxDLENBQUosRUFBOEQ7QUFDMUQsV0FBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0E7QUFDSDs7QUFFRCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVUsQ0FBVixFQUFXO0FBRXBDLFdBQU8sQ0FBQyxHQUFSLENBQVksbUNBQVo7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFhLENBQWI7QUFDSCxHQUpEO0FBTUg7O0FBRUQsQ0FBQyxDQUFDO0FBRUUsU0FBTyxDQUFDLEdBQVIsQ0FBWSwwQ0FBWjtBQUVBLHVCQUFxQjtBQUV4QixDQU5BLENBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxaEJBLHlCIiwiZmlsZSI6ImJ1bmRsZV9EZW1vU2l0ZXNfaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERhdGEgc3RydWN0IHRvIGNvbnRhaW4gb25seSBDIHNlY3Rpb24gd2l0aCBjdXN0b20gZmllbGRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBCYXNlKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCYXNlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkJhc2UgPSBCYXNlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJCYXNlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN5c3RlbSB2YXJpYWJsZXMgZm9yIGEgdGVsZW1ldHJ5IGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEVudmVsb3BlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBFbnZlbG9wZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlUmF0ZSA9IDEwMC4wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEVudmVsb3BlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkVudmVsb3BlID0gRW52ZWxvcGU7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JU2VyaWFsaXphYmxlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL0VudmVsb3BlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JQXBwbGljYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSURldmljZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JSW50ZXJuYWwudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUxvY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lPcGVyYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNhbXBsZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JVXNlci50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2Vzc2lvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVGVsZW1ldHJ5L0lFbnZlbG9wZS50c1wiLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIEFJO1xyXG4oZnVuY3Rpb24gKEFJKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbGV2ZWwgb2Ygc2V2ZXJpdHkgZm9yIHRoZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgdmFyIFNldmVyaXR5TGV2ZWw7XHJcbiAgICAoZnVuY3Rpb24gKFNldmVyaXR5TGV2ZWwpIHtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJWZXJib3NlXCJdID0gMF0gPSBcIlZlcmJvc2VcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJJbmZvcm1hdGlvblwiXSA9IDFdID0gXCJJbmZvcm1hdGlvblwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIldhcm5pbmdcIl0gPSAyXSA9IFwiV2FybmluZ1wiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiQ3JpdGljYWxcIl0gPSA0XSA9IFwiQ3JpdGljYWxcIjtcclxuICAgIH0pKFNldmVyaXR5TGV2ZWwgPSBBSS5TZXZlcml0eUxldmVsIHx8IChBSS5TZXZlcml0eUxldmVsID0ge30pKTtcclxufSkoQUkgfHwgKEFJID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUNvbmZpZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lUZWxlbWV0cnlDb250ZXh0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9TZXZlcml0eUxldmVsLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB2YXIgVXRpbEhlbHBlcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFV0aWxIZWxwZXJzKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBnZW5lcmF0ZSByYW5kb20gaWQgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVdGlsSGVscGVycy5uZXdJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxMDczNzQxODI0OyAvLzUgc3ltYm9scyBpbiBiYXNlNjQsIGFsbW9zdCBtYXhpbnRcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyYW5kb20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBiYXNlNjRjaGFycy5jaGFyQXQocmFuZG9tICUgNjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IocmFuZG9tIC8gNjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxIZWxwZXJzO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgQXBwbGljYXRpb25JbnNpZ2h0cy5VdGlsSGVscGVycyA9IFV0aWxIZWxwZXJzO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQ29uZmlnLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lBcHBJbnNpZ2h0cy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsvVXRpbEhlbHBlcnMudHNcIi8+XHJcbmRlZmluZShcIkphdmFTY3JpcHRTREsuTW9kdWxlL0FwcEluc2lnaHRzTW9kdWxlXCIsIFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgQXBwSW5zaWdodHNNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQXBwSW5zaWdodHNNb2R1bGUoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIERlZmluZSBhIHRlbXBvcmFyeSBtZXRob2QgdGhhdCBxdWV1ZXMtdXAgYSB0aGUgcmVhbCBtZXRob2QgY2FsbFxyXG4gICAgICAgICAgICBhaU9iamVjdFtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsQXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXVlIGlzIGF2YWlsYWJsZSwgaXQgbWVhbnMgdGhhdCB0aGUgZnVuY3Rpb24gd2Fzbid0IHlldCByZXBsYWNlZCB3aXRoIGFjdHVhbCBmdW5jdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBleGVjdXRlIHRoZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gY2FwdHVyZSBpbml0aWFsIGNvb2tpZSBpZiBwb3NzaWJsZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QuY29va2llID0gZG9jdW1lbnQuY29va2llO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiY2xlYXJBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwiZmx1c2hcIixcclxuICAgICAgICAgICAgICAgIFwic2V0QXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRGVwZW5kZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXhjZXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrTWV0cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrUGFnZVZpZXdcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tUcmFjZVwiXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHdoaWxlIChtZXRob2QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChtZXRob2QucG9wKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQgPSBmdW5jdGlvbiAoYWlDb25maWcpIHtcclxuICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZS5jb25maWcgPSBhaUNvbmZpZztcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGlmIHNjcmlwdCB3YXMgcHJldmlvdXNseSBkb3dubG9hZGVkIGFuZCBpbml0aWFsaXplZCwgcXVldWUgd2lsbCBiZSBkZWxldGVkLCByZWluaXRpYWxpemUgaXRcclxuICAgICAgICAgICAgaWYgKCFhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gYWlDb25maWcudXJsIHx8IFwiaHR0cHM6Ly9hejQxNjQyNi52by5tc2VjbmQubmV0L3NjcmlwdHMvYS9haS4wLmpzXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29sbGVjdCBnbG9iYWwgZXJyb3JzIGJ5IHdyYXBwaW5nIHRoZSB3aW5kb3cub25lcnJvciBtZXRob2RcclxuICAgICAgICAgICAgaWYgKCFhaUNvbmZpZy5kaXNhYmxlRXhjZXB0aW9uVHJhY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RfMSA9IFwib25lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QoXCJfXCIgKyBtZXRob2RfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxPbkVycm9yID0gd2luZG93W21ldGhvZF8xXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1ttZXRob2RfMV0gPSBmdW5jdGlvbiAobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZWQgPSBvcmlnaW5hbE9uRXJyb3IgJiYgb3JpZ2luYWxPbkVycm9yKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbXCJfXCIgKyBtZXRob2RfMV0obWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwSW5zaWdodHNNb2R1bGUsIFwiYXBwSW5zaWdodHNJbnN0YW5jZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFuZFNldHVwOiBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cG9zaW5nIGl0IGZvciB1bml0IHRlc3RzIG9ubHksIG5vdCBwYXJ0IG9mIGludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZGVmaW5lTGF6eU1ldGhvZHM6IEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWUgPSBcImFwcEluc2lnaHRzXCI7XHJcbiAgICAgICAgcmV0dXJuIEFwcEluc2lnaHRzTW9kdWxlO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuQXBwSW5zaWdodHMgPSBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWkubW9kdWxlLmpzLm1hcCIsIlxyXG4vLyAwOS8yMS8yMDE5IDA3OjE0IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwOV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmxldCBuZ0FwcGxpY2F0aW9uTmFtZSA9ICdkZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlIH0gZnJvbSBcIi4vRGVtb1NpdGVzX2luZGV4X3AxXCJcclxuXHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi9zaGFyZWQvRGF0YVNlcnZpY2VzJztcclxuXHJcbmltcG9ydCB7IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlIH0gZnJvbSAnLi9kZW1vU2l0ZXNfSW5kZXgnO1xyXG5cclxuXHJcblxyXG5kYXRhU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlX2luc3RhbmNlLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlO1xyXG5cclxuZGVtb3NpdGVzX2luZGV4X3AxX2luc3RhbmNlO1xyXG5cclxuLy8gMTAvMDEvMjAxOSAxMDoxNSBhbSAtIFNTTiAtIFsyMDE5MTAwMS0wOTQ0XSAtIFswMDZdIC0gQWRkaW5nIEFwcGxpY2F0aW9uIEluc2lnaHRzIGZvciBKYXZhU2NyaXB0XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDg6NTMgYW0gLSBTU04gXHJcbmltcG9ydCB7IFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSB9IGZyb20gJy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnO1xyXG5cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUsIFwiRGVtb1NpdGVzX2luZGV4X21haW5fMjAyMTA2MDZfMTczMVwiKTtcclxuXHJcblxyXG5cclxuQXBwSW5zaWdodHNfVXRpbC5kb1NldHVwKFwiRGVtb1NpZXNfaW5kZXhfbWFpblwiKTtcclxuXHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfSW5kZXhfTWFpblwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEwMDEtMTEzMi1DMlwiLCBNZXNzYWdlOiBcIkxvYWRpbmcgRGVtb1NpdGVzX0luZGV4X01haW5cIiB9KTtcclxuXHJcblxyXG4vLyAwNi8xMy8yMDIxIDA5OjQzIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyMF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlIFxyXG5cclxuaW1wb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH0gZnJvbSAnLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlJztcclxuZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuaW1wb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9IGZyb20gJy4vVXRpbC9Mb2dnZXIvc3NuX0FuZ3VsYXJKc2xvZ2dlcic7XHJcbnNzbl9Bbmd1bGFySnNsb2dnZXIuZG9TZXR1cCgnam9iSW5kZXhfbWFpbicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5pbXBvcnQgeyBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbi8vIDA2LzE1LzIwMjEgMDQ6MTAgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQzXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbmltcG9ydCB7IFRlY2hub2xvZ3lDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UZWNobm9sb2d5L1RlY2hub2xvZ3knO1xyXG5UZWNobm9sb2d5Q29udHJvbGxlcl9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcbmltcG9ydCB7IE1vZGFsQ2FsbHNVdGlsIH0gZnJvbSAnLi9TaGFyZWQvTW9kYWxDYWxsc1V0aWwnO1xyXG5Nb2RhbENhbGxzVXRpbC5kb1NldHVwKFwiRGVtb1NpdGVzX0luZGV4X21haW5cIiwgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuIiwi77u/XHJcbi8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbFxyXG5cclxuLy8gMDgvMjEvMjAxOCAwMjo0NiBhbSAtIFNTTiAtIENvcGllZCAtIEJlZ2luXHJcbi8vIDA4LzIxLzIwMTggMDI6NDYgYW0gLSBTU04gLSBDb3BpZWQgZnJvbSBDOiBcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxodG1sNSAtIGxpbmUgLSBvZiAtIGJ1c2luZXNzIC0gYXBwbGljYXRpb25zXFxkXFxkZW1vc1xcQ29kZWRIb21lcy5XZWJcXFZpZXdzXFxIb21lc1xyXG5cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMva25vY2tvdXQvaW5kZXguZC50c1wiIC8+IFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vanMvc2l0ZSc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuXHJcbnZhciBkZW1vc2l0ZXNfaW5kZXhfcDFfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyBLbm9ja291dCByZWxhdGVkXHJcblxyXG5cclxuICAgIHZhciBWaWV3TW9kZWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDA4LzEyLzIwMTkgMDU6NTggYW0gLSBTU04gLSBbMjAxOTA4MTItMDUxNV0gLSBbMDA2XSAtIEFwcGx5IGZ1bGx0ZXh0IHNlYXJjaFxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDQ6MjAgYW0gLSBTU04gLSBbMjAxOTA5MTAtMDE0N10gLSBbMDA5XSAtIFdBUk5JTkc6IFRyaWVkIHRvIGxvYWQgYW5ndWxhciBtb3JlIHRoYW4gb25jZS5cclxuICAgICAgICAvLyBTaW5jZSBib3VuZCB0byBjb250cm9sLCBpdCBkaXNwbGF5cyB0aGUgb2JzZXJ2YWJsZSBhcyBvYmplY3Rbb2JqZWN0XS4gVGFrZSBvdXQuXHJcblxyXG4gICAgICAgIC8vIDEyLzIwLzIwMTkgMDU6MDYgcG0gLSBTU04gLSBbMjAxOTEyMjAtMTcwNl0gQWRkaW5nIHJlc2V0U2VhcmNoXHJcbiAgICAgICAgc2VsZi5TZWFyY2hUZXh0X0tPID0ga28ub2JzZXJ2YWJsZSgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAxMjoxNiBwbSAtIFNTTiAtIFsyMDE5MDgyMS0xMjEwXSAtIFswMDNdIC0gU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPXHJcblxyXG4gICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcclxuICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08gPSBrby5vYnNlcnZhYmxlKCk7XHJcbiAgICAgICAgc2VsZi5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JfRG9udENhbGxfS08gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDgvMjAxOSAwNzoxMCBwbSAtIFNTTiAtIFsyMDE5MDkwOC0wMDAxXSAtIFswMDddIC0gQ29uY3VycmVuY3lcclxuICAgICAgICAvLy8vLy90aGlzLmN1cnJlbnRJdGVtID0ge307XHJcbiAgICAgICAgc2VsZi5jdXJyZW50SXRlbSA9IGtvLm9ic2VydmFibGUoKTtcclxuXHJcbiAgICAgICAgc2VsZi5lcnJvck1lc3NhZ2UgPSBrby5vYnNlcnZhYmxlKCk7XHJcblxyXG4gICAgICAgIC8vIDA2LzEzLzIwMjEgMDg6NDkgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDE1XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgc2VsZi5yZWNvcmRzUGVyUGFnZV9LTyA9IGtvLm9ic2VydmFibGUoMyk7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50UGFnZV9LTyA9IGtvLm9ic2VydmFibGUoMSk7XHJcbiAgICAgICAgc2VsZi5kZXZTaXRlc0NvdW50X0tPID0ga28ub2JzZXJ2YWJsZSgtMSk7XHJcblxyXG4gICAgICAgIC8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbCAtIFVwZGF0ZVxyXG4gICAgICAgIC8vICB0aGlzLmRldlNpdGVzSlNPTiA9IGtvLm9ic2VydmFibGVBcnJheShASHRtbC5SYXcoTW9kZWwuZGV2U2l0ZXNKU09OKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGV2U2l0ZXNKU09OID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA2LzA2LzIwMTkgMDU6NDQgcG0gLSBTU04gLSBNb3ZlZCBmcm9tIGluZGV4X3AxLmNzaHRtbCAtIFVwZGF0ZVxyXG4gICAgICAgIC8vIDA2LzEzLzIwMjEgMDg6NDQgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDE0XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuICAgICAgICAvLyBBZGRpbmcgcmVjb3Jkc1BlclBhZ2UgYW5kIGN1cnJlbnRQYWdlXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9IGZ1bmN0aW9uIChyZWNvcmRzUGVyUGFnZTogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wOS8yMDE5IDEwOjM1IHBtIC0gU1NOIC0gWzIwMTkwOTA5LTIxMzZdIC0gWzAwNV0gLSBTZWxlY3QgdG9wIDE1XHJcblxyXG4gICAgICAgICAgICAvLyAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaVwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyAkLmdldEpTT04oXCIvYXBpL2RlbW9zaXRlc2FwaS90b3A/cmVjb3JkQ291bnQ9MTVcIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgJC5nZXRKU09OKGAvYXBpL2RlbW9zaXRlc2FwaS8ke3JlY29yZHNQZXJQYWdlfS8ke2N1cnJlbnRQYWdlfWAsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldlNpdGVzSlNPTihkYXRhKTtcclxuIFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvcFRpdGxlJykuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQuZ2V0SlNPTihcIi9hcGkvZGVtb3NpdGVzYXBpL3JlY29yZGNvdW50XCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0NvdW50X0tPKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW1vc2l0ZXNhcGkgLSBTeXN0ZW0gZXJyb3IgLSAyMDIxMDYxMy0xMDM2Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCdTeXN0ZW0gZmFpbHVyZS4nKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyhcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNi8yMDE5IDA0OjI1IHBtIC0gU1NOIC0gWzIwMTkwODE2LTE2MjVdIC0gWzAwMV0gLSBDb3JyZWN0IGxvZ2ljIGZvciBnZXR0aW5nIHJlY29yZCBjb3VudCB0byBzaG93IG5vIHNlYXJjaCByZXN1bHRzIG1lc3NhZ2VcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UmVjb3JkQ291bnQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVjb3JkQ291bnQ6IG51bWJlciA9IHNlbGYuZGV2U2l0ZXNKU09OKCkubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyBzZWxmLmRldlNpdGVzSlNPTlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlY29yZENvdW50O1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDYvMTMvMjAyMSAwOTowMCBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMTZdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICB0aGlzLm9uRmlyc3RQYWdlS25vY2tvdXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jdXJyZW50UGFnZV9LTygpID09IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uTGFzdFBhZ2VLbm9ja291dCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmN1cnJlbnRQYWdlX0tPKCkgPj0gc2VsZi50b3RhbFBhZ2VDb3VudCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3RhbFBhZ2VDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChzZWxmLmRldlNpdGVzQ291bnRfS08oKSAvIHNlbGYucmVjb3Jkc1BlclBhZ2VfS08oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXlDdXJyZW50UGFnZU51bWJlckFuZFRvdGFsUGFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gc2VsZi5jdXJyZW50UGFnZV9LTygpO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFBhZ2VDb3VudCA9IHNlbGYudG90YWxQYWdlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBgUGFnZSAke2N1cnJlbnRQYWdlfSBvZiAke3RvdGFsUGFnZUNvdW50fWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jdXJyZW50UGFnZV9LTygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcmV2RGV2U2l0ZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSBzZWxmLmN1cnJlbnRQYWdlX0tPKCk7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlLS0gPCAxID8gMSA6IGN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50UGFnZV9LTyhjdXJyZW50UGFnZSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmxvYWREYXRhKHNlbGYucmVjb3Jkc1BlclBhZ2VfS08oKSwgc2VsZi5jdXJyZW50UGFnZV9LTygpKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuYXBwbHlEaXNwbGF5UmVxdWlyZW1lbnRzKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUFuZ3VsYXJKU1BhcnRzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5leHREZXZTaXRlUGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UGFnZSA9IHNlbGYuY3VycmVudFBhZ2VfS08oKTtcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2UrKyA+IHNlbGYudG90YWxQYWdlQ291bnQoKSA/IHNlbGYudG90YWxQYWdlQ291bnQoKSA6IGN1cnJlbnRQYWdlO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50UGFnZV9LTyhjdXJyZW50UGFnZSk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLmxvYWREYXRhKHNlbGYucmVjb3Jkc1BlclBhZ2VfS08oKSwgc2VsZi5jdXJyZW50UGFnZV9LTygpKTtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuYXBwbHlEaXNwbGF5UmVxdWlyZW1lbnRzKCk7XHJcblxyXG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUFuZ3VsYXJKU1BhcnRzKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA2LzE1LzIwMjEgMTI6MTMgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDM3XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBbmd1bGFySlNQYXJ0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfZWxlbWVudCA9IGFuZ3VsYXIuZWxlbWVudCgkKFwiW2Rldi1zaXRlLXRhZ3MtY29tcGlsZXJdXCIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlX3RlbXAgPSBfZWxlbWVudC5zY29wZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlX3RlbXAuJGJyb2FkY2FzdChcImNhbGxfZGV2U2l0ZVRhZ3NDb21waWxlclwiLCB7IG1zZzogJ2RvUmVjb21waWxlTGlzdCcgfSk7XHJcblxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMDgvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDkwOC0wMDAxXSAtIFswMDldIC0gQ29uY3VycmVuY3lcclxuICAgICAgICAvLyBSZW5hbWVkIGRlbC1jb25maXJtIGRlbF9jb25maXJtX3AxXHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0RGVsQ29uZmlybSA9IGZ1bmN0aW9uIChpdGVtVG9EZWxldGUpIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudEl0ZW0oaXRlbVRvRGVsZXRlKTtcclxuICAgICAgICAgICAgJCgnI2RlbF9jb25maXJtX3AxJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNob3dKb2IgPSBmdW5jdGlvbiAoZGV2U2l0ZUlEKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjc2hvdy1qb2InKS5tb2RhbCgpO1xyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbVRvRGVsZXRlID0ga28udG9KUyh2bS5jdXJyZW50SXRlbSk7XHJcbiAgICAgICAgICAgICQoJyNkZWwtY29uZmlybScpLm1vZGFsKCdoaWRlJyk7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jaGVja0lmY2FsbGluZ2NtZCA9IGZ1bmN0aW9uIChzaXRlVXJsKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmdTdGFydHNXaXRoKHNpdGVVcmwsICdjbWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zaXRlVXJsV2l0aG91dENNRCA9IGZ1bmN0aW9uIChzaXRlVXJsKSB7XHJcbiAgICAgICAgICAgIGlmIChzdHJpbmdTdGFydHNXaXRoKHNpdGVVcmwsICdjbWQnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpdGVVcmwuc3Vic3RyaW5nKDQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzaXRlVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDEyLzIwLzIwMTkgMDU6MDYgcG0gLSBTU04gLSBbMjAxOTEyMjAtMTcwNl0gQWRkaW5nIHJlc2V0U2VhcmNoXHJcblxyXG4gICAgICAgIHRoaXMucmVzc2V0U2VhcmNoRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCcnKTtcclxuICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfQ2xhc3NOYW1lX0tPKFwiXCIpO1xyXG4gICAgICAgICAgICBzZWxmLlNlYXJjaFRleHRfS08oXCJcIik7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFBhZ2VfS08oMSk7XHJcbiAgICAgICAgICAgIHNlbGYubG9hZERhdGEoc2VsZi5yZWNvcmRzUGVyUGFnZV9LTygpLCBzZWxmLmN1cnJlbnRQYWdlX0tPKCkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBzZWxmLmFwcGx5RGlzcGxheVJlcXVpcmVtZW50cygpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi51cGRhdGVBbmd1bGFySlNQYXJ0cygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDYvMTQvMjAyMSAwMzo0NiBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMjhdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgICAgIHRoaXMuYXBwbHlEaXNwbGF5UmVxdWlyZW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXNlbGYucHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yX0RvbnRDYWxsX0tPKCkpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdXRpbC5zaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzMycpLCAyMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gLSBTU04gLSBbMjAxOTA4MjEtMTM0OF0gWzAwMV0gLSBBZGRlZFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCh1dGlsLnNpdGVfaW5zdGFuY2Uuc2hvd0NvbGxhcHNlZERpdnMsIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzEyLzIwMTkgMDU6NTcgYW0gLSBTU04gLSBbMjAxOTA4MTItMDUxNV0gLSBbMDA1XSAtIEFwcGx5IGZ1bGx0ZXh0IHNlYXJjaFxyXG4gICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE2MjQ1OTA1L2ZldGNoaW5nLW9yLXNlbmRpbmctZGF0YS1mcm9tLWEtZm9ybS11c2luZy1rbm9ja291dC1qc1xyXG4gICAgICAgIC8vc2VsZi5vblN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9uU3VibWl0RGVtb1NpdGVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgc2VhcmNoVGV4dCA9IHNlbGYuU2VhcmNoVGV4dF9LTygpO1xyXG5cclxuICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08oJycpO1xyXG4gICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oJycpO1xyXG4gICAgICAgICAgICBzZWxmLmRldlNpdGVzQ291bnRfS08oLTIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hUZXh0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCdJbnB1dCBpcyByZXF1aXJlZCBmb3Igc2VhcmNoLicpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfQ2xhc3NOYW1lX0tPKFwiYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hUZXh0ID0gc2VhcmNoVGV4dC50cmltKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFRleHQgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTygnSW5wdXQgaXMgcmVxdWlyZWQgZm9yIHNlYXJjaC4gKDIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfQ2xhc3NOYW1lX0tPKFwiYWxlcnQtd2FybmluZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhX3ByZSA9IHtcclxuICAgICAgICAgICAgICAgIFwiU2VhcmNoVGV4dFwiOiBzZWxmLlNlYXJjaFRleHRfS08oKVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhX3ByZSk7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvZGVtb3NpdGVzYXBpL1NlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OLnJlbW92ZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kZXZTaXRlc0pTT04ocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19LTygnJyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0tPKCdTZWFyY2ggcmV0dXJuZWQgbm8gcmVjb3Jkcy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLlNlYXJjaFJlc3VsdHNGZWVkYmFja19DbGFzc05hbWVfS08oXCJhbGVydC13YXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmFwcGx5RGlzcGxheVJlcXVpcmVtZW50cygpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZUFuZ3VsYXJKU1BhcnRzKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIDEyLzIwLzIwMTkgMDU6MDYgcG0gLSBTU04gLSBbMjAxOTEyMjAtMTcwNl0gQWRkaW5nIHJlc2V0U2VhcmNoXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZW1vc2l0ZXNhcGkgU2VhcmNoIGZpbGF1cmUgLSAyMDIxMDQyMi0xNDIyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnU2VhcmNoIGZhaWx1cmUuICc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlSlNPTlsnRXhjZXB0aW9uOk1lc3NhZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgIEVycm9yIGZyb20gc2VydmVyOiBbJHtyZXNwb25zZS5yZXNwb25zZUpTT05bJ0V4Y2VwdGlvbjpNZXNzYWdlJ119XWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZi5TZWFyY2hSZXN1bHRzRmVlZGJhY2tfS08oZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuU2VhcmNoUmVzdWx0c0ZlZWRiYWNrX0NsYXNzTmFtZV9LTyhcImFsZXJ0IGFsZXJ0LWRhbmdlclwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuZGV2U2l0ZXNKU09OLnJlbW92ZUFsbCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0Q2xhc3NGb3JEZW1vU3RhdGUgPSBmdW5jdGlvbiAoZm9yRGVtb192Mikge1xyXG5cclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ2xhc3MgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChmb3JEZW1vX3YyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDbGFzcyA9ICcgZm9yRGVtb19ZZXMnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJ2ZvckRlbW9fTm8nO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENsYXNzID0gJ2ZvckRlbW9fVW5kZWNpZGVkJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBcInNpdGVEaXZcIiArIFwiIFwiICsgc2VsZWN0ZWRDbGFzcztcclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIHZtID0gbmV3IFZpZXdNb2RlbCgpO1xyXG5cclxuICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG5cclxuICAgIHZtLmxvYWREYXRhKHZtLnJlY29yZHNQZXJQYWdlX0tPKCksIHZtLmN1cnJlbnRQYWdlX0tPKCkpO1xyXG5cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG52YXIgc3RyaW5nU3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzdHJpbmcsIHN0YXJ0c1dpdGgpIHtcclxuICAgIHN0cmluZyA9IHN0cmluZyB8fCBcIlwiO1xyXG4gICAgaWYgKHN0YXJ0c1dpdGgubGVuZ3RoID4gc3RyaW5nLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzdGFydHNXaXRoLmxlbmd0aCkgPT09IHN0YXJ0c1dpdGg7XHJcbn07XHJcblxyXG4gXHJcblxyXG5leHBvcnQgeyBkZW1vc2l0ZXNfaW5kZXhfcDFfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwOS8xMy8yMDE5IDA1OjQ4IGFtIC0gU1NOIC0gWzIwMTkwOTEzLTA1NDhdIC0gWzAwMV0gLSBDcmF0ZSBnZW5lcmljIGRyb3Bkb3duIGxpc3QgZGlyZWN0aXZlXHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9qcXVlcnkvanF1ZXJ5LmQudHNcIiAvPiBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvYW5ndWxhci9pbmRleC5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3NoYXJlZC9EYXRhU2VydmljZXMudHNcIi8+XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDo1MiBhbSAtIFNTTiAtIEFkZGVkIGltcG9ydCBhbmd1bGFyXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5cclxuLy8gMDkvMjAvMjAxOSAxMDoyMSBhbSAtIFNTTiAtIFJlcGxhY2UgYW5ndWxhci5tb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuaW1wb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9zaGFyZWQvRGF0YVNlcnZpY2VzJztcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gJy4uL1V0aWwvTG9nZ2VyL0lMb2dnZXJFcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBERExEX0NPTlNUQU5UUyB9IGZyb20gJy4vRHJvcGRvd25MaXN0RGlyZWN0aXZlQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQlJPQURDQVNUX0lERU5USUZJRVJTIH0gZnJvbSAnLi4vU2hhcmVkL0Jyb2FkY2FzdF9JZGVudGlmZXJzJztcclxuXHJcbmludGVyZmFjZSBMb29rdXBSZWNvcmQge1xyXG4gICAgaWQ6IG51bWJlclxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX0RETEQgZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XHJcblxyXG4gICAgZm9ybU5hbWU6IGFueVxyXG59XHJcblxyXG5cclxuLy8gQWRkIGF1dG9mb2N1cz1cInRydWVcIiB0byBzZXQgZm9jdXNcclxuXHJcbnZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGRlZmF1bHRBcHBOYW1lKSB7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChkZWZhdWx0QXBwTmFtZSkgIT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBkZWZhdWx0QXBwTmFtZSA9IFwiZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldFwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdEcm9wZG93bkxpc3REaXJlY3RpdmUnLCBkZWZhdWx0QXBwTmFtZSwgWyd1aS5ib290c3RyYXAnXSk7XHJcblxyXG5cclxuICAgICAgICAvLyBVc2VkIGZvciBzY3JvbGwgcGFnZSB3aGVuIGZvcm0gaXMgaW52YWxpZCwgb24gc3VibWl0LlxyXG4gICAgICAgIHZhciB1dGlsaXR5Q29udHJvbGxlcl9vYmplY3RSZWYgPSBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuY29udHJvbGxlcigndXRpbGl0eUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckYXR0cnMnLCAnJGxvY2F0aW9uJywgJ3Nzbl9sb2dnZXInLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsICRsb2NhdGlvbiwgc3NuX2xvZ2dlcikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtXzEgPSBmdW5jdGlvbiAoZXZlbnQsIGZvcm0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtLiR2YWxpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEludG9BcHBWaWV3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBodHRwczovL3d3dy5jb2RlLXNhbXBsZS5jb20vMjAxOC8xMS9hbmd1bGFyanMtc2Nyb2xsLXRvLWVycm9yLW9uLXN1Ym1pdC1hbmQuaHRtbFxyXG4gICAgICAgICAgICB2YXIgc2Nyb2xsSW50b0FwcFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGVsdCA9ICQoXCIuaGFzLWVycm9yOnZpc2libGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsdC5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxUb3A6IChlbHQuZmlyc3QoKS5vZmZzZXQoKS50b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbFRvcDogKGVsdC5maXJzdCgpLmNsb3Nlc3QoJ2RpdicpLnByZXZBbGwoJ2RpdicpLm9mZnNldCgpLnRvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAoZWx0LmZpcnN0KCkuY2xvc2VzdCgnZGl2LmZvcm0tZ3JvdXAnKS5vZmZzZXQoKS50b3AgLSA4MClcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3gnLCBbXCIkcVwiLCBcInNzbl9sb2dnZXJcIiwgZnVuY3Rpb24gKCRxLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94IC0gMjAyMTA2MTQtMjE1NCcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMjEgMDI6MDQgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE0XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoaXMgZm9yIGFkZGluZyBuZXcgaXRlbXMgdG8gbWFzdGVyLlxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0ciwgbmdNb2RlbF9jdHJsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSA9IGF0dHJbXCJkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2VcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5Q29sdW1uID0gYXR0cltcImtleUNvbHVtblwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94IGxpbmsgLSAyMDIxMDYxNy0xOTE2JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXlDb2x1bW46Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIDIwMjEwNjEwLTIxMTggZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZX1dYCwgJ2NvbG9yOmJsdWU7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdHRyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYmluZCgnYmx1cicsIChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGRyb3Bkb3duIGJsdXIgLSAyMDIxMDYxNy0xODA1ICcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEwcHQ7Jyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmdNb2RlbF9jdHJsLiRtb2RlbFZhbHVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmdNb2RlbF9jdHJsLiR2aWV3VmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmdNb2RlbF9jdHJsLiR2aWV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25nTW9kZWxfY3RybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFRoaXMgdXBkYXRlcyB0aGUgdmlldyB0byByZWZsZWN0IHRoZSBuZXcgaXRlbSBidXQgZG9lcyBub3QgdXBkYXRlIHRoZSB0eXBlYWhlYWQgc291cmNlLiAoXCJObyByZXN1bHRzIGZvdW5kXCIgaXMgZGlzcGxheWVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmdNb2RlbF9jdHJsLiRtb2RlbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyBkcm9wZG93biBibHVyIC0gc2V0dGluZyAkc2V0Vmlld1ZhbHVlIDIwMjEwNjE4LTAzNDAtYWFhYScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHNldFZpZXdWYWx1ZShuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZHJvcGRvd24gYmx1ciAtIE5PVCBzZXR0aW5nIG1vZGVsVmFsdWUgMjAyMTA2MTgtMDM0MCcsICdjb2xvcjpSRUQ7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSAmJiBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2U9PVwidHJ1ZVwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAgMjAyMTA2MTctMTkwMSAtIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSBbJHtkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2V9XWAsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8xOC8yMDIxIDA2OjQzIHBtIC0gU1NOIC0gQ2hhbmdlICRtb2RlbFZhbHVlIHRvICRtb2RlbFZhbHVlLmlkIChlZGl0IHRpbWVzaGVldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7IG1zZzogRERMRF9DT05TVEFOVFMuVVBEQVRFX0hJRERFTl9LRVlfVkFMVUUsIGtleUNvbHVtbjoga2V5Q29sdW1uLCBrZXlWYWx1ZTogbmdNb2RlbF9jdHJsLiRNb2RlbFZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfSElEREVOX0tFWV9WQUxVRSwgY2FsbFNvdXJjZTogJzIwMjEwNjE4LTE4NTgnLCBrZXlDb2x1bW46IGtleUNvbHVtbiwga2V5VmFsdWU6IG5nTW9kZWxfY3RybC4kbW9kZWxWYWx1ZS5pZCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5jb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94ID0gYXR0ci5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveC5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRnVuY3Rpb25hbFxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRzZXRWYWxpZGl0eShhdHRyLm5hbWUgKyAnLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94JywgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3guaW5kZXhPZih2YWx1ZSkgPT09IC0xKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJGFzeW5jVmFsaWRhdG9ycy5pc1ZhbGlkRHJvcGRvd25EaXJlY3RpdmVTZWxlY3Rpb24gPSBmdW5jdGlvbiAobW9kZWxWYWx1ZSwgdmlld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb2VzIGZpcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1vZGVsVmFsdWUgZG9lc24ndCBob25vciBzZWxlY3RlZCB2YWx1ZSBhZnRlciBpdCBoYXMgYWxyZWFkeSBiZWVuIHNldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW50aWwgd2UgY2FvbWUgdXAgd2l0aCBhIHdheSB0byByZXNldCBpdCwgZGlzYWJsZSBieSBieXBhc3NpbmcgYXMgdmFsaWQuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MTgtMTgxNScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmdNb2RlbF9jdHJsLiRkaXJ0eTonKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwuJGRpcnR5KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25SZXN1bHQgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmdNb2RlbF9jdHJsLiRkaXJ0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSBtb2RlbFZhbHVlICYmIG1vZGVsVmFsdWUuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSA9PSBcInRydWVcIikgdmFsaWRhdGlvblJlc3VsdCA9ICF2YWxpZGF0aW9uUmVzdWx0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uUmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIHByb21pc2Ugb2YgdGhlIGFzeW5jaHJvbm91cyB2YWxpZGF0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3REaXJlY3RpdmUnLCBbJ3Nzbl9sb2dnZXInLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoc3NuX2xvZ2dlciwgJHRpbWVvdXQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgY29udHJvbGxlciA9IFsnJHdpbmRvdycsICckaHR0cCcsICckcScsICckc2NvcGUnLCAnJHJvb3RTY29wZScsICckdGltZW91dCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdzc25fbG9nZ2VyJywgZnVuY3Rpb24gKCR3aW5kb3csICRodHRwLCAkcSwgJHNjb3BlLCAkcm9vdFNjb3BlLCAkdGltZW91dCwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMTgvMjAyMSAwNzo1NSBwbSAtIFNTTlxyXG4gICAgICAgICAgICAgICAgLy8gTW92ZSBvdXRzaWRlIGZ1bmN0aW9uIHRvIHBvc3QgbmV3IGVudHJpZXMuICBMb29raW5nIHRvIHVwZGF0ZSB0eXBlYWhlYWQgb24gYWRkaXRpb24gb24gbmV3IGVudHJpZXMgc28gXCJObyByZXN1bHRzIGZvdW5kXCIgY291bGQgZGlzYXBwZWFyXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdm0udGVtcENvbnRyb2xOYW1lID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZV8ke3ZtLmNhbGxTb3VyY2V9X2AgKyBkLmdldEhvdXJzKCkgKyBcIl9cIiArIGQuZ2V0TWludXRlcygpICsgXCJfXCIgKyBkLmdldFNlY29uZHMoKSArIFwiX1wiICsgZC5nZXRNaWxsaXNlY29uZHMoKTtcclxuICAgICAgICAgICAgICAgIC8vIHZtLnRlbXBDb250cm9sTmFtZSA9IHRoaXMua2V5Q29sdW1uO1xyXG4gICAgICAgICAgICAgICAgdm0udGVtcENvbnRyb2xOYW1lID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZV8ke01hdGgucmFuZG9tKCl9X2A7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uYmxhY2tMaXN0RXJyb3JOYW1lID0gdm0udGVtcENvbnRyb2xOYW1lICsgXCIuZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hcIjtcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZXJyb3JUcmlnZ2VyZWQgPSBmdW5jdGlvbiAoZXJyb3JOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS5mb3JtTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIXZtLmZvcm1OYW1lLiRlcnJvcltlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmVycm9yVHJpZ2dlcmVkV2l0aENvbnRyb2xOYW1lID0gZnVuY3Rpb24gKGNvbnRyb2xOYW1lLCBlcnJvck5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXS4kZXJyb3JbZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIHdpdGggJ3JlcXVpcmVkJyByZXR1cm4gYSBib29sZWFuLiAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLmZvcm1OYW1lKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2bS5mb3JtTmFtZVtjb250cm9sTmFtZV0pW1wiJGVycm9yXCJdW2Vycm9yTmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiRvbihCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIGZ1bmN0aW9uIChldmVudHMsIGFyZ3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzSGFuZGxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGZpcmVzIG9uIHN0YXJ0IGFuZCBvbmNlIG9uIGNoYW5nZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgWyR7QlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFfV1gLCAnY29sb3I6Ymx1ZTtmb250LXNpemU6MTJwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLm1zZyA9PT0gRERMRF9DT05TVEFOVFMuRE9fU0VUX0ZPQ1VTICYmIGFyZ3MuanF1ZXJ5T2JqZWN0UmVmKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmpxdWVyeU9iamVjdFJlZi5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBhcmVudEtleU5hbWUgJiYgdm0ucGFyZW50S2V5TmFtZSA9PSBhcmdzLmtleUNvbHVtbiAmJiBhcmdzLmtleVZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5wYXJlbnRLZXlDb2x1bW4gPSBhcmdzLmtleVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuVVBEQVRFX0hJRERFTl9LRVlfVkFMVUUpICYmIHZtLmtleUNvbHVtbiAmJiBhcmdzLmtleUNvbHVtbiAmJiAodm0ua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkgPT0gYXJncy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV1gLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBoaWRkZW5GaWVsZE5hbWUgWyR7dm0uaGlkZGVuRmllbGROYW1lfV1gLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBhcmdzLmtleVZhbHVlIFske2FyZ3Mua2V5VmFsdWV9XWAsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS5rZXlDb2x1bW4gJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmtleUNvbHVtbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJncy5rZXlDb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5rZXlDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwoYXJncy5rZXlWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxTb3VyY2U6ICcyMDIxMDYxNy0yMTU0JywgbWVzc2FnZTogYGhpZGRlbkZpZWxkTmFtZSBub3QgZGVmaW5lZCB3aGlsZSB1cGRhdGluZyBbJHthcmdzLmtleUNvbHVtbn1dfSB2bS5DYWxsU291cmNlIFske3ZtLmNhbGxTb3VyY2V9XWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuVVBEQVRFX0RST1BET1dOX0xJU1QpICYmIHZtLmtleUNvbHVtbiAmJiBhcmdzLmtleUNvbHVtbiAmJiAodm0ua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkgPT0gYXJncy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTE3MDgtQi0yJywgbWVzc2FnZTogYFske0JST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRX1dIHVwZGF0ZSBkcm9wZG93biAtIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdncmVlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzJywgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIHZtLmdldERpc2NpcGxpbmVzKGFyZ3MuZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGFyZ3MuaWQsIHRpdGxlOiBhcmdzLmRlc2NyaXB0aW9uIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTgtMTk1MicsIG1lc3NhZ2U6IGBbJHtCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkV9XSBhZGRpbmcgbmV3IGVudHJ5IHRvICdhZGRyZXNzZXMnYCB9LCAncmVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGFyZ3MuaWQsIHRpdGxlOiBhcmdzLmRlc2NyaXB0aW9uIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgICB2bS5uZ01vZGVsLiRzZXRWaWV3VmFsdWUoYXJncy5kZXNjcmlwdGlvbilcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyR0aW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYxOC0wMzMwIC0gc2V0Vmlld1ZhbHVlICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB2bS5uZ01vZGVsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8kdGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnMjAyMTA2MTgtMDMzMCAtIHNldFZpZXdWYWx1ZSAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdm0ubmdNb2RlbCA9IGFyZ3MuZGVzY3JpcHRpb24gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgLCAyMDAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuQ0FMTF9WQUxJREFURV9USElTKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNTI5JywgbWVzc2FnZTogJ2NhbGwgdmFsaWRhdGVUaGlzJyB9LCAnYmx1ZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0udmFsaWRhdGVUaGlzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuU0VMRUNUX05FV19WQUxVRSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTctMDY0MycsIG1lc3NhZ2U6ICdzZWxlY3QgbmV3IHZhbHVlIGZpcmluZycgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmhpZGRlbkZpZWxkTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB2bS5oaWRkZW5GaWVsZE5hbWUgKyBcIiddXCIpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGFuZGxlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMDU0NycsIG1lc3NhZ2U6IGBbJHtCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkV9XSBub3QgaGFuZGxlZCAtIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50czonLCBldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJncycsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA4OjI5IGFtIC0gU1NOIC0gQWRkaW5nIC0gTmVlZCB0byBpbml0aWFsaXphIGZvciAkd2F0Y2ggdG8gd29yay5cclxuICAgICAgICAgICAgICAgIC8vIGRpc2NpcGxpbmVTZWxlY3RlZF9YWFggIGluc3RlYWQgb2YgbmdNb2RlbCBiZWNhdXNlIHdlIHVzZSBhbiBvYmplY3QgZm9yIHNlbGVjdGVkIGVudHJ5LCBpZCBhbmQgdGlsZS4gbmdNb2RlbCBpcyB1c3VhbGx5IGEga2V5LiAoVGhlIGlkKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IERyb3BEb3duTGlzdERpcmVjdGl2ZSAtIDIwMjEwNjE0LTIxNTInLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEubmdNb2RlbCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTQzOCcsIG1lc3NhZ2U6IGBDSEFOR0Ugdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3llbGxvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjEyIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyMl0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAobmV3VmFsdWUgIT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNDM4LUInLCBtZXNzYWdlOiBgQ0hBTkdFIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdncmVlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0udmFsaWRhdGVUaGlzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNDM4LUMtMicsIG1lc3NhZ2U6IGBDSEFOR0Ugdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3JlZCcpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2bS5pc1JlYWR5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEucGFyZW50S2V5Q29sdW1uJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTctMTg0NScsIG1lc3NhZ2U6ICd2bTEwMS5wYXJlbnRLZXlDb2x1bW4gLSB3YXRjaCcgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlICE9IG5ld1ZhbHVlICYmIG9sZFZhbHVlICE9IG51bGwpIHsgLy8gb2xkVmFsdWUgaXMgbnVsbCBvbiBmaXJzdCBjYWxsLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZtLm5nTW9kZWwgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjA3IHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyMV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSAtMTAyMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB2bTEwMS5wYXJlbnRLZXlDb2x1bW4gLSBzZXR0aW5nIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIDIwMjEwNjE3LTEyMTRgLCAnY29sb3I6Y3lhbjtmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92bS5uZ01vZGVsID0gLTE7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmhpZGRlbkZpZWxkTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB2bTEwMS5wYXJlbnRLZXlDb2x1bW4gLSBzZXR0aW5nIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIDIwMjEwNjE3LTE4NDcgLSBibGFuayBvdXQgWyR7dm0uaGlkZGVuRmllbGROYW1lfV1gLCAnY29sb3I6Y3lhbjtmb250LXNpemU6MTJwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwoJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZTogTG9va3VwUmVjb3JkLCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLiR3YXRjaCgndm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCcsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB2bTEwMS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYIHdhdGNoIC0gMjAyMTA2MTctMTIyN2AsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBzaG93cyBudWxsIGZvciBuZXcgdmFsdWUgJywgJ2NvbG9yOnJlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25ld1ZhbHVlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29sZFZhbHVlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9sZFZhbHVlKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgc2hvd3MgbnVsbCBmb3IgYm90aCB2YWx1ZXMgJywgJ2NvbG9yOnJlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndm0uJG1vZGVsVmFsdWU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uJG1vZGVsVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndm0uJHZpZXdWYWx1ZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS4kdmlld1ZhbHVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBuZXdWYWx1ZS5pZCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5uZ01vZGVsID0gbmV3VmFsdWUuaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dIDIwMjEwNjE3LTEyMTNgLCAnY29sb3I6Y3lhbjtmb250LXNpemU6MTJwdCcpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmhpZGRlbkZpZWxkTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBzZXR0aW5nIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gdXBkYXRlIHZtLmhpZGRlbkZpZWxkTmFtZSAgWyR7dm0uaGlkZGVuRmllbGROYW1lfV0gIHdpdGggWyR7bmV3VmFsdWUuaWR9XSAyMDIxMDYxOC0yMDA4YCwgJ2NvbG9yOnJlZDtmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB2bS5oaWRkZW5GaWVsZE5hbWUgKyBcIiddXCIpLnZhbChuZXdWYWx1ZS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZS4kZGlydHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5kb1NldEhhdmVDaGFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmtleUNvbHVtbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmRpc2NpcGxpbmVpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2NpcGxpbmVpZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL0Rpc2NpcGxpbmVBUEknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTIvMTAvMjAyMCAwNDozMiBwbSAtIFNTTiAtIFsyMDIwMTIxMC0xNjI1XSAtIFswMDJdIC0gVXBkYXRlIFRpbWVsb2cgZWRpdCBNVkNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vY2FzZSAndGltZWxvZy5saW5laXRlbWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGluZWl0ZW1pZCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL2pvYl9MaW5lSXRlbUFQSS90eXBlYWhlYWRfam9icmVjb3Jkcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9qb2JfTGluZUl0ZW1BUEkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5qb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYi5qb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkX3Byb2plY3RSZWNvcmRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwNDo0NiBwbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2IucHJvamVjdGlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9wcm9qZWN0YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjEzIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyM10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RlY2hub2xvZ3lpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvdGVjaG5vbG9neWFwaS90eXBlYWhlYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvdGVjaG5vbG9neWFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLkFQSVVybExpc3RBbGwgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbWlzc2luZyBkZWZpbml0aW9uIGZvciBBUElVcmxMaXN0QWxsIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMTA2MDgtMTMxMGBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7ZXJyb3JNZXNzYWdlfWAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTMxMScsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLkFQSVVybFNpbmdsZVJlY29yZCA9PSB1bmRlZmluZWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbWlzc2luZyBkZWZpbml0aW9uIGZvciB2bS5BUElVcmxTaW5nbGVSZWNvcmQgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIxMDYwOC0xNDI3YFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtlcnJvck1lc3NhZ2V9YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xNDI4JywgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5Q29sdW1uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudEtleUNvbHVtblZhbHVlID0gdGhpcy5wYXJlbnRLZXlDb2x1bW47IC8vdW5kZWZpbmVkO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRLZXlDb2x1bW5WYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSB2bS5BUElVcmxMaXN0QWxsICsgXCIvXCIgKyBwYXJlbnRLZXlDb2x1bW5WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jaGFuZ2luZyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7IG1zZzogRERMRF9DT05TVEFOVFMuU0VMRUNUX05FV19WQUxVRSwgY2FsbFNvdXJjZTpcIjIwMjEwNjE4LTE5MTYtY2hhbmdpbmdcIiwga2V5Q29sdW1uOiB2bS5rZXlDb2x1bW4sIGtleVZhbHVlOiB2bS5uZ01vZGVsIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMTYvMjAyMSAxMDozNiBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFsxMDddIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnR5cGVhaGVhZE9uU2VsZWN0ID0gZnVuY3Rpb24gKGl0ZW0sIG1vZGVsLCBsYWJlbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgdHlwZWFoZWFkT25TZWxlY3QgMjAyMTA2MTYtMjIzNyBgKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbSB4eHh4eHh4eHg6JylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtb2RlbDonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYWJlbDonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhYmVsKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IGl0ZW07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5uZ01vZGVsID0gaXRlbS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHNldHRpbmcgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgMjAyMTA2MTctMTIxMmAsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZW06Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZVRoaXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDozOSBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMjZdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIERyb3Bkb3duTGlzdERpcmVjdGl2ZSB2bS52YWxpZGF0ZVRoaXMgLSAyMDIxMDYxNy0xMDQzICAnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0ubmdNb2RlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5uZ01vZGVsID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodm0ubmdNb2RlbCAhPSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVDdXJyZW50KHZtLm5nTW9kZWwpLnRoZW4odm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2Vzcywgdm0uY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICRzY29wZS4kYnJvYWRjYXN0KEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgeyBtc2c6IERETERfQ0hBTkdFX01TRy5IQVNfVkFMSURfVkFMVUUsIGtleUNvbHVtbjogdm0ua2V5Q29sdW1uLCBrZXlWYWx1ZTogdm0ubmdNb2RlbCB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0wNTI4JywgbWVzc2FnZTogYHZhbGlkYXRlVGhpczogdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3llbGxvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgdGl0bGU6IHZtLmNvbnRhaW5lclZpZXdWYWx1ZSB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY3VycmVudERpc3BsaW5lTG9va3VwU3VjY2VzcyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBjdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzIC0gMjAyMTA2MTctMTA1MScsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgdXBkYXRlIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggIDIwMjEwNjE4LTE5MTgnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxMnB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBjaGVjayBkYXRhLmRpc2NpcGxpbmVpZCBkYXRhLnRhX2lkICcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjEycHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogZGF0YS5kaXNjaXBsaW5lSWQsIHRpdGxlOiBkYXRhLmRpc2NpcGxpbmVTaG9ydCB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudGFfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogZGF0YS50YV9pZCwgdGl0bGU6IGRhdGEudGFfZGVzY3JpcHRpb24gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzBcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzMVwiIH0sIFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMyXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzNcIiB9LCBcInJlZFwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjE1OC1BJywgbWVzc2FnZTogYGN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yIGAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0yMTU4LUInLCBtZXNzYWdlOiBgY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgYCwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsbGVkIGZyb20gdmlldyBpbnB1dCBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lcyA9IGZ1bmN0aW9uIChsb29rdXBWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZ2V0RGlzY2lwbGluZXMgIDIwMjEwNjE4LTE5MTknLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNnB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4vLyBGb3IgYWRkaW5nIG5ldyBlbnRyaWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmNvbnRhaW5lclZpZXdWYWx1ZSA9IGxvb2t1cFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDctQVwiLCBtZXNzYWdlOiBcImdldERpc2NpcGxpbmUgY2FsbCB0byBhc3NpZ24gY29udGFpbmVyVmlld1ZhbHVlIGZhaWxlZFwiIH0sIFwiUmVkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTItMDA0MVwiLCBtZXNzYWdlOiBgZ2V0RGlzY2lwbGluZSBjYWxsIHRvIGFzc2lnbiBjb250YWluZXJWaWV3VmFsdWUgZmFpbGVkIFske2xvb2t1cFZhbHVlfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBWYWx1ZSA9PT0gbnVsbCkgbG9va3VwVmFsdWUgPSBcIlwiO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUucXVlcnlJc0luUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhlY3V0ZVF1ZXJ5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGV4ZWN1dGVRdWVyeSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBnZXREaXNjaXBsaW5lcyAtIDIwMjEwNjE3LTExMTkgJywgJ2NvbG9yOnllbGxvdycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZtLkFQSVVybExpc3RBbGw6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLkFQSVVybExpc3RBbGwpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWJvdW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB2bS5BUElVcmxMaXN0QWxsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3NlcyA9IFtdO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmZvckVhY2gocmVzcG9uc2UuZGF0YSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lSWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kaXNjaXBsaW5lU2hvcnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGl0ZW0uZGlzY2lwbGluZVNob3J0IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2Rlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihsb29rdXBWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzLnB1c2goeyBpZDogaXRlbS50YV9pZCwgdGl0bGU6IGl0ZW0udGFfZGVzY3JpcHRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5hZGRyZXNzZXMubGVuZ3RoID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB2bS5hZGRyZXNzZXNbMF07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMi8yMDIxIDAxOjE1IHBtIC0gU1NOIC0gVGVzdGluZyBpZiBjYW4gZ2V0IG92ZXIgcHJldmVudGluZyB1c2VycyBmcm9tIGFsdGVyaW5nIHNpbmdsZSBtYXRjaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8gdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IHZtLmFkZHJlc3Nlc1swXS5pZCB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZtLm5nTW9kZWwgPSB2bS5hZGRyZXNzZXNbMF0uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGVmZXJyZWRfZ2V0RGlzY2lwbGluZVF1ZXJ5LnJlc29sdmUodm0uYWRkcmVzc2VzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucXVlcnlJc0luUHJvZ3Jlc3MgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcihlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwOC0yMTM5XCIsIG1lc3NhZ2U6IFwidHlwZWFoZWFkRGlzY2lwbGluZUVycm9yXCIgfSwgXCJyZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxNDBcIiwgbWVzc2FnZTogXCJ0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3JcIiwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQgPSBmdW5jdGlvbiAobG9va3VwSUQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBJRCA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSBsb29rdXBJRCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTE0MTUnLCBtZXNzYWdlOiBgQ2FsbGluZyBnZXREaXNjaXBsaW5lQ3VycmVudCAgd2l0aCBudWxsIGxvb2t1cElEYCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxVcmwgPSB2bS5BUElVcmxTaW5nbGVSZWNvcmQgKyBcIi9cIiArIGxvb2t1cElEO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGxvY2FsVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcikuY2F0Y2godHlwZWFoZWFkRGlzY2lwbGluZUNhdGNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgZ2V0RGlzY2lwbGluZUN1cnJlbnQgMjAyIGxvb2t1cElEICBbJHtsb29rdXBJRH1dIGVycm9yYCwgJ2NvbG9yOnJlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzE2JywgbWVzc2FnZTogYEZhaWxlZCBjYWxsIHRvIFske2xvY2FsVXJsfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVDYXRjaChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHR5cGVhaGVhZERpc2NpcGxpbmVDYXRjaCAgbG9va3VwSUQgIFske2xvb2t1cElEfV0gY2F0Y2hgLCAnY29sb3I6cmVkLGZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzE2JywgbWVzc2FnZTogYEZhaWxlZCBjYWxsIHRvIFske2xvY2FsVXJsfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZvcm1FcnJvcnNCeUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUsIGVycm9yTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSlbXCIkZXJyb3JcIl1bZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL0Ryb3Bkb3duTGlzdC9Ecm9wRG93bkxpc3REaXJlY3RpdmUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbFNvdXJjZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEtleUNvbHVtbjogXCI9cGFyZW50a2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5TmFtZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRmllbGROYW1lOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbDogXCI9XCIsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jOiBcIiZcIixcclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jU291cmNlOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZGVyIGZvciB0eXBlZCBpbiB2YWx1ZSwgaWYgaXQgZG9lc24ndCBleGlzdCwgc28gaXQgY2FuIGJlIGNvcGllZCB0byB0aGUgYWRkIGZvcm0uXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBcIj0/XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZTogXCJAXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZTogZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJWaWV3VmFsdWUgPSBcIk5vdFNldC0yMDIxMDYwNy0wMjEzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNy0xNjA4LUFcIiwgbWVzc2FnZTogXCJVcGRhdGUgY29udGFpbmVyVmlld1ZhbHVlXCIgfSwgXCJyZWRcIix0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDctMTYwOC1CXCIsIG1lc3NhZ2U6IHRoaXMuY2FsbFNvdXJjZSB9LCBcInJlZFwiLHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3ICBsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnMjAyMTA2MDctMDEyNyAyIGxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3IDIgbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgMjIyIGxpbmsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB2YXIgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGN0cmwuJHNldFZhbGlkaXR5KCdkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIHZhbGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHJldHVybiB2YWx1ZTsgLy92YWxpZCA/IHZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA1OjI5IGFtIC0gU1NOIC0gWzIwMTkxMTI4LTA1MjldIC0gWzAwMV0gLSBBdXRvZm9jdXNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYXV0b2ZvY3VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRyLmF1dG9mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRyLmF1dG9mb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRyLmF1dG9mb2N1cycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2V0Zm9jdXNGdW5jID0gKGVsZW0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRyLmF1dG9mb2N1cyAtIDInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzIC0gMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0ci5hdXRvZm9jdXMgLSAyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cnMuYXV0b2ZvY3VzLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzIC0gMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzIC0gMycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzIC0gMycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dE9iaiA9IGVsZW0uZmluZCgnaW5wdXRbdHlwZT10ZXh0XScpLmZpbHRlcignOnZpc2libGU6Zmlyc3QnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXRPYmoudmFsKCkgPT09IFwiXCIpIHtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRPYmouZm9jdXMoKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmZvcm1OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICcyMDIxMDYxMi0wMzUzLUEgLSBzZXRmb2N1cyAnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ3RoaXNmb3JtTmFtZTonLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNjb3BlLmZvcm1OYW1lKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAndGhpc2Zvcm1OYW1lLiR0b3VjaGVkJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdDsnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArIHNjb3BlLmZvcm1OYW1lLiR0b3VjaGVkLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgeyBtc2c6IERETERfQ09OU1RBTlRTLkRPX1NFVF9GT0NVUywganF1ZXJ5T2JqZWN0UmVmOiBpbnB1dE9iaiB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJzIwMjEwNjEyLTAzNTMtQiAtIHNldGZvY3VzICAtIE5PIEZPUk0gTkFNRScsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQ7JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHsgc2V0Zm9jdXNGdW5jKGVsKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA2LzE3LzIwMjEgMDk6MjkgcG0gLSBTU04gXHJcblxyXG5jb25zdCBERExEX0NPTlNUQU5UUyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBOT1RfREVGSU5FRDogXCJOT1RfREVGSU5FRFwiLFxyXG4gICAgICAgIFVQREFURV9ISURERU5fS0VZX1ZBTFVFOiBcIlVQREFURV9ISURERU5fS0VZX1ZBTFVFXCIsXHJcbiAgICAgICAgU0VMRUNUX05FV19WQUxVRTogXCJTRUxFQ1RfTkVXX1ZBTFVFXCIsXHJcbiAgICAgICAgSEFTX1ZBTElEX1ZBTFVFOiBcIkhBU19WQUxJRF9WQUxVRVwiLFxyXG4gICAgICAgIERPX1NFVF9GT0NVUzogXCJET19TRVRfRk9DVVNcIixcclxuICAgICAgICBVUERBVEVfRFJPUERPV05fTElTVDogXCJVUERBVEVfRFJPUERPV05fTElTVFwiLFxyXG4gICAgICAgIENBTExfVkFMSURBVEVfVEhJUzogXCJDQUxMX1ZBTElEQVRFX1RISVNcIlxyXG5cclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IERETERfQ09OU1RBTlRTIH0iLCLvu79cclxuLy8gMDYvMTgvMjAyMSAwMjo1OCBhbSAtIFNTTiAtIEFkZGluZ1xyXG5cclxuZXhwb3J0IGNvbnN0IEJST0FEQ0FTVF9JREVOVElGSUVSUyA9IHtcclxuXHJcbiAgICBEUk9QRE9XTl9MSVNUX0RJUkVDVElWRTpcIkRST1BET1dOX0xJU1RfRElSRUNUSVZFXCJcclxuXHJcbn0iLCLvu79cclxuLy8gMDYvMDkvMjAyMSAxMTo1MiBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMTBdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJ1xyXG5cclxuXHJcbmNvbnN0IE1vZGFsQ2FsbHNVdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlLCBuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ01vZGFsQ2FsbHNVdGlsJyArICdfWF8nICsgY2FsbFNvdXJjZSwgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ01vZGFsQ2FsbFNVdGlsQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ3Nzbl9sb2dnZXInLCAnJHVpYk1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsIHNzbl9sb2dnZXIsICR1aWJNb2RhbCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwMjQnLCBtZXNzYWdlOiAnTW9kYWxDYWxsc1V0aWwgZG9TZXR1cCcgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwNDMtQScsIG1lc3NhZ2U6ICdDYWxsaW5nIGFkZE5ld0xpbmVJdGVtJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDA0My1CJywgbWVzc2FnZTogYGpvYklEIFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDQzLUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbVRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGluZUl0ZW1Db250cm9sbGVyJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDM6MjUgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQwXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZE5ld1RlY2hub2xvZ3kgPSBmdW5jdGlvbiAoY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNS0wMzI2LUEnLCBtZXNzYWdlOiAnQ2FsbGluZyBhZGROZXdUZWNobm9sb2d5ICcgfSwgJ3llbGxvdycsIHRydWUpOyBcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNS0wMzI2LUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL1RlY2hub2xvZ3kvVGVjaG5vbG9neUNyZWF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlY2hub2xvZ3lDb250cm9sbGVyJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgTW9kYWxDYWxsc1V0aWwgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNi8xNS8yMDIxIDAzOjMxIGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0MV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uLy9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgdG9zdHIgZnJvbSBcInRvYXN0clwiO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgSURldlNpdGUgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JRGV2U2l0ZVwiO1xyXG5pbXBvcnQgeyBERExEX0NPTlNUQU5UUyB9IGZyb20gXCIuLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEJST0FEQ0FTVF9JREVOVElGSUVSUyB9IGZyb20gXCIuLi9TaGFyZWQvQnJvYWRjYXN0X0lkZW50aWZlcnNcIjtcclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoXCJUZWNobm9sb2d5Q29udHJvbGxlcl9pbnN0YW5jZVwiKTtcclxuXHJcblxyXG5jb25zdCBUZWNobm9sb2d5Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyQXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RlY2hub2xvZ3lDb250cm9sbGVyJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJBcHAuY29udHJvbGxlcignVGVjaG5vbG9neUNvbnRyb2xsZXInLCBbJyRxJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCAnY29udGFpbmVyVmlld1ZhbHVlJywgVGVjaG5vbG9neUNvbnRyb2xsZXJGdW5jdGlvbl0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFRlY2hub2xvZ3lDb250cm9sbGVyRnVuY3Rpb24oJHEsICR1aWJNb2RhbEluc3RhbmNlLCAkcm9vdFNjb3BlLCAkc2NvcGUsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRlZmF1bHRWYWx1ZSA9IGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfRGV2U2l0ZVRlY2hub2xvZ3lcIiwgeyBTb3VyY2VDb2RlOiBcIjIwMjEwNjE1LTAzNDJcIiwgTWVzc2FnZTogXCJJbml0XCIgfSk7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIlRlY2hub2xvZ3ktMDAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGVjaG5vbG9neSA9IHsgZGVzY3JpcHRpb246ICRzY29wZS5kZWZhdWx0dmFsdWUgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRlY2hub2xvZ3kuZGVzY3JpcHRpb24gPSAkc2NvcGUuZGVmYXVsdFZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRHVyaW5nIHRlc3Rpbmcgd2l0aCBMaW5lSXRlbSwgd2Ugd2VyZSBlbmRpbmcgdXAgd2l0aCByZWNvcmRzIGJlaW5nIHNhdmVkIHdpdGggdGhlIHZhbHVlIFwiMFwiLiAgU291cmNlIG5vdCBkZXRlcm1pbmVkLlxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRlY2hub2xvZ3kuZGVzY3JpcHRpb24gPT0gXCIwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE1LTAzNThcIiwgbWVzc2FnZTogXCJEZXZTaXRlIFRlY2hub2xvZ3kgbmV3IGVudHJ5IGVycm9yIC0gc2F2aW5nICcwJyByZWNvcmQgXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuYWRkT3JVcGRhdGVUZWNobm9sb2d5KCRzY29wZS5lZGl0YWJsZVRlY2hub2xvZ3kpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfRFJPUERPV05fTElTVCwga2V5Q29sdW1uOiBcInRlY2hub2xvZ3lJZFwiLCBpZDogZGF0YS5pZCwgZGVzY3JpcHRpb246IGRhdGEuZGVzY3JpcHRpb24gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKGBOZXcgcmVjb3JkICckeyRzY29wZS5lZGl0YWJsZVRlY2hub2xvZ3kuZGVzY3JpcHRpb259JyBzYXZlZC5gKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkRldlNpdGUgVGVjaG5vbG9neSAgLSAyMDIxMDYxNS0wNDA2IC0gcHJvbWlzZSA+IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTUtMDQwOVwiLCBtZXNzYWdlOiBcImZ1bmN0aW9uID4gZXJyb3JcIiwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE1LTA0MDhcIiwgbWVzc2FnZTogXCJmdW5jdGlvbiA+IGVycm9yXCIsIGVycm9yT2JqZWN0OiBlcnJvciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IFRlY2hub2xvZ3lDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMDk6NDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA0XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0cyB9IGZyb20gJ2FwcGxpY2F0aW9uaW5zaWdodHMtanMnO1xyXG5cclxuXHJcbnZhciBBcHBJbnNpZ2h0c19VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZWxmID0geyBjYWxsU291cmNlOiAnTm90U2V0LTIwMjEwNjA2MjIyOCcgfTtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG5cclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IGVudmlyb25tZW50LmFwcEluc2lnaHRzLmluc3RydW1lbnRhdGlvbktleVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhdmVJbnN0cnVtZW50YXRpb25LZXkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWcuaW5zdHJ1bWVudGF0aW9uS2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc2VsZi5jYWxsU291cmNlID0gY2FsbFNvdXJjZTtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvVGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBwYWdlIHZpZXcgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxyXG4gICAgICAgICAgICBcIkZpcnN0UGFnZS0yMDE5MTAwMS0xMDE1XCIsIC8qIChvcHRpb25hbCkgcGFnZSBuYW1lICovXHJcbiAgICAgICAgICAgIG51bGwsIC8qIChvcHRpb25hbCkgcGFnZSB1cmwgaWYgYXZhaWxhYmxlICovXHJcbiAgICAgICAgICAgIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCAvKiAob3B0aW9uYWwpIGRpbWVuc2lvbiBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIHsgbWVhc3VyZW1lbnQxOiAxIH0sIC8qIChvcHRpb25hbCkgbWV0cmljIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgMTIzIC8qIHBhZ2UgdmlldyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBldmVudCAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQoXCJUZXN0RXZlbnQtMjAxOTEwMDEtMTAxNlwiLCB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgeyBtZWFzdXJlbWVudDE6IDEgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgbG9nUGFnZVZpZXcgPSBmdW5jdGlvbiAobmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnksIGR1cmF0aW9uPzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0cyAgLSBsb2dQYWdlVmlldyAtIDIwMjEwNjA2LTIyMjMnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgY2FsbFNvdXJjZV9haW06IHNlbGYuY2FsbFNvdXJjZSwgLi4ucHJvcGVydGllcyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uOiBhbnkgfCBhbnksIHByb3BzPzogYW55LCBoYW5kbGVkQXQ/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIC8vIDA2LzE1LzIwMjEgMDg6MDggYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ3XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuICAgICAgICAvLyBBcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihleGNlcHRpb24sIGhhbmRsZWRBdCwgcHJvcHMpO1xyXG5cclxuICAgICAgICBpZiAoZXhjZXB0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBwcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmV4Y2VwdGlvbiB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMDkvMjAxOSAxMTowMyBhbSAtIFNTTiAtIENyZWF0ZWRcclxuXHJcbi8vIDExLzE4LzIwMTkgMDI6MjYgcG0gLSBTU04gLSBDcmVhdGUgY2xhc3MgZm9yIGhhdmVDaGFuZ2VzXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxudmFyIENoYW5nZU1vbml0b3JfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2V0SXRlbUNoYW5nZWRfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMDkvMjAxOSAwODowOCBhbSAtIFNTTiAtIEFkZGVkIG1vbml0b3JDaGFuZ2VfU1NOXHJcbiAgICB2YXIgbW9uaXRvckNoYW5nZV9TU04gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA4OjI4IGFtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBidXR0b25zLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA6MTggYW0gLSBTU04gLSBBZGRlZCBlbWFpbCBhbmQgcGFzc3dvcmQgKGxvZ2luKVxyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlYXJjaCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZW1haWwnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDAyOjI3IHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBpZiAob2JqMS5ub0NoYW5nZU1vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iajEuaWQgJiYgIW9iajEubmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfdjAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXM6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJywgX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdDaGFuZ2VNb25pdG9yU2VydmljZScsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2RvU2V0SGF2ZUNoYW5nZSA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNldHVwTW9uaXRvcjogX3NldHVwTW9uaXRvcixcclxuICAgICAgICAgICAgICAgIGdldEhhdmVDaGFuZ2VzOiBfZ2V0SGF2ZUNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICByZXNldDogX3Jlc2V0LFxyXG4gICAgICAgICAgICAgICAgZG9TZXRIYXZlQ2hhbmdlOiBfZG9TZXRIYXZlQ2hhbmdlXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuXHJcbi8vIDA2LzA2LzIwMjEgMDY6MzkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDExXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uLy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyRXJyb3JNZXNzYWdlLCBJTG9nZ2VyTW9kdWxlLCBJTG9nZ2VyTWVzc2FnZSB9IGZyb20gJy4vSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4uLy4uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcblxyXG5jb25zdCBzc25fQW5ndWxhckpzbG9nZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSAoY2FsbFNvdXJjZTogc3RyaW5nLCBjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoY2FsbFNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuZ3VsYXJNb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignc3NuX2xvZ2dlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJNb2R1bGUuZmFjdG9yeShcInNzbl9sb2dnZXJcIiwgWyckcScsIGZ1bmN0aW9uICgkcSk6IElMb2dnZXJNb2R1bGUge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbF9ub3JtYWwgPSBmdW5jdGlvbiAobXNnOiBJTG9nZ2VyTWVzc2FnZSwgY29sb3I6IHN0cmluZywgbG91ZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gYGNvbG9yOiR7Y29sb3J9O2A7XHJcbiAgICAgICAgICAgICAgICBpZiAobG91ZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IGBmb250LXNpemU6MTJweDtmb250LXdlaWdodDpib2xkO2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZy5jYWxsU291cmNlLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2cubWVzc2FnZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIsIHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnOiBJTG9nZ2VyRXJyb3JNZXNzYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7JztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgY2FsbFNvdXJjZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZXJyb3JNc2cuY2FsbFNvdXJjZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZXJyb3JNc2cubWVzc2FnZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNc2cuZXJyb3JPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA4OjM4IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0OF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0geyBTb3VyY2VDb2RlMTogYHNzbi1hbmdqcy1bJHtjYWxsU291cmNlfV1gLCBTb3VyY2VDb2RlMjogZXJyb3JNc2cuY2FsbFNvdXJjZSwgTWVzc2FnZTogZXJyb3JNc2cubWVzc2FnZSB9O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFeGNlcHRpb24oZXJyb3JNc2cuZXJyb3JPYmplY3QsIHByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsX25vcm1hbCxcclxuICAgICAgICAgICAgICAgIGNsX2Vycm9yXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9O1xyXG4iLCLvu79cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG4vLyAxMi8yOC8yMDE5IDEwOjAgcG0gLSBTU04gLSBBZGRpbmcgQXBwSW5zaWdodHNfVXRpbCBcclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuIC8vIDA2LzA2LzIwMjEgMDU6MjkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDA5XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4vLyBjYWxsU291cmNlX3BhcmVudFxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lOnN0cmluZywgY2FsbFNvdXJjZV9wYXJlbnQ6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDE5MTIyOF8yMjI4XCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTIyOC0yMjEwXCIsIE1lc3NhZ2U6IFwiZG9TZXR1cFwiLCBDYWxsU291cmNlX3BhcmVudDogY2FsbFNvdXJjZV9wYXJlbnR9KTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IGFscmVhZHlQb3N0ZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAmJiBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnlwYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQSBcIi50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJuZy1jbGlja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJocmVmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnlwYXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS5hZGRDbGFzcygnY3NzSGlsaWdodDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlbW92ZUFkZGVkQ2xhc3Moc3BhblRlbXApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG5cclxuLy8gMDkvMjEvMjAxOSAwODowMCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMTFdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcblxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvL2tub2Nrb3V0L2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vanMvc2hhcmVkL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tICcuL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBJRGV2U2l0ZVRlY2hub2xvZ3kgfSBmcm9tICcuL0ludGVyZmFjZXMvSURldlNpdGVUZWNobm9sb2d5JztcclxuXHJcblxyXG52YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gMDYvMTUvMjAyMSAwMjo1MCBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMzldIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgLy8gdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ2RlbW9TaXRlX2luZGV4JywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJ10pO1xyXG4gICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ2RlbW9TaXRlX2luZGV4JywgXCJkZW1vU2l0ZXNfSW5kZXhcIiwgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCddKTtcclxuXHJcbiAgICAvLyAxMi8wNy8yMDE5IDA3OjEyIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwMl0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuICAgIC8vIE1vdmVkICAkcm91dGVQcm92aWRlciBjb2RlIHRvIFJvdXRpbmdfQ29uZmlnLnRzXHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyA9IGZ1bmN0aW9uXHJcbiAgICB2YXIgZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxID0gZnVuY3Rpb24gKCRzY29wZSwgJGh0dHAsICR3aW5kb3csIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICRzY29wZS5UaXRsZSA9IFwiVGl0bGUgc2V0IGluIEFuZ3VsYXIgY29udHJvbGxlci5cIjtcclxuXHJcblxyXG4gICAgICAgIC8vICRzY29wZS5kYXRhID0gW107XHJcbiAgICAgICAgJHNjb3BlLmRhdGEgPSBkYXRhU2VydmljZTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzQnVzeTIgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyAwNi8xMy8yMDIxIDA4OjM1IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAxMl0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgLy8gVGVtcCBUb2RvXHJcbiAgICAgICAgZGF0YVNlcnZpY2UuZ2V0RGV2U2l0ZXMoNTAsIDEpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YV9sb2NhbCA9IGtvLm9ic2VydmFibGUocmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChleCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiMjAxOTA5MTAtMDEwMSAtIGRlbW9zaXRlc19pbmRleFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhleClcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCgnZmFpbGVkIGNhbGwgdG8gYXBpL2RlbW9zaXRlc2FwaSAoMjAxODA4MzEtMDk0MCkgLSBTZWUgY29uc29sZS4nKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaXNCdXN5MiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzA3LzIwMTkgMTI6NTEgcG0gLSBTU04gLSBbMjAxOTA0MDctMTI1MF0gLSBBZGRpbmcgQW5ndWxhckpTIGNhbGwgdG8gZWRpdCBEZXZTaXRlXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29tbWFuZDEwMSA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGFsZXJ0KCdlZGl0Q29tbWFuZDEwMSAtIHRlc3QnKTtcclxuICAgICAgICAgICAgJCgnI2RlbC1jb25maXJtJykubW9kYWwoeyBiYWNrZHJvcDogJ3N0YXRpYycsIGtleWJvYXJkOiBmYWxzZSB9KTtcclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgLy8gaHR0cHM6Ly93d3cudHV0b3JpYWxzcGxhbmUuY29tL2FuZ3VsYXJqcy11cGRhdGUtdGFibGUtcm93L1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplLlxyXG4gICAgICAgICRzY29wZS5lZGl0YWJsZXJvdyA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgICAgICRzY29wZS5lZGl0Q29udGVudCA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBhbmd1bGFyLmNvcHkoY29udGVudCwgJHNjb3BlLmVkaXRhYmxlcm93KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUuc2F2ZURhdGEgPSBmdW5jdGlvbiAoaW5keCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB0aGVJbmRleCA9ICRzY29wZS5kYXRhX2xvY2FsKCkuZmluZEluZGV4KHIgPT4gci5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kYXRhX2xvY2FsKClbdGhlSW5kZXhdID0gJHNjb3BlLmVkaXRhYmxlcm93O1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRhdGEudXBkYXRlRGV2U2l0ZSgkc2NvcGUuZWRpdGFibGVyb3cpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiMjAxOTA5MDgtMDYyOC1FIC0gZGVtb1NpdGVzX0luZGV4IC0gdXBkYXRlRGV2U2l0ZSBFcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5yZXNldCgpO1xyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVyb3cgPSBbXTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLmxvYWRUZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb250ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGVudC5pZCA9PT0gJHNjb3BlLmVkaXRhYmxlcm93LmlkKSByZXR1cm4gJ2VkaXRNb2RlJztcclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gJ3ZpZXdNb2RlJztcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMDYvMjAxOSAwNToxOSBhbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDFdXHJcblxyXG4gICAgICAgIC8vIDA5LzA4LzIwMTkgMTI6MDEgYW0gLSBTU04gLSBbMjAxOTA5MDgtMDAwMV0gLSBbMDAxXSAtIENvbmN1cnJlbmN5XHJcbiAgICAgICAgLy8gQ2hlY2sgd2UgYXJlIG5vdCBoeXBlcmxpbmsgaW52YWxpZCBhZGRyZXNzZXNcclxuXHJcbiAgICAgICAgJHNjb3BlLmlzVmFsaWRVcmwgPSBmdW5jdGlvbiAoY29udGVudCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICghY29udGVudCB8fCBjb250ZW50LnNpdGVVcmwgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsVG9UZXN0ID0gY29udGVudC5zaXRlVXJsLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjMSA9IHVybFRvVGVzdC5zdWJzdHIoMCwgNyk7XHJcbiAgICAgICAgICAgIGxldCBjMiA9IHVybFRvVGVzdC5zdWJzdHIoMCwgOCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB2YWxpZGNoZW1hcyA9IFwifGh0dHA6Ly98aHR0cHM6Ly98XCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgdmFsaWRPcHRpb25zID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhbGlkT3B0aW9ucyArPSAodmFsaWRjaGVtYXMuaW5kZXhPZihjMSkgPT0gMSkgPyAxIDogMDtcclxuICAgICAgICAgICAgdmFsaWRPcHRpb25zICs9ICh2YWxpZGNoZW1hcy5pbmRleE9mKGMyKSA9PSAxKSA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICh2YWxpZE9wdGlvbnMgPiAwKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAwOS8wOC8yMDE5IDA1OjMxIHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICAkc2NvcGUuc2V0VGFibGVSb3dDbGFzcyA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICUgMiA9PSAwID8gJ2V2ZW5Sb3cnIDogJ29kZFJvdyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIiwgWyckc2NvcGUnLCAnJGh0dHAnLCAnJHdpbmRvdycsICdkYXRhU2VydmljZScsIGRlbW9TaXRlSW5kZXhDb250cm9sbGVyXzEwMV0pO1xyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDEyXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBkZXZTaXRlVXBkYXRlQ29udHJvbGxlciAgXHJcbiAgICB2YXIgZGV2U2l0ZVVwZGF0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgJHdpbmRvdywgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgJHNjb3BlLmRldlNpdGVSZWNvcmQgPSB7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS5zYXZlID0gZnVuY3Rpb24gKGZvcm1TZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAvL2FsZXJ0KFwidGVzdCBzdWJtaXRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAyOjIwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTE0MTJdIC0gWzAwMl0gLSBDb250aW51ZSB3b3JrIG9uIGFkZGluZyBjb250aW51ZSBvcHRpb24gZm9yIHRpbWVzaGVldCByZWNvcmRcclxuICAgICAgICAgICAgLy8gQWRkZWQgY2FzdFxyXG4gICAgICAgICAgICB2YXIgZjogSFRNTEZvcm1FbGVtZW50ID0gPGFueT4kKGZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWYudmFsaWQoKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ0ludmFsaWQgZm9ybS4nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zaXRlVGl0bGUpO1xyXG4gICAgICAgICAgICBhbGVydCgkc2NvcGUuZGV2U2l0ZVJlY29yZC5zb2x1dGlvbl9EZXRhaWxzKTtcclxuXHJcbiAgICAgICAgICAgIC8vICRodHRwLnBvc3QoXCIuL2FwaS9kZW1vc2l0ZXNhcGlcIiwgJHNjb3BlLmRldlNpdGVSZWNvcmQpO1xyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5hZGREZXZTaXRlKCRzY29wZS5kZXZTaXRlUmVjb3JkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkd2luZG93LmxvY2F0aW9uID0gJyMvJztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBzYXZlIHJlY29yZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8gMDQvMTUvMjAyMSAxMTozMyBhbSAtIFNTTiAtIEFkZGluZyBwcm9qY2V0IHRhZ3NcclxuICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZGV2U2l0ZVRhZ3NDb21waWxlcicsIFsnJGNvbXBpbGUnLCAnJHRpbWVvdXQnLCAnJHRlbXBsYXRlQ2FjaGUnLCBmdW5jdGlvbiAoJGNvbXBpbGUsICR0aW1lb3V0LCAkdGVtcGxhdGVDYWNoZSkge1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZXN0cmljdDogJ0EnLFxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckcm9vdFNjb3BlJywgJyRzY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RldlNpdGVUYWdzQ29tcGlsZXIgLSAkdGVtcGxhdGVDYWNoZSAtIDIwMjEwNjE1LTAxNDgnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCckdGVtcGxhdGVDYWNoZTonKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCR0ZW1wbGF0ZUNhY2hlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyR0ZW1wbGF0ZUNhY2hlLnJlbW92ZUFsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oXCIkZGVzdHJveVwiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgZmlyaW5nIGZvciBkZXZTaXRlVGFnc0NvbXBpbGVyIGRldlNpdGVUYWdzQ29tcGlsZXInLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnRGVzdHJveSBmaXJpbmcgZm9yIGRldlNpdGVUYWdzQ29tcGlsZXIgZGV2U2l0ZVRhZ3NDb21waWxlcicsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGZpcmluZyBmb3IgZGV2U2l0ZVRhZ3NDb21waWxlciBkZXZTaXRlVGFnc0NvbXBpbGVyJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgZmlyaW5nIGZvciBkZXZTaXRlVGFnc0NvbXBpbGVyIGRldlNpdGVUYWdzQ29tcGlsZXInLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oXCJjYWxsX2RldlNpdGVUYWdzQ29tcGlsZXJcIiwgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ2NhbGxfZGV2U2l0ZVRhZ3NDb21waWxlciAyMDIxMDYxNC0yMzQ1JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnICYmIGFyZ3MubXNnID09IFwiZG9SZWNvbXBpbGVMaXN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0NhbGwgZG9SZWNvbXBpbGVMaXN0IC0gMjAyMTA2MTQtMjM0NycsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kb1JlY29tcGlsZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kb1JlY29tcGlsZUxpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJ1Byb2Nlc3MgZG9SZWNvbXBpbGVMaXN0ICAyMDIxMDYxNC0xOTQ5JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyRzY29wZS4kZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJHNjb3BlLiRuZXcoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA2MTUtMDQzNiA9PT09PT09PT09PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXN0cm95aW5nIHNjb3Blcy4uLi4gWyR7JHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMubGVuZ3RofV1gKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX3RlbXBTY29wZSA9ICRyb290U2NvcGUubGlzdE9mQWRkZWREaXJlY3RpdmVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGVtcFNjb3BlLiRkZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2NhbGwtdG8tY29tcGlsZScsIHsga2V5OiAnQ2FsbGluZy1mcm9tLWRvUmVjb21waWxlTGlzdCcgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfV0sXHJcblxyXG5cclxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRjb21waWxlKGVsZW1lbnQuY29udGVudHMoKSkoc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZS4kb24oJ2NhbGwtdG8tY29tcGlsZScsIGZ1bmN0aW9uIChldmVudCwgYXJncykge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnZGV2U2l0ZVRhZ3NDb21waWxlciAtIGFsbC10by1jb21waWxlJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTBwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29tcGlsZShlbGVtZW50LmNvbnRlbnRzKCkpKHNjb3BlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA0LzE1LzIwMjEgMTE6MzMgYW0gLSBTU04gLSBBZGRpbmcgcHJvamNldCB0YWdzXHJcbiAgICBpbnRlcmZhY2UgSVNjb3BlX0N1c3RvbSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcclxuICAgICAgICB0aGVUYWdzOiBhbnlcclxuICAgIH1cclxuXHJcbiAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2RldlNpdGVUYWdzJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcuL2pzL2RldnNpdGVUYWdzL2Rldi1zaXRlLXRhZ3MuaHRtbCcsXHJcblxyXG4gICAgICAgICAgICBzY29wZToge1xyXG4gICAgICAgICAgICAgICAgdGhlVGFnczogXCI9XCJcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZTogSVNjb3BlX0N1c3RvbSwgZWxlbSwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUudGhlVGFncyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUudGhlVGFncyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogW1wiJHJvb3RTY29wZVwiLCBcIiRzY29wZVwiLCBcImRhdGFTZXJ2aWNlXCIsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxpc3RPZkFkZGVkRGlyZWN0aXZlcyA9IFtdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5saXN0T2ZBZGRlZERpcmVjdGl2ZXMucHVzaCgkc2NvcGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKFwiJGRlc3Ryb3lcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGZpcmluZyBmb3IgZGV2U2l0ZVRhZ3MnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbW9zaXRlc19pbmRleCAtIGRldnNpdGVUYWdzIC0gMjAyMTA2MTUtMDUxOCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnRoZVRhZ3MpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVtb3ZpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZERldlNpdGVUYWcgPSBmdW5jdGlvbiAoZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZF9mb3JFZGl0KSB7XHJcblxyXG4vLyBJZiB3ZSBwYXNzIGFuIG9iamVjdCwgdGhlbiB3ZSBhcmUgZWRpdGluZzsgb3RoZXJ3aXNlLCBhZGRpbmcgYSBuZXcgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQgPSBkZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkX2ZvckVkaXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvbnRhaW5lclZpZXdWYWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZURldlNpdGUgPSAkc2NvcGUuZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuZWRpdGFibGVEZXZTaXRlICkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlRGV2U2l0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAwLCAvLyBOZWVkcyB0byBiZSB6ZXJvIGZvciBhZGQgdG8gd29yay5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogLTRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgYWRkRGV2U2l0ZVRhZyAob3IgZWRpdClgLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmFkZGluZ0RldlNpdGVUYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNhdmVOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnc2F2ZU5ld0RldnNpdGVUYWcgMDYxNi0wMjM2JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJHNjb3BlLmVkaXRhYmxlRGV2U2l0ZTonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5lZGl0YWJsZURldlNpdGUpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkIDIwMjEwNjE2LTIyMjQnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXZTaXRlSUQgOiBbJHskc2NvcGUudGhlVGFncy5pZH1dIHRlY2hub2xvZ3lJZDogWyR7JHNjb3BlLmVkaXRhYmxlRGV2U2l0ZS50ZWNobm9sb2d5LmlkfV0gYClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAkc2NvcGUuZGV2U2l0ZVRlY2hub2xvZ3lTZWxlY3RlZFJlY29yZCAyMDIxMDYxNi0yMjI0JywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZWRpdGFibGVEZXZTaXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UmVjOiBJRGV2U2l0ZVRlY2hub2xvZ3kgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAkc2NvcGUuZWRpdGFibGVEZXZTaXRlLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXZTaXRlSWQ6ICRzY29wZS50aGVUYWdzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWNobm9sb2d5SWQ6ICRzY29wZS5lZGl0YWJsZURldlNpdGUudGVjaG5vbG9neS5pZFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAgZGVtb1NpdGVzX29uZGV4IC0gMjAyMTA2MTYtMDMzOScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UmVjKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmFkZERldlNpdGVUZWNobm9sb2d5KG5ld1JlYykudGhlbihhZGREZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MsIGFkZERldlNpdGVUZWNobm9sb2d5RXJyb3IpLmNhdGNoKGFkZERldlNpdGVUZWNobm9sb2d5Q2F0Y2gpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGREZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICBkZW1vU2l0ZXNfb25kZXggLSAyMDIxMDYxNi0wMzQ0IC0gU3VjY2VzcycsICdjb2xvcjpncmVlbjtmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdPclVwZGF0ZWRSZWNvcmQgPSB7IGlkOiBkYXRhWzBdLmlkLCB0ZWNobm9sb2d5OiB7IGRlc2NyaXB0aW9uOiBkYXRhWzBdLnRlY2hub2xvZ3kuZGVzY3JpcHRpb24gfSB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nUmVjb3JkSW5kZXggPSAkc2NvcGUudGhlVGFncy5kZXZTaXRlVGVjaG5vbG9naWVzLmZpbmRJbmRleChyPT4gci5pZD09IGRhdGFbMF0uaWQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nUmVjb3JkSW5kZXggPi0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICBkZW1vU2l0ZXNfb25kZXggLSAyMDIxMDYxNi0wMzQ0IC0gQ0hFQ0sgJywgJ2NvbG9yOmdyZWVuO2ZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMuc3BsaWNlKGV4aXN0aW5nUmVjb3JkSW5kZXgsIDEsIG5ld09yVXBkYXRlZFJlY29yZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMucHVzaChuZXdPclVwZGF0ZWRSZWNvcmQgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAkc2NvcGUudGhlVGFncy5wdXNoKCRzY29wZS5uZXdEZXZTaXRlVGFnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFkZERldlNpdGVUZWNobm9sb2d5RXJyb3IoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAgZGVtb1NpdGVzX29uZGV4IC0gMjAyMTA2MTYtMDM0NSAtIEVycm9yJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhZGREZXZTaXRlVGVjaG5vbG9neUNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgIGRlbW9TaXRlc19vbmRleCAtIDIwMjEwNjE2LTAzNDYgLSBjYXRjaCAnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxOZXdEZXZzaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hZGRpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiOyBcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVEZXZTaXRlID0ge307XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92ZURldlNpdGVUYWcgPSBmdW5jdGlvbiAocmVjKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5yZW1vdmluZ0RldlNpdGVUYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkID0gcmVjO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbmZpcm1lZFJlbW92ZURldlNpdGVUYWcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBjb25maXJtZWRSZW1vdmVEZXZTaXRlVGFnICAyMDIxMDYxNi0yMDI2JywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3koJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQuaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRlbGV0ZURldlNpdGVUZWNobm9sb2d5U3VjY2VzcywgZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3lFcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGRlbGV0ZURldlNpdGVUZWNobm9sb2d5Q2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3lTdWNjZXNzKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBkZWxldGVEZXZTaXRlVGVjaG5vbG9neVN1Y2Nlc3MgMjAyMTA2MTYtMjA1NScsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS50aGVUYWdzLmRldlNpdGVUZWNobm9sb2dpZXMgPSAkc2NvcGUudGhlVGFncy5kZXZTaXRlVGVjaG5vbG9naWVzLmZpbHRlcih0ID0+IHQuaWQgIT09ICRzY29wZS5kZXZTaXRlVGVjaG5vbG9neVNlbGVjdGVkUmVjb3JkLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlbW92aW5nRGV2U2l0ZVRhZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGRlbGV0ZURldlNpdGVUZWNobm9sb2d5RXJyb3IoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBkZWxldGVEZXZTaXRlVGVjaG5vbG9neUVycm9yIDIwMjEwNjE2LTIwNTYnLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZWxldGVEZXZTaXRlVGVjaG5vbG9neUNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZGVsZXRlRHJ2U2l0ZVRlY2hub2xvZ3lDYXRjaCAyMDIxMDYxNi0yMDU2JywgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWxSZW1vdmVEZXZTaXRlVGFnID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVtb3ZpbmdEZXZTaXRlVGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRldlNpdGVUZWNobm9sb2d5U2VsZWN0ZWRSZWNvcmQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZV9pbnN0YW5jZSB9OyIsIu+7v1xyXG4vLyAxMC8wMS8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwM10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcblxyXG5cclxuICAgIGFwcEluc2lnaHRzOiB7XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJ2Q5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlMydcclxuICAgICAgICAvLyAxMC8zMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gQWRkZWRcclxuXHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJzI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkMycsXHJcblxyXG4gICAgICAgIC8vIDExLzA3LzIwMTkgMDg6MzQgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIFwiSW5zdHJ1bWVudGF0aW9uS2V5XCI6IFwiZGVsZXRlZFwiLCBcImQ5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlM1wiICxcclxuICAgICAgICAvLyBQUy1GYWJyaWthbVJlc2lkZW5jZXMgLSBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiXHJcblxyXG4gICAgICAgIC8vIDA2LzA2LzIwMjEgMDY6MjEgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDEwXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6IFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCIsXHJcbiAgICAgICAgLy8gUmVwbGFjZSBQUy1GYWJyaWthbVJlc2lkZW5jZXMgIHdpdGggRGV2U2l0ZXNJbmRleDIwMTkwMTI3X18wOTI5X3JlZGVwbG95X3YwMlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDNcIlxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59OyIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuXHJcbi8vIDA5LzE4LzIwMTkgMTA6MzMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA2XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTUzMjQ1MTAvaG93LXRvLW1ha2UtYS1zaW5nbGV0b24taW4tdHlwZXNjcmlwdC13b3JrLWFjcm9zcy1tdWx0aXBsZS1tb2R1bGVzXHJcblxyXG5cclxuaW1wb3J0IElBbmd1bGFyQXBwIGZyb20gJy4vSUFuZ3VsYXJBcHAnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciBnbG9iYWxzX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICBjbGFzcyBTU05fR2xvYmFscyB7XHJcblxyXG5cclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogSUFuZ3VsYXJBcHBbXSA9IFtdOyAvL2FuZ3VsYXIuSU1vZHVsZVtdO1xyXG5cclxuICAgICAgICAvLyAwOS8yMy8yMDE5IDA2OjEzIGFtIC0gU1NOIC0gWzIwMTkwOTIzLTA2MTNdIC0gWzAwMV0gLSBBZGRpbmcgYSBsb2NrXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2VfdjAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgICAgICAvLy8vICBETyBOT1QgUkVNT1ZFLlxyXG4gICAgICAgICAgICAvLy8vIE9wdGlvbiB0byBjYWxsIGFuIGluamVjdGVkIEFuZ3VsYXJKUyBzZXJ2ZXIgZnJvbSBoZXJlLiBUZXN0ZWQuICBcclxuXHJcbiAgICAgICAgICAgIC8vZmFjdG9yeVNldHVwLmRvRmFjdG9yeVNldHVwKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RyeSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcImdsb2JhbHM6IDIwMTkwOTIzLTExMzYgLSBDYWxsaW5nIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICB0ZXN0XzEwMy5kb0l0KCk7XHJcbiAgICAgICAgICAgIC8vfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmVycm9yKFwiZ2xvYmFsczogIDIwMTkwOTIzLTExMzUgLSBGYWlsZWQgY2FsbCB0byB0ZXN0XzEwMlwiKTtcclxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gU1NOX0dsb2JhbHMuZ2V0SW5zdGFuY2VfT3JpZ2luYWwoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nLCBhcmdzOiBzdHJpbmdbXSA9IG51bGwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgYW5ndWxhckFwcDogSUFuZ3VsYXJBcHAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gKFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlKS5maWx0ZXIoKHI6IElBbmd1bGFyQXBwKSA9PiByLm5hbWUgPT09IGFwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHbG9iYWxzIC0gMjAxOTA5MjMtMDU0MyAtIDAwMSAtIEZvdW5kIGFwcGxpY2F0aW9uIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgSW5zdGFuY2UgY291bnQgW1wiICsgc2VsZWN0ZWQubGVuZ3RoICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSBzZWxlY3RlZFswXTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZXNoZWV0QXBwJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xMC8yMDE5IDA4OjM2IGFtIC0gU1NOIC0gQWRkaW5nICduZ1Nhbml0aXplJyBmb3IgbmctYmluZC1odG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoJ3RpbWVzaGVldEFwcCcsIFsnbmdSb3V0ZScsICd1aS5ib290c3RyYXAnLCAnbmdTYW5pdGl6ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTU05fR2xvYmFscy5zc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5wdXNoKGFuZ3VsYXJBcHApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleF9UaW1lc2hlZXQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCcsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlbW9TaXRlc19JbmRleCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKFwiZGVtb1NpdGVzX0luZGV4XCIsIGFyZ3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHbG9iYWxzICoqKioqKioqKioqKiogTm8gY2FzZSBmb3IgYXBwbGljYXRpb24gbmFtZSBbXCIgKyBhcHBsaWNhdGlvbk5hbWUgKyBcIl0gIFsyMDE5MDkyMC0wOTU1XSBnbG9iYWxzLnRzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXJBcHAuaW5zdGFuY2U7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvRmFjdG9yeVNldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGFwcF9nbG9iYWxzO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGFwcF9nbG9iYWxzID0gYW5ndWxhci5tb2R1bGUoJ2dsb2JhbEFuZ3VsYXJBcHAnLCBbXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgYXBwX2dsb2JhbHMuZmFjdG9yeShcImdsb2JhbEFuZ3VsYXJBcHBVdGlsXCIsIFsnJGh0dHAnLCAnJHEnLCBmdW5jdGlvbiAoJGh0dHAsICRxKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkb1Rlc3QxMDEgPSBmdW5jdGlvbiAobmFtZVBhc3NlZEluKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLm5vdGlmeSgnQWJvdXQgdG8gZ3JlZXQgJyArIG5hbWVQYXNzZWRJbiArICcuJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9rVG9HcmVldChuYW1lUGFzc2VkSW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCdIZWxsbywgJyArIG5hbWVQYXNzZWRJbiArICchJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCgnR3JlZXRpbmcgJyArIG5hbWVQYXNzZWRJbiArICcgaXMgbm90IGFsbG93ZWQuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb2tUb0dyZWV0KG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9UZXN0MTAxOiBkb1Rlc3QxMDFcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRvRmFjdG9yeVNldHVwOiBkb0ZhY3RvcnlTZXR1cFxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzIwLzIwMTkgMDk6MzggYW0gLSBTU04gLSBQYXNzIGluIGFyZ3NcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJbnN0YW5jZV92MDAyKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCk6IGFuZ3VsYXIuSU1vZHVsZSB7XHJcblxyXG4gICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZSwgYXBwbGljYXRpb25OYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGdldEluc3RhbmNlX3YwMDI6IGdldEluc3RhbmNlX3YwMDJcclxuICAgIH1cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbnZhciB0ZXN0XzEwMyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvSXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyLmluamVjdG9yKFsnbmcnLCAnZ2xvYmFsQW5ndWxhckFwcCddKS5pbnZva2UoWydnbG9iYWxBbmd1bGFyQXBwVXRpbCcsIGZ1bmN0aW9uIChnbG9iYWxBbmd1bGFyQXBwVXRpbCkge1xyXG5cclxuICAgICAgICAgICAgZ2xvYmFsQW5ndWxhckFwcFV0aWwuZG9UZXN0MTAxKCdOYW1lIHBhc3NlZCB0byBkb1Rlc3QxMDEnKS50aGVuKGRvVGVzdDEwMVN1Y2Nlc3MsIGRvVGVzdDEwMUVycm9yKS5jYXRjaChkb1Rlc3QxMDFDYXRjaCk7XHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxU3VjY2VzcyAtIDIwMTkwOTI0LTAzMTYgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUVycm9yKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxRXJyb3IgLSAyMDE5MDkyNC0wMzE2LUIgJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRvVGVzdDEwMUNhdGNoKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnbG9iYWxzIC0gZG9UZXN0MTAxQ2F0Y2ggLSAyMDE5MDkyNC0wMzE2LUMnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9JdDogZG9JdFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuLy8gMTEvMjEvMjAxOSAwNjozMiBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcbmVudW0gVGltZWxvZ19TZXJ2aW5nUGFnZSB7IC8vIFNlcnZpbmdQYWdlIChmb3IgSURFIFNlYXJjaClcclxuXHJcbiAgICBUaW1lbG9nID0gJ1RpbWVsb2cnLFxyXG4gICAgSm9iX1RpbWVsb2cgPSAnSm9iX1RpbWVsb2cnLFxyXG4gICAgUHJvamVjdHNfU2VhcmNoID0gJ1Byb2plY3RzX1NlYXJjaCdcclxufVxyXG5cclxuZnVuY3Rpb24gVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHZhbHVlOiBUaW1lbG9nX1NlcnZpbmdQYWdlLCBjb21wYXJlVG86IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICByZXR1cm4gY29tcGFyZVRvID09PSB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgdGVzdF8xMDMsIFRpbWVsb2dfU2VydmluZ1BhZ2UsIFRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZSB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG5cclxuLy8gMDQvMTIvMjAxOSAwMjozNSBwbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGEgLSBSZW5hbWUgbW9kdWxlIHRvIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcblxyXG5cclxuLy8gMDUvMDQvMjAxOSAwOToyNiBhbSAtIFNTTiAtIFsyMDE5MDUwNC0wODU1XSAtIFswMDRdIC0gVGVzdGluZyBpZiB3ZSBjYW4gcmVwbGFjZSBnbG9iYWwgdmFyaWFibGVcclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcbi8vIDA1LzA0LzIwMTkgMDk6NTggYW0gLSBTU04gLSBTaW5jZSBoYXZpbmcgdG8gaW1wb3J0IGFuZ3VsYXIgd2hlbiBjb252ZXJ0aW5nIHRvIGEgbW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgICBJQ29sdW1uQmFnVGVtcCBmcm9tICcuLi9JbnRlcmZhY2VzL0lDb2x1bW5CYWcnO1xyXG5pbXBvcnQgeyBJVGVjaG5vbG9neSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSVRlY2hub2xvZ3knO1xyXG5pbXBvcnQgeyBJRGV2U2l0ZVRlY2hub2xvZ3kgfSBmcm9tICcuLi9JbnRlcmZhY2VzL0lEZXZTaXRlVGVjaG5vbG9neSc7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxudmFyIGRhdGFTZXJ2aWNlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0RhdGFTZXJ2aWNlcycsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZS5mYWN0b3J5KFwiZGF0YVNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGVzID0gZnVuY3Rpb24gKHJlY29yZHNQZXJQYWdlOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtyZWNvcmRzUGVyUGFnZX0vJHtjdXJyZW50UGFnZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyVjICcgKyAnZGF0YXNlcnZpY2UgZ2V0RGV2U2l0ZXMgZXJyb3InLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxM3B0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA1OjEwIGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0NV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZUlkOiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvJHtkZXZTaXRlSWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MjkgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDE4XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXNDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgL2FwaS9kZW1vc2l0ZXNhcGkvcmVjb3JkY291bnRgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NDkgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAxXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldFRpbWVsb2cgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDc6MTUgYW0gLSBTU04gLSBbMjAxOTA5MjQtMDQwMV0gLSBbMDA5XSAtIFF1aWNrIHRpbWVsb2cgZW50cnlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvdGltZWxvZ2FwaS9nZXRUaW1lbG9nLycgKyBpZClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkwODI5LTE4MTldJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTkvMjAxOSAwMjowMCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBDcmVhdGVkICAgIFxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI2IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgdmFyIF9UaW1lbG9nUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL1JlZnJlc2hSZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHRpbWVsb2cgWzIwMTkxMTE5LTAyMDFdJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2FkZERldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9kZW1vc2l0ZXNhcGknLCBkZXZTaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA2LzIwMTkgMDQ6NDUgcG0gLSBTU04gLSBbMjAxOTA5MDYtMDUxOF0gLSBbMDAzXSAtIEFuZ3VsYXIgLSBlZGl0TW9kZSBkaXYgY29udGVudFxyXG4gICAgICAgICAgICB2YXIgX3VwZGF0ZURldlNpdGUgPSBmdW5jdGlvbiAoZGV2U2l0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzA5LzIwMTkgMTA6MzMgcG0gLSBTU04gLSBbMjAxOTA5MDktMjEzNl0gLSBbMDA0XSAtIHNlbGVjdCB0b3AgMjAgXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8yNC8yMDE5IDAzOjM4IGFtIC0gU1NOIC0gTG9naWMgZXJyb3IgLSB1cGRhdGluZyB3cm9uZyBsaW5rXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTIvMjAxOSAxMToyNiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0xMTI2XSAtIFRpbWVsb2cgLSBzYXZlIGRhdGFcclxuXHJcbiAgICAgICAgICAgIHZhciBfaW5zZXJ0VGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDM6MDAgcG0gLSBTU04gLSBbMjAxOTA1MTktMTQxMl0gLSBbMDA0XSAtIENvbnRpbnVlIHdvcmsgb24gYWRkaW5nIGNvbnRpbnVlIG9wdGlvbiBmb3IgdGltZXNoZWV0IHJlY29yZFxyXG4gICAgICAgICAgICB2YXIgX2FkZE9yVXBkYXRlVGltZUxvZyA9IGZ1bmN0aW9uICh0aW1lTG9nKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90aW1lTG9nQVBJJywgdGltZUxvZylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTcvMjAxOSAxMjo1NiBhbSAtIFNTTiAtIFsyMDE5MDkxNi0xMTIzXSAtIFswMTZdIC0gQWRkaW5nIGpvYiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gQWRkaW5nIG9wdGlvbiB0byBsaXN0IEpvYnNcclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzE4LzIwMTkgMDM6MjQgYW0gLSBTU04gLSBbMjAxOTA5MTctMDkyOV0gLSBbMDE3XSAtIEFkZGluZyBwYWdpbmcgZm9yIGFuZ3VsYXIgbGlzdHNcclxuICAgICAgICAgICAgLy8gdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKHBhZ2VObywgcmVjb3Jkc1BlclBhZ2UsIGNvbHVtbk5hbWUsIGRlc2MpIHtcclxuICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwOToxNCBhbSAtIFNTTiAtIFBhc3MgcHJvamVjdElkXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9icyA9IGZ1bmN0aW9uIChjb2x1bW5CYWc6IElDb2x1bW5CYWdUZW1wLmRlZmF1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA5LzIyLzIwMTkgMDg6MjMgYW0gLSBTU04gLSBbMjAxOTA5MjItMDgyMl0gLSBbMDAxXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXggLSB1cGRhdGUgZGF0YSBzb3VyY2VcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgam9iX3N0YXR1c2VzX3NlbGVjdGVkID0gKChjb2x1bW5CYWcuam9iX3N0YXR1c2VzX3NlbGVjdGVkLmxlbmd0aCA9PSAwKSA/IFwibm90aGluZy0yMDE5MDkyMjExMTdcIiA6IGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQuam9pbignLCcpKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9saXN0LycgKyBjb2x1bW5CYWcuY3VycmVudFBhZ2VObyArIFwiL1wiICsgY29sdW1uQmFnLnJlY29yZHNQZXJQYWdlICsgXCIvXCIgKyBjb2x1bW5CYWcuY29sdW1uTmFtZSArIFwiL1wiICsgY29sdW1uQmFnLmRlc2MgKyBcIi9cIiArIGpvYl9zdGF0dXNlc19zZWxlY3RlZCArIFwiP3Byb2plY3RJZD1cIlxyXG4gICAgICAgICAgICAgICAgICAgICsgY29sdW1uQmFnLmZrX2ZpbHRlcilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9icyBbMjAxOTA5MTctMDA1N10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8zMC8yMDE5IDA3OjA2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iID0gZnVuY3Rpb24gKGlkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8wOC8yMDIxIDEwOjUyIHBtIC0gU1NOIC0gWzIwMjEwNjA4LTIyNDddIC0gWzAwMl0gLSBUZXN0IGxpbmUgaXRlbSAtICBQcmVwIGZvciBkZXBsb3ltZW50XHJcbiAgICAgICAgICAgICAgICAvLyAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldF9jdXN0b20vJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYmFwaS9nZXRKb2IvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYiBbMjAxOTA5MzAtMTkwOF0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMDE6MjUgcG0gLSBTU04gLSBbMjAxOTA5MjEtMTEyOV0gLSBbMDAzXSAtIFBsdWcgaW4gam9iIHN0YXR1cyBmaWx0ZXIgb24gam9iJ3MgaW5kZXhcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0Sm9iX1N0YXR1c2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL2pvYl9zdGF0dXNBUEkvJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2Jfc3RhdHVzZXMgWzIwMTkwOTIxLTEzMjYnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMi8yMDE5IDA0OjA2IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxOF0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuICAgICAgICAgICAgdmFyIF9Qcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIHNlcnZpbmdQYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvUHJvamVjdEFQSS9yZWZyZXNocmVjb3JkLycgKyBpZCArIFwiP3NlcnZpbmdQYWdlPVwiICsgc2VydmluZ1BhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBwcm9qZWN0IHNlYXJjaCByZWNvcmQgIFsyMDE5MTEyMi0xNjA4XSBbJyArIGlkICsgJ10gWycgKyBzZXJ2aW5nUGFnZSArICddJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDcvMjAyMSAwNjoyMiBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTVdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iX0xpbmVJdGVtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS9qb2JfbGluZUl0ZW1BUEknLCBqb2JfTGluZUl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA2OjAwIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0OV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkT3JVcGRhdGVUZWNobm9sb2d5ID0gZnVuY3Rpb24gKHRlY2hub2xvZ3k6IElUZWNobm9sb2d5KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCgnL2FwaS90ZWNobm9sb2d5QVBJJywgdGVjaG5vbG9neSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0SHR0cFBvc3RQcm9taXNlKHVybCwgYm9keSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAucG9zdCh1cmwsIGJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTYvMjAyMSAwODo0MiBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFsxMDVdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRIdHRwRGVsZXRlUHJvbWlzZSh1cmwsIGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5kZWxldGUoYCR7dXJsfS8ke2lkfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTYvMjAyMSAwMjo1OSBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswNjFdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgdmFyIGFkZERldlNpdGVUZWNobm9sb2d5ID0gZnVuY3Rpb24gKGRldlNpdGVUZWNobm9sb2d5OiBJRGV2U2l0ZVRlY2hub2xvZ3kpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SHR0cFBvc3RQcm9taXNlKCcvYXBpL0RldlNpdGV0ZWNobm9sb2d5QVBJL3Bvc3RfY3VzdG9tJywgZGV2U2l0ZVRlY2hub2xvZ3kpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDA4OjMzIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwM10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgZGVsZXRlRGV2U2l0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAoaWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdHRwRGVsZXRlUHJvbWlzZSgnL2FwaS9EZXZTaXRldGVjaG5vbG9neUFQSScsIGlkKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlczogX2dldERldlNpdGVzLFxyXG4gICAgICAgICAgICAgICAgZ2V0RGV2U2l0ZTogX2dldERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlc0NvdW50OiBfZ2V0RGV2U2l0ZXNDb3VudCxcclxuICAgICAgICAgICAgICAgIGFkZERldlNpdGU6IF9hZGREZXZTaXRlLFxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NCBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDJdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEZXZTaXRlOiBfdXBkYXRlRGV2U2l0ZSxcclxuXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRUaW1lTG9nOiBfaW5zZXJ0VGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldFRpbWVsb2c6IF9nZXRUaW1lbG9nLFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVGltZUxvZzogX2FkZE9yVXBkYXRlVGltZUxvZyxcclxuICAgICAgICAgICAgICAgIGdldEpvYnM6IF9nZXRKb2JzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iX1N0YXR1c2VzOiBfZ2V0Sm9iX1N0YXR1c2VzLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iOiBfZ2V0Sm9iLFxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ1JlZnJlc2hSZWNvcmQ6IF9UaW1lbG9nUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZDogX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCxcclxuICAgICAgICAgICAgICAgIGFkZE9yVXBkYXRlSm9iX0xpbmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkT3JVcGRhdGVUZWNobm9sb2d5LFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZVRlY2hub2xvZ3ksXHJcbiAgICAgICAgICAgICAgICBkZWxldGVEZXZTaXRlVGVjaG5vbG9neVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGU6IHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwi77u/XHJcbi8vIDA1LzE5LzIwMTkgMDE6MTggcG0gLSBTU04gLSBbMjAxOTA1MTktMTEzMl0gLSBbMDA3XSAtIEFkZHJlc3MgZGVmaW5pdGVseSB0eXBlZCBlcnJvcnMgLSBObyBlcnJvcnNcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gICBcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlc19oYWNrL1NTTl9qcXVlcnlfbW9kYWwuZC50c1wiIC8+XHJcblxyXG4vLyAwOC8zMS8yMDIwIDA0OjU0IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwNF0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2NvbnNvbGVfbW9kZWwuZC50c1wiIC8+XHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjI5IGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwMl0gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgIGRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGEgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG5cclxuICAgICAgICAgICAgJCgnYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJykuZWFjaCgobmR4LCBvYmoxKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdklkID0gJChvYmoxKS5hdHRyKCdhcmlhLWNvbnRyb2xzJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbkNvdW50ID0gJChcIiNcIiArIGRpdklkKS5jaGlsZHJlbigpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW5Db3VudCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCdjb2xvcicsICdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLmNzcygnZm9udC1zaXplJywgJzI0cHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5yZXBsYWNlV2l0aChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPHNwYW4vPlwiKS50ZXh0KCQob2JqMSkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgc2V0RGVmYXVsdHMoKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiW2NtZC1uYW1lXVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBjbWROYW1lID0gJCh0aGlzKS5hdHRyKCdjbWQtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lMiA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZTInKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwib3Blbi1wb3B1cFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2FkZFNpdGVfUGFnZUNvbnRlbnRcIikubG9hZChcIi90aW1lcy9zdGFydFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcImhpZGVPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd09iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzbW9vdGgtc2Nyb2xsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGpRdWVyeU9iamVjdE5hbWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAwNC8wOC8yMDE5IDAxOjMzIGFtIC0gU1NOIC0gWzIwMTkwNDA3LTIzNDVdIC0gVGltZUxvZ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1kZWZhdWx0LXRpbWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZCA9IGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgcChkLmdldE1vbnRoKCkgKyAxLCAyLCAnMCcpICsgXCItXCIgKyBwKGQuZ2V0RGF0ZSgpLCAyLCAnMCcpICsgXCJUXCIgKyBwKGQuZ2V0SG91cnMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS52YWwoY2QpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMTkvMjAxOSAwNDo0OCBwbSAtIFNTTiAtIFsyMDE5MDQxOS0xNjQ3XSAtIFNldCBhbW91bnQgZm9yIFRvdGFsU2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1Ub3RhbFBlcmlvZFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMDIwMTkgMDI6MzkgcG0gLSBTU04gLSBObyBjYWxjdWxhdGluZyBlbGFwc2VkIHRpbWUgY29ycmVjdGx5IHdpdGggVHlwZVNjcmlwdCBjb252ZXJzaW9uLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMiA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZDExLmdldFRpbWUoKS52YWx1ZU9mKCkgLSBkMTIuZ2V0VGltZSgpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lMikudmFsKGRlbHRhXzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8wOC8yMDE5IDAxOjA0IHBtIC0gU1NOIC0gWzIwMTkxMTA4LTEwNDNdIC0gWzAwOF0gLSBQZXJzaXN0aW5nIHNlYXJjaCBvbiByZXR1cm4gdG8gaW5kZXhcclxuICAgICAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgICAgICAgLy8gMDEvMDIvMjAyMCAwNDowNiBwbSAtIFNTTiAtIE1vdmVkIGZyb20gIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvclxyXG5cclxuICAgICAgICAgICAgICAgICQoJ1tzc24tY21kPXJldHVyblRvQ2FsbGVyTGlua10nKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldHVyblRvQ2FsbGVyS2V5ID0gJChcIiNyZXR1cm5Ub0NhbGxlcktleVwiKS52YWwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICg8SFRNTEFuY2hvckVsZW1lbnQ+ZS50YXJnZXQpLmhyZWYgKyBcIiZyZXR1cm5Ub0NhbGxlcktleT1cIiArIHJldHVyblRvQ2FsbGVyS2V5O1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGltZ1NpdGVVcmxRUkNvZGUgPSAwOyBcclxuXHJcbiAgICAgICAgICAgICQoJyNpbWdTaXRlVXJsUVJDb2RlJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpbWdTaXRlVXJsUVJDb2RlKys7XHJcblxyXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkudG9nZ2xlQ2xhc3MoJ2Nzc1NpdGVVcmxRUkNvZGUnKTtcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuXHJcbiAgICAgICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBwID0gZnVuY3Rpb24gKHN0cjEsIGxlbiwgY2hhcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBzdHIxLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMSA9IGNoYXIucmVwZWF0KGxlbikgKyBzdHI7XHJcbiAgICAgICAgICAgICAgICB2YXIgczIgPSBzMS5zdWJzdHJpbmcobGVuICsgKHN0ci5sZW5ndGggLSBsZW4pKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDEwOjI4IGFtIC0gU1NOXHJcblxyXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8wMi8yMDE5IDA3OjI1IHBtIC0gU1NOIC0gWzIwMTkxMTAxLTA1MjZdIC0gWzAxM10gLSBDaGVjayBsb2dpbiBzdGF0dXNcclxuICAgICAgICAgICAgLy8gRGlkIG5vdCBmaW5pc2guXHJcbiAgICAgICAgICAgIC8vIFRvZG8tU1NOXHJcbiAgICAgICAgICAgICQoJy5tb2RhbCcpLm9uKCdzaG93JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuZHJhZ2dhYmxlKHtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IFwiLm1vZGFsLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJy5uYXZiYXIgbGkgYScpLmJpbmQoJ2NvbnRleHRtZW51IGNsaWNrJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNDE0LTEwMDcgLSBjb250ZXh0IG1lbnUnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhciBsaSBhJykuYmluZCgnbW91c2Vkb3duJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdMZWZ0IG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01pZGRsZSBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQgICAyMDggICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJChlLnRhcmdldCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnTm90aGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAoJCh0aGlzLm1vYmlsZU5hdmJhck1lbnVPcHRpb24ubmF0aXZlRWxlbWVudCkuaXMoJzp2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICAgICAgLy8gMDkvMDQvMjAyMCAwMTo1NSBhbSAtIFNTTiAtIFsyMDIwMDkwNC0wMTU1XSBhcHBseSB0byBkaXZzIG9ubHkgLSBXYXMgaGlkaW5nIG1vYmlsZSBoYW1iZXJnZXIgbWVudS5cclxuICAgICAgICAgICAgJChcImFbZGF0YS10b2dnbGU9J2NvbGxhcHNlJ11cIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcbiAgICAgICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKGNhbGxlcikge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MjggLSBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IgWycgKyBjYWxsZXIgKyAnXScpO1xyXG5cclxuICAgICAgICAgICAgJCgncHJlJykuZWFjaChmdW5jdGlvbiAoYWEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYXV0b0NvbGxhcHNlID0gJCh0aGlzKS5hdHRyKCdzc24tYXV0by1jb2xsYXBzZScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF1dG9Db2xsYXBzZSA9PT0gXCJmYWxzZVwiKSB7IHJldHVybjsgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGUgPSAkKHRoaXMpLmF0dHIoXCJ0aXRsZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQXR0cmliID0gXCIgdGl0bGU9J1wiICsgX3RpdGxlICsgXCInIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoJzxwPjxhIGNtZC1uYW1lPVwic2hvd3NpYmxpbmdcIiAnICsgdGl0bGVBdHRyaWIgKyAnID5TaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24gKyAnPC9hPjwvcD4nKS5pbnNlcnRCZWZvcmUodGhpcyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAxMDoxNCBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDJdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2hvd3NpYmxpbmdcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX2xpbmsgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wMS8yMDE5IDA4OjA3IHBtIC0gU1NOIC0gWzIwMTkwNjAxLTIwMDddIC0gQWRkIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9wcmUuaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVPdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdIaWRlIGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBCZWdpblxyXG5cclxuICAgICAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgICAgICBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICAgICAgZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gaW5wdXQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiAobWF0Y2ggPSB2YWx1ZS5tYXRjaCh0aGlzLmlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRba2V5XSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAgICBzZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICAvLyAgICBzZXRUaW1lb3V0KHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgLy8gICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIC8vICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG5cclxuICAgICAgICAvL307XHJcblxyXG4gICAgICAgIC8vfSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxubGV0IHNpdGVfaW5zdGFuY2UgPSBuZXcgc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzKCk7XHJcbmV4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5cclxuLy8gMDEvMDIvMjAyMCAwNDoyMCBwbSAtIFNTTiAtIFsyMDIwMDEwMi0xNjExXSAtIFswMDNdIC0gU2VwZXJhdGUgQW5ndWxhckpTIHV0aWxpdHkgZnJvbSBnZW5lcmFsIERPTSB1dGlsaXRpZXNcclxuLy8gT2YgY291cnNlIHdlIGFyZSBjYWxsaW5nIHV0aWxpdHkgbW9yZSB0aGFuIG9uY2UuIE5lZWQgdG8gY2FsbCBmdW5jdGlvbnMgd2hlcmUgdGhleSBhcHBseS5cclxuXHJcblxyXG5cclxuaWYgKHR5cGVvZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSkgIT0gXCJudW1iZXJcIikge1xyXG5cclxuICAgIHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSAwO1xyXG59XHJcblxyXG53aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdID0gd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSArIDE7XHJcblxyXG5cclxuaWYgKHdpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPT09IDEpIHtcclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEyLzMwLzIwMTkgMDE6MjMgYW0gLSBTU04gLSBBZGQgdGltZW90XHJcbiAgICAgICAgLy8gc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7IH0sIDIwMDApO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2l0ZV9pbnN0YW5jZS5wcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoJzIwMjAwMTAyLTE1MzQtMicpO1xyXG5cclxuICAgICAgICAgICAgLy8gMDgvMzEvMjAyMCAwNDozMiBhbSAtIFNTTiAtIFsyMDIwMDgzMS0wNDE3XSAtIFswMDNdIC0gRGlzYWJsZSBjb2xsYXBzYWJsZSBkaXZzIHdpdGggbm8gY29udGVudFxyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzaXRlX2luc3RhbmNlLmRpc2FibGVFbXB0eUNvbGxhcHNhYmxlRGl2cygpLCAxMDAwKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAsIDIwMDApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcblxyXG5sZXQgZDIgPSBuZXcgRGF0ZSgpO1xyXG5zaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIrKztcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjozNyBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDNdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjM2MTQ2NS9ob3ctdG8tY2hlY2staWYtY2xpY2stZXZlbnQtaXMtYWxyZWFkeS1ib3VuZC1qcXVlcnlcclxuJC5mbi5pc0JvdW5kID0gZnVuY3Rpb24gKHR5cGUsIGZuKSB7XHJcblxyXG5cclxuICAgIGlmICghdGhpcy5kYXRhKCdldmVudHMnKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgnZXZlbnRzJylbdHlwZV07XHJcblxyXG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKC0xICE9PSAkLmluQXJyYXkoZm4sIGRhdGEpKTtcclxufTtcclxuXHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwMjoyOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMDJdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmZ1bmN0aW9uIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAyMDIwMDEwMi0xNTMxIC0gam9iX1RpbWVsb2dfc2V0RmlsdGVyICcpO1xyXG5cclxuXHJcbiAgICBpZiAoJChcIiNmaWx0ZXJUZXh0XCIpLmlzQm91bmQoJ2tleXVwJywgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBib3VuZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgJChcIiNmaWx0ZXJUZXh0XCIpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdwcm9qZWN0X2pvYnMgLSBmaXRsZXJUZXh0IC0gS2V5VXAnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygoZSkpO1xyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnc2l0ZSAtIHByb2plY3Rfam9icyAtIGZpbHRlciAtIDIgLSBzZXR1cCcpO1xyXG5cclxuICAgIEpvYl9UaW1lbG9nX3NldEZpbHRlcigpO1xyXG5cclxufSk7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFuZ3VsYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==