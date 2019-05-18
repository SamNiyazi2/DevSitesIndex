$(function () {
    $("[cmd-name]").on('click', function (e) {
        var cmdName = $(this).attr('cmd-name');
        var popupName = $(this).attr('popup-name');
        var jQueryObjectName = $(this).attr('jQueryObjectName');
        var jQueryObjectName2 = $(this).attr('jQueryObjectName2');
        if (cmdName === "open-popup") {
            $(popupName).modal({ backdrop: 'static', keyboard: false });
            $("#addSite_PageContent").load("/times/start");
        }
        if (cmdName === "hideObject") {
            $(jQueryObjectName).hide();
        }
        if (cmdName === "showObject") {
            $(jQueryObjectName).show();
        }
        if (cmdName === "smooth-scroll") {
            document.querySelector(jQueryObjectName).scrollIntoView({
                behavior: 'smooth'
            });
        }
        if (cmdName === "set-default-time") {
            var d = new Date();
            var cd = d.getFullYear() + "-" + p(d.getMonth() + 1, 2, '0') + "-" + p(d.getDate(), 2, '0') + "T" + p(d.getHours(), 2, '0') + ":" + p(d.getMinutes(), 2, '0') + ":" + p(d.getSeconds(), 2, '0');
            $(jQueryObjectName).val(cd);
        }
        if (cmdName === "set-TotalPeriod") {
            var d11 = new Date();
            var d12 = new Date($(jQueryObjectName).val());
            var delta = d11.getTime() - d12.getTime();
            var delta = Math.floor(delta / 1000);
            $(jQueryObjectName2).val(delta);
        }
    });
    function p(str1, len, char) {
        var str = str1.toString();
        if (str.length > len)
            return str;
        var s1 = char.repeat(len) + str;
        var s2 = s1.substring(len + (str.length - len));
        return s2;
    }
    $(window).on('scroll', function () {
        var y = $(window).scrollTop();
        if (y > 0) {
            $('.fixed_anchor').fadeIn('slow');
        }
        else {
            $('.fixed_anchor').fadeOut('slow');
        }
    });
});
function prefixPreWithShowHideAnchor() {
    $('pre').each(function (aa) {
        $(this).hide();
        $('<p><a cmd-name="showsibling">Show code</a></p>').insertBefore(this);
    });
    var list = document.querySelectorAll('pre');
    for (var a of list) {
        var b = a.innerHTML.replace(/<[^i|^/i|^h|^/h|^n|^/h|.]/g, '&lt;');
        a.innerHTML = b;
    }
    $("[cmd-name]").on('click', function (e) {
        var cmdName = $(this).attr('cmd-name');
        if (cmdName === "showsibling") {
            var _pre = $(this).parent().next();
            var _link = $(this);
            if (_pre.is(":visible")) {
                _link.text('Show code');
                _pre.fadeOut();
            }
            else {
                _pre.fadeIn();
                _link.text('Hide code');
            }
        }
    });
}
var iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/;
function fnConverDate(input) {
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
}
setTimeout(prefixPreWithShowHideAnchor, 2000);
//# sourceMappingURL=site.js.map