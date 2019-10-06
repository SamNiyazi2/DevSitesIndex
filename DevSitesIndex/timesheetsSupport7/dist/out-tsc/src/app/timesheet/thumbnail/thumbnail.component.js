import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
// 10/04/2019 05:29 pm - SSN - [20191003-1557] - [009] - Adding data service to Angular7
var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent() {
        this.eventClick = new EventEmitter();
        this.somePropertyInThumnail = "Some value for someProperty";
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
    };
    ThumbnailComponent.prototype.handleClickMe101 = function (timesheet) {
        console.log("Clicked me!");
        this.eventClick.emit(timesheet.job.jobTitle);
    };
    ThumbnailComponent.prototype.testFunction = function () {
        console.log("Output from testFunction");
    };
    ThumbnailComponent.prototype.setTotalSecondsClass = function () {
        if (!this.timesheet)
            return;
        if (!this.timesheet.totalSeconds)
            return;
        if (this.timesheet.totalSeconds < 3600)
            return ["green", "bold", "colorPadded"];
        if (this.timesheet.totalSeconds < 7200)
            return { yellow: true, colorPadded: true };
        return { red: true };
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "timesheet", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "eventClick", void 0);
    ThumbnailComponent = tslib_1.__decorate([
        Component({
            selector: 'app-thumbnail',
            templateUrl: './thumbnail.component.html?v=1',
            styleUrls: ['./thumbnail.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());
export { ThumbnailComponent };
//# sourceMappingURL=thumbnail.component.js.map