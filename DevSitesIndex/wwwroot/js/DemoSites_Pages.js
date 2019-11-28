// 11/18/2019 01:12 pm - SSN - [20191118-1316] Renamed from DevSite_Pages.js to DemoSites_Pages.ts (TypeScript)
//03/28/2019 08:59 am - SSN - Moved out of edit.cshtml
import { ChangeMonitorFlag } from './Util/ChangeMonitor/ChangeMonitorFlag';
// Knockout related
// 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
//$(function () {
var DemoSites_Pages = function () {
    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    // Added
    var doSetup = function () {
        var ViewModel = function () {
            this.saveAndStay = function (itemToDelete) {
                var data101 = $('#devSiteForm').serializeArray();
                var ndx = 0;
                // 11/18/2019 01:16 pm - SSN - [20191118-1316] - Added interface
                // var o5 = new Object();
                var o5 = {};
                for (ndx = 0; ndx < data101.length; ndx++) {
                    var _name = data101[ndx].name.replace('DevSite.', '');
                    if (data101[ndx].name.indexOf("DevSite.") > -1) {
                        // mvc creates a hidden field for checkboxes. If the visible one is set to true, we ignore the hidden one that is set to false.
                        if (!o5[_name] || (o5[_name] && o5[_name].value === "ture" && data101[ndx].value !== "false")) {
                            o5[_name] = data101[ndx].value;
                        }
                    }
                }
                console.log(o5);
                var id_local = 0;
                var method = "Post";
                if (o5.Id > 0) {
                    method = "Put";
                    id_local = o5.Id;
                }
                $("#devSiteSaveStatus").fadeIn('slow');
                $("#devSiteSaveStatus").removeClass();
                $.ajax({
                    type: method,
                    url: "/api/DevSites_Testing/" + id_local,
                    data: JSON.stringify(o5),
                    contentType: "application/json",
                    dataType: "json",
                    success: function (response) {
                        console.log('20190328-1722-010-C');
                        // 09/21/2019 12:13 pm - SSN - Update rowVersion
                        $("#devSiteSaveStatus").html("Record saved.");
                        $("#devSiteSaveStatus").addClass('text-success');
                        $("#DevSite_RowVersion").val(response.rowVersion);
                        // 11/18/2019 01:08 pm - SSN - 
                        ChangeMonitorFlag.haveChanges = false;
                        setTimeout(function () { $("#devSiteSaveStatus").fadeOut('slow'); }, 3000);
                    },
                    error: function (response) {
                        if (response.responseText !== null && response.responseText.length > 0) {
                            $("#devSiteSaveStatus").html("System error! Record not saved.<br/>" + response.responseText);
                            $("#devSiteSaveStatus").addClass('text-warning');
                            $("#devSiteSaveStatus").css({ 'background-color': 'yellow' });
                            console.log("Error-20190328-0704");
                            console.log(response.responseText);
                            console.error('Todo');
                        }
                    }
                });
            };
        };
        var vm = new ViewModel();
        ko.applyBindings(vm);
    };
    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    return {
        doSetup: doSetup
    };
    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    //});
}();
export { DemoSites_Pages };
DemoSites_Pages.doSetup();
//# sourceMappingURL=DemoSites_Pages.js.map