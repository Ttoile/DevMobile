(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addtodo-addtodo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addtodo/addtodo.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addtodo/addtodo.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Add an item'\"></app-header>\n\n<ion-content>\n  <form (ngSubmit)=\"addTodo()\" #addListForm=\"ngForm\">\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label position=\"stacked\">Title <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input required id=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"title\" #ctrlTitle=\"ngModel\">\n        </ion-input>\n        <ion-text [hidden]=\"ctrlTitle.valid || ctrlTitle.pristine || name\" color=\"danger\">Title is required</ion-text>\n      </ion-item>\n    </ion-list>\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\" [disabled]=\"!addListForm.valid\">\n        Add item</ion-button>\n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addtodo/addtodo-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/addtodo/addtodo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AddtodoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPageRoutingModule", function() { return AddtodoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addtodo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addtodo.page */ "./src/app/addtodo/addtodo.page.ts");




const routes = [
    {
        path: '',
        component: _addtodo_page__WEBPACK_IMPORTED_MODULE_3__["AddtodoPage"]
    },
    {
        path: ':liste',
        component: _addtodo_page__WEBPACK_IMPORTED_MODULE_3__["AddtodoPage"]
    }
];
let AddtodoPageRoutingModule = class AddtodoPageRoutingModule {
};
AddtodoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddtodoPageRoutingModule);



/***/ }),

/***/ "./src/app/addtodo/addtodo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addtodo/addtodo.module.ts ***!
  \*******************************************/
/*! exports provided: AddtodoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPageModule", function() { return AddtodoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addtodo-routing.module */ "./src/app/addtodo/addtodo-routing.module.ts");
/* harmony import */ var _addtodo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtodo.page */ "./src/app/addtodo/addtodo.page.ts");
/* harmony import */ var _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../small-components/header/header.module */ "./src/app/small-components/header/header.module.ts");








let AddtodoPageModule = class AddtodoPageModule {
};
AddtodoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addtodo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddtodoPageRoutingModule"],
            _small_components_header_header_module__WEBPACK_IMPORTED_MODULE_7__["HeaderModule"]
        ],
        declarations: [_addtodo_page__WEBPACK_IMPORTED_MODULE_6__["AddtodoPage"]]
    })
], AddtodoPageModule);



/***/ }),

/***/ "./src/app/addtodo/addtodo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addtodo/addtodo.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHRvZG8vYWRkdG9kby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addtodo/addtodo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addtodo/addtodo.page.ts ***!
  \*****************************************/
/*! exports provided: AddtodoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtodoPage", function() { return AddtodoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/todoslist.service */ "./src/app/services/todoslist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AddtodoPage = class AddtodoPage {
    constructor(listService, location) {
        this.listService = listService;
        this.location = location;
    }
    ngOnInit() {
    }
    addTodo() {
        let item = { title: this.title, isDone: false };
        this.listService.add(this.listeID, item);
        this.location.back();
        // this.router.navigate(['todoslist']);
    }
};
AddtodoPage.ctorParameters = () => [
    { type: _services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__["TodoslistService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
AddtodoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addtodo',
        template: __webpack_require__(/*! raw-loader!./addtodo.page.html */ "./node_modules/raw-loader/index.js!./src/app/addtodo/addtodo.page.html"),
        styles: [__webpack_require__(/*! ./addtodo.page.scss */ "./src/app/addtodo/addtodo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_todoslist_service__WEBPACK_IMPORTED_MODULE_2__["TodoslistService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], AddtodoPage);



/***/ }),

/***/ "./src/app/services/authentification.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/authentification.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.getLoggedInName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // signup(email: string, password: string) {
    //   firebase
    //       .auth()
    //       .createUserWithEmailAndPassword(email, password)
    //       .then(value => {
    //         console.log('Success!', value);
    //       })
    //       .catch(err => {
    //         console.log('Something went wrong:',err.message);
    //       });
    //   this.router.navigate(['/login']);
    // }
    signup(email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .createUserWithEmailAndPassword(email, password);
    }
    login(email, password) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signInWithEmailAndPassword(email, password)
            .finally(() => { this.getLoggedInName.emit(this.getUsername()); });
    }
    logout() {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]()
            .signOut();
        if (this.router.url !== '/login')
            this.router.navigate(['/login']);
    }
    getUsername() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.email : "";
    }
    getUserID() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid : "";
    }
    isConnected() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser ? true : false;
    }
    resetPassword(email) {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().sendPasswordResetEmail(email);
    }
    sendEmailVerif() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.sendEmailVerification();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AuthService.prototype, "getLoggedInName", void 0);
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/todoslist.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/todoslist.service.ts ***!
  \***********************************************/
/*! exports provided: TodoslistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoslistService", function() { return TodoslistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TodoslistService = class TodoslistService {
    constructor(db) {
        this.db = db;
    }
    // /!\ ATTENTION /!\ ce setUp doit absolument être appelé quand on va se servir de todolist pour une nouvelle liste (exemple: dans le constructeur de todolist.page.ts)
    setUp(listeid) {
        this.listID = listeid;
        this.listDocObs = this.db.collection("list").doc(this.listID).valueChanges();
        this.listDocObs.subscribe(res => this.listDoc = res);
        this.todosCollection = this.db.collection("list").doc(listeid).collection("todos");
        this.todos = this.todosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    get(id) {
        return this.todos;
    }
    add(listeid, todo) {
        return this.todosCollection.add(todo);
    }
    addContributor(uid, write) {
        let writerIDS = this.listDoc.writerIDS;
        let readerIDS = this.listDoc.readerIDS;
        if (writerIDS.indexOf(uid) == -1 && readerIDS.indexOf(uid) == -1 && this.listDoc.ownerID !== uid) {
            if (write) {
                writerIDS.push(uid);
                this.db.collection("list").doc(this.listID).update({ writerIDS });
                return true;
            }
            else {
                readerIDS.push(uid);
                this.db.collection("list").doc(this.listID).update({ readerIDS });
                return true;
            }
        }
        else {
            return false;
        }
    }
    getContributorsRead() {
        return this.listDoc.readerIDS;
    }
    getContributorsWrite() {
        return this.listDoc.writerIDS;
    }
    getContributors() {
        return this.listDoc.writerIDS.concat(this.listDoc.readerIDS);
    }
    removeContributor(contrib) {
        let writerIDS = this.listDoc.writerIDS;
        let readerIDS = this.listDoc.readerIDS;
        if (writerIDS.indexOf(contrib) != -1) {
            writerIDS.splice(writerIDS.indexOf(contrib), 1);
            this.db.collection("list").doc(this.listID).update({ writerIDS });
        }
        else {
            readerIDS.splice(readerIDS.indexOf(contrib), 1);
            this.db.collection("list").doc(this.listID).update({ readerIDS });
        }
    }
    update(todo) {
        let tmp = todo;
        tmp.isDone = !tmp.isDone;
        this.todosCollection.doc(todo.id).update(tmp);
    }
    delete(listeid, todo) {
        return this.todosCollection.doc(todo.id).delete();
    }
    getListDoc() {
        return this.listDocObs;
    }
};
TodoslistService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
TodoslistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], TodoslistService);



/***/ })

}]);
//# sourceMappingURL=addtodo-addtodo-module-es2015.js.map