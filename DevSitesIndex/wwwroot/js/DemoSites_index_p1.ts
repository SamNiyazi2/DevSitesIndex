
// 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml

// 08/21/2018 02:46 am - SSN - Copied - Begin
// 08/21/2018 02:46 am - SSN - Copied from C: \Sams_Projects\PluralSight\html5 - line - of - business - applications\d\demos\CodedHomes.Web\Views\Homes


/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />



// Knockout related

$(function () {

    var ViewModel = function () {


        this.currentItem = {};

        this.errorMessage = ko.observable();

        // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
        //  this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

        this.devSitesJSON = ko.observableArray([]);


        // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
        this.loadData = function () {
            var self = this;

            $.getJSON("/api/demositesapi", function (data) {
                 
                self.devSitesJSON.removeAll();  
                self.devSitesJSON(data); 
            });

        }


        this.requestDelConfirm = function (itemToDelete) {

            vm.currentItem = itemToDelete;
            $('#del-confirm').modal({ backdrop: 'static', keyboard: false });

        };


        this.showJob = function () {

            $('#show-job').modal();

        };


        this.del = function () {
            alert('Calling del!!!!');
            var itemToDelete = ko.toJS(vm.currentItem);
            $('#del-confirm').modal('hide');

        };



        this.checkIfcallingcmd = function (siteUrl) {
            if (stringStartsWith(siteUrl, 'cmd')) {
                return true;

            }
        };

        this.siteUrlWithoutCMD = function (siteUrl) {
            if (stringStartsWith(siteUrl, 'cmd')) {
                return siteUrl.substring(4);
            }
            else {

                return siteUrl;
            }
        };


        this.getClassForDemoState = function (forDemo_v2) {

            let selectedClass = "";

            switch (forDemo_v2) {
                case 1:
                    selectedClass = ' forDemo_Yes';
                    break;

                case 2:
                    selectedClass = 'forDemo_No';
                    break;

                case 3:
                    selectedClass = 'forDemo_Undecided';
                    break;

            }

            return "siteDiv" + " " + selectedClass;

        };


    };

    var vm = new ViewModel();
    ko.applyBindings(vm);
    vm.loadData();

});

var stringStartsWith = function (string, startsWith) {
    string = string || "";
    if (startsWith.length > string.length)
        return false;
    return string.substring(0, startsWith.length) === startsWith;
};


