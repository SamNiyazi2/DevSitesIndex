﻿

$(function () {

    $('[doRefreshForm]').on('click', function (e) {

        // 03/27/2019 01:01 pm - SSN - Revise handling of clearing search.
        var doRefreshForm_temp = $(this).attr("doRefreshForm");
        if (doRefreshForm_temp === "0") {
            $("#SearchText").val("");
        }

        $(document.forms[0]).submit();

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

});


    // 02/09/2019 11:33 am - SSN - ALT key are hot access keys
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

