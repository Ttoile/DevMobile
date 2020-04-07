(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-list-add-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-list/add-list.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-list/add-list.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Add a new list'\"></app-header>\n\n<ion-content>\n  <form (ngSubmit)=\"addList()\" #addListForm=\"ngForm\">\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">Title <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required id=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"title\" #ctrlTitle=\"ngModel\">\n        </ion-input>\n        <ion-text [hidden]=\"ctrlTitle.valid || ctrlTitle.pristine\" color=\"danger\">Title is required</ion-text>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!addListForm.valid\">\n        Add list</ion-button>\n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-list/add-list-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-list/add-list-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListPageRoutingModule", function() { return AddListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-list.page */ "./src/app/add-list/add-list.page.ts");




var routes = [
    {
        path: '',
        component: _add_list_page__WEBPACK_IMPORTED_MODULE_3__["AddListPage"]
    }
];
var AddListPageRoutingModule = /** @class */ (function () {
    function AddListPageRoutingModule() {
    }
    AddListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddListPageRoutingModule);
    return AddListPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/add-list/add-list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-list/add-list.module.ts ***!
  \*********************************************/
/*! exports provided: AddListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListPageModule", function() { return AddListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-list-routing.module */ "./src/app/add-list/add-list-routing.module.ts");
/* harmony import */ var _add_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-list.page */ "./src/app/add-list/add-list.page.ts");
/* harmony import */ var _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../small-components/header/header.module */ "./src/app/small-components/header/header.module.ts");








var AddListPageModule = /** @class */ (function () {
    function AddListPageModule() {
    }
    AddListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddListPageRoutingModule"],
                _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
            ],
            declarations: [_add_list_page__WEBPACK_IMPORTED_MODULE_6__["AddListPage"]]
        })
    ], AddListPageModule);
    return AddListPageModule;
}());



/***/ }),

/***/ "./src/app/add-list/add-list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-list/add-list.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1saXN0L2FkZC1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-list/add-list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-list/add-list.page.ts ***!
  \*******************************************/
/*! exports provided: AddListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListPage", function() { return AddListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_collec_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/collec-list.service */ "./src/app/services/collec-list.service.ts");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");





var AddListPage = /** @class */ (function () {
    function AddListPage(listService, router, authServ) {
        this.listService = listService;
        this.router = router;
        this.authServ = authServ;
    }
    AddListPage.prototype.ngOnInit = function () {
    };
    AddListPage.prototype.addList = function () {
        var list = { title: this.title, ownerID: this.authServ.getUserID(), readerIDS: [], writerIDS: [] };
        this.listService.addList(list);
        this.router.navigate(['listslist']);
    };
    AddListPage.ctorParameters = function () { return [
        { type: _services_collec_list_service__WEBPACK_IMPORTED_MODULE_3__["CollecList"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    AddListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-list',
            template: __webpack_require__(/*! raw-loader!./add-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-list/add-list.page.html"),
            styles: [__webpack_require__(/*! ./add-list.page.scss */ "./src/app/add-list/add-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_collec_list_service__WEBPACK_IMPORTED_MODULE_3__["CollecList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AddListPage);
    return AddListPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-list-add-list-module-es5.js.map