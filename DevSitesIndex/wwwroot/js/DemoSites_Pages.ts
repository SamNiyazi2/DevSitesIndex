
// 11/18/2019 01:12 pm - SSN - [20191118-1316] Renamed from DevSite_Pages.js to DemoSites_Pages.ts (TypeScript)


//03/28/2019 08:59 am - SSN - Moved out of edit.cshtml

// 09/04/2020 06:28 am - SSN - [20200904-0540] - [007] - Ading save-and-stay option to codereference
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.
// This is shared utility.  Need renamed from DemoSites to something generic.


import { ChangeMonitorFlag } from './Util/ChangeMonitor/ChangeMonitorFlag';


// 09/04/2020 06:57 am - SSN - [20200904-0540] - [008] - Ading save-and-stay option to codereference
// Added ApplicationInsights_Monitor
import { AppInsights_Util } from './Util/ApplicationInsights_Monitor';

// 11/18/2019 01:15 pm - SSN - [20191118-1316] - Added interface
interface DevSiteRecord {

    Id?: number
}


// Knockout related


// 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised

//$(function () {
let DemoSites_Pages = function () {



    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    // Added
    var doSetup = function () {



        AppInsights_Util.doSetup("DemoSites_Pages");


        var ViewModel = function () {


            let definitions = document.querySelectorAll("[ko_demosites_pages]")
            definitions.forEach((a, b, c) => {

                for (let x = 0; x < a.attributes.length; x++) {

                    if ((a.attributes[x].nodeName).substr(0, 4) === 'ko__') {

                        let attrName = (a.attributes[x].nodeName).substr(4);
                        let attrValue = a.attributes[x].nodeValue;

                        this[attrName] = attrValue;
                    }
                }

            });



            this.saveAndStay = function () {

                try {

                    if (this.fieldname_prefix === 'undefined') {
                        throw new Error('fieldname_prefix is undefined');
                    }

                    if (this.inputformid === 'undefined') {
                        throw new Error('inputformid is undefined');
                    }

                    if (this.api_url === 'undefined') {
                        throw new Error('api_url is undefined');
                    }


                    // 04/18/2022 07:47 am - SSN - Added
                    if (this.rowVersion === 'undefined') {
                        throw new Error('rowVersion is undefined - 20220418-0747');
                    }


                    let fieldName_prefix_without_period = this.fieldname_prefix.substr(0, this.fieldname_prefix.length - 1);

                    console.log('%c' + 'DemoSites_pages-20220418-0734-A', 'font-size:24pt;color:red');
                    console.log('Before: [#DevSite_RowVersion]');
                    console.dir(this);
                    console.log(` After: [#${this.fieldname_prefix}_${this.rowversion}]`);

                    let rowVersionFieldName_JQ = `#${fieldName_prefix_without_period}_${this.rowversion}`;
                    


                    var data101 = $('#' + this['inputformid']).serializeArray();


                    var ndx = 0;

                    // 11/18/2019 01:16 pm - SSN - [20191118-1316] - Added interface
                    // var o5 = new Object();
                    let o5: DevSiteRecord = {};

                    for (ndx = 0; ndx < data101.length; ndx++) {
                        var _name = data101[ndx].name.replace(this['fieldname_prefix'], '');

                        if (data101[ndx].name.indexOf(this['fieldname_prefix']) > -1) {

                            // mvc creates a hidden field for checkboxes. If the visible one is set to true, we ignore the hidden one that is set to false.

                            if (!o5[_name] || (o5[_name] && o5[_name].value === "true" && data101[ndx].value !== "false")) {
                                o5[_name] = data101[ndx].value;
                            }
                        }
                    }



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
                        url: this.api_url + id_local,
                        data: JSON.stringify(o5),
                        contentType: "application/json",
                        dataType: "json",

                        success:   (response) => {

                            // 09/21/2019 12:13 pm - SSN - Update rowVersion

                            console.log('%c' + 'DemoSites_pages-20220418-0734', 'font-size:20pt;color:yellow');
                            console.log(response);

                            $("#devSiteSaveStatus").html("Record saved.");
                            $("#devSiteSaveStatus").addClass('text-success');


                            // 04/18/2022 07:49 am - SSN - Replace hard-code RowVersion
                            //$("#DevSite_RowVersion").val(response.rowVersion);
                            $(rowVersionFieldName_JQ).val(response.rowVersion);

                            console.log('Before: [#DevSite_RowVersion]');
                            console.log(` After: [#${this.fieldname_prefix}_${this.rowversion}]` );
                            console.log(` After: [#${rowVersionFieldName_JQ}]`);


                            // 11/18/2019 01:08 pm - SSN - 
                            ChangeMonitorFlag.haveChanges = false;

                            setTimeout(() => { $("#devSiteSaveStatus").fadeOut('slow') }, 3000);
                        },




                        error:   (error, textStatus, errorThrown) => {

                            // 09/04/2020 07:32 am - SSN - Take out
                            // $("#devSiteSaveStatus").html("System error! Record not saved.<br/>" + response.responseText);

                            // 04/16/2022 11:20 pm - SSN - [20220416-2223] - [005] - Add RowVersion to CodeReferences table
                            if (error.responseText) {
                                $("#devSiteSaveStatus").html(`System error! Record not saved. (101)<br/>${error.responseText}`);
                            } else {
                                $("#devSiteSaveStatus").html("System error! Record not saved. (101)");
                            }
                            $("#devSiteSaveStatus").addClass('text-warning');
                            $("#devSiteSaveStatus").css({ 'background-color': 'yellow' });


                            console.error("Error-20190328-0704-record-modified???");
                            console.error('Todo');
                            console.error('error:');
                            console.error(error);
                            console.error('textStatus:');
                            console.error(textStatus);
                            console.error('errorThrown:');
                            console.error(errorThrown);


                            AppInsights_Util.logException(new Error(errorThrown), { SourceCode: "20200904-0813", Message: "DemoSites_pages.error (SaS)" });



                        }
                    });


                } catch (e) {
                    console.error("Error-20200904-0654");
                    console.error('Todo');
                    console.error(e);
                    $("#devSiteSaveStatus").html("System error! Record not saved. (102)");
                    $("#devSiteSaveStatus").addClass('text-warning');
                    $("#devSiteSaveStatus").css({ 'background-color': 'yellow' });
                    AppInsights_Util.logException(e, { SourceCode: "20200904-0701", Message: "DemoSites_pages.error (SaS)" });

                }

            };



        };

        var vm = new ViewModel();
        ko.applyBindings(vm);

    }


    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    return {
        doSetup: doSetup
    }

    // 11/18/2019 01:26 pm - SSN - [20191118-1316]  Revised
    //});
}();

export { DemoSites_Pages };


DemoSites_Pages.doSetup();
