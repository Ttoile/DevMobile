(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todoslist-todoslist-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/todoslist/todoslist.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todoslist/todoslist.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"this.listTitle\"></app-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let todo of todos\">\n      <ion-item>\n        <ion-checkbox slot=\"start\" checked=\"{{todo.isDone}}\" [disabled]=\"canAddTodo()?false:true\" (click)=\"update(todo)\"></ion-checkbox>\n        <ion-label>\n          <h2>{{ todo.title }}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"delete(todo)\">\n          <ion-icon slot=\"top\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <section>\n  <ion-button expand=\"block\" [routerLink]=\"['/addtodo']\" *ngIf=\"canAddTodo()\">Add a New Todo</ion-button>\n  <ion-button expand=\"block\" (click)=\"openContributorManager()\" *ngIf=\"isOwner()\">Manage contributor</ion-button>\n  <!-- <ion-button expand=\"block\" (click)=\"getTitle()\">DEBUG</ion-button> -->\n  </section>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/todoslist/todoslist-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/todoslist/todoslist-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TodoslistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoslistPageRoutingModule", function() { return TodoslistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _todoslist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoslist.page */ "./src/app/todoslist/todoslist.page.ts");
/* harmony import */ var _contributor_manager_contributor_manager_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contributor-manager/contributor-manager.module */ "./src/app/contributor-manager/contributor-manager.module.ts");





const routes = [
    {
        path: '',
        component: _todoslist_page__WEBPACK_IMPORTED_MODULE_3__["TodoslistPage"]
    },
    {
        path: ':param',
        component: _todoslist_page__WEBPACK_IMPORTED_MODULE_3__["TodoslistPage"]
    }
];
let TodoslistPageRoutingModule = class TodoslistPageRoutingModule {
};
TodoslistPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _contributor_manager_contributor_manager_module__WEBPACK_IMPORTED_MODULE_4__["ContributorManagerPageModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TodoslistPageRoutingModule);



/***/ }),

/***/ "./src/app/todoslist/todoslist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/todoslist/todoslist.module.ts ***!
  \***********************************************/
/*! exports provided: TodoslistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoslistPageModule", function() { return TodoslistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _todoslist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todoslist-routing.module */ "./src/app/todoslist/todoslist-routing.module.ts");
/* harmony import */ var _todoslist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoslist.page */ "./src/app/todoslist/todoslist.page.ts");
/* harmony import */ var _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../small-components/header/header.module */ "./src/app/small-components/header/header.module.ts");








let TodoslistPageModule = class TodoslistPageModule {
};
TodoslistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _todoslist_routing_module__WEBPACK_IMPORTED_MODULE_5__["TodoslistPageRoutingModule"],
            _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_todoslist_page__WEBPACK_IMPORTED_MODULE_6__["TodoslistPage"]]
    })
], TodoslistPageModule);



/***/ }),

/***/ "./src/app/todoslist/todoslist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/todoslist/todoslist.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG9zbGlzdC90b2Rvc2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/todoslist/todoslist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/todoslist/todoslist.page.ts ***!
  \*********************************************/
/*! exports provided: TodoslistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoslistPage", function() { return TodoslistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todoslist.service */ "./src/app/services/todoslist.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contributor_manager_contributor_manager_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contributor-manager/contributor-manager.page */ "./src/app/contributor-manager/contributor-manager.page.ts");
/* harmony import */ var _services_authentification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentification.service */ "./src/app/services/authentification.service.ts");







let TodoslistPage = class TodoslistPage {
    constructor(listService, authServ, route, contributorManagerController) {
        this.listService = listService;
        this.authServ = authServ;
        this.route = route;
        this.contributorManagerController = contributorManagerController;
    }
    // TODO : Idea, here prepare the TodoslistService by sending it the LIST ID with a function that set it up
    ngOnInit() {
        this.listID = this.route.snapshot.paramMap.get('param');
        this.listService.setUp(this.listID); // ESSENTIEL (Go voir les sources)
        this.listService.getListDoc().subscribe(res => {
            this.listTitle = res.title;
            this.listOwner = res.ownerID;
            this.isWriter = res.writerIDS.indexOf(this.authServ.getUserID()) !== -1;
            this.isReader = res.readerIDS.indexOf(this.authServ.getUserID()) !== -1;
        });
        this.listService.get(this.listID).subscribe(res => this.todos = res);
    }
    delete(todo) {
        this.listService.delete(this.listID, todo);
    }
    update(todo) {
        this.listService.update(todo);
    }
    debug() {
        // console.log(this.listService.getListTitle());
    }
    canAddTodo() {
        return this.isOwner() || (this.isWriter);
    }
    isOwner() {
        return this.authServ.getUserID() == this.listOwner;
    }
    openContributorManager() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.contributorManagerController.create({
                component: _contributor_manager_contributor_manager_page__WEBPACK_IMPORTED_MODULE_5__["ContributorManagerPage"]
            });
            return yield modal.present();
        });
    }
};
TodoslistPage.ctorParameters = () => [
    { type: _services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__["TodoslistService"] },
    { type: _services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
TodoslistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todoslist',
        template: __webpack_require__(/*! raw-loader!./todoslist.page.html */ "./node_modules/raw-loader/index.js!./src/app/todoslist/todoslist.page.html"),
        styles: [__webpack_require__(/*! ./todoslist.page.scss */ "./src/app/todoslist/todoslist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__["TodoslistService"], _services_authentification_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], TodoslistPage);



/***/ })

}]);
//# sourceMappingURL=todoslist-todoslist-module-es2015.js.map