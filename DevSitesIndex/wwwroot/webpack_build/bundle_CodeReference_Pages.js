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

/***/ 0:
/*!**************************************!*\
  !*** multi ./CodeReference_Pages.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./CodeReference_Pages.ts */"./CodeReference_Pages.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29kZVJlZmVyZW5jZV9QYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFJQSxJQUFPLGtCQUFQOztBQUFBLFdBQU8sa0JBQVAsRUFBeUI7QUFHckIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVO0FBSVYsS0FBQyxDQUFDO0FBRUUsT0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUIsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVSxDQUFWLEVBQVc7QUFFeEM7QUFDQSxZQUFJLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsZUFBYixDQUF6Qjs7QUFDQSxZQUFJLGtCQUFrQixLQUFLLEdBQTNCLEVBQWdDO0FBQzVCLFdBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUIsR0FBakIsQ0FBcUIsRUFBckI7QUFDSDs7QUFFRCxTQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixLQUExQjtBQUVILE9BVkQ7QUFZSCxLQWRBLENBQUQ7QUFrQkEsS0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsQ0FBaUI7QUFFYjtBQUNBLFVBQUksQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLE1BQVosS0FBdUIsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsRUFBM0IsRUFBK0M7QUFDM0MsWUFBSSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsU0FBVixLQUF3QixHQUE1QixFQUFpQztBQUM3QixXQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQixRQUFwQixDQUE2QixXQUE3QjtBQUNILFNBRkQsTUFFTztBQUNILFdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CLFdBQXBCLENBQWdDLFdBQWhDO0FBQ0g7QUFDSjtBQUVKLEtBWEQsRUF0QlUsQ0FvQ1Y7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdILEdBdEREOztBQXlEQSxHQUFDLENBQUM7QUFFRSxXQUFPLENBQUMsR0FBUixDQUFZLHFDQUFaO0FBRUEsV0FBTztBQUVWLEdBTkEsQ0FBRDtBQVFILENBcEVELEVBQU8sa0JBQWtCLEtBQWxCLGtCQUFrQixNQUF6Qjs7QUFzRUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSw0QkFBWjtBQUdBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBSSxFQUFoQiIsImZpbGUiOiJidW5kbGVfQ29kZVJlZmVyZW5jZV9QYWdlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG4vLyAxMS8wOC8yMDE5IDA0OjQxIHBtIC0gU1NOIC1cclxuLy8gQ29udmVydCB0byBUeXBlU2NyaXB0XHJcblxyXG4vLyBpbXBvcnQgKiBhcyB4MTExIGZyb20gJy4uL2pzL3NpdGUnO1xyXG5cclxuXHJcblxyXG5tb2R1bGUgQ29kZVJlZmVyZW5jZV9QYWdlIHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdbZG9SZWZyZXNoRm9ybV0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDAzLzI3LzIwMTkgMDE6MDEgcG0gLSBTU04gLSBSZXZpc2UgaGFuZGxpbmcgb2YgY2xlYXJpbmcgc2VhcmNoLlxyXG4gICAgICAgICAgICAgICAgdmFyIGRvUmVmcmVzaEZvcm1fdGVtcCA9ICQodGhpcykuYXR0cihcImRvUmVmcmVzaEZvcm1cIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9SZWZyZXNoRm9ybV90ZW1wID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjU2VhcmNoVGV4dFwiKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNzdWJtaXRTZWFyY2hDb2RlUmVmXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgJChcIiNTZWFyY2hUZXh0XCIpLnZhbCggJ1wiJyArICQoZG9jdW1lbnQpLmhlaWdodCgpICsgXCItXCIgKyAkKHdpbmRvdykuaGVpZ2h0KCkgKyBcIi1cIiArICQod2luZG93KS5zY3JvbGxUb3AoKSArICdcIicgKTtcclxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLmhlaWdodCgpID4gJCh3aW5kb3cpLmhlaWdodCgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5zZWFyY2hPcHRpb24gXCIpLmFkZENsYXNzKFwiZml4ZWRfMTAxXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnNlYXJjaE9wdGlvbiBcIikucmVtb3ZlQ2xhc3MoXCJmaXhlZF8xMDFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyAwMi8wOS8yMDE5IDExOjMzIGFtIC0gU1NOIC0gQUxUIGtleSBhcmUgaG90IGFjY2VzcyBrZXlzXHJcbiAgICAgICAgLy8gMDQvMDUvMjAxOSAxMjo1NSBhbSAtIFNTTiAtIENvdWxkIGJlIGNhdXNpbmcgYSBwcm9ibGVtIHdpdGggY29weS4gRGVhY3RpdmF0ZS5cclxuXHJcbiAgICAgICAgLy8kKHdpbmRvdykua2V5ZG93bihmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICAvLyAgICB2YXIgY29kZSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlO1xyXG5cclxuICAgICAgICAvLyAgICBpZiAoWzE2LCAxNywgMTgsIDI3LCAxMTZdLmZpbmQoZTIgPT4gZTIgPT0gY29kZSkpIHtcclxuICAgICAgICAvLyAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgaWYgKGUuY3RybEtleSB8fCBlLmFsdEtleSkge1xyXG4gICAgICAgIC8vICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgfVxyXG5cclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ29kZVJlZmVyZW5jZV9QYWdlcyBydW5uaW5nIGRvU2V0dXAnKTtcclxuXHJcbiAgICAgICAgZG9TZXR1cCgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuY29uc29sZS5sb2coJ0NvZGVSZWZlcmVuY2VfUGFnZXMgLSB0b3AgJyk7XHJcblxyXG5cclxuY29uc29sZS5sb2coRGF0ZSgpKTtcclxuXHJcblxyXG5leHBvcnQgeyBDb2RlUmVmZXJlbmNlX1BhZ2UgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==