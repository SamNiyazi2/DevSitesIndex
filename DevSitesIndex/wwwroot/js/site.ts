
// 05/19/2019 01:18 pm - SSN - [20190519-1132] - [007] - Address definitely typed errors - No errors

/// <reference path="../../node_modules/@types/jquery/index.d.ts" />   
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />

// 08/31/2020 04:54 am - SSN - [20200831-0417] - [004] - Disable collapsable divs with no content

/// <reference path="../../node_modules_hack/SSN_console_model.d.ts" />

let d1 = new Date();

console.log('site - 20191115-1740 - AAAA ', d1);


//08/23/2018 01:24 am - SSN

// 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack



// var site_instance = function () {
namespace site_instance_NS {

    export class site_Class {

        static loadCounter: number = 0;




        // 08/31/2020 04:29 am - SSN - [20200831-0417] - [002] - Disable collapsable divs with no content

        disableEmptyCollapsableDivs() {

            console.time('disableEmptyCollapsableDivs_0441');

            console.log('disableEmptyCollapsableDivs - 20200831-0419');

            // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to divs only - Was hiding mobile hamberger menu.

            $('div[data-toggle="collapse"').each((ndx, obj1) => {

                let divId = $(obj1).attr('aria-controls');

                 
                let childrenCount=    $("#" + divId).children().length ;

                console.log(divId ,ndx, 'count', childrenCount);

                if (childrenCount=== 0) {
                    $(obj1).css( 'color', 'orange' );
                    $(obj1).css('font-size', '24pt');

                    $(obj1).replaceWith(function () {
                        return $("<span/>").text($(obj1).text());
                    });

                }
            });

            console.timeLog('disableEmptyCollapsableDivs_0441');

 
            console.timeEnd('disableEmptyCollapsableDivs_0441');

            console.log('disableEmptyCollapsableDivs - 20200831-0419');

        }



        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        setDefaults() {

            $("[cmd-name]").on('click', function (e) {

                var cmdName = $(this).attr('cmd-name');
                var popupName = $(this).attr('popup-name');
                var jQueryObjectName = $(this).attr('jQueryObjectName');
                var jQueryObjectName2 = $(this).attr('jQueryObjectName2');


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

                    var selectedDate: string = (<HTMLInputElement>$(jQueryObjectName)[0]).value;

                    var d12 = new Date(selectedDate);

                    var delta_1 = d11.getTime().valueOf() - d12.getTime().valueOf();

                    var delta_2 = Math.floor(delta_1 / 1000);

                    $(jQueryObjectName2).val(delta_2);

                }







                // 11/08/2019 01:04 pm - SSN - [20191108-1043] - [008] - Persisting search on return to index
                // 
                // 01/02/2020 04:06 pm - SSN - Moved from  prefixPreWithShowHideAnchor

                $('[ssn-cmd=returnToCallerLink]').click((e) => {

                    e.preventDefault();
                    e.stopPropagation();

                    var returnToCallerKey = $("#returnToCallerKey").val();

                    document.location.href = (<HTMLAnchorElement>e.target).href + "&returnToCallerKey=" + returnToCallerKey;

                });






            });




            // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack

            // function p(str1, len, char) {
            var p = function (str1, len, char) {

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







            // 11/02/2019 07:25 pm - SSN - [20191101-0526] - [013] - Check login status
            // Did not finish.
            // Todo-SSN
            $('.modal').on('show', function () {

                $(this).draggable({
                    handle: ".modal-header"
                });
            })


        };






        // 08/21/2019 01:48 pm 
        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function showCollapsedDivs() {
        showCollapsedDivs() {
            // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to divs only - Was hiding mobile hamberger menu.
            $("div[data-toggle='collapse']").trigger('click');
        }






        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function prefixPreWithShowHideAnchor() {
        prefixPreWithShowHideAnchor(caller) {


            // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
            // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title

            console.log('site.ts 20200102-1528 - prefixPreWithShowHideAnchor [' + caller + ']');

            $('pre').each(function (aa) {

                let autoCollapse = $(this).attr('ssn-auto-collapse');
                if (autoCollapse === "false") { return;};

                $(this).hide();

                let titleAttrib = "";

                let _title = $(this).attr("title");
                let _title_caption = "";

                if (_title !== undefined) {

                    titleAttrib = " title='" + _title + "' "
                    _title_caption = ": " + _title;
                }
                else {
                    _title = "";
                }

                $('<p><a cmd-name="showsibling" ' + titleAttrib + ' >Show code' + _title_caption + '</a></p>').insertBefore(this);

            });



            // 04/26/2019 10:14 pm - SSN - [20190426-2156] - [002] - Hide pre and add a link to show.

            $("[cmd-name]").on('click', function (e) {

                var cmdName = $(this).attr('cmd-name');

                if (cmdName === "showsibling") {


                    var _pre = $(this).parent().next();
                    var _link = $(this);

                    // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title
                    let _title = $(this).attr('title');
                    let _title_caption = "";

                    if (_title === undefined) {
                        _title = "";
                    }
                    else {
                        _title_caption = ": " + _title;
                    }

                    if (_pre.is(":visible")) {
                        _link.text('Show code' + _title_caption);
                        _pre.fadeOut();
                    } else {
                        _pre.fadeIn();
                        _link.text('Hide code' + _title_caption);

                    }

                }

            });







        }






        // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - Begin

        // Source https://www.c-sharpcorner.com/UploadFile/1d3119/date-serialization-with-angular-js-web-api/

        iso8601RegEx = /(19|20|21)\d\d([-/.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])T(\d\d)([:/.])(\d\d)([:/.])(\d\d)/;






        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function fnConverDate(input) {
        fnConverDate(input) {

            if (typeof input !== "object") return input;

            for (var key in input) {

                if (!input.hasOwnProperty(key)) continue;

                var value = input[key];
                var type = typeof value;
                var match;
                if (type === 'string' && (match = value.match(this.iso8601RegEx))) {
                    input[key] = new Date(value)
                }
                else if (type === "object") {
                    this.fnConverDate(value);
                }
            }
        }






        //$(function () {

        //    setDefaults();


        //    // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
        //    // 09/10/2019 08:53 pm - SSN - Replaced
        //    // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.
        //    setTimeout(prefixPreWithShowHideAnchor, 2000);


        //});






        //return {

        //    fnConverDate: fnConverDate,
        //    showCollapsedDivs: showCollapsedDivs,
        //    prefixPreWithShowHideAnchor: prefixPreWithShowHideAnchor


        //};

        //}();
    }

}

//export { site_instance };


let site_instance = new site_instance_NS.site_Class();
export { site_instance };



// 01/02/2020 04:20 pm - SSN - [20200102-1611] - [003] - Seperate AngularJS utility from general DOM utilities
// Of course we are calling utility more than once. Need to call functions where they apply.



if (typeof (window["site_routine_run"]) != "number") {

    window["site_routine_run"] = 0;
}

window["site_routine_run"] = window["site_routine_run"] + 1;


if (window["site_routine_run"] === 1) {


    $(function () {

        // 12/30/2019 01:23 am - SSN - Add timeot
        // site_instance.setDefaults();
        setTimeout(() => { site_instance.setDefaults(); }, 2000);


        // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
        // 09/10/2019 08:53 pm - SSN - Replaced
        // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.
        setTimeout(() => {
            site_instance.prefixPreWithShowHideAnchor('20200102-1534-2');

            // 08/31/2020 04:32 am - SSN - [20200831-0417] - [003] - Disable collapsable divs with no content

            setTimeout(() => site_instance.disableEmptyCollapsableDivs(), 1000);

        }
            , 2000);




        
    });

}


let d2 = new Date();
site_instance_NS.site_Class.loadCounter++;



// 11/25/2019 02:37 pm - SSN - [20191125-1414] - [003] - Project jobs - filter 

// https://stackoverflow.com/questions/6361465/how-to-check-if-click-event-is-already-bound-jquery
$.fn.isBound = function (type, fn) {


    if (!this.data('events')) {
        return false;
    }

    var data = this.data('events')[type];

    if (data === undefined || data.length === 0) {
        return false;
    }

    return (-1 !== $.inArray(fn, data));
};



// 11/25/2019 02:29 pm - SSN - [20191125-1414] - [002] - Project jobs - filter 


function Job_Timelog_setFilter() {

    console.log('site.ts 20200102-1531 - job_Timelog_setFilter ');


    if ($("#filterText").isBound('keyup', Job_Timelog_setFilter)) {
        console.log("Already bound");
        return;
    }

    $("#filterText").on('keyup', function (e) {

        console.log('project_jobs - fitlerText - KeyUp');
        console.log((e));
    });

}

$(function () {

    console.log('site - project_jobs - filter - 2 - setup');

    Job_Timelog_setFilter();

});

