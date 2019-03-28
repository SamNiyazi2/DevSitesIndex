


//03/28/2019 08:59 am - SSN - Moved out of edit.cshtml



// Knockout related

$(function () {

    var ViewModel = function () {

        this.currentItem = {};

        this.requestDelConfirm = function (itemToDelete) {



            var data101 = $('#devSiteForm').serializeArray();

            console.log(data101);


            var ndx = 0;


            var o5 = new Object();

            for (ndx = 0; ndx < data101.length; ndx++) {
                var _name = data101[ndx].name.replace('DevSite.', '');

                if (data101[ndx].name.indexOf("DevSite.") > -1) {
                    o5[_name] = data101[ndx].value;
                }
            }



            console.log(o5);

            var method = "Post";

            if (o5.Id > 0) {
                method = "Put";
            }



            $("#devSiteSaveStatus").fadeIn('slow');
            $("#devSiteSaveStatus").removeClass();

            $.ajax({
                type: method,
                url: "/api/DevSites_Testing/66",
                data: JSON.stringify(o5),
                contentType: "application/json",
                dataType: "json",

                success: function (response) {

                    $("#devSiteSaveStatus").html("Record saved.");
                    $("#devSiteSaveStatus").addClass('text-success');


                    setTimeout(() => { $("#devSiteSaveStatus").fadeOut('slow') }, 3000);
                },
                failure: function (response) {
                    $("#devSiteSaveStatus").html("Failed to save record.<br/>" + response.responseText);
                    $("#devSiteSaveStatus").addClass('text-danger');
                    alert("Failure-20190328-0705");
                    alert(response.responseText);
                },
                error: function (response) {
                    $("#devSiteSaveStatus").html("System error! Record not saved.<br/>" + response.responseText);
                    $("#devSiteSaveStatus").addClass('text-danger');

                    alert("Error-20190328-0704");
                    alert(response.responseText);
                }
            });



        };



    };

    var vm = new ViewModel();
    ko.applyBindings(vm);
});
