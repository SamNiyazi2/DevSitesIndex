
// 03/28/2022 06:00 pm - SSN - Copied to C:\Sams_NPM\ssn_site\ssn_site.ts for local npm registry
//                             https://devsitesindex20190127.azurewebsites.net/devsites/details?id=352

// 05/19/2019 01:18 pm - SSN - [20190519-1132] - [007] - Address definitely typed errors - No errors

/// <reference path="../../node_modules/@types/jquery/index.d.ts" />   
/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />

// 08/31/2020 04:54 am - SSN - [20200831-0417] - [004] - Disable collapsable divs with no content

/// <reference path="../../node_modules_hack/SSN_console_model.d.ts" />

let d1 = new Date();

console.log('site - 20191115-1740 - AAAA ', d1);

// 04/25/2022 04:21 pm - SSN - Adding
import { ChangeMonitorFlag } from './Util/ChangeMonitor/ChangeMonitorFlag';


//08/23/2018 01:24 am - SSN

// 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack



// var site_instance = function () {
namespace site_instance_NS {

    export class site_Class {

        ngApplicationName: string;


        // 08/31/2020 04:29 am - SSN - [20200831-0417] - [002] - Disable collapsable divs with no content

        disableEmptyCollapsableDivs() {


            // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to a only - Was hiding mobile hamberger menu.

            $('a[data-toggle="collapse"]').each((ndx, obj1) => {

                let divId = $(obj1).attr('aria-controls');


                let childrenCount = $("#" + divId).children().length;

                if (childrenCount === 0) {
                    $(obj1).css('color', 'orange');
                    $(obj1).css('font-size', '24pt');

                    $(obj1).replaceWith(function () {
                        return $("<span/>").text($(obj1).text());
                    });

                }
            });


        }



        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        setDefaults( ngApplicationName:string ) {

            this.ngApplicationName = ngApplicationName??"NotSet-20220426-0833";

            console.log('%c ' + `firing site_v02 - setDefaults [${ngApplicationName}]`, 'font-size:14pt;color:red;')

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

                    console.log('%c ' + 'smooth-scrolll 20220425-1736', 'font-size:12pt;color:yellow');
                    console.log('jQueryObjectName:');
                    console.log(jQueryObjectName);

                    document.querySelector(jQueryObjectName).scrollIntoView({
                        behavior: 'smooth'
                    });

                }
                // 04/08/2019 01:33 am - SSN - [20190407-2345] - TimeLog

                if (cmdName === "set-default-time") {

                    var d = new Date();

                    var cd = d.getFullYear() + "-" + p(d.getMonth() + 1, 2, '0') + "-" + p(d.getDate(), 2, '0') + "T" + p(d.getHours(), 2, '0') + ":" + p(d.getMinutes(), 2, '0') + ":" + p(d.getSeconds(), 2, '0');

                    $(jQueryObjectName).val(cd);

                    // 04/25/2022 04:22 pm - SSN 
                    ChangeMonitorFlag.haveChanges = true;

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



            $("#imgSiteUrlQRCode").css("visibility", "visible");

            let imgSiteUrlQRCode = 0;

            $('#imgSiteUrlQRCode').click((e) => {

                imgSiteUrlQRCode++;

                $(e.target).toggleClass('cssSiteUrlQRCode');

                let htmlTag = document.getElementsByTagName('html');

                if (htmlTag.length > 0) {

                    let currentTheme = htmlTag[0].getAttribute('theme');

                    $(e.target).toggleClass('cssSiteUrlQRCode_' + currentTheme);

                }


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


                let currentScrollTop: number = Math.round($(window).scrollTop());

                let windowInnerHeight: number = window.innerHeight;


                if (currentScrollTop > windowInnerHeight / 2) {

                    $('.fixed_anchor ').fadeIn('slow');

                    $('.fixed_anchor').css('top', (windowInnerHeight / 2) + 'px');

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



            // 04/20/2022 06:40 am - SSN - Moved from TextArea_util_0718.ts

            $('[ssn_FitInScreen]').on('click', function (e) {


                let textAreaID = $(this).attr('ssn_FitInScreen');

                let $ta = $("#" + textAreaID);

                var ta_position = $($ta).position();


                var scrollTop = $(window).scrollTop();
                var scrollLeft = $(window).scrollLeft();

                let screenWidth = screen.width;
                let screenHeight = screen.height;

                let windowWidth = $(window).width();
                let windowHeight = $(window).height();

                let offset = $ta.offset();

                let ta_width = $ta.width();
                let ta_height = $ta.height();


                $ta.width(windowWidth - ((ta_position.left + offset.left) * 2));
                $ta.height(windowHeight - 100);

                ta_width = $ta.width();
                ta_height = $ta.height();




                $('html, body').animate({
                    scrollTop: offset.top - 80,

                }, 1000);




            });





            // 04/25/2022 06:41 pm - SSN - Remove $(document).ready(() 

            //            $(document).ready(() => {


            $('.navbar li a').bind('contextmenu click', (e) => {

                console.log('20210414-1007 - context menu');
                console.log(e);

            });


            $('.navbar li a').bind('mousedown', (e) => {

                switch (e.which) {
                    case 1:
                        console.log('Left mouse button is pressed');
                        break;
                    case 2:
                        console.log('Middle mouse button is pressed');
                        break;
                    case 3:

                        console.log('Right mouse button is pressed   208  ');
                        console.log($(e.target));

                        break;


                    default:
                        alert('Nothing');
                }

                //if ($(this.mobileNavbarMenuOption.nativeElement).is(':visible')) {
                //    $(this.mobileNavbarMenuOption.nativeElement).trigger('click');
                //}

            });



            //            });



        };






        // 08/21/2019 01:48 pm 
        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function showCollapsedDivs() {
        showCollapsedDivs() {
            // 09/04/2020 01:55 am - SSN - [20200904-0155] apply to divs only - Was hiding mobile hamberger menu.
            $("a[data-toggle='collapse']").trigger('click');
        }






        // 09/21/2019 12:27 pm - SSN - [201909-1227] Revise to accommodate Babel/Webpack
        // function prefixPreWithShowHideAnchor() {
        prefixPreWithShowHideAnchor(caller) {


            // 04/26/2019 09:56 pm - SSN - [20190426-2156] - [001] - Hide pre and add a link to show.
            // 06/01/2019 08:07 pm - SSN - [20190601-2007] - Add title

            console.log('site.ts 20200102-1528 - prefixPreWithShowHideAnchor [' + caller + ']');

            $('pre').each(function (aa) {

                let autoCollapse = $(this).attr('ssn-auto-collapse');
                if (autoCollapse === "false") { return; };

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

                $('<p><a cmd-name="showsibling" ' + titleAttrib + ' >Show code' + _title_caption + '</a>&nbsp; &nbsp; <i class="glyphicon glyphicon-file "></i></p>').insertBefore(this);

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


        isDateObject(value) {
            if (!value) return;

            const _protoTypeToString = Object.prototype.toString.call(value);

            console.log(`%c isDateObject - 20210622-0334 [${_protoTypeToString}]`, 'color:yellow;font-size:12pt');

            return (value && _protoTypeToString == "[object Date]");

        }

        // Todo-SSN - 06/22/2021 03:07 am - SSN - [20210622-0054] - [002] - Address timezone issue (JavaScript vs MVC time)

        fnDateToISODateString(input) {

            console.log('%c fnDateToISODateString 20210622-0307-A', 'color:yellow;font-size:12');

            if (typeof input !== "object") return input;

            console.log('%c fnDateToISODateString 20210622-0307-B', 'color:yellow;font-size:12');

            for (var key in input) {

                console.log('%c fnDateToISODateString 20210622-0307-C', 'color:yellow;font-size:12');

                //                if (!input.hasOwnProperty(key)) continue;

                var value = input[key];
                var type = typeof value;
                console.log(`%c fnDateToISODateString 20210622-0307-C   [${type}]`, 'color:yellow;font-size:12');
                console.log(` isDateObject [${this.isDateObject(value)}]`);
                console.log(value);

                if (this.isDateObject(value)) {
                    console.log('%c fnDateToISODateString 20210622-0307-DDD', 'color:red;font-size:14pt');

                    console.log(new Date(value));
                    console.log(new Date(value).toISOString());
                    console.log('%c fnDateToISODateString 20210622-0307-DDD', 'color:magenta;font-size:14pt');

                    input[key] = new Date(value).toISOString();

                }
                else if (type === "object") {
                    this.fnConverDate(value);
                }
            }

        }



        // 04/25/2022 03:54 pm - SSN 

        public static setDefault_ForStartup_firedAlready_count: number = 0;

        setDefault_ForStartup(ngApplicationName: string, checkIfAlreadyCalled: boolean = false) {


            site_Class.setDefault_ForStartup_firedAlready_count++;

            console.log('%c ' + `setDefault_ForStartup - 20220424-0803 - SOURCE [${ngApplicationName}] - [[${site_Class.setDefault_ForStartup_firedAlready_count}]] CALLING`, 'color:green;font-size:14pt;');

            if (checkIfAlreadyCalled && site_Class.setDefault_ForStartup_firedAlready_count > 1) {
                console.log('%c ' + `setDefault_ForStartup - 20220424-0803-B - SOURCE [${ngApplicationName}] - allready callsed - BYPASS count: [${site_Class.setDefault_ForStartup_firedAlready_count}]`, 'color:yellow;font-size:14pt;');
                return;
            }

            console.log('%c ' + `setDefault_ForStartup - 20220424-0803-Z - SOURCE [${ngApplicationName}] - firing`, 'color:RED;font-size:18pt;');

            setTimeout(() => {

                this.setDefaults(ngApplicationName);

                this.disableEmptyCollapsableDivs();

                this.prefixPreWithShowHideAnchor('20200102-1534-2');

            }, 2000);


        }

    }

}



let site_instance = new site_instance_NS.site_Class();
export { site_instance };

     





// 01/02/2020 04:20 pm - SSN - [20200102-1611] - [003] - Seperate AngularJS utility from general DOM utilities
// Of course we are calling utility more than once. Need to call functions where they apply.


// 04/22/2022 09:19 pm - SSN - Take out. (Pending work)

////$(function () {

////    // 12/30/2019 01:23 am - SSN - Add timeot
////    // site_instance.setDefaults();
////    setTimeout(() => { site_instance.setDefaults(); }, 2000);


////    // 04/29/2019 07:36 pm - SSN - [20190429-1748] - [006] - Angular clock out popup  - End
////    // 09/10/2019 08:53 pm - SSN - Replaced
////    // 09/11/2019 07:08 am - SSN - DevSiteIndex p1 data is coming after document is ready.
////    setTimeout(() => {

////        site_instance.prefixPreWithShowHideAnchor('20200102-1534-2');

////        // 08/31/2020 04:32 am - SSN - [20200831-0417] - [003] - Disable collapsable divs with no content

////        setTimeout(() => site_instance.disableEmptyCollapsableDivs(), 1000);

////    }
//////        , 2000);





////////});




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

