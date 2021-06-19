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

/***/ "./util/main_101.ts":
/*!**************************!*\
  !*** ./util/main_101.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 12/03/2019 12:02 am - SSN - [20191202-2353] - [003] - DisplayCode - Adding
// Copied from C:\Sams_Projects\__SharedScripts
///// <reference path="../../../node_modules/@types/jquery/index.d.ts" /> 
// 10/23/2018 05:54 am - SSN - Copied form C:\Sams_Projects\PluralSight\angularjs-fundamentals\d_master
// 10/29/2018 08:28 am - SSN - Adding defaultTitle
// *** displaycode-begin  highlight []  

$(function () {
  // 09/26/2018 02:11 am - SSN 
  // 06/13/2021 02:59 am - SSN - [20210613-0039] - [002] - VSTS Code - Refactoring
  $('[cmd-ssn="displayCode"]').each(function (a, b) {
    var div = $("<div>Click to load code.</div>");
    $(b).append(div);
    $(b).bind('click', function (event) {
      var attrs = {};

      for (var x = 0; x < b.attributes.length; x++) {
        attrs[b.attributes[x].name.replace('-', '_')] = b.attributes[x].value;
      } //// 01/01/2019 08:52 pm - SSN https
      //var protocol = location.protocol;
      //var localhostPort = '56580';
      //if (protocol.toLowerCase() == 'https:') {
      //    localhostPort = '44365';
      //}


      $.ajax({
        type: "get",
        url: '/api/displayCode/VSTSCode/',
        data: attrs,
        dataType: 'json',
        success: function success(data, status, xhr) {
          div.html(data["finalResult"]);
        },
        error: function error(_error) {
          console.log('Failed ajax call - 20210613-0023');
          console.log(_error);
        }
      });
    });
  });
  $('[cmd-SSN="doCopy"]').on('click', function () {
    var x1 = $(this);
    copy101(x1[0]); // return;
    // $(this).select();
    // var status = document.execCommand('copy');
    // if (status) {
    //         alert('Copied to clipboard');
    // } else {
    //         alert('Failed to copy to clipboard');
    // }
  }); // 03/23/2019 08:08 pm - SSN - Adding ssnalert

  $('[cmd-ssn="ssnalert"]').on('click', function () {
    var appcode = $(this).attr("appcode");
    var path = $(this).attr('path');
    document.location.href = "ssnalert:appcode=" + appcode + ";targetfile=" + encodeURIComponent(path);
  });
  $('[cmd-ssn="ssnalert"]').each(function () {
    $(this).addClass('ssnalertLink');
  }); // 12/03/2019 12:05 am - SSN - [20191202-2353] - [004] - DisplayCode - Adding
  // Added initializer.

  var ssnLinksList = [];
  $('[cmd-ssn="writeLink"]').each(function () {
    var topContainer = $(this);
    var thisPos = $(this).attr('pos');
    var targetNo = 0;
    $(ssnLinksList).each(function (ndx, obj1) {
      if (obj1.pos == thisPos) {
        targetNo++;
        var link = document.createElement("a");
        link.href = obj1.href;
        link.target = "w" + targetNo;
        link.innerText = obj1.caption;
        var li = document.createElement('li');
        li.append(link);
        topContainer.append(li);
      }
    });
  });
});

function copy101(selector) {
  // var text = document.querySelector ( selector ) ;
  var selection = window.getSelection();
  var range = document.createRange();
  range.selectNodeContents(selector); // text );

  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
}

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./util/main_101.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./util/main_101.ts */"./util/main_101.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9tYWluXzEwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0NDakZBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTs7QUFDQSxDQUFDLENBQUM7QUFJRTtBQUNBO0FBRUEsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkIsSUFBN0IsQ0FBa0MsVUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFjO0FBRzVDLFFBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxnQ0FBRCxDQUFYO0FBRUEsS0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLE1BQUwsQ0FBWSxHQUFaO0FBR0EsS0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLElBQUwsQ0FBVSxPQUFWLEVBQW1CLFVBQVUsS0FBVixFQUFlO0FBSTlCLFVBQU0sS0FBSyxHQUFHLEVBQWQ7O0FBRUEsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBRixDQUFhLE1BQWpDLEVBQXlDLENBQUMsRUFBMUMsRUFBOEM7QUFFMUMsYUFBSyxDQUFFLENBQUMsQ0FBQyxVQUFGLENBQWEsQ0FBYixFQUFnQixJQUFqQixDQUF1QixPQUF2QixDQUErQixHQUEvQixFQUFvQyxHQUFwQyxDQUFELENBQUwsR0FBa0QsQ0FBQyxDQUFDLFVBQUYsQ0FBYSxDQUFiLEVBQWdCLEtBQWxFO0FBRUgsT0FWNkIsQ0FZOUI7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxPQUFDLENBQUMsSUFBRixDQUFPO0FBQ0gsWUFBSSxFQUFFLEtBREg7QUFHSCxXQUFHLEVBQUUsNEJBSEY7QUFLSCxZQUFJLEVBQUUsS0FMSDtBQU9ILGdCQUFRLEVBQUUsTUFQUDtBQVFILGVBQU8sRUFBRSxpQkFBVSxJQUFWLEVBQWdCLE1BQWhCLEVBQXdCLEdBQXhCLEVBQTJCO0FBR2hDLGFBQUcsQ0FBQyxJQUFKLENBQVMsSUFBSSxDQUFDLGFBQUQsQ0FBYjtBQUtILFNBaEJFO0FBaUJILGFBQUssRUFBRSxlQUFVLE1BQVYsRUFBZTtBQUVsQixpQkFBTyxDQUFDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBLGlCQUFPLENBQUMsR0FBUixDQUFZLE1BQVo7QUFFSDtBQXRCRSxPQUFQO0FBeUJILEtBN0NEO0FBZ0RILEdBeEREO0FBZ0VBLEdBQUMsQ0FBQyxvQkFBRCxDQUFELENBQXdCLEVBQXhCLENBQTJCLE9BQTNCLEVBQW9DO0FBRWhDLFFBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQVY7QUFDQSxXQUFPLENBQUMsRUFBRSxDQUFDLENBQUQsQ0FBSCxDQUFQLENBSGdDLENBS2hDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSCxHQWZELEVBdkVGLENBd0ZFOztBQUNBLEdBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDO0FBRWxDLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxJQUFSLENBQWEsU0FBYixDQUFkO0FBQ0EsUUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxNQUFiLENBQVg7QUFHQSxZQUFRLENBQUMsUUFBVCxDQUFrQixJQUFsQixHQUF5QixzQkFBc0IsT0FBdEIsR0FBZ0MsY0FBaEMsR0FBaUQsa0JBQWtCLENBQUMsSUFBRCxDQUE1RjtBQUVILEdBUkQ7QUFVQSxHQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQixJQUExQixDQUErQjtBQUMzQixLQUFDLENBQUMsSUFBRCxDQUFELENBQVEsUUFBUixDQUFpQixjQUFqQjtBQUNILEdBRkQsRUFuR0YsQ0F3R0U7QUFDQTs7QUFDQSxNQUFJLFlBQVksR0FBRyxFQUFuQjtBQUVBLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCLElBQTNCLENBQWdDO0FBRTVCLFFBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQXBCO0FBRUEsUUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxLQUFiLENBQWQ7QUFDQSxRQUFJLFFBQVEsR0FBRyxDQUFmO0FBRUEsS0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQixJQUFoQixDQUFxQixVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQW1CO0FBRXBDLFVBQUksSUFBSSxDQUFDLEdBQUwsSUFBWSxPQUFoQixFQUF5QjtBQUVyQixnQkFBUTtBQUVSLFlBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVg7QUFDQSxZQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQyxJQUFqQjtBQUNBLFlBQUksQ0FBQyxNQUFMLEdBQWMsTUFBTSxRQUFwQjtBQUNBLFlBQUksQ0FBQyxTQUFMLEdBQWlCLElBQUksQ0FBQyxPQUF0QjtBQUVBLFlBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQSxVQUFFLENBQUMsTUFBSCxDQUFVLElBQVY7QUFFQSxvQkFBWSxDQUFDLE1BQWIsQ0FBb0IsRUFBcEI7QUFFSDtBQUNKLEtBakJEO0FBb0JILEdBM0JEO0FBNkJILENBeklBLENBQUQ7O0FBOElBLFNBQVMsT0FBVCxDQUFpQixRQUFqQixFQUF5QjtBQUVyQjtBQUVBLE1BQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFQLEVBQWhCO0FBQ0EsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVQsRUFBWjtBQUNBLE9BQUssQ0FBQyxrQkFBTixDQUF5QixRQUF6QixFQU5xQixDQU1lOztBQUNwQyxXQUFTLENBQUMsZUFBVjtBQUNBLFdBQVMsQ0FBQyxRQUFWLENBQW1CLEtBQW5CO0FBQ0EsVUFBUSxDQUFDLFdBQVQsQ0FBcUIsTUFBckI7QUFFSCxDIiwiZmlsZSI6ImJ1bmRsZV9tYWluXzEwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG4vLyAxMi8wMy8yMDE5IDEyOjAyIGFtIC0gU1NOIC0gWzIwMTkxMjAyLTIzNTNdIC0gWzAwM10gLSBEaXNwbGF5Q29kZSAtIEFkZGluZ1xyXG4vLyBDb3BpZWQgZnJvbSBDOlxcU2Ftc19Qcm9qZWN0c1xcX19TaGFyZWRTY3JpcHRzXHJcblxyXG4vLy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gXHJcblxyXG5cclxuLy8gMTAvMjMvMjAxOCAwNTo1NCBhbSAtIFNTTiAtIENvcGllZCBmb3JtIEM6XFxTYW1zX1Byb2plY3RzXFxQbHVyYWxTaWdodFxcYW5ndWxhcmpzLWZ1bmRhbWVudGFsc1xcZF9tYXN0ZXJcclxuLy8gMTAvMjkvMjAxOCAwODoyOCBhbSAtIFNTTiAtIEFkZGluZyBkZWZhdWx0VGl0bGVcclxuXHJcbi8vICoqKiBkaXNwbGF5Y29kZS1iZWdpbiAgaGlnaGxpZ2h0IFtdICBcclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yNi8yMDE4IDAyOjExIGFtIC0gU1NOIFxyXG4gICAgLy8gMDYvMTMvMjAyMSAwMjo1OSBhbSAtIFNTTiAtIFsyMDIxMDYxMy0wMDM5XSAtIFswMDJdIC0gVlNUUyBDb2RlIC0gUmVmYWN0b3JpbmdcclxuXHJcbiAgICAkKCdbY21kLXNzbj1cImRpc3BsYXlDb2RlXCJdJykuZWFjaChmdW5jdGlvbiAoYSwgYikge1xyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgdmFyIGRpdiA9ICQoXCI8ZGl2PkNsaWNrIHRvIGxvYWQgY29kZS48L2Rpdj5cIik7XHJcblxyXG4gICAgICAgICQoYikuYXBwZW5kKGRpdik7XHJcblxyXG5cclxuICAgICAgICAkKGIpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdHRycyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBiLmF0dHJpYnV0ZXMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhdHRyc1soYi5hdHRyaWJ1dGVzW3hdLm5hbWUpLnJlcGxhY2UoJy0nLCAnXycpXSA9IGIuYXR0cmlidXRlc1t4XS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8vLyAwMS8wMS8yMDE5IDA4OjUyIHBtIC0gU1NOIGh0dHBzXHJcbiAgICAgICAgICAgIC8vdmFyIHByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2w7XHJcbiAgICAgICAgICAgIC8vdmFyIGxvY2FsaG9zdFBvcnQgPSAnNTY1ODAnO1xyXG5cclxuICAgICAgICAgICAgLy9pZiAocHJvdG9jb2wudG9Mb3dlckNhc2UoKSA9PSAnaHR0cHM6Jykge1xyXG4gICAgICAgICAgICAvLyAgICBsb2NhbGhvc3RQb3J0ID0gJzQ0MzY1JztcclxuICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9kaXNwbGF5Q29kZS9WU1RTQ29kZS8nLFxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZGF0YTogYXR0cnMsXHJcbiBcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgc3RhdHVzLCB4aHIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Lmh0bWwoZGF0YVtcImZpbmFsUmVzdWx0XCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgYWpheCBjYWxsIC0gMjAyMTA2MTMtMDAyMycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJCgnW2NtZC1TU049XCJkb0NvcHlcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciB4MSA9ICQodGhpcyk7XHJcbiAgICAgICAgY29weTEwMSh4MVswXSk7XHJcblxyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gJCh0aGlzKS5zZWxlY3QoKTtcclxuICAgICAgICAvLyB2YXIgc3RhdHVzID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgICAvLyBpZiAoc3RhdHVzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhbGVydCgnQ29waWVkIHRvIGNsaXBib2FyZCcpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhbGVydCgnRmFpbGVkIHRvIGNvcHkgdG8gY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIDAzLzIzLzIwMTkgMDg6MDggcG0gLSBTU04gLSBBZGRpbmcgc3NuYWxlcnRcclxuICAgICQoJ1tjbWQtc3NuPVwic3NuYWxlcnRcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciBhcHBjb2RlID0gJCh0aGlzKS5hdHRyKFwiYXBwY29kZVwiKTtcclxuICAgICAgICB2YXIgcGF0aCA9ICQodGhpcykuYXR0cigncGF0aCcpO1xyXG5cclxuXHJcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZiA9IFwic3NuYWxlcnQ6YXBwY29kZT1cIiArIGFwcGNvZGUgKyBcIjt0YXJnZXRmaWxlPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhdGgpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICQoJ1tjbWQtc3NuPVwic3NuYWxlcnRcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdzc25hbGVydExpbmsnKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAxMi8wMy8yMDE5IDEyOjA1IGFtIC0gU1NOIC0gWzIwMTkxMjAyLTIzNTNdIC0gWzAwNF0gLSBEaXNwbGF5Q29kZSAtIEFkZGluZ1xyXG4gICAgLy8gQWRkZWQgaW5pdGlhbGl6ZXIuXHJcbiAgICBsZXQgc3NuTGlua3NMaXN0ID0gW107XHJcblxyXG4gICAgJCgnW2NtZC1zc249XCJ3cml0ZUxpbmtcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgdmFyIHRvcENvbnRhaW5lciA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIHZhciB0aGlzUG9zID0gJCh0aGlzKS5hdHRyKCdwb3MnKTtcclxuICAgICAgICB2YXIgdGFyZ2V0Tm8gPSAwO1xyXG5cclxuICAgICAgICAkKHNzbkxpbmtzTGlzdCkuZWFjaChmdW5jdGlvbiAobmR4LCBvYmoxKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAob2JqMS5wb3MgPT0gdGhpc1Bvcykge1xyXG5cclxuICAgICAgICAgICAgICAgIHRhcmdldE5vKys7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgICAgIGxpbmsuaHJlZiA9IG9iajEuaHJlZjtcclxuICAgICAgICAgICAgICAgIGxpbmsudGFyZ2V0ID0gXCJ3XCIgKyB0YXJnZXRObztcclxuICAgICAgICAgICAgICAgIGxpbmsuaW5uZXJUZXh0ID0gb2JqMS5jYXB0aW9uO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmQobGluaylcclxuXHJcbiAgICAgICAgICAgICAgICB0b3BDb250YWluZXIuYXBwZW5kKGxpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvcHkxMDEoc2VsZWN0b3IpIHtcclxuXHJcbiAgICAvLyB2YXIgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IgKCBzZWxlY3RvciApIDtcclxuXHJcbiAgICB2YXIgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhzZWxlY3Rvcik7IC8vIHRleHQgKTtcclxuICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=