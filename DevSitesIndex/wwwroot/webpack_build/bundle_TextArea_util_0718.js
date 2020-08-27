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

/***/ "./util/TextArea_util_0718.ts":
/*!************************************!*\
  !*** ./util/TextArea_util_0718.ts ***!
  \************************************/
/*! exports provided: TextArea_util_0718 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextArea_util_0718", function() { return TextArea_util_0718; });
// 08/26/2020 07:27 pm - SSN - [20200826-1927] - [001] - Format textarea for edit
var TextArea_util_0718;

(function (TextArea_util_0718) {
  var doSetup = function doSetup() {
    $(function () {
      $('[ssn_FitInScreen]').on('click', function (e) {
        var textAreaID = $(this).attr('ssn_FitInScreen');
        var $ta = $("#" + textAreaID);
        var ta_position = $($ta).position();
        var scrollTop = $(window).scrollTop();
        var scrollLeft = $(window).scrollLeft();
        var screenWidth = screen.width;
        var screenHeight = screen.height;
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var offset = $ta.offset();
        var ta_width = $ta.width();
        var ta_height = $ta.height();
        $ta.width(windowWidth - (ta_position.left + offset.left) * 2);
        $ta.height(windowHeight - 100);
        ta_width = $ta.width();
        ta_height = $ta.height(); //console.log("20200826-1941 - TextArea_util_0718 - B");
        //console.log('textAreaID [' + textAreaID + ']');
        //console.log('ta_position', ta_position);
        //console.log('scrollTop [' + scrollTop + ']');
        //console.log('scrollLeft  [' + scrollLeft + ']');
        //console.log('screenWidth [' + screenWidth + ']');
        //console.log('screenHeight [' + screenHeight + ']');
        //console.log('windowWidth  [' + windowWidth + ']');
        //console.log('windowHeight  [' + windowHeight + ']');
        //console.log('offset top [' + offset.top + ']')
        //console.log('offset left [' + offset.left + ']')
        //console.log('ta_width [' + ta_width + ']');
        //console.log('ta_height [' + ta_height + ']');
        //console.log('ta_width [' + ta_width + ']');
        //console.log('ta_height [' + ta_height + ']');

        $('html, body').animate({
          scrollTop: offset.top - 80
        }, 1000);
      });
    });
  };

  $(function () {
    console.log('TextArea_util_0718 running doSetup');
    doSetup();
  });
})(TextArea_util_0718 || (TextArea_util_0718 = {}));



/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./util/TextArea_util_0718.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./util/TextArea_util_0718.ts */"./util/TextArea_util_0718.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9UZXh0QXJlYV91dGlsXzA3MTgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFFQSxJQUFPLGtCQUFQOztBQUFBLFdBQU8sa0JBQVAsRUFBeUI7QUFHckIsTUFBSSxPQUFPLEdBQUcsU0FBVixPQUFVO0FBSVYsS0FBQyxDQUFDO0FBRUUsT0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUIsRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVSxDQUFWLEVBQVc7QUFHMUMsWUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxpQkFBYixDQUFqQjtBQUVBLFlBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLFVBQVAsQ0FBWDtBQUVBLFlBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFELENBQUQsQ0FBTyxRQUFQLEVBQWxCO0FBR0EsWUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLFNBQVYsRUFBaEI7QUFDQSxZQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUsVUFBVixFQUFqQjtBQUVBLFlBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUF6QjtBQUNBLFlBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUExQjtBQUVBLFlBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVSxLQUFWLEVBQWxCO0FBQ0EsWUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVLE1BQVYsRUFBbkI7QUFFQSxZQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBSixFQUFiO0FBRUEsWUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUosRUFBZjtBQUNBLFlBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFKLEVBQWhCO0FBR0EsV0FBRyxDQUFDLEtBQUosQ0FBVSxXQUFXLEdBQUksQ0FBQyxXQUFXLENBQUMsSUFBWixHQUFtQixNQUFNLENBQUMsSUFBM0IsSUFBbUMsQ0FBNUQ7QUFDQSxXQUFHLENBQUMsTUFBSixDQUFXLFlBQVksR0FBRyxHQUExQjtBQUVBLGdCQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUosRUFBWDtBQUNBLGlCQUFTLEdBQUcsR0FBRyxDQUFDLE1BQUosRUFBWixDQTdCMEMsQ0FnQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFLQSxTQUFDLENBQUMsWUFBRCxDQUFELENBQWdCLE9BQWhCLENBQXdCO0FBQ3BCLG1CQUFTLEVBQUUsTUFBTSxDQUFDLEdBQVAsR0FBYTtBQURKLFNBQXhCLEVBR0csSUFISDtBQVFILE9BN0REO0FBOERILEtBaEVBLENBQUQ7QUFtRUgsR0F2RUQ7O0FBeUVBLEdBQUMsQ0FBQztBQUVFLFdBQU8sQ0FBQyxHQUFSLENBQVksb0NBQVo7QUFFQSxXQUFPO0FBRVYsR0FOQSxDQUFEO0FBVUgsQ0F0RkQsRUFBTyxrQkFBa0IsS0FBbEIsa0JBQWtCLE1BQXpCIiwiZmlsZSI6ImJ1bmRsZV9UZXh0QXJlYV91dGlsXzA3MTguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcclxuLy8gMDgvMjYvMjAyMCAwNzoyNyBwbSAtIFNTTiAtIFsyMDIwMDgyNi0xOTI3XSAtIFswMDFdIC0gRm9ybWF0IHRleHRhcmVhIGZvciBlZGl0XHJcblxyXG5tb2R1bGUgVGV4dEFyZWFfdXRpbF8wNzE4IHtcclxuXHJcblxyXG4gICAgdmFyIGRvU2V0dXAgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAgICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdbc3NuX0ZpdEluU2NyZWVuXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0ZXh0QXJlYUlEID0gJCh0aGlzKS5hdHRyKCdzc25fRml0SW5TY3JlZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgJHRhID0gJChcIiNcIiArIHRleHRBcmVhSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0YV9wb3NpdGlvbiA9ICQoJHRhKS5wb3NpdGlvbigpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzY3JlZW5XaWR0aCA9IHNjcmVlbi53aWR0aDtcclxuICAgICAgICAgICAgICAgIGxldCBzY3JlZW5IZWlnaHQgPSBzY3JlZW4uaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gJHRhLm9mZnNldCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCB0YV93aWR0aCA9ICR0YS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhX2hlaWdodCA9ICR0YS5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICR0YS53aWR0aCh3aW5kb3dXaWR0aCAtICgodGFfcG9zaXRpb24ubGVmdCArIG9mZnNldC5sZWZ0KSAqIDIpKTtcclxuICAgICAgICAgICAgICAgICR0YS5oZWlnaHQod2luZG93SGVpZ2h0IC0gMTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFfd2lkdGggPSAkdGEud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIHRhX2hlaWdodCA9ICR0YS5oZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIjIwMjAwODI2LTE5NDEgLSBUZXh0QXJlYV91dGlsXzA3MTggLSBCXCIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGV4dEFyZWFJRCBbJyArIHRleHRBcmVhSUQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGFfcG9zaXRpb24nLCB0YV9wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzY3JvbGxUb3AgWycgKyBzY3JvbGxUb3AgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2Nyb2xsTGVmdCAgWycgKyBzY3JvbGxMZWZ0ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NjcmVlbldpZHRoIFsnICsgc2NyZWVuV2lkdGggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2NyZWVuSGVpZ2h0IFsnICsgc2NyZWVuSGVpZ2h0ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3dpbmRvd1dpZHRoICBbJyArIHdpbmRvd1dpZHRoICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3dpbmRvd0hlaWdodCAgWycgKyB3aW5kb3dIZWlnaHQgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnb2Zmc2V0IHRvcCBbJyArIG9mZnNldC50b3AgKyAnXScpXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdvZmZzZXQgbGVmdCBbJyArIG9mZnNldC5sZWZ0ICsgJ10nKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RhX3dpZHRoIFsnICsgdGFfd2lkdGggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGFfaGVpZ2h0IFsnICsgdGFfaGVpZ2h0ICsgJ10nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0YV93aWR0aCBbJyArIHRhX3dpZHRoICsgJ10nKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RhX2hlaWdodCBbJyArIHRhX2hlaWdodCArICddJyk7XHJcblxyXG4gICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldC50b3AgLSA4MCxcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RleHRBcmVhX3V0aWxfMDcxOCBydW5uaW5nIGRvU2V0dXAnKTtcclxuXHJcbiAgICAgICAgZG9TZXR1cCgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBUZXh0QXJlYV91dGlsXzA3MTggfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==