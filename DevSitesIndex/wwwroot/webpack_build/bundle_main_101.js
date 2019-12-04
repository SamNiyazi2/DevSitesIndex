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
        console.log('main_101 - 20191203-0735 - 001 ');
        console.log(data);
        console.log(status);
        console.log(xhr);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdXRpbC9tYWluXzEwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0NDakZBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTs7QUFDQSxDQUFDLENBQUM7QUFJRTtBQUNBLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCLElBQTdCLENBQWtDLFVBQVUsQ0FBVixFQUFhLENBQWIsRUFBYztBQUU1QyxRQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssSUFBTCxDQUFVLEtBQVYsQ0FBVjtBQUNBLFFBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxJQUFMLENBQVUsU0FBVixDQUFkO0FBQ0EsUUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLElB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QUMsR0FBTCxJQUFZLE9BQWhCLEVBQXlCO0FBRXJCLGdCQUFRO0FBRVIsWUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLFlBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDLElBQWpCO0FBQ0EsWUFBSSxDQUFDLE1BQUwsR0FBYyxNQUFNLFFBQXBCO0FBQ0EsWUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDLE9BQXRCO0FBRUEsWUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtBQUNBLFVBQUUsQ0FBQyxNQUFILENBQVUsSUFBVjtBQUVBLG9CQUFZLENBQUMsTUFBYixDQUFvQixFQUFwQjtBQUVIO0FBQ0osS0FqQkQ7QUFvQkgsR0EzQkQ7QUE2QkgsQ0EvS0EsQ0FBRDs7QUFvTEEsU0FBUyxPQUFULENBQWlCLFFBQWpCLEVBQXlCO0FBRXJCO0FBRUEsTUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVAsRUFBaEI7QUFDQSxNQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVCxFQUFaO0FBQ0EsT0FBSyxDQUFDLGtCQUFOLENBQXlCLFFBQXpCLEVBTnFCLENBTWU7O0FBQ3BDLFdBQVMsQ0FBQyxlQUFWO0FBQ0EsV0FBUyxDQUFDLFFBQVYsQ0FBbUIsS0FBbkI7QUFDQSxVQUFRLENBQUMsV0FBVCxDQUFxQixNQUFyQjtBQUVILEMiLCJmaWxlIjoiYnVuZGxlX21haW5fMTAxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXHJcbi8vIDEyLzAzLzIwMTkgMTI6MDIgYW0gLSBTU04gLSBbMjAxOTEyMDItMjM1M10gLSBbMDAzXSAtIERpc3BsYXlDb2RlIC0gQWRkaW5nXHJcbi8vIENvcGllZCBmcm9tIEM6XFxTYW1zX1Byb2plY3RzXFxfX1NoYXJlZFNjcmlwdHNcclxuXHJcbi8vLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiBcclxuXHJcblxyXG4vLyAxMC8yMy8yMDE4IDA1OjU0IGFtIC0gU1NOIC0gQ29waWVkIGZvcm0gQzpcXFNhbXNfUHJvamVjdHNcXFBsdXJhbFNpZ2h0XFxhbmd1bGFyanMtZnVuZGFtZW50YWxzXFxkX21hc3RlclxyXG4vLyAxMC8yOS8yMDE4IDA4OjI4IGFtIC0gU1NOIC0gQWRkaW5nIGRlZmF1bHRUaXRsZVxyXG5cclxuLy8gKioqIGRpc3BsYXljb2RlLWJlZ2luICBoaWdobGlnaHQgW10gIFxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIC8vIDA5LzI2LzIwMTggMDI6MTEgYW0gLSBTU04gXHJcbiAgICAkKCdbY21kLXNzbj1cImRpc3BsYXlDb2RlXCJdJykuZWFjaChmdW5jdGlvbiAoYSwgYikge1xyXG5cclxuICAgICAgICB2YXIgdXJsID0gJChiKS5hdHRyKCd1cmwnKTtcclxuICAgICAgICB2YXIgZG9EZWJ1ZyA9ICQoYikuYXR0cignZG9EZWJ1ZycpO1xyXG4gICAgICAgIHZhciBkZWZhdWx0VGl0bGUgPSAkKGIpLmF0dHIoJ2RlZmF1bHRUaXRsZScpO1xyXG5cclxuICAgICAgICAvLyAxMC8yNS8yMDE4IDA3OjA3IGFtIC0gU1NOIC0gQWRkaW5nXHJcbiAgICAgICAgdmFyIHVzZUZpbGVTeXN0ZW0gPSAkKGIpLmF0dHIoJ3VzZUZpbGVTeXN0ZW0nKTtcclxuXHJcbiAgICAgICAgLy8gMDEvMDEvMjAxOSAwODo1MiBwbSAtIFNTTiBodHRwc1xyXG4gICAgICAgIHZhciBwcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sO1xyXG4gICAgICAgIHZhciBsb2NhbGhvc3RQb3J0ID0gJzU2NTgwJztcclxuXHJcbiAgICAgICAgaWYgKHByb3RvY29sLnRvTG93ZXJDYXNlKCkgPT0gJ2h0dHBzOicpIHtcclxuICAgICAgICAgICAgbG9jYWxob3N0UG9ydCA9ICc0NDM2NSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIC8vIDAxLzAxLzIwMTkgMDk6MzMgcG0gLSBTU05cclxuICAgICAgICAgICAgLy8gdXJsOiAnaHR0cDovL2RldnNpdGVzLm5vbmJzLm9yZy9kaXNwbGF5Y29kZScsIFxyXG5cclxuICAgICAgICAgICAgLy8gMTIvMDIvMjAxOSAxMTo1MyBwbSAtIFNTTiAtIFsyMDE5MTIwMi0yMzUzXSAtIFswMDFdIC0gRGlzcGxheUNvZGUgLSBBZGRpbmdcclxuXHJcbiAgICAgICAgICAgIC8vIHVybDogcHJvdG9jb2wgKyAnLy9kZXZzaXRlcy5ub25icy5vcmcvZGlzcGxheWNvZGUnLFxyXG5cclxuICAgICAgICAgICAgLy8gMTIvMDMvMjAxOSAwMzowNSBhbSAtIFNTTiAtIFsyMDE5MTIwMi0yMzUzXSAtIFswMDldIC0gRGlzcGxheUNvZGUgLSBBZGRpbmdcclxuICAgICAgICAgICAgLy8gdXJsOiAnL2FwaS9kaXNwbGF5Y29kZS8nLFxyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2Rpc3BsYXlDb2RlL1ZTVFNDb2RlLycsXHJcblxyXG4gICAgICAgICAgICAvLyB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjU2NTgwL2Rpc3BsYXljb2RlJyxcclxuICAgICAgICAgICAgLy8gdXJsOiBwcm90b2NvbCArICcvL2xvY2FsaG9zdDonICsgbG9jYWxob3N0UG9ydCAgKyAnL2Rpc3BsYXljb2RlJyxcclxuICAgICAgICAgICAgZGF0YTogeyB1cmw6IHVybCwgZG9EZWJ1ZzogZG9EZWJ1ZywgdXNlRmlsZVN5c3RlbTogdXNlRmlsZVN5c3RlbSB9LFxyXG5cclxuICAgICAgICAgICAgLy8gMTIvMDMvMjAxOSAwOTowOCBhbSAtIFNTTiAtIERpc3BsYXlDb2RlIC0gQWRkaW5nXHJcbiAgICAgICAgICAgIC8vZGF0YVR5cGU6ICd0ZXh0JyxcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgeGhyKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYWluXzEwMSAtIDIwMTkxMjAzLTA3MzUgLSAwMDEgJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkZWZhdWx0VGl0bGUpID09PSBcInN0cmluZ1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXZfZGVmYXVsdFRpdGxlID0gJChcIjxoMz5cIiArIGRlZmF1bHRUaXRsZSArIFwiPC9oMz5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJChiKS5hcHBlbmQoZGl2X2RlZmF1bHRUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSAkKFwiPGEgY21kLXNzbj0nc2hvd0NvZGUnID5TaG93IGNvZGU8L2E+XCIpXHJcbiAgICAgICAgICAgICAgICAkKGIpLmFwcGVuZChhbmNob3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXYgPSAkKFwiPGRpdj48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuaHRtbChkYXRhW1wiZmluYWxSZXN1bHRcIl0pO1xyXG4gICAgICAgICAgICAgICAgZGl2LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGRpdi5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5jaG9yLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkaXZfdGl0bGUgPSAkKFwiPGRpdj5cIiArIHVybCArIFwiPC9kaXY+XCIpO1xyXG4gICAgICAgICAgICAgICAgJChiKS5hcHBlbmQoZGl2X3RpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoYikuYXBwZW5kKGRpdik7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5jaG9yLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IGFuY2hvci50ZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQgPT0gXCJTaG93IGNvZGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfdGl0bGUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGV4dCgnSGlkZSBjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfdGl0bGUuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNob3IudGV4dCgnU2hvdyBjb2RlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGFuY2hvci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHRcdFx0XHRcdFx0XHQkKFwiW2NtZC1zc249c2hvd0NvZGVdXCIpLmVhY2goIGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgJChcIltjbWQtc3NuPWRpc3BsYXlDb2RlXVwiKS5lYWNoKGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYikuZmluZCgnZGl2JykuZmlyc3QoKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoYikuZmluZCgnYScpLnRleHQoJ1Nob3cgY29kZScpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJ1tjbWQtU1NOPVwiZG9Db3B5XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgeDEgPSAkKHRoaXMpO1xyXG4gICAgICAgIGNvcHkxMDEoeDFbMF0pO1xyXG5cclxuICAgICAgICAvLyByZXR1cm47XHJcblxyXG4gICAgICAgIC8vICQodGhpcykuc2VsZWN0KCk7XHJcbiAgICAgICAgLy8gdmFyIHN0YXR1cyA9IGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICAgICAgLy8gaWYgKHN0YXR1cykge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0NvcGllZCB0byBjbGlwYm9hcmQnKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgYWxlcnQoJ0ZhaWxlZCB0byBjb3B5IHRvIGNsaXBib2FyZCcpO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAwMy8yMy8yMDE5IDA4OjA4IHBtIC0gU1NOIC0gQWRkaW5nIHNzbmFsZXJ0XHJcbiAgICAkKCdbY21kLXNzbj1cInNzbmFsZXJ0XCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICB2YXIgYXBwY29kZSA9ICQodGhpcykuYXR0cihcImFwcGNvZGVcIik7XHJcbiAgICAgICAgdmFyIHBhdGggPSAkKHRoaXMpLmF0dHIoJ3BhdGgnKTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBcInNzbmFsZXJ0OmFwcGNvZGU9XCIgKyBhcHBjb2RlICsgXCI7dGFyZ2V0ZmlsZT1cIiArIGVuY29kZVVSSUNvbXBvbmVudChwYXRoKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCdbY21kLXNzbj1cInNzbmFsZXJ0XCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc3NuYWxlcnRMaW5rJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gMTIvMDMvMjAxOSAxMjowNSBhbSAtIFNTTiAtIFsyMDE5MTIwMi0yMzUzXSAtIFswMDRdIC0gRGlzcGxheUNvZGUgLSBBZGRpbmdcclxuICAgIC8vIEFkZGVkIGluaXRpYWxpemVyLlxyXG4gICAgbGV0IHNzbkxpbmtzTGlzdCA9IFtdO1xyXG5cclxuICAgICQoJ1tjbWQtc3NuPVwid3JpdGVMaW5rXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHZhciB0b3BDb250YWluZXIgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICB2YXIgdGhpc1BvcyA9ICQodGhpcykuYXR0cigncG9zJyk7XHJcbiAgICAgICAgdmFyIHRhcmdldE5vID0gMDtcclxuXHJcbiAgICAgICAgJChzc25MaW5rc0xpc3QpLmVhY2goZnVuY3Rpb24gKG5keCwgb2JqMSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKG9iajEucG9zID09IHRoaXNQb3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRObysrO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSBvYmoxLmhyZWY7XHJcbiAgICAgICAgICAgICAgICBsaW5rLnRhcmdldCA9IFwid1wiICsgdGFyZ2V0Tm87XHJcbiAgICAgICAgICAgICAgICBsaW5rLmlubmVyVGV4dCA9IG9iajEuY2FwdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKGxpbmspXHJcblxyXG4gICAgICAgICAgICAgICAgdG9wQ29udGFpbmVyLmFwcGVuZChsaSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjb3B5MTAxKHNlbGVjdG9yKSB7XHJcblxyXG4gICAgLy8gdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yICggc2VsZWN0b3IgKSA7XHJcblxyXG4gICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoc2VsZWN0b3IpOyAvLyB0ZXh0ICk7XHJcbiAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9