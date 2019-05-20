// 05/04/2019 09:19 am - SSN - [20190504-0855] - [004] - Testing if we can replace global variable
// Convert to TypeScript
 
 
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/angular/index.d.ts" />




$('[cmd_name]').on('click', function (e) {

    var cmd_name = $(this).attr('cmd_name');
     

    // cmd_name = openSolution

    var solutionName = $(this).attr("solutionName");
    var softwareCode = $(this).attr("softwareCode");


    var software = "notNotSet_101";

    if (softwareCode === "VS") {
        software = "C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Professional\\Common7\\IDE\\devenv.exe";
    }

    $("#codeDiv").text('"' + software + '"  "' + solutionName + '"');
    $("#codeDiv").select();

    var status = document.execCommand('copy');

    $("#feedbackDiv").removeClass();

    hideFeedbackDev(true);

    if (!status) {
        $("#feedbackDiv").text("Failed to copy text to clipboard.");
        $("#feedbackDiv").addClass("info_bad");
    } else {
        $("#feedbackDiv").text('Text copied to your clipboard.');
        $("#feedbackDiv").addClass("info_good");
    }
    setTimeout(hideFeedbackDev, 3000);

});

function hideFeedbackDev(fadeIn) {

    var isBoolean = typeof fadeIn;
    if (!isBoolean) fadeIn = false;
    if (fadeIn) {
        $("#feedbackDiv").fadeIn(500);
    } else {
        $("#feedbackDiv").fadeOut(500);
    }

}

