import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { ITimelog } from '../interfaces/ITimelog';
import { TOASTR_TOKEN, Toastr } from '../shared/toastr.service';


import * as ehu from '../util/ErrorHandlingHelpers';
import { ISqlStatsRecord } from '../interfaces/ISqlStatusRecord';
import { AuthenticateService } from '../users/authenticate.service';
import { BroadcasterUtilService } from '../broadcaster-util.service';



enum feedbackMessageNumber {
    Good,
    Bad
}


@Component({
    selector: 'app-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

    // 10/03/2019 04:04 pm - SSN - [20191003-1557] - [004] - Adding data service to Angular7
    // Injectindata DataService

    // 10/07/2019 09:24 am - SSN - [20191007-0914] - [002] - Adding Angular 7 - Collecting data with Angular forms and validations
    // Add ITimeLog
    timesheets: ITimelog[];

    sqlStatsRecord: any;
    recordsPerPage_default: number = 25;


    searchTerm: string = "";
    feedbackMessage: string = "";
    feedbackMessage_ClassName: feedbackMessageNumber = feedbackMessageNumber.Good;


    // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
    // Add toastrService
    // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute

    // 11/03/2019 08:24 am - SSN - [20191101-0526] - [020] - Check login status
    // broadcasterUtilService
    constructor(private authenticateService: AuthenticateService, private broadcasterUtil: BroadcasterUtilService,
        private dataService: DataService,

        // 10/10/2019 11:56 pm - SSN - [20191010-1354] - [006] - M11 - Understanding Angular's Dependency Injection
        @Inject(TOASTR_TOKEN) private toastrService: Toastr,

        private route: ActivatedRoute) {

    }



    ngOnInit() {


        this.authenticateService.isLoggedIn_promise();

        this.timesheets = [];
        this.sqlStatsRecord = null;


        // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver

        // 11/01/2019 11:30 am - SSN - Update to use paging
        let dataTemp = this.route.snapshot.data['timesheets_resolver'];


        //    this.timesheets = this.route.snapshot.data['timesheets_resolver'];
        this.timesheets = dataTemp.dataList;
        this.sqlStatsRecord = dataTemp.sqlStatsRecord;

    }


    getTimesheetSuccess(response) {

        this.timesheets = response;
        this.sqlStatsRecord = null;

    }


    getTimesheetError(response) {

        console.error('timesheetComponent  20191003-1715 - Error');
        console.log(response);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);
    }


    handleThumbnailClick(data) {

        this.toastrService.success('Loaded [' + data + ']...', 'some title');
    }



    // 10/21/2019 04:48 am - SSN - [20191021-0444] - [001] - M12 - Creating directives and advanced components in Angular.

    searchTimesheets() {

        this.feedbackMessage = "Searching...";

        // 11/01/2019 10:18 am - SSN - [20191101-1018] Added ISqlStatsRecord

        let data: ISqlStatsRecord = {
            searchTerm: this.searchTerm,
            recordsPerPage: this.recordsPerPage_default,
        }

        this.dataService.getTimelogSearch(data).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));

    }


    resetSearch() {

        // 11/01/2019 10:18 am - SSN - [20191101-1018] Added ISqlStatsRecord

        let data: ISqlStatsRecord = {
            searchTerm: "",
            recordsPerPage: this.recordsPerPage_default,
        }


        this.feedbackMessage = "";
        this.searchTerm = "";

        this.dataService.getTimelogSearch(data).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));

    }


    getTimelogSearchSuccess(result) {

        this.timesheets = result.dataList;
        this.sqlStatsRecord = result.sqlStatsRecord;

        this.feedbackMessage = "";

    }


    getTimelogSearchError(response) {

        this.feedbackMessage = "Returned no resuls";
        this.feedbackMessage_ClassName = feedbackMessageNumber.Bad;

        console.error('timesheet.Component - 20191021-0824  - Error ');
        console.log(response);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(response);

    }



    getfeedbackMessage_ClassName() {

        if (this.feedbackMessage_ClassName === feedbackMessageNumber.Good) return ["info_good"];
        if (this.feedbackMessage_ClassName === feedbackMessageNumber.Bad) return ["info_bad"];
        return null;

    }


    skipTimelog(data) {

        data.sqlStatsRecord.currentPageNo = data.sqlStatsRecord.currentPageNo + data.value;
        this.dataService.getTimelogSearch(data.sqlStatsRecord).then(this.getTimelogSearchSuccess.bind(this), this.getTimelogSearchError.bind(this));

    }


}
