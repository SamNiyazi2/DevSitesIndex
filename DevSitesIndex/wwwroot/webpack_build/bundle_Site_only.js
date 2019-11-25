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

/***/ "./CodeReference_Pages.ts":
/*!********************************!*\
  !*** ./CodeReference_Pages.ts ***!
  \********************************/
/*! exports provided: CodeReference_Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeReference_Page", function() { return CodeReference_Page; });
// 11/08/2019 04:41 pm - SSN -
// Convert to TypeScript
// import * as x111 from '../js/site';
var CodeReference_Page;

(function (CodeReference_Page) {
  var doSetup = function doSetup() {
    $(function () {
      $('[doRefreshForm]').on('click', function (e) {
        // 03/27/2019 01:01 pm - SSN - Revise handling of clearing search.
        var doRefreshForm_temp = $(this).attr("doRefreshForm");

        if (doRefreshForm_temp === "0") {
          $("#SearchText").val("");
        }

        $("#submitSearchCodeRef").click();
      });
    });
    $(window).scroll(function () {
      //  $("#SearchText").val( '"' + $(document).height() + "-" + $(window).height() + "-" + $(window).scrollTop() + '"' );
      if ($(document).height() > $(window).height()) {
        if ($(window).scrollTop() > 100) {
          $(".searchOption ").addClass("fixed_101");
        } else {
          $(".searchOption ").removeClass("fixed_101");
        }
      }
    }); // 02/09/2019 11:33 am - SSN - ALT key are hot access keys
    // 04/05/2019 12:55 am - SSN - Could be causing a problem with copy. Deactivate.
    //$(window).keydown(function (e) {
    //    var code = e.which || e.keyCode;
    //    if ([16, 17, 18, 27, 116].find(e2 => e2 == code)) {
    //        return;
    //    }
    //    if (e.ctrlKey || e.altKey) {
    //        return false;
    //    }
    //});
  };

  $(function () {
    console.log('CodeReference_Pages running doSetup');
    doSetup();
  });
})(CodeReference_Page || (CodeReference_Page = {}));

console.log('CodeReference_Pages - top ');
console.log(Date());


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
console.log(d2);

/***/ }),

/***/ "./util/ChangeMonitor.ts":
/*!*******************************!*\
  !*** ./util/ChangeMonitor.ts ***!
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
    }

    if (!obj1.id && !obj1.name) return true;
    if (obj1.id.toLowerCase().indexOf('search') > -1) return true;
    if (obj1.name.toLowerCase().indexOf('search') > -1) return true;
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

/***/ 0:
/*!************************************************************************!*\
  !*** multi ./site.ts ./CodeReference_Pages.ts ./util/ChangeMonitor.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./site.ts */"./site.ts");
__webpack_require__(/*! ./CodeReference_Pages.ts */"./CodeReference_Pages.ts");
module.exports = __webpack_require__(/*! ./util/ChangeMonitor.ts */"./util/ChangeMonitor.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9Db2RlUmVmZXJlbmNlX1BhZ2VzLnRzIiwid2VicGFjazovLy8uL1V0aWwvQ2hhbmdlTW9uaXRvckZsYWcudHMiLCJ3ZWJwYWNrOi8vLy4vc2l0ZS50cyIsIndlYnBhY2s6Ly8vLi91dGlsL0NoYW5nZU1vbml0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtB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aUIsRUFBRSxpQkFKaEI7QUFLSCxzQkFBa0IsRUFBRSxrQkFMakI7QUFNSCxpQ0FBNkIsRUFBRSw2QkFONUI7QUFPSCw0QkFBd0IsRUFBRTtBQVB2QixHQUFQO0FBVUgsQ0EzS3dCLEVBQXpCOztBQWdMQSxDQUFDLENBQUM7QUFFRSxvQkFBa0IsQ0FBQyx3QkFBbkI7QUFFSCxDQUpBLENBQUQ7QUFPQSxPQUFPLENBQUMsR0FBUixDQUFZLGlDQUFaIiwiZmlsZSI6ImJ1bmRsZV9TaXRlX29ubHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcclxuLy8gMTEvMDgvMjAxOSAwNDo0MSBwbSAtIFNTTiAtXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG5cclxuLy8gaW1wb3J0ICogYXMgeDExMSBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcblxyXG5cclxubW9kdWxlIENvZGVSZWZlcmVuY2VfUGFnZSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnW2RvUmVmcmVzaEZvcm1dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwMy8yNy8yMDE5IDAxOjAxIHBtIC0gU1NOIC0gUmV2aXNlIGhhbmRsaW5nIG9mIGNsZWFyaW5nIHNlYXJjaC5cclxuICAgICAgICAgICAgICAgIHZhciBkb1JlZnJlc2hGb3JtX3RlbXAgPSAkKHRoaXMpLmF0dHIoXCJkb1JlZnJlc2hGb3JtXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvUmVmcmVzaEZvcm1fdGVtcCA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI1NlYXJjaFRleHRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjc3VibWl0U2VhcmNoQ29kZVJlZlwiKS5jbGljaygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICQoXCIjU2VhcmNoVGV4dFwiKS52YWwoICdcIicgKyAkKGRvY3VtZW50KS5oZWlnaHQoKSArIFwiLVwiICsgJCh3aW5kb3cpLmhlaWdodCgpICsgXCItXCIgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAnXCInICk7XHJcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuc2VhcmNoT3B0aW9uIFwiKS5hZGRDbGFzcyhcImZpeGVkXzEwMVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWFyY2hPcHRpb24gXCIpLnJlbW92ZUNsYXNzKFwiZml4ZWRfMTAxXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDIvMDkvMjAxOSAxMTozMyBhbSAtIFNTTiAtIEFMVCBrZXkgYXJlIGhvdCBhY2Nlc3Mga2V5c1xyXG4gICAgICAgIC8vIDA0LzA1LzIwMTkgMTI6NTUgYW0gLSBTU04gLSBDb3VsZCBiZSBjYXVzaW5nIGEgcHJvYmxlbSB3aXRoIGNvcHkuIERlYWN0aXZhdGUuXHJcblxyXG4gICAgICAgIC8vJCh3aW5kb3cpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgLy8gICAgdmFyIGNvZGUgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgLy8gICAgaWYgKFsxNiwgMTcsIDE4LCAyNywgMTE2XS5maW5kKGUyID0+IGUyID09IGNvZGUpKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIGlmIChlLmN0cmxLZXkgfHwgZS5hbHRLZXkpIHtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvZGVSZWZlcmVuY2VfUGFnZXMgcnVubmluZyBkb1NldHVwJyk7XHJcblxyXG4gICAgICAgIGRvU2V0dXAoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKCdDb2RlUmVmZXJlbmNlX1BhZ2VzIC0gdG9wICcpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKERhdGUoKSk7XHJcblxyXG5cclxuZXhwb3J0IHsgQ29kZVJlZmVyZW5jZV9QYWdlIH07XHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIGdldHRlciAnKTtcclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykgKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKF9oYXZlQ2hhbmdlcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgX2hhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnX2hhdmVDaGFuZ2VzIDogWycsIF9oYXZlQ2hhbmdlcywgJ10nKTtcclxuICAgICAgICByZXR1cm4gX2hhdmVDaGFuZ2VzIDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlcyAgOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXSA9IF9oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gc2V0dGVyICcsX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iLCJcclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5sZXQgZDEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuY29uc29sZS5sb2coJ3NpdGUgLSAyMDE5MTExNS0xNzQwIC0gQUFBQSAnLCBkMSk7XHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuXHJcblxyXG4vLyB2YXIgc2l0ZV9pbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxubmFtZXNwYWNlIHNpdGVfaW5zdGFuY2VfTlMge1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBzaXRlX0NsYXNzIHtcclxuXHJcbiAgICAgICAgc3RhdGljIGxvYWRDb3VudGVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgICAgIHNldERlZmF1bHRzKCkge1xyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBwb3B1cE5hbWUgPSAkKHRoaXMpLmF0dHIoJ3BvcHVwLW5hbWUnKTtcclxuICAgICAgICAgICAgICAgIHZhciBqUXVlcnlPYmplY3ROYW1lID0gJCh0aGlzKS5hdHRyKCdqUXVlcnlPYmplY3ROYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gICAgICBhbGVydCgnY2xpY2tlZCBtZSEgY21kTmFtZSBbJyArIGNtZE5hbWUgKyBcIl0gcG9wdXAtbmFtZSAgW1wiICsgcG9wdXBOYW1lICsgXCJdXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbWQtbmFtZScsIGNtZE5hbWUsICdwb3B1cE5hbWUnLCBwb3B1cE5hbWUsICdqUXVlcnlPYmplY3ROYW1lICcsIGpRdWVyeU9iamVjdE5hbWUsICdqUXVlcnlPYmplY3ROYW1lMicsIGpRdWVyeU9iamVjdE5hbWUyKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2V4ZWMgY21kTmFtZSAnLCBjbWROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwb3B1cE5hbWUpLm1vZGFsKHsgYmFja2Ryb3A6ICdzdGF0aWMnLCBrZXlib2FyZDogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMDk6MzMgYW0gLSBTU04gLSBBZGRpbmcgaGlkZSBhbmQgc2hvd1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdleGVjIGNtZE5hbWUgJywgY21kTmFtZSwgJ2pRdWVyeU9iamVjdE5hbWUnLCBqUXVlcnlPYmplY3ROYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dPYmplY3RcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXhlYyBjbWROYW1lICcsIGNtZE5hbWUsICdqUXVlcnlPYmplY3ROYW1lJywgalF1ZXJ5T2JqZWN0TmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzbW9vdGgtc2Nyb2xsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyQoJ2JvZHknKS5zY3JvbGxzcHkoeyB0YXJnZXQ6IGpRdWVyeU9iamVjdE5hbWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAwNC8wOC8yMDE5IDAxOjMzIGFtIC0gU1NOIC0gWzIwMTkwNDA3LTIzNDVdIC0gVGltZUxvZ1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1kZWZhdWx0LXRpbWVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjZCA9IGQuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgcChkLmdldE1vbnRoKCkgKyAxLCAyLCAnMCcpICsgXCItXCIgKyBwKGQuZ2V0RGF0ZSgpLCAyLCAnMCcpICsgXCJUXCIgKyBwKGQuZ2V0SG91cnMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldE1pbnV0ZXMoKSwgMiwgJzAnKSArIFwiOlwiICsgcChkLmdldFNlY29uZHMoKSwgMiwgJzAnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS52YWwoY2QpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDQvMTkvMjAxOSAwNDo0OCBwbSAtIFNTTiAtIFsyMDE5MDQxOS0xNjQ3XSAtIFNldCBhbW91bnQgZm9yIFRvdGFsU2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNldC1Ub3RhbFBlcmlvZFwiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNS8yMDIwMTkgMDI6MzkgcG0gLSBTU04gLSBObyBjYWxjdWxhdGluZyBlbGFwc2VkIHRpbWUgY29ycmVjdGx5IHdpdGggVHlwZVNjcmlwdCBjb252ZXJzaW9uLlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQxMiA9IG5ldyBEYXRlKHNlbGVjdGVkRGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZDExLmdldFRpbWUoKS52YWx1ZU9mKCkgLSBkMTIuZ2V0VGltZSgpLnZhbHVlT2YoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lMikudmFsKGRlbHRhXzIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxuICAgICAgICAgICAgLy8gZnVuY3Rpb24gcChzdHIxLCBsZW4sIGNoYXIpIHtcclxuICAgICAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IHN0cjEudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuKSByZXR1cm4gc3RyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgICAgIHZhciBzMiA9IHMxLnN1YnN0cmluZyhsZW4gKyAoc3RyLmxlbmd0aCAtIGxlbikpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDAzLzE0LzIwMTkgMTA6MjggYW0gLSBTU05cclxuXHJcbiAgICAgICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnLmZpeGVkX2FuY2hvcicpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcuZml4ZWRfYW5jaG9yJykuZmFkZU91dCgnc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzAyLzIwMTkgMDc6MjUgcG0gLSBTU04gLSBbMjAxOTExMDEtMDUyNl0gLSBbMDEzXSAtIENoZWNrIGxvZ2luIHN0YXR1c1xyXG4gICAgICAgICAgICAvLyBEaWQgbm90IGZpbmlzaC5cclxuICAgICAgICAgICAgLy8gVG9kby1TU05cclxuICAgICAgICAgICAgJCgnLm1vZGFsJykub24oJ3Nob3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2l0ZS50cyAgLSAgMjAxOTExMDItMTkzMCAtIFNldHRpbmcgZHJhZ2dhYmxlLicpXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRyYWdnYWJsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiBcIi5tb2RhbC1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA4LzIxLzIwMTkgMDE6NDggcG0gXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgICAgICBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuXHJcbiAgICAgICAgICAgICQoXCJbZGF0YS10b2dnbGU9J2NvbGxhcHNlJ11cIikudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoyNyBwbSAtIFNTTiAtIFsyMDE5MDktMTIyN10gUmV2aXNlIHRvIGFjY29tbW9kYXRlIEJhYmVsL1dlYnBhY2tcclxuICAgICAgICAvLyBmdW5jdGlvbiBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKSB7XHJcbiAgICAgICAgcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuXHJcbiAgICAgICAgICAgICQoJ3ByZScpLmVhY2goZnVuY3Rpb24gKGFhKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlQXR0cmliID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKFwidGl0bGVcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUF0dHJpYiA9IFwiIHRpdGxlPSdcIiArIF90aXRsZSArIFwiJyBcIlxyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKCc8cD48YSBjbWQtbmFtZT1cInNob3dzaWJsaW5nXCIgJyArIHRpdGxlQXR0cmliICsgJyA+U2hvdyBjb2RlJyArIF90aXRsZV9jYXB0aW9uICsgJzwvYT48L3A+JykuaW5zZXJ0QmVmb3JlKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMTEvMjQvMjAxOSAxMToyMCBwbSAtIFNTTiAtIERpc2FibGVcclxuICAgICAgICAgICAgaWYgKGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDUvMDEvMjAxOSAwNDo1MiBhbSAtIFNTTiAtIFVzZSBKYXZhU2NyaXB0IG9ubHlcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDEyOjMwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwNF0gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKHZhciBhIG9mIGxpc3QxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50SXRlbSwgY3VycmVudEluZGV4LCBsaXN0T2JqKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChhLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMDUvMTcvMjAxOSAwNDoxNiBhbSAtIFNTTiAtIFVwZGF0ZSB0byBleGNsdWRlIGhpZ2hsaWdodGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88L2csICcmbHQ7Jyk7ICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIDxoIGFuZCA8bi4gQWxyZWFkeSBzZXR1cCBmb3IgPGkuICBTZWUgc2l0ZS5jc3MuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAwNi8wNy8yMDE5IDExOjUwIGFtIC0gU1NOIC0gVXBkYXRlIC0gTWF0Y2hlcyBzaG93biBodHRwczovL3d3dy5yZWdleHRlc3Rlci5jb20vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC88KFteaXxeL2l8Xmh8Xi9ofF5ufF4vbl0pezF9W15cXHN8Xj5dezF9L2csICcmbHQ7JDEnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnXFxuMS0tLVxcblskJl1cXG4yLS0tXFxuWyQxXVxcbjMtLS1cXG5bJDJdXFxuNC0tLVxcblskM11cXG5cXG4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBub3QgY292ZXJyZWQgaDEsIGgyLCBldGMuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8ga25vY2tvdXQgaXMgZG9pbmcgaXRzIG93biB0aGluZyB3aGVuIGl0IGNvbWVzIHRvIHRhZ3MuIEV2aWRlbnQgd2l0aCB0aGUgdXNlIG9mIGdlbmVyaWMgdHlwZXMgKCBmdW5jdGlvbjxTb21lVHlwZT4gKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJyZsdDskMycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYS5pbm5lckhUTUwgPSBiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8yNi8yMDE5IDEwOjE0IHBtIC0gU1NOIC0gWzIwMTkwNDI2LTIxNTZdIC0gWzAwMl0gLSBIaWRlIHByZSBhbmQgYWRkIGEgbGluayB0byBzaG93LlxyXG5cclxuICAgICAgICAgICAgJChcIltjbWQtbmFtZV1cIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93c2libGluZ1wiKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ByZSA9ICQodGhpcykucGFyZW50KCkubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDA2LzAxLzIwMTkgMDg6MDcgcG0gLSBTU04gLSBbMjAxOTA2MDEtMjAwN10gLSBBZGQgdGl0bGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3RpdGxlID0gJCh0aGlzKS5hdHRyKCd0aXRsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGl0bGUgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RpdGxlX2NhcHRpb24gPSBcIjogXCIgKyBfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ByZS5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ1Nob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZUluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDExLzA4LzIwMTkgMDE6MDQgcG0gLSBTU04gLSBbMjAxOTExMDgtMTA0M10gLSBbMDA4XSAtIFBlcnNpc3Rpbmcgc2VhcmNoIG9uIHJldHVybiB0byBpbmRleFxyXG4gICAgICAgICAgICAvLyBcclxuXHJcblxyXG4gICAgICAgICAgICAkKCdbc3NuLWNtZD1yZXR1cm5Ub0NhbGxlckxpbmtdJykuY2xpY2soKGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXR1cm5Ub0NhbGxlcktleSA9ICQoXCIjcmV0dXJuVG9DYWxsZXJLZXlcIikudmFsKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9ICg8SFRNTEFuY2hvckVsZW1lbnQ+ZS50YXJnZXQpLmhyZWYgKyBcIiZyZXR1cm5Ub0NhbGxlcktleT1cIiArIHJldHVyblRvQ2FsbGVyS2V5O1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAwNC8yOS8yMDE5IDA3OjM2IHBtIC0gU1NOIC0gWzIwMTkwNDI5LTE3NDhdIC0gWzAwNl0gLSBBbmd1bGFyIGNsb2NrIG91dCBwb3B1cCAgLSBCZWdpblxyXG5cclxuICAgICAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgICAgICBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICAgICAgZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGlucHV0ICE9PSBcIm9iamVjdFwiKSByZXR1cm4gaW5wdXQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5wdXQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0W2tleV07XHJcbiAgICAgICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiAobWF0Y2ggPSB2YWx1ZS5tYXRjaCh0aGlzLmlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRba2V5XSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyAgICBzZXREZWZhdWx0cygpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gRW5kXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAgICAgLy8gICAgLy8gMDkvMTEvMjAxOSAwNzowOCBhbSAtIFNTTiAtIERldlNpdGVJbmRleCBwMSBkYXRhIGlzIGNvbWluZyBhZnRlciBkb2N1bWVudCBpcyByZWFkeS5cclxuICAgICAgICAvLyAgICBzZXRUaW1lb3V0KHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcblxyXG5cclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHtcclxuXHJcbiAgICAgICAgLy8gICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgLy8gICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIC8vICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcblxyXG5cclxuICAgICAgICAvL307XHJcblxyXG4gICAgICAgIC8vfSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLy9leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG5cclxubGV0IHNpdGVfaW5zdGFuY2UgPSBuZXcgc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzKCk7XHJcbmV4cG9ydCB7IHNpdGVfaW5zdGFuY2UgfTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBzaXRlX2luc3RhbmNlLnNldERlZmF1bHRzKCk7XHJcblxyXG5cclxuICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgLy8gMDkvMTAvMjAxOSAwODo1MyBwbSAtIFNTTiAtIFJlcGxhY2VkXHJcbiAgICAvLyAwOS8xMS8yMDE5IDA3OjA4IGFtIC0gU1NOIC0gRGV2U2l0ZUluZGV4IHAxIGRhdGEgaXMgY29taW5nIGFmdGVyIGRvY3VtZW50IGlzIHJlYWR5LlxyXG4gICAgc2V0VGltZW91dChzaXRlX2luc3RhbmNlLnByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciwgMjAwMCk7XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxubGV0IGQyID0gbmV3IERhdGUoKTtcclxuc2l0ZV9pbnN0YW5jZV9OUy5zaXRlX0NsYXNzLmxvYWRDb3VudGVyKys7XHJcblxyXG5jb25zb2xlLmxvZygnc2l0ZSAtIDIwMTkxMTE1LTE3NDAgLSB4eHh4eHh4eHh4eCcpO1xyXG5jb25zb2xlLmxvZyhzaXRlX2luc3RhbmNlX05TLnNpdGVfQ2xhc3MubG9hZENvdW50ZXIpO1xyXG5jb25zb2xlLmxvZyhkMik7XHJcblxyXG5cclxuIiwiXHJcbi8vIDExLzA5LzIwMTkgMTE6MDMgYW0gLSBTU04gLSBDcmVhdGVkXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAyOjI2IHBtIC0gU1NOIC0gQ3JlYXRlIGNsYXNzIGZvciBoYXZlQ2hhbmdlc1xyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuLi9VdGlsL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcbnZhciBDaGFuZ2VNb25pdG9yX1V0aWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgdmFyIHNldEl0ZW1DaGFuZ2VkX3NzbiA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MSW5wdXRFbGVtZW50LCBldjogRXZlbnQpIHtcclxuXHJcbiAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc24gPSBmdW5jdGlvbiAodGhpczogSFRNTElucHV0RWxlbWVudCwgZXY6IEV2ZW50KSB7XHJcblxyXG4gICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDExLzA5LzIwMTkgMDg6MDggYW0gLSBTU04gLSBBZGRlZCBtb25pdG9yQ2hhbmdlX1NTTlxyXG4gICAgdmFyIG1vbml0b3JDaGFuZ2VfU1NOID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuXHJcbiAgICAgICAgaW5wdXRzLmZvckVhY2goKHgsIHksIHopID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICghYnlwYXNzT2JqZWN0KHpbeV0pKSB7XHJcbiAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIENoYW5nZU1vbml0b3JfVXRpbC5zZXRJdGVtQ2hhbmdlZF9zc24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoelt5XS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoelt5XS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IFwic3VibWl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB6W3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0ZXh0YXJlYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xyXG5cclxuICAgICAgICB0ZXh0YXJlYXMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdHMuZm9yRWFjaCgoeCwgeSwgeikgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFieXBhc3NPYmplY3Qoelt5XSkpIHtcclxuICAgICAgICAgICAgICAgIHpbeV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgQ2hhbmdlTW9uaXRvcl9VdGlsLnNldEl0ZW1DaGFuZ2VkX3Nzbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGJ5cGFzc09iamVjdCA9IGZ1bmN0aW9uIChvYmoxKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmIChvYmoxLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKG9iajEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJyB8fCBvYmoxLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3N1Ym1pdCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFvYmoxLmlkICYmICFvYmoxLm5hbWUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5pZC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ3NlYXJjaCcpID4gLTEpIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAob2JqMS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignc2VhcmNoJykgPiAtMSkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX3YwMSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3IgLSBzZXR1cE1vbml0b3InKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpc0Nocm9tZSA9IGdldEJyb3dzZXJOYW1lKCkgPT09ICdjaHJvbWUnO1xyXG5cclxuICAgICAgICBpZiAodHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpdGUgLSBiZWZvcmVVbmxvYWQgb24nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJZb3Ugd2lsbCBsb3NlIGFsbCBwZW5kaW5nIGNoYW5nZXMgaWYgeW91IGxlYXZlIHRoaXMgcGFnZVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9XZWJraXQsIFNhZmFyaSwgQ2hyb21lIGV0Yy5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIENhbm5vdCB1c2Ugd2l0aCBDaHJvbWVcclxuICAgICAgICAgICAgaWYgKCFpc0Nocm9tZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbmZpcm1hdGlvbk1lc3NhZ2UgPSBcIlxcby9cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGUgfHwgd2luZG93LmV2ZW50KS5yZXR1cm5WYWx1ZSA9IGNvbmZpcm1hdGlvbk1lc3NhZ2U7ICAgICAvL0dlY2tvICsgSUVcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoMikgWW91IHdpbGwgbG9zZSBhbGwgcGVuZGluZyBjaGFuZ2VzIGlmIHlvdSBsZWF2ZSB0aGlzIHBhZ2VcIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vV2Via2l0LCBTYWZhcmksIENocm9tZSBldGMuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8wNS8yMDE5MSAwNDo1MyBhbSAtIFNTTiBcclxuICAgIC8vIE5lZWQgdG8gcHJldmVudCB1c2VycyBmcm9tIG5hdmlnYXRpbmcgYXdheSBmcm9tIEFuZ3VsYXIgYmFzZWQgcGFnZXMgd2l0aCBwZW5kaW5nIGNoYW5nZXMuXHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80ODE4MjkxMi9ob3ctdG8tZGV0ZWN0LWJyb3dzZXItd2l0aC1hbmd1bGFyXHJcbiAgICB2YXIgZ2V0QnJvd3Nlck5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBhZ2VudC5pbmRleE9mKCdlZGdlJykgPiAtMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZWRnZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignb3ByJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykub3ByOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdvcGVyYSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSAmJiAhISg8YW55PndpbmRvdykuY2hyb21lOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaHJvbWUnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSA+IC0xOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdpZSc7XHJcbiAgICAgICAgICAgIGNhc2UgYWdlbnQuaW5kZXhPZignZmlyZWZveCcpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcmVmb3gnO1xyXG4gICAgICAgICAgICBjYXNlIGFnZW50LmluZGV4T2YoJ3NhZmFyaScpID4gLTE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhZmFyaSc7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ290aGVyJztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBOZWVkZWQgc28gd2UgY2FuIGNhbGwgZnJvbSBwb3B1cHMuXHJcbiAgICB2YXIgc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KG1vbml0b3JDaGFuZ2VfU1NOLCAyMDAwKTtcclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG5cclxuICAgICAgICBzZXR1cE1vbml0b3JfdjAxOiBzZXR1cE1vbml0b3JfdjAxLFxyXG4gICAgICAgIGdldEJyb3dzZXJOYW1lOiBnZXRCcm93c2VyTmFtZSxcclxuICAgICAgICBtb25pdG9yQ2hhbmdlX1NTTjogbW9uaXRvckNoYW5nZV9TU04sXHJcbiAgICAgICAgc2V0SXRlbUNoYW5nZWRfc3NuOiBzZXRJdGVtQ2hhbmdlZF9zc24sXHJcbiAgICAgICAgc2V0SXRlbVRvUmVzZXRDaGFuZ2VkRmxhZ19zc246IHNldEl0ZW1Ub1Jlc2V0Q2hhbmdlZEZsYWdfc3NuLFxyXG4gICAgICAgIHNldHVwTW9uaXRvcl9GdWxsUHJvY2Vzczogc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzXHJcbiAgICB9XHJcblxyXG59KCk7XHJcblxyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBDaGFuZ2VNb25pdG9yX1V0aWwuc2V0dXBNb25pdG9yX0Z1bGxQcm9jZXNzKCk7XHJcblxyXG59KTtcclxuXHJcblxyXG5jb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvciAtIDIwMTkxMTA5LTExMTQtRicpO1xyXG5cclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JfVXRpbCB9O1xyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=