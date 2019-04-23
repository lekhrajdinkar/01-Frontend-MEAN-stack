(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./FEATURES/user-module/user.module": [
		"./src/app/FEATURES/user-module/user.module.ts",
		"FEATURES-user-module-user-module"
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

/***/ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.css":
/*!************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fof-table/fof-table.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fund-card{\n    border: none;\n}\n\n.is-odd{\n    background-color: rgb(212, 243, 243);\n}\n\n.is-first{\n    border: 2px solid blueviolet\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZm9mLXRhYmxlL2ZvZi10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9GRUFUVVJFUy9mdW5kLW1vZHVsZS9mb2YtdGFibGUvZm9mLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVuZC1jYXJke1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmlzLW9kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEyLCAyNDMsIDI0Myk7XG59XG5cbi5pcy1maXJzdHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVldmlvbGV0XG59Il19 */"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fof-table/fof-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n\n    <p-panel class=\"m-4\">\n      <p-header>\n          Fund of Funds\n      </p-header>\n\n\n      <p-table #dt [columns]=\"cols\" [value]=\"fofs\" [paginator]=\"true\" [rows]=\"10\"\n      [resizableColumns]=\"true\"  selectionMode=\"single\">\n\n      <ng-template pTemplate=\"caption\">\n        <div style=\"text-align: right\">        \n          <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" \n          (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        </div>\n      </ng-template>\n\n        <ng-template pTemplate=\"header\" let-columns >\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                    <!-- <div style=\"width: 100%;\">\n                            <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\n                    </div> -->\n                </th>\n            </tr>\n\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n              <input *ngSwitchCase=\"'abbr'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n              \n              <!-- <div *ngSwitchCase=\"'year'\">\n                  Value < {{yearFilter}}\n                  <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"></i>\n                  <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\n              </div> -->\n              \n              <p-dropdown *ngSwitchCase=\"'num'\" [options]=\"fundNumbers\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n              \n              <p-multiSelect *ngSwitchCase=\"'created_by'\" [options]=\"created_bys\"  (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect> \n          </th>\n\n        </ng-template>\n        \n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n\n      <p-footer>\n          \n      </p-footer>\n  </p-panel>\n \n\n  </div>\n</div>\n\n\n\n\n<mat-divider></mat-divider>\n\n<div class=\"d-flex flex-column flex-wrap \">\n    <p-card *ngFor=\"let fof of fofs | slice:0:2; even as isEven; first as isFirst\" class=\"m-4 w-25 ml-auto mr-auto\" \n    [ngClass]=\"getCardClass(isEven, isFirst)\">\n            <p-header class=\"text text-center\"> {{fof.abbr}}  {{fof.num}}</p-header>\n            <div style=\"width: 100%;\">\n                    <p-chart type=\"doughnut\" [data]=\"data\"></p-chart>\n            </div>\n            <p-footer></p-footer>\n    </p-card>\n</div>\n"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fof-table/fof-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: FofTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FofTableComponent", function() { return FofTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fund_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fund.service */ "./src/app/FEATURES/fund-module/fund.service.ts");



var FofTableComponent = /** @class */ (function () {
    function FofTableComponent(fundSrv) {
        this.fundSrv = fundSrv;
        this.data = {
            labels: ['Growth', 'Equity', 'Bond'],
            datasets: [{
                    data: [20, 70, 10],
                    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                    hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }]
        };
    }
    FofTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fundSrv.getAllFunds(1, 100)
            .subscribe(function (data) {
            _this.fofs = data.body;
            console.log(_this.fofs);
            _this.fundNumbers = _this.fofs.map(function (fof) { return { label: fof.num, value: fof.num }; }); //console.log(this.fundNumbers);
            _this.created_bys = _this.fofs.map(function (fof) { return { label: fof.created_by, value: fof.created_by }; }); //console.log(this.created_bys);
            //this.getTreeNode();
        });
        this.cols = [
            { field: '_id', header: 'id' },
            { field: 'abbr', header: 'Abbreviation' },
            { field: 'num', header: 'Fund Number' },
            { field: 'created_by', header: 'created by' },
            { field: 'created_dt', header: 'created on' }
        ];
    };
    FofTableComponent.prototype.getCardClass = function (isOdd, isFirst) {
        console.log('called', isFirst, isOdd);
        return {
            'is-odd': isOdd,
            'fund-card': true,
            'is-first': isFirst
        };
    };
    FofTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fof-table',
            template: __webpack_require__(/*! ./fof-table.component.html */ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.html"),
            styles: [__webpack_require__(/*! ./fof-table.component.css */ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fund_service__WEBPACK_IMPORTED_MODULE_2__["FundService"]])
    ], FofTableComponent);
    return FofTableComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-add/fund-add.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-fund-card{\n    max-width: 500px;\n    margin: 50px auto 0 auto;\n  }\n  \n  .fund-form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  /* Otherwise animation wount wrok - route anim */\n  \n  :host{\n    display: block\n  }\n\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC1hZGQvZnVuZC1hZGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBLGdEQUFnRDs7RUFDaEQ7SUFDRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC1hZGQvZnVuZC1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtZnVuZC1jYXJke1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xuICB9XG4gIFxuICAuZnVuZC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAvKiBPdGhlcndpc2UgYW5pbWF0aW9uIHdvdW50IHdyb2sgLSByb3V0ZSBhbmltICovXG4gIDpob3N0e1xuICAgIGRpc3BsYXk6IGJsb2NrXG4gIH1cblxuICJdfQ== */"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-add/fund-add.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"add-fund-card\">\n\n<mat-card-title>Add New Fund</mat-card-title>\n<div class=\"d-flex justify-content-around\">\n  <mat-card-content>\n    \n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"fund abbreviation\" name=\"abbr\" ngModel #abbr>\n      </mat-form-field>\n      \n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"fund number\" name=\"num\" ngModel #num>\n      </mat-form-field>\n  \n  </mat-card-content>\n\n  <mat-card-actions class=\"fund-actions\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" \n      (click)= 'addFund(abbr.value, num.value)'>Add</button>   \n  </mat-card-actions>\n</div>\n</mat-card>"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-add/fund-add.component.ts ***!
  \*********************************************************************/
/*! exports provided: FundAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundAddComponent", function() { return FundAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fund_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fund.service */ "./src/app/FEATURES/fund-module/fund.service.ts");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");





var FundAddComponent = /** @class */ (function () {
    function FundAddComponent(route, srv) {
        this.route = route;
        this.srv = srv;
        this.routingAminTriggerFadeOut = true;
    }
    FundAddComponent.prototype.ngOnInit = function () { };
    FundAddComponent.prototype.addFund = function (abbr, num) {
        this.srv.addFund({ abbr: abbr, num: num })
            .subscribe(function (data) { console.log(data); alert('Fund Added Successfully..'); }, function (err) { console.log(err); alert("Error Occured. Check console logs"); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routingAminTriggerFadeOut'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FundAddComponent.prototype, "routingAminTriggerFadeOut", void 0);
    FundAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fund-add',
            template: __webpack_require__(/*! ./fund-add.component.html */ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__["routingAminTriggerFadeOut"]],
            styles: [__webpack_require__(/*! ./fund-add.component.css */ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _fund_service__WEBPACK_IMPORTED_MODULE_3__["FundService"]])
    ], FundAddComponent);
    return FundAddComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fund {\n    text-align: center;\n    max-width: 800;\n    margin: 0 auto;\n}\n\n\n.progress-comp {\n    margin: auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC1kZXRhaWwvZnVuZC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9GRUFUVVJFUy9mdW5kLW1vZHVsZS9mdW5kLWRldGFpbC9mdW5kLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDgwMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuXG4ucHJvZ3Jlc3MtY29tcCB7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{fof_num}}\n<span *ngIf='noUFflag' class=\"badge badge-pill badge-light\">NO UnderLying Found</span>\n\n<div class=\"fund\">\n\n    <mat-tab-group>\n        <mat-tab [label]=\"[uf.num]\" *ngFor=\"let uf of underlyingFunds\"> \n            <div>\n                <table class=\"table table-dark m-4\">\n                    <tr *ngFor=\"let e of (uf | keyvalue) ; even as isEven\">\n                        <td class=\"text text-left\">{{e.key| uppercase}}</td> <td class=\"text text-left\">{{e.value}}</td>\n                    </tr>\n                </table>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n    \n    \n    <mat-divider></mat-divider>\n   \n        <button mat-button class=\"mat-raised-button mat-primary mt-4\" [routerLink]=\"['/fund-module/get-all']\">back</button>\n   \n    \n</div>\n\n<!-- <mat-progress-bar mode=\"indeterminate\" *ngIf='!underlyingFunds' ></mat-progress-bar> -->\n<!-- <mat-spinner *ngIf='!underlyingFunds' class=\"fund-card\"></mat-spinner> -->\n\n<app-progress-bar *ngIf='!underlyingFunds' class=\"progress-comp\"></app-progress-bar>\n\n\n    "

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: FundDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundDetailComponent", function() { return FundDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fund_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fund.service */ "./src/app/FEATURES/fund-module/fund.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FundDetailComponent = /** @class */ (function () {
    function FundDetailComponent(fundSrv, route) {
        this.fundSrv = fundSrv;
        this.route = route;
        this.noUFflag = false;
    }
    FundDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fof_num = this.route.snapshot.queryParams['fof_num'];
        //1. Get Full response
        this.fundSrv.getUunderLyingFunds(this.route.snapshot.params['_id'])
            .subscribe(function (data) {
            setTimeout(function () {
                _this.underlyingFunds = data;
                if (data.length == 0) {
                    _this.noUFflag = true;
                }
                console.log('HTTP Response body: ', data);
            }, 1000);
        }, function (err) { console.log(err); });
    };
    FundDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fund-detail',
            template: __webpack_require__(/*! ./fund-detail.component.html */ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.html"),
            styles: [__webpack_require__(/*! ./fund-detail.component.css */ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fund_service__WEBPACK_IMPORTED_MODULE_2__["FundService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FundDetailComponent);
    return FundDetailComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-list/fund-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fund-card {\n    margin: 20px auto;\n    max-width: 390px;\n}\n\n.fund-actions {\n    text-align: center; \n}\n\n.page{\n    max-width: 500px;\n    margin: 50px auto 0 auto;\n  }\n\n#temp_id1{\n    box-shadow: 5px 5px 10px rgb(231, 228, 210)\n  }\n\n.ng-class-1{\n    border: 5px solid blue;\n    display: inline-block;\n  }\n\n.css-anim-1{\n    -webkit-animation: moved 1s;\n            animation: moved 1s;\n  }\n\n@-webkit-keyframes moved {\n    0%{\n          opacity: 0;\n          -webkit-transform: translateY(0) scale(1);\n                  transform: translateY(0) scale(1)\n    }\n    50%{\n          opacity: 0.5 ;\n          -webkit-transform: translateY(20px) scale(1);\n                  transform: translateY(20px) scale(1)\n    }\n    75%{\n          opacity: 1;\n          -webkit-transform:  translateY(0) scale(1.2);\n                  transform:  translateY(0) scale(1.2) \n    }\n    100%{\n      opacity: 1;\n      -webkit-transform:  scale(1);\n              transform:  scale(1)\n    }\n  }\n\n@keyframes moved {\n    0%{\n          opacity: 0;\n          -webkit-transform: translateY(0) scale(1);\n                  transform: translateY(0) scale(1)\n    }\n    50%{\n          opacity: 0.5 ;\n          -webkit-transform: translateY(20px) scale(1);\n                  transform: translateY(20px) scale(1)\n    }\n    75%{\n          opacity: 1;\n          -webkit-transform:  translateY(0) scale(1.2);\n                  transform:  translateY(0) scale(1.2) \n    }\n    100%{\n      opacity: 1;\n      -webkit-transform:  scale(1);\n              transform:  scale(1)\n    }\n  }\n\n#currPageInp{\n    max-width: 50px;\n  }\n\n \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC1saXN0L2Z1bmQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7RUFDMUI7O0FBRUE7SUFDRTtFQUNGOztBQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDJCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRTtVQUNNLFVBQVU7VUFDVix5Q0FBZ0M7a0JBQWhDO0lBQ047SUFDQTtVQUNNLGFBQWE7VUFDYiw0Q0FBbUM7a0JBQW5DO0lBQ047SUFDQTtVQUNNLFVBQVU7VUFDViw0Q0FBbUM7a0JBQW5DO0lBQ047SUFDQTtNQUNFLFVBQVU7TUFDViw0QkFBbUI7Y0FBbkI7SUFDRjtFQUNGOztBQWpCQTtJQUNFO1VBQ00sVUFBVTtVQUNWLHlDQUFnQztrQkFBaEM7SUFDTjtJQUNBO1VBQ00sYUFBYTtVQUNiLDRDQUFtQztrQkFBbkM7SUFDTjtJQUNBO1VBQ00sVUFBVTtVQUNWLDRDQUFtQztrQkFBbkM7SUFDTjtJQUNBO01BQ0UsVUFBVTtNQUNWLDRCQUFtQjtjQUFuQjtJQUNGO0VBQ0Y7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC1saXN0L2Z1bmQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmQtY2FyZCB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gICAgbWF4LXdpZHRoOiAzOTBweDtcbn1cblxuLmZ1bmQtYWN0aW9ucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbn1cblxuLnBhZ2V7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XG4gIH1cblxuICAjdGVtcF9pZDF7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigyMzEsIDIyOCwgMjEwKVxuICB9XG5cbiAgLm5nLWNsYXNzLTF7XG4gICAgYm9yZGVyOiA1cHggc29saWQgYmx1ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuY3NzLWFuaW0tMXtcbiAgICBhbmltYXRpb246IG1vdmVkIDFzO1xuICB9XG5cbiAgQGtleWZyYW1lcyBtb3ZlZCB7XG4gICAgMCV7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSlcbiAgICB9XG4gICAgNTAle1xuICAgICAgICAgIG9wYWNpdHk6IDAuNSA7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpIHNjYWxlKDEpXG4gICAgfVxuICAgIDc1JXtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVkoMCkgc2NhbGUoMS4yKSBcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06ICBzY2FsZSgxKVxuICAgIH1cbiAgfVxuXG4gICNjdXJyUGFnZUlucHtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gIH1cblxuIFxuIl19 */"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-list/fund-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col col-12\">\n      <div (click)=\"divClicked = !divClicked\"\n      [@divTrigger]=\"divClicked ? 'clicked' : 'default'\"></div>\n\n      <!-- <div [@divTrigger]=\"clickInfo\" class=\"m-2\"></div> -->\n      <fund-add></fund-add>\n    <!-- <fund-add (click)=\"addFundCompClicked = !addFundCompClicked\" \n    [@clickTrigger]=\"addFundCompClicked ? 'default' : 'clicked'\"></fund-add> -->\n\n    \n  </div>\n\n\n\n  <mat-divider></mat-divider>\n\n  <div *ngIf='funds' class=\"col col-12 \">\n    <div class=\"d-flex flex-wrap justify-content-around\">\n      <mat-card *ngFor=\"let fund of funds; index as i\" class=\"fund-card mat-elevation-z10\">\n        <div id=\"temp_id1\"> \n          <fund [fund]=fund [index]=i \n          (click)=\"fund.isClicked = !fund.isClicked\"\n          (click)=\"onSimpleClick()\"\n          [ngStyle]= \"{'backgroundColor' : fund.isClicked ? 'rgb(222, 231, 210)' : 'white'}\" \n          [ngClass]=\"{'ng-class-1' : fund.isClicked}\"\n          [@compBump]=\"fund.isClicked ? 'bump' : 'default' \"\n          ></fund> \n        </div>\n      </mat-card>\n    </div>\n    <mat-divider></mat-divider>\n\n    <!-- paginator -->\n    <div class=\"d-flex justify-content-around m-4 bg-dark text-white\">\n\n      <input class=\"m-4 d-inline-block\" type=\"text\" placeholder=\"page Size\" value=\"6\" \n      [ngStyle]= \"{'width' : isClickedInput ? '30px' : '40px'}\"  \n      (click)=\"isClickedInput = !isClickedInput\" \n      (dblclick)=\"doubleClickFund(pageSize)\"\n      #pageSize>\n      \n\n      <div class=\"d-flex m-1 bg-light text text-dark\">\n\n          <!-- <input id=\"currPageInp\" class=\"m-4 d-inline-block\" type=\"number\" (input)=\"changePage($event)\" value=\"currentPage\"> -->\n          <span *ngFor=\"let i of pageArray\" class=\"m-4 d-inline-block\" [@highlightPageNum] = \"currentPage == i ? 'selected' : 'unselected' \">{{i}} </span>\n          \n         \n        </div>\n\n      <button mat-raised-button color=\"primary\" class=\"m-4\" (click)='previous(pageSize.value)' [disabled]=\"currentPage == 1 ? true: false \">Previous</button>\n      <button mat-raised-button color=\"primary\" class=\"m-4\" (click)='next(pageSize.value)' [disabled]=\"currentPage === totalPage ? true: false\" >Next</button>\n\n    </div>\n\n    \n  </div>\n\n  <!-- <mat-spinner *ngIf='!funds' class=\"fund-card\"></mat-spinner> -->\n  <mat-divider></mat-divider>\n  <app-progress-bar *ngIf='!funds' class=\"fund-card\"></app-progress-bar>\n\n  <!-- \n\n \n   -->"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund-list/fund-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: FundListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundListComponent", function() { return FundListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fund_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fund.service */ "./src/app/FEATURES/fund-module/fund.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");





var FundListComponent = /** @class */ (function () {
    //@Output() addFundCompClicked = false;
    function FundListComponent(route, srv, renderer) {
        this.route = route;
        this.srv = srv;
        this.renderer = renderer;
        this.currentPage = 1;
        this.pageSize = 6;
        this.totalPage = 5; //will fix it
        //=====Animation
        this.clickInfo = 'default';
        this.pageArray = Array(this.totalPage).fill(0).map(function (x, i) { return i + 1; });
    }
    FundListComponent.prototype.doubleClickFund = function (element) { this.renderer.setStyle(element, 'background-color', 'rgb(222, 231, 210)'); };
    FundListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('FundListComponent - init');
        //1. Get Full response
        this.srv.getAllFunds(1, this.pageSize)
            .subscribe(function (data) { setTimeout(function () { _this.funds = data.body; console.log('HTTP Response body: ', data.body); }, 1000); }, function (err) { console.log(err); });
        //this.srv.getAllFunds3_play();
        //this.srv.parallelRequests();
    };
    FundListComponent.prototype.previous = function (pageSize) {
        var _this = this;
        if (this.currentPage > 1) {
            this.currentPage = this.currentPage - 1;
        }
        if (pageSize) {
            this.pageSize = +pageSize;
        }
        this.srv.getAllFunds1(this.currentPage, this.pageSize).subscribe(function (data) { _this.funds = data; console.log('HTTP Response body: ', data); }, function (err) { console.log(err); });
    };
    FundListComponent.prototype.next = function (pageSize) {
        var _this = this;
        if (this.currentPage < this.totalPage) {
            this.currentPage = this.currentPage + 1;
        }
        if (pageSize) {
            this.pageSize = +pageSize;
        }
        this.srv.getAllFunds1(this.currentPage, this.pageSize).subscribe(function (data) { _this.funds = data; }, function (err) { console.log(err); });
    };
    FundListComponent.prototype.onSimpleClick = function () {
        var _this = this;
        this.clickInfo = 'clicked';
        setTimeout(function () { _this.clickInfo = 'default'; }, 2000);
    };
    FundListComponent.prototype.changePage = function (e) {
        this.currentPage = e.target.value;
        console.log('current page : ' + e.target.value);
    };
    FundListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fund-list',
            template: __webpack_require__(/*! ./fund-list.component.html */ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__["click_trigger"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__["div_trigger"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__["highlightPageNum"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_4__["compBump"]],
            styles: [__webpack_require__(/*! ./fund-list.component.css */ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _fund_service__WEBPACK_IMPORTED_MODULE_2__["FundService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], FundListComponent);
    return FundListComponent;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund.module.routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund.module.routing.ts ***!
  \*************************************************************/
/*! exports provided: FundModuleRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundModuleRouting", function() { return FundModuleRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fund-list/fund-list.component */ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.ts");
/* harmony import */ var _fund_add_fund_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fund-add/fund-add.component */ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.ts");
/* harmony import */ var _fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fund-detail/fund-detail.component */ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.ts");
/* harmony import */ var src_app_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-gaurd.guard */ "./src/app/auth-gaurd.guard.ts");
/* harmony import */ var _fof_table_fof_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fof-table/fof-table.component */ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.ts");









var routes = [
    { path: 'fund-module/get-all/:_id', component: _fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_6__["FundDetailComponent"] },
    { path: 'fund-module/get-all', component: _fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_4__["FundListComponent"] },
    { path: 'fund-module/add-fund', component: _fund_add_fund_add_component__WEBPACK_IMPORTED_MODULE_5__["FundAddComponent"], canActivate: [src_app_auth_gaurd_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGaurdGuard"]] },
    { path: 'fund-module/fof', component: _fof_table_fof_table_component__WEBPACK_IMPORTED_MODULE_8__["FofTableComponent"] }
];
var FundModuleRouting = /** @class */ (function () {
    function FundModuleRouting() {
    }
    FundModuleRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        })
    ], FundModuleRouting);
    return FundModuleRouting;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund.module.ts ***!
  \*****************************************************/
/*! exports provided: FundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundModule", function() { return FundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fund_fund_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fund/fund.component */ "./src/app/FEATURES/fund-module/fund/fund.component.ts");
/* harmony import */ var _fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fund-list/fund-list.component */ "./src/app/FEATURES/fund-module/fund-list/fund-list.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fund_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fund.service */ "./src/app/FEATURES/fund-module/fund.service.ts");
/* harmony import */ var _fund_add_fund_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fund-add/fund-add.component */ "./src/app/FEATURES/fund-module/fund-add/fund-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fund-detail/fund-detail.component */ "./src/app/FEATURES/fund-module/fund-detail/fund-detail.component.ts");
/* harmony import */ var _fund_module_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fund.module.routing */ "./src/app/FEATURES/fund-module/fund.module.routing.ts");
/* harmony import */ var src_app_common_common_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _fof_table_fof_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fof-table/fof-table.component */ "./src/app/FEATURES/fund-module/fof-table/fof-table.component.ts");
/* harmony import */ var src_app_ngprime_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/ngprime.module */ "./src/app/ngprime.module.ts");
















var FundModule = /** @class */ (function () {
    function FundModule() {
    }
    FundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_fund_fund_component__WEBPACK_IMPORTED_MODULE_3__["FundComponent"], _fund_list_fund_list_component__WEBPACK_IMPORTED_MODULE_4__["FundListComponent"], _fund_add_fund_add_component__WEBPACK_IMPORTED_MODULE_9__["FundAddComponent"], _fund_detail_fund_detail_component__WEBPACK_IMPORTED_MODULE_11__["FundDetailComponent"], _fof_table_fof_table_component__WEBPACK_IMPORTED_MODULE_14__["FofTableComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], src_app_ngprime_module__WEBPACK_IMPORTED_MODULE_15__["PrimeNGModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _fund_module_routing__WEBPACK_IMPORTED_MODULE_12__["FundModuleRouting"],
                src_app_common_common_module__WEBPACK_IMPORTED_MODULE_13__["TactCommonModule"]
            ],
            providers: [_fund_service__WEBPACK_IMPORTED_MODULE_8__["FundService"]]
        })
    ], FundModule);
    return FundModule;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund.service.ts":
/*!******************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund.service.ts ***!
  \******************************************************/
/*! exports provided: FundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundService", function() { return FundService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SERVICE/auth-service.service */ "./src/app/SERVICE/auth-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






//============================
// Play with HttpClient Here
//============================
var FundService = /** @class */ (function () {
    //host = 'http://localhost:5000' ;
    function FundService(http, authSrv) {
        this.http = http;
        this.authSrv = authSrv;
        this.host = 'https://tact-nodejs.herokuapp.com';
    }
    //1. Get full response
    FundService.prototype.getAllFunds = function (pageNumber, pageSize) {
        return this.http.get(this.host + "/tact2/get-all-funds?pageNumber=" + pageNumber + "&pageSize=" + pageSize, {
            observe: 'response',
            responseType: 'json',
            //reportProgress :  true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (r) { console.log(r); }));
    };
    //Get body as reponse
    FundService.prototype.getAllFunds1 = function (pageNumber, pageSize) {
        return this.http.get(this.host + "/tact2/get-all-funds?pageNumber=" + pageNumber + "&pageSize=" + pageSize, {
            observe: 'body',
            responseType: 'json',
            //reportProgress :  true,
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Authorization', 'Bearer ' + this.getToken()),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (r) { console.log(r); }));
    };
    FundService.prototype.getAllFunds3_play = function (pageNumber) {
        //Another way of creating Http
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('GET', this.host + "/tact2/get-latest-fund", { reportProgress: true });
        this.http.request(req).subscribe(function (r) { console.log('PLAY subscribe 2: ', r); }, function (err) { console.error(err); });
        this.http.get(this.host + "/tact2/get-all-funds?pageNumber=" + pageNumber, {
            observe: 'body',
            responseType: 'blob',
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('Authorization', 'Bearer ' + this.getToken()),
            reportProgress: true
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (r) { console.log('PLAY tap: ', r); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["shareReplay"])()
        //tap((r)=> {return r.body ;}),
        )
            .subscribe(function (r) { console.log('PLAY subscribe: ', r); }, function (err) { console.error(err); });
    };
    //parallel request
    // parallelRequests() {
    //   const parallel$ = Observable.forkJoin(
    //       this.http.get(`${this.host}/tact2/get-latest-fund`),
    //       this.http.get(`${this.host}/tact2/get-latest-fund`)
    //   );
    //   parallel$.subscribe(
    //       values => {
    //           console.log("all values", values)
    //       }
    //   );
    // }
    FundService.prototype.addFund = function (fund) {
        return this.http.post(this.host + "/tact2/add-fund", fund, {
            observe: 'response',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        });
    };
    //Get Token
    FundService.prototype.getToken = function () {
        var token = '';
        if (this.authSrv.authResp) {
            token = this.authSrv.authResp.jwt;
        }
        return token;
    };
    //Streamlined Error Handling - HttpClient
    FundService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    //Get Underlying Funds
    FundService.prototype.getUunderLyingFunds = function (_id) {
        return this.http.get(this.host + "/tact2/get-uf-by-fof/" + _id, {
            observe: 'body',
            responseType: 'json',
            //reportProgress :  true,
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.getToken()
            })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (r) { console.log(r); }));
    };
    FundService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], FundService);
    return FundService;
}());



/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund/fund.component.css":
/*!**************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund/fund.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fund {\n    text-align: center;\n    max-width: 390px;\n    margin: 0 auto;\n}\n\n:host{\n    display: block;\n    border: 1px solid black;\n    /* box-shadow: 10px 10px 10px grey; */\n}\n\n:host(.activate){\n    display: block;\n    border: 2px solid rgb(215, 233, 55);\n    box-shadow: 5px 5px 5px rgb(215, 233, 55);\n}\n\n:host-context(#temp_id1) /deep/ {\n    text-align: center;\n    box-shadow: 5px 5px 5px rgb(123, 214, 146);\n}\n\n.view-button{\n    width : 50%; background-color: rgb(203, 240, 70);\n    transition: all 1s;\n    -webkit-animation: moved 2s;\n            animation: moved 2s;\n    text-align: center\n  }\n\n.view-button:hover{\n    width : 70%; \n    background-color: rgb(151, 172, 79);\n  }\n\n@-webkit-keyframes moved {\n      0%{\n            opacity: 0;\n            -webkit-transform: translateX(0) scale(1);\n                    transform: translateX(0) scale(1)\n      }\n      50%{\n            opacity: 0.5 ;\n            -webkit-transform: translateX(20px) scale(1);\n                    transform: translateX(20px) scale(1)\n      }\n      75%{\n            opacity: 1;\n            -webkit-transform:  translateX(0) scale(1.1);\n                    transform:  translateX(0) scale(1.1)\n      }\n      100%{\n        opacity: 1;\n        -webkit-transform:  scale(1);\n                transform:  scale(1)\n  }\n  }\n\n@keyframes moved {\n      0%{\n            opacity: 0;\n            -webkit-transform: translateX(0) scale(1);\n                    transform: translateX(0) scale(1)\n      }\n      50%{\n            opacity: 0.5 ;\n            -webkit-transform: translateX(20px) scale(1);\n                    transform: translateX(20px) scale(1)\n      }\n      75%{\n            opacity: 1;\n            -webkit-transform:  translateX(0) scale(1.1);\n                    transform:  translateX(0) scale(1.1)\n      }\n      100%{\n        opacity: 1;\n        -webkit-transform:  scale(1);\n                transform:  scale(1)\n  }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRkVBVFVSRVMvZnVuZC1tb2R1bGUvZnVuZC9mdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7SUFDbkMseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFdBQVcsRUFBRSxtQ0FBbUM7SUFDaEQsa0JBQWtCO0lBQ2xCLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkI7RUFDRjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxtQ0FBbUM7RUFDckM7O0FBRUE7TUFDSTtZQUNNLFVBQVU7WUFDVix5Q0FBZ0M7b0JBQWhDO01BQ047TUFDQTtZQUNNLGFBQWE7WUFDYiw0Q0FBbUM7b0JBQW5DO01BQ047TUFDQTtZQUNNLFVBQVU7WUFDViw0Q0FBbUM7b0JBQW5DO01BQ047TUFDQTtRQUNFLFVBQVU7UUFDViw0QkFBbUI7Z0JBQW5CO0VBQ047RUFDQTs7QUFqQkE7TUFDSTtZQUNNLFVBQVU7WUFDVix5Q0FBZ0M7b0JBQWhDO01BQ047TUFDQTtZQUNNLGFBQWE7WUFDYiw0Q0FBbUM7b0JBQW5DO01BQ047TUFDQTtZQUNNLFVBQVU7WUFDViw0Q0FBbUM7b0JBQW5DO01BQ047TUFDQTtRQUNFLFVBQVU7UUFDViw0QkFBbUI7Z0JBQW5CO0VBQ047RUFDQSIsImZpbGUiOiJzcmMvYXBwL0ZFQVRVUkVTL2Z1bmQtbW9kdWxlL2Z1bmQvZnVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDM5MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG46aG9zdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAvKiBib3gtc2hhZG93OiAxMHB4IDEwcHggMTBweCBncmV5OyAqL1xufVxuXG46aG9zdCguYWN0aXZhdGUpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMTUsIDIzMywgNTUpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigyMTUsIDIzMywgNTUpO1xufVxuXG46aG9zdC1jb250ZXh0KCN0ZW1wX2lkMSkgL2RlZXAvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiKDEyMywgMjE0LCAxNDYpO1xufVxuXG4udmlldy1idXR0b257XG4gICAgd2lkdGggOiA1MCU7IGJhY2tncm91bmQtY29sb3I6IHJnYigyMDMsIDI0MCwgNzApO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICBhbmltYXRpb246IG1vdmVkIDJzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxuICB9XG5cbiAgLnZpZXctYnV0dG9uOmhvdmVye1xuICAgIHdpZHRoIDogNzAlOyBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAxNzIsIDc5KTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgbW92ZWQge1xuICAgICAgMCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHNjYWxlKDEpXG4gICAgICB9XG4gICAgICA1MCV7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUgO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpIHNjYWxlKDEpXG4gICAgICB9XG4gICAgICA3NSV7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiAgdHJhbnNsYXRlWCgwKSBzY2FsZSgxLjEpXG4gICAgICB9XG4gICAgICAxMDAle1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06ICBzY2FsZSgxKVxuICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund/fund.component.html":
/*!***************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund/fund.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fund\" (click)=\"onSimpleClick()\">\n\n<mat-card-header>\n    <mat-card-title>\n        <p class=\"badge badge-warning text-wrap\"> Fund Number : {{fund.num}}</p>\n        <div [@divTrigger]=\"clickInfo\" class=\"m-2\"></div>\n    </mat-card-title>\n</mat-card-header>\n\n<!-- <img mat-card-image [src]=\"course.iconUrl\"> -->\n\n<mat-card-content>\n        <p class=\"text-muted\"> Abbreviation: {{fund.abbr}}</p>\n        <p class=\"text-muted\"> created by: {{fund.created_by}}</p>\n        <p class=\"text-muted\"> created on : {{fund.create_dt}}</p>\n        \n        <p class=\"text-muted\"> _id : {{fund._id}}</p>\n</mat-card-content>\n\n<mat-divider></mat-divider>\n<mat-card-actions class=\"fund-actions\">\n    <button mat-button class=\"mat-raised-button mat-primary\" \n    class=\"view-button\"\n    [routerLink]=\"['/fund-module/get-all', fund._id]\" ><h6 class=\"mt-2\">VIEW</h6></button>\n</mat-card-actions> \n\n</div>\n\n<!-- [queryParam] = \"[{fof_num: fund.num}]\" -->"

/***/ }),

/***/ "./src/app/FEATURES/fund-module/fund/fund.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/FEATURES/fund-module/fund/fund.component.ts ***!
  \*************************************************************/
/*! exports provided: FundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundComponent", function() { return FundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");



var FundComponent = /** @class */ (function () {
    function FundComponent() {
        this.clickInfo = 'default';
    }
    FundComponent.prototype.ngOnInit = function () {
        this.index += 1;
    };
    FundComponent.prototype.ngAfterViewInit = function () {
        console.log('ngAfterViewInit : FundComponent');
    };
    FundComponent.prototype.onSimpleClick = function () {
        var _this = this;
        this.clickInfo = 'clicked';
        setTimeout(function () { _this.clickInfo = 'default'; }, 1000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fund'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FundComponent.prototype, "fund", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FundComponent.prototype, "index", void 0);
    FundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fund',
            template: __webpack_require__(/*! ./fund.component.html */ "./src/app/FEATURES/fund-module/fund/fund.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["click_trigger"], src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_2__["div_trigger"]],
            styles: [__webpack_require__(/*! ./fund.component.css */ "./src/app/FEATURES/fund-module/fund/fund.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FundComponent);
    return FundComponent;
}());



/***/ }),

/***/ "./src/app/MODEL/FundMaintainance.ts":
/*!*******************************************!*\
  !*** ./src/app/MODEL/FundMaintainance.ts ***!
  \*******************************************/
/*! exports provided: ELEMENT_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ELEMENT_DATA", function() { return ELEMENT_DATA; });
//Dummuy Data
var ELEMENT_DATA = [
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '15', acctNumber: '11000015', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '16', acctNumber: '11000016', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() },
    { fundNumber: '14', acctNumber: '11000014', abbr: 'ABCD', class: 'H', symbol: 'XYZ', dstFundCode: '12345', dstAcctNumber: '6789', category: 'FOF', submittedBy: 'LEKHRAJ', submittedOn: new Date(), approvedBy: 'DINKAR', approvedOn: new Date() }
];
// 'fundNumber', 'acctNumber',  'class', 'symbol', 'dstFundCode', 'dstAcctNumber' ,'category', 'submittedBy', 'submotteiOn', 'approvedBy', 'approvedOn' 


/***/ }),

/***/ "./src/app/SERVICE/auth-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/SERVICE/auth-service.service.ts ***!
  \*************************************************/
/*! exports provided: UNKNOWN_USER, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNKNOWN_USER", function() { return UNKNOWN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.actions */ "./src/app/auth/auth.actions.ts");








var UNKNOWN_USER = { username: 'unknown' };
var AuthService = /** @class */ (function () {
    //host = 'http://localhost:5000' ;
    function AuthService(router, http, store) {
        this.router = router;
        this.http = http;
        this.store = store;
        //own observable
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](UNKNOWN_USER); //its private ***
        this.user$ = this.subject.asObservable();
        this.host = 'https://tact-nodejs.herokuapp.com';
    }
    //Fake Login
    AuthService.prototype.authorize = function (initial, password) {
        var _this = this;
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        var url = this.host + "/tact2/login";
        this.http.post(url, { initial: initial, password: password }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
            //1.1. store Login info in service
            _this.authResp = data;
            _this.subject.next({ username: data.initial });
            //1.2. store Login info in Store ngRx
            _this.authResp = data;
            _this.store.dispatch(new _auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LoginAction"](data));
            //2. navigate to Home
            _this.router.navigate(["home"]);
        }))
            .subscribe(rxjs__WEBPACK_IMPORTED_MODULE_2__["noop"], function (err) {
            //this.store.dispatch(new LoginAction({jwt: null, initial:null, login_status:'failed'}));
            alert('login failed. Check error Logs');
        });
    };
    AuthService.prototype.logout = function () {
        this.authResp = null; //clean up jwt 
        this.subject.next(UNKNOWN_USER);
        this.store.dispatch(new _auth_auth_actions__WEBPACK_IMPORTED_MODULE_7__["LogoutAction"]());
        this.router.navigate(["login"]);
    };
    //Auth Gaurd
    AuthService.prototype.isToken = function () { if (this.authResp)
        return true;
    else
        return false; };
    AuthService.prototype.isAuthorized = function () {
        if (this.isToken()) {
            this.http.get(this.host + "/tact2/auth-status", {
                observe: 'response',
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                    'Authorization': 'Bearer ' + this.authResp.jwt
                })
            })
                .subscribe(function (data) { console.log(" auth gauad : AUTHORIZED "); return true; }, // return promise<boolean>
            function (err) { console.log(" auth gauad : NOT AUTHORIZED "); return false; });
        }
        else {
            console.error('JWT token is not valid or not been Set. please login first');
            return false; //return boolean}
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], AuthService);
    return AuthService;
}());



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
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_fund_maintenance_fund_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/fund-maintenance/fund-maintenance.component */ "./src/app/home/fund-maintenance/fund-maintenance.component.ts");
/* harmony import */ var _home_report_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/report/report.component */ "./src/app/home/report/report.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");








var routes = [
    { path: '', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    //old routes
    { path: 'home', component: _home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'fundmtn', component: _home_fund_maintenance_fund_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["FundMaintenanceComponent"] },
    { path: 'rpt', component: _home_report_report_component__WEBPACK_IMPORTED_MODULE_6__["ReportComponent"] },
    { path: 'user-module', loadChildren: './FEATURES/user-module/user.module#UserModule' },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] } //no match > login 
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
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

module.exports = "mat-sidenav {\n    width: 300px;\n}\n\nbutton{\n    outline-style: none;\n}\n\nmat-icon{\n    margin-right: 1rem\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuYnV0dG9ue1xuICAgIG91dGxpbmUtc3R5bGU6IG5vbmU7XG59XG5cbm1hdC1pY29ue1xuICAgIG1hcmdpbi1yaWdodDogMXJlbVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\n\n    <!-- SIDE NAV -->\n    <mat-sidenav #start>\n        <mat-nav-list (click)=\"start.close()\">\n\n            <a mat-list-item routerLink=\"/login\" *ngIf=\"!(isLoggedIn$ | async)\">\n                <mat-icon>face</mat-icon> <span>Login</span>\n            </a>\n\n            <a mat-list-item routerLink=\"/login\" *ngIf=\"isLoggedIn$ | async\" (click)=\"logout()\">\n                <mat-icon>power_settings_new</mat-icon> <span>Logout</span>\n            </a>\n\n            <!-- <a mat-list-item (click)=\"display = true\">\n                <mat-icon>info</mat-icon> <span>About</span>\n            </a> -->\n            <a mat-list-item (click)=\"about()\">\n                    <mat-icon>info</mat-icon> <span>About tact</span>\n            </a>\n\n            <mat-divider></mat-divider>\n            <p mat-list-item class=\"m-2 badge badge-info\"> funds Module - early loaded </p>\n\n            <a mat-list-item routerLink=\"/fund-module/get-all/\">\n                <mat-icon>account_balance</mat-icon>\n                <span>Fund Maintenance</span></a>\n            <!-- <a mat-list-item  routerLink=\"/fund-module/add-fund/\">fund-module/add-fund</a> -->\n\n            <mat-divider></mat-divider>\n            <p mat-list-item class=\"m-2 badge badge-info\"> Users Module - lazy load </p>\n            <a mat-list-item routerLink=\"/user-module/\">View Users</a>\n            <!-- <a mat-list-item routerLink=\"/user-module/org-chart\">Org Chart</a> -->\n\n            <mat-divider></mat-divider>\n            <p mat-list-item class=\"m-2 badge badge-info\"> FOF </p>\n            <a mat-list-item routerLink=\"/fund-module/fof\">View FOF</a>\n\n            <!-- <mat-divider></mat-divider>\n            <button mat-raised-button  class=\"m-2\" (click)=\"this.router.navigate(['fundmtn'])\">\n                    <mat-icon>account_balance</mat-icon>\n                    <span>Fund Maintenance</span>\n            </button> -->\n\n            <mat-divider></mat-divider>\n            <button  mat-raised-button class=\"m-2\" [routerLink]= \"['rpt']\">\n                    <mat-icon>insert_drive_file</mat-icon>\n                    <span>Report</span>\n            </button>\n            <mat-divider></mat-divider>\n\n        </mat-nav-list>\n\n    </mat-sidenav>\n\n    <!-- MAT Tool Bar -->\n    <mat-toolbar color=\"primary\" class=\"sticky-top\">\n\n        <!-- MAT tool bar row - 1 -->\n        <mat-toolbar-row>\n\n            <!-- hamburger -->\n            <button class=\"menu-button\" mat-icon-button (click)=\"start.open('mouse')\">\n                <mat-icon>menu</mat-icon>\n            </button>\n\n            <!-- title -->\n            <button mat-icon-button color=\"accent\" routerLink= \"home\" *ngIf=\"(isLoggedIn$ | async)\">\n                <mat-icon>home</mat-icon>\n            </button>\n            <h2 class=\"text-monospace\"> Fund Allocation & Calculation Tool</h2>\n            <div class=\"container ml-4\" *ngIf=\"isLoggedIn$ | async\">\n                <div class=\"row justify-content \">\n                    <button mat-raised-button color=\"accent\" (click)=\"this.router.navigate(['fundmtn'])\">\n                        <mat-icon>account_balance</mat-icon>\n                        <span>Fund Maintenance</span>\n                    </button>\n\n                    <button mat-raised-button color=\"accent\" class=\"ml-4\" [routerLink]= \"['rpt']\">\n                        <mat-icon>insert_drive_file</mat-icon>\n                        <span>Report</span>\n                    </button>\n                </div>\n            </div>\n            <!-- menu option -->\n            <div class=\"ml-auto\" >\n\n                <!-- more Option button-->\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n\n                <mat-menu #menu=\"matMenu\">\n                    <button mat-menu-item>\n                        <mat-icon>dashboard</mat-icon><span>Admin</span>\n                    </button>\n                    <button mat-menu-item (click)=\"this.router.navigate(['login'])\" *ngIf=\"!(isLoggedIn$ | async)\">\n                        <mat-icon>face</mat-icon><span>Login</span>\n                    </button>\n                    <button mat-menu-item (click)=\"logout()\" *ngIf=\"(isLoggedIn$ | async)\">\n                        <mat-icon>power_settings_new</mat-icon><span>Logout</span>\n                    </button>\n                    <button mat-menu-item>\n                        <mat-icon>info</mat-icon><span>About TACT</span>\n                    </button>\n                </mat-menu>\n\n            </div>\n\n        </mat-toolbar-row>\n        <!-- <mat-toolbar-row>\n                <span>Custom Toolbar</span>\n        </mat-toolbar-row> -->\n\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n\n\n\n</mat-sidenav-container>\n\n<p-dialog header=\"About Tact\" [(visible)]=\"display\" [style]=\"{width: '300px'}\"\n[contentStyle]=\"{'overflow':'visible'}\" [transitionOptions]=\"'2ms'\">\n        Version : 6.0\n</p-dialog>"

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
/* harmony import */ var _SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SERVICE/auth-service.service */ "./src/app/SERVICE/auth-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/about.component */ "./src/app/common/about.component.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(authSrv, router, store, dialog) {
        this.authSrv = authSrv;
        this.router = router;
        this.store = store;
        this.dialog = dialog;
        this.title = 'TACT';
    }
    AppComponent.prototype.ngOnInit = function () {
        //transform one Obs to another.
        //A. service approach
        //  this.isLoggedIn$ = this.authSrv.user$.pipe(
        //    map (user => {console.log(user); return user !==  UNKNOWN_USER; })
        //    ); 
        //B. store approach
        this.isLoggedIn$ = this.store
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
            //even if userState is updated, authState will be subscribed again.. :( --> use selector rather than subscribing store
            console.log('Store Subcription ran ');
            return state.authState.isLoggedIn;
        }));
        //.subscribe(noop);
    };
    AppComponent.prototype.logout = function () {
        this.authSrv.logout();
    };
    AppComponent.prototype.about = function () {
        console.log('The dialog is opened');
        // this.dialogRef = this.dialog.open(AboutComponent, {
        //   data: { version: '6.0.0' }
        //   , height: '400px'
        //   , width: '600px'
        // });
        // this.dialog.afterAllClosed.subscribe(result => console.log('diallog data after close : ', result))
        var dialogRef = this.dialog.open(_common_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], {
            width: '400px',
            data: { version: '6.0.0' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.effects.ts":
/*!********************************!*\
  !*** ./src/app/app.effects.ts ***!
  \********************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");



var AppEffects = /** @class */ (function () {
    function AppEffects(actions$) {
        this.actions$ = actions$;
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], AppEffects);
    return AppEffects;
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_fund_maintenance_fund_maintenance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/fund-maintenance/fund-maintenance.component */ "./src/app/home/fund-maintenance/fund-maintenance.component.ts");
/* harmony import */ var _home_report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/report/report.component */ "./src/app/home/report/report.component.ts");
/* harmony import */ var _home_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home/home.component */ "./src/app/home/home/home.component.ts");
/* harmony import */ var _home_fund_maintenance_fund_edit_fund_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/fund-maintenance/fund-edit/fund-edit.component */ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.ts");
/* harmony import */ var _FEATURES_fund_module_fund_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FEATURES/fund-module/fund.module */ "./src/app/FEATURES/fund-module/fund.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.effects */ "./src/app/app.effects.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");
/* harmony import */ var _ngprime_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ngprime.module */ "./src/app/ngprime.module.ts");
/* harmony import */ var _common_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./common/about.component */ "./src/app/common/about.component.ts");













 //eagerly loaded module











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_fund_maintenance_fund_maintenance_component__WEBPACK_IMPORTED_MODULE_9__["FundMaintenanceComponent"],
                _home_report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
                _home_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _home_fund_maintenance_fund_edit_fund_edit_component__WEBPACK_IMPORTED_MODULE_12__["FundEditComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"], _common_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"]
                //PaginatorComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _ngprime_module__WEBPACK_IMPORTED_MODULE_23__["PrimeNGModule"],
                _FEATURES_fund_module_fund_module__WEBPACK_IMPORTED_MODULE_13__["FundModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_15__["TactCommonModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_17__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_17__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_18__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__["EffectsModule"].forRoot([_app_effects__WEBPACK_IMPORTED_MODULE_21__["AppEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('authState', _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_22__["authReducer"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_common_about_component__WEBPACK_IMPORTED_MODULE_24__["AboutComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-gaurd.guard.ts":
/*!*************************************!*\
  !*** ./src/app/auth-gaurd.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGaurdGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGaurdGuard", function() { return AuthGaurdGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SERVICE/auth-service.service */ "./src/app/SERVICE/auth-service.service.ts");



var AuthGaurdGuard = /** @class */ (function () {
    function AuthGaurdGuard(authSrv) {
        this.authSrv = authSrv;
    }
    AuthGaurdGuard.prototype.canActivate = function (next, state) {
        // return this.authSrv.isAuthorized();
        return this.authSrv.isToken();
    };
    AuthGaurdGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGaurdGuard);
    return AuthGaurdGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.actions.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.actions.ts ***!
  \**************************************/
/*! exports provided: AuthActionTypes, LoginAction, LogoutAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAction", function() { return LoginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutAction", function() { return LogoutAction; });
//constants
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["Login"] = "[Login] Action";
    AuthActionTypes["Logout"] = "[Logout] Action";
})(AuthActionTypes || (AuthActionTypes = {}));
//Actions
//1. Login Action class
var LoginAction = /** @class */ (function () {
    function LoginAction(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.Login;
    }
    return LoginAction;
}());

//2. Login Action class
var LogoutAction = /** @class */ (function () {
    function LogoutAction() {
        this.type = AuthActionTypes.Logout;
        //constructor( private payload : AuthResponse ){}
    }
    return LogoutAction;
}());

//----------------------------------
// //2. state
// export type AuthState = {
//   isLoggedIn: boolean;
//   currentUser: string;
//   jwt : string;
// }
// //3. Reducer - updates state when action is dispatch with payload
// const initialState = { isLoggedIn: false, currentUser: undefined, jwt : undefined}
// export function authReducer(state :AuthState = initialState, action) : AuthState {
//   switch(action.type){
//     case AuthActionTypes.Login : return { isLoggedIn : true, currentUser : action.payload.initial, jwt : action.payload.jwt} ;
//     case AuthActionTypes.Logout : return { isLoggedIn : false, currentUser : undefined, jwt : undefined} 
//     default : return state;
//   }
// }


/***/ }),

/***/ "./src/app/auth/auth.reducer.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.reducer.ts ***!
  \**************************************/
/*! exports provided: initialState, reducer, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/auth.actions.ts");

var initialState = {};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        default:
            return state;
    }
}
//3. Reducer - updates state when action is dispatch with payload
var initialState1 = { isLoggedIn: false, currentUser: undefined, jwt: undefined };
function authReducer(state, action) {
    if (state === void 0) { state = initialState1; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Login: return { isLoggedIn: true, currentUser: action.payload.initial, jwt: action.payload.jwt };
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].Logout: return { isLoggedIn: false, currentUser: undefined, jwt: undefined };
        default: return state;
    }
}


/***/ }),

/***/ "./src/app/auth/login/login.RF.component.html":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login.RF.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"login-page border b-4 border-primary\">\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-content>\n\n        <p>\n            Welcome to the Fund Allocation and calculation Tool. This Application is for authorized user only.\n            Activity in the system is tracked.\n        </p>\n\n        <mat-divider></mat-divider>\n\n        <form (ngSubmit)=\"loginRF()\" class=\"login-form\" autocomplete=\"off\" novalidate [formGroup]=\"loginReactiveForm\">\n\n\n            <div *ngIf=\"inProgress\">\n                <app-progress-bar [message]=\"'authenticating...'\" class=\"progress-comp\" bgColor=\"#49f232\" color=\"blue\"\n                    width=\"1px\"></app-progress-bar>\n                <mat-divider></mat-divider>\n            </div>\n\n\n            <div [formGroupName]=\"'credentials'\" class=\"login-form\">\n                <mat-form-field class=\"mt-4\">\n                    <input matInput type=\"text\" placeholder=\"Enter Username\" [formControlName]=\"'username'\">\n                </mat-form-field>\n                <span class=\"help-block\" style=\"color: coral; marker-end: 1rem;\" *ngIf=\"loginReactiveForm.get('credentials.username').errors\">\n                    This name is invalid</span>\n\n                <mat-form-field>\n                    <input matInput type=\"password\" placeholder=\"Enter password\" [formControlName]=\"'password'\">\n                    <!-- <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon> -->\n                </mat-form-field>\n                <span class=\"help-block\" style=\"color: coral; marker-end: 1rem;\" *ngIf=\"loginReactiveForm.get('credentials.password').errors\">\n                        invalid password</span>\n            </div>\n\n            <span *ngFor=\"let loc of locations\">\n                <input type=\"radio\" [formControlName]=\"'location'\" [value]=\"loc\"> {{loc}}\n            </span>\n\n\n\n            <mat-divider></mat-divider>\n            <div class=\"d-flex flex-row ml-auto mr-auto\">\n                <button mat-raised-button color=\"primary\" class=\"m-4\" type=\"submit\">Login</button>\n                <button mat-raised-button color=\"warning\" type=\"button\" class=\"m-4\" (click)=\"loginReactiveForm.reset()\">Clear</button>\n            </div>\n\n            <mat-divider></mat-divider>\n\n            Dev mode :\n\n            <div class=\"d-flex flex-row m-2\">\n                <button class=\"btn btn-sm btn-danger d-inline-block\" type=\"button\" (click)=\"setdefaultRF()\">auto-fill</button>\n                <button class=\"btn btn-sm btn-danger d-inline-block\" type=\"button\" (click)=\"patchRF()\">patch</button>\n                <button class=\"btn btn-sm btn-danger d-inline-block\" type=\"button\" (click)=\"addMoreFeilds()\">add Feilds</button>\n            </div>\n            <!-- formArray -->\n            <div formArrayName=\"more-feilds\" class=\"d-flex flex-row flex-wrap\">\n                <div *ngFor=\"let feild of loginReactiveForm.get('more-feilds').controls; let i = index\">\n                    <label for=\"i\">New FormControl  : {{i}} </label>\n                    <input placeholder=\"Enter SomeThing\" type=\"text\" [formControlName]=\"i\" class=\"m-2\">\n                    \n                    <mat-divider></mat-divider>\n                </div>\n                \n            </div>\n        </form>\n\n    </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\n    max-width: 450px;\n    margin: 50px auto 0 auto;\n  }\n  \n  .login-form {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  :host{\n    display : block;\n  }\n  \n  /* .ng-touched .ng-invalid{\n    border: 1px solid red\n  } */\n  \n  /* .ng-invalid{\n    border: 1px solid rgb(214, 76, 76)\n  } */\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUlBOztLQUVHOztFQUVIOztLQUVHIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2Uge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvO1xuICB9XG4gIFxuICAubG9naW4tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgOmhvc3R7XG4gICAgZGlzcGxheSA6IGJsb2NrO1xuICB9XG5cblxuXG4gIC8qIC5uZy10b3VjaGVkIC5uZy1pbnZhbGlke1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZFxuICB9ICovXG5cbiAgLyogLm5nLWludmFsaWR7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxNCwgNzYsIDc2KVxuICB9ICovXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/SERVICE/auth-service.service */ "./src/app/SERVICE/auth-service.service.ts");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.routingAminTriggerEnterLeft = true;
        this.locations = ['IRV', 'HRO'];
        this.inProgress = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log(this.loginForm);
        //RF --> set defualtt  and validator (sync, asyn)
        this.loginReactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'credentials': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("INYLBD4", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), this.customValidator1.bind(this)]),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)], this.customValidator2.bind(this))
            }),
            'location': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("IRV", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'more-feilds': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]) //Form Array - initially blank
        });
        console.log(this.loginReactiveForm);
    };
    LoginComponent.prototype.loginTD = function () {
        this.inProgress = true;
        console.log(this.loginGroup);
        //this.authSrv.authorize(this.loginForm.value.username, this.loginForm.value.password);
        this.authSrv.authorize(this.loginGroup.value.username, this.loginGroup.value.password);
    };
    LoginComponent.prototype.setdefaultTD = function () {
        //setting default values to form
        this.loginForm.setValue({
            lgroup: {
                username: "INYLBD", password: '123456', location: 'IRV'
            }
        });
    };
    LoginComponent.prototype.patchTD = function () {
        //setting default values to form
        this.loginForm.form.patchValue({
            lgroup: {
                username: "INYLBD", location: 'IRV'
            }
        });
    };
    LoginComponent.prototype.loginRF = function () {
        this.inProgress = true;
        //this.authSrv.authorize(this.loginReactiveForm.credentials.value.username, this.loginReactiveForm.value.password);
        //this.authSrv.authorize(this.loginReactiveForm.value.username, this.loginReactiveForm.value.password);
        this.authSrv.authorize(this.loginReactiveForm.get('credentials.username').value, this.loginReactiveForm.get('credentials.password').value);
    };
    LoginComponent.prototype.setdefaultRF = function () {
        this.loginReactiveForm.setValue({
            'credentials': { 'username': "INYLBD", 'password': '123456' },
            'location': 'IRV',
            'more-feilds': { undefined: undefined } //need to fix it
        });
    };
    LoginComponent.prototype.patchRF = function () {
        this.loginReactiveForm.patchValue({
            'location': 'IRV'
        });
    };
    LoginComponent.prototype.addMoreFeilds = function () {
        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.loginReactiveForm.get('more-feilds').push(control);
    };
    //Sync
    LoginComponent.prototype.customValidator1 = function (control) {
        if (control.value === 'INYTEST') {
            return { 'customValidatorKey': true };
        }
        return null;
    };
    //Async
    LoginComponent.prototype.customValidator2 = function (control) {
        var p = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log('validating... password : ', control.value);
                if (control.value == '1234567') {
                    resolve({ 'asynCustomValidator': true });
                }
                else
                    resolve(null);
            }, 3000);
        });
        return p;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loginForm'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lgroup'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"])
    ], LoginComponent.prototype, "loginGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routingAminTriggerEnterLeft'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginComponent.prototype, "routingAminTriggerEnterLeft", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.RF.component.html */ "./src/app/auth/login/login.RF.component.html"),
            animations: [src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_5__["routingAminTriggerEnterLeft"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_SERVICE_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/common/about.component.ts":
/*!*******************************************!*\
  !*** ./src/app/common/about.component.ts ***!
  \*******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(passedData) {
        this.passedData = passedData;
        console.log('AboutComponent contstor called', passedData);
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: "\n    <h1> About TACT</h1>\n\n<mat-dialog-content>\nVersion : {{passedData.version}}\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-raised-button color=\"primary\"[mat-dialog-close]=\"true\">Close</button>\n</mat-dialog-actions>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: TactCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TactCommonModule", function() { return TactCommonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _custom_comp_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-comp/progress-bar/progress-bar.component */ "./src/app/common/custom-comp/progress-bar/progress-bar.component.ts");





var TactCommonModule = /** @class */ (function () {
    function TactCommonModule() {
    }
    TactCommonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_custom_comp_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            exports: [_custom_comp_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_4__["ProgressBarComponent"]]
        })
    ], TactCommonModule);
    return TactCommonModule;
}());



/***/ }),

/***/ "./src/app/common/custom-comp/progress-bar/progress-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/common/custom-comp/progress-bar/progress-bar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-bar{\n    height: 20px;\n    width: 300px;\n    margin: 1rem;\n    border: 2px solid rgb(0, 0, 0);\n}\n\n.loading-progress{\n    height: 100%;\n    width: 0px;\n    -webkit-animation: progress-1 2s infinite ;\n            animation: progress-1 2s infinite ;\n}\n\n@-webkit-keyframes progress-1 {\n    0%{\n        width: 0;\n    }\n\n    100%{\n        width: 296px;\n    }\n}\n\n@keyframes progress-1 {\n    0%{\n        width: 0;\n    }\n\n    100%{\n        width: 296px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL2N1c3RvbS1jb21wL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKOztBQVJBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vY3VzdG9tLWNvbXAvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctYmFye1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLmxvYWRpbmctcHJvZ3Jlc3N7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwcHg7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy0xIDJzIGluZmluaXRlIDtcbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy0xIHtcbiAgICAwJXtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgfVxuXG4gICAgMTAwJXtcbiAgICAgICAgd2lkdGg6IDI5NnB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/common/custom-comp/progress-bar/progress-bar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/common/custom-comp/progress-bar/progress-bar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text text-center text-sm text-muted mt-2\"> {{message}}</div>\n\n<div class=\"loading-bar\" [ngStyle]=\"getborder()\">\n\n  <div class=\"loading-progress\" [ngStyle]=\"getBgColor()\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/common/custom-comp/progress-bar/progress-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/common/custom-comp/progress-bar/progress-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
        this.bgColor = 'aqua';
        this.color = 'black';
        this.borderWidth = '1px';
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        console.log(this.message);
    };
    ProgressBarComponent.prototype.getBgColor = function () {
        //console.log(this.bgColor);
        return {
            "background-color": this.bgColor
        };
    };
    ProgressBarComponent.prototype.getborder = function () {
        return {
            "border-color": this.color,
            "border-width": this.borderWidth
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "message", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "bgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressBarComponent.prototype, "borderWidth", void 0);
    ProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.component.html */ "./src/app/common/custom-comp/progress-bar/progress-bar.component.html"),
            styles: [__webpack_require__(/*! ./progress-bar.component.css */ "./src/app/common/custom-comp/progress-bar/progress-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarComponent);
    return ProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/common/tact.anim-1.ts":
/*!***************************************!*\
  !*** ./src/app/common/tact.anim-1.ts ***!
  \***************************************/
/*! exports provided: TactAnimation, click_trigger, highlightPageNum, div_trigger, compBump, compBumpNoState, routingAminTriggerFadeOut, routingAminTriggerEnterLeft, routingAminTriggerGoUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TactAnimation", function() { return TactAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click_trigger", function() { return click_trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightPageNum", function() { return highlightPageNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div_trigger", function() { return div_trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compBump", function() { return compBump; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compBumpNoState", function() { return compBumpNoState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingAminTriggerFadeOut", function() { return routingAminTriggerFadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingAminTriggerEnterLeft", function() { return routingAminTriggerEnterLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingAminTriggerGoUp", function() { return routingAminTriggerGoUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TactAnimation = /** @class */ (function () {
    function TactAnimation() {
    }
    TactAnimation = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], TactAnimation);
    return TactAnimation;
}());

var click_trigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('clickTrigger', [
    // ...
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        backgroundColor: 'black'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('clicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1,
        backgroundColor: 'rgb(216, 238, 238)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default => clicked', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('clicked => default', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
    ]),
]);
var highlightPageNum = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('highlightPageNum', [
    //state
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('unselected', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        border: '1px solid blue',
        backgroundColor: 'white',
        padding: '6px',
        transform: 'scale(1)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('selected', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        border: '2px solid blue',
        backgroundColor: 'rgb(216, 238, 238)',
        padding: '5px',
    })),
    //transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('unselected => selected', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(20px) scale(1.5)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'rgb(231, 228, 210)', transform: 'translateX(-20px) scale(2)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-20px) scale(1.5)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ backgroundColor: 'rgb(231, 228, 210)', transform: 'translateX(20px) scale(2)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(5)' }))
    ])
]);
var div_trigger = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('divTrigger', [
    // ...
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 1, height: '1px', width: '0',
        backgroundColor: 'red'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('clicked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        opacity: 0.5, height: '1px', width: '100%',
        backgroundColor: 'rgb(29, 208, 231)'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default => clicked', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('clicked => default', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
    ]),
]);
//Comp
var compBump = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('compBump', [
    // ...
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({})),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('bump', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
        backgroundColor: 'rgb(220, 255, 150)',
        border: "3px solid blue"
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('default => bump', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-2rem)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(2rem)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1.2)' }))
    ])
]);
var compBumpNoState = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('compBumpNoState', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'scale(1.5)' }))
    ])
]);
//fadeout
var routingAminTriggerFadeOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routingAminTriggerFadeOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('2s')
    ])
]);
//Enter Left
var routingAminTriggerEnterLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routingAminTriggerEnterLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.1s')
    ])
]);
//Enter Up
var routingAminTriggerGoUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routingAminTriggerGoUp', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
    ])
]);


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-edit/fund-edit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mdW5kLW1haW50ZW5hbmNlL2Z1bmQtZWRpdC9mdW5kLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZnVuZC1tYWludGVuYW5jZS9mdW5kLWVkaXQvZnVuZC1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-edit/fund-edit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"border border-primary p-6 mx-auto my-2\">\n\n  <mat-card-header>\n  <mat-card-title>Edit Fund Details</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content class=\"d-flex\">\n    <mat-form-field appearance=\"outline\" *ngFor=\"let feild of fundFeilds\">\n      <mat-label>{{feild}}</mat-label>\n      <input matInput placeholder=\"Placeholder\">\n    </mat-form-field>\n    <button mat-fab color=\"accent\" class=\"ml-1\">Save</button>\n  </mat-card-content>\n\n\n \n</mat-card>"

/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-edit/fund-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: FundEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundEditComponent", function() { return FundEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FundEditComponent = /** @class */ (function () {
    function FundEditComponent() {
        this.fundFeilds = ['fundNumber', 'acctNumber', 'class', 'symbol'];
    }
    FundEditComponent.prototype.ngOnInit = function () {
    };
    FundEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fund-edit',
            template: __webpack_require__(/*! ./fund-edit.component.html */ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.html"),
            styles: [__webpack_require__(/*! ./fund-edit.component.css */ "./src/app/home/fund-maintenance/fund-edit/fund-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FundEditComponent);
    return FundEditComponent;
}());



/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-maintenance.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-maintenance.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    margin-left: 1rem;\n}\n\ntable {\n    width: 100%;\n  }\n\n.example-detail-row {\n    height: 0;\n  }\n\n.example-element-row td {\n    border-bottom-width: 0;\n  }\n\n.example-element-detail {\n    overflow: hidden;\n    display: flex;\n  }\n\n:host{\n    display: block;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mdW5kLW1haW50ZW5hbmNlL2Z1bmQtbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFNBQVM7RUFDWDs7QUFHQTtJQUNFLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9mdW5kLW1haW50ZW5hbmNlL2Z1bmQtbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbiAgXG4gIFxuICAuZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gIDpob3N0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-maintenance.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-maintenance.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\n\n  <mat-card class=\"example-card border border-primary p-2\">\n    <mat-card-header>\n\n      <mat-card-title>Fund Maintenance</mat-card-title>\n      <mat-card-subtitle>Modify Funds and send for review.</mat-card-subtitle>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <img mat-card-image src=\"\" alt=\"\">\n\n    <mat-card-content >\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Fund Category</mat-label>\n        <input matInput placeholder=\"Placeholder\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"outline\">\n        <mat-label>Fund status</mat-label>\n        <input matInput placeholder=\"Placeholder\">\n      </mat-form-field>\n\n      <button mat-fab color=\"primary\" class=\"ml-1\">GO</button>\n    </mat-card-content>\n\n    <!-- <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions> -->\n\n  </mat-card>\n</div>\n\n\n<div class=\"container-fuild m-4\">\n  <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of displayedColumns\">\n        <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n    </ng-container>\n\n\n    <!-- Expanded Column -->\n    <ng-container matColumnDef=\"expandedDetail\">\n        <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n          <div class=\"example-element-detail\" [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n           <fund-edit></fund-edit>\n          </div>\n        </td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n\n    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" \n    (click)=\"expandedElement = expandedElement === element ? null : element\"\n    class=\"example-element-row\" [class.example-expanded-row]=\"expandedElement === element\"></tr>\n\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr> \n  </table>\n\n  <mat-paginator #paginator1 [length]=\"100\"\n              [pageSize]=\"5\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n\n</div>\n\n<!-- \n\n \n  <ng-container matColumnDef=\"fundNumber\" stickyEnd> \n      <th mat-header-cell *matHeaderCellDef> Fund Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.fundNumber}} </td>\n    </ng-container>\n\n  \n    <ng-container matColumnDef=\"acctNumber\">\n      <th mat-header-cell *matHeaderCellDef> Acct Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.acctNumber}} </td>\n    </ng-container>\n\n   \n    <ng-container matColumnDef=\"class\">\n      <th mat-header-cell *matHeaderCellDef> class </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.class}} </td>\n    </ng-container>\n\n   \n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dstFundCode\">\n      <th mat-header-cell *matHeaderCellDef> DST Fund Code </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dstFundCode}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dstAcctNumber\">\n      <th mat-header-cell *matHeaderCellDef> DST Acct Number </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dstAcctNumber}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef> category </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"submittedBy\">\n      <th mat-header-cell *matHeaderCellDef> submitted By </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.submittedBy}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"submittedOn\">\n      <th mat-header-cell *matHeaderCellDef> submitted On </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.submittedOn}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"approvedBy\">\n      <th mat-header-cell *matHeaderCellDef> approved By </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.approvedBy}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"approvedOn\">\n      <th mat-header-cell *matHeaderCellDef> approved On </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.approvedOn}} </td>\n    </ng-container>\n -->"

/***/ }),

/***/ "./src/app/home/fund-maintenance/fund-maintenance.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/home/fund-maintenance/fund-maintenance.component.ts ***!
  \*********************************************************************/
/*! exports provided: FundMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundMaintenanceComponent", function() { return FundMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_MODEL_FundMaintainance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/MODEL/FundMaintainance */ "./src/app/MODEL/FundMaintainance.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/tact.anim-1 */ "./src/app/common/tact.anim-1.ts");







var FundMaintenanceComponent = /** @class */ (function () {
    function FundMaintenanceComponent() {
        this.routingAminTriggerGoUp = true;
        this.displayedColumns = ['fundNumber', 'acctNumber', 'class', 'symbol', 'dstFundCode', 'dstAcctNumber', 'category', 'submittedBy', 'submittedOn', 'approvedBy', 'approvedOn'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](src_app_MODEL_FundMaintainance__WEBPACK_IMPORTED_MODULE_4__["ELEMENT_DATA"]);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
    }
    FundMaintenanceComponent.prototype.ngOnInit = function () {
    };
    FundMaintenanceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routingAminTriggerGoUp'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FundMaintenanceComponent.prototype, "routingAminTriggerGoUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("paginator1"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], FundMaintenanceComponent.prototype, "paginator", void 0);
    FundMaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fund-maintenance',
            template: __webpack_require__(/*! ./fund-maintenance.component.html */ "./src/app/home/fund-maintenance/fund-maintenance.component.html"),
            animations: [
                src_app_common_tact_anim_1__WEBPACK_IMPORTED_MODULE_6__["routingAminTriggerGoUp"],
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./fund-maintenance.component.css */ "./src/app/home/fund-maintenance/fund-maintenance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FundMaintenanceComponent);
    return FundMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/home/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n    width: 350px\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICAgIHdpZHRoOiAzNTBweFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <!-- <div class=\"row border border-primary mt-4 p-2\">\n                <div class=\"col-6\">\n                        <div class=\"card\">\n                                <div class=\"card-header\">\n                                  American Fund\n                                </div>\n                                <div class=\"card-body\">\n                                  <h5 class=\"card-title\">Unprocessed Target Date</h5>\n                                  <p class=\"card-text\">03-march-2019</p>\n                                  <button type=\"button\" class=\"btn btn-outline-primary\">Process American Fund</button>\n                                </div>\n                              </div>\n                        \n                </div>\n                <div class=\"col-6\">\n                        <div class=\"card\">\n                                <div class=\"card-header\">\n                                  AFIS Fund\n                                </div>\n                                <div class=\"card-body\">\n                                  <h5 class=\"card-title\">Unprocessed Target Date</h5>\n                                  <p class=\"card-text\">03-march-2019</p>\n                                  <button type=\"button\" class=\"btn btn-outline-primary\">Process AFIS Fund</button>\n                                </div>\n                              </div>\n                </div>\n               \n        </div> -->\n\n\n    <div class=\"row border border-grey mt-4 p-2\">\n        <div class=\"col\">\n\n\n            <mat-horizontal-stepper [linear]=\"isLinear\" #stepper >\n\n                <mat-step [stepControl]=\"firstFormGroup\">\n                    <ng-template matStepLabel>American Fund</ng-template>\n                    <div class=\"card mt-4\">\n                        <!-- <div class=\"card-header\">American Fund</div> -->\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Unprocessed Target Date</h5>\n                            <p class=\"card-text\">03-march-2019</p>\n                            <button mat-raised-button color=\"primary\">Process American Fund</button>\n                        </div>\n                    </div>\n                </mat-step>\n\n\n                <mat-step [stepControl]=\"secondFormGroup\">\n                    <ng-template matStepLabel>AFIS Fund</ng-template>\n\n                    <div class=\"card mt-4\">\n                        <!-- <div class=\"card-header\">AFIS Fund</div> -->\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Unprocessed Target Date</h5>\n                            <p class=\"card-text\">03-march-2019</p>\n                            <button mat-raised-button color=\"primary\">Process AFIS Fund</button>\n                        </div>\n                    </div>\n                    <!-- <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button matStepperNext>Next</button>\n                    </div> -->\n\n                </mat-step>\n\n\n                <mat-step>\n                    <ng-template matStepLabel>status</ng-template>\n                    Fund Processed\n                    <!-- <div>\n                    <button mat-button matStepperPrevious>Back</button>\n                    <button mat-button (click)=\"stepper.reset()\">Reset</button>\n                  </div> -->\n                </mat-step>\n            </mat-horizontal-stepper>\n\n        </div>\n    </div>\n\n    <div class=\"row border border-grey mt-4 p-4\">\n        <div class=\"col\">\n\n            <!-- <mat-accordion>\n                                <mat-expansion-panel>\n                                      <mat-expansion-panel-header>\n                                        <mat-panel-title>View Previous Fund Allocation</mat-panel-title>\n                                        <mat-panel-description>T</mat-panel-description>\n                                      </mat-expansion-panel-header> -->\n\n            <div class=\"text-uppercase font-weight-normal text-left\">View Previous Fund Allocation</div>\n            <mat-form-field class=\"d-block\">\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                <mat-datepicker #picker></mat-datepicker>\n            </mat-form-field>\n\n            <button mat-raised-button color=\"primary\" >View Allocation</button>\n            <!--                                   \n                                </mat-expansion-panel>\n                            </mat-accordion>\n                                   -->\n        </div>\n    </div>\n\n    <div class=\"row border border-grey mt-4 p-4\">\n        <div class=\"col\">\n            <div class=\"text-uppercase font-weight-normal text-left\">Current Allocation by Underlying Fund</div>\n            <button mat-raised-button color=\"primary\" >Download American Fund</button>\n            \n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/report/report.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/report/report.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/report/report.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/report/report.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-select placeholder=\"Select report\">\n      <mat-option>POC Report</mat-option>\n      <mat-option>Flow Analysis Reports</mat-option>\n      <mat-option>Rebalance Report</mat-option>\n    </mat-select>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/home/report/report.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/home/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/home/report/report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/ngprime.module.ts":
/*!***********************************!*\
  !*** ./src/app/ngprime.module.ts ***!
  \***********************************/
/*! exports provided: PrimeNGModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimeNGModule", function() { return PrimeNGModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/panel */ "./node_modules/primeng/panel.js");
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_panel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_11__);












var PrimeNGModule = /** @class */ (function () {
    function PrimeNGModule() {
    }
    PrimeNGModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [primeng_splitbutton__WEBPACK_IMPORTED_MODULE_2__["SplitButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                primeng_treetable__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"], primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"]],
            exports: [primeng_splitbutton__WEBPACK_IMPORTED_MODULE_2__["SplitButtonModule"], primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"], primeng_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_5__["PanelModule"], primeng_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"], primeng_multiselect__WEBPACK_IMPORTED_MODULE_7__["MultiSelectModule"],
                primeng_treetable__WEBPACK_IMPORTED_MODULE_8__["TreeTableModule"], primeng_chart__WEBPACK_IMPORTED_MODULE_9__["ChartModule"], primeng_card__WEBPACK_IMPORTED_MODULE_10__["CardModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_11__["DialogModule"]]
        })
    ], PrimeNGModule);
    return PrimeNGModule;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.reducer */ "./src/app/auth/auth.reducer.ts");


var reducers = {
    authState: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_1__["authReducer"] //reducer is mapped with state
};
var metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lekhrajdinkar/Documents/GitHub/MEAN/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map