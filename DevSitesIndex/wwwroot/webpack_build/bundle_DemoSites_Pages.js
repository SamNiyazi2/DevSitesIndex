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
/* harmony import */ var _Util_ChangeMonitor_ChangeMonitorFlag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util/ChangeMonitor/ChangeMonitorFlag */ "./Util/ChangeMonitor/ChangeMonitorFlag.js");
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
      console.log('ChangeMonitorFlag.ts - getter ');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9EZW1vU2l0ZXNfUGFnZXMudHMiLCJ3ZWJwYWNrOi8vLy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx3QkFBd0IsMkVBQTJFLG9DQUFvQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sb0NBQW9DLDhIQUE4SCxHQUFHLEVBQUUsc0JBQXNCOztBQUVuVztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LEVBQThDLEdBQTlDO0FBQ0EsYUFBTyxZQUFQO0FBQ0gsS0FyQmM7U0F3QmYsYUFBZ0IsWUFBaEIsRUFBdUM7QUFFbkMsWUFBTSxDQUFDLG9CQUFELENBQU4sR0FBK0IsWUFBL0I7QUFFQSxhQUFPLENBQUMsR0FBUixDQUFZLGdDQUFaLEVBQTZDLFlBQTdDO0FBRUgsS0E5QmM7b0JBQUE7O0FBQUEsR0FBZjtBQWtDSjtBQUFDLENBdENEOztBQXlDQSxJQUFJLGlCQUFpQixHQUFHLElBQUksdUJBQUosRUFBeEIiLCJmaWxlIjoiYnVuZGxlX0RlbW9TaXRlc19QYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mMihvYmopOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZjIoU3ltYm9sLml0ZXJhdG9yKSA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogX3R5cGVvZjIob2JqKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlxyXG4vLyAxMS8xOC8yMDE5IDAxOjEyIHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIFJlbmFtZWQgZnJvbSBEZXZTaXRlX1BhZ2VzLmpzIHRvIERlbW9TaXRlc19QYWdlcy50cyAoVHlwZVNjcmlwdClcclxuXHJcblxyXG4vLzAzLzI4LzIwMTkgMDg6NTkgYW0gLSBTU04gLSBNb3ZlZCBvdXQgb2YgZWRpdC5jc2h0bWxcclxuXHJcbmltcG9ydCB7IENoYW5nZU1vbml0b3JGbGFnIH0gZnJvbSAnLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcnO1xyXG5cclxuXHJcbi8vIDExLzE4LzIwMTkgMDE6MTUgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gLSBBZGRlZCBpbnRlcmZhY2VcclxuaW50ZXJmYWNlIERldlNpdGVSZWNvcmQge1xyXG5cclxuICAgIElkPzogbnVtYmVyXHJcbn1cclxuXHJcblxyXG4vLyBLbm9ja291dCByZWxhdGVkXHJcblxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG5cclxuLy8kKGZ1bmN0aW9uICgpIHtcclxubGV0IERlbW9TaXRlc19QYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIC8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuICAgIC8vIEFkZGVkXHJcbiAgICB2YXIgZG9TZXR1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIHZhciBWaWV3TW9kZWwgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2F2ZUFuZFN0YXkgPSBmdW5jdGlvbiAoaXRlbVRvRGVsZXRlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhMTAxID0gJCgnI2RldlNpdGVGb3JtJykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbmR4ID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAxMS8xOC8yMDE5IDAxOjE2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIC0gQWRkZWQgaW50ZXJmYWNlXHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgbzUgPSBuZXcgT2JqZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbzU6IERldlNpdGVSZWNvcmQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKG5keCA9IDA7IG5keCA8IGRhdGExMDEubGVuZ3RoOyBuZHgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfbmFtZSA9IGRhdGExMDFbbmR4XS5uYW1lLnJlcGxhY2UoJ0RldlNpdGUuJywgJycpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTEwMVtuZHhdLm5hbWUuaW5kZXhPZihcIkRldlNpdGUuXCIpID4gLTEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG12YyBjcmVhdGVzIGEgaGlkZGVuIGZpZWxkIGZvciBjaGVja2JveGVzLiBJZiB0aGUgdmlzaWJsZSBvbmUgaXMgc2V0IHRvIHRydWUsIHdlIGlnbm9yZSB0aGUgaGlkZGVuIG9uZSB0aGF0IGlzIHNldCB0byBmYWxzZS5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbzVbX25hbWVdIHx8IChvNVtfbmFtZV0gJiYgbzVbX25hbWVdLnZhbHVlID09PSBcInR1cmVcIiAmJiBkYXRhMTAxW25keF0udmFsdWUgIT09IFwiZmFsc2VcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG81W19uYW1lXSA9IGRhdGExMDFbbmR4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZF9sb2NhbCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IFwiUG9zdFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvNS5JZCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBcIlB1dFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlkX2xvY2FsID0gbzUuSWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuZmFkZUluKCdzbG93Jyk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLnJlbW92ZUNsYXNzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtZXRob2QsXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcIi9hcGkvRGV2U2l0ZXNfVGVzdGluZy9cIiArIGlkX2xvY2FsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG81KSxcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MTMgcG0gLSBTU04gLSBVcGRhdGUgcm93VmVyc2lvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5odG1sKFwiUmVjb3JkIHNhdmVkLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5hZGRDbGFzcygndGV4dC1zdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjRGV2U2l0ZV9Sb3dWZXJzaW9uXCIpLnZhbChyZXNwb25zZS5yb3dWZXJzaW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDExLzE4LzIwMTkgMDE6MDggcG0gLSBTU04gLSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hhbmdlTW9uaXRvckZsYWcuaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmZhZGVPdXQoJ3Nsb3cnKSB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcG9uc2VUZXh0ICE9PSBudWxsICYmIHJlc3BvbnNlLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmh0bWwoXCJTeXN0ZW0gZXJyb3IhIFJlY29yZCBub3Qgc2F2ZWQuPGJyLz5cIiArIHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmFkZENsYXNzKCd0ZXh0LXdhcm5pbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuY3NzKHsgJ2JhY2tncm91bmQtY29sb3InOiAneWVsbG93JyB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yLTIwMTkwMzI4LTA3MDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVG9kbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZtID0gbmV3IFZpZXdNb2RlbCgpO1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgLy99KTtcclxufSgpO1xyXG5cclxuZXhwb3J0IHsgRGVtb1NpdGVzX1BhZ2VzIH07XHJcblxyXG5EZW1vU2l0ZXNfUGFnZXMuZG9TZXR1cCgpO1xyXG5cclxuIiwi77u/XHJcbi8vIDExLzE4LzIwMTkgMDM6MTggcG0gLSBTU04gLSBNb3ZlZCBmcm9tIENoYW5nZU1vbml0b3IudHNcclxuXHJcblxyXG5jbGFzcyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcyB7XHJcblxyXG5cclxuXHJcbiAgICBnZXQgaGF2ZUNoYW5nZXMoKTogYm9vbGVhbntcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZU1vbml0b3JGbGFnLnRzIC0gZ2V0dGVyICcpO1xyXG5cclxuICAgICAgICBsZXQgX2hhdmVDaGFuZ2VzID0gd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0eXBlb2YgKF9oYXZlQ2hhbmdlcykgXCIsIHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSApO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiAoX2hhdmVDaGFuZ2VzKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBfaGF2ZUNoYW5nZXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdfaGF2ZUNoYW5nZXMgOiBbJywgX2hhdmVDaGFuZ2VzLCAnXScpO1xyXG4gICAgICAgIHJldHVybiBfaGF2ZUNoYW5nZXMgO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXQgaGF2ZUNoYW5nZXMoX2hhdmVDaGFuZ2VzICA6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgd2luZG93W1wiaGF2ZUNoYW5nZXNfR0xPQkFMXCJdID0gX2hhdmVDaGFuZ2VzO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBzZXR0ZXIgJyxfaGF2ZUNoYW5nZXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmxldCBDaGFuZ2VNb25pdG9yRmxhZyA9IG5ldyBDaGFuZ2VNb25pdG9yRmxhZ19jbGFzcygpO1xyXG5cclxuZXhwb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=