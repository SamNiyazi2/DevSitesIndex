// Write your JavaScript code.


//08/23/2018 01:24 am - SSN

$(function () {

    $("[cmd-name]").on('click', function (e) {

        var cmdName = $(this).attr('cmd-name');
        var popupName = $(this).attr('popup-name');
        var jQueryObjectName = $(this).attr('jQueryObjectName');

        //        alert('clicked me! cmdName [' + cmdName + "] popup-name  [" + popupName + "]");

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

    });



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
