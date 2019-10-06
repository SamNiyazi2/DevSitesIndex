// 10/05/2019 03:14 pm - SSN - [20191003-1557] - [016] - Adding data service to Angular7
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ActivatedRoute } from '@angular/router';
var TimelogComponent = /** @class */ (function () {
    function TimelogComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TimelogComponent.prototype.ngOnInit = function () {
        console.log("timelog.component - 20191005-1521");
        this.timelog = {};
        this.timelog.timeLogId = -999;
        // 10/06/2019 12:12 pm - SSN - [20191006-1211] - [001] - Adding Angular 7
        var id = +this.route.snapshot.params['id'];
        var promise = this.dataService.getTimesheet(id).toPromise();
        promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError).catch(this.getTimesheetCatch);
    };
    TimelogComponent.prototype.getTimesheetSuccess = function (response) {
        console.log('timelog.component - getTimehseetSuccess - 20191005-1523');
        console.log(response);
        this.timelog = response;
    };
    TimelogComponent.prototype.getTimesheetError = function (response) {
        console.log('timelog.component - getTimehseetError - 20191005-1524');
        console.log(response);
    };
    TimelogComponent.prototype.getTimesheetCatch = function (response) {
        console.log('timelog.component - getTimehseetCatch - 20191005-1526');
        console.log(response);
    };
    TimelogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-timelog',
            templateUrl: './timelog.component.html',
            styleUrls: ['./timelog.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, ActivatedRoute])
    ], TimelogComponent);
    return TimelogComponent;
}());
export { TimelogComponent };
//# sourceMappingURL=timelog.component.js.map