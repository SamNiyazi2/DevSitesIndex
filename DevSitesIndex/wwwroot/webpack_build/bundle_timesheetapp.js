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
          $scope.$on('$destroy', function () {//  console.log('%c ' + 'Destroy dropdownListDirectiveInputBox - 20210614-2154', 'color:red;font-size:14pt;');
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
              // 06/19/2021 03:28 am - SSN - When adding a new entry with the switch dropdownListDirectiveInputBoxInverse set to true (Adding job title in job create)
              //                             The $modelValue is the input string.  
              //   We noted earlier that the $modelValue was an object.  

              var keyValueSelected = undefined;
              var incompleteDefinition_startingWithCondition = dropdownListDirectiveInputBoxInverse == "true";

              if (incompleteDefinition_startingWithCondition) {
                keyValueSelected = ngModel_ctrl.$modelValue;
              } else {
                keyValueSelected = ngModel_ctrl.$modelValue.id;
              }

              scope.$broadcast(_Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE, {
                msg: _DropdownListDirectiveConstants__WEBPACK_IMPORTED_MODULE_2__["DDLD_CONSTANTS"].UPDATE_HIDDEN_KEY_VALUE,
                callSource: '20210618-1858',
                keyColumn: keyColumn,
                keyValue: keyValueSelected
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

          console.log("%c [" + _Shared_Broadcast_Identifers__WEBPACK_IMPORTED_MODULE_3__["BROADCAST_IDENTIFIERS"].DROPDOWN_LIST_DIRECTIVE + "] 20210619-0323", 'color:blue;font-size:12pt');
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
        $scope.$on('$destroy', function () {// console.log('%c ' + 'Destroy DropDownListDirective - 20210614-2152', 'color:red;font-size:14pt;');
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
            var TimesheetController_modal = $uibModal.open({
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
            }); // 06/19/2021 07:01 am - SSN - Capture modal results

            TimesheetController_modal.result.then(TimesheetController_modal_save, TimesheetController_modal_cancel);

            function TimesheetController_modal_save(result) {
              console.log('%c TimelogLinkOptions - TimesheetController save - 20210619-0702', 'color:yellow;font-size:14pt');
              changeMonitorService.reset();
            }

            function TimesheetController_modal_cancel(result) {
              console.log('%c TimelogLinkOptions - TimesheetController cancel - 20210619-0703', 'color:red;font-size:14pt');
              changeMonitorService.reset();
            }
          };

          $scope.showCreateTimesheetFormWithJobId = function (_jobId) {
            if (isNaN(_jobId)) {
              _jobId = 0;
            }

            var TimesheetCreateController_modal = $uibModal.open({
              templateUrl: '/js/timesheet/templates/timesheetTemplate.html',
              controller: 'TimesheetCreateController',
              backdrop: 'static',
              keyboard: false,
              resolve: {
                jobId: function jobId() {
                  return _jobId;
                }
              }
            }); // 06/19/2021 07:03 am - SSN - Capture modal results

            TimesheetCreateController_modal.result.then(TimesheetCreateController_modal_save, TimesheetCreateController_modal_cancel);

            function TimesheetCreateController_modal_save(result) {
              console.log('%c TimelogLinkOptions - TimesheetCreateController save - 20210619-0704', 'color:yellow;font-size:14pt');
              changeMonitorService.reset();
            }

            function TimesheetCreateController_modal_cancel(result) {
              console.log('%c TimelogLinkOptions - TimesheetCreateController cancel - 20210619-0705', 'color:red;font-size:14pt');
              changeMonitorService.reset();
            }
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

  timesheetApp.controller("timesheetController", ['$scope', '$uibModal', 'changeMonitorService', '$compile', 'ssn_logger', function ($scope, $uibModal, changeMonitorService, $compile, ssn_logger) {
    // 11/19/2019 06:43 am - SSN - [20191119-0048] Added to re-bind ng-click
    $scope.$on('TimeLog_Index_Refresh', function (event, item) {
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
        ssn_logger.cl_normal({
          callSource: "20210619-0626",
          message: "Closing modalClockout"
        }, "red", true);
        changeMonitorService.reset();
      }

      function modalClockout_cancel(result) {
        ssn_logger.cl_normal({
          callSource: "20210619-0627",
          message: "Cancel modalClockout"
        }, "yellow", true);
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
        ssn_logger.cl_normal({
          callSource: "20210619-0628-A",
          message: "save TimesheetContinue"
        }, "yellow", true);
        ssn_logger.cl_normal({
          callSource: "20210619-0628-B",
          message: result
        }, "yellow", true);
        changeMonitorService.reset();
      }

      function TimesheetContinueController_modal_cancel(result) {
        ssn_logger.cl_normal({
          callSource: "20210619-0629",
          message: "cancel TimesheetContinue"
        }, "yellow", true);
        ssn_logger.cl_normal({
          callSource: "20210619-0629-B",
          message: result
        }, "yellow", true);
        changeMonitorService.reset();
      }
    }; // 11/14/2019 04:41 pm - SSN - [20191114-1459] - [008] - ChangeMonitroService
    // Testing - Not working.


    function modalClosingHook($scope) {
      $scope.$on('modal.closing', function (event, reason, closed) {
        ssn_logger.cl_normal({
          callSource: "20210619-0630-A",
          message: "Modal closing hook"
        }, "yellow", true);
        ssn_logger.cl_normal({
          callSource: "20210619-0630-B",
          message: reason
        }, "yellow", true);
        ssn_logger.cl_normal({
          callSource: "20210619-0630-C",
          message: closed
        }, "yellow", true);
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
      // 06/19/2021 06:31 am - SSN - Capture open return results


      var showCreateTimesheetForm_modal = $uibModal.open({
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
      showCreateTimesheetForm_modal.result.then(showCreateTimesheetForm_modal_save, showCreateTimesheetForm_modal_cancel);

      function showCreateTimesheetForm_modal_save(result) {
        ssn_logger.cl_normal({
          callSource: "20210619-0633",
          message: "save showCreateTimesheetForm"
        }, "yellow", true);
        changeMonitorService.reset();
      }

      function showCreateTimesheetForm_modal_cancel(result) {
        ssn_logger.cl_normal({
          callSource: "20210619-0634",
          message: "save showCreateTimesheetForm"
        }, "red", true);
        changeMonitorService.reset();
      }
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
        ssn_logger.cl_normal({
          callSource: "20210619-0639",
          message: "save TimesheetEditController"
        }, "yellow", true);
        changeMonitorService.reset();
      }

      function modalEdit_cancel(result) {
        ssn_logger.cl_normal({
          callSource: "20210619-0640",
          message: "save TimesheetEditController"
        }, "red", true);
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
    };
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
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "angular");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals */ "./globals.js");
// 06/08/2021 02:44 pm - SSN - [20210606-0227] - [030] - Testng for deployment - Line item
// 06/19/2021 06:07 am - SSN - Revised to be form-based.



var ssn_auto_focus = function () {
  var doSetup = function doSetup(callSource, applicationName) {
    var Jobs_Angular_Module = _globals__WEBPACK_IMPORTED_MODULE_1__["globals_instance"].getInstance_v002('ssn_set_focus', applicationName);
    Jobs_Angular_Module.directive('ssnAutoFocus', ['$rootScope', '$timeout', 'ssn_logger', function ($rootScope, $timeout, ssn_logger) {
      return {
        restrict: 'A',
        link: function link(scope, elem, attrs) {
          scope.$on('$destroy', function () {});
          $rootScope.ssnAutoFocus_alreadySet = true;

          var setFocus = function setFocus() {
            var focusAlreadySet = false;
            angular__WEBPACK_IMPORTED_MODULE_0__["forEach"](elem[0], function (obj) {
              if (focusAlreadySet) return;

              if (obj.type.toLowerCase() != "hidden" && (obj.tagName.toLowerCase() == "input" || obj.tagName.toLowerCase() == "textarea")) {
                if (obj.value == "") {
                  obj.focus();
                  focusAlreadySet = true;
                  return;
                }
              }
            });
          };

          $timeout(function () {
            return setFocus();
          }, 1000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy9DOi9TYW1zX1AvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9hcHBsaWNhdGlvbmluc2lnaHRzLWpzL2J1bmRsZS9haS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZS50cyIsIndlYnBhY2s6Ly8vLi9Ecm9wZG93bkxpc3QvRHJvcGRvd25MaXN0RGlyZWN0aXZlQ29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL0ludGVyY2VwdG9ycy9TZXNzaW9uVGltZW91dEludGVyY2VwdG9yLnRzIiwid2VicGFjazovLy8uL1JvdXRpbmcvUm91dGluZ19Db25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vU2hhcmVkL0Jyb2FkY2FzdF9JZGVudGlmZXJzLnRzIiwid2VicGFjazovLy8uL1NoYXJlZC9Nb2RhbENhbGxzVXRpbC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvTGluZUl0ZW0vTGluZUl0ZW1Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldEFwcC50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvVGltZXNoZWV0RWRpdENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHkudHMiLCJ3ZWJwYWNrOi8vLy4vVGltZXNoZWV0L1RpbWVzaGVldF90YWJsZV9yZWZyZXNoLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRfbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9UaW1lc2hlZXQvdGltZXNoZWV0Y2xvY2tvdXRjb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL1RpbWVzaGVldC90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0xvZ2dlci9zc25fQW5ndWxhckpzbG9nZ2VyLnRzIiwid2VicGFjazovLy8uL1V0aWwvUGFnZVVwZGF0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzLnRzIiwid2VicGFjazovLy8uL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL2dsb2JhbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL0RhdGFTZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7Ozs7Ozs7QUNoQkEsZ0VBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLLDhEQUE4RDtBQUNuRSxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSyw4REFBOEQ7QUFDbkUsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0RUFBNEU7QUFDckYsS0FBSyw0RkFBNEY7QUFDakcsQ0FBQyw4QkFBOEI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDRFQUE0RTtBQUNyRixLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNEVBQTRFO0FBQ3JGLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRGQUE0RjtBQUNqRyxDQUFDLDhCQUE4QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw0REFBNEQ7QUFDakUsQ0FBQyxnQkFBZ0I7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUssNEZBQTRGO0FBQ2pHLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlDQUFpRCxDQUFDLG1CQUFTLEVBQUUsT0FBUyxDQUFDLG1DQUFFO0FBQ3pFO0FBQ0Esa0RBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCwwREFBMEQsRUFBRTtBQUNqSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUFBLG9HQUFDO0FBQ0YscUM7Ozs7Ozs7Ozs7OztBQzFUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7Q0FJQTs7QUFHQTtBQUdBO0FBQ0E7O0FBYUEsSUFBSSw4QkFBOEIsR0FBRztBQUdqQyxNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxjQUFWLEVBQXdCO0FBR2xDLFFBQUksT0FBUSxjQUFSLElBQTJCLFFBQS9CLEVBQXlDO0FBQ3JDLG9CQUFjLEdBQUcsMkJBQWpCO0FBQ0g7O0FBSUQsUUFBSSwyQkFBMkIsR0FBRywwREFBNkIsZ0JBQTdCLENBQThDLHVCQUE5QyxFQUF1RSxjQUF2RSxFQUF1RixDQUFDLGNBQUQsQ0FBdkYsQ0FBbEMsQ0FUa0MsQ0FZbEM7O0FBQ0EsUUFBSSwyQkFBMkIsR0FBRywyQkFBMkIsQ0FBQyxVQUE1QixDQUF1QyxtQkFBdkMsRUFBNEQsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixXQUFyQixFQUFrQyxZQUFsQyxFQUFnRCxVQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsRUFBcUMsVUFBckMsRUFBK0M7QUFHekwsWUFBTSxDQUFDLFlBQVAsR0FBc0IsVUFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXFCO0FBR3ZDLFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBVixFQUFrQjtBQUVkLGlCQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFJQSxlQUFLLENBQUMsY0FBTjtBQUNBLDJCQUFpQjtBQUNwQjtBQUNKLE9BWkQsQ0FIeUwsQ0FrQnpMOzs7QUFDQSxVQUFJLGlCQUFpQixHQUFHLFNBQXBCLGlCQUFvQjtBQUVwQixZQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsb0JBQUQsQ0FBWDs7QUFFQSxZQUFJLEdBQUcsQ0FBQyxNQUFSLEVBQWdCO0FBRVosV0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixPQUFoQixDQUF3QjtBQUNwQjtBQUNBO0FBQ0EscUJBQVMsRUFBRyxHQUFHLENBQUMsS0FBSixHQUFZLE9BQVosQ0FBb0IsZ0JBQXBCLEVBQXNDLE1BQXRDLEdBQStDLEdBQS9DLEdBQXFEO0FBSDdDLFdBQXhCLEVBSUcsR0FKSDtBQUtIO0FBQ0osT0FaRDtBQWdCSCxLQW5DNkYsQ0FBNUQsQ0FBbEM7QUF5Q0EsK0JBQTJCLENBQUMsU0FBNUIsQ0FBc0MsK0JBQXRDLEVBQXVFLENBQUMsSUFBRCxFQUFPLFlBQVAsRUFBcUIsVUFBVSxFQUFWLEVBQWMsVUFBZCxFQUF1QztBQUUvSCxhQUFPO0FBQ0gsZUFBTyxFQUFFLFNBRE47QUFJSCxrQkFBVSxFQUFFLG9CQUFVLE1BQVYsRUFBZ0I7QUFFeEIsZ0JBQU0sQ0FBQyxHQUFQLENBQVcsVUFBWCxFQUF1QixhQUVuQjtBQUVILFdBSkQ7QUFNSCxTQVpFO0FBaUJIO0FBQ0E7QUFFQSxZQUFJLEVBQUUsY0FBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLFlBQTdCLEVBQXlDO0FBRTNDLGNBQU0sb0NBQW9DLEdBQUcsSUFBSSxDQUFDLHNDQUFELENBQWpEO0FBQ0EsY0FBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQUQsQ0FBdEI7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSx1REFBWixFQUFxRSw4QkFBckU7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSx1Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLG9DQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFWMkMsQ0FhM0M7QUFDQTs7QUFHQSxjQUFJLENBQUMsSUFBTCxDQUFVLE1BQVYsRUFBa0IsVUFBQyxLQUFELEVBQU07QUFFcEIsbUJBQU8sQ0FBQyxHQUFSLENBQVksbUNBQVosRUFBaUQsOEJBQWpEO0FBSUEsbUJBQU8sQ0FBQyxHQUFSLENBQVksMEJBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxZQUFZLENBQUMsV0FBekI7QUFHQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLFlBQVksQ0FBQyxVQUF6QjtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLGNBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaLEVBZG9CLENBeUJwQjs7QUFDQSxnQkFBSSxZQUFZLENBQUMsV0FBakIsRUFBOEI7QUFDMUI7QUFDQSwwQkFBWSxDQUFDLGFBQWIsQ0FBMkIsWUFBWSxDQUFDLFdBQXhDO0FBQ0gsYUFIRCxNQUlLO0FBQ0QscUJBQU8sQ0FBQyxHQUFSLENBQVkseURBQVosRUFBdUUsMkJBQXZFO0FBQ0g7O0FBSUQsZ0JBQUksb0NBQW9DLElBQUksb0NBQW9DLElBQUksTUFBcEYsRUFBNEY7QUFHeEYscUJBQU8sQ0FBQyxHQUFSLENBQVksK0RBQTZELG9DQUE3RCxHQUFpRyxHQUE3RyxFQUFrSCw2QkFBbEgsRUFId0YsQ0FLeEY7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBSSxnQkFBZ0IsR0FBRyxTQUF2QjtBQUVBLGtCQUFNLDBDQUEwQyxHQUFHLG9DQUFvQyxJQUFJLE1BQTNGOztBQUVBLGtCQUFJLDBDQUFKLEVBQWdEO0FBQzVDLGdDQUFnQixHQUFHLFlBQVksQ0FBQyxXQUFoQztBQUNILGVBRkQsTUFFTztBQUNILGdDQUFnQixHQUFHLFlBQVksQ0FBQyxXQUFiLENBQXlCLEVBQTVDO0FBQ0g7O0FBRUQsbUJBQUssQ0FBQyxVQUFOLENBQWlCLGtGQUFxQixDQUFDLHVCQUF2QyxFQUFnRTtBQUM1RCxtQkFBRyxFQUFFLDhFQUFjLENBQUMsdUJBRHdDO0FBRTVELDBCQUFVLEVBQUUsZUFGZ0Q7QUFFL0IseUJBQVMsRUFBRSxTQUZvQjtBQUVULHdCQUFRLEVBQUU7QUFGRCxlQUFoRTtBQUtBLHFCQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EscUJBQU8sQ0FBQyxHQUFSLENBQVksWUFBWjtBQUNBLHFCQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7QUFHSixXQXZFRDtBQTBFQSxjQUFJLDZCQUE2QixHQUFHLElBQUksQ0FBQyw2QkFBTCxDQUFtQyxLQUFuQyxDQUF5QyxHQUF6QyxDQUFwQyxDQTNGMkMsQ0E2RjNDO0FBQ0E7O0FBQ0Esc0JBQVksQ0FBQyxRQUFiLENBQXNCLE9BQXRCLENBQThCLFVBQVUsS0FBVixFQUFlO0FBRXpDLHdCQUFZLENBQUMsWUFBYixDQUEwQixJQUFJLENBQUMsSUFBTCxHQUFZLGdDQUF0QyxFQUF3RSw2QkFBNkIsQ0FBQyxPQUE5QixDQUFzQyxLQUF0QyxNQUFpRCxDQUFDLENBQTFIO0FBRUEsbUJBQU8sS0FBUDtBQUNILFdBTEQ7O0FBU0Esc0JBQVksQ0FBQyxnQkFBYixDQUE4QixpQ0FBOUIsR0FBa0UsVUFBVSxVQUFWLEVBQXNCLFNBQXRCLEVBQStCO0FBRTdGO0FBQ0E7QUFDQTtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLFlBQVksQ0FBQyxNQUF6QjtBQUVBLGdCQUFJLGdCQUFnQixHQUFHLElBQXZCO0FBR0EsZ0JBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7O0FBRUEsZ0JBQUksWUFBWSxDQUFDLE1BQWpCLEVBQXlCO0FBRXJCLDhCQUFnQixHQUFHLFVBQVUsSUFBSSxVQUFVLENBQUMsRUFBNUM7QUFFQSxrQkFBSSxvQ0FBb0MsSUFBSSxNQUE1QyxFQUFvRCxnQkFBZ0IsR0FBRyxDQUFDLGdCQUFwQjtBQUV2RDs7QUFHRCxnQkFBSSxnQkFBSixFQUFzQjtBQUVsQixzQkFBUSxDQUFDLE9BQVQ7QUFDSCxhQUhELE1BR087QUFFSCxzQkFBUSxDQUFDLE1BQVQ7QUFDSCxhQTlCNEYsQ0FnQzdGOzs7QUFDQSxtQkFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxXQWxDRDtBQW9DSDtBQWhLRSxPQUFQO0FBa0tILEtBcEtzRSxDQUF2RTtBQTBLQSwrQkFBMkIsQ0FBQyxTQUE1QixDQUFzQyx1QkFBdEMsRUFBK0QsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixVQUFVLFVBQVYsRUFBc0IsUUFBdEIsRUFBOEI7QUFHcEgsVUFBSSxVQUFVLEdBQUcsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixJQUFyQixFQUEyQixRQUEzQixFQUFxQyxZQUFyQyxFQUFtRCxVQUFuRCxFQUErRCxzQkFBL0QsRUFBdUYsWUFBdkYsRUFBcUcsVUFBVSxPQUFWLEVBQW1CLEtBQW5CLEVBQTBCLEVBQTFCLEVBQThCLE1BQTlCLEVBQXNDLFVBQXRDLEVBQWtELFFBQWxELEVBQTRELG9CQUE1RCxFQUFrRixVQUFsRixFQUEyRztBQUU3TixZQUFJLEVBQUUsR0FBRyxJQUFUO0FBRUEsVUFBRSxDQUFDLE9BQUgsR0FBYSxLQUFiLENBSjZOLENBTzdOO0FBQ0E7O0FBRUEsVUFBRSxDQUFDLFNBQUgsR0FBZSxFQUFmLENBVjZOLENBWTdOO0FBQ0E7O0FBQ0EsVUFBRSxDQUFDLGVBQUgsR0FBcUIsMkJBQXlCLElBQUksQ0FBQyxNQUFMLEVBQXpCLEdBQXNDLEdBQTNEO0FBRUEsVUFBRSxDQUFDLGtCQUFILEdBQXdCLEVBQUUsQ0FBQyxlQUFILEdBQXFCLGdDQUE3QztBQUVBLFVBQUUsQ0FBQyxvQ0FBSCxHQUEwQyxLQUExQzs7QUFHQSxVQUFFLENBQUMsY0FBSCxHQUFvQixVQUFVLFNBQVYsRUFBbUI7QUFDbkMsY0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFSLEVBQWtCO0FBQ2Q7QUFDSDs7QUFDRCxpQkFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQUgsQ0FBWSxNQUFaLENBQW1CLFNBQW5CLENBQVQ7QUFDSCxTQUxEOztBQU9BLFVBQUUsQ0FBQyw2QkFBSCxHQUFtQyxVQUFVLFdBQVYsRUFBdUIsU0FBdkIsRUFBZ0M7QUFFL0Q7QUFDQTtBQUdBLGNBQUksQ0FBQyxFQUFFLENBQUMsUUFBUixFQUFrQjtBQUFFO0FBQVM7O0FBRTdCLGNBQUksQ0FBQyxFQUFFLENBQUMsUUFBSCxDQUFZLFdBQVosQ0FBTCxFQUErQjtBQUFFO0FBQVM7O0FBRTFDLGlCQUFRLEVBQUUsQ0FBQyxRQUFILENBQVksV0FBWixDQUFELENBQTJCLFFBQTNCLEVBQXFDLFNBQXJDLENBQVA7QUFFSCxTQVpEOztBQW1CQSxjQUFNLENBQUMsR0FBUCxDQUFXLGtGQUFxQixDQUFDLHVCQUFqQyxFQUEwRCxVQUFVLE1BQVYsRUFBa0IsSUFBbEIsRUFBc0I7QUFFNUUsY0FBSSxTQUFTLEdBQUcsS0FBaEIsQ0FGNEUsQ0FJNUU7O0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksU0FBTyxrRkFBcUIsQ0FBQyx1QkFBN0IsR0FBb0QsaUJBQWhFLEVBQW1GLDJCQUFuRjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksK0JBQVo7O0FBUUEsY0FBSSxJQUFJLENBQUMsR0FBTCxLQUFhLDhFQUFjLENBQUMsWUFBNUIsSUFBNEMsSUFBSSxDQUFDLGVBQXJELEVBQXNFO0FBRWxFLGdCQUFJLENBQUMsZUFBTCxDQUFxQixLQUFyQjtBQUVIOztBQUlELGNBQUksRUFBRSxDQUFDLGFBQUgsSUFBb0IsRUFBRSxDQUFDLGFBQUgsSUFBb0IsSUFBSSxDQUFDLFNBQTdDLElBQTBELElBQUksQ0FBQyxRQUFuRSxFQUE2RTtBQUV6RSxjQUFFLENBQUMsZUFBSCxHQUFxQixJQUFJLENBQUMsUUFBMUI7QUFFQSxxQkFBUyxHQUFHLElBQVo7QUFFSDs7QUFJRCxjQUFLLElBQUksQ0FBQyxHQUFMLElBQVksOEVBQWMsQ0FBQyx1QkFBNUIsSUFBd0QsRUFBRSxDQUFDLFNBQTNELElBQXdFLElBQUksQ0FBQyxTQUE3RSxJQUEyRixFQUFFLENBQUMsU0FBSCxDQUFhLFdBQWIsTUFBOEIsSUFBSSxDQUFDLFNBQUwsQ0FBZSxXQUFmLEVBQTdILEVBQTRKO0FBRXhKLG1CQUFPLENBQUMsR0FBUixDQUFZLHFDQUFtQyxFQUFFLENBQUMsU0FBdEMsR0FBK0MsR0FBM0QsRUFBZ0UsNkJBQWhFO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksMkNBQXlDLEVBQUUsQ0FBQyxlQUE1QyxHQUEyRCxHQUF2RSxFQUE0RSw2QkFBNUU7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSx5Q0FBdUMsSUFBSSxDQUFDLFFBQTVDLEdBQW9ELEdBQWhFLEVBQXFFLDZCQUFyRTtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxFQUFFLENBQUMsU0FBZjtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLGdCQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxDQUFDLFNBQWpCOztBQUdBLGdCQUFJLEVBQUUsQ0FBQyxlQUFQLEVBQXdCO0FBRXBCLGVBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFmLEdBQWlDLElBQWxDLENBQUQsQ0FBeUMsR0FBekMsQ0FBNkMsSUFBSSxDQUFDLFFBQWxEO0FBRUgsYUFKRCxNQUlPO0FBRUgsd0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQ2hCLDBCQUFVLEVBQUUsZUFESTtBQUNhLHVCQUFPLEVBQUUsaURBQStDLElBQUksQ0FBQyxTQUFwRCxHQUE2RCxvQkFBN0QsR0FBa0YsRUFBRSxDQUFDLFVBQXJGLEdBQStGO0FBRHJILGVBQXBCO0FBSUg7O0FBRUQscUJBQVMsR0FBRyxJQUFaO0FBRUg7O0FBYUQsY0FBSyxJQUFJLENBQUMsR0FBTCxJQUFZLDhFQUFjLENBQUMsb0JBQTVCLElBQXFELEVBQUUsQ0FBQyxTQUF4RCxJQUFxRSxJQUFJLENBQUMsU0FBMUUsSUFBd0YsRUFBRSxDQUFDLFNBQUgsQ0FBYSxXQUFiLE1BQThCLElBQUksQ0FBQyxTQUFMLENBQWUsV0FBZixFQUExSCxFQUF5SjtBQUVySixzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLG1CQUFkO0FBQW1DLHFCQUFPLEVBQUUsTUFBSSxrRkFBcUIsQ0FBQyx1QkFBMUIsR0FBaUQsb0NBQWpELEdBQXNGLEVBQUUsQ0FBQyxTQUF6RixHQUFrRyxjQUFsRyxHQUFpSCxFQUFFLENBQUMsT0FBcEgsR0FBMkgsdUJBQTNILEdBQW1KLEVBQUUsQ0FBQyxlQUF0SixHQUFxSztBQUFqTixhQUFyQixFQUE2TyxPQUE3TyxFQUFzUCxJQUF0UDtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsTUFBdkI7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CLElBQXBCLEVBSnFKLENBTXJKOztBQUVBLGNBQUUsQ0FBQyxzQkFBSCxHQUE0QjtBQUFFLGdCQUFFLEVBQUUsSUFBSSxDQUFDLEVBQVg7QUFBZSxtQkFBSyxFQUFFLElBQUksQ0FBQztBQUEzQixhQUE1QjtBQUdBLHNCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLHdCQUFVLEVBQUUsZUFBZDtBQUErQixxQkFBTyxFQUFFLE1BQUksa0ZBQXFCLENBQUMsdUJBQTFCLEdBQWlEO0FBQXpGLGFBQXJCLEVBQXFKLEtBQXJKLEVBQTRKLElBQTVKO0FBQ0EsY0FBRSxDQUFDLFNBQUgsQ0FBYSxJQUFiLENBQWtCO0FBQUUsZ0JBQUUsRUFBRSxJQUFJLENBQUMsRUFBWDtBQUFlLG1CQUFLLEVBQUUsSUFBSSxDQUFDO0FBQTNCLGFBQWxCLEVBWnFKLENBZXJKO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEscUJBQVMsR0FBRyxJQUFaO0FBRUg7O0FBaUJELGNBQUksSUFBSSxDQUFDLEdBQUwsSUFBWSw4RUFBYyxDQUFDLGtCQUEvQixFQUFtRDtBQUUvQyxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLGVBQWQ7QUFBK0IscUJBQU8sRUFBRTtBQUF4QyxhQUFyQixFQUFvRixNQUFwRixFQUE0RixJQUE1RjtBQUVBLGNBQUUsQ0FBQyxZQUFIO0FBRUEscUJBQVMsR0FBRyxJQUFaO0FBQ0g7O0FBT0QsY0FBSSxJQUFJLENBQUMsR0FBTCxJQUFZLDhFQUFjLENBQUMsZ0JBQS9CLEVBQWlEO0FBRTdDLHNCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLHdCQUFVLEVBQUUsZUFBZDtBQUErQixxQkFBTyxFQUFFO0FBQXhDLGFBQXJCLEVBQTBGLFFBQTFGLEVBQW9HLElBQXBHOztBQUVBLGdCQUFJLEVBQUUsQ0FBQyxlQUFQLEVBQXdCO0FBRXBCLGVBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFmLEdBQWlDLElBQWxDLENBQUQsQ0FBeUMsR0FBekMsQ0FBNkMsRUFBN0M7QUFFSCxhQVI0QyxDQVU3Qzs7O0FBRUEscUJBQVMsR0FBRyxJQUFaO0FBQ0g7O0FBSUQsY0FBSSxDQUFDLFNBQUwsRUFBZ0I7QUFFWixzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLGVBQWQ7QUFBK0IscUJBQU8sRUFBRSxNQUFJLGtGQUFxQixDQUFDLHVCQUExQixHQUFpRCxnQ0FBakQsR0FBa0YsRUFBRSxDQUFDLFNBQXJGLEdBQThGLGNBQTlGLEdBQTZHLEVBQUUsQ0FBQyxPQUFoSCxHQUF1SCx1QkFBdkgsR0FBK0ksRUFBRSxDQUFDLGVBQWxKLEdBQWlLO0FBQXpNLGFBQXJCLEVBQXFPLEtBQXJPO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixNQUF2QjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLE1BQVosRUFBb0IsSUFBcEI7QUFDSDtBQUdKLFNBeEtELEVBL0M2TixDQThON047QUFDQTs7QUFHQSxVQUFFLENBQUMsc0JBQUgsR0FBNEIsRUFBNUI7QUFFQSxjQUFNLENBQUMsR0FBUCxDQUFXLFVBQVgsRUFBdUIsYUFFbkI7QUFFSCxTQUpEO0FBUUEsY0FBTSxDQUFDLE1BQVAsQ0FBYyxlQUFkLEVBQStCLFVBQVUsUUFBVixFQUFvQixRQUFwQixFQUE0QjtBQUV2RCxvQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSxzQkFBVSxFQUFFLGVBQWQ7QUFBK0IsbUJBQU8sRUFBRSwwQkFBd0IsRUFBRSxDQUFDLFNBQTNCLEdBQW9DLGNBQXBDLEdBQW1ELEVBQUUsQ0FBQyxPQUF0RCxHQUE2RCx1QkFBN0QsR0FBcUYsRUFBRSxDQUFDLGVBQXhGLEdBQXVHO0FBQS9JLFdBQXJCLEVBQTJLLFFBQTNLO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLFFBQVosRUFMdUQsQ0FPdkQ7O0FBRUEsY0FBSSxRQUFKLEVBQWM7QUFDVjtBQUVBLHNCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLHdCQUFVLEVBQUUsaUJBQWQ7QUFBaUMscUJBQU8sRUFBRSwwQkFBd0IsRUFBRSxDQUFDLFNBQTNCLEdBQW9DLGNBQXBDLEdBQW1ELEVBQUUsQ0FBQyxPQUF0RCxHQUE2RCx1QkFBN0QsR0FBcUYsRUFBRSxDQUFDLGVBQXhGLEdBQXVHO0FBQWpKLGFBQXJCLEVBQTZLLE9BQTdLO0FBRUEsY0FBRSxDQUFDLFlBQUg7QUFFSCxXQVBELE1BT087QUFFSCxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLG1CQUFkO0FBQW1DLHFCQUFPLEVBQUUsMEJBQXdCLEVBQUUsQ0FBQyxTQUEzQixHQUFvQyxjQUFwQyxHQUFtRCxFQUFFLENBQUMsT0FBdEQsR0FBNkQsdUJBQTdELEdBQXFGLEVBQUUsQ0FBQyxlQUF4RixHQUF1RztBQUFuSixhQUFyQixFQUErSyxLQUEvSyxFQUZHLENBTUg7QUFHSDtBQUVKLFNBM0JEO0FBOEJBLGNBQU0sQ0FBQyxNQUFQLENBQWMsdUJBQWQsRUFBdUMsVUFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQTRCO0FBRy9ELG9CQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLHNCQUFVLEVBQUUsZUFBZDtBQUErQixtQkFBTyxFQUFFO0FBQXhDLFdBQXJCLEVBQWdHLFFBQWhHLEVBQTBHLElBQTFHOztBQUdBLGNBQUksUUFBUSxJQUFJLFFBQVosSUFBd0IsUUFBUSxJQUFJLElBQXhDLEVBQThDO0FBQUU7QUFHNUM7QUFFQTtBQUdBLGNBQUUsQ0FBQyxPQUFILEdBQWEsQ0FBQyxJQUFkO0FBRUEsbUJBQU8sQ0FBQyxHQUFSLENBQVksaURBQStDLEVBQUUsQ0FBQyxPQUFsRCxHQUF5RCxnQkFBekQsR0FBMEUsRUFBRSxDQUFDLFNBQTdFLEdBQXNGLGtCQUFsRyxFQUFzSCwyQkFBdEgsRUFWMEMsQ0FZMUM7O0FBSUEsY0FBRSxDQUFDLHNCQUFILEdBQTRCLEVBQTVCOztBQUVBLGdCQUFJLEVBQUUsQ0FBQyxlQUFQLEVBQXdCO0FBRXBCLHFCQUFPLENBQUMsR0FBUixDQUFZLGlEQUErQyxFQUFFLENBQUMsT0FBbEQsR0FBeUQsZ0JBQXpELEdBQTBFLEVBQUUsQ0FBQyxTQUE3RSxHQUFzRixnQ0FBdEYsR0FBdUgsRUFBRSxDQUFDLGVBQTFILEdBQXlJLEdBQXJKLEVBQTBKLDJCQUExSjtBQUdBLGVBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFmLEdBQWlDLElBQWxDLENBQUQsQ0FBeUMsR0FBekMsQ0FBNkMsRUFBN0M7QUFFSDtBQUVKO0FBRUosU0FuQ0QsRUExUTZOLENBZ1Q3Tjs7QUFDQSxjQUFNLENBQUMsTUFBUCxDQUFjLDhCQUFkLEVBQThDLFVBQVUsUUFBVixFQUFvQixRQUFwQixFQUE0QjtBQUd0RSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSx1REFBWixFQUFxRSwyQkFBckU7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWixFQUE0QyxXQUE1QztBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLEVBQUUsQ0FBQyxzQkFBZjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLFdBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksV0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFJQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4QyxXQUE5QztBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksRUFBRSxDQUFDLFdBQWY7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLEVBQUUsQ0FBQyxVQUFmOztBQUdBLGNBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxFQUF6QixFQUE2QjtBQUl6QixjQUFFLENBQUMsT0FBSCxHQUFhLFFBQVEsQ0FBQyxFQUF0QjtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLHlCQUF1QixFQUFFLENBQUMsT0FBMUIsR0FBaUMsZ0JBQWpDLEdBQWtELEVBQUUsQ0FBQyxTQUFyRCxHQUE4RCxpQkFBMUUsRUFBNkYsMkJBQTdGOztBQUtBLGdCQUFJLEVBQUUsQ0FBQyxlQUFQLEVBQXdCO0FBRXBCLHFCQUFPLENBQUMsR0FBUixDQUFZLHlCQUF1QixFQUFFLENBQUMsT0FBMUIsR0FBaUMsZ0JBQWpDLEdBQWtELEVBQUUsQ0FBQyxTQUFyRCxHQUE4RCxnQ0FBOUQsR0FBK0YsRUFBRSxDQUFDLGVBQWxHLEdBQWlILFdBQWpILEdBQTZILFFBQVEsQ0FBQyxFQUF0SSxHQUF3SSxpQkFBcEosRUFBdUssMEJBQXZLO0FBRUEsZUFBQyxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWYsR0FBaUMsSUFBbEMsQ0FBRCxDQUF5QyxHQUF6QyxDQUE2QyxRQUFRLENBQUMsRUFBdEQ7QUFFSDtBQUVKOztBQUlELGNBQUksRUFBRSxDQUFDLFFBQVAsRUFBaUI7QUFFYixnQkFBSSxFQUFFLENBQUMsUUFBSCxDQUFZLE1BQWhCLEVBQXdCO0FBRXBCLGtDQUFvQixDQUFDLGVBQXJCLENBQXFDLElBQXJDO0FBQ0g7QUFDSjtBQU1KLFNBN0RELEVBNkRHLElBN0RIOztBQW1FQSxVQUFFLENBQUMsUUFBSCxHQUFjO0FBRVYsY0FBSSxDQUFDLEtBQUssU0FBVixFQUFxQjtBQUNqQjtBQUNIOztBQUVELFlBQUUsQ0FBQyxhQUFILEdBQW1CLFNBQW5CO0FBQ0EsWUFBRSxDQUFDLGtCQUFILEdBQXdCLFNBQXhCOztBQUVBLGtCQUFRLEtBQUssU0FBTCxDQUFlLFdBQWYsRUFBUjtBQUVJLGlCQUFLLHNCQUFMO0FBQ0EsaUJBQUssY0FBTDtBQUVJLGdCQUFFLENBQUMsYUFBSCxHQUFtQixvQkFBbkI7QUFDQSxnQkFBRSxDQUFDLGtCQUFILEdBQXdCLG9CQUF4QjtBQUVBO0FBR0o7QUFDQTs7QUFDQSxpQkFBSyxZQUFMO0FBRUksZ0JBQUUsQ0FBQyxhQUFILEdBQW1CLDJDQUFuQjtBQUNBLGdCQUFFLENBQUMsa0JBQUgsR0FBd0IsZ0NBQXhCO0FBRUE7O0FBSUosaUJBQUssZUFBTDtBQUNBLGlCQUFLLFdBQUw7QUFDQSxpQkFBSyxPQUFMO0FBQ0ksZ0JBQUUsQ0FBQyxhQUFILEdBQW1CLHNDQUFuQjtBQUNBLGdCQUFFLENBQUMsa0JBQUgsR0FBd0IsdUJBQXhCO0FBRUE7QUFFSjs7QUFDQSxpQkFBSyxlQUFMO0FBQ0ksZ0JBQUUsQ0FBQyxhQUFILEdBQW1CLDJCQUFuQjtBQUNBLGdCQUFFLENBQUMsa0JBQUgsR0FBd0IsMkJBQXhCO0FBRUE7QUFFSjs7QUFDQSxpQkFBSyxjQUFMO0FBQ0ksZ0JBQUUsQ0FBQyxhQUFILEdBQW1CLDhCQUFuQjtBQUNBLGdCQUFFLENBQUMsa0JBQUgsR0FBd0IsOEJBQXhCO0FBRUE7O0FBRUo7QUFDSSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBMEMsS0FBSyxTQUEvQyxHQUF3RCxpQkFBcEUsRUFBdUYsV0FBdkY7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLHFCQUFPLENBQUMsR0FBUixDQUFZLDRDQUEwQyxLQUFLLFNBQS9DLEdBQXdELGlCQUFwRSxFQUF1RixXQUF2RjtBQUNBLHFCQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaO0FBQ0EscUJBQU8sQ0FBQyxHQUFSLENBQVksNENBQTBDLEtBQUssU0FBL0MsR0FBd0QsaUJBQXBFLEVBQXVGLFdBQXZGO0FBQ0EscUJBQU8sQ0FBQyxHQUFSLENBQVksOEJBQVo7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBMEMsS0FBSyxTQUEvQyxHQUF3RCxpQkFBcEUsRUFBdUYsV0FBdkY7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQXBEUjs7QUEyREEsY0FBSSxFQUFFLENBQUMsYUFBSCxJQUFvQixTQUF4QixFQUFtQztBQUUvQixnQkFBTSxZQUFZLEdBQUcsbUVBQWlFLEtBQUssU0FBdEUsR0FBK0UsaUJBQXBHO0FBRUEsbUJBQU8sQ0FBQyxHQUFSLENBQVksOEJBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxPQUFLLFlBQWpCLEVBQWlDLFdBQWpDO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksOEJBQVo7QUFFQSxzQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSx3QkFBVSxFQUFFLGVBQWQ7QUFBK0IscUJBQU8sRUFBRTtBQUF4QyxhQUFwQjtBQUVIOztBQUdELGNBQUksRUFBRSxDQUFDLGtCQUFILElBQXlCLFNBQTdCLEVBQXdDO0FBR3BDLGdCQUFNLFlBQVksR0FBRywyRUFBeUUsS0FBSyxTQUE5RSxHQUF1RixpQkFBNUc7QUFFQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLE9BQUssWUFBakIsRUFBaUMsV0FBakM7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSw4QkFBWjtBQUVBLHNCQUFVLENBQUMsUUFBWCxDQUFvQjtBQUFFLHdCQUFVLEVBQUUsZUFBZDtBQUErQixxQkFBTyxFQUFFO0FBQXhDLGFBQXBCO0FBRUg7O0FBR0QsY0FBSSxFQUFFLENBQUMsZUFBUCxFQUF3QjtBQUdwQixnQkFBSSxvQkFBb0IsR0FBRyxLQUFLLGVBQWhDLENBSG9CLENBRzZCOztBQUdqRCxnQkFBSSxvQkFBSixFQUEwQjtBQUV0QixnQkFBRSxDQUFDLGFBQUgsR0FBbUIsRUFBRSxDQUFDLGFBQUgsR0FBbUIsR0FBbkIsR0FBeUIsb0JBQTVDO0FBQ0g7QUFFSjtBQUVKLFNBNUdEOztBQStHQSxVQUFFLENBQUMsUUFBSCxHQUFjO0FBRVYsZ0JBQU0sQ0FBQyxVQUFQLENBQWtCLGtGQUFxQixDQUFDLHVCQUF4QyxFQUFpRTtBQUFFLGVBQUcsRUFBRSw4RUFBYyxDQUFDLGdCQUF0QjtBQUF3QyxzQkFBVSxFQUFFLHdCQUFwRDtBQUE4RSxxQkFBUyxFQUFFLEVBQUUsQ0FBQyxTQUE1RjtBQUF1RyxvQkFBUSxFQUFFLEVBQUUsQ0FBQztBQUFwSCxXQUFqRTtBQUdILFNBTEQsQ0FuZTZOLENBMGU3Tjs7O0FBRUEsVUFBRSxDQUFDLGlCQUFILEdBQXVCLFVBQVUsSUFBVixFQUFnQixLQUFoQixFQUF1QixLQUF2QixFQUE0QjtBQUUvQyxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFHQSxZQUFFLENBQUMsc0JBQUgsR0FBNEIsSUFBNUI7QUFHQSxZQUFFLENBQUMsT0FBSCxHQUFhLElBQUksQ0FBQyxFQUFsQjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLHlCQUF1QixFQUFFLENBQUMsT0FBMUIsR0FBaUMsZ0JBQWpDLEdBQWtELEVBQUUsQ0FBQyxTQUFyRCxHQUE4RCxrQkFBMUUsRUFBOEYsMkJBQTlGO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLElBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7QUFFSCxTQXRCRDs7QUEwQkEsVUFBRSxDQUFDLFlBQUgsR0FBa0I7QUFHZCxZQUFFLENBQUMsUUFBSCxHQUhjLENBTWQ7O0FBR0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksNERBQVosRUFBMEUsY0FBMUU7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxFQUFFLENBQUMsT0FBZjs7QUFFQSxjQUFJLEVBQUUsQ0FBQyxPQUFILEdBQWEsQ0FBakIsRUFBb0I7QUFDaEI7QUFFQSxjQUFFLENBQUMsb0JBQUgsQ0FBd0IsRUFBRSxDQUFDLE9BQTNCLEVBQW9DLElBQXBDLENBQXlDLEVBQUUsQ0FBQyw0QkFBNUMsRUFBMEUsRUFBRSxDQUFDLDBCQUE3RSxFQUhnQixDQU1oQjtBQUdILFdBVEQsTUFTTztBQUVILHNCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLHdCQUFVLEVBQUUsZUFBZDtBQUErQixxQkFBTyxFQUFFLGlDQUErQixFQUFFLENBQUMsU0FBbEMsR0FBMkMsY0FBM0MsR0FBMEQsRUFBRSxDQUFDLE9BQTdELEdBQW9FLHVCQUFwRSxHQUE0RixFQUFFLENBQUMsZUFBL0YsR0FBOEc7QUFBdEosYUFBckIsRUFBa0wsUUFBbEw7O0FBRUEsZ0JBQUksRUFBRSxDQUFDLGtCQUFQLEVBQTJCO0FBQ3ZCLGdCQUFFLENBQUMsc0JBQUgsR0FBNEI7QUFBRSxxQkFBSyxFQUFFLEVBQUUsQ0FBQztBQUFaLGVBQTVCO0FBRUg7O0FBQ0QsY0FBRSxDQUFDLE9BQUgsR0FBYSxJQUFiO0FBQ0g7QUFLSixTQW5DRDs7QUF1Q0EsVUFBRSxDQUFDLDRCQUFILEdBQWtDLFVBQVUsSUFBVixFQUFjO0FBRTVDLGlCQUFPLENBQUMsR0FBUixDQUFZLGlEQUFaLEVBQStELGNBQS9EO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksb0RBQVosRUFBa0UsOEJBQWxFO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksd0NBQVosRUFBc0QsMkJBQXREO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksSUFBWjs7QUFHQSxjQUFJLElBQUosRUFBVTtBQUVOLGdCQUFJLElBQUksQ0FBQyxZQUFULEVBQXVCO0FBRW5CLGdCQUFFLENBQUMsc0JBQUgsR0FBNEI7QUFBRSxrQkFBRSxFQUFFLElBQUksQ0FBQyxZQUFYO0FBQXlCLHFCQUFLLEVBQUUsSUFBSSxDQUFDO0FBQXJDLGVBQTVCO0FBRUg7O0FBRUQsZ0JBQUksSUFBSSxDQUFDLEtBQVQsRUFBZ0I7QUFFWixnQkFBRSxDQUFDLHNCQUFILEdBQTRCO0FBQUUsa0JBQUUsRUFBRSxJQUFJLENBQUMsS0FBWDtBQUFrQixxQkFBSyxFQUFFLElBQUksQ0FBQztBQUE5QixlQUE1QjtBQUVIO0FBSUosV0FoQkQsTUFnQk87QUFHSCxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLDRCQUFkO0FBQTRDLHFCQUFPLEVBQUU7QUFBckQsYUFBckIsRUFBNkYsS0FBN0Y7QUFDQSxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLDRCQUFkO0FBQTRDLHFCQUFPLEVBQUU7QUFBckQsYUFBckIsRUFBNkYsS0FBN0Y7QUFDQSxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLDRCQUFkO0FBQTRDLHFCQUFPLEVBQUU7QUFBckQsYUFBckIsRUFBNkYsS0FBN0Y7QUFDQSxzQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSx3QkFBVSxFQUFFLDRCQUFkO0FBQTRDLHFCQUFPLEVBQUU7QUFBckQsYUFBckIsRUFBNkYsS0FBN0Y7QUFHSDtBQUVKLFNBcENEOztBQXVDQSxVQUFFLENBQUMsMEJBQUgsR0FBZ0MsVUFBVSxLQUFWLEVBQWU7QUFFM0Msb0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsc0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxtQkFBTyxFQUFFO0FBQTFDLFdBQXBCO0FBQ0Esb0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsc0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxtQkFBTyxFQUFFLDZCQUExQztBQUF5RSx1QkFBVyxFQUFFO0FBQXRGLFdBQXBCO0FBRUgsU0FMRCxDQXBsQjZOLENBNGxCN047OztBQUNBLFVBQUUsQ0FBQyxjQUFILEdBQW9CLFVBQVUsV0FBVixFQUFxQjtBQUVyQyxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnRCw4QkFBaEQ7O0FBRUEsY0FBSTtBQUNBO0FBQ0EsY0FBRSxDQUFDLGtCQUFILEdBQXdCLFdBQXhCO0FBRUgsV0FKRCxDQUlFLE9BQU8sRUFBUCxFQUFXO0FBRVQsc0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsd0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxxQkFBTyxFQUFFO0FBQTFDLGFBQXJCLEVBQTJILEtBQTNIO0FBRUEsc0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsd0JBQVUsRUFBRSxlQUFkO0FBQStCLHFCQUFPLEVBQUUsNkRBQTJELFdBQTNELEdBQXNFO0FBQTlHLGFBQXBCO0FBRUg7O0FBRUQsWUFBRSxDQUFDLFFBQUg7QUFFQSxjQUFJLFdBQVcsS0FBSyxJQUFwQixFQUEwQixXQUFXLEdBQUcsRUFBZDs7QUFJMUIsY0FBSSxNQUFNLENBQUMsaUJBQVgsRUFBOEI7QUFDMUIsbUJBQU8sTUFBTSxDQUFDLDJCQUFQLENBQW1DLE9BQTFDO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsbUJBQU8sWUFBWSxFQUFuQjtBQUNIOztBQUlELG1CQUFTLFlBQVQsR0FBcUI7QUFFakIsa0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixJQUEzQjtBQUNBLGtCQUFNLENBQUMsMkJBQVAsR0FBcUMsRUFBRSxDQUFDLEtBQUgsRUFBckM7QUFHQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksb0NBQVosRUFBa0QsY0FBbEQ7QUFFQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLEVBQUUsQ0FBQyxhQUFmLEVBVmlCLENBY2pCOztBQUNBLG9CQUFRLENBQUM7QUFFTCxtQkFBSyxDQUFDO0FBQ0Ysc0JBQU0sRUFBRSxLQUROO0FBRUYsbUJBQUcsRUFBRSxFQUFFLENBQUM7QUFGTixlQUFELENBQUwsQ0FJRyxJQUpILENBSVEsMEJBSlIsRUFJb0Msd0JBSnBDO0FBTUgsYUFSTyxFQVFMLEdBUkssQ0FBUjtBQVdBLG1CQUFPLE1BQU0sQ0FBQywyQkFBUCxDQUFtQyxPQUExQzs7QUFHQSxxQkFBUywwQkFBVCxDQUFvQyxRQUFwQyxFQUE0QztBQUd4QyxnQkFBRSxDQUFDLFNBQUgsR0FBZSxFQUFmO0FBR0EsOERBQWdCLFFBQVEsQ0FBQyxJQUF6QixFQUVJLFVBQVUsSUFBVixFQUFjO0FBR1Ysb0JBQUksSUFBSSxDQUFDLFlBQVQsRUFBdUI7QUFFbkIsc0JBQUksSUFBSSxDQUFDLGVBQUwsQ0FBcUIsV0FBckIsR0FBbUMsT0FBbkMsQ0FBMkMsV0FBVyxDQUFDLFdBQVosRUFBM0MsSUFBd0UsQ0FBQyxDQUE3RSxFQUFnRjtBQUM1RSxzQkFBRSxDQUFDLFNBQUgsQ0FBYSxJQUFiLENBQWtCO0FBQUUsd0JBQUUsRUFBRSxJQUFJLENBQUMsWUFBWDtBQUF5QiwyQkFBSyxFQUFFLElBQUksQ0FBQztBQUFyQyxxQkFBbEI7QUFDSDtBQUNKOztBQUVELG9CQUFJLElBQUksQ0FBQyxLQUFULEVBQWdCO0FBRVosc0JBQUksSUFBSSxDQUFDLGNBQUwsQ0FBb0IsV0FBcEIsR0FBa0MsT0FBbEMsQ0FBMEMsV0FBVyxDQUFDLFdBQVosRUFBMUMsSUFBdUUsQ0FBQyxDQUE1RSxFQUErRTtBQUMzRSxzQkFBRSxDQUFDLFNBQUgsQ0FBYSxJQUFiLENBQWtCO0FBQUUsd0JBQUUsRUFBRSxJQUFJLENBQUMsS0FBWDtBQUFrQiwyQkFBSyxFQUFFLElBQUksQ0FBQztBQUE5QixxQkFBbEI7QUFDSDtBQUNKO0FBRUosZUFuQkw7O0FBd0JBLGtCQUFJLEVBQUUsQ0FBQyxTQUFILENBQWEsTUFBYixJQUF1QixDQUEzQixFQUE4QixDQUUxQjtBQUdBO0FBQ0E7QUFDQTtBQUVIOztBQUdELG9CQUFNLENBQUMsMkJBQVAsQ0FBbUMsT0FBbkMsQ0FBMkMsRUFBRSxDQUFDLFNBQTlDO0FBRUEsb0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVIOztBQUVELHFCQUFTLHdCQUFULENBQWtDLEtBQWxDLEVBQXVDO0FBRW5DLHdCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLDBCQUFVLEVBQUUsZUFBZDtBQUErQix1QkFBTyxFQUFFO0FBQXhDLGVBQXJCLEVBQTJGLEtBQTNGLEVBQWtHLElBQWxHO0FBQ0Esd0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsMEJBQVUsRUFBRSxlQUFkO0FBQStCLHVCQUFPLEVBQUUsMEJBQXhDO0FBQW9FLDJCQUFXLEVBQUU7QUFBakYsZUFBcEI7QUFFQSxvQkFBTSxDQUFDLDJCQUFQLENBQW1DLE1BQW5DLENBQTBDLEtBQTFDO0FBQ0Esb0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVIO0FBRUo7QUFFSixTQXZIRDs7QUE2SEEsVUFBRSxDQUFDLG9CQUFILEdBQTBCLFVBQVUsUUFBVixFQUFrQjtBQUd4QyxjQUFJLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUVuQixtQkFBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLGVBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLHdDQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksMEJBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLDBCQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVksMEJBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBLG1CQUFPLENBQUMsR0FBUixDQUFZLDBCQUFaO0FBRUEsc0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsd0JBQVUsRUFBRSxlQUFkO0FBQStCLHFCQUFPLEVBQUU7QUFBeEMsYUFBcEI7QUFDQSxtQkFBTyxJQUFQO0FBQ0g7O0FBRUQsY0FBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUdBLGNBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxrQkFBSCxHQUF3QixHQUF4QixHQUE4QixRQUEvQztBQUdBLGVBQUssQ0FBQztBQUNGLGtCQUFNLEVBQUUsS0FETjtBQUVGLGVBQUcsRUFBRTtBQUZILFdBQUQsQ0FBTCxDQUlHLElBSkgsQ0FJUSwwQkFKUixFQUlvQyx3QkFKcEMsV0FJb0Usd0JBSnBFO0FBTUEsaUJBQU8sUUFBUSxDQUFDLE9BQWhCOztBQUdBLG1CQUFTLDBCQUFULENBQW9DLFFBQXBDLEVBQTRDO0FBRXhDLG9CQUFRLENBQUMsT0FBVCxDQUFpQixRQUFRLENBQUMsSUFBMUI7QUFFQSxjQUFFLENBQUMsT0FBSCxHQUFhLElBQWI7QUFDSDs7QUFFRCxtQkFBUyx3QkFBVCxDQUFrQyxRQUFsQyxFQUEwQztBQUV0QyxtQkFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBMEMsUUFBMUMsR0FBa0QsU0FBOUQsRUFBeUUsV0FBekU7QUFFQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBRUEsc0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsd0JBQVUsRUFBRSxlQUFkO0FBQStCLHFCQUFPLEVBQUUscUJBQW1CLFFBQW5CLEdBQTJCO0FBQW5FLGFBQXBCO0FBRUEsb0JBQVEsQ0FBQyxNQUFULENBQWdCLFFBQWhCO0FBR0g7O0FBR0QsbUJBQVMsd0JBQVQsQ0FBa0MsUUFBbEMsRUFBMEM7QUFFdEMsbUJBQU8sQ0FBQyxHQUFSLENBQVksNkNBQTJDLFFBQTNDLEdBQW1ELFNBQS9ELEVBQTBFLDJCQUExRTtBQUVBLG1CQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFFQSxzQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSx3QkFBVSxFQUFFLGVBQWQ7QUFBK0IscUJBQU8sRUFBRSxxQkFBbUIsUUFBbkIsR0FBMkI7QUFBbkUsYUFBcEI7QUFFQSxvQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsUUFBaEI7QUFHSDtBQUVKLFNBdkVEOztBQTRFQSxVQUFFLENBQUMsbUJBQUgsR0FBeUIsVUFBVSxXQUFWLEVBQXVCLFNBQXZCLEVBQWdDO0FBQ3JELGNBQUksRUFBRSxDQUFDLFFBQVAsRUFBaUI7QUFDYixnQkFBSSxFQUFFLENBQUMsUUFBSCxDQUFZLFdBQVosQ0FBSixFQUE4QjtBQUMxQixxQkFBUSxFQUFFLENBQUMsUUFBSCxDQUFZLFdBQVosQ0FBRCxDQUEyQixRQUEzQixFQUFxQyxTQUFyQyxDQUFQO0FBQ0g7QUFDSjtBQUNKLFNBTkQ7QUFZSCxPQWx6QmdCLENBQWpCO0FBdXpCQSxhQUFPO0FBRUgsZ0JBQVEsRUFBRSxHQUZQO0FBR0gsbUJBQVcsRUFBRSw2Q0FIVjtBQUlILGtCQUFVLEVBQUUsVUFKVDtBQUtILG9CQUFZLEVBQUUsT0FMWDtBQU1ILGVBQU8sRUFBRSxTQU5OO0FBT0gsd0JBQWdCLEVBQUUsSUFQZjtBQVFILGFBQUssRUFBRTtBQUVILG9CQUFVLEVBQUUsR0FGVDtBQUlILG1CQUFTLEVBQUUsTUFKUjtBQU1ILHlCQUFlLEVBQUUsWUFOZDtBQU9ILHVCQUFhLEVBQUUsR0FQWjtBQVNILGtCQUFRLEVBQUUsR0FUUDtBQVdILHlCQUFlLEVBQUUsR0FYZDtBQWFILGlCQUFPLEVBQUUsR0FiTjtBQWdCSCxpQkFBTyxFQUFFLEdBaEJOO0FBaUJILHVCQUFhLEVBQUUsR0FqQlo7QUFtQkg7QUFDQSw0QkFBa0IsRUFBRSxJQXBCakI7QUFzQkgsOENBQW9DLEVBQUU7QUF0Qm5DLFNBUko7QUFpQ0gsWUFBSSxFQUFFO0FBQ0YsYUFBRyxFQUFFLGFBQVUsS0FBVixFQUE4QixFQUE5QixFQUFrQyxLQUFsQyxFQUF5QyxJQUF6QyxFQUE2QyxDQUlqRCxDQUxDO0FBUUYsY0FBSSxFQUNBLGNBQVUsS0FBVixFQUE4QixFQUE5QixFQUFrQyxLQUFsQyxFQUF5QyxJQUF6QyxFQUE2QztBQUd6QyxnQkFBSTtBQUNBLG1CQUFLLGtCQUFMLEdBQTBCLHNCQUExQjtBQUVILGFBSEQsQ0FHRSxPQUFPLENBQVAsRUFBVTtBQUNSLHdCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLDBCQUFVLEVBQUUsaUJBQWQ7QUFBaUMsdUJBQU8sRUFBRTtBQUExQyxlQUFyQixFQUE4RixLQUE5RixFQUFxRyxJQUFyRztBQUNBLHdCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLDBCQUFVLEVBQUUsaUJBQWQ7QUFBaUMsdUJBQU8sRUFBRSxLQUFLO0FBQS9DLGVBQXJCLEVBQWtGLEtBQWxGLEVBQXlGLElBQXpGO0FBRUg7QUFJSjtBQXZCSDtBQWpDSCxPQUFQO0FBZ0VILEtBMTNCOEQsQ0FBL0Q7QUE0M0JILEdBNWxDRDs7QUE4bENBLFNBQU87QUFJSCxXQUFPLEVBQUU7QUFKTixHQUFQO0FBVUgsQ0EzbUNvQyxFQUFyQzs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBRUEsSUFBTSxjQUFjLEdBQUc7QUFFbkIsU0FBTztBQUVILGVBQVcsRUFBRSxhQUZWO0FBR0gsMkJBQXVCLEVBQUUseUJBSHRCO0FBSUgsb0JBQWdCLEVBQUUsa0JBSmY7QUFLSCxtQkFBZSxFQUFFLGlCQUxkO0FBTUgsZ0JBQVksRUFBRSxjQU5YO0FBT0gsd0JBQW9CLEVBQUUsc0JBUG5CO0FBUUgsc0JBQWtCLEVBQUU7QUFSakIsR0FBUDtBQVlILENBZHNCLEVBQXZCOzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7Q0FHQTtBQUdBOztBQUdBLElBQU0sQ0FBQyxHQUFHLElBQUksSUFBSixFQUFWO0FBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxxQ0FBbUMsQ0FBQyxDQUFDLGtCQUFGLEVBQS9DO0FBR0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpREFBWjs7QUFFQSxJQUFJLGtDQUFrQyxHQUFHO0FBR3JDLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGtCQUFWLEVBQW9DO0FBRzlDLFdBQU8sQ0FBQyxHQUFSLENBQVksMERBQVo7QUFHQSxRQUFJLGdCQUFnQixHQUFHLHlEQUFnQixDQUFDLGdCQUFqQixDQUFrQywyQkFBbEMsRUFBK0Qsa0JBQS9ELENBQXZCLENBTjhDLENBUTlDOztBQUVBLG9CQUFnQixDQUFDLE1BQWpCLENBQXdCLENBQ3BCLGVBRG9CLEVBRXBCLFVBQVUsYUFBVixFQUF1QjtBQUVuQjtBQUVBLFVBQUksV0FBVyxHQUFHLENBQ2QsSUFEYyxFQUVkLFlBRmMsRUFHZCxXQUhjLEVBSWQsWUFKYyxFQUtkO0FBQ0EsZ0JBQVUsRUFBVixFQUFjLFVBQWQsRUFBMEIsU0FBMUIsRUFBcUMsVUFBckMsRUFBK0M7QUFHM0MsZUFBTyxDQUFDLEdBQVIsQ0FBWSw4REFBWjtBQUVBLFlBQUksT0FBTyxHQUFHO0FBRVY7QUFDQSxpQkFBTyxFQUFFLGlCQUFVLE1BQVYsRUFBZ0I7QUFFckI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLG1CQUFPLE1BQVAsQ0FScUIsQ0FTckI7QUFFQTtBQUNBO0FBRUgsV0FqQlM7QUFrQlYsc0JBQVksRUFBRSxzQkFBVSxTQUFWLEVBQW1CO0FBQzdCLG1CQUFPLENBQUMsS0FBUixDQUFjLDhEQUFkO0FBQ0EsbUJBQU8sRUFBRSxDQUFDLE1BQUgsQ0FBVSxTQUFWLENBQVA7QUFDSCxXQXJCUztBQXNCVixrQkFBUSxFQUFFLGtCQUFVLE1BQVYsRUFBZ0I7QUFDdEI7QUFDQSxtQkFBTyxNQUFQO0FBQ0gsV0F6QlM7QUEwQlYsdUJBQWEsRUFBRSx1QkFBVSxLQUFWLEVBQWU7QUFFMUIsbUJBQU8sQ0FBQyxLQUFSLENBQWMsK0RBQWQ7QUFFQSxzQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSx3QkFBVSxFQUFFLGVBQWQ7QUFBK0IscUJBQU8sRUFBRSwyQkFBeEM7QUFBcUUseUJBQVcsRUFBRTtBQUFsRixhQUFwQjtBQUVBLG1CQUFPLEVBQUUsQ0FBQyxNQUFILENBQVUsS0FBVixDQUFQO0FBQ0g7QUFqQ1MsU0FBZDtBQXFDQSxlQUFPLE9BQVA7QUFFSCxPQWxEYSxDQUFsQjtBQXFEQSxtQkFBYSxDQUFDLFlBQWQsQ0FBMkIsSUFBM0IsQ0FBZ0MsV0FBaEM7QUFFSCxLQTdEbUIsQ0FBeEI7QUFpRUgsR0EzRUQ7O0FBNkVBLFNBQU87QUFDSCxXQUFPLEVBQUU7QUFETixHQUFQO0FBSUgsQ0FwRndDLEVBQXpDOztBQXdGZSxpR0FBZixFOzs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUFBO0NBR0E7QUFFQTtBQUVBOztBQUlBLElBQUksdUJBQXVCLEdBQUc7QUFFMUI7QUFDQTtBQUNBLE1BQUksZ0JBQWdCLEdBQUcseURBQWdCLENBQUMsZ0JBQWpCLENBQWtDLGdCQUFsQyxFQUFvRCxpQkFBcEQsRUFBdUUsQ0FBQyxTQUFELENBQXZFLENBQXZCLENBSjBCLENBUTFCOztBQUVBLE1BQUksU0FBUyxHQUFHLFNBQVosU0FBWTtBQUdaO0FBQ0Esb0JBQWdCLENBQUMsTUFBakIsQ0FBd0IsQ0FBQyxnQkFBRCxFQUFtQixtQkFBbkIsRUFBd0MsVUFBVSxjQUFWLEVBQTBCLGlCQUExQixFQUEyQztBQUV2RyxvQkFBYyxDQUFDLElBQWYsQ0FBb0IsR0FBcEIsRUFBeUI7QUFDckIsa0JBQVUsRUFBRSw2QkFEUztBQUVyQixtQkFBVyxFQUFFO0FBRlEsT0FBekIsRUFGdUcsQ0FPdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQWlCLENBQUMsU0FBbEIsQ0FBNEI7QUFBRSxlQUFPLEVBQUUsSUFBWDtBQUFpQixvQkFBWSxFQUFFO0FBQS9CLE9BQTVCLEVBQW9FLFVBQXBFLENBQStFLEdBQS9FO0FBSUgsS0E3QnVCLENBQXhCLEVBSlksQ0FvQ1o7QUFNSCxHQTFDRCxDQVYwQixDQXlEMUI7QUFFQTs7O0FBRUEsTUFBSSxTQUFTLEdBQUcsU0FBWixTQUFZO0FBRVosV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWjtBQUVBLG9CQUFnQixDQUFDLE1BQWpCLENBQXdCLFVBQVUsY0FBVixFQUF3QjtBQUM1QyxvQkFBYyxDQUNULElBREwsQ0FDVSxxQkFEVixFQUNpQztBQUN6QjtBQUNBLGVBQU8sRUFBRTtBQUNMO0FBQ0Esa0JBQVEsY0FBVSxXQUFWLEVBQXFCO0FBQ3pCLG1CQUFPLFdBQVcsQ0FBQyxZQUFaLEVBQVA7QUFDSDtBQUpJO0FBRmdCLE9BRGpDO0FBVUgsS0FYRCxFQVdHLEdBWEgsQ0FXTyxVQUFVLFVBQVYsRUFBc0IsU0FBdEIsRUFBK0I7QUFDbEM7QUFDQSxnQkFBVSxDQUFDLEdBQVgsQ0FBZSxtQkFBZixFQUFvQyxVQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsUUFBMUIsRUFBb0MsU0FBcEMsRUFBNkM7QUFHN0UsWUFBSSxTQUFTLEtBQUssbUJBQWxCLEVBQXVDO0FBQ25DLG1CQUFTLENBQUMsSUFBVixDQUFlLEdBQWY7QUFDSDtBQUNKLE9BTkQsRUFGa0MsQ0FVbEM7O0FBRUEsZ0JBQVUsQ0FBQyxHQUFYLENBQWUsbUJBQWYsRUFBb0MsVUFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXVCLE9BQXZCLEVBQThCO0FBRTlEO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxvRUFBWjtBQUVILE9BTEQ7QUFRSCxLQS9CRCxFQStCRyxPQS9CSCxDQStCVyxhQS9CWCxFQStCMEIsVUFBVSxFQUFWLEVBQVk7QUFDbEMsYUFBTztBQUNILG9CQUFZLEVBQUU7QUFHVjtBQUNBO0FBQ0EsY0FBSSxLQUFKLEVBQVcsRUFBWCxNQUdPO0FBQ0g7QUFDQSxtQkFBTyxFQUFFLENBQUMsTUFBSCxDQUFVLG1CQUFWLENBQVA7QUFDSDtBQUNKO0FBYkUsT0FBUDtBQWVILEtBL0NEO0FBaURILEdBckREOztBQXlEQSxNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVU7QUFFVixhQUFTO0FBQ1QsYUFBUztBQUNaLEdBSkQ7O0FBU0EsU0FBTztBQUNILFdBQU8sRUFBRTtBQUROLEdBQVA7QUFLSCxDQXBJNkIsRUFBOUI7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBRU8sSUFBTSxxQkFBcUIsR0FBRztBQUVqQyx5QkFBdUIsRUFBQztBQUZTLENBQTlCLEM7Ozs7Ozs7Ozs7OztBQ0ZQO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBR0EsSUFBTSxjQUFjLEdBQUc7QUFJbkIsTUFBTSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsVUFBVixFQUFzQixpQkFBdEIsRUFBdUM7QUFFbkQsUUFBTSxZQUFZLEdBQUcsMERBQTZCLGdCQUE3QixDQUE4QyxtQkFBbUIsS0FBbkIsR0FBMkIsVUFBekUsRUFBcUYsaUJBQXJGLENBQXJCO0FBTUEsZ0JBQVksQ0FBQyxVQUFiLENBQXdCLDBCQUF4QixFQUFvRCxDQUFDLFFBQUQsRUFBVyxZQUFYLEVBQXlCLFdBQXpCLEVBRWhELFVBQVUsTUFBVixFQUFrQixVQUFsQixFQUE4QixTQUE5QixFQUF1QztBQUluQztBQUlBLFlBQU0sQ0FBQyxjQUFQLEdBQXdCLFVBQVUsS0FBVixFQUFpQixtQkFBakIsRUFBbUM7QUFHdkQsa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFO0FBQTFDLFNBQXJCLEVBQTJGLFFBQTNGLEVBQXFHLElBQXJHO0FBQ0Esa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFLFlBQVUsS0FBVixHQUFlO0FBQXpELFNBQXJCLEVBQXFGLFFBQXJGLEVBQStGLElBQS9GO0FBQ0Esa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFLHlCQUF1QixtQkFBdkIsR0FBeUM7QUFBbkYsU0FBckIsRUFBK0csUUFBL0csRUFBeUgsSUFBekg7QUFHQSxpQkFBUyxDQUFDLElBQVYsQ0FBZTtBQUNYLHFCQUFXLEVBQUUsOENBREY7QUFFWCxvQkFBVSxFQUFFLG9CQUZEO0FBSVgsa0JBQVEsRUFBRSxRQUpDO0FBS1gsa0JBQVEsRUFBRSxLQUxDO0FBUVgsaUJBQU8sRUFBRTtBQUNMLGlCQUFLLEVBQUU7QUFDSCxxQkFBTyxLQUFQO0FBQ0gsYUFISTtBQUlMLDhCQUFrQixFQUFFO0FBQ2hCLHFCQUFPLG1CQUFQO0FBQ0g7QUFOSTtBQVJFLFNBQWY7QUFtQkgsT0EzQkQsQ0FSbUMsQ0F3Q25DOzs7QUFHQSxZQUFNLENBQUMsZ0JBQVAsR0FBMEIsVUFBVSxvQkFBVixFQUE0QjtBQUdsRCxrQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSxvQkFBVSxFQUFFLGlCQUFkO0FBQWlDLGlCQUFPLEVBQUU7QUFBMUMsU0FBckIsRUFBOEYsUUFBOUYsRUFBd0csSUFBeEc7QUFDQSxrQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSxvQkFBVSxFQUFFLGlCQUFkO0FBQWlDLGlCQUFPLEVBQUUseUJBQXVCLG9CQUF2QixHQUF5QztBQUFuRixTQUFyQixFQUErRyxRQUEvRyxFQUF5SCxJQUF6SDtBQUdBLGlCQUFTLENBQUMsSUFBVixDQUFlO0FBQ1gscUJBQVcsRUFBRSxzQ0FERjtBQUVYLG9CQUFVLEVBQUUsc0JBRkQ7QUFJWCxrQkFBUSxFQUFFLFFBSkM7QUFLWCxrQkFBUSxFQUFFLEtBTEM7QUFRWCxpQkFBTyxFQUFFO0FBRUwsOEJBQWtCLEVBQUU7QUFDaEIscUJBQU8sb0JBQVA7QUFDSDtBQUpJO0FBUkUsU0FBZjtBQWlCSCxPQXhCRDtBQTJCSCxLQXhFK0MsQ0FBcEQ7QUEyRUgsR0FuRkQ7O0FBdUZBLFNBQU87QUFDSCxXQUFPLEVBQUU7QUFETixHQUFQO0FBS0gsQ0FoR3NCLEVBQXZCOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFYTs7QUFLYjtBQUtBO0FBRUE7QUFDQTtBQUdBLGtGQUFnQixDQUFDLE9BQWpCLENBQXlCLG9CQUF6Qjs7QUFHQSxJQUFJLDJCQUEyQixHQUFHO0FBTTlCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGlCQUFWLEVBQTJCO0FBSXJDLFFBQUksVUFBVSxHQUFHLDBEQUF5QixnQkFBekIsQ0FBMEMsb0JBQTFDLEVBQWdFLGlCQUFoRSxDQUFqQjtBQU1BLGNBQVUsQ0FBQyxVQUFYLENBQXNCLG9CQUF0QixFQUE0QyxDQUFDLElBQUQsRUFBTyxtQkFBUCxFQUE0QixZQUE1QixFQUEwQyxRQUExQyxFQUFvRCxhQUFwRCxFQUFtRSxzQkFBbkUsRUFBMkYsWUFBM0YsRUFBeUcsT0FBekcsRUFBa0gsb0JBQWxILEVBQXdJLDBCQUF4SSxDQUE1Qzs7QUFHQSxhQUFTLDBCQUFULENBQW9DLEVBQXBDLEVBQXdDLGlCQUF4QyxFQUEyRCxVQUEzRCxFQUF1RSxNQUF2RSxFQUErRSxXQUEvRSxFQUE0RixvQkFBNUYsRUFBa0gsVUFBbEgsRUFBNkksS0FBN0ksRUFBb0osa0JBQXBKLEVBQXNLO0FBR2xLLFlBQU0sQ0FBQyxZQUFQLEdBQXNCLGtCQUF0QjtBQUVBLHdGQUFnQixDQUFDLFFBQWpCLENBQTBCLHlCQUExQixFQUFxRDtBQUFFLGtCQUFVLEVBQUUsZUFBZDtBQUErQixlQUFPLEVBQUU7QUFBeEMsT0FBckQ7QUFFQSwwQkFBb0IsQ0FBQyxZQUFyQjtBQUVBLFlBQU0sQ0FBQyxTQUFQLEdBQW1CLGVBQW5CO0FBRUEsWUFBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBRUEsWUFBTSxDQUFDLGtCQUFQLEdBQTRCLEVBQTVCO0FBQ0EsWUFBTSxDQUFDLDJCQUFQLEdBQXFDLEVBQXJDOztBQUVBLFlBQU0sQ0FBQywwQkFBUCxHQUFvQztBQUVoQyxnQkFBUSxNQUFNLENBQUMsMkJBQWY7QUFDSSxlQUFLLENBQUw7QUFDSSxtQkFBTyw0QkFBUDs7QUFDSixlQUFLLENBQUw7QUFDSSxtQkFBTywyQkFBUDs7QUFDSjtBQUNJLG1CQUFPLEVBQVA7QUFOUjtBQVNILE9BWEQ7O0FBY0EsaUJBQVcsQ0FBQyxNQUFaLENBQW1CLEtBQW5CLEVBQTBCLElBQTFCLENBQStCLGFBQS9CLEVBQThDLFdBQTlDLFdBQWlFLFdBQWpFOztBQUdBLGVBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEyQjtBQUd2QixZQUFJLE1BQUo7QUFFQSxjQUFNLEdBQUc7QUFDTCxlQUFLLEVBQUUsSUFBSSxDQUFDLEtBRFA7QUFFTCxhQUFHLEVBQUU7QUFDRCxvQkFBUSxFQUFFLElBQUksQ0FBQyxRQURkO0FBR0QsbUJBQU8sRUFBRTtBQUNMLDBCQUFZLEVBQUUsSUFBSSxDQUFDLE9BQUwsQ0FBYTtBQUR0QjtBQUhSLFdBRkE7QUFTTCxrQkFBUSxFQUFFLE1BQU0sQ0FBQztBQVRaLFNBQVQ7QUFhQSxjQUFNLENBQUMsb0JBQVAsR0FBOEIsTUFBOUI7QUFHSDs7QUFLRCxlQUFTLFdBQVQsQ0FBcUIsR0FBckIsRUFBd0I7QUFFcEIsZUFBTyxDQUFDLEtBQVIsQ0FBYyxxREFBZDtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksR0FBWjtBQUVBLGNBQU0sQ0FBQyxLQUFQLENBQWEsMENBQWI7QUFFQSxrQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSxvQkFBVSxFQUFFLGVBQWQ7QUFBK0IsaUJBQU8sRUFBRSx5REFBeEM7QUFBbUcscUJBQVcsRUFBRTtBQUFoSCxTQUFwQjtBQUVIOztBQUVELGVBQVMsV0FBVCxDQUFxQixHQUFyQixFQUF3QjtBQUVwQixlQUFPLENBQUMsS0FBUixDQUFjLHFEQUFkO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaO0FBRUEsY0FBTSxDQUFDLEtBQVAsQ0FBYSwwQ0FBYjtBQUVBLGtCQUFVLENBQUMsUUFBWCxDQUFvQjtBQUFFLG9CQUFVLEVBQUUscUJBQWQ7QUFBcUMsaUJBQU8sRUFBRSx3REFBOUM7QUFBd0cscUJBQVcsRUFBRTtBQUFySCxTQUFwQjtBQUVIOztBQUtELFlBQU0sQ0FBQyxVQUFQLEdBQW9CO0FBR2hCLFlBQUksTUFBTSxDQUFDLGlCQUFYLEVBQThCO0FBRTlCLGNBQU0sQ0FBQyxpQkFBUCxHQUEyQixJQUEzQjtBQUdBLGNBQU0sQ0FBQyxvQkFBUCxDQUE0QixRQUE1QixHQUF1QyxNQUFNLENBQUMsWUFBOUM7O0FBRUEsWUFBSSxNQUFNLENBQUMsb0JBQVAsQ0FBNEIsUUFBNUIsSUFBd0MsR0FBNUMsRUFBaUQ7QUFFN0MsZ0JBQU0sQ0FBQyxLQUFQLENBQWEsMENBQWI7QUFFQSxnQkFBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBRUEsb0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsc0JBQVUsRUFBRSxlQUFkO0FBQStCLG1CQUFPLEVBQUU7QUFBeEMsV0FBcEI7QUFFQTtBQUVIOztBQUdELFlBQUksT0FBTyxHQUFHLElBQWQ7O0FBRUEsWUFBSTtBQUVBLGlCQUFPLEdBQUcsV0FBVyxDQUFDLHVCQUFaLENBQW9DLE1BQU0sQ0FBQyxvQkFBM0MsQ0FBVjs7QUFHQSxjQUFJLE9BQUosRUFBYTtBQUVULG1CQUFPLENBQUMsSUFBUixDQUNJLFVBQVUsSUFBVixFQUFjO0FBSVYsd0JBQVUsQ0FBQyxVQUFYLENBQXNCLGtGQUFxQixDQUFDLHVCQUE1QyxFQUFxRTtBQUFFLG1CQUFHLEVBQUUsMkZBQWMsQ0FBQyxvQkFBdEI7QUFBNEMseUJBQVMsRUFBRSxZQUF2RDtBQUFxRSxrQkFBRSxFQUFFLElBQUksQ0FBQyxVQUE5RTtBQUEwRiwyQkFBVyxFQUFFLElBQUksQ0FBQztBQUE1RyxlQUFyRTtBQUlBLCtCQUFpQixDQUFDLEtBQWxCO0FBRUEsb0JBQU0sQ0FBQyxJQUFQLENBQVksa0JBQVo7QUFHSCxhQWRMLEVBZUksVUFBVSxLQUFWLEVBQWU7QUFFWCxvQkFBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBRUEscUJBQU8sQ0FBQyxLQUFSLENBQWMsc0RBQWQ7QUFDQSxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsb0JBQU0sQ0FBQyxLQUFQLENBQWEsMENBQWI7QUFHQSxvQkFBTSxDQUFDLDJCQUFQLEdBQXFDLENBQXJDO0FBQ0Esb0JBQU0sQ0FBQyxrQkFBUCxHQUE0QixLQUFLLENBQUMsSUFBbEM7QUFFQSx3QkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSwwQkFBVSxFQUFFLGVBQWQ7QUFBK0IsdUJBQU8sRUFBRSxrQkFBeEM7QUFBNEQsMkJBQVcsRUFBRTtBQUF6RSxlQUFwQjtBQUVILGFBOUJMO0FBK0JIO0FBRUosU0F4Q0QsQ0F3Q0UsT0FBTyxLQUFQLEVBQWM7QUFHWixvQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSxzQkFBVSxFQUFFLGVBQWQ7QUFBK0IsbUJBQU8sRUFBRSxrQkFBeEM7QUFBNEQsdUJBQVcsRUFBRTtBQUF6RSxXQUFwQjtBQUVBLGdCQUFNLENBQUMsS0FBUCxDQUFhLDBDQUFiO0FBRUg7QUFFSixPQTFFRDs7QUE4RUEsWUFBTSxDQUFDLFVBQVAsR0FBb0I7QUFHaEIsWUFBSSxvQkFBb0IsQ0FBQyxjQUFyQixFQUFKLEVBQTJDO0FBQ3ZDLGNBQUksQ0FBQyxPQUFPLENBQUMsNERBQUQsQ0FBWixFQUE0RTtBQUMvRTs7QUFHRCx5QkFBaUIsQ0FBQyxPQUFsQjtBQUVILE9BVkQ7QUFlSDs7QUF1QkQsY0FBVSxDQUFDLFNBQVgsQ0FBcUIscUJBQXJCLEVBQTRDLENBQUMsSUFBRCxFQUFPLFlBQVAsRUFBcUIsVUFBVSxFQUFWLEVBQWMsVUFBZCxFQUF1QztBQUVwRyxhQUFPO0FBQ0gsZUFBTyxFQUFFLFNBRE47QUFHSCxZQUFJLEVBQUUsY0FBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLFlBQTdCLEVBQXlDO0FBSTNDLHNCQUFZLENBQUMsUUFBYixDQUFzQixPQUF0QixDQUE4QixVQUFVLEtBQVYsRUFBZTtBQUV6QyxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpRCwwQkFBakQ7QUFHQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSw4REFBWixFQUE0RSwyQkFBNUU7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxZQUFaO0FBSUEsZ0JBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFELENBQXZCO0FBRUEsbUJBQU8sQ0FBQyxHQUFSLENBQVkscUNBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVkscUNBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVkscUNBQVo7QUFDQSxtQkFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0EsbUJBQU8sQ0FBQyxHQUFSLENBQVkscUNBQVo7QUFHQSx3QkFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBSSxDQUFDLElBQS9CLEVBQXFDLEtBQXJDO0FBR0EsbUJBQU8sS0FBUDtBQUNILFdBekJEOztBQTZCQSxzQkFBWSxDQUFDLGdCQUFiLENBQThCLGlCQUE5QixHQUFrRCxVQUFVLFVBQVYsRUFBc0IsU0FBdEIsRUFBK0I7QUFHN0U7QUFFQSxnQkFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZixDQUw2RSxDQU83RTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLG9CQUFRLENBQUMsT0FBVDtBQUVBLG1CQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILFdBbEJEO0FBb0JIO0FBeERFLE9BQVA7QUEwREgsS0E1RDJDLENBQTVDO0FBK0RILEdBcFJEOztBQXdSQSxTQUFPO0FBRUgsV0FBTyxFQUFFO0FBRk4sR0FBUDtBQVFILENBdFNpQyxFQUFsQzs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFjQSxJQUFJLGtCQUFrQixHQUFHO0FBRXJCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGNBQVYsRUFBd0I7QUFHbEM7QUFDQSxRQUFJLGlDQUFpQyxHQUFHLHlEQUFnQixDQUFDLGdCQUFqQixDQUFrQyxvQkFBbEMsRUFBd0QsY0FBeEQsQ0FBeEM7QUFNQSxxQ0FBaUMsQ0FBQyxTQUFsQyxDQUE0QyxvQkFBNUMsRUFBa0UsQ0FBQyxXQUFELEVBQWMsc0JBQWQsRUFBc0MsVUFBVSxTQUFWLEVBQXFCLG9CQUFyQixFQUF5QztBQUc3SSxhQUFPO0FBRUgsZ0JBQVEsRUFBRSxHQUZQO0FBR0gsbUJBQVcsRUFBRSx5REFIVjtBQUtIO0FBQ0E7QUFFQSxrQkFBVSxFQUFFLENBQUMsUUFBRCxFQUFXLFVBQVUsTUFBVixFQUFnQjtBQUduQztBQUNBO0FBRUEsZ0JBQU0sQ0FBQyxrQkFBUCxHQUE0QixVQUFVLFVBQVYsRUFBcUIsWUFBckIsRUFBcUQ7QUFHN0UsZ0JBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFFM0IseUJBQVcsRUFBRSw4Q0FGYztBQUczQix3QkFBVSxFQUFFLHlCQUhlO0FBTTNCLHNCQUFRLEVBQUUsUUFOaUI7QUFPM0Isc0JBQVEsRUFBRSxLQVBpQjtBQVUzQixxQkFBTyxFQUFFO0FBQ0wseUJBQVMsRUFBRTtBQUNQLHlCQUFPLFVBQVA7QUFDSCxpQkFISTtBQUlMLDJCQUFXLEVBQUU7QUFDVCx5QkFBTyxZQUFQO0FBQ0g7QUFOSTtBQVZrQixhQUFmLENBQWhCO0FBdUJBLHFCQUFTLENBQUMsTUFBVixDQUFpQixJQUFqQixDQUFzQixjQUF0QixFQUFzQyxnQkFBdEM7O0FBRUEscUJBQVMsY0FBVCxDQUF3QixNQUF4QixFQUE4QjtBQUUxQixrQ0FBb0IsQ0FBQyxLQUFyQjtBQUVIOztBQUlELHFCQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWdDO0FBRTVCLGtDQUFvQixDQUFDLEtBQXJCO0FBQ0g7QUFHSixXQTFDRCxDQU5tQyxDQXdEbkM7QUFDQTs7O0FBRUEsZ0JBQU0sQ0FBQyxzQkFBUCxHQUFnQyxVQUFVLFdBQVYsRUFBcUIsYUFBckIsRUFBcUQ7QUFHakY7QUFFQTtBQUNBO0FBQ0E7QUFHQSxnQkFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQVYsQ0FBZTtBQUMvQix5QkFBVyxFQUFFLDhDQURrQjtBQUUvQix3QkFBVSxFQUFFLDZCQUZtQjtBQUcvQix5QkFBVyxFQUFFLGtCQUhrQjtBQUsvQixzQkFBUSxFQUFFLFFBTHFCO0FBTS9CLHNCQUFRLEVBQUUsS0FOcUI7QUFTL0IscUJBQU8sRUFBRTtBQUNMLHlCQUFTLEVBQUU7QUFDUCx5QkFBTyxXQUFQO0FBQ0gsaUJBSEk7QUFJTCwyQkFBVyxFQUFFO0FBQ1QseUJBQU8sYUFBUDtBQUNIO0FBTkk7QUFUc0IsYUFBZixDQUFwQixDQVZpRixDQWdDakY7O0FBRUEseUJBQWEsQ0FBQyxNQUFkLENBQXFCLElBQXJCLENBQTBCLGtCQUExQixFQUE4QyxvQkFBOUM7O0FBRUEscUJBQVMsa0JBQVQsQ0FBNEIsTUFBNUIsRUFBa0M7QUFFOUIsa0NBQW9CLENBQUMsS0FBckI7QUFFSDs7QUFJRCxxQkFBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFvQztBQUVoQyxrQ0FBb0IsQ0FBQyxLQUFyQjtBQUVIO0FBR0osV0FuREQsQ0EzRG1DLENBc0huQztBQUVBO0FBQ0E7OztBQUdBLGdCQUFNLENBQUMsMkJBQVAsR0FBcUMsVUFBVSxXQUFWLEVBQXFCLGFBQXJCLEVBQXFEO0FBSXRGO0FBRUE7QUFFQSxnQkFBSSxpQ0FBaUMsR0FBRyxTQUFTLENBQUMsSUFBVixDQUFlO0FBRW5EO0FBQ0EseUJBQVcsRUFBRSxpREFIc0M7QUFJbkQsd0JBQVUsRUFBRSw2QkFKdUM7QUFLbkQ7QUFFQSxzQkFBUSxFQUFFLFFBUHlDO0FBUW5ELHNCQUFRLEVBQUUsS0FSeUM7QUFVbkQscUJBQU8sRUFBRTtBQUNMLHlCQUFTLEVBQUU7QUFDUCx5QkFBTyxXQUFQO0FBQ0gsaUJBSEk7QUFJTCwyQkFBVyxFQUFFO0FBQ1QseUJBQU8sYUFBUDtBQUNIO0FBTkk7QUFWMEMsYUFBZixDQUF4QyxDQVJzRixDQWdDdEY7O0FBR0EsNkNBQWlDLENBQUMsTUFBbEMsQ0FBeUMsSUFBekMsQ0FBOEMsc0NBQTlDLEVBQXNGLHdDQUF0Rjs7QUFDQSxxQkFBUyxzQ0FBVCxDQUFnRCxNQUFoRCxFQUFzRDtBQUVsRCxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxnRkFBWixFQUE4Riw2QkFBOUY7QUFHQSxrQ0FBb0IsQ0FBQyxLQUFyQjtBQUVIOztBQUVELHFCQUFTLHdDQUFULENBQWtELE1BQWxELEVBQXdEO0FBRXBELHFCQUFPLENBQUMsR0FBUixDQUFZLGtGQUFaLEVBQWdHLDZCQUFoRztBQUdBLGtDQUFvQixDQUFDLEtBQXJCO0FBRUg7QUFHSixXQXZERCxDQTVIbUMsQ0FpTW5DO0FBR0E7QUFDQTtBQUdBO0FBRUE7OztBQUVBLGdCQUFNLENBQUMsdUJBQVAsR0FBaUMsVUFBVSxZQUFWLEVBQXVCO0FBSXBELGdCQUFNLHlCQUF5QixHQUFJLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFDOUMseUJBQVcsRUFBRSxnREFEaUM7QUFFOUMsd0JBQVUsRUFBRSxxQkFGa0M7QUFNOUM7QUFDQTtBQUVBLHNCQUFRLEVBQUUsUUFUb0M7QUFVOUMsc0JBQVEsRUFBRSxLQVZvQztBQWE5QyxxQkFBTyxFQUFFO0FBQ0wsNkJBQWEsRUFBRTtBQUNYLHlCQUFPLFlBQVA7QUFDSDtBQUhJO0FBYnFDLGFBQWYsQ0FBbkMsQ0FKb0QsQ0E2QnBEOztBQUdBLHFDQUF5QixDQUFDLE1BQTFCLENBQWlDLElBQWpDLENBQXNDLDhCQUF0QyxFQUFzRSxnQ0FBdEU7O0FBRUEscUJBQVMsOEJBQVQsQ0FBd0MsTUFBeEMsRUFBOEM7QUFFMUMscUJBQU8sQ0FBQyxHQUFSLENBQVksa0VBQVosRUFBZ0YsNkJBQWhGO0FBR0Esa0NBQW9CLENBQUMsS0FBckI7QUFFSDs7QUFFRCxxQkFBUyxnQ0FBVCxDQUEwQyxNQUExQyxFQUFnRDtBQUU1QyxxQkFBTyxDQUFDLEdBQVIsQ0FBWSxvRUFBWixFQUFrRiwwQkFBbEY7QUFHQSxrQ0FBb0IsQ0FBQyxLQUFyQjtBQUVIO0FBT0osV0F6REQ7O0FBaUVBLGdCQUFNLENBQUMsZ0NBQVAsR0FBMEMsVUFBVSxNQUFWLEVBQWU7QUFHckQsZ0JBQUksS0FBSyxDQUFDLE1BQUQsQ0FBVCxFQUFrQjtBQUNkLG9CQUFLLEdBQUcsQ0FBUjtBQUNIOztBQUdELGdCQUFNLCtCQUErQixHQUFJLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFFcEQseUJBQVcsRUFBRSxnREFGdUM7QUFHcEQsd0JBQVUsRUFBRSwyQkFId0M7QUFLcEQsc0JBQVEsRUFBRSxRQUwwQztBQU1wRCxzQkFBUSxFQUFFLEtBTjBDO0FBUXBELHFCQUFPLEVBQUU7QUFDTCxxQkFBSyxFQUFFO0FBQ0gseUJBQU8sTUFBUDtBQUNIO0FBSEk7QUFSMkMsYUFBZixDQUF6QyxDQVJxRCxDQTBCckQ7O0FBR0EsMkNBQStCLENBQUMsTUFBaEMsQ0FBdUMsSUFBdkMsQ0FBNEMsb0NBQTVDLEVBQWtGLHNDQUFsRjs7QUFFQSxxQkFBUyxvQ0FBVCxDQUE4QyxNQUE5QyxFQUFvRDtBQUVoRCxxQkFBTyxDQUFDLEdBQVIsQ0FBWSx3RUFBWixFQUFzRiw2QkFBdEY7QUFHQSxrQ0FBb0IsQ0FBQyxLQUFyQjtBQUVIOztBQUVELHFCQUFTLHNDQUFULENBQWdELE1BQWhELEVBQXNEO0FBRWxELHFCQUFPLENBQUMsR0FBUixDQUFZLDBFQUFaLEVBQXdGLDBCQUF4RjtBQUdBLGtDQUFvQixDQUFDLEtBQXJCO0FBRUg7QUFhSixXQTVERDtBQXFGSCxTQWxXVyxDQVJUO0FBNFdILGFBQUssRUFBRTtBQUVILG1CQUFTLEVBQUUsR0FGUjtBQUdILHNCQUFZLEVBQUUsR0FIWDtBQUlILHFCQUFXLEVBQUUsR0FKVjtBQUtILGVBQUssRUFBRTtBQUxKLFNBNVdKO0FBcVhILFlBQUksRUFBRSxjQUFVLEtBQVYsRUFBK0IsRUFBL0IsRUFBbUMsS0FBbkMsRUFBd0M7QUFFMUMsY0FBSSxjQUFjLEdBQUcsS0FBSyxDQUFDLFNBQU4sSUFBbUIsS0FBSyxDQUFDLFlBQU4sS0FBdUIsU0FBL0Q7QUFFQSxlQUFLLENBQUMsa0JBQU4sR0FBMkIsY0FBM0I7QUFFQSxlQUFLLENBQUMsNEJBQU4sR0FBcUMsQ0FBQyxjQUFELEdBQWtCLFVBQWxCLEdBQStCLFdBQXBFO0FBRUg7QUE3WEUsT0FBUDtBQWlZSCxLQXBZaUUsQ0FBbEU7QUF1WUgsR0FqWkQ7O0FBbVpBLFNBQU87QUFFSCxXQUFPLEVBQUU7QUFGTixHQUFQO0FBTUgsQ0EzWndCLEVBQXpCOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUdBLElBQUkscUJBQXFCLEdBQUc7QUFJeEI7QUFDQTtBQUlBLE1BQUksWUFBWSxHQUFHLDBEQUE2QixnQkFBN0IsQ0FBOEMsdUJBQTlDLEVBQXVFLGNBQXZFLENBQW5CLENBVHdCLENBYXhCO0FBR0E7QUFDQTs7QUFFQSxjQUFZLENBQUMsVUFBYixDQUF3QixxQkFBeEIsRUFBK0MsQ0FBQyxRQUFELEVBQVcsV0FBWCxFQUF3QixzQkFBeEIsRUFBZ0QsVUFBaEQsRUFBMkQsWUFBM0QsRUFBMEUsVUFBVSxNQUFWLEVBQWtCLFNBQWxCLEVBQTZCLG9CQUE3QixFQUFtRCxRQUFuRCxFQUE2RCxVQUE3RCxFQUF1RTtBQUc1TDtBQUVBLFVBQU0sQ0FBQyxHQUFQLENBQVcsdUJBQVgsRUFBb0MsVUFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXFCO0FBRXJELE9BQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFaLENBQUQsQ0FBc0IsTUFBdEI7QUFFQSxPQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBWixDQUFELENBQXNCLFdBQXRCLENBQWtDLElBQUksQ0FBQyxJQUF2QztBQUVBLGNBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBWixDQUFELENBQXNCLFFBQXRCLEVBQUQsQ0FBUixDQUEyQyxNQUEzQztBQUVBLDRCQUFzQixDQUFDLElBQUQsQ0FBdEI7QUFHSCxLQVhEO0FBY0EsVUFBTSxDQUFDLEdBQVAsQ0FBVyxzQkFBWCxFQUFtQyxVQUFVLEtBQVYsRUFBaUIsSUFBakIsRUFBcUI7QUFFcEQsT0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEIsT0FBNUIsQ0FBb0MsSUFBSSxDQUFDLElBQXpDO0FBR0EsY0FBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFaLENBQUQsQ0FBc0IsUUFBdEIsRUFBRCxDQUFSLENBQTJDLE1BQTNDO0FBR0EsY0FBUSxDQUFDLGFBQVQsQ0FBdUIsc0JBQXZCLEVBQStDLGNBQS9DLENBQThEO0FBQzFELGdCQUFRLEVBQUU7QUFEZ0QsT0FBOUQ7QUFLQSw0QkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBR0gsS0FoQkQ7O0FBb0JBLGFBQVMsc0JBQVQsQ0FBZ0MsSUFBaEMsRUFBb0M7QUFHaEM7QUFDQSxVQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBcEI7QUFDQSxVQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTCxDQUFhLFNBQWIsQ0FBdUIsQ0FBdkIsRUFBMEIsSUFBSSxDQUFDLE9BQUwsQ0FBYSxNQUFiLEdBQXNCLENBQWhELElBQXFELEdBQXBFO0FBRUEsT0FBQyxDQUFDLE1BQU0sTUFBUCxDQUFELENBQWdCLFFBQWhCLENBQXlCLGVBQXpCO0FBQ0EsT0FBQyxDQUFDLE1BQU0sTUFBUCxDQUFELENBQWdCLFFBQWhCLENBQXlCLGVBQXpCO0FBRUg7O0FBR0QsVUFBTSxDQUFDLHNCQUFQLEdBQWdDLFVBQVUsVUFBVixFQUFtQjtBQUcvQztBQUVBO0FBQ0E7QUFDQTtBQUdBLFVBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFDL0IsbUJBQVcsRUFBRSw4Q0FEa0I7QUFFL0Isa0JBQVUsRUFBRSw2QkFGbUI7QUFHL0IsbUJBQVcsRUFBRSxrQkFIa0I7QUFLL0IsZ0JBQVEsRUFBRSxRQUxxQjtBQU0vQixnQkFBUSxFQUFFLEtBTnFCO0FBUy9CLGVBQU8sRUFBRTtBQUNMLG1CQUFTLEVBQUU7QUFDUCxtQkFBTyxVQUFQO0FBQ0g7QUFISTtBQVRzQixPQUFmLENBQXBCLENBVitDLENBNEIvQzs7QUFFQSxtQkFBYSxDQUFDLE1BQWQsQ0FBcUIsSUFBckIsQ0FBMEIsa0JBQTFCLEVBQThDLG9CQUE5Qzs7QUFFQSxlQUFTLGtCQUFULENBQTRCLE1BQTVCLEVBQWtDO0FBRzlCLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsZUFBZDtBQUErQixpQkFBTyxFQUFFO0FBQXhDLFNBQXJCLEVBQXdGLEtBQXhGLEVBQStGLElBQS9GO0FBSUEsNEJBQW9CLENBQUMsS0FBckI7QUFDSDs7QUFJRCxlQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQW9DO0FBRWhDLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsZUFBZDtBQUErQixpQkFBTyxFQUFFO0FBQXhDLFNBQXJCLEVBQXVGLFFBQXZGLEVBQWlHLElBQWpHO0FBRUEsNEJBQW9CLENBQUMsS0FBckI7QUFDSDtBQUlKLEtBckRELENBcEQ0TCxDQTRHNUw7OztBQUdBLFVBQU0sQ0FBQywyQkFBUCxHQUFxQyxVQUFVLFdBQVYsRUFBbUI7QUFJcEQ7QUFFQTtBQUVBLFVBQUksaUNBQWlDLEdBQUcsU0FBUyxDQUFDLElBQVYsQ0FBZTtBQUVuRCxpQkFBUyxFQUFFLGFBRndDO0FBR25ELG1CQUFXLEVBQUUsdURBQXVELE1BQU0sQ0FBQyxxQkFIeEI7QUFJbkQsa0JBQVUsRUFBRSw2QkFKdUM7QUFLbkQsbUJBQVcsRUFBRSxrQkFMc0M7QUFPbkQsZ0JBQVEsRUFBRSxRQVB5QztBQVFuRCxnQkFBUSxFQUFFLEtBUnlDO0FBVW5ELGVBQU8sRUFBRTtBQUNMLG1CQUFTLEVBQUU7QUFDUCxtQkFBTyxXQUFQO0FBQ0g7QUFISTtBQVYwQyxPQUFmLENBQXhDO0FBbUJBLHNCQUFnQixDQUFDLE1BQUQsQ0FBaEIsQ0EzQm9ELENBNkJwRDs7QUFHQSx1Q0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxJQUF6QyxDQUE4QyxzQ0FBOUMsRUFBc0Ysd0NBQXRGOztBQUVBLGVBQVMsc0NBQVQsQ0FBZ0QsTUFBaEQsRUFBc0Q7QUFFbEQsa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFO0FBQTFDLFNBQXJCLEVBQTJGLFFBQTNGLEVBQXFHLElBQXJHO0FBQ0Esa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFO0FBQTFDLFNBQXJCLEVBQXlFLFFBQXpFLEVBQW1GLElBQW5GO0FBRUEsNEJBQW9CLENBQUMsS0FBckI7QUFFSDs7QUFFRCxlQUFTLHdDQUFULENBQWtELE1BQWxELEVBQXdEO0FBRXBELGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsZUFBZDtBQUErQixpQkFBTyxFQUFFO0FBQXhDLFNBQXJCLEVBQTJGLFFBQTNGLEVBQXFHLElBQXJHO0FBQ0Esa0JBQVUsQ0FBQyxTQUFYLENBQXFCO0FBQUUsb0JBQVUsRUFBRSxpQkFBZDtBQUFpQyxpQkFBTyxFQUFFO0FBQTFDLFNBQXJCLEVBQXlFLFFBQXpFLEVBQW1GLElBQW5GO0FBQ0EsNEJBQW9CLENBQUMsS0FBckI7QUFFSDtBQUdKLEtBcERELENBL0c0TCxDQXNLNUw7QUFDQTs7O0FBRUEsYUFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFnQztBQUc1QixZQUFNLENBQUMsR0FBUCxDQUFXLGVBQVgsRUFBNEIsVUFBVSxLQUFWLEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQStCO0FBRXZELGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsaUJBQWQ7QUFBaUMsaUJBQU8sRUFBRTtBQUExQyxTQUFyQixFQUF1RixRQUF2RixFQUFpRyxJQUFqRztBQUNBLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsaUJBQWQ7QUFBaUMsaUJBQU8sRUFBRTtBQUExQyxTQUFyQixFQUF5RSxRQUF6RSxFQUFtRixJQUFuRjtBQUNBLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsaUJBQWQ7QUFBaUMsaUJBQU8sRUFBRTtBQUExQyxTQUFyQixFQUF5RSxRQUF6RSxFQUFtRixJQUFuRjtBQUVBLFlBQUksT0FBTyxHQUFHLHNFQUFkOztBQUVBLGdCQUFRLE1BQVI7QUFDSTtBQUNBLGVBQUssZ0JBQUw7QUFDSSxtQkFBTyxHQUFHLHlDQUFWO0FBQ0E7QUFFSjs7QUFDQSxlQUFLLFFBQUw7QUFDSSxtQkFBTyxHQUFHLHlDQUFWO0FBQ0E7QUFFSjs7QUFDQSxlQUFLLGtCQUFMO0FBQ0ksbUJBQU8sR0FBRyx5Q0FBVjtBQUNBO0FBZFI7O0FBZ0JBLFlBQUksQ0FBQyxPQUFPLENBQUMsT0FBRCxDQUFaLEVBQXVCO0FBQ25CLGVBQUssQ0FBQyxjQUFOO0FBQ0g7QUFDSixPQTNCRDtBQThCSCxLQTFNMkwsQ0E2TTVMO0FBRUE7OztBQUVBLFVBQU0sQ0FBQyx1QkFBUCxHQUFpQyxVQUFVLFlBQVYsRUFBdUI7QUFHcEQsVUFBSSxLQUFLLENBQUMsWUFBRCxDQUFULEVBQTBCO0FBQ3RCLG9CQUFhLEdBQUcsQ0FBaEI7QUFDSCxPQUxtRCxDQU9wRDtBQUVBOzs7QUFDQSxVQUFNLDZCQUE2QixHQUFJLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFFbEQsbUJBQVcsRUFBRSxnREFGcUM7QUFHbEQsa0JBQVUsRUFBRSxxQkFIc0M7QUFLbEQsZ0JBQVEsRUFBRSxRQUx3QztBQU1sRCxnQkFBUSxFQUFFLEtBTndDO0FBUWxELGVBQU8sRUFBRTtBQUNMLHVCQUFhLEVBQUU7QUFDWCxtQkFBTyxZQUFQO0FBQ0g7QUFISTtBQVJ5QyxPQUFmLENBQXZDO0FBZ0JBLG1DQUE2QixDQUFDLE1BQTlCLENBQXFDLElBQXJDLENBQTBDLGtDQUExQyxFQUE4RSxvQ0FBOUU7O0FBRUEsZUFBUyxrQ0FBVCxDQUE0QyxNQUE1QyxFQUFrRDtBQUU5QyxrQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSxvQkFBVSxFQUFFLGVBQWQ7QUFBK0IsaUJBQU8sRUFBRTtBQUF4QyxTQUFyQixFQUErRixRQUEvRixFQUF5RyxJQUF6RztBQUVBLDRCQUFvQixDQUFDLEtBQXJCO0FBRUg7O0FBRUQsZUFBUyxvQ0FBVCxDQUE4QyxNQUE5QyxFQUFvRDtBQUVoRCxrQkFBVSxDQUFDLFNBQVgsQ0FBcUI7QUFBRSxvQkFBVSxFQUFFLGVBQWQ7QUFBK0IsaUJBQU8sRUFBRTtBQUF4QyxTQUFyQixFQUErRixLQUEvRixFQUFzRyxJQUF0RztBQUVBLDRCQUFvQixDQUFDLEtBQXJCO0FBRUg7QUFLSixLQS9DRCxDQWpONEwsQ0FzUTVMOzs7QUFHQSxVQUFNLENBQUMsa0JBQVAsR0FBNEIsVUFBVSxXQUFWLEVBQW1CO0FBRzNDLFVBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFWLENBQWU7QUFFM0IsbUJBQVcsRUFBRSw4Q0FGYztBQUczQixrQkFBVSxFQUFFLHlCQUhlO0FBTTNCLGdCQUFRLEVBQUUsUUFOaUI7QUFPM0IsZ0JBQVEsRUFBRSxLQVBpQjtBQVUzQixlQUFPLEVBQUU7QUFDTCxtQkFBUyxFQUFFO0FBQ1AsbUJBQU8sV0FBUDtBQUNIO0FBSEk7QUFWa0IsT0FBZixDQUFoQjtBQW1CQSxlQUFTLENBQUMsTUFBVixDQUFpQixJQUFqQixDQUFzQixjQUF0QixFQUFzQyxnQkFBdEM7O0FBRUEsZUFBUyxjQUFULENBQXdCLE1BQXhCLEVBQThCO0FBSTFCLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsZUFBZDtBQUErQixpQkFBTyxFQUFFO0FBQXhDLFNBQXJCLEVBQStGLFFBQS9GLEVBQXlHLElBQXpHO0FBRUEsNEJBQW9CLENBQUMsS0FBckI7QUFFSDs7QUFJRCxlQUFTLGdCQUFULENBQTBCLE1BQTFCLEVBQWdDO0FBRTVCLGtCQUFVLENBQUMsU0FBWCxDQUFxQjtBQUFFLG9CQUFVLEVBQUUsZUFBZDtBQUErQixpQkFBTyxFQUFFO0FBQXhDLFNBQXJCLEVBQStGLEtBQS9GLEVBQXNHLElBQXRHO0FBQ0EsNEJBQW9CLENBQUMsS0FBckI7QUFDSDtBQUlKLEtBNUNEO0FBZ0RILEdBelQ4QyxDQUEvQztBQWtWQSxTQUFPO0FBQ0gsZ0JBQVksRUFBRTtBQURYLEdBQVA7QUFLSCxDQTFXMkIsRUFBNUIsQyxDQThXQTs7Ozs7Ozs7Ozs7Ozs7O0FDblhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBR0E7QUFLQTs7QUFNQSxJQUFJLDRCQUE0QixHQUFHO0FBRS9CLE1BQUksWUFBWSxHQUFHLDBEQUF5QixnQkFBekIsQ0FBMEMscUJBQTFDLEVBQWlFLGNBQWpFLENBQW5CO0FBR0EsY0FBWSxDQUFDLFVBQWIsQ0FBd0IscUJBQXhCLEVBQStDLENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsbUJBQXhCLEVBQTZDLE9BQTdDLEVBQXNELElBQXRELEVBQTRELGFBQTVELEVBQTJFLHNCQUEzRSxFQUFtRyxZQUFuRyxFQUFpSCxlQUFqSCxFQUczQyxVQUFVLFNBQVYsRUFBcUIsTUFBckIsRUFBNkIsaUJBQTdCLEVBQWdELEtBQWhELEVBQXVELEVBQXZELEVBQTJELFdBQTNELEVBQXdFLG9CQUF4RSxFQUE4RixVQUE5RixFQUF5SCxhQUF6SCxFQUFzSTtBQUVsSSx3QkFBb0IsQ0FBQyxZQUFyQixHQUZrSSxDQU1sSTtBQUNBOztBQUNBLFVBQU0sQ0FBQyxTQUFQLEdBQW1CLGlCQUFuQjtBQUVBLFVBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUdBLFVBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFVBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQzs7QUFFQSxVQUFNLENBQUMsMEJBQVAsR0FBb0M7QUFFaEMsY0FBUSxNQUFNLENBQUMsMkJBQWY7QUFDSSxhQUFLLENBQUw7QUFDSSxpQkFBTyw0QkFBUDs7QUFDSixhQUFLLENBQUw7QUFDSSxpQkFBTywyQkFBUDs7QUFDSjtBQUNJLGlCQUFPLEVBQVA7QUFOUjtBQVNILEtBWEQ7O0FBZUEsZUFBVyxDQUFDLFVBQVosQ0FBdUIsYUFBdkIsRUFBc0MsSUFBdEMsQ0FBMkMsaUJBQTNDLEVBQThELGVBQTlELFdBQXFGLGVBQXJGOztBQUdBLGFBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBK0I7QUFFM0IsMERBQW1CLFlBQW5CLENBQWdDLElBQWhDO0FBRUEsWUFBTSxDQUFDLGVBQVAsR0FBeUIsSUFBekI7QUFFQSxVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosRUFBZDtBQUNBLGFBQU8sQ0FBQyxlQUFSLENBQXdCLENBQXhCO0FBQ0EsWUFBTSxDQUFDLGVBQVAsQ0FBdUIsU0FBdkIsR0FBbUMsQ0FBbkM7QUFDQSxZQUFNLENBQUMsZUFBUCxDQUF1QixTQUF2QixHQUFtQyxPQUFuQztBQUNBLFlBQU0sQ0FBQyxlQUFQLENBQXVCLFlBQXZCLEdBQXNDLElBQXRDO0FBR0g7O0FBR0QsYUFBUyxlQUFULENBQXlCLEdBQXpCLEVBQTRCO0FBRXhCLGFBQU8sQ0FBQyxLQUFSLENBQWMsdURBQWQ7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7QUFFQSxnQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSxrQkFBVSxFQUFFLG1CQUFkO0FBQW1DLGVBQU8sRUFBRSxnQ0FBNUM7QUFBOEUsbUJBQVcsRUFBRTtBQUEzRixPQUFwQjtBQUNIOztBQUdELGFBQVMsZUFBVCxDQUF5QixHQUF6QixFQUE0QjtBQUV4QixhQUFPLENBQUMsS0FBUixDQUFjLHVEQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaO0FBRUEsZ0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsa0JBQVUsRUFBRSxtQkFBZDtBQUFtQyxlQUFPLEVBQUUsZ0NBQTVDO0FBQThFLG1CQUFXLEVBQUU7QUFBM0YsT0FBcEI7QUFFSDs7QUFPRCxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUdoQixVQUFJLE1BQU0sQ0FBQyxpQkFBWCxFQUE4QjtBQUU5QixZQUFNLENBQUMsaUJBQVAsR0FBMkIsSUFBM0I7QUFHQSxVQUFJLE9BQU8sR0FBRyxJQUFkOztBQUdBLFVBQUksTUFBTSxDQUFDLGVBQVAsQ0FBdUIsRUFBdkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0g7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFFVCxlQUFPLENBQUMsSUFBUixDQUNJLFVBQVUsSUFBVixFQUFjO0FBRVYsMkJBQWlCLENBQUMsS0FBbEI7QUFFQSxnQkFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaO0FBR0gsU0FSTCxFQVNJLFVBQVUsS0FBVixFQUFlO0FBRVgsZ0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVBLGlCQUFPLENBQUMsS0FBUixDQUFjLHVEQUFkO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUVBLGdCQUFNLENBQUMsS0FBUCxDQUFhLDBDQUFiLEVBUFcsQ0FVWDtBQUNBOztBQUVBLGdCQUFNLENBQUMsMkJBQVAsR0FBcUMsQ0FBckM7QUFDQSxnQkFBTSxDQUFDLGtCQUFQLEdBQTRCLEtBQUssQ0FBQyxJQUFsQztBQUdILFNBMUJMO0FBMkJIO0FBR0osS0FsREQ7O0FBc0RBLFVBQU0sQ0FBQyxVQUFQLEdBQW9CO0FBR2hCLFVBQUksb0JBQW9CLENBQUMsY0FBckIsRUFBSixFQUEyQztBQUN2QyxZQUFJLENBQUMsT0FBTyxDQUFDLDREQUFELENBQVosRUFBNEU7QUFDL0U7O0FBR0QsdUJBQWlCLENBQUMsT0FBbEIsR0FSZ0IsQ0FRYTtBQUVoQyxLQVZELENBL0hrSSxDQThJbEk7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BOztBQUtILEdBeEwwQyxDQUEvQztBQTBMQSxTQUFPO0FBQ0gsZ0JBQVksRUFBRTtBQURYLEdBQVA7QUFJSCxDQW5Na0MsRUFBbkM7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTs7QUFXQSxJQUFJLGtDQUFrQyxHQUFHO0FBRXJDLE1BQUksWUFBWSxHQUFHLDBEQUF5QixnQkFBekIsQ0FBMEMsMkJBQTFDLEVBQXVFLGNBQXZFLENBQW5CO0FBR0EsY0FBWSxDQUFDLFVBQWIsQ0FBd0IsMkJBQXhCLEVBQXFELENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsbUJBQXhCLEVBQTZDLE9BQTdDLEVBQXNELElBQXRELEVBQTRELGFBQTVELEVBQTJFLHNCQUEzRSxFQUFtRyxZQUFuRyxFQUFpSCxPQUFqSCxFQUdqRCxVQUFVLFNBQVYsRUFBcUIsTUFBckIsRUFBNkIsaUJBQTdCLEVBQWdELEtBQWhELEVBQXVELEVBQXZELEVBQTJELFdBQTNELEVBQXdFLG9CQUF4RSxFQUE4RixVQUE5RixFQUF5SCxLQUF6SCxFQUE4SDtBQUUxSCx3QkFBb0IsQ0FBQyxZQUFyQjtBQUVBLFVBQU0sQ0FBQyxTQUFQLEdBQW1CLGVBQW5CO0FBRUEsVUFBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBR0EsVUFBTSxDQUFDLGtCQUFQLEdBQTRCLEVBQTVCO0FBQ0EsVUFBTSxDQUFDLDJCQUFQLEdBQXFDLEVBQXJDOztBQUVBLFVBQU0sQ0FBQywwQkFBUCxHQUFvQztBQUVoQyxjQUFRLE1BQU0sQ0FBQywyQkFBZjtBQUNJLGFBQUssQ0FBTDtBQUNJLGlCQUFPLDRCQUFQOztBQUNKLGFBQUssQ0FBTDtBQUNJLGlCQUFPLDJCQUFQOztBQUNKO0FBQ0ksaUJBQU8sRUFBUDtBQU5SO0FBU0gsS0FYRDs7QUFlQSxlQUFXLENBQUMsTUFBWixDQUFtQixLQUFuQixFQUEwQixJQUExQixDQUErQixhQUEvQixFQUE4QyxXQUE5QyxXQUFpRSxXQUFqRTs7QUFHQSxhQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMkI7QUFHdkIsYUFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBRUEsVUFBTSxPQUFPLEdBQWU7QUFDeEIsYUFBSyxFQUFFLElBQUksQ0FBQyxLQURZO0FBRXhCLFdBQUcsRUFBRTtBQUNELGtCQUFRLEVBQUUsSUFBSSxDQUFDLFFBRGQ7QUFFRCxpQkFBTyxFQUFFO0FBQ0wsd0JBQVksRUFBRSxJQUFJLENBQUMsT0FBTCxDQUFhO0FBRHRCO0FBRlI7QUFGbUIsT0FBNUIsQ0FMdUIsQ0FnQnZCOztBQUVBLFlBQU0sQ0FBQyxlQUFQLEdBQXlCLE9BQXpCO0FBR0EsVUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFKLEVBQWQ7QUFDQSxhQUFPLENBQUMsZUFBUixDQUF3QixDQUF4QjtBQUVBLFlBQU0sQ0FBQyxlQUFQLENBQXVCLFNBQXZCLEdBQW1DLE9BQW5DO0FBSUg7O0FBR0QsYUFBUyxXQUFULENBQXFCLEdBQXJCLEVBQXdCO0FBRXBCLGFBQU8sQ0FBQyxLQUFSLENBQWMsNkRBQWQ7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLEdBQVo7QUFFQSxnQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSxrQkFBVSxFQUFFLG1CQUFkO0FBQW1DLGVBQU8sRUFBRSwyQkFBNUM7QUFBeUUsbUJBQVcsRUFBRTtBQUF0RixPQUFwQjtBQUNIOztBQUdELGFBQVMsV0FBVCxDQUFxQixHQUFyQixFQUF3QjtBQUVwQixhQUFPLENBQUMsS0FBUixDQUFjLDZEQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxHQUFaO0FBRUEsZ0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsa0JBQVUsRUFBRSxtQkFBZDtBQUFtQyxlQUFPLEVBQUUsMkJBQTVDO0FBQXlFLG1CQUFXLEVBQUU7QUFBdEYsT0FBcEI7QUFFSDs7QUFPRCxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUdoQixVQUFJLE1BQU0sQ0FBQyxpQkFBWCxFQUE4QjtBQUU5QixZQUFNLENBQUMsaUJBQVAsR0FBMkIsSUFBM0I7QUFHQSxVQUFJLE9BQU8sR0FBRyxJQUFkOztBQUdBLFVBQUksTUFBTSxDQUFDLGVBQVAsQ0FBdUIsRUFBdkIsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDakMsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0g7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFFVCxlQUFPLENBQUMsSUFBUixDQUNJLFVBQVUsSUFBVixFQUFjO0FBRVYsMkJBQWlCLENBQUMsS0FBbEI7QUFFQSxnQkFBTSxDQUFDLElBQVAsQ0FBWSxZQUFaO0FBR0gsU0FSTCxFQVNJLFVBQVUsS0FBVixFQUFlO0FBRVgsZ0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVBLGlCQUFPLENBQUMsS0FBUixDQUFjLHVEQUFkO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUVBLGdCQUFNLENBQUMsS0FBUCxDQUFhLDBDQUFiO0FBR0EsZ0JBQU0sQ0FBQywyQkFBUCxHQUFxQyxDQUFyQztBQUNBLGdCQUFNLENBQUMsa0JBQVAsR0FBNEIsS0FBSyxDQUFDLElBQWxDO0FBR0gsU0F2Qkw7QUF3Qkg7QUFHSixLQS9DRDs7QUFtREEsVUFBTSxDQUFDLFVBQVAsR0FBb0I7QUFHaEIsVUFBSSxvQkFBb0IsQ0FBQyxjQUFyQixFQUFKLEVBQTJDO0FBQ3ZDLFlBQUksQ0FBQyxPQUFPLENBQUMsNERBQUQsQ0FBWixFQUE0RTtBQUMvRTs7QUFHRCx1QkFBaUIsQ0FBQyxPQUFsQixHQVJnQixDQVFhO0FBRWhDLEtBVkQ7QUFlSCxHQXpKZ0QsQ0FBckQ7QUE0SkEsU0FBTztBQUNILGdCQUFZLEVBQUU7QUFEWCxHQUFQO0FBTUgsQ0F2S3dDLEVBQXpDOzs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBOztBQUlBLElBQUksZ0NBQWdDLEdBQUc7QUFJbkMsTUFBSSxZQUFZLEdBQUcsMERBQTZCLGdCQUE3QixDQUE4Qyx5QkFBOUMsRUFBeUUsY0FBekUsQ0FBbkIsQ0FKbUMsQ0FPbkM7O0FBRUEsY0FBWSxDQUFDLFVBQWIsQ0FBd0IseUJBQXhCLEVBQW1ELENBQUMsV0FBRCxFQUFjLFFBQWQsRUFBd0IsbUJBQXhCLEVBQTZDLE9BQTdDLEVBQXNELElBQXRELEVBQTRELGFBQTVELEVBQTJFLHNCQUEzRSxFQUFtRyxpQ0FBbkcsRUFBc0ksV0FBdEksRUFBbUosVUFBbkosRUFBK0osWUFBL0osRUFBNkssWUFBN0ssRUFBMkwsYUFBM0wsRUFFL0MsVUFBVSxTQUFWLEVBQXFCLE1BQXJCLEVBQTZCLGlCQUE3QixFQUFnRCxLQUFoRCxFQUF1RCxFQUF2RCxFQUEyRCxXQUEzRCxFQUF3RSxvQkFBeEUsRUFBOEYsK0JBQTlGLEVBQStILFNBQS9ILEVBQTBJLFFBQTFJLEVBQW9KLFVBQXBKLEVBQWdLLFVBQWhLLEVBQTJMLFdBQTNMLEVBQXVPO0FBR25PLFlBQVEsQ0FBQztBQUNMLDBCQUFvQixDQUFDLFlBQXJCO0FBQ0EsMERBQW1CLFdBQW5CO0FBQ0gsS0FITyxFQUdMLEdBSEssQ0FBUjtBQUtBLFVBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVBLGVBQVcsQ0FBQyxVQUFaLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDLENBQXVDLGlCQUF2QyxFQUEwRCxlQUExRCxXQUNXLGVBRFg7QUFJQSxVQUFNLENBQUMsU0FBUCxHQUFtQixXQUFXLFdBQVgsR0FBeUIsVUFBNUM7QUFHQSxVQUFNLENBQUMsa0JBQVAsR0FBNEIsRUFBNUI7QUFDQSxVQUFNLENBQUMsMkJBQVAsR0FBcUMsRUFBckM7O0FBR0EsVUFBTSxDQUFDLDBCQUFQLEdBQW9DO0FBRWhDLGNBQVEsTUFBTSxDQUFDLDJCQUFmO0FBQ0ksYUFBSyxDQUFMO0FBQ0ksaUJBQU8sNEJBQVA7O0FBQ0osYUFBSyxDQUFMO0FBQ0ksaUJBQU8sMkJBQVA7O0FBQ0o7QUFDSSxpQkFBTyxFQUFQO0FBTlI7QUFTSCxLQVhEOztBQWNBLFVBQU0sQ0FBQyxXQUFQLEdBQXFCO0FBRWpCLFVBQUksT0FBTyxHQUFHLElBQUksSUFBSixFQUFkO0FBRUEsYUFBTyxDQUFDLGVBQVIsQ0FBd0IsQ0FBeEI7QUFFQSxZQUFNLENBQUMsZUFBUCxDQUF1QixRQUF2QixHQUFrQyxPQUFsQztBQUVILEtBUkQ7O0FBV0EsYUFBUyxpQkFBVCxDQUEyQixJQUEzQixFQUErQjtBQUczQixVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosRUFBZDtBQUVBLGFBQU8sQ0FBQyxVQUFSLENBQW1CLENBQW5CO0FBRUEsMERBQW1CLFlBQW5CLENBQWdDLElBQWhDO0FBRUEsWUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFBakI7QUFFQSxZQUFNLENBQUMsZUFBUCxHQUF5QixJQUF6QjtBQUdIOztBQUdELGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE2QjtBQUV6QixhQUFPLENBQUMsS0FBUixDQUFjLHlDQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBRUEsWUFBTSxDQUFDLE9BQVAsQ0FBZSxpQ0FBZjtBQUVIOztBQUdELGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE2QjtBQUV6QixhQUFPLENBQUMsS0FBUixDQUFjLHlDQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBRUEsWUFBTSxDQUFDLE9BQVAsQ0FBZSxpQ0FBZjtBQUVIOztBQUdELFVBQU0sQ0FBQyxVQUFQLEdBQW9CO0FBRWhCLFlBQU0sQ0FBQyxpQkFBUCxHQUEyQixJQUEzQjtBQUVBLFlBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFlBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQztBQUdBLFVBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFsQjtBQUlBLGFBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBLGFBQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtBQUVBLGFBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFFQSxhQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sQ0FBQyxlQUFuQjtBQUVBLGFBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7O0FBSUEsVUFBSSxNQUFNLENBQUMsZUFBUCxDQUF1QixRQUEzQixFQUFxQztBQUNqQyxjQUFNLENBQUMsZUFBUCxDQUF1QixZQUF2QixHQUFzQyxDQUFDLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFFBQXZCLEdBQWtDLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFNBQTFELElBQXVFLElBQTdHO0FBQ0g7O0FBR0QsVUFBSSxNQUFNLENBQUMsZUFBUCxDQUF1QixTQUF2QixLQUFxQyxDQUF6QyxFQUE0QztBQUV4QyxtQkFBVyxDQUFDLGFBQVosQ0FBMEIsTUFBTSxDQUFDLGVBQWpDLEVBQWtELElBQWxELENBQXVELG9CQUF2RCxFQUE2RSxrQkFBN0UsV0FBdUcsa0JBQXZHO0FBRUgsT0FKRCxNQUtLO0FBQ0QsbUJBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxFQUFrRCxJQUFsRCxDQUF1RCxvQkFBdkQsRUFBNkUsa0JBQTdFLFdBQXVHLGtCQUF2RztBQUNIOztBQUdELGVBQVMsb0JBQVQsQ0FBOEIsSUFBOUIsRUFBa0M7QUFFOUIseUJBQWlCLENBQUMsS0FBbEI7QUFDQSxjQUFNLENBQUMsSUFBUCxDQUFZLGVBQVosRUFIOEIsQ0FNOUI7O0FBRUEsdUNBQStCLENBQUMscUJBQWhDLENBQXNELFdBQXRELEVBQW1FLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFNBQTFGLEVBQXFHLEtBQXJHO0FBRUg7O0FBRUQsZUFBUyxrQkFBVCxDQUE0QixLQUE1QixFQUFpQztBQUU3QixlQUFPLENBQUMsR0FBUixDQUFZLEtBQVo7QUFFQSxjQUFNLENBQUMsS0FBUCxDQUFhLHdCQUFiO0FBQ0EsY0FBTSxDQUFDLE9BQVAsQ0FBZSwwQkFBZjtBQUVBLGNBQU0sQ0FBQywyQkFBUCxHQUFxQyxDQUFyQztBQUNBLGNBQU0sQ0FBQyxrQkFBUCxHQUE0QixLQUFLLENBQUMsSUFBbEM7QUFFQSxjQUFNLENBQUMsaUJBQVAsR0FBMkIsS0FBM0I7QUFFQSxrQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSxvQkFBVSxFQUFFLGVBQWQ7QUFBK0IsaUJBQU8sRUFBRSxrQ0FBeEM7QUFBNEUscUJBQVcsRUFBRTtBQUF6RixTQUFwQjtBQUVIOztBQUVELGVBQVMsa0JBQVQsQ0FBNEIsS0FBNUIsRUFBaUM7QUFFN0IsZUFBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsY0FBTSxDQUFDLEtBQVAsQ0FBYSx3QkFBYjtBQUNBLGNBQU0sQ0FBQyxPQUFQLENBQWUsMEJBQWY7QUFFQSxjQUFNLENBQUMsMkJBQVAsR0FBcUMsQ0FBckM7QUFDQSxjQUFNLENBQUMsa0JBQVAsR0FBNEIsS0FBSyxDQUFDLElBQWxDO0FBRUEsY0FBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBRUEsa0JBQVUsQ0FBQyxRQUFYLENBQW9CO0FBQUUsb0JBQVUsRUFBRSxlQUFkO0FBQStCLGlCQUFPLEVBQUUsa0NBQXhDO0FBQTRFLHFCQUFXLEVBQUU7QUFBekYsU0FBcEI7QUFFSDtBQUdKLEtBbkZEOztBQXNGQSxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUVoQixVQUFJLG9CQUFvQixDQUFDLGNBQXJCLEVBQUosRUFBMkM7QUFDdkMsWUFBSSxDQUFDLE9BQU8sQ0FBQyw0REFBRCxDQUFaLEVBQTRFO0FBQy9FOztBQUVELHVCQUFpQixDQUFDLE9BQWxCO0FBRUgsS0FSRDtBQWVILEdBMUw4QyxDQUFuRDtBQWlNQSxTQUFPO0FBQ0gsZ0JBQVksRUFBRTtBQURYLEdBQVA7QUFJSCxDQTlNc0MsRUFBdkM7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsaUJBQVYsRUFBMkI7QUFFckMsMEZBQWtCLENBQUMsT0FBbkIsQ0FBMkIsaUJBQTNCO0FBQ0EsbUZBQTRCLENBQUMsWUFBN0I7QUFDQSxtR0FBb0MsQ0FBQyxZQUFyQztBQUNBLG1HQUFvQyxDQUFDLFlBQXJDO0FBQ0EscUVBQXFCLENBQUMsWUFBdEI7QUFDQSxxR0FBZ0MsQ0FBQyxZQUFqQztBQUNBLHlHQUFrQyxDQUFDLFlBQW5DO0FBQ0EsMEZBQTJCLENBQUMsT0FBNUIsQ0FBb0MsaUJBQXBDO0FBQ0EsNkVBQWMsQ0FBQyxPQUFmLENBQXVCLDhCQUF2QixFQUF1RCxpQkFBdkQ7QUFDQSx1RUFBYyxDQUFDLE9BQWYsQ0FBdUIsOEJBQXZCLEVBQXVELGlCQUF2RDtBQUNBLDJGQUErQjtBQUNsQyxDQWJEOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBSUEsSUFBTSwrQkFBK0IsR0FBRztBQUVwQyxNQUFNLFVBQVUsR0FBRyx5REFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MseUJBQWxDLEVBQTZELGNBQTdELENBQW5CO0FBR0EsWUFBVSxDQUFDLE1BQVgsQ0FBa0IsQ0FBQyxVQUFELEVBQWEsVUFBVSxRQUFWLEVBQWtCO0FBRzdDLFlBQVEsQ0FBQyxPQUFULENBQWlCLGlDQUFqQixFQUFvRCxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLFlBQTlCLEVBQTRDLFVBQVUsVUFBVixFQUFzQixXQUF0QixFQUFtQyxVQUFuQyxFQUE2QztBQUV6SSxhQUFPO0FBRUgsNkJBQXFCLEVBQUUsK0JBQVUsV0FBVixFQUF3RCxTQUF4RCxFQUEyRSxTQUEzRSxFQUE2RjtBQUdoSCxjQUFJLHdCQUF3QixHQUFHLEtBQS9COztBQUdBLGNBQ0ksd0VBQTJDLFdBQTNDLEVBQXdELDZEQUFnQyxPQUF4RixLQUVBLHdFQUEyQyxXQUEzQyxFQUF3RCw2REFBZ0MsV0FBeEYsQ0FISixFQUlFO0FBQ0UsdUJBQVcsQ0FBQyxvQkFBWixDQUFpQyxTQUFqQyxFQUE0QyxXQUE1QyxFQUF5RCxJQUF6RCxDQUE4RCxvQkFBOUQsRUFBb0YsbUJBQXBGO0FBQ0Esb0NBQXdCLEdBQUcsSUFBM0I7QUFDSDs7QUFHRCxjQUFJLHdFQUEyQyxXQUEzQyxFQUF3RCw2REFBZ0MsZUFBeEYsQ0FBSixFQUE4RztBQUMxRyx1QkFBVyxDQUFDLDJCQUFaLENBQXdDLFNBQXhDLEVBQW1ELFdBQW5ELEVBQWdFLElBQWhFLENBQXFFLG9CQUFyRSxFQUEyRixtQkFBM0Y7QUFDQSxvQ0FBd0IsR0FBRyxJQUEzQjtBQUNIOztBQUdELGNBQUksQ0FBQyx3QkFBTCxFQUErQjtBQUUzQixzQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSx3QkFBVSxFQUFFLHdCQUFkO0FBQXdDLHFCQUFPLEVBQUUsK0JBQTZCLFdBQTdCLEdBQXdDO0FBQXpGLGFBQXBCO0FBRUg7O0FBSUQsbUJBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBb0M7QUFFaEMsZ0JBQUksU0FBSixFQUFlO0FBQ1gsd0JBQVUsQ0FBQyxVQUFYLENBQXNCLHNCQUF0QixFQUE4QyxNQUE5QztBQUNILGFBRkQsTUFFTztBQUNILHdCQUFVLENBQUMsVUFBWCxDQUFzQix1QkFBdEIsRUFBK0MsTUFBL0M7QUFDSDtBQUVKOztBQUVELG1CQUFTLG1CQUFULENBQTZCLE1BQTdCLEVBQW1DO0FBRS9CLG1CQUFPLENBQUMsR0FBUixDQUFZLGlGQUFaLEVBQStGLDBCQUEvRjtBQUNBLG1CQUFPLENBQUMsS0FBUixDQUFjLE1BQWQ7QUFFQSxzQkFBVSxDQUFDLFFBQVgsQ0FBb0I7QUFBRSx3QkFBVSxFQUFFLHdCQUFkO0FBQXdDLHFCQUFPLEVBQUU7QUFBakQsYUFBcEI7QUFHSDtBQUtKO0FBdkRFLE9BQVA7QUF5REgsS0EzRG1ELENBQXBEO0FBaUVILEdBcEVpQixDQUFsQjtBQXNFSCxDQTNFdUMsRUFBeEM7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0NBR0E7O0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FLQTs7QUFFQTtBQUVBLCtFQUF1QixDQUFDLE9BQXhCO0FBS0EsSUFBTSxpQkFBaUIsR0FBRyxjQUExQjtBQUVBLCtFQUF5QixDQUFDLE9BQTFCLENBQWtDLGlCQUFsQyxFLENBS0E7O0FBQ0Esc0dBQTZCLENBQUMsT0FBOUIsQ0FBc0MsaUJBQXRDO0FBR0Esc0VBQW9CLENBQUMsT0FBckIsQ0FBNkIsaUJBQTdCLEUsQ0FHQTtBQUVBOztBQUdBLGtHQUE4QixDQUFDLE9BQS9CLENBQXVDLGlCQUF2QyxFLENBS0E7O0FBRUE7QUFFQSxvRkFBbUIsQ0FBQyxPQUFwQixDQUE0QixnQkFBNUIsRUFBNkMsaUJBQTdDO0FBT0EseUVBQW9CLENBQUMsT0FBckIsQ0FBNkIsaUJBQTdCLEUsQ0FHQTs7QUFDQSxnR0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxpQkFBMUMsRUFBNkQsOEJBQTdELEUsQ0FHQTs7QUFFQSxrRkFBZ0IsQ0FBQyxPQUFqQixDQUF5QixnQkFBekI7QUFHQSxrRkFBZ0IsQ0FBQyxRQUFqQixDQUEwQixnQkFBMUIsRUFBNEM7QUFBRSxZQUFVLEVBQUUsaUJBQWQ7QUFBaUMsU0FBTyxFQUFFO0FBQTFDLENBQTVDO0FBQ0Esa0ZBQWdCLENBQUMsUUFBakIsQ0FBMEIsUUFBUSxDQUFDLFFBQVQsQ0FBa0IsUUFBNUMsRUFBc0Q7QUFBRSxZQUFVLEVBQUUsZUFBZDtBQUErQixTQUFPLEVBQUU7QUFBeEMsQ0FBdEQsRSxDQUdBO0FBQ0E7O0FBRUE7QUFFQSxzRUFBVSxpQkFBVixFOzs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUdBLElBQUksb0NBQW9DLEdBQUc7QUFHdkM7QUFHQSxNQUFJLFlBQVksR0FBRywwREFBNkIsZ0JBQTdCLENBQThDLDZCQUE5QyxFQUE2RSxjQUE3RSxDQUFuQixDQU51QyxDQVF2QztBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0EsY0FBWSxDQUFDLFVBQWIsQ0FBd0IsNkJBQXhCLEVBQXVELENBQUMsUUFBRCxFQUFXLG1CQUFYLEVBQWdDLE9BQWhDLEVBQXlDLElBQXpDLEVBQStDLGFBQS9DLEVBQThELHNCQUE5RCxFQUFzRixXQUF0RixFQUFtRyxvQkFBbkcsRUFBeUgsYUFBekgsRUFFbkQsVUFBVSxNQUFWLEVBQWtCLGlCQUFsQixFQUFxQyxLQUFyQyxFQUE0QyxFQUE1QyxFQUFnRCxXQUFoRCxFQUE2RCxvQkFBN0QsRUFBbUYsU0FBbkYsRUFBOEYsa0JBQTlGLEVBQWtILFdBQWxILEVBQThKO0FBRzFKO0FBQ0Esd0JBQW9CLENBQUMsWUFBckIsR0FKMEosQ0FRMUo7QUFDQTtBQUNBOztBQUNBLGVBQVcsQ0FBQyxVQUFaLENBQXVCLFNBQXZCLEVBQWtDLElBQWxDLENBQXVDLGlCQUF2QyxFQUEwRCxlQUExRCxXQUNXLGVBRFgsRUFYMEosQ0FnQjFKO0FBQ0E7O0FBQ0EsVUFBTSxDQUFDLFNBQVAsR0FBbUIsV0FBbkIsQ0FsQjBKLENBb0IxSjs7QUFDQSxVQUFNLENBQUMsaUJBQVAsR0FBMkIsS0FBM0IsQ0FyQjBKLENBeUIxSjtBQUNBOztBQUVBLFVBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFVBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQzs7QUFFQSxVQUFNLENBQUMsMEJBQVAsR0FBb0M7QUFFaEMsY0FBUSxNQUFNLENBQUMsMkJBQWY7QUFDSSxhQUFLLENBQUw7QUFDSSxpQkFBTyw0QkFBUDs7QUFDSixhQUFLLENBQUw7QUFDSSxpQkFBTywyQkFBUDs7QUFDSjtBQUNJLGlCQUFPLEVBQVA7QUFOUjtBQVNILEtBWEQ7O0FBaUJBLGFBQVMsaUJBQVQsQ0FBMkIsSUFBM0IsRUFBK0I7QUFHM0IsVUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFKLEVBQWQ7QUFFQSxhQUFPLENBQUMsZUFBUixDQUF3QixDQUF4QjtBQUVBLFVBQUksQ0FBQyxRQUFMLEdBQWdCLE9BQWhCO0FBRUEsMERBQW1CLFlBQW5CLENBQWdDLElBQWhDO0FBQ0EsWUFBTSxDQUFDLE9BQVAsR0FBaUIsSUFBakI7QUFFQSxZQUFNLENBQUMsZUFBUCxHQUF5QixJQUF6QjtBQUNIOztBQUVELGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE2QjtBQUV6QixhQUFPLENBQUMsS0FBUixDQUFjLDZDQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBRUEsWUFBTSxDQUFDLE9BQVAsQ0FBZSxpQ0FBZjtBQUVIOztBQUVELGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE2QjtBQUN6QixhQUFPLENBQUMsS0FBUixDQUFjLDZDQUFkO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0FBR0EsWUFBTSxDQUFDLE9BQVAsQ0FBZSxpQ0FBZjtBQUVIOztBQUdELFVBQU0sQ0FBQyxVQUFQLEdBQW9CO0FBRWhCLFVBQUksTUFBTSxDQUFDLGlCQUFYLEVBQThCO0FBRTlCLFlBQU0sQ0FBQyxpQkFBUCxHQUEyQixJQUEzQjtBQUlBLFlBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFlBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQztBQUdBLFVBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxlQUFsQjtBQUVBLFVBQUksT0FBTyxHQUFHLElBQWQ7O0FBR0EsVUFBSSxNQUFNLENBQUMsZUFBUCxDQUF1QixRQUEzQixFQUFxQztBQUNqQyxjQUFNLENBQUMsZUFBUCxDQUF1QixZQUF2QixHQUFzQyxDQUFDLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFFBQXZCLEdBQWtDLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFNBQTFELElBQXVFLElBQTdHO0FBQ0g7O0FBR0QsVUFBSSxNQUFNLENBQUMsZUFBUCxDQUF1QixTQUF2QixLQUFxQyxDQUF6QyxFQUE0QztBQUN4QyxlQUFPLEdBQUcsV0FBVyxDQUFDLGFBQVosQ0FBMEIsTUFBTSxDQUFDLGVBQWpDLENBQVY7QUFDSCxPQUZELE1BR0s7QUFDRCxlQUFPLEdBQUcsV0FBVyxDQUFDLGFBQVosQ0FBMEIsTUFBTSxDQUFDLGVBQWpDLENBQVY7QUFDSDs7QUFFRCxVQUFJLE9BQUosRUFBYTtBQUVULGVBQU8sQ0FBQyxJQUFSLENBQ0ksVUFBVSxJQUFWLEVBQWM7QUFFViwyQkFBaUIsQ0FBQyxLQUFsQjtBQUNBLGdCQUFNLENBQUMsSUFBUCxDQUFZLGFBQVosRUFIVSxDQU1WO0FBQ0E7O0FBQ0EsNEJBQWtCLENBQUMsYUFBbkIsQ0FBaUMsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsU0FBeEQsRUFBbUUsV0FBbkU7QUFHSCxTQVpMLEVBYUksVUFBVSxLQUFWLEVBQWU7QUFFWCxnQkFBTSxDQUFDLGlCQUFQLEdBQTJCLEtBQTNCO0FBR0EsY0FBSSxLQUFLLEdBQUcsS0FBWjtBQUVBLGlCQUFPLENBQUMsS0FBUixDQUFjLEtBQWQ7QUFFQSxnQkFBTSxDQUFDLEtBQVAsQ0FBYSx3QkFBYjtBQUNBLGdCQUFNLENBQUMsT0FBUCxDQUFlLDBCQUFmO0FBRUEsZ0JBQU0sQ0FBQywyQkFBUCxHQUFxQyxDQUFyQztBQUNBLGdCQUFNLENBQUMsa0JBQVAsR0FBNEIsS0FBSyxDQUFDLElBQWxDO0FBR0E7QUFFSCxTQS9CTDtBQWdDSDtBQUdKLEtBbEVEOztBQXFFQSxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUVoQixVQUFJLG9CQUFvQixDQUFDLGNBQXJCLEVBQUosRUFBMkM7QUFDdkMsWUFBSSxDQUFDLE9BQU8sQ0FBQyw0REFBRCxDQUFaLEVBQTRFO0FBQy9FOztBQUVELHVCQUFpQixDQUFDLE9BQWxCLEdBTmdCLENBTWE7QUFFaEMsS0FSRDtBQWFILEdBdEtrRCxDQUF2RDtBQXlLQSxTQUFPO0FBQ0gsZ0JBQVksRUFBRTtBQURYLEdBQVA7QUFJSCxDQTdMMEMsRUFBM0M7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUdBLElBQU0saUJBQWlCLEdBQUcsY0FBMUI7O0FBRUEsSUFBSSxvQ0FBb0MsR0FBRztBQUV2QyxNQUFJLFlBQVksR0FBRywwREFBNkIsZ0JBQTdCLENBQThDLDZCQUE5QyxFQUE2RSxpQkFBN0UsQ0FBbkIsQ0FGdUMsQ0FLdkM7O0FBRUEsY0FBWSxDQUFDLFVBQWIsQ0FBd0IsNkJBQXhCLEVBQXVELENBQUMsWUFBRCxFQUFlLFFBQWYsRUFBeUIsbUJBQXpCLEVBQThDLE9BQTlDLEVBQXVELElBQXZELEVBQTZELGFBQTdELEVBQTRFLFVBQTVFLEVBQXdGLGlDQUF4RixFQUEySCxXQUEzSCxFQUF3SSxzQkFBeEksRUFHbkQsVUFBVSxVQUFWLEVBQXNCLE1BQXRCLEVBQThCLGlCQUE5QixFQUFpRCxLQUFqRCxFQUF3RCxFQUF4RCxFQUE0RCxXQUE1RCxFQUF5RSxRQUF6RSxFQUFtRiwrQkFBbkYsRUFBb0gsU0FBcEgsRUFBK0gsb0JBQS9ILEVBQW1KO0FBRS9JLHdCQUFvQixDQUFDLFlBQXJCO0FBRUEsVUFBTSxDQUFDLHdCQUFQLEdBQWtDLFNBQWxDO0FBR0EsZUFBVyxDQUFDLFVBQVosQ0FBdUIsU0FBdkIsRUFBa0MsSUFBbEMsQ0FBdUMsaUJBQXZDLEVBQTBELGVBQTFELFdBQ1csZUFEWDtBQUtBLFVBQU0sQ0FBQyxTQUFQLEdBQW1CLCtCQUFuQixDQVorSSxDQWMvSTs7QUFDQSxVQUFNLENBQUMsaUJBQVAsR0FBMkIsS0FBM0IsQ0FmK0ksQ0FrQi9JOztBQUNBLFVBQU0sQ0FBQyxrQkFBUCxHQUE0QixFQUE1QjtBQUNBLFVBQU0sQ0FBQywyQkFBUCxHQUFxQyxFQUFyQztBQUdBLFVBQU0sQ0FBQyxxQkFBUCxHQUErQixJQUEvQjs7QUFFQSxVQUFNLENBQUMsMEJBQVAsR0FBb0M7QUFFaEMsY0FBUSxNQUFNLENBQUMsMkJBQWY7QUFDSSxhQUFLLENBQUw7QUFDSSxpQkFBTyw0QkFBUDs7QUFDSixhQUFLLENBQUw7QUFDSSxpQkFBTywyQkFBUDs7QUFDSjtBQUNJLGlCQUFPLEVBQVA7QUFOUjtBQVNILEtBWEQ7O0FBY0EsYUFBUyxpQkFBVCxDQUEyQixJQUEzQixFQUErQjtBQUczQiwwREFBbUIsWUFBbkIsQ0FBZ0MsSUFBaEM7QUFFQSxVQUFJLE9BQU8sR0FBRyxJQUFJLElBQUosRUFBZDtBQUNBLGFBQU8sQ0FBQyxlQUFSLENBQXdCLENBQXhCO0FBRUEsVUFBSSxDQUFDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxVQUFJLENBQUMsU0FBTCxHQUFpQixPQUFqQjtBQUVBLFVBQUksQ0FBQyxZQUFMLEdBQW9CLElBQXBCO0FBRUEsVUFBSSxDQUFDLFlBQUwsR0FBb0IsSUFBcEI7QUFFQSxZQUFNLENBQUMsZUFBUCxHQUF5QixJQUF6QjtBQUVIOztBQUdELGFBQVMsZUFBVCxDQUF5QixJQUF6QixFQUE2QjtBQUN6QixVQUFJLElBQUksR0FBRyxJQUFYO0FBRUg7O0FBRUQsYUFBUyxlQUFULENBQXlCLElBQXpCLEVBQTZCO0FBQ3pCLFVBQUksSUFBSSxHQUFHLElBQVg7QUFFSDs7QUFHRCxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUVoQixVQUFJLE1BQU0sQ0FBQyxpQkFBWCxFQUE4QjtBQUU5QixZQUFNLENBQUMsaUJBQVAsR0FBMkIsSUFBM0I7QUFFQSxhQUFPLENBQUMsR0FBUixDQUFZLGtEQUFaO0FBRUEsVUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGVBQWxCO0FBRUEsVUFBSSxPQUFPLEdBQUcsSUFBZDtBQUVBLFVBQUksU0FBUyxHQUFHLElBQWhCOztBQUVBLFVBQUksTUFBTSxDQUFDLGVBQVAsQ0FBdUIsU0FBdkIsS0FBcUMsQ0FBekMsRUFBNEM7QUFDeEMsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsZUFBTyxHQUFHLFdBQVcsQ0FBQyxhQUFaLENBQTBCLE1BQU0sQ0FBQyxlQUFqQyxDQUFWO0FBQ0EsaUJBQVMsR0FBRyxLQUFaO0FBRUg7O0FBRUQsVUFBSSxPQUFKLEVBQWE7QUFFVDtBQUNBLGVBQU8sQ0FBQyxJQUFSLENBQ0ksVUFBVSxJQUFWLEVBQWM7QUFHViwyQkFBaUIsQ0FBQyxLQUFsQixDQUF3QixJQUF4QjtBQUVBLGdCQUFNLENBQUMsSUFBUCxDQUFZLGtDQUFaLEVBTFUsQ0FVVjs7QUFFQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxzRkFBWixFQUFvRywwQkFBcEc7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFJLENBQUMsU0FBakI7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaLEVBZFUsQ0FnQlY7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsY0FBTSxXQUFXLEdBQUcsNkRBQWdDLE9BQXBELENBdEJVLENBeUJWOztBQUNBLHlDQUErQixDQUFDLHFCQUFoQyxDQUFzRCxXQUF0RCxFQUFtRSxNQUFNLENBQUMsd0JBQTFFLEVBQXFHLEtBQXJHLEVBMUJVLENBNEJ0Qzs7QUFDNEIseUNBQStCLENBQUMscUJBQWhDLENBQXNELFdBQXRELEVBQW1FLElBQUksQ0FBQyxTQUF4RSxFQUFtRixTQUFuRjtBQUdILFNBakNMLEVBa0NJLFVBQVUsS0FBVixFQUFlO0FBRVgsZ0JBQU0sQ0FBQyxpQkFBUCxHQUEyQixLQUEzQjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLEtBQVosRUFKVyxDQU1YO0FBQ0E7O0FBRUEsZ0JBQU0sQ0FBQyxLQUFQLENBQWEsd0NBQWI7QUFFQSxnQkFBTSxDQUFDLDJCQUFQLEdBQXFDLENBQXJDO0FBQ0EsZ0JBQU0sQ0FBQyxrQkFBUCxHQUE0QixLQUFLLENBQUMsSUFBbEM7QUFFSCxTQWhETDtBQWlESDtBQUdKLEtBOUVEOztBQWtGQSxVQUFNLENBQUMsVUFBUCxHQUFvQjtBQUdoQjtBQUdBO0FBQ0EsVUFBSSxvQkFBb0IsQ0FBQyxjQUFyQixFQUFKLEVBQTJDO0FBQ3ZDLFlBQUksQ0FBQyxPQUFPLENBQUMsNERBQUQsQ0FBWixFQUE0RTtBQUMvRTs7QUFDRCx1QkFBaUIsQ0FBQyxPQUFsQixDQUEwQixLQUExQixFQVZnQixDQVVrQjtBQUVyQyxLQVpEO0FBZ0JILEdBM0trRCxDQUF2RDtBQThLQSxTQUFPO0FBQ0gsZ0JBQVksRUFBRTtBQURYLEdBQVA7QUFJSCxDQXpMMEMsRUFBM0M7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7R0FHQTs7O0FBSUE7QUFDQTs7QUFHQSxJQUFJLGdCQUFnQixHQUFHO0FBRW5CLE1BQUksSUFBSSxHQUFHO0FBQUUsY0FBVSxFQUFFO0FBQWQsR0FBWDtBQUVBLE1BQUksTUFBTSxHQUFHO0FBRVQsc0JBQWtCLEVBQUUsd0RBQVcsQ0FBQyxXQUFaLENBQXdCO0FBRm5DLEdBQWI7O0FBTUEsTUFBSSxzQkFBc0IsR0FBRyxTQUF6QixzQkFBeUI7QUFFekIsV0FBTyxNQUFNLENBQUMsa0JBQWQ7QUFDSCxHQUhEOztBQU1BLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLFVBQVYsRUFBNEI7QUFFdEMsUUFBSSxDQUFDLFVBQUwsR0FBa0IsVUFBbEI7O0FBRUEsUUFBSSxDQUFDLGtFQUFXLENBQUMsTUFBakIsRUFBeUI7QUFFckI7QUFFQTtBQUNBLFVBQUksc0JBQXNCLEVBQTFCLEVBQThCO0FBRTFCLDBFQUFXLENBQUMsZ0JBQVosQ0FBNkIsTUFBN0I7QUFDSDtBQUNKO0FBR0osR0FoQkQ7O0FBbUJBLE1BQUksTUFBTSxHQUFHLFNBQVQsTUFBUztBQUVUOztBQUVBO0FBQ0Esc0VBQVcsQ0FBQyxhQUFaLENBQ0kseUJBREo7QUFDK0I7QUFDM0IsUUFGSjtBQUVVO0FBQ047QUFBRSxXQUFLLEVBQUUsT0FBVDtBQUFrQixXQUFLLEVBQUU7QUFBekIsS0FISjtBQUd3QztBQUNwQztBQUFFLGtCQUFZLEVBQUU7QUFBaEIsS0FKSjtBQUl5QjtBQUNyQjtBQUFJO0FBTFI7QUFRQTs7QUFDQSxzRUFBVyxDQUFDLFVBQVosQ0FBdUIseUJBQXZCLEVBQWtEO0FBQUUsV0FBSyxFQUFFLE9BQVQ7QUFBa0IsV0FBSyxFQUFFO0FBQXpCLEtBQWxELEVBQXNGO0FBQUUsa0JBQVksRUFBRTtBQUFoQixLQUF0RjtBQUVILEdBaEJEOztBQW1CQSxNQUFJLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBVSxJQUFWLEVBQXlCLEdBQXpCLEVBQXVDLFVBQXZDLEVBQXlELFlBQXpELEVBQTZFLFFBQTdFLEVBQThGO0FBRTVHO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBWSxvREFBWixFQUFrRSxjQUFsRTtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNBLFdBQU8sQ0FBQyxHQUFSLENBQVksdUJBQVo7O0FBRUEsUUFBTSxRQUFRO0FBQUssb0JBQWMsRUFBRSxJQUFJLENBQUM7QUFBMUIsT0FBeUMsVUFBekMsQ0FBZDs7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFPLENBQUMsR0FBUixDQUFZLHFCQUFaO0FBRUEsc0VBQVcsQ0FBQyxhQUFaLENBQTBCLElBQTFCLEVBQWdDLEdBQWhDLEVBQXFDLFVBQXJDLEVBWDRHLENBVzNEO0FBRXBELEdBYkQ7O0FBZUEsTUFBSSxRQUFRLEdBQUcsU0FBWCxRQUFXLENBQVUsSUFBVixFQUF3QixVQUF4QixFQUEwQyxZQUExQyxFQUE0RDtBQUV2RTtBQUVBLHNFQUFXLENBQUMsVUFBWixDQUF1QixJQUF2QixFQUE2QixVQUE3QixFQUF5QyxZQUF6QztBQUVILEdBTkQ7O0FBUUEsTUFBSSxZQUFZLEdBQUcsU0FBZixZQUFlLENBQVUsU0FBVixFQUFnQyxLQUFoQyxFQUE2QyxTQUE3QyxFQUErRDtBQUU5RTtBQUNBO0FBQ0E7QUFFQSxRQUFJLFNBQUosRUFBZTtBQUVYLFdBQUssZ0JBQVEsS0FBUixFQUFrQixTQUFsQixDQUFMO0FBQ0g7O0FBRUQsc0VBQVcsQ0FBQyxjQUFaLENBQTJCLFNBQTNCLEVBQXNDLFNBQXRDLEVBQWlELEtBQWpEO0FBRUgsR0FiRDs7QUFnQkEsU0FBTztBQUNILFdBQU8sRUFBRSxPQUROO0FBRUgsVUFBTSxFQUFFLE1BRkw7QUFHSCxlQUFXLEVBQUUsV0FIVjtBQUlILFlBQVEsRUFBRSxRQUpQO0FBS0gsZ0JBQVksRUFBRTtBQUxYLEdBQVA7QUFRSCxDQXJHc0IsRUFBdkI7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQUksa0JBQWtCLEdBQUc7QUFFckIsTUFBSSxrQkFBa0IsR0FBRyxTQUFyQixrQkFBcUIsQ0FBa0MsRUFBbEMsRUFBMkM7QUFFaEUsd0VBQWlCLENBQUMsV0FBbEIsR0FBZ0MsSUFBaEM7QUFDSCxHQUhEOztBQU1BLE1BQUksNkJBQTZCLEdBQUcsU0FBaEMsNkJBQWdDLENBQWtDLEVBQWxDLEVBQTJDO0FBRTNFLHdFQUFpQixDQUFDLFdBQWxCLEdBQWdDLEtBQWhDO0FBQ0gsR0FIRCxDQVJxQixDQWNyQjs7O0FBQ0EsTUFBSSxpQkFBaUIsR0FBRyxTQUFwQixpQkFBb0I7QUFHcEI7QUFDQSxRQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsUUFBMUIsQ0FBZDtBQUVBLFdBQU8sQ0FBQyxPQUFSLENBQWdCLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVE7QUFFcEIsVUFBSSxDQUFDLENBQUMsSUFBRixLQUFXLENBQUMsQ0FBQyxJQUFGLENBQU8sV0FBUCxPQUF5QixRQUF6QixJQUFxQyxDQUFDLENBQUMsSUFBRixDQUFPLFdBQVAsT0FBeUIsT0FBekUsQ0FBSixFQUF1RjtBQUVuRixTQUFDLENBQUMsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEIsa0JBQWtCLENBQUMsNkJBQS9DO0FBRUg7QUFFSixLQVJEO0FBWUEsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLE9BQTFCLENBQWI7QUFFQSxVQUFNLENBQUMsT0FBUCxDQUFlLFVBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVE7QUFFbkIsVUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFELENBQWpCLEVBQXNCO0FBRWxCLFNBQUMsQ0FBQyxnQkFBRixDQUFtQixRQUFuQixFQUE2QixrQkFBa0IsQ0FBQyxrQkFBaEQ7QUFFSDs7QUFHRCxVQUFJLENBQUMsQ0FBQyxJQUFGLEtBQVcsQ0FBQyxDQUFDLElBQUYsQ0FBTyxXQUFQLE9BQXlCLFFBQXpCLElBQXFDLENBQUMsQ0FBQyxJQUFGLENBQU8sV0FBUCxPQUF5QixPQUF6RSxDQUFKLEVBQXVGO0FBRW5GLFNBQUMsQ0FBQyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixrQkFBa0IsQ0FBQyw2QkFBL0M7QUFFSDtBQUVKLEtBZkQ7QUFtQkEsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFULENBQTBCLFVBQTFCLENBQWhCO0FBRUEsYUFBUyxDQUFDLE9BQVYsQ0FBa0IsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBUTtBQUV0QixVQUFJLENBQUMsWUFBWSxDQUFDLENBQUQsQ0FBakIsRUFBc0I7QUFDbEIsU0FBQyxDQUFDLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLGtCQUFrQixDQUFDLGtCQUFoRDtBQUNIO0FBQ0osS0FMRDtBQVNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixDQUFkO0FBRUEsV0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBUTtBQUVwQixVQUFJLENBQUMsWUFBWSxDQUFDLENBQUQsQ0FBakIsRUFBc0I7QUFDbEIsU0FBQyxDQUFDLGdCQUFGLENBQW1CLFFBQW5CLEVBQTZCLGtCQUFrQixDQUFDLGtCQUFoRDtBQUNIO0FBQ0osS0FMRDtBQU9ILEdBM0REOztBQStEQSxNQUFJLFlBQVksR0FBRyxTQUFmLFlBQWUsQ0FBVSxJQUFWLEVBQWM7QUFHN0I7QUFFQSxRQUFJLElBQUksQ0FBQyxJQUFULEVBQWU7QUFDWCxVQUNJLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixPQUE0QixRQUE1QixJQUNBLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixPQUE0QixRQUQ1QixJQUVBLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixPQUE0QixRQUY1QixJQUdBLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixPQUE0QixPQUg1QixJQUlBLElBQUksQ0FBQyxJQUFMLENBQVUsV0FBVixPQUE0QixVQUxoQyxFQUs0QztBQUV4QyxlQUFPLElBQVA7QUFDSDtBQUNKLEtBZjRCLENBaUI3Qjs7O0FBQ0EsUUFBSSxJQUFJLENBQUMsZUFBVCxFQUEwQjtBQUN0QixhQUFPLElBQVA7QUFDSDs7QUFFRCxRQUFJLENBQUMsSUFBSSxDQUFDLEVBQU4sSUFBWSxDQUFDLElBQUksQ0FBQyxJQUF0QixFQUE0QixPQUFPLElBQVA7QUFFNUIsUUFBSSxJQUFJLENBQUMsRUFBTCxDQUFRLFdBQVIsR0FBc0IsT0FBdEIsQ0FBOEIsUUFBOUIsSUFBMEMsQ0FBQyxDQUEvQyxFQUFrRCxPQUFPLElBQVA7QUFFbEQsUUFBSSxJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVYsR0FBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsSUFBNEMsQ0FBQyxDQUFqRCxFQUFvRCxPQUFPLElBQVA7QUFFcEQsUUFBSSxJQUFJLENBQUMsRUFBTCxDQUFRLFdBQVIsR0FBc0IsT0FBdEIsQ0FBOEIsUUFBOUIsSUFBMEMsQ0FBQyxDQUEvQyxFQUFrRCxPQUFPLElBQVA7QUFFbEQsUUFBSSxJQUFJLENBQUMsSUFBTCxDQUFVLFdBQVYsR0FBd0IsT0FBeEIsQ0FBZ0MsUUFBaEMsSUFBNEMsQ0FBQyxDQUFqRCxFQUFvRCxPQUFPLElBQVA7QUFHcEQsV0FBTyxLQUFQO0FBQ0gsR0FsQ0Q7O0FBdUNBLE1BQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CO0FBSW5CLFFBQUksUUFBUSxHQUFHLGNBQWMsT0FBTyxRQUFwQzs7QUFFQSxRQUFJLElBQUosRUFBVTtBQUdOLFVBQUksUUFBSixFQUFjO0FBRVYsY0FBTSxDQUFDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDLFVBQVUsQ0FBVixFQUFXO0FBRS9DLGNBQUksQ0FBQyxvRUFBaUIsQ0FBQyxXQUF2QixFQUFvQztBQUVwQyxjQUFJLG1CQUFtQixHQUFHLEtBQTFCO0FBRUEsV0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQWIsRUFBb0IsV0FBcEIsR0FBa0MsbUJBQWxDLENBTitDLENBTVk7O0FBQzNELGlCQUFPLDBEQUFQLENBUCtDLENBT21EO0FBQ3JHLFNBUkQ7QUFVSCxPQWZLLENBa0JOOzs7QUFDQSxVQUFJLENBQUMsUUFBTCxFQUFlO0FBRVgsY0FBTSxDQUFDLGNBQVAsR0FBd0IsVUFBVSxDQUFWLEVBQVc7QUFFL0IsY0FBSSxDQUFDLG9FQUFpQixDQUFDLFdBQXZCLEVBQW9DO0FBRXBDLGNBQUksbUJBQW1CLEdBQUcsS0FBMUI7QUFFQSxXQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBYixFQUFvQixXQUFwQixHQUFrQyxtQkFBbEMsQ0FOK0IsQ0FNNEI7O0FBQzNELGlCQUFPLDhEQUFQLENBUCtCLENBT3VFO0FBQ3pHLFNBUkQ7QUFVSDtBQUdKO0FBRUosR0ExQ0QsQ0FySHFCLENBb0tyQjtBQUNBO0FBQ0E7OztBQUNBLE1BQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCO0FBRWpCLFFBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFNBQWpCLENBQTJCLFdBQTNCLEVBQWQ7O0FBRUEsWUFBUSxJQUFSO0FBQ0ksV0FBSyxLQUFLLENBQUMsT0FBTixDQUFjLE1BQWQsSUFBd0IsQ0FBQyxDQUE5QjtBQUNJLGVBQU8sTUFBUDs7QUFDSixXQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQXhCLElBQTZCLENBQUMsQ0FBTyxNQUFPLENBQUMsR0FBbEQ7QUFDSSxlQUFPLE9BQVA7O0FBQ0osV0FBSyxLQUFLLENBQUMsT0FBTixDQUFjLFFBQWQsSUFBMEIsQ0FBQyxDQUEzQixJQUFnQyxDQUFDLENBQU8sTUFBTyxDQUFDLE1BQXJEO0FBQ0ksZUFBTyxRQUFQOztBQUNKLFdBQUssS0FBSyxDQUFDLE9BQU4sQ0FBYyxTQUFkLElBQTJCLENBQUMsQ0FBakM7QUFDSSxlQUFPLElBQVA7O0FBQ0osV0FBSyxLQUFLLENBQUMsT0FBTixDQUFjLFNBQWQsSUFBMkIsQ0FBQyxDQUFqQztBQUNJLGVBQU8sU0FBUDs7QUFDSixXQUFLLEtBQUssQ0FBQyxPQUFOLENBQWMsUUFBZCxJQUEwQixDQUFDLENBQWhDO0FBQ0ksZUFBTyxRQUFQOztBQUNKO0FBQ0ksZUFBTyxPQUFQO0FBZFI7QUFpQkgsR0FyQkQsQ0F2S3FCLENBK0xyQjs7O0FBQ0EsTUFBSSx3QkFBd0IsR0FBRyxTQUEzQix3QkFBMkI7QUFFM0IsY0FBVSxDQUFDLGlCQUFELEVBQW9CLElBQXBCLENBQVY7QUFDQSxvQkFBZ0I7QUFFbkIsR0FMRDs7QUFRQSxTQUFPO0FBRUgsb0JBQWdCLEVBQUUsZ0JBRmY7QUFHSCxrQkFBYyxFQUFFLGNBSGI7QUFJSCxxQkFBaUIsRUFBRSxpQkFKaEI7QUFLSCxzQkFBa0IsRUFBRSxrQkFMakI7QUFNSCxpQ0FBNkIsRUFBRSw2QkFONUI7QUFPSCw0QkFBd0IsRUFBRTtBQVB2QixHQUFQO0FBVUgsQ0FsTndCLEVBQXpCOztBQXVOQSxDQUFDLENBQUM7QUFFRSxvQkFBa0IsQ0FBQyx3QkFBbkI7QUFFSCxDQUpBLENBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TkE7QUFHQTtBQUFBO0FBQUE7QUFBQSxzQ0FxQ0M7O0FBakNHLHdCQUFJLGlDQUFKLEVBQUksYUFBSixFQUFlO1NBQWY7QUFHSSxVQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsb0JBQUQsQ0FBekI7QUFHQSxhQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaLHVFQUE4QyxZQUE5Qzs7QUFHQSxVQUFJLE9BQVEsWUFBUixLQUEwQixXQUE5QixFQUEyQztBQUN2QyxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVo7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLDRDQUFaO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLG9CQUFZLEdBQUcsS0FBZjtBQUNIOztBQUVELGFBQU8sQ0FBQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsWUFBaEMsRUFBOEMsR0FBOUM7QUFDQSxhQUFPLFlBQVA7QUFDSCxLQXBCYztTQXVCZixhQUFnQixZQUFoQixFQUFxQztBQUVqQyxZQUFNLENBQUMsb0JBQUQsQ0FBTixHQUErQixZQUEvQjtBQUVBLGFBQU8sQ0FBQyxHQUFSLENBQVksZ0NBQVosRUFBOEMsWUFBOUM7QUFFSCxLQTdCYztvQkFBQTs7QUFBQSxHQUFmO0FBaUNKO0FBQUMsQ0FyQ0Q7O0FBd0NBLElBQUksaUJBQWlCLEdBQUcsSUFBSSx1QkFBSixFQUF4Qjs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7O0FBTUEsSUFBSSw2QkFBNkIsR0FBRztBQUdoQyxNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxrQkFBVixFQUFvQztBQUk5QyxRQUFJLCtCQUErQixHQUFHLDBEQUF5QixnQkFBekIsQ0FBMEMsc0JBQTFDLEVBQWtFLGtCQUFsRSxDQUF0QztBQUdBLG1DQUErQixDQUFDLE9BQWhDLENBQXdDLHNCQUF4QyxFQUFnRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQVUsS0FBVixFQUFpQixFQUFqQixFQUFtQjtBQUkvRixVQUFJLGFBQWEsR0FBRyxTQUFoQixhQUFnQjtBQUVoQix5RUFBa0IsQ0FBQyx3QkFBbkI7QUFDSCxPQUhEOztBQU1BLFVBQUksZUFBZSxHQUFHLFNBQWxCLGVBQWtCO0FBRWxCLGVBQU8sb0VBQWlCLENBQUMsV0FBekI7QUFFSCxPQUpEOztBQU9BLFVBQUksTUFBTSxHQUFHLFNBQVQsTUFBUztBQUVULDRFQUFpQixDQUFDLFdBQWxCLEdBQWdDLEtBQWhDO0FBRUgsT0FKRDs7QUFPQSxVQUFJLGdCQUFnQixHQUFHLFNBQW5CLGdCQUFtQixDQUFVLE9BQVYsRUFBaUI7QUFFcEMsNEVBQWlCLENBQUMsV0FBbEIsR0FBZ0MsT0FBaEM7QUFFSCxPQUpEOztBQU1BLGFBQU87QUFDSCxvQkFBWSxFQUFFLGFBRFg7QUFFSCxzQkFBYyxFQUFFLGVBRmI7QUFHSCxhQUFLLEVBQUUsTUFISjtBQUlILHVCQUFlLEVBQUU7QUFKZCxPQUFQO0FBU0gsS0F2QytELENBQWhFO0FBMENILEdBakREOztBQXFEQSxTQUFPO0FBQ0gsV0FBTyxFQUFFO0FBRE4sR0FBUDtBQUtILENBN0RtQyxFQUFwQzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFNQTs7QUFHQSxJQUFNLG1CQUFtQixHQUFHO0FBRXhCLE1BQU0sT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFDLFVBQUQsRUFBcUIsa0JBQXJCLEVBQStDO0FBRTNELHNGQUFnQixDQUFDLE9BQWpCLENBQXlCLFVBQXpCO0FBRUEsUUFBTSxhQUFhLEdBQUcsMERBQXlCLGdCQUF6QixDQUEwQyxZQUExQyxFQUF3RCxrQkFBeEQsQ0FBdEI7QUFFQSxpQkFBYSxDQUFDLE9BQWQsQ0FBc0IsWUFBdEIsRUFBb0MsQ0FBQyxJQUFELEVBQU8sVUFBVSxFQUFWLEVBQVk7QUFJbkQsVUFBTSxTQUFTLEdBQUcsU0FBWixTQUFZLENBQVUsR0FBVixFQUErQixLQUEvQixFQUE4QyxJQUE5QyxFQUFtRTtBQUFyQjtBQUFBO0FBQXFCOztBQUVqRixZQUFJLEtBQUssR0FBRyxXQUFTLEtBQVQsR0FBYyxHQUExQjs7QUFDQSxZQUFJLElBQUosRUFBVTtBQUNOLGVBQUssSUFBSSxrQ0FBVDtBQUNIOztBQUVELGVBQU8sQ0FBQyxHQUFSLENBQVksaUNBQVosRUFBK0MsS0FBL0M7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLE9BQU8sR0FBRyxDQUFDLFVBQXZCLEVBQW1DLEtBQW5DO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxPQUFPLEdBQUcsQ0FBQyxPQUF2QixFQUFnQyxLQUFoQztBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksaUNBQVosRUFBK0MsS0FBL0M7QUFDSCxPQVhEOztBQWNBLFVBQU0sUUFBUSxHQUFHLFNBQVgsUUFBVyxDQUFVLFFBQVYsRUFBdUM7QUFFcEQsWUFBTSxLQUFLLEdBQUcsNENBQWQ7QUFFQSxlQUFPLENBQUMsR0FBUixDQUFZLGlDQUFaLEVBQStDLEtBQS9DO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxPQUFPLFVBQW5CLEVBQStCLEtBQS9CO0FBQ0EsZUFBTyxDQUFDLEdBQVIsQ0FBWSxPQUFPLFFBQVEsQ0FBQyxVQUE1QixFQUF3QyxLQUF4QztBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksT0FBTyxRQUFRLENBQUMsT0FBNUIsRUFBcUMsS0FBckM7QUFDQSxlQUFPLENBQUMsR0FBUixDQUFZLFFBQVEsQ0FBQyxXQUFyQjtBQUNBLGVBQU8sQ0FBQyxHQUFSLENBQVksaUNBQVosRUFBK0MsS0FBL0MsRUFUb0QsQ0FXcEQ7O0FBRUEsWUFBSSxLQUFLLEdBQUc7QUFBRSxxQkFBVyxFQUFFLGdCQUFjLFVBQWQsR0FBd0IsR0FBdkM7QUFBNEMscUJBQVcsRUFBRSxRQUFRLENBQUMsVUFBbEU7QUFBOEUsaUJBQU8sRUFBRSxRQUFRLENBQUM7QUFBaEcsU0FBWjtBQUVBLDBGQUFnQixDQUFDLFlBQWpCLENBQThCLFFBQVEsQ0FBQyxXQUF2QyxFQUFvRCxLQUFwRDtBQUVILE9BakJEOztBQXFCQSxhQUFPO0FBQ0gsaUJBQVMsV0FETjtBQUVILGdCQUFRO0FBRkwsT0FBUDtBQU1ILEtBN0NtQyxDQUFwQztBQStDSCxHQXJERDs7QUF1REEsU0FBTztBQUNILFdBQU8sRUFBRTtBQUROLEdBQVA7QUFNSCxDQS9EMkIsRUFBNUI7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0NBRUE7QUFFQTs7QUFDQSxJQUFJLG9CQUFvQixHQUFHO0FBR3ZCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLGtCQUFWLEVBQTRCO0FBRXRDLFFBQUksa0JBQWtCLEdBQUcseURBQWdCLENBQUMsZ0JBQWpCLENBQWtDLGFBQWxDLEVBQWlELGtCQUFqRCxDQUF6QjtBQUVBLHNCQUFrQixDQUFDLE9BQW5CLENBQTJCLG9CQUEzQixFQUFpRCxDQUFDLFlBQUQsRUFBZSxhQUFmLEVBQThCLFVBQVUsVUFBVixFQUFzQixXQUF0QixFQUFpQztBQUU1RztBQUNBO0FBR0EsVUFBSSxjQUFjLEdBQUcsU0FBakIsY0FBaUIsQ0FBVSxPQUFWLEVBQW1CLFdBQW5CLEVBQW1EO0FBR3BFLG1CQUFXLENBQUMsb0JBQVosQ0FBaUMsT0FBakMsRUFBMEMsV0FBMUMsRUFBdUQsSUFBdkQsQ0FBNEQsb0JBQTVELEVBQWtGLG1CQUFsRjs7QUFJQSxpQkFBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFvQztBQUdoQyxvQkFBVSxDQUFDLFVBQVgsQ0FBc0IsdUJBQXRCLEVBQStDLE1BQS9DO0FBRUg7O0FBRUQsaUJBQVMsbUJBQVQsQ0FBNkIsTUFBN0IsRUFBbUM7QUFFL0IsaUJBQU8sQ0FBQyxLQUFSLENBQWMsTUFBZDtBQUVIO0FBQ0osT0FuQkQ7O0FBc0JBLGFBQU87QUFFSCxxQkFBYSxFQUFFO0FBRlosT0FBUDtBQU1ILEtBbENnRCxDQUFqRDtBQXFDSCxHQXpDRDs7QUE0Q0EsU0FBTztBQUVILFdBQU8sRUFBRTtBQUZOLEdBQVA7QUFNSCxDQXJEMEIsRUFBM0I7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFFQTs7QUFJQSxJQUFJLGlDQUFpQyxHQUFHO0FBRXZDO0FBQ0Q7QUFFSSxNQUFJLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxpQkFBVixFQUFvQyxpQkFBcEMsRUFBNkQ7QUFHdkUsaUZBQWdCLENBQUMsUUFBakIsQ0FBMEIseUJBQTFCLEVBQXFEO0FBQUUsZ0JBQVUsRUFBRSxlQUFkO0FBQStCLGFBQU8sRUFBRSxTQUF4QztBQUFtRCx1QkFBaUIsRUFBRTtBQUF0RSxLQUFyRDtBQUdBLFFBQUksY0FBYyxHQUFvQix5REFBZ0IsQ0FBQyxnQkFBakIsQ0FBa0MsMEJBQWxDLEVBQThELGlCQUE5RCxDQUF0QztBQUVBLGtCQUFjLENBQUMsVUFBZixDQUEwQiwyQ0FBMUIsRUFBdUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixXQUFyQixFQUFrQyxVQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsRUFBbUMsQ0FHM0ksQ0FIc0UsQ0FBdkU7QUFPQSxrQkFBYyxDQUFDLFNBQWYsQ0FBeUIsc0NBQXpCLEVBQWlFO0FBRTdEO0FBR0EsVUFBSSxhQUFhLEdBQUcsS0FBcEIsQ0FMNkQsQ0FRN0Q7QUFDQTs7QUFJQSxPQUFDLENBQUM7QUFHRSxjQUFNLENBQUMsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVSxDQUFWLEVBQVc7QUFBSSxpQkFBTyxDQUFDLENBQUQsQ0FBUDtBQUFhLFNBQTdEO0FBQ0EsY0FBTSxDQUFDLGdCQUFQLENBQXdCLGNBQXhCLEVBQXdDLFVBQVUsQ0FBVixFQUFXO0FBQUksaUJBQU8sQ0FBQyxDQUFELENBQVA7QUFBYSxTQUFwRTtBQUVBLGtCQUFVLENBQUMsVUFBRCxFQUFhLEdBQWIsQ0FBVjtBQUVILE9BUkEsQ0FBRDs7QUFZQSxlQUFTLGVBQVQsR0FBd0I7QUFFcEI7QUFDQSxlQUFPLFFBQVEsQ0FBQyxRQUFULENBQWtCLElBQWxCLENBQXVCLE9BQXZCLENBQStCLGNBQS9CLEVBQStDLEtBQS9DLENBQVA7QUFDSDs7QUFHRCxlQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBa0I7QUFFZCxZQUFJLGFBQUosRUFBbUI7QUFFbkIscUJBQWEsR0FBRyxJQUFoQjtBQUdBLFlBQUksYUFBYSxHQUFHLG9CQUFvQixDQUFDLElBQUQsQ0FBeEM7QUFHQSxZQUFJLFFBQVEsR0FBRyxFQUFmOztBQUVBLFlBQUksQ0FBQyxDQUFDLE9BQU4sRUFBZTtBQUdYLGtCQUFRLEdBQUc7QUFFUCxtQkFBTyxFQUFFLENBQUMsQ0FBQyxPQUZKO0FBR1AsbUJBQU8sRUFBRSxDQUFDLENBQUM7QUFISixXQUFYO0FBTUg7O0FBSUQsWUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQWxCO0FBQ0EsWUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQWxCOztBQUVBLFlBQUksYUFBYSxDQUFDLGFBQWQsSUFBK0IsU0FBbkMsRUFBOEM7QUFFMUMsdUJBQWEsQ0FBQyxhQUFkLEdBQThCO0FBQUUsZUFBRyxFQUFFLGVBQWUsRUFBdEI7QUFBMEIsZ0JBQUksRUFBRSxJQUFoQztBQUFzQyxnQkFBSSxFQUFFLElBQTVDO0FBQWtELG1CQUFPLEVBQUU7QUFBM0QsV0FBOUI7QUFFQSx1QkFBYSxDQUFDLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBa0MsYUFBYSxDQUFDLGFBQWhEO0FBRUgsU0FORCxNQU1PO0FBRUgsdUJBQWEsQ0FBQyxhQUFkLENBQTRCLElBQTVCLEdBQW1DLElBQW5DO0FBQ0EsdUJBQWEsQ0FBQyxhQUFkLENBQTRCLElBQTVCLEdBQW1DLElBQW5DO0FBR0EsdUJBQWEsQ0FBQyxhQUFkLENBQTRCLE9BQTVCLEdBQXNDLFFBQXRDO0FBRUEsdUJBQWEsQ0FBQyxTQUFkLENBQXdCLElBQXhCLENBQTZCLGFBQWEsQ0FBQyxZQUEzQyxJQUEyRCxhQUFhLENBQUMsYUFBekU7QUFDSDs7QUFHRCxjQUFNLENBQUMsWUFBUCxDQUFvQixPQUFwQixDQUE0QixXQUE1QixFQUF5QyxJQUFJLENBQUMsU0FBTCxDQUFlLGFBQWEsQ0FBQyxTQUE3QixDQUF6QztBQUVIOztBQUdELGVBQVMsb0JBQVQsQ0FBOEIsZ0JBQTlCLEVBQStEO0FBQWpDO0FBQUE7QUFBaUM7O0FBRTNELFlBQUksY0FBYyxHQUFRLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLENBQTRCLFdBQTVCLENBQTFCOztBQUVBLFlBQUksY0FBYyxJQUFJLFNBQXRCLEVBQWlDO0FBRTdCLGNBQUksQ0FBQyxnQkFBTCxFQUF1QixPQUFPLElBQVA7QUFFdkIsd0JBQWMsR0FBRyxhQUFqQjtBQUNIOztBQUdELFlBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFMLENBQVcsY0FBWCxDQUFoQjtBQUdBLFlBQUksR0FBRyxHQUFHLGVBQWUsRUFBekI7QUFDQSxZQUFJLGFBQWEsR0FBRyxTQUFwQjtBQUVBLFlBQUksWUFBWSxHQUFHLENBQUMsQ0FBcEI7O0FBRUEsYUFBSyxZQUFZLEdBQUcsQ0FBcEIsRUFBdUIsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFWLENBQWUsTUFBckQsRUFBNkQsWUFBWSxFQUF6RSxFQUE2RTtBQUN6RSxjQUFJLFNBQVMsQ0FBQyxJQUFWLENBQWUsWUFBZixFQUE2QixHQUE3QixJQUFvQyxHQUF4QyxFQUE2QztBQUN6Qyx5QkFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFWLENBQWUsWUFBZixDQUFoQjtBQUNBO0FBQ0g7QUFDSjs7QUFFRCxlQUFPO0FBQ0gsdUJBQWEsRUFBRSxhQURaO0FBQzJCLG1CQUFTLEVBQUUsU0FEdEM7QUFDaUQsc0JBQVksRUFBRTtBQUQvRCxTQUFQO0FBSUg7O0FBR0QsZUFBUyxVQUFULEdBQW1CO0FBR2YsWUFBSSxhQUFhLEdBQUcsb0JBQW9CLEVBQXhDO0FBR0EsWUFBSSxDQUFDLGFBQUwsRUFBb0I7QUFHcEIsWUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFuQixFQUFrQztBQUlsQyxZQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBbEM7O0FBRUEsWUFBSSxhQUFKLEVBQW1CO0FBRWYsZ0JBQU0sQ0FBQyxRQUFQLENBQWdCO0FBQ1osZUFBRyxFQUFFLGFBQWEsQ0FBQyxJQURQO0FBQ2EsZ0JBQUksRUFBRSxhQUFhLENBQUMsSUFEakM7QUFDdUMsb0JBQVEsRUFBRTtBQURqRCxXQUFoQjtBQU1BLG9CQUFVLENBQUM7QUFBYyxnQ0FBb0I7QUFBSyxXQUF4QyxFQUEwQyxJQUExQyxDQUFWLENBUmUsQ0FhZjtBQUdBO0FBRUg7QUFJSjs7QUFHRCxlQUFTLG9CQUFULEdBQTZCO0FBSXpCLFlBQUksYUFBYSxHQUFHLG9CQUFvQixFQUF4QztBQUVBLFlBQUksQ0FBQyxhQUFMLEVBQW9CO0FBQ3BCLFlBQUksQ0FBQyxhQUFhLENBQUMsYUFBbkIsRUFBa0M7QUFHbEMsWUFBSSxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWxDOztBQUdBLFlBQUksYUFBSixFQUFtQjtBQUdmLGNBQUksYUFBYSxDQUFDLE9BQWxCLEVBQTJCO0FBR3ZCLGdCQUFJLGFBQWEsQ0FBQyxPQUFkLENBQXNCLE9BQTFCLEVBQW1DO0FBRy9CLGtCQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsT0FBZCxDQUFzQixPQUE5QjtBQUNBLGtCQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsT0FBZCxDQUFzQixPQUE5QjtBQUdBLGtCQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBN0IsQ0FBdEI7O0FBSUEsa0JBQUksZUFBZSxJQUFJLGVBQWUsQ0FBQyxVQUF2QyxFQUFtRDtBQUUvQyxvQkFBSSxNQUFNLEdBQUcsSUFBYjs7QUFFQSxvQkFBSSxLQUFLLFdBQUwsR0FBbUIsT0FBbkIsQ0FBMkIsZUFBZSxDQUFDLFFBQWhCLENBQXlCLFdBQXpCLEVBQTNCLElBQXFFLENBQUMsQ0FBMUUsRUFBNkU7QUFDekUsd0JBQU0sR0FBRyxLQUFUO0FBQ0g7O0FBRUQscUJBQUssSUFBSSxHQUFDLEdBQUcsQ0FBYixFQUFnQixHQUFDLEdBQUcsZUFBZSxDQUFDLFVBQWhCLENBQTJCLE1BQS9DLEVBQXVELEdBQUMsRUFBeEQsRUFBNEQ7QUFFeEQsc0JBQUksZUFBZSxDQUFDLFVBQWhCLENBQTJCLEdBQTNCLEVBQThCLElBQTlCLEtBQXVDLFVBQTNDLEVBQXVELENBRXREOztBQUNELHNCQUFJLGVBQWUsQ0FBQyxVQUFoQixDQUEyQixHQUEzQixFQUE4QixJQUE5QixLQUF1QyxNQUEzQyxFQUFtRCxDQUVsRDtBQUNKOztBQUVELG9CQUFJLENBQUMsTUFBTCxFQUFhO0FBRVQsc0JBQUksVUFBUSxHQUFHLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsU0FBbkIsQ0FBNkIsZUFBN0IsQ0FBZjtBQUVBLG1CQUFDLENBQUMsVUFBRCxDQUFELENBQVksSUFBWixDQUFpQixDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CLElBQW5CLEVBQWpCO0FBQ0EsbUJBQUMsQ0FBQyxVQUFELENBQUQsQ0FBWSxRQUFaLENBQXFCLGVBQXJCO0FBRUEsNEJBQVUsQ0FBQztBQUFjLG9DQUFnQixDQUFDLFVBQUQsQ0FBaEI7QUFBNkIsbUJBQTVDLEVBQThDLElBQTlDLENBQVY7QUFFSDtBQUVKO0FBRUo7QUFHSjs7QUFJRCxvQkFBVSxDQUFDO0FBSVAsc0JBQVUsQ0FBQztBQUNQLDJCQUFhLENBQUMsU0FBZCxDQUF3QixJQUF4QixDQUE2QixNQUE3QixDQUFvQyxhQUFhLENBQUMsWUFBbEQ7QUFDQSxvQkFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxhQUFhLENBQUMsU0FBN0IsQ0FBekM7QUFJSCxhQU5TLEVBTVAsSUFOTyxDQUFWO0FBUUgsV0FaUyxFQVlQLElBWk8sQ0FBVjtBQWNIO0FBRUo7O0FBR0QsZUFBUyxnQkFBVCxDQUEwQixNQUExQixFQUFnQztBQUc1QixTQUFDLENBQUMsTUFBRCxDQUFELENBQVUsTUFBVjtBQUdIOztBQUtELGFBQU87QUFFSCxnQkFBUSxFQUFFLEdBRlA7QUFJSCxtQkFBVyxFQUFFLHdDQUpWO0FBUUgsWUFBSSxFQUFFLGNBQVUsS0FBVixFQUFpQixFQUFqQixFQUFxQixLQUFyQixFQUEwQixDQUUvQjtBQVZFLE9BQVA7QUFnQkgsS0EvUUQ7QUFpUkgsR0FoU0Q7O0FBa1NBLFNBQU87QUFDSCxXQUFPLEVBQUU7QUFETixHQUFQO0FBSUgsQ0EzU3VDLEVBQXhDOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFVQSxJQUFNLGNBQWMsR0FBRztBQUVuQixNQUFNLE9BQU8sR0FBRyxTQUFWLE9BQVUsQ0FBVSxVQUFWLEVBQThCLGVBQTlCLEVBQXFEO0FBRWpFLFFBQUksbUJBQW1CLEdBQW9CLDBEQUE2QixnQkFBN0IsQ0FBOEMsZUFBOUMsRUFBK0QsZUFBL0QsQ0FBM0M7QUFFQSx1QkFBbUIsQ0FBQyxTQUFwQixDQUE4QixjQUE5QixFQUE4QyxDQUFDLFlBQUQsRUFBZSxVQUFmLEVBQTJCLFlBQTNCLEVBQXlDLFVBQVUsVUFBVixFQUFzQixRQUF0QixFQUFnQyxVQUFoQyxFQUF5RDtBQUc1SSxhQUFPO0FBRUgsZ0JBQVEsRUFBRSxHQUZQO0FBSUgsWUFBSSxFQUFFLGNBQVUsS0FBVixFQUFpQixJQUFqQixFQUF1QixLQUF2QixFQUE0QjtBQUU5QixlQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsYUFHckIsQ0FIRDtBQU1BLG9CQUFVLENBQUMsdUJBQVgsR0FBcUMsSUFBckM7O0FBRUEsY0FBTSxRQUFRLEdBQUcsU0FBWCxRQUFXO0FBRWIsZ0JBQUksZUFBZSxHQUFHLEtBQXRCO0FBRUEsNERBQWdCLElBQUksQ0FBQyxDQUFELENBQXBCLEVBQXlCLFVBQVUsR0FBVixFQUFhO0FBRWxDLGtCQUFJLGVBQUosRUFBcUI7O0FBRXJCLGtCQUFJLEdBQUcsQ0FBQyxJQUFKLENBQVMsV0FBVCxNQUF5QixRQUF6QixLQUF3QyxHQUFHLENBQUMsT0FBSixDQUFZLFdBQVosTUFBNkIsT0FBN0IsSUFBd0MsR0FBRyxDQUFDLE9BQUosQ0FBWSxXQUFaLE1BQTZCLFVBQTdHLENBQUosRUFBOEg7QUFFMUgsb0JBQUksR0FBRyxDQUFDLEtBQUosSUFBYSxFQUFqQixFQUFxQjtBQUVqQixxQkFBRyxDQUFDLEtBQUo7QUFDQSxpQ0FBZSxHQUFHLElBQWxCO0FBQ0E7QUFDSDtBQUNKO0FBQ0osYUFiRDtBQWVILFdBbkJEOztBQXFCQSxrQkFBUSxDQUFDO0FBQU07QUFBVSxXQUFqQixFQUFtQixJQUFuQixDQUFSO0FBRUg7QUFyQ0UsT0FBUDtBQXlDSCxLQTVDNkMsQ0FBOUM7QUE4Q0gsR0FsREQ7O0FBcURBLFNBQU87QUFDSCxXQUFPO0FBREosR0FBUDtBQUtILENBNURzQixFQUF2Qjs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQUE7QUFFQTtBQUVPLElBQU0sV0FBVyxHQUFHO0FBR3ZCLGFBQVcsRUFBRTtBQUVUO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBLHNCQUFrQixFQUFFO0FBaEJYO0FBSFUsQ0FBcEIsQzs7Ozs7Ozs7Ozs7O0FDSlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBOztBQU1BLElBQUksZ0JBQWdCLEdBQUc7QUFHbkI7QUFBQTtBQUFBO0FBQUEsNEJBdUlDLENBdklELENBS0k7OztBQWNjLGtDQUFkLFVBQThCLFVBQTlCLEVBQWtELGVBQWxELEVBQTJFLElBQTNFLEVBQWdHO0FBRTVGO0FBQ0E7QUFIdUU7QUFBQTtBQUFxQixRQUs1RjtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxhQUFPLFdBQVcsQ0FBQyxvQkFBWixDQUFpQyxVQUFqQyxFQUE2QyxlQUE3QyxFQUE4RCxJQUE5RCxDQUFQO0FBRUgsS0FwQmE7O0FBZ0NBLHVDQUFkLFVBQW1DLFVBQW5DLEVBQXVELGVBQXZELEVBQWdGLElBQWhGLEVBQXFHO0FBQXJCO0FBQUE7QUFBcUI7O0FBR2pHLFVBQUksVUFBVSxHQUFnQixJQUE5QjtBQUVBLFVBQUksUUFBUSxHQUFJLFdBQVcsQ0FBQywwQkFBYixDQUF5QyxNQUF6QyxDQUFnRCxVQUFDLENBQUQsRUFBZTtBQUFLLGdCQUFDLENBQUMsSUFBRjtBQUEwQixPQUE5RixDQUFmOztBQUlBLFVBQUksUUFBUSxDQUFDLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFFckIsWUFBSSxRQUFRLENBQUMsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUVyQixpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUVBLGlCQUFPLENBQUMsR0FBUixDQUFZLHdEQUF3RCxlQUF4RCxHQUEwRSxxQkFBMUUsR0FBa0csUUFBUSxDQUFDLE1BQTNHLEdBQW9ILEdBQWhJO0FBRUEsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDQSxpQkFBTyxDQUFDLEdBQVIsQ0FBWSw4Q0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLDhDQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksOENBQVo7QUFDSDs7QUFFRCxrQkFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFELENBQXJCO0FBRUgsT0FuQkQsTUFtQk87QUFFSCxnQkFBUSxlQUFSO0FBRUksZUFBSyxjQUFMO0FBRUksc0JBQVUsR0FBRztBQUNULGtCQUFJLEVBQUUsZUFERztBQUVUO0FBQ0Esc0JBQVEsRUFBRSwrQ0FBZSxjQUFmLEVBQStCLENBQUMsU0FBRCxFQUFZLGNBQVosRUFBNEIsWUFBNUIsQ0FBL0I7QUFIRCxhQUFiO0FBTUEsdUJBQVcsQ0FBQywwQkFBWixDQUF1QyxJQUF2QyxDQUE0QyxVQUE1QztBQUVBOztBQUVKLGVBQUssMkJBQUw7QUFFSSxzQkFBVSxHQUFHO0FBQ1Qsa0JBQUksRUFBRSxlQURHO0FBRVQsc0JBQVEsRUFBRSwrQ0FBZSwyQkFBZixFQUE0QyxJQUE1QztBQUZELGFBQWI7QUFLQSx1QkFBVyxDQUFDLDBCQUFaLENBQXVDLElBQXZDLENBQTRDLFVBQTVDO0FBRUE7O0FBR0osZUFBSyxpQkFBTDtBQUVJLHNCQUFVLEdBQUc7QUFDVCxrQkFBSSxFQUFFLGVBREc7QUFFVCxzQkFBUSxFQUFFLCtDQUFlLGlCQUFmLEVBQWtDLElBQWxDO0FBRkQsYUFBYjtBQUtBLHVCQUFXLENBQUMsMEJBQVosQ0FBdUMsSUFBdkMsQ0FBNEMsVUFBNUM7QUFFQTs7QUFFSjtBQUVJLG1CQUFPLENBQUMsS0FBUixDQUFjLHlEQUF5RCxlQUF6RCxHQUEyRSwrQkFBekY7QUFFQTtBQXpDUjtBQStDSDs7QUFHRCxhQUFPLFVBQVUsQ0FBQyxRQUFsQjtBQUdILEtBbkZhOztBQWhEQyw2Q0FBNEMsRUFBNUMsQ0FIbkIsQ0FHbUU7O0FBb0luRTtBQUFDLEdBdklEOztBQW9KQSxNQUFJLFlBQVksR0FBRztBQUdmLFFBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCO0FBRWpCLFVBQUksV0FBSjs7QUFFQSxVQUFJO0FBQ0EsbUJBQVcsR0FBRywrQ0FBZSxrQkFBZixDQUFkO0FBRUgsT0FIRCxDQUlBLE9BQU8sR0FBUCxFQUFZO0FBRVIsbUJBQVcsR0FBRywrQ0FBZSxrQkFBZixFQUFtQyxFQUFuQyxDQUFkO0FBRUg7O0FBR0QsaUJBQVcsQ0FBQyxPQUFaLENBQW9CLHNCQUFwQixFQUE0QyxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLFVBQVUsS0FBVixFQUFpQixFQUFqQixFQUFtQjtBQUczRSxZQUFJLFNBQVMsR0FBRyxTQUFaLFNBQVksQ0FBVSxZQUFWLEVBQXNCO0FBRWxDLGNBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFHQSxvQkFBVSxDQUFDO0FBRVAsb0JBQVEsQ0FBQyxNQUFULENBQWdCLG9CQUFvQixZQUFwQixHQUFtQyxHQUFuRDs7QUFHQSxnQkFBSSxTQUFTLENBQUMsWUFBRCxDQUFiLEVBQTZCO0FBQ3pCLHNCQUFRLENBQUMsT0FBVCxDQUFpQixZQUFZLFlBQVosR0FBMkIsR0FBNUM7QUFDSCxhQUZELE1BRU87QUFFSCxzQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsY0FBYyxZQUFkLEdBQTZCLGtCQUE3QztBQUNIO0FBQ0osV0FYUyxFQVdQLElBWE8sQ0FBVjtBQWNBLGlCQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILFNBcEJEOztBQXVCQSxpQkFBUyxTQUFULENBQW1CLElBQW5CLEVBQXVCO0FBQ25CLGlCQUFPLEtBQVA7QUFDSDs7QUFFRCxlQUFPO0FBRUgsbUJBQVMsRUFBRTtBQUZSLFNBQVA7QUFNSCxPQXBDMkMsQ0FBNUM7QUFxQ0gsS0FwREQ7O0FBdURBLFdBQU87QUFDSCxvQkFBYyxFQUFFO0FBRGIsS0FBUDtBQU9ILEdBakVrQixFQUFuQixDQXZKbUIsQ0F5T25COzs7QUFFQSxXQUFTLGdCQUFULENBQTBCLFVBQTFCLEVBQThDLGVBQTlDLEVBQXVFLElBQXZFLEVBQTRGO0FBQXJCO0FBQUE7QUFBcUI7O0FBRXhGLFdBQU8sV0FBVyxDQUFDLGVBQVosQ0FBNEIsVUFBNUIsRUFBd0MsZUFBeEMsRUFBeUQsSUFBekQsQ0FBUDtBQUNIOztBQUlELFNBQU87QUFFSCxvQkFBZ0IsRUFBRTtBQUZmLEdBQVA7QUFPSCxDQXpQc0IsRUFBdkI7O0FBK1BBLElBQUksUUFBUSxHQUFHO0FBR1gsTUFBSSxJQUFJLEdBQUcsU0FBUCxJQUFPO0FBR1AscURBQWlCLENBQUMsSUFBRCxFQUFPLGtCQUFQLENBQWpCLEVBQTZDLE1BQTdDLENBQW9ELENBQUMsc0JBQUQsRUFBeUIsVUFBVSxvQkFBVixFQUE4QjtBQUV2RywwQkFBb0IsQ0FBQyxTQUFyQixDQUErQiwwQkFBL0IsRUFBMkQsSUFBM0QsQ0FBZ0UsZ0JBQWhFLEVBQWtGLGNBQWxGLFdBQXdHLGNBQXhHO0FBRUgsS0FKbUQsQ0FBcEQ7O0FBT0EsYUFBUyxnQkFBVCxDQUEwQixRQUExQixFQUFrQztBQUU5QixhQUFPLENBQUMsR0FBUixDQUFZLDZDQUFaO0FBQ0EsYUFBTyxDQUFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0g7O0FBRUQsYUFBUyxjQUFULENBQXdCLFFBQXhCLEVBQWdDO0FBQzVCLGFBQU8sQ0FBQyxHQUFSLENBQVksNkNBQVo7QUFDQSxhQUFPLENBQUMsR0FBUixDQUFZLFFBQVo7QUFDSDs7QUFFRCxhQUFTLGNBQVQsQ0FBd0IsUUFBeEIsRUFBZ0M7QUFDNUIsYUFBTyxDQUFDLEdBQVIsQ0FBWSw0Q0FBWjtBQUNBLGFBQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtBQUVIO0FBR0osR0E1QkQ7O0FBZ0NBLFNBQU87QUFDSCxRQUFJLEVBQUU7QUFESCxHQUFQO0FBS0gsQ0F4Q2MsRUFBZixDLENBMkNBOzs7QUFFQSxJQUFLLG1CQUFMOztBQUFBLFdBQUssbUJBQUwsRUFBd0I7QUFFcEI7QUFDQTtBQUNBO0FBQ0gsQ0FMRCxFQUFLLG1CQUFtQixLQUFuQixtQkFBbUIsTUFBeEI7O0FBT0EsU0FBUyw4QkFBVCxDQUF3QyxLQUF4QyxFQUFvRSxTQUFwRSxFQUFrRztBQUU5RixTQUFPLFNBQVMsS0FBSyxLQUFyQjtBQUNIOzs7Ozs7Ozs7Ozs7OztBQ3JVRDtBQUFBO0FBQUE7QUFBQTtBQVlBOztBQUtBLElBQUksb0JBQW9CLEdBQUc7QUFHdkIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVLENBQVUsa0JBQVYsRUFBb0M7QUFHOUMsUUFBSSwwQkFBMEIsR0FBRywwREFBeUIsZ0JBQXpCLENBQTBDLGNBQTFDLEVBQTBELGtCQUExRCxDQUFqQztBQUdBLDhCQUEwQixDQUFDLE9BQTNCLENBQW1DLGFBQW5DLEVBQWtELENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsVUFBVSxLQUFWLEVBQWlCLEVBQWpCLEVBQW1CO0FBR2pGLFVBQUksWUFBWSxHQUFHLFNBQWYsWUFBZSxDQUFVLGNBQVYsRUFBa0MsV0FBbEMsRUFBcUQ7QUFFcEUsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUsdUJBQXFCLGNBQXJCLEdBQW1DLEdBQW5DLEdBQXVDLFdBQWpELEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsS0FBVixFQUFlO0FBRVgsaUJBQU8sQ0FBQyxLQUFSLENBQWMsUUFBUSwrQkFBdEIsRUFBdUQsMkJBQXZEO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUVBLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBWFQ7QUFhQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BbEJELENBSGlGLENBeUJqRjs7O0FBRUEsVUFBSSxXQUFXLEdBQUcsU0FBZCxXQUFjLENBQVUsU0FBVixFQUEyQjtBQUV6QyxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLEdBQU4sQ0FBVSx1QkFBcUIsU0FBL0IsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFDWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWRELENBM0JpRixDQTRDakY7OztBQUVBLFVBQUksaUJBQWlCLEdBQUcsU0FBcEIsaUJBQW9CO0FBRXBCLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLCtCQUFWLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBakI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFDWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWRELENBOUNpRixDQStEakY7OztBQUVBLFVBQUksV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFVLEVBQVYsRUFBWTtBQUUxQixZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmLENBRjBCLENBSTFCOztBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUsZ0NBQWdDLEVBQTFDLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsS0FBVixFQUFlO0FBQ1gsa0JBQVEsQ0FBQyxNQUFULENBQWdCO0FBQUUsaUJBQUssRUFBRTtBQUFULFdBQWhCO0FBQ0EsaUJBQU8sQ0FBQyxLQUFSLENBQWMsS0FBZDtBQUNILFNBUlQ7QUFVQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BakJELENBakVpRixDQXNGakY7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLHFCQUFxQixHQUFHLFNBQXhCLHFCQUF3QixDQUFVLEVBQVYsRUFBYyxXQUFkLEVBQXlCO0FBRWpELFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLG1DQUFtQyxFQUFuQyxHQUF3QyxlQUF4QyxHQUEwRCxXQUFwRSxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUNYLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNBLGlCQUFPLENBQUMsS0FBUixDQUFjLEtBQWQ7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWZEOztBQWtCQSxVQUFJLFdBQVcsR0FBRyxTQUFkLFdBQWMsQ0FBVSxPQUFWLEVBQWlCO0FBRS9CLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsSUFBTixDQUFXLG1CQUFYLEVBQWdDLE9BQWhDLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsS0FBVixFQUFlO0FBQ1gsa0JBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCO0FBQ0gsU0FQVDtBQVNBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBRUgsT0FmRCxDQTNHaUYsQ0E2SGpGOzs7QUFDQSxVQUFJLGNBQWMsR0FBRyxTQUFqQixjQUFpQixDQUFVLE9BQVYsRUFBaUI7QUFHbEMsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZixDQUhrQyxDQUtsQztBQUNBO0FBQ0E7O0FBQ0EsYUFBSyxDQUFDLElBQU4sQ0FBVyxtQkFBWCxFQUFnQyxPQUFoQyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUNYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BbkJELENBOUhpRixDQW9KakY7OztBQUVBLFVBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWlCLENBQVUsT0FBVixFQUFpQjtBQUVsQyxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxpQkFBWCxFQUE4QixPQUE5QixFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUNYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BZkQsQ0F0SmlGLENBd0tqRjs7O0FBQ0EsVUFBSSxtQkFBbUIsR0FBRyxTQUF0QixtQkFBc0IsQ0FBVSxPQUFWLEVBQWlCO0FBR3ZDLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsSUFBTixDQUFXLGlCQUFYLEVBQThCLE9BQTlCLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsS0FBVixFQUFlO0FBRVgsa0JBQVEsQ0FBQyxNQUFULENBQWdCLEtBQWhCO0FBQ0gsU0FSVDtBQVVBLGVBQU8sUUFBUSxDQUFDLE9BQWhCO0FBRUgsT0FqQkQsQ0F6S2lGLENBNkxqRjtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLFFBQVEsR0FBRyxTQUFYLFFBQVcsQ0FBVSxTQUFWLEVBQTJDO0FBRXRELFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWYsQ0FGc0QsQ0FJdEQ7O0FBRUEsWUFBSSxxQkFBcUIsR0FBSyxTQUFTLENBQUMscUJBQVYsQ0FBZ0MsTUFBaEMsSUFBMEMsQ0FBM0MsR0FBZ0Qsc0JBQWhELEdBQXlFLFNBQVMsQ0FBQyxxQkFBVixDQUFnQyxJQUFoQyxDQUFxQyxHQUFyQyxDQUF0RztBQUdBLGFBQUssQ0FBQyxHQUFOLENBQVUsc0JBQXNCLFNBQVMsQ0FBQyxhQUFoQyxHQUFnRCxHQUFoRCxHQUFzRCxTQUFTLENBQUMsY0FBaEUsR0FBaUYsR0FBakYsR0FBdUYsU0FBUyxDQUFDLFVBQWpHLEdBQThHLEdBQTlHLEdBQW9ILFNBQVMsQ0FBQyxJQUE5SCxHQUFxSSxHQUFySSxHQUEySSxxQkFBM0ksR0FBbUssYUFBbkssR0FDSixTQUFTLENBQUMsU0FEaEIsRUFHSyxJQUhMLENBR1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQU5MLEVBT1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNILFNBVFQ7QUFXQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BckJELENBbk1pRixDQTJOakY7OztBQUNBLFVBQUksT0FBTyxHQUFHLFNBQVYsT0FBVSxDQUFVLEVBQVYsRUFBWTtBQUl0QixZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmLENBSnNCLENBT3RCO0FBQ0E7O0FBQ0EsYUFBSyxDQUFDLEdBQU4sQ0FBVSx3QkFBd0IsRUFBbEMsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxZQUFWLEVBQXNCO0FBQ2xCLGtCQUFRLENBQUMsTUFBVCxDQUFnQjtBQUFFLGlCQUFLLEVBQUU7QUFBVCxXQUFoQjtBQUNILFNBUFQ7QUFTQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUNILE9BbkJELENBNU5pRixDQW9QakY7OztBQUVBLFVBQUksZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CO0FBRW5CLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsR0FBTixDQUFVLHFCQUFWLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUVsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FKTCxFQUtRLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWRELENBdFBpRixDQTBRakY7OztBQUVBLFVBQUksNEJBQTRCLEdBQUcsU0FBL0IsNEJBQStCLENBQVUsRUFBVixFQUFjLFdBQWQsRUFBeUI7QUFFeEQsWUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEtBQUgsRUFBZjtBQUVBLGFBQUssQ0FBQyxHQUFOLENBQVUsbUNBQW1DLEVBQW5DLEdBQXdDLGVBQXhDLEdBQTBELFdBQXBFLEVBQ0ssSUFETCxDQUNVLFVBQVUsTUFBVixFQUFnQjtBQUNsQixrQkFBUSxDQUFDLE9BQVQsQ0FBaUIsTUFBTSxDQUFDLElBQXhCO0FBQ0gsU0FITCxFQUlRLFVBQVUsWUFBVixFQUFzQjtBQUNsQixrQkFBUSxDQUFDLE1BQVQsQ0FBZ0I7QUFBRSxpQkFBSyxFQUFFLGdFQUFnRSxFQUFoRSxHQUFxRSxLQUFyRSxHQUE2RSxXQUE3RSxHQUEyRjtBQUFwRyxXQUFoQjtBQUNBLGlCQUFPLENBQUMsS0FBUixDQUFjLFlBQWQ7QUFDSCxTQVBUO0FBU0EsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFDSCxPQWRELENBNVFpRixDQWdTakY7OztBQUVBLFVBQUksdUJBQXVCLEdBQUcsU0FBMUIsdUJBQTBCLENBQVUsWUFBVixFQUFzQjtBQUdoRCxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxzQkFBWCxFQUFtQyxZQUFuQyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUVYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUlQ7QUFVQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BakJELENBbFNpRixDQXVUakY7OztBQUVBLFVBQUkscUJBQXFCLEdBQUcsU0FBeEIscUJBQXdCLENBQVUsVUFBVixFQUFpQztBQUd6RCxZQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSCxFQUFmO0FBRUEsYUFBSyxDQUFDLElBQU4sQ0FBVyxvQkFBWCxFQUFpQyxVQUFqQyxFQUNLLElBREwsQ0FDVSxVQUFVLE1BQVYsRUFBZ0I7QUFFbEIsa0JBQVEsQ0FBQyxPQUFULENBQWlCLE1BQU0sQ0FBQyxJQUF4QjtBQUNILFNBSkwsRUFLUSxVQUFVLEtBQVYsRUFBZTtBQUVYLGtCQUFRLENBQUMsTUFBVCxDQUFnQixLQUFoQjtBQUNILFNBUlQ7QUFVQSxlQUFPLFFBQVEsQ0FBQyxPQUFoQjtBQUVILE9BakJEOztBQW9CQSxlQUFTLGtCQUFULENBQTRCLEdBQTVCLEVBQWlDLElBQWpDLEVBQXFDO0FBRWpDLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLENBQUMsSUFBTixDQUFXLEdBQVgsRUFBZ0IsSUFBaEIsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFFWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFFSCxPQTdWZ0YsQ0FnV2pGOzs7QUFDQSxlQUFTLG9CQUFULENBQThCLEdBQTlCLEVBQW1DLEVBQW5DLEVBQXFDO0FBRWpDLFlBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFILEVBQWY7QUFFQSxhQUFLLFVBQUwsQ0FBZ0IsR0FBRyxNQUFILEdBQU8sRUFBdkIsRUFDSyxJQURMLENBQ1UsVUFBVSxNQUFWLEVBQWdCO0FBRWxCLGtCQUFRLENBQUMsT0FBVCxDQUFpQixNQUFNLENBQUMsSUFBeEI7QUFDSCxTQUpMLEVBS1EsVUFBVSxLQUFWLEVBQWU7QUFFWCxrQkFBUSxDQUFDLE1BQVQsQ0FBZ0IsS0FBaEI7QUFDSCxTQVJUO0FBVUEsZUFBTyxRQUFRLENBQUMsT0FBaEI7QUFFSCxPQWpYZ0YsQ0FvWGpGOzs7QUFFQSxVQUFJLG9CQUFvQixHQUFHLFNBQXZCLG9CQUF1QixDQUFVLGlCQUFWLEVBQStDO0FBRXRFLGVBQU8sa0JBQWtCLENBQUMsdUNBQUQsRUFBMEMsaUJBQTFDLENBQXpCO0FBRUgsT0FKRCxDQXRYaUYsQ0E2WGpGOzs7QUFFQSxVQUFJLHVCQUF1QixHQUFHLFNBQTFCLHVCQUEwQixDQUFVLEVBQVYsRUFBb0I7QUFFOUMsZUFBTyxvQkFBb0IsQ0FBQywyQkFBRCxFQUE4QixFQUE5QixDQUEzQjtBQUVILE9BSkQ7O0FBT0EsYUFBTztBQUVILG1CQUFXLEVBQUUsWUFGVjtBQUdILGtCQUFVLEVBQUUsV0FIVDtBQUlILHdCQUFnQixFQUFFLGlCQUpmO0FBS0gsa0JBQVUsRUFBRSxXQUxUO0FBTUg7QUFDQSxxQkFBYSxFQUFFLGNBUFo7QUFTSCxxQkFBYSxFQUFFLGNBVFo7QUFVSCxrQkFBVSxFQUFFLFdBVlQ7QUFXSCxxQkFBYSxFQUFFLG1CQVhaO0FBWUgsZUFBTyxFQUFFLFFBWk47QUFhSCx1QkFBZSxFQUFFLGdCQWJkO0FBY0gsY0FBTSxFQUFFLE9BZEw7QUFlSCw0QkFBb0IsRUFBRSxxQkFmbkI7QUFnQkgsbUNBQTJCLEVBQUUsNEJBaEIxQjtBQWlCSCwrQkFBdUIseUJBakJwQjtBQWtCSCw2QkFBcUIsdUJBbEJsQjtBQW1CSCw0QkFBb0Isc0JBbkJqQjtBQW9CSCwrQkFBdUI7QUFwQnBCLE9BQVA7QUF5QkgsS0EvWmlELENBQWxEO0FBZ2FILEdBdGFEOztBQXdhQSxTQUFPO0FBQ0g7QUFDQSxXQUFPLEVBQUU7QUFGTixHQUFQO0FBTUgsQ0FqYjBCLEVBQTNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQSxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUosRUFBVDtBQUVBLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQVosRUFBNEMsRUFBNUMsRSxDQUdBO0FBRUE7QUFJQTs7QUFDQSxJQUFVLGdCQUFWOztBQUFBLFdBQVUsZ0JBQVYsRUFBMEI7QUFFdEI7QUFBQTtBQUFBO0FBQUE7QUF3Vkk7QUFFQTtBQUVBLDBCQUFlLGlHQUFmLENBNVZKLENBOFhJO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0gsS0ExWkQsQ0FPSTs7O0FBRUE7QUFHSTtBQUVBLE9BQUMsQ0FBQywyQkFBRCxDQUFELENBQStCLElBQS9CLENBQW9DLFVBQUMsR0FBRCxFQUFNLElBQU4sRUFBVTtBQUUxQyxZQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLGVBQWIsQ0FBWjtBQUdBLFlBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQVAsQ0FBRCxDQUFlLFFBQWYsR0FBMEIsTUFBOUM7O0FBRUEsWUFBSSxhQUFhLEtBQUssQ0FBdEIsRUFBeUI7QUFDckIsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLFFBQXJCO0FBQ0EsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE1BQXpCO0FBRUEsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFdBQVIsQ0FBb0I7QUFDaEIsbUJBQU8sQ0FBQyxDQUFDLFNBQUQsQ0FBRCxDQUFhLElBQWIsQ0FBa0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsRUFBbEIsQ0FBUDtBQUNILFdBRkQ7QUFJSDtBQUNKLE9BaEJEO0FBbUJILEtBeEJELENBVEosQ0FxQ0k7OztBQUNBO0FBRUksT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixVQUFVLENBQVYsRUFBVztBQUVuQyxZQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLFVBQWIsQ0FBZDtBQUNBLFlBQUksU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsWUFBYixDQUFoQjtBQUNBLFlBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxrQkFBYixDQUF2QjtBQUNBLFlBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxtQkFBYixDQUF4Qjs7QUFHQSxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixXQUFDLENBQUMsU0FBRCxDQUFELENBQWEsS0FBYixDQUFtQjtBQUFFLG9CQUFRLEVBQUUsUUFBWjtBQUFzQixvQkFBUSxFQUFFO0FBQWhDLFdBQW5CO0FBRUEsV0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUIsQ0FBK0IsY0FBL0I7QUFDSCxTQWJrQyxDQWVuQzs7O0FBQ0EsWUFBSSxPQUFPLEtBQUssWUFBaEIsRUFBOEI7QUFFMUIsV0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsSUFBcEI7QUFFSDs7QUFFRCxZQUFJLE9BQU8sS0FBSyxZQUFoQixFQUE4QjtBQUUxQixXQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixJQUFwQjtBQUVIOztBQUVELFlBQUksT0FBTyxLQUFLLGVBQWhCLEVBQWlDO0FBQzdCO0FBRUEsa0JBQVEsQ0FBQyxhQUFULENBQXVCLGdCQUF2QixFQUF5QyxjQUF6QyxDQUF3RDtBQUNwRCxvQkFBUSxFQUFFO0FBRDBDLFdBQXhEO0FBSUgsU0FuQ2tDLENBb0NuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssa0JBQWhCLEVBQW9DO0FBRWhDLGNBQUksQ0FBQyxHQUFHLElBQUksSUFBSixFQUFSO0FBRUEsY0FBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQUYsS0FBa0IsR0FBbEIsR0FBd0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFGLEtBQWUsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsR0FBdEIsQ0FBekIsR0FBc0QsR0FBdEQsR0FBNEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFGLEVBQUQsRUFBYyxDQUFkLEVBQWlCLEdBQWpCLENBQTdELEdBQXFGLEdBQXJGLEdBQTJGLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBRixFQUFELEVBQWUsQ0FBZixFQUFrQixHQUFsQixDQUE1RixHQUFxSCxHQUFySCxHQUEySCxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUE1SCxHQUF1SixHQUF2SixHQUE2SixDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQUYsRUFBRCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixDQUF2SztBQUVBLFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLEdBQXBCLENBQXdCLEVBQXhCO0FBRUgsU0E5Q2tDLENBaURuQzs7O0FBRUEsWUFBSSxPQUFPLEtBQUssaUJBQWhCLEVBQW1DO0FBRy9CO0FBRUE7QUFHQSxjQUFJLEdBQUcsR0FBRyxJQUFJLElBQUosRUFBVjtBQUVBLGNBQUksWUFBWSxHQUE4QixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixDQUFwQixFQUF3QixLQUF0RTtBQUVBLGNBQUksR0FBRyxHQUFHLElBQUksSUFBSixDQUFTLFlBQVQsQ0FBVjtBQUVBLGNBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFKLEdBQWMsT0FBZCxLQUEwQixHQUFHLENBQUMsT0FBSixHQUFjLE9BQWQsRUFBeEM7QUFFQSxjQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBTCxDQUFXLE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBRUEsV0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsR0FBckIsQ0FBeUIsT0FBekI7QUFFSCxTQXZFa0MsQ0ErRW5DO0FBQ0E7QUFDQTs7O0FBRUEsU0FBQyxDQUFDLDhCQUFELENBQUQsQ0FBa0MsS0FBbEMsQ0FBd0MsVUFBQyxDQUFELEVBQUU7QUFFdEMsV0FBQyxDQUFDLGNBQUY7QUFDQSxXQUFDLENBQUMsZUFBRjtBQUVBLGNBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0IsR0FBeEIsRUFBeEI7QUFFQSxrQkFBUSxDQUFDLFFBQVQsQ0FBa0IsSUFBbEIsR0FBNkMsQ0FBQyxDQUFDLE1BQUYsQ0FBVSxJQUFWLEdBQWlCLHFCQUFqQixHQUF5QyxpQkFBdEY7QUFFSCxTQVREO0FBV0gsT0E5RkQ7QUFpR0EsVUFBSSxnQkFBZ0IsR0FBRyxDQUF2QjtBQUVBLE9BQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCLEtBQXZCLENBQTZCLFVBQUMsQ0FBRCxFQUFFO0FBRTNCLHdCQUFnQjtBQUVoQixTQUFDLENBQUMsQ0FBQyxDQUFDLE1BQUgsQ0FBRCxDQUFZLFdBQVosQ0FBd0Isa0JBQXhCO0FBR0gsT0FQRCxFQXJHSixDQWlISTtBQUVBOztBQUNBLFVBQUksQ0FBQyxHQUFHLFNBQUosQ0FBSSxDQUFVLElBQVYsRUFBZ0IsR0FBaEIsRUFBcUIsS0FBckIsRUFBeUI7QUFFN0IsWUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQUwsRUFBVjtBQUNBLFlBQUksR0FBRyxDQUFDLE1BQUosR0FBYSxHQUFqQixFQUFzQixPQUFPLEdBQVA7QUFDdEIsWUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLE1BQUwsQ0FBWSxHQUFaLElBQW1CLEdBQTVCO0FBQ0EsWUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFNBQUgsQ0FBYSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQUosR0FBYSxHQUFqQixDQUFoQixDQUFUO0FBRUEsZUFBTyxFQUFQO0FBQ0gsT0FSRCxDQXBISixDQStISTs7O0FBRUEsT0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLEVBQVYsQ0FBYSxRQUFiLEVBQXVCO0FBQ25CLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxTQUFWLEVBQVI7O0FBRUEsWUFBSSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1AsV0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixNQUFuQixDQUEwQixNQUExQjtBQUNILFNBRkQsTUFFTztBQUNILFdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUIsT0FBbkIsQ0FBMkIsTUFBM0I7QUFDSDtBQUNKLE9BUkQsRUFqSUosQ0FpSkk7QUFDQTtBQUNBOztBQUNBLE9BQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxFQUFaLENBQWUsTUFBZixFQUF1QjtBQUVuQixTQUFDLENBQUMsSUFBRCxDQUFELENBQVEsU0FBUixDQUFrQjtBQUNkLGdCQUFNLEVBQUU7QUFETSxTQUFsQjtBQUdILE9BTEQ7QUFXQSxPQUFDLENBQUMsUUFBRCxDQUFELENBQVksS0FBWixDQUFrQjtBQUdkLFNBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsSUFBbEIsQ0FBdUIsbUJBQXZCLEVBQTRDLFVBQUMsQ0FBRCxFQUFFO0FBRTFDLGlCQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaO0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVksQ0FBWjtBQUVILFNBTEQ7QUFRQSxTQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLElBQWxCLENBQXVCLFdBQXZCLEVBQW9DLFVBQUMsQ0FBRCxFQUFFO0FBRWxDLGtCQUFRLENBQUMsQ0FBQyxLQUFWO0FBQ0ksaUJBQUssQ0FBTDtBQUNJLHFCQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaO0FBQ0E7O0FBQ0osaUJBQUssQ0FBTDtBQUNJLHFCQUFPLENBQUMsR0FBUixDQUFZLGdDQUFaO0FBQ0E7O0FBQ0osaUJBQUssQ0FBTDtBQUVJLHFCQUFPLENBQUMsR0FBUixDQUFZLHVDQUFaO0FBQ0EscUJBQU8sQ0FBQyxHQUFSLENBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFILENBQWI7QUFFQTs7QUFHSjtBQUNJLG1CQUFLLENBQUMsU0FBRCxDQUFMO0FBaEJSLFdBRmtDLENBcUJsQztBQUNBO0FBQ0E7O0FBRUgsU0F6QkQ7QUEwQkgsT0FyQ0Q7QUF5Q0gsS0F4TUQ7O0FBd01DLEtBOU9MLENBcVBJO0FBQ0E7QUFDQTs7QUFDQTtBQUNJO0FBQ0EsT0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0IsT0FBL0IsQ0FBdUMsT0FBdkM7QUFDSCxLQUhELENBeFBKLENBa1FJO0FBQ0E7OztBQUNBLGlFQUE0QixNQUE1QixFQUFrQztBQUc5QjtBQUNBO0FBRUEsYUFBTyxDQUFDLEdBQVIsQ0FBWSwwREFBMEQsTUFBMUQsR0FBbUUsR0FBL0U7QUFFQSxPQUFDLENBQUMsS0FBRCxDQUFELENBQVMsSUFBVCxDQUFjLFVBQVUsRUFBVixFQUFZO0FBRXRCLFlBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsbUJBQWIsQ0FBbkI7O0FBQ0EsWUFBSSxZQUFZLEtBQUssT0FBckIsRUFBOEI7QUFBRTtBQUFTOztBQUFBO0FBRXpDLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSO0FBRUEsWUFBSSxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsWUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxPQUFiLENBQWI7O0FBQ0EsWUFBSSxjQUFjLEdBQUcsRUFBckI7O0FBRUEsWUFBSSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUV0QixxQkFBVyxHQUFHLGFBQWEsTUFBYixHQUFzQixJQUFwQztBQUNBLHdCQUFjLEdBQUcsT0FBTyxNQUF4QjtBQUNILFNBSkQsTUFLSztBQUNELGdCQUFNLEdBQUcsRUFBVDtBQUNIOztBQUVELFNBQUMsQ0FBQyxrQ0FBa0MsV0FBbEMsR0FBZ0QsYUFBaEQsR0FBZ0UsY0FBaEUsR0FBaUYsVUFBbEYsQ0FBRCxDQUErRixZQUEvRixDQUE0RyxJQUE1RztBQUVILE9BdkJELEVBUjhCLENBbUM5Qjs7QUFFQSxPQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFVBQVUsQ0FBVixFQUFXO0FBRW5DLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsVUFBYixDQUFkOztBQUVBLFlBQUksT0FBTyxLQUFLLGFBQWhCLEVBQStCO0FBRzNCLGNBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxNQUFSLEdBQWlCLElBQWpCLEVBQVg7O0FBQ0EsY0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBYixDQUoyQixDQU0zQjs7O0FBQ0EsY0FBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxPQUFiLENBQWI7O0FBQ0EsY0FBSSxjQUFjLEdBQUcsRUFBckI7O0FBRUEsY0FBSSxNQUFNLEtBQUssU0FBZixFQUEwQjtBQUN0QixrQkFBTSxHQUFHLEVBQVQ7QUFDSCxXQUZELE1BR0s7QUFDRCwwQkFBYyxHQUFHLE9BQU8sTUFBeEI7QUFDSDs7QUFFRCxjQUFJLElBQUksQ0FBQyxFQUFMLENBQVEsVUFBUixDQUFKLEVBQXlCO0FBQ3JCLGlCQUFLLENBQUMsSUFBTixDQUFXLGNBQWMsY0FBekI7O0FBQ0EsZ0JBQUksQ0FBQyxPQUFMO0FBQ0gsV0FIRCxNQUdPO0FBQ0gsZ0JBQUksQ0FBQyxNQUFMOztBQUNBLGlCQUFLLENBQUMsSUFBTixDQUFXLGNBQWMsY0FBekI7QUFFSDtBQUVKO0FBRUosT0FoQ0Q7QUF3Q0gsS0E3RUQsQ0FwUUosQ0FtV0k7QUFDQTs7O0FBQ0Esa0RBQWEsS0FBYixFQUFrQjtBQUVkLFVBQUkscUVBQU8sS0FBUCxNQUFpQixRQUFyQixFQUErQixPQUFPLEtBQVA7O0FBRS9CLFdBQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBRW5CLFlBQUksQ0FBQyxLQUFLLENBQUMsY0FBTixDQUFxQixHQUFyQixDQUFMLEVBQWdDO0FBRWhDLFlBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFELENBQWpCOztBQUNBLFlBQUksSUFBSSxHQUFHLHFFQUFPLEtBQVYsQ0FBUjs7QUFDQSxZQUFJLEtBQUo7O0FBQ0EsWUFBSSxJQUFJLEtBQUssUUFBVCxLQUFzQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQU4sQ0FBWSxLQUFLLFlBQWpCLENBQTlCLENBQUosRUFBbUU7QUFDL0QsZUFBSyxDQUFDLEdBQUQsQ0FBTCxHQUFhLElBQUksSUFBSixDQUFTLEtBQVQsQ0FBYjtBQUNILFNBRkQsTUFHSyxJQUFJLElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3hCLGVBQUssWUFBTCxDQUFrQixLQUFsQjtBQUNIO0FBQ0o7QUFDSixLQWxCRDs7QUFuV08sNkJBQXNCLENBQXRCO0FBd1pYO0FBQUMsR0ExWkQ7O0FBQWEsZ0NBQVUsVUFBVjtBQTRaaEIsQ0E5WkQsRUFBVSxnQkFBZ0IsS0FBaEIsZ0JBQWdCLE1BQTFCLEUsQ0FnYUE7OztBQUdBLElBQUksYUFBYSxHQUFHLElBQUksZ0JBQWdCLENBQUMsVUFBckIsRUFBcEI7Q0FLQTtBQUNBOztBQUlBLElBQUksT0FBUSxNQUFNLENBQUMsa0JBQUQsQ0FBZCxJQUF1QyxRQUEzQyxFQUFxRDtBQUVqRCxRQUFNLENBQUMsa0JBQUQsQ0FBTixHQUE2QixDQUE3QjtBQUNIOztBQUVELE1BQU0sQ0FBQyxrQkFBRCxDQUFOLEdBQTZCLE1BQU0sQ0FBQyxrQkFBRCxDQUFOLEdBQTZCLENBQTFEOztBQUdBLElBQUksTUFBTSxDQUFDLGtCQUFELENBQU4sS0FBK0IsQ0FBbkMsRUFBc0M7QUFHbEMsR0FBQyxDQUFDO0FBRUU7QUFDQTtBQUNBLGNBQVUsQ0FBQztBQUFRLG1CQUFhLENBQUMsV0FBZDtBQUE4QixLQUF2QyxFQUF5QyxJQUF6QyxDQUFWLENBSkYsQ0FPRTtBQUNBO0FBQ0E7O0FBQ0EsY0FBVSxDQUFDO0FBQ1AsbUJBQWEsQ0FBQywyQkFBZCxDQUEwQyxpQkFBMUMsRUFETyxDQUdQOztBQUVBLGdCQUFVLENBQUM7QUFBTSw0QkFBYSxDQUFiO0FBQTJDLE9BQWxELEVBQW9ELElBQXBELENBQVY7QUFFSCxLQVBTLEVBUUosSUFSSSxDQUFWO0FBY0gsR0F4QkEsQ0FBRDtBQTBCSDs7QUFHRCxJQUFJLEVBQUUsR0FBRyxJQUFJLElBQUosRUFBVDtBQUNBLGdCQUFnQixDQUFDLFVBQWpCLENBQTRCLFdBQTVCLEcsQ0FJQTtBQUVBOztBQUNBLENBQUMsQ0FBQyxFQUFGLENBQUssT0FBTCxHQUFlLFVBQVUsSUFBVixFQUFnQixFQUFoQixFQUFrQjtBQUc3QixNQUFJLENBQUMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFMLEVBQTBCO0FBQ3RCLFdBQU8sS0FBUDtBQUNIOztBQUVELE1BQUksSUFBSSxHQUFHLEtBQUssSUFBTCxDQUFVLFFBQVYsRUFBb0IsSUFBcEIsQ0FBWDs7QUFFQSxNQUFJLElBQUksS0FBSyxTQUFULElBQXNCLElBQUksQ0FBQyxNQUFMLEtBQWdCLENBQTFDLEVBQTZDO0FBQ3pDLFdBQU8sS0FBUDtBQUNIOztBQUVELFNBQVEsQ0FBQyxDQUFELEtBQU8sQ0FBQyxDQUFDLE9BQUYsQ0FBVSxFQUFWLEVBQWMsSUFBZCxDQUFmO0FBQ0gsQ0FkRCxDLENBa0JBOzs7QUFHQSxTQUFTLHFCQUFULEdBQThCO0FBRTFCLFNBQU8sQ0FBQyxHQUFSLENBQVksZ0RBQVo7O0FBR0EsTUFBSSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLE9BQWpCLENBQXlCLE9BQXpCLEVBQWtDLHFCQUFsQyxDQUFKLEVBQThEO0FBQzFELFdBQU8sQ0FBQyxHQUFSLENBQVksZUFBWjtBQUNBO0FBQ0g7O0FBRUQsR0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFVLENBQVYsRUFBVztBQUVwQyxXQUFPLENBQUMsR0FBUixDQUFZLG1DQUFaO0FBQ0EsV0FBTyxDQUFDLEdBQVIsQ0FBYSxDQUFiO0FBQ0gsR0FKRDtBQU1IOztBQUVELENBQUMsQ0FBQztBQUVFLFNBQU8sQ0FBQyxHQUFSLENBQVksMENBQVo7QUFFQSx1QkFBcUI7QUFFeEIsQ0FOQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWhCQSx5QiIsImZpbGUiOiJidW5kbGVfdGltZXNoZWV0YXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBEYXRhIHN0cnVjdCB0byBjb250YWluIG9ubHkgQyBzZWN0aW9uIHdpdGggY3VzdG9tIGZpZWxkcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gQmFzZSgpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gQmFzZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5CYXNlID0gQmFzZTtcclxuICAgIH0pKFRlbGVtZXRyeSA9IE1pY3Jvc29mdC5UZWxlbWV0cnkgfHwgKE1pY3Jvc29mdC5UZWxlbWV0cnkgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vIFRISVMgRklMRSBXQVMgQVVUT0dFTkVSQVRFRFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiQmFzZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgVGVsZW1ldHJ5O1xyXG4gICAgKGZ1bmN0aW9uIChUZWxlbWV0cnkpIHtcclxuICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTeXN0ZW0gdmFyaWFibGVzIGZvciBhIHRlbGVtZXRyeSBpdGVtLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHZhciBFbnZlbG9wZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gRW52ZWxvcGUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlciA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNhbXBsZVJhdGUgPSAxMDAuMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFncyA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBFbnZlbG9wZTtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIFRlbGVtZXRyeS5FbnZlbG9wZSA9IEVudmVsb3BlO1xyXG4gICAgfSkoVGVsZW1ldHJ5ID0gTWljcm9zb2Z0LlRlbGVtZXRyeSB8fCAoTWljcm9zb2Z0LlRlbGVtZXRyeSA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIHZhciBDb250ZXh0O1xyXG4gICAgICAgIChmdW5jdGlvbiAoQ29udGV4dCkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICB9KShDb250ZXh0ID0gQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0IHx8IChBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgPSB7fSkpO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgdmFyIENvbnRleHQ7XHJcbiAgICAgICAgKGZ1bmN0aW9uIChDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgICAgIH0pKENvbnRleHQgPSBBcHBsaWNhdGlvbkluc2lnaHRzLkNvbnRleHQgfHwgKEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCA9IHt9KSk7XHJcbiAgICB9KShBcHBsaWNhdGlvbkluc2lnaHRzID0gTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgfHwgKE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzID0ge30pKTtcclxufSkoTWljcm9zb2Z0IHx8IChNaWNyb3NvZnQgPSB7fSkpO1xyXG52YXIgTWljcm9zb2Z0O1xyXG4oZnVuY3Rpb24gKE1pY3Jvc29mdCkge1xyXG4gICAgdmFyIEFwcGxpY2F0aW9uSW5zaWdodHM7XHJcbiAgICAoZnVuY3Rpb24gKEFwcGxpY2F0aW9uSW5zaWdodHMpIHtcclxuICAgICAgICB2YXIgQ29udGV4dDtcclxuICAgICAgICAoZnVuY3Rpb24gKENvbnRleHQpIHtcclxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgfSkoQ29udGV4dCA9IEFwcGxpY2F0aW9uSW5zaWdodHMuQ29udGV4dCB8fCAoQXBwbGljYXRpb25JbnNpZ2h0cy5Db250ZXh0ID0ge30pKTtcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vSVNlcmlhbGl6YWJsZS50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udHJhY3RzL0dlbmVyYXRlZC9FbnZlbG9wZS50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUFwcGxpY2F0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lEZXZpY2UudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSUludGVybmFsLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lMb2NhdGlvbi50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQ29udGV4dC9JT3BlcmF0aW9uLnRzXCIvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9Db250ZXh0L0lTYW1wbGUudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVVzZXIudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRleHQvSVNlc3Npb24udHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL1RlbGVtZXRyeS9JRW52ZWxvcGUudHNcIi8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxuLy8gVEhJUyBGSUxFIFdBUyBBVVRPR0VORVJBVEVEXHJcbnZhciBBSTtcclxuKGZ1bmN0aW9uIChBSSkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAvKipcclxuICAgICAqIERlZmluZXMgdGhlIGxldmVsIG9mIHNldmVyaXR5IGZvciB0aGUgZXZlbnQuXHJcbiAgICAgKi9cclxuICAgIHZhciBTZXZlcml0eUxldmVsO1xyXG4gICAgKGZ1bmN0aW9uIChTZXZlcml0eUxldmVsKSB7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiVmVyYm9zZVwiXSA9IDBdID0gXCJWZXJib3NlXCI7XHJcbiAgICAgICAgU2V2ZXJpdHlMZXZlbFtTZXZlcml0eUxldmVsW1wiSW5mb3JtYXRpb25cIl0gPSAxXSA9IFwiSW5mb3JtYXRpb25cIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJXYXJuaW5nXCJdID0gMl0gPSBcIldhcm5pbmdcIjtcclxuICAgICAgICBTZXZlcml0eUxldmVsW1NldmVyaXR5TGV2ZWxbXCJFcnJvclwiXSA9IDNdID0gXCJFcnJvclwiO1xyXG4gICAgICAgIFNldmVyaXR5TGV2ZWxbU2V2ZXJpdHlMZXZlbFtcIkNyaXRpY2FsXCJdID0gNF0gPSBcIkNyaXRpY2FsXCI7XHJcbiAgICB9KShTZXZlcml0eUxldmVsID0gQUkuU2V2ZXJpdHlMZXZlbCB8fCAoQUkuU2V2ZXJpdHlMZXZlbCA9IHt9KSk7XHJcbn0pKEFJIHx8IChBSSA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0lDb25maWcudHNcIiAvPlxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9JVGVsZW1ldHJ5Q29udGV4dC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL0NvbnRyYWN0cy9HZW5lcmF0ZWQvU2V2ZXJpdHlMZXZlbC50c1wiIC8+XHJcbnZhciBNaWNyb3NvZnQ7XHJcbihmdW5jdGlvbiAoTWljcm9zb2Z0KSB7XHJcbiAgICB2YXIgQXBwbGljYXRpb25JbnNpZ2h0cztcclxuICAgIChmdW5jdGlvbiAoQXBwbGljYXRpb25JbnNpZ2h0cykge1xyXG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgfSkoQXBwbGljYXRpb25JbnNpZ2h0cyA9IE1pY3Jvc29mdC5BcHBsaWNhdGlvbkluc2lnaHRzIHx8IChNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyA9IHt9KSk7XHJcbn0pKE1pY3Jvc29mdCB8fCAoTWljcm9zb2Z0ID0ge30pKTtcclxudmFyIE1pY3Jvc29mdDtcclxuKGZ1bmN0aW9uIChNaWNyb3NvZnQpIHtcclxuICAgIHZhciBBcHBsaWNhdGlvbkluc2lnaHRzO1xyXG4gICAgKGZ1bmN0aW9uIChBcHBsaWNhdGlvbkluc2lnaHRzKSB7XHJcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcbiAgICAgICAgdmFyIFV0aWxIZWxwZXJzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBVdGlsSGVscGVycygpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogZ2VuZXJhdGUgcmFuZG9tIGlkIHN0cmluZ1xyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgVXRpbEhlbHBlcnMubmV3SWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYmFzZTY0Y2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTA3Mzc0MTgyNDsgLy81IHN5bWJvbHMgaW4gYmFzZTY0LCBhbG1vc3QgbWF4aW50XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAocmFuZG9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjaGFyID0gYmFzZTY0Y2hhcnMuY2hhckF0KHJhbmRvbSAlIDY0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcclxuICAgICAgICAgICAgICAgICAgICByYW5kb20gPSBNYXRoLmZsb29yKHJhbmRvbSAvIDY0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsSGVscGVycztcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIEFwcGxpY2F0aW9uSW5zaWdodHMuVXRpbEhlbHBlcnMgPSBVdGlsSGVscGVycztcclxuICAgIH0pKEFwcGxpY2F0aW9uSW5zaWdodHMgPSBNaWNyb3NvZnQuQXBwbGljYXRpb25JbnNpZ2h0cyB8fCAoTWljcm9zb2Z0LkFwcGxpY2F0aW9uSW5zaWdodHMgPSB7fSkpO1xyXG59KShNaWNyb3NvZnQgfHwgKE1pY3Jvc29mdCA9IHt9KSk7XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLLkludGVyZmFjZXMvSUNvbmZpZy50c1wiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL0phdmFTY3JpcHRTREsuSW50ZXJmYWNlcy9JQXBwSW5zaWdodHMudHNcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9KYXZhU2NyaXB0U0RLL1V0aWxIZWxwZXJzLnRzXCIvPlxyXG5kZWZpbmUoXCJKYXZhU2NyaXB0U0RLLk1vZHVsZS9BcHBJbnNpZ2h0c01vZHVsZVwiLCBbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4gICAgdmFyIEFwcEluc2lnaHRzTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIEFwcEluc2lnaHRzTW9kdWxlKCkge1xyXG4gICAgICAgIH1cclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5fY3JlYXRlTGF6eU1ldGhvZCA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBEZWZpbmUgYSB0ZW1wb3JhcnkgbWV0aG9kIHRoYXQgcXVldWVzLXVwIGEgdGhlIHJlYWwgbWV0aG9kIGNhbGxcclxuICAgICAgICAgICAgYWlPYmplY3RbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDYXB0dXJlIHRoZSBvcmlnaW5hbCBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBtZXRob2RcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbEFyZ3VtZW50cyA9IGFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBxdWV1ZSBpcyBhdmFpbGFibGUsIGl0IG1lYW5zIHRoYXQgdGhlIGZ1bmN0aW9uIHdhc24ndCB5ZXQgcmVwbGFjZWQgd2l0aCBhY3R1YWwgZnVuY3Rpb24gdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmIChhaU9iamVjdC5xdWV1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlLnB1c2goZnVuY3Rpb24gKCkgeyByZXR1cm4gYWlPYmplY3RbbmFtZV0uYXBwbHkoYWlPYmplY3QsIG9yaWdpbmFsQXJndW1lbnRzKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2UgZXhlY3V0ZSB0aGUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBhaU9iamVjdFtuYW1lXS5hcHBseShhaU9iamVjdCwgb3JpZ2luYWxBcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgO1xyXG4gICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGFpT2JqZWN0ID0gd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV07XHJcbiAgICAgICAgICAgIC8vIGNhcHR1cmUgaW5pdGlhbCBjb29raWUgaWYgcG9zc2libGVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LmNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBbXHJcbiAgICAgICAgICAgICAgICBcImNsZWFyQXV0aGVudGljYXRlZFVzZXJDb250ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBcImZsdXNoXCIsXHJcbiAgICAgICAgICAgICAgICBcInNldEF1dGhlbnRpY2F0ZWRVc2VyQ29udGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFydFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RhcnRUcmFja1BhZ2VcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrRXZlbnRcIixcclxuICAgICAgICAgICAgICAgIFwic3RvcFRyYWNrUGFnZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0RlcGVuZGVuY3lcIixcclxuICAgICAgICAgICAgICAgIFwidHJhY2tFdmVudFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja0V4Y2VwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja01ldHJpY1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFja1BhZ2VWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRyYWNrVHJhY2VcIlxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB3aGlsZSAobWV0aG9kLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2NyZWF0ZUxhenlNZXRob2QobWV0aG9kLnBvcCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkID0gZnVuY3Rpb24gKGFpQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzSW5zdGFuY2UuY29uZmlnID0gYWlDb25maWc7XHJcbiAgICAgICAgICAgIHZhciBhaU9iamVjdCA9IHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICAvLyBpZiBzY3JpcHQgd2FzIHByZXZpb3VzbHkgZG93bmxvYWRlZCBhbmQgaW5pdGlhbGl6ZWQsIHF1ZXVlIHdpbGwgYmUgZGVsZXRlZCwgcmVpbml0aWFsaXplIGl0XHJcbiAgICAgICAgICAgIGlmICghYWlPYmplY3QucXVldWUpIHtcclxuICAgICAgICAgICAgICAgIGFpT2JqZWN0LnF1ZXVlID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHRFbGVtZW50LnNyYyA9IGFpQ29uZmlnLnVybCB8fCBcImh0dHBzOi8vYXo0MTY0MjYudm8ubXNlY25kLm5ldC9zY3JpcHRzL2EvYWkuMC5qc1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbGxlY3QgZ2xvYmFsIGVycm9ycyBieSB3cmFwcGluZyB0aGUgd2luZG93Lm9uZXJyb3IgbWV0aG9kXHJcbiAgICAgICAgICAgIGlmICghYWlDb25maWcuZGlzYWJsZUV4Y2VwdGlvblRyYWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kXzEgPSBcIm9uZXJyb3JcIjtcclxuICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9jcmVhdGVMYXp5TWV0aG9kKFwiX1wiICsgbWV0aG9kXzEpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsT25FcnJvciA9IHdpbmRvd1ttZXRob2RfMV07XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbbWV0aG9kXzFdID0gZnVuY3Rpb24gKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVkID0gb3JpZ2luYWxPbkVycm9yICYmIG9yaWdpbmFsT25FcnJvcihtZXNzYWdlLCB1cmwsIGxpbmVOdW1iZXIsIGNvbHVtbk51bWJlciwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVkICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFpT2JqZWN0W1wiX1wiICsgbWV0aG9kXzFdKG1lc3NhZ2UsIHVybCwgbGluZU51bWJlciwgY29sdW1uTnVtYmVyLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVkO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFwcEluc2lnaHRzTW9kdWxlLCBcImFwcEluc2lnaHRzSW5zdGFuY2VcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghd2luZG93W0FwcEluc2lnaHRzTW9kdWxlLmFwcEluc2lnaHRzTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRBbmRTZXR1cDogQXBwSW5zaWdodHNNb2R1bGUuX2Rvd25sb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBvc2luZyBpdCBmb3IgdW5pdCB0ZXN0cyBvbmx5LCBub3QgcGFydCBvZiBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2RlZmluZUxhenlNZXRob2RzOiBBcHBJbnNpZ2h0c01vZHVsZS5fZGVmaW5lTGF6eU1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcEluc2lnaHRzTW9kdWxlLl9kZWZpbmVMYXp5TWV0aG9kcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1tBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c05hbWVdO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBBcHBJbnNpZ2h0c01vZHVsZS5hcHBJbnNpZ2h0c0luaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgICAgQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNOYW1lID0gXCJhcHBJbnNpZ2h0c1wiO1xyXG4gICAgICAgIHJldHVybiBBcHBJbnNpZ2h0c01vZHVsZTtcclxuICAgIH0oKSk7XHJcbiAgICBleHBvcnRzLkFwcEluc2lnaHRzID0gQXBwSW5zaWdodHNNb2R1bGUuYXBwSW5zaWdodHNJbnN0YW5jZTtcclxufSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFpLm1vZHVsZS5qcy5tYXAiLCLvu79cclxuLy8gMDkvMTMvMjAxOSAwNTo0OCBhbSAtIFNTTiAtIFsyMDE5MDkxMy0wNTQ4XSAtIFswMDFdIC0gQ3JhdGUgZ2VuZXJpYyBkcm9wZG93biBsaXN0IGRpcmVjdGl2ZVxyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2pxdWVyeS5kLnRzXCIgLz4gXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9zaGFyZWQvRGF0YVNlcnZpY2VzLnRzXCIvPlxyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6NTIgYW0gLSBTU04gLSBBZGRlZCBpbXBvcnQgYW5ndWxhclxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xyXG5cclxuXHJcbi8vIDA5LzIwLzIwMTkgMTA6MjEgYW0gLSBTU04gLSBSZXBsYWNlIGFuZ3VsYXIubW9kdWxlXHJcblxyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSAnLi4vZ2xvYmFscyc7XHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vc2hhcmVkL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IHsgRERMRF9DT05TVEFOVFMgfSBmcm9tICcuL0Ryb3Bkb3duTGlzdERpcmVjdGl2ZUNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEJST0FEQ0FTVF9JREVOVElGSUVSUyB9IGZyb20gJy4uL1NoYXJlZC9Ccm9hZGNhc3RfSWRlbnRpZmVycyc7XHJcblxyXG5pbnRlcmZhY2UgTG9va3VwUmVjb3JkIHtcclxuICAgIGlkOiBudW1iZXJcclxufVxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9ERExEIGV4dGVuZHMgYW5ndWxhci5JU2NvcGUge1xyXG5cclxuICAgIGZvcm1OYW1lOiBhbnlcclxufVxyXG5cclxuXHJcblxyXG52YXIgZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoZGVmYXVsdEFwcE5hbWUpICE9IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgZGVmYXVsdEFwcE5hbWUgPSBcImRlbW9TaXRlc19JbmRleF9UaW1lc2hlZXRcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRHJvcGRvd25MaXN0RGlyZWN0aXZlJywgZGVmYXVsdEFwcE5hbWUsIFsndWkuYm9vdHN0cmFwJ10pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gVXNlZCBmb3Igc2Nyb2xsIHBhZ2Ugd2hlbiBmb3JtIGlzIGludmFsaWQsIG9uIHN1Ym1pdC5cclxuICAgICAgICB2YXIgdXRpbGl0eUNvbnRyb2xsZXJfb2JqZWN0UmVmID0gZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3V0aWxpdHlDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsICdzc25fbG9nZ2VyJywgZnVuY3Rpb24gKCRzY29wZSwgJGF0dHJzLCAkbG9jYXRpb24sIHNzbl9sb2dnZXIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybV8xID0gZnVuY3Rpb24gKGV2ZW50LCBmb3JtKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZm9ybS4kdmFsaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxJbnRvQXBwVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly93d3cuY29kZS1zYW1wbGUuY29tLzIwMTgvMTEvYW5ndWxhcmpzLXNjcm9sbC10by1lcnJvci1vbi1zdWJtaXQtYW5kLmh0bWxcclxuICAgICAgICAgICAgdmFyIHNjcm9sbEludG9BcHBWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBlbHQgPSAkKFwiLmhhcy1lcnJvcjp2aXNpYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbHQubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2Nyb2xsVG9wOiAoZWx0LmZpcnN0KCkub2Zmc2V0KCkudG9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzY3JvbGxUb3A6IChlbHQuZmlyc3QoKS5jbG9zZXN0KCdkaXYnKS5wcmV2QWxsKCdkaXYnKS5vZmZzZXQoKS50b3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogKGVsdC5maXJzdCgpLmNsb3Nlc3QoJ2Rpdi5mb3JtLWdyb3VwJykub2Zmc2V0KCkudG9wIC0gODApXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRvd25kb3duTGlzdF9hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94JywgW1wiJHFcIiwgXCJzc25fbG9nZ2VyXCIsIGZ1bmN0aW9uICgkcSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnJWMgJyArICdEZXN0cm95IGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94IC0gMjAyMTA2MTQtMjE1NCcsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA3LzIwMjEgMDI6MDQgYW0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDE0XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2UgYXJlIHVzaW5nIHRoaXMgZm9yIGFkZGluZyBuZXcgaXRlbXMgdG8gbWFzdGVyLlxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0ciwgbmdNb2RlbF9jdHJsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSA9IGF0dHJbXCJkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2VcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5Q29sdW1uID0gYXR0cltcImtleUNvbHVtblwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94IGxpbmsgLSAyMDIxMDYxNy0xOTE2JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdrZXlDb2x1bW46Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29sdW1uKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCVjIDIwMjEwNjEwLTIxMTggZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZX1dYCwgJ2NvbG9yOmJsdWU7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhdHRyKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uYmluZCgnYmx1cicsIChldmVudCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGRyb3Bkb3duIGJsdXIgLSAyMDIxMDYxNy0xODA1ICcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEwcHQ7Jyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmdNb2RlbF9jdHJsLiRtb2RlbFZhbHVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbmdNb2RlbF9jdHJsLiR2aWV3VmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmdNb2RlbF9jdHJsLiR2aWV3VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25nTW9kZWxfY3RybCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZ01vZGVsX2N0cmwpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIFRoaXMgdXBkYXRlcyB0aGUgdmlldyB0byByZWZsZWN0IHRoZSBuZXcgaXRlbSBidXQgZG9lcyBub3QgdXBkYXRlIHRoZSB0eXBlYWhlYWQgc291cmNlLiAoXCJObyByZXN1bHRzIGZvdW5kXCIgaXMgZGlzcGxheWVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmdNb2RlbF9jdHJsLiRtb2RlbFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCclYyBkcm9wZG93biBibHVyIC0gc2V0dGluZyAkc2V0Vmlld1ZhbHVlIDIwMjEwNjE4LTAzNDAtYWFhYScsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHNldFZpZXdWYWx1ZShuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZHJvcGRvd24gYmx1ciAtIE5PVCBzZXR0aW5nIG1vZGVsVmFsdWUgMjAyMTA2MTgtMDM0MCcsICdjb2xvcjpSRUQ7Zm9udC1zaXplOjE0cHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZSAmJiBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UgPT0gXCJ0cnVlXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjICAyMDIxMDYxNy0xOTAxIC0gZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlIFske2Ryb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZX1dYCwgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzE4LzIwMjEgMDY6NDMgcG0gLSBTU04gLSBDaGFuZ2UgJG1vZGVsVmFsdWUgdG8gJG1vZGVsVmFsdWUuaWQgKGVkaXQgdGltZXNoZWV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NvcGUuJGJyb2FkY2FzdChCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkUsIHsgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfSElEREVOX0tFWV9WQUxVRSwga2V5Q29sdW1uOiBrZXlDb2x1bW4sIGtleVZhbHVlOiBuZ01vZGVsX2N0cmwuJE1vZGVsVmFsdWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTkvMjAyMSAwMzoyOCBhbSAtIFNTTiAtIFdoZW4gYWRkaW5nIGEgbmV3IGVudHJ5IHdpdGggdGhlIHN3aXRjaCBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2Ugc2V0IHRvIHRydWUgKEFkZGluZyBqb2IgdGl0bGUgaW4gam9iIGNyZWF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgJG1vZGVsVmFsdWUgaXMgdGhlIGlucHV0IHN0cmluZy4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBXZSBub3RlZCBlYXJsaWVyIHRoYXQgdGhlICRtb2RlbFZhbHVlIHdhcyBhbiBvYmplY3QuICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5VmFsdWVTZWxlY3RlZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmNvbXBsZXRlRGVmaW5pdGlvbl9zdGFydGluZ1dpdGhDb25kaXRpb24gPSBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UgPT0gXCJ0cnVlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluY29tcGxldGVEZWZpbml0aW9uX3N0YXJ0aW5nV2l0aENvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlU2VsZWN0ZWQgPSBuZ01vZGVsX2N0cmwuJG1vZGVsVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWVTZWxlY3RlZCA9IG5nTW9kZWxfY3RybC4kbW9kZWxWYWx1ZS5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiBERExEX0NPTlNUQU5UUy5VUERBVEVfSElEREVOX0tFWV9WQUxVRSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsU291cmNlOiAnMjAyMTA2MTgtMTg1OCcsIGtleUNvbHVtbjoga2V5Q29sdW1uLCBrZXlWYWx1ZToga2V5VmFsdWVTZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2luY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCA9IGF0dHIuZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3guc3BsaXQoJywnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZ1bmN0aW9uYWxcclxuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nTW9kZWxfY3RybC4kc2V0VmFsaWRpdHkoYXR0ci5uYW1lICsgJy5kcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveCcsIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94LmluZGV4T2YodmFsdWUpID09PSAtMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRhc3luY1ZhbGlkYXRvcnMuaXNWYWxpZERyb3Bkb3duRGlyZWN0aXZlU2VsZWN0aW9uID0gZnVuY3Rpb24gKG1vZGVsVmFsdWUsIHZpZXdWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9lcyBmaXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbFZhbHVlIGRvZXNuJ3QgaG9ub3Igc2VsZWN0ZWQgdmFsdWUgYWZ0ZXIgaXQgaGFzIGFscmVhZHkgYmVlbiBzZXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVudGlsIHdlIGNhb21lIHVwIHdpdGggYSB3YXkgdG8gcmVzZXQgaXQsIGRpc2FibGUgYnkgYnlwYXNzaW5nIGFzIHZhbGlkLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjE4LTE4MTUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25nTW9kZWxfY3RybC4kZGlydHk6JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobmdNb2RlbF9jdHJsLiRkaXJ0eSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5nTW9kZWxfY3RybC4kZGlydHkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUmVzdWx0ID0gbW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcm9wZG93bkxpc3REaXJlY3RpdmVJbnB1dEJveEludmVyc2UgPT0gXCJ0cnVlXCIpIHZhbGlkYXRpb25SZXN1bHQgPSAhdmFsaWRhdGlvblJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBwcm9taXNlIG9mIHRoZSBhc3luY2hyb25vdXMgdmFsaWRhdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZG93bmRvd25MaXN0X2FuZ3VsYXJfbW9kdWxlLmRpcmVjdGl2ZSgnZHJvcGRvd25MaXN0RGlyZWN0aXZlJywgWydzc25fbG9nZ2VyJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKHNzbl9sb2dnZXIsICR0aW1lb3V0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xsZXIgPSBbJyR3aW5kb3cnLCAnJGh0dHAnLCAnJHEnLCAnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsIGZ1bmN0aW9uICgkd2luZG93LCAkaHR0cCwgJHEsICRzY29wZSwgJHJvb3RTY29wZSwgJHRpbWVvdXQsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICAgICB2bS5pc1JlYWR5ID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzE4LzIwMjEgMDc6NTUgcG0gLSBTU05cclxuICAgICAgICAgICAgICAgIC8vIE1vdmUgb3V0c2lkZSBmdW5jdGlvbiB0byBwb3N0IG5ldyBlbnRyaWVzLiAgTG9va2luZyB0byB1cGRhdGUgdHlwZWFoZWFkIG9uIGFkZGl0aW9uIG9uIG5ldyBlbnRyaWVzIHNvIFwiTm8gcmVzdWx0cyBmb3VuZFwiIGNvdWxkIGRpc2FwcGVhclxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmFkZHJlc3NlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHZtLnRlbXBDb250cm9sTmFtZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmVfJHt2bS5jYWxsU291cmNlfV9gICsgZC5nZXRIb3VycygpICsgXCJfXCIgKyBkLmdldE1pbnV0ZXMoKSArIFwiX1wiICsgZC5nZXRTZWNvbmRzKCkgKyBcIl9cIiArIGQuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB2bS50ZW1wQ29udHJvbE5hbWUgPSB0aGlzLmtleUNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHZtLnRlbXBDb250cm9sTmFtZSA9IGBEcm9wZG93bkxpc3REaXJlY3RpdmVfJHtNYXRoLnJhbmRvbSgpfV9gO1xyXG5cclxuICAgICAgICAgICAgICAgIHZtLmJsYWNrTGlzdEVycm9yTmFtZSA9IHZtLnRlbXBDb250cm9sTmFtZSArIFwiLmRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZHJvcGRvd25MaXN0RGlyZWN0aXZlSW5wdXRCb3hJbnZlcnNlID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmVycm9yVHJpZ2dlcmVkID0gZnVuY3Rpb24gKGVycm9yTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdm0uZm9ybU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2bS5mb3JtTmFtZS4kZXJyb3JbZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvclRyaWdnZXJlZFdpdGhDb250cm9sTmFtZSA9IGZ1bmN0aW9uIChjb250cm9sTmFtZSwgZXJyb3JOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB2bS5mb3JtTmFtZVtjb250cm9sTmFtZV0uJGVycm9yW2Vycm9yTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGVzdGluZyB3aXRoICdyZXF1aXJlZCcgcmV0dXJuIGEgYm9vbGVhbi4gIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS5mb3JtTmFtZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS5mb3JtTmFtZVtjb250cm9sTmFtZV0pIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKVtcIiRlcnJvclwiXVtlcnJvck5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kb24oQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCBmdW5jdGlvbiAoZXZlbnRzLCBhcmdzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0hhbmRsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBmaXJlcyBvbiBzdGFydCBhbmQgb25jZSBvbiBjaGFuZ2VcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIFske0JST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRX1dIDIwMjEwNjE5LTAzMjNgLCAnY29sb3I6Ymx1ZTtmb250LXNpemU6MTJwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmdzLm1zZyA9PT0gRERMRF9DT05TVEFOVFMuRE9fU0VUX0ZPQ1VTICYmIGFyZ3MuanF1ZXJ5T2JqZWN0UmVmKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzLmpxdWVyeU9iamVjdFJlZi5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBhcmVudEtleU5hbWUgJiYgdm0ucGFyZW50S2V5TmFtZSA9PSBhcmdzLmtleUNvbHVtbiAmJiBhcmdzLmtleVZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5wYXJlbnRLZXlDb2x1bW4gPSBhcmdzLmtleVZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuVVBEQVRFX0hJRERFTl9LRVlfVkFMVUUpICYmIHZtLmtleUNvbHVtbiAmJiBhcmdzLmtleUNvbHVtbiAmJiAodm0ua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkgPT0gYXJncy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBrZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV1gLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBoaWRkZW5GaWVsZE5hbWUgWyR7dm0uaGlkZGVuRmllbGROYW1lfV1gLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxMnB0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB1cGRhdGUgaGlkZGVuIGtleSBhcmdzLmtleVZhbHVlIFske2FyZ3Mua2V5VmFsdWV9XWAsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS5rZXlDb2x1bW4gJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLmtleUNvbHVtbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJncy5rZXlDb2x1bW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXJncy5rZXlDb2x1bW4pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwoYXJncy5rZXlWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxTb3VyY2U6ICcyMDIxMDYxNy0yMTU0JywgbWVzc2FnZTogYGhpZGRlbkZpZWxkTmFtZSBub3QgZGVmaW5lZCB3aGlsZSB1cGRhdGluZyBbJHthcmdzLmtleUNvbHVtbn1dfSB2bS5DYWxsU291cmNlIFske3ZtLmNhbGxTb3VyY2V9XWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuVVBEQVRFX0RST1BET1dOX0xJU1QpICYmIHZtLmtleUNvbHVtbiAmJiBhcmdzLmtleUNvbHVtbiAmJiAodm0ua2V5Q29sdW1uLnRvTG93ZXJDYXNlKCkgPT0gYXJncy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTE3MDgtQi0yJywgbWVzc2FnZTogYFske0JST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRX1dIHVwZGF0ZSBkcm9wZG93biAtIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdncmVlbicsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXZlbnRzOicsIGV2ZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcmdzJywgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gIHZtLmdldERpc2NpcGxpbmVzKGFyZ3MuZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGFyZ3MuaWQsIHRpdGxlOiBhcmdzLmRlc2NyaXB0aW9uIH07XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTgtMTk1MicsIG1lc3NhZ2U6IGBbJHtCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkV9XSBhZGRpbmcgbmV3IGVudHJ5IHRvICdhZGRyZXNzZXMnYCB9LCAncmVkJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGFyZ3MuaWQsIHRpdGxlOiBhcmdzLmRlc2NyaXB0aW9uIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICAgICB2bS5uZ01vZGVsLiRzZXRWaWV3VmFsdWUoYXJncy5kZXNjcmlwdGlvbilcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyR0aW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCcyMDIxMDYxOC0wMzMwIC0gc2V0Vmlld1ZhbHVlICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICB2bS5uZ01vZGVsID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8kdGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZygnMjAyMTA2MTgtMDMzMCAtIHNldFZpZXdWYWx1ZSAnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgdm0ubmdNb2RlbCA9IGFyZ3MuZGVzY3JpcHRpb24gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgLCAyMDAwKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuQ0FMTF9WQUxJREFURV9USElTKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNTI5JywgbWVzc2FnZTogJ2NhbGwgdmFsaWRhdGVUaGlzJyB9LCAnYmx1ZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0udmFsaWRhdGVUaGlzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5tc2cgPT0gRERMRF9DT05TVEFOVFMuU0VMRUNUX05FV19WQUxVRSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTctMDY0MycsIG1lc3NhZ2U6ICdzZWxlY3QgbmV3IHZhbHVlIGZpcmluZycgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmhpZGRlbkZpZWxkTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJbbmFtZT0nXCIgKyB2bS5oaWRkZW5GaWVsZE5hbWUgKyBcIiddXCIpLnZhbCgnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hhbmRsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSGFuZGxlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMDU0NycsIG1lc3NhZ2U6IGBbJHtCUk9BRENBU1RfSURFTlRJRklFUlMuRFJPUERPV05fTElTVF9ESVJFQ1RJVkV9XSBub3QgaGFuZGxlZCAtIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V2ZW50czonLCBldmVudHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXJncycsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8yOC8yMDE5IDA4OjI5IGFtIC0gU1NOIC0gQWRkaW5nIC0gTmVlZCB0byBpbml0aWFsaXphIGZvciAkd2F0Y2ggdG8gd29yay5cclxuICAgICAgICAgICAgICAgIC8vIGRpc2NpcGxpbmVTZWxlY3RlZF9YWFggIGluc3RlYWQgb2YgbmdNb2RlbCBiZWNhdXNlIHdlIHVzZSBhbiBvYmplY3QgZm9yIHNlbGVjdGVkIGVudHJ5LCBpZCBhbmQgdGlsZS4gbmdNb2RlbCBpcyB1c3VhbGx5IGEga2V5LiAoVGhlIGlkKVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJyVjICcgKyAnRGVzdHJveSBEcm9wRG93bkxpc3REaXJlY3RpdmUgLSAyMDIxMDYxNC0yMTUyJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLm5nTW9kZWwnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE0MzgnLCBtZXNzYWdlOiBgQ0hBTkdFIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICd5ZWxsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2xkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDoxMiBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMjJdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKG5ld1ZhbHVlICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTQzOC1CJywgbWVzc2FnZTogYENIQU5HRSB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAnZ3JlZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTQzOC1DLTInLCBtZXNzYWdlOiBgQ0hBTkdFIHZtLmtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gICBwYXJlbnRLZXlDb2x1bW4gWyR7dm0ucGFyZW50S2V5Q29sdW1ufV1gIH0sICdyZWQnKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm0uaXNSZWFkeSA9IHRydWU7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLnBhcmVudEtleUNvbHVtbicsIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjE3LTE4NDUnLCBtZXNzYWdlOiAndm0xMDEucGFyZW50S2V5Q29sdW1uIC0gd2F0Y2gnIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSAhPSBuZXdWYWx1ZSAmJiBvbGRWYWx1ZSAhPSBudWxsKSB7IC8vIG9sZFZhbHVlIGlzIG51bGwgb24gZmlyc3QgY2FsbC5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2bS5uZ01vZGVsID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDowNyBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMjFdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZSBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5uZ01vZGVsID0gLTEwMjA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgdm0xMDEucGFyZW50S2V5Q29sdW1uIC0gc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICAyMDIxMDYxNy0xMjE0YCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdm0ubmdNb2RlbCA9IC0xO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgdm0xMDEucGFyZW50S2V5Q29sdW1uIC0gc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICAyMDIxMDYxNy0xODQ3IC0gYmxhbmsgb3V0IFske3ZtLmhpZGRlbkZpZWxkTmFtZX1dYCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIltuYW1lPSdcIiArIHZtLmhpZGRlbkZpZWxkTmFtZSArIFwiJ11cIikudmFsKCcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWU6IExvb2t1cFJlY29yZCwgb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS4kd2F0Y2goJ3ZtMTAxLmRpc2NpcGxpbmVTZWxlY3RlZF9YWFgnLCBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgdm0xMDEuZGlzY2lwbGluZVNlbGVjdGVkX1hYWCB3YXRjaCAtIDIwMjEwNjE3LTEyMjdgLCAnY29sb3I6Y3lhbjtmb250LXNpemU6MTJwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgc2hvd3MgbnVsbCBmb3IgbmV3IHZhbHVlICcsICdjb2xvcjpyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCduZXdWYWx1ZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbGRWYWx1ZTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvbGRWYWx1ZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIHNob3dzIG51bGwgZm9yIGJvdGggdmFsdWVzICcsICdjb2xvcjpyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZtLiRtb2RlbFZhbHVlOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZtLiRtb2RlbFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZtLiR2aWV3VmFsdWU6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codm0uJHZpZXdWYWx1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgJiYgbmV3VmFsdWUuaWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ubmdNb2RlbCA9IG5ld1ZhbHVlLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHNldHRpbmcgbmdNb2RlbCBbJHt2bS5uZ01vZGVsfV0gIGtleUNvbHVtbiBbJHt2bS5rZXlDb2x1bW59XSAyMDIxMDYxNy0xMjEzYCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5oaWRkZW5GaWVsZE5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dIHVwZGF0ZSB2bS5oaWRkZW5GaWVsZE5hbWUgIFske3ZtLmhpZGRlbkZpZWxkTmFtZX1dICB3aXRoIFske25ld1ZhbHVlLmlkfV0gMjAyMTA2MTgtMjAwOGAsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjEycHQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiW25hbWU9J1wiICsgdm0uaGlkZGVuRmllbGROYW1lICsgXCInXVwiKS52YWwobmV3VmFsdWUuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1OYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWUuJGRpcnR5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UuZG9TZXRIYXZlQ2hhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LCB0cnVlKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uc2V0dXBVcmwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5rZXlDb2x1bW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5rZXlDb2x1bW4udG9Mb3dlckNhc2UoKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZWxvZy5kaXNjaXBsaW5laWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkaXNjaXBsaW5laWQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9EaXNjaXBsaW5lQVBJJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL0Rpc2NpcGxpbmVBUEknO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEyLzEwLzIwMjAgMDQ6MzIgcG0gLSBTU04gLSBbMjAyMDEyMTAtMTYyNV0gLSBbMDAyXSAtIFVwZGF0ZSBUaW1lbG9nIGVkaXQgTVZDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2Nhc2UgJ3RpbWVsb2cubGluZWl0ZW1pZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xpbmVpdGVtaWQnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybExpc3RBbGwgPSAnL2FwaS9qb2JfTGluZUl0ZW1BUEkvdHlwZWFoZWFkX2pvYnJlY29yZHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvam9iX0xpbmVJdGVtQVBJL3R5cGVhaGVhZCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbWVsb2cuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2Iuam9iaWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdqb2JpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvam9iYXBpL3R5cGVhaGVhZF9wcm9qZWN0UmVjb3Jkcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxTaW5nbGVSZWNvcmQgPSAnL2FwaS9qb2JhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI3LzIwMTkgMDQ6NDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnam9iLnByb2plY3RpZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gJy9hcGkvcHJvamVjdGFwaS90eXBlYWhlYWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsU2luZ2xlUmVjb3JkID0gJy9hcGkvcHJvamVjdGFwaS90eXBlYWhlYWQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDoxMyBwbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMjNdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0ZWNobm9sb2d5aWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uQVBJVXJsTGlzdEFsbCA9ICcvYXBpL3RlY2hub2xvZ3lhcGkvdHlwZWFoZWFkJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLkFQSVVybFNpbmdsZVJlY29yZCA9ICcvYXBpL3RlY2hub2xvZ3lhcGkvdHlwZWFoZWFkJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRHJvcGRvd25MaXN0RGlyZWN0aXZlIC0gbm8gY2FzZSBmb3IgWyR7dGhpcy5rZXlDb2x1bW59XSAyMDIwMTIxMC0xNjU2YCwgJ2NvbG9yOnJlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlY0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG5vIGNhc2UgZm9yIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMDEyMTAtMTY1NmAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNEcm9wZG93bkxpc3REaXJlY3RpdmUgLSBubyBjYXNlIGZvciBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjAxMjEwLTE2NTZgLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5BUElVcmxMaXN0QWxsID09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG1pc3NpbmcgZGVmaW5pdGlvbiBmb3IgQVBJVXJsTGlzdEFsbCBbJHt0aGlzLmtleUNvbHVtbn1dIDIwMjEwNjA4LTEzMTBgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMke2Vycm9yTWVzc2FnZX1gLCAnY29sb3I6cmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTEzMTEnLCBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5BUElVcmxTaW5nbGVSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYERyb3Bkb3duTGlzdERpcmVjdGl2ZSAtIG1pc3NpbmcgZGVmaW5pdGlvbiBmb3Igdm0uQVBJVXJsU2luZ2xlUmVjb3JkIFske3RoaXMua2V5Q29sdW1ufV0gMjAyMTA2MDgtMTQyN2BcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7ZXJyb3JNZXNzYWdlfWAsICdjb2xvcjpyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMTQyOCcsIG1lc3NhZ2U6IGVycm9yTWVzc2FnZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnBhcmVudEtleUNvbHVtbikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRLZXlDb2x1bW5WYWx1ZSA9IHRoaXMucGFyZW50S2V5Q29sdW1uOyAvL3VuZGVmaW5lZDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50S2V5Q29sdW1uVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5BUElVcmxMaXN0QWxsID0gdm0uQVBJVXJsTGlzdEFsbCArIFwiL1wiICsgcGFyZW50S2V5Q29sdW1uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uY2hhbmdpbmcgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYnJvYWRjYXN0KEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgeyBtc2c6IERETERfQ09OU1RBTlRTLlNFTEVDVF9ORVdfVkFMVUUsIGNhbGxTb3VyY2U6IFwiMjAyMTA2MTgtMTkxNi1jaGFuZ2luZ1wiLCBrZXlDb2x1bW46IHZtLmtleUNvbHVtbiwga2V5VmFsdWU6IHZtLm5nTW9kZWwgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDEwOjM2IHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwN10gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICAgICAgdm0udHlwZWFoZWFkT25TZWxlY3QgPSBmdW5jdGlvbiAoaXRlbSwgbW9kZWwsIGxhYmVsKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyB0eXBlYWhlYWRPblNlbGVjdCAyMDIxMDYxNi0yMjM3IGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpdGVtIHh4eHh4eHh4eDonKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21vZGVsOicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobW9kZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhYmVsOicpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGFiZWwpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0gaXRlbTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLm5nTW9kZWwgPSBpdGVtLmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgc2V0dGluZyBuZ01vZGVsIFske3ZtLm5nTW9kZWx9XSAga2V5Q29sdW1uIFske3ZtLmtleUNvbHVtbn1dICAyMDIxMDYxNy0xMjEyYCwgJ2NvbG9yOmN5YW47Zm9udC1zaXplOjEycHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbTonKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICcpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLnZhbGlkYXRlVGhpcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZtLnNldHVwVXJsKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8xMy8yMDIxIDEwOjM5IHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzAyNl0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgRHJvcGRvd25MaXN0RGlyZWN0aXZlIHZtLnZhbGlkYXRlVGhpcyAtIDIwMjEwNjE3LTEwNDMgICcsICdjb2xvcjp5ZWxsb3cnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5uZ01vZGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm5nTW9kZWwgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh2bS5uZ01vZGVsICE9IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQodm0ubmdNb2RlbCkudGhlbih2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzLCB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvcik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gJHNjb3BlLiRicm9hZGNhc3QoQlJPQURDQVNUX0lERU5USUZJRVJTLkRST1BET1dOX0xJU1RfRElSRUNUSVZFLCB7IG1zZzogRERMRF9DSEFOR0VfTVNHLkhBU19WQUxJRF9WQUxVRSwga2V5Q29sdW1uOiB2bS5rZXlDb2x1bW4sIGtleVZhbHVlOiB2bS5uZ01vZGVsIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTA1MjgnLCBtZXNzYWdlOiBgdmFsaWRhdGVUaGlzOiB2bS5rZXlDb2x1bW4gWyR7dm0ua2V5Q29sdW1ufV0gIG5nTW9kZWwgWyR7dm0ubmdNb2RlbH1dICAgcGFyZW50S2V5Q29sdW1uIFske3ZtLnBhcmVudEtleUNvbHVtbn1dYCB9LCAneWVsbG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyB0aXRsZTogdm0uY29udGFpbmVyVmlld1ZhbHVlIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBTdWNjZXNzID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGN1cnJlbnREaXNwbGluZUxvb2t1cFN1Y2Nlc3MgLSAyMDIxMDYxNy0xMDUxJywgJ2NvbG9yOnllbGxvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyB1cGRhdGUgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCAgMjAyMTA2MTgtMTkxOCcsICdjb2xvcjp5ZWxsb3c7Zm9udC1zaXplOjEycHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGNoZWNrIGRhdGEuZGlzY2lwbGluZWlkIGRhdGEudGFfaWQgJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTJwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGlzY2lwbGluZUlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEuZGlzY2lwbGluZUlkLCB0aXRsZTogZGF0YS5kaXNjaXBsaW5lU2hvcnQgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHsgaWQ6IGRhdGEudGFfaWQsIHRpdGxlOiBkYXRhLnRhX2Rlc2NyaXB0aW9uIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMwXCIgfSwgXCJyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCJEcm9wZG93bkxpc3QtMjAyMTA2MDktMDE0M1wiLCBtZXNzYWdlOiBcIkRlYnVnZ2luZy0wMzFcIiB9LCBcInJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIkRyb3Bkb3duTGlzdC0yMDIxMDYwOS0wMTQzXCIsIG1lc3NhZ2U6IFwiRGVidWdnaW5nLTAzMlwiIH0sIFwicmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiRHJvcGRvd25MaXN0LTIwMjEwNjA5LTAxNDNcIiwgbWVzc2FnZTogXCJEZWJ1Z2dpbmctMDMzXCIgfSwgXCJyZWRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2bS5jdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTIxNTgtQScsIG1lc3NhZ2U6IGBjdXJyZW50RGlzcGxpbmVMb29rdXBFcnJvciBgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjE1OC1CJywgbWVzc2FnZTogYGN1cnJlbnREaXNwbGluZUxvb2t1cEVycm9yIGAsIGVycm9yT2JqZWN0OiBlcnJvciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIENhbGxlZCBmcm9tIHZpZXcgaW5wdXQgZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZXMgPSBmdW5jdGlvbiAobG9va3VwVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIGdldERpc2NpcGxpbmVzICAyMDIxMDYxOC0xOTE5JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTZwdDsnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGFkZGluZyBuZXcgZW50cmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5jb250YWluZXJWaWV3VmFsdWUgPSBsb29rdXBWYWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNy0xNjA3LUFcIiwgbWVzc2FnZTogXCJnZXREaXNjaXBsaW5lIGNhbGwgdG8gYXNzaWduIGNvbnRhaW5lclZpZXdWYWx1ZSBmYWlsZWRcIiB9LCBcIlJlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjEyLTAwNDFcIiwgbWVzc2FnZTogYGdldERpc2NpcGxpbmUgY2FsbCB0byBhc3NpZ24gY29udGFpbmVyVmlld1ZhbHVlIGZhaWxlZCBbJHtsb29rdXBWYWx1ZX1dYCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2bS5zZXR1cFVybCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAobG9va3VwVmFsdWUgPT09IG51bGwpIGxvb2t1cFZhbHVlID0gXCJcIjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLnF1ZXJ5SXNJblByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuZGVmZXJyZWRfZ2V0RGlzY2lwbGluZVF1ZXJ5LnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGV4ZWN1dGVRdWVyeSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBleGVjdXRlUXVlcnkoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucXVlcnlJc0luUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGVmZXJyZWRfZ2V0RGlzY2lwbGluZVF1ZXJ5ID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgZ2V0RGlzY2lwbGluZXMgLSAyMDIxMDYxNy0xMTE5ICcsICdjb2xvcjp5ZWxsb3cnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2bS5BUElVcmxMaXN0QWxsOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5BUElVcmxMaXN0QWxsKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVib3VuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdm0uQVBJVXJsTGlzdEFsbFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuZGVmZXJyZWRfZ2V0RGlzY2lwbGluZVF1ZXJ5LnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uYWRkcmVzc2VzID0gW107XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChyZXNwb25zZS5kYXRhLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoaXRlbSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVJZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRpc2NpcGxpbmVTaG9ydC50b0xvd2VyQ2FzZSgpLmluZGV4T2YobG9va3VwVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmFkZHJlc3Nlcy5wdXNoKHsgaWQ6IGl0ZW0uZGlzY2lwbGluZUlkLCB0aXRsZTogaXRlbS5kaXNjaXBsaW5lU2hvcnQgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnRhX2lkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udGFfZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGxvb2t1cFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5hZGRyZXNzZXMucHVzaCh7IGlkOiBpdGVtLnRhX2lkLCB0aXRsZTogaXRlbS50YV9kZXNjcmlwdGlvbiB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmFkZHJlc3Nlcy5sZW5ndGggPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgdm0uZGlzY2lwbGluZVNlbGVjdGVkX1hYWCA9IHZtLmFkZHJlc3Nlc1swXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzEyLzIwMjEgMDE6MTUgcG0gLSBTU04gLSBUZXN0aW5nIGlmIGNhbiBnZXQgb3ZlciBwcmV2ZW50aW5nIHVzZXJzIGZyb20gYWx0ZXJpbmcgc2luZ2xlIG1hdGNoZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLyB2bS5kaXNjaXBsaW5lU2VsZWN0ZWRfWFhYID0geyBpZDogdm0uYWRkcmVzc2VzWzBdLmlkIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdm0ubmdNb2RlbCA9IHZtLmFkZHJlc3Nlc1swXS5pZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucmVzb2x2ZSh2bS5hZGRyZXNzZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxMzlcIiwgbWVzc2FnZTogXCJ0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3JcIiB9LCBcInJlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA4LTIxNDBcIiwgbWVzc2FnZTogXCJ0eXBlYWhlYWREaXNjaXBsaW5lRXJyb3JcIiwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kZWZlcnJlZF9nZXREaXNjaXBsaW5lUXVlcnkucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5xdWVyeUlzSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdm0uZ2V0RGlzY2lwbGluZUN1cnJlbnQgPSBmdW5jdGlvbiAobG9va3VwSUQpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb29rdXBJRCA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwMTA1LTIyNDMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Ryb3Bkb3duTGlzdERpcmVjdGl2ZSBsb29rdXBJRCBpcyBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tICBDQU5DRUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0gIENBTkNFTCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLSAgQ0FOQ0VMJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA4LTE0MTUnLCBtZXNzYWdlOiBgQ2FsbGluZyBnZXREaXNjaXBsaW5lQ3VycmVudCAgd2l0aCBudWxsIGxvb2t1cElEYCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9jYWxVcmwgPSB2bS5BUElVcmxTaW5nbGVSZWNvcmQgKyBcIi9cIiArIGxvb2t1cElEO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGxvY2FsVXJsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4odHlwZWFoZWFkRGlzY2lwbGluZVN1Y2Nlc3MsIHR5cGVhaGVhZERpc2NpcGxpbmVFcnJvcikuY2F0Y2godHlwZWFoZWFkRGlzY2lwbGluZUNhdGNoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiB0eXBlYWhlYWREaXNjaXBsaW5lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmlzUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gdHlwZWFoZWFkRGlzY2lwbGluZUVycm9yKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWMgZ2V0RGlzY2lwbGluZUN1cnJlbnQgMjAyIGxvb2t1cElEICBbJHtsb29rdXBJRH1dIGVycm9yYCwgJ2NvbG9yOnJlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzE2JywgbWVzc2FnZTogYEZhaWxlZCBjYWxsIHRvIFske2xvY2FsVXJsfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHR5cGVhaGVhZERpc2NpcGxpbmVDYXRjaChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIHR5cGVhaGVhZERpc2NpcGxpbmVDYXRjaCAgbG9va3VwSUQgIFske2xvb2t1cElEfV0gY2F0Y2hgLCAnY29sb3I6cmVkLGZvbnQtc2l6ZToxNHB0OycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0xMzE2JywgbWVzc2FnZTogYEZhaWxlZCBjYWxsIHRvIFske2xvY2FsVXJsfV1gIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHJlc3BvbnNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZtLmZvcm1FcnJvcnNCeUNvbnRyb2wgPSBmdW5jdGlvbiAoY29udHJvbE5hbWUsIGVycm9yTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5mb3JtTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZm9ybU5hbWVbY29udHJvbE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZtLmZvcm1OYW1lW2NvbnRyb2xOYW1lXSlbXCIkZXJyb3JcIl1bZXJyb3JOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdHJpY3Q6IFwiRVwiLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL0Ryb3Bkb3duTGlzdC9Ecm9wRG93bkxpc3REaXJlY3RpdmUuaHRtbFwiLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIHJlcXVpcmU6ICduZ01vZGVsJyxcclxuICAgICAgICAgICAgICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWUsIC8vcmVxdWlyZWQgaW4gMS4zKyB3aXRoIGNvbnRyb2xsZXJBcyAtIFZFUklGSUVELlxyXG4gICAgICAgICAgICAgICAgc2NvcGU6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbFNvdXJjZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbHVtbjogXCJAa2V5XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEtleUNvbHVtbjogXCI9cGFyZW50a2V5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50S2V5TmFtZTogXCJAXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiBcIj1cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGlkZGVuRmllbGROYW1lOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbDogXCI9XCIsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jOiBcIiZcIixcclxuICAgICAgICAgICAgICAgICAgICBhZGRGdW5jU291cmNlOiBcIkBcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9sZGVyIGZvciB0eXBlZCBpbiB2YWx1ZSwgaWYgaXQgZG9lc24ndCBleGlzdCwgc28gaXQgY2FuIGJlIGNvcGllZCB0byB0aGUgYWRkIGZvcm0uXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBcIj0/XCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duTGlzdERpcmVjdGl2ZUlucHV0Qm94SW52ZXJzZTogXCJAXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZTogZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHNjb3BlOiBJU2NvcGVfRERMRCwgZWwsIGF0dHJzLCBjdHJsKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJWaWV3VmFsdWUgPSBcIk5vdFNldC0yMDIxMDYwNy0wMjEzXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNy0xNjA4LUFcIiwgbWVzc2FnZTogXCJVcGRhdGUgY29udGFpbmVyVmlld1ZhbHVlXCIgfSwgXCJyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjA3LTE2MDgtQlwiLCBtZXNzYWdlOiB0aGlzLmNhbGxTb3VyY2UgfSwgXCJyZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcblxyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkcm9wZG93bkxpc3REaXJlY3RpdmVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNi8xNy8yMDIxIDA5OjI5IHBtIC0gU1NOIFxyXG5cclxuY29uc3QgRERMRF9DT05TVEFOVFMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgTk9UX0RFRklORUQ6IFwiTk9UX0RFRklORURcIixcclxuICAgICAgICBVUERBVEVfSElEREVOX0tFWV9WQUxVRTogXCJVUERBVEVfSElEREVOX0tFWV9WQUxVRVwiLFxyXG4gICAgICAgIFNFTEVDVF9ORVdfVkFMVUU6IFwiU0VMRUNUX05FV19WQUxVRVwiLFxyXG4gICAgICAgIEhBU19WQUxJRF9WQUxVRTogXCJIQVNfVkFMSURfVkFMVUVcIixcclxuICAgICAgICBET19TRVRfRk9DVVM6IFwiRE9fU0VUX0ZPQ1VTXCIsXHJcbiAgICAgICAgVVBEQVRFX0RST1BET1dOX0xJU1Q6IFwiVVBEQVRFX0RST1BET1dOX0xJU1RcIixcclxuICAgICAgICBDQUxMX1ZBTElEQVRFX1RISVM6IFwiQ0FMTF9WQUxJREFURV9USElTXCJcclxuXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBERExEX0NPTlNUQU5UUyB9Iiwi77u/aW1wb3J0IHsgZ2xvYmFsc19pbnN0YW5jZSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxuLy8gMTIvMDcvMjAxOSAwMzo1MyBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wMzUzXSAtIFswMDFdIC0gU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvclxyXG5cclxuXHJcbi8vIGh0dHBzOi8vY29kZS5hbmd1bGFyanMub3JnLzEuMi4yNy9kb2NzL2FwaS9uZy9zZXJ2aWNlLyRodHRwI2ludGVyY2VwdG9yc1xyXG5cclxuXHJcbmNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coYHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSB0b3AgJHtkLnRvTG9jYWxlVGltZVN0cmluZygpfWApO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gdG9wIC0gMjAxOTEyMDctMDQxMCcpO1xyXG5cclxubGV0IHNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3JfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciAtIGZ1bmN0aW9uIHRvcCAtIDIwMTkxMjA3LTA0MTEnKTtcclxuXHJcblxyXG4gICAgICAgIHZhciBhbmd1bGFyanNfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdTZXNzaW9uVGltZW91dEludGVyY2VwdG9yJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcbiAgICAgICAgLy8gMDYvMTgvMjAyMSAwODo0MSBhbSAtIFNTTiAtIEFkZGluZyBzc25fbG9nZ2VyXHJcblxyXG4gICAgICAgIGFuZ3VsYXJqc19tb2R1bGUuY29uZmlnKFtcclxuICAgICAgICAgICAgJyRodHRwUHJvdmlkZXInLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoJGh0dHBQcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA4LzIxLzIwMjAgMTA6NTMgYW0gLSBTU04gLSBBZGRpbmcgJGxvY2F0aW9uXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGludGVyY2VwdG9yID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICckcScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyRyb290U2NvcGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICckbG9jYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdzc25fbG9nZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgJ3VzZXJTZXNzaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoJHEsICRyb290U2NvcGUsICRsb2NhdGlvbiwgc3NuX2xvZ2dlcikgeyAvLyAsIHVzZXJTZXNzaW9uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IgLSBNYWluIGZ1bmN0aW9uIC0gMjAxOTEyMDctMDQxMi1NRicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZpY2UgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcnVuIHRoaXMgZnVuY3Rpb24gYmVmb3JlIG1ha2luZyByZXF1ZXN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZnVuY3Rpb24gKGNvbmZpZykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdG9yIC0gTWFpbiBmdW5jdGlvbiAtIFNFUlZJQ0UgLSAyMDE5MTIwNy0wNDEyLVNFUlZJQ0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKCdjb25maWcgbmV4dDonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vL2NvbnNvbGUubG9nKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vL2lmIChjb25maWcubWV0aG9kID09PSAnR0VUJyB8fCB1c2VyU2Vzc2lvbi5pc0F1dGgoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vLy8vLy8vLy8vLyAgICAvLyB0aGUgcmVxdWVzdCBsb29rcyBnb29kLCBzbyByZXR1cm4gdGhlIGNvbmZpZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLyBiYWQgcmVxdWVzdCwgc28gcmVqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8vLy8vLy8vLy8vcmV0dXJuICRxLnJlamVjdChjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0RXJyb3I6IGZ1bmN0aW9uIChyZWplY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzZXNzaW9uVGltZW91dEludGVyY2VwdGVyIC0gcmVxdWVzdEVycm9yIC0gMjAyMDA4MjEtMTA0Ni0wMDEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlamVjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIGNvbnNvbGUubG9nKCdzZXNzaW9uVGltZW91dEludGVyY2VwdGVyIC0gcmVzcG9uc2UgLSAyMDIwMDgyMS0xMDQ2LTAwMicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Nlc3Npb25UaW1lb3V0SW50ZXJjZXB0ZXIgLSByZXNwb25zZUVycm9yIC0gMjAyMDA4MjEtMTA0Ni0wMDMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTgtMDg1M1wiLCBtZXNzYWdlOiBgU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcmAsIGVycm9yT2JqZWN0OiBlcnJvciB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaChpbnRlcmNlcHRvcik7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcl9pbnN0YW5jZTtcclxuXHJcbiIsIu+7v2ltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcbi8vIDEyLzA3LzIwMTkgMDc6MDYgYW0gLSBTU04gLSBbMjAxOTEyMDctMDcwNF0gLSBbMDAxXSAtIEFuZ3VsYXJKUyAtIFJvdXRpbmcgLSBBdXRoZW50aWNhdGlvblxyXG5cclxuLy8gTW92ZWQgZnJvbSBkZW1vU2l0ZXNfaW5kZXgudHMgLSBCZWdpblxyXG5cclxuLy8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgXHJcblxyXG5cclxuXHJcbnZhciByb3V0aW5nX2NvbmZpZ19pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBmcm9tIFJvdXRpbmdfQ29uZmlnIHRvIFJvdXRpbmdfQ29uZmlnIHdpdGggbW92ZS5cclxuICAgIC8vIE1vdmVkIG91dHNpZGUgdG8gc2hhcmVkIGJldHdlZW4gZG9TZXR1cF9hIGFuZCBkb1NldHVwX2JcclxuICAgIHZhciBhbmd1bGFySlNfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSb3V0aW5nX0NvbmZpZycsIFwiZGVtb1NpdGVzX0luZGV4XCIsIFsnbmdSb3V0ZSddKTtcclxuXHJcblxyXG5cclxuICAgIC8vIGZyb20gUm91dGluZ19Db25maWcgdG8gUm91dGluZ19Db25maWcgd2l0aCBtb3ZlLlxyXG5cclxuICAgIHZhciBkb1NldHVwX2EgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yNi8yMDE5IDA1OjUxIGFtIC0gU1NOIC0gWzIwMTkwOTI2LTA1NTFdIEFkZCAkbG9jYXRpb25Qcm92aWRlclxyXG4gICAgICAgIGFuZ3VsYXJKU19tb2R1bGUuY29uZmlnKFtcIiRyb3V0ZVByb3ZpZGVyXCIsIFwiJGxvY2F0aW9uUHJvdmlkZXJcIiwgZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG5cclxuICAgICAgICAgICAgJHJvdXRlUHJvdmlkZXIud2hlbihcIi9cIiwge1xyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogXCJkZW1vU2l0ZUluZGV4Q29udHJvbGxlcl8xMDFcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvU2l0ZXNJbmRleC5odG1sXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xMC8yMDE5IDAxOjQ3IGFtIC0gU1NOIC0gWzIwMTkwOTEwLTAxNDddIC0gWzAwMV0gLSBXQVJOSU5HOiBUcmllZCB0byBsb2FkIGFuZ3VsYXIgbW9yZSB0aGFuIG9uY2UuXHJcbiAgICAgICAgICAgIC8vIFR1cm4gb2ZmXHJcbiAgICAgICAgICAgIC8vJHJvdXRlUHJvdmlkZXIud2hlbihcIi9kZXRhaWxcIiwge1xyXG4gICAgICAgICAgICAvLyAgICBjb250cm9sbGVyOiBcImRldlNpdGVVcGRhdGVDb250cm9sbGVyXCIsXHJcbiAgICAgICAgICAgIC8vICAgIC8vIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvU2l0ZURldGFpbC5odG1sXCJcclxuICAgICAgICAgICAgLy8gICAgdGVtcGxhdGVVcmw6IFwiL0RldlNpdGVzL0NyZWF0ZV9wYXJ0aWFsXCJcclxuICAgICAgICAgICAgLy99KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjYvMjAxOSAwNTo1MSBhbSAtIFNTTiAtIFsyMDE5MDkyNi0wNTUxXSBBZGQgJGxvY2F0aW9uUHJvdmlkZXJcclxuICAgICAgICAgICAgLy8gVXNlIHRoZSBIVE1MNSBoaXN0b3J5IEFQSVxyXG4gICAgICAgICAgICAvLyAgJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHsgcmVkaXJlY3RUbzogXCIvXCIgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBUb2RvOiAgMTEvMTMvMjAxOSAxMDoxOSBwbSAtIFNTTiAtIFRlc3RpbmdcclxuICAgICAgICAgICAgLy8gVGFrZSBvdXRcclxuICAgICAgICAgICAgLy8gJHJvdXRlUHJvdmlkZXIub3RoZXJ3aXNlKHt9KTtcclxuXHJcbiAgICAgICAgICAgICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7IGVuYWJsZWQ6IHRydWUsIHJld3JpdGVMaW5rczogZmFsc2UgfSkuaGFzaFByZWZpeCgnIScpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgICAgIC8vIE1vdmVkIGZyb20gZGVtb1NpdGVzX2luZGV4LnRzIC0gRW5kXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMi8wNy8yMDE5IDA4OjAyIGFtIC0gU1NOIC0gWzIwMTkxMjA3LTA3MDRdIC0gWzAwM10gLSBBbmd1bGFySlMgLSBSb3V0aW5nIC0gQXV0aGVudGljYXRpb25cclxuXHJcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE3MjA5MjAzL2FuZ3VsYXJqcy1wcm90ZWN0aW5nLXJvdXRlcy13aXRoLWFuZ3VsYXJqcy1kZXBlbmRpbmctaWYtdGhlLXVzZXItaXMtYXV0aG9yaXplZFxyXG5cclxuICAgIHZhciBkb1NldHVwX2IgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSb3V0aW5nX0NvbmZpZy50cyAtIDIwMjEwNDE3LTA4MTknKTtcclxuXHJcbiAgICAgICAgYW5ndWxhckpTX21vZHVsZS5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyKSB7XHJcbiAgICAgICAgICAgICRyb3V0ZVByb3ZpZGVyXHJcbiAgICAgICAgICAgICAgICAud2hlbignL25lZWRzYXV0aG9yaXNhdGlvbicsIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbmZpZyBmb3IgY29udHJvbGxlciBhbmQgdGVtcGxhdGVcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVGhpcyBmdW5jdGlvbiBpcyBpbmplY3RlZCB3aXRoIHRoZSBBdXRoU2VydmljZSB3aGVyZSB5b3UnbGwgcHV0IHlvdXIgYXV0aGVudGljYXRpb24gbG9naWNcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2F1dGgnOiBmdW5jdGlvbiAoQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBdXRoU2VydmljZS5hdXRoZW50aWNhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pLnJ1bihmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vSWYgdGhlIHJvdXRlIGNoYW5nZSBmYWlsZWQgZHVlIHRvIGF1dGhlbnRpY2F0aW9uIGVycm9yLCByZWRpcmVjdCB0aGVtIG91dFxyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLiRvbignJHJvdXRlQ2hhbmdlRXJyb3InLCBmdW5jdGlvbiAoZXZlbnQsIGN1cnJlbnQsIHByZXZpb3VzLCByZWplY3Rpb24pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdGlvbiA9PT0gJ05vdCBBdXRoZW50aWNhdGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xNy8yMDIxIDA4OjIwIGFtIC0gU1NOIC0gQWRkaW5nIGZvciByZWNvcmRcclxuXHJcbiAgICAgICAgICAgICRyb290U2NvcGUuJG9uKCckcm91dGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgbmV4dCwgY3VycmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd2VibG9ncy5hc3AubmV0L2R3YWhsaW4vZHluYW1pY2FsbHktbG9hZGluZy1jb250cm9sbGVycy1hbmQtdmlld3Mtd2l0aC1hbmd1bGFyanMtYW5kLXJlcXVpcmVqc1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNDE3LTA4MjI6ICRyb3V0ZUNoYW5nZVN0YXJ0IC0gSW5jb21wbGV0ZSBhdXRoZW50aWNhdGlvbiBjaGVjaycpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KS5mYWN0b3J5KCdBdXRoU2VydmljZScsIGZ1bmN0aW9uICgkcSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgYXV0aGVudGljYXRlOiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0F1dGhlbnRpY2F0aW9uIGxvZ2ljIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgYXV0aGVudGljYXRlZCwgcmV0dXJuIGFueXRoaW5nIHlvdSB3YW50LCBwcm9iYWJseSBhIHVzZXIgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vRWxzZSBzZW5kIGEgcmVqZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QoJ05vdCBBdXRoZW50aWNhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGRvU2V0dXBfYSgpO1xyXG4gICAgICAgIGRvU2V0dXBfYigpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IHJvdXRpbmdfY29uZmlnX2luc3RhbmNlIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDYvMTgvMjAyMSAwMjo1OCBhbSAtIFNTTiAtIEFkZGluZ1xyXG5cclxuZXhwb3J0IGNvbnN0IEJST0FEQ0FTVF9JREVOVElGSUVSUyA9IHtcclxuXHJcbiAgICBEUk9QRE9XTl9MSVNUX0RJUkVDVElWRTpcIkRST1BET1dOX0xJU1RfRElSRUNUSVZFXCJcclxuXHJcbn0iLCLvu79cclxuLy8gMDYvMDkvMjAyMSAxMTo1MiBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMTBdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJ1xyXG5cclxuXHJcbmNvbnN0IE1vZGFsQ2FsbHNVdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlLCBuZ0FwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ01vZGFsQ2FsbHNVdGlsJyArICdfWF8nICsgY2FsbFNvdXJjZSwgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ01vZGFsQ2FsbFNVdGlsQ29udHJvbGxlcicsIFsnJHNjb3BlJywgJ3Nzbl9sb2dnZXInLCAnJHVpYk1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uICgkc2NvcGUsIHNzbl9sb2dnZXIsICR1aWJNb2RhbCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwMjQnLCBtZXNzYWdlOiAnTW9kYWxDYWxsc1V0aWwgZG9TZXR1cCcgfSwgJ3llbGxvdycsIHRydWUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZE5ld0xpbmVJdGVtID0gZnVuY3Rpb24gKGpvYklELCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjEwLTAwNDMtQScsIG1lc3NhZ2U6ICdDYWxsaW5nIGFkZE5ld0xpbmVJdGVtJyB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiAnMjAyMTA2MTAtMDA0My1CJywgbWVzc2FnZTogYGpvYklEIFske2pvYklEfV1gIH0sICd5ZWxsb3cnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxMC0wMDQzLUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC9MaW5lSXRlbS9MaW5lSXRlbVRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnTGluZUl0ZW1Db250cm9sbGVyJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclZpZXdWYWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDM6MjUgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQwXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmFkZE5ld1RlY2hub2xvZ3kgPSBmdW5jdGlvbiAoY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNS0wMzI2LUEnLCBtZXNzYWdlOiAnQ2FsbGluZyBhZGROZXdUZWNobm9sb2d5ICcgfSwgJ3llbGxvdycsIHRydWUpOyBcclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYxNS0wMzI2LUMnLCBtZXNzYWdlOiBgY29udGFpbmVyVmlld1ZhbHVlIFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL1RlY2hub2xvZ3kvVGVjaG5vbG9neUNyZWF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RlY2hub2xvZ3lDb250cm9sbGVyJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lclZpZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgTW9kYWxDYWxsc1V0aWwgfTtcclxuXHJcbiIsIu+7v1xyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B0eXBlcy90b2FzdHIvaW5kZXguZC50c1wiIC8+XHJcblxyXG4vLyAwNi8wNi8yMDIxIDAzOjA2IGFtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAwNV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCB7IElKb2JfTGluZWl0ZW1KUyB9IGZyb20gJy4uLy4uL0ludGVyZmFjZXMvSUpvYl9MaW5laXRlbSc7XHJcblxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuXHJcblxyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5pbXBvcnQgeyBJTG9nZ2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcbmltcG9ydCB7IERETERfQ09OU1RBTlRTIH0gZnJvbSAnLi4vLi4vRHJvcGRvd25MaXN0L0Ryb3Bkb3duTGlzdERpcmVjdGl2ZUNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEJST0FEQ0FTVF9JREVOVElGSUVSUyB9IGZyb20gJy4uLy4uL1NoYXJlZC9Ccm9hZGNhc3RfSWRlbnRpZmVycyc7XHJcblxyXG5cclxuQXBwSW5zaWdodHNfVXRpbC5kb1NldHVwKFwiTGluZUl0ZW1Db250cm9sbGVyXCIpO1xyXG5cclxuXHJcbnZhciBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgdmFyIGFuZ3VsYXJBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignTGluZUl0ZW1Db250cm9sbGVyJywgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhckFwcC5jb250cm9sbGVyKCdMaW5lSXRlbUNvbnRyb2xsZXInLCBbJyRxJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCAnam9iSWQnLCAnY29udGFpbmVyVmlld1ZhbHVlJywgbGluZUl0ZW1Db250cm9sbGVyRnVuY3Rpb25dKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxpbmVJdGVtQ29udHJvbGxlckZ1bmN0aW9uKCRxLCAkdWliTW9kYWxJbnN0YW5jZSwgJHJvb3RTY29wZSwgJHNjb3BlLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUsIGpvYklkLCBjb250YWluZXJWaWV3VmFsdWUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGVmYXVsdFZhbHVlID0gY29udGFpbmVyVmlld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDIxMDYwNl8xNTE0XCIsIHsgU291cmNlQ29kZTogXCIyMDIxMDYwNi0xNTE0XCIsIE1lc3NhZ2U6IFwiSW5pdFwiIH0pO1xyXG5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJMaW5lIGl0ZW0tMDAxXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iU3VjY2VzcyhkYXRhKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBuZXdSZWM6IElKb2JfTGluZWl0ZW1KUztcclxuXHJcbiAgICAgICAgICAgICAgICBuZXdSZWMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGRhdGEuam9iSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRpdGxlOiBkYXRhLnByb2plY3QucHJvamVjdFRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtOiAkc2NvcGUuZGVmYXVsdFZhbHVlXHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZUpvYl9MaW5lSXRlbSA9IG5ld1JlYztcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRKb2JFcnJvcihlcnIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdMaW5lSXRlbUNvbnRyb2xsZXIgLSBnZXRKb2JFcnJvciAtIDIwMjEwNjA2LTA2MTEtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYyMC0xNzIxXCIsIG1lc3NhZ2U6IFwiTGluZUl0ZW1Db250cm9sbGVyIC0gZ2V0Sm9iRXJyb3IgLSBGYWlsZWQgdG8gZ2V0IHJlY29yZFwiLCBlcnJvck9iamVjdDogZXJyIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iQ2F0Y2goZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignTGluZUl0ZW1Db250cm9sbGVyIC0gZ2V0Sm9iRXJyb3IgLSAyMDIxMDYwNi0wNjExLUQgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MDYtMDYxMS1DLTItMlwiLCBtZXNzYWdlOiBcIkxpbmVJdGVtQ29udHJvbGxlciAtZ2V0Sm9iQ2F0Y2ggLSBGYWlsZWQgdG8gZ2V0IHJlY29yZFwiLCBlcnJvck9iamVjdDogZXJyIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVKb2JfTGluZUl0ZW0ubGluZUl0ZW0gPSAkc2NvcGUuZGVmYXVsdFZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVKb2JfTGluZUl0ZW0ubGluZUl0ZW0gPT0gXCIwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE1LTA0MDFcIiwgbWVzc2FnZTogXCJMaW5lSXRlbSBuZXcgZW50cnkgZXJyb3IgLSBzYXZpbmcgJzAnIHJlY29yZCBcIiB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5hZGRPclVwZGF0ZUpvYl9MaW5lSXRlbSgkc2NvcGUuZWRpdGFibGVKb2JfTGluZUl0ZW0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KEJST0FEQ0FTVF9JREVOVElGSUVSUy5EUk9QRE9XTl9MSVNUX0RJUkVDVElWRSwgeyBtc2c6IERETERfQ09OU1RBTlRTLlVQREFURV9EUk9QRE9XTl9MSVNULCBrZXlDb2x1bW46IFwibGluZUl0ZW1JZFwiLCBpZDogZGF0YS5saW5lSXRlbUlkLCBkZXNjcmlwdGlvbjogZGF0YS5saW5lSXRlbSB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuaW5mbyhcIkxpbmUgaXRlbSBzYXZlZC5cIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMaW5lSXRlbUNvbnRyb2xsZXIgLSAyMDIxMDYwNi0wNTQ4IC0gcHJvbWlzZSA+IGVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBlcnJvci5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNi0yMDU1XCIsIG1lc3NhZ2U6IFwiZnVuY3Rpb24gPiBlcnJvclwiLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYwNi0yMDUyXCIsIG1lc3NhZ2U6IFwiZnVuY3Rpb24gPiBlcnJvclwiLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBzYXZlIHJlY29yZC4gIFNlZSBjb25zb2xlIGxvZy5cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBhbmd1bGFyQXBwLmRpcmVjdGl2ZSgnbGluZUl0ZW1Ob0R1cGxpY2F0ZScsIFtcIiRxXCIsIFwic3NuX2xvZ2dlclwiLCBmdW5jdGlvbiAoJHEsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlOiAnbmdNb2RlbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtLCBhdHRyLCBuZ01vZGVsX2N0cmwpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZ01vZGVsX2N0cmwuJHBhcnNlcnMudW5zaGlmdChmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyAqeCp4KngqeCp4KngqeCp4KngqeCp4KngqeCp4KngnLCAnY29sb3I6cmVkO2ZvbnQtc2l6ZToyMHB4Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjIC0tLS0tLS0tLS0tLS0tLS0gbmdNb2RlbF9jdHJsLS0tLS0tLS0gIC0tLS0tLS0tLS0tLS0tLS0tLWAsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjIwcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5nTW9kZWxfY3RybCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlc3R2YWx1ZTEgPSBhdHRyW1wibmFtZVwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxMSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0ZXN0dmFsdWUxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIyKSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnNDQpIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYXR0cilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzU1KSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRzZXRWYWxpZGl0eShhdHRyLm5hbWUsIGZhbHNlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmdNb2RlbF9jdHJsLiRhc3luY1ZhbGlkYXRvcnMuZHVwbGljYXRlTGluZUl0ZW0gPSBmdW5jdGlvbiAobW9kZWxWYWx1ZSwgdmlld1ZhbHVlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgYXJlIHRha2luZyBjYXJlIG9mIGR1cGxpY2F0ZXMgYnkgaW52ZXJpbmcgdGhlIGxvZ2ljIGluIHRoZSBEcm9wZG93bkxpc3REaXJlY3RpdmUuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAobW9kZWxWYWx1ZSAmJiBtb2RlbFZhbHVlLmlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIGRlZmVycmVkLnJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfVxyXG4iLCLvu79cclxuLy8gMTEvMjEvMjAxOSAwNTo1MCBhbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMDNdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuXHJcblxyXG5pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbHNcIjtcclxuaW1wb3J0IHsgSVNjb3BlIH0gZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG5cclxuaW50ZXJmYWNlIElTY29wZV9sb2NhbCBleHRlbmRzIElTY29wZSB7XHJcblxyXG4gICAgY29udGludWVfb3JfbGluZUl0ZW1fY2FwdGlvbjogc3RyaW5nLFxyXG4gICAgc2hvd0Nsb2Nrb3V0T3B0aW9uOiBib29sZWFuLFxyXG4gICAgdG90YWxTZWNvbmRzOiBhbnksXHJcbiAgICB0aW1lbG9nSWQ6IGFueVxyXG59XHJcblxyXG5cclxudmFyIFRpbWVsb2dMaW5rT3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChkZWZhdWx0QXBwTmFtZSkge1xyXG5cclxuXHJcbiAgICAgICAgLy92YXIgVGltZWxvZ0xpbmtPcHRpb25zX2FuZ3VsYXJfbW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZShkZWZhdWx0QXBwTmFtZSwgW10pO1xyXG4gICAgICAgIHZhciBUaW1lbG9nTGlua09wdGlvbnNfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVsb2dMaW5rT3B0aW9ucycsIGRlZmF1bHRBcHBOYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIFRpbWVsb2dMaW5rT3B0aW9uc19hbmd1bGFyX21vZHVsZS5kaXJlY3RpdmUoJ3RpbWVsb2dMaW5rT3B0aW9ucycsIFsnJHVpYk1vZGFsJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgZnVuY3Rpb24gKCR1aWJNb2RhbCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiBcIkVcIixcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcIi9qcy9UaW1lc2hlZXQvVGltZWxvZ0xpbmtPdGlvbnMvVGltZWxvZ0xpbmtPcHRpb25zLmh0bWxcIixcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnRyb2xsZXJBczogJ3ZtMTAxJyxcclxuICAgICAgICAgICAgICAgIC8vYmluZFRvQ29udHJvbGxlcjogdHJ1ZSwgLy9yZXF1aXJlZCBpbiAxLjMrIHdpdGggY29udHJvbGxlckFzIC0gVkVSSUZJRUQuXHJcblxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCwgc2VydmluZ1BhZ2U6IFRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbW9kYWxFZGl0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvVGltZWxvZ0Nsb2Nrb3V0Lmh0bWwnLCAgLy8gdXNpbmcgc2FtZSBodG1sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpbmdQYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aW5nUGFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxFZGl0LnJlc3VsdC50aGVuKG1vZGFsRWRpdF9zYXZlLCBtb2RhbEVkaXRfY2FuY2VsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yMS8yMDE5IDA0OjA5IHBtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAxMV0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9DbG9ja091dCA9IGZ1bmN0aW9uICh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlOiBUaW1lbG9nX1NlcnZpbmdQYWdlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aW5nUGFnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VydmluZ1BhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDM6MzYgcG0gLSBTU04gLSBbMjAxOTExMTQtMTQ1OV0gLSBbMDA2XSAtIENoYW5nZU1vbml0cm9TZXJ2aWNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbENsb2Nrb3V0LnJlc3VsdC50aGVuKG1vZGFsQ2xvY2tvdXRfc2F2ZSwgbW9kYWxDbG9ja291dF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9ja291dF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA4OjM5IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwMl0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjEvMjAxOSAwNDowOSBwbSAtIFNTTiAtIFsyMDE5MTEyMS0wNTAzXSAtIFswMTFdIC0gVGltZWxvZyBlZGl0IG9wdGlvbnMgb24gcHJvamVjdCBzZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgc2VydmluZ1BhZ2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS50aW1lc2hlZXRGb3JtX0Nsb2NrQ29udGludWUgPSBmdW5jdGlvbiAodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDA5OjM3IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwM10gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE0LzIwMTkgMDI6NDQgcG0gLSBTU04gLSBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsID0gJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbjogJ3NsaWRlLWluLXVwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLCAvLz92PScgKyAkc2NvcGUudmVyc2lvbkZvckhUTUxSZWZyZXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgd2luZG93Q2xhc3M6ICdzc24tbW9iaWxlLW1vZGFsJyxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlcnZpbmdQYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMjo0NCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDddIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUsIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX3NhdmUgLSAyMDIxMDYxMi0wMTU1JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCAtIDIwMjEwNjEyLTAxNTYnLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA4OjQ1IGFtIC0gU1NOIC0gQ29waWVkIGZyb20gSm9iSW5kZXhDb250cm9sbGVyLnRzIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwNDowNiBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMTFdIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRHVwbGljYXRlIC0gV3Jvbmcgd2F5IHRvIGdvIVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMDgvMjAyMSAxMTowMSBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDRdIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBqb2JJZCB0byB0aW1lbG9nSWRfdjAxXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybSA9IGZ1bmN0aW9uICh0aW1lbG9nSWRfdjAxKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRpbWVzaGVldENvbnRyb2xsZXJfbW9kYWwgID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRDb250cm9sbGVyJyxcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzA4LzIwMjEgMDM6NTYgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDM3XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudCAtIExpbmUgaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2Ryb3A6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZF92MDE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZF92MDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTkvMjAyMSAwNzowMSBhbSAtIFNTTiAtIENhcHR1cmUgbW9kYWwgcmVzdWx0c1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVzaGVldENvbnRyb2xsZXJfbW9kYWwucmVzdWx0LnRoZW4oVGltZXNoZWV0Q29udHJvbGxlcl9tb2RhbF9zYXZlLCBUaW1lc2hlZXRDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyX21vZGFsX3NhdmUocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFRpbWVsb2dMaW5rT3B0aW9ucyAtIFRpbWVzaGVldENvbnRyb2xsZXIgc2F2ZSAtIDIwMjEwNjE5LTA3MDInLCAnY29sb3I6eWVsbG93O2ZvbnQtc2l6ZToxNHB0Jyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250cm9sbGVyX21vZGFsX2NhbmNlbChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJWMgVGltZWxvZ0xpbmtPcHRpb25zIC0gVGltZXNoZWV0Q29udHJvbGxlciBjYW5jZWwgLSAyMDIxMDYxOS0wNzAzJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5zaG93Q3JlYXRlVGltZXNoZWV0Rm9ybVdpdGhKb2JJZCA9IGZ1bmN0aW9uIChqb2JJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05hTihqb2JJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYklkID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXJfbW9kYWwgPSAgJHVpYk1vZGFsLm9wZW4oe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90ZW1wbGF0ZXMvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcicsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA2LzE5LzIwMjEgMDc6MDMgYW0gLSBTU04gLSBDYXB0dXJlIG1vZGFsIHJlc3VsdHNcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyX21vZGFsLnJlc3VsdC50aGVuKFRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBUaW1lbG9nTGlua09wdGlvbnMgLSBUaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyIHNhdmUgLSAyMDIxMDYxOS0wNzA0JywgJ2NvbG9yOnllbGxvdztmb250LXNpemU6MTRwdCcpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyVjIFRpbWVsb2dMaW5rT3B0aW9ucyAtIFRpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXIgY2FuY2VsIC0gMjAyMTA2MTktMDcwNScsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjE0cHQnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XSxcclxuXHJcbiAgICAgICAgICAgICAgICBzY29wZToge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IFwiQFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU2Vjb25kczogXCJAXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VydmluZ1BhZ2U6ICdAJyxcclxuICAgICAgICAgICAgICAgICAgICBqb2JJZDogJ0AnXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGU6IElTY29wZV9sb2NhbCwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXZlT3BlblJlY29yZCA9IHNjb3BlLnRpbWVsb2dJZCAmJiBzY29wZS50b3RhbFNlY29uZHMgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuc2hvd0Nsb2Nrb3V0T3B0aW9uID0gaGF2ZU9wZW5SZWNvcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRpbnVlX29yX2xpbmVJdGVtX2NhcHRpb24gPSAhaGF2ZU9wZW5SZWNvcmQgPyBcIkNvbnRpbnVlXCIgOiBcIkxpbmUgaXRlbVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH07XHJcblxyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMTo0MiBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEFwcF9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIC8vIDA1LzAzLzIwMTkgMDY6MzMgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDEzXSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcbiAgICAvLyBDb252ZXJ0IHRvIFRTXHJcblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRBcHAtZmlsZW5hbWUnLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG5cclxuICAgIC8vIDA0LzEyLzIwMTkgMDI6MzUgcG0gLSBTU04gLSBbMjAxOTA0MTItMTEyNl0gLSBUaW1lbG9nIC0gc2F2ZSBkYXRhIC0gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgaXMgaW4gdXNlIGJ5IERhdGFTZXJ2aWNlcy5qc1xyXG5cclxuXHJcbiAgICAvLyAxMS8xNC8yMDE5IDAzOjM1IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwNV0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgLy8gSW5qZWN0IGNoYW5nZU1vbml0b3JTZXJ2aWNlXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoXCJ0aW1lc2hlZXRDb250cm9sbGVyXCIsIFsnJHNjb3BlJywgJyR1aWJNb2RhbCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICckY29tcGlsZScsJ3Nzbl9sb2dnZXInLCAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgJGNvbXBpbGUsIHNzbl9sb2dnZXIpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDExLzE5LzIwMTkgMDY6NDMgYW0gLSBTU04gLSBbMjAxOTExMTktMDA0OF0gQWRkZWQgdG8gcmUtYmluZCBuZy1jbGlja1xyXG5cclxuICAgICAgICAkc2NvcGUuJG9uKCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuIFxyXG4gICAgICAgICAgICAkKFwiI1wiICsgaXRlbS50cl8yX2lkKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBpdGVtLnRyXzFfaWQpLnJlcGxhY2VXaXRoKGl0ZW0uaHRtbCk7XHJcblxyXG4gICAgICAgICAgICAkY29tcGlsZSgkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5jb250ZW50cygpKSgkc2NvcGUpO1xyXG5cclxuICAgICAgICAgICAgaGlnaHRsaWdodFJhd3NBZmZlY3RlZChpdGVtKTtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLiRvbignVGltZUxvZ19JbmRleF9JbnNlcnQnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgICQoXCIjdGltZXNoZWV0X2luZGV4X3Rib2R5XCIpLnByZXBlbmQoaXRlbS5odG1sKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkY29tcGlsZSgkKFwiI1wiICsgaXRlbS50cl8xX2lkKS5jb250ZW50cygpKSgkc2NvcGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3BPZlRpbWVzaGVldFRhYmxlJykuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGhpZ2h0bGlnaHRSYXdzQWZmZWN0ZWQoaXRlbSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBoaWdodGxpZ2h0UmF3c0FmZmVjdGVkKGl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBXZSBhc3N1bWUgdGhhdCB0aGUgbG9naWMgcmVtYWlucyB0aGUgc2FtZSBmb3IgbmFtaW5nIHJvd3MuICBCYWQgaWRlYSFcclxuICAgICAgICAgICAgY29uc3Qgcm93SWQxID0gaXRlbS50cl8xX2lkO1xyXG4gICAgICAgICAgICBjb25zdCByb3dJZDIgPSBpdGVtLnRyXzFfaWQuc3Vic3RyaW5nKDAsIGl0ZW0udHJfMV9pZC5sZW5ndGggLSAxKSArICcyJztcclxuXHJcbiAgICAgICAgICAgICQoXCIjXCIgKyByb3dJZDEpLmFkZENsYXNzKFwiY3NzSGlsaWdodDEwMlwiKTtcclxuICAgICAgICAgICAgJChcIiNcIiArIHJvd0lkMikuYWRkQ2xhc3MoXCJjc3NIaWxpZ2h0MTAyXCIpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tPdXQgPSBmdW5jdGlvbiAodGltZWxvZ0lkKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNDoxNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNjE2XSAtIFswMDFdIC0gVGltZXNoZWV0IC0gc3RvcCAvIGNvbnRpbnVlXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDAzOjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAwNF0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZ1xyXG4gICAgICAgICAgICAvLyBUZXN0aW5nOiAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogICdqcy90aW1lc2hlZXQvdGltZXNoZWV0VGVtcGxhdGUuaHRtbCcgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgIHRvIHRlbXBsYXRlVXJsOiAnL2pzL3RpbWVzaGVldC90aW1lc2hlZXRUZW1wbGF0ZS5odG1sJ1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBtb2RhbENsb2Nrb3V0ID0gJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbG9nSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwMzozNiBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDZdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICAgICAgICAgIG1vZGFsQ2xvY2tvdXQucmVzdWx0LnRoZW4obW9kYWxDbG9ja291dF9zYXZlLCBtb2RhbENsb2Nrb3V0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbENsb2Nrb3V0X3NhdmUocmVzdWx0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjI2XCIsIG1lc3NhZ2U6IFwiQ2xvc2luZyBtb2RhbENsb2Nrb3V0XCIgfSwgXCJyZWRcIiwgdHJ1ZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsQ2xvY2tvdXRfY2FuY2VsKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjI3XCIsIG1lc3NhZ2U6IFwiQ2FuY2VsIG1vZGFsQ2xvY2tvdXRcIiB9LCBcInllbGxvd1wiLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIDA1LzE5LzIwMTkgMDg6MzkgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDAyXSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLnRpbWVzaGVldEZvcm1fQ2xvY2tDb250aW51ZSA9IGZ1bmN0aW9uICh0aW1lbG9nSWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwOTozNyBhbSAtIFNTTiAtIFsyMDE5MDUxOS0wODM3XSAtIFswMDNdIC0gQWRkaW5nIHRpbWVzaGVldCBcIkNvbnRpbnVlXCIgb3B0aW9uXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsIFxyXG5cclxuICAgICAgICAgICAgbGV0IFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbCA9ICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246ICdzbGlkZS1pbi11cCcsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzLy90aW1lc2hlZXRUZW1wbGF0ZS5odG1sP3Y9JyArICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2gsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJyxcclxuICAgICAgICAgICAgICAgIHdpbmRvd0NsYXNzOiAnc3NuLW1vYmlsZS1tb2RhbCcsXHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lbG9nSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsb2dJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBtb2RhbENsb3NpbmdIb29rKCRzY29wZSk7XHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNC8yMDE5IDAyOjQ0IHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwN10gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG5cclxuXHJcbiAgICAgICAgICAgIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbC5yZXN1bHQudGhlbihUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZSwgVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX21vZGFsX2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBUaW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfbW9kYWxfc2F2ZShyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTktMDYyOC1BXCIsIG1lc3NhZ2U6IFwic2F2ZSBUaW1lc2hlZXRDb250aW51ZVwiIH0sIFwieWVsbG93XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE5LTA2MjgtQlwiLCBtZXNzYWdlOiByZXN1bHQgfSwgXCJ5ZWxsb3dcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIFRpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcl9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE5LTA2MjlcIiwgbWVzc2FnZTogXCJjYW5jZWwgVGltZXNoZWV0Q29udGludWVcIiB9LCBcInllbGxvd1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjI5LUJcIiwgbWVzc2FnZTogcmVzdWx0IH0sIFwieWVsbG93XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAvLyAxMS8xNC8yMDE5IDA0OjQxIHBtIC0gU1NOIC0gWzIwMTkxMTE0LTE0NTldIC0gWzAwOF0gLSBDaGFuZ2VNb25pdHJvU2VydmljZVxyXG4gICAgICAgIC8vIFRlc3RpbmcgLSBOb3Qgd29ya2luZy5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbW9kYWxDbG9zaW5nSG9vaygkc2NvcGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuJG9uKCdtb2RhbC5jbG9zaW5nJywgZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGNsb3NlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjMwLUFcIiwgbWVzc2FnZTogXCJNb2RhbCBjbG9zaW5nIGhvb2tcIiB9LCBcInllbGxvd1wiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjMwLUJcIiwgbWVzc2FnZTogcmVhc29uIH0sIFwieWVsbG93XCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE5LTA2MzAtQ1wiLCBtZXNzYWdlOiBjbG9zZWQgfSwgXCJ5ZWxsb3dcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIllvdSBhcmUgYWJvdXQgdG8gbGVhdmUgdGhlIGVkaXQgdmlldy4gVW5jYXVnaHQgcmVhc29uLiBBcmUgeW91IHN1cmU/XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGlja2VkIG91dHNpZGVcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmFja2Ryb3AgY2xpY2tcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW55IGNoYW5nZXMgd2lsbCBiZSBsb3N0LCBhcmUgeW91IHN1cmU/XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYW5jZWwgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNhbmNlbFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzY2FwZSBrZXlcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZXNjYXBlIGtleSBwcmVzc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJBbnkgY2hhbmdlcyB3aWxsIGJlIGxvc3QsIGFyZSB5b3Ugc3VyZT9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0obWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIDA2LzA4LzIwMjEgMTE6MDEgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDAzXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgLy8gam9iSWQgdG8gdGltZWxvZ0lkX3YwMVxyXG5cclxuICAgICAgICAkc2NvcGUuc2hvd0NyZWF0ZVRpbWVzaGVldEZvcm0gPSBmdW5jdGlvbiAodGltZWxvZ0lkX3YwMSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc05hTih0aW1lbG9nSWRfdjAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzAzLzIwMTkgMDQ6MTAgcG0gLSBTU04gLSBbMjAxOTA1MDMtMTUzOV0gLSBbMDA0XSAtIEFkZCBsaW5rIHRvIGNyZWF0ZSB0aW1lbG9nXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xOS8yMDIxIDA2OjMxIGFtIC0gU1NOIC0gQ2FwdHVyZSBvcGVuIHJldHVybiByZXN1bHRzXHJcbiAgICAgICAgICAgIGNvbnN0IHNob3dDcmVhdGVUaW1lc2hlZXRGb3JtX21vZGFsID0gICR1aWJNb2RhbC5vcGVuKHtcclxuXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9qcy90aW1lc2hlZXQvdGVtcGxhdGVzL3RpbWVzaGVldFRlbXBsYXRlLmh0bWwnLFxyXG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ1RpbWVzaGVldENvbnRyb2xsZXInLFxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZWxvZ0lkX3YwMTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkX3YwMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNob3dDcmVhdGVUaW1lc2hlZXRGb3JtX21vZGFsLnJlc3VsdC50aGVuKHNob3dDcmVhdGVUaW1lc2hlZXRGb3JtX21vZGFsX3NhdmUsIHNob3dDcmVhdGVUaW1lc2hlZXRGb3JtX21vZGFsX2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93Q3JlYXRlVGltZXNoZWV0Rm9ybV9tb2RhbF9zYXZlKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjMzXCIsIG1lc3NhZ2U6IFwic2F2ZSBzaG93Q3JlYXRlVGltZXNoZWV0Rm9ybVwiIH0sIFwieWVsbG93XCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzaG93Q3JlYXRlVGltZXNoZWV0Rm9ybV9tb2RhbF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE5LTA2MzRcIiwgbWVzc2FnZTogXCJzYXZlIHNob3dDcmVhdGVUaW1lc2hlZXRGb3JtXCIgfSwgXCJyZWRcIiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2UucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMTEvMTYvMjAxOSAwNDozNSBwbSAtIFNTTiAtIFsyMDE5MTExNi0xNTE2XSAtIFswMDJdIC0gVGltZWxvZyBlZGl0IChBbmd1bGFySlMgY2xpZW50IHZlcnNpb24pXHJcblxyXG5cclxuICAgICAgICAkc2NvcGUudGltZXNoZWV0Rm9ybV9FZGl0ID0gZnVuY3Rpb24gKHRpbWVsb2dJZCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBtb2RhbEVkaXQgPSAkdWliTW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L3RlbXBsYXRlcy9UaW1lbG9nQ2xvY2tvdXQuaHRtbCcsICAvLyB1c2luZyBzYW1lIGh0bWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdUaW1lc2hlZXRFZGl0Q29udHJvbGxlcicsXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsb2dJZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIG1vZGFsRWRpdC5yZXN1bHQudGhlbihtb2RhbEVkaXRfc2F2ZSwgbW9kYWxFZGl0X2NhbmNlbCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBtb2RhbEVkaXRfc2F2ZShyZXN1bHQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogXCIyMDIxMDYxOS0wNjM5XCIsIG1lc3NhZ2U6IFwic2F2ZSBUaW1lc2hlZXRFZGl0Q29udHJvbGxlclwiIH0sIFwieWVsbG93XCIsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnJlc2V0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGFsRWRpdF9jYW5jZWwocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9ub3JtYWwoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE5LTA2NDBcIiwgbWVzc2FnZTogXCJzYXZlIFRpbWVzaGVldEVkaXRDb250cm9sbGVyXCIgfSwgXCJyZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VNb25pdG9yU2VydmljZS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG4vLyAwOS8yMS8yMDE5IDAzOjU4IGFtIC0gU1NOIC0gWzIwMTkwOTIxLTAzNTddIC0gWzAwMl0gLSBDcmVhdGluZyBtdWx0aXBsZSBlbnRyeSBmb3IgV2VicGFja1xyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMToxMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDhdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG5cclxuaW1wb3J0ICogYXMgZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcbmltcG9ydCAqIGFzIHRvc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5pbXBvcnQgeyBJVGltZWxvZ0pTIH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvSVRpbWVsb2dcIjtcclxuXHJcblxyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0Q29udHJvbGxlcicsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udHJvbGxlcicsIFsnJHVpYk1vZGFsJywgJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICdzc25fbG9nZ2VyJywgJ3RpbWVsb2dJZF92MDEnLFxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCR1aWJNb2RhbCwgJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgY2hhbmdlTW9uaXRvclNlcnZpY2UsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUsIHRpbWVsb2dJZF92MDEpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1pbiAtIDEyMDFcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlclRleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZVNldCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKCRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19nb29kXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fYmFkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkX3YwMSkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKS5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRvdGFsU2Vjb25kcyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGltZXNoZWV0Q29udHJvbGxlciAtIGdvdEpvYkVycm9yIC0gIDIwMjEwNjA2LTA1NDAtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOC0yMzA2LWEtMScsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZ2V0IFRpbWVsb2dzIHJlY29yZC4nLCBlcnJvck9iamVjdDogZXJyIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENvbnRyb2xsZXIgLSBnZXRKb2JDYXRjaCAtICAyMDIxMDYwNi0wNTQwLUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDgtMjMwNi1hLTInLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBUaW1lbG9ncyByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG51bGw7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLmlkID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLmluc2VydFRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UudXBkYXRlVGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1pblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGltZXNoZWV0Q29udHJvbGxlciAtIDIwMTkwOTIxLTA2NDAgLSBwcm9taXNlID4gZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLiAgU2VlIGNvbnNvbGUgbG9nLlwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMjgvMjAxOSAwMjo0NyBhbSAtIFNTTiAtIFsyMDE5MTEyOC0wMjQ3XSAtIFswMDFdIC0gQ2xvY2staW4gbm90IHNhdmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGZlZWRiYWNrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkdWliTW9kYWxJbnN0YW5jZS5kaXNtaXNzKCk7IC8vc2FtZSBhcyBjYW5jZWw/Pz9cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAvLyRzY29wZS5hZGROZXdMaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JJRCwgY29udGFpbmVyVmlld1ZhbHVlKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICBzc25fbG9nZ2VyLmNsX25vcm1hbCh7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xODA3LUEnLCBtZXNzYWdlOmBDYWxsaW5nIGFkZE5ld0xpbmVJdGVtYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDctQicsIG1lc3NhZ2U6YGpvYklEOiBbJHtqb2JJRH1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vICAgIHNzbl9sb2dnZXIuY2xfbm9ybWFsKHsgY2FsbFNvdXJjZTogJzIwMjEwNjA5LTE4MDctYycsIG1lc3NhZ2U6IGBjb250YWluZXJWaWV3VmFsdWU6IFske2NvbnRhaW5lclZpZXdWYWx1ZX1dYCB9LCAneWVsbG93JywgdHJ1ZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gICAgJHVpYk1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgdGVtcGxhdGVVcmw6ICcvanMvdGltZXNoZWV0L0xpbmVJdGVtL0xpbmVJdGVtVGVtcGxhdGUuaHRtbCcsXHJcbiAgICAgICAgICAgIC8vICAgICAgICBjb250cm9sbGVyOiAnTGluZUl0ZW1Db250cm9sbGVyJyxcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgLy8gMDYvMDgvMjAyMSAwMzo1NyBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMzhdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50IC0gTGluZSBpdGVtXHJcbiAgICAgICAgICAgIC8vICAgICAgICAvLyBiYWNrZHJvcDogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vICAgICAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgam9iSWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgcmV0dXJuIGpvYklEO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgY29udGFpbmVyVmlld1ZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXJWaWV3VmFsdWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvdG9hc3RyL2luZGV4LmQudHNcIiAvPlxyXG5cclxuLy8gMDYvMDkvMjAyMSAwNDo0MyBwbSAtIFNTTiAtIFsyMDIxMDYwOC0yMjQ3XSAtIFswMDldIC0gVGVzdCBsaW5lIGl0ZW0gLSAgUHJlcCBmb3IgZGVwbG95bWVudFxyXG5cclxuXHJcbmltcG9ydCAqIGFzIGdsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgKiBhcyB0b3N0ciBmcm9tIFwidG9hc3RyXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tIFwiLi4vVXRpbC9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZVwiO1xyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSVRpbWVsb2dKUyB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0lUaW1lbG9nXCI7XHJcblxyXG5cclxuXHJcblxyXG52YXIgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXInLCBbJyR1aWJNb2RhbCcsICckc2NvcGUnLCAnJHVpYk1vZGFsSW5zdGFuY2UnLCAnJGh0dHAnLCAnJHEnLCAnZGF0YVNlcnZpY2UnLCAnY2hhbmdlTW9uaXRvclNlcnZpY2UnLCAnc3NuX2xvZ2dlcicsICdqb2JJZCcsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHVpYk1vZGFsLCAkc2NvcGUsICR1aWJNb2RhbEluc3RhbmNlLCAkaHR0cCwgJHEsIGRhdGFTZXJ2aWNlLCBjaGFuZ2VNb25pdG9yU2VydmljZSwgc3NuX2xvZ2dlcjogSUxvZ2dlck1vZHVsZSwgam9iSWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnBhZ2VUaXRsZSA9IFwiQ3JlYXRlIC0gMTY0M1wiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0Sm9iKGpvYklkKS50aGVuKGdldEpvYlN1Y2Nlc3MsIGdldEpvYkVycm9yKS5jYXRjaChnZXRKb2JDYXRjaCk7XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVMb2c6IElUaW1lbG9nSlMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgam9iSWQ6IGRhdGEuam9iSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgam9iOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvYlRpdGxlOiBkYXRhLmpvYlRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGU6IGRhdGEucHJvamVjdC5wcm9qZWN0VGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gdGltZUxvZztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGltZU5vdy5zZXRNaWxsaXNlY29uZHMoMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdGFydFRpbWUgPSB0aW1lTm93O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0Sm9iRXJyb3IoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlciAtIGdvdEpvYkVycm9yIC0gIDIwMjEwNjA5LTE2NTAtQiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcblxyXG4gICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6ICcyMDIxMDYwOS0xNjUwLWEtMScsIG1lc3NhZ2U6ICdGYWlsZWQgdG8gZ2V0IGpvYiByZWNvcmQuJywgZXJyb3JPYmplY3Q6IGVyciB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEpvYkNhdGNoKGVycikge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpbWVzaGVldENyZWF0ZUNvbnRyb2xsZXIgLSBnZXRKb2JDYXRjaCAtICAyMDIxMDYwOS0xNjUxLUMgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnMjAyMTA2MDktMTY1MS1hLTInLCBtZXNzYWdlOiAnRmFpbGVkIHRvIGdldCBqb2IgcmVjb3JkLicsIGVycm9yT2JqZWN0OiBlcnIgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5pZCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb21pc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJDbG9ja2VkLWluXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaW1lc2hlZXRDb250cm9sbGVyIC0gMjAxOTA5MjEtMDY0MCAtIHByb21pc2UgPiBlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuICBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuZGlzbWlzcygpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiBcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE2LzIwMTkgMDQ6NDcgcG0gLSBTU04gLSBbMjAxOTExMTYtMTUxNl0gLSBbMDAzXSAtIFRpbWVsb2cgZWRpdCAoQW5ndWxhckpTIGNsaWVudCB2ZXJzaW9uKVxyXG4vLyBDb3BpZWQgZnJvbSBUaW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuaW1wb3J0IHsgSUxvZ2dlck1vZHVsZSB9IGZyb20gXCIuLi9VdGlsL0xvZ2dlci9JTG9nZ2VyRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5cclxudmFyIHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgdmFyIHRpbWVzaGVldEFwcCA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignVGltZXNoZWV0RWRpdENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTkvMjAxOSAxMjo0OCBhbSAtIFNTTiAtIFsyMDE5MTExOS0wMDQ4XSBBZGRpbmcgJGNvbXBpbGUgZm9yIGR5bmFtaWNhbGx5IGxvYWRlZCB2aWV3XHJcblxyXG4gICAgdGltZXNoZWV0QXBwLmNvbnRyb2xsZXIoJ1RpbWVzaGVldEVkaXRDb250cm9sbGVyJywgWyckdWliTW9kYWwnLCAnJHNjb3BlJywgJyR1aWJNb2RhbEluc3RhbmNlJywgJyRodHRwJywgJyRxJywgJ2RhdGFTZXJ2aWNlJywgJ2NoYW5nZU1vbml0b3JTZXJ2aWNlJywgJ1RpbWVzaGVldFRhYmxlUmVmcmVzaENvbnRyb2xsZXInLCAndGltZWxvZ0lkJywgJyR0aW1lb3V0JywgJyRyb290U2NvcGUnLCAnc3NuX2xvZ2dlcicsICdzZXJ2aW5nUGFnZScsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uICgkdWliTW9kYWwsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCBUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyLCB0aW1lbG9nSWQsICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBzc25fbG9nZ2VyOiBJTG9nZ2VyTW9kdWxlLCBzZXJ2aW5nUGFnZTogc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKS50aGVuKGdldFRpbWVsb2dTdWNjZXNzLCBnZXRUaW1lbG9nRXJyb3IpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZ2V0VGltZWxvZ0NhdGNoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJFZGl0IFtcIiArIHNlcnZpbmdQYWdlICsgJ10gMTExLTAxJztcclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lU2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2dvb2RcIjtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcInJvdW5kZWQgbWFyZ2luZWQgaW5mb19iYWRcIjtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc2V0U3RvcFRpbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0TWlsbGlzZWNvbmRzKDApO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVOb3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRpbWVOb3cuc2V0U2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS50aW1lTG9nID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gZGF0YTtcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0Vycm9yKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCd0aW1lc2hlZXRFZGl0Q29udHJvbGxlciAtIDIwMTkxMTE2LTE2NDgnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuICgxNjQ4KVwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nQ2F0Y2goZGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldEVkaXRDb250cm9sbGVyIC0gMjAxOTExMTYtMTY0OScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDE2NDkpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5zdWJtaXRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gXCJcIjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMjEwNjA3LTE4NTInKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0b3BUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50b3RhbFNlY29uZHMgPSAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSAtICRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RhcnRUaW1lKSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnRpbWVMb2dJZCA9PT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkYXRhU2VydmljZS5pbnNlcnRUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpLnRoZW4oaW5zZXJ0VGltZUxvZ1N1Y2Nlc3MsIGluc2VydFRpbWVMb2dFcnJvcikuY2F0Y2goaW5zZXJ0VGltZUxvZ0NhdGNoKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnVwZGF0ZVRpbWVMb2coJHNjb3BlLmVkaXRhYmxlVGltZUxvZykudGhlbihpbnNlcnRUaW1lTG9nU3VjY2VzcywgaW5zZXJ0VGltZUxvZ0Vycm9yKS5jYXRjaChpbnNlcnRUaW1lTG9nQ2F0Y2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbnNlcnRUaW1lTG9nU3VjY2VzcyhkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDYvMTgvMjAyMSAwMjowMyBhbSAtIFNTTiAtIFJlcGxhY2UgcmVkdW5hbnQgY29kZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyLnJlZnJlc2hUaW1lc2hlZXRUYWJsZShzZXJ2aW5nUGFnZSwgJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaW5zZXJ0VGltZUxvZ0Vycm9yKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLlwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiBcIjIwMjEwNjE4LTA5MDlcIiwgbWVzc2FnZTogYEZhaWxlZCB0byBzYXZlIHRpbWVzaGVldCByZWNvcmQgYCwgZXJyb3JPYmplY3Q6IGVycm9yIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbnNlcnRUaW1lTG9nQ2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJGYWlsZWQgdG8gc2F2ZSByZWNvcmQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gZXJyb3IuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3NuX2xvZ2dlci5jbF9lcnJvcih7IGNhbGxTb3VyY2U6IFwiMjAyMTA2MTgtMDkxMFwiLCBtZXNzYWdlOiBgRmFpbGVkIHRvIHNhdmUgdGltZXNoZWV0IHJlY29yZCBgLCBlcnJvck9iamVjdDogZXJyb3IgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGltZXNoZWV0QXBwOiB0aW1lc2hlZXRBcHBcclxuICAgIH07XHJcblxyXG59KCk7XHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0RWRpdENvbnRyb2xsZXJfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuaW1wb3J0IHsgdGltZXNoZWV0QXBwX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRBcHAnO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi9UaW1lc2hlZXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi90aW1lc2hlZXRjb250aW51ZWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL3RpbWVzaGVldGNsb2Nrb3V0Y29udHJvbGxlcic7XHJcbmltcG9ydCB7IHRpbWVzaGVldEVkaXRDb250cm9sbGVyX2luc3RhbmNlIH0gZnJvbSAnLi4vVGltZXNoZWV0L1RpbWVzaGVldEVkaXRDb250cm9sbGVyJztcclxuaW1wb3J0IHsgdGltZXNoZWV0Q3JlYXRlQ29udHJvbGxlcl9pbnN0YW5jZSB9IGZyb20gJy4uL1RpbWVzaGVldC9UaW1lc2hlZXRDcmVhdGVDb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGltZWxvZ0xpbmtPcHRpb25zIH0gZnJvbSAnLi9UaW1lbG9nTGlua090aW9ucy9UaW1lbG9nTGlua09wdGlvbnMnO1xyXG5pbXBvcnQgeyBsaW5lSXRlbUNvbnRyb2xsZXJfaW5zdGFuY2UgfSBmcm9tICcuL0xpbmVJdGVtL0xpbmVJdGVtQ29udHJvbGxlcic7XHJcbmltcG9ydCB7IHNzbl9hdXRvX2ZvY3VzIH0gZnJvbSAnLi4vVXRpbC9hdXRvZm9jdXMvc3NuQXV0b0ZvY3VzJztcclxuaW1wb3J0IHsgTW9kYWxDYWxsc1V0aWwgfSBmcm9tICcuLi9TaGFyZWQvTW9kYWxDYWxsc1V0aWwnO1xyXG5pbXBvcnQgeyBUaW1lc2hlZXRfVGFibGVfUmVmcmVzaF9TZXJ2aWNlIH0gZnJvbSAnLi9UaW1lc2hlZXRfdGFibGVfcmVmcmVzaCc7XHJcblxyXG5cclxuXHJcbnZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lKSB7XHJcblxyXG4gICAgVGltZWxvZ0xpbmtPcHRpb25zLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4gICAgdGltZXNoZWV0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRDb250aW51ZUNvbnRyb2xsZXJfaW5zdGFuY2UudGltZXNoZWV0QXBwO1xyXG4gICAgdGltZXNoZWV0Q2xvY2tvdXRDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuICAgIHRpbWVzaGVldEFwcF9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRFZGl0Q29udHJvbGxlcl9pbnN0YW5jZS50aW1lc2hlZXRBcHA7XHJcbiAgICB0aW1lc2hlZXRDcmVhdGVDb250cm9sbGVyX2luc3RhbmNlLnRpbWVzaGVldEFwcDtcclxuICAgIGxpbmVJdGVtQ29udHJvbGxlcl9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKVxyXG4gICAgc3NuX2F1dG9fZm9jdXMuZG9TZXR1cChcIlRpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHlcIiwgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4gICAgTW9kYWxDYWxsc1V0aWwuZG9TZXR1cChcIlRpbWVzaGVldF9tYWluX3RpbWVzaGVldE9ubHlcIiwgbmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4gICAgVGltZXNoZWV0X1RhYmxlX1JlZnJlc2hfU2VydmljZTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvU2V0dXAgfTtcclxuIiwi77u/XHJcblxyXG4vLyAwNi8xOC8yMDIxIDEyOjAyIGFtIC0gU1NOIC0gVXBkYXRpbmcgdGltZXNoZWV0IHRhYmxlIG9uIGluc2VydC91cGRhdGVcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5pbXBvcnQgKiBhcyBzc25fZ2xvYmFscyBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuIFxyXG5cclxuY29uc3QgVGltZXNoZWV0X1RhYmxlX1JlZnJlc2hfU2VydmljZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBhbmd1bGFyQXBwID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRfdGFibGVfcmVmcmVzaCcsIFwidGltZXNoZWV0QXBwXCIpO1xyXG5cclxuXHJcbiAgICBhbmd1bGFyQXBwLmNvbmZpZyhbJyRwcm92aWRlJywgZnVuY3Rpb24gKCRwcm92aWRlKSB7XHJcblxyXG5cclxuICAgICAgICAkcHJvdmlkZS5mYWN0b3J5KCdUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyJywgWyckcm9vdFNjb3BlJywgJ2RhdGFTZXJ2aWNlJywgJ3Nzbl9sb2dnZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgZGF0YVNlcnZpY2UsIHNzbl9sb2dnZXIpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaFRpbWVzaGVldFRhYmxlOiBmdW5jdGlvbiAoc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UsIHRpbWVsb2dJZDogbnVtYmVyLCBuZXdSZWNvcmQ6IGJvb2xlYW4pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBoYXZlTWF0Y2hfb25fc2VydmluZ1BhZ2UgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlKHNlcnZpbmdQYWdlLCBzc25fZ2xvYmFscy5UaW1lbG9nX1NlcnZpbmdQYWdlLlRpbWVsb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5Kb2JfVGltZWxvZylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQodGltZWxvZ0lkLCBzZXJ2aW5nUGFnZSkudGhlbihyZWZyZXNoUmVjb3JkX1N1Y2VzcywgcmVmcmVzaFJlY29yZF9FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2VfY2hlY2t2YWx1ZShzZXJ2aW5nUGFnZSwgc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5Qcm9qZWN0c19TZWFyY2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTZXJ2aWNlLnByb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCh0aW1lbG9nSWQsIHNlcnZpbmdQYWdlKS50aGVuKHJlZnJlc2hSZWNvcmRfU3VjZXNzLCByZWZyZXNoUmVjb3JkX0Vycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGF2ZU1hdGNoX29uX3NlcnZpbmdQYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhdmVNYXRjaF9vbl9zZXJ2aW5nUGFnZSkge1xyXG4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzbl9sb2dnZXIuY2xfZXJyb3IoeyBjYWxsU291cmNlOiAnRGVtb1NpdGUtMjAyMTA2MTgtMDQ1MCcsIG1lc3NhZ2U6IGBObyBtYXRjaCBmb3Igc2VydmluZ1BhZ2UgWyR7c2VydmluZ1BhZ2V9XWAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZWNvcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnVGltZUxvZ19JbmRleF9JbnNlcnQnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVmcmVzaFJlY29yZF9FcnJvcihyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCclYyBUaW1lc2hlZXRfVGFibGVfUmVmcmVzaCAtIDIwMjEwNjE4LTAwNTAgLSBGYWlsZWQgdG8gcmVmcmVzaCB0aW1lc2hlZXQgcmVjb3JkJywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTJwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzc25fbG9nZ2VyLmNsX2Vycm9yKHsgY2FsbFNvdXJjZTogJ0RlbW9TaXRlLTIwMjEwNjE4LTA0NDknLCBtZXNzYWdlOiAnRmFpbGVkIHRvIHJlZnJlc2ggdGltZXNoZWV0IHJlY29yZCd9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XSk7XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBUaW1lc2hlZXRfVGFibGVfUmVmcmVzaF9TZXJ2aWNlIH07XHJcblxyXG5cclxuIiwiXHJcbi8vIDA5LzIxLzIwMTkgMDM6NTcgYW0gLSBTU04gLSBbMjAxOTA5MjEtMDM1N10gLSBbMDAxXSAtIENyZWF0aW5nIG11bHRpcGxlIGVudHJ5IGZvciBXZWJwYWNrXHJcblxyXG5cclxuLy8gMTEvMDkvMjAxOSAxMjowNSBwbSAtIFNTTiAtIEFkZGVkIENoYW5nZU1vbml0b3JcclxuLy8gMTEvMTQvMjAxOSAwMzoyMCBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDRdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbi8vaW1wb3J0IHsgQ2hhbmdlTW9uaXRvcl9VdGlsIH0gZnJvbSAnLi4vVXRpbC9DaGFuZ2VNb25pdG9yJztcclxuaW1wb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvclNlcnZpY2UnO1xyXG5cclxuLy8gMTEvMjAvMjAxOSAwNDo0MCBhbSAtIFNTTiAtIFsyMDE5MTEyMC0wNDI5XSAtIFswMDJdIC0gVGltZWxvZyBpbmRleCBjbG9jay1vdXQgcmVmcmVzaCB1cGRhdGVkIHJvd1xyXG5pbXBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9IGZyb20gJy4uL1V0aWwvUGFnZVVwZGF0ZXInO1xyXG5cclxuXHJcbmltcG9ydCB7IGRhdGFTZXJ2aWNlX2luc3RhbmNlIH0gZnJvbSAnLi4vc2hhcmVkL0RhdGFTZXJ2aWNlcyc7XHJcbmltcG9ydCB7IGRyb3Bkb3duTGlzdERpcmVjdGl2ZV9pbnN0YW5jZSB9IGZyb20gJy4uL0Ryb3Bkb3duTGlzdC9Ecm9wZG93bkxpc3REaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH0gZnJvbSAnLi4vVXRpbC9BcHBsaWNhdGlvbkluc2lnaHRzX01vbml0b3InO1xyXG5pbXBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfSBmcm9tICcuLi9VdGlsL1Jlc3RvcmVQcmV2aW91c1BhZ2VTdGF0ZSc7XHJcblxyXG4vLyAxMi8wNy8yMDE5IDA0OjA5IGFtIC0gU1NOIC0gWzIwMTkxMjA3LTAzNTNdIC0gWzAwMl0gLSBTZXNzaW9uVGltZW91dEludGVyY2VwdG9yXHJcblxyXG5pbXBvcnQgc2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvciBmcm9tICcuLi9JbnRlcmNlcHRvcnMvU2Vzc2lvblRpbWVvdXRJbnRlcmNlcHRvcic7XHJcblxyXG5cclxuLy8gMTIvMDcvMjAxOSAwODowNyBhbSAtIFNTTiAtIFsyMDE5MTIwNy0wNzA0XSAtIFswMDRdIC0gQW5ndWxhckpTIC0gUm91dGluZyAtIEF1dGhlbnRpY2F0aW9uXHJcblxyXG5pbXBvcnQgeyByb3V0aW5nX2NvbmZpZ19pbnN0YW5jZSB9IGZyb20gJy4uL1JvdXRpbmcvUm91dGluZ19Db25maWcnO1xyXG5cclxucm91dGluZ19jb25maWdfaW5zdGFuY2UuZG9TZXR1cCgpO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgbmdBcHBsaWNhdGlvbk5hbWUgPSAndGltZXNoZWV0QXBwJztcclxuXHJcbnNlc3Npb25UaW1lb3V0SW50ZXJjZXB0b3IuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuXHJcblxyXG4vL0NoYW5nZU1vbml0b3JfVXRpbFxyXG5jaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5QYWdlVXBkYXRlcl9JbnN0YW5jZS5kb1NldHVwKG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4vLyAxMS8xNi8yMDE5IDA2OjI3IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE1MTZdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgKEFuZ3VsYXJKUyBjbGllbnQgdmVyc2lvbilcclxuXHJcbi8vIDExLzI1LzIwMTkgMTE6MzQgcG0gLSBTU04gLSBbMjAxOTExMjUtMjE1M10gLSBbMDA1XSAtIEpvYiBjcmVhdGUgLSBSZXBsYWNlIGRyb3Bkb3duIHdpdGggZHJvcGRvd25MaXN0RGlyZWN0aXZlXHJcblxyXG5cclxuZHJvcGRvd25MaXN0RGlyZWN0aXZlX2luc3RhbmNlLmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gMDYvMDcvMjAyMSAwNTowMCBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTldIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50IC0gTGluZSBpdGVtXHJcblxyXG5pbXBvcnQgeyBzc25fQW5ndWxhckpzbG9nZ2VyIH0gZnJvbSAnLi4vVXRpbC9Mb2dnZXIvc3NuX0FuZ3VsYXJKc2xvZ2dlcic7XHJcblxyXG5zc25fQW5ndWxhckpzbG9nZ2VyLmRvU2V0dXAoXCJ0aW1lc2hlZXRfbWFpblwiLG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZGF0YVNlcnZpY2VfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG5cclxuLy8gMTEvMjMvMjAxOSAwODo1NiBhbSAtIFNTTlxyXG5SZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UuZG9TZXR1cChuZ0FwcGxpY2F0aW9uTmFtZSwgXCJ0aW1lc2hlZXRfbWFpbl8yMDIxMDYwNl8xNzMxXCIpO1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMTE6MDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA3XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG4gXHJcbkFwcEluc2lnaHRzX1V0aWwuZG9TZXR1cChcInRpbWVzaGVldF9tYWluXCIpO1xyXG5cclxuXHJcbkFwcEluc2lnaHRzX1V0aWwubG9nRXZlbnQoXCJUaW1lc2hlZXRfbWFpblwiLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTEwMDEtMTExMi1DXCIsIE1lc3NhZ2U6IFwiTG9hZGluZyB0aW1lc2hlZXRfbWFpblwiIH0pO1xyXG5BcHBJbnNpZ2h0c19VdGlsLmxvZ0V2ZW50KGRvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lLCB7IFNvdXJjZUNvZGU6IFwiMjAxOTExMDUtMDUwM1wiLCBNZXNzYWdlOiBcIkxvYWRpbmcgdGltZXNoZWV0X21haW5cIiB9KTtcclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDA1OjM0IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAxMV0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcbi8vIFJlZmFjdG9yIC0gVGltZWxvZyBvbmx5XHJcblxyXG5pbXBvcnQgKiBhcyB4IGZyb20gJy4vVGltZXNoZWV0X21haW5fdGltZXNoZWV0T25seSc7XHJcblxyXG54LmRvU2V0dXAobmdBcHBsaWNhdGlvbk5hbWUpO1xyXG4iLCLvu79cclxuLy8gMDQvMTIvMjAxOSAwMzo1NyBhbSAtIFNTTiAtIFsyMDE5MDQxMi0wMTQyXSAtIFRpbWVzaGVldEFwcFxyXG4vLyAwNS8xOS8yMDE5IDEyOjE4IHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwM10gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbi8vIDA5LzIxLzIwMTkgMTE6NTIgYW0gIC0gU1NOIC0gVXBncmFkaW5nIHRvIHVzZSBCYWJlbC9XV2VicGFja1xyXG5cclxuaW1wb3J0ICogYXMgc3NuX2dsb2JhbHMgZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tICdhbmd1bGFyJ1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL3NpdGUnO1xyXG5cclxuXHJcbnZhciB0aW1lc2hlZXRDbG9ja291dENvbnRyb2xsZXJfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIC8vIDA1LzE5LzIwMTkgMTA6MDYgYW0gLSBTU04gLSBbMjAxOTA1MTktMDgzN10gLSBbMDA2XSAtIEFkZGluZyB0aW1lc2hlZXQgXCJDb250aW51ZVwiIG9wdGlvblxyXG5cclxuXHJcbiAgICB2YXIgdGltZXNoZWV0QXBwID0gc3NuX2dsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBcInRpbWVzaGVldEFwcFwiKTtcclxuXHJcbiAgICAvLyAxMS8xNi8yMDE5IDAyOjUyIHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwM10gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgIC8vIEluamVjdCBjaGFuZ2VNb25pdG9yU2VydmljZVxyXG5cclxuICAgIC8vIDExLzIwLzIwMTkgMDQ6NDMgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAzXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuICAgIC8vIEluamVjdCBQYWdlVXBkYXRlclNlcnZpY2VcclxuXHJcbiAgICAvLyAxMS8yNS8yMDE5IDA2OjM5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE4MDNdIC0gWzAwM10gLSBjbG9jay1vdXQgaXMgbm90IHVwZGF0aW5nIGluZGV4IHJvd1xyXG4gICAgLy8gQWRkZWQgc2VydmluZ1BhZ2VcclxuICAgIHRpbWVzaGVldEFwcC5jb250cm9sbGVyKCdUaW1lc2hlZXRDbG9ja091dENvbnRyb2xsZXInLCBbJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICdjaGFuZ2VNb25pdG9yU2VydmljZScsICd0aW1lbG9nSWQnLCAnUGFnZVVwZGF0ZXJTZXJ2aWNlJywgJ3NlcnZpbmdQYWdlJyxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gKCRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsICRodHRwLCAkcSwgZGF0YVNlcnZpY2UsIGNoYW5nZU1vbml0b3JTZXJ2aWNlLCB0aW1lbG9nSWQsIFBhZ2VVcGRhdGVyU2VydmljZSwgc2VydmluZ1BhZ2U6IHNzbl9nbG9iYWxzLlRpbWVsb2dfU2VydmluZ1BhZ2UpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNi8yMDE5IDAzOjA4IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwNF0gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgICAgICAgICAgY2hhbmdlTW9uaXRvclNlcnZpY2Uuc2V0dXBNb25pdG9yKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI5LzIwMTkgMDU6NTEgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDAyXSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwXHJcbiAgICAgICAgICAgIC8vICRzY29wZS50aW1lTG9nID0gZGF0YVNlcnZpY2UuZ2V0VGltZWxvZygkcm91dGVQYXJhbXMuaWQpO1xyXG4gICAgICAgICAgICAvLyAkc2NvcGUudGltZUxvZyA9IGRhdGFTZXJ2aWNlLmdldFRpbWVsb2codGltZWxvZ0lkKTtcclxuICAgICAgICAgICAgZGF0YVNlcnZpY2UuZ2V0VGltZWxvZyh0aW1lbG9nSWQpLnRoZW4oZ2V0VGltZWxvZ1N1Y2Nlc3MsIGdldFRpbWVsb2dFcnJvcilcclxuICAgICAgICAgICAgICAgIC5jYXRjaChnZXRUaW1lbG9nQ2F0Y2gpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNS8wMy8yMDE5IDA1OjU0IHBtIC0gU1NOIC0gWzIwMTkwNTAzLTE1MzldIC0gWzAxMl0gLSBBZGQgbGluayB0byBjcmVhdGUgdGltZWxvZyBcclxuICAgICAgICAgICAgLy8gQWRkIHBhZ2VUaXRsZVxyXG4gICAgICAgICAgICAkc2NvcGUucGFnZVRpdGxlID0gXCJDbG9jay1vdXRcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzI5LzIwMTkgMTE6MjUgcG0gLSBTU04gLSBBZGRpbmcgZGlzYWJsZVNhdmVCdXR0b24gXHJcbiAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xNi8yMDE5IDAyOjQ4IHBtIC0gU1NOIC0gWzIwMTkxMTE2LTE0MTldIC0gWzAwMl0gLSBBZGQgUm93VmVyc2lvbiAgdG8gVGltZWxvZy5cclxuICAgICAgICAgICAgLy8gQ29waWVkIGZyb20gVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyQ2xhc3NOYW1lQ2FzZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuIFxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aW1lTm93ID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGRhdGEuc3RvcFRpbWUgPSB0aW1lTm93O1xyXG4gXHJcbiAgICAgICAgICAgICAgICB1dGlsLnNpdGVfaW5zdGFuY2UuZm5Db252ZXJEYXRlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnRpbWVMb2cgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmVkaXRhYmxlVGltZUxvZyA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dFcnJvcihkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcigndGltZXNoZWV0Q2xvY2tPdXRDb250cm9sbGVyIC0gMjAxOTA5MjItMTQyNicpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoXCJFcnJvciBwb3N0ZWQgdG8gY29uc29sZS4gKDAzMDcpXCIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3RpbWVzaGVldENsb2NrT3V0Q29udHJvbGxlciAtIDIwMTkwOTIyLTE0MjcnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhcIkVycm9yIHBvc3RlZCB0byBjb25zb2xlLiAoMDMwNilcIik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnN1Ym1pdEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5kaXNhYmxlU2F2ZUJ1dHRvbiA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdGVzdCA9ICRzY29wZS5lZGl0YWJsZVRpbWVMb2c7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBudWxsO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy5zdG9wVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5lZGl0YWJsZVRpbWVMb2cudG90YWxTZWNvbmRzID0gKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cuc3RvcFRpbWUgLSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nLnN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5pbmZvKFwiQ2xvY2tlZC1vdXRcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzI1LzIwMTkgMDY6MzggcG0gLSBTU04gLSBbMjAxOTExMjUtMTgwM10gLSBbMDAyXSAtIGNsb2NrLW91dCBpcyBub3QgdXBkYXRpbmcgaW5kZXggcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRlZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFnZVVwZGF0ZXJTZXJ2aWNlLnRpbWVsb2dfaW5kZXgoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQsIHNlcnZpbmdQYWdlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3QyID0gZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKFwiRmFpbGVkIHRvIHNhdmUgcmVjb3JkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKFwiRXJyb3IgcG9zdGVkIHRvIGNvbnNvbGUuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmNhbmNlbEZvcm0gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZU1vbml0b3JTZXJ2aWNlLmdldEhhdmVDaGFuZ2VzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpcm0oJ1lvdSBoYXZlIHVuc2F2ZWQgY2hhbmdlcz8gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbD8nKSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoKTsgLy9zYW1lIGFzIGNhbmNlbD8/P1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpbWVzaGVldEFwcDogdGltZXNoZWV0QXBwXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcbmV4cG9ydCB7IHRpbWVzaGVldENsb2Nrb3V0Q29udHJvbGxlcl9pbnN0YW5jZSB9O1xyXG4iLCLvu79cclxuXHJcblxyXG4vLyAwNS8xOS8yMDE5IDA5OjQ1IGFtIC0gU1NOIC0gWzIwMTkwNTE5LTA4MzddIC0gWzAwNV0gLSBBZGRpbmcgdGltZXNoZWV0IFwiQ29udGludWVcIiBvcHRpb25cclxuLy8gQ29waWVkIGZyb20gQ2xvY2tvdXQuXHJcblxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi9nbG9iYWxzXCI7XHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuLi9zaXRlJztcclxuXHJcblxyXG5jb25zdCBuZ0FwcGxpY2F0aW9uTmFtZSA9IFwidGltZXNoZWV0QXBwXCI7XHJcblxyXG52YXIgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciB0aW1lc2hlZXRBcHAgPSBzc25fZ2xvYmFscy5nbG9iYWxzX2luc3RhbmNlLmdldEluc3RhbmNlX3YwMDIoJ1RpbWVzaGVldENvbnRpbnVlQ29udHJvbGxlcicsIG5nQXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG4gICAgLy8gMTEvMTQvMjAxOSAwMzowNyBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDJdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbiAgICB0aW1lc2hlZXRBcHAuY29udHJvbGxlcignVGltZXNoZWV0Q29udGludWVDb250cm9sbGVyJywgWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckdWliTW9kYWxJbnN0YW5jZScsICckaHR0cCcsICckcScsICdkYXRhU2VydmljZScsICckdGltZW91dCcsICdUaW1lc2hlZXRUYWJsZVJlZnJlc2hDb250cm9sbGVyJywgJ3RpbWVsb2dJZCcsICdjaGFuZ2VNb25pdG9yU2VydmljZScsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHNjb3BlLCAkdWliTW9kYWxJbnN0YW5jZSwgJGh0dHAsICRxLCBkYXRhU2VydmljZSwgJHRpbWVvdXQsIFRpbWVzaGVldFRhYmxlUmVmcmVzaENvbnRyb2xsZXIsIHRpbWVsb2dJZCwgY2hhbmdlTW9uaXRvclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbml0b3JTZXJ2aWNlLnNldHVwTW9uaXRvcigpO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLnRpbWVsb2dJZF9PcmlnaW5hbFJlY29yZCA9IHRpbWVsb2dJZDtcclxuXHJcblxyXG4gICAgICAgICAgICBkYXRhU2VydmljZS5nZXRUaW1lbG9nKHRpbWVsb2dJZCkudGhlbihnZXRUaW1lbG9nU3VjY2VzcywgZ2V0VGltZWxvZ0Vycm9yKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGdldFRpbWVsb2dDYXRjaCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5wYWdlVGl0bGUgPSBcIkNvbnRpbnVlIC8gTGluZSBJdGVtIC0gODg4LVYyXCI7XHJcblxyXG4gICAgICAgICAgICAvLyAxMi8yOS8yMDE5IDExOjE3IHBtIC0gU1NOIC0gQWRkaW5nIGRpc2FibGVTYXZlQnV0dG9uIFxyXG4gICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yOC8yMDE5IDAzOjU5IHBtIC0gU1NOIC0gWzIwMTkwOTI4LTEyNTZdIC0gWzAxMF0gLSBBZGRpbmcgRW50aXR5IEZyYW1ld29yayBtb2RlbCBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSBcIlwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICRzY29wZS52ZXJzaW9uRm9ySFRNTFJlZnJlc2ggPSBcIjE3XCI7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVTZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICgkc2NvcGUuZmVlZGJhY2tUb1VzZXJDbGFzc05hbWVDYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJyb3VuZGVkIG1hcmdpbmVkIGluZm9fZ29vZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwicm91bmRlZCBtYXJnaW5lZCBpbmZvX2JhZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFRpbWVsb2dTdWNjZXNzKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdXRpbC5zaXRlX2luc3RhbmNlLmZuQ29udmVyRGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZU5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lTm93LnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnRpbWVMb2dJZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnN0YXJ0VGltZSA9IHRpbWVOb3c7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5kYXRlTW9kaWZpZWQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhdGEudG90YWxTZWNvbmRzID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZWRpdGFibGVUaW1lTG9nID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUaW1lbG9nRXJyb3IoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXAgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VGltZWxvZ0NhdGNoKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZW1wID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuc3VibWl0Rm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRpc2FibGVTYXZlQnV0dG9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyIC0gc3VibWl0Rm9ybSAtICgxMDEpJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHRlc3QgPSAkc2NvcGUuZWRpdGFibGVUaW1lTG9nO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3UmVjb3JkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVkaXRhYmxlVGltZUxvZy50aW1lTG9nSWQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gZGF0YVNlcnZpY2UuaW5zZXJ0VGltZUxvZygkc2NvcGUuZWRpdGFibGVUaW1lTG9nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBkYXRhU2VydmljZS51cGRhdGVUaW1lTG9nKCRzY29wZS5lZGl0YWJsZVRpbWVMb2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1JlY29yZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMS8yMDE5IDExOjU2IGFtIC0gU1NOIC0gVGVzdGVkIE9LLlxyXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2UudGhlbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmluZm8oXCJSZWNvcmQgYWRkZWQuICBSZWxvYWRpbmcgcGFnZS4uLlwiKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAwNi83LzIwMjEgMTE6NDggcG0gLSBTU04gLSBSZXBsYWNpbmcgbG9jYXRpb24ucmVsb2FkIHdpdGggVGltZUxvZ19JbmRleF9JbnNlcnRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGltZXNoZWV0Q29udGludWVDb250cm9sbGVyLnRzIC0gcmVwbGFjaW5nIGxvY2F0aW9uLnJlbG9hZCB3aXRoIFRpbWVMb2dfSW5kZXhfSW5zZXJ0JywgJ2NvbG9yOnJlZDtmb250LXNpemU6MTZwdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS50aW1lTG9nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDUvMjEvMjAxOSAxMjo1NCBwbSAtIFNTTiAtIFJlbG9hZCBwYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfSwgMTAwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpbmdQYWdlID0gc3NuX2dsb2JhbHMuVGltZWxvZ19TZXJ2aW5nUGFnZS5UaW1lbG9nO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgb3JpZ2luYWwgcmVjb3JkIHdlIGNvbXBpZWQgZnJvbSAodGltZUxvZ0lkIHBhc3NlZCBpbilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVzaGVldFRhYmxlUmVmcmVzaENvbnRyb2xsZXIucmVmcmVzaFRpbWVzaGVldFRhYmxlKHNlcnZpbmdQYWdlLCAkc2NvcGUudGltZWxvZ0lkX09yaWdpbmFsUmVjb3JkICwgZmFsc2UpO1xyXG5cclxuLy8gQWRkIG5ldyByZWNvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpbWVzaGVldFRhYmxlUmVmcmVzaENvbnRyb2xsZXIucmVmcmVzaFRpbWVzaGVldFRhYmxlKHNlcnZpbmdQYWdlLCBkYXRhLnRpbWVMb2dJZCwgbmV3UmVjb3JkKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGlzYWJsZVNhdmVCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjgvMjAxOSAwMzo1NyBwbSAtIFNTTiAtIFsyMDE5MDkyOC0xMjU2XSAtIFswMDldIC0gQWRkaW5nIEVudGl0eSBGcmFtZXdvcmsgbW9kZWwgYXR0cmlidXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAkdWliTW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkZhaWxlZCB0byBhZGQgcmVjb3JkLiBTZWUgY29uc29sZSBsb2cuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5mZWVkYmFja1RvVXNlckNsYXNzTmFtZUNhc2UgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmZlZWRiYWNrVG9Vc2VyVGV4dCA9IGVycm9yLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuY2FuY2VsRm9ybSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTQvMjAxOSAwNTowOSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMTBdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdlTW9uaXRvclNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VNb25pdG9yU2VydmljZS5nZXRIYXZlQ2hhbmdlcygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25maXJtKCdZb3UgaGF2ZSB1bnNhdmVkIGNoYW5nZXM/IEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjYW5jZWw/JykpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICR1aWJNb2RhbEluc3RhbmNlLmRpc21pc3MoZmFsc2UpOyAvL3NhbWUgYXMgY2FuY2VsPz8/XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aW1lc2hlZXRBcHA6IHRpbWVzaGVldEFwcFxyXG4gICAgfTtcclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgdGltZXNoZWV0Q29udGludWVDb250cm9sbGVyX2luc3RhbmNlIH07XHJcbiIsIu+7v1xyXG5cclxuXHJcbi8vIDEwLzAxLzIwMTkgMDk6NDkgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDA0XSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuXHJcbi8vIGh0dHBzOi8vZGV2YmxvZ3MubWljcm9zb2Z0LmNvbS9wcmVtaWVyLWRldmVsb3Blci9hZGQtYXBwbGljYXRpb24taW5zaWdodHMtdG8tYW4tYW5ndWxhci1zcGEvXHJcblxyXG5cclxuXHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBcHBJbnNpZ2h0cyB9IGZyb20gJ2FwcGxpY2F0aW9uaW5zaWdodHMtanMnO1xyXG5cclxuXHJcbnZhciBBcHBJbnNpZ2h0c19VdGlsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIHZhciBzZWxmID0geyBjYWxsU291cmNlOiAnTm90U2V0LTIwMjEwNjA2MjIyOCcgfTtcclxuXHJcbiAgICB2YXIgY29uZmlnID0ge1xyXG5cclxuICAgICAgICBpbnN0cnVtZW50YXRpb25LZXk6IGVudmlyb25tZW50LmFwcEluc2lnaHRzLmluc3RydW1lbnRhdGlvbktleVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhdmVJbnN0cnVtZW50YXRpb25LZXkgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWcuaW5zdHJ1bWVudGF0aW9uS2V5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uIChjYWxsU291cmNlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgc2VsZi5jYWxsU291cmNlID0gY2FsbFNvdXJjZTtcclxuXHJcbiAgICAgICAgaWYgKCFBcHBJbnNpZ2h0cy5jb25maWcpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcEluc2lnaHRzLmRvd25sb2FkQW5kU2V0dXAodGhpcy5jb25maWcpO1xyXG5cclxuICAgICAgICAgICAgLy8gMTAvMTEvMjAxOSAwNDo1NCBwbSAtIFNTTiAtIEFkZGVkIGNoZWNrXHJcbiAgICAgICAgICAgIGlmIChoYXZlSW5zdHJ1bWVudGF0aW9uS2V5KCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBBcHBJbnNpZ2h0cy5kb3dubG9hZEFuZFNldHVwKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGRvVGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBwYWdlIHZpZXcgKi9cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KFxyXG4gICAgICAgICAgICBcIkZpcnN0UGFnZS0yMDE5MTAwMS0xMDE1XCIsIC8qIChvcHRpb25hbCkgcGFnZSBuYW1lICovXHJcbiAgICAgICAgICAgIG51bGwsIC8qIChvcHRpb25hbCkgcGFnZSB1cmwgaWYgYXZhaWxhYmxlICovXHJcbiAgICAgICAgICAgIHsgcHJvcDE6IFwicHJvcDFcIiwgcHJvcDI6IFwicHJvcDJcIiB9LCAvKiAob3B0aW9uYWwpIGRpbWVuc2lvbiBkaWN0aW9uYXJ5ICovXHJcbiAgICAgICAgICAgIHsgbWVhc3VyZW1lbnQxOiAxIH0sIC8qIChvcHRpb25hbCkgbWV0cmljIGRpY3Rpb25hcnkgKi9cclxuICAgICAgICAgICAgMTIzIC8qIHBhZ2UgdmlldyBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgKi9cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvKiBleGFtcGxlOiB0cmFjayBldmVudCAqL1xyXG4gICAgICAgIEFwcEluc2lnaHRzLnRyYWNrRXZlbnQoXCJUZXN0RXZlbnQtMjAxOTEwMDEtMTAxNlwiLCB7IHByb3AxOiBcInByb3AxXCIsIHByb3AyOiBcInByb3AyXCIgfSwgeyBtZWFzdXJlbWVudDE6IDEgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgbG9nUGFnZVZpZXcgPSBmdW5jdGlvbiAobmFtZT86IHN0cmluZywgdXJsPzogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnksIGR1cmF0aW9uPzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIC8vIDEwLzEvMjAxOSAwMzo0NSBhbSAtIFNTTiBcclxuICAgICAgICBjb25zb2xlLmxvZygnQXBwbGljYXRpb25JbnNpZ2h0cyAgLSBsb2dQYWdlVmlldyAtIDIwMjEwNjA2LTIyMjMnLCAnY29sb3I6eWVsbG93Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcGVydGllcyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IHsgY2FsbFNvdXJjZV9haW06IHNlbGYuY2FsbFNvdXJjZSwgLi4ucHJvcGVydGllcyB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Byb3BzKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PScpO1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja1BhZ2VWaWV3KG5hbWUsIHVybCwgcHJvcGVydGllcyk7Ly8sIG1lYXN1cmVtZW50cywgZHVyYXRpb24pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9nRXZlbnQgPSBmdW5jdGlvbiAobmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzPzogYW55LCBtZWFzdXJlbWVudHM/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0cy50cmFja0V2ZW50KG5hbWUsIHByb3BlcnRpZXMsIG1lYXN1cmVtZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2dFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXhjZXB0aW9uOiBhbnkgfCBhbnksIHByb3BzPzogYW55LCBoYW5kbGVkQXQ/OiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy8gMTAvMS8yMDE5IDAzOjQ1IGFtIC0gU1NOIFxyXG4gICAgICAgIC8vIDA2LzE1LzIwMjEgMDg6MDggYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ3XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuICAgICAgICAvLyBBcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihleGNlcHRpb24sIGhhbmRsZWRBdCwgcHJvcHMpO1xyXG5cclxuICAgICAgICBpZiAoZXhjZXB0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICBwcm9wcyA9IHsgLi4ucHJvcHMsIC4uLmV4Y2VwdGlvbiB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oZXhjZXB0aW9uLCBoYW5kbGVkQXQsIHByb3BzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cCxcclxuICAgICAgICBkb1Rlc3Q6IGRvVGVzdCxcclxuICAgICAgICBsb2dQYWdlVmlldzogbG9nUGFnZVZpZXcsXHJcbiAgICAgICAgbG9nRXZlbnQ6IGxvZ0V2ZW50LFxyXG4gICAgICAgIGxvZ0V4Y2VwdGlvbjogbG9nRXhjZXB0aW9uXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBBcHBJbnNpZ2h0c19VdGlsIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMDkvMjAxOSAxMTowMyBhbSAtIFNTTiAtIENyZWF0ZWRcclxuXHJcbi8vIDExLzE4LzIwMTkgMDI6MjYgcG0gLSBTU04gLSBDcmVhdGUgY2xhc3MgZm9yIGhhdmVDaGFuZ2VzXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxudmFyIENoYW5nZU1vbml0b3JfVXRpbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgc2V0SXRlbUNoYW5nZWRfc3NuID0gZnVuY3Rpb24gKHRoaXM6IEhUTUxJbnB1dEVsZW1lbnQsIGV2OiBFdmVudCkge1xyXG5cclxuICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBzZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMDkvMjAxOSAwODowOCBhbSAtIFNTTiAtIEFkZGVkIG1vbml0b3JDaGFuZ2VfU1NOXHJcbiAgICB2YXIgbW9uaXRvckNoYW5nZV9TU04gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA4OjI4IGFtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBidXR0b25zLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh4LnR5cGUgJiYgKHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInN1Ym1pdFwiIHx8IHgudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInJlc2V0XCIpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgeC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtVG9SZXNldENoYW5nZWRGbGFnX3Nzbik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3QoeCkpIHtcclxuICAgICAgICAgICAgICAgIHguYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3RzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHgpKSB7XHJcbiAgICAgICAgICAgICAgICB4LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG5cclxuICAgICAgICAvLyAwOC8xNS8yMDIwIDA6MTggYW0gLSBTU04gLSBBZGRlZCBlbWFpbCBhbmQgcGFzc3dvcmQgKGxvZ2luKVxyXG5cclxuICAgICAgICBpZiAob2JqMS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fFxyXG4gICAgICAgICAgICAgICAgb2JqMS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdzdWJtaXQnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlYXJjaCcgfHxcclxuICAgICAgICAgICAgICAgIG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnZW1haWwnIHx8XHJcbiAgICAgICAgICAgICAgICBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3Bhc3N3b3JkJykge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMS8yNS8yMDE5IDAyOjI3IHBtIC0gU1NOIC0gQWRkZWRcclxuICAgICAgICBpZiAob2JqMS5ub0NoYW5nZU1vbml0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW9iajEuaWQgJiYgIW9iajEubmFtZSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLmlkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzZWFyY2gnKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEuaWQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaWx0ZXInKSA+IC0xKSByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKG9iajEubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpbHRlcicpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBzZXR1cE1vbml0b3JfdjAxID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXM6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJywgX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTQvMjAxOSAwMjo1OSBwbSAtIFNTTiAtIFsyMDE5MTExNC0xNDU5XSAtIFswMDFdIC0gQ2hhbmdlTW9uaXRyb1NlcnZpY2VcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9IGZyb20gJy4vQ2hhbmdlTW9uaXRvcic7XHJcblxyXG5pbXBvcnQgKiBhcyAgIGdsb2JhbHMgZnJvbSAnLi4vLi4vZ2xvYmFscyc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcbnZhciBjaGFuZ2VNb25pdG9yU2VydmljZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoY3VycmVudEFwcGxpY2F0aW9uOiBzdHJpbmcpIHtcclxuXHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX0NoYW5nZU1vbml0b3JTZXJ2aWNlX21vZHVsZSA9IGdsb2JhbHMuZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdDaGFuZ2VNb25pdG9yU2VydmljZScsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG5cclxuICAgICAgICBzc25fQ2hhbmdlTW9uaXRvclNlcnZpY2VfbW9kdWxlLmZhY3RvcnkoXCJjaGFuZ2VNb25pdG9yU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX3NldHVwTW9uaXRvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0SGF2ZUNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfcmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgX2RvU2V0SGF2ZUNoYW5nZSA9IGZ1bmN0aW9uIChzZXR0aW5nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBzZXR0aW5nO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNldHVwTW9uaXRvcjogX3NldHVwTW9uaXRvcixcclxuICAgICAgICAgICAgICAgIGdldEhhdmVDaGFuZ2VzOiBfZ2V0SGF2ZUNoYW5nZXMsXHJcbiAgICAgICAgICAgICAgICByZXNldDogX3Jlc2V0LFxyXG4gICAgICAgICAgICAgICAgZG9TZXRIYXZlQ2hhbmdlOiBfZG9TZXRIYXZlQ2hhbmdlXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgY2hhbmdlTW9uaXRvclNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuXHJcbi8vIDA2LzA2LzIwMjEgMDY6MzkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDExXSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG5cclxuaW1wb3J0ICogYXMgICBnbG9iYWxzIGZyb20gJy4uLy4uL2dsb2JhbHMnO1xyXG5cclxuaW1wb3J0ICogYXMgYW5ndWxhciBmcm9tIFwiYW5ndWxhclwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyRXJyb3JNZXNzYWdlLCBJTG9nZ2VyTW9kdWxlLCBJTG9nZ2VyTWVzc2FnZSB9IGZyb20gJy4vSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4uLy4uL1V0aWwvQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcblxyXG5jb25zdCBzc25fQW5ndWxhckpzbG9nZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnN0IGRvU2V0dXAgPSAoY2FsbFNvdXJjZTogc3RyaW5nLCBjdXJyZW50QXBwbGljYXRpb246IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICBBcHBJbnNpZ2h0c19VdGlsLmRvU2V0dXAoY2FsbFNvdXJjZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFuZ3VsYXJNb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignc3NuX2xvZ2dlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJNb2R1bGUuZmFjdG9yeShcInNzbl9sb2dnZXJcIiwgWyckcScsIGZ1bmN0aW9uICgkcSk6IElMb2dnZXJNb2R1bGUge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjbF9ub3JtYWwgPSBmdW5jdGlvbiAobXNnOiBJTG9nZ2VyTWVzc2FnZSwgY29sb3I6IHN0cmluZywgbG91ZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0gYGNvbG9yOiR7Y29sb3J9O2A7XHJcbiAgICAgICAgICAgICAgICBpZiAobG91ZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IGBmb250LXNpemU6MTJweDtmb250LXdlaWdodDpib2xkO2A7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0eWxlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZy5jYWxsU291cmNlLCBzdHlsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2cubWVzc2FnZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYz09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIsIHN0eWxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNsX2Vycm9yID0gZnVuY3Rpb24gKGVycm9yTXNnOiBJTG9nZ2VyRXJyb3JNZXNzYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSAnY29sb3I6cmVkO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OmJvbGQ7JztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgY2FsbFNvdXJjZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZXJyb3JNc2cuY2FsbFNvdXJjZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlY1wiICsgZXJyb3JNc2cubWVzc2FnZSwgc3R5bGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNc2cuZXJyb3JPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0eWxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNi8xNS8yMDIxIDA4OjM4IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA0OF0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BzID0geyBTb3VyY2VDb2RlMTogYHNzbi1hbmdqcy1bJHtjYWxsU291cmNlfV1gLCBTb3VyY2VDb2RlMjogZXJyb3JNc2cuY2FsbFNvdXJjZSwgTWVzc2FnZTogZXJyb3JNc2cubWVzc2FnZSB9O1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFeGNlcHRpb24oZXJyb3JNc2cuZXJyb3JPYmplY3QsIHByb3BzKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNsX25vcm1hbCxcclxuICAgICAgICAgICAgICAgIGNsX2Vycm9yXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH07XHJcblxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgc3NuX0FuZ3VsYXJKc2xvZ2dlciB9O1xyXG4iLCLvu79pbXBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCBUaW1lbG9nX1NlcnZpbmdQYWdlIH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcclxuXHJcbi8vIDExLzIwLzIwMTkgMDQ6MjkgYW0gLSBTU04gLSBbMjAxOTExMjAtMDQyOV0gLSBbMDAxXSAtIFRpbWVsb2cgaW5kZXggY2xvY2stb3V0IHJlZnJlc2ggdXBkYXRlZCByb3dcclxuXHJcbi8vIFJlZmFjdG9yIFsyMDE5MTEyMC0wNDM4XVxyXG52YXIgUGFnZVVwZGF0ZXJfSW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgcGFnZVVwZGF0ZXJfTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdQYWdlVXBkYXRlcicsIGN1cnJlbnRBcHBsaWNhdGlvbik7XHJcblxyXG4gICAgICAgIHBhZ2VVcGRhdGVyX01vZHVsZS5mYWN0b3J5KCdQYWdlVXBkYXRlclNlcnZpY2UnLCBbJyRyb290U2NvcGUnLCAnZGF0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgZGF0YVNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjggYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA1XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZGluZyBzZXJ2aW5nUGFnZVxyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfdGltZWxvZ19pbmRleCA9IGZ1bmN0aW9uIChpZF90ZW1wLCBzZXJ2aW5nUGFnZTogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG4gXHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YVNlcnZpY2UudGltZWxvZ1JlZnJlc2hSZWNvcmQoaWRfdGVtcCwgc2VydmluZ1BhZ2UpLnRoZW4ocmVmcmVzaFJlY29yZF9TdWNlc3MsIHJlZnJlc2hSZWNvcmRfRXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX1N1Y2VzcyhyZXN1bHQpIHtcclxuXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdUaW1lTG9nX0luZGV4X1JlZnJlc2gnLCByZXN1bHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiByZWZyZXNoUmVjb3JkX0Vycm9yKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGltZWxvZ19pbmRleDogX3RpbWVsb2dfaW5kZXhcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcblxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfTtcclxuXHJcblxyXG59KCk7XHJcblxyXG5leHBvcnQgeyBQYWdlVXBkYXRlcl9JbnN0YW5jZSB9O1xyXG4gICAgIFxyXG4iLCLvu79cclxuLy8gMTEvMjIvMjAxOSAwOTo0MSBwbSAtIFNTTiAtIENyZWF0ZWQgdG8gcmVzdG9yZSBwYWdlIG9uIGhpdHRpbmcgdGhlIGJhY2sgYnV0dG9uIG9yIHJlY2FsbGluZyB0aGUgcGFnZS5cclxuXHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInXHJcblxyXG4vLyAxMi8yOC8yMDE5IDEwOjAgcG0gLSBTU04gLSBBZGRpbmcgQXBwSW5zaWdodHNfVXRpbCBcclxuaW1wb3J0IHsgQXBwSW5zaWdodHNfVXRpbCB9IGZyb20gJy4vQXBwbGljYXRpb25JbnNpZ2h0c19Nb25pdG9yJztcclxuXHJcbmltcG9ydCB7IGdsb2JhbHNfaW5zdGFuY2UgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xyXG5cclxuXHJcblxyXG52YXIgUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuIC8vIDA2LzA2LzIwMjEgMDU6MjkgcG0gLSBTU04gLSBbMjAyMTA2MDYtMDIyN10gLSBbMDA5XSAtIFRlc3RuZyBmb3IgZGVwbG95bWVudFxyXG4vLyBjYWxsU291cmNlX3BhcmVudFxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKG5nQXBwbGljYXRpb25OYW1lOnN0cmluZywgY2FsbFNvdXJjZV9wYXJlbnQ6IHN0cmluZykge1xyXG5cclxuXHJcbiAgICAgICAgQXBwSW5zaWdodHNfVXRpbC5sb2dFdmVudChcIkRlbW9TaXRlc18yMDE5MTIyOF8yMjI4XCIsIHsgU291cmNlQ29kZTogXCIyMDE5MTIyOC0yMjEwXCIsIE1lc3NhZ2U6IFwiZG9TZXR1cFwiLCBDYWxsU291cmNlX3BhcmVudDogY2FsbFNvdXJjZV9wYXJlbnR9KTtcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgIHZhciBhbmd1bGFyX21vZHVsZTogYW5ndWxhci5JTW9kdWxlID0gZ2xvYmFsc19pbnN0YW5jZS5nZXRJbnN0YW5jZV92MDAyKCdSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGUnLCBuZ0FwcGxpY2F0aW9uTmFtZSk7XHJcblxyXG4gICAgICAgIGFuZ3VsYXJfbW9kdWxlLmNvbnRyb2xsZXIoJ3Jlc3RvcmVQcmV2aW91c1BhZ2VBbmRUYXNrUXVldWVDb250cm9sbGVyJywgWyckc2NvcGUnLCAnJGF0dHJzJywgJyRsb2NhdGlvbicsIGZ1bmN0aW9uICgkc2NvcGUsICRhdHRycywgJGxvY2F0aW9uKSB7XHJcblxyXG5cclxuICAgICAgICB9XSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgYW5ndWxhcl9tb2R1bGUuZGlyZWN0aXZlKCdyZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVBbmRUYXNrUXVldWUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpdGVfVGFza19RdWV1ZV9MaXN0JywgcmVzdWx0KTtcclxuICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IGFscmVhZHlQb3N0ZWQgPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgICAgICAvL3ZhciBjb250cm9sbGVyID0gZnVuY3Rpb24gKCRodHRwLCAkcSwgJHNjb3BlKSB7XHJcbiAgICAgICAgICAgIC8vfTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uIChlKSB7IHNhdmVVcmwoZSk7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVzdG9yZVBvcywgMzAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRSZWxhdGl2ZVBhdGgoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NTA0Njg2L2dldC1yZWxhdGl2ZS1wYXRoLW9mLXRoZS1wYWdlLXVybC11c2luZy1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oLitcXHdcXC8pKC4rKS8sIFwiLyQyXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2F2ZVVybChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGFscmVhZHlQb3N0ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBhbHJlYWR5UG9zdGVkID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCh0cnVlKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1JbmZvID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuc2NyZWVuWCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbUluZm8gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRYOiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFk6IGUuY2xpZW50WSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3NYID0gd2luZG93LnNjcm9sbFg7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQgPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCA9IHsgdXJsOiBnZXRSZWxhdGl2ZVBhdGgoKSwgcG9zWDogcG9zWCwgcG9zWTogcG9zWSwgZWxlbWVudDogZWxlbUluZm8gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2sudXJscy5wdXNoKFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkLnBvc1ggPSBwb3NYO1xyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5wb3NZID0gcG9zWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZC5lbGVtZW50ID0gZWxlbUluZm87XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFVSTF9UcmFja19SZWYuVVJMX1RyYWNrLnVybHNbVVJMX1RyYWNrX1JlZi5jdXJyZW50SW5kZXhdID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFja19SZWYuVVJMX1RyYWNrKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0X1VSTF9UcmFja19SZWNvcmQoY3JlYXRlSWZOb3RGb3VuZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja190ZW1wOiBhbnkgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VSTF9UcmFjaycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVUkxfVHJhY2tfdGVtcCA9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGVJZk5vdEZvdW5kKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgVVJMX1RyYWNrX3RlbXAgPSAne1widXJsc1wiOltdfSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBVUkxfVHJhY2sgPSBKU09OLnBhcnNlKFVSTF9UcmFja190ZW1wKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHVybCA9IGdldFJlbGF0aXZlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRSZWNvcmQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChjdXJyZW50SW5kZXggPSAwOyBjdXJyZW50SW5kZXggPCBVUkxfVHJhY2sudXJscy5sZW5ndGg7IGN1cnJlbnRJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVSTF9UcmFjay51cmxzW2N1cnJlbnRJbmRleF0udXJsID09IHVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrLnVybHNbY3VycmVudEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlY29yZDogY3VycmVudFJlY29yZCwgVVJMX1RyYWNrOiBVUkxfVHJhY2ssIGN1cnJlbnRJbmRleDogY3VycmVudEluZGV4XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlc3RvcmVQb3MoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IFVSTF9UcmFja19SZWYgPSBnZXRfVVJMX1RyYWNrX1JlY29yZCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYpIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmLmN1cnJlbnRSZWNvcmQpIHJldHVybjtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50UmVjb3JkID0gVVJMX1RyYWNrX1JlZi5jdXJyZW50UmVjb3JkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UmVjb3JkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogY3VycmVudFJlY29yZC5wb3NZLCBsZWZ0OiBjdXJyZW50UmVjb3JkLnBvc1gsIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaWdobGlnaHRDbGlja1NvdXJjZSgpOyB9LCAxMDAwKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gIFVSTF9UcmFjay51cmxzLnNwbGljZShjdXJyZW50SW5kZXgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VSTF9UcmFjaycsIEpTT04uc3RyaW5naWZ5KFVSTF9UcmFjaykpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhpZ2hsaWdodENsaWNrU291cmNlKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgVVJMX1RyYWNrX1JlZiA9IGdldF9VUkxfVHJhY2tfUmVjb3JkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFVUkxfVHJhY2tfUmVmKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAoIVVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZCkgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFJlY29yZCA9IFVSTF9UcmFja19SZWYuY3VycmVudFJlY29yZDtcclxuICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSZWNvcmQuZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJlY29yZC5lbGVtZW50LmNsaWVudFgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGN1cnJlbnRSZWNvcmQuZWxlbWVudC5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBjdXJyZW50UmVjb3JkLmVsZW1lbnQuY2xpZW50WTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRFbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCh4LCB5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCAmJiBzZWxlY3RlZEVsZW1lbnQuYXR0cmlidXRlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnlwYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwiQSBcIi50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VsZWN0ZWRFbGVtZW50Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnlwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHNlbGVjdGVkRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJuZy1jbGlja1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50LmF0dHJpYnV0ZXNbeF0ubmFtZSA9PT0gXCJocmVmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnlwYXNzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3BhblRlbXAgPSAkKCc8c3Bhbj48L3NwYW4+JykucHJlcGVuZFRvKHNlbGVjdGVkRWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS50ZXh0KCQoc2VsZWN0ZWRFbGVtZW50KS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHNwYW5UZW1wKS5hZGRDbGFzcygnY3NzSGlsaWdodDEwMScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJlbW92ZUFkZGVkQ2xhc3Moc3BhblRlbXApOyB9LCAyMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBVUkxfVHJhY2tfUmVmLlVSTF9UcmFjay51cmxzLnNwbGljZShVUkxfVHJhY2tfUmVmLmN1cnJlbnRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVVJMX1RyYWNrJywgSlNPTi5zdHJpbmdpZnkoVVJMX1RyYWNrX1JlZi5VUkxfVHJhY2spKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiByZW1vdmVBZGRlZENsYXNzKG9ialJlZikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKG9ialJlZikucmVtb3ZlKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXN0cmljdDogXCJFXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiL2pzL3V0aWwvUmVzdG9yZVByZXZpb3VzUGFnZVN0YXRlLmh0bWxcIixcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHJzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBSZXN0b3JlUHJldmlvdXNQYWdlU3RhdGVfaW5zdGFuY2UgfTtcclxuXHJcbiIsIu+7v1xyXG4vLyAwNi8wOC8yMDIxIDAyOjQ0IHBtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAzMF0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnQgLSBMaW5lIGl0ZW1cclxuLy8gMDYvMTkvMjAyMSAwNjowNyBhbSAtIFNTTiAtIFJldmlzZWQgdG8gYmUgZm9ybS1iYXNlZC5cclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSAnYW5ndWxhcidcclxuXHJcbmltcG9ydCAqIGFzIHNzbl9nbG9iYWxzIGZyb20gXCIuLi8uLi9nbG9iYWxzXCI7XHJcbmltcG9ydCB7IElMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi9Mb2dnZXIvSUxvZ2dlckVycm9yTWVzc2FnZSc7XHJcblxyXG4gXHJcblxyXG5pbnRlcmZhY2UgSVNjb3BlX0N1c3RvbSBleHRlbmRzIGFuZ3VsYXIuSVNjb3BlIHtcclxuICAgIG9iamVjdExpc3Q6IHN0cmluZ1tdXHJcbn1cclxuXHJcblxyXG5jb25zdCBzc25fYXV0b19mb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBkb1NldHVwID0gZnVuY3Rpb24gKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdmFyIEpvYnNfQW5ndWxhcl9Nb2R1bGU6IGFuZ3VsYXIuSU1vZHVsZSA9IHNzbl9nbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignc3NuX3NldF9mb2N1cycsIGFwcGxpY2F0aW9uTmFtZSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICBKb2JzX0FuZ3VsYXJfTW9kdWxlLmRpcmVjdGl2ZSgnc3NuQXV0b0ZvY3VzJywgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ3Nzbl9sb2dnZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQsIHNzbl9sb2dnZXI6IElMb2dnZXJNb2R1bGUpIHtcclxuXHJcbiAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc3RyaWN0OiAnQScsIFxyXG5cclxuICAgICAgICAgICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSwgYXR0cnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuc3NuQXV0b0ZvY3VzX2FscmVhZHlTZXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb2N1c0FscmVhZHlTZXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChlbGVtWzBdLCBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9jdXNBbHJlYWR5U2V0KSByZXR1cm47XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLnR5cGUudG9Mb3dlckNhc2UoKSAhPVwiaGlkZGVuXCIgJiYgKCAgb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBcImlucHV0XCIgfHwgb2JqLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSBcInRleHRhcmVhXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoudmFsdWUgPT0gXCJcIikgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c0FscmVhZHlTZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAkdGltZW91dCgoKSA9PiBzZXRGb2N1cygpLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1dKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5leHBvcnQgeyBzc25fYXV0b19mb2N1cyB9O1xyXG5cclxuIiwi77u/XHJcbi8vIDEwLzAxLzIwMTkgMDk6NDcgYW0gLSBTU04gLSBbMjAxOTEwMDEtMDk0NF0gLSBbMDAzXSAtIEFkZGluZyBBcHBsaWNhdGlvbiBJbnNpZ2h0cyBmb3IgSmF2YVNjcmlwdFxyXG5cclxuLy8gaHR0cHM6Ly9kZXZibG9ncy5taWNyb3NvZnQuY29tL3ByZW1pZXItZGV2ZWxvcGVyL2FkZC1hcHBsaWNhdGlvbi1pbnNpZ2h0cy10by1hbi1hbmd1bGFyLXNwYS9cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuXHJcblxyXG4gICAgYXBwSW5zaWdodHM6IHtcclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzJ1xyXG4gICAgICAgIC8vIDEwLzMxLzIwMTkgMDM6NTggYW0gLSBTU04gLSBBZGRlZFxyXG5cclxuXHJcbiAgICAgICAgLy8gaW5zdHJ1bWVudGF0aW9uS2V5OiAnMjcyMzM4ODEtMThhYi00MWVhLWI1ZjktZjI0YjhlZDYyYmQzJyxcclxuXHJcbiAgICAgICAgLy8gMTEvMDcvMjAxOSAwODozNCBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgXCJJbnN0cnVtZW50YXRpb25LZXlcIjogXCJkZWxldGVkXCIsIFwiZDlmMjEyMWItOTQ3NS00ZmQ2LTk3Y2ItNGRmMDE2ZTMzY2UzXCIgLFxyXG4gICAgICAgIC8vIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAtIFwiMzNjNmRlZjUtNDMwZi00Y2Q0LThiNmYtOTk2ODIwODIwZGFiXCJcclxuXHJcbiAgICAgICAgLy8gMDYvMDYvMjAyMSAwNjoyMSBwbSAtIFNTTiAtIFsyMDIxMDYwNi0wMjI3XSAtIFswMTBdIC0gVGVzdG5nIGZvciBkZXBsb3ltZW50XHJcblxyXG4gICAgICAgIC8vIGluc3RydW1lbnRhdGlvbktleTogXCIzM2M2ZGVmNS00MzBmLTRjZDQtOGI2Zi05OTY4MjA4MjBkYWJcIixcclxuICAgICAgICAvLyBSZXBsYWNlIFBTLUZhYnJpa2FtUmVzaWRlbmNlcyAgd2l0aCBEZXZTaXRlc0luZGV4MjAxOTAxMjdfXzA5MjlfcmVkZXBsb3lfdjAyXHJcbiAgICAgICAgaW5zdHJ1bWVudGF0aW9uS2V5OiBcIjI3MjMzODgxLTE4YWItNDFlYS1iNWY5LWYyNGI4ZWQ2MmJkM1wiXHJcblxyXG5cclxuICAgIH1cclxuXHJcbn07Iiwi77u/XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2FuZ3VsYXIvaW5kZXguZC50c1wiIC8+XHJcblxyXG5cclxuLy8gMDkvMTgvMjAxOSAxMDozMyBhbSAtIFNTTiAtIFsyMDE5MDkxOC0wOTQzXSAtIFswMDZdIC0gQWRkaW5nIGpvYiBzdGF0dXMgb3B0aW9uIHRvIGluZGV4XHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NTMyNDUxMC9ob3ctdG8tbWFrZS1hLXNpbmdsZXRvbi1pbi10eXBlc2NyaXB0LXdvcmstYWNyb3NzLW11bHRpcGxlLW1vZHVsZXNcclxuXHJcblxyXG5pbXBvcnQgSUFuZ3VsYXJBcHAgZnJvbSAnLi9JQW5ndWxhckFwcCc7XHJcblxyXG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gXCJhbmd1bGFyXCI7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIGdsb2JhbHNfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIGNsYXNzIFNTTl9HbG9iYWxzIHtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlOiBJQW5ndWxhckFwcFtdID0gW107IC8vYW5ndWxhci5JTW9kdWxlW107XHJcblxyXG4gICAgICAgIC8vIDA5LzIzLzIwMTkgMDY6MTMgYW0gLSBTU04gLSBbMjAxOTA5MjMtMDYxM10gLSBbMDAxXSAtIEFkZGluZyBhIGxvY2tcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZV92MDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgICAgIC8vLy8gIERPIE5PVCBSRU1PVkUuXHJcbiAgICAgICAgICAgIC8vLy8gT3B0aW9uIHRvIGNhbGwgYW4gaW5qZWN0ZWQgQW5ndWxhckpTIHNlcnZlciBmcm9tIGhlcmUuIFRlc3RlZC4gIFxyXG5cclxuICAgICAgICAgICAgLy9mYWN0b3J5U2V0dXAuZG9GYWN0b3J5U2V0dXAoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiZ2xvYmFsczogMjAxOTA5MjMtMTEzNiAtIENhbGxpbmcgdGVzdF8xMDJcIik7XHJcbiAgICAgICAgICAgIC8vICAgIHRlc3RfMTAzLmRvSXQoKTtcclxuICAgICAgICAgICAgLy99IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUuZXJyb3IoXCJnbG9iYWxzOiAgMjAxOTA5MjMtMTEzNSAtIEZhaWxlZCBjYWxsIHRvIHRlc3RfMTAyXCIpO1xyXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBTU05fR2xvYmFscy5nZXRJbnN0YW5jZV9PcmlnaW5hbChjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlX09yaWdpbmFsKGNhbGxTb3VyY2U6IHN0cmluZywgYXBwbGljYXRpb25OYW1lOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdID0gbnVsbCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBhbmd1bGFyQXBwOiBJQW5ndWxhckFwcCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWQgPSAoU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUpLmZpbHRlcigocjogSUFuZ3VsYXJBcHApID0+IHIubmFtZSA9PT0gYXBwbGljYXRpb25OYW1lKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID4gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdsb2JhbHMgLSAyMDE5MDkyMy0wNTQzIC0gMDAxIC0gRm91bmQgYXBwbGljYXRpb24gW1wiICsgYXBwbGljYXRpb25OYW1lICsgXCJdICBJbnN0YW5jZSBjb3VudCBbXCIgKyBzZWxlY3RlZC5sZW5ndGggKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHNlbGVjdGVkWzBdO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwcGxpY2F0aW9uTmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd0aW1lc2hlZXRBcHAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhckFwcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFwcGxpY2F0aW9uTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzEwLzIwMTkgMDg6MzYgYW0gLSBTU04gLSBBZGRpbmcgJ25nU2FuaXRpemUnIGZvciBuZy1iaW5kLWh0bWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlOiBhbmd1bGFyLm1vZHVsZSgndGltZXNoZWV0QXBwJywgWyduZ1JvdXRlJywgJ3VpLmJvb3RzdHJhcCcsICduZ1Nhbml0aXplJ10pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNTTl9HbG9iYWxzLnNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLnB1c2goYW5ndWxhckFwcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4X1RpbWVzaGVldCc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyQXBwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXBwbGljYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IGFuZ3VsYXIubW9kdWxlKCdkZW1vU2l0ZXNfSW5kZXhfVGltZXNoZWV0JywgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVtb1NpdGVzX0luZGV4JzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuZ3VsYXJBcHAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBhcHBsaWNhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZTogYW5ndWxhci5tb2R1bGUoXCJkZW1vU2l0ZXNfSW5kZXhcIiwgYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU1NOX0dsb2JhbHMuc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUucHVzaChhbmd1bGFyQXBwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdsb2JhbHMgKioqKioqKioqKioqKiBObyBjYXNlIGZvciBhcHBsaWNhdGlvbiBuYW1lIFtcIiArIGFwcGxpY2F0aW9uTmFtZSArIFwiXSAgWzIwMTkwOTIwLTA5NTVdIGdsb2JhbHMudHNcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYW5ndWxhckFwcC5pbnN0YW5jZTtcclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHZhciBmYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgZG9GYWN0b3J5U2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXBwX2dsb2JhbHM7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgYXBwX2dsb2JhbHMgPSBhbmd1bGFyLm1vZHVsZSgnZ2xvYmFsQW5ndWxhckFwcCcsIFtdKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBhcHBfZ2xvYmFscy5mYWN0b3J5KFwiZ2xvYmFsQW5ndWxhckFwcFV0aWxcIiwgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRvVGVzdDEwMSA9IGZ1bmN0aW9uIChuYW1lUGFzc2VkSW4pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5KCdBYm91dCB0byBncmVldCAnICsgbmFtZVBhc3NlZEluICsgJy4nKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2tUb0dyZWV0KG5hbWVQYXNzZWRJbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoJ0hlbGxvLCAnICsgbmFtZVBhc3NlZEluICsgJyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KCdHcmVldGluZyAnICsgbmFtZVBhc3NlZEluICsgJyBpcyBub3QgYWxsb3dlZC4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBva1RvR3JlZXQobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb1Rlc3QxMDE6IGRvVGVzdDEwMVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB9XSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZG9GYWN0b3J5U2V0dXA6IGRvRmFjdG9yeVNldHVwXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDkvMjAvMjAxOSAwOTozOCBhbSAtIFNTTiAtIFBhc3MgaW4gYXJnc1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluc3RhbmNlX3YwMDIoY2FsbFNvdXJjZTogc3RyaW5nLCBhcHBsaWNhdGlvbk5hbWU6IHN0cmluZywgYXJnczogc3RyaW5nW10gPSBudWxsKTogYW5ndWxhci5JTW9kdWxlIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIFNTTl9HbG9iYWxzLmdldEluc3RhbmNlX3YwMihjYWxsU291cmNlLCBhcHBsaWNhdGlvbk5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VfdjAwMjogZ2V0SW5zdGFuY2VfdjAwMlxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxudmFyIHRlc3RfMTAzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICB2YXIgZG9JdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIGFuZ3VsYXIuaW5qZWN0b3IoWyduZycsICdnbG9iYWxBbmd1bGFyQXBwJ10pLmludm9rZShbJ2dsb2JhbEFuZ3VsYXJBcHBVdGlsJywgZnVuY3Rpb24gKGdsb2JhbEFuZ3VsYXJBcHBVdGlsKSB7XHJcblxyXG4gICAgICAgICAgICBnbG9iYWxBbmd1bGFyQXBwVXRpbC5kb1Rlc3QxMDEoJ05hbWUgcGFzc2VkIHRvIGRvVGVzdDEwMScpLnRoZW4oZG9UZXN0MTAxU3VjY2VzcywgZG9UZXN0MTAxRXJyb3IpLmNhdGNoKGRvVGVzdDEwMUNhdGNoKTtcclxuXHJcbiAgICAgICAgfV0pO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFTdWNjZXNzIC0gMjAxOTA5MjQtMDMxNiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxRXJyb3IocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFFcnJvciAtIDIwMTkwOTI0LTAzMTYtQiAnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZG9UZXN0MTAxQ2F0Y2gocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dsb2JhbHMgLSBkb1Rlc3QxMDFDYXRjaCAtIDIwMTkwOTI0LTAzMTYtQycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb0l0OiBkb0l0XHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG4vLyAxMS8yMS8yMDE5IDA2OjMyIGFtIC0gU1NOIC0gWzIwMTkxMTIxLTA1MDNdIC0gWzAwNl0gLSBUaW1lbG9nIGVkaXQgb3B0aW9ucyBvbiBwcm9qZWN0IHNlYXJjaFxyXG5cclxuZW51bSBUaW1lbG9nX1NlcnZpbmdQYWdlIHsgLy8gU2VydmluZ1BhZ2UgKGZvciBJREUgU2VhcmNoKVxyXG5cclxuICAgIFRpbWVsb2cgPSAnVGltZWxvZycsXHJcbiAgICBKb2JfVGltZWxvZyA9ICdKb2JfVGltZWxvZycsXHJcbiAgICBQcm9qZWN0c19TZWFyY2ggPSAnUHJvamVjdHNfU2VhcmNoJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaW1lbG9nX1NlcnZpbmdQYWdlX2NoZWNrdmFsdWUodmFsdWU6IFRpbWVsb2dfU2VydmluZ1BhZ2UsIGNvbXBhcmVUbzogVGltZWxvZ19TZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgIHJldHVybiBjb21wYXJlVG8gPT09IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgeyBnbG9iYWxzX2luc3RhbmNlLCB0ZXN0XzEwMywgVGltZWxvZ19TZXJ2aW5nUGFnZSwgVGltZWxvZ19TZXJ2aW5nUGFnZV9jaGVja3ZhbHVlIH07XHJcblxyXG5cclxuIiwi77u/XHJcblxyXG4vLyAwNC8xMi8yMDE5IDAyOjM1IHBtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YSAtIFJlbmFtZSBtb2R1bGUgdG8gc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuXHJcblxyXG4vLyAwNS8wNC8yMDE5IDA5OjI2IGFtIC0gU1NOIC0gWzIwMTkwNTA0LTA4NTVdIC0gWzAwNF0gLSBUZXN0aW5nIGlmIHdlIGNhbiByZXBsYWNlIGdsb2JhbCB2YXJpYWJsZVxyXG4vLyBDb252ZXJ0IHRvIFR5cGVTY3JpcHRcclxuLy8gMDUvMDQvMjAxOSAwOTo1OCBhbSAtIFNTTiAtIFNpbmNlIGhhdmluZyB0byBpbXBvcnQgYW5ndWxhciB3aGVuIGNvbnZlcnRpbmcgdG8gYSBtb2R1bGVcclxuXHJcblxyXG5pbXBvcnQgKiBhcyAgIElDb2x1bW5CYWdUZW1wIGZyb20gJy4uL0ludGVyZmFjZXMvSUNvbHVtbkJhZyc7XHJcbmltcG9ydCB7IElUZWNobm9sb2d5IH0gZnJvbSAnLi4vSW50ZXJmYWNlcy9JVGVjaG5vbG9neSc7XHJcbmltcG9ydCB7IElEZXZTaXRlVGVjaG5vbG9neSB9IGZyb20gJy4uL0ludGVyZmFjZXMvSURldlNpdGVUZWNobm9sb2d5JztcclxuXHJcbmltcG9ydCAqIGFzICAgZ2xvYmFscyBmcm9tICcuLi9nbG9iYWxzJztcclxuXHJcbmltcG9ydCAqIGFzIGFuZ3VsYXIgZnJvbSBcImFuZ3VsYXJcIjtcclxuXHJcblxyXG52YXIgZGF0YVNlcnZpY2VfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKGN1cnJlbnRBcHBsaWNhdGlvbjogc3RyaW5nKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGUgPSBnbG9iYWxzLmdsb2JhbHNfaW5zdGFuY2UuZ2V0SW5zdGFuY2VfdjAwMignRGF0YVNlcnZpY2VzJywgY3VycmVudEFwcGxpY2F0aW9uKTtcclxuXHJcblxyXG4gICAgICAgIHNzbl9kZXZzaXRlX2FuZ3VsYXJfbW9kdWxlLmZhY3RvcnkoXCJkYXRhU2VydmljZVwiLCBbJyRodHRwJywgJyRxJywgZnVuY3Rpb24gKCRodHRwLCAkcSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZXMgPSBmdW5jdGlvbiAocmVjb3Jkc1BlclBhZ2U6IG51bWJlciwgY3VycmVudFBhZ2U6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS8ke3JlY29yZHNQZXJQYWdlfS8ke2N1cnJlbnRQYWdlfWApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignJWMgJyArICdkYXRhc2VydmljZSBnZXREZXZTaXRlcyBlcnJvcicsICdjb2xvcjpyZWQ7Zm9udC1zaXplOjEzcHQ7Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDU6MTAgYW0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ1XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0RGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlSWQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS8ke2RldlNpdGVJZH1gKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMTMvMjAyMSAxMDoyOSBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wNDUyXSAtIFswMThdIC0gQWRkaW5nIHRhZ3MgdG8gRGV2U2l0ZVxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXREZXZTaXRlc0NvdW50ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAvYXBpL2RlbW9zaXRlc2FwaS9yZWNvcmRjb3VudGApXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjkvMjAxOSAwNTo0OSBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDFdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXBcclxuXHJcbiAgICAgICAgICAgIHZhciBfZ2V0VGltZWxvZyA9IGZ1bmN0aW9uIChpZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjQvMjAxOSAwNzoxNSBhbSAtIFNTTiAtIFsyMDE5MDkyNC0wNDAxXSAtIFswMDldIC0gUXVpY2sgdGltZWxvZyBlbnRyeVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS90aW1lbG9nYXBpL2dldFRpbWVsb2cvJyArIGlkKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTA4MjktMTgxOV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAxMS8xOS8yMDE5IDAyOjAwIGFtIC0gU1NOIC0gWzIwMTkxMTE5LTAwNDhdIENyZWF0ZWQgICAgXHJcbiAgICAgICAgICAgIC8vIDExLzIxLzIwMTkgMDY6MjYgYW0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDA0XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcbiAgICAgICAgICAgIC8vIEFkZCBzZXJ2aW5nUGFnZVxyXG4gICAgICAgICAgICB2YXIgX1RpbWVsb2dSZWZyZXNoUmVjb3JkID0gZnVuY3Rpb24gKGlkLCBzZXJ2aW5nUGFnZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3RpbWVsb2dhcGkvUmVmcmVzaFJlY29yZC8nICsgaWQgKyBcIj9zZXJ2aW5nUGFnZT1cIiArIHNlcnZpbmdQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgdGltZWxvZyBbMjAxOTExMTktMDIwMV0nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciBfYWRkRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2RlbW9zaXRlc2FwaScsIGRldlNpdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMDYvMjAxOSAwNDo0NSBwbSAtIFNTTiAtIFsyMDE5MDkwNi0wNTE4XSAtIFswMDNdIC0gQW5ndWxhciAtIGVkaXRNb2RlIGRpdiBjb250ZW50XHJcbiAgICAgICAgICAgIHZhciBfdXBkYXRlRGV2U2l0ZSA9IGZ1bmN0aW9uIChkZXZTaXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMDkvMjAxOSAxMDozMyBwbSAtIFNTTiAtIFsyMDE5MDkwOS0yMTM2XSAtIFswMDRdIC0gc2VsZWN0IHRvcCAyMCBcclxuICAgICAgICAgICAgICAgIC8vIDA5LzI0LzIwMTkgMDM6MzggYW0gLSBTU04gLSBMb2dpYyBlcnJvciAtIHVwZGF0aW5nIHdyb25nIGxpbmtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvZGVtb3NpdGVzYXBpJywgZGV2U2l0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xMi8yMDE5IDExOjI2IGFtIC0gU1NOIC0gWzIwMTkwNDEyLTExMjZdIC0gVGltZWxvZyAtIHNhdmUgZGF0YVxyXG5cclxuICAgICAgICAgICAgdmFyIF9pbnNlcnRUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLnBvc3QoJy9hcGkvdGltZUxvZ0FQSScsIHRpbWVMb2cpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDUvMTkvMjAxOSAwMzowMCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xNDEyXSAtIFswMDRdIC0gQ29udGludWUgd29yayBvbiBhZGRpbmcgY29udGludWUgb3B0aW9uIGZvciB0aW1lc2hlZXQgcmVjb3JkXHJcbiAgICAgICAgICAgIHZhciBfYWRkT3JVcGRhdGVUaW1lTG9nID0gZnVuY3Rpb24gKHRpbWVMb2cpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RpbWVMb2dBUEknLCB0aW1lTG9nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8xNy8yMDE5IDEyOjU2IGFtIC0gU1NOIC0gWzIwMTkwOTE2LTExMjNdIC0gWzAxNl0gLSBBZGRpbmcgam9iIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBBZGRpbmcgb3B0aW9uIHRvIGxpc3QgSm9ic1xyXG5cclxuICAgICAgICAgICAgLy8gMDkvMTgvMjAxOSAwMzoyNCBhbSAtIFNTTiAtIFsyMDE5MDkxNy0wOTI5XSAtIFswMTddIC0gQWRkaW5nIHBhZ2luZyBmb3IgYW5ndWxhciBsaXN0c1xyXG4gICAgICAgICAgICAvLyB2YXIgX2dldEpvYnMgPSBmdW5jdGlvbiAocGFnZU5vLCByZWNvcmRzUGVyUGFnZSwgY29sdW1uTmFtZSwgZGVzYykge1xyXG4gICAgICAgICAgICAvLyAxMS8yNy8yMDE5IDA5OjE0IGFtIC0gU1NOIC0gUGFzcyBwcm9qZWN0SWRcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JzID0gZnVuY3Rpb24gKGNvbHVtbkJhZzogSUNvbHVtbkJhZ1RlbXAuZGVmYXVsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDkvMjIvMjAxOSAwODoyMyBhbSAtIFNTTiAtIFsyMDE5MDkyMi0wODIyXSAtIFswMDFdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleCAtIHVwZGF0ZSBkYXRhIHNvdXJjZVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqb2Jfc3RhdHVzZXNfc2VsZWN0ZWQgPSAoKGNvbHVtbkJhZy5qb2Jfc3RhdHVzZXNfc2VsZWN0ZWQubGVuZ3RoID09IDApID8gXCJub3RoaW5nLTIwMTkwOTIyMTExN1wiIDogY29sdW1uQmFnLmpvYl9zdGF0dXNlc19zZWxlY3RlZC5qb2luKCcsJykpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2xpc3QvJyArIGNvbHVtbkJhZy5jdXJyZW50UGFnZU5vICsgXCIvXCIgKyBjb2x1bW5CYWcucmVjb3Jkc1BlclBhZ2UgKyBcIi9cIiArIGNvbHVtbkJhZy5jb2x1bW5OYW1lICsgXCIvXCIgKyBjb2x1bW5CYWcuZGVzYyArIFwiL1wiICsgam9iX3N0YXR1c2VzX3NlbGVjdGVkICsgXCI/cHJvamVjdElkPVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKyBjb2x1bW5CYWcuZmtfZmlsdGVyKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoeyBFcnJvcjogJ0ZhaWxlZCBjYWxsIHRvIGdldCBqb2JzIFsyMDE5MDkxNy0wMDU3XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzMwLzIwMTkgMDc6MDYgcG0gLSBTU04gLSBBZGRpbmdcclxuICAgICAgICAgICAgdmFyIF9nZXRKb2IgPSBmdW5jdGlvbiAoaWQpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA2LzA4LzIwMjEgMTA6NTIgcG0gLSBTU04gLSBbMjAyMTA2MDgtMjI0N10gLSBbMDAyXSAtIFRlc3QgbGluZSBpdGVtIC0gIFByZXAgZm9yIGRlcGxveW1lbnRcclxuICAgICAgICAgICAgICAgIC8vICRodHRwLmdldCgnL2FwaS9qb2JhcGkvZ2V0X2N1c3RvbS8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iYXBpL2dldEpvYi8nICsgaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0KHsgRXJyb3I6ICdGYWlsZWQgY2FsbCB0byBnZXQgam9iIFsyMDE5MDkzMC0xOTA4XScgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAwMToyNSBwbSAtIFNTTiAtIFsyMDE5MDkyMS0xMTI5XSAtIFswMDNdIC0gUGx1ZyBpbiBqb2Igc3RhdHVzIGZpbHRlciBvbiBqb2IncyBpbmRleFxyXG5cclxuICAgICAgICAgICAgdmFyIF9nZXRKb2JfU3RhdHVzZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoJy9hcGkvam9iX3N0YXR1c0FQSS8nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IGpvYl9zdGF0dXNlcyBbMjAxOTA5MjEtMTMyNicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzIyLzIwMTkgMDQ6MDYgcG0gLSBTU04gLSBbMjAxOTExMjEtMDUwM10gLSBbMDE4XSAtIFRpbWVsb2cgZWRpdCBvcHRpb25zIG9uIHByb2plY3Qgc2VhcmNoXHJcblxyXG4gICAgICAgICAgICB2YXIgX1Byb2plY3RzU2VhcmNoUmVmcmVzaFJlY29yZCA9IGZ1bmN0aW9uIChpZCwgc2VydmluZ1BhZ2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldCgnL2FwaS9Qcm9qZWN0QVBJL3JlZnJlc2hyZWNvcmQvJyArIGlkICsgXCI/c2VydmluZ1BhZ2U9XCIgKyBzZXJ2aW5nUGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdCh7IEVycm9yOiAnRmFpbGVkIGNhbGwgdG8gZ2V0IHByb2plY3Qgc2VhcmNoIHJlY29yZCAgWzIwMTkxMTIyLTE2MDhdIFsnICsgaWQgKyAnXSBbJyArIHNlcnZpbmdQYWdlICsgJ10nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8wNy8yMDIxIDA2OjIyIGFtIC0gU1NOIC0gWzIwMjEwNjA2LTAyMjddIC0gWzAxNV0gLSBUZXN0bmcgZm9yIGRlcGxveW1lbnRcclxuXHJcbiAgICAgICAgICAgIHZhciBhZGRPclVwZGF0ZUpvYl9MaW5lSXRlbSA9IGZ1bmN0aW9uIChqb2JfTGluZUl0ZW0pIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL2pvYl9saW5lSXRlbUFQSScsIGpvYl9MaW5lSXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE1LzIwMjEgMDY6MDAgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMDQ5XSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBhZGRPclVwZGF0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAodGVjaG5vbG9neTogSVRlY2hub2xvZ3kpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KCcvYXBpL3RlY2hub2xvZ3lBUEknLCB0ZWNobm9sb2d5KVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUocmVzdWx0LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRIdHRwUG9zdFByb21pc2UodXJsLCBib2R5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5wb3N0KHVybCwgYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDA4OjQyIHBtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzEwNV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEh0dHBEZWxldGVQcm9taXNlKHVybCwgaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmRlbGV0ZShgJHt1cmx9LyR7aWR9YClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdC5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNi8xNi8yMDIxIDAyOjU5IGFtIC0gU1NOIC0gWzIwMjEwNjEzLTA0NTJdIC0gWzA2MV0gLSBBZGRpbmcgdGFncyB0byBEZXZTaXRlXHJcblxyXG4gICAgICAgICAgICB2YXIgYWRkRGV2U2l0ZVRlY2hub2xvZ3kgPSBmdW5jdGlvbiAoZGV2U2l0ZVRlY2hub2xvZ3k6IElEZXZTaXRlVGVjaG5vbG9neSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRIdHRwUG9zdFByb21pc2UoJy9hcGkvRGV2U2l0ZXRlY2hub2xvZ3lBUEkvcG9zdF9jdXN0b20nLCBkZXZTaXRlVGVjaG5vbG9neSk7XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA2LzE2LzIwMjEgMDg6MzMgcG0gLSBTU04gLSBbMjAyMTA2MTMtMDQ1Ml0gLSBbMTAzXSAtIEFkZGluZyB0YWdzIHRvIERldlNpdGVcclxuXHJcbiAgICAgICAgICAgIHZhciBkZWxldGVEZXZTaXRlVGVjaG5vbG9neSA9IGZ1bmN0aW9uIChpZDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEh0dHBEZWxldGVQcm9taXNlKCcvYXBpL0RldlNpdGV0ZWNobm9sb2d5QVBJJywgaWQpO1xyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzOiBfZ2V0RGV2U2l0ZXMsXHJcbiAgICAgICAgICAgICAgICBnZXREZXZTaXRlOiBfZ2V0RGV2U2l0ZSxcclxuICAgICAgICAgICAgICAgIGdldERldlNpdGVzQ291bnQ6IF9nZXREZXZTaXRlc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgYWRkRGV2U2l0ZTogX2FkZERldlNpdGUsXHJcbiAgICAgICAgICAgICAgICAvLyAwOS8wNi8yMDE5IDA0OjQ0IHBtIC0gU1NOIC0gWzIwMTkwOTA2LTA1MThdIC0gWzAwMl0gLSBBbmd1bGFyIC0gZWRpdE1vZGUgZGl2IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURldlNpdGU6IF91cGRhdGVEZXZTaXRlLFxyXG5cclxuICAgICAgICAgICAgICAgIGluc2VydFRpbWVMb2c6IF9pbnNlcnRUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0VGltZWxvZzogX2dldFRpbWVsb2csXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUaW1lTG9nOiBfYWRkT3JVcGRhdGVUaW1lTG9nLFxyXG4gICAgICAgICAgICAgICAgZ2V0Sm9iczogX2dldEpvYnMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2JfU3RhdHVzZXM6IF9nZXRKb2JfU3RhdHVzZXMsXHJcbiAgICAgICAgICAgICAgICBnZXRKb2I6IF9nZXRKb2IsXHJcbiAgICAgICAgICAgICAgICB0aW1lbG9nUmVmcmVzaFJlY29yZDogX1RpbWVsb2dSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkOiBfUHJvamVjdHNTZWFyY2hSZWZyZXNoUmVjb3JkLFxyXG4gICAgICAgICAgICAgICAgYWRkT3JVcGRhdGVKb2JfTGluZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRPclVwZGF0ZVRlY2hub2xvZ3ksXHJcbiAgICAgICAgICAgICAgICBhZGREZXZTaXRlVGVjaG5vbG9neSxcclxuICAgICAgICAgICAgICAgIGRlbGV0ZURldlNpdGVUZWNobm9sb2d5XHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICBzc25fZGV2c2l0ZV9hbmd1bGFyX21vZHVsZTogc3NuX2RldnNpdGVfYW5ndWxhcl9tb2R1bGVcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9O1xyXG5cclxuXHJcbn0oKTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZGF0YVNlcnZpY2VfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4iLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcbi8vIDA4LzMxLzIwMjAgMDQ6NTQgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDA0XSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9ub2RlX21vZHVsZXNfaGFjay9TU05fY29uc29sZV9tb2RlbC5kLnRzXCIgLz5cclxuXHJcbmxldCBkMSA9IG5ldyBEYXRlKCk7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSBBQUFBICcsIGQxKTtcclxuXHJcblxyXG4vLzA4LzIzLzIwMTggMDE6MjQgYW0gLSBTU05cclxuXHJcbi8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG5cclxuXHJcbi8vIHZhciBzaXRlX2luc3RhbmNlID0gZnVuY3Rpb24gKCkge1xyXG5uYW1lc3BhY2Ugc2l0ZV9pbnN0YW5jZV9OUyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIHNpdGVfQ2xhc3Mge1xyXG5cclxuICAgICAgICBzdGF0aWMgbG9hZENvdW50ZXI6IG51bWJlciA9IDA7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzMxLzIwMjAgMDQ6MjkgYW0gLSBTU04gLSBbMjAyMDA4MzEtMDQxN10gLSBbMDAyXSAtIERpc2FibGUgY29sbGFwc2FibGUgZGl2cyB3aXRoIG5vIGNvbnRlbnRcclxuXHJcbiAgICAgICAgZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA5LzA0LzIwMjAgMDE6NTUgYW0gLSBTU04gLSBbMjAyMDA5MDQtMDE1NV0gYXBwbHkgdG8gYSBvbmx5IC0gV2FzIGhpZGluZyBtb2JpbGUgaGFtYmVyZ2VyIG1lbnUuXHJcblxyXG4gICAgICAgICAgICAkKCdhW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0nKS5lYWNoKChuZHgsIG9iajEpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2SWQgPSAkKG9iajEpLmF0dHIoJ2FyaWEtY29udHJvbHMnKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuQ291bnQgPSAkKFwiI1wiICsgZGl2SWQpLmNoaWxkcmVuKCkubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZHJlbkNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChvYmoxKS5jc3MoJ2NvbG9yJywgJ29yYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICQob2JqMSkuY3NzKCdmb250LXNpemUnLCAnMjRwdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKG9iajEpLnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoXCI8c3Bhbi8+XCIpLnRleHQoJChvYmoxKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICBzZXREZWZhdWx0cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNtZE5hbWUgPSAkKHRoaXMpLmF0dHIoJ2NtZC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9wdXBOYW1lID0gJCh0aGlzKS5hdHRyKCdwb3B1cC1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGpRdWVyeU9iamVjdE5hbWUyID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lMicpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwb3B1cE5hbWUpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMDk6MzMgYW0gLSBTU04gLSBBZGRpbmcgaGlkZSBhbmQgc2hvd1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJCgnYm9keScpLnNjcm9sbHNweSh7IHRhcmdldDogalF1ZXJ5T2JqZWN0TmFtZSB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihqUXVlcnlPYmplY3ROYW1lKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LWRlZmF1bHQtdGltZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnZhbChjZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwic2V0LVRvdGFsUGVyaW9kXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzE5LzIwMTkgMDE6MTAgcG0gLSBTU04gLSBBZGRyZXNzaW5nIGVycm9yLiBzdHJpbmcgfCBudW1iZXIgfCBzdHJpbmdbXSBjYW5ub3QgY29udmVydCB0b3Agc3RyaW5nIHwgbnVtYmVyXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDExID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZTogc3RyaW5nID0gKDxIVE1MSW5wdXRFbGVtZW50PiQoalF1ZXJ5T2JqZWN0TmFtZSlbMF0pLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBkMTEuZ2V0VGltZSgpLnZhbHVlT2YoKSAtIGQxMi5nZXRUaW1lKCkudmFsdWVPZigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMiA9IE1hdGguZmxvb3IoZGVsdGFfMSAvIDEwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzA4LzIwMTkgMDE6MDQgcG0gLSBTU04gLSBbMjAxOTExMDgtMTA0M10gLSBbMDA4XSAtIFBlcnNpc3Rpbmcgc2VhcmNoIG9uIHJldHVybiB0byBpbmRleFxyXG4gICAgICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICAgICAgICAvLyAwMS8wMi8yMDIwIDA0OjA2IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnW3Nzbi1jbWQ9cmV0dXJuVG9DYWxsZXJMaW5rXScpLmNsaWNrKChlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuVG9DYWxsZXJLZXkgPSAkKFwiI3JldHVyblRvQ2FsbGVyS2V5XCIpLnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gKDxIVE1MQW5jaG9yRWxlbWVudD5lLnRhcmdldCkuaHJlZiArIFwiJnJldHVyblRvQ2FsbGVyS2V5PVwiICsgcmV0dXJuVG9DYWxsZXJLZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgaW1nU2l0ZVVybFFSQ29kZSA9IDA7IFxyXG5cclxuICAgICAgICAgICAgJCgnI2ltZ1NpdGVVcmxRUkNvZGUnKS5jbGljaygoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGltZ1NpdGVVcmxRUkNvZGUrKztcclxuXHJcbiAgICAgICAgICAgICAgICAkKGUudGFyZ2V0KS50b2dnbGVDbGFzcygnY3NzU2l0ZVVybFFSQ29kZScpO1xyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdmJhciBsaSBhJykuYmluZCgnY29udGV4dG1lbnUgY2xpY2snLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnMjAyMTA0MTQtMTAwNyAtIGNvbnRleHQgbWVudScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2YmFyIGxpIGEnKS5iaW5kKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgbW91c2UgYnV0dG9uIGlzIHByZXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWlkZGxlIG1vdXNlIGJ1dHRvbiBpcyBwcmVzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSaWdodCBtb3VzZSBidXR0b24gaXMgcHJlc3NlZCAgIDIwOCAgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKGUudGFyZ2V0KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3RoaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2lmICgkKHRoaXMubW9iaWxlTmF2YmFyTWVudU9wdGlvbi5uYXRpdmVFbGVtZW50KS5pcygnOnZpc2libGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICQodGhpcy5tb2JpbGVOYXZiYXJNZW51T3B0aW9uLm5hdGl2ZUVsZW1lbnQpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgIHNob3dDb2xsYXBzZWREaXZzKCkge1xyXG4gICAgICAgICAgICAvLyAwOS8wNC8yMDIwIDAxOjU1IGFtIC0gU1NOIC0gWzIwMjAwOTA0LTAxNTVdIGFwcGx5IHRvIGRpdnMgb25seSAtIFdhcyBoaWRpbmcgbW9iaWxlIGhhbWJlcmdlciBtZW51LlxyXG4gICAgICAgICAgICAkKFwiYVtkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcigpIHtcclxuICAgICAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoY2FsbGVyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDQvMjYvMjAxOSAwOTo1NiBwbSAtIFNTTiAtIFsyMDE5MDQyNi0yMTU2XSAtIFswMDFdIC0gSGlkZSBwcmUgYW5kIGFkZCBhIGxpbmsgdG8gc2hvdy5cclxuICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUudHMgMjAyMDAxMDItMTUyOCAtIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciBbJyArIGNhbGxlciArICddJyk7XHJcblxyXG4gICAgICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhdXRvQ29sbGFwc2UgPSAkKHRoaXMpLmF0dHIoJ3Nzbi1hdXRvLWNvbGxhcHNlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXV0b0NvbGxhcHNlID09PSBcImZhbHNlXCIpIHsgcmV0dXJuOyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZUF0dHJpYiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZV9jYXB0aW9uID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoX3RpdGxlICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgICAgICBfdGl0bGVfY2FwdGlvbiA9IFwiOiBcIiArIF90aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ByZSA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ1Nob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEJlZ2luXHJcblxyXG4gICAgICAgIC8vIFNvdXJjZSBodHRwczovL3d3dy5jLXNoYXJwY29ybmVyLmNvbS9VcGxvYWRGaWxlLzFkMzExOS9kYXRlLXNlcmlhbGl6YXRpb24td2l0aC1hbmd1bGFyLWpzLXdlYi1hcGkvXHJcblxyXG4gICAgICAgIGlzbzg2MDFSZWdFeCA9IC8oMTl8MjB8MjEpXFxkXFxkKFstLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKVQoXFxkXFxkKShbOi8uXSkoXFxkXFxkKShbOi8uXSkoXFxkXFxkKS87XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuICAgICAgICBmbkNvbnZlckRhdGUoaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnB1dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKHRoaXMuaXNvODYwMVJlZ0V4KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbkNvbnZlckRhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgICAgICAvLyAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIC8vICAgIHNldFRpbWVvdXQocHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yLCAyMDAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9yZXR1cm4ge1xyXG5cclxuICAgICAgICAvLyAgICBmbkNvbnZlckRhdGU6IGZuQ29udmVyRGF0ZSxcclxuICAgICAgICAvLyAgICBzaG93Q29sbGFwc2VkRGl2czogc2hvd0NvbGxhcHNlZERpdnMsXHJcbiAgICAgICAgLy8gICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yOiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3JcclxuXHJcblxyXG4gICAgICAgIC8vfTtcclxuXHJcbiAgICAgICAgLy99KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vL2V4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG5sZXQgc2l0ZV9pbnN0YW5jZSA9IG5ldyBzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MoKTtcclxuZXhwb3J0IHsgc2l0ZV9pbnN0YW5jZSB9O1xyXG5cclxuXHJcblxyXG4vLyAwMS8wMi8yMDIwIDA0OjIwIHBtIC0gU1NOIC0gWzIwMjAwMTAyLTE2MTFdIC0gWzAwM10gLSBTZXBlcmF0ZSBBbmd1bGFySlMgdXRpbGl0eSBmcm9tIGdlbmVyYWwgRE9NIHV0aWxpdGllc1xyXG4vLyBPZiBjb3Vyc2Ugd2UgYXJlIGNhbGxpbmcgdXRpbGl0eSBtb3JlIHRoYW4gb25jZS4gTmVlZCB0byBjYWxsIGZ1bmN0aW9ucyB3aGVyZSB0aGV5IGFwcGx5LlxyXG5cclxuXHJcblxyXG5pZiAodHlwZW9mICh3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdKSAhPSBcIm51bWJlclwiKSB7XHJcblxyXG4gICAgd2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9IDA7XHJcbn1cclxuXHJcbndpbmRvd1tcInNpdGVfcm91dGluZV9ydW5cIl0gPSB3aW5kb3dbXCJzaXRlX3JvdXRpbmVfcnVuXCJdICsgMTtcclxuXHJcblxyXG5pZiAod2luZG93W1wic2l0ZV9yb3V0aW5lX3J1blwiXSA9PT0gMSkge1xyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgLy8gMTIvMzAvMjAxOSAwMToyMyBhbSAtIFNTTiAtIEFkZCB0aW1lb3RcclxuICAgICAgICAvLyBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHNpdGVfaW5zdGFuY2Uuc2V0RGVmYXVsdHMoKTsgfSwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBFbmRcclxuICAgICAgICAvLyAwOS8xMC8yMDE5IDA4OjUzIHBtIC0gU1NOIC0gUmVwbGFjZWRcclxuICAgICAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcignMjAyMDAxMDItMTUzNC0yJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAwOC8zMS8yMDIwIDA0OjMyIGFtIC0gU1NOIC0gWzIwMjAwODMxLTA0MTddIC0gWzAwM10gLSBEaXNhYmxlIGNvbGxhcHNhYmxlIGRpdnMgd2l0aCBubyBjb250ZW50XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNpdGVfaW5zdGFuY2UuZGlzYWJsZUVtcHR5Q29sbGFwc2FibGVEaXZzKCksIDEwMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICwgMjAwMCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcbmxldCBkMiA9IG5ldyBEYXRlKCk7XHJcbnNpdGVfaW5zdGFuY2VfTlMuc2l0ZV9DbGFzcy5sb2FkQ291bnRlcisrO1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjM3IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwM10gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MzYxNDY1L2hvdy10by1jaGVjay1pZi1jbGljay1ldmVudC1pcy1hbHJlYWR5LWJvdW5kLWpxdWVyeVxyXG4kLmZuLmlzQm91bmQgPSBmdW5jdGlvbiAodHlwZSwgZm4pIHtcclxuXHJcblxyXG4gICAgaWYgKCF0aGlzLmRhdGEoJ2V2ZW50cycpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhKCdldmVudHMnKVt0eXBlXTtcclxuXHJcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoLTEgIT09ICQuaW5BcnJheShmbiwgZGF0YSkpO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyAxMS8yNS8yMDE5IDAyOjI5IHBtIC0gU1NOIC0gWzIwMTkxMTI1LTE0MTRdIC0gWzAwMl0gLSBQcm9qZWN0IGpvYnMgLSBmaWx0ZXIgXHJcblxyXG5cclxuZnVuY3Rpb24gSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlLnRzIDIwMjAwMTAyLTE1MzEgLSBqb2JfVGltZWxvZ19zZXRGaWx0ZXIgJyk7XHJcblxyXG5cclxuICAgIGlmICgkKFwiI2ZpbHRlclRleHRcIikuaXNCb3VuZCgna2V5dXAnLCBKb2JfVGltZWxvZ19zZXRGaWx0ZXIpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBbHJlYWR5IGJvdW5kXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAkKFwiI2ZpbHRlclRleHRcIikub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3Byb2plY3Rfam9icyAtIGZpdGxlclRleHQgLSBLZXlVcCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKChlKSk7XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdzaXRlIC0gcHJvamVjdF9qb2JzIC0gZmlsdGVyIC0gMiAtIHNldHVwJyk7XHJcblxyXG4gICAgSm9iX1RpbWVsb2dfc2V0RmlsdGVyKCk7XHJcblxyXG59KTtcclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gYW5ndWxhcjsiXSwic291cmNlUm9vdCI6IiJ9