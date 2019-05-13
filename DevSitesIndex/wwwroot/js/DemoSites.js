$('[cmd_name]').on('click', function (e) {
    var cmd_name = $(this).attr('cmd_name');
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
    }
    else {
        $("#feedbackDiv").text('Text copied to your clipboard.');
        $("#feedbackDiv").addClass("info_good");
    }
    setTimeout(hideFeedbackDev, 3000);
});
function hideFeedbackDev(fadeIn) {
    var isBoolean = typeof fadeIn;
    if (!isBoolean)
        fadeIn = false;
    if (fadeIn) {
        $("#feedbackDiv").fadeIn(500);
    }
    else {
        $("#feedbackDiv").fadeOut(500);
    }
}
//# sourceMappingURL=DemoSites.js.map