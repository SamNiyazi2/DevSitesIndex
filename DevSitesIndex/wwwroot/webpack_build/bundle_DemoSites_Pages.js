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

/***/ "./DemoSites_Pages.ts":
/*!****************************!*\
  !*** ./DemoSites_Pages.ts ***!
  \****************************/
/*! exports provided: DemoSites_Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoSites_Pages", function() { return DemoSites_Pages; });
/* harmony import */ var _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/ChangeMonitorFlag */ "./Util/ChangeMonitorFlag.js");
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

        console.log(o5);
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
            console.log('20190328-1722-010-C'); // 09/21/2019 12:13 pm - SSN - Update rowVersion

            $("#devSiteSaveStatus").html("Record saved.");
            $("#devSiteSaveStatus").addClass('text-success');
            $("#DevSite_RowVersion").val(response.rowVersion); // 11/18/2019 01:08 pm - SSN - 

            _Util_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__["ChangeMonitorFlag"].haveChanges = false;
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
              console.log("Error-20190328-0704");
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

/***/ 0:
/*!**********************************!*\
  !*** multi ./DemoSites_Pages.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./DemoSites_Pages.ts */"./DemoSites_Pages.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EZW1vU2l0ZXNfUGFnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsd0JBQXdCLDJFQUEyRSxvQ0FBb0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLG9DQUFvQyw4SEFBOEgsR0FBRyxFQUFFLHNCQUFzQjs7QUFFblc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCOzs7Ozs7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LFlBQU0sQ0FBQyxvQkFBRCxDQUFOLEdBQStCLFlBQS9CO0FBRUEsYUFBTyxDQUFDLEdBQVIsQ0FBWSxnQ0FBWixFQUE2QyxZQUE3QztBQUVILEtBMUJjO29CQUFBOztBQUFBLEdBQWY7QUE4Qko7QUFBQyxDQWxDRDs7QUFxQ0EsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLHVCQUFKLEVBQXhCIiwiZmlsZSI6ImJ1bmRsZV9EZW1vU2l0ZXNfUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJcclxuLy8gMTEvMTgvMjAxOSAwMToxMiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSBSZW5hbWVkIGZyb20gRGV2U2l0ZV9QYWdlcy5qcyB0byBEZW1vU2l0ZXNfUGFnZXMudHMgKFR5cGVTY3JpcHQpXHJcblxyXG5cclxuLy8wMy8yOC8yMDE5IDA4OjU5IGFtIC0gU1NOIC0gTW92ZWQgb3V0IG9mIGVkaXQuY3NodG1sXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vVXRpbC9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMToxNSBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAtIEFkZGVkIGludGVyZmFjZVxyXG5pbnRlcmZhY2UgRGV2U2l0ZVJlY29yZCB7XHJcblxyXG4gICAgSWQ/OiBudW1iZXJcclxufVxyXG5cclxuXHJcbi8vIEtub2Nrb3V0IHJlbGF0ZWRcclxuXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcblxyXG4vLyQoZnVuY3Rpb24gKCkge1xyXG5sZXQgRGVtb1NpdGVzX1BhZ2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgLy8gQWRkZWRcclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIFZpZXdNb2RlbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zYXZlQW5kU3RheSA9IGZ1bmN0aW9uIChpdGVtVG9EZWxldGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGExMDEgPSAkKCcjZGV2U2l0ZUZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZHggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzE4LzIwMTkgMDE6MTYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gLSBBZGRlZCBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIC8vIHZhciBvNSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvNTogRGV2U2l0ZVJlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobmR4ID0gMDsgbmR4IDwgZGF0YTEwMS5sZW5ndGg7IG5keCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9uYW1lID0gZGF0YTEwMVtuZHhdLm5hbWUucmVwbGFjZSgnRGV2U2l0ZS4nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMTAxW25keF0ubmFtZS5pbmRleE9mKFwiRGV2U2l0ZS5cIikgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXZjIGNyZWF0ZXMgYSBoaWRkZW4gZmllbGQgZm9yIGNoZWNrYm94ZXMuIElmIHRoZSB2aXNpYmxlIG9uZSBpcyBzZXQgdG8gdHJ1ZSwgd2UgaWdub3JlIHRoZSBoaWRkZW4gb25lIHRoYXQgaXMgc2V0IHRvIGZhbHNlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvNVtfbmFtZV0gfHwgKG81W19uYW1lXSAmJiBvNVtfbmFtZV0udmFsdWUgPT09IFwidHVyZVwiICYmIGRhdGExMDFbbmR4XS52YWx1ZSAhPT0gXCJmYWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbzVbX25hbWVdID0gZGF0YTEwMVtuZHhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobzUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZF9sb2NhbCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFwiUG9zdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvNS5JZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBcIlB1dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkX2xvY2FsID0gbzUuSWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLnJlbW92ZUNsYXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvRGV2U2l0ZXNfVGVzdGluZy9cIiArIGlkX2xvY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG81KSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyMDE5MDMyOC0xNzIyLTAxMC1DJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MTMgcG0gLSBTU04gLSBVcGRhdGUgcm93VmVyc2lvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5odG1sKFwiUmVjb3JkIHNhdmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5hZGRDbGFzcygndGV4dC1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjRGV2U2l0ZV9Sb3dWZXJzaW9uXCIpLnZhbChyZXNwb25zZS5yb3dWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE4LzIwMTkgMDE6MDggcG0gLSBTU04gLSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmZhZGVPdXQoJ3Nsb3cnKSB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0ICE9PSBudWxsICYmIHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmh0bWwoXCJTeXN0ZW0gZXJyb3IhIFJlY29yZCBub3Qgc2F2ZWQuPGJyLz5cIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmFkZENsYXNzKCd0ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuY3NzKHsgJ2JhY2tncm91bmQtY29sb3InOiAneWVsbG93JyB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvci0yMDE5MDMyOC0wNzA0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RvZG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciB2bSA9IG5ldyBWaWV3TW9kZWwoKTtcclxuICAgICAgICBrby5hcHBseUJpbmRpbmdzKHZtKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZG9TZXR1cDogZG9TZXR1cFxyXG4gICAgfVxyXG5cclxuICAgIC8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuICAgIC8vfSk7XHJcbn0oKTtcclxuXHJcbmV4cG9ydCB7IERlbW9TaXRlc19QYWdlcyB9O1xyXG5cclxuRGVtb1NpdGVzX1BhZ2VzLmRvU2V0dXAoKTtcclxuXHJcbiIsIu+7v1xyXG4vLyAxMS8xOC8yMDE5IDAzOjE4IHBtIC0gU1NOIC0gTW92ZWQgZnJvbSBDaGFuZ2VNb25pdG9yLnRzXHJcblxyXG5cclxuY2xhc3MgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3Mge1xyXG5cclxuXHJcblxyXG4gICAgZ2V0IGhhdmVDaGFuZ2VzKCk6IGJvb2xlYW57XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIGdldHRlciAnKTtcclxuXHJcbiAgICAgICAgbGV0IF9oYXZlQ2hhbmdlcyA9IHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidHlwZW9mIChfaGF2ZUNoYW5nZXMpIFwiLCB0eXBlb2YgKF9oYXZlQ2hhbmdlcykgKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKF9oYXZlQ2hhbmdlcykgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgX2hhdmVDaGFuZ2VzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnX2hhdmVDaGFuZ2VzIDogWycsIF9oYXZlQ2hhbmdlcywgJ10nKTtcclxuICAgICAgICByZXR1cm4gX2hhdmVDaGFuZ2VzIDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2V0IGhhdmVDaGFuZ2VzKF9oYXZlQ2hhbmdlcyAgOiBib29sZWFuKSB7XHJcblxyXG4gICAgICAgIHdpbmRvd1tcImhhdmVDaGFuZ2VzX0dMT0JBTFwiXSA9IF9oYXZlQ2hhbmdlcztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gc2V0dGVyICcsX2hhdmVDaGFuZ2VzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5sZXQgQ2hhbmdlTW9uaXRvckZsYWcgPSBuZXcgQ2hhbmdlTW9uaXRvckZsYWdfY2xhc3MoKTtcclxuXHJcbmV4cG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9