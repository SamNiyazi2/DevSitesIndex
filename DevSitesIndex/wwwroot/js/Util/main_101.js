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
        var defaultTitle = $(b).attr('defaultTitle');
        // 10/25/2018 07:07 am - SSN - Adding
        var useFileSystem = $(b).attr('useFileSystem');
        // 01/01/2019 08:52 pm - SSN https
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
            data: { url: url, doDebug: doDebug, useFileSystem: useFileSystem },
            // 12/03/2019 09:08 am - SSN - DisplayCode - Adding
            //dataType: 'text',
            dataType: 'json',
            success: function (data, status, xhr) {
                console.log('main_101 - 20191203-0735 - 001 ');
                console.log(data);
                console.log(status);
                console.log(xhr);
                if (typeof (defaultTitle) === "string") {
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
                    }
                    else {
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
        copy101(x1[0]);
        // return;
        // $(this).select();
        // var status = document.execCommand('copy');
        // if (status) {
        //         alert('Copied to clipboard');
        // } else {
        //         alert('Failed to copy to clipboard');
        // }
    });
    // 03/23/2019 08:08 pm - SSN - Adding ssnalert
    $('[cmd-ssn="ssnalert"]').on('click', function () {
        var appcode = $(this).attr("appcode");
        var path = $(this).attr('path');
        document.location.href = "ssnalert:appcode=" + appcode + ";targetfile=" + encodeURIComponent(path);
    });
    $('[cmd-ssn="ssnalert"]').each(function () {
        $(this).addClass('ssnalertLink');
    });
    // 12/03/2019 12:05 am - SSN - [20191202-2353] - [004] - DisplayCode - Adding
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
//# sourceMappingURL=main_101.js.map