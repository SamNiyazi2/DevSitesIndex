!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e){function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?t.exports=n=function(t){return o(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)},n(e)}t.exports=n},function(t,e,o){t.exports=o(2)},function(t,e,o){"use strict";o.r(e);var n,r,i=o(0),u=o.n(i);n=function(){$("pre").each((function(t){$(this).hide();var e="",o=$(this).attr("title"),n="";void 0!==o?(e=" title='"+o+"' ",n=": "+o):o="",$('<p><a cmd-name="showsibling" '+e+" >Show code"+n+"</a></p>").insertBefore(this)})),document.querySelectorAll("pre").forEach((function(t,e,o){var n=t.innerHTML.replace(/(<)((?!\/?[n|i|h]))(.*?>)/g,"&lt;$3");t.innerHTML=n})),$("[cmd-name]").on("click",(function(t){if("showsibling"===$(this).attr("cmd-name")){var e=$(this).parent().next(),o=$(this),n=$(this).attr("title"),r="";void 0===n?n="":r=": "+n,e.is(":visible")?(o.text("Show code"+r),e.fadeOut()):(e.fadeIn(),o.text("Hide code"+r))}}))},r=/(19|20|21)\d\d([-\/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:\/.])(\d\d)([:\/.])(\d\d)/,$((function(){!function(){$("[cmd-name]").on("click",(function(e){var o=$(this).attr("cmd-name"),n=$(this).attr("popup-name"),r=$(this).attr("jQueryObjectName"),i=$(this).attr("jQueryObjectName2");if("open-popup"===o&&($(n).modal({backdrop:"static",keyboard:!1}),$("#addSite_PageContent").load("/times/start")),"hideObject"===o&&$(r).hide(),"showObject"===o&&$(r).show(),"smooth-scroll"===o&&document.querySelector(r).scrollIntoView({behavior:"smooth"}),"set-default-time"===o){var u=new Date,a=u.getFullYear()+"-"+t(u.getMonth()+1,2,"0")+"-"+t(u.getDate(),2,"0")+"T"+t(u.getHours(),2,"0")+":"+t(u.getMinutes(),2,"0")+":"+t(u.getSeconds(),2,"0");$(r).val(a)}if("set-TotalPeriod"===o){var c=new Date,l=$(r)[0].value,f=new Date(l),s=c.getTime().valueOf()-f.getTime().valueOf(),d=Math.floor(s/1e3);$(i).val(d)}}));var t=function(t,e,o){var n=t.toString();return n.length>e?n:(o.repeat(e)+n).substring(e+(n.length-e))};$(window).on("scroll",(function(){$(window).scrollTop()>0?$(".fixed_anchor").fadeIn("slow"):$(".fixed_anchor").fadeOut("slow")}))}(),setTimeout(n,2e3)}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1NhbXMvRGV2U2l0ZXNJbmRleC9EZXZTaXRlc0luZGV4L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zaXRlLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiX3R5cGVvZjIiLCJvYmoiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiX3R5cGVvZiIsInByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciIsImlzbzg2MDFSZWdFeCIsIiQiLCJlYWNoIiwiYWEiLCJ0aGlzIiwiaGlkZSIsInRpdGxlQXR0cmliIiwiX3RpdGxlIiwiYXR0ciIsIl90aXRsZV9jYXB0aW9uIiwidW5kZWZpbmVkIiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImEiLCJjdXJyZW50SW5kZXgiLCJsaXN0T2JqIiwiYiIsImlubmVySFRNTCIsInJlcGxhY2UiLCJvbiIsImUiLCJfcHJlIiwicGFyZW50IiwibmV4dCIsIl9saW5rIiwiaXMiLCJ0ZXh0IiwiZmFkZU91dCIsImZhZGVJbiIsImNtZE5hbWUiLCJwb3B1cE5hbWUiLCJqUXVlcnlPYmplY3ROYW1lIiwialF1ZXJ5T2JqZWN0TmFtZTIiLCJtb2RhbCIsImJhY2tkcm9wIiwia2V5Ym9hcmQiLCJsb2FkIiwic2hvdyIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiRGF0ZSIsImNkIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwidmFsIiwiZDExIiwic2VsZWN0ZWREYXRlIiwiZDEyIiwiZGVsdGFfMSIsImdldFRpbWUiLCJ2YWx1ZU9mIiwiZGVsdGFfMiIsIk1hdGgiLCJmbG9vciIsInN0cjEiLCJsZW4iLCJzdHIiLCJ0b1N0cmluZyIsImxlbmd0aCIsInJlcGVhdCIsInN1YnN0cmluZyIsIndpbmRvdyIsInNjcm9sbFRvcCIsInNldERlZmF1bHRzIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxPQUFPRixFQUNwQixHQUFXLEVBQVBFLEdBQThCLGlCQUFWRixHQUFzQkEsR0FBU0EsRUFBTUcsV0FBWSxPQUFPSCxFQUNoRixJQUFJSSxFQUFLWCxPQUFPWSxPQUFPLE1BR3ZCLEdBRkExQixFQUFvQmtCLEVBQUVPLEdBQ3RCWCxPQUFPQyxlQUFlVSxFQUFJLFVBQVcsQ0FBRVQsWUFBWSxFQUFNSyxNQUFPQSxJQUN0RCxFQUFQRSxHQUE0QixpQkFBVEYsRUFBbUIsSUFBSSxJQUFJTSxLQUFPTixFQUFPckIsRUFBb0JVLEVBQUVlLEVBQUlFLEVBQUssU0FBU0EsR0FBTyxPQUFPTixFQUFNTSxJQUFRQyxLQUFLLEtBQU1ELElBQzlJLE9BQU9GLEdBSVJ6QixFQUFvQjZCLEVBQUksU0FBUzFCLEdBQ2hDLElBQUlTLEVBQVNULEdBQVVBLEVBQU9xQixXQUM3QixXQUF3QixPQUFPckIsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQUgsRUFBb0JVLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJaLEVBQW9CYSxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6Ry9CLEVBQW9Ca0MsRUFBSSxHQUlqQmxDLEVBQW9CQSxFQUFvQm1DLEVBQUksRyxnQkNsRnJELFNBQVNDLEVBQVNDLEdBQTRULE9BQTFPRCxFQUFyRCxtQkFBWGpCLFFBQW9ELGlCQUFwQkEsT0FBT21CLFNBQW9DLFNBQWtCRCxHQUFPLGNBQWNBLEdBQTRCLFNBQWtCQSxHQUFPLE9BQU9BLEdBQXlCLG1CQUFYbEIsUUFBeUJrQixFQUFJRSxjQUFnQnBCLFFBQVVrQixJQUFRbEIsT0FBT2EsVUFBWSxnQkFBa0JLLElBQTBCQSxHQUU5VixTQUFTRyxFQUFRSCxHQVdmLE1BVnNCLG1CQUFYbEIsUUFBdUQsV0FBOUJpQixFQUFTakIsT0FBT21CLFVBQ2xEbkMsRUFBT0QsUUFBVXNDLEVBQVUsU0FBaUJILEdBQzFDLE9BQU9ELEVBQVNDLElBR2xCbEMsRUFBT0QsUUFBVXNDLEVBQVUsU0FBaUJILEdBQzFDLE9BQU9BLEdBQXlCLG1CQUFYbEIsUUFBeUJrQixFQUFJRSxjQUFnQnBCLFFBQVVrQixJQUFRbEIsT0FBT2EsVUFBWSxTQUFXSSxFQUFTQyxJQUl4SEcsRUFBUUgsR0FHakJsQyxFQUFPRCxRQUFVc0MsRyx3RUNpSVRDLEVBd0dBQyxFLGdCQXhHQUQsRUFBOEIsV0FNOUJFLEVBQUUsT0FBT0MsTUFBSyxTQUFVQyxHQUVwQkYsRUFBRUcsTUFBTUMsT0FFUixJQUFJQyxFQUFjLEdBRWRDLEVBQVNOLEVBQUVHLE1BQU1JLEtBQUssU0FDdEJDLEVBQWlCLFFBRU5DLElBQVhILEdBRUFELEVBQWMsV0FBYUMsRUFBUyxLQUNwQ0UsRUFBaUIsS0FBT0YsR0FHeEJBLEVBQVMsR0FHYk4sRUFBRSxnQ0FBa0NLLEVBQWMsY0FBZ0JHLEVBQWlCLFlBQVlFLGFBQWFQLFNBTXBHUSxTQUFTQyxpQkFBaUIsT0FLaENDLFNBQVEsU0FBVUMsRUFBR0MsRUFBY0MsR0FjckMsSUFBSUMsRUFBSUgsRUFBRUksVUFBVUMsUUFBUSw2QkFBOEIsVUFHMURMLEVBQUVJLFVBQVlELEtBU2xCakIsRUFBRSxjQUFjb0IsR0FBRyxTQUFTLFNBQVVDLEdBSWxDLEdBQWdCLGdCQUZGckIsRUFBRUcsTUFBTUksS0FBSyxZQUVJLENBRzNCLElBQUllLEVBQU90QixFQUFFRyxNQUFNb0IsU0FBU0MsT0FDeEJDLEVBQVF6QixFQUFFRyxNQUdWRyxFQUFTTixFQUFFRyxNQUFNSSxLQUFLLFNBQ3RCQyxFQUFpQixRQUVOQyxJQUFYSCxFQUNBQSxFQUFTLEdBR1RFLEVBQWlCLEtBQU9GLEVBR3hCZ0IsRUFBS0ksR0FBRyxhQUNSRCxFQUFNRSxLQUFLLFlBQWNuQixHQUN6QmMsRUFBS00sWUFFTE4sRUFBS08sU0FDTEosRUFBTUUsS0FBSyxZQUFjbkIsU0FpQnJDVCxFQUFlLHFHQTZCbkJDLEdBQUUsWUF0UWdCLFdBRWRBLEVBQUUsY0FBY29CLEdBQUcsU0FBUyxTQUFVQyxHQUVsQyxJQUFJUyxFQUFVOUIsRUFBRUcsTUFBTUksS0FBSyxZQUN2QndCLEVBQVkvQixFQUFFRyxNQUFNSSxLQUFLLGNBQ3pCeUIsRUFBbUJoQyxFQUFFRyxNQUFNSSxLQUFLLG9CQUNoQzBCLEVBQW9CakMsRUFBRUcsTUFBTUksS0FBSyxxQkFpQ3JDLEdBN0JnQixlQUFadUIsSUFDQTlCLEVBQUUrQixHQUFXRyxNQUFNLENBQUVDLFNBQVUsU0FBVUMsVUFBVSxJQUVuRHBDLEVBQUUsd0JBQXdCcUMsS0FBSyxpQkFJbkIsZUFBWlAsR0FFQTlCLEVBQUVnQyxHQUFrQjVCLE9BSVIsZUFBWjBCLEdBRUE5QixFQUFFZ0MsR0FBa0JNLE9BSVIsa0JBQVpSLEdBR0FuQixTQUFTNEIsY0FBY1AsR0FBa0JRLGVBQWUsQ0FDcERDLFNBQVUsV0FNRixxQkFBWlgsRUFBZ0MsQ0FFaEMsSUFBSS9ELEVBQUksSUFBSTJFLEtBRVJDLEVBQUs1RSxFQUFFNkUsY0FBZ0IsSUFBTXJELEVBQUV4QixFQUFFOEUsV0FBYSxFQUFHLEVBQUcsS0FBTyxJQUFNdEQsRUFBRXhCLEVBQUUrRSxVQUFXLEVBQUcsS0FBTyxJQUFNdkQsRUFBRXhCLEVBQUVnRixXQUFZLEVBQUcsS0FBTyxJQUFNeEQsRUFBRXhCLEVBQUVpRixhQUFjLEVBQUcsS0FBTyxJQUFNekQsRUFBRXhCLEVBQUVrRixhQUFjLEVBQUcsS0FFM0xqRCxFQUFFZ0MsR0FBa0JrQixJQUFJUCxHQU81QixHQUFnQixvQkFBWmIsRUFBK0IsQ0FRL0IsSUFBSXFCLEVBQU0sSUFBSVQsS0FFVlUsRUFBMENwRCxFQUFFZ0MsR0FBa0IsR0FBSXRELE1BRWxFMkUsRUFBTSxJQUFJWCxLQUFLVSxHQUVmRSxFQUFVSCxFQUFJSSxVQUFVQyxVQUFZSCxFQUFJRSxVQUFVQyxVQUVsREMsRUFBVUMsS0FBS0MsTUFBTUwsRUFBVSxLQUVuQ3RELEVBQUVpQyxHQUFtQmlCLElBQUlPLE9BY2pDLElBQUlsRSxFQUFJLFNBQVVxRSxFQUFNQyxFQUFLLEdBRXpCLElBQUlDLEVBQU1GLEVBQUtHLFdBQ2YsT0FBSUQsRUFBSUUsT0FBU0gsRUFBWUMsR0FDcEIsRUFBS0csT0FBT0osR0FBT0MsR0FDaEJJLFVBQVVMLEdBQU9DLEVBQUlFLE9BQVNILEtBUTlDN0QsRUFBRW1FLFFBQVEvQyxHQUFHLFVBQVUsV0FDWHBCLEVBQUVtRSxRQUFRQyxZQUVWLEVBQ0pwRSxFQUFFLGlCQUFpQjZCLE9BQU8sUUFFMUI3QixFQUFFLGlCQUFpQjRCLFFBQVEsV0FnS25DeUMsR0FLQUMsV0FBV3hFLEVBQTZCIiwiZmlsZSI6ImJ1bmRsZV9TaXRlX29ubHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJmdW5jdGlvbiBfdHlwZW9mMihvYmopIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YyID0gZnVuY3Rpb24gX3R5cGVvZjIob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mMiA9IGZ1bmN0aW9uIF90eXBlb2YyKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZjIob2JqKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YyKFN5bWJvbC5pdGVyYXRvcikgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IF90eXBlb2YyKG9iaik7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCLvu79cclxuLy8gMDUvMTkvMjAxOSAwMToxOCBwbSAtIFNTTiAtIFsyMDE5MDUxOS0xMTMyXSAtIFswMDddIC0gQWRkcmVzcyBkZWZpbml0ZWx5IHR5cGVkIGVycm9ycyAtIE5vIGVycm9yc1xyXG5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL25vZGVfbW9kdWxlcy9AdHlwZXMvanF1ZXJ5L2luZGV4LmQudHNcIiAvPiAgIFxyXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vbm9kZV9tb2R1bGVzX2hhY2svU1NOX2pxdWVyeV9tb2RhbC5kLnRzXCIgLz5cclxuXHJcblxyXG5cclxuLy8wOC8yMy8yMDE4IDAxOjI0IGFtIC0gU1NOXHJcblxyXG4vLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG5cclxudmFyIHNpdGVfaW5zdGFuY2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICB2YXIgc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuICAgICAgICAgICAgdmFyIHBvcHVwTmFtZSA9ICQodGhpcykuYXR0cigncG9wdXAtbmFtZScpO1xyXG4gICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZSA9ICQodGhpcykuYXR0cignalF1ZXJ5T2JqZWN0TmFtZScpO1xyXG4gICAgICAgICAgICB2YXIgalF1ZXJ5T2JqZWN0TmFtZTIgPSAkKHRoaXMpLmF0dHIoJ2pRdWVyeU9iamVjdE5hbWUyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgIGFsZXJ0KCdjbGlja2VkIG1lISBjbWROYW1lIFsnICsgY21kTmFtZSArIFwiXSBwb3B1cC1uYW1lICBbXCIgKyBwb3B1cE5hbWUgKyBcIl1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJvcGVuLXBvcHVwXCIpIHtcclxuICAgICAgICAgICAgICAgICQocG9wdXBOYW1lKS5tb2RhbCh7IGJhY2tkcm9wOiAnc3RhdGljJywga2V5Ym9hcmQ6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjYWRkU2l0ZV9QYWdlQ29udGVudFwiKS5sb2FkKFwiL3RpbWVzL3N0YXJ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAwMy8xNC8yMDE5IDA5OjMzIGFtIC0gU1NOIC0gQWRkaW5nIGhpZGUgYW5kIHNob3dcclxuICAgICAgICAgICAgaWYgKGNtZE5hbWUgPT09IFwiaGlkZU9iamVjdFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJChqUXVlcnlPYmplY3ROYW1lKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzaG93T2JqZWN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNtb290aC1zY3JvbGxcIikge1xyXG4gICAgICAgICAgICAgICAgLy8kKCdib2R5Jykuc2Nyb2xsc3B5KHsgdGFyZ2V0OiBqUXVlcnlPYmplY3ROYW1lIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoalF1ZXJ5T2JqZWN0TmFtZSkuc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIDA0LzA4LzIwMTkgMDE6MzMgYW0gLSBTU04gLSBbMjAxOTA0MDctMjM0NV0gLSBUaW1lTG9nXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtZGVmYXVsdC10aW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNkID0gZC5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBwKGQuZ2V0TW9udGgoKSArIDEsIDIsICcwJykgKyBcIi1cIiArIHAoZC5nZXREYXRlKCksIDIsICcwJykgKyBcIlRcIiArIHAoZC5nZXRIb3VycygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0TWludXRlcygpLCAyLCAnMCcpICsgXCI6XCIgKyBwKGQuZ2V0U2Vjb25kcygpLCAyLCAnMCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoalF1ZXJ5T2JqZWN0TmFtZSkudmFsKGNkKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAvLyAwNC8xOS8yMDE5IDA0OjQ4IHBtIC0gU1NOIC0gWzIwMTkwNDE5LTE2NDddIC0gU2V0IGFtb3VudCBmb3IgVG90YWxTZWNvbmRzXHJcblxyXG4gICAgICAgICAgICBpZiAoY21kTmFtZSA9PT0gXCJzZXQtVG90YWxQZXJpb2RcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyAwNS8xOS8yMDE5IDAxOjEwIHBtIC0gU1NOIC0gQWRkcmVzc2luZyBlcnJvci4gc3RyaW5nIHwgbnVtYmVyIHwgc3RyaW5nW10gY2Fubm90IGNvbnZlcnQgdG9wIHN0cmluZyB8IG51bWJlclxyXG5cclxuICAgICAgICAgICAgICAgIC8vIDA1LzIwMjAxOSAwMjozOSBwbSAtIFNTTiAtIE5vIGNhbGN1bGF0aW5nIGVsYXBzZWQgdGltZSBjb3JyZWN0bHkgd2l0aCBUeXBlU2NyaXB0IGNvbnZlcnNpb24uXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBkMTEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RlZERhdGU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD4kKGpRdWVyeU9iamVjdE5hbWUpWzBdKS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZDEyID0gbmV3IERhdGUoc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFfMSA9IGQxMS5nZXRUaW1lKCkudmFsdWVPZigpIC0gZDEyLmdldFRpbWUoKS52YWx1ZU9mKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhXzIgPSBNYXRoLmZsb29yKGRlbHRhXzEgLyAxMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGpRdWVyeU9iamVjdE5hbWUyKS52YWwoZGVsdGFfMik7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcblxyXG4gICAgICAgIC8vIGZ1bmN0aW9uIHAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcbiAgICAgICAgdmFyIHAgPSBmdW5jdGlvbiAoc3RyMSwgbGVuLCBjaGFyKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgc3RyID0gc3RyMS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGxlbikgcmV0dXJuIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMxID0gY2hhci5yZXBlYXQobGVuKSArIHN0cjtcclxuICAgICAgICAgICAgdmFyIHMyID0gczEuc3Vic3RyaW5nKGxlbiArIChzdHIubGVuZ3RoIC0gbGVuKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gczI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gMDMvMTQvMjAxOSAxMDoyOCBhbSAtIFNTTlxyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoeSA+IDApIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5maXhlZF9hbmNob3InKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gMDgvMjEvMjAxOSAwMTo0OCBwbSBcclxuICAgIC8vIDA5LzIxLzIwMTkgMTI6MjcgcG0gLSBTU04gLSBbMjAxOTA5LTEyMjddIFJldmlzZSB0byBhY2NvbW1vZGF0ZSBCYWJlbC9XZWJwYWNrXHJcbiAgICAvLyBmdW5jdGlvbiBzaG93Q29sbGFwc2VkRGl2cygpIHtcclxuICAgIHZhciBzaG93Q29sbGFwc2VkRGl2cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgJChcIltkYXRhLXRvZ2dsZT0nY29sbGFwc2UnXVwiKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yKCkge1xyXG4gICAgdmFyIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvciA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI2LzIwMTkgMDk6NTYgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAxXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcbiAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG5cclxuICAgICAgICAkKCdwcmUnKS5lYWNoKGZ1bmN0aW9uIChhYSkge1xyXG5cclxuICAgICAgICAgICAgJCh0aGlzKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdGl0bGVBdHRyaWIgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cihcInRpdGxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgX3RpdGxlX2NhcHRpb24gPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKF90aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGl0bGVBdHRyaWIgPSBcIiB0aXRsZT0nXCIgKyBfdGl0bGUgKyBcIicgXCJcclxuICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJCgnPHA+PGEgY21kLW5hbWU9XCJzaG93c2libGluZ1wiICcgKyB0aXRsZUF0dHJpYiArICcgPlNob3cgY29kZScgKyBfdGl0bGVfY2FwdGlvbiArICc8L2E+PC9wPicpLmluc2VydEJlZm9yZSh0aGlzKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDA1LzAxLzIwMTkgMDQ6NTIgYW0gLSBTU04gLSBVc2UgSmF2YVNjcmlwdCBvbmx5XHJcblxyXG4gICAgICAgIHZhciBsaXN0MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xyXG5cclxuICAgICAgICAvLyAwNS8xOS8yMDE5IDEyOjMwIHBtIC0gU1NOIC0gWzIwMTkwNTE5LTExMzJdIC0gWzAwNF0gLSBBZGRyZXNzIGRlZmluaXRlbHkgdHlwZWQgZXJyb3JzXHJcbiAgICAgICAgLy8gZm9yICh2YXIgYSBvZiBsaXN0MSkge1xyXG4gICAgICAgIC8vIGxpc3QxLmZvckVhY2goZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuICAgICAgICBsaXN0MS5mb3JFYWNoKGZ1bmN0aW9uIChhLCBjdXJyZW50SW5kZXgsIGxpc3RPYmopIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDA1LzE3LzIwMTkgMDQ6MTYgYW0gLSBTU04gLSBVcGRhdGUgdG8gZXhjbHVkZSBoaWdobGlnaHRpbmdcclxuICAgICAgICAgICAgLy92YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwvZywgJyZsdDsnKTsgIFxyXG4gICAgICAgICAgICAvLyBFeGNsdWRlIDxoIGFuZCA8bi4gQWxyZWFkeSBzZXR1cCBmb3IgPGkuICBTZWUgc2l0ZS5jc3MuXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMDYvMDcvMjAxOSAxMTo1MCBhbSAtIFNTTiAtIFVwZGF0ZSAtIE1hdGNoZXMgc2hvd24gaHR0cHM6Ly93d3cucmVnZXh0ZXN0ZXIuY29tL1xyXG4gICAgICAgICAgICAvLyB2YXIgYiA9IGEuaW5uZXJIVE1MLnJlcGxhY2UoLzwoW15pfF4vaXxeaHxeL2h8Xm58Xi9uXSl7MX1bXlxcc3xePl17MX0vZywgJyZsdDskMScpO1xyXG5cclxuICAgICAgICAgICAgLy8gdmFyIGIgPSBhLmlubmVySFRNTC5yZXBsYWNlKC8oPCkoKD8hXFwvP1tufGl8aF0pKSguKj8+KS9nLCAnXFxuMS0tLVxcblskJl1cXG4yLS0tXFxuWyQxXVxcbjMtLS1cXG5bJDJdXFxuNC0tLVxcblskM11cXG5cXG4nKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgbm90IGNvdmVycmVkIGgxLCBoMiwgZXRjLlxyXG4gICAgICAgICAgICAvLyBrbm9ja291dCBpcyBkb2luZyBpdHMgb3duIHRoaW5nIHdoZW4gaXQgY29tZXMgdG8gdGFncy4gRXZpZGVudCB3aXRoIHRoZSB1c2Ugb2YgZ2VuZXJpYyB0eXBlcyAoIGZ1bmN0aW9uPFNvbWVUeXBlPiApXHJcbiAgICAgICAgICAgIHZhciBiID0gYS5pbm5lckhUTUwucmVwbGFjZSgvKDwpKCg/IVxcLz9bbnxpfGhdKSkoLio/PikvZywgJyZsdDskMycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGEuaW5uZXJIVE1MID0gYjtcclxuXHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIDA0LzI2LzIwMTkgMTA6MTQgcG0gLSBTU04gLSBbMjAxOTA0MjYtMjE1Nl0gLSBbMDAyXSAtIEhpZGUgcHJlIGFuZCBhZGQgYSBsaW5rIHRvIHNob3cuXHJcblxyXG4gICAgICAgICQoXCJbY21kLW5hbWVdXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY21kTmFtZSA9ICQodGhpcykuYXR0cignY21kLW5hbWUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjbWROYW1lID09PSBcInNob3dzaWJsaW5nXCIpIHtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIF9wcmUgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBfbGluayA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMDYvMDEvMjAxOSAwODowNyBwbSAtIFNTTiAtIFsyMDE5MDYwMS0yMDA3XSAtIEFkZCB0aXRsZVxyXG4gICAgICAgICAgICAgICAgbGV0IF90aXRsZSA9ICQodGhpcykuYXR0cigndGl0bGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBfdGl0bGVfY2FwdGlvbiA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF90aXRsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RpdGxlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aXRsZV9jYXB0aW9uID0gXCI6IFwiICsgX3RpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfcHJlLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBfbGluay50ZXh0KCdTaG93IGNvZGUnICsgX3RpdGxlX2NhcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIF9wcmUuZmFkZU91dCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfcHJlLmZhZGVJbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIF9saW5rLnRleHQoJ0hpZGUgY29kZScgKyBfdGl0bGVfY2FwdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gMDQvMjkvMjAxOSAwNzozNiBwbSAtIFNTTiAtIFsyMDE5MDQyOS0xNzQ4XSAtIFswMDZdIC0gQW5ndWxhciBjbG9jayBvdXQgcG9wdXAgIC0gQmVnaW5cclxuXHJcbiAgICAvLyBTb3VyY2UgaHR0cHM6Ly93d3cuYy1zaGFycGNvcm5lci5jb20vVXBsb2FkRmlsZS8xZDMxMTkvZGF0ZS1zZXJpYWxpemF0aW9uLXdpdGgtYW5ndWxhci1qcy13ZWItYXBpL1xyXG5cclxuICAgIHZhciBpc284NjAxUmVnRXggPSAvKDE5fDIwfDIxKVxcZFxcZChbLS8uXSkoMFsxLTldfDFbMDEyXSlcXDIoMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkoWzovLl0pKFxcZFxcZCkvO1xyXG5cclxuXHJcbiAgICAvLyAwOS8yMS8yMDE5IDEyOjI3IHBtIC0gU1NOIC0gWzIwMTkwOS0xMjI3XSBSZXZpc2UgdG8gYWNjb21tb2RhdGUgQmFiZWwvV2VicGFja1xyXG4gICAgLy8gZnVuY3Rpb24gZm5Db252ZXJEYXRlKGlucHV0KSB7XHJcbiAgICB2YXIgZm5Db252ZXJEYXRlID0gZnVuY3Rpb24gKGlucHV0KSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgIT09IFwib2JqZWN0XCIpIHJldHVybiBpbnB1dDtcclxuXHJcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGlucHV0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlucHV0Lmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gaW5wdXRba2V5XTtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaDtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIChtYXRjaCA9IHZhbHVlLm1hdGNoKGlzbzg2MDFSZWdFeCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFtrZXldID0gbmV3IERhdGUodmFsdWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgZm5Db252ZXJEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIHNldERlZmF1bHRzKCk7XHJcblxyXG4gICAgICAgIC8vIDA0LzI5LzIwMTkgMDc6MzYgcG0gLSBTU04gLSBbMjAxOTA0MjktMTc0OF0gLSBbMDA2XSAtIEFuZ3VsYXIgY2xvY2sgb3V0IHBvcHVwICAtIEVuZFxyXG4gICAgICAgIC8vIDA5LzEwLzIwMTkgMDg6NTMgcG0gLSBTU04gLSBSZXBsYWNlZFxyXG4gICAgICAgIC8vIDA5LzExLzIwMTkgMDc6MDggYW0gLSBTU04gLSBEZXZTaXRlSW5kZXggcDEgZGF0YSBpcyBjb21pbmcgYWZ0ZXIgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiAgICAgICAgc2V0VGltZW91dChwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IsIDIwMDApO1xyXG4gICAgICAgIC8vJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gICAgY29uc29sZS5sb2coJzIwMTkwOTEwLTIwNTQgLSBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IgdGltZW91dCB0byBqcXVlcnkgcmVhZHknKTtcclxuICAgICAgICAvLyAgICBwcmVmaXhQcmVXaXRoU2hvd0hpZGVBbmNob3IoKTtcclxuICAgICAgICAvL30pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgZm5Db252ZXJEYXRlOiBmbkNvbnZlckRhdGUsXHJcbiAgICAgICAgc2hvd0NvbGxhcHNlZERpdnM6IHNob3dDb2xsYXBzZWREaXZzLFxyXG4gICAgICAgIHByZWZpeFByZVdpdGhTaG93SGlkZUFuY2hvcjogcHJlZml4UHJlV2l0aFNob3dIaWRlQW5jaG9yXHJcbiAgICB9O1xyXG5cclxufSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgeyBzaXRlX2luc3RhbmNlIH07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9