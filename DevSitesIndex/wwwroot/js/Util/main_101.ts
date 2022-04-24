
// 12/03/2019 12:02 am - SSN - [20191202-2353] - [003] - DisplayCode - Adding
// Copied from C:\Sams_Projects\__SharedScripts

///// <reference path="../../../node_modules/@types/jquery/index.d.ts" /> 


// 10/23/2018 05:54 am - SSN - Copied form C:\Sams_Projects\PluralSight\angularjs-fundamentals\d_master
// 10/29/2018 08:28 am - SSN - Adding defaultTitle

// *** displaycode-begin  highlight []  

console.log('%c ' + 'main_101 - 20220422-2121', 'font-size:14pt;color:yellow;');


$(function () {



    // 09/26/2018 02:11 am - SSN 
    // 06/13/2021 02:59 am - SSN - [20210613-0039] - [002] - VSTS Code - Refactoring

    $('[cmd-ssn="displayCode"]').each(function (a, b) {


        var div = $("<div>Click to load code.</div>");

        $(b).append(div);


        $(b).bind('click', function (event) {



            const attrs = {};

            for (let x = 0; x < b.attributes.length; x++) {

                attrs[(b.attributes[x].name).replace('-', '_')] = b.attributes[x].value;

            }

            //// 01/01/2019 08:52 pm - SSN https
            //var protocol = location.protocol;
            //var localhostPort = '56580';

            //if (protocol.toLowerCase() == 'https:') {
            //    localhostPort = '44365';
            //}

            $.ajax({
                type: "get",

                url: '/api/displayCode/VSTSCode/',

                data: attrs,

                dataType: 'json',
                success: function (data, status, xhr) {


                    div.html(data["finalResult"]);




                },
                error: function (error) {

                    console.log('Failed ajax call - 20210613-0023');
                    console.log(error);

                }
            });

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
    let ssnLinksList = [];

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
                li.append(link)

                topContainer.append(li);

            }
        });


    });



    // 08/19/2021 06:01 - SSN - Swap css HTML theme.
 
    $('[cmd-ssn="swapcsstheme"]').on('click', function (e) {
         
        let htmlTag = document.getElementsByTagName('html');

        if (htmlTag.length > 0) {

            let currentTheme = htmlTag[0].getAttribute('theme');
          
            currentTheme = currentTheme == 'Dark'?'Light':'Dark';
          
            htmlTag[0].setAttribute('theme', currentTheme); 

            e.target.textContent = currentTheme == 'Dark'?'Light':'Dark';
        }

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