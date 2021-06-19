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

/***/ "./Interceptors/SessionTimeoutInterceptor.js":
/*!***************************************************!*\
  !*** ./Interceptors/SessionTimeoutInterceptor.js ***!
  \***************************************************/
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
    var angularjs_module = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('SessionTimeoutInterceptor', currentApplication); // 06/18/2021 08:41 am - SSN - Adding ssn_logger

    angularjs_module.config(['$httpProvider', function ($httpProvider) {
      // 08/21/2020 10:53 am - SSN - Adding $location
      var interceptor = ['$q', '$rootScope', '$location', 'ssn_logger', //  'userSession',
      function ($q, $rootScope, $location, ssn_logger) {
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
            console.error('sessionTimeoutIntercepter - requestError - 20200821-1046-001');
            return $q.reject(rejection);
          },
          response: function response(result) {
            /////////////////////////////// console.log('sessionTimeoutIntercepter - response - 20200821-1046-002');
            return result;
          },
          responseError: function responseError(error) {
            console.error('sessionTimeoutIntercepter - responseError - 20200821-1046-003');
            ssn_logger.cl_error({
              callSource: "20210618-0853",
              message: "SessionTimeoutInterceptor",
              errorObject: error
            });
            return $q.reject(error);
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
/* harmony import */ var _DropdownList_DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../DropdownList/DropdownListDirectiveConstants */ "./DropdownList/DropdownListDirectiveConstants.js");
/* harmony import */ var _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Broadcast_Identifers */ "./Shared/Broadcast_Identifers.js");
/// <reference path="../../../../node_modules/@types/toastr/index.d.ts" />
// 06/06/2021 03:06 am - SSN - [20210606-0227] - [005] - Testng for deployment






_Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_1__["AppInsights_Util"].doSetup("LineItemController");

var lineItemController_instance = function () {
  var doSetup = function doSetup(ngApplicationName) {
    var angularApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('LineItemController', ngApplicationName);
    angularApp.controller('LineItemController', ['$q', '$uibModalInstance', '$rootScope', '$scope', 'dataService', 'changeMonitorService', 'ssn_logger', 'jobId', 'containerViewValue', lineItemControllerFunction]);

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
        toastr.error("Failed to load record.  See console log.");
        ssn_logger.cl_error({
          callSource: "20210620-1721",
          message: "LineItemController - getJobError - Failed to get record",
          errorObject: err
        });
      }

      function getJobCatch(err) {
        console.error('LineItemController - getJobError - 20210606-0611-D ');
        console.log(err);
        toastr.error("Failed to load record.  See console log.");
        ssn_logger.cl_error({
          callSource: "20210606-0611-C-2-2",
          message: "LineItemController -getJobCatch - Failed to get record",
          errorObject: err
        });
      }

      $scope.submitForm = function () {
        if ($scope.disableSaveButton) return;
        $scope.disableSaveButton = true;
        $scope.editableJob_LineItem.lineItem = $scope.defaultValue;

        if ($scope.editableJob_LineItem.lineItem == "0") {
          toastr.error("Failed to save record.  See console log.");
          $scope.disableSaveButton = false;
          ssn_logger.cl_error({
            callSource: "20210615-0401",
            message: "LineItem new entry error - saving '0' record "
          });
          return;
        }

        var promise = null;

        try {
          promise = dataService.addOrUpdateJob_LineItem($scope.editableJob_LineItem);

          if (promise) {
            promise.then(function (data) {
              $rootScope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
                msg: _DropdownList_DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_DROPDOWN_LIST,
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
              ssn_logger.cl_error({
                callSource: "20210606-2055",
                message: "function > error",
                errorObject: error
              });
            });
          }
        } catch (error) {
          ssn_logger.cl_error({
            callSource: "20210606-2052",
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

    angularApp.directive('lineItemNoDuplicate', ["$q", "ssn_logger", function ($q, ssn_logger) {
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
      console.log('%c TimeLog_Index_Refresh - 20210617-2353 - Compare with INSERT ', 'color:yellow;font-size:12pt');
      console.log(event);
      console.log(item);
      $("#" + item.tr_2_id).remove();
      $("#" + item.tr_1_id).replaceWith(item.html);
      $compile($("#" + item.tr_1_id).contents())($scope);
      hightlightRawsAffected(item);
    });
    $scope.$on('TimeLog_Index_Insert', function (event, item) {
      $("#timesheet_index_tbody").prepend(item.html);
      $compile($("#" + item.tr_1_id).contents())($scope);
      document.querySelector('#topOfTimesheetTable').scrollIntoView({
        behavior: 'smooth'
      });
      hightlightRawsAffected(item);
    });

    function hightlightRawsAffected(item) {
      // We assume that the logic remains the same for naming rows.  Bad idea!
      var rowId1 = item.tr_1_id;
      var rowId2 = item.tr_1_id.substring(0, item.tr_1_id.length - 1) + '2';
      $("#" + rowId1).addClass("cssHilight102");
      $("#" + rowId2).addClass("cssHilight102");
    }

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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site */ "./site.js");
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
      _site__WEBPACK_IMPORTED_MODULE_1__["site_instance"].fnConverDate(data);
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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site */ "./site.js");
// 11/16/2019 04:47 pm - SSN - [20191116-1516] - [003] - Timelog edit (AngularJS client version)
// Copied from TimesheetClockoutController



var timesheetEditController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetEditController', "timesheetApp"); // 11/19/2019 12:48 am - SSN - [20191119-0048] Adding $compile for dynamically loaded view

  timesheetApp.controller('TimesheetEditController', ['$uibModal', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', 'changeMonitorService', 'TimesheetTableRefreshController', 'timelogId', '$timeout', '$rootScope', 'ssn_logger', 'servingPage', function ($uibModal, $scope, $uibModalInstance, $http, $q, dataService, changeMonitorService, TimesheetTableRefreshController, timelogId, $timeout, $rootScope, ssn_logger, servingPage) {
    $timeout(function () {
      changeMonitorService.setupMonitor();
      _site__WEBPACK_IMPORTED_MODULE_1__["site_instance"].setDefaults();
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
      timeNow.setMilliseconds(0);
      $scope.editableTimeLog.stopTime = timeNow;
    };

    function getTimelogSuccess(data) {
      var timeNow = new Date();
      timeNow.setSeconds(0);
      _site__WEBPACK_IMPORTED_MODULE_1__["site_instance"].fnConverDate(data);
      $scope.timeLog = data;
      $scope.editableTimeLog = data;
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

      if ($scope.editableTimeLog.stopTime) {
        $scope.editableTimeLog.totalSeconds = ($scope.editableTimeLog.stopTime - $scope.editableTimeLog.startTime) / 1000;
      }

      if ($scope.editableTimeLog.timeLogId === 0) {
        dataService.insertTimeLog($scope.editableTimeLog).then(insertTimeLogSuccess, insertTimeLogError)["catch"](insertTimeLogCatch);
      } else {
        dataService.updateTimeLog($scope.editableTimeLog).then(insertTimeLogSuccess, insertTimeLogError)["catch"](insertTimeLogCatch);
      }

      function insertTimeLogSuccess(data) {
        $uibModalInstance.close();
        toastr.info("Record saved."); // 06/18/2021 02:03 am - SSN - Replace redunant code

        TimesheetTableRefreshController.refreshTimesheetTable(servingPage, $scope.editableTimeLog.timeLogId, false);
      }

      function insertTimeLogError(error) {
        console.log(error);
        toastr.error("Failed to save record.");
        toastr.warning("Error posted to console.");
        $scope.feedbackToUserClassNameCase = 2;
        $scope.feedbackToUserText = error.data;
        $scope.disableSaveButton = false;
        ssn_logger.cl_error({
          callSource: "20210618-0909",
          message: "Failed to save timesheet record ",
          errorObject: error
        });
      }

      function insertTimeLogCatch(error) {
        console.log(error);
        toastr.error("Failed to save record.");
        toastr.warning("Error posted to console.");
        $scope.feedbackToUserClassNameCase = 2;
        $scope.feedbackToUserText = error.data;
        $scope.disableSaveButton = false;
        ssn_logger.cl_error({
          callSource: "20210618-0910",
          message: "Failed to save timesheet record ",
          errorObject: error
        });
      }
    };

    $scope.cancelForm = function () {
      if (changeMonitorService.getHaveChanges()) {
        if (!confirm('You have unsaved changes? Are you sure you want to cancel?')) return;
      }

      $uibModalInstance.dismiss();
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
/* harmony import */ var _Timesheet_table_refresh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Timesheet_table_refresh */ "./Timesheet/Timesheet_table_refresh.js");
// 11/25/2019 05:34 pm - SSN - [20191125-1414] - [011] - Project jobs - filter 












var doSetup = function doSetup(ngApplicationName) {
  _TimelogLinkOtions_TimelogLinkOptions__WEBPACK_IMPORTED_MODULE_6__["TimelogLinkOptions"].doSetup(ngApplicationName);
  _TimesheetController__WEBPACK_IMPORTED_MODULE_1__["timesheetController_instance"].timesheetApp;
  _timesheetcontinuecontroller__WEBPACK_IMPORTED_MODULE_2__["timesheetContinueController_instance"].timesheetApp;
  _timesheetclockoutcontroller__WEBPACK_IMPORTED_MODULE_3__["timesheetClockoutController_instance"].timesheetApp;
  _TimesheetApp__WEBPACK_IMPORTED_MODULE_0__["timesheetApp_instance"].timesheetApp;
  _Timesheet_TimesheetEditController__WEBPACK_IMPORTED_MODULE_4__["timesheetEditController_instance"].timesheetApp;
  _Timesheet_TimesheetCreateController__WEBPACK_IMPORTED_MODULE_5__["timesheetCreateController_instance"].timesheetApp;
  _LineItem_LineItemController__WEBPACK_IMPORTED_MODULE_7__["lineItemController_instance"].doSetup(ngApplicationName);
  _Util_autofocus_ssnAutoFocus__WEBPACK_IMPORTED_MODULE_8__["ssn_auto_focus"].doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
  _Shared_ModalCallsUtil__WEBPACK_IMPORTED_MODULE_9__["ModalCallsUtil"].doSetup("Timesheet_main_timesheetOnly", ngApplicationName);
  _Timesheet_table_refresh__WEBPACK_IMPORTED_MODULE_10__["Timesheet_Table_Refresh_Service"];
};



/***/ }),

/***/ "./Timesheet/Timesheet_table_refresh.js":
/*!**********************************************!*\
  !*** ./Timesheet/Timesheet_table_refresh.js ***!
  \**********************************************/
/*! exports provided: Timesheet_Table_Refresh_Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timesheet_Table_Refresh_Service", function() { return Timesheet_Table_Refresh_Service; });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
// 06/18/2021 12:02 am - SSN - Updating timesheet table on insert/update



var Timesheet_Table_Refresh_Service = function () {
  var angularApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('Timesheet_table_refresh', "timesheetApp");
  angularApp.config(['$provide', function ($provide) {
    $provide.factory('TimesheetTableRefreshController', ['$rootScope', 'dataService', 'ssn_logger', function ($rootScope, dataService, ssn_logger) {
      return {
        refreshTimesheetTable: function refreshTimesheetTable(servingPage, timelogId, newRecord) {
          var haveMatch_on_servingPage = false;

          if (_globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Timelog) || _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Job_Timelog)) {
            dataService.timelogRefreshRecord(timelogId, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
            haveMatch_on_servingPage = true;
          }

          if (_globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage_checkvalue"](servingPage, _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Projects_Search)) {
            dataService.projectsSearchRefreshRecord(timelogId, servingPage).then(refreshRecord_Sucess, refreshRecord_Error);
            haveMatch_on_servingPage = true;
          }

          if (!haveMatch_on_servingPage) {
            ssn_logger.cl_error({
              callSource: 'DemoSite-20210618-0450',
              message: "No match for servingPage [" + servingPage + "]"
            });
          }

          function refreshRecord_Sucess(result) {
            if (newRecord) {
              $rootScope.$broadcast('TimeLog_Index_Insert', result);
            } else {
              $rootScope.$broadcast('TimeLog_Index_Refresh', result);
            }
          }

          function refreshRecord_Error(result) {
            console.log('%c Timesheet_Table_Refresh - 20210618-0050 - Failed to refresh timesheet record', 'color:red;font-size:12pt');
            console.error(result);
            ssn_logger.cl_error({
              callSource: 'DemoSite-20210618-0449',
              message: 'Failed to refresh timesheet record'
            });
          }
        }
      };
    }]);
  }]);
}();



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
/* harmony import */ var _shared_DataServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/DataServices */ "./shared/DataServices.js");
/* harmony import */ var _DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DropdownList/DropdownListDirective */ "./DropdownList/DropdownListDirective.js");
/* harmony import */ var _Util_ApplicationInsights_Monitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Util/ApplicationInsights_Monitor */ "./Util/ApplicationInsights_Monitor.js");
/* harmony import */ var _Util_RestorePreviousPageState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Util/RestorePreviousPageState */ "./Util/RestorePreviousPageState.js");
/* harmony import */ var _Interceptors_SessionTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Interceptors/SessionTimeoutInterceptor */ "./Interceptors/SessionTimeoutInterceptor.js");
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
_Interceptors_SessionTimeoutInterceptor__WEBPACK_IMPORTED_MODULE_6__["default"].doSetup(ngApplicationName); //ChangeMonitor_Util

_Util_ChangeMonitor_ChangeMonitorService__WEBPACK_IMPORTED_MODULE_0__["changeMonitorService_instance"].doSetup(ngApplicationName);
_Util_PageUpdater__WEBPACK_IMPORTED_MODULE_1__["PageUpdater_Instance"].doSetup(ngApplicationName); // 11/16/2019 06:27 pm - SSN - [20191116-1516] - [006] - Timelog edit (AngularJS client version)
// 11/25/2019 11:34 pm - SSN - [20191125-2153] - [005] - Job create - Replace dropdown with dropdownListDirective

_DropdownList_DropdownListDirective__WEBPACK_IMPORTED_MODULE_3__["dropdownListDirective_instance"].doSetup(ngApplicationName); // 06/07/2021 05:00 pm - SSN - [20210606-0227] - [019] - Testng for deployment - Line item


_Util_Logger_ssn_AngularJslogger__WEBPACK_IMPORTED_MODULE_8__["ssn_AngularJslogger"].doSetup("timesheet_main", ngApplicationName);
_shared_DataServices__WEBPACK_IMPORTED_MODULE_2__["dataService_instance"].doSetup(ngApplicationName); // 11/23/2019 08:56 am - SSN

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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site */ "./site.js");
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
      timeNow.setMilliseconds(0);
      data.stopTime = timeNow;
      _site__WEBPACK_IMPORTED_MODULE_1__["site_instance"].fnConverDate(data);
      $scope.timeLog = data;
      $scope.editableTimeLog = data;
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
/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site */ "./site.js");
// 05/19/2019 09:45 am - SSN - [20190519-0837] - [005] - Adding timesheet "Continue" option
// Copied from Clockout.


var ngApplicationName = "timesheetApp";

var timesheetContinueController_instance = function () {
  var timesheetApp = _globals__WEBPACK_IMPORTED_MODULE_0__["globals_instance"].getInstance_v002('TimesheetContinueController', ngApplicationName); // 11/14/2019 03:07 pm - SSN - [20191114-1459] - [002] - ChangeMonitroService

  timesheetApp.controller('TimesheetContinueController', ['$rootScope', '$scope', '$uibModalInstance', '$http', '$q', 'dataService', '$timeout', 'TimesheetTableRefreshController', 'timelogId', 'changeMonitorService', function ($rootScope, $scope, $uibModalInstance, $http, $q, dataService, $timeout, TimesheetTableRefreshController, timelogId, changeMonitorService) {
    changeMonitorService.setupMonitor();
    $scope.timelogId_OriginalRecord = timelogId;
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
      _site__WEBPACK_IMPORTED_MODULE_1__["site_instance"].fnConverDate(data);
      var timeNow = new Date();
      timeNow.setMilliseconds(0);
      data.timeLogId = 0;
      data.startTime = timeNow;
      data.dateModified = null;
      data.totalSeconds = null;
      $scope.editableTimeLog = data;
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
      var newRecord = true;

      if ($scope.editableTimeLog.timeLogId === 0) {
        promise = dataService.insertTimeLog($scope.editableTimeLog);
      } else {
        promise = dataService.updateTimeLog($scope.editableTimeLog);
        newRecord = false;
      }

      if (promise) {
        // 05/21/2019 11:56 am - SSN - Tested OK.
        promise.then(function (data) {
          $uibModalInstance.close(true);
          toastr.info("Record added.  Reloading page..."); // 06/7/2021 11:48 pm - SSN - Replacing location.reload with TimeLog_Index_Insert

          console.log('timesheetContinueController.ts - replacing location.reload with TimeLog_Index_Insert', 'color:red;font-size:16pt');
          console.log(data.timeLogId);
          console.log(data); // 05/21/2019 12:54 pm - SSN - Reload page.
          //$timeout(() => {
          //    location.reload();
          //}, 1000);

          var servingPage = _globals__WEBPACK_IMPORTED_MODULE_0__["Timelog_ServingPage"].Timelog; // Update original record we compied from (timeLogId passed in)

          TimesheetTableRefreshController.refreshTimesheetTable(servingPage, $scope.timelogId_OriginalRecord, false); // Add new record

          TimesheetTableRefreshController.refreshTimesheetTable(servingPage, data.timeLogId, newRecord);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL0ludGVyY2VwdG9ycy9TZXNzaW9uVGltZW91dEludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL1JvdXRpbmcvUm91dGluZ19Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL0Jyb2FkY2FzdF9JZGVudGlmZXJzLnRzIiwid2VicGFjazovLy8uL1NoYXJlZC9Nb2RhbENhbGxzVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEFwcC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHkudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF90YWJsZV9yZWZyZXNoLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0xvZ2dlci9zc25fQW5ndWxhckpzbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL0RhdGFTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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QUQsQ0FBRCxDQUFpQixPQUFqQixDQUF5QixPQUF6QixFQUFrQyxxQkFBbEMsQ0FBSixFQUE4RDtBQUMxRCxXQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQTtBQUNIOztBQUVELEdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVSxDQUFWLEVBQVc7QUFFcEMsV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQWEsQ0FBYjtBQUNILEdBSkQ7QUFNSDs7QUFFRCxDQUFDLENBQUM7QUFFRSxTQUFPLENBQUMsR0FBUixDQUFZLDBDQUFaO0FBRUEsdUJBQXFCO0FBRXhCLENBTkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFoQkEseUIiLCJmaWxlIjoiYnVuZGxlX3RpbWVzaGVldGFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogRGF0YSBzdHJ1Y3QgdG8gY29udGFpbiBvbmx5IEMgc2VjdGlvbiB3aXRoIGN1c3RvbSBmaWVsZHMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIEJhc2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEJhc2UoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEJhc2U7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuQmFzZSA9IEJhc2U7XHJcbiAgICB9KShUZWxlbWV0cnkgPSBNaWNyb3NvZnQuVGVsZW1ldHJ5IHx8IChNaWNyb3NvZnQuVGVsZW1ldHJ5ID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLyBUSElTIEZJTEUgV0FTIEFVVE9HRU5FUkFURURcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIkJhc2UudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIFRlbGVtZXRyeTtcclxuICAgIChmdW5jdGlvbiAoVGVsZW1ldHJ5KSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU3lzdGVtIHZhcmlhYmxlcyBmb3IgYSB0ZWxlbWV0cnkgaXRlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgRW52ZWxvcGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEVudmVsb3BlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXIgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYW1wbGVSYXRlID0gMTAwLjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhZ3MgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gRW52ZWxvcGU7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBUZWxlbWV0cnkuRW52ZWxvcGUgPSBFbnZlbG9wZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lTZXJpYWxpemFibGUudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvRW52ZWxvcGUudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lBcHBsaWNhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JRGV2aWNlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lJbnRlcm5hbC50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JTG9jYXRpb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSU9wZXJhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JU2FtcGxlLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lVc2VyLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTZXNzaW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9UZWxlbWV0cnkvSUVudmVsb3BlLnRzXCIvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG52YXIgQUk7XHJcbihmdW5jdGlvbiAoQUkpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiBEZWZpbmVzIHRoZSBsZXZlbCBvZiBzZXZlcml0eSBmb3IgdGhlIGV2ZW50LlxyXG4gICAgICovXHJcbiAgICB2YXIgU2V2ZXJpdHlMZXZlbDtcclxuICAgIChmdW5jdGlvbiAoU2V2ZXJpdHlMZXZlbCkge1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIlZlcmJvc2VcIl0gPSAwXSA9IFwiVmVyYm9zZVwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkluZm9ybWF0aW9uXCJdID0gMV0gPSBcIkluZm9ybWF0aW9uXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiV2FybmluZ1wiXSA9IDJdID0gXCJXYXJuaW5nXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiRXJyb3JcIl0gPSAzXSA9IFwiRXJyb3JcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJDcml0aWNhbFwiXSA9IDRdID0gXCJDcml0aWNhbFwiO1xyXG4gICAgfSkoU2V2ZXJpdHlMZXZlbCA9IEFJLlNldmVyaXR5TGV2ZWwgfHwgKEFJLlNldmVyaXR5TGV2ZWwgPSB7fSkpO1xyXG59KShBSSB8fCAoQUkgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JQ29uZmlnLnRzXCIgLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVRlbGVtZXRyeUNvbnRleHQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250cmFjdHMvR2VuZXJhdGVkL1NldmVyaXR5TGV2ZWwudHNcIiAvPlxyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIHZhciBVdGlsSGVscGVycyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gVXRpbEhlbHBlcnMoKSB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIGdlbmVyYXRlIHJhbmRvbSBpZCBzdHJpbmdcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIFV0aWxIZWxwZXJzLm5ld0lkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJhc2U2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKSAqIDEwNzM3NDE4MjQ7IC8vNSBzeW1ib2xzIGluIGJhc2U2NCwgYWxtb3N0IG1heGludFxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHJhbmRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhciA9IGJhc2U2NGNoYXJzLmNoYXJBdChyYW5kb20gJSA2NCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihyYW5kb20gLyA2NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbEhlbHBlcnM7XHJcbiAgICAgICAgfSgpKTtcclxuICAgICAgICBBcHBsaWNhdGlvbkluc2lnaHRzLlV0aWxIZWxwZXJzID0gVXRpbEhlbHBlcnM7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy5JbnRlcmZhY2VzL0lDb25maWcudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUFwcEluc2lnaHRzLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vSmF2YVNjcmlwdFNESy9VdGlsSGVscGVycy50c1wiLz5cclxuZGVmaW5lKFwiSmF2YVNjcmlwdFNESy5Nb2R1bGUvQXBwSW5zaWdodHNNb2R1bGVcIiwgW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuICAgIHZhciBBcHBJbnNpZ2h0c01vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmdW5jdGlvbiBBcHBJbnNpZ2h0c01vZHVsZSgpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gRGVmaW5lIGEgdGVtcG9yYXJ5IG1ldGhvZCB0aGF0IHF1ZXVlcy11cCBhIHRoZSByZWFsIG1ldGhvZCBjYWxsXHJcbiAgICAgICAgICAgIGFpT2JqZWN0W25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgb3JpZ2luYWwgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgbWV0aG9kXHJcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxBcmd1bWVudHMgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcXVldWUgaXMgYXZhaWxhYmxlLCBpdCBtZWFucyB0aGF0IHRoZSBmdW5jdGlvbiB3YXNuJ3QgeWV0IHJlcGxhY2VkIHdpdGggYWN0dWFsIGZ1bmN0aW9uIHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAoYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFpT2JqZWN0W25hbWVdLmFwcGx5KGFpT2JqZWN0LCBvcmlnaW5hbEFyZ3VtZW50cyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIDtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBjYXB0dXJlIGluaXRpYWwgY29va2llIGlmIHBvc3NpYmxlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5jb29raWUgPSBkb2N1bWVudC5jb29raWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gW1xyXG4gICAgICAgICAgICAgICAgXCJjbGVhckF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbHVzaFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YXJ0VHJhY2tQYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja0V2ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0b3BUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tEZXBlbmRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFeGNlcHRpb25cIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tNZXRyaWNcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tQYWdlVmlld1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1RyYWNlXCJcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgd2hpbGUgKG1ldGhvZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKG1ldGhvZC5wb3AoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCA9IGZ1bmN0aW9uIChhaUNvbmZpZykge1xyXG4gICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luc3RhbmNlLmNvbmZpZyA9IGFpQ29uZmlnO1xyXG4gICAgICAgICAgICB2YXIgYWlPYmplY3QgPSB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgLy8gaWYgc2NyaXB0IHdhcyBwcmV2aW91c2x5IGRvd25sb2FkZWQgYW5kIGluaXRpYWxpemVkLCBxdWV1ZSB3aWxsIGJlIGRlbGV0ZWQsIHJlaW5pdGlhbGl6ZSBpdFxyXG4gICAgICAgICAgICBpZiAoIWFpT2JqZWN0LnF1ZXVlKSB7XHJcbiAgICAgICAgICAgICAgICBhaU9iamVjdC5xdWV1ZSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2NyaXB0RWxlbWVudC5zcmMgPSBhaUNvbmZpZy51cmwgfHwgXCJodHRwczovL2F6NDE2NDI2LnZvLm1zZWNuZC5uZXQvc2NyaXB0cy9hL2FpLjAuanNcIjtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb2xsZWN0IGdsb2JhbCBlcnJvcnMgYnkgd3JhcHBpbmcgdGhlIHdpbmRvdy5vbmVycm9yIG1ldGhvZFxyXG4gICAgICAgICAgICBpZiAoIWFpQ29uZmlnLmRpc2FibGVFeGNlcHRpb25UcmFja2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZF8xID0gXCJvbmVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZChcIl9cIiArIG1ldGhvZF8xKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbE9uRXJyb3IgPSB3aW5kb3dbbWV0aG9kXzFdO1xyXG4gICAgICAgICAgICAgICAgd2luZG93W21ldGhvZF8xXSA9IGZ1bmN0aW9uIChtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlZCA9IG9yaWdpbmFsT25FcnJvciAmJiBvcmlnaW5hbE9uRXJyb3IobWVzc2FnZSwgdXJsLCBsaW5lTnVtYmVyLCBjb2x1bW5OdW1iZXIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlZCAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtcIl9cIiArIG1ldGhvZF8xXShtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlZDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBJbnNpZ2h0c01vZHVsZSwgXCJhcHBJbnNpZ2h0c0luc3RhbmNlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvd25sb2FkQW5kU2V0dXA6IEFwcEluc2lnaHRzTW9kdWxlLl9kb3dubG9hZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwb3NpbmcgaXQgZm9yIHVuaXQgdGVzdHMgb25seSwgbm90IHBhcnQgb2YgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kZWZpbmVMYXp5TWV0aG9kczogQXBwSW5zaWdodHNNb2R1bGUuX2RlZmluZUxhenlNZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZSA9IFwiYXBwSW5zaWdodHNcIjtcclxuICAgICAgICByZXR1cm4gQXBwSW5zaWdodHNNb2R1bGU7XHJcbiAgICB9KCkpO1xyXG4gICAgZXhwb3J0cy5BcHBJbnNpZ2h0cyA9IEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2U7XHJcbn0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haS5tb2R1bGUuanMubWFwIiwi77u/XHJcbi8vIDA5LzEzLzIwMTkgMDU6NDggYW0gLSBTU04gLSBbMjAxOTA5MTMtMDU0OF0gLSBbMDAxXSAtIENyYXRlIGdlbmVyaWMgZHJvcGRvd24gbGlzdCBkaXJlY3RpdmVcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9qcXVlcnkuZC50c1wiIC8+IFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy9hbmd1bGFyL2luZGV4LmQudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vc2hhcmVkL0RhdGFTZXJ2aWNlcy50c1wiLz5cclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjUyIGFtIC0gU1NOIC0gQWRkZWQgaW1wb3J0IGFuZ3VsYXJcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcclxuXHJcblxyXG4vLyAwOS8yMC8yMDE5IDEwOjIxIGFtIC0gU1NOIC0gUmVwbGFjZSBhbmd1bGFyLm1vZHVsZVxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL3NoYXJlZC9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IERETERfQ09OU1RBTlRTIH0gZnJvbSAnLi9Ecm9wZG93bkxpc3REaXJlY3RpdmVDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBCUk9BRENBU1RfSURFTlRJRklFUlMgfSBmcm9tICcuLi9TaGFyZWQvQnJvYWRjYXN0X0lkZW50aWZlcnMnO1xyXG5cclxuaW50ZXJmYWNlIExvb2t1cFJlY29yZCB7XHJcbiAgICBpZDogbnVtYmVyXHJcbn1cclxuXHJcbmludGVyZmFjZSBJU2NvcGVfRERMRCBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcclxuXHJcbiAgICBmb3JtTmFtZTogYW55XHJcbn1cclxuXHJcblxyXG4vLyBBZGQgYXV0b2ZvY3VzPVwidHJ1ZVwiIHRvIHNldCBmb2N1c1xyXG5cclxudmFyIGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKGRlZmF1bHRBcHBOYW1lKSAhPSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGRlZmF1bHRBcHBOYW1lID0gXCJkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIGRlZmF1bHRBcHBOYW1lLCBbJ3VpLmJvb3RzdHJhcCddKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFVzZWQgZm9yIHNjcm9sbCBwYWdlIHdoZW4gZm9ybSBpcyBpbnZhbGlkLCBvbiBzdWJtaXQuXHJcbiAgICAgICAgdmFyIHV0aWxpdHlDb250cm9sbGVyX29iamVjdFJlZiA9IGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCd1dGlsaXR5Q29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCAnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uLCBzc25fbG9nZ2VyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm1fMSA9IGZ1bmN0aW9uIChldmVudCwgZm9ybSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZvcm0uJHZhbGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsSW50b0FwcFZpZXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LmNvZGUtc2FtcGxlLmNvbS8yMDE4LzExL2FuZ3VsYXJqcy1zY3JvbGwtdG8tZXJyb3Itb24tc3VibWl0LWFuZC5odG1sXHJcbiAgICAgICAgICAgIHZhciBzY3JvbGxJbnRvQXBwVmlldyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZWx0ID0gJChcIi5oYXMtZXJyb3I6dmlzaWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZWx0Lmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNjcm9sbFRvcDogKGVsdC5maXJzdCgpLm9mZnNldCgpLnRvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsVG9wOiAoZWx0LmZpcnN0KCkuY2xvc2VzdCgnZGl2JykucHJldkFsbCgnZGl2Jykub2Zmc2V0KCkudG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IChlbHQuZmlyc3QoKS5jbG9zZXN0KCdkaXYuZm9ybS1ncm91cCcpLm9mZnNldCgpLnRvcCAtIDgwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkb3duZG93bkxpc3RfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIFtcIiRxXCIsIFwic3NuX2xvZ2dlclwiLCBmdW5jdGlvbiAoJHEsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3ggLSAyMDIxMDYxNC0yMTU0JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDcvMjAyMSAwMjowNCBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTRdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBhcmUgdXNpbmcgdGhpcyBmb3IgYWRkaW5nIG5ldyBpdGVtcyB0byBtYXN0ZXIuXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRyLCBuZ01vZGVsX2N0cmwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlID0gYXR0cltcImRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlDb2x1bW4gPSBhdHRyW1wia2V5Q29sdW1uXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3ggbGluayAtIDIwMjEwNjE3LTE5MTYnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2tleUNvbHVtbjonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgJWMgMjAyMTA2MTAtMjExOCBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UgWyR7ZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlfV1gLCAnY29sb3I6Ymx1ZTtmb250LXNpemU6MjBwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGF0dHIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5iaW5kKCdibHVyJywgKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZHJvcGRvd24gYmx1ciAtIDIwMjEwNjE3LTE4MDUgJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTBwdDsnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25nTW9kZWxfY3RybC4kbW9kZWxWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZ01vZGVsX2N0cmwuJHZpZXdWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwuJHZpZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmdNb2RlbF9jdHJsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5nTW9kZWxfY3RybCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgVGhpcyB1cGRhdGVzIHRoZSB2aWV3IHRvIHJlZmxlY3QgdGhlIG5ldyBpdGVtIGJ1dCBkb2VzIG5vdCB1cGRhdGUgdGhlIHR5cGVhaGVhZCBzb3VyY2UuIChcIk5vIHJlc3VsdHMgZm91bmRcIiBpcyBkaXNwbGF5ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJyVjIGRyb3Bkb3duIGJsdXIgLSBzZXR0aW5nICRzZXRWaWV3VmFsdWUgMjAyMTA2MTgtMDM0MC1hYWFhJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0Vmlld1ZhbHVlKG5nTW9kZWxfY3RybC4kbW9kZWxWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBkcm9wZG93biBibHVyIC0gTk9UIHNldHRpbmcgbW9kZWxWYWx1ZSAyMDIxMDYxOC0wMzQwJywgJ2NvbG9yOlJFRDtmb250LXNpemU6MTRwdDsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlICYmIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZT09XCJ0cnVlXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjICAyMDIxMDYxNy0xOTAxIC0gZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZX1dYCwgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzE4LzIwMjEgMDY6NDMgcG0gLSBTU04gLSBDaGFuZ2UgJG1vZGVsVmFsdWUgdG8gJG1vZGVsVmFsdWUuaWQgKGVkaXQgdGltZXNoZWV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfSElEREVOX0tFWV9WQUxVRSwga2V5Q29sdW1uOiBrZXlDb2x1bW4sIGtleVZhbHVlOiBuZ01vZGVsX2N0cmwuJE1vZGVsVmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZS4kYnJvYWRjYXN0KEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgeyBtc2c6IERETERfQ09OU1RBTlRTLlVQREFURV9ISURERU5fS0VZX1ZBTFVFLCBjYWxsU291cmNlOiAnMjAyMTA2MTgtMTg1OCcsIGtleUNvbHVtbjoga2V5Q29sdW1uLCBrZXlWYWx1ZTogbmdNb2RlbF9jdHJsLiRtb2RlbFZhbHVlLmlkIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3ggPSBhdHRyLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94LnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBGdW5jdGlvbmFsXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHNldFZhbGlkaXR5KGF0dHIubmFtZSArICcuZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3gnLCBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveC5pbmRleE9mKHZhbHVlKSA9PT0gLTEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kYXN5bmNWYWxpZGF0b3JzLmlzVmFsaWREcm9wZG93bkRpcmVjdGl2ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChtb2RlbFZhbHVlLCB2aWV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvZXMgZmlyZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW9kZWxWYWx1ZSBkb2Vzbid0IGhvbm9yIHNlbGVjdGVkIHZhbHVlIGFmdGVyIGl0IGhhcyBhbHJlYWR5IGJlZW4gc2V0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbnRpbCB3ZSBjYW9tZSB1cCB3aXRoIGEgd2F5IHRvIHJlc2V0IGl0LCBkaXNhYmxlIGJ5IGJ5cGFzc2luZyBhcyB2YWxpZC5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYxOC0xODE1Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZ01vZGVsX2N0cmwuJGRpcnR5OicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5nTW9kZWxfY3RybC4kZGlydHkpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZ01vZGVsX2N0cmwuJGRpcnR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IG1vZGVsVmFsdWUgJiYgbW9kZWxWYWx1ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlID09IFwidHJ1ZVwiKSB2YWxpZGF0aW9uUmVzdWx0ID0gIXZhbGlkYXRpb25SZXN1bHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25SZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgcHJvbWlzZSBvZiB0aGUgYXN5bmNocm9ub3VzIHZhbGlkYXRvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZScsIFsnc3NuX2xvZ2dlcicsICckdGltZW91dCcsIGZ1bmN0aW9uIChzc25fbG9nZ2VyLCAkdGltZW91dCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gWyckd2luZG93JywgJyRodHRwJywgJyRxJywgJyRzY29wZScsICckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCBmdW5jdGlvbiAoJHdpbmRvdywgJGh0dHAsICRxLCAkc2NvcGUsICRyb290U2NvcGUsICR0aW1lb3V0LCBjaGFuZ2VNb25pdG9yU2VydmljZSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uaXNSZWFkeSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xOC8yMDIxIDA3OjU1IHBtIC0gU1NOXHJcbiAgICAgICAgICAgICAgICAvLyBNb3ZlIG91dHNpZGUgZnVuY3Rpb24gdG8gcG9zdCBuZXcgZW50cmllcy4gIExvb2tpbmcgdG8gdXBkYXRlIHR5cGVhaGVhZCBvbiBhZGRpdGlvbiBvbiBuZXcgZW50cmllcyBzbyBcIk5vIHJlc3VsdHMgZm91bmRcIiBjb3VsZCBkaXNhcHBlYXJcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5hZGRyZXNzZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB2bS50ZW1wQ29udHJvbE5hbWUgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlXyR7dm0uY2FsbFNvdXJjZX1fYCArIGQuZ2V0SG91cnMoKSArIFwiX1wiICsgZC5nZXRNaW51dGVzKCkgKyBcIl9cIiArIGQuZ2V0U2Vjb25kcygpICsgXCJfXCIgKyBkLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gICAgICAgICAgICAgICAgLy8gdm0udGVtcENvbnRyb2xOYW1lID0gdGhpcy5rZXlDb2x1bW47XHJcbiAgICAgICAgICAgICAgICB2bS50ZW1wQ29udHJvbE5hbWUgPSBgRHJvcGRvd25MaXN0RGlyZWN0aXZlXyR7TWF0aC5yYW5kb20oKX1fYDtcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5ibGFja0xpc3RFcnJvck5hbWUgPSB2bS50ZW1wQ29udHJvbE5hbWUgKyBcIi5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIHZtLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvclRyaWdnZXJlZCA9IGZ1bmN0aW9uIChlcnJvck5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLmZvcm1OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdm0uZm9ybU5hbWUuJGVycm9yW2Vycm9yTmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZXJyb3JUcmlnZ2VyZWRXaXRoQ29udHJvbE5hbWUgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUsIGVycm9yTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdm0uZm9ybU5hbWVbY29udHJvbE5hbWVdLiRlcnJvcltlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRlc3Rpbmcgd2l0aCAncmVxdWlyZWQnIHJldHVybiBhIGJvb2xlYW4uICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uZm9ybU5hbWUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSlbXCIkZXJyb3JcIl1bZXJyb3JOYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgZnVuY3Rpb24gKGV2ZW50cywgYXJncykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNIYW5kbGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZmlyZXMgb24gc3RhcnQgYW5kIG9uY2Ugb24gY2hhbmdlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBbJHtCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkV9XWAsICdjb2xvcjpibHVlO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubXNnID09PSBERExEX0NPTlNUQU5UUy5ET19TRVRfRk9DVVMgJiYgYXJncy5qcXVlcnlPYmplY3RSZWYpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MuanF1ZXJ5T2JqZWN0UmVmLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0ucGFyZW50S2V5TmFtZSAmJiB2bS5wYXJlbnRLZXlOYW1lID09IGFyZ3Mua2V5Q29sdW1uICYmIGFyZ3Mua2V5VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBhcmVudEtleUNvbHVtbiA9IGFyZ3Mua2V5VmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhcmdzLm1zZyA9PSBERExEX0NPTlNUQU5UUy5VUERBVEVfSElEREVOX0tFWV9WQUxVRSkgJiYgdm0ua2V5Q29sdW1uICYmIGFyZ3Mua2V5Q29sdW1uICYmICh2bS5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSA9PSBhcmdzLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHVwZGF0ZSBoaWRkZW4ga2V5IGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XWAsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHVwZGF0ZSBoaWRkZW4ga2V5IGhpZGRlbkZpZWxkTmFtZSBbJHt2bS5oaWRkZW5GaWVsZE5hbWV9XWAsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHVwZGF0ZSBoaWRkZW4ga2V5IGFyZ3Mua2V5VmFsdWUgWyR7YXJncy5rZXlWYWx1ZX1dYCwgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZtLmtleUNvbHVtbiAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0ua2V5Q29sdW1uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzLmtleUNvbHVtbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzLmtleUNvbHVtbik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmhpZGRlbkZpZWxkTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB2bS5oaWRkZW5GaWVsZE5hbWUgKyBcIiddXCIpLnZhbChhcmdzLmtleVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbFNvdXJjZTogJzIwMjEwNjE3LTIxNTQnLCBtZXNzYWdlOiBgaGlkZGVuRmllbGROYW1lIG5vdCBkZWZpbmVkIHdoaWxlIHVwZGF0aW5nIFske2FyZ3Mua2V5Q29sdW1ufV19IHZtLkNhbGxTb3VyY2UgWyR7dm0uY2FsbFNvdXJjZX1dYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChhcmdzLm1zZyA9PSBERExEX0NPTlNUQU5UUy5VUERBVEVfRFJPUERPV05fTElTVCkgJiYgdm0ua2V5Q29sdW1uICYmIGFyZ3Mua2V5Q29sdW1uICYmICh2bS5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSA9PSBhcmdzLmtleUNvbHVtbi50b0xvd2VyQ2FzZSgpKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMTcwOC1CLTInLCBtZXNzYWdlOiBgWyR7QlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFfV0gdXBkYXRlIGRyb3Bkb3duIC0gdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ2dyZWVuJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdldmVudHM6JywgZXZlbnRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FyZ3MnLCBhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgdm0uZ2V0RGlzY2lwbGluZXMoYXJncy5kZXNjcmlwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogYXJncy5pZCwgdGl0bGU6IGFyZ3MuZGVzY3JpcHRpb24gfTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxOC0xOTUyJywgbWVzc2FnZTogYFske0JST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRX1dIGFkZGluZyBuZXcgZW50cnkgdG8gJ2FkZHJlc3NlcydgIH0sICdyZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzLnB1c2goeyBpZDogYXJncy5pZCwgdGl0bGU6IGFyZ3MuZGVzY3JpcHRpb24gfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgIHZtLm5nTW9kZWwuJHNldFZpZXdWYWx1ZShhcmdzLmRlc2NyaXB0aW9uKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vJHRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMjEwNjE4LTAzMzAgLSBzZXRWaWV3VmFsdWUgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHZtLm5nTW9kZWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgLCAxMDAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyR0aW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYxOC0wMzMwIC0gc2V0Vmlld1ZhbHVlICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB2bS5uZ01vZGVsID0gYXJncy5kZXNjcmlwdGlvbiA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAsIDIwMDApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLm1zZyA9PSBERExEX0NPTlNUQU5UUy5DQUxMX1ZBTElEQVRFX1RISVMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE1MjknLCBtZXNzYWdlOiAnY2FsbCB2YWxpZGF0ZVRoaXMnIH0sICdibHVlJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZVRoaXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLm1zZyA9PSBERExEX0NPTlNUQU5UUy5TRUxFQ1RfTkVXX1ZBTFVFKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNy0wNjQzJywgbWVzc2FnZTogJ3NlbGVjdCBuZXcgdmFsdWUgZmlyaW5nJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGFuZGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNIYW5kbGVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0wNTQ3JywgbWVzc2FnZTogYFske0JST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRX1dIG5vdCBoYW5kbGVkIC0gdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ3JlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzJywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDg6MjkgYW0gLSBTU04gLSBBZGRpbmcgLSBOZWVkIHRvIGluaXRpYWxpemEgZm9yICR3YXRjaCB0byB3b3JrLlxyXG4gICAgICAgICAgICAgICAgLy8gZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgaW5zdGVhZCBvZiBuZ01vZGVsIGJlY2F1c2Ugd2UgdXNlIGFuIG9iamVjdCBmb3Igc2VsZWN0ZWQgZW50cnksIGlkIGFuZCB0aWxlLiBuZ01vZGVsIGlzIHVzdWFsbHkgYSBrZXkuIChUaGUgaWQpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCclYyAnICsgJ0Rlc3Ryb3kgRHJvcERvd25MaXN0RGlyZWN0aXZlIC0gMjAyMTA2MTQtMjE1MicsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5uZ01vZGVsJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNDM4JywgbWVzc2FnZTogYENIQU5HRSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAneWVsbG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9sZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MTIgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDIyXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChuZXdWYWx1ZSAhPSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE0MzgtQicsIG1lc3NhZ2U6IGBDSEFOR0Ugdm0ua2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAgIHBhcmVudEtleUNvbHVtbiBbJHt2bS5wYXJlbnRLZXlDb2x1bW59XWAgfSwgJ2dyZWVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS52YWxpZGF0ZVRoaXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE0MzgtQy0yJywgbWVzc2FnZTogYENIQU5HRSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAncmVkJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5wYXJlbnRLZXlDb2x1bW4nLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNy0xODQ1JywgbWVzc2FnZTogJ3ZtMTAxLnBhcmVudEtleUNvbHVtbiAtIHdhdGNoJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUgIT0gbmV3VmFsdWUgJiYgb2xkVmFsdWUgIT0gbnVsbCkgeyAvLyBvbGRWYWx1ZSBpcyBudWxsIG9uIGZpcnN0IGNhbGwuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm0ubmdNb2RlbCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MDcgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDIxXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGUgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubmdNb2RlbCA9IC0xMDIwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHZtMTAxLnBhcmVudEtleUNvbHVtbiAtIHNldHRpbmcgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgMjAyMTA2MTctMTIxNGAsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZtLm5nTW9kZWwgPSAtMTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHZtMTAxLnBhcmVudEtleUNvbHVtbiAtIHNldHRpbmcgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgMjAyMTA2MTctMTg0NyAtIGJsYW5rIG91dCBbJHt2bS5oaWRkZW5GaWVsZE5hbWV9XWAsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB2bS5oaWRkZW5GaWVsZE5hbWUgKyBcIiddXCIpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8kc2NvcGUuJHdhdGNoKCd2bTEwMS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYJywgZnVuY3Rpb24gKG5ld1ZhbHVlOiBMb29rdXBSZWNvcmQsIG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJHdhdGNoKCd2bTEwMS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYJywgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggd2F0Y2ggLSAyMDIxMDYxNy0xMjI3YCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIHNob3dzIG51bGwgZm9yIG5ldyB2YWx1ZSAnLCAnY29sb3I6cmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmV3VmFsdWU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnb2xkVmFsdWU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBzaG93cyBudWxsIGZvciBib3RoIHZhbHVlcyAnLCAnY29sb3I6cmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS4kbW9kZWxWYWx1ZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS4kbW9kZWxWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS4kdmlld1ZhbHVlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLiR2aWV3VmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICYmIG5ld1ZhbHVlLmlkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSBuZXdWYWx1ZS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBzZXR0aW5nIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gMjAyMTA2MTctMTIxM2AsICdjb2xvcjpjeWFuO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uaGlkZGVuRmllbGROYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHNldHRpbmcgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSB1cGRhdGUgdm0uaGlkZGVuRmllbGROYW1lICBbJHt2bS5oaWRkZW5GaWVsZE5hbWV9XSAgd2l0aCBbJHtuZXdWYWx1ZS5pZH1dIDIwMjEwNjE4LTIwMDhgLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxMnB0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKG5ld1ZhbHVlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lLiRkaXJ0eSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLmRvU2V0SGF2ZUNoYW5nZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMua2V5Q29sdW1uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuZGlzY2lwbGluZWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzY2lwbGluZWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvRGlzY2lwbGluZUFQSSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMi8xMC8yMDIwIDA0OjMyIHBtIC0gU1NOIC0gWzIwMjAxMjEwLTE2MjVdIC0gWzAwMl0gLSBVcGRhdGUgVGltZWxvZyBlZGl0IE1WQ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jYXNlICd0aW1lbG9nLmxpbmVpdGVtaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdsaW5laXRlbWlkJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvam9iX0xpbmVJdGVtQVBJL3R5cGVhaGVhZF9qb2JyZWNvcmRzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL2pvYl9MaW5lSXRlbUFQSS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lbG9nLmpvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iLmpvYmlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL2pvYmFwaS90eXBlYWhlYWRfcHJvamVjdFJlY29yZHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvam9iYXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA0OjQ2IHBtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2pvYi5wcm9qZWN0aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL3Byb2plY3RhcGkvdHlwZWFoZWFkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL3Byb2plY3RhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzEzLzIwMjEgMTA6MTMgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDIzXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGVjaG5vbG9neWlkJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS90ZWNobm9sb2d5YXBpL3R5cGVhaGVhZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS90ZWNobm9sb2d5YXBpL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uQVBJVXJsTGlzdEFsbCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBtaXNzaW5nIGRlZmluaXRpb24gZm9yIEFQSVVybExpc3RBbGwgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIxMDYwOC0xMzEwYFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjJHtlcnJvck1lc3NhZ2V9YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzExJywgbWVzc2FnZTogZXJyb3JNZXNzYWdlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodm0uQVBJVXJsU2luZ2xlUmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBtaXNzaW5nIGRlZmluaXRpb24gZm9yIHZtLkFQSVVybFNpbmdsZVJlY29yZCBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjEwNjA4LTE0MjdgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2Vycm9yTWVzc2FnZX1gLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTE0MjgnLCBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5wYXJlbnRLZXlDb2x1bW4pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50S2V5Q29sdW1uVmFsdWUgPSB0aGlzLnBhcmVudEtleUNvbHVtbjsgLy91bmRlZmluZWQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudEtleUNvbHVtblZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9IHZtLkFQSVVybExpc3RBbGwgKyBcIi9cIiArIHBhcmVudEtleUNvbHVtblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmNoYW5naW5nID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5TRUxFQ1RfTkVXX1ZBTFVFLCBjYWxsU291cmNlOlwiMjAyMTA2MTgtMTkxNi1jaGFuZ2luZ1wiLCBrZXlDb2x1bW46IHZtLmtleUNvbHVtbiwga2V5VmFsdWU6IHZtLm5nTW9kZWwgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDEwOjM2IHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwN10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICAgICAgdm0udHlwZWFoZWFkT25TZWxlY3QgPSBmdW5jdGlvbiAoaXRlbSwgbW9kZWwsIGxhYmVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB0eXBlYWhlYWRPblNlbGVjdCAyMDIxMDYxNi0yMjM3IGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIHh4eHh4eHh4eDonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsOicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhYmVsOicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGFiZWwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gaXRlbTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSBpdGVtLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICAyMDIxMDYxNy0xMjEyYCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjM5IHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyNl0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlIHZtLnZhbGlkYXRlVGhpcyAtIDIwMjEwNjE3LTEwNDMgICcsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5uZ01vZGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm5nTW9kZWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh2bS5uZ01vZGVsICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQodm0ubmdNb2RlbCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzLCB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvcik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7IG1zZzogRERMRF9DSEFOR0VfTVNHLkhBU19WQUxJRF9WQUxVRSwga2V5Q29sdW1uOiB2bS5rZXlDb2x1bW4sIGtleVZhbHVlOiB2bS5uZ01vZGVsIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTA1MjgnLCBtZXNzYWdlOiBgdmFsaWRhdGVUaGlzOiB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAneWVsbG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyB0aXRsZTogdm0uY29udGFpbmVyVmlld1ZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgLSAyMDIxMDYxNy0xMDUxJywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyB1cGRhdGUgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgMjAyMTA2MTgtMTkxOCcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGNoZWNrIGRhdGEuZGlzY2lwbGluZWlkIGRhdGEudGFfaWQgJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTJwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLmRpc2NpcGxpbmVJZCwgdGl0bGU6IGRhdGEuZGlzY2lwbGluZVNob3J0IH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS50YV9pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFggPSB7IGlkOiBkYXRhLnRhX2lkLCB0aXRsZTogZGF0YS50YV9kZXNjcmlwdGlvbiB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzMFwiIH0sIFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMxXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzJcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzM1wiIH0sIFwicmVkXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0yMTU4LUEnLCBtZXNzYWdlOiBgY3VycmVudERpc3BsaW5lTG9va3VwRXJyb3IgYCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIxNTgtQicsIG1lc3NhZ2U6IGBjdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvciBgLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsZWQgZnJvbSB2aWV3IGlucHV0IGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIHZtLmdldERpc2NpcGxpbmVzID0gZnVuY3Rpb24gKGxvb2t1cFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBnZXREaXNjaXBsaW5lcyAgMjAyMTA2MTgtMTkxOScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE2cHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbi8vIEZvciBhZGRpbmcgbmV3IGVudHJpZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uY29udGFpbmVyVmlld1ZhbHVlID0gbG9va3VwVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDctMTYwNy1BXCIsIG1lc3NhZ2U6IFwiZ2V0RGlzY2lwbGluZSBjYWxsIHRvIGFzc2lnbiBjb250YWluZXJWaWV3VmFsdWUgZmFpbGVkXCIgfSwgXCJSZWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxMi0wMDQxXCIsIG1lc3NhZ2U6IGBnZXREaXNjaXBsaW5lIGNhbGwgdG8gYXNzaWduIGNvbnRhaW5lclZpZXdWYWx1ZSBmYWlsZWQgWyR7bG9va3VwVmFsdWV9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uc2V0dXBVcmwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cFZhbHVlID09PSBudWxsKSBsb29rdXBWYWx1ZSA9IFwiXCI7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmRlZmVycmVkX2dldERpc2NpcGxpbmVRdWVyeS5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleGVjdXRlUXVlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5KCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5SXNJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRlZmVycmVkX2dldERpc2NpcGxpbmVRdWVyeSA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGdldERpc2NpcGxpbmVzIC0gMjAyMTA2MTctMTExOSAnLCAnY29sb3I6eWVsbG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndm0uQVBJVXJsTGlzdEFsbDonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uQVBJVXJsTGlzdEFsbCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlYm91bmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHZtLkFQSVVybExpc3RBbGxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzLCB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmRlZmVycmVkX2dldERpc2NpcGxpbmVRdWVyeS5wcm9taXNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzID0gW107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLnRhX2lkLCB0aXRsZTogaXRlbS50YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmFkZHJlc3Nlcy5sZW5ndGggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHZtLmFkZHJlc3Nlc1swXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzEyLzIwMjEgMDE6MTUgcG0gLSBTU04gLSBUZXN0aW5nIGlmIGNhbiBnZXQgb3ZlciBwcmV2ZW50aW5nIHVzZXJzIGZyb20gYWx0ZXJpbmcgc2luZ2xlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLyB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogdm0uYWRkcmVzc2VzWzBdLmlkIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm0ubmdNb2RlbCA9IHZtLmFkZHJlc3Nlc1swXS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucmVzb2x2ZSh2bS5hZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxMzlcIiwgbWVzc2FnZTogXCJ0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3JcIiB9LCBcInJlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDgtMjE0MFwiLCBtZXNzYWdlOiBcInR5cGVhaGVhZERpc2NpcGxpbmVFcnJvclwiLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRlZmVycmVkX2dldERpc2NpcGxpbmVRdWVyeS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5SXNJblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5nZXREaXNjaXBsaW5lQ3VycmVudCA9IGZ1bmN0aW9uIChsb29rdXBJRCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvb2t1cElEID09PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTAxMDUtMjI0MycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRHJvcGRvd25MaXN0RGlyZWN0aXZlIGxvb2t1cElEIGlzIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTQxNScsIG1lc3NhZ2U6IGBDYWxsaW5nIGdldERpc2NpcGxpbmVDdXJyZW50ICB3aXRoIG51bGwgbG9va3VwSURgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2NhbFVybCA9IHZtLkFQSVVybFNpbmdsZVJlY29yZCArIFwiL1wiICsgbG9va3VwSUQ7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogbG9jYWxVcmxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbih0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcywgdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKS5jYXRjaCh0eXBlYWhlYWREaXNjaXBsaW5lQ2F0Y2gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uaXNSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3IocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyBnZXREaXNjaXBsaW5lQ3VycmVudCAyMDIgbG9va3VwSUQgIFske2xvb2t1cElEfV0gZXJyb3JgLCAnY29sb3I6cmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTEzMTYnLCBtZXNzYWdlOiBgRmFpbGVkIGNhbGwgdG8gWyR7bG9jYWxVcmx9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUNhdGNoKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgdHlwZWFoZWFkRGlzY2lwbGluZUNhdGNoICBsb29rdXBJRCAgWyR7bG9va3VwSUR9XSBjYXRjaGAsICdjb2xvcjpyZWQsZm9udC1zaXplOjE0cHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTEzMTYnLCBtZXNzYWdlOiBgRmFpbGVkIGNhbGwgdG8gWyR7bG9jYWxVcmx9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QocmVzcG9uc2UpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZm9ybUVycm9yc0J5Q29udHJvbCA9IGZ1bmN0aW9uIChjb250cm9sTmFtZSwgZXJyb3JOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZVtjb250cm9sTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKVtcIiRlcnJvclwiXVtlcnJvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvRHJvcGRvd25MaXN0L0Ryb3BEb3duTGlzdERpcmVjdGl2ZS5odG1sXCIsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0xMDEnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG4gICAgICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYWxsU291cmNlOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAga2V5Q29sdW1uOiBcIkBrZXlcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5Q29sdW1uOiBcIj1wYXJlbnRrZXlcIixcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRLZXlOYW1lOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6IFwiPVwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW5GaWVsZE5hbWU6IFwiQFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsOiBcIj1cIixcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFkZEZ1bmM6IFwiJlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZEZ1bmNTb3VyY2U6IFwiQFwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBIb2xkZXIgZm9yIHR5cGVkIGluIHZhbHVlLCBpZiBpdCBkb2Vzbid0IGV4aXN0LCBzbyBpdCBjYW4gYmUgY29waWVkIHRvIHRoZSBhZGQgZm9ybS5cclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IFwiPT9cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlOiBcIkBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9ERExELCBlbCwgYXR0cnMsIGN0cmwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9ERExELCBlbCwgYXR0cnMsIGN0cmwpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lclZpZXdWYWx1ZSA9IFwiTm90U2V0LTIwMjEwNjA3LTAyMTNcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDgtQVwiLCBtZXNzYWdlOiBcIlVwZGF0ZSBjb250YWluZXJWaWV3VmFsdWVcIiB9LCBcInJlZFwiLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNy0xNjA4LUJcIiwgbWVzc2FnZTogdGhpcy5jYWxsU291cmNlIH0sIFwicmVkXCIsdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2N0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgIGxpbmsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0wMTI3IDIgbGluaycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTAxMjcgMiBsaW5rJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnMjAyMTA2MDctMDEyNyAyMjIgbGluaycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIHZhciB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgY3RybC4kc2V0VmFsaWRpdHkoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94JywgdmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgcmV0dXJuIHZhbHVlOyAvL3ZhbGlkID8gdmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDU6MjkgYW0gLSBTU04gLSBbMjAxOTExMjgtMDUyOV0gLSBbMDAxXSAtIEF1dG9mb2N1c1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZXRmb2N1c0Z1bmMgPSAoZWxlbSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F0dHIuYXV0b2ZvY3VzIC0gMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0ci5hdXRvZm9jdXMgLSAyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdHRyLmF1dG9mb2N1cyAtIDInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRycy5hdXRvZm9jdXMudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0ci5hdXRvZm9jdXMgLSAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0ci5hdXRvZm9jdXMgLSAzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXR0ci5hdXRvZm9jdXMgLSAzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0T2JqID0gZWxlbS5maW5kKCdpbnB1dFt0eXBlPXRleHRdJykuZmlsdGVyKCc6dmlzaWJsZTpmaXJzdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dE9iai52YWwoKSA9PT0gXCJcIikge1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE9iai5mb2N1cygpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZm9ybU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgJzIwMjEwNjEyLTAzNTMtQSAtIHNldGZvY3VzICcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAndGhpc2Zvcm1OYW1lOicsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2NvcGUuZm9ybU5hbWUpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgJyArICd0aGlzZm9ybU5hbWUuJHRvdWNoZWQnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0OycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAnICsgc2NvcGUuZm9ybU5hbWUuJHRvdWNoZWQsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7IG1zZzogRERMRF9DT05TVEFOVFMuRE9fU0VUX0ZPQ1VTLCBqcXVlcnlPYmplY3RSZWY6IGlucHV0T2JqIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjICcgKyAnMjAyMTA2MTItMDM1My1CIC0gc2V0Zm9jdXMgIC0gTk8gRk9STSBOQU1FJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZXRmb2N1c0Z1bmMoZWwpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG5cclxuICAgIH07XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDYvMTcvMjAyMSAwOToyOSBwbSAtIFNTTiBcclxuXHJcbmNvbnN0IERETERfQ09OU1RBTlRTID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIE5PVF9ERUZJTkVEOiBcIk5PVF9ERUZJTkVEXCIsXHJcbiAgICAgICAgVVBEQVRFX0hJRERFTl9LRVlfVkFMVUU6IFwiVVBEQVRFX0hJRERFTl9LRVlfVkFMVUVcIixcclxuICAgICAgICBTRUxFQ1RfTkVXX1ZBTFVFOiBcIlNFTEVDVF9ORVdfVkFMVUVcIixcclxuICAgICAgICBIQVNfVkFMSURfVkFMVUU6IFwiSEFTX1ZBTElEX1ZBTFVFXCIsXHJcbiAgICAgICAgRE9fU0VUX0ZPQ1VTOiBcIkRPX1NFVF9GT0NVU1wiLFxyXG4gICAgICAgIFVQREFURV9EUk9QRE9XTl9MSVNUOiBcIlVQREFURV9EUk9QRE9XTl9MSVNUXCIsXHJcbiAgICAgICAgQ0FMTF9WQUxJREFURV9USElTOiBcIkNBTExfVkFMSURBVEVfVEhJU1wiXHJcblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgRERMRF9DT05TVEFOVFMgfSIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbi8vIDEyLzA3LzIwMTkgMDM6NTMgYW0gLSBTU04gLSBbMjAxOTEyMDctMDM1M10gLSBbMDAxXSAtIFNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JcclxuXHJcblxyXG4vLyBodHRwczovL2NvZGUuYW5ndWxhcmpzLm9yZy8xLjIuMjcvZG9jcy9hcGkvbmcvc2VydmljZS8kaHR0cCNpbnRlcmNlcHRvcnNcclxuXHJcblxyXG5jb25zdCBkID0gbmV3IERhdGUoKTtcclxuXHJcbmNvbnNvbGUubG9nKGBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gdG9wICR7ZC50b0xvY2FsZVRpbWVTdHJpbmcoKX1gKTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIHRvcCAtIDIwMTkxMjA3LTA0MTAnKTtcclxuXHJcbmxldCBzZXNzaW9uVGltZW91dEludGVyY2VwdG9yX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSBmdW5jdGlvbiB0b3AgLSAyMDE5MTIwNy0wNDExJyk7XHJcblxyXG5cclxuICAgICAgICB2YXIgYW5ndWxhcmpzX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIC8vIDA2LzE4LzIwMjEgMDg6NDEgYW0gLSBTU04gLSBBZGRpbmcgc3NuX2xvZ2dlclxyXG5cclxuICAgICAgICBhbmd1bGFyanNfbW9kdWxlLmNvbmZpZyhbXHJcbiAgICAgICAgICAgICckaHR0cFByb3ZpZGVyJyxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCRodHRwUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwOC8yMS8yMDIwIDEwOjUzIGFtIC0gU1NOIC0gQWRkaW5nICRsb2NhdGlvblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpbnRlcmNlcHRvciA9IFtcclxuICAgICAgICAgICAgICAgICAgICAnJHEnLFxyXG4gICAgICAgICAgICAgICAgICAgICckcm9vdFNjb3BlJyxcclxuICAgICAgICAgICAgICAgICAgICAnJGxvY2F0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnc3NuX2xvZ2dlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICd1c2VyU2Vzc2lvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCRxLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sIHNzbl9sb2dnZXIpIHsgLy8gLCB1c2VyU2Vzc2lvblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIDIwMTkxMjA3LTA0MTItTUYnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIGZ1bmN0aW9uIGJlZm9yZSBtYWtpbmcgcmVxdWVzdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChjb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIE1haW4gZnVuY3Rpb24gLSBTRVJWSUNFIC0gMjAxOTEyMDctMDQxMi1TRVJWSUNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZygnY29uZmlnIG5leHQ6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy9jb25zb2xlLmxvZyhjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy9pZiAoY29uZmlnLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdXNlclNlc3Npb24uaXNBdXRoKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8gICAgLy8gdGhlIHJlcXVlc3QgbG9va3MgZ29vZCwgc28gcmV0dXJuIHRoZSBjb25maWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8gYmFkIHJlcXVlc3QsIHNvIHJlamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL3JldHVybiAkcS5yZWplY3QoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEVycm9yOiBmdW5jdGlvbiAocmVqZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRlciAtIHJlcXVlc3RFcnJvciAtIDIwMjAwODIxLTEwNDYtMDAxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBjb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRlciAtIHJlc3BvbnNlIC0gMjAyMDA4MjEtMTA0Ni0wMDInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzZXNzaW9uVGltZW91dEludGVyY2VwdGVyIC0gcmVzcG9uc2VFcnJvciAtIDIwMjAwODIxLTEwNDYtMDAzJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE4LTA4NTNcIiwgbWVzc2FnZTogYFNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JgLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goaW50ZXJjZXB0b3IpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JfaW5zdGFuY2U7XHJcblxyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG4vLyAxMi8wNy8yMDE5IDA3OjA2IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwMV0gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuXHJcbi8vIE1vdmVkIGZyb20gZGVtb1NpdGVzX2luZGV4LnRzIC0gQmVnaW5cclxuXHJcbi8vIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlIFxyXG5cclxuXHJcblxyXG52YXIgcm91dGluZ19jb25maWdfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgLy8gZnJvbSBSb3V0aW5nX0NvbmZpZyB0byBSb3V0aW5nX0NvbmZpZyB3aXRoIG1vdmUuXHJcbiAgICAvLyBNb3ZlZCBvdXRzaWRlIHRvIHNoYXJlZCBiZXR3ZWVuIGRvU2V0dXBfYSBhbmQgZG9TZXR1cF9iXHJcbiAgICB2YXIgYW5ndWxhckpTX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUm91dGluZ19Db25maWcnLCBcImRlbW9TaXRlc19JbmRleFwiLCBbJ25nUm91dGUnXSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBmcm9tIFJvdXRpbmdfQ29uZmlnIHRvIFJvdXRpbmdfQ29uZmlnIHdpdGggbW92ZS5cclxuXHJcbiAgICB2YXIgZG9TZXR1cF9hID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjYvMjAxOSAwNTo1MSBhbSAtIFNTTiAtIFsyMDE5MDkyNi0wNTUxXSBBZGQgJGxvY2F0aW9uUHJvdmlkZXJcclxuICAgICAgICBhbmd1bGFySlNfbW9kdWxlLmNvbmZpZyhbXCIkcm91dGVQcm92aWRlclwiLCBcIiRsb2NhdGlvblByb3ZpZGVyXCIsIGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuXHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvXCIsIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFwiZGVtb1NpdGVJbmRleENvbnRyb2xsZXJfMTAxXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVzSW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTAvMjAxOSAwMTo0NyBhbSAtIFNTTiAtIFsyMDE5MDkxMC0wMTQ3XSAtIFswMDFdIC0gV0FSTklORzogVHJpZWQgdG8gbG9hZCBhbmd1bGFyIG1vcmUgdGhhbiBvbmNlLlxyXG4gICAgICAgICAgICAvLyBUdXJuIG9mZlxyXG4gICAgICAgICAgICAvLyRyb3V0ZVByb3ZpZGVyLndoZW4oXCIvZGV0YWlsXCIsIHtcclxuICAgICAgICAgICAgLy8gICAgY29udHJvbGxlcjogXCJkZXZTaXRlVXBkYXRlQ29udHJvbGxlclwiLFxyXG4gICAgICAgICAgICAvLyAgICAvLyB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL1NpdGVEZXRhaWwuaHRtbFwiXHJcbiAgICAgICAgICAgIC8vICAgIHRlbXBsYXRlVXJsOiBcIi9EZXZTaXRlcy9DcmVhdGVfcGFydGlhbFwiXHJcbiAgICAgICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzI2LzIwMTkgMDU6NTEgYW0gLSBTU04gLSBbMjAxOTA5MjYtMDU1MV0gQWRkICRsb2NhdGlvblByb3ZpZGVyXHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgSFRNTDUgaGlzdG9yeSBBUElcclxuICAgICAgICAgICAgLy8gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gVG9kbzogIDExLzEzLzIwMTkgMTA6MTkgcG0gLSBTU04gLSBUZXN0aW5nXHJcbiAgICAgICAgICAgIC8vIFRha2Ugb3V0XHJcbiAgICAgICAgICAgIC8vICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7fSk7XHJcblxyXG4gICAgICAgICAgICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoeyBlbmFibGVkOiB0cnVlLCByZXdyaXRlTGlua3M6IGZhbHNlIH0pLmhhc2hQcmVmaXgoJyEnKTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgICAgICAvLyBNb3ZlZCBmcm9tIGRlbW9TaXRlc19pbmRleC50cyAtIEVuZFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTIvMDcvMjAxOSAwODowMiBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wNzA0XSAtIFswMDNdIC0gQW5ndWxhckpTIC0gUm91dGluZyAtIEF1dGhlbnRpY2F0aW9uXHJcblxyXG4gICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNzIwOTIwMy9hbmd1bGFyanMtcHJvdGVjdGluZy1yb3V0ZXMtd2l0aC1hbmd1bGFyanMtZGVwZW5kaW5nLWlmLXRoZS11c2VyLWlzLWF1dGhvcml6ZWRcclxuXHJcbiAgICB2YXIgZG9TZXR1cF9iID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnUm91dGluZ19Db25maWcudHMgLSAyMDIxMDQxNy0wODE5Jyk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJKU19tb2R1bGUuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xyXG4gICAgICAgICAgICAkcm91dGVQcm92aWRlclxyXG4gICAgICAgICAgICAgICAgLndoZW4oJy9uZWVkc2F1dGhvcmlzYXRpb24nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25maWcgZm9yIGNvbnRyb2xsZXIgYW5kIHRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RoaXMgZnVuY3Rpb24gaXMgaW5qZWN0ZWQgd2l0aCB0aGUgQXV0aFNlcnZpY2Ugd2hlcmUgeW91J2xsIHB1dCB5b3VyIGF1dGhlbnRpY2F0aW9uIGxvZ2ljXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhdXRoJzogZnVuY3Rpb24gKEF1dGhTZXJ2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXV0aFNlcnZpY2UuYXV0aGVudGljYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KS5ydW4oZnVuY3Rpb24gKCRyb290U2NvcGUsICRsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAvL0lmIHRoZSByb3V0ZSBjaGFuZ2UgZmFpbGVkIGR1ZSB0byBhdXRoZW50aWNhdGlvbiBlcnJvciwgcmVkaXJlY3QgdGhlbSBvdXRcclxuICAgICAgICAgICAgJHJvb3RTY29wZS4kb24oJyRyb3V0ZUNoYW5nZUVycm9yJywgZnVuY3Rpb24gKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cywgcmVqZWN0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZWplY3Rpb24gPT09ICdOb3QgQXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMTcvMjAyMSAwODoyMCBhbSAtIFNTTiAtIEFkZGluZyBmb3IgcmVjb3JkXHJcblxyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJHJvdXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIG5leHQsIGN1cnJlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL3dlYmxvZ3MuYXNwLm5ldC9kd2FobGluL2R5bmFtaWNhbGx5LWxvYWRpbmctY29udHJvbGxlcnMtYW5kLXZpZXdzLXdpdGgtYW5ndWxhcmpzLWFuZC1yZXF1aXJlanNcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDQxNy0wODIyOiAkcm91dGVDaGFuZ2VTdGFydCAtIEluY29tcGxldGUgYXV0aGVudGljYXRpb24gY2hlY2snKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSkuZmFjdG9yeSgnQXV0aFNlcnZpY2UnLCBmdW5jdGlvbiAoJHEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGF1dGhlbnRpY2F0ZTogZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9BdXRoZW50aWNhdGlvbiBsb2dpYyBoZXJlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGlzQXV0aGVudGljYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIGF1dGhlbnRpY2F0ZWQsIHJldHVybiBhbnl0aGluZyB5b3Ugd2FudCwgcHJvYmFibHkgYSB1c2VyIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0Vsc2Ugc2VuZCBhIHJlamVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KCdOb3QgQXV0aGVudGljYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBkb1NldHVwX2EoKTtcclxuICAgICAgICBkb1NldHVwX2IoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyByb3V0aW5nX2NvbmZpZ19pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDA2LzE4LzIwMjEgMDI6NTggYW0gLSBTU04gLSBBZGRpbmdcclxuXHJcbmV4cG9ydCBjb25zdCBCUk9BRENBU1RfSURFTlRJRklFUlMgPSB7XHJcblxyXG4gICAgRFJPUERPV05fTElTVF9ESVJFQ1RJVkU6XCJEUk9QRE9XTl9MSVNUX0RJUkVDVElWRVwiXHJcblxyXG59Iiwi77u/XHJcbi8vIDA2LzA5LzIwMjEgMTE6NTIgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDEwXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscydcclxuXHJcblxyXG5jb25zdCBNb2RhbENhbGxzVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZSwgbmdBcHBsaWNhdGlvbk5hbWUpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdNb2RhbENhbGxzVXRpbCcgKyAnX1hfJyArIGNhbGxTb3VyY2UsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdNb2RhbENhbGxTVXRpbENvbnRyb2xsZXInLCBbJyRzY29wZScsICdzc25fbG9nZ2VyJywgJyR1aWJNb2RhbCcsXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJHNjb3BlLCBzc25fbG9nZ2VyLCAkdWliTW9kYWwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDI0JywgbWVzc2FnZTogJ01vZGFsQ2FsbHNVdGlsIGRvU2V0dXAnIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGROZXdMaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JJRCwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDQzLUEnLCBtZXNzYWdlOiAnQ2FsbGluZyBhZGROZXdMaW5lSXRlbScgfSwgJ3llbGxvdycsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwNDMtQicsIG1lc3NhZ2U6IGBqb2JJRCBbJHtqb2JJRH1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDA0My1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqb2JJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJWaWV3VmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyVmlld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDAzOjI1IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0MF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5hZGROZXdUZWNobm9sb2d5ID0gZnVuY3Rpb24gKGNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTUtMDMyNi1BJywgbWVzc2FnZTogJ0NhbGxpbmcgYWRkTmV3VGVjaG5vbG9neSAnIH0sICd5ZWxsb3cnLCB0cnVlKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTUtMDMyNi1DJywgbWVzc2FnZTogYGNvbnRhaW5lclZpZXdWYWx1ZSBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy9UZWNobm9sb2d5L1RlY2hub2xvZ3lDcmVhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUZWNobm9sb2d5Q29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IE1vZGFsQ2FsbHNVdGlsIH07XHJcblxyXG4iLCLvu79cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDYvMDYvMjAyMSAwMzowNiBhbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMDVdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgeyBJSm9iX0xpbmVpdGVtSlMgfSBmcm9tICcuLi8uLi9JbnRlcmZhY2VzL0lKb2JfTGluZWl0ZW0nO1xyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4uLy4uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gJy4uLy4uL1V0aWwvTG9nZ2VyL0lMb2dnZXJFcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgeyBERExEX0NPTlNUQU5UUyB9IGZyb20gJy4uLy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmVDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBCUk9BRENBU1RfSURFTlRJRklFUlMgfSBmcm9tICcuLi8uLi9TaGFyZWQvQnJvYWRjYXN0X0lkZW50aWZlcnMnO1xyXG5cclxuXHJcbkFwcEluc2lnaHRzX1V0aWwuZG9TZXR1cChcIkxpbmVJdGVtQ29udHJvbGxlclwiKTtcclxuXHJcblxyXG52YXIgbGluZUl0ZW1Db250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyQXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ0xpbmVJdGVtQ29udHJvbGxlcicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJBcHAuY29udHJvbGxlcignTGluZUl0ZW1Db250cm9sbGVyJywgWyckcScsICckdWliTW9kYWxJbnN0YW5jZScsICckcm9vdFNjb3BlJywgJyRzY29wZScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdzc25fbG9nZ2VyJywgJ2pvYklkJywgJ2NvbnRhaW5lclZpZXdWYWx1ZScsIGxpbmVJdGVtQ29udHJvbGxlckZ1bmN0aW9uXSk7XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsaW5lSXRlbUNvbnRyb2xsZXJGdW5jdGlvbigkcSwgJHVpYk1vZGFsSW5zdGFuY2UsICRyb290U2NvcGUsICRzY29wZSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBqb2JJZCwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRlZmF1bHRWYWx1ZSA9IGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfMjAyMTA2MDZfMTUxNFwiLCB7IFNvdXJjZUNvZGU6IFwiMjAyMTA2MDYtMTUxNFwiLCBNZXNzYWdlOiBcIkluaXRcIiB9KTtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiTGluZSBpdGVtLTAwMVwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYihqb2JJZCkudGhlbihnZXRKb2JTdWNjZXNzLCBnZXRKb2JFcnJvcikuY2F0Y2goZ2V0Sm9iQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYlN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UmVjOiBJSm9iX0xpbmVpdGVtSlM7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3UmVjID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiBkYXRhLmpvYklELFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JUaXRsZTogZGF0YS5qb2JUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZTogZGF0YS5wcm9qZWN0LnByb2plY3RUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbTogJHNjb3BlLmRlZmF1bHRWYWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVKb2JfTGluZUl0ZW0gPSBuZXdSZWM7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTGluZUl0ZW1Db250cm9sbGVyIC0gZ2V0Sm9iRXJyb3IgLSAyMDIxMDYwNi0wNjExLUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MjAtMTcyMVwiLCBtZXNzYWdlOiBcIkxpbmVJdGVtQ29udHJvbGxlciAtIGdldEpvYkVycm9yIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0xpbmVJdGVtQ29udHJvbGxlciAtIGdldEpvYkVycm9yIC0gMjAyMTA2MDYtMDYxMS1EICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA2LTA2MTEtQy0yLTJcIiwgbWVzc2FnZTogXCJMaW5lSXRlbUNvbnRyb2xsZXIgLWdldEpvYkNhdGNoIC0gRmFpbGVkIHRvIGdldCByZWNvcmRcIiwgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtLmxpbmVJdGVtID0gJHNjb3BlLmRlZmF1bHRWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtLmxpbmVJdGVtID09IFwiMFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxNS0wNDAxXCIsIG1lc3NhZ2U6IFwiTGluZUl0ZW0gbmV3IGVudHJ5IGVycm9yIC0gc2F2aW5nICcwJyByZWNvcmQgXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0oJHNjb3BlLmVkaXRhYmxlSm9iX0xpbmVJdGVtKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfRFJPUERPV05fTElTVCwga2V5Q29sdW1uOiBcImxpbmVJdGVtSWRcIiwgaWQ6IGRhdGEubGluZUl0ZW1JZCwgZGVzY3JpcHRpb246IGRhdGEubGluZUl0ZW0gfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJMaW5lIGl0ZW0gc2F2ZWQuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTGluZUl0ZW1Db250cm9sbGVyIC0gMjAyMTA2MDYtMDU0OCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDYtMjA1NVwiLCBtZXNzYWdlOiBcImZ1bmN0aW9uID4gZXJyb3JcIiwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDYtMjA1MlwiLCBtZXNzYWdlOiBcImZ1bmN0aW9uID4gZXJyb3JcIiwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhckFwcC5kaXJlY3RpdmUoJ2xpbmVJdGVtTm9EdXBsaWNhdGUnLCBbXCIkcVwiLCBcInNzbl9sb2dnZXJcIiwgZnVuY3Rpb24gKCRxLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0ciwgbmdNb2RlbF9jdHJsKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgKngqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MjBweCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyAtLS0tLS0tLS0tLS0tLS0tIG5nTW9kZWxfY3RybC0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS1gLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB0OycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXN0dmFsdWUxID0gYXR0cltcIm5hbWVcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMTEpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGVzdHZhbHVlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMikgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQ0KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF0dHIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc1NSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0VmFsaWRpdHkoYXR0ci5uYW1lLCBmYWxzZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kYXN5bmNWYWxpZGF0b3JzLmR1cGxpY2F0ZUxpbmVJdGVtID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGFyZSB0YWtpbmcgY2FyZSBvZiBkdXBsaWNhdGVzIGJ5IGludmVyaW5nIHRoZSBsb2dpYyBpbiB0aGUgRHJvcGRvd25MaXN0RGlyZWN0aXZlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKG1vZGVsVmFsdWUgJiYgbW9kZWxWYWx1ZS5pZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL30gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgbGluZUl0ZW1Db250cm9sbGVyX2luc3RhbmNlIH1cclxuIiwi77u/XHJcbi8vIDExLzIxLzIwMTkgMDU6NTAgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG5cclxuaW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgVGltZWxvZ19TZXJ2aW5nUGFnZSB9IGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IElTY29wZSB9IGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbmludGVyZmFjZSBJU2NvcGVfbG9jYWwgZXh0ZW5kcyBJU2NvcGUge1xyXG5cclxuICAgIGNvbnRpbnVlX29yX2xpbmVJdGVtX2NhcHRpb246IHN0cmluZyxcclxuICAgIHNob3dDbG9ja291dE9wdGlvbjogYm9vbGVhbixcclxuICAgIHRvdGFsU2Vjb25kczogYW55LFxyXG4gICAgdGltZWxvZ0lkOiBhbnlcclxufVxyXG5cclxuXHJcbnZhciBUaW1lbG9nTGlua09wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoZGVmYXVsdEFwcE5hbWUpIHtcclxuXHJcblxyXG4gICAgICAgIC8vdmFyIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2UoZGVmYXVsdEFwcE5hbWUsIFtdKTtcclxuICAgICAgICB2YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lbG9nTGlua09wdGlvbnMnLCBkZWZhdWx0QXBwTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCd0aW1lbG9nTGlua09wdGlvbnMnLCBbJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsIGZ1bmN0aW9uICgkdWliTW9kYWwsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCIvanMvVGltZXNoZWV0L1RpbWVsb2dMaW5rT3Rpb25zL1RpbWVsb2dMaW5rT3B0aW9ucy5odG1sXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb250cm9sbGVyQXM6ICd2bTEwMScsXHJcbiAgICAgICAgICAgICAgICAvL2JpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6IFsnJHNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fRWRpdCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsRWRpdC5yZXN1bHQudGhlbihtb2RhbEVkaXRfc2F2ZSwgbW9kYWxFZGl0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tPdXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDQ6MTYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTYxNl0gLSBbMDAxXSAtIFRpbWVzaGVldCAtIHN0b3AgLyBjb250aW51ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwMzo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdGluZzogICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICAnanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0byB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCdcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAzOjM2IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNl0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxDbG9ja291dC5yZXN1bHQudGhlbihtb2RhbENsb2Nrb3V0X3NhdmUsIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwODozOSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDJdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDQ6MDkgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDExXSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHNlcnZpbmdQYWdlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja0NvbnRpbnVlID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJywgLy8/dj0nICsgJHNjb3BlLnZlcnNpb25Gb3JIVE1MUmVmcmVzaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA3XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfY2FuY2VsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFRpbWVsb2dMaW5rT3B0aW9ucyAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9zYXZlIC0gMjAyMTA2MTItMDE1NScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFRpbWVsb2dMaW5rT3B0aW9ucyAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwgLSAyMDIxMDYxMi0wMTU2JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjcvMjAxOSAwODo0NSBhbSAtIFNTTiAtIENvcGllZCBmcm9tIEpvYkluZGV4Q29udHJvbGxlci50cyBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDExXSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIER1cGxpY2F0ZSAtIFdyb25nIHdheSB0byBnbyFcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzA4LzIwMjEgMTE6MDEgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDA0XSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gam9iSWQgdG8gdGltZWxvZ0lkX3YwMVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAodGltZWxvZ0lkX3YwMSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAwMzo1NiBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMzddIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50IC0gTGluZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZHJvcDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkX3YwMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm1XaXRoSm9iSWQgPSBmdW5jdGlvbiAoam9iSWQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4oam9iSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXInLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU2Vjb25kczogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogJ0AnXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9sb2NhbCwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXZlT3BlblJlY29yZCA9IHNjb3BlLnRpbWVsb2dJZCAmJiBzY29wZS50b3RhbFNlY29uZHMgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2hvd0Nsb2Nrb3V0T3B0aW9uID0gaGF2ZU9wZW5SZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRpbnVlX29yX2xpbmVJdGVtX2NhcHRpb24gPSAhaGF2ZU9wZW5SZWNvcmQgPyBcIkNvbnRpbnVlXCIgOiBcIkxpbmUgaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMTo0MiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEFwcF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIC8vIDA1LzAzLzIwMTkgMDY6MzMgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEzXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAvLyBDb252ZXJ0IHRvIFRTXHJcblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRBcHAtZmlsZW5hbWUnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuICAgIC8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgaXMgaW4gdXNlIGJ5IERhdGFTZXJ2aWNlcy5qc1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoXCJ0aW1lc2hlZXRDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICckY29tcGlsZScsIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbCwgY2hhbmdlTW9uaXRvclNlcnZpY2UsICRjb21waWxlKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xOS8yMDE5IDA2OjQzIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIEFkZGVkIHRvIHJlLWJpbmQgbmctY2xpY2tcclxuXHJcbiAgICAgICAgJHNjb3BlLiRvbignVGltZUxvZ19JbmRleF9SZWZyZXNoJywgZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZUxvZ19JbmRleF9SZWZyZXNoIC0gMjAyMTA2MTctMjM1MyAtIENvbXBhcmUgd2l0aCBJTlNFUlQgJywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgJChcIiNcIiArIGl0ZW0udHJfMl9pZCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5yZXBsYWNlV2l0aChpdGVtLmh0bWwpO1xyXG5cclxuICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRSYXdzQWZmZWN0ZWQoaXRlbSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICRzY29wZS4kb24oJ1RpbWVMb2dfSW5kZXhfSW5zZXJ0JywgZnVuY3Rpb24gKGV2ZW50LCBpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICAkKFwiI3RpbWVzaGVldF9pbmRleF90Ym9keVwiKS5wcmVwZW5kKGl0ZW0uaHRtbCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJGNvbXBpbGUoJChcIiNcIiArIGl0ZW0udHJfMV9pZCkuY29udGVudHMoKSkoJHNjb3BlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9wT2ZUaW1lc2hlZXRUYWJsZScpLnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBoaWdodGxpZ2h0UmF3c0FmZmVjdGVkKGl0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaGlnaHRsaWdodFJhd3NBZmZlY3RlZChpdGVtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gV2UgYXNzdW1lIHRoYXQgdGhlIGxvZ2ljIHJlbWFpbnMgdGhlIHNhbWUgZm9yIG5hbWluZyByb3dzLiAgQmFkIGlkZWEhXHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0lkMSA9IGl0ZW0udHJfMV9pZDtcclxuICAgICAgICAgICAgY29uc3Qgcm93SWQyID0gaXRlbS50cl8xX2lkLnN1YnN0cmluZygwLCBpdGVtLnRyXzFfaWQubGVuZ3RoIC0gMSkgKyAnMic7XHJcblxyXG4gICAgICAgICAgICAkKFwiI1wiICsgcm93SWQxKS5hZGRDbGFzcyhcImNzc0hpbGlnaHQxMDJcIik7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyByb3dJZDIpLmFkZENsYXNzKFwiY3NzSGlsaWdodDEwMlwiKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrT3V0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDQ6MTYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTYxNl0gLSBbMDAxXSAtIFRpbWVzaGVldCAtIHN0b3AgLyBjb250aW51ZVxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwMzo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMDRdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2dcclxuICAgICAgICAgICAgLy8gVGVzdGluZzogICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICAnanMvdGltZXNoZWV0L3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnIFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICB0byB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCdcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgbW9kYWxDbG9ja291dCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDM6MzYgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA2XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb2Nrb3V0LnJlc3VsdC50aGVuKG1vZGFsQ2xvY2tvdXRfc2F2ZSwgbW9kYWxDbG9ja291dF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDk6MzcgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAzXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCBcclxuXHJcbiAgICAgICAgICAgIGxldCBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAnc2xpZGUtaW4tdXAnLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy8vdGltZXNoZWV0VGVtcGxhdGUuaHRtbD92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICB3aW5kb3dDbGFzczogJ3Nzbi1tb2JpbGUtbW9kYWwnLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE0LzIwMTkgMDQ6NDEgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA4XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcbiAgICAgICAgLy8gVGVzdGluZyAtIE5vdCB3b3JraW5nLlxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb2RhbENsb3NpbmdIb29rKCRzY29wZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS4kb24oJ21vZGFsLmNsb3NpbmcnLCBmdW5jdGlvbiAoZXZlbnQsIHJlYXNvbiwgY2xvc2VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIllvdSBhcmUgYWJvdXQgdG8gbGVhdmUgdGhlIGVkaXQgdmlldy4gVW5jYXVnaHQgcmVhc29uLiBBcmUgeW91IHN1cmU/XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2VkIG91dHNpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFja2Ryb3AgY2xpY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYW5jZWwgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzY2FwZSBrZXlcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXNjYXBlIGtleSBwcmVzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA2LzA4LzIwMjEgMTE6MDEgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDAzXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgLy8gam9iSWQgdG8gdGltZWxvZ0lkX3YwMVxyXG5cclxuICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAodGltZWxvZ0lkX3YwMSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTih0aW1lbG9nSWRfdjAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDQ6MTAgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcblxyXG5cclxuICAgICAgICAgICAgJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWRfdjAxOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWRfdjAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNi8yMDE5IDA0OjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwMl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcblxyXG4gICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0VkaXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IG1vZGFsRWRpdCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL1RpbWVsb2dDbG9ja291dC5odG1sJywgIC8vIHVzaW5nIHNhbWUgaHRtbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuLy8gMDkvMjEvMjAxOSAwMzo1OCBhbSAtIFNTTiAtIFsyMDE5MDkyMS0wMzU3XSAtIFswMDJdIC0gQ3JlYXRpbmcgbXVsdGlwbGUgZW50cnkgZm9yIFdlYnBhY2tcclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuXHJcbi8vIDA5LzE4LzIwMTkgMTE6MTMgYW0gLSBTU04gLSBbMjAxOTA5MTgtMDk0M10gLSBbMDA4XSAtIEFkZGluZyBqb2Igc3RhdHVzIG9wdGlvbiB0byBpbmRleFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tIFwiLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSVRpbWVsb2dKUyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUaW1lbG9nXCI7XHJcblxyXG5cclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRyb2xsZXInLCBbJyR1aWJNb2RhbCcsICckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICd0aW1lbG9nSWRfdjAxJyxcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCB0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2staW4gLSAxMjAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZF92MDEpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcikuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENvbnRyb2xsZXIgLSBnb3RKb2JFcnJvciAtICAyMDIxMDYwNi0wNTQwLUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjMwNi1hLTEnLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBUaW1lbG9ncyByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaW1lc2hlZXRDb250cm9sbGVyIC0gZ2V0Sm9iQ2F0Y2ggLSAgMjAyMTA2MDYtMDU0MC1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIzMDYtYS0yJywgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgVGltZWxvZ3MgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtaW5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRpbWVzaGVldENvbnRyb2xsZXIgLSAyMDE5MDkyMS0wNjQwIC0gcHJvbWlzZSA+IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI4LzIwMTkgMDI6NDcgYW0gLSBTU04gLSBbMjAxOTExMjgtMDI0N10gLSBbMDAxXSAtIENsb2NrLWluIG5vdCBzYXZpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBmZWVkYmFja1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8kc2NvcGUuYWRkTmV3TGluZUl0ZW0gPSBmdW5jdGlvbiAoam9iSUQsIGNvbnRhaW5lclZpZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTgwNy1BJywgbWVzc2FnZTpgQ2FsbGluZyBhZGROZXdMaW5lSXRlbWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xODA3LUInLCBtZXNzYWdlOmBqb2JJRDogWyR7am9iSUR9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG4gICAgICAgICAgICAvLyAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xODA3LWMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlOiBbJHtjb250YWluZXJWaWV3VmFsdWV9XWAgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICR1aWJNb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgLy8gICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbVRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgY29udHJvbGxlcjogJ0xpbmVJdGVtQ29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIC8vIDA2LzA4LzIwMjEgMDM6NTcgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDM4XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudCAtIExpbmUgaXRlbVxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8gYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgLy8gICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgLy8gICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHJldHVybiBqb2JJRDtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyVmlld1ZhbHVlO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL3RvYXN0ci9pbmRleC5kLnRzXCIgLz5cclxuXHJcbi8vIDA2LzA5LzIwMjEgMDQ6NDMgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDA5XSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcblxyXG5pbXBvcnQgKiBhcyBnbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgdG9zdHIgZnJvbSBcInRvYXN0clwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSBcIi4uL1V0aWwvTG9nZ2VyL0lMb2dnZXJFcnJvck1lc3NhZ2VcIjtcclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcbmltcG9ydCB7IElUaW1lbG9nSlMgfSBmcm9tIFwiLi4vSW50ZXJmYWNlcy9JVGltZWxvZ1wiO1xyXG5cclxuXHJcblxyXG5cclxudmFyIHRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyJywgWyckdWliTW9kYWwnLCAnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCAnam9iSWQnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCR1aWJNb2RhbCwgJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUsIGpvYklkKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNyZWF0ZSAtIDE2NDNcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldEpvYihqb2JJZCkudGhlbihnZXRKb2JTdWNjZXNzLCBnZXRKb2JFcnJvcikuY2F0Y2goZ2V0Sm9iQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYlN1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lTG9nOiBJVGltZWxvZ0pTID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYklkOiBkYXRhLmpvYklELFxyXG4gICAgICAgICAgICAgICAgICAgIGpvYjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2JUaXRsZTogZGF0YS5qb2JUaXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlOiBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IHRpbWVMb2c7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lID0gdGltZU5vdztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkVycm9yKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXIgLSBnb3RKb2JFcnJvciAtICAyMDIxMDYwOS0xNjUwLUIgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTY1MC1hLTEnLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBqb2IgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JDYXRjaChlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyIC0gZ2V0Sm9iQ2F0Y2ggLSAgMjAyMTA2MDktMTY1MS1DICcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE2NTEtYS0yJywgbWVzc2FnZTogJ0ZhaWxlZCB0byBnZXQgam9iIHJlY29yZC4nLCBlcnJvck9iamVjdDogZXJyIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuaWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDEtQScsIG1lc3NhZ2U6ICdDYWxsaW5nIGFkZE5ld0xpbmVJdGVtJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDEtQicsIG1lc3NhZ2U6IGBqb2JJRCBbJHtqb2JJRH1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDEtQycsIG1lc3NhZ2U6IGBjb250YWluZXJWaWV3VmFsdWUgWyR7Y29udGFpbmVyVmlld1ZhbHVlfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIC8vICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1UZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgLy8gICAgICAgIGNvbnRyb2xsZXI6ICdMaW5lSXRlbUNvbnRyb2xsZXInLFxyXG4gXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xNi8yMDE5IDA0OjQ3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwM10gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuLy8gQ29waWVkIGZyb20gVGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tIFwiLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG5cclxuICAgIC8vIDExLzE5LzIwMTkgMTI6NDggYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkaW5nICRjb21waWxlIGZvciBkeW5hbWljYWxseSBsb2FkZWQgdmlld1xyXG5cclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsIFsnJHVpYk1vZGFsJywgJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyJywgJ3RpbWVsb2dJZCcsICckdGltZW91dCcsICckcm9vdFNjb3BlJywgJ3Nzbl9sb2dnZXInLCAnc2VydmluZ1BhZ2UnLFxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHVpYk1vZGFsLCAkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgVGltZXNoZWV0VGFibGVSZWZyZXNoQ29udHJvbGxlciwgdGltZWxvZ0lkLCAkdGltZW91dCwgJHJvb3RTY29wZSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5zZXREZWZhdWx0cygpO1xyXG4gICAgICAgICAgICB9LCA2MDApO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiRWRpdCBbXCIgKyBzZXJ2aW5nUGFnZSArICddIDExMS0wMSc7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnNldFN0b3BUaW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lID0gdGltZU5vdztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldFNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudGltZUxvZyA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0RWRpdENvbnRyb2xsZXIgLSAyMDE5MTExNi0xNjQ4Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMTY0OClcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRFZGl0Q29udHJvbGxlciAtIDIwMTkxMTE2LTE2NDknKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgxNjQ5KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDIxMDYwNy0xODUyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKS50aGVuKGluc2VydFRpbWVMb2dTdWNjZXNzLCBpbnNlcnRUaW1lTG9nRXJyb3IpLmNhdGNoKGluc2VydFRpbWVMb2dDYXRjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpLnRoZW4oaW5zZXJ0VGltZUxvZ1N1Y2Nlc3MsIGluc2VydFRpbWVMb2dFcnJvcikuY2F0Y2goaW5zZXJ0VGltZUxvZ0NhdGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGltZUxvZ1N1Y2Nlc3MoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIHNhdmVkLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzE4LzIwMjEgMDI6MDMgYW0gLSBTU04gLSBSZXBsYWNlIHJlZHVuYW50IGNvZGVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVGltZXNoZWV0VGFibGVSZWZyZXNoQ29udHJvbGxlci5yZWZyZXNoVGltZXNoZWV0VGFibGUoc2VydmluZ1BhZ2UsICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkLCBmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGluc2VydFRpbWVMb2dFcnJvcihlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOC0wOTA5XCIsIG1lc3NhZ2U6IGBGYWlsZWQgdG8gc2F2ZSB0aW1lc2hlZXQgcmVjb3JkIGAsIGVycm9yT2JqZWN0OiBlcnJvciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGltZUxvZ0NhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE4LTA5MTBcIiwgbWVzc2FnZTogYEZhaWxlZCB0byBzYXZlIHRpbWVzaGVldCByZWNvcmQgYCwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMjUvMjAxOSAwNTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMTFdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG5cclxuXHJcbmltcG9ydCB7IHRpbWVzaGVldEFwcF9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0QXBwJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vVGltZXNoZWV0Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4vdGltZXNoZWV0Y29udGludWVjb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjbG9ja291dGNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRFZGl0Q29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuLi9UaW1lc2hlZXQvVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRpbWVsb2dMaW5rT3B0aW9ucyB9IGZyb20gJy4vVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zJztcclxuaW1wb3J0IHsgbGluZUl0ZW1Db250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9MaW5lSXRlbS9MaW5lSXRlbUNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBzc25fYXV0b19mb2N1cyB9IGZyb20gJy4uL1V0aWwvYXV0b2ZvY3VzL3NzbkF1dG9Gb2N1cyc7XHJcbmltcG9ydCB7IE1vZGFsQ2FsbHNVdGlsIH0gZnJvbSAnLi4vU2hhcmVkL01vZGFsQ2FsbHNVdGlsJztcclxuaW1wb3J0IHsgVGltZXNoZWV0X1RhYmxlX1JlZnJlc2hfU2VydmljZSB9IGZyb20gJy4vVGltZXNoZWV0X3RhYmxlX3JlZnJlc2gnO1xyXG5cclxuXHJcblxyXG52YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgIFRpbWVsb2dMaW5rT3B0aW9ucy5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuICAgIHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuICAgIHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRBcHBfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSlcclxuICAgIHNzbl9hdXRvX2ZvY3VzLmRvU2V0dXAoXCJUaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5XCIsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuICAgIE1vZGFsQ2FsbHNVdGlsLmRvU2V0dXAoXCJUaW1lc2hlZXRfbWFpbl90aW1lc2hlZXRPbmx5XCIsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuICAgIFRpbWVzaGVldF9UYWJsZV9SZWZyZXNoX1NlcnZpY2U7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb1NldHVwIH07XHJcbiIsIu+7v1xyXG5cclxuLy8gMDYvMTgvMjAyMSAxMjowMiBhbSAtIFNTTiAtIFVwZGF0aW5nIHRpbWVzaGVldCB0YWJsZSBvbiBpbnNlcnQvdXBkYXRlXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbiBcclxuXHJcbmNvbnN0IFRpbWVzaGVldF9UYWJsZV9SZWZyZXNoX1NlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgYW5ndWxhckFwcCA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0X3RhYmxlX3JlZnJlc2gnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgYW5ndWxhckFwcC5jb25maWcoWyckcHJvdmlkZScsIGZ1bmN0aW9uICgkcHJvdmlkZSkge1xyXG5cclxuXHJcbiAgICAgICAgJHByb3ZpZGUuZmFjdG9yeSgnVGltZXNoZWV0VGFibGVSZWZyZXNoQ29udHJvbGxlcicsIFsnJHJvb3RTY29wZScsICdkYXRhU2VydmljZScsICdzc25fbG9nZ2VyJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIGRhdGFTZXJ2aWNlLCBzc25fbG9nZ2VyKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlZnJlc2hUaW1lc2hlZXRUYWJsZTogZnVuY3Rpb24gKHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLCB0aW1lbG9nSWQ6IG51bWJlciwgbmV3UmVjb3JkOiBib29sZWFuKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuSm9iX1RpbWVsb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUoc2VydmluZ1BhZ2UsIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuUHJvamVjdHNfU2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5wcm9qZWN0c1NlYXJjaFJlZnJlc2hSZWNvcmQodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJ0RlbW9TaXRlLTIwMjEwNjE4LTA0NTAnLCBtZXNzYWdlOiBgTm8gbWF0Y2ggZm9yIHNlcnZpbmdQYWdlIFske3NlcnZpbmdQYWdlfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9TdWNlc3MocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UmVjb3JkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ1RpbWVMb2dfSW5kZXhfSW5zZXJ0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hSZWNvcmRfRXJyb3IocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZXNoZWV0X1RhYmxlX1JlZnJlc2ggLSAyMDIxMDYxOC0wMDUwIC0gRmFpbGVkIHRvIHJlZnJlc2ggdGltZXNoZWV0IHJlY29yZCcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjEycHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICdEZW1vU2l0ZS0yMDIxMDYxOC0wNDQ5JywgbWVzc2FnZTogJ0ZhaWxlZCB0byByZWZyZXNoIHRpbWVzaGVldCByZWNvcmQnfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfV0pO1xyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgVGltZXNoZWV0X1RhYmxlX1JlZnJlc2hfU2VydmljZSB9O1xyXG5cclxuXHJcbiIsIlxyXG4vLyAwOS8yMS8yMDE5IDAzOjU3IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMV0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuXHJcbi8vIDExLzA5LzIwMTkgMTI6MDUgcG0gLSBTU04gLSBBZGRlZCBDaGFuZ2VNb25pdG9yXHJcbi8vIDExLzE0LzIwMTkgMDM6MjAgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA0XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4vL2ltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4uL1V0aWwvQ2hhbmdlTW9uaXRvcic7XHJcbmltcG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JTZXJ2aWNlJztcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6NDAgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAyXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuaW1wb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1BhZ2VVcGRhdGVyJztcclxuXHJcblxyXG5pbXBvcnQgeyBkYXRhU2VydmljZV9pbnN0YW5jZSB9IGZyb20gJy4uL3NoYXJlZC9EYXRhU2VydmljZXMnO1xyXG5pbXBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfSBmcm9tICcuLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuaW1wb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH0gZnJvbSAnLi4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnO1xyXG5cclxuLy8gMTIvMDcvMjAxOSAwNDowOSBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wMzUzXSAtIFswMDJdIC0gU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvclxyXG5cclxuaW1wb3J0IHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgZnJvbSAnLi4vSW50ZXJjZXB0b3JzL1Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3InO1xyXG5cclxuXHJcbi8vIDEyLzA3LzIwMTkgMDg6MDcgYW0gLSBTU04gLSBbMjAxOTEyMDctMDcwNF0gLSBbMDA0XSAtIEFuZ3VsYXJKUyAtIFJvdXRpbmcgLSBBdXRoZW50aWNhdGlvblxyXG5cclxuaW1wb3J0IHsgcm91dGluZ19jb25maWdfaW5zdGFuY2UgfSBmcm9tICcuLi9Sb3V0aW5nL1JvdXRpbmdfQ29uZmlnJztcclxuXHJcbnJvdXRpbmdfY29uZmlnX2luc3RhbmNlLmRvU2V0dXAoKTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IG5nQXBwbGljYXRpb25OYW1lID0gJ3RpbWVzaGVldEFwcCc7XHJcblxyXG5zZXNzaW9uVGltZW91dEludGVyY2VwdG9yLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuLy9DaGFuZ2VNb25pdG9yX1V0aWxcclxuY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuUGFnZVVwZGF0ZXJfSW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMTYvMjAxOSAwNjoyNyBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDZdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcblxyXG4vLyAxMS8yNS8yMDE5IDExOjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTIxNTNdIC0gWzAwNV0gLSBKb2IgY3JlYXRlIC0gUmVwbGFjZSBkcm9wZG93biB3aXRoIGRyb3Bkb3duTGlzdERpcmVjdGl2ZVxyXG5cclxuXHJcbmRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIDA2LzA3LzIwMjEgMDU6MDAgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE5XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudCAtIExpbmUgaXRlbVxyXG5cclxuaW1wb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9IGZyb20gJy4uL1V0aWwvTG9nZ2VyL3Nzbl9Bbmd1bGFySnNsb2dnZXInO1xyXG5cclxuc3NuX0FuZ3VsYXJKc2xvZ2dlci5kb1NldHVwKFwidGltZXNoZWV0X21haW5cIixuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmRhdGFTZXJ2aWNlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbi8vIDExLzIzLzIwMTkgMDg6NTYgYW0gLSBTU05cclxuUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUsIFwidGltZXNoZWV0X21haW5fMjAyMTA2MDZfMTczMVwiKTtcclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDExOjA5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwN10gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuIFxyXG5BcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoXCJ0aW1lc2hlZXRfbWFpblwiKTtcclxuXHJcblxyXG5BcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KFwiVGltZXNoZWV0X21haW5cIiwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMDAxLTExMTItQ1wiLCBNZXNzYWdlOiBcIkxvYWRpbmcgdGltZXNoZWV0X21haW5cIiB9KTtcclxuQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSwgeyBTb3VyY2VDb2RlOiBcIjIwMTkxMTA1LTA1MDNcIiwgTWVzc2FnZTogXCJMb2FkaW5nIHRpbWVzaGVldF9tYWluXCIgfSk7XHJcblxyXG5cclxuLy8gMTEvMjUvMjAxOSAwNTozNCBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xNDE0XSAtIFswMTFdIC0gUHJvamVjdCBqb2JzIC0gZmlsdGVyIFxyXG4vLyBSZWZhY3RvciAtIFRpbWVsb2cgb25seVxyXG5cclxuaW1wb3J0ICogYXMgeCBmcm9tICcuL1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHknO1xyXG5cclxueC5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuIiwi77u/XHJcbi8vIDA0LzEyLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA0MTItMDE0Ml0gLSBUaW1lc2hlZXRBcHBcclxuLy8gMDUvMTkvMjAxOSAxMjoxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDNdIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9yc1xyXG4vLyAwOS8yMS8yMDE5IDExOjUyIGFtICAtIFNTTiAtIFVwZ3JhZGluZyB0byB1c2UgQmFiZWwvV1dlYnBhY2tcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAvLyAwNS8xOS8yMDE5IDEwOjA2IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgXCJ0aW1lc2hlZXRBcHBcIik7XHJcblxyXG4gICAgLy8gMTEvMTYvMjAxOSAwMjo1MiBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDNdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAvLyBJbmplY3QgY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yMC8yMDE5IDA0OjQzIGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwM10gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcbiAgICAvLyBJbmplY3QgUGFnZVVwZGF0ZXJTZXJ2aWNlXHJcblxyXG4gICAgLy8gMTEvMjUvMjAxOSAwNjozOSBwbSAtIFNTTiAtIFsyMDE5MTEyNS0xODAzXSAtIFswMDNdIC0gY2xvY2stb3V0IGlzIG5vdCB1cGRhdGluZyBpbmRleCByb3dcclxuICAgIC8vIEFkZGVkIHNlcnZpbmdQYWdlXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAndGltZWxvZ0lkJywgJ1BhZ2VVcGRhdGVyU2VydmljZScsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgdGltZWxvZ0lkLCBQYWdlVXBkYXRlclNlcnZpY2UsIHNlcnZpbmdQYWdlOiBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMzowOCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDRdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yOS8yMDE5IDA1OjUxIHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwMl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cFxyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2coJHJvdXRlUGFyYW1zLmlkKTtcclxuICAgICAgICAgICAgLy8gJHNjb3BlLnRpbWVMb2cgPSBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCk7XHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMDMvMjAxOSAwNTo1NCBwbSAtIFNTTiAtIFsyMDE5MDUwMy0xNTM5XSAtIFswMTJdIC0gQWRkIGxpbmsgdG8gY3JlYXRlIHRpbWVsb2cgXHJcbiAgICAgICAgICAgIC8vIEFkZCBwYWdlVGl0bGVcclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ2xvY2stb3V0XCI7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8yOS8yMDE5IDExOjI1IHBtIC0gU1NOIC0gQWRkaW5nIGRpc2FibGVTYXZlQnV0dG9uIFxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTYvMjAxOSAwMjo0OCBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNDE5XSAtIFswMDJdIC0gQWRkIFJvd1ZlcnNpb24gIHRvIFRpbWVsb2cuXHJcbiAgICAgICAgICAgIC8vIENvcGllZCBmcm9tIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlclxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcbiBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0b3BUaW1lID0gdGltZU5vdztcclxuIFxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cgPSBkYXRhO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgwMzA3KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXIgLSAyMDE5MDkyMi0xNDI3Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDYpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9ICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lIC0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUpIC8gMTAwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkNsb2NrZWQtb3V0XCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNS8yMDE5IDA2OjM4IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE4MDNdIC0gWzAwMl0gLSBjbG9jay1vdXQgaXMgbm90IHVwZGF0aW5nIGluZGV4IHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkZWQgc2VydmluZ1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2VVcGRhdGVyU2VydmljZS50aW1lbG9nX2luZGV4KCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkLCBzZXJ2aW5nUGFnZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0MiA9IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5jYW5jZWxGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuIiwi77u/XHJcblxyXG5cclxuLy8gMDUvMTkvMjAxOSAwOTo0NSBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDVdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcbi8vIENvcGllZCBmcm9tIENsb2Nrb3V0LlxyXG5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vc2l0ZSc7XHJcblxyXG5cclxuY29uc3QgbmdBcHBsaWNhdGlvbk5hbWUgPSBcInRpbWVzaGVldEFwcFwiO1xyXG5cclxudmFyIHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXInLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuICAgIC8vIDExLzE0LzIwMTkgMDM6MDcgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDAyXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnJHRpbWVvdXQnLCAnVGltZXNoZWV0VGFibGVSZWZyZXNoQ29udHJvbGxlcicsICd0aW1lbG9nSWQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsICR0aW1lb3V0LCBUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyLCB0aW1lbG9nSWQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5zZXR1cE1vbml0b3IoKTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS50aW1lbG9nSWRfT3JpZ2luYWxSZWNvcmQgPSB0aW1lbG9nSWQ7XHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDb250aW51ZSAvIExpbmUgSXRlbSAtIDg4OC1WMlwiO1xyXG5cclxuICAgICAgICAgICAgLy8gMTIvMjkvMjAxOSAxMToxNyBwbSAtIFNTTiAtIEFkZGluZyBkaXNhYmxlU2F2ZUJ1dHRvbiBcclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1OSBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTBdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoID0gXCIxN1wiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHV0aWwuc2l0ZV9pbnN0YW5jZS5mbkNvbnZlckRhdGUoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS50aW1lTG9nSWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGF0YS5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEuZGF0ZU1vZGlmaWVkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnRvdGFsU2Vjb25kcyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dDYXRjaChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlciAtIHN1Ym1pdEZvcm0gLSAoMTAxKScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gJHNjb3BlLmVkaXRhYmxlVGltZUxvZztcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JlY29yZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cudGltZUxvZ0lkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSZWNvcmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMTo1NiBhbSAtIFNTTiAtIFRlc3RlZCBPSy5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiUmVjb3JkIGFkZGVkLiAgUmVsb2FkaW5nIHBhZ2UuLi5cIik7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvNy8yMDIxIDExOjQ4IHBtIC0gU1NOIC0gUmVwbGFjaW5nIGxvY2F0aW9uLnJlbG9hZCB3aXRoIFRpbWVMb2dfSW5kZXhfSW5zZXJ0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlci50cyAtIHJlcGxhY2luZyBsb2NhdGlvbi5yZWxvYWQgd2l0aCBUaW1lTG9nX0luZGV4X0luc2VydCcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE2cHQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudGltZUxvZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA1LzIxLzIwMTkgMTI6NTQgcG0gLSBTU04gLSBSZWxvYWQgcGFnZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL30sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aW5nUGFnZSA9IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UuVGltZWxvZztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXBkYXRlIG9yaWdpbmFsIHJlY29yZCB3ZSBjb21waWVkIGZyb20gKHRpbWVMb2dJZCBwYXNzZWQgaW4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyLnJlZnJlc2hUaW1lc2hlZXRUYWJsZShzZXJ2aW5nUGFnZSwgJHNjb3BlLnRpbWVsb2dJZF9PcmlnaW5hbFJlY29yZCAsIGZhbHNlKTtcclxuXHJcbi8vIEFkZCBuZXcgcmVjb3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyLnJlZnJlc2hUaW1lc2hlZXRUYWJsZShzZXJ2aW5nUGFnZSwgZGF0YS50aW1lTG9nSWQsIG5ld1JlY29yZCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzI4LzIwMTkgMDM6NTcgcG0gLSBTU04gLSBbMjAxOTA5MjgtMTI1Nl0gLSBbMDA5XSAtIEFkZGluZyBFbnRpdHkgRnJhbWV3b3JrIG1vZGVsIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gYWRkIHJlY29yZC4gU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDU6MDkgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDEwXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlTW9uaXRvclNlcnZpY2UuZ2V0SGF2ZUNoYW5nZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlybSgnWW91IGhhdmUgdW5zYXZlZCBjaGFuZ2VzPyBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY2FuY2VsPycpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKGZhbHNlKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAxMC8wMS8yMDE5IDA5OjQ5IGFtIC0gU1NOIC0gWzIwMTkxMDAxLTA5NDRdIC0gWzAwNF0gLSBBZGRpbmcgQXBwbGljYXRpb24gSW5zaWdodHMgZm9yIEphdmFTY3JpcHRcclxuXHJcblxyXG4vLyBodHRwczovL2RldmJsb2dzLm1pY3Jvc29mdC5jb20vcHJlbWllci1kZXZlbG9wZXIvYWRkLWFwcGxpY2F0aW9uLWluc2lnaHRzLXRvLWFuLWFuZ3VsYXItc3BhL1xyXG5cclxuXHJcblxyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4uL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgQXBwSW5zaWdodHMgfSBmcm9tICdhcHBsaWNhdGlvbmluc2lnaHRzLWpzJztcclxuXHJcblxyXG52YXIgQXBwSW5zaWdodHNfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2VsZiA9IHsgY2FsbFNvdXJjZTogJ05vdFNldC0yMDIxMDYwNjIyMjgnIH07XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBlbnZpcm9ubWVudC5hcHBJbnNpZ2h0cy5pbnN0cnVtZW50YXRpb25LZXlcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYXZlSW5zdHJ1bWVudGF0aW9uS2V5ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnLmluc3RydW1lbnRhdGlvbktleTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY2FsbFNvdXJjZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHNlbGYuY2FsbFNvdXJjZSA9IGNhbGxTb3VyY2U7XHJcblxyXG4gICAgICAgIGlmICghQXBwSW5zaWdodHMuY29uZmlnKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKHRoaXMuY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIDEwLzExLzIwMTkgMDQ6NTQgcG0gLSBTU04gLSBBZGRlZCBjaGVja1xyXG4gICAgICAgICAgICBpZiAoaGF2ZUluc3RydW1lbnRhdGlvbktleSgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHMuZG93bmxvYWRBbmRTZXR1cChjb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBkb1Rlc3QgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgcGFnZSB2aWV3ICovXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhcclxuICAgICAgICAgICAgXCJGaXJzdFBhZ2UtMjAxOTEwMDEtMTAxNVwiLCAvKiAob3B0aW9uYWwpIHBhZ2UgbmFtZSAqL1xyXG4gICAgICAgICAgICBudWxsLCAvKiAob3B0aW9uYWwpIHBhZ2UgdXJsIGlmIGF2YWlsYWJsZSAqL1xyXG4gICAgICAgICAgICB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgLyogKG9wdGlvbmFsKSBkaW1lbnNpb24gZGljdGlvbmFyeSAqL1xyXG4gICAgICAgICAgICB7IG1lYXN1cmVtZW50MTogMSB9LCAvKiAob3B0aW9uYWwpIG1ldHJpYyBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIDEyMyAvKiBwYWdlIHZpZXcgZHVyYXRpb24gaW4gbWlsbGlzZWNvbmRzICovXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLyogZXhhbXBsZTogdHJhY2sgZXZlbnQgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KFwiVGVzdEV2ZW50LTIwMTkxMDAxLTEwMTZcIiwgeyBwcm9wMTogXCJwcm9wMVwiLCBwcm9wMjogXCJwcm9wMlwiIH0sIHsgbWVhc3VyZW1lbnQxOiAxIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGxvZ1BhZ2VWaWV3ID0gZnVuY3Rpb24gKG5hbWU/OiBzdHJpbmcsIHVybD86IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55LCBkdXJhdGlvbj86IG51bWJlcikge1xyXG5cclxuICAgICAgICAvLyAxMC8xLzIwMTkgMDM6NDUgYW0gLSBTU04gXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uSW5zaWdodHMgIC0gbG9nUGFnZVZpZXcgLSAyMDIxMDYwNi0yMjIzJywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BlcnRpZXMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IGNhbGxTb3VyY2VfYWltOiBzZWxmLmNhbGxTb3VyY2UsIC4uLnByb3BlcnRpZXMgfTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdQcm9wcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT0nKTtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhuYW1lLCB1cmwsIHByb3BlcnRpZXMpOy8vLCBtZWFzdXJlbWVudHMsIGR1cmF0aW9uKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGxvZ0V2ZW50ID0gZnVuY3Rpb24gKG5hbWU6IHN0cmluZywgcHJvcGVydGllcz86IGFueSwgbWVhc3VyZW1lbnRzPzogYW55KSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFdmVudChuYW1lLCBwcm9wZXJ0aWVzLCBtZWFzdXJlbWVudHMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXhjZXB0aW9uID0gZnVuY3Rpb24gKGV4Y2VwdGlvbjogYW55IHwgYW55LCBwcm9wcz86IGFueSwgaGFuZGxlZEF0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICAvLyAwNi8xNS8yMDIxIDA4OjA4IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0N10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgLy8gQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICAgICAgaWYgKGV4Y2VwdGlvbikge1xyXG5cclxuICAgICAgICAgICAgcHJvcHMgPSB7IC4uLnByb3BzLCAuLi5leGNlcHRpb24gfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbiwgaGFuZGxlZEF0LCBwcm9wcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXAsXHJcbiAgICAgICAgZG9UZXN0OiBkb1Rlc3QsXHJcbiAgICAgICAgbG9nUGFnZVZpZXc6IGxvZ1BhZ2VWaWV3LFxyXG4gICAgICAgIGxvZ0V2ZW50OiBsb2dFdmVudCxcclxuICAgICAgICBsb2dFeGNlcHRpb246IGxvZ0V4Y2VwdGlvblxyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzA5LzIwMTkgMTE6MDMgYW0gLSBTU04gLSBDcmVhdGVkXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAyOjI2IHBtIC0gU1NOIC0gQ3JlYXRlIGNsYXNzIGZvciBoYXZlQ2hhbmdlc1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcbnZhciBDaGFuZ2VNb25pdG9yX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNldEl0ZW1DaGFuZ2VkX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDExLzA5LzIwMTkgMDg6MDggYW0gLSBTU04gLSBBZGRlZCBtb25pdG9yQ2hhbmdlX1NTTlxyXG4gICAgdmFyIG1vbml0b3JDaGFuZ2VfU1NOID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMTUvMjAyMCAwODoyOCBhbSAtIFNTTiAtIEFkZGVkXHJcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoeC50eXBlICYmICh4LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXRcIiB8fCB4LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJyZXNldFwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoeC50eXBlICYmICh4LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJzdWJtaXRcIiB8fCB4LnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gXCJyZXNldFwiKSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgdGV4dGFyZWFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKTtcclxuXHJcbiAgICAgICAgdGV4dGFyZWFzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuXHJcbiAgICAgICAgc2VsZWN0cy5mb3JFYWNoKCh4LCB5LCB6KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc09iamVjdCh4KSkge1xyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0SXRlbUNoYW5nZWRfc3NuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBieXBhc3NPYmplY3QgPSBmdW5jdGlvbiAob2JqMSk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMTUvMjAyMCAwOjE4IGFtIC0gU1NOIC0gQWRkZWQgZW1haWwgYW5kIHBhc3N3b3JkIChsb2dpbilcclxuXHJcbiAgICAgICAgaWYgKG9iajEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2hpZGRlbicgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnc3VibWl0JyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzZWFyY2gnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2VtYWlsJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwYXNzd29yZCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMTEvMjUvMjAxOSAwMjoyNyBwbSAtIFNTTiAtIEFkZGVkXHJcbiAgICAgICAgaWYgKG9iajEubm9DaGFuZ2VNb25pdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvYmoxLmlkICYmICFvYmoxLm5hbWUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlsdGVyJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX3YwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgaXNDaHJvbWUgPSBnZXRCcm93c2VyTmFtZSgpID09PSAnY2hyb21lJztcclxuXHJcbiAgICAgICAgaWYgKHRydWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBDYW5ub3QgdXNlIHdpdGggQ2hyb21lXHJcbiAgICAgICAgICAgIGlmICghaXNDaHJvbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIUNoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb25maXJtYXRpb25NZXNzYWdlID0gXCJcXG8vXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIChlIHx8IHdpbmRvdy5ldmVudCkucmV0dXJuVmFsdWUgPSBjb25maXJtYXRpb25NZXNzYWdlOyAgICAgLy9HZWNrbyArIElFXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiKDIpIFlvdSB3aWxsIGxvc2UgYWxsIHBlbmRpbmcgY2hhbmdlcyBpZiB5b3UgbGVhdmUgdGhpcyBwYWdlXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1dlYmtpdCwgU2FmYXJpLCBDaHJvbWUgZXRjLlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMDUvMjAxOTEgMDQ6NTMgYW0gLSBTU04gXHJcbiAgICAvLyBOZWVkIHRvIHByZXZlbnQgdXNlcnMgZnJvbSBuYXZpZ2F0aW5nIGF3YXkgZnJvbSBBbmd1bGFyIGJhc2VkIHBhZ2VzIHdpdGggcGVuZGluZyBjaGFuZ2VzLlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDgxODI5MTIvaG93LXRvLWRldGVjdC1icm93c2VyLXdpdGgtYW5ndWxhclxyXG4gICAgdmFyIGdldEJyb3dzZXJOYW1lID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zdCBhZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZWRnZScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VkZ2UnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ29wcicpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLm9wcjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnb3BlcmEnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2Nocm9tZScpID4gLTEgJiYgISEoPGFueT53aW5kb3cpLmNocm9tZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnY2hyb21lJztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCd0cmlkZW50JykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdmaXJlZm94JztcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdzYWZhcmknKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYWZhcmknO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvdGhlcic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTmVlZGVkIHNvIHdlIGNhbiBjYWxsIGZyb20gcG9wdXBzLlxyXG4gICAgdmFyIHNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChtb25pdG9yQ2hhbmdlX1NTTiwgMjAwMCk7XHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMSgpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgc2V0dXBNb25pdG9yX3YwMTogc2V0dXBNb25pdG9yX3YwMSxcclxuICAgICAgICBnZXRCcm93c2VyTmFtZTogZ2V0QnJvd3Nlck5hbWUsXHJcbiAgICAgICAgbW9uaXRvckNoYW5nZV9TU046IG1vbml0b3JDaGFuZ2VfU1NOLFxyXG4gICAgICAgIHNldEl0ZW1DaGFuZ2VkX3Nzbjogc2V0SXRlbUNoYW5nZWRfc3NuLFxyXG4gICAgICAgIHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuOiBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbixcclxuICAgICAgICBzZXR1cE1vbml0b3JfRnVsbFByb2Nlc3M6IHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzc1xyXG4gICAgfVxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTgvMjAxOSAwMzoxOCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gQ2hhbmdlTW9uaXRvci50c1xyXG5cclxuXHJcbmNsYXNzIENoYW5nZU1vbml0b3JGbGFnX2NsYXNzIHtcclxuXHJcblxyXG5cclxuICAgIGdldCBoYXZlQ2hhbmdlcygpOiBib29sZWFuIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBfaGF2ZUNoYW5nZXMgPSB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl07XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVvZiAoX2hhdmVDaGFuZ2VzKSBcIiwgdHlwZW9mIChfaGF2ZUNoYW5nZXMpKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKF9oYXZlQ2hhbmdlcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgX2hhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnX2hhdmVDaGFuZ2VzIDogWycsIF9oYXZlQ2hhbmdlcywgJ10nKTtcclxuICAgICAgICByZXR1cm4gX2hhdmVDaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXQgaGF2ZUNoYW5nZXMoX2hhdmVDaGFuZ2VzOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXSA9IF9oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gc2V0dGVyICcsIF9oYXZlQ2hhbmdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxubGV0IENoYW5nZU1vbml0b3JGbGFnID0gbmV3IENoYW5nZU1vbml0b3JGbGFnX2NsYXNzKCk7XHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE0LzIwMTkgMDI6NTkgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDAxXSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yX1V0aWwgfSBmcm9tICcuL0NoYW5nZU1vbml0b3InO1xyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uLy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5cclxuXHJcblxyXG52YXIgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIHNzbl9DaGFuZ2VNb25pdG9yU2VydmljZV9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignQ2hhbmdlTW9uaXRvclNlcnZpY2UnLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuXHJcbiAgICAgICAgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZS5mYWN0b3J5KFwiY2hhbmdlTW9uaXRvclNlcnZpY2VcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9zZXR1cE1vbml0b3IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldHVwTW9uaXRvcl9GdWxsUHJvY2VzcygpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2dldEhhdmVDaGFuZ2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3Jlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIF9kb1NldEhhdmVDaGFuZ2UgPSBmdW5jdGlvbiAoc2V0dGluZykge1xyXG5cclxuICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gc2V0dGluZztcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBzZXR1cE1vbml0b3I6IF9zZXR1cE1vbml0b3IsXHJcbiAgICAgICAgICAgICAgICBnZXRIYXZlQ2hhbmdlczogX2dldEhhdmVDaGFuZ2VzLFxyXG4gICAgICAgICAgICAgICAgcmVzZXQ6IF9yZXNldCxcclxuICAgICAgICAgICAgICAgIGRvU2V0SGF2ZUNoYW5nZTogX2RvU2V0SGF2ZUNoYW5nZVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IGNoYW5nZU1vbml0b3JTZXJ2aWNlX2luc3RhbmNlIH07XHJcblxyXG5cclxuIiwi77u/XHJcblxyXG4vLyAwNi8wNi8yMDIxIDA2OjM5IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAxMV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi8uLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgSUxvZ2dlckVycm9yTWVzc2FnZSwgSUxvZ2dlck1vZHVsZSwgSUxvZ2dlck1lc3NhZ2UgfSBmcm9tICcuL0lMb2dnZXJFcnJvck1lc3NhZ2UnO1xyXG5cclxuXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuLi8uLi9VdGlsL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG5cclxuY29uc3Qgc3NuX0FuZ3VsYXJKc2xvZ2dlciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBkb1NldHVwID0gKGNhbGxTb3VyY2U6IHN0cmluZywgY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpID0+IHtcclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5kb1NldHVwKGNhbGxTb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBhbmd1bGFyTW9kdWxlID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ3Nzbl9sb2dnZXInLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBhbmd1bGFyTW9kdWxlLmZhY3RvcnkoXCJzc25fbG9nZ2VyXCIsIFsnJHEnLCBmdW5jdGlvbiAoJHEpOiBJTG9nZ2VyTW9kdWxlIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2xfbm9ybWFsID0gZnVuY3Rpb24gKG1zZzogSUxvZ2dlck1lc3NhZ2UsIGNvbG9yOiBzdHJpbmcsIGxvdWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IGBjb2xvcjoke2NvbG9yfTtgO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxvdWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSBgZm9udC1zaXplOjEycHg7Zm9udC13ZWlnaHQ6Ym9sZDtgO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2cuY2FsbFNvdXJjZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgbXNnLm1lc3NhZ2UsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWM9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiLCBzdHlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbF9lcnJvciA9IGZ1bmN0aW9uIChlcnJvck1zZzogSUxvZ2dlckVycm9yTWVzc2FnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gJ2NvbG9yOnJlZDtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpib2xkOyc7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGNhbGxTb3VyY2UsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGVycm9yTXNnLmNhbGxTb3VyY2UsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIGVycm9yTXNnLm1lc3NhZ2UsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yTXNnLmVycm9yT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHlsZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMTUvMjAyMSAwODozOCBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswNDhdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcm9wcyA9IHsgU291cmNlQ29kZTE6IGBzc24tYW5nanMtWyR7Y2FsbFNvdXJjZX1dYCwgU291cmNlQ29kZTI6IGVycm9yTXNnLmNhbGxTb3VyY2UsIE1lc3NhZ2U6IGVycm9yTXNnLm1lc3NhZ2UgfTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXhjZXB0aW9uKGVycm9yTXNnLmVycm9yT2JqZWN0LCBwcm9wcyk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBjbF9ub3JtYWwsXHJcbiAgICAgICAgICAgICAgICBjbF9lcnJvclxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHNzbl9Bbmd1bGFySnNsb2dnZXIgfTtcclxuIiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSwgVGltZWxvZ19TZXJ2aW5nUGFnZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG4vLyAxMS8yMC8yMDE5IDA0OjI5IGFtIC0gU1NOIC0gWzIwMTkxMTIwLTA0MjldIC0gWzAwMV0gLSBUaW1lbG9nIGluZGV4IGNsb2NrLW91dCByZWZyZXNoIHVwZGF0ZWQgcm93XHJcblxyXG4vLyBSZWZhY3RvciBbMjAxOTExMjAtMDQzOF1cclxudmFyIFBhZ2VVcGRhdGVyX0luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjdXJyZW50QXBwbGljYXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIHBhZ2VVcGRhdGVyX01vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUGFnZVVwZGF0ZXInLCBjdXJyZW50QXBwbGljYXRpb24pO1xyXG5cclxuICAgICAgICBwYWdlVXBkYXRlcl9Nb2R1bGUuZmFjdG9yeSgnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgWyckcm9vdFNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsIGRhdGFTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA2OjI4IGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAvLyBBZGRpbmcgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3RpbWVsb2dfaW5kZXggPSBmdW5jdGlvbiAoaWRfdGVtcCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuIFxyXG5cclxuICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnRpbWVsb2dSZWZyZXNoUmVjb3JkKGlkX3RlbXAsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9TdWNlc3MocmVzdWx0KSB7XHJcblxyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9SZWZyZXNoJywgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVsb2dfaW5kZXg6IF90aW1lbG9nX2luZGV4XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuZXhwb3J0IHsgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgfTtcclxuICAgICBcclxuIiwi77u/XHJcbi8vIDExLzIyLzIwMTkgMDk6NDEgcG0gLSBTU04gLSBDcmVhdGVkIHRvIHJlc3RvcmUgcGFnZSBvbiBoaXR0aW5nIHRoZSBiYWNrIGJ1dHRvbiBvciByZWNhbGxpbmcgdGhlIHBhZ2UuXHJcblxyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5cclxuLy8gMTIvMjgvMjAxOSAxMDowIHBtIC0gU1NOIC0gQWRkaW5nIEFwcEluc2lnaHRzX1V0aWwgXHJcbmltcG9ydCB7IEFwcEluc2lnaHRzX1V0aWwgfSBmcm9tICcuL0FwcGxpY2F0aW9uSW5zaWdodHNfTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcblxyXG5cclxudmFyIFJlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAvLyAwNi8wNi8yMDIxIDA1OjI5IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAwOV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuLy8gY2FsbFNvdXJjZV9wYXJlbnRcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChuZ0FwcGxpY2F0aW9uTmFtZTpzdHJpbmcsIGNhbGxTb3VyY2VfcGFyZW50OiBzdHJpbmcpIHtcclxuXHJcblxyXG4gICAgICAgIEFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJEZW1vU2l0ZXNfMjAxOTEyMjhfMjIyOFwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEyMjgtMjIxMFwiLCBNZXNzYWdlOiBcImRvU2V0dXBcIiwgQ2FsbFNvdXJjZV9wYXJlbnQ6IGNhbGxTb3VyY2VfcGFyZW50fSk7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICB2YXIgYW5ndWxhcl9tb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IGdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuICAgICAgICBhbmd1bGFyX21vZHVsZS5jb250cm9sbGVyKCdyZXN0b3JlUHJldmlvdXNQYWdlQW5kVGFza1F1ZXVlQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJyRhdHRycycsICckbG9jYXRpb24nLCBmdW5jdGlvbiAoJHNjb3BlLCAkYXR0cnMsICRsb2NhdGlvbikge1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgncmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlQW5kVGFza1F1ZXVlJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXRlX1Rhc2tfUXVldWVfTGlzdCcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxldCBhbHJlYWR5UG9zdGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgLy92YXIgY29udHJvbGxlciA9IGZ1bmN0aW9uICgkaHR0cCwgJHEsICRzY29wZSkge1xyXG4gICAgICAgICAgICAvL307XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBmdW5jdGlvbiAoZSkgeyBzYXZlVXJsKGUpOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlc3RvcmVQb3MsIDMwMCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVsYXRpdmVQYXRoKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDUwNDY4Ni9nZXQtcmVsYXRpdmUtcGF0aC1vZi10aGUtcGFnZS11cmwtdXNpbmctamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvKC4rXFx3XFwvKSguKykvLCBcIi8kMlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNhdmVVcmwoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChhbHJlYWR5UG9zdGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgYWxyZWFkeVBvc3RlZCA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQodHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlLnNjcmVlblgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1JbmZvID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50WDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiBlLmNsaWVudFksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWCA9IHdpbmRvdy5zY3JvbGxYO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvc1kgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPSB7IHVybDogZ2V0UmVsYXRpdmVQYXRoKCksIHBvc1g6IHBvc1gsIHBvc1k6IHBvc1ksIGVsZW1lbnQ6IGVsZW1JbmZvIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHMucHVzaChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NYID0gcG9zWDtcclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQucG9zWSA9IHBvc1k7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQuZWxlbWVudCA9IGVsZW1JbmZvO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzW1VSTF9UcmFja19SZWYuY3VycmVudEluZGV4XSA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2tfUmVmLlVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldF9VUkxfVHJhY2tfUmVjb3JkKGNyZWF0ZUlmTm90Rm91bmQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfdGVtcDogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVUkxfVHJhY2snKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoVVJMX1RyYWNrX3RlbXAgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3JlYXRlSWZOb3RGb3VuZCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja190ZW1wID0gJ3tcInVybHNcIjpbXX0nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrID0gSlNPTi5wYXJzZShVUkxfVHJhY2tfdGVtcCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBnZXRSZWxhdGl2ZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAtMVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY3VycmVudEluZGV4ID0gMDsgY3VycmVudEluZGV4IDwgVVJMX1RyYWNrLnVybHMubGVuZ3RoOyBjdXJyZW50SW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2sudXJsc1tjdXJyZW50SW5kZXhdLnVybCA9PSB1cmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZCA9IFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRSZWNvcmQ6IGN1cnJlbnRSZWNvcmQsIFVSTF9UcmFjazogVVJMX1RyYWNrLCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleFxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZXN0b3JlUG9zKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2tfUmVmID0gZ2V0X1VSTF9UcmFja19SZWNvcmQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkKSByZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGN1cnJlbnRSZWNvcmQucG9zWSwgbGVmdDogY3VycmVudFJlY29yZC5wb3NYLCBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgaGlnaGxpZ2h0Q2xpY2tTb3VyY2UoKTsgfSwgMTAwMCk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICBVUkxfVHJhY2sudXJscy5zcGxpY2UoY3VycmVudEluZGV4KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVUkxfVHJhY2snLCBKU09OLnN0cmluZ2lmeShVUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBoaWdobGlnaHRDbGlja1NvdXJjZSgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghVVJMX1RyYWNrX1JlZikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSBVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQ7XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ID0gY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQgJiYgc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ5cGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIkEgXCIudG9VcHBlckNhc2UoKS5pbmRleE9mKHNlbGVjdGVkRWxlbWVudC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ5cGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwibmctY2xpY2tcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzW3hdLm5hbWUgPT09IFwiaHJlZlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJ5cGFzcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNwYW5UZW1wID0gJCgnPHNwYW4+PC9zcGFuPicpLnByZXBlbmRUbyhzZWxlY3RlZEVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkudGV4dCgkKHNlbGVjdGVkRWxlbWVudCkudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzcGFuVGVtcCkuYWRkQ2xhc3MoJ2Nzc0hpbGlnaHQxMDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZW1vdmVBZGRlZENsYXNzKHNwYW5UZW1wKTsgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5zcGxpY2UoVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlQWRkZWRDbGFzcyhvYmpSZWYpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChvYmpSZWYpLnJlbW92ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG5cclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy91dGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZS5odG1sXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDYvMDgvMjAyMSAwMjo0NCBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMzBdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50IC0gTGluZSBpdGVtXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vTG9nZ2VyL0lMb2dnZXJFcnJvck1lc3NhZ2UnO1xyXG5cclxuIFxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9DdXN0b20gZXh0ZW5kcyBhbmd1bGFyLklTY29wZSB7XHJcbiAgICBvYmplY3RMaXN0OiBzdHJpbmdbXVxyXG59XHJcblxyXG5cclxuY29uc3Qgc3NuX2F1dG9fZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlOiBzdHJpbmcsIGFwcGxpY2F0aW9uTmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHZhciBKb2JzX0FuZ3VsYXJfTW9kdWxlOiBhbmd1bGFyLklNb2R1bGUgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ3Nzbl9zZXRfZm9jdXMnLCBhcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcbiAgICAgICAgSm9ic19Bbmd1bGFyX01vZHVsZS5kaXJlY3RpdmUoJ3NzbkF1dG9Gb2N1cycsIFsnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uIChzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTAwOC0xNTA5JywgbWVzc2FnZTogJ3NzbkF1dG9Gb2N1cyBpbiBkaXJlY3RpdmUnIH0sICd5ZWxsb3cnKTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsXHJcbiAgICAgICAgICAgICAgICAvLyBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9DdXN0b20sIGVsZW0sIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRycykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDA4LTE1MjYtZCcsIG1lc3NhZ2U6ICdzc25BdXRvRm9jdXMgZmlyaW5nJyB9LCAnY3lhbicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmIChzY29wZS5vYmplY3RMaXN0ID09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBzc25fYXV0b19mb2N1cyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDEwLzAxLzIwMTkgMDk6NDcgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDAzXSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHJcblxyXG4gICAgYXBwSW5zaWdodHM6IHtcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzJ1xyXG4gICAgICAgIC8vIDEwLzMxLzIwMTkgMDM6NTggYW0gLSBTU04gLSBBZGRlZFxyXG5cclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMDcvMjAxOSAwODozNCBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgXCJJbnN0cnVtZW50YXRpb25LZXlcIjogXCJkZWxldGVkXCIsIFwiZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzXCIgLFxyXG4gICAgICAgIC8vIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAtIFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCJcclxuXHJcbiAgICAgICAgLy8gMDYvMDYvMjAyMSAwNjoyMSBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTBdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuICAgICAgICAvLyBSZXBsYWNlIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAgd2l0aCBEZXZTaXRlc0luZGV4MjAxOTAxMjdfXzA5MjlfcmVkZXBsb3lfdjAyXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBcIjI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkM1wiXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn07Iiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4uL0ludGVyZmFjZXMvSUNvbHVtbkJhZyc7XHJcbmltcG9ydCB7IElUZWNobm9sb2d5IH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGVjaG5vbG9neSc7XHJcbmltcG9ydCB7IElEZXZTaXRlVGVjaG5vbG9neSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSURldlNpdGVUZWNobm9sb2d5JztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAocmVjb3Jkc1BlclBhZ2U6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS8ke3JlY29yZHNQZXJQYWdlfS8ke2N1cnJlbnRQYWdlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgJyArICdkYXRhc2VydmljZSBnZXREZXZTaXRlcyBlcnJvcicsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjEzcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDU6MTAgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ1XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlSWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS8ke2RldlNpdGVJZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDoyOSBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMThdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlc0NvdW50ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS9yZWNvcmRjb3VudGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldFRpbWVsb2cvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTA4MjktMTgxOV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA5OjE0IGFtIC0gU1NOIC0gUGFzcyBwcm9qZWN0SWRcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkICsgXCI/cHJvamVjdElkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBjb2x1bW5CYWcuZmtfZmlsdGVyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA4LzIwMjEgMTA6NTIgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDAyXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuICAgICAgICAgICAgICAgIC8vICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldEpvYi8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iIFsyMDE5MDkzMC0xOTA4XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIyLzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE4XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG4gICAgICAgICAgICB2YXIgX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9Qcm9qZWN0QVBJL3JlZnJlc2hyZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHByb2plY3Qgc2VhcmNoIHJlY29yZCAgWzIwMTkxMTIyLTE2MDhdIFsnICsgaWQgKyAnXSBbJyArIHNlcnZpbmdQYWdlICsgJ10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8wNy8yMDIxIDA2OjIyIGFtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAxNV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgICAgIHZhciBhZGRPclVwZGF0ZUpvYl9MaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JfTGluZUl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2pvYl9saW5lSXRlbUFQSScsIGpvYl9MaW5lSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDY6MDAgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ5XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBhZGRPclVwZGF0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAodGVjaG5vbG9neTogSVRlY2hub2xvZ3kpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RlY2hub2xvZ3lBUEknLCB0ZWNobm9sb2d5KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRIdHRwUG9zdFByb21pc2UodXJsLCBib2R5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KHVybCwgYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDA4OjQyIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwNV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEh0dHBEZWxldGVQcm9taXNlKHVybCwgaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmRlbGV0ZShgJHt1cmx9LyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDAyOjU5IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA2MV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkRGV2U2l0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAoZGV2U2l0ZVRlY2hub2xvZ3k6IElEZXZTaXRlVGVjaG5vbG9neSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdHRwUG9zdFByb21pc2UoJy9hcGkvRGV2U2l0ZXRlY2hub2xvZ3lBUEkvcG9zdF9jdXN0b20nLCBkZXZTaXRlVGVjaG5vbG9neSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE2LzIwMjEgMDg6MzMgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMTAzXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWxldGVEZXZTaXRlVGVjaG5vbG9neSA9IGZ1bmN0aW9uIChpZDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0dHBEZWxldGVQcm9taXNlKCcvYXBpL0RldlNpdGV0ZWNobm9sb2d5QVBJJywgaWQpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlOiBfZ2V0RGV2U2l0ZSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzQ291bnQ6IF9nZXREZXZTaXRlc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRPclVwZGF0ZVRlY2hub2xvZ3ksXHJcbiAgICAgICAgICAgICAgICBhZGREZXZTaXRlVGVjaG5vbG9neSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURldlNpdGVUZWNobm9sb2d5XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcbi8vIDA4LzMxLzIwMjAgMDQ6NTQgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDA0XSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fY29uc29sZV9tb2RlbC5kLnRzXCIgLz5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzMxLzIwMjAgMDQ6MjkgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDAyXSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbiAgICAgICAgZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA0LzIwMjAgMDE6NTUgYW0gLSBTU04gLSBbMjAyMDA5MDQtMDE1NV0gYXBwbHkgdG8gYSBvbmx5IC0gV2FzIGhpZGluZyBtb2JpbGUgaGFtYmVyZ2VyIG1lbnUuXHJcblxyXG4gICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nKS5lYWNoKChuZHgsIG9iajEpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2SWQgPSAkKG9iajEpLmF0dHIoJ2FyaWEtY29udHJvbHMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQgPSAkKFwiI1wiICsgZGl2SWQpLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5jc3MoJ2NvbG9yJywgJ29yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCdmb250LXNpemUnLCAnMjRwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoXCI8c3Bhbi8+XCIpLnRleHQoJChvYmoxKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICBzZXREZWZhdWx0cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBOYW1lID0gJCh0aGlzKS5hdHRyKCdwb3B1cC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwb3B1cE5hbWUpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMDk6MzMgYW0gLSBTU04gLSBBZGRpbmcgaGlkZSBhbmQgc2hvd1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnYm9keScpLnNjcm9sbHNweSh7IHRhcmdldDogalF1ZXJ5T2JqZWN0TmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihqUXVlcnlPYmplY3ROYW1lKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LWRlZmF1bHQtdGltZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnZhbChjZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LVRvdGFsUGVyaW9kXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDE6MTAgcG0gLSBTU04gLSBBZGRyZXNzaW5nIGVycm9yLiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXSBjYW5ub3QgY29udmVydCB0b3Agc3RyaW5nIHwgbnVtYmVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDExID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZTogc3RyaW5nID0gKDxIVE1MSW5wdXRFbGVtZW50PiQoalF1ZXJ5T2JqZWN0TmFtZSlbMF0pLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBkMTEuZ2V0VGltZSgpLnZhbHVlT2YoKSAtIGQxMi5nZXRUaW1lKCkudmFsdWVPZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMiA9IE1hdGguZmxvb3IoZGVsdGFfMSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzA4LzIwMTkgMDE6MDQgcG0gLSBTU04gLSBbMjAxOTExMDgtMTA0M10gLSBbMDA4XSAtIFBlcnNpc3Rpbmcgc2VhcmNoIG9uIHJldHVybiB0byBpbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICAvLyAwMS8wMi8yMDIwIDA0OjA2IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5lLnRhcmdldCkuaHJlZiArIFwiJnJldHVyblRvQ2FsbGVyS2V5PVwiICsgcmV0dXJuVG9DYWxsZXJLZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgaW1nU2l0ZVVybFFSQ29kZSA9IDA7IFxyXG5cclxuICAgICAgICAgICAgJCgnI2ltZ1NpdGVVcmxRUkNvZGUnKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGltZ1NpdGVVcmxRUkNvZGUrKztcclxuXHJcbiAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS50b2dnbGVDbGFzcygnY3NzU2l0ZVVybFFSQ29kZScpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhciBsaSBhJykuYmluZCgnY29udGV4dG1lbnUgY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA0MTQtMTAwNyAtIGNvbnRleHQgbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyIGxpIGEnKS5iaW5kKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlkZGxlIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSaWdodCBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCAgIDIwOCAgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKGUudGFyZ2V0KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3RoaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmICgkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICQodGhpcy5tb2JpbGVOYXZiYXJNZW51T3B0aW9uLm5hdGl2ZUVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGRpdnMgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG4gICAgICAgICAgICAkKFwiYVtkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoY2FsbGVyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAwOTo1NiBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDFdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgMjAyMDAxMDItMTUyOCAtIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciBbJyArIGNhbGxlciArICddJyk7XHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdXRvQ29sbGFwc2UgPSAkKHRoaXMpLmF0dHIoJ3Nzbi1hdXRvLWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b0NvbGxhcHNlID09PSBcImZhbHNlXCIpIHsgcmV0dXJuOyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ByZSA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ1Nob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4vLyAwMS8wMi8yMDIwIDA0OjIwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTE2MTFdIC0gWzAwM10gLSBTZXBlcmF0ZSBBbmd1bGFySlMgdXRpbGl0eSBmcm9tIGdlbmVyYWwgRE9NIHV0aWxpdGllc1xyXG4vLyBPZiBjb3Vyc2Ugd2UgYXJlIGNhbGxpbmcgdXRpbGl0eSBtb3JlIHRoYW4gb25jZS4gTmVlZCB0byBjYWxsIGZ1bmN0aW9ucyB3aGVyZSB0aGV5IGFwcGx5LlxyXG5cclxuXHJcblxyXG5pZiAodHlwZW9mICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdKSAhPSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9IDA7XHJcbn1cclxuXHJcbndpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSB3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdICsgMTtcclxuXHJcblxyXG5pZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9PT0gMSkge1xyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTIvMzAvMjAxOSAwMToyMyBhbSAtIFNTTiAtIEFkZCB0aW1lb3RcclxuICAgICAgICAvLyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzNC0yJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjMyIGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwM10gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNpdGVfaW5zdGFuY2UuZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCksIDEwMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICwgMjAwMCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCdldmVudHMnKVt0eXBlXTtcclxuXHJcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoLTEgIT09ICQuaW5BcnJheShmbiwgZGF0YSkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjI5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwMl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MzEgLSBqb2JfVGltZWxvZ19zZXRGaWx0ZXIgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQgLSBLZXlVcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKChlKSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMiAtIHNldHVwJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9