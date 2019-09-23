// 05/19/2019 01:18 pm - SSN - [20190519-1132] - [007] - Address definitely typed errors - No errors
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />   
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />
//08/23/2018 01:24 am - SSN
// 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
var site_instance = function () {
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    var setDefaults = function () {
        $("[cmd-name]").on('click', function (e) {
            var cmdName = $(this).attr('cmd-name');
            var popupName = $(this).attr('popup-name');
            var jQueryObjectName = $(this).attr('jQueryObjectName');
            var jQueryObjectName2 = $(this).attr('jQueryObjectName2');
            //      alert('clicked me! cmdName [' + cmdName + "] popup-name  [" + popupName + "]");
            if (cmdName === "open-popup") {
                $(popupName).modal({ backdrop: 'static', keyboard: false });
                $("#addSite_PageContent").load("/times/start");
            }
            // 03/14/2019 09:33 am - SSN - Adding hide and show
            if (cmdName === "hideObject") {
                $(jQueryObjectName).hide();
            }
            if (cmdName === "showObject") {
                $(jQueryObjectName).show();
            }
            if (cmdName === "smooth-scroll") {
                //$('body').scrollspy({ target: jQueryObjectName });
                document.querySelector(jQueryObjectName).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // 04/08/2019 01:33 am - SSN - [20190407-2345] - TimeLog
            if (cmdName === "set-default-time") {
                var d = new Date();
                var cd = d.getFullYear() + "-" + p(d.getMonth() + 1, 2, '0') + "-" + p(d.getDate(), 2, '0') + "T" + p(d.getHours(), 2, '0') + ":" + p(d.getMinutes(), 2, '0') + ":" + p(d.getSeconds(), 2, '0');
                $(jQueryObjectName).val(cd);
            }
            // 04/19/2019 04:48 pm - SSN - [20190419-1647] - Set amount for TotalSeconds
            if (cmdName === "set-TotalPeriod") {
                // 05/19/2019 01:10 pm - SSN - Addressing error. string | number | string[] cannot convert top string | number
                // 05/202019 02:39 pm - SSN - No calculating elapsed time correctly with TypeScript conversion.
                var d11 = new Date();
                var selectedDate = $(jQueryObjectName)[0].value;
                var d12 = new Date(selectedDate);
                var delta_1 = d11.getTime().valueOf() - d12.getTime().valueOf();
                var delta_2 = Math.floor(delta_1 / 1000);
                $(jQueryObjectName2).val(delta_2);
            }
        });
        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function p(str1, len, char) {
        var p = function (str1, len, char) {
            var str = str1.toString();
            if (str.length > len)
                return str;
            var s1 = char.repeat(len) + str;
            var s2 = s1.substring(len + (str.length - len));
            return s2;
        };
        // 03/14/2019 10:28 am - SSN
        $(window).on('scroll', function () {
            var y = $(window).scrollTop();
            if (y > 0) {
                $('.fixed_anchor').fadeIn('slow');
            }
            else {
                $('.fixed_anchor').fadeOut('slow');
            }
        });
    };
    // 08/21/2019 01:48 pm 
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function showCollapsedDivs() {
    var showCollapsedDivs = function () {
        $("[data-toggle='collapse']").trigger('click');
    };
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function prefixPreWithShowHideAnchor() {
    var prefixPreWithShowHideAnchor = function () {
        // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
        // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
        $('pre').each(function (aa) {
            $(this).hide();
            var titleAttrib = "";
            var _title = $(this).attr("title");
            var _title_caption = "";
            if (_title !== undefined) {
                titleAttrib = " title='" + _title + "' ";
                _title_caption = ": " + _title;
            }
            else {
                _title = "";
            }
            $('<p><a cmd-name="showsibling" ' + titleAttrib + ' >Show code' + _title_caption + '</a></p>').insertBefore(this);
        });
        // 05/01/2019 04:52 am - SSN - Use JavaScript only
        var list1 = document.querySelectorAll('pre');
        // 05/19/2019 12:30 pm - SSN - [20190519-1132] - [004] - Address definitely typed errors
        // for (var a of list1) {
        // list1.forEach(function (currentItem, currentIndex, listObj) {
        list1.forEach(function (a, currentIndex, listObj) {
            // 05/17/2019 04:16 am - SSN - Update to exclude highlighting
            //var b = a.innerHTML.replace(/</g, '&lt;');  
            // Exclude <h and <n. Already setup for <i.  See site.css.
            // 06/07/2019 11:50 am - SSN - Update - Matches shown https://www.regextester.com/
            // var b = a.innerHTML.replace(/<([^i|^/i|^h|^/h|^n|^/n]){1}[^\s|^>]{1}/g, '&lt;$1');
            // var b = a.innerHTML.replace(/(<)((?!\/?[n|i|h]))(.*?>)/g, '\n1---\n[$&]\n2---\n[$1]\n3---\n[$2]\n4---\n[$3]\n\n');
            // We have not coverred h1, h2, etc.
            // knockout is doing its own thing when it comes to tags. Evident with the use of generic types ( function<SomeType> )
            var b = a.innerHTML.replace(/(<)((?!\/?[n|i|h]))(.*?>)/g, '&lt;$3');
            a.innerHTML = b;
        });
        // 04/26/2019 10:14 pm - SSN - [20190426-2156] - [002] - Hide pre and add a link to show.
        $("[cmd-name]").on('click', function (e) {
            var cmdName = $(this).attr('cmd-name');
            if (cmdName === "showsibling") {
                var _pre = $(this).parent().next();
                var _link = $(this);
                // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
                var _title = $(this).attr('title');
                var _title_caption = "";
                if (_title === undefined) {
                    _title = "";
                }
                else {
                    _title_caption = ": " + _title;
                }
                if (_pre.is(":visible")) {
                    _link.text('Show code' + _title_caption);
                    _pre.fadeOut();
                }
                else {
                    _pre.fadeIn();
                    _link.text('Hide code' + _title_caption);
                }
            }
        });
    };
    // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - Begin
    // Source https://www.c-sharpcorner.com/UploadFile/1d3119/date-serialization-with-angular-js-web-api/
    var iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/;
    // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
    // function fnConverDate(input) {
    var fnConverDate = function (input) {
        if (typeof input !== "object")
            return input;
        for (var key in input) {
            if (!input.hasOwnProperty(key))
                continue;
            var value = input[key];
            var type = typeof value;
            var match;
            if (type === 'string' && (match = value.match(iso8601RegEx))) {
                input[key] = new Date(value);
            }
            else if (type === "object") {
                fnConverDate(value);
            }
        }
    };
    $(function () {
        setDefaults();
        // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
        // 09/10/2019 08:53 pm - SSN - Replaced
        // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.
        setTimeout(prefixPreWithShowHideAnchor, 2000);
        //$(function () {
        //    console.log('20190910-2054 - prefixPreWithShowHideAnchor timeout to jquery ready');
        //    prefixPreWithShowHideAnchor();
        //});
    });
    return {
        fnConverDate: fnConverDate,
        showCollapsedDivs: showCollapsedDivs,
        prefixPreWithShowHideAnchor: prefixPreWithShowHideAnchor
    };
}();
export { site_instance };
//# sourceMappingURL=site.js.map