(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");





console.log('app.routing.module.ts - 20191002-2005');
var routes = [
    // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
    // Testing excluding .Net paths
    { path: 'test1', redirectTo: 'search' },
    // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app
    { path: 'test3', component: _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__["TestComponentComponent"] },
    // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
    { path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetComponent"] },
    //{ path: '**', component: AppComponent, outlet: "main101" },
    { path: '**', redirectTo: 'test3' },
];
var AppRoutingModule = /** @class */ (function () {
    // 10/02/2019 05:19 pm - SSN - [20191002-1118] - [011] - Adding Angular 7 test app
    function AppRoutingModule(router) {
        //this.router.errorHandler = (error: any) => {
        //  console.log("*******************************************");
        //  console.log("app-routing.module.ts - 20191002-1721");
        //  console.log(error);
        this.router = router;
        //  console.log("*******************************************");
        //};
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h3>\r\n     {{ title }} <span style=\"font-size:14px\">(v-015)</span>\r\n  </h3>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'timesheetsSupport7';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");



// 10/03/2019 04:59 pm - SSN - [20191003-1557] - [005] - Adding data service to Angular7





// 10/03/2019 03:57 pm - SSN - [20191003-1557] - [002] - Adding data service to Angular7

console.log('app.module.ts - 20191002-2007');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__["TestComponentComponent"],
                _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetComponent"]
            ],
            imports: [
                // 10/02/2019 05:47 pm - SSN - [20191002-1118] - [012] - Adding Angular 7 test app
                // Did this solve problem with "ERROR Error: The selector "app-root" did not match any elements"  - Removed app-root from _layout.cshtml
                // putting back in
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // 10/03/2019 05:00 pm - SSN - [20191003-1557] - [006] - Adding data service to Angular7
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            // 10/03/2019 04:03 pm - SSN - [20191003-1557] - [003] - Adding data service to Angular7
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// 10/03/2019 03:45 pm - SSN - [20191003-1557] - [001] - Adding data service to Angular7



var DataService = /** @class */ (function () {
    // 10/03/2019 05:01 pm - SSN - [20191003-1557] - [007] - Adding data service to Angular7
    // Inject httpClient
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getTimesheets = function () {
        console.log('dataservice - getTimesheets - 20191003-1707');
        return this.http.get("/api/timelogapi");
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/test-component/test-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/test-component/test-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QtY29tcG9uZW50L3Rlc3QtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/test-component/test-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/test-component/test-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/test-component/test-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/test-component/test-component.component.ts ***!
  \************************************************************/
/*! exports provided: TestComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponentComponent", function() { return TestComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponentComponent = /** @class */ (function () {
    function TestComponentComponent() {
    }
    TestComponentComponent.prototype.ngOnInit = function () {
    };
    TestComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-component',
            template: __webpack_require__(/*! ./test-component.component.html */ "./src/app/test-component/test-component.component.html"),
            styles: [__webpack_require__(/*! ./test-component.component.css */ "./src/app/test-component/test-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestComponentComponent);
    return TestComponentComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC90aW1lc2hlZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  timesheet works (v11)\r\n</p>\r\n\r\n<div *ngFor=\"let timesheet of timesheets\">\r\n  [{{timesheet.timeLogId}}]  [{{timesheet.job.project.projectTitle}}] [{{timesheet.job.jobTitle}}] [{{timesheet.discipline.disciplineShort}}]\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.ts ***!
  \**************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");



console.log('timesheet.component.ts - 20191003-1618');
var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(dataService) {
        this.dataService = dataService;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        console.log("timesheet.component.ts - ngOnInit - 20191003-1607");
        this.timesheets = [];
        this.dataService.getTimesheets().toPromise().then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);
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
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/timesheet/timesheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Sams\DevSitesIndex\DevSitesIndex\timesheetsSupport7\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map