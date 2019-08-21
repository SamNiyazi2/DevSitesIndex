// 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml
// 08/21/2018 02:46 am - SSN - Copied - Begin
// 08/21/2018 02:46 am - SSN - Copied from C: \Sams_Projects\PluralSight\html5 - line - of - business - applications\d\demos\CodedHomes.Web\Views\Homes
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />
// Knockout related
$(function () {
    var ViewModel = function () {
        // 08/12/2019 05:58 am - SSN - [20190812-0515] - [006] - Apply fulltext search
        var self = this;
        self.SearchText_KO = ko.observable();
        // 08/21/2019 12:16 pm - SSN - [20190821-1210] - [003] - SearchResultsFeedback_KO
        self.SearchResultsFeedback_KO = ko.observable("");
        self.SearchResultsFeedback_ClassName_KO = ko.observable();
        self.prefixPreWithShowHideAnchor_DontCall_KO = ko.observable(false);
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
        };
        // 08/16/2019 04:25 pm - SSN - [20190816-1625] - [001] - Correct logic for getting record count to show no search results message
        this.getRecordCount = function () {
            var recordCount = self.devSitesJSON().length;
            // self.devSitesJSON
            return recordCount;
        };
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
        // 08/12/2019 05:57 am - SSN - [20190812-0515] - [005] - Apply fulltext search
        // https://stackoverflow.com/questions/16245905/fetching-or-sending-data-from-a-form-using-knockout-js
        //self.onSubmit = function () {
        this.onSubmit = function () {
            //var data = JSON.stringify(
            //    {
            //        SearchText: self.SearchText_KO()
            //    }); // prepare request data
            var data_pre = {
                "SearchText": self.SearchText_KO()
            };
            var data = JSON.stringify(data_pre);
            //$.post("/echo/json", data, function (response) // sends 'post' request
            //{
            //    // on success callback
            //    self.responseJSON(response);
            //})
            //$.post("/api/demositesapi/Search", data, function (response) {
            //    self.devSitesJSON.removeAll();
            //    self.devSitesJSON(response);
            //});
            $.ajax({
                type: "POST",
                data: data,
                url: "/api/demositesapi/Search",
                contentType: "application/json",
                dataType: 'json'
            }).done(function (response) {
                self.devSitesJSON.removeAll();
                self.devSitesJSON(response);
                // 08/21/2019 12:14 pm - SSN - [20190821-1210] - [002] - SearchResultsFeedback_KO
                self.SearchResultsFeedback_KO('');
                self.SearchResultsFeedback_ClassName_KO("");
                if (response.length == 0) {
                    self.SearchResultsFeedback_KO('Search returned no records.');
                    self.SearchResultsFeedback_ClassName_KO("alert-warning");
                }
                if (!self.prefixPreWithShowHideAnchor_DontCall_KO()) {
                    setTimeout(prefixPreWithShowHideAnchor, 2000);
                }
            });
        };
        this.getClassForDemoState = function (forDemo_v2) {
            var selectedClass = "";
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
//# sourceMappingURL=DemoSites_index_p1.js.map