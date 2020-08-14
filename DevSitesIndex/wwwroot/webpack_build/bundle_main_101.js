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
  $('[cmd-ssn="displayCode"]').each(function (a, b) {
    var url = $(b).attr('url');
    var doDebug = $(b).attr('doDebug');
    var defaultTitle = $(b).attr('defaultTitle'); // 10/25/2018 07:07 am - SSN - Adding

    var useFileSystem = $(b).attr('useFileSystem'); // 01/01/2019 08:52 pm - SSN https

    var protocol = location.protocol;
    var localhostPort = '56580';

    if (protocol.toLowerCase() == 'https:') {
      localhostPort = '44365';
    }

    $.ajax({
      type: "get",
      // 01/01/2019 09:33 pm - SSN
      // url: 'http://devsites.nonbs.org/displaycode', 
      // 12/02/2019 11:53 pm - SSN - [20191202-2353] - [001] - DisplayCode - Adding
      // url: protocol + '//devsites.nonbs.org/displaycode',
      // 12/03/2019 03:05 am - SSN - [20191202-2353] - [009] - DisplayCode - Adding
      // url: '/api/displaycode/',
      url: '/api/displayCode/VSTSCode/',
      // url: 'http://localhost:56580/displaycode',
      // url: protocol + '//localhost:' + localhostPort  + '/displaycode',
      data: {
        url: url,
        doDebug: doDebug,
        useFileSystem: useFileSystem
      },
      // 12/03/2019 09:08 am - SSN - DisplayCode - Adding
      //dataType: 'text',
      dataType: 'json',
      success: function success(data, status, xhr) {
        if (typeof defaultTitle === "string") {
          var div_defaultTitle = $("<h3>" + defaultTitle + "</h3>");
          $(b).append(div_defaultTitle);
        }

        var anchor = $("<a cmd-ssn='showCode' >Show code</a>");
        $(b).append(anchor);
        var div = $("<div></div>");
        div.html(data["finalResult"]);
        div.hide();
        div.on('dblclick', function () {
          anchor.trigger('click');
        });
        var div_title = $("<div>" + url + "</div>");
        $(b).append(div_title);
        $(b).append(div);
        anchor.on('click', function () {
          var text = anchor.text();

          if (text == "Show code") {
            div.show();
            div_title.hide();
            anchor.text('Hide code');
          } else {
            div.hide();
            div_title.show();
            anchor.text('Show code');
          }
        });
        anchor.on('dblclick', function () {
          //							$("[cmd-ssn=showCode]").each( function () { 
          $("[cmd-ssn=displayCode]").each(function (a, b) {
            $(b).find('div').first().hide();
            $(b).find('a').text('Show code');
          });
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9tYWluXzEwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0NDakZBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTs7QUFDQSxDQUFDLENBQUM7QUFJRTtBQUNBLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCLElBQTdCLENBQWtDLFVBQVUsQ0FBVixFQUFhLENBQWIsRUFBYztBQUU1QyxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBTCxDQUFVLEtBQVYsQ0FBVjtBQUNBLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxJQUFMLENBQVUsU0FBVixDQUFkO0FBQ0EsUUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLElB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QyxJQUFqQjtBQUNBLFlBQUksQ0FBQyxNQUFMLEdBQWMsTUFBTSxRQUFwQjtBQUNBLFlBQUksQ0FBQyxTQUFMLEdBQWlCLElBQUksQ0FBQyxPQUF0QjtBQUVBLFlBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQSxVQUFFLENBQUMsTUFBSCxDQUFVLElBQVY7QUFFQSxvQkFBWSxDQUFDLE1BQWIsQ0FBb0IsRUFBcEI7QUFFSDtBQUNKLEtBakJEO0FBb0JILEdBM0JEO0FBNkJILENBektBLENBQUQ7O0FBOEtBLFNBQVMsT0FBVCxDQUFpQixRQUFqQixFQUF5QjtBQUVyQjtBQUVBLE1BQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFQLEVBQWhCO0FBQ0EsTUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVQsRUFBWjtBQUNBLE9BQUssQ0FBQyxrQkFBTixDQUF5QixRQUF6QixFQU5xQixDQU1lOztBQUNwQyxXQUFTLENBQUMsZUFBVjtBQUNBLFdBQVMsQ0FBQyxRQUFWLENBQW1CLEtBQW5CO0FBQ0EsVUFBUSxDQUFDLFdBQVQsQ0FBcUIsTUFBckI7QUFFSCxDIiwiZmlsZSI6ImJ1bmRsZV9tYWluXzEwMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxyXG4vLyAxMi8wMy8yMDE5IDEyOjAyIGFtIC0gU1NOIC0gWzIwMTkxMjAyLTIzNTNdIC0gWzAwM10gLSBEaXNwbGF5Q29kZSAtIEFkZGluZ1xyXG4vLyBDb3BpZWQgZnJvbSBDOlxcU2Ftc19Qcm9qZWN0c1xcX19TaGFyZWRTY3JpcHRzXHJcblxyXG4vLy8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvQHR5cGVzL2pxdWVyeS9pbmRleC5kLnRzXCIgLz4gXHJcblxyXG5cclxuLy8gMTAvMjMvMjAxOCAwNTo1NCBhbSAtIFNTTiAtIENvcGllZCBmb3JtIEM6XFxTYW1zX1Byb2plY3RzXFxQbHVyYWxTaWdodFxcYW5ndWxhcmpzLWZ1bmRhbWVudGFsc1xcZF9tYXN0ZXJcclxuLy8gMTAvMjkvMjAxOCAwODoyOCBhbSAtIFNTTiAtIEFkZGluZyBkZWZhdWx0VGl0bGVcclxuXHJcbi8vICoqKiBkaXNwbGF5Y29kZS1iZWdpbiAgaGlnaGxpZ2h0IFtdICBcclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICAvLyAwOS8yNi8yMDE4IDAyOjExIGFtIC0gU1NOIFxyXG4gICAgJCgnW2NtZC1zc249XCJkaXNwbGF5Q29kZVwiXScpLmVhY2goZnVuY3Rpb24gKGEsIGIpIHtcclxuXHJcbiAgICAgICAgdmFyIHVybCA9ICQoYikuYXR0cigndXJsJyk7XHJcbiAgICAgICAgdmFyIGRvRGVidWcgPSAkKGIpLmF0dHIoJ2RvRGVidWcnKTtcclxuICAgICAgICB2YXIgZGVmYXVsdFRpdGxlID0gJChiKS5hdHRyKCdkZWZhdWx0VGl0bGUnKTtcclxuXHJcbiAgICAgICAgLy8gMTAvMjUvMjAxOCAwNzowNyBhbSAtIFNTTiAtIEFkZGluZ1xyXG4gICAgICAgIHZhciB1c2VGaWxlU3lzdGVtID0gJChiKS5hdHRyKCd1c2VGaWxlU3lzdGVtJyk7XHJcblxyXG4gICAgICAgIC8vIDAxLzAxLzIwMTkgMDg6NTIgcG0gLSBTU04gaHR0cHNcclxuICAgICAgICB2YXIgcHJvdG9jb2wgPSBsb2NhdGlvbi5wcm90b2NvbDtcclxuICAgICAgICB2YXIgbG9jYWxob3N0UG9ydCA9ICc1NjU4MCc7XHJcblxyXG4gICAgICAgIGlmIChwcm90b2NvbC50b0xvd2VyQ2FzZSgpID09ICdodHRwczonKSB7XHJcbiAgICAgICAgICAgIGxvY2FsaG9zdFBvcnQgPSAnNDQzNjUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICAvLyAwMS8wMS8yMDE5IDA5OjMzIHBtIC0gU1NOXHJcbiAgICAgICAgICAgIC8vIHVybDogJ2h0dHA6Ly9kZXZzaXRlcy5ub25icy5vcmcvZGlzcGxheWNvZGUnLCBcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzAyLzIwMTkgMTE6NTMgcG0gLSBTU04gLSBbMjAxOTEyMDItMjM1M10gLSBbMDAxXSAtIERpc3BsYXlDb2RlIC0gQWRkaW5nXHJcblxyXG4gICAgICAgICAgICAvLyB1cmw6IHByb3RvY29sICsgJy8vZGV2c2l0ZXMubm9uYnMub3JnL2Rpc3BsYXljb2RlJyxcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzAzLzIwMTkgMDM6MDUgYW0gLSBTU04gLSBbMjAxOTEyMDItMjM1M10gLSBbMDA5XSAtIERpc3BsYXlDb2RlIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIC8vIHVybDogJy9hcGkvZGlzcGxheWNvZGUvJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9kaXNwbGF5Q29kZS9WU1RTQ29kZS8nLFxyXG5cclxuICAgICAgICAgICAgLy8gdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1NjU4MC9kaXNwbGF5Y29kZScsXHJcbiAgICAgICAgICAgIC8vIHVybDogcHJvdG9jb2wgKyAnLy9sb2NhbGhvc3Q6JyArIGxvY2FsaG9zdFBvcnQgICsgJy9kaXNwbGF5Y29kZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgdXJsOiB1cmwsIGRvRGVidWc6IGRvRGVidWcsIHVzZUZpbGVTeXN0ZW06IHVzZUZpbGVTeXN0ZW0gfSxcclxuXHJcbiAgICAgICAgICAgIC8vIDEyLzAzLzIwMTkgMDk6MDggYW0gLSBTU04gLSBEaXNwbGF5Q29kZSAtIEFkZGluZ1xyXG4gICAgICAgICAgICAvL2RhdGFUeXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCBzdGF0dXMsIHhocikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkZWZhdWx0VGl0bGUpID09PSBcInN0cmluZ1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZfZGVmYXVsdFRpdGxlID0gJChcIjxoMz5cIiArIGRlZmF1bHRUaXRsZSArIFwiPC9oMz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChiKS5hcHBlbmQoZGl2X2RlZmF1bHRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSAkKFwiPGEgY21kLXNzbj0nc2hvd0NvZGUnID5TaG93IGNvZGU8L2E+XCIpXHJcbiAgICAgICAgICAgICAgICAkKGIpLmFwcGVuZChhbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSAkKFwiPGRpdj48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuaHRtbChkYXRhW1wiZmluYWxSZXN1bHRcIl0pO1xyXG4gICAgICAgICAgICAgICAgZGl2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGRpdi5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXZfdGl0bGUgPSAkKFwiPGRpdj5cIiArIHVybCArIFwiPC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgJChiKS5hcHBlbmQoZGl2X3RpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoYikuYXBwZW5kKGRpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5jaG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGFuY2hvci50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgPT0gXCJTaG93IGNvZGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfdGl0bGUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGV4dCgnSGlkZSBjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfdGl0bGUuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGV4dCgnU2hvdyBjb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuY2hvci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0XHQkKFwiW2NtZC1zc249c2hvd0NvZGVdXCIpLmVhY2goIGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIltjbWQtc3NuPWRpc3BsYXlDb2RlXVwiKS5lYWNoKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYikuZmluZCgnZGl2JykuZmlyc3QoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYikuZmluZCgnYScpLnRleHQoJ1Nob3cgY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJ1tjbWQtU1NOPVwiZG9Db3B5XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgeDEgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvcHkxMDEoeDFbMF0pO1xyXG5cclxuICAgICAgICAvLyByZXR1cm47XHJcblxyXG4gICAgICAgIC8vICQodGhpcykuc2VsZWN0KCk7XHJcbiAgICAgICAgLy8gdmFyIHN0YXR1cyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgLy8gaWYgKHN0YXR1cykge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0NvcGllZCB0byBjbGlwYm9hcmQnKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBjb3B5IHRvIGNsaXBib2FyZCcpO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAwMy8yMy8yMDE5IDA4OjA4IHBtIC0gU1NOIC0gQWRkaW5nIHNzbmFsZXJ0XHJcbiAgICAkKCdbY21kLXNzbj1cInNzbmFsZXJ0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgYXBwY29kZSA9ICQodGhpcykuYXR0cihcImFwcGNvZGVcIik7XHJcbiAgICAgICAgdmFyIHBhdGggPSAkKHRoaXMpLmF0dHIoJ3BhdGgnKTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcInNzbmFsZXJ0OmFwcGNvZGU9XCIgKyBhcHBjb2RlICsgXCI7dGFyZ2V0ZmlsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwYXRoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbY21kLXNzbj1cInNzbmFsZXJ0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc3NuYWxlcnRMaW5rJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gMTIvMDMvMjAxOSAxMjowNSBhbSAtIFNTTiAtIFsyMDE5MTIwMi0yMzUzXSAtIFswMDRdIC0gRGlzcGxheUNvZGUgLSBBZGRpbmdcclxuICAgIC8vIEFkZGVkIGluaXRpYWxpemVyLlxyXG4gICAgbGV0IHNzbkxpbmtzTGlzdCA9IFtdO1xyXG5cclxuICAgICQoJ1tjbWQtc3NuPVwid3JpdGVMaW5rXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciB0b3BDb250YWluZXIgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgdGhpc1BvcyA9ICQodGhpcykuYXR0cigncG9zJyk7XHJcbiAgICAgICAgdmFyIHRhcmdldE5vID0gMDtcclxuXHJcbiAgICAgICAgJChzc25MaW5rc0xpc3QpLmVhY2goZnVuY3Rpb24gKG5keCwgb2JqMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iajEucG9zID09IHRoaXNQb3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRObysrO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBvYmoxLmhyZWY7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnRhcmdldCA9IFwid1wiICsgdGFyZ2V0Tm87XHJcbiAgICAgICAgICAgICAgICBsaW5rLmlubmVyVGV4dCA9IG9iajEuY2FwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpbmspXHJcblxyXG4gICAgICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChsaSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb3B5MTAxKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy8gdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICggc2VsZWN0b3IgKSA7XHJcblxyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoc2VsZWN0b3IpOyAvLyB0ZXh0ICk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9