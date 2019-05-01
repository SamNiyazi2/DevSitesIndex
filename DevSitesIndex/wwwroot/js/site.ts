/// <reference path="typings/globals/jquery/index.d.ts" />
// Write your JavaScript code.




//08/23/2018 01:24 am - SSN

$(function () {

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

            var d11: Date = new Date();
            var d12: Date = new Date($(jQueryObjectName).val());

            var delta = d11.getTime() - d12.getTime();

            var delta = Math.floor(delta / 1000);

            $(jQueryObjectName2).val(delta);

        }



    });

    function p(str1, len, char) {

        var str = str1.toString();
        if (str.length > len) return str;
        var s1 = char.repeat(len) + str;
        var s2 = s1.substring(len + (str.length - len));

        return s2;
    }


    // 03/14/2019 10:28 am - SSN

    $(window).on('scroll', function () {
        var y = $(window).scrollTop();

        if (y > 0) {
            $('.fixed_anchor').fadeIn('slow');
        } else {
            $('.fixed_anchor').fadeOut('slow');
        }
    });




});


function prefixPreWithShowHideAnchor() {


    // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.


    $('pre').each(function (aa) {

        $(this).hide();

        $('<p><a cmd-name="showsibling">Show code</a></p>').insertBefore(this);

    });

    // 05/01/2019 04:52 am - SSN - Use JavaScript only

    var list = document.querySelectorAll('pre');

    for (var a of list) {

        var b = a.innerHTML.replace(/</g, '&lt;');
        a.innerHTML = b;


    }



    // 04/26/2019 10:14 pm - SSN - [20190426-2156] - [002] - Hide pre and add a link to show.

    $("[cmd-name]").on('click', function (e) {

        var cmdName = $(this).attr('cmd-name');

        if (cmdName === "showsibling") {


            var _pre = $(this).parent().next();
            var _link = $(this);

            if (_pre.is(":visible")) {
                _link.text('Show code');
                _pre.fadeOut();
            } else {
                _pre.fadeIn();
                _link.text('Hide code');

            }

        }

    });



}


// 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - Begin

// Source https://www.c-sharpcorner.com/UploadFile/1d3119/date-serialization-with-angular-js-web-api/

var iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/;


function fnConverDate(input) {

    if (typeof input !== "object") return input;

    for (var key in input) {

        if (!input.hasOwnProperty(key)) continue;

        var value = input[key];
        var type = typeof value;
        var match;
        if (type === 'string' && (match = value.match(iso8601RegEx))) {
            input[key] = new Date(value)
        }
        else if (type === "object") {
            fnConverDate(value);
        }
    }
}

// 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End

setTimeout(prefixPreWithShowHideAnchor, 2000);

