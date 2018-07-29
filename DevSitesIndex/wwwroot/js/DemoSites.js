



$('[cmd_name]').on('click', function (e) {
    
    var cmd_name = $(this).attr('cmd_name');
     

    // cmd_name = openSolution

    var solutionName = $(this).attr("solutionName");
    var software = $(this).attr("software");



    if (software === "VS") {
        software = "C:\\Program Files (x86)\\Microsoft Visual Studio\\2017\\Professional\\Common7\\IDE\\devenv.exe";
    }

    $("#codeDiv").text('"' + software + '"  "' + solutionName + '"');
    $("#codeDiv").select();

    var status = document.execCommand('copy');
    if (!status) {
        alert('Failed to copy to clipboard.');
    } else {
        alert('Text was copied to your clipboard.');
    }

});

