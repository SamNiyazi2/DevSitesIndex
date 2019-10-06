import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7
var CreateTimelogComponent = /** @class */ (function () {
    function CreateTimelogComponent(router) {
        this.router = router;
    }
    CreateTimelogComponent.prototype.ngOnInit = function () {
    };
    CreateTimelogComponent.prototype.cancel = function () {
        this.router.navigate(['/timesheet']);
    };
    CreateTimelogComponent = tslib_1.__decorate([
        Component({
            selector: 'app-create-timelog',
            templateUrl: './create-timelog.component.html',
            styleUrls: ['./create-timelog.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], CreateTimelogComponent);
    return CreateTimelogComponent;
}());
export { CreateTimelogComponent };
//# sourceMappingURL=create-timelog.component.js.map