(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["FEATURES-user-module-user-module"],{

/***/ "./src/app/FEATURES/user-module/org-chart/data.ts":
/*!********************************************************!*\
  !*** ./src/app/FEATURES/user-module/org-chart/data.ts ***!
  \********************************************************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
        label: 'Root',
        children: [
            {
                label: 'Child 1',
                children: [
                    {
                        label: 'Grandchild 1.1'
                    },
                    {
                        label: 'Grandchild 1.2'
                    }
                ]
            },
            {
                label: 'Child 2',
                children: [
                    {
                        label: 'Child 2.1'
                    },
                    {
                        label: 'Child 2.2'
                    }
                ]
            }
        ]
    }];


/***/ }),

/***/ "./src/app/FEATURES/user-module/org-chart/org-chart.component.css":
/*!************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/org-chart/org-chart.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZFQVRVUkVTL3VzZXItbW9kdWxlL29yZy1jaGFydC9vcmctY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/org-chart/org-chart.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/org-chart/org-chart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n      <!-- <p-organizationChart [value]=\"data\"></p-organizationChart> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/FEATURES/user-module/org-chart/org-chart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/user-module/org-chart/org-chart.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrgChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return OrgChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/FEATURES/user-module/org-chart/data.ts");



var OrgChartComponent = /** @class */ (function () {
    function OrgChartComponent(data) {
        this.data = data;
    }
    OrgChartComponent.prototype.ngOnInit = function () {
        this.data = _data__WEBPACK_IMPORTED_MODULE_2__["data"];
    };
    OrgChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-org-chart',
            template: __webpack_require__(/*! ./org-chart.component.html */ "./src/app/FEATURES/user-module/org-chart/org-chart.component.html"),
            styles: [__webpack_require__(/*! ./org-chart.component.css */ "./src/app/FEATURES/user-module/org-chart/org-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], OrgChartComponent);
    return OrgChartComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user-add/user-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-add/user-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    display: block;\n}\n\n.add-page {\n    max-width: 350px;\n    /* margin: 50px auto 0 auto; */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1hZGQvdXNlci1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYWRkLXBhZ2Uge1xuICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgLyogbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvOyAqL1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-add/user-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-add/user-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-2 text text-primary text-center \"> 1.2 Add Users Component (Presentational)</div>\n<mat-card class=\"add-page m-4\">\n\n    <mat-card-title>Add New User</mat-card-title>\n\n  \n      <mat-card-content>\n          <div class=\"d-flex flex-column m-4\">\n          <mat-form-field>\n            <input matInput type=\"text\" placeholder=\"initial\" name=\"initial\" ngModel #initial>\n          </mat-form-field>\n\n          <mat-form-field>\n              <input matInput type=\"text\" placeholder=\"name\" name=\"name\" ngModel #name>\n            </mat-form-field>\n          \n          <mat-form-field>\n            <mat-select placeholder=\"Select location\" placeholder=\"loc\" name=\"role\" ngModel #loc>\n                <mat-option value=\"IRVINE\">IRVINE</mat-option>\n                <mat-option value=\"LA\">LA</mat-option>\n              </mat-select>\n          </mat-form-field>\n\n          <mat-form-field>\n              \n              <mat-select placeholder=\"Select Role\" placeholder=\"role\" name=\"role\" ngModel #role>\n                  <mat-option value=\"IRVINE\">DEVELOPER</mat-option>\n                  <mat-option value=\"LA\">BSA</mat-option>\n                </mat-select>\n          </mat-form-field>\n          </div>\n      </mat-card-content>\n    \n      <mat-card-actions class=\"fund-actions\">\n          <button mat-raised-button color=\"primary\" type=\"submit\" \n          (click)= 'addFund(name.value, role.value, initial.value, loc.value)'>Add</button>   \n      </mat-card-actions>\n   \n\n    </mat-card>"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-add/user-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-add/user-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/FEATURES/user-module/user.service.ts");




var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(userSrv) {
        this.userSrv = userSrv;
        //@HostBinding('@routingAminTriggerEnterLeft')  routingAminTriggerEnterLeft = false;
        //@HostBinding('@routingAminTriggerFadeOut')  routingAminTriggerFadeOut = true;
        this.routingAminTriggerGoUp = true;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        console.log('UserAddComponent - init');
    };
    UserAddComponent.prototype.addFund = function (name, role, initial, loc) {
        this.userSrv.addUser(name, role, initial, loc)
            .subscribe(function (data) { alert('User added successfully '); }, function (err) { alert(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routingAminTriggerGoUp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserAddComponent.prototype, "routingAminTriggerGoUp", void 0);
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/FEATURES/user-module/user-add/user-add.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["routingAminTriggerEnterLeft"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["routingAminTriggerFadeOut"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["routingAminTriggerGoUp"]],
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/FEATURES/user-module/user-add/user-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user-detail/user-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-detail/user-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    position : fixed;\n    width: 100%;\n    /* margin-right: 50px;\n    display: block; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1g7cUJBQ2lCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIHBvc2l0aW9uIDogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrOyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-detail/user-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-detail/user-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-2 text text-primary text-center \"> 1.1 Users details Component (Presentational)</div>\n<mat-divider></mat-divider>\n\n<mat-card class=\"add-fund-card m-4\">\n\n  <mat-card-title>User Details</mat-card-title>\n  <mat-divider></mat-divider>\n\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col\">\n        index : <span class=\"badge badge-info\" [@compBumpNoState]> {{ index}}</span>\n      </div>\n    </div>\n  </mat-card-content>\n\n  <mat-card-title>Actvity histories</mat-card-title>\n  <mat-divider></mat-divider>\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col\">\n          last login : \n          <span class=\"ml-2 badge badge-success\">online</span>\n      </div>\n    </div>\n  </mat-card-content>\n\n  <mat-card-title>Edit/delete user Details</mat-card-title>\n  <mat-divider></mat-divider>\n  <mat-card-content>\n    <div class=\"row\">\n      <div class=\"col\">\n          <button mat-mini-fab color=\"warn\">delete</button>\n      </div>\n    </div>\n    \n  </mat-card-content>\n\n\n\n\n\n\n</mat-card>"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-detail/user-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-detail/user-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.index = 0;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) { _this.index = params['index']; });
    };
    UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/FEATURES/user-module/user-detail/user-detail.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_3__["compBumpNoState"]],
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/FEATURES/user-module/user-detail/user-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    display: block;\n    border: 1px solid grey;\n    margin: 20px 5%;\n    box-shadow : 5px 5px 5px gray;\n    background: rgb(239, 245, 252);\n}\n\n:host(:hover){\n\n    border: 2px solid rgb(255, 82, 2);\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1saXN0L3VzZXItbGlzdC1pdGVtL3VzZXItbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGlDQUFpQzs7QUFFckMiLCJmaWxlIjoic3JjL2FwcC9GRUFUVVJFUy91c2VyLW1vZHVsZS91c2VyLWxpc3QvdXNlci1saXN0LWl0ZW0vdXNlci1saXN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgbWFyZ2luOiAyMHB4IDUlO1xuICAgIGJveC1zaGFkb3cgOiA1cHggNXB4IDVweCBncmF5O1xuICAgIGJhY2tncm91bmQ6IHJnYigyMzksIDI0NSwgMjUyKTtcbn1cblxuOmhvc3QoOmhvdmVyKXtcblxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDgyLCAyKTtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{index}}\n<div class=\"row\">\n  <div class=\"col-7\">\n    <ul class=\"list-group\">\n      <span class=\"m-2 text text-muted text-center badge badge-info\"><strong>{{user.initial}} ({{user.name}})</strong></span>\n      <span class=\"m-2 text text-muted text-center badge badge-info\">{{user.role}}</span>\n      <span class=\"m-2\">Location : {{user.loc}}</span>\n      <ng-content select=\".badge-warning\"></ng-content>\n     \n    </ul>\n    \n  </div>\n  <div class=\"col-4 border border-grey m-2\">\n\n    <ng-content select=\"i\"></ng-content>\n    <mat-divider></mat-divider>\n    <i class=\"material-icons ml-auto mr-auto\" #icon2>gif</i>\n    <i class=\"material-icons ml-auto mr-auto\" #icon4>gif</i>\n\n  </div>\n\n</div>\n\n<ng-content select=\"app-progress-bar\"></ng-content> \n<mat-divider></mat-divider>\n<app-progress-bar></app-progress-bar>\n<app-progress-bar></app-progress-bar>\n\n<ng-container *ngTemplateOutlet=\"ngtu3\"></ng-container>\n\n\n\n<!-- \n\n  [ngClass]=\"selected ? 'active' : ''\n -->"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: UserListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListItemComponent", function() { return UserListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserListItemComponent = /** @class */ (function () {
    function UserListItemComponent() {
        //console.log('constructor icon1 ER : ',this.icon1); // undefined
        //console.log('constructor icon2 ER : ',this.icon2); // undefined
    }
    UserListItemComponent.prototype.ngOnInit = function () {
        console.log('ng template U3 : ', this.ngtu3);
        //console.log(' ngOnInit icon1 ER : ',this.icon1); // ok ?
        //console.log(' ngOnInit icon2 ER : ',this.icon2); // ok ?
    };
    UserListItemComponent.prototype.ngAfterViewInit = function () {
        //console.log(' ngAfterViewInit icon2 ER : ',this.icon2); //ok 
        console.log(' ngAfterViewInit all_icons ER : ', this.all_icons);
    };
    //CP
    UserListItemComponent.prototype.ngAfterContentInit = function () {
        //console.log(' ngAfterContentInit icon1 ER : ',this.icon1); //ok 
        console.log(' ngAfterContentInit all_icons_CP ER : ', this.all_icons_CP);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserListItemComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UserListItemComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('ngtemplateU3'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserListItemComponent.prototype, "ngtu3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('icon2', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserListItemComponent.prototype, "icon2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('ProgressBarComponent', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UserListItemComponent.prototype, "all_icons", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])('icon1', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserListItemComponent.prototype, "icon1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])('app-progress-bar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], UserListItemComponent.prototype, "all_icons_CP", void 0);
    UserListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list-item',
            template: __webpack_require__(/*! ./user-list-item.component.html */ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.html"),
            styles: [__webpack_require__(/*! ./user-list-item.component.css */ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserListItemComponent);
    return UserListItemComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list-item/uses.data.ts":
/*!****************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list-item/uses.data.ts ***!
  \****************************************************************************/
/*! exports provided: usersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersData", function() { return usersData; });
var usersData = [
    {
        "_id": "5ca9a063b778500d22bed86f",
        "name": "Lekhraj",
        "initial": "INYLBD",
        "role": "DEVELOPER",
        "loc": "IRVINE",
        "create_dt": 1554620515874
    },
    {
        "_id": "5ca9a075b778500d22bed870",
        "name": "Reena",
        "initial": "INYRCJ",
        "role": "DEVELOPER",
        "loc": "IRVINE",
        "create_dt": 1554620533521
    },
    {
        "_id": "5ca9a084b778500d22bed871",
        "name": "Randy",
        "initial": "RNDL",
        "role": "DEVELOPER",
        "loc": "IRVINE",
        "create_dt": 1554620548477
    },
    {
        "_id": "5ca9a091b778500d22bed872",
        "name": "Som",
        "initial": "SOV",
        "role": "DEVELOPER",
        "loc": "IRVINE",
        "create_dt": 1554620561327
    },
    {
        "_id": "5ca9a46af2b0120d7de3c873",
        "name": "Paul",
        "initial": "PAUC",
        "role": "BSA",
        "loc": "IRVINE",
        "create_dt": 1554621546465
    },
    {
        "_id": "5ca9a516869dd50d935c2536",
        "name": "Anna",
        "initial": "AAXL",
        "role": "BSA",
        "loc": "IRVINE",
        "create_dt": 1554621718870
    },
    {
        "_id": "5ca9b97c536b341090e7bc66",
        "name": "Anna",
        "initial": "AAXL",
        "role": "BSA",
        "loc": "IRVINE",
        "create_dt": 1554626940866
    }
];


/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\n    display: block;\n    margin: 10px 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvdXNlci1tb2R1bGUvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9GRUFUVVJFUy91c2VyLW1vZHVsZS91c2VyLWxpc3QvdXNlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDEwcHggMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <button mat-raised-button color=\"primary\" (click)=\"addUser()\">Add new User</button>\n    <button mat-raised-button color=\"primary\" (click)=\"refresh()\" class=\"ml-4\">Refresh</button>\n    <button mat-raised-button color=\"primary\" (click)=\"flag = !flag \" class=\"ml-4\">ngTemplate Usage1</button>\n  </div>\n  \n</div>\n\n\n<!-- ng-template : usages -->\n<div>\n\n    <div *ngIf=\"flag; else elseSection1\"></div>\n\n    <!-- 1. else part -->\n    <ng-template #elseSection1 let-var11=\"var1\">\n        <app-progress-bar></app-progress-bar>\n    </ng-template>\n\n    <!-- 2. -->\n    <ng-template #template2 let-var11=\"var1\">\n        {{var11}}\n    </ng-template>\n\n    <!-- <div *ngTemplateOutlet=\"template2; context: {var1 : 'ngTemplate usage 2 - passing param frm context'}\" class=\"border border-primary m-1\"></div> -->\n    <ng-container *ngTemplateOutlet=\"template2; context: {var1 : 'ngTemplate usage 2 - passing param frm context'}\" class=\"border border-primary m-1\"></ng-container>\n    <br>note : ng-container is better place for structural directive.\n\n    <!-- 3. getting projection like behaviour -->\n    <ng-template #template3>\n        <p>ng-template usage 3 - pass to child comp via @Input</p>\n    </ng-template>\n  </div>\n\n\n<div class=\"row\">\n  <div class=\"col\">\n    <a>\n      <app-user-list-item [index]=\"i\" [user]=\"user\" *ngFor=\"let user of users; index as i\" (click)=\"loadDetail(i)\"\n        [@compBump]=\"selectedItemIndex === i ? 'bump' : 'default'\"\n        [ngtemplateU3]=\"template3\">\n\n        <!-- content projection -->\n        <div class=\"badge badge-success\"> content projection </div>\n        <div class=\"badge badge-warning\"> content projection </div>\n        <i class=\"material-icons ml-auto mr-auto\" #icon1>account_box</i>\n        <i class=\"material-icons ml-auto mr-auto\" #icon3>account_circle</i>\n\n        <app-progress-bar [message]=\"'CP parent'\"  bgColor=\"#fff2b2\"></app-progress-bar>\n        <app-progress-bar [message]=\"'CP parent'\" class=\"progress-comp\" bgColor=\"#fff2b2\" color=\"blue\" width=\"3px\"></app-progress-bar>\n      </app-user-list-item>\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user-list/user-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user-list/user-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/FEATURES/user-module/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(router, userSrv) {
        this.router = router;
        this.userSrv = userSrv;
    }
    UserListComponent.prototype.ngOnInit = function () { };
    UserListComponent.prototype.loadDetail = function (index) {
        this.selectedItemIndex = index;
        console.log("loading details");
        this.router.navigate(['user-module/get-detail/', index], {}); //absolute path, will fix it
    };
    UserListComponent.prototype.addUser = function () {
        console.log("adding user");
        this.router.navigate(['user-module/add-user'], {});
    };
    UserListComponent.prototype.refresh = function () {
        this.userSrv.getAllUser().subscribe(rxjs__WEBPACK_IMPORTED_MODULE_5__["noop"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], UserListComponent.prototype, "users", void 0);
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/FEATURES/user-module/user-list/user-list.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["compBump"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["compBumpNoState"]],
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/FEATURES/user-module/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user.Reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.Reducer.ts ***!
  \******************************************************/
/*! exports provided: initialState, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/FEATURES/user-module/user.actions.ts");
//STEP -2 Write Reducer function whicg update states based on action

var initialState = { userCount: 0, users: undefined };
function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].LoadAllUsers: return { userCount: action.payload.users.length, users: action.payload.users };
        case _user_actions__WEBPACK_IMPORTED_MODULE_0__["UserActionTypes"].DeleteUser: return { userCount: action.payload.users.length, users: action.payload.users };
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/FEATURES/user-module/user.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.actions.ts ***!
  \******************************************************/
/*! exports provided: UserActionTypes, LoadAllUserAction, DeleteUserUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadAllUserAction", function() { return LoadAllUserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserUsers", function() { return DeleteUserUsers; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["LoadAllUsers"] = "[LoadAll] User Action";
    UserActionTypes["DeleteUser"] = "[Delete] User Action";
})(UserActionTypes || (UserActionTypes = {}));
var LoadAllUserAction = /** @class */ (function () {
    function LoadAllUserAction(users) {
        this.users = users;
        this.type = UserActionTypes.LoadAllUsers;
        this.payload = users;
    }
    return LoadAllUserAction;
}());

var DeleteUserUsers = /** @class */ (function () {
    function DeleteUserUsers() {
        this.type = UserActionTypes.DeleteUser;
    }
    return DeleteUserUsers;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user.module.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.module.routing.ts ***!
  \*************************************************************/
/*! exports provided: UserModuleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModuleRouting", function() { return UserModuleRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/FEATURES/user-module/user-add/user-add.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/FEATURES/user-module/user/user.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/FEATURES/user-module/user-detail/user-detail.component.ts");
/* harmony import */ var _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./org-chart/org-chart.component */ "./src/app/FEATURES/user-module/org-chart/org-chart.component.ts");








var routes = [
    {
        path: '', component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], children: [
            { path: '', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"] },
            { path: 'get-detail/:index', component: _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_6__["UserDetailComponent"] },
            { path: 'add-user', component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_4__["UserAddComponent"] },
            { path: 'org-chart', component: _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_7__["OrgChartComponent"] },
        ]
    }
];
var UserModuleRouting = /** @class */ (function () {
    function UserModuleRouting() {
    }
    UserModuleRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], UserModuleRouting);
    return UserModuleRouting;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.module.ts ***!
  \*****************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/FEATURES/user-module/user/user.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/FEATURES/user-module/user-list/user-list.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-add/user-add.component */ "./src/app/FEATURES/user-module/user-add/user-add.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/FEATURES/user-module/user.service.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/FEATURES/user-module/user-detail/user-detail.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_module_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.module.routing */ "./src/app/FEATURES/user-module/user.module.routing.ts");
/* harmony import */ var _user_list_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-list/user-list-item/user-list-item.component */ "./src/app/FEATURES/user-module/user-list/user-list-item/user-list-item.component.ts");
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user.resolver */ "./src/app/FEATURES/user-module/user.resolver.ts");
/* harmony import */ var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _user_Reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.Reducer */ "./src/app/FEATURES/user-module/user.Reducer.ts");
/* harmony import */ var _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./org-chart/org-chart.component */ "./src/app/FEATURES/user-module/org-chart/org-chart.component.ts");



















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_5__["UserAddComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailComponent"], _user_list_user_list_item_user_list_item_component__WEBPACK_IMPORTED_MODULE_13__["UserListItemComponent"], _org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_18__["OrgChartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _user_module_routing__WEBPACK_IMPORTED_MODULE_12__["UserModuleRouting"],
                src_app_common_common_module__WEBPACK_IMPORTED_MODULE_15__["TactCommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('userState', _user_Reducer__WEBPACK_IMPORTED_MODULE_17__["userReducer"]),
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _user_resolver__WEBPACK_IMPORTED_MODULE_14__["UserResolver"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user.resolver.ts":
/*!*******************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.resolver.ts ***!
  \*******************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserResolver = /** @class */ (function () {
    function UserResolver() {
    }
    UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/FEATURES/user-module/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_list_user_list_item_uses_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-list/user-list-item/uses.data */ "./src/app/FEATURES/user-module/user-list/user-list-item/uses.data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/SERVICE/auth-service.service */ "./src/app/SERVICE/auth-service.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.actions */ "./src/app/FEATURES/user-module/user.actions.ts");








var UserService = /** @class */ (function () {
    function UserService(http, authSrv, store) {
        this.http = http;
        this.authSrv = authSrv;
        this.store = store;
        this.host = 'https://tact-nodejs.herokuapp.com';
    }
    UserService.prototype.getAllHardcodedUser = function () {
        return _user_list_user_list_item_uses_data__WEBPACK_IMPORTED_MODULE_2__["usersData"];
    };
    UserService.prototype.getAllUser = function () {
        var _this = this;
        return this.http.get(this.host + "/tact2/get-all-user", {
            observe: 'response',
            responseType: 'json',
            //reportProgress :  true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { console.log("REST CALL made to get user Data"); }), 
        //step -4 dispatch Action
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { _this.store.dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_7__["LoadAllUserAction"]({ users: data.body })); }));
    };
    UserService.prototype.addUser = function (name, role, initial, loc) {
        return this.http.post(this.host + "/tact2/add-user", { name: name, role: role, initial: initial, loc: loc } //User Model
        , {
            observe: 'response',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        });
    };
    //Get Token
    UserService.prototype.getToken = function () {
        var token = '';
        if (this.authSrv.authResp) {
            token = this.authSrv.authResp.jwt;
        }
        return token;
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/FEATURES/user-module/user/user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user/user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0ZFQVRVUkVTL3VzZXItbW9kdWxlL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user/user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user/user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"m-2 text text-primary text-center \" style=\"overflow: hidden\"\n> Users Parent Component (smart)</div>\n\n\n<mat-divider></mat-divider>\n\n<div class=\"row\">\n  <div class=\"col-4\">\n      <app-progress-bar *ngIf=\"!users\" style=\"margin : 50% 50%\"></app-progress-bar>\n      <!-- <app-user-list [users]=\"usersHC.slice(0,3)\"></app-user-list> -->\n\n      <app-user-list [users]=\"users\"></app-user-list>\n  </div>\n\n  <div class=\"col-8\">\n    <router-outlet class=\"ml-auto mr-auto\"></router-outlet>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/FEATURES/user-module/user/user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/FEATURES/user-module/user/user.component.ts ***!
  \*************************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/FEATURES/user-module/user.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(userSrv, store) {
        this.userSrv = userSrv;
        this.store = store;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersHC = this.userSrv.getAllHardcodedUser();
        this.users$ = this.userSrv.getAllUser(); //http get observble
        //Subcribe whole state
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (state) { console.log('complete State : TactState ==> ', state); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (state) { return state.userState.users; }))
            .subscribe(function (users) {
            console.log('only UserState ==> ', users);
            //If data not present in state then only make REST
            if (users == undefined) {
                _this.users$.subscribe(function (data) { _this.users = data.body; console.log('got from REST'); });
            }
            else {
                console.log('got from Store');
                _this.users = users;
            }
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/FEATURES/user-module/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/FEATURES/user-module/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=FEATURES-user-module-user-module.js.map