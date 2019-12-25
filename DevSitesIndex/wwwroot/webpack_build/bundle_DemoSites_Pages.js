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

/***/ "./Util/ChangeMonitor/ChangeMonitorFlag.js":
/*!*************************************************!*\
  !*** ./Util/ChangeMonitor/ChangeMonitorFlag.js ***!
  \*************************************************/
/*! exports provided: ChangeMonitorFlag */
/***/ (function(module, exports) {

throw new Error("Module build failed (from C:/Sams/DevSitesIndex/DevSitesIndex/node_modules/source-map-loader/index.js):\nError: ENOENT: no such file or directory, open 'C:\\Sams\\DevSitesIndex\\DevSitesIndex\\wwwroot\\js\\Util\\ChangeMonitor\\ChangeMonitorFlag.js'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRGVtb1NpdGVzX1BhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFHQTtDQVlBO0FBR0E7QUFFQTs7QUFDQSxJQUFJLGVBQWUsR0FBRztBQUlsQjtBQUNBO0FBQ0EsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVO0FBR1YsUUFBSSxTQUFTLEdBQUcsU0FBWixTQUFZO0FBSVosV0FBSyxXQUFMLEdBQW1CLFVBQVUsWUFBVixFQUFzQjtBQUdyQyxZQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLGNBQWxCLEVBQWQ7QUFFQSxZQUFJLEdBQUcsR0FBRyxDQUFWLENBTHFDLENBT3JDO0FBQ0E7O0FBQ0EsWUFBSSxFQUFFLEdBQWtCLEVBQXhC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QUFFLEdBQUcsSUFBSSxTQUFKLEVBQVQ7QUFDQSxNQUFFLENBQUMsYUFBSCxDQUFpQixFQUFqQjtBQUVILEdBdkdELENBTmtCLENBZ0hsQjs7O0FBQ0EsU0FBTztBQUNILFdBQU8sRUFBRTtBQUROLEdBQVAsQ0FqSGtCLENBcUhsQjtBQUNBO0FBQ0gsQ0F2SHFCLEVBQXRCOztBQXlIQTtBQUVBLGVBQWUsQ0FBQyxPQUFoQixHIiwiZmlsZSI6ImJ1bmRsZV9EZW1vU2l0ZXNfUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuLy8gMTEvMTgvMjAxOSAwMToxMiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSBSZW5hbWVkIGZyb20gRGV2U2l0ZV9QYWdlcy5qcyB0byBEZW1vU2l0ZXNfUGFnZXMudHMgKFR5cGVTY3JpcHQpXHJcblxyXG5cclxuLy8wMy8yOC8yMDE5IDA4OjU5IGFtIC0gU1NOIC0gTW92ZWQgb3V0IG9mIGVkaXQuY3NodG1sXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VNb25pdG9yRmxhZyB9IGZyb20gJy4vVXRpbC9DaGFuZ2VNb25pdG9yL0NoYW5nZU1vbml0b3JGbGFnJztcclxuXHJcblxyXG4vLyAxMS8xOC8yMDE5IDAxOjE1IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdIC0gQWRkZWQgaW50ZXJmYWNlXHJcbmludGVyZmFjZSBEZXZTaXRlUmVjb3JkIHtcclxuXHJcbiAgICBJZD86IG51bWJlclxyXG59XHJcblxyXG5cclxuLy8gS25vY2tvdXQgcmVsYXRlZFxyXG5cclxuXHJcbi8vIDExLzE4LzIwMTkgMDE6MjYgcG0gLSBTU04gLSBbMjAxOTExMTgtMTMxNl0gIFJldmlzZWRcclxuXHJcbi8vJChmdW5jdGlvbiAoKSB7XHJcbmxldCBEZW1vU2l0ZXNfUGFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAxMS8xOC8yMDE5IDAxOjI2IHBtIC0gU1NOIC0gWzIwMTkxMTE4LTEzMTZdICBSZXZpc2VkXHJcbiAgICAvLyBBZGRlZFxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICB2YXIgVmlld01vZGVsID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNhdmVBbmRTdGF5ID0gZnVuY3Rpb24gKGl0ZW1Ub0RlbGV0ZSkge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YTEwMSA9ICQoJyNkZXZTaXRlRm9ybScpLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5keCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMTEvMTgvMjAxOSAwMToxNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAtIEFkZGVkIGludGVyZmFjZVxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIG81ID0gbmV3IE9iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG81OiBEZXZTaXRlUmVjb3JkID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChuZHggPSAwOyBuZHggPCBkYXRhMTAxLmxlbmd0aDsgbmR4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX25hbWUgPSBkYXRhMTAxW25keF0ubmFtZS5yZXBsYWNlKCdEZXZTaXRlLicsICcnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGExMDFbbmR4XS5uYW1lLmluZGV4T2YoXCJEZXZTaXRlLlwiKSA+IC0xKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtdmMgY3JlYXRlcyBhIGhpZGRlbiBmaWVsZCBmb3IgY2hlY2tib3hlcy4gSWYgdGhlIHZpc2libGUgb25lIGlzIHNldCB0byB0cnVlLCB3ZSBpZ25vcmUgdGhlIGhpZGRlbiBvbmUgdGhhdCBpcyBzZXQgdG8gZmFsc2UuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW81W19uYW1lXSB8fCAobzVbX25hbWVdICYmIG81W19uYW1lXS52YWx1ZSA9PT0gXCJ0dXJlXCIgJiYgZGF0YTEwMVtuZHhdLnZhbHVlICE9PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvNVtfbmFtZV0gPSBkYXRhMTAxW25keF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvNSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkX2xvY2FsID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gXCJQb3N0XCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG81LklkID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwiUHV0XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRfbG9jYWwgPSBvNS5JZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikucmVtb3ZlQ2xhc3MoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiL2FwaS9EZXZTaXRlc19UZXN0aW5nL1wiICsgaWRfbG9jYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkobzUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzIwMTkwMzI4LTE3MjItMDEwLUMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMDkvMjEvMjAxOSAxMjoxMyBwbSAtIFNTTiAtIFVwZGF0ZSByb3dWZXJzaW9uXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmh0bWwoXCJSZWNvcmQgc2F2ZWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2RldlNpdGVTYXZlU3RhdHVzXCIpLmFkZENsYXNzKCd0ZXh0LXN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNEZXZTaXRlX1Jvd1ZlcnNpb25cIikudmFsKHJlc3BvbnNlLnJvd1ZlcnNpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTEvMTgvMjAxOSAwMTowOCBwbSAtIFNTTiAtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaGFuZ2VNb25pdG9yRmxhZy5oYXZlQ2hhbmdlcyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuZmFkZU91dCgnc2xvdycpIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZVRleHQgIT09IG51bGwgJiYgcmVzcG9uc2UucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuaHRtbChcIlN5c3RlbSBlcnJvciEgUmVjb3JkIG5vdCBzYXZlZC48YnIvPlwiICsgcmVzcG9uc2UucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZGV2U2l0ZVNhdmVTdGF0dXNcIikuYWRkQ2xhc3MoJ3RleHQtd2FybmluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNkZXZTaXRlU2F2ZVN0YXR1c1wiKS5jc3MoeyAnYmFja2dyb3VuZC1jb2xvcic6ICd5ZWxsb3cnIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yLTIwMTkwMzI4LTA3MDRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVG9kbycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHZtID0gbmV3IFZpZXdNb2RlbCgpO1xyXG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3Modm0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkb1NldHVwOiBkb1NldHVwXHJcbiAgICB9XHJcblxyXG4gICAgLy8gMTEvMTgvMjAxOSAwMToyNiBwbSAtIFNTTiAtIFsyMDE5MTExOC0xMzE2XSAgUmV2aXNlZFxyXG4gICAgLy99KTtcclxufSgpO1xyXG5cclxuZXhwb3J0IHsgRGVtb1NpdGVzX1BhZ2VzIH07XHJcblxyXG5EZW1vU2l0ZXNfUGFnZXMuZG9TZXR1cCgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==