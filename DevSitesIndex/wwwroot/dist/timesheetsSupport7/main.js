(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./users/user.module": [
		"./src/app/users/user.module.ts",
		"users-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timesheet/timelog/timelog.component */ "./src/app/timesheet/timelog/timelog.component.ts");
/* harmony import */ var _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timesheet/create-timelog/create-timelog.component */ "./src/app/timesheet/create-timelog/create-timelog.component.ts");
/* harmony import */ var _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/e404/e404.component */ "./src/app/shared/e404/e404.component.ts");
/* harmony import */ var _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util/timelog-route-activator.service */ "./src/app/util/timelog-route-activator.service.ts");
/* harmony import */ var _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/timesheet-resolver.service */ "./src/app/resolvers/timesheet-resolver.service.ts");










var routes = [
    // 10/02/2019 12:20 pm - SSN - [20191002-1118] - [004] - Adding Angular 7 test app
    // Testing excluding .Net paths
    { path: 'test1', redirectTo: 'search' },
    // 10/02/2019 05:51 pm - SSN - [20191002-1118] - [013] - Adding Angular 7 test app
    { path: 'test3', component: _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__["TestComponentComponent"] },
    // 10/06/2019 12:49 pm - SSN - [20191006-1211] - [002] - Adding Angular 7
    { path: 'timesheet/create', component: _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_6__["CreateTimelogComponent"], pathMatch: 'full', canDeactivate: ['canDeactivateCreateTimelog'] },
    //{ path: 'create', component: CreateTimelogComponent },
    // 10/03/2019 12:19 pm - SSN - [20191003-1219] - [001] - Adding timesheet to Angular7
    // 10/06/2019 05:06 pm - SSN - [20191006-1643] - [004] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService
    { path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetComponent"], resolve: { timesheets_resolver: _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_9__["TimesheetResolverService"] } },
    // 10/05/2019 03:10 pm - SSN - [20191003-1557] - [015] - Adding data service to Angular7
    // 10/06/2019 01:41 pm - SSN - [20191006-1211] - [008] - Adding Angular 7 - TimelogRouteActivatorService
    { path: 'timelog/:id', component: _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_5__["TimelogComponent"], canActivate: [_util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_8__["TimelogRouteActivatorService"]] },
    // 10/06/2019 01:28 pm - SSN - [20191006-1211] - [005] - Adding Angular 7
    { path: 'e404', component: _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_7__["E404Component"] },
    { path: '', redirectTo: 'test3', pathMatch: 'full' },
    // 10/06/2019 09:09 pm - SSN - [20191006-2058] - [003] - Adding Angular 7 - Lazily loading feature modules
    { path: 'user', loadChildren: './users/user.module#UserModule' },
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

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/*! exports provided: AppModule, checkDirtyState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDirtyState", function() { return checkDirtyState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-component/test-component.component */ "./src/app/test-component/test-component.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_toastr_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/toastr.service */ "./src/app/shared/toastr.service.ts");
/* harmony import */ var _timesheet_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timesheet/thumbnail/thumbnail.component */ "./src/app/timesheet/thumbnail/thumbnail.component.ts");
/* harmony import */ var _nav_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav/header/header.component */ "./src/app/nav/header/header.component.ts");
/* harmony import */ var _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timesheet/timelog/timelog.component */ "./src/app/timesheet/timelog/timelog.component.ts");
/* harmony import */ var _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timesheet/create-timelog/create-timelog.component */ "./src/app/timesheet/create-timelog/create-timelog.component.ts");
/* harmony import */ var _nav_timesheet_menu_timesheet_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav/timesheet-menu/timesheet-menu.component */ "./src/app/nav/timesheet-menu/timesheet-menu.component.ts");
/* harmony import */ var _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/e404/e404.component */ "./src/app/shared/e404/e404.component.ts");
/* harmony import */ var _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/timelog-route-activator.service */ "./src/app/util/timelog-route-activator.service.ts");
/* harmony import */ var _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/timesheet-resolver.service */ "./src/app/resolvers/timesheet-resolver.service.ts");
/* harmony import */ var _users_authenticate_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/authenticate.service */ "./src/app/users/authenticate.service.ts");



// 10/03/2019 04:59 pm - SSN - [20191003-1557] - [005] - Adding data service to Angular7





// 10/03/2019 03:57 pm - SSN - [20191003-1557] - [002] - Adding data service to Angular7

// 10/04/2019 11:22 pm - SSN - [20191003-1557] - [011] - Adding data service to Angular7










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_6__["TestComponentComponent"],
                _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetComponent"],
                _timesheet_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_10__["ThumbnailComponent"],
                _nav_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _timesheet_timelog_timelog_component__WEBPACK_IMPORTED_MODULE_12__["TimelogComponent"],
                _timesheet_create_timelog_create_timelog_component__WEBPACK_IMPORTED_MODULE_13__["CreateTimelogComponent"],
                _nav_timesheet_menu_timesheet_menu_component__WEBPACK_IMPORTED_MODULE_14__["TimesheetMenuComponent"],
                _shared_e404_e404_component__WEBPACK_IMPORTED_MODULE_15__["E404Component"]
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
            // 10/06/2019 01:39 pm - SSN - [20191006-1211] - [007] - Adding Angular 7 - TimelogRouteActivatorService
            // 10/06/2019 05:05 pm - SSN - [20191006-1643] - [003] - Adding Angular 7 - Observables and resolvers - TimesheetResolverService
            providers: [_shared_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _shared_toastr_service__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _util_timelog_route_activator_service__WEBPACK_IMPORTED_MODULE_16__["TimelogRouteActivatorService"], _resolvers_timesheet_resolver_service__WEBPACK_IMPORTED_MODULE_17__["TimesheetResolverService"],
                {
                    provide: 'canDeactivateCreateTimelog',
                    useValue: checkDirtyState
                },
                _users_authenticate_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticateService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function checkDirtyState(component) {
    if (typeof (component.isDirty) != 'boolean') {
        console.error("property isDirty does not exists on component:");
        console.error(component);
        return true;
    }
    if (component.isDirty) {
        return window.confirm("You have not saved your changes. Do you really want to cancel?");
    }
    return true;
}


/***/ }),

/***/ "./src/app/nav/header/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav/header/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n\r\n.menu_button {\r\n  margin: 8px 0px 0px 0px;\r\n}\r\n\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuXHJcbi5tZW51X2J1dHRvbiB7XHJcbiAgbWFyZ2luOiA4cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbiBcclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/header/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav/header/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a asp-area=\"\" asp-controller=\"Home\" asp-action=\"Index\" class=\"navbar-brand\">@Startup.SITE_NAME_STRING</a>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n\r\n\r\n\r\n        <li><a href=\"/DemoSites/Index\">Sites</a></li>\r\n        <li><a href=\"/home/about\">About</a></li>\r\n        <li><a href=\"/Home/Contact\">Contact</a></li>\r\n\r\n        <li class=\"dropdown-submenu\">\r\n\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Jobs  <span class=\"caret\"></span></a>\r\n\r\n          <ul class=\"dropdown-menu\">\r\n\r\n            <li><a href=\"/Companies\">Companies</a></li>\r\n            <li><a href=\"/Discipline\">Disciplines</a></li>\r\n            <li><a href=\"/Projects\">Projects</a></li>\r\n            <li><a href=\"/jobs\">Jobs</a></li>\r\n            <li><a href=\"/TimeLogs\">Timelog</a></li>\r\n            <li><a href=\"/timesheet\">Timelog (Angular 7)</a></li>\r\n            <li><a href=\"/ReferenceSites\">Reference Sites</a></li>\r\n            <li><a href=\"/CodeReferences\">Code</a></li>\r\n            <li><a href=\"/CommandLine\">Command Line</a></li>\r\n            <li><a href=\"/DevSites\">Demo Sites</a></li>\r\n\r\n\r\n          </ul>\r\n\r\n        </li>\r\n\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav \" style=\"float:right;\">\r\n        <li *ngIf=\"!authenticateService.isAuthenticated()\">\r\n          <a [routerLink]=\"['/user/login']\">Login</a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authenticateService.isAuthenticated()\">\r\n          <a id=\"manage\" class=\"nav-link text-dark\" title=\"Manage\" [routerLink]=\"['/user/profile']\"><span [innerText]=\"getGreetingMessage()\"></span></a>\r\n        </li>\r\n        <li class=\"nav-item\" *ngIf=\"authenticateService.isAuthenticated()\">\r\n          <!--<form id=\"logoutForm\" class=\"form-inline\" action=\"/Identity/Account/Logout?returnUrl=%2F%3Fpage%3D%252FIndex\" method=\"post\">\r\n            <button id=\"logout\" type=\"submit\" class=\"nav-link btn btn-link text-dark menu_button\">Logout</button>\r\n          </form>-->\r\n\r\n          <a id=\"logout\" class=\"nav-link text-dark\" title=\"Logout\" [routerLink]=\"['/user/logout']\">Logout</a>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n<div id=\"forgeryToken\" [innerHtml]=\"forgeryToken\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/header/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav/header/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_users_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/users/authenticate.service */ "./src/app/users/authenticate.service.ts");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var HeaderComponent = /** @class */ (function () {
    // 10/08/2019 10:39 pm - SSN - [20191008-1232] - [017] - X-XSRF-TOKEN
    // https://angular.io/guide/security#xss
    function HeaderComponent(authenticateService, dataService, sanitizer) {
        this.authenticateService = authenticateService;
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // 10/08/2019 06:41 pm - SSN - [20191008-1232] - [010] - X-XSRF-TOKEN
        this.authenticateService.isLoggedIn().then(this.isLoggedInSuccess.bind(this), this.isLoggedInError.bind(this));
        this.dataService.getForgeryToken().then(this.forgeryTokenSuccess.bind(this), this.forgeryTokenError.bind(this));
    };
    HeaderComponent.prototype.forgeryTokenSuccess = function (response) {
        this.forgeryToken = this.sanitizer.bypassSecurityTrustHtml(response);
    };
    HeaderComponent.prototype.forgeryTokenError = function (response) {
        console.log('header.component.ts - forgeryTokenError - 20191009-0014');
        console.log(response);
        this.forgeryToken = "";
    };
    HeaderComponent.prototype.isLoggedInSuccess = function (response) {
        this.authenticateService.currentUser = response;
    };
    HeaderComponent.prototype.isLoggedInError = function (response) {
        console.log('header.component.ts isLoggedInError');
        console.log(response);
    };
    HeaderComponent.prototype.getGreetingMessage = function () {
        if (this.authenticateService) {
            if (this.authenticateService.isAuthenticated()) {
                return "Hello " + this.authenticateService.currentUser.firstName;
            }
            else {
                return "Not Authenticated";
            }
        }
        return "";
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/nav/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/nav/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_users_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"], src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.menu {\r\n  padding: 8px;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n  .menu a {\r\n    color: #9d9d9d;\r\n    margin-right: 20px;\r\n  }\r\n\r\n  .menu a:hover {\r\n      color: white;\r\n      text-decoration: none;\r\n    }\r\n\r\n  .menu a.active {\r\n      color: red!important;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L3RpbWVzaGVldC1tZW51L3RpbWVzaGVldC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0VBRUU7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztFQUVFO01BQ0UsWUFBWTtNQUNaLHFCQUFxQjtJQUN2Qjs7RUFHQTtNQUNFLG9CQUFvQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdi90aW1lc2hlZXQtbWVudS90aW1lc2hlZXQtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZW51IHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4gIC5tZW51IGEge1xyXG4gICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAgIC5tZW51IGE6aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm1lbnUgYS5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmVkIWltcG9ydGFudDtcclxuICAgIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"menu\">\r\n\r\n  <a [routerLink]=\"['/timesheet']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Timelog List</a>  \r\n  <a [routerLink]=\"['/timesheet/create']\" routerLinkActive=\"active\">Create New Entry</a>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/nav/timesheet-menu/timesheet-menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/nav/timesheet-menu/timesheet-menu.component.ts ***!
  \****************************************************************/
/*! exports provided: TimesheetMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetMenuComponent", function() { return TimesheetMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimesheetMenuComponent = /** @class */ (function () {
    function TimesheetMenuComponent() {
    }
    TimesheetMenuComponent.prototype.ngOnInit = function () {
    };
    TimesheetMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet-menu',
            template: __webpack_require__(/*! ./timesheet-menu.component.html */ "./src/app/nav/timesheet-menu/timesheet-menu.component.html"),
            styles: [__webpack_require__(/*! ./timesheet-menu.component.css */ "./src/app/nav/timesheet-menu/timesheet-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimesheetMenuComponent);
    return TimesheetMenuComponent;
}());



/***/ }),

/***/ "./src/app/resolvers/timesheet-resolver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/resolvers/timesheet-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: TimesheetResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetResolverService", function() { return TimesheetResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// 10/06/2019 05:00 pm - SSN - [20191006-1643] - [002] - Adding Angular 7 - Observables and resolvers




var TimesheetResolverService = /** @class */ (function () {
    function TimesheetResolverService(dataService) {
        this.dataService = dataService;
    }
    TimesheetResolverService.prototype.resolve = function () {
        var obj2 = this.dataService.getTimesheets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (timesheets) { return timesheets; }));
        return obj2;
    };
    TimesheetResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], TimesheetResolverService);
    return TimesheetResolverService;
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
        return this.http.get("/api/timelogapi");
    };
    // 10/05/2019 02:52 pm - SSN - [20191003-1557] - [014] - Adding data service to Angular7
    DataService.prototype.getTimesheet = function (id) {
        return this.http.get("/api/timelogapi/get_custom/" + id);
    };
    // 10/07/2019 10:58 am - SSN - [20191007-1020] - [005] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user
    DataService.prototype.authenticateUser = function (userObject) {
        return this.http.post("/api/authenticateUserAPI/", userObject);
    };
    // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [007] - X-XSRF-TOKEN
    DataService.prototype.logoutUser = function (token) {
        var requestOptions = {
            headers: {
                'RequestVerificationToken': token,
                'X-XSRF-Token': token
            }
        };
        return this.http.post("/api/authenticateUserAPI/logout", {}, requestOptions);
    };
    // 10/08/2019 06:45 pm - SSN - [20191008-1232] - [012] - X-XSRF-TOKEN
    DataService.prototype.isLoggedIn = function () {
        return this.http.get("/api/authenticateUserAPI/isLoggedIn");
    };
    // 10/08/2019 08:13 pm - SSN - [20191008-1232] - [016] - X-XSRF-TOKEN
    DataService.prototype.getForgeryToken = function () {
        return this.http.get("/api/authenticateUserAPI/ForgeryToken", { responseType: 'text' }).toPromise();
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

/***/ "./src/app/shared/e404/e404.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/e404/e404.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.errorMessage {\r\n  margin-top:150px;\r\n  font-size:48px;\r\n  text-align:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2U0MDQvZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5lcnJvck1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6MTUwcHg7XHJcbiAgZm9udC1zaXplOjQ4cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/e404/e404.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/e404/e404.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"errorMessage\">Invalid Request</h1>\r\n"

/***/ }),

/***/ "./src/app/shared/e404/e404.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/e404/e404.component.ts ***!
  \***********************************************/
/*! exports provided: E404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E404Component", function() { return E404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// 10/06/2019 01:28 pm - SSN - [20191006-1211] - [004] - Adding Angular 7
var E404Component = /** @class */ (function () {
    function E404Component() {
    }
    E404Component.prototype.ngOnInit = function () {
    };
    E404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e404',
            template: __webpack_require__(/*! ./e404.component.html */ "./src/app/shared/e404/e404.component.html"),
            styles: [__webpack_require__(/*! ./e404.component.css */ "./src/app/shared/e404/e404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], E404Component);
    return E404Component;
}());



/***/ }),

/***/ "./src/app/shared/toastr.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/toastr.service.ts ***!
  \******************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// 10/04/2019 11:25 pm - SSN - [20191003-1557] - [013] - Adding data service to Angular7


var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    ToastrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
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

module.exports = "<p>\r\n  test-component works!\r\n</p>\r\n"

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

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC9jcmVhdGUtdGltZWxvZy9jcmVhdGUtdGltZWxvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-timesheet-menu></app-timesheet-menu>\r\n\r\n<div class=\"container\">\r\n  <h3>Create new timelog</h3>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button> &nbsp;\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timesheet/create-timelog/create-timelog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/timesheet/create-timelog/create-timelog.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateTimelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTimelogComponent", function() { return CreateTimelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// 10/06/2019 01:20 pm - SSN - [20191006-1211] - [003] - Adding Angular 7
var CreateTimelogComponent = /** @class */ (function () {
    function CreateTimelogComponent(router) {
        this.router = router;
        this.isDirty = true;
    }
    CreateTimelogComponent.prototype.ngOnInit = function () {
    };
    CreateTimelogComponent.prototype.cancel = function () {
        this.router.navigate(['/timesheet']);
    };
    CreateTimelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-timelog',
            template: __webpack_require__(/*! ./create-timelog.component.html */ "./src/app/timesheet/create-timelog/create-timelog.component.html"),
            styles: [__webpack_require__(/*! ./create-timelog.component.css */ "./src/app/timesheet/create-timelog/create-timelog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateTimelogComponent);
    return CreateTimelogComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.customThumbnail {\r\n  min-height: 260px;\r\n}\r\n\r\n.colorPadded {\r\n  padding: 6px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.green {\r\n  color: green;\r\n  background-color:yellow\r\n}\r\n\r\n.red {\r\n  color: red;\r\n}\r\n\r\n.yellow {\r\n  color: yellow;\r\n  background-color: darkslategrey;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZXNoZWV0L3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdGltZXNoZWV0L3RodW1ibmFpbC90aHVtYm5haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY3VzdG9tVGh1bWJuYWlsIHtcclxuICBtaW4taGVpZ2h0OiAyNjBweDtcclxufVxyXG5cclxuLmNvbG9yUGFkZGVkIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6eWVsbG93XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi55ZWxsb3cge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3NsYXRlZ3JleTtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.html?v=1":
/*!******************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.html?v=1 ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"well hoverwell thumbnail customThumbnail\">\r\n\r\n  <h3><a [routerLink]=\"['/timelog',timesheet.timeLogId]\">[{{timesheet.timeLogId}}] - {{timesheet.job.project.projectTitle}}</a></h3>\r\n  <hr />\r\n  <div>\r\n\r\n    {{timesheet.discipline.disciplineShort}}<br />\r\n    {{timesheet.job.jobTitle}}<br />\r\n\r\n\r\n    <span [ngClass]=\"setTotalSecondsClass()\">\r\n\r\n      {{timesheet.totalSeconds}}\r\n    </span>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n<button class=\"btn btn-primary\" (click)=\"handleClickMe101(timesheet)\">Click Me!</button> &nbsp; \r\n"

/***/ }),

/***/ "./src/app/timesheet/thumbnail/thumbnail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/timesheet/thumbnail/thumbnail.component.ts ***!
  \************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// 10/04/2019 05:29 pm - SSN - [20191003-1557] - [009] - Adding data service to Angular7
var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent() {
        this.eventClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "timesheet", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "eventClick", void 0);
    ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html?v=1 */ "./src/app/timesheet/thumbnail/thumbnail.component.html?v=1"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/timesheet/thumbnail/thumbnail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.css":
/*!*********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzaGVldC90aW1lbG9nL3RpbWVsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-timesheet-menu></app-timesheet-menu>\r\n\r\n\r\n<div *ngIf=\"!timelog\" class=\"container info_bad\">\r\n  Failed to retrieve record.\r\n</div>\r\n\r\n<div *ngIf=\"timelog\" class=\"container\">\r\n\r\n\r\n  <h1>[{{timelog.timeLogId}}]</h1>\r\n  <hr />\r\n  <dl class=\"dl-horizontal\">\r\n\r\n    <dt>\r\n      Project Title:\r\n    </dt>\r\n    <dd>\r\n      {{timelog?.job?.project.projectTitle}}\r\n\r\n    </dd>\r\n\r\n    <dt>\r\n      JobTitle\r\n    </dt>\r\n    <dd>\r\n      <a href=\"/jobs/Details\" asp-route-id=\"@Model.TimeLog.JobId\">\r\n        {{timelog?.job?.jobTitle}}\r\n      </a>\r\n    </dd>\r\n\r\n    <dt>\r\n      Discipline\r\n    </dt>\r\n    <dd>\r\n      {{timelog?.discipline?.disciplineShort}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      StartTime\r\n    </dt>\r\n    <dd>\r\n      {{timelog.startTime}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      StopTime_AsString\r\n    </dt>\r\n    <dd>\r\n      {{timelog.stopTime_AsString}}\r\n    </dd>\r\n\r\n\r\n    <dt>\r\n      TotalSeconds_ToTimeSpanFormat_T\r\n    </dt>\r\n    <dd>\r\n      {{timelog.totalSeconds_ToTimeSpanFormat_T}}\r\n    </dd>\r\n\r\n\r\n\r\n\r\n\r\n    <dt>\r\n      Date Added\r\n    </dt>\r\n    <dd>\r\n      {{timelog.dateAdded}}\r\n    </dd>\r\n    <dt>\r\n      Date Modified\r\n    </dt>\r\n    <dd>\r\n      {{timelog.dateModified}}\r\n    </dd>\r\n    <dt>\r\n      Work Detail\r\n    </dt>\r\n    <dd>\r\n      {{timelog.workDetail}}\r\n    </dd>\r\n\r\n  </dl>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/timesheet/timelog/timelog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/timesheet/timelog/timelog.component.ts ***!
  \********************************************************/
/*! exports provided: TimelogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogComponent", function() { return TimelogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// 10/05/2019 03:14 pm - SSN - [20191003-1557] - [016] - Adding data service to Angular7




var TimelogComponent = /** @class */ (function () {
    function TimelogComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TimelogComponent.prototype.ngOnInit = function () {
        this.timelog = {};
        this.timelog.timeLogId = -999;
        // 10/06/2019 12:12 pm - SSN - [20191006-1211] - [001] - Adding Angular 7
        var id = +this.route.snapshot.params['id'];
        var promise = this.dataService.getTimesheet(id).toPromise();
        promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError).catch(this.getTimesheetCatch);
    };
    TimelogComponent.prototype.getTimesheetSuccess = function (response) {
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
    TimelogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timelog',
            template: __webpack_require__(/*! ./timelog.component.html */ "./src/app/timesheet/timelog/timelog.component.html"),
            styles: [__webpack_require__(/*! ./timelog.component.css */ "./src/app/timesheet/timelog/timelog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TimelogComponent);
    return TimelogComponent;
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

module.exports = "\r\n<app-timesheet-menu></app-timesheet-menu>\r\n\r\n<div class=\"row\">\r\n\r\n  <div *ngFor=\"let timesheet of timesheets\" class=\"col-md-5\">\r\n\r\n    <!-- timesheetThumnail: template variable -->\r\n    <app-thumbnail #timesheetThumbnail [timesheet]=\"timesheet\" (eventClick)=\"handleThumbnailClick($event)\"></app-thumbnail>\r\n    <button class=\"btn btn-info\" (click)=\"timesheetThumbnail.testFunction()\">Call thumbnail test</button>\r\n    <br />\r\n    <br />\r\n    <br />\r\n  </div>\r\n\r\n</div>\r\n"

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
/* harmony import */ var _shared_toastr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/toastr.service */ "./src/app/shared/toastr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





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
        this.timesheets = [];
        //let promise = this.dataService.getTimesheets().toPromise();
        //promise.then(this.getTimesheetSuccess.bind(this), this.getTimesheetError);
        // 10/06/2019 05:10 pm - SSN - [20191006-1643] - [005] - Adding Angular 7 - Observables and resolvers - Pickup data from resolver
        this.timesheets = this.route.snapshot.data['timesheets_resolver'];
    };
    TimesheetComponent.prototype.getTimesheetSuccess = function (response) {
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
    TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/timesheet/timesheet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _shared_toastr_service__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], TimesheetComponent);
    return TimesheetComponent;
}());



/***/ }),

/***/ "./src/app/users/authenticate.service.ts":
/*!***********************************************!*\
  !*** ./src/app/users/authenticate.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
// 10/07/2019 10:20 am - SSN - [20191007-1020] - [001] - Adding Angular 7 - Collecting data with Angular forms and validations - Authenticate user



var AuthenticateService = /** @class */ (function () {
    function AuthenticateService(dataService) {
        this.dataService = dataService;
        this.currentUser = null;
        this.counter = 0;
    }
    AuthenticateService.prototype.loginUser = function (email, password) {
        return this.dataService.authenticateUser({ email: email, password: password }).toPromise();
    };
    AuthenticateService.prototype.isAuthenticated = function () {
        this.counter += 1;
        if (!this.currentUser)
            return false;
        return this.currentUser.isAuthenticated;
    };
    // 10/08/2019 06:44 pm - SSN - [20191008-1232] - [011] - X-XSRF-TOKEN
    AuthenticateService.prototype.isLoggedIn = function () {
        return this.dataService.isLoggedIn().toPromise();
    };
    // 10/08/2019 02:09 pm - SSN - [20191008-1232] - [006] - X-XSRF-TOKEN
    AuthenticateService.prototype.logoutUser = function (token) {
        return this.dataService.logoutUser(token).toPromise();
    };
    AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AuthenticateService);
    return AuthenticateService;
}());



/***/ }),

/***/ "./src/app/util/timelog-route-activator.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/util/timelog-route-activator.service.ts ***!
  \*********************************************************/
/*! exports provided: TimelogRouteActivatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelogRouteActivatorService", function() { return TimelogRouteActivatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data.service */ "./src/app/shared/data.service.ts");
// 10/06/2019 01:31 pm - SSN - [20191006-1211] - [006] - Adding Angular 7




var TimelogRouteActivatorService = /** @class */ (function () {
    function TimelogRouteActivatorService(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    TimelogRouteActivatorService.prototype.canActivate = function (route) {
        var _this = this;
        var result = this.dataService.getTimesheet(route.params['id']).toPromise().then(function (r) {
            var recordExists = !!r;
            return recordExists;
        }, function (r) {
            _this.route.navigate(['e404']);
            return false;
        });
        return result;
    };
    TimelogRouteActivatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TimelogRouteActivatorService);
    return TimelogRouteActivatorService;
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