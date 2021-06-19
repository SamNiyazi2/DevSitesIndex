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

/***/ "./DemoSites_Pages.ts":
/*!****************************!*\
  !*** ./DemoSites_Pages.ts ***!
  \****************************/
/*! exports provided: DemoSites_Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSites_Pages", function() { return DemoSites_Pages; });
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/ChangeMonitor/ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
// 11/18/2019 01:12 pm - SSN - [20191118-1316] Renamed from DevSite_Pages.js to DemoSites_Pages.ts (TypeScript)
//03/28/2019 08:59 am - SSN - Moved out of edit.cshtml
// 09/04/2020 06:28 am - SSN - [20200904-0540] - [007] - Ading save-and-stay option to codereference
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.
 // 09/04/2020 06:57 am - SSN - [20200904-0540] - [008] - Ading save-and-stay option to codereference
// Added ApplicationInsights_Monitor

 // Knockout related
// 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
//$(function () {

var DemoSites_Pages = function () {
  // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
  // Added
  var doSetup = function doSetup() {
    _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].doSetup("DemoSites_Pages");

    var ViewModel = function ViewModel() {
      var _this = this;

      var definitions = document.querySelectorAll("[ko_demosites_pages]");
      definitions.forEach(function (a, b, c) {
        for (var x = 0; x < a.attributes.length; x++) {
          if (a.attributes[x].nodeName.substr(0, 4) === 'ko__') {
            var attrName = a.attributes[x].nodeName.substr(4);
            var attrValue = a.attributes[x].nodeValue;
            _this[attrName] = attrValue;
          }
        }
      });

      this.saveAndStay = function () {
        try {
          if (this.fieldname_prefix === 'undefined') {
            throw new Error('fieldname_prefix is undefined');
          }

          if (this.inputformid === 'undefined') {
            throw new Error('inputformid is undefined');
          }

          if (this.api_url === 'undefined') {
            throw new Error('api_url is undefined');
          }

          var data101 = $('#' + this['inputformid']).serializeArray();
          var ndx = 0; // 11/18/2019 01:16 pm - SSN - [20191118-1316] - Added interface
          // var o5 = new Object();

          var o5 = {};

          for (ndx = 0; ndx < data101.length; ndx++) {
            var _name = data101[ndx].name.replace(this['fieldname_prefix'], '');

            if (data101[ndx].name.indexOf(this['fieldname_prefix']) > -1) {
              // mvc creates a hidden field for checkboxes. If the visible one is set to true, we ignore the hidden one that is set to false.
              if (!o5[_name] || o5[_name] && o5[_name].value === "ture" && data101[ndx].value !== "false") {
                o5[_name] = data101[ndx].value;
              }
            }
          }

          var id_local = 0;
          var method = "Post";

          if (o5.Id > 0) {
            method = "Put";
            id_local = o5.Id;
          }

          $("#devSiteSaveStatus").fadeIn('slow');
          $("#devSiteSaveStatus").removeClass();
          $.ajax({
            type: method,
            url: this.api_url + id_local,
            data: JSON.stringify(o5),
            contentType: "application/json",
            dataType: "json",
            success: function success(response) {
              // 09/21/2019 12:13 pm - SSN - Update rowVersion
              $("#devSiteSaveStatus").html("Record saved.");
              $("#devSiteSaveStatus").addClass('text-success');
              $("#DevSite_RowVersion").val(response.rowVersion); // 11/18/2019 01:08 pm - SSN - 

              _Util_ChangeMonitor_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
              setTimeout(function () {
                $("#devSiteSaveStatus").fadeOut('slow');
              }, 3000);
            },
            error: function error(_error, textStatus, errorThrown) {
              // 09/04/2020 07:32 am - SSN - Take out
              // $("#devSiteSaveStatus").html("System error! Record not saved.<br/>" + response.responseText);
              $("#devSiteSaveStatus").html("System error! Record not saved. (101)");
              $("#devSiteSaveStatus").addClass('text-warning');
              $("#devSiteSaveStatus").css({
                'background-color': 'yellow'
              });
              console.error("Error-20190328-0704");
              console.error('Todo');
              console.error('error:');
              console.error(_error);
              console.error('textStatus:');
              console.error(textStatus);
              console.error('errorThrown:');
              console.error(errorThrown);
              _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logException(new Error(errorThrown), {
                SourceCode: "20200904-0813",
                Message: "DemoSites_pages.error (SaS)"
              });
            }
          });
        } catch (e) {
          console.error("Error-20200904-0654");
          console.error('Todo');
          console.error(e);
          $("#devSiteSaveStatus").html("System error! Record not saved. (102)");
          $("#devSiteSaveStatus").addClass('text-warning');
          $("#devSiteSaveStatus").css({
            'background-color': 'yellow'
          });
          _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].logException(e, {
            SourceCode: "20200904-0701",
            Message: "DemoSites_pages.error (SaS)"
          });
        }
      };
    };

    var vm = new ViewModel();
    ko.applyBindings(vm);
  }; // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised


  return {
    doSetup: doSetup
  }; // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
  //});
}();


DemoSites_Pages.doSetup();

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

/***/ 0:
/*!**********************************!*\
  !*** multi ./DemoSites_Pages.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./DemoSites_Pages.ts */"./DemoSites_Pages.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX1BhZ2VzLnRzIiwid2VicGFjazovLy8uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yRmxhZy50cyIsIndlYnBhY2s6Ly8vLi9lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0Qs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OztBQUdBLFVBQUksT0FBUSxZQUFSLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0Esb0JBQVksR0FBRyxLQUFmO0FBQ0g7O0FBRUQsYUFBTyxDQUFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxZQUFoQyxFQUE4QyxHQUE5QztBQUNBLGFBQU8sWUFBUDtBQUNILEtBcEJjO1NBdUJmLGFBQWdCLFlBQWhCLEVBQXFDO0FBRWpDLFlBQU0sQ0FBQyxvQkFBRCxDQUFOLEdBQStCLFlBQS9CO0FBRUEsYUFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4QyxZQUE5QztBQUVILEtBN0JjO29CQUFBOztBQUFBLEdBQWY7QUFpQ0o7QUFBQyxDQXJDRDs7QUF3Q0EsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVCQUFKLEVBQXhCOzs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQUE7QUFBQTtBQUVBO0FBRU8sSUFBTSxXQUFXLEdBQUc7QUFHdkIsYUFBVyxFQUFFO0FBRVQ7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0Esc0JBQWtCLEVBQUU7QUFoQlg7QUFIVSxDQUFwQixDIiwiZmlsZSI6ImJ1bmRsZV9EZW1vU2l0ZXNfUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIERhdGEgc3RydWN0IHRvIGNvbnRhaW4gb25seSBDIHNlY3Rpb24gd2l0aCBjdXN0b20gZmllbGRzLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBCYXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBCYXNlKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBCYXNlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkJhc2UgPSBCYXNlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJCYXNlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBUZWxlbWV0cnk7XHJcbiAgICAoZnVuY3Rpb24gKFRlbGVtZXRyeSkge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFN5c3RlbSB2YXJpYWJsZXMgZm9yIGEgdGVsZW1ldHJ5IGl0ZW0uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEVudmVsb3BlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBFbnZlbG9wZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVyID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlUmF0ZSA9IDEwMC4wO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YWdzID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEVudmVsb3BlO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgVGVsZW1ldHJ5LkVudmVsb3BlID0gRW52ZWxvcGU7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JU2VyaWFsaXphYmxlLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL0VudmVsb3BlLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JQXBwbGljYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSURldmljZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JSW50ZXJuYWwudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUxvY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lPcGVyYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNhbXBsZS50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JVXNlci50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2Vzc2lvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vVGVsZW1ldHJ5L0lFbnZlbG9wZS50c1wiLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxudmFyIEFJO1xyXG4oZnVuY3Rpb24gKEFJKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8qKlxyXG4gICAgICogRGVmaW5lcyB0aGUgbGV2ZWwgb2Ygc2V2ZXJpdHkgZm9yIHRoZSBldmVudC5cclxuICAgICAqL1xyXG4gICAgdmFyIFNldmVyaXR5TGV2ZWw7XHJcbiAgICAoZnVuY3Rpb24gKFNldmVyaXR5TGV2ZWwpIHtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJWZXJib3NlXCJdID0gMF0gPSBcIlZlcmJvc2VcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJJbmZvcm1hdGlvblwiXSA9IDFdID0gXCJJbmZvcm1hdGlvblwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIldhcm5pbmdcIl0gPSAyXSA9IFwiV2FybmluZ1wiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkVycm9yXCJdID0gM10gPSBcIkVycm9yXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiQ3JpdGljYWxcIl0gPSA0XSA9IFwiQ3JpdGljYWxcIjtcclxuICAgIH0pKFNldmVyaXR5TGV2ZWwgPSBBSS5TZXZlcml0eUxldmVsIHx8IChBSS5TZXZlcml0eUxldmVsID0ge30pKTtcclxufSkoQUkgfHwgKEFJID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSUNvbmZpZy50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lUZWxlbWV0cnlDb250ZXh0LnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9TZXZlcml0eUxldmVsLnRzXCIgLz5cclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB2YXIgVXRpbEhlbHBlcnMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFV0aWxIZWxwZXJzKCkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBnZW5lcmF0ZSByYW5kb20gaWQgc3RyaW5nXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBVdGlsSGVscGVycy5uZXdJZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiYXNlNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxMDczNzQxODI0OyAvLzUgc3ltYm9scyBpbiBiYXNlNjQsIGFsbW9zdCBtYXhpbnRcclxuICAgICAgICAgICAgICAgIHdoaWxlIChyYW5kb20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNoYXIgPSBiYXNlNjRjaGFycy5jaGFyQXQocmFuZG9tICUgNjQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyO1xyXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbSA9IE1hdGguZmxvb3IocmFuZG9tIC8gNjQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWxIZWxwZXJzO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgQXBwbGljYXRpb25JbnNpZ2h0cy5VdGlsSGVscGVycyA9IFV0aWxIZWxwZXJzO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQ29uZmlnLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lBcHBJbnNpZ2h0cy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsvVXRpbEhlbHBlcnMudHNcIi8+XHJcbmRlZmluZShcIkphdmFTY3JpcHRTREsuTW9kdWxlL0FwcEluc2lnaHRzTW9kdWxlXCIsIFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cykge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbiAgICB2YXIgQXBwSW5zaWdodHNNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gQXBwSW5zaWdodHNNb2R1bGUoKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIERlZmluZSBhIHRlbXBvcmFyeSBtZXRob2QgdGhhdCBxdWV1ZXMtdXAgYSB0aGUgcmVhbCBtZXRob2QgY2FsbFxyXG4gICAgICAgICAgICBhaU9iamVjdFtuYW1lXSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIC8vIENhcHR1cmUgdGhlIG9yaWdpbmFsIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG1ldGhvZFxyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsQXJndW1lbnRzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHF1ZXVlIGlzIGF2YWlsYWJsZSwgaXQgbWVhbnMgdGhhdCB0aGUgZnVuY3Rpb24gd2Fzbid0IHlldCByZXBsYWNlZCB3aXRoIGFjdHVhbCBmdW5jdGlvbiB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKGFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUucHVzaChmdW5jdGlvbiAoKSB7IHJldHVybiBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG90aGVyd2lzZSBleGVjdXRlIHRoZSBmdW5jdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICA7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gY2FwdHVyZSBpbml0aWFsIGNvb2tpZSBpZiBwb3NzaWJsZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QuY29va2llID0gZG9jdW1lbnQuY29va2llO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFtcclxuICAgICAgICAgICAgICAgIFwiY2xlYXJBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwiZmx1c2hcIixcclxuICAgICAgICAgICAgICAgIFwic2V0QXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdG9wVHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRGVwZW5kZW5jeVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXhjZXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrTWV0cmljXCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrUGFnZVZpZXdcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tUcmFjZVwiXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHdoaWxlIChtZXRob2QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChtZXRob2QucG9wKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQgPSBmdW5jdGlvbiAoYWlDb25maWcpIHtcclxuICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZS5jb25maWcgPSBhaUNvbmZpZztcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGlmIHNjcmlwdCB3YXMgcHJldmlvdXNseSBkb3dubG9hZGVkIGFuZCBpbml0aWFsaXplZCwgcXVldWUgd2lsbCBiZSBkZWxldGVkLCByZWluaXRpYWxpemUgaXRcclxuICAgICAgICAgICAgaWYgKCFhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgYWlPYmplY3QucXVldWUgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQuc3JjID0gYWlDb25maWcudXJsIHx8IFwiaHR0cHM6Ly9hejQxNjQyNi52by5tc2VjbmQubmV0L3NjcmlwdHMvYS9haS4wLmpzXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29sbGVjdCBnbG9iYWwgZXJyb3JzIGJ5IHdyYXBwaW5nIHRoZSB3aW5kb3cub25lcnJvciBtZXRob2RcclxuICAgICAgICAgICAgaWYgKCFhaUNvbmZpZy5kaXNhYmxlRXhjZXB0aW9uVHJhY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2RfMSA9IFwib25lcnJvclwiO1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QoXCJfXCIgKyBtZXRob2RfMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxPbkVycm9yID0gd2luZG93W21ldGhvZF8xXTtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1ttZXRob2RfMV0gPSBmdW5jdGlvbiAobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZWQgPSBvcmlnaW5hbE9uRXJyb3IgJiYgb3JpZ2luYWxPbkVycm9yKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbXCJfXCIgKyBtZXRob2RfMV0obWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZWQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXBwSW5zaWdodHNNb2R1bGUsIFwiYXBwSW5zaWdodHNJbnN0YW5jZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZEFuZFNldHVwOiBBcHBJbnNpZ2h0c01vZHVsZS5fZG93bmxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4cG9zaW5nIGl0IGZvciB1bml0IHRlc3RzIG9ubHksIG5vdCBwYXJ0IG9mIGludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfZGVmaW5lTGF6eU1ldGhvZHM6IEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kc1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWUgPSBcImFwcEluc2lnaHRzXCI7XHJcbiAgICAgICAgcmV0dXJuIEFwcEluc2lnaHRzTW9kdWxlO1xyXG4gICAgfSgpKTtcclxuICAgIGV4cG9ydHMuQXBwSW5zaWdodHMgPSBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlO1xyXG59KTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWkubW9kdWxlLmpzLm1hcCIsIlxyXG4vLyAxMS8xOC8yMDE5IDAxOjEyIHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIFJlbmFtZWQgZnJvbSBEZXZTaXRlX1BhZ2VzLmpzIHRvIERlbW9TaXRlc19QYWdlcy50cyAoVHlwZVNjcmlwdClcclxuXHJcblxyXG4vLzAzLzI4LzIwMTkgMDg6NTkgYW0gLSBTU04gLSBNb3ZlZCBvdXQgb2YgZWRpdC5jc2h0bWxcclxuXHJcbi8vIDA5LzA0LzIwMjAgMDY6MjggYW0gLSBTU04gLSBbMjAyMDA5MDQtMDU0MF0gLSBbMDA3XSAtIEFkaW5nIHNhdmUtYW5kLXN0YXkgb3B0aW9uIHRvIGNvZGVyZWZlcmVuY2VcclxuLy8gVGhpcyBpcyBzaGFyZWQgdXRpbGl0eS4gIE5lZWQgcmVuYW1lZCBmcm9tIERlbW9TaXRlcyB0byBzb21ldGhpbmcgZ2VuZXJpYy5cclxuLy8gVGhpcyBpcyBzaGFyZWQgdXRpbGl0eS4gIE5lZWQgcmVuYW1lZCBmcm9tIERlbW9TaXRlcyB0byBzb21ldGhpbmcgZ2VuZXJpYy5cclxuLy8gVGhpcyBpcyBzaGFyZWQgdXRpbGl0eS4gIE5lZWQgcmVuYW1lZCBmcm9tIERlbW9TaXRlcyB0byBzb21ldGhpbmcgZ2VuZXJpYy5cclxuLy8gVGhpcyBpcyBzaGFyZWQgdXRpbGl0eS4gIE5lZWQgcmVuYW1lZCBmcm9tIERlbW9TaXRlcyB0byBzb21ldGhpbmcgZ2VuZXJpYy5cclxuXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcblxyXG4vLyAwOS8wNC8yMDIwIDA2OjU3IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTA1NDBdIC0gWzAwOF0gLSBBZGluZyBzYXZlLWFuZC1zdGF5IG9wdGlvbiB0byBjb2RlcmVmZXJlbmNlXHJcbi8vIEFkZGVkIEFwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvclxyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG4vLyAxMS8xOC8yMDE5IDAxOjE1IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIC0gQWRkZWQgaW50ZXJmYWNlXHJcbmludGVyZmFjZSBEZXZTaXRlUmVjb3JkIHtcclxuXHJcbiAgICBJZD86IG51bWJlclxyXG59XHJcblxyXG5cclxuLy8gS25vY2tvdXQgcmVsYXRlZFxyXG5cclxuXHJcbi8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuXHJcbi8vJChmdW5jdGlvbiAoKSB7XHJcbmxldCBEZW1vU2l0ZXNfUGFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICAvLyBBZGRlZFxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5kb1NldHVwKFwiRGVtb1NpdGVzX1BhZ2VzXCIpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIFZpZXdNb2RlbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgZGVmaW5pdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2tvX2RlbW9zaXRlc19wYWdlc11cIilcclxuICAgICAgICAgICAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoYSwgYiwgYykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgYS5hdHRyaWJ1dGVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYS5hdHRyaWJ1dGVzW3hdLm5vZGVOYW1lKS5zdWJzdHIoMCwgNCkgPT09ICdrb19fJykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0dHJOYW1lID0gKGEuYXR0cmlidXRlc1t4XS5ub2RlTmFtZSkuc3Vic3RyKDQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXR0clZhbHVlID0gYS5hdHRyaWJ1dGVzW3hdLm5vZGVWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbYXR0ck5hbWVdID0gYXR0clZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhdmVBbmRTdGF5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZG5hbWVfcHJlZml4ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpZWxkbmFtZV9wcmVmaXggaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dGZvcm1pZCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnB1dGZvcm1pZCBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwaV91cmwgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYXBpX3VybCBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YTEwMSA9ICQoJyMnICsgdGhpc1snaW5wdXRmb3JtaWQnXSkuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZHggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8xOC8yMDE5IDAxOjE2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIC0gQWRkZWQgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIG81ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvNTogRGV2U2l0ZVJlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCA9IDA7IG5keCA8IGRhdGExMDEubGVuZ3RoOyBuZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX25hbWUgPSBkYXRhMTAxW25keF0ubmFtZS5yZXBsYWNlKHRoaXNbJ2ZpZWxkbmFtZV9wcmVmaXgnXSwgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGExMDFbbmR4XS5uYW1lLmluZGV4T2YodGhpc1snZmllbGRuYW1lX3ByZWZpeCddKSA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXZjIGNyZWF0ZXMgYSBoaWRkZW4gZmllbGQgZm9yIGNoZWNrYm94ZXMuIElmIHRoZSB2aXNpYmxlIG9uZSBpcyBzZXQgdG8gdHJ1ZSwgd2UgaWdub3JlIHRoZSBoaWRkZW4gb25lIHRoYXQgaXMgc2V0IHRvIGZhbHNlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbzVbX25hbWVdIHx8IChvNVtfbmFtZV0gJiYgbzVbX25hbWVdLnZhbHVlID09PSBcInR1cmVcIiAmJiBkYXRhMTAxW25keF0udmFsdWUgIT09IFwiZmFsc2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvNVtfbmFtZV0gPSBkYXRhMTAxW25keF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkX2xvY2FsID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFwiUG9zdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobzUuSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwiUHV0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX2xvY2FsID0gbzUuSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLnJlbW92ZUNsYXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmFwaV91cmwgKyBpZF9sb2NhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobzUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MTMgcG0gLSBTU04gLSBVcGRhdGUgcm93VmVyc2lvblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmh0bWwoXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5hZGRDbGFzcygndGV4dC1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RldlNpdGVfUm93VmVyc2lvblwiKS52YWwocmVzcG9uc2Uucm93VmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTgvMjAxOSAwMTowOCBwbSAtIFNTTiAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5mYWRlT3V0KCdzbG93JykgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzA0LzIwMjAgMDc6MzIgYW0gLSBTU04gLSBUYWtlIG91dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5odG1sKFwiU3lzdGVtIGVycm9yISBSZWNvcmQgbm90IHNhdmVkLjxici8+XCIgKyByZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5odG1sKFwiU3lzdGVtIGVycm9yISBSZWNvcmQgbm90IHNhdmVkLiAoMTAxKVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuYWRkQ2xhc3MoJ3RleHQtd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5jc3MoeyAnYmFja2dyb3VuZC1jb2xvcic6ICd5ZWxsb3cnIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3ItMjAxOTAzMjgtMDcwNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0ZXh0U3RhdHVzOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcih0ZXh0U3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yVGhyb3duOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclRocm93bik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXhjZXB0aW9uKG5ldyBFcnJvcihlcnJvclRocm93biksIHsgU291cmNlQ29kZTogXCIyMDIwMDkwNC0wODEzXCIsIE1lc3NhZ2U6IFwiRGVtb1NpdGVzX3BhZ2VzLmVycm9yIChTYVMpXCIgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvci0yMDIwMDkwNC0wNjU0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuaHRtbChcIlN5c3RlbSBlcnJvciEgUmVjb3JkIG5vdCBzYXZlZC4gKDEwMilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5hZGRDbGFzcygndGV4dC13YXJuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5jc3MoeyAnYmFja2dyb3VuZC1jb2xvcic6ICd5ZWxsb3cnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXhjZXB0aW9uKGUsIHsgU291cmNlQ29kZTogXCIyMDIwMDkwNC0wNzAxXCIsIE1lc3NhZ2U6IFwiRGVtb1NpdGVzX3BhZ2VzLmVycm9yIChTYVMpXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh2bSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICAvL30pO1xyXG59KCk7XHJcblxyXG5leHBvcnQgeyBEZW1vU2l0ZXNfUGFnZXMgfTtcclxuXHJcblxyXG5EZW1vU2l0ZXNfUGFnZXMuZG9TZXR1cCgpO1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuXHJcblxyXG52YXIgQXBwSW5zaWdodHNfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHsgY2FsbFNvdXJjZTogJ05vdFNldC0yMDIxMDYwNjIyMjgnIH07XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBlbnZpcm9ubWVudC5hcHBJbnNpZ2h0cy5pbnN0cnVtZW50YXRpb25LZXlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYXZlSW5zdHJ1bWVudGF0aW9uS2V5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnLmluc3RydW1lbnRhdGlvbktleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHNlbGYuY2FsbFNvdXJjZSA9IGNhbGxTb3VyY2U7XHJcblxyXG4gICAgICAgIGlmICghQXBwSW5zaWdodHMuY29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKHRoaXMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEwLzExLzIwMTkgMDQ6NTQgcG0gLSBTU04gLSBBZGRlZCBjaGVja1xyXG4gICAgICAgICAgICBpZiAoaGF2ZUluc3RydW1lbnRhdGlvbktleSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHMuZG93bmxvYWRBbmRTZXR1cChjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgcGFnZSB2aWV3ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgXCJGaXJzdFBhZ2UtMjAxOTEwMDEtMTAxNVwiLCAvKiAob3B0aW9uYWwpIHBhZ2UgbmFtZSAqL1xyXG4gICAgICAgICAgICBudWxsLCAvKiAob3B0aW9uYWwpIHBhZ2UgdXJsIGlmIGF2YWlsYWJsZSAqL1xyXG4gICAgICAgICAgICB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgLyogKG9wdGlvbmFsKSBkaW1lbnNpb24gZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICB7IG1lYXN1cmVtZW50MTogMSB9LCAvKiAob3B0aW9uYWwpIG1ldHJpYyBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIDEyMyAvKiBwYWdlIHZpZXcgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgZXZlbnQgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KFwiVGVzdEV2ZW50LTIwMTkxMDAxLTEwMTZcIiwgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIHsgbWVhc3VyZW1lbnQxOiAxIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGxvZ1BhZ2VWaWV3ID0gZnVuY3Rpb24gKG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55LCBkdXJhdGlvbj86IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uSW5zaWdodHMgIC0gbG9nUGFnZVZpZXcgLSAyMDIxMDYwNi0yMjIzJywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IGNhbGxTb3VyY2VfYWltOiBzZWxmLmNhbGxTb3VyY2UsIC4uLnByb3BlcnRpZXMgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhuYW1lLCB1cmwsIHByb3BlcnRpZXMpOy8vLCBtZWFzdXJlbWVudHMsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V2ZW50ID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55KSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCBtZWFzdXJlbWVudHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbjogYW55IHwgYW55LCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICAvLyAwNi8xNS8yMDIxIDA4OjA4IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0N10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgLy8gQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYgKGV4Y2VwdGlvbikge1xyXG5cclxuICAgICAgICAgICAgcHJvcHMgPSB7IC4uLnByb3BzLCAuLi5leGNlcHRpb24gfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbiwgaGFuZGxlZEF0LCBwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXAsXHJcbiAgICAgICAgZG9UZXN0OiBkb1Rlc3QsXHJcbiAgICAgICAgbG9nUGFnZVZpZXc6IGxvZ1BhZ2VWaWV3LFxyXG4gICAgICAgIGxvZ0V2ZW50OiBsb2dFdmVudCxcclxuICAgICAgICBsb2dFeGNlcHRpb246IGxvZ0V4Y2VwdGlvblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlczogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLCBfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMC8wMS8yMDE5IDA5OjQ3IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwM10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcblxyXG5cclxuICAgIGFwcEluc2lnaHRzOiB7XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJ2Q5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlMydcclxuICAgICAgICAvLyAxMC8zMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gQWRkZWRcclxuXHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogJzI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkMycsXHJcblxyXG4gICAgICAgIC8vIDExLzA3LzIwMTkgMDg6MzQgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vICAgIFwiSW5zdHJ1bWVudGF0aW9uS2V5XCI6IFwiZGVsZXRlZFwiLCBcImQ5ZjIxMjFiLTk0NzUtNGZkNi05N2NiLTRkZjAxNmUzM2NlM1wiICxcclxuICAgICAgICAvLyBQUy1GYWJyaWthbVJlc2lkZW5jZXMgLSBcIjMzYzZkZWY1LTQzMGYtNGNkNC04YjZmLTk5NjgyMDgyMGRhYlwiXHJcblxyXG4gICAgICAgIC8vIDA2LzA2LzIwMjEgMDY6MjEgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDEwXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAvLyBpbnN0cnVtZW50YXRpb25LZXk6IFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCIsXHJcbiAgICAgICAgLy8gUmVwbGFjZSBQUy1GYWJyaWthbVJlc2lkZW5jZXMgIHdpdGggRGV2U2l0ZXNJbmRleDIwMTkwMTI3X18wOTI5X3JlZGVwbG95X3YwMlxyXG4gICAgICAgIGluc3RydW1lbnRhdGlvbktleTogXCIyNzIzMzg4MS0xOGFiLTQxZWEtYjVmOS1mMjRiOGVkNjJiZDNcIlxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=