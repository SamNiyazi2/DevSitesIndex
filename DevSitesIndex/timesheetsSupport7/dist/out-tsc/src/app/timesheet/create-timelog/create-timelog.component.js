import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7
// Tempalte-based form
var CreateTimelogComponent = /** @class */ (function () {
    function CreateTimelogComponent(router) {
        this.router = router;
        this.isDirty = true;
    }
    CreateTimelogComponent.prototype.ngOnInit = function () {
        console.log('create-timelog.component - 20191009-0154');
        this.timelog = {
            dateAdded: null,
            dateModified: null,
            disciplineID: 0,
            job: {
                jobTitle: "",
                project: {
                    projectTitle: "Some job title"
                }
            },
            jobId: null,
            startTime: null,
            timeLogId: 0,
            totalSeconds: null,
            workDetail: "From db"
        };
    };
    CreateTimelogComponent.prototype.isValidControl = function (formControl, theControlName) {
        if (!formControl.controls[theControlName]) {
            return;
        }
        return formControl.controls[theControlName].valid || formControl.controls[theControlName].untouched;
    };
    CreateTimelogComponent.prototype.cancel = function () {
        this.router.navigate(['/timesheet']);
    };
    CreateTimelogComponent.prototype.saveTimelog = function (formValue) {
        console.log('create-timelog.component - 20191009-0147');
        console.log(formValue);
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