﻿
// 11/08/2019 04:41 pm - SSN -
// Convert to TypeScript



namespace CodeReference_Page_NS {

    export class CodeReference_Page {

        doSetup() {



            $(function () {

                $('[doRefreshForm]').on('click', function (e) {


                    console.log("20191224-1921 - CodeReference_Pages -- 002");

                    // 03/27/2019 01:01 pm - SSN - Revise handling of clearing search.
                    var doRefreshForm_temp = $(this).attr("doRefreshForm");

                    console.log("20191224-1921 - CodeReference_Pages -- 003 [" + doRefreshForm_temp + "]");

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


        }


        // 04/25/2022 01:25 pm - SSN - Revise so we can use a main and call sharedUtil
        //$(function () {

        //    console.log('CodeReference_Pages running doSetup');

        //    doSetup();

        //});

    }
}



let CodeReference_Page_Instance = new CodeReference_Page_NS.CodeReference_Page();

export { CodeReference_Page_Instance };
