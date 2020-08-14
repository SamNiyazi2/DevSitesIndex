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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXNfUC9EZXZTaXRlc0luZGV4L0RldlNpdGVzSW5kZXgvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL0RlbW9TaXRlc19QYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9VdGlsL0NoYW5nZU1vbml0b3IvQ2hhbmdlTW9uaXRvckZsYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHdCQUF3QiwyRUFBMkUsb0NBQW9DLG1CQUFtQixHQUFHLEVBQUUsT0FBTyxvQ0FBb0MsOEhBQThILEdBQUcsRUFBRSxzQkFBc0I7O0FBRW5XO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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aEMsRUFBOEMsR0FBOUM7QUFDQSxhQUFPLFlBQVA7QUFDSCxLQXJCYztTQXdCZixhQUFnQixZQUFoQixFQUF1QztBQUVuQyxZQUFNLENBQUMsb0JBQUQsQ0FBTixHQUErQixZQUEvQjtBQUVBLGFBQU8sQ0FBQyxHQUFSLENBQVksZ0NBQVosRUFBNkMsWUFBN0M7QUFFSCxLQTlCYztvQkFBQTs7QUFBQSxHQUFmO0FBa0NKO0FBQUMsQ0F0Q0Q7O0FBeUNBLElBQUksaUJBQWlCLEdBQUcsSUFBSSx1QkFBSixFQUF4QiIsImZpbGUiOiJidW5kbGVfRGVtb1NpdGVzX1BhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZjIgPSBmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2YyKG9iaik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mMihTeW1ib2wuaXRlcmF0b3IpID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiBfdHlwZW9mMihvYmopO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiXHJcbi8vIDExLzE4LzIwMTkgMDE6MTIgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gUmVuYW1lZCBmcm9tIERldlNpdGVfUGFnZXMuanMgdG8gRGVtb1NpdGVzX1BhZ2VzLnRzIChUeXBlU2NyaXB0KVxyXG5cclxuXHJcbi8vMDMvMjgvMjAxOSAwODo1OSBhbSAtIFNTTiAtIE1vdmVkIG91dCBvZiBlZGl0LmNzaHRtbFxyXG5cclxuaW1wb3J0IHsgQ2hhbmdlTW9uaXRvckZsYWcgfSBmcm9tICcuL1V0aWwvQ2hhbmdlTW9uaXRvci9DaGFuZ2VNb25pdG9yRmxhZyc7XHJcblxyXG5cclxuLy8gMTEvMTgvMjAxOSAwMToxNSBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAtIEFkZGVkIGludGVyZmFjZVxyXG5pbnRlcmZhY2UgRGV2U2l0ZVJlY29yZCB7XHJcblxyXG4gICAgSWQ/OiBudW1iZXJcclxufVxyXG5cclxuXHJcbi8vIEtub2Nrb3V0IHJlbGF0ZWRcclxuXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcblxyXG4vLyQoZnVuY3Rpb24gKCkge1xyXG5sZXQgRGVtb1NpdGVzX1BhZ2VzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgLy8gQWRkZWRcclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcbiAgICAgICAgdmFyIFZpZXdNb2RlbCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5zYXZlQW5kU3RheSA9IGZ1bmN0aW9uIChpdGVtVG9EZWxldGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGExMDEgPSAkKCcjZGV2U2l0ZUZvcm0nKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBuZHggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDExLzE4LzIwMTkgMDE6MTYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gLSBBZGRlZCBpbnRlcmZhY2VcclxuICAgICAgICAgICAgICAgIC8vIHZhciBvNSA9IG5ldyBPYmplY3QoKTtcclxuICAgICAgICAgICAgICAgIGxldCBvNTogRGV2U2l0ZVJlY29yZCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobmR4ID0gMDsgbmR4IDwgZGF0YTEwMS5sZW5ndGg7IG5keCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9uYW1lID0gZGF0YTEwMVtuZHhdLm5hbWUucmVwbGFjZSgnRGV2U2l0ZS4nLCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMTAxW25keF0ubmFtZS5pbmRleE9mKFwiRGV2U2l0ZS5cIikgPiAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbXZjIGNyZWF0ZXMgYSBoaWRkZW4gZmllbGQgZm9yIGNoZWNrYm94ZXMuIElmIHRoZSB2aXNpYmxlIG9uZSBpcyBzZXQgdG8gdHJ1ZSwgd2UgaWdub3JlIHRoZSBoaWRkZW4gb25lIHRoYXQgaXMgc2V0IHRvIGZhbHNlLlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvNVtfbmFtZV0gfHwgKG81W19uYW1lXSAmJiBvNVtfbmFtZV0udmFsdWUgPT09IFwidHVyZVwiICYmIGRhdGExMDFbbmR4XS52YWx1ZSAhPT0gXCJmYWxzZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbzVbX25hbWVdID0gZGF0YTEwMVtuZHhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkX2xvY2FsID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gXCJQb3N0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG81LklkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwiUHV0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRfbG9jYWwgPSBvNS5JZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikucmVtb3ZlQ2xhc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9EZXZTaXRlc19UZXN0aW5nL1wiICsgaWRfbG9jYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobzUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoxMyBwbSAtIFNTTiAtIFVwZGF0ZSByb3dWZXJzaW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmh0bWwoXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmFkZENsYXNzKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNEZXZTaXRlX1Jvd1ZlcnNpb25cIikudmFsKHJlc3BvbnNlLnJvd1ZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTgvMjAxOSAwMTowOCBwbSAtIFNTTiAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuZmFkZU91dCgnc2xvdycpIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQgIT09IG51bGwgJiYgcmVzcG9uc2UucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuaHRtbChcIlN5c3RlbSBlcnJvciEgUmVjb3JkIG5vdCBzYXZlZC48YnIvPlwiICsgcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuYWRkQ2xhc3MoJ3RleHQtd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5jc3MoeyAnYmFja2dyb3VuZC1jb2xvcic6ICd5ZWxsb3cnIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3ItMjAxOTAzMjgtMDcwNFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUb2RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdm0gPSBuZXcgVmlld01vZGVsKCk7XHJcbiAgICAgICAga28uYXBwbHlCaW5kaW5ncyh2bSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRvU2V0dXA6IGRvU2V0dXBcclxuICAgIH1cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICAvL30pO1xyXG59KCk7XHJcblxyXG5leHBvcnQgeyBEZW1vU2l0ZXNfUGFnZXMgfTtcclxuXHJcbkRlbW9TaXRlc19QYWdlcy5kb1NldHVwKCk7XHJcblxyXG4iLCLvu79cclxuLy8gMTEvMTgvMjAxOSAwMzoxOCBwbSAtIFNTTiAtIE1vdmVkIGZyb20gQ2hhbmdlTW9uaXRvci50c1xyXG5cclxuXHJcbmNsYXNzIENoYW5nZU1vbml0b3JGbGFnX2NsYXNzIHtcclxuXHJcblxyXG5cclxuICAgIGdldCBoYXZlQ2hhbmdlcygpOiBib29sZWFue1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlTW9uaXRvckZsYWcudHMgLSBnZXR0ZXIgJyk7XHJcblxyXG4gICAgICAgIGxldCBfaGF2ZUNoYW5nZXMgPSB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl07XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInR5cGVvZiAoX2hhdmVDaGFuZ2VzKSBcIiwgdHlwZW9mIChfaGF2ZUNoYW5nZXMpICk7XHJcblxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIChfaGF2ZUNoYW5nZXMpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hhbmdlTW9uaXRvckZsYWcgLSBTZXR0aW5nIGRlZmF1bHQgdmFsdWUgXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoYW5nZU1vbml0b3JGbGFnIC0gU2V0dGluZyBkZWZhdWx0IHZhbHVlIFwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VNb25pdG9yRmxhZyAtIFNldHRpbmcgZGVmYXVsdCB2YWx1ZSBcIik7XHJcbiAgICAgICAgICAgIF9oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ19oYXZlQ2hhbmdlcyA6IFsnLCBfaGF2ZUNoYW5nZXMsICddJyk7XHJcbiAgICAgICAgcmV0dXJuIF9oYXZlQ2hhbmdlcyA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldCBoYXZlQ2hhbmdlcyhfaGF2ZUNoYW5nZXMgIDogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB3aW5kb3dbXCJoYXZlQ2hhbmdlc19HTE9CQUxcIl0gPSBfaGF2ZUNoYW5nZXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDaGFuZ2VNb25pdG9yRmxhZy50cyAtIHNldHRlciAnLF9oYXZlQ2hhbmdlcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxubGV0IENoYW5nZU1vbml0b3JGbGFnID0gbmV3IENoYW5nZU1vbml0b3JGbGFnX2NsYXNzKCk7XHJcblxyXG5leHBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==