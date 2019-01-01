// Write your JavaScript code.


//08/23/2018 01:24 am - SSN

$(function () {

    $("[cmd-name]").on('click', function (e) {

        var cmdName = $(this).attr('cmd-name');
        var popupName = $(this).attr('popup-name');

        alert('clicked me! cmdName [' + cmdName + "] popupName  [" + popupName + "]");

        if (cmdName === "open-popup") {
            $(popupName).modal({ backdrop: 'static', keyboard: false });

            $("#addSite_PageContent").load("/times/start");
        }

        

    });
});
