
// 09/26/2019 06:38 am - SSN - [20190926-0638] - [001] - Move scripts from index_p1.cshtml to demoSites_index_p1


//    08/21/2018 02:46 am - SSN - Copied - Begin
//  08/21/2018 02:46 am - SSN - Copied from C:\Sams_Projects\PluralSight\html5-line-of-business-applications\d\demos\CodedHomes.Web\Views\Homes


/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../../node_modules/@types/knockout/index.d.ts" /> 
/// <reference path="../../node_modules/@types/knockout.mapping/index.d.ts" /> 

/// <reference path="../../node_modules_hack/SSN_jquery_modal.d.ts" />


// Knockout related


var demoSites_index_p3_instance = function () {



    var doSetup = function () {


        $(function () {

            var ViewModel = function () {

                // 09/26/2019 06:42 am - SSN - [20190926-0638] - [002] - Move scripts from index_p1.cshtml to demoSites_index_p1
                // Copied from DemoSites_index_p1.ts

                // Begin
                this.devSitesJSON = ko.observableArray([]);

                this.loadData = function () {
                    var self = this;

                    $.getJSON("/api/demositesapi/top?recordCount=15", function (data) {

                        self.devSitesJSON.removeAll();
                        self.devSitesJSON(data);
                    });

                }
                // End



                this.currentItem = {};

                this.errorMessage = ko.observable();


                // 09/26/2019 06:44 am - SSN - [20190926-0638] - [003] - Move scripts from index_p1.cshtml to demoSites_index_p1
                // Set with loaddata
                //this.devSitesJSON = ko.observableArray(@Html.Raw(Model.devSitesJSON));


                this.requestDelConfirm = function (itemToDelete) {

                    vm.currentItem = itemToDelete;
                    $('#del-confirm').modal({ backdrop: 'static', keyboard: false });

                };


                this.showJob = function () {

                    $('#show-job').modal();

                };


                this.del = function () {
                    alert('Calling del. [20190812-2128]');
                    var itemToDelete = ko.toJS(vm.currentItem);
                    $('#del-confirm').modal('hide');

                };

            };

            console.debug('20191213-1944 - demoSites_index_p3 - 001');

            var vm = new ViewModel();

            console.debug('20191213-1944 - demoSites_index_p3 - 002');

            ko.applyBindings(vm);

            console.debug('20191213-1944 - demoSites_index_p3 - 003');

            vm.loadData();

        });

    }

    

    doSetup();


}();



export { demoSites_index_p3_instance };


