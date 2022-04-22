
// 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml

// 08/21/2018 02:46 am - SSN - Copied - Begin
// 08/21/2018 02:46 am - SSN - Copied from C: \Sams_Projects\PluralSight\html5 - line - of - business - applications\d\demos\CodedHomes.Web\Views\Homes


/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" /> 
/// <reference path="../../node_modules/@types/knockout.mapping/index.d.ts" /> 

// 04/22/2022 07:34 am - SSN - Remove since adding site_only_main buncle
// import * as util from '../js/site';

import * as angular from 'angular';


const CURRENT_PAGE_NO = 1; // for testing
const RECORDS_PER_PAGE = 4;


var demosites_index_p1_instance = function () {



    // Knockout related


    var ViewModel = function () {

        // 08/12/2019 05:58 am - SSN - [20190812-0515] - [006] - Apply fulltext search
        var self = this;


        // 09/10/2019 04:20 am - SSN - [20190910-0147] - [009] - WARNING: Tried to load angular more than once.
        // Since bound to control, it displays the observable as object[object]. Take out.

        // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch
        self.SearchText_KO = ko.observable();


        // 08/21/2019 12:16 pm - SSN - [20190821-1210] - [003] - SearchResultsFeedback_KO

        self.SearchResultsFeedback_KO = ko.observable("");
        self.SearchResultsFeedback_ClassName_KO = ko.observable();
        self.prefixPreWithShowHideAnchor_DontCall_KO = ko.observable(false);

        // 09/08/2019 07:10 pm - SSN - [20190908-0001] - [007] - Concurrency
        //////this.currentItem = {};
        self.currentItem = ko.observable();

        self.errorMessage = ko.observable();

        // 06/13/2021 08:49 am - SSN - [20210613-0452] - [015] - Adding tags to DevSite

        self.recordsPerPage_KO = ko.observable(RECORDS_PER_PAGE);
        self.currentPage_KO = ko.observable(CURRENT_PAGE_NO);
        self.devSitesCount_KO = ko.observable(-1);


        // 06/29/2021 08:47 am - SSN - Added
        self.SelectedRecordsPerPage_KO = ko.observable(RECORDS_PER_PAGE);

        // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
        //  this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));

        this.devSitesJSON = ko.observableArray([]);


        // 06/06/2019 05:44 pm - SSN - Moved from index_p1.cshtml - Update
        // 06/13/2021 08:44 am - SSN - [20210613-0452] - [014] - Adding tags to DevSite
        // Adding recordsPerPage and currentPage
        this.loadData = function (recordsPerPage: number, currentPage: number) {
            let self = this;


            // 09/09/2019 10:35 pm - SSN - [20190909-2136] - [005] - Select top 15

            // $.getJSON("/api/demositesapi", function (data) {
            // $.getJSON("/api/demositesapi/top?recordCount=15", function (data) {
            $.getJSON(`/api/demositesapi/${recordsPerPage}/${currentPage}`, function (data) {

                self.devSitesJSON.removeAll();
                self.devSitesJSON(data);


                // 06/29/2021 10:11 am - SSN
                //document.querySelector('#topTitle').scrollIntoView({
                //    behavior: 'smooth'
                //});

                const topTitle = document.querySelector('#topTitle');
                // Not applied in P2 * P3.
                if (topTitle) {

                    topTitle.scrollIntoView({
                        behavior: 'smooth'
                    });
                }


                // 06/29/2021 07:38 am - SSN - Testing filtering out elements for populating devsite tags
                // Not applied - TEstin.
                var mapping = {
                    'ignore': ["solution_Details_PRE_Encoded"]
                }
                var viewModel = ko.mapping.fromJS(data, mapping);




            });








            $.getJSON("/api/demositesapi/recordcount", function (data) {

                self.devSitesCount_KO(data);

            }).fail(function (response) {
                console.log('demositesapi - System error - 20210613-1036');
                console.error(response);
                self.SearchResultsFeedback_KO('System failure.');
                self.SearchResultsFeedback_ClassName_KO("alert alert-danger");

            });

        }


        // 08/16/2019 04:25 pm - SSN - [20190816-1625] - [001] - Correct logic for getting record count to show no search results message


        this.getRecordCount = function () {

            let recordCount: number = self.devSitesJSON().length;
            // self.devSitesJSON

            return recordCount;

        };


        // 06/13/2021 09:00 am - SSN - [20210613-0452] - [016] - Adding tags to DevSite

        this.onFirstPageKnockout = function () {

            return self.currentPage_KO() == 1;
        }

        this.onLastPageKnockout = function () {

            return self.currentPage_KO() >= self.totalPageCount();
        }

        this.totalPageCount = function () {
            return Math.ceil(self.devSitesCount_KO() / self.recordsPerPage_KO());
        }

        this.displayCurrentPageNumberAndTotalPages = function () {
            const currentPage = self.currentPage_KO();
            const totalPageCount = self.totalPageCount();

            return `Page ${currentPage} of ${totalPageCount}`;
        }

        this.getCurrentPage = function () {
            return self.currentPage_KO();
        }



        this.prevDevSitePage = function () {

            let currentPage = self.currentPage_KO();

            currentPage = currentPage-- < 1 ? 1 : currentPage;

            this.gotoDevSitePage_UTIL(currentPage);
        }


        this.gotoDevSitePage = function () {

            let currentPage = self.currentPage_KO();

            this.gotoDevSitePage_UTIL(currentPage);

        }


        this.nextDevSitePage = function () {

            let currentPage = self.currentPage_KO();

            currentPage = currentPage++ > self.totalPageCount() ? self.totalPageCount() : currentPage;

            this.gotoDevSitePage_UTIL(currentPage);

        }




        this.gotoDevSitePage_UTIL = function (currentPage: number) {

            self.currentPage_KO(currentPage);

            self.recordsPerPage_KO(self.SelectedRecordsPerPage_KO())

            self.loadData(self.SelectedRecordsPerPage_KO(), self.currentPage_KO());

            self.applyDisplayRequirements();

            self.updateAngularJSParts();

            // 04/22/2022 07:34 am - SSN - Remove since adding site_only_main buncle
            // util.site_instance.setDefaults();

        }




        // 06/15/2021 12:13 am - SSN - [20210613-0452] - [037] - Adding tags to DevSite

        this.updateAngularJSParts = function () {

            setTimeout(() => {

                const _element = angular.element($("[dev-site-tags-compiler]"));
                const scope_temp = _element.scope();

                scope_temp.$broadcast("call_devSiteTagsCompiler", { msg: 'doRecompileList' });

            }, 1000);

        }






        // 09/08/2019 08:07 pm - SSN - [20190908-0001] - [009] - Concurrency
        // Renamed del-confirm del_confirm_p1
        this.requestDelConfirm = function (itemToDelete) {

            self.currentItem(itemToDelete);
            $('#del_confirm_p1').modal({ backdrop: 'static', keyboard: false });

        };



        this.showJob = function (devSiteID) {

            $('#show-job').modal();

        };


        this.del = function () {

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


        // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch

        this.ressetSearchForm = function () {

            self.SearchResultsFeedback_KO('');
            self.SearchResultsFeedback_ClassName_KO("");
            self.SearchText_KO("");
            self.currentPage_KO(1);
            self.loadData(self.recordsPerPage_KO(), self.currentPage_KO());



            self.applyDisplayRequirements();

            self.updateAngularJSParts();

        }



        // 06/14/2021 03:46 pm - SSN - [20210613-0452] - [028] - Adding tags to DevSite
        // 04/22/2022 07:34 am - SSN - Remove since adding site_only_main buncle

        //this.applyDisplayRequirements = function () {


        //    if (!self.prefixPreWithShowHideAnchor_DontCall_KO()) {
        //        setTimeout(() => util.site_instance.prefixPreWithShowHideAnchor('20200102-1533'), 2000);
        //    }
        //    else {
        //        // 08/21/2019 01:48 pm - SSN - [20190821-1348] [001] - Added
        //        setTimeout(util.site_instance.showCollapsedDivs, 2000);

        //    }

        //}




        // 08/12/2019 05:57 am - SSN - [20190812-0515] - [005] - Apply fulltext search
        // https://stackoverflow.com/questions/16245905/fetching-or-sending-data-from-a-form-using-knockout-js
        //self.onSubmit = function () {
        this.onSubmitDemoSiteSearch = function () {


            let searchText = self.SearchText_KO();

            self.SearchResultsFeedback_KO('');
            self.SearchResultsFeedback_ClassName_KO('');
            self.devSitesCount_KO(-2);


            if (searchText === undefined) {
                self.SearchResultsFeedback_KO('Input is required for search.');
                self.SearchResultsFeedback_ClassName_KO("alert-warning");
                return;

            }
            else {
                searchText = searchText.trim();

                if (searchText === "") {
                    self.SearchResultsFeedback_KO('Input is required for search. (2)');
                    self.SearchResultsFeedback_ClassName_KO("alert-warning");
                    return;

                }

            }


            var data_pre = {
                "SearchText": self.SearchText_KO()
            };

            var data = JSON.stringify(data_pre);


            self.SearchResultsFeedback_KO('Searching...');
            self.SearchResultsFeedback_ClassName_KO("alert-info");


            $.ajax({
                type: "POST",
                data: data,
                url: "/api/demositesapi/Search",
                contentType: "application/json",
                dataType: 'json'
            }).done(function (response) {

                self.devSitesJSON.removeAll();
                self.devSitesJSON(response);

                self.SearchResultsFeedback_KO('');
                self.SearchResultsFeedback_ClassName_KO("");

                if (response.length === 0) {
                    self.SearchResultsFeedback_KO('Search returned no records.');
                    self.SearchResultsFeedback_ClassName_KO("alert-warning");
                }


                // 04/22/2022 07:34 am - SSN - Remove since adding site_only_main buncle
                //  self.applyDisplayRequirements();

                self.updateAngularJSParts();


            }).fail(function (error) {
                // 12/20/2019 05:06 pm - SSN - [20191220-1706] Adding resetSearch


                console.log('demositesapi Search fialure - 20210422-1422');

                console.log(error);
                console.log(error.responseJSON);




                let errorMessage = 'Search failure. ';

                if (error.responseJSON) {

                    if (error.responseJSON['Exception:Message']) {
                        errorMessage += ` Error from server: [${error.responseJSON['Exception:Message']}]`;
                    }

                    // 08/15/2021 02:19 pm - SSN
                    if (error.responseJSON['errorMessage']) {
                        errorMessage += ` <br/>Error from server: [${error.responseJSON.errorMessage}]`;
                    }

                }

                self.SearchResultsFeedback_KO(errorMessage);
                self.SearchResultsFeedback_ClassName_KO("alert alert-danger");

                self.devSitesJSON.removeAll();


            });



        }


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

    vm.loadData(vm.recordsPerPage_KO(), vm.currentPage_KO());




}();



var stringStartsWith = function (string, startsWith) {
    string = string || "";
    if (startsWith.length > string.length)
        return false;
    return string.substring(0, startsWith.length) === startsWith;
};



export { demosites_index_p1_instance };

