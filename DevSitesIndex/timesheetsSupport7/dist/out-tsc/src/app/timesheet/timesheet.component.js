import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ToastrService } from '../shared/toastr.service';
import { ActivatedRoute } from '@angular/router';
console.log('timesheet.component.ts - 20191003-1618');
var TimesheetComponent = /** @class */ (function () {
    // 10/04/2019 11:24 pm - SSN - [20191003-1557] - [012] - Adding data service to Angular7
    // Add toastrService
    // 10/06/2019 05:11 pm - SSN - [20191006-1643] - [006] - Adding Angular 7 - Observables and resolvers - Adding ActivatedRoute
    function TimesheetComponent(dataService, toastrService, route) {
        this.dataService = dataService;
        this.toastrService = toastrService;
        this.route = route;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        console.log("timesheet.component.ts - ngOnInit - 20191003-1607");
        this.timesheets = [];
        //let promise = this.dataService.getTimesheets().toPromise();
        //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);
        // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver
        var temp1 = this.route.snapshot.data['timesheets_resolver'];
        this.timesheets = this.route.snapshot.data['timesheets_resolver'];
    };
    TimesheetComponent.prototype.getTimesheetSuccess = function (response) {
        console.log('timesheetComponent  20191003-1715 - success');
        console.log(response);
        this.timesheets = response;
    };
    TimesheetComponent.prototype.getTimesheetError = function (response) {
        console.log('timesheetComponent  20191003-1715 - Error');
        console.log(response);
    };
    TimesheetComponent.prototype.handleThumbnailClick = function (data) {
        console.log('timesheet.component handleThumbnail click');
        console.log('Date received [' + data + ']');
        this.toastrService.success('Loaded [' + data + ']...', 'some title');
    };
    TimesheetComponent = tslib_1.__decorate([
        Component({
            selector: 'app-timesheet',
            templateUrl: './timesheet.component.html',
            styleUrls: ['./timesheet.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ToastrService, ActivatedRoute])
    ], TimesheetComponent);
    return TimesheetComponent;
}());
export { TimesheetComponent };
//# sourceMappingURL=timesheet.component.js.map