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

/***/ "./DemoSites_Pages.ts":
/*!****************************!*\
  !*** ./DemoSites_Pages.ts ***!
  \****************************/
/*! exports provided: DemoSites_Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSites_Pages", function() { return DemoSites_Pages; });
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/ChangeMonitor/ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.ts");
// 11/18/2019 01:12 pm - SSN - [20191118-1316] Renamed from DevSite_Pages.js to DemoSites_Pages.ts (TypeScript)
//03/28/2019 08:59 am - SSN - Moved out of edit.cshtml
 // Knockout related
// 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
//$(function () {

var DemoSites_Pages = function () {
  // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
  // Added
  var doSetup = function doSetup() {
    var ViewModel = function ViewModel() {
      this.saveAndStay = function (itemToDelete) {
        var data101 = $('#devSiteForm').serializeArray();
        var ndx = 0; // 11/18/2019 01:16 pm - SSN - [20191118-1316] - Added interface
        // var o5 = new Object();

        var o5 = {};

        for (ndx = 0; ndx < data101.length; ndx++) {
          var _name = data101[ndx].name.replace('DevSite.', '');

          if (data101[ndx].name.indexOf("DevSite.") > -1) {
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
          url: "/api/DevSites_Testing/" + id_local,
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
          error: function error(response) {
            if (response.responseText !== null && response.responseText.length > 0) {
              $("#devSiteSaveStatus").html("System error! Record not saved.<br/>" + response.responseText);
              $("#devSiteSaveStatus").addClass('text-warning');
              $("#devSiteSaveStatus").css({
                'background-color': 'yellow'
              });
              console.error("Error-20190328-0704");
              console.log(response.responseText);
              console.error('Todo');
            }
          }
        });
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

/***/ 0:
/*!**********************************!*\
  !*** multi ./DemoSites_Pages.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./DemoSites_Pages.ts */"./DemoSites_Pages.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL0RlbW9TaXRlc19QYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUNILEtBcEJjO1NBdUJmLGFBQWdCLFlBQWhCLEVBQXFDO0FBRWpDLFlBQU0sQ0FBQyxvQkFBRCxDQUFOLEdBQStCLFlBQS9CO0FBRUEsYUFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE4QyxZQUE5QztBQUVILEtBN0JjO29CQUFBOztBQUFBLEdBQWY7QUFpQ0o7QUFBQyxDQXJDRDs7QUF3Q0EsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVCQUFKLEVBQXhCIiwiZmlsZSI6ImJ1bmRsZV9EZW1vU2l0ZXNfUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcclxuLy8gMTEvMTgvMjAxOSAwMToxMiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSBSZW5hbWVkIGZyb20gRGV2U2l0ZV9QYWdlcy5qcyB0byBEZW1vU2l0ZXNfUGFnZXMudHMgKFR5cGVTY3JpcHQpXHJcblxyXG5cclxuLy8wMy8yOC8yMDE5IDA4OjU5IGFtIC0gU1NOIC0gTW92ZWQgb3V0IG9mIGVkaXQuY3NodG1sXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAxOjE1IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIC0gQWRkZWQgaW50ZXJmYWNlXHJcbmludGVyZmFjZSBEZXZTaXRlUmVjb3JkIHtcclxuXHJcbiAgICBJZD86IG51bWJlclxyXG59XHJcblxyXG5cclxuLy8gS25vY2tvdXQgcmVsYXRlZFxyXG5cclxuXHJcbi8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuXHJcbi8vJChmdW5jdGlvbiAoKSB7XHJcbmxldCBEZW1vU2l0ZXNfUGFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICAvLyBBZGRlZFxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhdmVBbmRTdGF5ID0gZnVuY3Rpb24gKGl0ZW1Ub0RlbGV0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YTEwMSA9ICQoJyNkZXZTaXRlRm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5keCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTgvMjAxOSAwMToxNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAtIEFkZGVkIGludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIG81ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG81OiBEZXZTaXRlUmVjb3JkID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChuZHggPSAwOyBuZHggPCBkYXRhMTAxLmxlbmd0aDsgbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX25hbWUgPSBkYXRhMTAxW25keF0ubmFtZS5yZXBsYWNlKCdEZXZTaXRlLicsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGExMDFbbmR4XS5uYW1lLmluZGV4T2YoXCJEZXZTaXRlLlwiKSA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtdmMgY3JlYXRlcyBhIGhpZGRlbiBmaWVsZCBmb3IgY2hlY2tib3hlcy4gSWYgdGhlIHZpc2libGUgb25lIGlzIHNldCB0byB0cnVlLCB3ZSBpZ25vcmUgdGhlIGhpZGRlbiBvbmUgdGhhdCBpcyBzZXQgdG8gZmFsc2UuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW81W19uYW1lXSB8fCAobzVbX25hbWVdICYmIG81W19uYW1lXS52YWx1ZSA9PT0gXCJ0dXJlXCIgJiYgZGF0YTEwMVtuZHhdLnZhbHVlICE9PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvNVtfbmFtZV0gPSBkYXRhMTAxW25keF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWRfbG9jYWwgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBcIlBvc3RcIjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobzUuSWQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gXCJQdXRcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZF9sb2NhbCA9IG81LklkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmZhZGVJbignc2xvdycpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5yZW1vdmVDbGFzcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogbWV0aG9kLFxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogXCIvYXBpL0RldlNpdGVzX1Rlc3RpbmcvXCIgKyBpZF9sb2NhbCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShvNSksXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwOS8yMS8yMDE5IDEyOjEzIHBtIC0gU1NOIC0gVXBkYXRlIHJvd1ZlcnNpb25cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuaHRtbChcIlJlY29yZCBzYXZlZC5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuYWRkQ2xhc3MoJ3RleHQtc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI0RldlNpdGVfUm93VmVyc2lvblwiKS52YWwocmVzcG9uc2Uucm93VmVyc2lvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMS8xOC8yMDE5IDAxOjA4IHBtIC0gU1NOIC0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZU1vbml0b3JGbGFnLmhhdmVDaGFuZ2VzID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5mYWRlT3V0KCdzbG93JykgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCAhPT0gbnVsbCAmJiByZXNwb25zZS5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5odG1sKFwiU3lzdGVtIGVycm9yISBSZWNvcmQgbm90IHNhdmVkLjxici8+XCIgKyByZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5hZGRDbGFzcygndGV4dC13YXJuaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmNzcyh7ICdiYWNrZ3JvdW5kLWNvbG9yJzogJ3llbGxvdycgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvci0yMDE5MDMyOC0wNzA0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2bSA9IG5ldyBWaWV3TW9kZWwoKTtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHZtKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuICAgIC8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuICAgIC8vfSk7XHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IERlbW9TaXRlc19QYWdlcyB9O1xyXG5cclxuRGVtb1NpdGVzX1BhZ2VzLmRvU2V0dXAoKTtcclxuXHJcbiIsIlxyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW4ge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXM6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJywgX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9