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
console.log("20191224-1921 - CodeReference_Pages");
var CodeReference_Page;

(function (CodeReference_Page) {
  var doSetup = function doSetup() {
    $(function () {
      $('[doRefreshForm]').on('click', function (e) {
        console.log("20191224-1921 - CodeReference_Pages -- 002"); // 03/27/2019 01:01 pm - SSN - Revise handling of clearing search.

        var doRefreshForm_temp = $(this).attr("doRefreshForm");
        console.log("20191224-1921 - CodeReference_Pages -- 003 [" + doRefreshForm_temp + "]");

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

/***/ 0:
/*!**************************************!*\
  !*** multi ./CodeReference_Pages.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./CodeReference_Pages.ts */"./CodeReference_Pages.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29kZVJlZmVyZW5jZV9QYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQSxPQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaO0FBR0EsSUFBTyxrQkFBUDs7QUFBQSxXQUFPLGtCQUFQLEVBQXlCO0FBR3JCLE1BQUksT0FBTyxHQUFHLFNBQVYsT0FBVTtBQUlWLEtBQUMsQ0FBQztBQUVFLE9BQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFVBQVUsQ0FBVixFQUFXO0FBR3hDLGVBQU8sQ0FBQyxHQUFSLENBQVksNENBQVosRUFId0MsQ0FLeEM7O0FBQ0EsWUFBSSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEsSUFBUixDQUFhLGVBQWIsQ0FBekI7QUFFQSxlQUFPLENBQUMsR0FBUixDQUFZLGlEQUFpRCxrQkFBakQsR0FBc0UsR0FBbEY7O0FBRUEsWUFBSSxrQkFBa0IsS0FBSyxHQUEzQixFQUFnQztBQUM1QixXQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLENBQXFCLEVBQXJCO0FBQ0g7O0FBRUQsU0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsS0FBMUI7QUFFSCxPQWhCRDtBQWtCSCxLQXBCQSxDQUFEO0FBd0JBLEtBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLENBQWlCO0FBRWI7QUFDQSxVQUFJLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWSxNQUFaLEtBQXVCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxNQUFWLEVBQTNCLEVBQStDO0FBQzNDLFlBQUksQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFNBQVYsS0FBd0IsR0FBNUIsRUFBaUM7QUFDN0IsV0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0IsUUFBcEIsQ0FBNkIsV0FBN0I7QUFDSCxTQUZELE1BRU87QUFDSCxXQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixXQUFwQixDQUFnQyxXQUFoQztBQUNIO0FBQ0o7QUFFSixLQVhELEVBNUJVLENBMENWO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHSCxHQTVERDs7QUErREEsR0FBQyxDQUFDO0FBRUUsV0FBTyxDQUFDLEdBQVIsQ0FBWSxxQ0FBWjtBQUVBLFdBQU87QUFFVixHQU5BLENBQUQ7QUFRSCxDQTFFRCxFQUFPLGtCQUFrQixLQUFsQixrQkFBa0IsTUFBekI7O0FBNEVBLE9BQU8sQ0FBQyxHQUFSLENBQVksNEJBQVo7QUFHQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQUksRUFBaEIiLCJmaWxlIjoiYnVuZGxlX0NvZGVSZWZlcmVuY2VfUGFnZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuLy8gMTEvMDgvMjAxOSAwNDo0MSBwbSAtIFNTTiAtXHJcbi8vIENvbnZlcnQgdG8gVHlwZVNjcmlwdFxyXG5cclxuLy8gaW1wb3J0ICogYXMgeDExMSBmcm9tICcuLi9qcy9zaXRlJztcclxuXHJcbmNvbnNvbGUubG9nKFwiMjAxOTEyMjQtMTkyMSAtIENvZGVSZWZlcmVuY2VfUGFnZXNcIik7XHJcblxyXG5cclxubW9kdWxlIENvZGVSZWZlcmVuY2VfUGFnZSB7XHJcblxyXG5cclxuICAgIHZhciBkb1NldHVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgJCgnW2RvUmVmcmVzaEZvcm1dJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIyMDE5MTIyNC0xOTIxIC0gQ29kZVJlZmVyZW5jZV9QYWdlcyAtLSAwMDJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDMvMjcvMjAxOSAwMTowMSBwbSAtIFNTTiAtIFJldmlzZSBoYW5kbGluZyBvZiBjbGVhcmluZyBzZWFyY2guXHJcbiAgICAgICAgICAgICAgICB2YXIgZG9SZWZyZXNoRm9ybV90ZW1wID0gJCh0aGlzKS5hdHRyKFwiZG9SZWZyZXNoRm9ybVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjIwMTkxMjI0LTE5MjEgLSBDb2RlUmVmZXJlbmNlX1BhZ2VzIC0tIDAwMyBbXCIgKyBkb1JlZnJlc2hGb3JtX3RlbXAgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRvUmVmcmVzaEZvcm1fdGVtcCA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI1NlYXJjaFRleHRcIikudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjc3VibWl0U2VhcmNoQ29kZVJlZlwiKS5jbGljaygpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gICQoXCIjU2VhcmNoVGV4dFwiKS52YWwoICdcIicgKyAkKGRvY3VtZW50KS5oZWlnaHQoKSArIFwiLVwiICsgJCh3aW5kb3cpLmhlaWdodCgpICsgXCItXCIgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAnXCInICk7XHJcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5oZWlnaHQoKSA+ICQod2luZG93KS5oZWlnaHQoKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuc2VhcmNoT3B0aW9uIFwiKS5hZGRDbGFzcyhcImZpeGVkXzEwMVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWFyY2hPcHRpb24gXCIpLnJlbW92ZUNsYXNzKFwiZml4ZWRfMTAxXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gMDIvMDkvMjAxOSAxMTozMyBhbSAtIFNTTiAtIEFMVCBrZXkgYXJlIGhvdCBhY2Nlc3Mga2V5c1xyXG4gICAgICAgIC8vIDA0LzA1LzIwMTkgMTI6NTUgYW0gLSBTU04gLSBDb3VsZCBiZSBjYXVzaW5nIGEgcHJvYmxlbSB3aXRoIGNvcHkuIERlYWN0aXZhdGUuXHJcblxyXG4gICAgICAgIC8vJCh3aW5kb3cpLmtleWRvd24oZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgLy8gICAgdmFyIGNvZGUgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuXHJcbiAgICAgICAgLy8gICAgaWYgKFsxNiwgMTcsIDE4LCAyNywgMTE2XS5maW5kKGUyID0+IGUyID09IGNvZGUpKSB7XHJcbiAgICAgICAgLy8gICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIGlmIChlLmN0cmxLZXkgfHwgZS5hbHRLZXkpIHtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvZGVSZWZlcmVuY2VfUGFnZXMgcnVubmluZyBkb1NldHVwJyk7XHJcblxyXG4gICAgICAgIGRvU2V0dXAoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKCdDb2RlUmVmZXJlbmNlX1BhZ2VzIC0gdG9wICcpO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKERhdGUoKSk7XHJcblxyXG5cclxuZXhwb3J0IHsgQ29kZVJlZmVyZW5jZV9QYWdlIH07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=